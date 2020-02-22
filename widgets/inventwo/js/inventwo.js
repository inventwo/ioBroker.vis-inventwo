/*
	ioBroker.vis vis-inventwo Widget-Set

	version: "0.0.1"

	Copyright 2020 jkvarel jkvarel@inventwo.com
*/

"use strict";

// add translations for edit mode
/*
$.get( "adapter/vis-inventwo/words.js", function(script) {
	let translation = script.substring(script.indexOf("{"), script.length);
	translation = translation.substring(0, translation.lastIndexOf(";"));
	$.extend(systemDictionary, JSON.parse(translation));
});
*/

// this code can be placed directly in vis-inventwo.html
vis.binds.inventwo = {
    
    toggle: function (el, oid) {
        var $this = $(el);
        oid = $this.data('oid');
        var valFalse = false;
        var valTrue = true;

        var val = vis.states[oid + '.val'];

        var colFalse = "";//data.attr('col_false');
        var test = vis.states.attr('0_userdata.0.vis-inventwo.background-color.val');

        if(val = valTrue){
            var shadow = $(el).children().css('box-shadow');
            $(el).children().css('box-shadow','2px 2px 2px 1px #111111, inset 0 0 0 1px green');
            $(el).children().css('background-color',test);
        }
        else{
            $(el).children().css('box-shadow','2px 2px 2px 1px #111111');
            $(el).children().css('background-color','#ff00ff');
        }
            
        if (oid && !vis.editMode) {
            var moved = false;
            $this.on('click touchend', function () {
                // Protect against two events
                if (vis.detectBounce(this)) return;
                if (moved) return;

                var val = vis.states[oid + '.val'];
                if(val == valTrue){

                    vis.setValue(oid,valFalse);
                    $(el).children().css('box-shadow','2px 2px 2px 1px #111111');
                    $(el).children().css('background-color',test);
                }
                else{
                    $(el).children().css('box-shadow','2px 2px 2px 1px #111111, inset 0 0 0 1px green');
                    $(el).children().css('background-color',test);
                    vis.setValue(oid,valTrue);
                }

                $(el).children().html("vars:<br>" + vis.states[oid + '.val'] + "<br>" + vis.states['0_userdata.0.vis-inventwo.background-color.val'] + "<br> h " + oid);

                
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
