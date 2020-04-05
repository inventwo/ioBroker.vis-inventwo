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
		"iCornerRadiusUL": {
			"en": "Border radius upper left",
			"de": "Abrundung oben links"
		},
		"iCornerRadiusUR": {
			"en": "Border radius upper right",
			"de": "Abrundung oben rechts"
		},
		"iCornerRadiusLR": {
			"en": "Border radius lower right",
			"de": "Abrundung unten right"
		},
		"iCornerRadiusLL": {
			"en": "Border radius lower left",
			"de": "Abrundung unten links"
		},
		"iOpacity": {
			"en": "Button opacity",
			"de": "Button Transparenz"
		},
		"iOpacityCtn": {
			"en": "Content opacity",
			"de": "Inhalt Transparenz"
		},
		"iOpacityImg": {
			"en": "Image opacity",
			"de": "Bild Transparenz"
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
		"iNavWait":{
			"en": "Wait x milliseconds to check for active",
			"de": "Warte x Millisekunden bis Prüfung auf aktiv"
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
		},
		"iSliderColor":{
			"en": "Bar Color",
			"de": "Balken Farbe"
		},
		"iSliderKnobColor":{
			"en": "Handle Color",
			"de": "Regler Farbe"
		},
		"iSliderCorners":{
			"en": "Border radius",
			"de": "Rundung"
		},
		"iSliderKnobCorners":{
			"en": "Handle border radius",
			"de": "Regler Rundung"
		},
		"iSliderHeight":{
			"en": "Bar size",
			"de": "Balken dicke"
		},
		"iSliderKnobSize":{
			"en": "Handle size",
			"de": "Regler Größe"
		},
		"iSliderRotation":{
			"en": "Rotation",
			"de": "Ausrichtung"
		},
		"iSliderLabel":{
			"en": "Label",
			"de": "Beschriftung"
		},
		"iShowMinMax":{
			"en": "Show Min/Max Value",
			"de": "Zeige Min/Max Wert"
		},
		"iSliderTextColor":{
			"en": "Text color",
			"de": "Textfarbe"
		},
		"iShowValue":{
			"en": "Show value",
			"de": "Zeige Wert"
		},
		"iValueTextColor":{
			"en": "Value color",
			"de": "Wert Farbe"
		},
		"iValuePreText":{
			"en": "Pre text",
			"de": "Text voranstellen"
		},
		"iFlipImage":{
			"en": "Flip icon",
			"de": "Bild spiegeln"
		},
		"iTblShowHead":{
			"en": "Table Head",
			"de": "Tabellenkopf"
		},
		"iTblRowLimit":{
			"en": "Rowlimit",
			"de": "Zeilenlimit"
		},
		"iColCount":{
			"en": "Columncount",
			"de": "Spaltenanzahl"
		},
		"group_iTableCol":{
			"en": "Table Column",
			"de": "Tabellenspalte"
		},
		"iColName":{
			"en": "Header",
			"de": "Spaltenüberschrift"
		},
		"iColAttr":{
			"en": "Attribute in JSON",
			"de": "Attribut in JSON"
		},
		"iColWidth":{
			"en": "Columnwidth",
			"de": "Spaltenbreite"
		}
	});
}

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

				setTimeout(function () {
					console.log(vis.activeView);

					$('.vis-inventwo-nav').each(function () {
						if($(this).attr('data-inventwo-nav') === vis.activeView){
							$(this).css('background-color',data.iButtonActive);
						}
						else{
							$(this).css('background-color',data.iButtonCol);
						}
					});

				},data.iNavWait);

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
		return { input: `<span>${_(text)}</span>` };
	},
	handleSlider: function (el,data,options) {

		var $this = $(el);
		var oid = data.oid;

		var settings = $.extend({
				min: parseInt(data.iMinVal),
				max: parseInt(data.iMaxVal),
				step: parseInt(data.iStepVal),
				slide: function( event, ui ) {
					if(!vis.editMode)
						vis.setValue(oid, ui.value);
				}
			},options);

		$this.slider(settings);

		$this.css('transform','rotate('+data.iSliderRotation+'deg)');
		$this.children().css("width",data.iSliderKnobSize + "px");
		$this.children().css("height",data.iSliderKnobSize + "px");
		$this.children().css("border","0px");
		$this.children().css("border-radius",data.iSliderKnobCorners + "%");
		$this.children().css("background",data.iSliderKnobColor);
		$this.children().css("box-shadow","0 0 5px 1px black");
		if(options.orientation === "horizontal") {
			$this.children().css("margin-left", "-" + (data.iSliderKnobSize / 2) + "px");
			let topPos = ((data.iSliderKnobSize - data.iSliderHeight) / 2) * (-1);
			$this.children().css("top",topPos + "px");
		}
		else{
			$this.children().css("left", "-" + (data.iSliderKnobSize / 2 - data.iSliderHeight/2) + "px");
			$this.children().css("margin-bottom", "-" + (data.iSliderKnobSize / 2) + "px");
		}

			$this.slider("option","value",vis.states.attr(oid + ".val"));


		vis.states.bind(oid + ".val",function () {
			$this.slider("option","value",vis.states.attr(oid + ".val"));
		});

	},

	jsontable: function (el,data) {

		let output = "";
		if(data.oid === "" || data.oid === "nothing_selected") {
			output = "No data";
		}

		else{
			if(data.iColCount  !== "" && data.iColCount > 0){
				let jd = vis.states.attr(data.oid + ".val");
				let jsondata;

				if(typeof jd === "string")
					jsondata = JSON.parse(jd);
				else
					jsondata = jd;

				console.log(jsondata);
				console.log(data);

				let rowLimit = jsondata.length;
				if(data.iTblRowLimit < rowLimit)
					rowLimit = data.iTblRowLimit;

				output = "<table>";

				if(data.iTblShowHead){

					output += "<tr>";
					for(let i = 1; i <= data.iColCount; i++){

						if(data["iColName" + i] !== undefined && data["iColName" + i] !== ""){
							output += "<th>" + data["iColName" + i] + "</th>";
						}
						else{
							output += "<th>" + Object.keys(jsondata[0])[i] + "</th>";
						}
					}
					output += "</tr>";

				}

				for(let e = 0; e < rowLimit; e++){
					output += "<tr>";
					for(let i = 1; i <= data.iColCount; i++){

						if(data["iColAttr" + i] !== undefined && data["iColAttr" + i] !== ""){
							output += "<td>" + jsondata[e][data["iColAttr" + i]] + "</td>";
						}
						else{
							output += "<td>" + jsondata[e][Object.keys(jsondata[e])[i]] + "</td>";
						}
					}
					output += "</tr>";
				}


				output += "</table>";
			}
			else{
				output = "Columncount can't be zero/empty";
			}
		}
		$(el).html(output);
	}
};