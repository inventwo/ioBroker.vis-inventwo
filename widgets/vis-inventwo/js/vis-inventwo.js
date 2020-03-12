/*
	ioBroker.vis vis-inventwo Widget-Set
	version: "0.1.2"
	Copyright 2020 jkvarel jkvarel@inventwo.com
*/
"use strict";
// add translations for edit mode

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
            },
            "iValueType":{
                "en": "Type",
                "de": "Typ"

            },
            "iValueFalse":{
                "en": "Value false",
                "de": "Wert falsch"
            },
            "iValueTrue":{
                "en": "Value true",
                "de": "Wert wahr"
            },
            "iValueTypeInfo":{
                "en": "Type Info",
                "de": "Typ Info"
            },
            "iValueTypeText":{
                "en": "If type is 'boolean', value fields can be empty",
                "de": "Wenn Typ ist 'boolean', können Wert Felder leer bleiben"
            },
            "iWiki":{
                "en": "Manual",
                "de": "Anleitung"
            },
            "iWikiText":{
                "en": "To the wiki",
                "de": "Zum Wiki"
            },
			"iMinVal":{
				"en": "Min. value",
				"de": "Min. Wert"
			},
			"iMaxVal":{
				"en": "Max. value",
				"de": "Max. Wert"
			},
			"iStepVal":{
				"en": "Step",
				"de": "Schritt"
			}
        });
    }

// this code can be placed directly in vis-inventwo.html
vis.binds["vis-inventwo"] = {
    
    handleToggle: function (el, data) {

            var $this = $(el);
            var oid = data.oid;

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
                    });
                
            }
    },
    externalLinks: function (widAttr, data) {
        let url = '';
        if (data[1] === 'wiki') {
            url = 'https://github.com/inventwo/ioBroker.vis-inventwo/wiki'
        }
        return { input: `<a target="_blank" href="${url}">${_('iWikiText')}</a>` }
    },
    infoText: function (widAttr, data) {
        let text = '';
        if (data[1] === 'valueType') {
            text = 'iValueTypeText'
        }
        return { input: `<span>${_(text)}</span>` }
    },
	sliderHandle: function (el, data) {

		var $this = $(el);

		var oid = data.oid;

		$this.slider(
			{
				min: data.iMinVal,
				max: data.iMaxVal,
				step: data.iStepVal,
				slide: function( event, ui ) {
					vis.setValue(oid, ui.value);
				}
			}
		);

		$this.slider('value',vis.states.attr(oid + ".val"));

		$this.css("background",data.iSliderColor);
		$this.css("height",data.iSliderHeight + "px");
		$this.css("border","0px");

		$this.children().css("height",data.iSliderKnobHeight + "px");
		$this.children().css("width",data.iSliderKnobHeight + "px");
		$this.children().css("border","0px");

		$this.children().css("background",data.iSliderKnobColor);
		let topPos = ((data.iSliderKnobHeight - data.iSliderHeight) / 2) * (-1);
		$this.children().css("top",topPos + "px");

		vis.states.bind(oid + ".val",function () {
			$this.slider('value',vis.states.attr(oid + ".val"));
		});

	}
};