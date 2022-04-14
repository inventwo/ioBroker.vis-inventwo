/*
	ioBroker.vis vis-inventwo Widget-Set
	version: "3.x.x"
	Copyright 2021 jkvarel jkvarel@inventwo.com
*/
"use strict";

$( document ).ready(function() {
    vis.binds["vis-inventwo"].subscribeTheme();
});

vis.navChangeCallbacks.push(function (view) {
    vis.binds["vis-inventwo"].updateNavigations();
});

vis.binds["vis-inventwo"] = {

    //VIS Edit Links
    externalLinks: function (widAttr, data) {
        let url = "";
        if (data[1] === "wiki") {
            url = "https://github.com/inventwo/ioBroker.vis-inventwo/wiki";
        }
        if (data[1] === "wiki") {
            url = "https://github.com/inventwo/ioBroker.vis-inventwo/wiki";
        }
        return {input: `<a target="_blank" href="${url}">${_("iWikiText")}</a>`};
    },

    applyThemeButton: function (widAttr, data){
        return {input: `<button onclick="vis.binds['vis-inventwo'].applyDefaultThemeVariables('${data[1]}')">${_("iApplyThemeButtonText")}</button>`};
    },

    //VIS Edit Info Texte
    infoText: function (widAttr, data) {
        let text = "";

        if (data[1] === "valueType") {
            text = "iValueTypeText";
        }
        else if (data[1] === "emptyText") {
            text = "";
        }
        else if (data[1] === "universalTypeInfo") {
            text = "iUniversalWidgetTypeInfoText";
        }
        else if (data[1] === "refreshDataFieldsText") {
            text = "iRefreshDataFieldsText";
        }
        else if (data[1] === "radioBtnBackColInfoText") {
            text = "iText-BackColorRadio";
        }
        else if (data[1] === "valueListInfoText") {
            text = "iText-valueListInfoText";
        }
        else if (data[1] === "tblDateInfo") {
            text = "iText-tblDateInfo";
        }

        return {input: `<span>${_(text)}</span>`};
    },

    //Switch Funktion - Datenpunktwert wechseln
    handleToggle: function (el, oid, valueType, valueTrue, valueFalse) {
        if (!vis.editMode) {
            vis.binds["vis-inventwo-helper"].elementClicked(el, function () {
                let val = vis.binds["vis-inventwo-helper"].getState(oid);
                valueFalse = vis.binds["vis-inventwo-helper"].parseAndConvertValue(valueFalse);
                valueTrue = vis.binds["vis-inventwo-helper"].parseAndConvertValue(valueTrue);

                if (valueType === "boolean")
                    vis.binds["vis-inventwo-helper"].setState(oid, !val, true);
                else {
                    if (val !== valueTrue)
                        vis.binds["vis-inventwo-helper"].setState(oid, valueTrue);
                    else
                        vis.binds["vis-inventwo-helper"].setState(oid, valueFalse);
                }
            });
        }
    },

    //Navigation Funktion - Wechsel der View
    //type = null => old navigation button
    handleNavigation: function (el, data, type = null) {
        if (!vis.editMode && data.nav_view) {
            vis.binds["vis-inventwo-helper"].elementClicked(el, function () {
                //Just change current view
                if (type === null || data.iUniversalWidgetType === "Navigation") {

                    //Check if nav button is in popup
                    let modalContent = el.closest(".vis-inventwo-modal-content");
                    if (type !== null && modalContent.length > 0) {
                        modalContent = $(modalContent[0]);

                        //Remove view from popup
                        modalContent.html("");

                        //Check if view exists
                        if (!vis.views[data.nav_view]) {
                            modalContent.html("View not found");
                        }
                        //Check if view is equal to current view
                        else if (data.nav_view === vis.activeView) {
                            modalContent.html("Cannot add current view to popup");
                        }
                        else {
                            vis.renderView(data.nav_view, data.nav_view, true, function (_view) {
                                modalContent.attr('data-vis-contains', _view);
                                $('#visview_' + _view).appendTo(modalContent).show();
                                vis.binds["vis-inventwo"].updateNavigations();
                            });
                        }
                    }
                    //Is not in popup - change view or old nav button
                    else {
                        vis.changeView(
                            data.nav_view,
                            data.nav_view,
                            {
                                effect: data.hide_effect,
                                options: data.hide_duration,
                                duration: data.hide_options,
                            },
                            {
                                effect: data.hide_effect,
                                options: data.hide_duration,
                                duration: data.hide_options,
                            },
                            true
                        );
                    }
                }
                //Open view in popup
                else if (data.iUniversalWidgetType === "ViewInPopup") {
                    vis.binds["vis-inventwo"].addViewPopup(el, data);
                }

                //If oid is set, change state on view change
                if (data.oid !== undefined && data.oid !== "") {
                    let val;
                    //Is universal or multi widget
                    if (type === "universal" || type === "multi")
                        val = data.value;
                    //Is old nav button
                    else
                        val = data.iNavValue;

                    vis.binds["vis-inventwo-helper"].setState(data.oid, val, true);
                }
            });
        }
    },

    //Create popup with view in it
    addViewPopup: function (el, data) {
        let visContainer = $('#vis_container .vis-view[data-view="' + vis.activeView + '"]');
        visContainer.append(vis.binds["vis-inventwo-components"].getViewPopUp(data));

        let modalContent = $('#vis-inventwo-modal-' + data.wid + ' .vis-inventwo-modal-content');

        if (!vis.views[data.nav_view]) {
            modalContent.html("View not found");
        }
        else if (data.nav_view === vis.activeView) {
            modalContent.html("Cannot add current view to popup");
        }
        else {
            vis.renderView(data.nav_view, data.nav_view, false, function (_view) {
                $('#visview_' + _view).appendTo(modalContent).show();
                vis.binds["vis-inventwo"].updateNavigations();
            });
        }

        let closeTimeout = null;

        function closePopUp() {
            if (closeTimeout != null) {
                clearTimeout(closeTimeout);
                closeTimeout = null;
            }
            vis.destroyUnusedViews();
            $('#vis-inventwo-modal-' + data.wid).remove();
        }

        if (data.iPopUpCloseAfterSeconds > 0) {
            closeTimeout = setTimeout(function () {
                closePopUp();
            }, data.iPopUpCloseAfterSeconds * 1000);
        }

        //If oid for closing popup is set
        if (data["iPopUpCloseDp-oid"] !== "") {
            vis.states.bind(data["iPopUpCloseDp-oid"] + ".val", function (e, newVal, oldVal) {
                newVal = parseAndConvertValue(newVal);
                if (newVal === data.iPopUpCloseDpValue) {
                    closePopUp();
                }
            });
        }

        //Prevent popup from closing when clicking outside
        if (!data.iPopUpPreventClickOutside) {
            vis.binds["vis-inventwo-helper"].elementClicked($('#vis-inventwo-modal-' + data.wid), function () {
                closePopUp();
            });
        }

        //Close popup when clicking on the close button
        vis.binds["vis-inventwo-helper"].elementClicked($(".vis-inventwo-modal-closebtn"), function () {
            closePopUp();
        });

        //Prevent clicking widgets behind popup
        vis.binds["vis-inventwo-helper"].elementClicked($('#vis-inventwo-modal-' + data.wid + ' *'), function (e, event) {
            event.stopPropagation();
        });
    },

    //State Funktion - Datenpunktwert setzen
    handleState: function (el, data, type = "universal", index = 0) {
        let oid = "";

        if (type === "index") {
            oid = data["oid" + index];
        }
        else {
            oid = data.oid;
        }

        if (!vis.editMode) {
            vis.binds["vis-inventwo-helper"].elementClicked(el, function (element) {
                if (data.iStateResetValueTime !== undefined) {
                    if (data.iStateResetValueTime > 0) {
                        data.iStateResetValueTime = parseFloat(data.iStateResetValueTime);
                        let oldValue = vis.binds["vis-inventwo-helper"].getState(oid);

                        if (data.iStateResetValueTime > 0) {
                            setTimeout(function () {
                                vis.binds["vis-inventwo-helper"].setState(oid, oldValue);
                                delete vis.settings[data.wid];
                            }, data.iStateResetValueTime);
                        }
                    }
                }

                let value = "";
                if (type === "index") {
                    value = data["iValue" + index];
                }
                else {
                    value = data.value;
                }
                vis.binds["vis-inventwo-helper"].setState(oid, value, true);

                let elem = el.find(".vis-widget-body");
                vis.binds["vis-inventwo-helper"].buttonResponse(el, elem, data, type);
            });
        }
    },

    //Send HTTP request or open url
    sendHttp: function (el, data, type) {
        var $this = $(el);
        var oid = data.oid;

        if (!vis.editMode) {
            vis.binds["vis-inventwo-helper"].elementClicked($this.parent(), function () {
                data.iStateResetValueTime = parseFloat(data.iStateResetValueTime);

                if (data.iStateResetValueTime > 0) {
                    if (vis.settings[data.wid] == true) {
                        return;
                    }
                    else {
                        vis.settings[data.wid] = true;
                    }
                }

                let elem = $this.find(".vis-widget-body")

                if (data.iHttpType == "iSend") {
                    vis.conn.httpGet(data.value);
                }
                else if (data.iHttpType == "iOpenUrl") {
                    window.open(data.value, '_self');
                }
                else if (data.iHttpType == "iOpenUrlNewTab") {
                    window.open(data.value, '_blank').focus();
                }

                vis.binds["vis-inventwo-helper"].buttonResponse($this, elem, data, type);
            });

        }
    },

    // IncreaseDecreaseValue Funktion - Erhöht oder senkt Datenpunkwert
    increaseDecreaseValue: function (el, data, type) {
        let $this = $(el);
        let oid = data.oid;

        vis.binds["vis-inventwo-helper"].elementClicked($this, function () {
            let isChecking = false;
            let clickCount = 1;
            let timeout;

            if (isChecking) {
                clickCount++;
                clearTimeout(timeout);
                timeout = null;
            }
            else {
                isChecking = true;
            }

            if (timeout == null) {
                timeout = setTimeout(function () {
                    let val = vis.binds["vis-inventwo-helper"].parseAndConvertValue(data.value);
                    let oldValue = vis.binds["vis-inventwo-helper"].parseAndConvertValue(getState(oid));

                    vis.binds["vis-inventwo-helper"].setState(oid, oldValue + val * clickCount);

                    clickCount = 1;
                    timeout = null;
                    isChecking = false;
                }, 500);
            }

            vis.binds["vis-inventwo-helper"].buttonResponse($this, $this.find(".vis-widget-body"), data, type);
        })
    },

    //Updates all navigation buttons
    updateNavigations: function () {
        $(".vis-inventwo-button-new.navigation").each(function () {
            let id = $(this).parent().parent().attr("id");
            let data = vis.widgets[id].data;

            // if (vis.editMode) {
            //     data = vis.binds["vis-inventwo-helper"].getDatapointsValues(data);
            // }

            let type = "universal";

            if ($(this).hasClass("multi")) {
                type = "multi";
            }

            vis.binds["vis-inventwo-helper"].updateButton($(this), data, type);
        });

        $(".vis-inventwo-radiobtnlist-body.navigation-list").each(function () {
            let id = $(this).parent().parent().attr("id");
            let data = vis.widgets[id].data;

            // if (vis.editMode) {
            //     data = vis.binds["vis-inventwo-helper"].getDatapointsValues(data);
            // }

            let type = "universal";

            if ($(this).hasClass("multi")) {
                type = "multi";
            }

            $(this).children().each((index, elem) => {
                vis.binds["vis-inventwo-helper"].updateButton($(elem), data, "index", index + 1);
            });

        });
    },

    //Aktualisierung der Felder in VIS Edit für Universal und Multi Widget
    updateUniversalDataFields: function (wid, view) {

        vis.activeWidgets.forEach(function (el) {
            let widget = vis.views[vis.activeView].widgets[el];
            let data = widget.data;

            if(data === undefined){
                return;
            }

            if(data.iUniversalWidgetType !== undefined) {
                let val = data.iUniversalWidgetType;

                if (val == "Switch") {
                    vis.hideShowAttr("iNavWait", false);
                    vis.hideShowAttr("iValueType", true);
                    vis.hideShowAttr("iValueTypeInfo", true);
                    vis.hideShowAttr("iValueFalse", true);
                    vis.hideShowAttr("iValueTrue", true);
                    vis.hideShowAttr("value", false);
                    vis.hideShowAttr("iStateResponseTime", false);
                    vis.hideShowAttr("nav_view", false);
                    vis.hideShowAttr("oid", true);
                    vis.hideShowAttr("iStateResetValueTime", false);
                    vis.hideShowAttr("iIncreaseDecrease", false);
                    vis.hideShowAttr("iValueComparison", true);
                    vis.hideShowAttr("iHttpType", false);

                    vis.hideShowAttr("hide_effect", false);
                    vis.hideShowAttr("hide_duration", false);
                    vis.hideShowAttr("hide_options", false);

                    vis.hideShowAttr("iText-ViewPopUpSettings", false);
                    vis.hideShowAttr("iPopUpBackground", false);
                    vis.hideShowAttr("iPopUpPreventClickOutside", false);
                    vis.hideShowAttr("iPopUpShowTitle", false);
                    vis.hideShowAttr("iPopUpTitle", false);
                    vis.hideShowAttr("iPopUpTitleColor", false);
                    vis.hideShowAttr("iPopUpCloseBtnColor", false);
                    vis.hideShowAttr("iPopUpWidth", false);
                    vis.hideShowAttr("iPopUpHeight", false);
                    vis.hideShowAttr("iPopUpHeightTitle", false);
                    vis.hideShowAttr("iPopUpTitleSize", false);
                    vis.hideShowAttr("iPopUpPositionX", false);
                    vis.hideShowAttr("iPopUpPositionY", false);
                    vis.hideShowAttr("iPopUpScrollX", false);
                    vis.hideShowAttr("iPopUpScrollY", false);
                    vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
                    vis.hideShowAttr("iPopUpCloseDp-oid", false);
                    vis.hideShowAttr("iPopUpCloseDpValue", false);
                    vis.hideShowAttr("iPopUpOpenDpValue", false);
                    vis.hideShowAttr("iPopUpPosition", false);
                    vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUL", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLL", false);
                    vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
                    vis.hideShowAttr("iPopUpShadowXOffset", false);
                    vis.hideShowAttr("iPopUpShadowYOffset", false);
                    vis.hideShowAttr("iPopUpShadowBlur", false);
                    vis.hideShowAttr("iPopUpShadowSpread", false);
                    vis.hideShowAttr("iPopUpShadowColor", false);

                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("oid" + i, true);
                        vis.hideShowAttr("iValue" + i, true);
                        vis.hideShowAttr("iView" + i, true);
                    }
                }
                else if (val == "State" || val == "HTTP") {
                    vis.hideShowAttr("iNavWait", false);
                    vis.hideShowAttr("iValueType", false);
                    vis.hideShowAttr("iValueTypeInfo", false);
                    vis.hideShowAttr("iValueFalse", false);
                    vis.hideShowAttr("iValueTrue", false);
                    vis.hideShowAttr("value", true);
                    vis.hideShowAttr("iStateResponseTime", true);
                    vis.hideShowAttr("nav_view", false);
                    vis.hideShowAttr("iIncreaseDecrease", false);
                    vis.hideShowAttr("iHttpType", false);

                    vis.hideShowAttr("hide_effect", false);
                    vis.hideShowAttr("hide_duration", false);
                    vis.hideShowAttr("hide_options", false);

                    vis.hideShowAttr("iText-ViewPopUpSettings", false);
                    vis.hideShowAttr("iPopUpBackground", false);
                    vis.hideShowAttr("iPopUpPreventClickOutside", false);
                    vis.hideShowAttr("iPopUpShowTitle", false);
                    vis.hideShowAttr("iPopUpTitle", false);
                    vis.hideShowAttr("iPopUpTitleColor", false);
                    vis.hideShowAttr("iPopUpCloseBtnColor", false);
                    vis.hideShowAttr("iPopUpWidth", false);
                    vis.hideShowAttr("iPopUpHeight", false);
                    vis.hideShowAttr("iPopUpHeightTitle", false);
                    vis.hideShowAttr("iPopUpTitleSize", false);
                    vis.hideShowAttr("iPopUpPositionX", false);
                    vis.hideShowAttr("iPopUpPositionY", false);
                    vis.hideShowAttr("iPopUpScrollX", false);
                    vis.hideShowAttr("iPopUpScrollY", false);
                    vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
                    vis.hideShowAttr("iPopUpCloseDp-oid", false);
                    vis.hideShowAttr("iPopUpCloseDpValue", false);
                    vis.hideShowAttr("iPopUpOpenDpValue", false);
                    vis.hideShowAttr("iPopUpPosition", false);
                    vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUL", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLL", false);
                    vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
                    vis.hideShowAttr("iPopUpShadowXOffset", false);
                    vis.hideShowAttr("iPopUpShadowYOffset", false);
                    vis.hideShowAttr("iPopUpShadowBlur", false);
                    vis.hideShowAttr("iPopUpShadowSpread", false);
                    vis.hideShowAttr("iPopUpShadowColor", false);

                    if (val == "State") {
                        vis.hideShowAttr("iStateResetValueTime", true);
                        vis.hideShowAttr("oid", true);
                        vis.hideShowAttr("iValueComparison", true);
                    }
                    else {
                        vis.hideShowAttr("iStateResetValueTime", false);
                        vis.hideShowAttr("oid", false);
                        vis.hideShowAttr("iValueComparison", false);
                        vis.hideShowAttr("iHttpType", true);
                    }

                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("oid" + i, true);
                        vis.hideShowAttr("iValue" + i, true);
                        vis.hideShowAttr("iView" + i, true);
                    }
                }
                else if (val == "Navigation") {
                    vis.hideShowAttr("iNavWait", true);
                    vis.hideShowAttr("iValueType", false);
                    vis.hideShowAttr("iValueTypeInfo", false);
                    vis.hideShowAttr("iValueFalse", false);
                    vis.hideShowAttr("iValueTrue", false);
                    vis.hideShowAttr("value", true);
                    vis.hideShowAttr("iStateResponseTime", false);
                    vis.hideShowAttr("nav_view", true);
                    vis.hideShowAttr("oid", true);
                    vis.hideShowAttr("iStateResetValueTime", false);
                    vis.hideShowAttr("iIncreaseDecrease", false);
                    vis.hideShowAttr("iValueComparison", false);
                    vis.hideShowAttr("iHttpType", false);

                    vis.hideShowAttr("hide_effect", true);
                    vis.hideShowAttr("hide_duration", true);
                    vis.hideShowAttr("hide_options", false);

                    vis.hideShowAttr("iText-ViewPopUpSettings", false);
                    vis.hideShowAttr("iPopUpBackground", false);
                    vis.hideShowAttr("iPopUpPreventClickOutside", false);
                    vis.hideShowAttr("iPopUpShowTitle", false);
                    vis.hideShowAttr("iPopUpTitle", false);
                    vis.hideShowAttr("iPopUpTitleColor", false);
                    vis.hideShowAttr("iPopUpCloseBtnColor", false);
                    vis.hideShowAttr("iPopUpWidth", false);
                    vis.hideShowAttr("iPopUpHeight", false);
                    vis.hideShowAttr("iPopUpHeightTitle", false);
                    vis.hideShowAttr("iPopUpTitleSize", false);
                    vis.hideShowAttr("iPopUpPositionX", false);
                    vis.hideShowAttr("iPopUpPositionY", false);
                    vis.hideShowAttr("iPopUpScrollX", false);
                    vis.hideShowAttr("iPopUpScrollY", false);
                    vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
                    vis.hideShowAttr("iPopUpCloseDp-oid", false);
                    vis.hideShowAttr("iPopUpCloseDpValue", false);
                    vis.hideShowAttr("iPopUpOpenDpValue", false);
                    vis.hideShowAttr("iPopUpPosition", false);
                    vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUL", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLL", false);
                    vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
                    vis.hideShowAttr("iPopUpShadowXOffset", false);
                    vis.hideShowAttr("iPopUpShadowYOffset", false);
                    vis.hideShowAttr("iPopUpShadowBlur", false);
                    vis.hideShowAttr("iPopUpShadowSpread", false);
                    vis.hideShowAttr("iPopUpShadowColor", false);

                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("oid" + i, true);
                        vis.hideShowAttr("iValue" + i, true);
                        vis.hideShowAttr("iView" + i, true);
                    }
                }
                else if (val == "Background") {
                    vis.hideShowAttr("iNavWait", false);
                    vis.hideShowAttr("iValueFalse", false);
                    vis.hideShowAttr("value", false);
                    vis.hideShowAttr("iStateResponseTime", false);
                    vis.hideShowAttr("nav_view", false);
                    vis.hideShowAttr("iStateResetValueTime", false);
                    vis.hideShowAttr("iIncreaseDecrease", false);
                    vis.hideShowAttr("iValueComparison", true);
                    if (data.iUniversalValueCount == undefined) {
                        vis.hideShowAttr("oid", true);
                        vis.hideShowAttr("iValueType", true);
                        vis.hideShowAttr("iValueTypeInfo", true);
                        vis.hideShowAttr("iValueTrue", true);
                    }
                    else {
                        vis.hideShowAttr("oid", false);
                        vis.hideShowAttr("iValueType", false);
                        vis.hideShowAttr("iValueTypeInfo", false);
                        vis.hideShowAttr("iValueTrue", false);
                    }
                    vis.hideShowAttr("iHttpType", false);

                    vis.hideShowAttr("hide_effect", false);
                    vis.hideShowAttr("hide_duration", false);
                    vis.hideShowAttr("hide_options", false);

                    vis.hideShowAttr("iText-ViewPopUpSettings", false);
                    vis.hideShowAttr("iPopUpBackground", false);
                    vis.hideShowAttr("iPopUpPreventClickOutside", false);
                    vis.hideShowAttr("iPopUpShowTitle", false);
                    vis.hideShowAttr("iPopUpTitle", false);
                    vis.hideShowAttr("iPopUpTitleColor", false);
                    vis.hideShowAttr("iPopUpCloseBtnColor", false);
                    vis.hideShowAttr("iPopUpWidth", false);
                    vis.hideShowAttr("iPopUpHeight", false);
                    vis.hideShowAttr("iPopUpHeightTitle", false);
                    vis.hideShowAttr("iPopUpTitleSize", false);
                    vis.hideShowAttr("iPopUpPositionX", false);
                    vis.hideShowAttr("iPopUpPositionY", false);
                    vis.hideShowAttr("iPopUpScrollX", false);
                    vis.hideShowAttr("iPopUpScrollY", false);
                    vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
                    vis.hideShowAttr("iPopUpCloseDp-oid", false);
                    vis.hideShowAttr("iPopUpCloseDpValue", false);
                    vis.hideShowAttr("iPopUpOpenDpValue", false);
                    vis.hideShowAttr("iPopUpPosition", false);
                    vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUL", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLL", false);
                    vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
                    vis.hideShowAttr("iPopUpShadowXOffset", false);
                    vis.hideShowAttr("iPopUpShadowYOffset", false);
                    vis.hideShowAttr("iPopUpShadowBlur", false);
                    vis.hideShowAttr("iPopUpShadowSpread", false);
                    vis.hideShowAttr("iPopUpShadowColor", false);

                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("oid" + i, true);
                        vis.hideShowAttr("iValue" + i, true);
                        vis.hideShowAttr("iView" + i, true);
                    }
                }
                else if (val == "IncreaseDecreaseValue") {
                    vis.hideShowAttr("iNavWait", false);
                    vis.hideShowAttr("iValueFalse", false);
                    vis.hideShowAttr("value", true);
                    vis.hideShowAttr("iStateResponseTime", true);
                    vis.hideShowAttr("nav_view", false);
                    vis.hideShowAttr("iStateResetValueTime", false);
                    vis.hideShowAttr("iIncreaseDecrease", true);
                    vis.hideShowAttr("iValueComparison", false);
                    vis.hideShowAttr("oid", true);
                    vis.hideShowAttr("iValueType", false);
                    vis.hideShowAttr("iValueTypeInfo", false);
                    vis.hideShowAttr("iValueTrue", false);
                    vis.hideShowAttr("iHttpType", false);

                    vis.hideShowAttr("hide_effect", false);
                    vis.hideShowAttr("hide_duration", false);
                    vis.hideShowAttr("hide_options", false);

                    vis.hideShowAttr("iText-ViewPopUpSettings", false);
                    vis.hideShowAttr("iPopUpBackground", false);
                    vis.hideShowAttr("iPopUpPreventClickOutside", false);
                    vis.hideShowAttr("iPopUpShowTitle", false);
                    vis.hideShowAttr("iPopUpTitle", false);
                    vis.hideShowAttr("iPopUpTitleColor", false);
                    vis.hideShowAttr("iPopUpCloseBtnColor", false);
                    vis.hideShowAttr("iPopUpWidth", false);
                    vis.hideShowAttr("iPopUpHeight", false);
                    vis.hideShowAttr("iPopUpHeightTitle", false);
                    vis.hideShowAttr("iPopUpTitleSize", false);
                    vis.hideShowAttr("iPopUpPositionX", false);
                    vis.hideShowAttr("iPopUpPositionY", false);
                    vis.hideShowAttr("iPopUpScrollX", false);
                    vis.hideShowAttr("iPopUpScrollY", false);
                    vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
                    vis.hideShowAttr("iPopUpCloseDp-oid", false);
                    vis.hideShowAttr("iPopUpCloseDpValue", false);
                    vis.hideShowAttr("iPopUpOpenDpValue", false);
                    vis.hideShowAttr("iPopUpPosition", false);
                    vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUL", false);
                    vis.hideShowAttr("iPopUpCornerRadiusUR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLR", false);
                    vis.hideShowAttr("iPopUpCornerRadiusLL", false);
                    vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
                    vis.hideShowAttr("iPopUpShadowXOffset", false);
                    vis.hideShowAttr("iPopUpShadowYOffset", false);
                    vis.hideShowAttr("iPopUpShadowBlur", false);
                    vis.hideShowAttr("iPopUpShadowSpread", false);
                    vis.hideShowAttr("iPopUpShadowColor", false);

                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("oid" + i, true);
                        vis.hideShowAttr("iValue" + i, true);
                        vis.hideShowAttr("iView" + i, true);
                    }
                }
                else if (val == "ViewInPopup") {
                    vis.hideShowAttr("iNavWait", true);
                    vis.hideShowAttr("iValueType", false);
                    vis.hideShowAttr("iValueTypeInfo", false);
                    vis.hideShowAttr("iValueFalse", false);
                    vis.hideShowAttr("iValueTrue", false);
                    vis.hideShowAttr("value", true);
                    vis.hideShowAttr("iStateResponseTime", false);
                    vis.hideShowAttr("nav_view", true);
                    vis.hideShowAttr("oid", true);
                    vis.hideShowAttr("iStateResetValueTime", false);
                    vis.hideShowAttr("iIncreaseDecrease", false);
                    vis.hideShowAttr("iValueComparison", false);
                    vis.hideShowAttr("iHttpType", false);

                    vis.hideShowAttr("hide_effect", false);
                    vis.hideShowAttr("hide_duration", false);
                    vis.hideShowAttr("hide_options", false);

                    vis.hideShowAttr("iText-ViewPopUpSettings", true);
                    vis.hideShowAttr("iPopUpBackground", true);
                    vis.hideShowAttr("iPopUpPreventClickOutside", true);
                    vis.hideShowAttr("iPopUpShowTitle", true);
                    vis.hideShowAttr("iPopUpTitle", true);
                    vis.hideShowAttr("iPopUpTitleColor", true);
                    vis.hideShowAttr("iPopUpCloseBtnColor", true);
                    vis.hideShowAttr("iPopUpWidth", true);
                    vis.hideShowAttr("iPopUpHeight", true);
                    vis.hideShowAttr("iPopUpHeightTitle", true);
                    vis.hideShowAttr("iPopUpTitleSize", true);
                    vis.hideShowAttr("iPopUpPositionX", true);
                    vis.hideShowAttr("iPopUpPositionY", true);
                    vis.hideShowAttr("iPopUpScrollX", true);
                    vis.hideShowAttr("iPopUpScrollY", true);
                    vis.hideShowAttr("iPopUpCloseAfterSeconds", true);
                    vis.hideShowAttr("iPopUpCloseDp-oid", true);
                    vis.hideShowAttr("iPopUpCloseDpValue", true);
                    vis.hideShowAttr("iPopUpOpenDpValue", true);
                    vis.hideShowAttr("iPopUpPosition", true);
                    vis.hideShowAttr("iText-ViewPopUpCornersSettings", true);
                    vis.hideShowAttr("iPopUpCornerRadiusUL", true);
                    vis.hideShowAttr("iPopUpCornerRadiusUR", true);
                    vis.hideShowAttr("iPopUpCornerRadiusLR", true);
                    vis.hideShowAttr("iPopUpCornerRadiusLL", true);
                    vis.hideShowAttr("iText-ViewPopUpShadowSettings", true);
                    vis.hideShowAttr("iPopUpShadowXOffset", true);
                    vis.hideShowAttr("iPopUpShadowYOffset", true);
                    vis.hideShowAttr("iPopUpShadowBlur", true);
                    vis.hideShowAttr("iPopUpShadowSpread", true);
                    vis.hideShowAttr("iPopUpShadowColor", true);

                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("oid" + i, true);
                        vis.hideShowAttr("iValue" + i, true);
                        vis.hideShowAttr("iView" + i, true);
                    }
                }

            }

            if(data.iContentType !== undefined) {
                if (data.iContentType == "image") {
                    vis.hideShowAttr("iImgColorInvertFalse", true);
                    vis.hideShowAttr("iImgColorInvertTrue", true);
                    vis.hideShowAttr("iImgRotation", true);
                    vis.hideShowAttr("iFlipImage", true);
                    vis.hideShowAttr("iImgBlinkFalse", true);
                    vis.hideShowAttr("iImgBlinkTrue", true);
                    vis.hideShowAttr("iText-ImageSettings", true);
                    vis.hideShowAttr("iText-HtmlTextSettings", false);
                    vis.hideShowAttr("iText-ClockSettings", false);
                    vis.hideShowAttr("iClockShowSeconds", false);
                    vis.hideShowAttr("iImageFalse", true);
                    vis.hideShowAttr("iImageTrue", true);
                    vis.hideShowAttr("iHtmlTextFieldTrue", false);
                    vis.hideShowAttr("iHtmlTextFieldFalse", false);
                    vis.hideShowAttr("iImgColorFalse", true);
                    vis.hideShowAttr("iImgColorTrue", true);
                    vis.hideShowAttr("iImgColorClockFace", false);
                    vis.hideShowAttr("iImgColorHands", false);
                    vis.hideShowAttr("iImgColorHandSecond", false);
                    vis.hideShowAttr("iImgClockFace", false);
                    vis.hideShowAttr("iImgClockHands", false);
                    vis.hideShowAttr("iImgClockShowBorder", false);
                    vis.hideShowAttr("iClockTimezone", false);
                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("iImageTrue" + i, true);
                        vis.hideShowAttr("iImgBlinkTrue" + i, true);
                        vis.hideShowAttr("iImgColorInvert" + i, true);
                        vis.hideShowAttr("iHtmlTextFieldTrue" + i, false);
                        vis.hideShowAttr("iImgColorTrue" + i, true);
                        vis.hideShowAttr("iText-ImageSettings" + i, true);
                        vis.hideShowAttr("iText-HtmlTextSettings" + i, false);
                    }
                }
                else if (data.iContentType == "clock_analog" || data.iContentType == "clock_digital") {
                    vis.hideShowAttr("iImgColorInvertFalse", false);
                    vis.hideShowAttr("iImgColorInvertTrue", false);
                    vis.hideShowAttr("iImgRotation", false);
                    vis.hideShowAttr("iFlipImage", false);
                    vis.hideShowAttr("iImgBlinkFalse", false);
                    vis.hideShowAttr("iImgBlinkTrue", false);
                    vis.hideShowAttr("iText-ImageSettings", false);
                    vis.hideShowAttr("iText-HtmlTextSettings", false);
                    vis.hideShowAttr("iText-ClockSettings", true);
                    vis.hideShowAttr("iClockShowSeconds", true);
                    vis.hideShowAttr("iImageFalse", false);
                    vis.hideShowAttr("iImageTrue", false);
                    vis.hideShowAttr("iHtmlTextFieldTrue", false);
                    vis.hideShowAttr("iHtmlTextFieldFalse", false);
                    vis.hideShowAttr("iClockTimezone", true);

                    if (data.iContentType == "clock_analog") {
                        vis.hideShowAttr("iImgColorFalse", false);
                        vis.hideShowAttr("iImgColorTrue", false);
                        vis.hideShowAttr("iImgColorClockFace", true);
                        vis.hideShowAttr("iImgColorHands", true);
                        vis.hideShowAttr("iImgColorHandSecond", true);
                        vis.hideShowAttr("iImgClockFace", true);
                        vis.hideShowAttr("iImgClockHands", true);
                        vis.hideShowAttr("iImgClockShowBorder", true);
                    }
                    else {
                        vis.hideShowAttr("iImgColorFalse", true);
                        vis.hideShowAttr("iImgColorTrue", true);
                        vis.hideShowAttr("iImgColorClockFace", false);
                        vis.hideShowAttr("iImgColorHands", false);
                        vis.hideShowAttr("iImgColorHandSecond", false);
                        vis.hideShowAttr("iImgClockFace", false);
                        vis.hideShowAttr("iImgClockHands", false);
                        vis.hideShowAttr("iImgClockShowBorder", false);
                    }

                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("iImageTrue" + i, false);
                        vis.hideShowAttr("iImgBlinkTrue" + i, false);
                        vis.hideShowAttr("iImgColorInvert" + i, false);
                        vis.hideShowAttr("iHtmlTextFieldTrue" + i, false);
                        vis.hideShowAttr("iText-ImageSettings" + i, false);
                        vis.hideShowAttr("iText-HtmlTextSettings" + i, false);

                        if (data.iContentType == "clock_analog") {
                            vis.hideShowAttr("iImgColorTrue" + i, false);
                        }
                        else {
                            vis.hideShowAttr("iImgColorTrue" + i, true);
                        }
                    }
                }
                else if (data.iContentType == "html_text") {
                    vis.hideShowAttr("iImgColorInvertFalse", false);
                    vis.hideShowAttr("iImgColorInvertTrue", false);
                    vis.hideShowAttr("iImgRotation", false);
                    vis.hideShowAttr("iFlipImage", false);
                    vis.hideShowAttr("iImgBlinkFalse", false);
                    vis.hideShowAttr("iImgBlinkTrue", false);
                    vis.hideShowAttr("iText-ImageSettings", false);
                    vis.hideShowAttr("iText-HtmlTextSettings", true);
                    vis.hideShowAttr("iText-ClockSettings", false);
                    vis.hideShowAttr("iClockShowSeconds", false);
                    vis.hideShowAttr("iImageFalse", false);
                    vis.hideShowAttr("iImageTrue", false);
                    vis.hideShowAttr("iHtmlTextFieldTrue", true);
                    vis.hideShowAttr("iHtmlTextFieldFalse", true);
                    vis.hideShowAttr("iImgColorFalse", true);
                    vis.hideShowAttr("iImgColorTrue", true);
                    vis.hideShowAttr("iImgColorClockFace", false);
                    vis.hideShowAttr("iImgColorHands", false);
                    vis.hideShowAttr("iImgColorHandSecond", false);
                    vis.hideShowAttr("iImgClockFace", false);
                    vis.hideShowAttr("iImgClockHands", false);
                    vis.hideShowAttr("iImgClockShowBorder", false);
                    vis.hideShowAttr("iClockTimezone", false);
                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        vis.hideShowAttr("iText-ImageSettings" + i, false);
                        vis.hideShowAttr("iText-HtmlTextSettings" + i, true);
                        vis.hideShowAttr("iImageTrue" + i, false);
                        vis.hideShowAttr("iImgBlinkTrue" + i, false);
                        vis.hideShowAttr("iImgColorInvert" + i, false);
                        vis.hideShowAttr("iHtmlTextFieldTrue" + i, true);
                        vis.hideShowAttr("iImgColorTrue" + i, true);
                    }
                }
            }

            if(widget.tpl === "i-vis-radiobutton-list"){
                if(data.iCheckType === "iCheckDpValue"){
                    for (let i = 1; i <= data.iRadiobtnsCount; i++) {
                        vis.hideShowAttr("iValue" + i, true);
                        vis.hideShowAttr("iView" + i, false);
                    }
                }
                else if(data.iCheckType === "iCheckView"){
                    for (let i = 1; i <= data.iRadiobtnsCount; i++) {
                        vis.hideShowAttr("iValue" + i, false);
                        vis.hideShowAttr("iView" + i, true);
                    }
                }
            }

        });

    },

    subscribeTheme: function (){
        vis.conn._socket.emit('subscribe', "vis-inventwo.0.Config.SelectedTheme");
        vis.states.bind("vis-inventwo.0.Config.SelectedTheme" + ".val", function (e, newVal, oldVal) {
            vis.binds["vis-inventwo"].setThemeStyles();
        });
        setTimeout(function (){
            vis.binds["vis-inventwo"].setThemeStyles();
        }, 100);

    },

    setThemeStyles: function () {
        vis.conn._socket.emit("getState", "vis-inventwo.0.Config.SelectedTheme", function (err, obj) {
            if (err) {
                console.log(err);
                return;
            }

            let currentTheme = obj.val;
            let pathToTheme = "vis-inventwo.0.Themes." + currentTheme + ".";

            vis.conn._socket.emit("getObjectView", 'system', 'state', {
                startkey: pathToTheme,
                endkey: pathToTheme + '\u9999'
            }, function (err, res) {
                if (err) {
                    console.log(err);
                    return;
                }

                res.rows.forEach((row, index) => {
                    // let name = vis.binds["vis-inventwo-helper"].upperCamelCaseToMinus(row.id.replace(pathToTheme, ""));//row.id.replace(pathToTheme, "").replace(".", "-").toLowerCase();
                    let name = row.value.common.name.toLowerCase().replace(/\s/g, "-");
                    let value = row.value.common.value;
                    if (row.value.common.unit !== undefined && row.value.common.unit !== "") {
                        value += row.value.common.unit;
                    }

                    document.documentElement.style.setProperty("--inventwo-" + name, value);

                    if(name.includes("icon-color")){
                        vis.binds["vis-inventwo-helper"].getImgColorFilter(value, null, name + "-filter", false, true);
                    }

                });
            });
        });
    },

    applyDefaultThemeVariables: function (type){

        let variables = {
            "iButtonCol": "var(--inventwo-button-color-1)",
            "iButtonActive": "var(--inventwo-button-color-active-1)",
            "iButtonColHover": "var(--inventwo-button-color-hover-1)",
            "iOpacityBack": "var(--inventwo-button-opacity-1)",

            "iCornerRadiusUL": "var(--inventwo-upper-left)",
            "iCornerRadiusUR": "var(--inventwo-upper-right)",
            "iCornerRadiusLR": "var(--inventwo-lower-right)",
            "iCornerRadiusLL": "var(--inventwo-lower-left)",

            "iOpacityCtn": "var(--inventwo-content-opacity-1)",

            "iTextColor": "var(--inventwo-text-color-1)",
            "iTextColorActive": "var(--inventwo-text-color-active-1)",
            "iTextSize": "var(--inventwo-text-size-1)",
            "iTextSpaceTop": "var(--inventwo-text-distance-above)",
            "iTextSpaceBottom": "var(--inventwo-text-distance-below)",
            "iTextSpaceLeft": "var(--inventwo-text-distance-left)",
            "iTextSpaceRight": "var(--inventwo-text-distance-right)",

            "iIconSize": "var(--inventwo-icon-size-1)",
            "iImgSpaceTop": "var(--inventwo-icon-distance-above)",
            "iImgSpaceBottom": "var(--inventwo-icon-distance-below)",
            "iImgSpaceLeft": "var(--inventwo-icon-distance-left)",
            "iImgSpaceRight": "var(--inventwo-icon-distance-right)",
            "iImgColorFalse": "var(--inventwo-icon-color-1)",
            "iImgColorTrue": "var(--inventwo-icon-color-active-1)",

            "iShadowXOffset": "var(--inventwo-shadow-outer-offset-x)",
            "iShadowYOffset": "var(--inventwo-shadow-outer-offset-y)",
            "iShadowBlur": "var(--inventwo-shadow-outer-blur)",
            "iShadowSpread": "var(--inventwo-shadow-outer-size)",
            "iShadowColor": "var(--inventwo-shadow-outer-color)",
            "iShadowColorActive": "var(--inventwo-shadow-outer-color-active)",
            "iShadowColorHover": "var(--inventwo-shadow-outer-color-hover)",

            "iShadowInnerXOffset": "var(--inventwo-shadow-inner-offset-x)",
            "iShadowInnerYOffset": "var(--inventwo-shadow-inner-offset-y)",
            "iShadowInnerBlur": "var(--inventwo-shadow-inner-blur)",
            "iShadowInnerSpread": "var(--inventwo-shadow-inner-size)",
            "iShadowInnerColor": "var(--inventwo-shadow-inner-color)",
            "iShadowInnerColorActive": "var(--inventwo-shadow-inner-color-active)",
            "iShadowInnerColorHover": "var(--inventwo-shadow-inner-color-hover)",

            "iShadowTextXOffset": "var(--inventwo-shadow-text-offset-x)",
            "iShadowTextYOffset": "var(--inventwo-shadow-text-offset-y)",
            "iShadowTextBlur": "var(--inventwo-shadow-text-blur)",
            "iShadowTextColor": "var(--inventwo-shadow-text-color)",
            "iShadowTextColorActive": "var(--inventwo-shadow-text-color-active)",

            "iBorderSize": "var(--inventwo-border-size)",
            "iBorderColor": "var(--inventwo-border-color)",
            "iBorderColorActive": "var(--inventwo-border-color-active)",
            "iBorderColorHover": "var()",

            "iPopUpCornerRadiusUL": "var(--inventwo-upper-left)",
            "iPopUpCornerRadiusUR": "var(--inventwo-upper-right)",
            "iPopUpCornerRadiusLR": "var(--inventwo-lower-right)",
            "iPopUpCornerRadiusLL": "var(--inventwo-lower-left)",

            "iPopUpShadowXOffset": "var(--inventwo-shadow-outer-offset-x)",
            "iPopUpShadowYOffset": "var(--inventwo-shadow-outer-offset-y)",
            "iPopUpShadowBlur": "var(--inventwo-shadow-outer-blur)",
            "iPopUpShadowSpread": "var(--inventwo-shadow-outer-size)",
            "iPopUpShadowColor": "var(--inventwo-shadow-outer-color)",
        }

        vis.activeWidgets.forEach(function (wid) {
            for (const [key, value] of Object.entries(vis.views[vis.activeView].widgets[wid].data)) {
                if(variables[key] !== undefined){
                    vis.views[vis.activeView].widgets[wid].data[key] = variables[key];
                }
            }

            if(type === "multi"){
                for (let i = 1; i <= vis.views[vis.activeView].widgets[wid].data.iUniversalValueCount; i++) {
                    vis.views[vis.activeView].widgets[wid].data["iButtonActiveM" + i] = variables["iButtonActive"];
                    vis.views[vis.activeView].widgets[wid].data["iTextColorActive" + i] = variables["iTextColorActive"];
                    vis.views[vis.activeView].widgets[wid].data["iShadowColorActiveM" + i] = variables["iShadowColorActive"];
                    vis.views[vis.activeView].widgets[wid].data["iShadowInnerColorActiveM" + i] = variables["iShadowInnerColorActive"];
                    vis.views[vis.activeView].widgets[wid].data["iShadowTextColorActiveM" + i] = variables["iShadowTextColorActive"];
                    vis.views[vis.activeView].widgets[wid].data["iBorderColorActiveM" + i] = variables["iBorderColorActive"];
                    vis.views[vis.activeView].widgets[wid].data["iImgColorTrue" + i] = variables["iImgColorTrue"];
                }
            }

            setTimeout(function (){

                $('#visview_' + vis.activeView).click();

                vis.binds["vis-inventwo-helper"].updateButton($('#' + wid), vis.views[vis.activeView].widgets[wid].data, type);
            }, 100);
        });

    }
};

