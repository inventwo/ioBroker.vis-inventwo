/*
	ioBroker.vis vis-inventwo Widget-Set

	version: "0.0.1"

	Copyright 2020 jkvarel jkvarel@inventwo.com
*/
"use strict";

// add translations for edit mode
$.get( "adapter/vis-inventwo/words.js", function(script) {
	let translation = script.substring(script.indexOf("{"), script.length);
	translation = translation.substring(0, translation.lastIndexOf(";"));
	$.extend(systemDictionary, JSON.parse(translation));
});

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
    }
};

vis.binds["vis-inventwo"].showVersion();