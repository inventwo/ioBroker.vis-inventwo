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

        if(val){
            var shadow = $(el).children().css('box-shadow');
            $(el).children().css('box-shadow',shadow + ', inset 0 0 0 1px green');
        }
        else{
            $(el).children().css('box-shadow','2px 2px 2px 1px #111111');
        }
            
        if (oid && !vis.editMode) {
            var moved = false;
            $this.on('click touchend', function () {
                // Protect against two events
                if (vis.detectBounce(this)) return;
                if (moved) return;

                var val = vis.states[oid + '.val'];
                if(val == valFalse){
                    var shadow = $(el).children().css('box-shadow');
                    $(el).children().css('box-shadow',shadow + ', inset 0 0 0 1px green');
                    $(el).css('background-color',vis.states.attr('vis-inventwo.0.CSS.Button.val'));
                    vis.setValue(oid,valTrue);
                }
                else if(val == valTrue){
                    vis.setValue(oid,valFalse);
                    $(el).children().css('box-shadow','2px 2px 2px 1px #111111');
                     $(el).css('background-color','#ff0000');

                }
                else{
                    $(el).children().css('box-shadow','2px 2px 2px 1px #111111');
                     $(el).css('background-color','#ff0000');
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
