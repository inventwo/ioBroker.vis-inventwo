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

        text += '<div class="vis-inventwo-class vis-widget-body ' + data.attr('class') + ' style="padding:2px">'
        text += '<div style="background-color: {' + data.buttonCol + '}">'
        text += vis.states[data.buttonCol + '.val'];
        text += '<br>';
        text += vis.states[data.oid + '.val'];
        text += '<br>';
        if(vis.states[data.oid + '.val']){
            text += data.text_true;
        }
        else{
            text += data.text_false;
        }
		text += '</div>';
		text += '</div>';


		$("#" + widgetID).html(text);

		// subscribe on updates of value
		if (data.oid) {
			vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
				$div.find(".vis-inventwo-value").html(newVal);
			});
		}
    },
    
    toggle: function (el, oid) {
        var $this = $(el);
        oid = $this.data('oid');
        var valFalse = false;
        var valTrue = true;

        if (oid && !vis.editMode) {
            var moved = false;
            $this.on('click touchend', function () {
                // Protect against two events
                if (vis.detectBounce(this)) return;
                if (moved) return;

                var val = vis.states[oid + '.val'];
                if(val == valFalse){
                    vis.setValue(oid,valTrue);
                }
                else if(val == valTrue){
                    vis.setValue(oid,valFalse);

                }
                else{
                    vis.setValue(oid,valFalse);
                }
                
            }).on('touchmove', function () {
                moved = true;
            }).on('touchstart', function () {
                moved = false;
            }).data('destroy', function (id, $widget) {
                $widget.off('click touchend').off('touchmove').off('touchstart');
            });
        }
    }
};

vis.binds["vis-inventwo"].showVersion();