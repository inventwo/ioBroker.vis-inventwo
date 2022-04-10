vis.binds["vis-inventwo-widgets"] = {
    universalMultiButton: function (el, data, type) {

        if (vis.editMode) {
            setTimeout(function () {
                vis.binds["vis-inventwo"].updateUniversalDataFields();
            }, 100);

            $(el).parent().on("mouseup click", function () {
                setTimeout(function () {
                    vis.binds["vis-inventwo"].updateUniversalDataFields();
                }, 100);
            });

            data = vis.binds["vis-inventwo-helper"].getDatapointsValues(data);
        }

        let datapoints = [];

        //Create Button
        let html = vis.binds["vis-inventwo-components"].getButton(vis.binds["vis-inventwo-helper"].getButtonValues(data, type, false), [type, data.iUniversalWidgetType.toLowerCase()], data.iContentType, data);
        $(el).html(html);

        //Bind events
        let widgetType = data.iUniversalWidgetType;
        if (widgetType === "Switch") {
            vis.binds["vis-inventwo"].handleToggle($(el).parent(), data.oid, data.iValueType, data.iValueTrue, data.iValueFalse);
        }
        else if (widgetType === "State") {
            vis.binds["vis-inventwo"].handleState($(el).parent(), data, type);
        }
        else if (widgetType === "HTTP") {
            vis.binds["vis-inventwo"].sendHttp($(el).parent(), data, type);
        }
        else if (widgetType === "Navigation" || widgetType === "ViewInPopup") {
            vis.binds["vis-inventwo"].handleNavigation($(el).parent(), data, type);
        }
        else if (widgetType === "IncreaseDecreaseValue") {
            vis.binds["vis-inventwo"].increaseDecreaseValue($(el).parent(), data, type);
        }

        if (["Switch", "Background"].includes(widgetType)) {
            datapoints.push(data.attr("oid"));
            vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
                if (newVal != oldVal) {
                    vis.binds["vis-inventwo-helper"].updateButton($(el).children(), data, type);
                }
            });
        }

        if (type === "multi") {
            for (let index = 1; index <= data.iUniversalValueCount; index++) {
                if (widgetType != "Navigation" || (widgetType == "Navigation" && data.attr("iCheckType" + index) === "iCheckDpValue")) {
                    if (!datapoints.includes(data.attr("oid" + index))) {
                        datapoints.push(data.attr("oid" + index));
                        vis.states.bind(data.attr("oid" + index) + ".val", function (e, newVal, oldVal) {
                            if (newVal != oldVal) {
                                vis.binds["vis-inventwo-helper"].updateButton($(el).children(), data, type);
                            }
                        });
                    }
                }
            }
        }

        if (data.iContentType === "clock_analog") {
            vis.binds["vis-inventwo-helper"].getImgColorFilter(data.iImgColorClockFace, data.wid, "clock-face-color-filter");
            vis.binds["vis-inventwo-helper"].getImgColorFilter(data.iImgColorHands, data.wid, "clock-hands-color-filter");
            vis.binds["vis-inventwo-helper"].getImgColorFilter(data.iImgColorHandSecond, data.wid, "clock-hand-second-color-filter");

            setTimeout(function () {

                let date = vis.binds["vis-inventwo-helper"].getTime(data.iClockTimezone);
                let hour = date.hour;
                let minutes = date.minutes;
                let seconds = date.seconds;

                let handHour = $('#' + data.wid + ' .vis-inventwo-clock-analog-hand-hour');
                let handMin = $('#' + data.wid + ' .vis-inventwo-clock-analog-hand-minute');
                let handSec = $('#' + data.wid + ' .vis-inventwo-clock-analog-hand-second');

                if (hour > 12) {
                    hour = hour - 12;
                }

                let h1 = 360 / 12 / 60 * minutes;

                handMin.css("transform", "rotateZ(" + (minutes / 60 * 360) + "deg)");
                handHour.css("transform", "rotateZ(" + (hour / 12 * 360 + h1) + "deg)");
                if (data.iClockShowSeconds == true) {
                    handSec.css("transform", "rotateZ(" + (seconds / 60 * 360) + "deg)");
                }
                else {
                    handSec.css("display", "none");
                }

                setInterval(function () {
                    date = vis.binds["vis-inventwo-helper"].getTime(data.iClockTimezone);
                    hour = date.hour;
                    minutes = date.minutes;
                    seconds = date.seconds;

                    if (hour > 12) {
                        hour = hour - 12;
                    }

                    h1 = 360 / 12 / 60 * minutes;

                    handMin.css("transform", "rotateZ(" + (minutes / 60 * 360) + "deg)");
                    handHour.css("transform", "rotateZ(" + (hour / 12 * 360 + h1) + "deg)");
                    if (data.iClockShowSeconds == true) {
                        handSec.css("transform", "rotateZ(" + (seconds / 60 * 360) + "deg)");
                    }
                }, 1000);


            }, 100);
        }
        else if (data.iContentType === "clock_digital") {
            setTimeout(function () {
                let date = vis.binds["vis-inventwo-helper"].getTime(data.iClockTimezone);
                let hour = date.hour;
                let minutes = date.minutes;
                let seconds = date.seconds;

                let fullTime = ("0" + hour).slice(-2) + ":" + ("0" + minutes).slice(-2);

                if (data.iClockShowSeconds == true) {
                    fullTime += ":" + ("0" + seconds).slice(-2);
                }

                let timeContainer = $('#' + data.wid + ' .vis-inventwo-clock-digital');

                timeContainer.text(fullTime);

                setInterval(function () {
                    date = vis.binds["vis-inventwo-helper"].getTime(data.iClockTimezone);
                    hour = date.hour;
                    minutes = date.minutes;
                    seconds = date.seconds;

                    let fullTime = ("0" + hour).slice(-2) + ":" + ("0" + minutes).slice(-2)
                    if (data.iClockShowSeconds == true) {
                        fullTime += ":" + ("0" + seconds).slice(-2);
                    }
                    timeContainer.text(fullTime);
                }, 1000);
            }, 100);
        }
    },

    radioButtonList: function (el, data) {

        if (vis.editMode) {
            setTimeout(function () {
                vis.binds["vis-inventwo"].updateUniversalDataFields();
            }, 100);

            $(el).parent().on("mouseup click", function () {
                setTimeout(function () {
                    vis.binds["vis-inventwo"].updateUniversalDataFields();
                }, 100);
            });

            data = vis.binds["vis-inventwo-helper"].getDatapointsValues(data);
        }

        let childs = [];
        let styles = [];
        let margin = "";

        if (data.iRadiobtnAlign === "horizontal") {
            styles.push("flex-direction: row");
            margin = "0 " + vis.binds["vis-inventwo-helper"].unitize(data.iRadiobtnSpace) + " 0 0";
        }
        else {
            styles.push("flex-direction: column");
            margin = "0 0 " + vis.binds["vis-inventwo-helper"].unitize(data.iRadiobtnSpace) + " 0";
        }

        if (data.iRadiobtnWrap === "iOneRowCol") {
            styles.push("flex-wrap: no-wrap");
        }
        else {
            styles.push("flex-wrap: wrap");
            margin = "0 " + vis.binds["vis-inventwo-helper"].unitize(data.iRadiobtnSpace) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iRadiobtnSpace) + " 0";
        }

        let widgetClasses = [];

        if (data.iCheckType === "iCheckView") {
            widgetClasses.push("navigation-list");
        }

        for (let i = 1; i <= data.iRadiobtnsCount; i++) {
            let values = vis.binds["vis-inventwo-helper"].getButtonValues(data, "index", false, i);
            values.styles.width = vis.binds["vis-inventwo-helper"].unitize(data.iRadiobtnWidth);
            values.styles.height = vis.binds["vis-inventwo-helper"].unitize(data.iRadiobtnHeight);
            values.styles.margin = margin;
            let btn = vis.binds["vis-inventwo-components"].getButton(values, [], "image", data);
            childs.push(btn);
        }


        let list = vis.binds["vis-inventwo-components"].getRadioButtonList(childs, styles, widgetClasses);

        $(el).html(list);

        if (!vis.editMode) {
            $(el).find(".vis-inventwo-radiobtnlist-body").children().each((index, elem) => {
                vis.binds["vis-inventwo-helper"].elementClicked($(elem), function () {
                    if (data.iCheckType === "iCheckDpValue") {
                        vis.binds["vis-inventwo-helper"].setState(data.oid, data["iValue" + (index + 1)], true);
                    }
                    else if (data.iCheckType === "iCheckView") {
                        vis.changeView(
                            data["iView" + (index + 1)],
                            data["iView" + (index + 1)]
                        );
                    }
                });
            });

            vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
                if (newVal !== oldVal) {
                    $(el).find(".vis-inventwo-radiobtnlist-body").children().each((index, elem) => {
                        vis.binds["vis-inventwo-helper"].updateButton($(elem), data, "index", index + 1);
                    });
                }
            });
        }
    }
}