/*
	ioBroker.vis vis-inventwo Widget-Set
	version: "0.1.2"
	Copyright 2020 jkvarel jkvarel@inventwo.com
*/
"use strict";

/*
if (vis.editMode) {
        $.extend(true, systemDictionary, {
            "Instance": {
		        "en": "Instance",
		        "de": "Instanz"
            },
            "iText": {
	        	"en": "Label",
	        	"de": "Beschriftung"
            },
            "iIconSize": {
	        	"en": "Icon size",
	        	"de": "Bild Größe"
            },
            "group_i-css": {
	        	"en": "CSS inventwo Button",
	        	"de": "CSS inventwo Button"
            },
            "iButtonCol": {
	        	"en": "color",
	        	"de": "Farbe"
            },
            "iTextSize": {
	        	"en": "Label size",
	        	"de": "Beschriftungsgröße"
            },
            "iImageFalse": {
	        	"en": "Icon false",
	        	"de": "Bild falsch"
            },
            "iImageTrue": {
	        	"en": "Icon true",
	        	"de": "Bild wahr"
            },
            "iImage": {
	        	"en": "Icon",
	        	"de": "Bild"
            },
            "iCornerRadius": {
	        	"en": "Border radius",
	        	"de": "Abrundung"
            },
            "iOpacity": {
	        	"en": "Button opacity",
	        	"de": "Button Transparenz"
            },
            "iOpacityCtn": {
	        	"en": "Content opacity",
	        	"de": "Inhalt Transparenz"
            },
            "iTextFalse": {
	        	"en": "Label  false",
	        	"de": "Beschriftung falsch"
            },
            "iTextTrue": {
	        	"en": "Label true",
	        	"de": "Beschriftung wahr"
            },
            "iButtonActive": {
	        	"en": "Active color",
	        	"de": "Aktiv Farbe "
            },
            "iTextColor": {
	        	"en": "Text color",
	        	"de": "Textfarbe "
            },
            "iInvertImageCol": {
	        	"en": "Invert icon color",
	        	"de": "Bildfarbe invertieren"
            }
        });
    }
*/
// this code can be placed directly in vis-inventwo.html
vis.binds["vis-inventwo"] = {
    
	createWidget: function (widgetID, data) {
		var $div = $("#" + widgetID);
		// if nothing found => wait
		if (!$div.length) {
			return setTimeout(function () {
				vis.binds["vis-inventwo"].createWidget(widgetID, data);
			}, 100);
		}

        var htmlText = "<div class='vis-inventwo-class vis-widget-body" + data.class + ">";
        // Widget body css

        if((vis.states.attr(data.oid + '.val') && data.iValueType == 'boolean') || (vis.states.attr(data.oid + '.val') == data.iValueTrue && data.iValueType == 'value')){
            htmlText += "true";
        }
        else{
            htmlText += "false";
        }

        htmlText += "</div>";

		return htmlText;

        // subscribe on updates of value
        /*
		if (data.oid) {
			vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
				$div.find(".vis-inventwo-value").html(newVal);
			});
        }*/
        
    },

    hexToRgbWithOpacity: function(hex,opacity){

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        var rgba = result ? ("rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + opacity + ")") : null;
        return rgba;
    },
    handleToggle: function (el, data) {

            var $this = $(el);
            
            var oid = data.oid;
            var valFalse = false;
            var valTrue = true;

            //$(el).html(valFalse);

            if (!vis.editMode) {
               
                    $this.parent().click(function () {
                        var val = vis.states[oid + '.val'];
                        var type = data.iValueType;
                        var valFalse = data.iValueFalse;
                        var valTrue = data.iValueTrue;

                        if(type == "boolean")
                            vis.setValue(oid, !val);
                        else{
                            if(val == valFalse){
                                vis.setValue(oid, valTrue);
                            }
                            else{
                                vis.setValue(oid, valFalse);
                            }
                        }
                
                    });
                
            }
    },
    handleNavigation: function (el, data) {
        if (!vis.editMode && data.nav_view) {
            var $this = $(el);
            var moved = false;
            $this.on('click touchend', function (e) {
                // Protect against two events
                if (vis.detectBounce(this)) return;
                if (moved) return;
                vis.changeView(data.nav_view, data.nav_view);
                //e.preventDefault();
                //return false;
            }).on('touchmove', function () {
                moved = true;
            }).on('touchstart', function () {
                moved = false;
            });
        }
    },
    state: function (el, data) {

            var $this = $(el);
            
            var oid = data.oid;

            //$(el).html(valFalse);

            if (!vis.editMode) {
               
                    $this.parent().click(function () {
                        
                        vis.setValue(oid, data.value);
                        /*
                        var val = vis.states[oid + '.val'];
                        $(el).html('test: ' + val);
                            if(val == valFalse){
                                vis.setValue(oid, valTrue);
                            }
                            else{
                                vis.setValue(oid, valFalse);
                            }*/
                    });
                
            }
    }
};

vis.binds["vis-inventwo"].showVersion();