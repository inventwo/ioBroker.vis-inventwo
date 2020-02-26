/*
	ioBroker.vis vis-inventwo Widget-Set

	version: "0.0.1"

	Copyright 2020 jkvarel jkvarel@inventwo.com
*/
"use strict";

// add translations for edit mode
if (vis.editMode) {
        // Add words for basic widgets
        $.extend(true, systemDictionary, {
            "Instance": {
		        "en": "Instance",
		        "de": "Instanz"
            },
            "iText_display": {
	        	"en": "Label",
	        	"de": "Beschriftung"
            },
            "iIconSize": {
	        	"en": "Icon size",
	        	"de": "Bild Größe"
            },
            "group_i-css": {
	        	"en": "CSS",
	        	"de": "CSS"
            },
            "iButtonCol": {
	        	"en": "Button color",
	        	"de": "Button Farbe"
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
            "iCornerRadius": {
	        	"en": "Border radius",
	        	"de": "Abrundung"
            },
            "iOpacity": {
	        	"en": "Opacity",
	        	"de": "Transparenz"
            }
        });
    }

// this code can be placed directly in vis-inventwo.html
vis.binds["vis-inventwo"] = {
	version: "0.0.1",
	showVersion: function () {
		if (vis.binds["vis-inventwo"].version) {
			console.log("Version vis-inventwo: " + vis.binds["vis-inventwo"].version);
			vis.binds["vis-inventwo"].version = null;
		}
	},
	createWidget: function (widgetID, view, data, style) {
		var $div = $("#" + widgetID);
		// if nothing found => wait
		if (!$div.length) {
			return setTimeout(function () {
				vis.binds["vis-inventwo"].createWidget(widgetID, view, data, style);
			}, 100);
		}

		var text = "";

        text += this.instance;
        text += this.config.option1;

		$("#" + widgetID).html(text);

        // subscribe on updates of value
        /*
		if (data.oid) {
			vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
				$div.find(".vis-inventwo-value").html(newVal);
			});
		}*/
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
                        vis.setValue(oid, !val);
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
};

vis.binds["vis-inventwo"].showVersion();