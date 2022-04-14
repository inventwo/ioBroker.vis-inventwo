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
        let html = vis.binds["vis-inventwo-components"].getButton(vis.binds["vis-inventwo-helper"].getButtonValues(data, data.wid, type, false), [type, data.iUniversalWidgetType.toLowerCase()], data.iContentType, data);
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
                    vis.binds["vis-inventwo-helper"].updateButton($(el).children(), data, type, data.wid);
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
                                vis.binds["vis-inventwo-helper"].updateButton($(el).children(), data, type, data.wid);
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
            let values = vis.binds["vis-inventwo-helper"].getButtonValues(data, data.wid, "index", false, i);
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
                        vis.binds["vis-inventwo-helper"].updateButton($(elem), data, "index", data.wid, index + 1);
                    });
                }
            });
        }
    },

    /*
    Using the iro.js color picker https://iro.js.org/
 */
    colorPicker: function (el, data) {

        let isMoving = false;

        let dataNew = Object.assign({}, data);
        if (vis.editMode) {
            dataNew = vis.binds["vis-inventwo-helper"].getDatapointsValues(dataNew);
        }

        let layoutComponents = [];

        //#region colorpicker components
        if (dataNew.iColorPickerShowWheel) {
            layoutComponents.push({
                component: iro.ui.Wheel,
                options: {}
            });
        }
        if (dataNew.iColorPickerShowSliderHue) {
            layoutComponents.push({
                component: iro.ui.Slider,
                options: {
                    sliderType: 'hue'
                }
            });
        }
        if (dataNew.iColorPickerShowSliderSaturation) {
            layoutComponents.push({
                component: iro.ui.Slider,
                options: {
                    sliderType: 'saturation'
                }
            });
        }
        if (dataNew.iColorPickerShowSliderValue) {
            layoutComponents.push({
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value'
                }
            });
        }
        if (dataNew.iColorPickerShowSliderRed) {
            layoutComponents.push({
                component: iro.ui.Slider,
                options: {
                    sliderType: 'red'
                }
            });
        }
        if (dataNew.iColorPickerShowSliderGreen) {
            layoutComponents.push({
                component: iro.ui.Slider,
                options: {
                    sliderType: 'green'
                }
            });
        }
        if (dataNew.iColorPickerShowSliderBlue) {
            layoutComponents.push({
                component: iro.ui.Slider,
                options: {
                    sliderType: 'blue'
                }
            });
        }
        if (dataNew.iColorPickerShowSliderAlpha) {
            layoutComponents.push({
                component: iro.ui.Slider,
                options: {
                    sliderType: 'alpha'
                }
            });
        }
        if (dataNew.iColorPickerShowSliderKelvin) {
            layoutComponents.push({
                component: iro.ui.Slider,
                options: {
                    sliderType: 'kelvin'
                }
            });
        }

        //#endregion

        let html = vis.binds["vis-inventwo-components"].getButton(vis.binds["vis-inventwo-helper"].getButtonValues(data, data.wid, "universal", false), [], "colorpicker", data);
        $(el).html(html);

        let colorPicker = new iro.ColorPicker($(el).find('.vis-inventwo-colorpicker')[0], {
            width: parseInt(dataNew.iColorPickerWidth),
            layout: layoutComponents,
            display: "block",
            padding: dataNew.iColorPickerHandlePadding,
            margin: vis.binds["vis-inventwo-helper"].unitize(dataNew.iColorPickerComponentMargin),
            handleRadius: dataNew.iColorPickerHandleRadius,
            layoutDirection: dataNew.iColorPickerLayoutDirection
        });

        function isJson(string) {
            try {
                JSON.parse(string);
            } catch (e) {
                return false;
            }
            return true;
        }

        let hexString = "";

        function setPickerColor() {
            switch (dataNew.iColorPickerFormat) {
                case "HEX":
                    hexString = vis.states[dataNew.oid + ".val"];
                    if ((/^#([A-Fa-f0-9]{3}$)|([A-Fa-f0-9]{6}$)/.test(hexString))) {
                        colorPicker.color.hexString = hexString;
                    }
                    else {
                        colorPicker.color.hexString = "#ffffff";
                    }
                    break;
                case "HEX 8":
                    hexString = vis.states[dataNew.oid + ".val"];
                    if ((/^#([A-Fa-f0-9]{8}$)/.test(hexString))) {
                        colorPicker.color.hex8String = hexString;
                    }
                    else {
                        colorPicker.color.hexString = "#ffffffff";
                    }
                    break;
                case "RGB":
                    if (dataNew["iColorPickerColor1-oid"] != "" && dataNew["iColorPickerColor2-oid"] != "" && dataNew["iColorPickerColor3-oid"] != "") {
                        colorPicker.color.rgb = {
                            r: parseInt(vis.states[dataNew["iColorPickerColor1-oid"] + ".val"]),
                            g: parseInt(vis.states[dataNew["iColorPickerColor2-oid"] + ".val"]),
                            b: parseInt(vis.states[dataNew["iColorPickerColor3-oid"] + ".val"])
                        }
                        console.log({
                            r: parseInt(vis.states[dataNew["iColorPickerColor1-oid"] + ".val"]),
                            g: parseInt(vis.states[dataNew["iColorPickerColor2-oid"] + ".val"]),
                            b: parseInt(vis.states[dataNew["iColorPickerColor3-oid"] + ".val"])
                        });
                    }
                    else {
                        colorPicker.color.rgb = {
                            r: 255,
                            g: 255,
                            b: 255,
                        }
                    }
                    break;
                case "HSL":
                    if (dataNew["iColorPickerColor1-oid"] != "" && dataNew["iColorPickerColor2-oid"] != "" && dataNew["iColorPickerColor3-oid"] != "") {
                        colorPicker.color.hsl = {
                            h: parseInt(vis.states[dataNew["iColorPickerColor1-oid"] + ".val"]),
                            s: parseInt(vis.states[dataNew["iColorPickerColor2-oid"] + ".val"]),
                            l: parseInt(vis.states[dataNew["iColorPickerColor3-oid"] + ".val"])
                        }
                    }
                    else {
                        colorPicker.color.hsl = {
                            h: 330,
                            s: 0,
                            l: 100,
                        }
                    }
                    break;
                case "HSV":
                    if (dataNew["iColorPickerColor1-oid"] != "" && dataNew["iColorPickerColor2-oid"] != "" && dataNew["iColorPickerColor3-oid"] != "") {
                        colorPicker.color.hsv = {
                            h: parseInt(vis.states[dataNew["iColorPickerColor1-oid"] + ".val"]),
                            s: parseInt(vis.states[dataNew["iColorPickerColor2-oid"] + ".val"]),
                            v: parseInt(vis.states[dataNew["iColorPickerColor3-oid"] + ".val"])
                        }
                    }
                    else {
                        colorPicker.color.hsv = {
                            h: 0,
                            s: 0,
                            v: 100,
                        }
                    }
                    break;
                case "CIE":
                    let dpValue = vis.states[dataNew.oid + ".val"];
                    if (isJson(dpValue)) {
                        let jsonVal = JSON.parse(dpValue);
                        dpValue = jsonVal.join(",");
                        dpIsArrayWithBrackets = true;
                    }
                    else if (typeof dpValue == "object") {
                        dpValue = dpValue.join(",");
                        dpIsArray = true;
                    }
                    let rgb = vis.binds['vis-inventwo'].cieConvert(dpValue, "rgb");
                    colorPicker.color.rgb = {
                        r: rgb[0],
                        g: rgb[1],
                        b: rgb[2],
                    }
                    break;
                default:
                    console.log("Error! Color model not implemented!");
                    break;
            }

            colorPicker.color.alpha = vis.states[dataNew["iColorPickerTransparency-oid"] + ".val"];
        }

        setPickerColor();

        colorPicker.on('input:start', function () {
            isMoving = true;
        });

        colorPicker.on('input:change', function (color) {
            if (color.index === 0) {
                switch (dataNew.iColorPickerFormat) {
                    case "HEX":
                        vis.setValue(dataNew.oid, color.hexString);
                        break;
                    case "HEX 8":
                        vis.setValue(dataNew.oid, color.hex8String);
                        break;
                    case "RGB":
                        vis.setValue(dataNew["iColorPickerColor1-oid"], color.rgb.r);
                        vis.setValue(dataNew["iColorPickerColor2-oid"], color.rgb.g);
                        vis.setValue(dataNew["iColorPickerColor3-oid"], color.rgb.b);
                        break;
                    case "HSL":
                        vis.setValue(dataNew["iColorPickerColor1-oid"], color.hsl.h);
                        vis.setValue(dataNew["iColorPickerColor2-oid"], color.hsl.s);
                        vis.setValue(dataNew["iColorPickerColor3-oid"], color.hsl.l);
                        break;
                    case "HSV":
                        vis.setValue(dataNew["iColorPickerColor1-oid"], color.hsv.h);
                        vis.setValue(dataNew["iColorPickerColor2-oid"], color.hsv.s);
                        vis.setValue(dataNew["iColorPickerColor3-oid"], color.hsv.v);
                        break;
                    case "CIE":
                        vis.setValue(dataNew.oid, vis.binds['vis-inventwo'].cieConvert(
                            [color.rgb.r, color.rgb.g, color.rgb.b], "cie"));
                        break;
                    default:
                        console.log("Error! Color model not implemented!");
                        break;
                }

                vis.setValue(dataNew["iColorPickerTransparency-oid"], color.alpha);
            }
        });

        colorPicker.on('input:end', function () {
            setTimeout(function () {
                isMoving = false;
            }, 100);
        });

        vis.states.bind(dataNew.oid + ".val", function (e, newVal, oldVal) {
            if (newVal !== oldVal && !isMoving) {
                setPickerColor();
            }
        });

        vis.states.bind(dataNew["iColorPickerTransparency-oid"] + ".val", function (e, newVal, oldVal) {
            if (newVal !== oldVal && !isMoving) {
                setPickerColor();
            }
        });

        vis.states.bind(dataNew["iColorPickerColor1-oid"] + ".val", function (e, newVal, oldVal) {
            if (newVal !== oldVal && !isMoving && dataNew.iColorPickerFormat.includes("RGB", "HSV", "HSL")) {
                setPickerColor();
            }
        });
        vis.states.bind(dataNew["iColorPickerColor2-oid"] + ".val", function (e, newVal, oldVal) {
            if (newVal !== oldVal && !isMoving && dataNew.iColorPickerFormat.includes("RGB", "HSV", "HSL")) {
                setPickerColor();
            }
        });
        vis.states.bind(dataNew["iColorPickerColor3-oid"] + ".val", function (e, newVal, oldVal) {
            if (newVal !== oldVal && !isMoving && dataNew.iColorPickerFormat.includes("RGB", "HSV", "HSL")) {
                setPickerColor();
            }
        });
    },
}