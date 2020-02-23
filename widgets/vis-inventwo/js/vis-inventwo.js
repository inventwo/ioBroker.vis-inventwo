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

    vars: [],
    
    toggle: function (el, oid) {
        var $this = $(el);
        oid = $this.data('oid');
        var valFalse = false;
        var valTrue = true;

        if (oid && !vis.editMode) {
            var moved = false;
            $this.on('click touchend', function () {
                // Protect against two events
                
                
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
