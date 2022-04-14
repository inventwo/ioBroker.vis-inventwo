vis.binds["vis-inventwo-helper"] = {
    convertValue: function (type, value) {
        switch (type) {
            case "int":
                return parseInt(value);
            case "float":
                return parseFloat(value);
            case "bool":
                return value === "true" || value === true
            default:
                return value.toString();
        }
    },

    parseAndConvertValue: function (value) {
        //Check if boolean string
        if (value === "true")
            return true;
        if (value === "false")
            return false;

        //Check if numeric string
        if (!isNaN(value)) {
            return parseFloat(value);
        }

        return value;
    },

    setState: function (oid, value, parse = false) {
        if (parse) {
            value = vis.binds["vis-inventwo-helper"].parseAndConvertValue(value);
        }
        vis.setValue(oid, value)
    },

    getState: function (oid) {
        let value = vis.states[oid + ".val"]
        if (value === undefined) {
            value = null;
        }
        return value;
    },

    elementClicked:  function (element, callback) {
        let moved = false;

        element.on("click touchend", function (e) {
            if (e.type === 'touchend') {
                $(this).off('click');
                $(this).off('mouseenter');
            }

            if (vis.detectBounce(this) || moved) return;

            callback(this, event);

            e.preventDefault();

        }).on("touchmove", function () {
            moved = true;
        }).on("touchstart", function () {
            moved = false;
        });
    },

    unitize: function (value, unit = "px") {
        let regexp = new RegExp("var\((--[^\)]*)\)", "g");
        let match = regexp.exec(value);
        if (match !== undefined && match !== null && match.length > 1 && match[1] !== undefined && match[1] !== "") {
            return value;
        } else {
            if (isNaN(value)) {
                return value;
            }
        }

        return value + "" + unit;
    },

    replacePlaceholders: function (content, placeholders) {
        for (const [key, value] of Object.entries(placeholders)) {
            const searchRegExp = new RegExp("%%" + key + "%%", "g");
            content = content.replace(searchRegExp, value);
        }

        const searchRegExp = /%%[^%]*%%/g;
        content = content.replace(searchRegExp, '');

        return content
    },

    buttonResponse: function ($this, element, data, type){
        if (data.iStateResponseTime > 0) {
            if (type === "universal") {
                element.get(0).style.setProperty("--background", data.iButtonActive);
                element.get(0).style.setProperty("--box-shadow-col", data.iShadowColorActive);
                element.get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColorActive);
                element.get(0).style.setProperty("--border-col", data.iBorderColorActive);
                element.get(0).style.setProperty("--content-image-color-filter", data.iImgColorTrue);

                $this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageTrue !== undefined ? data.iImageTrue : "");
                vis.binds["vis-inventwo-helper"].getImgColorFilter(data.iImgColorTrue, data.wid);

                $this.find(".vis-inventwo-button-text").html(data.iTextTrue !== undefined ? data.iTextTrue : "");

                setTimeout(function () {
                    element.get(0).style.setProperty("--background", data.iButtonCol);
                    element.get(0).style.setProperty("--box-shadow-col", data.iShadowColor);
                    element.get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColor);
                    element.get(0).style.setProperty("--border-col", data.iBorderColor);
                    element.get(0).style.setProperty("--content-image-color-filter", data.iImgColorFalse);

                    $this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse !== undefined ? data.iImageFalse : "");
                    vis.binds["vis-inventwo-helper"].getImgColorFilter(data.iImgColorFalse, data.wid);

                    $this.find(".vis-inventwo-button-text").html(data.iTextFalse !== undefined ? data.iTextFalse : "");
                }, data.iStateResponseTime);
            }
            else if (type === "multi") {

                let found = false;

                for (let i = 1; i <= data.iUniversalValueCount; i++) {

                    let val = parseAndConvertValue(data["iValue" + i]);

                    if ((data.iUniversalWidgetType !== "Navigation" && data["oid" + i] !== undefined
                            && (vis.binds["vis-inventwo-helper"].getState(data["oid" + i]) === val && data["iValueComparison" + i] === "equal")
                            || (vis.binds["vis-inventwo-helper"].getState(data["oid" + i]) < val && data["iValueComparison" + i] === "lower")
                            || (vis.binds["vis-inventwo-helper"].getState(data["oid" + i]) > val && data["iValueComparison" + i] === "greater")
                            || (vis.binds["vis-inventwo-helper"].getState(data["oid" + i]) !== val && data["iValueComparison" + i] === "not")
                        )
                        ||
                        (data.iUniversalWidgetType === "Navigation" && data["iView" + i] === vis.activeView)) {

                        element.get(0).style.setProperty("--background", data["iButtonActiveM" + i]);
                        element.get(0).style.setProperty("--box-shadow-col", data["iShadowColorActiveM" + i]);
                        element.get(0).style.setProperty("--box-shadow-inner-col", data["iShadowInnerColorActiveM" + i]);
                        element.get(0).style.setProperty("--border-col", data["iBorderColorActiveM" + i]);
                        element.get(0).style.setProperty("--content-image-color-filter", data["iImgColorTrue" + i]);

                        $this.find(".vis-inventwo-button-imageContainer img").attr("src", data["iImageTrue" + i] !== undefined ? data["iImageTrue" + i] : "");
                        vis.binds["vis-inventwo-helper"].getImgColorFilter(data["iImgColorTrue" + i], data.wid);

                        $this.find(".vis-inventwo-button-text").html(data.iTextTrue !== undefined ? data.iTextTrue : "");
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    element.get(0).style.setProperty("--background", data["iButtonActiveM1"]);
                    element.get(0).style.setProperty("--box-shadow-col", data["iShadowColorActiveM1"]);
                    element.get(0).style.setProperty("--box-shadow-inner-col", data["iShadowInnerColorActiveM1"]);
                    element.get(0).style.setProperty("--border-col", data["iBorderColorActiveM1"]);
                    element.get(0).style.setProperty("--content-image-color-filter", data["iImgColorTrue1"]);

                    $this.find(".vis-inventwo-button-imageContainer img").attr("src", data["iImageTrue1"] !== undefined ? data["iImageTrue1"] : "");
                    vis.binds["vis-inventwo-helper"].getImgColorFilter(data["iImgColorTrue1"], data.wid);

                    $this.find(".vis-inventwo-button-text").html(data.iTextTrue !== undefined ? data.iTextTrue : "");
                }


                setTimeout(function () {

                    let backCol = data.iButtonCol;
                    let shadowCol = data.iShadowColor;
                    let shadowColInner = data.iShadowInnerColor;
                    let borderCol = data.iBorderColor;
                    let img = data.iImageFalse !== undefined ? data.iImageFalse : "";
                    let txt = data.iTextFalse !== undefined ? data.iTextFalse : "";
                    let imgColor = data.iImgColorFalse;

                    for (let i = 1; i <= data.iUniversalValueCount; i++) {
                        let val = vis.binds["vis-inventwo-helper"].parseAndConvertValue(data["iValue" + i]);

                        if ((data.iUniversalWidgetType !== "Navigation" && vis.binds["vis-inventwo-helper"].getState(data["oid" + i]) === val)
                            || (data.iUniversalWidgetType === "Navigation" && data["iView" + i] === vis.activeView)) {
                            backCol = data["iButtonActiveM" + i];
                            shadowCol = data["iShadowColorActiveM" + i];
                            shadowColInner = data["iShadowInnerColorActiveM" + i];
                            borderCol = data["iBorderColorActiveM" + i];
                            img = data["iImageTrue" + i] !== undefined ? data["iImageTrue" + i] : "";
                            imgColor = data["iImgColorFalse" + i];
                            txt = data["iTextTrue" + i] !== undefined ? data["iTextTrue" + i] : "";
                            break;
                        }
                    }

                    element.get(0).style.setProperty("--background", backCol);
                    element.get(0).style.setProperty("--box-shadow-col", shadowCol);
                    element.get(0).style.setProperty("--box-shadow-inner-col", shadowColInner);
                    element.get(0).style.setProperty("--border-col", borderCol);
                    element.get(0).style.setProperty("--content-image-color-filter", imgColor);

                    $this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
                    vis.binds["vis-inventwo-helper"].getImgColorFilter(imgColor, data.wid);

                    $this.find(".vis-inventwo-button-text").html(txt);

                }, data.iStateResponseTime);
            }
        }
    },

    isCurrentView: function (view){
        return view === vis.activeView;
    },

    compare: function (value1, value2, comparator = "equal"){
        const comparasionTable = {
            'greater': function (val1, val2) {
                return val1 > val2
            },
            'lower': function (val1, val2) {
                return val1 < val2
            },
            'equal': function (val1, val2) {
                return val1 === val2
            },
            'not': function (val1, val2) {
                return val1 !== val2
            },
            'greaterEqual': function (val1, val2) {
                return val1 >= val2
            },
            'lowerEqual': function (val1, val2) {
                return val1 <= val2
            },
        }

        if (comparator !== undefined && comparasionTable[comparator](value1, value2)) {
            return true;
        } else {
            return false;
        }
    },

    getButtonValuesFalse: function (data){
        let values = {
            styles: {},
            image: "",
            text: ""
        };
        values.styles["--background"] = data.iButtonCol;
        values.styles["--box-shadow-col"] = data.iShadowColor;
        values.styles["--box-shadow-inner-col"] = data.iShadowInnerColor;
        values.styles["--text-shadow-col"] = data.iShadowTextColor;
        values.styles["--border-col"] = data.iBorderColor;
        values.styles["--text-color"] = data.iTextColor;
        values.styles["--content-image-color-filter"] = data.iImgColorFalse;

        values.text = data.iTextFalse ? data.iTextFalse : data.iText ? data.iText : "";

        values.styles["--content-image-blink"] = parseInt(data.iImgBlinkFalse) / 1000 + "s";

        if (data.iImgColorInvertFalse === true) {
            values.styles["--content-image-invert"] = " filter: invert(1)";
        }

        if (data.iContentType === "html_text") {
            values.content = data.iHtmlTextFieldFalse;
        }
        else if(data.iContentType === "image"){
            values.content = data.iImageFalse !== undefined && data.iImageFalse !== "" ? data.iImageFalse : "";
        }

        return values;
    },

    getButtonValues: function (data, wid, type = "universal", onlyUpdate = false, index = 0){
        let values = {
            styles: {},
            image: "",
            text: ""
        };

        if(type === "universal"){
            const value = vis.binds["vis-inventwo-helper"].parseAndConvertValue(data.iValueTrue);
            const dpValue = vis.binds["vis-inventwo-helper"].parseAndConvertValue(vis.binds["vis-inventwo-helper"].getState(data.oid));
            const widgetType = data.iUniversalWidgetType;

            if ((widgetType === "Navigation" && vis.binds["vis-inventwo-helper"].isCurrentView(data.nav_view))
                ||
                (["Switch", "Background"].includes(widgetType) &&
                    (
                        (data.iValueType === "value" && vis.binds["vis-inventwo-helper"].compare(value, dpValue, data.iValueComparison))
                        ||
                        (data.iValueType === "boolean" && dpValue)
                    )
                )
            )
            {
                values.styles["--background"] = data.iButtonActive;
                values.styles["--box-shadow-col"] = data.iShadowColorActive;
                values.styles["--box-shadow-inner-col"] = data.iShadowInnerColorActive;
                values.styles["--text-shadow-col"] = data.iShadowTextColorActive;
                values.styles["--border-col"] = data.iBorderColorActive;
                values.styles["--text-color"] = data.iTextColorActive;
                values.styles["--content-image-color-filter"] = data.iImgColorTrue;

                values.image = data.iImageTrue !== undefined && data.iImageTrue !== "" ? data.iImageTrue : "";
                values.text = data.iTextTrue !== undefined && data.iTextTrue !== "" ? data.iTextTrue : "";

                values.styles["--content-image-blink"] = parseInt(data.iImgBlinkTrue) / 1000 + "s";

                if (data.iImgColorInvertTrue === true) {
                    values.styles["--content-image-invert"] = " filter: invert(1)";
                }

                if (data.iContentType === "html_text") {
                    values.content = data.iHtmlTextFieldTrue;
                }
                else if(data.iContentType === "image"){
                    values.content = data.iImageTrue !== undefined && data.iImageTrue !== "" ? data.iImageTrue : "";
                }
            }
            else{
                values = {...values, ...vis.binds["vis-inventwo-helper"].getButtonValuesFalse(data)};
            }
        }
        else if(type === "multi"){
            let found = false;

            for (let i = 1; i <= data.iUniversalValueCount; i++) {
                const value = vis.binds["vis-inventwo-helper"].parseAndConvertValue(data["iValue" + i]);
                const dpValue = vis.binds["vis-inventwo-helper"].parseAndConvertValue(vis.binds["vis-inventwo-helper"].getState(data["oid" + i]));

                if (
                    (
                        (
                            (data["iCheckType" + i] === "iCheckDefault" && data.iUniversalWidgetType === "Navigation")
                            ||
                            data["iCheckType" + i] === "iCheckView"
                        ) && vis.binds["vis-inventwo-helper"].isCurrentView(data["iView" + i])
                    )
                    ||
                    (
                        (
                            (
                                data["iCheckType" + i] === "iCheckDefault" && data.iUniversalWidgetType !== "Navigation"
                            ) || data["iCheckType" + i] === "iCheckDpValue"
                        ) && data["oid" + i] !== undefined && vis.binds["vis-inventwo-helper"].compare(value, dpValue, data["iValueComparison" + i])
                    )
                ){
                    found = true;

                    values.styles["--background"] = data["iButtonActiveM" + i];
                    values.styles["--box-shadow-col"] = data["iShadowColorActiveM" + i];
                    values.styles["--box-shadow-inner-col"] = data["iShadowInnerColorActiveM" + i];
                    values.styles["--text-shadow-col"] = data["iShadowTextColorActive" + i];
                    values.styles["--border-col"] = data["iBorderColorActiveM" + i];
                    values.styles["--text-color"] = data["iTextColorActive" + i];
                    values.styles["--content-image-color-filter"] = data["iImgColorTrue" + i];

                    values.text = data["iTextTrue" + i] !== undefined && data["iTextTrue" + i] !== "" ? data["iTextTrue" + i] : "";

                    values.styles["--content-image-blink"] = parseInt(data["iImgColorTrue" + i]) / 1000 + "s";

                    if (data["iImgColorInvert" + i] === true) {
                        values.styles["--content-image-invert"] = " filter: invert(1)";
                    }

                    if (data.iContentType === "html_text") {
                        values.content = data["iHtmlTextFieldTrue" + i];
                    }
                    else if(data.iContentType === "image"){
                        values.content = data["iImageTrue" + i] !== undefined && data["iImageTrue" + i] !== "" ? data["iImageTrue" + i] : "";
                    }
                }
            }

            if(!found){
                values = {...values, ...vis.binds["vis-inventwo-helper"].getButtonValuesFalse(data)};
            }
        }
        else if(type === "index"){
            const value = vis.binds["vis-inventwo-helper"].parseAndConvertValue(data["iValue" + index]);
            const dpValue = vis.binds["vis-inventwo-helper"].parseAndConvertValue(vis.binds["vis-inventwo-helper"].getState(data.oid));

            if (
                /*(
                    (
                        (data["iCheckType" + index] === "iCheckDefault" && data.iUniversalWidgetType === "Navigation")
                        ||
                        data["iCheckType" + index] === "iCheckView"
                    ) && isCurrentView(data["iView" + index])
                )
                ||*/
                (
                    /*(
                        (
                            data["iCheckType" + index] === "iCheckDefault" && data.iUniversalWidgetType !== "Navigation"
                        ) || data["iCheckType" + index] === "iCheckDpValue"
                    ) && */
                    data.iCheckType === "iCheckDpValue" && data.oid !== undefined && vis.binds["vis-inventwo-helper"].compare(value, dpValue, "equal")
                )
                ||
                (
                    data.iCheckType === "iCheckView" && vis.binds["vis-inventwo-helper"].isCurrentView(data["iView" + index])
                )
            ){
                values.styles["--background"] = data["iButtonActive" + index] ? data["iButtonActive" + index] : data.iButtonActive;
                values.styles["--box-shadow-col"] = data.iShadowColorActive;
                values.styles["--box-shadow-inner-col"] = data.iShadowInnerColorActive;
                values.styles["--text-shadow-col"] = data.iShadowTextColorActive;
                values.styles["--border-col"] = data.iBorderColorActive;
                values.styles["--text-color"] = data.iTextColorActive;
                values.styles["--content-image-color-filter"] = data["iImgColorTrue" + index];

                values.styles["--content-image-blink"] = parseInt(data.iImgBlinkTrue) / 1000 + "s";

                if (data["iImgColorInvertTrue" + index] === true) {
                    values.styles["--content-image-invert"] = " filter: invert(1)";
                }

                values.content = data["iImageTrue" + index] ? data["iImageTrue" + index] : "";
                values.text = data["iTextTrue" + index] ? data["iTextTrue" + index] : "";
            }
            else{
                values = {...values, ...vis.binds["vis-inventwo-helper"].getButtonValuesFalse(data)};

                values.styles["--content-image-color-filter"] = data["iImgColorFalse" + index];

                if(data["iButtonCol" + index]){
                    values.styles["--background"] = data["iButtonCol" + index]
                }

                if (data["iImgColorInvertTrue" + index] === true) {
                    values.styles["--content-image-invert"] = " filter: invert(1)";
                }

                values.content = data["iImageTrue" + index] ? data["iImageTrue" + index] : "";
                values.text = data["iTextFalse" + index] ? data["iTextFalse" + index] : "";
            }

            index--;
        }

        if(!onlyUpdate) {

            values.styles["--background-opacity"] = data.iOpacityBack;
            values.styles["--content-opacity"] = data.iOpacityCtn;

            //Shadow
            values.styles["--background-shadow"] = vis.binds["vis-inventwo-helper"].unitize(data.iShadowXOffset) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowYOffset) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowBlur) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowSpread) + " var(--box-shadow-col),inset "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowInnerXOffset) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowInnerYOffset) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowInnerBlur) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowInnerSpread)
                + " var(--box-shadow-inner-col)";

            //Border
            values.styles["--background-border"] = vis.binds["vis-inventwo-helper"].unitize(data.iBorderSize)
                + " " + data.iBorderStyle + " var(--border-col)";

            //Corners
            values.styles["--background-border-radius"] = vis.binds["vis-inventwo-helper"].unitize(data.iCornerRadiusUL) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iCornerRadiusUR) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iCornerRadiusLR) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iCornerRadiusLL);

            //Text shadow
            values.styles["--text-shadow"] = vis.binds["vis-inventwo-helper"].unitize(data.iShadowTextXOffset) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowTextYOffset) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iShadowTextBlur)
                + " var(--text-shadow-col);";

            //Margins
            values.styles["--content-image-margin"] = vis.binds["vis-inventwo-helper"].unitize(data.iImgSpaceTop) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iImgSpaceRight) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iImgSpaceBottom) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iImgSpaceLeft);
            values.styles["--text-margin"] = vis.binds["vis-inventwo-helper"].unitize(data.iTextSpaceTop) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iTextSpaceRight) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iTextSpaceBottom) + " "
                + vis.binds["vis-inventwo-helper"].unitize(data.iTextSpaceLeft);

            //
            if (data.iContentVertAlign === "iStart")
                values.styles["--content-justify-content"] = "flex-start";
            else if (data.iContentVertAlign === "iCenter")
                values.styles["--content-justify-content"] = "center";
            else if (data.iContentVertAlign === "iEnd")
                values.styles["--content-justify-content"] = "flex-end";
            else if (data.iContentVertAlign === "iSpace-between")
                values.styles["--content-justify-content"] = "space-between";

            //
            if (data.iContentFlexDirection === "vertical")
                values.styles["--content-flex-direction"] = "column";
            else if (data.iContentFlexDirection === "horizontal")
                values.styles["--content-flex-direction"] = "row";

            //
            if (data.iContentOrder === "orderTextImg")
                values.styles["--content-image-order"] = 2;
            else
                values.styles["--content-image-order"] = 0;

            //
            if (data.iImgAlign === "iStart")
                values.styles["--content-image-align-self"] = "flex-start";
            else if (data.iImgAlign === "iCenter")
                values.styles["--content-image-align-self"] = "center";
            else if (data.iImgAlign === "iEnd")
                values.styles["--content-image-align-self"] = "flex-end";

            if (data.iContentFlexDirection === "vertical") {
                if (data.iTextAlign === "iStart")
                    values.styles["--text-text-align"] = "left";
                else if (data.iTextAlign === "iCenter")
                    values.styles["--text-text-align"] = "center";
                else if (data.iTextAlign === "iEnd")
                    values.styles["--text-text-align"] = "right";
            } else {
                if (data.iTextAlign === "iStart")
                    values.styles["--text-align-self"] = "flex-start";
                else if (data.iTextAlign === "iCenter")
                    values.styles["--text-align-self"] = "center";
                else if (data.iTextAlign === "iEnd")
                    values.styles["--text-align-self"] = "flex-end";
            }

            values.styles["--image-size"] = vis.binds["vis-inventwo-helper"].unitize(data.iIconSize);

            if (data.iContentType !== "html_text") {
                let imageTransforms = [];
                imageTransforms.push("rotateZ(" + data.iImgRotation + "deg)");
                if (data.iFlipImage) {
                    imageTransforms.push("scaleX(-1)");
                }
                values.styles["--image-transform"] = imageTransforms.join(" ");
            }
        }

        if(values.styles["--content-image-color-filter"] !== undefined && values.styles["--content-image-color-filter"] !== "") {
            vis.binds["vis-inventwo-helper"].getImgColorFilter(values.styles["--content-image-color-filter"], wid, null, false, false, index);
        }

        return values;
    },

    updateButton: function (el, data, type, wid, index = 0){

        let values = vis.binds["vis-inventwo-helper"].getButtonValues(data, wid, type, true, index);

        for (const [key, value] of Object.entries(values.styles)) {
            el.get(0).style.setProperty(key, value);
        }

        if(index > 0){
            index--;
        }

        // vis.binds["vis-inventwo-helper"].getImgColorFilter(values.styles["--content-image-color-filter"], wid, index);

        el.find('.vis-inventwo-button-text').html(values.text);

        if (data.iContentType === "html_text") {
            el.find('.vis-inventwo-button-imageContainer div').html(values.content);
        }
        else if(data.iContentType === "image"){
            el.find('.vis-inventwo-button-imageContainer img').attr('src', values.content);
        }
    },

    getTime: function (timezone = "Europe/Berlin") {
        let date = new Date().toLocaleString('en-US', {timeZone: timezone});
        date = new Date(date);
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        return {
            hour: hour,
            minutes: minutes,
            seconds: seconds,
        }
    },

    getDatapointsValues: function (data) {

        for (let [key, value] of Object.entries(data)) {
            if (key.substring(0, 1) == "i") {

                if (key.startsWith("iTblCellThresholdsText", 0)) {
                    continue;
                }

                let matches = [];
                let reg = /\{([^\{\}]*)\}/gm;
                let match = reg.exec(value);
                while (match != null) {
                    matches.push(match);
                    match = reg.exec(value);
                }

                matches.forEach(function (match) {
                    let val = vis.states.attr(match[1] + ".val");
                    data[key] = data[key].replace(match[0], val);
                });
            }
        }

        return data;
    },

    /*
    Generierung der Filter um ein Icon zu färben. Der Code stammt NICHT von uns.
    Ich hab ihn nur etwas abgeändert

    Credits goes to MultiplyByZer0
    https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991

    Code in Codepen -> https://codepen.io/sosuke/pen/Pjoqqp

    START
 */
    colorFilterGenerator: function (hex) {

        class Color {
            constructor(r, g, b) {
                this.set(r, g, b);
            }

            toString() {
                return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
            }

            set(r, g, b) {
                this.r = this.clamp(r);
                this.g = this.clamp(g);
                this.b = this.clamp(b);
            }

            hueRotate(angle = 0) {
                angle = angle / 180 * Math.PI;
                const sin = Math.sin(angle);
                const cos = Math.cos(angle);

                this.multiply([
                    0.213 + cos * 0.787 - sin * 0.213,
                    0.715 - cos * 0.715 - sin * 0.715,
                    0.072 - cos * 0.072 + sin * 0.928,
                    0.213 - cos * 0.213 + sin * 0.143,
                    0.715 + cos * 0.285 + sin * 0.140,
                    0.072 - cos * 0.072 - sin * 0.283,
                    0.213 - cos * 0.213 - sin * 0.787,
                    0.715 - cos * 0.715 + sin * 0.715,
                    0.072 + cos * 0.928 + sin * 0.072,
                ]);
            }

            grayscale(value = 1) {
                this.multiply([
                    0.2126 + 0.7874 * (1 - value),
                    0.7152 - 0.7152 * (1 - value),
                    0.0722 - 0.0722 * (1 - value),
                    0.2126 - 0.2126 * (1 - value),
                    0.7152 + 0.2848 * (1 - value),
                    0.0722 - 0.0722 * (1 - value),
                    0.2126 - 0.2126 * (1 - value),
                    0.7152 - 0.7152 * (1 - value),
                    0.0722 + 0.9278 * (1 - value),
                ]);
            }

            sepia(value = 1) {
                this.multiply([
                    0.393 + 0.607 * (1 - value),
                    0.769 - 0.769 * (1 - value),
                    0.189 - 0.189 * (1 - value),
                    0.349 - 0.349 * (1 - value),
                    0.686 + 0.314 * (1 - value),
                    0.168 - 0.168 * (1 - value),
                    0.272 - 0.272 * (1 - value),
                    0.534 - 0.534 * (1 - value),
                    0.131 + 0.869 * (1 - value),
                ]);
            }

            saturate(value = 1) {
                this.multiply([
                    0.213 + 0.787 * value,
                    0.715 - 0.715 * value,
                    0.072 - 0.072 * value,
                    0.213 - 0.213 * value,
                    0.715 + 0.285 * value,
                    0.072 - 0.072 * value,
                    0.213 - 0.213 * value,
                    0.715 - 0.715 * value,
                    0.072 + 0.928 * value,
                ]);
            }

            multiply(matrix) {
                const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
                const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
                const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
                this.r = newR;
                this.g = newG;
                this.b = newB;
            }

            brightness(value = 1) {
                this.linear(value);
            }

            contrast(value = 1) {
                this.linear(value, -(0.5 * value) + 0.5);
            }

            linear(slope = 1, intercept = 0) {
                this.r = this.clamp(this.r * slope + intercept * 255);
                this.g = this.clamp(this.g * slope + intercept * 255);
                this.b = this.clamp(this.b * slope + intercept * 255);
            }

            invert(value = 1) {
                this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
                this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
                this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
            }

            hsl() {
                // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
                const r = this.r / 255;
                const g = this.g / 255;
                const b = this.b / 255;
                const max = Math.max(r, g, b);
                const min = Math.min(r, g, b);
                let h, s, l = (max + min) / 2;

                if (max === min) {
                    h = s = 0;
                }
                else {
                    const d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;

                        case g:
                            h = (b - r) / d + 2;
                            break;

                        case b:
                            h = (r - g) / d + 4;
                            break;
                    }
                    h /= 6;
                }

                return {
                    h: h * 100,
                    s: s * 100,
                    l: l * 100,
                };
            }

            clamp(value) {
                if (value > 255) {
                    value = 255;
                }
                else if (value < 0) {
                    value = 0;
                }
                return value;
            }
        }

        class Solver {
            constructor(target, baseColor) {
                this.target = target;
                this.targetHSL = target.hsl();
                this.reusedColor = new Color(0, 0, 0);
            }

            solve() {
                const result = this.solveNarrow(this.solveWide());
                return {
                    values: result.values,
                    loss: result.loss,
                    filter: this.css(result.values),
                };
            }

            solveWide() {
                const A = 5;
                const c = 15;
                const a = [60, 180, 18000, 600, 1.2, 1.2];

                let best = {loss: Infinity};
                for (let i = 0; best.loss > 25 && i < 3; i++) {
                    const initial = [50, 20, 3750, 50, 100, 100];
                    const result = this.spsa(A, a, c, initial, 1000);
                    if (result.loss < best.loss) {
                        best = result;
                    }
                }
                return best;
            }

            solveNarrow(wide) {
                const A = wide.loss;
                const c = 2;
                const A1 = A + 1;
                const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
                return this.spsa(A, a, c, wide.values, 500);
            }

            spsa(A, a, c, values, iters) {
                const alpha = 1;
                const gamma = 0.16666666666666666;

                let best = null;
                let bestLoss = Infinity;
                const deltas = new Array(6);
                const highArgs = new Array(6);
                const lowArgs = new Array(6);

                for (let k = 0; k < iters; k++) {
                    const ck = c / Math.pow(k + 1, gamma);
                    for (let i = 0; i < 6; i++) {
                        deltas[i] = Math.random() > 0.5 ? 1 : -1;
                        highArgs[i] = values[i] + ck * deltas[i];
                        lowArgs[i] = values[i] - ck * deltas[i];
                    }

                    const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
                    for (let i = 0; i < 6; i++) {
                        const g = lossDiff / (2 * ck) * deltas[i];
                        const ak = a[i] / Math.pow(A + k + 1, alpha);
                        values[i] = fix(values[i] - ak * g, i);
                    }

                    const loss = this.loss(values);
                    if (loss < bestLoss) {
                        best = values.slice(0);
                        bestLoss = loss;
                    }
                }
                return {values: best, loss: bestLoss};

                function fix(value, idx) {
                    let max = 100;
                    if (idx === 2 /* saturate */) {
                        max = 7500;
                    }
                    else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
                        max = 200;
                    }

                    if (idx === 3 /* hue-rotate */) {
                        if (value > max) {
                            value %= max;
                        }
                        else if (value < 0) {
                            value = max + value % max;
                        }
                    }
                    else if (value < 0) {
                        value = 0;
                    }
                    else if (value > max) {
                        value = max;
                    }
                    return value;
                }
            }

            loss(filters) {
                // Argument is array of percentages.
                const color = this.reusedColor;
                color.set(0, 0, 0);

                color.invert(filters[0] / 100);
                color.sepia(filters[1] / 100);
                color.saturate(filters[2] / 100);
                color.hueRotate(filters[3] * 3.6);
                color.brightness(filters[4] / 100);
                color.contrast(filters[5] / 100);

                const colorHSL = color.hsl();
                return (
                    Math.abs(color.r - this.target.r) +
                    Math.abs(color.g - this.target.g) +
                    Math.abs(color.b - this.target.b) +
                    Math.abs(colorHSL.h - this.targetHSL.h) +
                    Math.abs(colorHSL.s - this.targetHSL.s) +
                    Math.abs(colorHSL.l - this.targetHSL.l)
                );
            }

            css(filters) {
                function fmt(idx, multiplier = 1) {
                    return Math.round(filters[idx] * multiplier);
                }

                return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%);`;
            }
        }


        function hexToRgb(hex) {
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
        }

        let filter = "";

        if (hex != undefined && hex != "") {
            let rgb = hexToRgb(hex);

            if (rgb != null && rgb.length === 3) {
                let loss = 999;
                for (let i = 0; i < 10; i++) {
                    const color = new Color(rgb[0], rgb[1], rgb[2]);
                    const solver = new Solver(color);
                    const result = solver.solve();

                    if (result.loss < loss) {
                        filter = result.filter;
                    }
                }
            }
        }

        return filter;

    },
    /*
		END Colorfilter
	 */

    //Aktualisierung der Filter für das Icon
    getImgColorFilter: function (color, wid, varName = null, invert = false, isTheme = false, index = 0) {

        if (color === undefined || color === "") {
            return;
        }

        if(wid === undefined){
            console.log("wid missing!");
            return;
        }

        let regexp = /var\((--[^\)]*)\)/g;
        let match = regexp.exec(color);

        if (match !== undefined && match !== null && match.length > 1 && match[1] != undefined && match[1] != "") {
            color = getComputedStyle(document.body).getPropertyValue(match[1]);
        }

        let filter = "";
        color = color.toLowerCase();

        if (/^#[0-9A-F]{6}$/i.test(color)) {

            vis.conn._socket.emit("getState", "vis-inventwo.0.intern.ColorFilter." + color.substring(1), function (err, obj) {
                if (obj != undefined) {
                    filter = obj.val;
                }
                else {
                    filter = vis.binds["vis-inventwo-helper"].colorFilterGenerator(color);
                    vis.conn._socket.emit("setObject", "vis-inventwo.0.intern.ColorFilter." + color.substring(1), {
                        type: "state",
                        common: {
                            name: color,
                            type: "string",
                            role: "inventwo.color",
                            read: true,
                            write: true,
                        },
                        native: {},
                    });

                    vis.setValue("vis-inventwo.0.intern.ColorFilter." + color.substring(1), filter);
                }

                if (varName == null) {

                    $("#" + wid).find(".vis-inventwo-button-new").get(index).style.setProperty("--content-image-color-filter-filter", filter.substring(8, filter.length - 1));
                }
                else {
                    let el = $('#' + wid).find('.vis-inventwo-button-new').get(index);
                    if(isTheme){
                        el = document.documentElement;
                    }
                    el.style.setProperty("--" + varName, filter.substring(8, filter.length - 1))
                }
            });
        }
        else {
            if (invert) {
                $("#" + wid).find(".vis-inventwo-img").css("filter", "invert(1)");
            }
            else {
                $("#" + wid).find(".vis-inventwo-img").css("filter", "");
            }
        }

    },

    upperCamelCaseToMinus: function (s){
        return s.replace(/\.?([A-Z]+)/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "");
    },
}