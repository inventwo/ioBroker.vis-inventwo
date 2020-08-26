/*
	ioBroker.vis vis-inventwo Widget-Set
	version: "2.0.0"
	Copyright 2020 jkvarel jkvarel@inventwo.com
*/
"use strict";
// add translations for edit mode

if (vis.editMode) {
	$.extend(true, systemDictionary, {

		//#region OLD
		"iOpacity": {
			"en": "Button opacity",
			"de": "Button Transparenz"
		},
		"iOpacityImg": {
			"en": "Image opacity",
			"de": "Bild Transparenz"
		},
		"iOpacityAll": {
			"en": "Opacity",
			"de": "Transparenz"
		},
		//#endregion END OLD

		//#region General
		"Instance": {
			"en": "Instance",
			"de": "Instanz"
		},
		"oid":{
			"en": "Object ID",
			"de": "Objekt ID"
		},
		"iWiki":{
			"en": "<b>Manual</b>",
			"de": "<b>Anleitung</b>"
		},
		"iWikiText":{
			"en": "<b>To the wiki</b>",
			"de": "<b style='color: #9fdb58'>Zum Wiki</b>"
		},
		"iStart":{
			"en": "Start",
			"de": "Anfang"
		},
		"iEnd":{
			"en": "End",
			"de": "Ende"
		},
		"iCenter":{
			"en": "Center",
			"de": "Mitte"
		},
		"iSpace-between":{
			"en": "Space between",
			"de": "Platz dazwischen"
		},
		"group_i-css": {
			"en": "CSS inventwo Widget",
			"de": "CSS inventwo Widget"
		},
		//#endregion

		//#region Content Settings
		"iContentFlexDirection":{
			"en": "Direction",
			"de": "Richtung"
		},
		"iContentVertAlign": {
			"en": "Align",
			"de": "Ausrichtung"
		},
		"iContentOrder":{
			"en": "Order",
			"de": "Reihenfolge"
		},
		"orderTextImg":{
			"en": "Text -> Image",
			"de": "Text -> Bild"
		},
		"orderImgText":{
			"en": "Image -> Text",
			"de": "Bild -> Text"
		},
		"iOpacityCtn": {
			"en": "Content opacity",
			"de": "Inhalt Transparenz"
		},
		//#endregion

		//#region Image Settings
		"iImgRotation":{
			"en": "Rotation",
			"de": "Drehung"
		},
		"iImgAlign":{
			"en": "Image align",
			"de": "Bild Ausrichtung"
		},
		"iImgSpaceTop":{
			"en": "Space top",
			"de": "Abstand oben"
		},
		"iImgSpaceLeft":{
			"en": "Space left",
			"de": "Abstand links"
		},
		"iImgSpaceRight":{
			"en": "Space right",
			"de": "Abstand rechts"
		},
		"iImgSpaceBottom":{
			"en": "Space bottom",
			"de": "Abstand unten"
		},
		"iIconSize": {
			"en": "Icon size",
			"de": "Bild Größe"
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
		"iFlipImage":{
			"en": "Flip icon",
			"de": "Bild spiegeln"
		},
		//#endregion

		//#region Text Settings
		"iTextSpaceTop":{
			"en": "Space top",
			"de": "Abstand oben"
		},
		"iTextAlign":{
			"en": "Text align",
			"de": "Text Ausrichtung"
		},
		"iTextSpaceLeft":{
			"en": "Space left",
			"de": "Abstand links"
		},
		"iTextSpaceRight":{
			"en": "Space right",
			"de": "Abstand rechts"
		},
		"iTextSpaceBottom":{
			"en": "Space bottom",
			"de": "Abstand unten"
		},
		"iText": {
			"en": "Label",
			"de": "Beschriftung"
		},
		"iTextSize": {
			"en": "Label size",
			"de": "Textgröße"
		},
		"iTextFalse": {
			"en": "Label  false",
			"de": "Beschriftung falsch"
		},
		"iTextTrue": {
			"en": "Label true",
			"de": "Beschriftung wahr"
		},
		"iTextColor": {
			"en": "Text color",
			"de": "Textfarbe "
		},
		"iInvertImageCol": {
			"en": "Invert icon color",
			"de": "Bildfarbe invertieren"
		},
		//#endregion

		//#region Background Settings
		"iButtonCol": {
			"en": "Color",
			"de": "Farbe"
		},
		"iButtonActive": {
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iButtonActiveM": {
			"en": "Background",
			"de": "Hintergrund"
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
		"iOpacityBack": {
			"en": "opacity",
			"de": "Transparenz"
		},
		//#endregion

		//#region Shadow Settingss
		"iShadowXOffset":{
			"en": "X offset",
			"de": "X Versatz"
		},
		"iShadowYOffset":{
			"en": "Y offset",
			"de": "Y Versatz"
		},
		"iShadowBlur":{
			"en": "Blur",
			"de": "Blur"
		},
		"iShadowSpread":{
			"en": "Spread",
			"de": "Größe"
		},
		"iShadowColor":{
			"en": "Color",
			"de": "Farbe"
		},
		"iShadowColorActive":{
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iShadowColorActiveM":{
			"en": "Outer Shadow",
			"de": "Schatten außen"
		},
		//#endregion

		//#region Shadow Inner Settingss
		"iShadowInnerXOffset":{
			"en": "X offset",
			"de": "X Versatz"
		},
		"iShadowInnerYOffset":{
			"en": "Y offset",
			"de": "Y Versatz"
		},
		"iShadowInnerBlur":{
			"en": "Blur",
			"de": "Blur"
		},
		"iShadowInnerSpread":{
			"en": "Spread",
			"de": "Größe"
		},
		"iShadowInnerColor":{
			"en": "Color",
			"de": "Farbe"
		},
		"iShadowInnerColorActive":{
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iShadowInnerColorActiveM":{
			"en": "Inner shadow",
			"de": "Schatten innen"
		},
		//#endregion

		//#region Border Settingss
		"iBorderSize":{
			"en": "Width",
			"de": "Breite"
		},
		"iBorderStyle":{
			"en": "Style",
			"de": "Stil"
		},
		"iBorderColor":{
			"en": "Color",
			"de": "Farbe"
		},
		"iBorderColorActive":{
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iBorderColorActiveM":{
			"en": "Border",
			"de": "Umrandung"
		},
		//#endregion


		//#region Switch & State Settings
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
		"iValue":{
			"en": "Value",
			"de": "Wert"
		},
		"iValueTypeInfo":{
			"en": "Type Info",
			"de": "Typ Info"
		},
		"iValueTypeText":{
			"en": "If type is 'boolean', value fields can be empty",
			"de": "Wenn Typ ist 'boolean', können Wert Felder leer bleiben"
		},
		"iReadOnly":{
			"en": "Read only",
			"de": "Nur lesend"
		},
		//#endregion

		//#region Nav Settings
		"iNavWait":{
			"en": "Wait x milliseconds to check for active",
			"de": "Warte x Millisekunden bis Prüfung auf aktiv"
		},
		"iNavValue":{
			"en": "Value",
			"de": "Wert"
		},
		//#endregion

		//#region Radio Buttons
		"iRadiobtnWidth":{
			"en": "Button width",
			"de": "Button Breite"
		},
		"iRadiobtnHeight":{
			"en": "Button height",
			"de": "Button Höhe"
		},
		"iRadiobtnSpace":{
			"en": "Button space",
			"de": "Button Abstand"
		},
		"iRadiobtnsCount":{
			"en": "Count",
			"de": "Anzahl"
		},
		"group_iRadioBtns":{
			"en": "Radiobutton",
			"de": "Radiobutton"
		},
		"iRadiobtnAlign":{
			"en": "Alignment",
			"de": "Ausrichtung"
		},
		//#endregion

		//#regionSlider Settings
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
		//#endregion

		//#region Table Settings
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
		},
		"iTblRowEvenColor":{
			"en": "Background (row even)",
			"de": "Hintergrund (gerade Zeile)"
		},
		"iTblRowUnevenColor":{
			"en": "Background (row uneven)",
			"de": "Hintergrund (ungerade Zeile)"
		},
		"iTblHeaderColor":{
			"en": "Background (header)",
			"de": "Hintergrund (Überschrift)"
		},
		"iTblRowEvenTextColor":{
			"en": "Font Color (row even)",
			"de": "Textfarbe (gerade Zeile)"
		},
		"iTblRowUnevenTextColor":{
			"en": "Font color (row uneven)",
			"de": "Textfarbe (ungerade Zeile)"
		},
		"iTblHeaderTextColor":{
			"en": "Font color (header)",
			"de": "Textfarbe (Überschrift)"
		},
		"iRowSpacing":{
			"en": "Row spacing",
			"de": "Zeilenabstand"
		},
		"iColShow":{
			"en": "Show column",
			"de": "Zeige Spalte"
		},
		"iVertScroll":{
			"en": "Vertical scroll",
			"de": "Scrollen vertikal"
		},
		"iHorScroll":{
			"en": "Horinzontal scroll",
			"de": "Scrollen horizontal"
		},
		"iTableRefreshRate":{
			"en": "Refresh rate (ms)",
			"de": "Aktualisierung (ms)"
		},
		//#endregion

		//#region Universal & Multi Widget Settings
		"iUniversalWidgetTypeInfo":{
			"en": "Type info",
			"de": "Typ Info"
		},
		"iUniversalWidgetTypeInfoText":{
			"en": "Should it be a switch, state, navigation or background?",
			"de": "Soll es ein Switch, State, Navigation oder Hintergrund sein?"
		},
		"iUniversalWidgetType":{
			"en": "Widget type",
			"de": "Widget Typ"
		},
		"iUniversalValueCount":{
			"en": "Number of states",
			"de": "Anzahl der Zustände"
		},
		"group_iUniversalValues":{
			"en": "State",
			"de": "Zustand"
		},
		"iRefreshDataFieldsInfo":{
			"en": "---->",
			"de": "---->"
		},
		"iRefreshDataFields":{
			"en": "---->",
			"de": "---->"
		},
		"iRefreshDataFieldsText":{
			"en": "Click on the button below to hide unimportant fields for this widget",
			"de": "Klicke auf den Button um nicht für das Widget relevante Felder zu verstecken"
		},
		"iRefreshBtnText":{
			"en": "Refresh fields",
			"de": "Felder neuladen"
		},
		"iView":{
			"en": "View",
			"de": "View"
		},
		//#endregion


		//#region Custom Text
		"iText-Empty": {
			"en": " ",
			"de": " "
		},
		"iText-ImgSettings": {
			"en": "<b>Image</b>",
			"de": "<b>Bild</b>"
		},
		"iText-BackgroundSettings": {
			"en": "<b>Background</b>",
			"de": "<b>Hintergrund</b>"
		},
		"iText-CornerSettings": {
			"en": "<b>Corners</b>",
			"de": "<b>Ecken</b>"
		},
		"iText-ContentSettings": {
			"en": "<b>Content</b>",
			"de": "<b>Inhalt</b>"
		},
		"iText-ShadowSettings": {
			"en": "<b>Outer shadow</b>",
			"de": "<b>Schatten außen</b>"
		},
		"iText-ShadowInnerSettings": {
			"en": "<b>Inner shadow</b>",
			"de": "<b>Schatten innen</b>"
		},
		"iText-BorderSettings": {
			"en": "<b>Border</b>",
			"de": "<b>Umrandung</b>"
		},
		"iText-TextSettings": {
			"en": "<b>Text</b>",
			"de": "<b>Text</b>"
		},
		"iText-ImageSettings": {
			"en": "<b>Image</b>",
			"de": "<b>Bild</b>"
		},
		"iText-ReadOnlyTitle": {
			"en": "<b>Read only</b>",
			"de": "<b>Nur Lesend</b>"
		},
		"iText-ReadOnly": {
			"en": "If checked, the widget can only read the datapoint and can't set it. Useful to only display the status",
			"de": "Wenn ausgewählt kann das Widget den Datenpunkt nur lesen. Nützlich um nur den Status anzeigen zu lassen"
		},
		//#endregion
	});
}

vis.navChangeCallbacks.push(function (view) {

	vis.binds["vis-inventwo"].iUpdateNavigations(0);

});

vis.binds["vis-inventwo"] = {

	iUpdateNavigations: function (timeoutVal) {

		if(timeoutVal <= 0){
			$('#visview_'+ vis.activeView + '.vis-inventwo-nav, #visview_'+ vis.activeView +' .iUniversalNav').each(function (el) {

				let id = $(this).parent().parent().attr('id');
				let data = vis.views[vis.activeView].widgets[id].data;

				if(data.iNavWait > timeoutVal)
					timeoutVal = data.iNavWait;

			});
		}

		setTimeout(function () {

			$('.vis-inventwo-nav').each(function (el) {

				if($(this).attr('data-inventwo-nav') === vis.activeView)
					$(this).css('background-color',$(this).attr("data-activecol"));
				else
					$(this).css('background-color',$(this).attr("data-col"));

			});

			$('#visview_'+ vis.activeView +' .iUniversalNav').each(function () {
				let id = $(this).parent().parent().attr('id');
				let data = vis.views[vis.activeView].widgets[id].data;

				if(data.nav_view === vis.activeView)
					$(this).children().css('background',data.iButtonActive);
				else
					$(this).children().css('background',data.iButtonCol);

			});

			$('#visview_'+ vis.activeView +' .iMultiNav').each(function () {
				let id = $(this).parent().parent().attr('id');
				let data = vis.views[vis.activeView].widgets[id].data;
				let stateFound = false;
				for(let i = 1; i <= data.iUniversalValueCount; i++){
					if(data['iView' + i] === vis.activeView){
						stateFound = true;
						$(this).children().css('background',data['iButtonActiveM' + i]);
						break;
					}
				}
				if(!stateFound){
					$(this).children().css('background',data.iButtonCol);
				}

			});

		},timeoutVal);


	},
	handleToggle: function (el, data) {

		var $this = $(el);
		var oid = data.oid;

		if (!vis.editMode) {
			var moved = false;
			$this.parent().on('click touchend', function () {
				if (vis.detectBounce(this)) return;
				if (moved) return;

				var val = vis.states[oid + '.val'];
				var type = data.iValueType;
				var valFalse = data.iValueFalse;
				var valTrue = data.iValueTrue;

				if(type == "boolean")
					vis.setValue(oid, !val);
				else{

					if(val == valFalse){
						if(!isNaN(valTrue))
							valTrue = parseFloat(valTrue);
						vis.setValue(oid, valTrue);
					}
					else{
						if(!isNaN(valFalse))
							valTrue = parseFloat(valFalse);
						vis.setValue(oid, valFalse);
					}
				}

			}).on('touchmove', function () {
				moved = true;
			}).on('touchstart', function () {
				moved = false;
			});

		}

	},
	handleNavigation: function (el, data) {
		if (!vis.editMode && data.nav_view) {
			var $this = $(el);
			var moved = false;
			$this.parent().on('click touchend', function (e) {
				// Protect against two events
				if (vis.detectBounce(this)) return;
				if (moved) return;
				vis.changeView(data.nav_view, data.nav_view);
				//e.preventDefault();
				//return false;
				if(data.oid !== "") {
					if(!isNaN(data.iNavValue))
						data.iNavValue = parseFloat(data.iNavValue);
					vis.setValue(data.oid, data.iNavValue);
				}

				vis.binds['vis-inventwo'].iUpdateNavigations(data.iNavWait);


			}).on('touchmove', function () {
				moved = true;
			}).on('touchstart', function () {
				moved = false;
			});

		}
	},
	state: function (el, data, type) {

		var $this = $(el);

		var oid = data.oid;

		//$(el).html(valFalse);

		if (!vis.editMode) {

			$this.parent().on('click touchend', function () {
				if(!isNaN(data.value))
					data.value = parseFloat(data.value);
				vis.setValue(oid, data.value);

				console.log($(el).find('.vis-inventwo-button-new'));
				if(type == 'universal') {
					console.log("active");
					let shadow = data.iShadowXOffset + 'px ' + data.iShadowYOffset + 'px ' + data.iShadowBlur + 'px ' + data.iShadowSpread + 'px ' + data.iShadowColorActive + ',inset ' +
						data.iShadowInnerXOffset + 'px ' + data.iShadowInnerYOffset + 'px ' + data.iShadowInnerBlur + 'px ' + data.iShadowInnerSpread + 'px ' + data.iShadowInnerColorActive;
					let border = data.iBorderSize + 'px ' + data.iBorderStyle + ' ' + data.iBorderColorActive;
					$this.find('.vis-inventwo-button-new').css('background', data.iButtonActive);
					$this.find('.vis-inventwo-button-new').css('box-shadow', shadow);
					$this.find('.vis-inventwo-button-new').css('border', border);
					if(data.iImageTrue != undefined)
						$this.find('.vis-inventwo-button-imageContainer img').attr('src', data.iImageTrue);
					if(data.iTextTrue != undefined)
						$this.find('.vis-inventwo-button-text').html(data.iTextTrue);

					setTimeout(function () {
						console.log("inactive");
						let shadow = data.iShadowXOffset + 'px ' + data.iShadowYOffset + 'px ' + data.iShadowBlur + 'px ' + data.iShadowSpread + 'px ' + data.iShadowColor + ',inset ' +
							data.iShadowInnerXOffset + 'px ' + data.iShadowInnerYOffset + 'px ' + data.iShadowInnerBlur + 'px ' + data.iShadowInnerSpread + 'px ' + data.iShadowInnerColor;
						let border = data.iBorderSize + 'px ' + data.iBorderStyle + ' ' + data.iBorderColorActive;
						$this.find('.vis-inventwo-button-new').css('background', data.iButtonCol);
						$this.find('.vis-inventwo-button-new').css('box-shadow', shadow);
						$this.find('.vis-inventwo-button-new').css('border', border);
						if(data.iImageFalse != undefined)
							$this.find('.vis-inventwo-button-imageContainer img').attr('src', data.iImageFalse);
						if(data.iTextFalse != undefined)
							$this.find('.vis-inventwo-button-text').html(data.iTextFalse);
					}, data.iStateResponseTime);


				}
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
			text = 'iValueTypeText';
		}
		else if(data[1] === 'emptyText'){
			text = '';
		}
		else if(data[1] === 'readOnlyInfo'){
			text = 'iText-ReadOnly';
		}
		else if(data[1] === 'universalTypeInfo'){
			text = 'iUniversalWidgetTypeInfoText';
		}
		else if(data[1] === 'refreshDataFieldsText'){
			text = 'iRefreshDataFieldsText';
		}

		return { input: `<span>${_(text)}</span>` };
	},
	handleSlider: function (el,data,options) {

		var $this = $(el);
		var oid = data.oid;

		var settings = $.extend({
			min: parseFloat(data.iMinVal),
			max: parseFloat(data.iMaxVal),
			step: parseFloat(data.iStepVal),
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

		if(data.oid === "" || data.oid === "nothing_selected" || data.oid === undefined) {
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

				let rowLimit = jsondata.length;
				if (data.iTblRowLimit < rowLimit)
					rowLimit = data.iTblRowLimit;
				let colLimit = Object.keys(jsondata[0]).length;
				if (data.iColCount < colLimit)
					colLimit = data.iColCount;

				if(data.iVertScroll){
					$(el).parent().css("overflow-y","scroll");
				}
				else{
					$(el).parent().css("overflow-y","hidden");
				}

				if(data.iHorScroll){
					$(el).parent().css("overflow-x","scroll");
				}
				else{
					$(el).parent().css("overflow-x","hidden");
				}

				output = "<table class='vis-inventwo-json-table' style='opacity: " + data.iOpacityAll + ";'>";
				if (data.iTblShowHead) {
					output += "<thead style='background:" + data.iTblHeaderColor + "; color: " + data.iTblHeaderTextColor + "'>";
					for (let i = 0; i < colLimit; i++) {
						if(data["iColShow" + (i + 1)]) {
							let colWidth = "";
							if (data["iColWidth" + (i + 1)] !== undefined && data["iColWidth" + (i + 1)] !== "") {
								colWidth = data["iColWidth" + (i + 1)];
							}
							if (data["iColName" + (i + 1)] !== undefined && data["iColName" + (i + 1)] !== "") {
								output += "<th style='width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px;'>" + data["iColName" + (i + 1)] + "</th>";
							} else {
								//if(Object.keys(jsondata[0])[i].charAt(0) !== "_")
								output += "<th style='width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px;'>" + Object.keys(jsondata[0])[i] + "</th>";
							}
						}
					}
					output += "</thead>";
				}
				output += "<tbody>";
				for (let e = 0; e < rowLimit; e++) {
					let tdColor = "";
					let tdTextColor = "";
					if (e % 2 === 0) {
						tdColor = data.iTblRowUnevenColor;
						tdTextColor = data.iTblRowUnevenTextColor;
					} else {
						tdColor = data.iTblRowEvenColor;
						tdTextColor = data.iTblRowEvenTextColor;
					}
					output += "<tr style='background: " + tdColor + "; color: " + tdTextColor + "'>";
					for (let i = 0; i < colLimit; i++) {
						if(data["iColShow" + (i + 1)]) {
							let colWidth = "";
							if (data["iColWidth" + (i + 1)] !== undefined && data["iColWidth" + (i + 1)] !== "") {
								colWidth = data["iColWidth" + (i + 1)];
							}
							if (data["iColAttr" + (i + 1)] !== undefined && data["iColAttr" + (i + 1)] !== "") {
								output += "<td style='width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px;'>" + jsondata[e][data["iColAttr" + (i + 1)]] + "</td>";
							} else {
								//if(Object.keys(jsondata[e])[i].charAt(0) !== "_")
								output += "<td style='width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px;'>" + jsondata[e][Object.keys(jsondata[e])[i]] + "</td>";
							}
						}
					}
					output += "</tr>";
				}
				output += "</tbody>";
				output += "</table>";

				setTimeout(vis.binds["vis-inventwo"].jsontable,data.iTableRefreshRate,el,data);

			}
			else{
				output = "Columncount can't be zero/empty";
			}
		}
		$(el).html(output);
	},

	radiobutton: function (el, oid, val) {
		var $this = $(el);

		if (!vis.editMode) {
			var moved = false;
			$this.parent().on('click touchend', function () {
				if (vis.detectBounce(this)) return;
				if (moved) return;

				vis.setValue(oid, val);

			}).on('touchmove', function () {
				moved = true;
			}).on('touchstart', function () {
				moved = false;
			});

		}
	},

	updateUniversalDataFields: function (wid,view) {

		console.log(vis.activeWidgets);
		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.iUniversalWidgetType;
			console.log(val);

			if(val == "Switch"){
				vis.hideShowAttr("iNavWait",false);
				vis.hideShowAttr("iValueType",true);
				vis.hideShowAttr("iValueTypeInfo",true);
				vis.hideShowAttr("iValueFalse",true);
				vis.hideShowAttr("iValueTrue",true);
				vis.hideShowAttr("value",false);
				vis.hideShowAttr("iStateResponseTime",false);
				vis.hideShowAttr("nav_view",false);
				for (let i = 1; i <= data.iUniversalValueCount; i++){
					vis.hideShowAttr("oid" + i,true);
					vis.hideShowAttr("iTextFalse" + i,true);
					vis.hideShowAttr("iTextTrue" + i,true);
					vis.hideShowAttr("iImageFalse" + i,true);
					vis.hideShowAttr("iImageTrue" + i,true);
					vis.hideShowAttr("iValue" + i,true);
					vis.hideShowAttr("iView" + i,false);
				}
			}
			else if(val == "State"){
				vis.hideShowAttr("iNavWait",false);
				vis.hideShowAttr("iValueType",false);
				vis.hideShowAttr("iValueTypeInfo",false);
				vis.hideShowAttr("iValueFalse",false);
				vis.hideShowAttr("iValueTrue",false);
				vis.hideShowAttr("value",true);
				vis.hideShowAttr("iStateResponseTime",true);
				vis.hideShowAttr("nav_view",false);
				for (let i = 1; i <= data.iUniversalValueCount; i++){
					vis.hideShowAttr("oid" + i,true);
					vis.hideShowAttr("iTextFalse" + i,true);
					vis.hideShowAttr("iTextTrue" + i,true);
					vis.hideShowAttr("iImageFalse" + i,true);
					vis.hideShowAttr("iImageTrue" + i,true);
					vis.hideShowAttr("iValue" + i,true);
					vis.hideShowAttr("iView" + i,false);
				}
			}
			else if(val == "Navigation"){
				vis.hideShowAttr("iNavWait",true);
				vis.hideShowAttr("iValueType",false);
				vis.hideShowAttr("iValueTypeInfo",false);
				vis.hideShowAttr("iValueFalse",false);
				vis.hideShowAttr("iValueTrue",false);
				vis.hideShowAttr("value",true);
				vis.hideShowAttr("iStateResponseTime",false);
				vis.hideShowAttr("nav_view",true);
				for (let i = 1; i <= data.iUniversalValueCount; i++){
					vis.hideShowAttr("oid" + i,false);
					vis.hideShowAttr("iTextFalse" + i,true);
					vis.hideShowAttr("iTextTrue" + i,true);
					vis.hideShowAttr("iImageFalse" + i,true);
					vis.hideShowAttr("iImageTrue" + i,true);
					vis.hideShowAttr("iValue" + i,false);
					vis.hideShowAttr("iView" + i,true);
				}
			}
			else if(val == "Background"){
				vis.hideShowAttr("iNavWait",false);
				vis.hideShowAttr("iValueType",false);
				vis.hideShowAttr("iValueTypeInfo",false);
				vis.hideShowAttr("iValueFalse",false);
				vis.hideShowAttr("iValueTrue",false);
				vis.hideShowAttr("value",false);
				vis.hideShowAttr("iStateResponseTime",false);
				vis.hideShowAttr("nav_view",false);
				for (let i = 1; i <= data.iUniversalValueCount; i++){
					vis.hideShowAttr("oid" + i,true);
					vis.hideShowAttr("iTextFalse" + i,true);
					vis.hideShowAttr("iTextTrue" + i,true);
					vis.hideShowAttr("iImageFalse" + i,true);
					vis.hideShowAttr("iImageTrue" + i,true);
					vis.hideShowAttr("iValue" + i,true);
					vis.hideShowAttr("iView" + i,false);
				}
			}
		});

	},

	refreshDataFieldBtn: function () {

		let text = "iRefreshBtnText";
		return {input: `<button class="iUniversalWidgetRefreshBtn" onclick="vis.binds['vis-inventwo'].updateUniversalDataFields()">${_(text)}</button>`}

	},

	universalButton: function (el,data,type) {

		createWidget();
		this.updateUniversalDataFields;
		vis.states.bind(data.oid + '.val', function (e, newVal, oldVal){
			createWidget();
		});
		vis.states.bind(vis.activeView, function (e, newVal, oldVal){
			createWidget();
		});


		function createWidget() {
			let hexTrans = Math.floor(data.iOpacityBack * 255).toString(16);

			//Farben, Text & Bild bei true oder false
			let backCol = "";
			let shadowCol = "";
			let shadowColInner = "";
			let borderCol = "";
			let img = "";
			let txt = "";

			backCol = data.iButtonCol;
			shadowCol = data.iShadowColor;
			shadowColInner = data.iShadowInnerColor;
			borderCol = data.iBorderColor;
			if(data.iImageFalse != undefined)
				img = data.iImageFalse;
			if(data.iTextFalse != undefined)
				txt = data.iTextFalse;

			if(type == "multi") {
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					if ((data.iUniversalWidgetType != "Navigation" && vis.states.attr(data['oid' + i] + '.val') == data['iValue' + i]) || (data.iUniversalWidgetType == "Navigation" && data['iView' + i] === vis.activeView)) {
						backCol = data['iButtonActiveM' + i];
						shadowCol = data['iShadowColorActiveM' + i];
						shadowColInner = data['iShadowInnerColorActiveM' + i];
						borderCol = data['iBorderColorActiveM' + i];
						if (data.attr('iImage' + i) != undefined)
							img = data.attr('iImage' + i);
						if (data.attr('iText' + i) != undefined)
							txt = data.attr('iText' + i);
						break;
					}
				}
			}

			else if(type == "universal"){
				if ((data.iUniversalWidgetType == "Navigation" && data.nav_view === vis.activeView) ||
					(
						(data.iUniversalWidgetType == "Switch" || data.iUniversalWidgetType == "Background") &&
						(
							(vis.states.attr(data.oid + '.val') == data.iValueTrue && data.iValueType == 'value') ||
							(vis.states.attr(data.oid + '.val') === true && data.iValueType == 'boolean')
						)

					) )
				{

					backCol = data.iButtonActive;
					shadowCol = data.iShadowColorActive;
					shadowColInner = data.iShadowInnerColorActive;
					borderCol = data.iBorderColorActive;

					if (data.iImageTrue != undefined)
						img = data.iImageTrue;
					if (data.iTextFalse != undefined)
						txt = data.iTextTrue;
				}
			}

			backCol.match(/(#[0-9A-F]{6})/ig).forEach(function (hex) {
				hex = hex.replace('#','');
				console.log(hex);
				let re = new RegExp('\b' + hex + '\b','gi')
				backCol = backCol.replace(re,hex + hexTrans);
				console.log(backCol);
			});



			let shadow = data.iShadowXOffset + 'px ' + data.iShadowYOffset + 'px ' + data.iShadowBlur + 'px ' + data.iShadowSpread + 'px ' + shadowCol + ',inset ' +
				data.iShadowInnerXOffset + 'px ' + data.iShadowInnerYOffset + 'px ' + data.iShadowInnerBlur + 'px ' + data.iShadowInnerSpread + 'px ' + shadowColInner;
			let border = data.iBorderSize + 'px ' + data.iBorderStyle + ' ' + data.iBorderColorActive;
			let borderRadius = data.iCornerRadiusUL + 'px ' + data.iCornerRadiusUR + 'px ' + data.iCornerRadiusLR + 'px ' + data.iCornerRadiusLL + 'px';

			//Bild spiegeln
			let flip = 1;
			if (data.attr('iFlipImage')) {
				flip = -1;
			}

			//
			let imgMargin = data.iImgSpaceTop + 'px ' + data.iImgSpaceRight + 'px ' + data.iImgSpaceBottom + 'px ' + data.iImgSpaceLeft + 'px';
			let txtMargin = data.iTextSpaceTop + 'px ' + data.iTextSpaceRight + 'px ' + data.iTextSpaceBottom + 'px ' + data.iTextSpaceLeft + 'px'

			//Vertikale Inhaltsausrichtung
			let vertTextAlign = "";
			if (data.iContentVertAlign == 'iStart')
				vertTextAlign = "flex-start";
			else if (data.iContentVertAlign == 'iCenter')
				vertTextAlign = "center";
			else if (data.iContentVertAlign == 'iEnd')
				vertTextAlign = "flex-end";
			else if (data.iContentVertAlign == 'iSpace-between')
				vertTextAlign = "space-between";

			//Inhaltsausrichtung (Reihe oder Spalte)
			let contFlexDir = "";
			if (data.iContentFlexDirection == "vertical")
				contFlexDir = "column";
			else if (data.iContentFlexDirection == "horizontal")
				contFlexDir = "row";

			//Inhaltsreihenfolge (Erst Bild dann Text oder erst Text dann Bild)
			let orderContent = "";
			if (data.iContentOrder == 'orderTextImg')
				orderContent = 2;
			else
				orderContent = 0;

			//Bildausrichtung
			let imgAlign = "";
			if (data.iImgAlign == 'iStart')
				imgAlign = "flex-start";
			else if (data.iImgAlign == 'iCenter')
				imgAlign = "center";
			else if (data.iImgAlign == 'iEnd')
				imgAlign = "flex-end";

			//Textausrichtung
			let textAlign = "";
			if (data.iTextAlign == 'iStart')
				textAlign = "flex-start";
			else if (data.iTextAlign == 'iCenter')
				textAlign = "center";
			else if (data.iTextAlign == 'iEnd')
				textAlign = "flex-end";


			let navWidgetClass = "";
			if(data.iUniversalWidgetType == "Navigation"){
				navWidgetClass = "iMultiNav";
			}

			let html = `
			<div class="vis-inventwo-class vis-widget-body `+ navWidgetClass +`">
				<div class="vis-inventwo-button-new"
					 style="background: ` + backCol + `;
					 		box-shadow: `+ shadow +`;
					 		border: `+ border +`;
					 		border-radius: `+ borderRadius +`;">
					<div class="vis-inventwo-button-content"
						 style="opacity: `+ data.iOpacityCtn +`;
						 		justify-content: `+ vertTextAlign +`;
						 		flex-direction: `+ contFlexDir +`">
						
						<div class="vis-inventwo-button-imageContainer"
							 style="order: `+ orderContent +`;
							 align-self: `+ imgAlign +`;
							 margin: `+ imgMargin +`;">
							<img src="`+ img +`" width="`+ data.iIconSize +`"
								 style="filter: invert(`+ Number(data.iInvertImageCol) +`);
								 		transform: scaleX(`+ flip +`) rotateZ(`+ data.iImgRotation +`deg);"> 
						</div>
						
						<div class="vis-inventwo-button-text"
							 style="font-size: `+ data.iTextSize +`px;
							 		color: `+ data.iTextColor +`;
							 		margin: `+ txtMargin +`;
							 		align-self: `+ textAlign +`;">
							`+ txt +`
						</div>
						
					</div>
				</div>
			</div>`;

			$(el).html(html);

			//Bindings
			if(data.iUniversalWidgetType == "Switch"){
				vis.binds['vis-inventwo'].handleToggle(el, data);
			}
			else if(data.iUniversalWidgetType == "State"){
				vis.binds['vis-inventwo'].state(el, data, type);
			}
			else if(data.iUniversalWidgetType == "Navigation"){
				vis.binds['vis-inventwo'].handleNavigation(el, data);
			}

		}

	}

};