vis.binds["vis-inventwo-old"] = {

    //Slider Funktion - Setzt den Wert beim schieben
    handleSlider: function (el, data, options, type) {
        var $this = $(el);
        var oid = data.oid;

        let min = 0;
        let max = 99;
        let step = 0.1;

        if (type == "normal") {
            min = parseFloat(data.iMinVal);
            max = parseFloat(data.iMaxVal);
            step = parseFloat(data.iStepVal);
        }

        function getColor(sliderVal) {

            let myRed, myGreen, myBlue;
            if (sliderVal <= 16) {
                myRed = 255;
                myGreen = parseInt(((sliderVal * 6) * 255) / 100);
                myBlue = 0;
            }
            else if (sliderVal <= 33) {
                myRed = 255 - parseInt((((sliderVal - 16)) * 6) * 255 / 100);
                myGreen = 255;
                myBlue = 0;
            }
            else if (sliderVal < 50) {
                myRed = 0;
                myGreen = 255;
                myBlue = parseInt((((sliderVal - 33)) * 6) * 255 / 100);
            }
            else if (sliderVal < 66) {
                myRed = 0;
                myGreen = 255 - parseInt((((sliderVal - 50)) * 6) * 255 / 100);
                myBlue = 255;
            }
            else if (sliderVal < 83) {
                myRed = parseInt((((sliderVal - 66)) * 6) * 255 / 100);
                myGreen = 0;
                myBlue = 255;
            }
            else {
                myRed = 255;
                myGreen = 0;
                myBlue = 255 - parseInt((((sliderVal - 83)) * 6) * 255 / 100);
            }

            return [myRed, myGreen, myBlue];
        }

        function rgbToDecimal(rgbArr) {
            let r = parseFloat(rgbArr[0]);
            let g = parseFloat(rgbArr[1]);
            let b = parseFloat(rgbArr[2]);

            let sixth = 100 / 6;
            let res = 0;

            if (r == 255 && b == 0) {
                res = g / 255 * sixth;
            }
            else if (g == 255 && b == 0) {
                res = sixth + sixth - (r / 255 * sixth);
            }
            else if (r == 0 && g == 255) {
                res = sixth * 2 + b / 255 * sixth;
            }
            else if (r == 0 && b == 255) {
                res = sixth * 3 + sixth - (g / 255 * sixth);
            }
            else if (g == 0 && b == 255) {
                res = sixth * 4 + r / 255 * sixth;
            }
            else {
                res = sixth * 5 + sixth - (b / 255 * sixth);
            }

            return res;
        }

        let isDragging = false;

        let dpIsArray = false;
        let dpIsArrayWithBrackets = false;

        var settings = $.extend({
            min: min,
            max: max,
            step: step,
            slide: function (event, ui) {
                isDragging = true;
                if (!vis.editMode) {
                    switch (type) {
                        case "normal":
                            if (!data.iChangeOnRelease) {
                                if (data.iInvertMinMax) {
                                    vis.setValue(oid, (parseFloat(data.iMaxVal) - ui.value + parseFloat(data.iMinVal)));
                                }
                                else {
                                    vis.setValue(oid, ui.value);
                                }
                            }
                            $this.parent().parent().find(".vis-inventwo-slider-currentvalue").html(ui.value);
                            break;
                        case "rgb":
                            let sliderVal = parseFloat(ui.value);
                            let rgb = getColor(sliderVal);
                            let hex = vis.binds['vis-inventwo'].rgbToHex(rgb);
                            $(ui.handle).css("background", hex);
                            if (!data.iChangeOnRelease) {
                                let output = "";
                                switch (data.iColorSliderType) {
                                    case "HEX":
                                        output = hex;
                                        break;
                                    case "RGB":
                                        break;
                                    case "CIE":
                                        output = vis.binds['vis-inventwo'].cieConvert(rgb, "cie");
                                        if (dpIsArray == true) {
                                            output = output.split(",");
                                        }
                                        else if (dpIsArrayWithBrackets == true) {
                                            output = "[" + output + "]";
                                        }
                                        break;
                                }
                                if (data.iColorSliderType != "RGB")
                                    vis.setValue(oid, output);
                                else {
                                    vis.setValue(data["iIdRed-oid"], rgb[0]);
                                    vis.setValue(data["iIdGreen-oid"], rgb[1]);
                                    vis.setValue(data["iIdBlue-oid"], rgb[2]);
                                }
                            }
                            break;

                    }
                }
            },
            stop: function (event, ui) {
                isDragging = false;
                if (!vis.editMode) {
                    if (data.iChangeOnRelease) {
                        switch (type) {
                            case "normal":

                                if (data.iInvertMinMax) {
                                    vis.setValue(oid, (parseFloat(data.iMaxVal) - ui.value + parseFloat(data.iMinVal)));
                                }
                                else {
                                    vis.setValue(oid, ui.value);
                                }

                                $this.parent().parent().find(".vis-inventwo-slider-currentvalue").html(ui.value);
                                break;
                            case "rgb":
                                let sliderVal = parseFloat(ui.value);
                                let rgb = getColor(sliderVal);
                                let hex = vis.binds['vis-inventwo'].rgbToHex(rgb);
                                $(ui.handle).css("background", hex);
                                let output = "";
                                switch (data.iColorSliderType) {
                                    case "HEX":
                                        output = hex;
                                        break;
                                    case "RGB":
                                        break;
                                    case "CIE":
                                        output = vis.binds['vis-inventwo'].cieConvert(rgb, "cie");
                                        if (dpIsArray == true) {
                                            output = output.split(",");
                                        }
                                        else if (dpIsArrayWithBrackets == true) {
                                            output = "[" + output + "]";
                                        }
                                        break;
                                }
                                if (data.iColorSliderType != "RGB")
                                    vis.setValue(oid, output);
                                else {
                                    vis.setValue(data["iIdRed-oid"], rgb[0]);
                                    vis.setValue(data["iIdGreen-oid"], rgb[1]);
                                    vis.setValue(data["iIdBlue-oid"], rgb[2]);
                                }

                                break;
                        }
                    }
                }
            }
        }, options);


        $this.slider(settings)
            .each(function () {
                if (type == "normal" && data.iShowSteps) {
                    var opt = $(this).data().uiSlider.options;

                    // Get the number of possible values
                    let vals = (opt.max - opt.min) / data.iVisibleStepVal;

                    let sliderHeight = parseInt(data.iSliderHeight) > parseInt(data.iSliderKnobSize) ? parseInt(data.iSliderHeight) : parseInt(data.iSliderKnobSize)

                    // Space out values
                    for (let i = 0; i <= vals; i++) {

                        let label = null;
                        if (options.orientation == "horizontal") {
                            let offset = parseInt(data.iMinVal) != 0 ? parseInt(data.iMinVal) : 0;

                            let val = data.iInvertMinMax ? opt.max - i * data.iVisibleStepVal : i * parseInt(data.iVisibleStepVal) + offset;
                            label = $('<span class="vis-inventwo-slider-step-label">' + val + '</span>')
                                .css('left', (i / vals * 100) + '%')
                                .css('margin-top', sliderHeight / 2 + 10 + 'px')
                                .css('font-size', data.iStepTextSize + "px");
                        }
                        else {
                            let offset = parseInt(data.iMinVal) != 0 ? parseInt(data.iMinVal) : 0;

                            let val = data.iInvertMinMax ? i * parseInt(data.iVisibleStepVal) + offset : opt.max - i * parseInt(data.iVisibleStepVal);
                            label = $('<span class="vis-inventwo-slider-step-label">' + val + '</span>')
                                .css('top', (i / vals * 100) + '%')
                                .css('margin-left', sliderHeight / 2 + 10 + 'px')
                                .css('font-size', data.iStepTextSize + "px");
                        }

                        $(this).append(label);

                    }
                }
            });

        let leftSpace = 0;
        leftSpace = parseFloat(data.iSliderHeight) / 2 - parseFloat(data.iSliderKnobSize) / 2;

        function isJson(string) {
            try {
                JSON.parse(string);
            } catch (e) {
                return false;
            }
            return true;
        }

        function updateSlider() {

            $this.slider();

            function setColor(rgb) {
                if (rgb == null) {
                    rgb = [255, 0, 0];
                    val = "#ff0000";
                }
                else {
                    val = vis.binds['vis-inventwo'].rgbToHex(rgb);
                }

                $this.find(".ui-slider-handle").css("background", val);
                $this.slider("option", "value", rgbToDecimal(rgb));
            }

            if (oid == undefined) {
                return;
            }

            let val = vis.states.attr(oid + ".val");

            switch (type) {
                case "normal":
                    val = parseFloat(val);
                    if (isNaN(val)) {
                        val = min;
                    }
                    $this.find(".ui-slider-handle").css("background", data.iSliderKnobColor);
                    if (data.iInvertMinMax) {
                        val = data.iMaxVal - (val - data.iMinVal);
                    }
                    $this.slider("option", "value", val);
                    break;
                case "rgb":
                    let rgb = null;
                    switch (data.iColorSliderType) {
                        case "HEX":
                            rgb = vis.binds['vis-inventwo'].hexToRgb(val);
                            setColor(rgb);
                            break;
                        case "RGB":

                            let r = vis.states.attr(data["iIdRed-oid"] + ".val");
                            let g = vis.states.attr(data["iIdGreen-oid"] + ".val");
                            let b = vis.states.attr(data["iIdBlue-oid"] + ".val");

                            if (r != undefined && g != undefined && b != undefined) {
                                rgb = [r, g, b];
                                setColor(rgb);
                            }
                            else {
                                rgb = [255, 0, 0];
                            }

                            break;
                        case "CIE":
                            if (isJson(val)) {
                                let jsonVal = JSON.parse(val);
                                val = jsonVal.join(",");
                                dpIsArrayWithBrackets = true;
                            }
                            else if (typeof val == "object") {
                                val = val.join(",");
                                dpIsArray = true;
                            }
                            rgb = vis.binds['vis-inventwo'].cieConvert(val, "rgb");
                            setColor(rgb);
                            break;
                    }
                    break;
            }

        }

        updateSlider();

        $this.css("transform", "rotate(" + data.iSliderRotation + "deg)");
        $this.find(".ui-slider-handle").css("width", data.iSliderKnobSize + "px");
        $this.find(".ui-slider-handle").css("height", data.iSliderKnobSize + "px");
        $this.find(".ui-slider-handle").css("border", "0px");
        $this.find(".ui-slider-handle").css("border-radius", data.iSliderKnobCorners + "%");
        $this.find(".ui-slider-handle").css("box-shadow", "0 0 5px 1px black");
        if (options.orientation === "horizontal") {
            $this.find(".ui-slider-handle").css("margin-left", "-" + (data.iSliderKnobSize / 2) + "px");
            let topPos = ((data.iSliderKnobSize - data.iSliderHeight) / 2) * (-1);
            $this.find(".ui-slider-handle").css("top", topPos + "px");
        }
        else {
            $this.find(".ui-slider-handle").css("left", leftSpace + "px");
            $this.find(".ui-slider-handle").css("margin-bottom", "-" + (data.iSliderKnobSize / 2) + "px");
        }

        vis.states.bind(oid + ".val", function () {
            if (!isDragging) {
                updateSlider();
            }
        });

        if (type == "rgb" && data.iColorSliderType == "RGB") {
            vis.states.bind(data["iIdRed-oid"] + ".val", function () {
                if (!isDragging) {
                    updateSlider();
                }
            });
            vis.states.bind(data["iIdGreen-oid"] + ".val", function () {
                if (!isDragging) {
                    updateSlider();
                }
            });
            vis.states.bind(data["iIdBlue-oid"] + ".val", function () {
                if (!isDragging) {
                    updateSlider();
                }
            });
        }


    },

    //JSON Tabelle Funktion - Generiert aus einem JSON eine HTML Tabelle
    jsontable: function (el, data) {

        function testJSON(text) {
            if (typeof text !== "string") {
                return false;
            }
            try {
                JSON.parse(text);
                return true;
            } catch (error) {
                return false;
            }
        }

        let timeout = null;

        let sortColumn = "";
        let sortOrder = "asc";

        if (data.iTblSortAttr != undefined && data.iTblSortAttr != "") {
            sortColumn = data.iTblSortAttr;
            sortOrder = data.iTblSortOrder;
        }

        function sortData(column, el, data) {
            if (sortColumn != column) {
                sortColumn = column;
                sortOrder = "asc";
            }
            else {
                if (sortOrder == "desc") {
                    sortColumn = "";
                    sortOrder = "asc";
                }
                else {
                    sortOrder = "desc";
                }
            }
            create(el, data);
        }

        function create(el, data) {

            if (vis.editMode) {
                setTimeout(function () {
                    vis.binds["vis-inventwo"].updateJsonTableFields();
                }, 100);

                $(el).parent().on("mouseup click", function () {
                    setTimeout(function () {
                        vis.binds["vis-inventwo"].updateJsonTableFields();
                    }, 100);
                });
            }

            let output = "";

            if (data.oid === "" || data.oid === "nothing_selected" || data.oid === undefined) {
                output = "No data";
            }
            else if (vis.states.attr(data.oid + ".val") == undefined || vis.states.attr(data.oid + ".val") == "" ||
                vis.states.attr(data.oid + ".val") == "null" || typeof vis.states.attr(data.oid + ".val") == "null") {
                output = "No or wrong data in datapoint!";
            }
            else {
                if (data.iColCount !== "" && data.iColCount > 0) {
                    let jd = vis.states.attr(data.oid + ".val");
                    let jsondata;
                    let validJson = true;

                    try {
                        if (typeof jd === "string") {
                            if (jd.trim().charAt(0) == "{") {
                                jd = "[" + jd + "]";
                            }
                            jsondata = JSON.parse(jd);
                        }
                        else if (typeof jd === "object") {
                            jsondata = [jd];
                        }
                        else {
                            jsondata = [].slice.call(jd);
                        }
                    } catch (e) {
                        console.log("ERROR ON JSON");
                        console.log(e);
                        validJson = false;
                    }

                    if (validJson) {

                        let rowLimit = jsondata.length;
                        if (data.iTblRowLimit < rowLimit) {
                            rowLimit = data.iTblRowLimit;
                        }

                        let colLimit = 0;
                        if (jsondata.length > 0) {
                            colLimit = Object.keys(jsondata[0]).length;
                            if (data.iColCount < colLimit) {
                                colLimit = data.iColCount;
                            }
                        }

                        if (data.iVertScroll) {
                            $(el).parent().css("overflow-y", "scroll");
                        }
                        else {
                            $(el).parent().css("overflow-y", "hidden");
                        }

                        if (data.iHorScroll) {
                            $(el).parent().css("overflow-x", "scroll");
                        }
                        else {
                            $(el).parent().css("overflow-x", "hidden");
                        }

                        let tblBorder = "";
                        if (data.iBorderRemoveDouble) {
                            tblBorder = "border-collapse:collapse;";
                        }

                        let tblClasses = "vis-inventwo-json-table";
                        if (data.iTblFixedHead == true) {
                            tblClasses += " vis-inventwo-json-table-fixedheader";
                        }

                        let noData = false;

                        let border = "";
                        border += "border-left: " + data.iBorderSize + "px " + data.iBorderStyleLeft + " " + data.iBorderColor + ";";
                        border += "border-right: " + data.iBorderSize + "px " + data.iBorderStyleRight + " " + data.iBorderColor + ";";
                        border += "border-top: " + data.iBorderSize + "px " + data.iBorderStyleUp + " " + data.iBorderColor + ";";
                        border += "border-bottom: " + data.iBorderSize + "px " + data.iBorderStyleDown + " " + data.iBorderColor + ";";

                        output = "<table class='" + tblClasses + "' style='opacity: " + data.iOpacityAll + "; " + tblBorder + "'>";

                        if (data.iTblShowHead) {
                            let tblHead = "";
                            let headStyle = "background:" + data.iTblHeaderColor + "; color: " + data.iTblHeaderTextColor;
                            tblHead += "<thead style='" + headStyle + "'>";

                            if (jsondata.length > 0) {
                                for (let i = 0; i < colLimit; i++) {
                                    if (data["iColShow" + (i + 1)]) {
                                        let colWidth = "";
                                        if (data["iColWidth" + (i + 1)] !== undefined && data["iColWidth" + (i + 1)] !== "") {
                                            colWidth = data["iColWidth" + (i + 1)];
                                        }

                                        let sortArrow = "";

                                        let colAttr = Object.keys(jsondata[0])[i];
                                        if (data["iColAttr" + (i + 1)] !== undefined && data["iColAttr" + (i + 1)] !== "") {
                                            colAttr = data["iColAttr" + (i + 1)];
                                        }

                                        if (colAttr == sortColumn) {
                                            let borderWidth = "5px 5px 0 5px;";
                                            let borderColor = data.iTblHeaderTextColor + " transparent transparent transparent;";
                                            if (sortOrder == "asc") {
                                                borderWidth = "0 5px 5px 5px;";
                                                borderColor = "transparent transparent " + data.iTblHeaderTextColor + " transparent;";
                                            }
                                            let style = `border-width: ` + borderWidth + `
    											 border-color: ` + borderColor + `
    											 margin-left: 5px;
    											 display: inline-block;
    											 vertical-align: middle;
    											 border-style: solid;`;
                                            sortArrow = `<span style="` + style + `"></span>`;
                                        }

                                        let thStyle = "width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px; " + border;
                                        if (data.iTblFixedHead == true) {
                                            thStyle += headStyle;
                                        }

                                        thStyle += "text-align: " + data["iTblHeadTextAlign" + (i + 1)] + ";";
                                        if (data["iColName" + (i + 1)] !== undefined && data["iColName" + (i + 1)] !== "") {
                                            tblHead += "<th data-column='" + colAttr + "' style='" + thStyle + "'>" + data["iColName" + (i + 1)] + sortArrow + "</th>";
                                        }
                                        else {
                                            tblHead += "<th data-column='" + colAttr + "' style='" + thStyle + "'>" + colAttr + sortArrow + "</th>";
                                        }
                                    }
                                }
                            }
                            else if (data.iTblDummyRow != "") {
                                let headers = data.iTblDummyRow.split(",");

                                let thStyle = "padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px; " + border;
                                headers.forEach(head => {
                                    tblHead += "<th style='" + thStyle + "'>" + head + "</th>";
                                });
                            }
                            else {
                                noData = true;
                            }

                            tblHead += "</thead>";
                            output += tblHead;

                        }

                        if (jsondata.length > 0) {

                            output += "<tbody>";

                            if (sortColumn != "") {
                                jsondata.sort(function (a, b) {
                                    let first = a[sortColumn];
                                    let second = b[sortColumn];
                                    let ret;

                                    if (isNaN(first)) {
                                        if (isNaN(second)) {
                                            ret = first.localeCompare(second);
                                        }
                                        else {
                                            ret = 1;
                                        }
                                    }
                                    else {
                                        if (isNaN(second)) {
                                            ret = -1;
                                        }
                                        else {
                                            ret = parseFloat(first) - parseFloat(second);
                                        }
                                    }

                                    if (sortOrder == "desc")
                                        ret = ret * (-1);

                                    return ret;
                                });
                            }

                            for (let e = 0; e < rowLimit; e++) {
                                let tdColor = "";
                                let tdTextColor = "";
                                let tdStyles = [];
                                if (e % 2 === 0) {
                                    tdColor = data.iTblRowUnevenColor;
                                    tdTextColor = data.iTblRowUnevenTextColor;
                                }
                                else {
                                    tdColor = data.iTblRowEvenColor;
                                    tdTextColor = data.iTblRowEvenTextColor;
                                }
                                let cells = [];
                                for (let i = 0; i < colLimit; i++) {
                                    if (data["iColShow" + (i + 1)]) {

                                        let colWidth = "";
                                        if (data["iColWidth" + (i + 1)] !== undefined && data["iColWidth" + (i + 1)] !== "") {
                                            colWidth = data["iColWidth" + (i + 1)];
                                        }

                                        let cellValue = "";

                                        if (data["iColAttr" + (i + 1)] !== undefined && data["iColAttr" + (i + 1)] !== "") {
                                            cellValue = jsondata[e][data["iColAttr" + (i + 1)]];
                                        }
                                        else {
                                            cellValue = jsondata[e][Object.keys(jsondata[e])[i]];
                                        }

                                        if (cellValue !== "") {
                                            switch (data["iTblCellFormat" + (i + 1)]) {
                                                case "normal":
                                                    let val = "";
                                                    val += data["iColPreText" + (i + 1)] != undefined ? data["iColPreText" + (i + 1)] : "";
                                                    val += cellValue;
                                                    val += data["iColAfterText" + (i + 1)] != undefined ? data["iColAfterText" + (i + 1)] : "";
                                                    cellValue = val;
                                                    break;
                                                case "datetime":
                                                    if (cellValue != 0) {
                                                        if (data["iTblCellDatetimeFormat" + (i + 1)] != "") {
                                                            let datetime = null;
                                                            if (isNaN(cellValue) == true) {
                                                                datetime = new Date(cellValue.trim()).getTime();
                                                            }
                                                            else {
                                                                datetime = parseInt(cellValue);
                                                            }

                                                            if (datetime.toString().length == 10)
                                                                datetime = parseInt(datetime + "000");
                                                            var getDateString = function (date, format) {
                                                                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                                                    getPaddedComp = function (comp) {
                                                                        return ((parseInt(comp) < 10) ? ("0" + comp) : comp);
                                                                    },
                                                                    formattedDate = format,
                                                                    o = {
                                                                        "y": date.getFullYear(), // year
                                                                        "m": getPaddedComp(date.getMonth() + 1), //month number
                                                                        "M": months[date.getMonth()], //month
                                                                        "d": getPaddedComp(date.getDate()), //day
                                                                        "h": getPaddedComp((date.getHours() > 12) ? date.getHours() % 12 : date.getHours()), //hour
                                                                        "H": getPaddedComp(date.getHours()), //hour
                                                                        "i": getPaddedComp(date.getMinutes()), //minute
                                                                        "s": getPaddedComp(date.getSeconds()), //second
                                                                        "S": getPaddedComp(date.getMilliseconds()), //millisecond,
                                                                        "b": (date.getHours() >= 12) ? "PM" : "AM"
                                                                    };

                                                                for (var k in o) {
                                                                    if (new RegExp("(" + k + ")", "g").test(format)) {
                                                                        formattedDate = formattedDate.replace(RegExp.$1, o[k]);
                                                                    }
                                                                }
                                                                return formattedDate;

                                                            };
                                                            var formattedDate = getDateString(new Date(datetime), data["iTblCellDatetimeFormat" + (i + 1)]);
                                                            cellValue = formattedDate;


                                                        }
                                                    }
                                                    else {
                                                        cellValue = data["iTblCellPlaceholder" + (i + 1)];
                                                    }
                                                    break;
                                                case "image":
                                                    if (cellValue != undefined && cellValue != "") {
                                                        cellValue = "<img src='" + cellValue + "' style='width:" + data["iTblCellImageSize" + (i + 1)] + "px;' onerror='this.style.display=`none`'>";
                                                    }
                                                    break;
                                                case "number":

                                                    let orgVal = parseFloat(cellValue);

                                                    let tempVal = parseFloat(cellValue).toLocaleString("en",
                                                        {
                                                            minimumFractionDigits: parseFloat(data["iTblCellNumberDecimals" + (i + 1)]),
                                                            maximumFractionDigits: parseFloat(data["iTblCellNumberDecimals" + (i + 1)])
                                                        });

                                                    let decimalSeperator = ".";
                                                    let thousandSeperator = ",";
                                                    if (data["iTblCellNumberDecimalSeperator" + (i + 1)] != "") {
                                                        decimalSeperator = data["iTblCellNumberDecimalSeperator" + (i + 1)];
                                                    }
                                                    thousandSeperator = data["iTblCellNumberThousandSeperator" + (i + 1)];

                                                    tempVal = tempVal.replace(".", "[tempSeperatorXYZ]");
                                                    tempVal = tempVal.replace(/\,/gm, thousandSeperator);
                                                    tempVal = tempVal.replace("[tempSeperatorXYZ]", decimalSeperator);
                                                    cellValue = tempVal;

                                                    let thresholds = [];

                                                    let dpContent = vis.states.attr(data["iTblCellThresholdsDp" + (i + 1)] + ".val");

                                                    if (dpContent != undefined && dpContent != "") {
                                                        try {
                                                            thresholds = JSON.parse(dpContent);
                                                        } catch (e) {
                                                            console.log("error on parse dp");
                                                            break;
                                                        }
                                                    }
                                                    else if (data["iTblCellThresholdsText" + (i + 1)] != undefined && data["iTblCellThresholdsText" + (i + 1)] != "") {
                                                        try {
                                                            thresholds = JSON.parse(data["iTblCellThresholdsText" + (i + 1)]);
                                                        } catch (e) {
                                                            console.log("error on parse text");
                                                            break;
                                                        }
                                                    }

                                                    let preAfterText = "";
                                                    preAfterText += data["iColPreText" + (i + 1)] != undefined ? data["iColPreText" + (i + 1)] : "";
                                                    preAfterText += cellValue;
                                                    preAfterText += data["iColAfterText" + (i + 1)] != undefined ? data["iColAfterText" + (i + 1)] : "";

                                                    if (thresholds.length > 0) {
                                                        thresholds.forEach(t => {
                                                            if (t.comparator != undefined && t.comparator != "" && t.value != undefined) {
                                                                let comparasionTable = {
                                                                    '>': function (val1, val2) {
                                                                        return val1 > val2
                                                                    },
                                                                    '<': function (val1, val2) {
                                                                        return val1 < val2
                                                                    },
                                                                    '==': function (val1, val2) {
                                                                        return val1 == val2
                                                                    },
                                                                    '>=': function (val1, val2) {
                                                                        return val1 >= val2
                                                                    },
                                                                    '<=': function (val1, val2) {
                                                                        return val1 <= val2
                                                                    },
                                                                    '!=': function (val1, val2) {
                                                                        return val1 != val2
                                                                    },
                                                                }

                                                                let styles = [];

                                                                if (comparasionTable[t.comparator](parseFloat(cellValue), parseFloat(t.value))) {
                                                                    if (t.color !== undefined) {
                                                                        styles.push("color: " + t.color);
                                                                    }
                                                                    if (t.background !== undefined) {
                                                                        console.log("has background");
                                                                        tdColor = t.background;
                                                                    }
                                                                    cellValue = '<span style="' + styles.join(';') + '">' + preAfterText + '</span>';
                                                                }

                                                            }
                                                        });
                                                    }
                                                    else {
                                                        cellValue = preAfterText;
                                                    }


                                                    break;
                                                case "boolean":
                                                    if (data["iTblCellBooleanCheckbox" + (i + 1)]) {
                                                        let valBoolean = false;
                                                        if (cellValue == true || cellValue == "true" || cellValue == "1" || cellValue == 1)
                                                            valBoolean = true;

                                                        let checkboxSize = 25;

                                                        if (valBoolean === true) {
                                                            let style = "background: " + data["iTblCellBooleanColorTrue" + (i + 1)] + "; width: " + checkboxSize + "px; height: " + checkboxSize + "px;";
                                                            cellValue = "<div class=\"vis-inventwo-json-table-checkbox-container checked\"><span style=\"" + style + "\" class=\"vis-inventwo-json-table-checkbox-checkmark\"></span></div>";
                                                        }
                                                        else {
                                                            let style = "background: " + data["iTblCellBooleanColorFalse" + (i + 1)] + "; width: " + checkboxSize + "px; height: " + checkboxSize + "px;";
                                                            cellValue = "<div class=\"vis-inventwo-json-table-checkbox-container\"><span style=\"" + style + "\" class=\"vis-inventwo-json-table-checkbox-checkmark\"></span></div>";
                                                        }
                                                    }
                                                    break;
                                            }
                                        }
                                        else {
                                            cellValue = data["iTblCellPlaceholder" + (i + 1)];
                                        }

                                        if (cellValue == undefined)
                                            cellValue = "";

                                        cells.push("<td style='width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px; " + border + " text-align: " + data["iTblTextAlign" + (i + 1)] + ";" + tdStyles.join(';') + "'>" + cellValue + "</td>");
                                    }
                                }
                                output += "<tr style='background: " + tdColor + "; color: " + tdTextColor + "'>";
                                output += cells.join("");
                                output += "</tr>";
                            }
                            output += "</tbody>";
                        }


                        output += "</table>";

                        if (noData == true) {
                            output = "No entries in JSON and no dummy row";
                        }
                    }

                }
                else {
                    output = "Columncount can't be zero/empty!";
                }
            }

            $(el).html(output);

            if (!vis.editMode) {
                $(el).parent().find("th").on("click touchend", function () {
                    sortData($(this).data("column"), el, data);
                });
            }

        }

        vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
            create(el, data);
        });

        if (data.oid !== "" && data.oid !== "nothing_selected" && data.oid !== undefined && vis.states.attr(data.oid + ".val") != undefined && vis.states.attr(data.oid + ".val") != "" &&
            vis.states.attr(data.oid + ".val") != "null" && typeof vis.states.attr(data.oid + ".val") != "null") {

            if (data.iTableRefreshRate > 0 && !vis.editMode) {

                setInterval(function () {
                    create(el, data);
                }, data.iTableRefreshRate * 1000);
            }

        }

        create(el, data);
    },

    //Aktualisierung der Felder in VIS Edit für Universal und Multi Widget
    updateJsonTableFields: function (wid, view) {

        vis.activeWidgets.forEach(function (el) {
            let data = vis.views[vis.activeView].widgets[el].data;

            for (let i = 1; i <= data.iColCount; i++) {
                if (data["iTblCellFormat" + i] == "normal") {
                    vis.hideShowAttr("iTblCellDatetimeFormat" + i, false);
                    vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, false);

                    vis.hideShowAttr("iTblCellImageSize" + i, false);

                    vis.hideShowAttr("iTblCellBooleanCheckbox" + i, false);
                    vis.hideShowAttr("iTblCellBooleanColorFalse" + i, false);
                    vis.hideShowAttr("iTblCellBooleanColorTrue" + i, false);

                    vis.hideShowAttr("iTblCellNumberDecimals" + i, false);
                    vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, false);
                    vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, false);
                    vis.hideShowAttr("iTblCellThresholdsDp" + i, false);
                    vis.hideShowAttr("iTblCellThresholdsText" + i, false);
                }
                else if (data["iTblCellFormat" + i] == "datetime") {
                    vis.hideShowAttr("iTblCellDatetimeFormat" + i, true);
                    vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, true);

                    vis.hideShowAttr("iTblCellImageSize" + i, false);

                    vis.hideShowAttr("iTblCellBooleanCheckbox" + i, false);
                    vis.hideShowAttr("iTblCellBooleanColorFalse" + i, false);
                    vis.hideShowAttr("iTblCellBooleanColorTrue" + i, false);

                    vis.hideShowAttr("iTblCellNumberDecimals" + i, false);
                    vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, false);
                    vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, false);
                    vis.hideShowAttr("iTblCellThresholdsDp" + i, false);
                    vis.hideShowAttr("iTblCellThresholdsText" + i, false);
                }
                else if (data["iTblCellFormat" + i] == "image") {
                    vis.hideShowAttr("iTblCellDatetimeFormat" + i, false);
                    vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, false);

                    vis.hideShowAttr("iTblCellImageSize" + i, true);

                    vis.hideShowAttr("iTblCellBooleanCheckbox" + i, false);
                    vis.hideShowAttr("iTblCellBooleanColorFalse" + i, false);
                    vis.hideShowAttr("iTblCellBooleanColorTrue" + i, false);

                    vis.hideShowAttr("iTblCellNumberDecimals" + i, false);
                    vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, false);
                    vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, false);
                    vis.hideShowAttr("iTblCellThresholdsDp" + i, false);
                    vis.hideShowAttr("iTblCellThresholdsText" + i, false);
                }
                else if (data["iTblCellFormat" + i] == "number") {
                    vis.hideShowAttr("iTblCellDatetimeFormat" + i, false);
                    vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, false);

                    vis.hideShowAttr("iTblCellImageSize" + i, false);

                    vis.hideShowAttr("iTblCellBooleanCheckbox" + i, false);
                    vis.hideShowAttr("iTblCellBooleanColorFalse" + i, false);
                    vis.hideShowAttr("iTblCellBooleanColorTrue" + i, false);

                    vis.hideShowAttr("iTblCellNumberDecimals" + i, true);
                    vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, true);
                    vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, true);
                    vis.hideShowAttr("iTblCellThresholdsDp" + i, true);
                    vis.hideShowAttr("iTblCellThresholdsText" + i, true);
                }
                else if (data["iTblCellFormat" + i] == "boolean") {
                    vis.hideShowAttr("iTblCellDatetimeFormat" + i, false);
                    vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, false);

                    vis.hideShowAttr("iTblCellImageSize" + i, false);

                    vis.hideShowAttr("iTblCellBooleanCheckbox" + i, true);
                    vis.hideShowAttr("iTblCellBooleanColorFalse" + i, true);
                    vis.hideShowAttr("iTblCellBooleanColorTrue" + i, true);

                    vis.hideShowAttr("iTblCellNumberDecimals" + i, false);
                    vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, false);
                    vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, false);
                    vis.hideShowAttr("iTblCellThresholdsDp" + i, false);
                    vis.hideShowAttr("iTblCellThresholdsText" + i, false);
                }

            }
        });

    },

    //Standard Button Element
    buttonPrefab: function (imgElement, textElement, values) {

        let defaultValues = {
            background: "",
            backgroundOpacity: "",
            backgroundShadow: "",
            backgroundBorder: "",
            backgroundBorderRadius: "",
            contentOpacity: "",
            contentJustifyContent: "",
            contentFlexDirection: "",
            contentImageOrder: "",
            contentImageAlignSelf: "",
            contentImageMargin: "",
            textFontSize: "",
            textColor: "",
            textDecoration: "",
            textMargin: "",
            textTextAlign: "",
            textAlignSelf: "",
        }

        values = Object.assign({}, defaultValues, values);

        let styles = [];

        for (const [key, value] of Object.entries(values)) {
            styles.push("--" + this.camelCaseToKebabCase(key) + ": " + value);
        }

        let stylesString = styles.join(";");

        let html = `
			<div class="vis-inventwo-class vis-widget-body" style="` + stylesString + `">
			
				<div class="vis-inventwo-button-new"
					 style="background: var(--background);
					 		opacity: var(--background-opacity);
					 		box-shadow: var(--background-shadow);
					 		border: var(--background-border);
					 		border-radius: var(--background-border-radius);"></div>
					 		
				<div class="vis-inventwo-button-content"
					 style="opacity: var(--content-opacity);
					 		justify-content: var(--content-justify-content);
					 		flex-direction: var(--content-flex-direction); 
					 		text-shadow: var(--text-shadow);">
					
					<div class="vis-inventwo-button-imageContainer"
						 style="order: var(--content-image-order);
						 align-self: var(--content-image-align-self);
						 margin: var(--content-image-margin);">
						` + imgElement + `
					</div>
					
					<div class="vis-inventwo-button-text"
						 style="font-size: var(--text-font-size);
						 		color: var(--text-color);
						 		text-decoration: var(--text-decoration);
						 		margin: var(--text-margin);
						 		text-align: var(--text-text-align);
						 		align-self: var(--text-align-self);">
						` + textElement + `
					</div>
					
				</div>
			
			</div>`;

        return html;
    },

    camelCaseToKebabCase: function (string) {
        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    },

    /*
		Using the iro.js color picker https://iro.js.org/
	 */
    colorPicker: function (el, data) {

        let isMoving = false;

        let dataNew = Object.assign({}, data);
        if (vis.editMode) {
            dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
        }

        let borderColor = dataNew.iColorPickerBorderColor;
        if (borderColor == "") {
            borderColor = "transparent";
        }

        let borderWidth = dataNew.iColorPickerBorderWidth;
        let margin = dataNew.iColorPickerComponentMargin;

        let layoutComponents = [];

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

        let textAlign = "";
        let alignSelf = "";
        if (dataNew.iContentFlexDirection == "vertical") {
            if (dataNew.iTextAlign == "iStart")
                textAlign = "left";
            else if (dataNew.iTextAlign == "iCenter")
                textAlign = "center";
            else if (dataNew.iTextAlign == "iEnd")
                textAlign = "right";
        }
        else {
            if (dataNew.iTextAlign == "iStart")
                alignSelf = "flex-start";
            else if (dataNew.iTextAlign == "iCenter")
                alignSelf = "center";
            else if (dataNew.iTextAlign == "iEnd")
                alignSelf = "flex-end";
        }

        let imgAlign = "";
        if (dataNew.iImgAlign == "iStart")
            imgAlign = "flex-start";
        else if (dataNew.iImgAlign == "iCenter")
            imgAlign = "center";
        else if (dataNew.iImgAlign == "iEnd")
            imgAlign = "flex-end";

        let orderContent = "";
        if (dataNew.iContentOrder == "orderTextImg")
            orderContent = 2;
        else
            orderContent = 0;

        let contFlexDir = "";
        if (dataNew.iContentFlexDirection == "vertical")
            contFlexDir = "column";
        else if (dataNew.iContentFlexDirection == "horizontal")
            contFlexDir = "row";

        let vertTextAlign = "";
        if (dataNew.iContentVertAlign == "iStart")
            vertTextAlign = "flex-start";
        else if (dataNew.iContentVertAlign == "iCenter")
            vertTextAlign = "center";
        else if (dataNew.iContentVertAlign == "iEnd")
            vertTextAlign = "flex-end";
        else if (dataNew.iContentVertAlign == "iSpace-between")
            vertTextAlign = "space-between";

        let shadow = dataNew.iShadowXOffset + "px " + dataNew.iShadowYOffset + "px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px var(--box-shadow-col),inset " +
            dataNew.iShadowInnerXOffset + "px " + dataNew.iShadowInnerYOffset + "px " + dataNew.iShadowInnerBlur + "px " + dataNew.iShadowInnerSpread + "px var(--box-shadow-inner-col)";
        let border = dataNew.iBorderSize + "px " + dataNew.iBorderStyle + " " + dataNew.iBorderColor;
        let borderRadius = dataNew.iCornerRadiusUL + "px " + dataNew.iCornerRadiusUR + "px " + dataNew.iCornerRadiusLR + "px " + dataNew.iCornerRadiusLL + "px";


        let values = {
            background: dataNew.iButtonCol,
            backgroundOpacity: dataNew.iOpacityBack,
            backgroundShadow: shadow,
            backgroundBorder: border,
            backgroundBorderRadius: borderRadius,
            contentOpacity: dataNew.iOpacityCtn,
            contentJustifyContent: vertTextAlign,
            contentFlexDirection: contFlexDir,
            contentImageOrder: orderContent,
            contentImageAlignSelf: imgAlign,
            contentImageMargin: dataNew.iImgSpaceTop + "px " + dataNew.iImgSpaceRight + "px " + dataNew.iImgSpaceBottom + "px " + dataNew.iImgSpaceLeft + "px",
            textFontSize: dataNew.iTextSize + "px",
            textColor: dataNew.iTextColor,
            textMargin: dataNew.iTextSpaceTop + "px " + dataNew.iTextSpaceRight + "px " + dataNew.iTextSpaceBottom + "px " + dataNew.iTextSpaceLeft + "px",
            textTextAlign: textAlign,
            textAlignSelf: alignSelf,
            textDecoration: dataNew.iTextDecoration,
            textShadowCol: dataNew.iShadowTextColor,
            boxShadowCol: dataNew.iShadowColor,
            boxShadowInnerCol: dataNew.iShadowInnerColor,
        };

        let txt = dataNew.iText;
        if (txt === undefined) {
            txt = "";
        }

        $(el).html(this.buttonPrefab("<div class='vis-inventwo-colorpicker'></div>", txt, values));

        let colorPicker = new iro.ColorPicker($(el).find('.vis-inventwo-colorpicker')[0], {
            width: parseInt(dataNew.iColorPickerWidth),
            layout: layoutComponents,
            display: "block",
            padding: dataNew.iColorPickerHandlePadding,
            margin: margin + "px",
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
            console.log(color);
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
            if (newVal !== oldVal && !isMoving) {
                setPickerColor();
            }
        });
        vis.states.bind(dataNew["iColorPickerColor2-oid"] + ".val", function (e, newVal, oldVal) {
            if (newVal !== oldVal && !isMoving) {
                setPickerColor();
            }
        });
        vis.states.bind(dataNew["iColorPickerColor3-oid"] + ".val", function (e, newVal, oldVal) {
            if (newVal !== oldVal && !isMoving) {
                setPickerColor();
            }
        });
    },

    updateColorPickerFields: function (wid, view) {
        vis.activeWidgets.forEach(function (el) {
            let data = vis.views[vis.activeView].widgets[el].data;
            let val = data.iColorPickerFormat;
            if (val == "RGB" || val == "HSL" || val == "HSV") {
                vis.hideShowAttr("oid", false);
                vis.hideShowAttr("iColorPickerColor1-oid", true);
                vis.hideShowAttr("iColorPickerColor2-oid", true);
                vis.hideShowAttr("iColorPickerColor3-oid", true);
            }
            else {
                vis.hideShowAttr("oid", true);
                vis.hideShowAttr("iColorPickerColor1-oid", false);
                vis.hideShowAttr("iColorPickerColor2-oid", false);
                vis.hideShowAttr("iColorPickerColor3-oid", false);
            }

        });
    },

    updateColorPickerFieldsClick: function (el) {
        if (vis.editMode) {
            $(el).parent().on("mouseup click", function () {
                setTimeout(function () {
                    vis.binds["vis-inventwo-old"].updateColorPickerFields();
                }, 100);
            });

            $(".group-control").on("mouseup click", function () {
                setTimeout(function () {
                    vis.binds["vis-inventwo-old"].updateColorPickerFields();
                }, 100);
            });
        }
    },

    //Generierung des List Widgets
    valueList: function (el, data) {

        vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
            createList();
        });

        createList();

        function createList() {
            let text = "";
            let arr = [];
            let listTxt = "";

            let dataNew = Object.assign({}, data);

            if (dataNew.iValueListText != undefined && dataNew.iValueListText != "") {
                listTxt = dataNew.iValueListText;
            }
            else if (data.oid != undefined && data.oid != "" && vis.states.attr(data.oid + ".val") != "") {
                listTxt = vis.states.attr(data.oid + ".val");
            }

            let paddingLeft = 14;

            if (data.iValueListStyle == "none") {
                paddingLeft = 0;
            }

            if (listTxt != "") {
                arr = listTxt.split(dataNew.iValueListDelimiter);

                text = `<ul class="vis-inventwo-valuelist-list"
					style="padding-left: ` + paddingLeft + `px;
							color: ` + dataNew.iTextColor + `;
							font-size: ` + dataNew.iTextSize + `px;
							list-style: ` + dataNew.iValueListStyle + `">`;

                text += "<li class='vis-inventwo-valuelist-li' style='padding-bottom: " + dataNew.iValueListEntryDistance + "px;'>";
                text += arr.join("</li><li class='vis-inventwo-valuelist-li' style='padding-bottom: " + dataNew.iValueListEntryDistance + "px;'>");
                text += "</li></ul>";

            }

            $(el).html(text);

        }

    },

    //Converts boolean strings to booleans and numeric string to numeric value
    convertValue: function (val) {
        if (!isNaN(val) && typeof val != "boolean") {
            val = parseFloat(val);
        }

        if (val == "true")
            val = true;
        else if (val == "false")
            val = false;

        return val;
    },

    //Hide
    hideImgFilterFields: function (e) {

        if (vis.editMode) {
            $(e).parent().on("mouseup click", function () {
                setTimeout(function () {
                    vis.activeWidgets.forEach(function (el) {
                        let data = vis.views[vis.activeView].widgets[el].data;

                        vis.hideShowAttr("iImgColorFalseFilter", false);
                        vis.hideShowAttr("iImgColorTrueFilter", false);

                        for (let i = 1; i <= data.iRadiobtnsCount; i++) {
                            vis.hideShowAttr("iImgColorFalseFilter" + i, false);
                            vis.hideShowAttr("iImgColorTrueFilter" + i, false);
                        }

                        for (let i = 1; i <= data.iUniversalValueCount; i++) {
                            vis.hideShowAttr("iImgColorFalseFilter" + i, false);
                            vis.hideShowAttr("iImgColorTrueFilter" + i, false);
                        }


                    });
                }, 100);
            });
        }
    },

    createSwitchWidget: function (el, data, style) {

        vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
            createWidget(false);
        });

        createWidget(true);

        function createWidget(createEvents) {
            let dataNew = Object.assign({}, data);

            if (vis.editMode) {
                dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
            }

            //Farben, Text & Bild bei true oder false
            let switchOnCol = dataNew.iSwitchColOn;
            let switchOffCol = dataNew.iSwitchColOff;
            let switchImg = "";
            let switchColsSizeStyles = "";
            let switchWidth = "";
            let switchHeight = "";
            let backDirection = "";
            let flip = 1;
            let flipStyle = "";

            if (dataNew.iFlipImage) {
                flip = -1;
            }

            if (vis.states.attr(dataNew.oid + ".val") == vis.binds["vis-inventwo"].convertValue(dataNew.iValueTrue)) {
                switchOnCol = dataNew.iSwitchColOnActive;
                if (dataNew.iSwitchOrientation == "vertical") {
                    switchImg = "widgets/vis-inventwo/img/ToggleSwitch/switch-1-vert-on-" + dataNew.iSwitchColor + ".png";
                }
                else {
                    switchImg = "widgets/vis-inventwo/img/ToggleSwitch/switch-1-hor-on-" + dataNew.iSwitchColor + ".png";
                }
            }
            else {
                switchOffCol = dataNew.iSwitchColOffActive;
                if (dataNew.iSwitchOrientation == "vertical") {
                    switchImg = "widgets/vis-inventwo/img/ToggleSwitch/switch-1-vert-off-" + dataNew.iSwitchColor + ".png";
                }
                else {
                    switchImg = "widgets/vis-inventwo/img/ToggleSwitch/switch-1-hor-off-" + dataNew.iSwitchColor + ".png";
                }
            }


            if (dataNew.iSwitchOrientation == "vertical") {
                switchWidth = dataNew.iSwitchSize + "px";
                switchHeight = "calc(" + dataNew.iSwitchSize + "px" + " * 2)";
                switchColsSizeStyles = "margin: auto; width: 90%; height: 45%;";
                backDirection = "column";
                flipStyle = "scaleY(" + flip + ")";
            }
            else if (dataNew.iSwitchOrientation == "horizontal") {
                switchWidth = "calc(" + dataNew.iSwitchSize + "px" + " * 2)";
                switchHeight = dataNew.iSwitchSize + "px";
                switchColsSizeStyles = "margin: auto; width: 45%; height: 90%;";
                backDirection = "row";
                flipStyle = "scaleX(" + flip + ")";
            }

            let html = `
			<div class="vis-inventwo-class vis-widget-body" 
				 style="position: relative; opacity: ` + dataNew.iOpacityBack + `;width: ` + switchWidth + `; height: ` + switchHeight + `; transform: ` + flipStyle + ` ">
					<div class="vis-inventwo-button-new" style="display: flex; flex-direction: ` + backDirection + `;">
						 <div style="` + switchColsSizeStyles + ` background: ` + switchOnCol + `;"></div>
						 <div style="` + switchColsSizeStyles + ` background: ` + switchOffCol + `;"></div>
					</div>
					<div class="vis-inventwo-overlay">
						<img src="` + switchImg + `" width="100%"> 
					</div>
			</div>`;

            $(el).html(html);

            //Bindings
            if (createEvents) {
                vis.binds["vis-inventwo"].handleToggleSwitch(el, dataNew);

            }
        }
    },

    createBasicSwitchWidget: function (el, data, style) {

        let $this = this;

        for (let index = 1; index <= data.iSwitchCount; index++) {
            vis.states.bind(data["oid" + index] + ".val", function (e, newVal, oldVal) {
                updateWidget();
            });
        }

        createWidget(true);

        function getValues(dataNew) {

            let values = [];
            let text = [];

            let knobWidth = dataNew.iKnobWidth;
            if (!isNaN(knobWidth)) {
                knobWidth += "px";
            }

            for (let i = 1; i <= dataNew.iSwitchCount; i++) {

                let vals = {}
                let t = "";

                let val = dataNew["iValueTrue" + i];
                if (val == undefined)
                    val = true;
                else if (val == "true")
                    val = true;
                else if (val == "false")
                    val = false;
                else if (!isNaN(val))
                    val = parseFloat(val);

                if (dataNew["oid" + i] != undefined && vis.states.attr(dataNew["oid" + i] + ".val") == val) {
                    vals.backgroundColor = dataNew.iBackgroundColorActive;
                    vals.knobBackgroundColor = dataNew.iKnobBackgroundColorActive;
                    vals.knobTransform = "translate(-100%, 0)";

                    vals.knobLeft = "100%";
                    t = dataNew["iTextTrue" + i];
                }
                else {
                    vals.backgroundColor = dataNew.iBackgroundColor;
                    vals.knobBackgroundColor = dataNew.iKnobBackgroundColor;
                    vals.knobTransform = "translate(0, 0)";
                    vals.knobLeft = "0";
                    t = dataNew["iTextFalse" + i];
                }

                if (t == undefined) {
                    t = "";
                }

                values[i - 1] = vals;
                text[i - 1] = t;
            }

            return {
                values: values,
                text: text
            };

        }

        function updateWidget() {
            let dataNew = Object.assign({}, data);
            if (vis.editMode) {
                dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
            }

            let d = getValues(dataNew);

            let elem = $('#' + data.wid + " .vis-widget-body");

            d.values.forEach((val, index) => {
                for (const [key, v] of Object.entries(val)) {
                    elem.get(0).style.setProperty("--" + $this.camelCaseToKebabCase(key) + "-" + (index + 1), v);
                }
            });

            d.text.forEach((text, index) => {
                elem.find('#' + dataNew.wid + '-switch-' + index + ' .vis-inventwo-switch-basic-text').html(text);
            });
        }

        function createWidget(createEvents) {
            let dataNew = Object.assign({}, data);

            if (vis.editMode) {
                dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
            }

            let d = getValues(dataNew);
            let values = d.values;

            let height = dataNew.iBarWidth;
            let borderRadius = dataNew.iBorderRadius;
            if (!isNaN(height)) {
                height += "px";
            }
            if (!isNaN(borderRadius)) {
                borderRadius += "px";
            }

            let knobWidth = dataNew.iKnobWidth;
            let knobHeight = dataNew.iKnobHeight;
            let knobBorderRadius = dataNew.iKnobBorderRadius;
            let knobOffset = dataNew.iKnobOffset;
            if (!isNaN(knobWidth)) {
                knobWidth += "px";
            }
            if (!isNaN(knobHeight)) {
                knobHeight += "px";
            }
            if (!isNaN(knobBorderRadius)) {
                knobBorderRadius += "px";
            }
            if (!isNaN(knobOffset)) {
                knobOffset += "px";
            }

            let labelWrapperStyles = [];

            labelWrapperStyles.push(
                "min-height: calc(" + height + " + ((" + knobHeight + " - " + height + " ) / 2))"
            );

            labelWrapperStyles.push(
                "position: relative"
            );

            labelWrapperStyles.push("flex: 1 0 1px");


            let labelStyles = [];
            labelStyles.push(
                "height: " + height
            );
            labelStyles.push(
                "margin: 0 calc(" + knobOffset + " / 2)"
            );

            labelStyles.push(
                "border-radius: " + borderRadius
            );


            let knobStyles = [];
            knobStyles.push(
                "width: " + knobWidth
            );
            knobStyles.push(
                "height: " + knobHeight
            );
            knobStyles.push(
                "border-radius: " + knobBorderRadius
            );

            knobStyles.push(
                "left: var(--knob-left)"
            );
            knobStyles.push(
                "transform: var(--knob-transform)"
            );


            let styles = [];
            let switchStyles = [];


            values.forEach((val, index) => {
                for (const [key, v] of Object.entries(val)) {
                    styles.push("--" + $this.camelCaseToKebabCase(key) + "-" + (index + 1) + ": " + v);
                }
            });

            styles.push("position: relative");

            if (dataNew.iSwitchOrientation == "vertical") {
                styles.push("flex-direction: column");
                styles.push("justify-content: flex-start");
                switchStyles.push("margin-bottom: " + dataNew.iSwitchSpacing + "px");
            }
            else if (dataNew.iSwitchOrientation == "horizontal") {
                styles.push("flex-direction: row");
                styles.push("align-items: center");
                switchStyles.push("margin-right: " + dataNew.iSwitchSpacing + "px");
                switchStyles.push("flex: 1 0 1px");
            }

            labelWrapperStyles.push("margin-bottom: " + dataNew.iSwitchTextSpacing + "px");

            let stylesString = styles.join(";");

            switchStyles = switchStyles.join(";");
            labelWrapperStyles = labelWrapperStyles.join("; ");
            labelStyles = labelStyles.join("; ");
            knobStyles = knobStyles.join("; ");

            let switches = [];

            values.forEach((val, index) => {

                let labelWrapperStyles2 = [];
                labelWrapperStyles2.push(
                    "background: var(--background-color-" + (index + 1) + ")"
                );

                let knobStyles2 = [];
                knobStyles2.push(
                    "left: var(--knob-left-" + (index + 1) + ")"
                );
                knobStyles2.push(
                    "transform: var(--knob-transform-" + (index + 1) + ")"
                );
                knobStyles2.push(
                    "background: var(--knob-background-color-" + (index + 1) + ")"
                );
                knobStyles2 = knobStyles2.join(";");

                let text = d.text[index];

                switches.push(`
				<div id="` + dataNew.wid + `-switch-` + index + `" 
					 class="vis-inventwo-switch-basic-entry" style="` + switchStyles + `">
					<div style="` + labelWrapperStyles + `">
						<label class="vis-inventwo-switch-basic-wrapper" style="` + labelStyles + `;` + labelWrapperStyles2 + `;">
					 		<span class="vis-inventwo-switch-basic-knob" style="` + knobStyles + `;` + knobStyles2 + `;"></span>
						</label>
					</div>
					<div class="vis-inventwo-switch-basic-text">
						` + text + `
					</div>
				</div>
				`);
            });

            let html = `
			<div class="vis-inventwo-class vis-widget-body vis-inventwo-switch-basic" style="` + stylesString + `">
				` + switches.join("") + `
			</div>`;

            $(el).html(html);

            //Bindings
            setTimeout(function () {
                if (createEvents) {
                    values.forEach((val, index) => {
                        vis.binds["vis-inventwo"].handleCheckbox(el, dataNew, index);
                    });
                }
            }, 500);
        }
    },

    createCheckbox: function (el, data, style) {

        let $this = this;

        for (let index = 1; index <= data.iCheckboxCount; index++) {
            vis.states.bind(data["oid" + index] + ".val", function (e, newVal, oldVal) {
                updateWidget();
            });
        }

        createWidget(true);

        function getValues(dataNew) {

            let values = [];
            let text = [];

            for (let i = 1; i <= dataNew.iCheckboxCount; i++) {

                let vals = {}
                let t = "";

                let val = dataNew["iValueTrue" + i];
                if (val == undefined)
                    val = true;
                else if (val == "true")
                    val = true;
                else if (val == "false")
                    val = false;
                else if (!isNaN(val))
                    val = parseFloat(val);

                if (dataNew["oid" + i] != undefined && vis.states.attr(dataNew["oid" + i] + ".val") == val) {
                    vals.background = dataNew.iBackgroundColorActive;
                    vals.borderColor = dataNew.iBorderColorActive;
                    vals.boxShadowCol = dataNew.iShadowColorActive;
                    vals.boxShadowInnerCol = dataNew.iShadowInnerColorActive;
                    vals.textShadowCol = dataNew.iShadowTextColorActive;
                    vals.checkColor = dataNew.iColorIcon;
                }
                else {
                    vals.background = dataNew.iBackgroundColor;
                    vals.borderColor = dataNew.iBorderColor;
                    vals.boxShadowCol = dataNew.iShadowColor;
                    vals.boxShadowInnerCol = dataNew.iShadowInnerColor;
                    vals.textShadowCol = dataNew.iShadowTextColor;
                    vals.checkColor = "transparent";
                }

                if (dataNew["iText" + i] != undefined) {
                    t = dataNew["iText" + i];
                }

                values[i - 1] = vals;
                text[i - 1] = t;
            }

            return {
                values: values,
                text: text
            };

        }

        function updateWidget() {
            let dataNew = Object.assign({}, data);
            if (vis.editMode) {
                dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
            }

            let d = getValues(dataNew);

            d.values.forEach((val, index) => {
                let elem = $("#" + dataNew.wid + "-switch-" + index)

                for (const [key, v] of Object.entries(val)) {
                    elem.get(0).style.setProperty("--" + $this.camelCaseToKebabCase(key), v);
                }

            });
        }

        function createWidget(createEvents) {
            let dataNew = Object.assign({}, data);

            if (vis.editMode) {
                dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
            }

            let d = getValues(dataNew);
            let values = d.values;

            let width = dataNew.iWidth;
            if (!isNaN(width)) {
                width += "px";
            }

            let height = dataNew.iHeight;
            if (!isNaN(height)) {
                height += "px";
            }

            let borderRadius = dataNew.iCornerRadiusUL + "px " + dataNew.iCornerRadiusUR + "px " + dataNew.iCornerRadiusLR + "px " + dataNew.iCornerRadiusLL + "px"
            let border = dataNew.iBorderSize + "px " + dataNew.iBorderStyle + " var(--border-color)"
            let shadow = dataNew.iShadowXOffset + "px " + dataNew.iShadowYOffset + "px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px var(--box-shadow-col),inset " +
                dataNew.iShadowInnerXOffset + "px " + dataNew.iShadowInnerYOffset + "px " + dataNew.iShadowInnerBlur + "px " + dataNew.iShadowInnerSpread + "px var(--box-shadow-inner-col)"

            let styles = [];
            let boxStyles = [];
            let labelStyles = [];
            let boxEntryStyles = [];

            styles.push("min-height: " + height);
            styles.push("--width: " + width);
            styles.push("--height: " + height);

            if (dataNew.iCheckboxOrientation == "vertical") {
                styles.push("flex-direction: column");
                boxEntryStyles.push("margin-bottom: " + dataNew.iCheckboxSpacing + "px");
            }
            else if (dataNew.iCheckboxOrientation == "horizontal") {
                styles.push("flex-direction: row");
                boxEntryStyles.push("margin-right: " + dataNew.iCheckboxSpacing + "px");
            }

            labelStyles.push("padding-left: calc(" + dataNew.iBorderSize + "px + 5px)");

            if (dataNew.iShadowTextXOffset > 0 || dataNew.iShadowTextYOffset > 0 || dataNew.iShadowTextBlur > 0) {
                labelStyles.push("text-shadow: " + dataNew.iShadowTextXOffset + "px " + dataNew.iShadowTextYOffset + "px " + dataNew.iShadowTextBlur + "px var(--text-shadow-col)");
            }

            boxStyles.push("width: " + width);
            boxStyles.push("height: " + height);
            boxStyles.push("background: var(--background)");
            boxStyles.push("border-radius: " + borderRadius);
            boxStyles.push("border: " + border);
            boxStyles.push("box-shadow: " + shadow);

            boxStyles = boxStyles.join("; ");
            labelStyles = labelStyles.join("; ");
            styles = styles.join("; ");
            boxEntryStyles = boxEntryStyles.join("; ");

            let boxes = [];

            values.forEach((val, index) => {

                let styles2 = [];

                styles2.push("--background: " + val.background);
                styles2.push("--border-color: " + val.borderColor);
                styles2.push("--box-shadow-col: " + val.boxShadowCol);
                styles2.push("--box-shadow-inner-col: " + val.boxShadowInnerCol);
                styles2.push("--text-shadow-col: " + val.textShadowCol);
                styles2.push("--check-color: " + val.checkColor);

                styles2 = styles2.join(";");

                let text = d.text[index];

                boxes.push(`
				<div id="` + dataNew.wid + `-switch-` + index + `" 
				 	 class="vis-inventwo-checkbox-box-container" style="` + boxEntryStyles + `;` + styles2 + `">
					<div class="vis-inventwo-checkbox-box ` + dataNew.iCheckboxIcon + `" style="` + boxStyles + `"></div>
						<div class="vis-inventwo-checkbox-text" style="` + labelStyles + `">
						` + text + `
					</div>
				</div>
				`);
            });

            let html = `
			<div class="vis-inventwo-class vis-widget-body vis-inventwo-checkbox" style="` + styles + `">
				` + boxes.join("") + `
			</div>`;

            $(el).html(html);

            let s = `
			<style>
			#` + dataNew.wid + ` label:after{
				border-color: var(--check-color);
				left: 5px;
				width: 5px;
			}
			</style>
			`;

            $(el).before($(s));

            //Bindings
            setTimeout(function () {
                if (createEvents) {
                    values.forEach((val, index) => {
                        vis.binds["vis-inventwo"].handleCheckbox(el, dataNew, index);
                    });
                }
            }, 500);
        }
    },

    //Switch Funktion - Datenpunktwert wechseln
    handleToggleSwitch: function (el, data) {
        var $this = $(el);

        var oid = data.oid;

        if (!vis.editMode) {
            var moved = false;
            $this.parent().on("click touchend", function () {

                if (vis.detectBounce(this)) return;
                if (moved) return;

                var val = vis.states[oid + ".val"];
                var valFalse = vis.binds["vis-inventwo"].convertValue(data.iValueFalse);
                var valTrue = vis.binds["vis-inventwo"].convertValue(data.iValueTrue);

                if (val == valFalse) {
                    vis.setValue(oid, valTrue);
                }
                else {
                    vis.setValue(oid, valFalse);
                }

            }).on("touchmove", function () {
                moved = true;
            }).on("touchstart", function () {
                moved = false;
            });

        }

    },

    //Switch Funktion - Datenpunktwert wechseln
    handleCheckbox: function (el, data, index = null) {
        var $this = $(el);

        var oid = data["oid" + (index + 1)];

        if (!vis.editMode) {
            var moved = false;
            if (index == null) {
                $this.parent().on("click touchend", function () {

                    if (vis.detectBounce(this)) return;
                    if (moved) return;

                    var val = vis.states[oid + ".val"];
                    var valFalse = vis.binds["vis-inventwo"].convertValue(data.iValueFalse);
                    var valTrue = vis.binds["vis-inventwo"].convertValue(data.iValueTrue);

                    if (val == valFalse) {
                        vis.setValue(oid, valTrue);
                    }
                    else {
                        vis.setValue(oid, valFalse);
                    }

                }).on("touchmove", function () {
                    moved = true;
                }).on("touchstart", function () {
                    moved = false;
                });
            }
            else {

                $('#' + data.wid + '-switch-' + index).unbind();
                $('#' + data.wid + '-switch-' + index).on("click touchend", function () {

                    if (vis.detectBounce(this)) return;
                    if (moved) return;

                    var val = vis.states[oid + ".val"];
                    var valFalse = vis.binds["vis-inventwo"].convertValue(data["iValueFalse" + (index + 1)]);
                    var valTrue = vis.binds["vis-inventwo"].convertValue(data["iValueTrue" + (index + 1)]);

                    if (val == valFalse) {
                        vis.setValue(oid, valTrue);
                    }
                    else {
                        vis.setValue(oid, valFalse);
                    }

                }).on("touchmove", function () {
                    moved = true;
                }).on("touchstart", function () {
                    moved = false;
                });
            }

        }

    },

    //Colors
    hexToRgb: function (hex) {
        if ((/^#([A-Fa-f0-9]{3}$)|([A-Fa-f0-9]{6}$)/.test(hex))) {
            // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
            const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, (m, r, g, b) => {
                return r + r + g + g + b + b;
            });

            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

            return result
                ? [
                    parseInt(result[1], 16),
                    parseInt(result[2], 16),
                    parseInt(result[3], 16),
                ]
                : null;
        }
        else {
            return null;
        }
    },
    rgbToHex: function (rgb) {
        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
    },
    cieConvert: function (value, type) {
        class ColorConverter {
            static getGamutRanges() {
                let gamutA = {
                    red: [0.704, 0.296],
                    green: [0.2151, 0.7106],
                    blue: [0.138, 0.08]
                };

                let gamutB = {
                    red: [0.675, 0.322],
                    green: [0.409, 0.518],
                    blue: [0.167, 0.04]
                };

                let gamutC = {
                    red: [0.692, 0.308],
                    green: [0.17, 0.7],
                    blue: [0.153, 0.048]
                };

                let defaultGamut = {
                    red: [1.0, 0],
                    green: [0.0, 1.0],
                    blue: [0.0, 0.0]
                };

                return {"gamutA": gamutA, "gamutB": gamutB, "gamutC": gamutC, "default": defaultGamut}
            }

            static getLightColorGamutRange(modelId = null) {
                let ranges = ColorConverter.getGamutRanges();
                let gamutA = ranges.gamutA;
                let gamutB = ranges.gamutB;
                let gamutC = ranges.gamutC;

                let philipsModels = {
                    LST001: gamutA,
                    LLC010: gamutA,
                    LLC011: gamutA,
                    LLC012: gamutA,
                    LLC006: gamutA,
                    LLC005: gamutA,
                    LLC007: gamutA,
                    LLC014: gamutA,
                    LLC013: gamutA,

                    LCT001: gamutB,
                    LCT007: gamutB,
                    LCT002: gamutB,
                    LCT003: gamutB,
                    LLM001: gamutB,

                    LCT010: gamutC,
                    LCT014: gamutC,
                    LCT015: gamutC,
                    LCT016: gamutC,
                    LCT011: gamutC,
                    LLC020: gamutC,
                    LST002: gamutC,
                    LCT012: gamutC,
                };

                if (!!philipsModels[modelId]) {
                    return philipsModels[modelId];
                }

                return ranges.default;
            }


            static rgbToXy(red, green, blue, modelId = null) {
                function getGammaCorrectedValue(value) {
                    return (value > 0.04045) ? Math.pow((value + 0.055) / (1.0 + 0.055), 2.4) : (value / 12.92)
                }

                let colorGamut = ColorConverter.getLightColorGamutRange(modelId);

                red = parseFloat(red / 255);
                green = parseFloat(green / 255);
                blue = parseFloat(blue / 255);

                red = getGammaCorrectedValue(red);
                green = getGammaCorrectedValue(green);
                blue = getGammaCorrectedValue(blue);

                let x = red * 0.649926 + green * 0.103455 + blue * 0.197109;
                let y = red * 0.234327 + green * 0.743075 + blue * 0.022598;
                let z = red * 0.0000000 + green * 0.053077 + blue * 1.035763;

                let xy = {
                    x: x / (x + y + z),
                    y: y / (x + y + z)
                };

                if (!ColorConverter.xyIsInGamutRange(xy, colorGamut)) {
                    xy = ColorConverter.getClosestColor(xy, colorGamut);
                }

                return xy;
            }

            static xyIsInGamutRange(xy, gamut) {
                gamut = gamut || ColorConverter.getGamutRanges().gamutC;
                if (Array.isArray(xy)) {
                    xy = {
                        x: xy[0],
                        y: xy[1]
                    };
                }

                let v0 = [gamut.blue[0] - gamut.red[0], gamut.blue[1] - gamut.red[1]];
                let v1 = [gamut.green[0] - gamut.red[0], gamut.green[1] - gamut.red[1]];
                let v2 = [xy.x - gamut.red[0], xy.y - gamut.red[1]];

                let dot00 = (v0[0] * v0[0]) + (v0[1] * v0[1]);
                let dot01 = (v0[0] * v1[0]) + (v0[1] * v1[1]);
                let dot02 = (v0[0] * v2[0]) + (v0[1] * v2[1]);
                let dot11 = (v1[0] * v1[0]) + (v1[1] * v1[1]);
                let dot12 = (v1[0] * v2[0]) + (v1[1] * v2[1]);

                let invDenom = 1 / (dot00 * dot11 - dot01 * dot01);

                let u = (dot11 * dot02 - dot01 * dot12) * invDenom;
                let v = (dot00 * dot12 - dot01 * dot02) * invDenom;

                return ((u >= 0) && (v >= 0) && (u + v < 1));
            }

            static getClosestColor(xy, gamut) {
                function getLineDistance(pointA, pointB) {
                    return Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
                }

                function getClosestPoint(xy, pointA, pointB) {
                    let xy2a = [xy.x - pointA.x, xy.y - pointA.y];
                    let a2b = [pointB.x - pointA.x, pointB.y - pointA.y];
                    let a2bSqr = Math.pow(a2b[0], 2) + Math.pow(a2b[1], 2);
                    let xy2a_dot_a2b = xy2a[0] * a2b[0] + xy2a[1] * a2b[1];
                    let t = xy2a_dot_a2b / a2bSqr;

                    return {
                        x: pointA.x + a2b[0] * t,
                        y: pointA.y + a2b[1] * t
                    }
                }

                let greenBlue = {
                    a: {
                        x: gamut.green[0],
                        y: gamut.green[1]
                    },
                    b: {
                        x: gamut.blue[0],
                        y: gamut.blue[1]
                    }
                };

                let greenRed = {
                    a: {
                        x: gamut.green[0],
                        y: gamut.green[1]
                    },
                    b: {
                        x: gamut.red[0],
                        y: gamut.red[1]
                    }
                };

                let blueRed = {
                    a: {
                        x: gamut.red[0],
                        y: gamut.red[1]
                    },
                    b: {
                        x: gamut.blue[0],
                        y: gamut.blue[1]
                    }
                };

                let closestColorPoints = {
                    greenBlue: getClosestPoint(xy, greenBlue.a, greenBlue.b),
                    greenRed: getClosestPoint(xy, greenRed.a, greenRed.b),
                    blueRed: getClosestPoint(xy, blueRed.a, blueRed.b)
                };

                let distance = {
                    greenBlue: getLineDistance(xy, closestColorPoints.greenBlue),
                    greenRed: getLineDistance(xy, closestColorPoints.greenRed),
                    blueRed: getLineDistance(xy, closestColorPoints.blueRed)
                };

                let closestDistance;
                let closestColor;
                for (let i in distance) {
                    if (distance.hasOwnProperty(i)) {
                        if (!closestDistance) {
                            closestDistance = distance[i];
                            closestColor = i;
                        }

                        if (closestDistance > distance[i]) {
                            closestDistance = distance[i];
                            closestColor = i;
                        }
                    }

                }
                return closestColorPoints[closestColor];
            }

            static xyBriToRgb(x, y, bri) {
                // function getReversedGammaCorrectedValue(value) {
                //     return value <= 0.0031308 ? 12.92 * value : (1.0 + 0.055) * Math.pow(value, (1.0 / 2.4)) - 0.055;
                // }
                //
                // let xy = {
                //     x: x,
                //     y: y
                // };
                //
                // let z = 1.0 - xy.x - xy.y;
                // let Y = bri / 255;
                // let X = (Y / xy.y) * xy.x;
                // let Z = (Y / xy.y) * z;
                // let r = X * 1.656492 - Y * 0.354851 - Z * 0.255038;
                // let g = -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
                // let b = X * 0.051713 - Y * 0.121364 + Z * 1.011530;
                //
                // r = getReversedGammaCorrectedValue(r);
                // g = getReversedGammaCorrectedValue(g);
                // b = getReversedGammaCorrectedValue(b);
                //
                // let red = parseInt(r * 255) > 255 ? 255 : parseInt(r * 255);
                // let green = parseInt(g * 255) > 255 ? 255 : parseInt(g * 255);
                // let blue = parseInt(b * 255) > 255 ? 255 : parseInt(b * 255);
                //
                // red = Math.abs(red);
                // green = Math.abs(green);
                // blue = Math.abs(blue);
                //
                // return [red, green, blue];

                function getReversedGammaCorrectedValue(value) {
                    return value <= 0.0031308 ? 12.92 * value : (1.0 + 0.055) * Math.pow(value, (1.0 / 2.4)) - 0.055;
                }

                let xy = {
                    x: x,
                    y: y
                };

                let z = 1.0 - xy.x - xy.y;
                let Y = bri / 255;
                let X = (Y / xy.y) * xy.x;
                let Z = (Y / xy.y) * z;
                let r = X * 1.656492 - Y * 0.354851 - Z * 0.255038;
                let g = -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
                let b = X * 0.051713 - Y * 0.121364 + Z * 1.011530;

                r = getReversedGammaCorrectedValue(r);
                g = getReversedGammaCorrectedValue(g);
                b = getReversedGammaCorrectedValue(b);

                // Bring all negative components to zero
                r = Math.max(r, 0);
                g = Math.max(g, 0);
                b = Math.max(b, 0);

                // If one component is greater than 1, weight components by that value
                let max = Math.max(r, g, b);
                if (max > 1) {
                    r = r / max;
                    g = g / max;
                    b = b / max;
                }

                return [
                    Math.floor(r * 255),
                    Math.floor(g * 255),
                    Math.floor(b * 255)
                ];

            }
        }

        if (type == "rgb") {
            let xy = value.split(",");
            return ColorConverter.xyBriToRgb(xy[0], xy[1], 254);
        }
        else if (type == "cie") {
            let xy = ColorConverter.rgbToXy(value[0], value[1], value[2]);
            return xy.x + "," + xy.y;
        }
    },

    //Color slider helpers
    updateColorSliderFields: function (wid, view) {
        vis.activeWidgets.forEach(function (el) {
            let data = vis.views[vis.activeView].widgets[el].data;
            let val = data.iColorSliderType;
            if (val == "RGB") {
                vis.hideShowAttr("oid", false);
                vis.hideShowAttr("iIdRed-oid", true);
                vis.hideShowAttr("iIdGreen-oid", true);
                vis.hideShowAttr("iIdBlue-oid", true);
            }
            else {
                vis.hideShowAttr("oid", true);
                vis.hideShowAttr("iIdRed-oid", false);
                vis.hideShowAttr("iIdGreen-oid", false);
                vis.hideShowAttr("iIdBlue-oid", false);
            }

        });
    },
    updateColorSliderFieldsClick: function (el) {
        if (vis.editMode) {
            $(el).parent().on("mouseup click", function () {
                setTimeout(function () {
                    vis.binds["vis-inventwo"].updateColorSliderFields();
                }, 100);
            });

            $(".group-control").on("mouseup click", function () {
                setTimeout(function () {
                    vis.binds["vis-inventwo"].updateColorSliderFields();
                }, 100);
            });
        }
    },

    gridWidget: function (wid, data) {
        console.log("CREATE GRID");

        let $widget = $('#' + wid);

        if (!$widget.length) {
            return setTimeout(function () {
                vis.binds['vis-inventwo'].gridWidget(wid, data);
            }, 100);
        }

        console.log($widget);

        let colWidth = data.iGridColWidth;
        let rowHeight = data.iGridRowHeight;
        let gap = data.iGridGap;
        let padding = data.iGridPadding;

        if (!isNaN(colWidth)) {
            colWidth = colWidth + "px";
        }
        if (!isNaN(rowHeight)) {
            rowHeight = rowHeight + "px";
        }
        if (!isNaN(gap)) {
            gap = gap + "px";
        }
        if (!isNaN(padding)) {
            padding = padding + "px";
        }


        let $view = $widget.closest('.vis-view');
        console.log($view);
        //let $grid = $('<div class="vis-inventwo-grid-container"></div>');
        //$view.append($grid);

        $view.addClass("vis-inventwo-grid-view");
        $view.css("grid-auto-columns", "calc(" + colWidth + " - " + gap + ")");
        $view.css("grid-auto-rows", "calc(" + rowHeight + " - " + gap + ")");
        $view.css("width", "calc(100% - " + padding + ")");
        $view.css("height", "calc(100% - " + padding + ")");
        $view.css("grid-gap", gap);
        $view.css("padding", padding);

        if (vis.editMode) {

            if (data.iGridShow) {


            }

        }

    }


};
