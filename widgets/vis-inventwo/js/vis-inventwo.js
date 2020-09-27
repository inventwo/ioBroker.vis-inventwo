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
		"oid": {
			"en": "Object ID",
			"de": "Objekt ID"
		},
		"iWiki": {
			"en": "<b>Manual</b>",
			"de": "<b>Anleitung</b>"
		},
		"iWikiText": {
			"en": "<b>To the wiki</b>",
			"de": "<b style='color: #9fdb58'>Zum Wiki</b>"
		},
		"iStart": {
			"en": "Start",
			"de": "Anfang"
		},
		"iEnd": {
			"en": "End",
			"de": "Ende"
		},
		"iCenter": {
			"en": "Center",
			"de": "Mitte"
		},
		"iSpace-between": {
			"en": "Space between",
			"de": "Platz dazwischen"
		},
		"group_i-css": {
			"en": "CSS inventwo Widget",
			"de": "CSS inventwo Widget"
		},
		//#endregion

		//#region Content Settings
		"iContentFlexDirection": {
			"en": "Style",
			"de": "Stil"
		},
		"iContentVertAlign": {
			"en": "Align",
			"de": "Ausrichtung"
		},
		"iContentOrder": {
			"en": "Order",
			"de": "Reihenfolge"
		},
		"orderTextImg": {
			"en": "Text -> Image",
			"de": "Text -> Bild"
		},
		"orderImgText": {
			"en": "Image -> Text",
			"de": "Bild -> Text"
		},
		"iOpacityCtn": {
			"en": "Content opacity",
			"de": "Inhalt Transparenz"
		},
		//#endregion

		//#region Image Settings
		"iImgRotation": {
			"en": "Rotation",
			"de": "Drehung"
		},
		"iImgAlign": {
			"en": "Position",
			"de": "Position"
		},
		"iImgSpaceTop": {
			"en": "Space top",
			"de": "Abstand oben"
		},
		"iImgSpaceLeft": {
			"en": "Space left",
			"de": "Abstand links"
		},
		"iImgSpaceRight": {
			"en": "Space right",
			"de": "Abstand rechts"
		},
		"iImgSpaceBottom": {
			"en": "Space bottom",
			"de": "Abstand unten"
		},
		"iIconSize": {
			"en": "Size",
			"de": "Größe"
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
		"iFlipImage": {
			"en": "Flip",
			"de": "Spiegeln"
		},
		"iInvertImageCol": {
			"en": "Invert color",
			"de": "Farbe invertieren"
		},

		//#endregion

		//#region Text Settings
		"iTextSpaceTop": {
			"en": "Space top",
			"de": "Abstand oben"
		},
		"iTextAlign": {
			"en": "Position",
			"de": "Position"
		},
		"iTextSpaceLeft": {
			"en": "Space left",
			"de": "Abstand links"
		},
		"iTextSpaceRight": {
			"en": "Space right",
			"de": "Abstand rechts"
		},
		"iTextSpaceBottom": {
			"en": "Space bottom",
			"de": "Abstand unten"
		},
		"iText": {
			"en": "Label",
			"de": "Beschriftung"
		},
		"iTextSize": {
			"en": "Label size",
			"de": "Größe"
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
			"de": "Farbe "
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
			"en": "Background active",
			"de": "Hintergrund aktiv"
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
			"de": "Abrundung unten rechts"
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
		"iShadowXOffset": {
			"en": "X offset",
			"de": "X Versatz"
		},
		"iShadowYOffset": {
			"en": "Y offset",
			"de": "Y Versatz"
		},
		"iShadowBlur": {
			"en": "Blur",
			"de": "Blur"
		},
		"iShadowSpread": {
			"en": "Spread",
			"de": "Größe"
		},
		"iShadowColor": {
			"en": "Color",
			"de": "Farbe"
		},
		"iShadowColorActive": {
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iShadowColorActiveM": {
			"en": "Outer Shadow active",
			"de": "Schatten außen aktiv"
		},
		"iShadowSpreadInner": {
			"en": "Inner size",
			"de": "Größe innen"
		},
		//#endregion

		//#region Shadow Inner Settingss
		"iShadowInnerXOffset": {
			"en": "X offset",
			"de": "X Versatz"
		},
		"iShadowInnerYOffset": {
			"en": "Y offset",
			"de": "Y Versatz"
		},
		"iShadowInnerBlur": {
			"en": "Blur",
			"de": "Blur"
		},
		"iShadowInnerSpread": {
			"en": "Spread",
			"de": "Größe"
		},
		"iShadowInnerColor": {
			"en": "Color",
			"de": "Farbe"
		},
		"iShadowInnerColorActive": {
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iShadowInnerColorActiveM": {
			"en": "Inner shadow active",
			"de": "Schatten innen aktiv"
		},
		//#endregion

		//#region Border Settingss
		"iBorderSize": {
			"en": "Width",
			"de": "Breite"
		},
		"iBorderStyle": {
			"en": "Style",
			"de": "Stil"
		},
		"iBorderColor": {
			"en": "Color",
			"de": "Farbe"
		},
		"iBorderColorActive": {
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iBorderColorActiveM": {
			"en": "Border active",
			"de": "Umrandung aktiv"
		},
		//#endregion


		//#region Switch & State Settings
		"iValueType": {
			"en": "Type",
			"de": "Typ"
		},
		"iValueFalse": {
			"en": "Value false",
			"de": "Wert falsch"
		},
		"iValueTrue": {
			"en": "Value true",
			"de": "Wert wahr"
		},
		"iValue": {
			"en": "Value",
			"de": "Wert"
		},
		"iValueTypeInfo": {
			"en": "Type Info",
			"de": "Typ Info"
		},
		"iValueTypeText": {
			"en": "If type is 'boolean', value fields can be empty",
			"de": "Wenn Typ ist 'boolean', können Wert Felder leer bleiben"
		},
		"iStateResponseTime": {
			"en": "Response time (in Ms)",
			"de": "Rückmeldungsdauer (in Ms)"
		},
		"iStateResetValueTime": {
			"en": "Length of stay (in ms)",
			"de": "Verweildauer (in Ms)"
		},
		//#endregion

		//#region Nav Settings
		"iNavWait": {
			"en": "Wait x milliseconds to check for active",
			"de": "Warte x Millisekunden bis Prüfung auf aktiv"
		},
		"iNavValue": {
			"en": "Value",
			"de": "Wert"
		},
		//#endregion

		//#region Radio Buttons
		"iRadiobtnWidth": {
			"en": "Button width",
			"de": "Button Breite"
		},
		"iRadiobtnHeight": {
			"en": "Button height",
			"de": "Button Höhe"
		},
		"iRadiobtnSpace": {
			"en": "Button space",
			"de": "Button Abstand"
		},
		"iRadiobtnsCount": {
			"en": "Count",
			"de": "Anzahl"
		},
		"group_iRadioBtns": {
			"en": "Radiobutton",
			"de": "Radiobutton"
		},
		"iRadiobtnAlign": {
			"en": "Alignment",
			"de": "Ausrichtung"
		},
		"iButtonBackM": {
			"en": "Color",
			"de": "Farbe"
		},
		"iButtonBackActiveM": {
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		//#endregion

		//#regionSlider Settings
		"iMinVal": {
			"en": "Min. value",
			"de": "Min. Wert"
		},
		"iMaxVal": {
			"en": "Max. value",
			"de": "Max. Wert"
		},
		"iStepVal": {
			"en": "Step",
			"de": "Schritt"
		},
		"iSliderColor": {
			"en": "Bar Color",
			"de": "Balken Farbe"
		},
		"iSliderKnobColor": {
			"en": "Handle Color",
			"de": "Regler Farbe"
		},
		"iSliderCorners": {
			"en": "Border radius",
			"de": "Rundung"
		},
		"iSliderKnobCorners": {
			"en": "Handle border radius",
			"de": "Regler Rundung"
		},
		"iSliderHeight": {
			"en": "Bar size",
			"de": "Balken dicke"
		},
		"iSliderKnobSize": {
			"en": "Handle size",
			"de": "Regler Größe"
		},
		"iSliderRotation": {
			"en": "Rotation",
			"de": "Ausrichtung"
		},
		"iSliderLabel": {
			"en": "Label",
			"de": "Beschriftung"
		},
		"iShowMinMax": {
			"en": "Show Min/Max Value",
			"de": "Zeige Min/Max Wert"
		},
		"iSliderTextColor": {
			"en": "Text color",
			"de": "Textfarbe"
		},
		"iShowValue": {
			"en": "Show value",
			"de": "Zeige Wert"
		},
		"iValueTextColor": {
			"en": "Value color",
			"de": "Wert Farbe"
		},
		"iValuePreText": {
			"en": "Pre text",
			"de": "Text voranstellen"
		},
		//#endregion

		//#region Table Settings
		"iTblShowHead": {
			"en": "Table Head",
			"de": "Tabellenkopf"
		},
		"iTblRowLimit": {
			"en": "Rowlimit",
			"de": "Zeilenlimit"
		},
		"iColCount": {
			"en": "Columncount",
			"de": "Spaltenanzahl"
		},
		"group_iTableCol": {
			"en": "Table Column",
			"de": "Tabellenspalte"
		},
		"iColName": {
			"en": "Header",
			"de": "Spaltenüberschrift"
		},
		"iColAttr": {
			"en": "Attribute in JSON",
			"de": "Attribut in JSON"
		},
		"iColWidth": {
			"en": "Columnwidth",
			"de": "Spaltenbreite"
		},
		"iTblRowEvenColor": {
			"en": "Background (row even)",
			"de": "Hintergrund (gerade Zeile)"
		},
		"iTblRowUnevenColor": {
			"en": "Background (row uneven)",
			"de": "Hintergrund (ungerade Zeile)"
		},
		"iTblHeaderColor": {
			"en": "Background (header)",
			"de": "Hintergrund (Überschrift)"
		},
		"iTblRowEvenTextColor": {
			"en": "Font Color (row even)",
			"de": "Textfarbe (gerade Zeile)"
		},
		"iTblRowUnevenTextColor": {
			"en": "Font color (row uneven)",
			"de": "Textfarbe (ungerade Zeile)"
		},
		"iTblHeaderTextColor": {
			"en": "Font color (header)",
			"de": "Textfarbe (Überschrift)"
		},
		"iRowSpacing": {
			"en": "Row spacing",
			"de": "Zeilenabstand"
		},
		"iColShow": {
			"en": "Show column",
			"de": "Zeige Spalte"
		},
		"iVertScroll": {
			"en": "Vertical scroll",
			"de": "Scrollen vertikal"
		},
		"iHorScroll": {
			"en": "Horinzontal scroll",
			"de": "Scrollen horizontal"
		},
		"iTableRefreshRate": {
			"en": "Refresh rate (ms)",
			"de": "Aktualisierung (ms)"
		},
		"iTblCellFormat": {
			"en": "Format",
			"de": "Format"
		},
		"iTblCellDatetimeFormat": {
			"en": "Date/Time format (if format is datetime)",
			"de": "Datum/Zeit Format (wenn Format = datetime)"
		},
		//#endregion

		//#region Universal & Multi Widget Settings
		"iUniversalWidgetTypeInfo": {
			"en": "Type info",
			"de": "Typ Info"
		},
		"iUniversalWidgetTypeInfoText": {
			"en": "Should it be a switch, state, navigation or background?",
			"de": "Soll es ein Switch, State, Navigation oder Hintergrund sein?"
		},
		"iUniversalWidgetType": {
			"en": "Widget type",
			"de": "Widget Typ"
		},
		"iUniversalValueCount": {
			"en": "Number of states",
			"de": "Anzahl der Zustände"
		},
		"group_iUniversalValues": {
			"en": "State",
			"de": "Zustand"
		},
		"iRefreshDataFieldsInfo": {
			"en": "---->",
			"de": "---->"
		},
		"iRefreshDataFields": {
			"en": "---->",
			"de": "---->"
		},
		"iRefreshDataFieldsText": {
			"en": "<span style='color:red'>Click on the button below to hide unimportant fields for this widget</span>",
			"de": "<span style='color:red'>Klicke auf den Button um nicht für das Widget relevante Felder zu verstecken</span>"
		},
		"iRefreshBtnText": {
			"en": "Refresh fields",
			"de": "Felder neuladen"
		},
		"iView": {
			"en": "View",
			"de": "View"
		},
		"iOidToggle": {
			"en": "Object ID to switch/set",
			"de": "Objekt ID zum Schalten/Setzen"
		},
		"iOidState": {
			"en": "Object ID to check",
			"de": "Objekt ID zum prüfen"
		},
		"iImgBlinkFalse": {
			"en": "Image blinkinterval",
			"de": "Bild falsch Blinkintervall"
		},
		"iImgBlinkTrue": {
			"en": "Image blinkinterval",
			"de": "Bild wahr Blinkintervall"
		},
		//#endregion

		//#region Image Settings
		"iPointerEvents": {
			"en": "Click through?",
			"de": "Klick durchlassen?"
		},
		//#endregion

		//#region Value List Settings
		"iValueListText": {
			"en": "Text",
			"de": "Text"
		},
		"iValueListDelimiter": {
			"en": "Delimiter",
			"de": "Trennzeichen"
		},
		"iValueListStyle": {
			"en": "Style",
			"de": "Stil"
		},
		"iValueListInfo": {
			"en": "Info",
			"de": "Info"
		},
		"iValueListEntryDistance": {
			"en": "Distance",
			"de": "Abstand"
		},
		//#endregion

		//#region Marquee Settings
		"iMarqueeText": {
			"en": "Text",
			"de": "Text"
		},
		"iMarqueeDirection": {
			"en": "Direction",
			"de": "Richtung"
		},
		"iMarqueeSpeed": {
			"en": "Speed",
			"de": "Geschwindigkeit"
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
		"iText-BackColorRadioInfo": {
			"en": "Info",
			"de": "Info"
		},
		"iText-BackColorRadio": {
			"en": "Enter if the color should differ from the general settings",
			"de": "Eintragen, wenn Farbe von allgemeinen Einstellungen abweichen soll"
		},
		"iText-valueListInfoText": {
			"en": "Textfield is preferred!",
			"de": "Textfeld wird bevorzugt!"
		},
		//#endregion
	});
}

vis.navChangeCallbacks.push(function (view) {

	vis.binds["vis-inventwo"].iUpdateNavigations(0, false);

});

vis.binds["vis-inventwo"] = {

	iUpdateNavigations: function (timeoutVal, byclick) {
		if (byclick == false) {
			$("#visview_" + vis.activeView + " .vis-inventwo-nav, #visview_" + vis.activeView + " .iUniversalNav").each(function () {
				let id = $(this).attr("id");
				if (id != undefined) {
					let data = vis.views[vis.activeView].widgets[id].data;

					if (data.iNavWait > timeoutVal)
						timeoutVal = data.iNavWait;
				}

			});
		}

		setTimeout(function () {

			$(".vis-inventwo-nav").each(function (el) {

				if ($(this).attr("data-inventwo-nav") === vis.activeView)
					$(this).css("background-color", $(this).attr("data-activecol"));
				else
					$(this).css("background-color", $(this).attr("data-col"));

			});

			$("#visview_" + vis.activeView + " .iUniversalNav").each(function () {
				let id = $(this).attr("id");
				let data = vis.views[vis.activeView].widgets[id].data;

				if (data.nav_view === vis.activeView) {
					$(this).find(".vis-inventwo-button-new").css("background", data.iButtonActive);
					$(this).find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageTrue);
					$(this).find(".vis-inventwo-button-text").html(data.iTextTrue);
				} else {
					$(this).find(".vis-inventwo-button-new").css("background", data.iButtonCol);
					$(this).find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
					$(this).find(".vis-inventwo-button-text").html(data.iTextFalse);
				}

			});

			$("#visview_" + vis.activeView + " .iMultiNav").each(function () {
				let id = $(this).attr("id");
				let data = vis.views[vis.activeView].widgets[id].data;
				let stateFound = false;
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					if (data["iView" + i] === vis.activeView) {
						stateFound = true;
						$(this).find(".vis-inventwo-button-new").css("background", data["iButtonActiveM" + i]);
						$(this).find(".vis-inventwo-button-imageContainer img").attr("src", data["iImageTrue" + i]);
						$(this).find(".vis-inventwo-button-text").html(data["iTextTrue" + i]);
						break;
					}
				}
				if (!stateFound) {
					$(this).find(".vis-inventwo-button-new").css("background", data.iButtonCol);
					$(this).find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
					$(this).find(".vis-inventwo-button-text").html(data.iTextFalse);
				}

			});

		}, timeoutVal);


	},
	handleToggle: function (el, data, type) {

		var $this = $(el);

		/*if(type == undefined || type == 'universal')
			var oid = data.oid;
		else{
			var oid = data.iOidToggle;
		}*/
		var oid = data.oid;

		if (!vis.editMode) {
			var moved = false;
			$this.parent().on("click touchend", function () {
				if (vis.detectBounce(this)) return;
				if (moved) return;

				var val = vis.states[oid + ".val"];
				var type = data.iValueType;
				var valFalse = data.iValueFalse;
				var valTrue = data.iValueTrue;

				if (type == "boolean")
					vis.setValue(oid, !val);
				else {

					if (val == valFalse) {
						if (!isNaN(valTrue))
							valTrue = parseFloat(valTrue);
						vis.setValue(oid, valTrue);
					} else {
						if (!isNaN(valFalse))
							valTrue = parseFloat(valFalse);
						vis.setValue(oid, valFalse);
					}
				}

			}).on("touchmove", function () {
				moved = true;
			}).on("touchstart", function () {
				moved = false;
			});

		}

	},
	handleNavigation: function (el, data, type) {
		if (!vis.editMode && data.nav_view) {
			var $this = $(el);
			var moved = false;
			$this.parent().on("click touchend", function (e) {
				// Protect against two events
				if (vis.detectBounce(this)) return;
				if (moved) return;
				vis.changeView(data.nav_view, data.nav_view);
				//e.preventDefault();
				//return false;

				if (data.oid !== "") {
					let val;
					if (type == "universal" || type == "multi")
						val = data.value;
					else
						val = data.iNavValue;

					if (val == "true")
						val = true;
					else if (val == "false")
						val = false;
					else if (!isNaN(val))
						val = parseFloat(val);
					vis.setValue(data.oid, val);
				}

				vis.binds["vis-inventwo"].iUpdateNavigations(data.iNavWait, true);


			}).on("touchmove", function () {
				moved = true;
			}).on("touchstart", function () {
				moved = false;
			});

		}
	},
	state: function (el, data, type) {

		var $this = $(el);

		/*if(type == undefined || type == 'universal')
			var oid = data.oid;
		else{
			var oid = data.iOidToggle;
		}*/
		var oid = data.oid;

		//$(el).html(valFalse);

		if (!vis.editMode) {

			$this.parent().on("click touchend", function () {
				if (!isNaN(data.value))
					data.value = parseFloat(data.value);

				let oldValue = vis.states[oid + ".val"];
				vis.setValue(oid, data.value);

				if (type == "universal") {
					let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + data.iShadowColorActive + ",inset " +
						data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + data.iShadowInnerColorActive;
					let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data.iBorderColorActive;
					$this.find(".vis-inventwo-button-new").css("background", data.iButtonActive);
					$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
					$this.find(".vis-inventwo-button-new").css("border", border);
					if (data.iImageTrue != undefined)
						$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageTrue);
					if (data.iTextTrue != undefined)
						$this.find(".vis-inventwo-button-text").html(data.iTextTrue);

					setTimeout(function () {
						let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + data.iShadowColor + ",inset " +
							data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + data.iShadowInnerColor;
						let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data.iBorderColor;
						$this.find(".vis-inventwo-button-new").css("background", data.iButtonCol);
						$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
						$this.find(".vis-inventwo-button-new").css("border", border);
						if (data.iImageFalse != undefined)
							$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
						if (data.iTextFalse != undefined)
							$this.find(".vis-inventwo-button-text").html(data.iTextFalse);
					}, data.iStateResponseTime);


				} else if (type == "multi") {
					let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + data["iShadowColorActiveM1"] + ",inset " +
						data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + data["iShadowInnerColorActiveM1"];
					let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data["iBorderColorActiveM1"];
					$this.find(".vis-inventwo-button-new").css("background", data["iButtonActiveM1"]);
					$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
					$this.find(".vis-inventwo-button-new").css("border", border);
					if (data.iImageTrue != undefined)
						$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageTrue);
					if (data.iTextTrue != undefined)
						$this.find(".vis-inventwo-button-text").html(data.iTextTrue);

					setTimeout(function () {

						let backCol = data.iButtonCol;
						let shadowCol = data.iShadowColor;
						let shadowColInner = data.iShadowInnerColor;
						let borderCol = data.iBorderColor;
						let img = "";
						let txt = "";
						if (data.iImageFalse != undefined)
							img = data.iImageFalse;
						if (data.iTextFalse != undefined)
							txt = data.iTextFalse;

						for (let i = 1; i <= data.iUniversalValueCount; i++) {
							if ((data.iUniversalWidgetType != "Navigation" && vis.states.attr(data["oid" + i] + ".val") == data["iValue" + i]) || (data.iUniversalWidgetType == "Navigation" && data["iView" + i] === vis.activeView)) {
								backCol = data["iButtonActiveM" + i];
								shadowCol = data["iShadowColorActiveM" + i];
								shadowColInner = data["iShadowInnerColorActiveM" + i];
								borderCol = data["iBorderColorActiveM" + i];
								if (data.attr("iImageTrue" + i) != undefined)
									img = data.attr("iImageTrue" + i);
								if (data.attr("iTextTrue" + i) != undefined)
									txt = data.attr("iTextTrue" + i);
								break;
							}
						}

						let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + shadowCol + ",inset " +
							data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + shadowColInner;
						let border = data.iBorderSize + "px " + data.iBorderStyle + " " + borderCol;
						$this.find(".vis-inventwo-button-new").css("background", backCol);
						$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
						$this.find(".vis-inventwo-button-new").css("border", border);
						if (data.iImageFalse != undefined)
							$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
						if (data.iTextFalse != undefined)
							$this.find(".vis-inventwo-button-text").html(data.iTextFalse);
					}, data.iStateResponseTime);


				}

				if (data.iStateResetValueTime > 0) {
					setTimeout(function () {
						vis.setValue(oid, oldValue);
					}, data.iStateResetValueTime);
				}
			});

		}
	},
	externalLinks: function (widAttr, data) {
		let url = "";
		if (data[1] === "wiki") {
			url = "https://github.com/inventwo/ioBroker.vis-inventwo/wiki";
		}
		return {input: `<a target="_blank" href="${url}">${_("iWikiText")}</a>`};
	},
	infoText: function (widAttr, data) {
		let text = "";

		if (data[1] === "valueType") {
			text = "iValueTypeText";
		} else if (data[1] === "emptyText") {
			text = "";
		} else if (data[1] === "universalTypeInfo") {
			text = "iUniversalWidgetTypeInfoText";
		} else if (data[1] === "refreshDataFieldsText") {
			text = "iRefreshDataFieldsText";
		} else if (data[1] === "radioBtnBackColInfoText") {
			text = "iText-BackColorRadio";
		} else if (data[1] === "valueListInfoText") {
			text = "iText-valueListInfoText";
		}


		return {input: `<span>${_(text)}</span>`};
	},
	handleSlider: function (el, data, options) {

		var $this = $(el);
		var oid = data.oid;

		var settings = $.extend({
			min: parseFloat(data.iMinVal),
			max: parseFloat(data.iMaxVal),
			step: parseFloat(data.iStepVal),
			slide: function (event, ui) {
				if (!vis.editMode)
					vis.setValue(oid, ui.value);
			}
		}, options);

		$this.slider(settings);

		$this.css("transform", "rotate(" + data.iSliderRotation + "deg)");
		$this.children().css("width", data.iSliderKnobSize + "px");
		$this.children().css("height", data.iSliderKnobSize + "px");
		$this.children().css("border", "0px");
		$this.children().css("border-radius", data.iSliderKnobCorners + "%");
		$this.children().css("background", data.iSliderKnobColor);
		$this.children().css("box-shadow", "0 0 5px 1px black");
		if (options.orientation === "horizontal") {
			$this.children().css("margin-left", "-" + (data.iSliderKnobSize / 2) + "px");
			let topPos = ((data.iSliderKnobSize - data.iSliderHeight) / 2) * (-1);
			$this.children().css("top", topPos + "px");
		} else {
			$this.children().css("left", "-" + (data.iSliderKnobSize / 2 - data.iSliderHeight / 2) + "px");
			$this.children().css("margin-bottom", "-" + (data.iSliderKnobSize / 2) + "px");
		}

		$this.slider("option", "value", vis.states.attr(oid + ".val"));

		vis.states.bind(oid + ".val", function () {
			$this.slider("option", "value", vis.states.attr(oid + ".val"));
		});

	},

	jsontable: function (el, data) {

		function testJSON(text) {
			if (typeof text !== "string") {
				return false;
			}
			try {
				JSON.parse(text);
				return true;
			} catch (error) {
				return false;
			}
		}

		let output = "";

		if (data.oid === "" || data.oid === "nothing_selected" || data.oid === undefined) {
			output = "No data";
		} else if (vis.states.attr(data.oid + ".val") == undefined || vis.states.attr(data.oid + ".val") == "" ||
			vis.states.attr(data.oid + ".val") == "null" || typeof vis.states.attr(data.oid + ".val") == "null") {

			output = "No or wrong data in datapoint!";
		} else {
			if (data.iColCount !== "" && data.iColCount > 0) {
				let jd = vis.states.attr(data.oid + ".val");
				let jsondata;

				if (typeof jd === "string")
					jsondata = JSON.parse(jd);
				else
					jsondata = jd;

				let rowLimit = jsondata.length;
				if (data.iTblRowLimit < rowLimit)
					rowLimit = data.iTblRowLimit;
				let colLimit = Object.keys(jsondata[0]).length;
				if (data.iColCount < colLimit)
					colLimit = data.iColCount;

				if (data.iVertScroll) {
					$(el).parent().css("overflow-y", "scroll");
				} else {
					$(el).parent().css("overflow-y", "hidden");
				}

				if (data.iHorScroll) {
					$(el).parent().css("overflow-x", "scroll");
				} else {
					$(el).parent().css("overflow-x", "hidden");
				}

				output = "<table class='vis-inventwo-json-table' style='opacity: " + data.iOpacityAll + ";'>";
				if (data.iTblShowHead) {
					output += "<thead style='background:" + data.iTblHeaderColor + "; color: " + data.iTblHeaderTextColor + "'>";
					for (let i = 0; i < colLimit; i++) {
						if (data["iColShow" + (i + 1)]) {
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
						if (data["iColShow" + (i + 1)]) {

							let colWidth = "";
							if (data["iColWidth" + (i + 1)] !== undefined && data["iColWidth" + (i + 1)] !== "") {
								colWidth = data["iColWidth" + (i + 1)];
							}

							let cellValue = "";

							if (data["iColAttr" + (i + 1)] !== undefined && data["iColAttr" + (i + 1)] !== "") {
								cellValue = jsondata[e][Object.keys(jsondata[e])[i]];
							} else {
								cellValue = jsondata[e][Object.keys(jsondata[e])[i]];
							}

							switch (data["iTblCellFormat" + (i + 1)]) {
								case "normal":
									break;
								case "datetime":
									if (data["iTblCellDatetimeFormat" + (i + 1)] != "") {
										if (!isNaN(cellValue) && cellValue.toString().length > 10)
											cellValue = cellValue;
										else if (!isNaN(cellValue) && cellValue.toString().length <= 10)
											cellValue = cellValue * 1000;

										var getDateString = function (date, format) {
											var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
												getPaddedComp = function (comp) {
													return ((parseInt(comp) < 10) ? ("0" + comp) : comp);
												},
												formattedDate = format,
												o = {
													"y": date.getFullYear(), // year
													"m": getPaddedComp(date.getMonth() + 1), //month number
													"M": months[date.getMonth()], //month
													"d": getPaddedComp(date.getDate()), //day
													"h": getPaddedComp((date.getHours() > 12) ? date.getHours() % 12 : date.getHours()), //hour
													"H": getPaddedComp(date.getHours()), //hour
													"i": getPaddedComp(date.getMinutes()), //minute
													"s": getPaddedComp(date.getSeconds()), //second
													"S": getPaddedComp(date.getMilliseconds()), //millisecond,
													"b": (date.getHours() >= 12) ? "PM" : "AM"
												};

											for (var k in o) {
												if (new RegExp("(" + k + ")", "g").test(format)) {
													formattedDate = formattedDate.replace(RegExp.$1, o[k]);
												}
											}
											return formattedDate;
										};

										var formattedDate = getDateString(new Date(cellValue), data["iTblCellDatetimeFormat" + (i + 1)]);
										cellValue = formattedDate;
									}
									break;
								case "image":
									cellValue = "<img src='" + cellValue + "'>";
									break;
							}

							output += "<td style='width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px;'>" + cellValue + "</td>";
						}
					}
					output += "</tr>";
				}
				output += "</tbody>";
				output += "</table>";

				setTimeout(vis.binds["vis-inventwo"].jsontable, data.iTableRefreshRate, el, data);


			} else {
				output = "Columncount can't be zero/empty!";
			}
		}
		$(el).html(output);
	},

	radiobutton: function (el, oid, val) {
		var $this = $(el);

		if (!vis.editMode) {
			var moved = false;
			$this.parent().on("click touchend", function () {
				if (vis.detectBounce(this)) return;
				if (moved) return;

				if (!isNaN(val))
					val = parseFloat(val);

				vis.setValue(oid, val);

			}).on("touchmove", function () {
				moved = true;
			}).on("touchstart", function () {
				moved = false;
			});

		}
	},

	updateUniversalDataFields: function (wid, view) {

		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.iUniversalWidgetType;

			if (val == "Switch") {
				vis.hideShowAttr("iNavWait", false);
				vis.hideShowAttr("iValueType", true);
				vis.hideShowAttr("iValueTypeInfo", true);
				vis.hideShowAttr("iValueFalse", true);
				vis.hideShowAttr("iValueTrue", true);
				vis.hideShowAttr("value", false);
				vis.hideShowAttr("iStateResponseTime", false);
				vis.hideShowAttr("nav_view", false);
				vis.hideShowAttr("oid", true);
				vis.hideShowAttr("iStateResetValueTime", false);
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iTextFalse" + i, true);
					vis.hideShowAttr("iTextTrue" + i, true);
					vis.hideShowAttr("iImageFalse" + i, true);
					vis.hideShowAttr("iImageTrue" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, false);
				}
			} else if (val == "State") {
				vis.hideShowAttr("iNavWait", false);
				vis.hideShowAttr("iValueType", false);
				vis.hideShowAttr("iValueTypeInfo", false);
				vis.hideShowAttr("iValueFalse", false);
				vis.hideShowAttr("iValueTrue", false);
				vis.hideShowAttr("value", true);
				vis.hideShowAttr("iStateResponseTime", true);
				vis.hideShowAttr("nav_view", false);
				vis.hideShowAttr("oid", true);
				vis.hideShowAttr("iStateResetValueTime", true);
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iTextFalse" + i, true);
					vis.hideShowAttr("iTextTrue" + i, true);
					vis.hideShowAttr("iImageFalse" + i, true);
					vis.hideShowAttr("iImageTrue" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, false);
				}
			} else if (val == "Navigation") {
				vis.hideShowAttr("iNavWait", true);
				vis.hideShowAttr("iValueType", false);
				vis.hideShowAttr("iValueTypeInfo", false);
				vis.hideShowAttr("iValueFalse", false);
				vis.hideShowAttr("iValueTrue", false);
				vis.hideShowAttr("value", true);
				vis.hideShowAttr("iStateResponseTime", false);
				vis.hideShowAttr("nav_view", true);
				vis.hideShowAttr("oid", true);
				vis.hideShowAttr("iStateResetValueTime", false);
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, false);
					vis.hideShowAttr("iTextFalse" + i, true);
					vis.hideShowAttr("iTextTrue" + i, true);
					vis.hideShowAttr("iImageFalse" + i, true);
					vis.hideShowAttr("iImageTrue" + i, true);
					vis.hideShowAttr("iValue" + i, false);
					vis.hideShowAttr("iView" + i, true);
				}
			} else if (val == "Background") {
				vis.hideShowAttr("iNavWait", false);
				vis.hideShowAttr("iValueFalse", false);
				vis.hideShowAttr("value", false);
				vis.hideShowAttr("iStateResponseTime", false);
				vis.hideShowAttr("nav_view", false);
				vis.hideShowAttr("iStateResetValueTime", false);
				if (data.iUniversalValueCount == undefined) {
					vis.hideShowAttr("oid", true);
					vis.hideShowAttr("iValueType", true);
					vis.hideShowAttr("iValueTypeInfo", true);
					vis.hideShowAttr("iValueTrue", true);
				} else {
					vis.hideShowAttr("oid", false);
					vis.hideShowAttr("iValueType", false);
					vis.hideShowAttr("iValueTypeInfo", false);
					vis.hideShowAttr("iValueTrue", false);
				}
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iTextFalse" + i, true);
					vis.hideShowAttr("iTextTrue" + i, true);
					vis.hideShowAttr("iImageFalse" + i, true);
					vis.hideShowAttr("iImageTrue" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, false);
				}
			}
		});

	},
	/*
		refreshDataFieldBtn: function () {

			let text = "iRefreshBtnText";
			return {input: `<button class="iUniversalWidgetRefreshBtn" onclick="vis.binds['vis-inventwo'].updateUniversalDataFields()">${_(text)}</button>`}

		},
	*/
	universalButton: function (el, data, type) {

		this.updateUniversalDataFields;
		vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
			createWidget(false);
		});
		/*
		vis.states.bind(data.iOidToggle + '.val', function (e, newVal, oldVal){
			createWidget();
		});*/
		vis.states.bind(vis.activeView, function (e, newVal, oldVal) {
			createWidget(false);
		});

		if (type == "multi" && data.iUniversalWidgetType != "Navigation") {
			for (let index = 1; index <= data.iUniversalValueCount; index++) {

				vis.states.bind(data.attr("oid" + index) + ".val", function (e, newVal, oldVal) {
					createWidget(false);
				});

			}
		}


		createWidget(true);

		function createWidget(createEvents) {
			/*
			if(!$(el).length){
				createWidget(el,data,type);
			}*/

			let dataNew = Object.assign({}, data);

			if (vis.editMode) {
				dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
			}

			//Farben, Text & Bild bei true oder false
			let backCol = "";
			let shadowCol = "";
			let shadowColInner = "";
			let borderCol = "";
			let img = "";
			let txt = "";
			let imgBlink = 0;
			let imgColInvert = 0;

			if (type == "multi") {
				let found = false;
				for (let i = 1; i <= dataNew.iUniversalValueCount; i++) {

					let val = dataNew["iValue" + i];
					if (val == "true")
						val = true;
					else if (val == "false")
						val = false;
					else if (!isNaN(val))
						val = parseFloat(val);

					if ((dataNew.iUniversalWidgetType != "Navigation" && dataNew["oid" + i] != undefined && vis.states.attr(dataNew["oid" + i] + ".val") == val) ||
						(dataNew.iUniversalWidgetType == "Navigation" && dataNew["iView" + i] === vis.activeView)) {
						backCol = dataNew["iButtonActiveM" + i];
						shadowCol = dataNew["iShadowColorActiveM" + i];
						shadowColInner = dataNew["iShadowInnerColorActiveM" + i];
						borderCol = dataNew["iBorderColorActiveM" + i];
						if (dataNew["iImageTrue" + i] != undefined)
							img = dataNew["iImageTrue" + i];
						if (dataNew["iTextTrue" + i] != undefined)
							txt = dataNew["iTextTrue" + i];
						imgBlink = dataNew["iImgBlinkTrue" + i];
						imgColInvert = dataNew["iInvertImageCol" + i];
						found = true;
						break;
					}
				}
				if (!found) {
					backCol = dataNew.iButtonCol;
					shadowCol = dataNew.iShadowColor;
					shadowColInner = dataNew.iShadowInnerColor;
					borderCol = dataNew.iBorderColor;
					if (dataNew.iImageFalse != undefined)
						img = dataNew.iImageFalse;
					else {
						img = "";
					}
					if (dataNew.iTextFalse != undefined)
						txt = dataNew.iTextFalse;
					else
						txt = "";
					imgBlink = dataNew.iImgBlinkFalse;
					imgColInvert = dataNew.iInvertImageCol;
				}
			} else if (type == "universal") {
				if ((dataNew.iUniversalWidgetType == "Navigation" && dataNew.nav_view === vis.activeView) ||
					(
						(dataNew.iUniversalWidgetType == "Switch" || dataNew.iUniversalWidgetType == "Background") &&
						(
							(vis.states.attr(dataNew.oid + ".val") == dataNew.iValueTrue && dataNew.iValueType == "value") ||
							(vis.states.attr(dataNew.oid + ".val") === true && dataNew.iValueType == "boolean")
						)

					)) {

					backCol = dataNew.iButtonActive;
					shadowCol = dataNew.iShadowColorActive;
					shadowColInner = dataNew.iShadowInnerColorActive;
					borderCol = dataNew.iBorderColorActive;

					if (dataNew.iImageTrue != undefined)
						img = dataNew.iImageTrue;
					if (dataNew.iTextFalse != undefined)
						txt = dataNew.iTextTrue;

					imgBlink = dataNew.iImgBlinkTrue;
				} else {
					backCol = dataNew.iButtonCol;
					shadowCol = dataNew.iShadowColor;
					shadowColInner = dataNew.iShadowInnerColor;
					borderCol = dataNew.iBorderColor;
					if (dataNew.iImageFalse != undefined)
						img = dataNew.iImageFalse;
					else {
						img = "";
					}
					if (dataNew.iTextFalse != undefined)
						txt = dataNew.iTextFalse;
					else
						txt = "";
					imgBlink = dataNew.iImgBlinkFalse;


				}

				imgColInvert = dataNew.iInvertImageCol;
			}


			imgBlink = imgBlink / 1000;

			let shadow = dataNew.iShadowXOffset + "px " + dataNew.iShadowYOffset + "px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px " + shadowCol + ",inset " +
				dataNew.iShadowInnerXOffset + "px " + dataNew.iShadowInnerYOffset + "px " + dataNew.iShadowInnerBlur + "px " + dataNew.iShadowInnerSpread + "px " + shadowColInner;
			let border = dataNew.iBorderSize + "px " + dataNew.iBorderStyle + " " + borderCol;
			let borderRadius = dataNew.iCornerRadiusUL + "px " + dataNew.iCornerRadiusUR + "px " + dataNew.iCornerRadiusLR + "px " + dataNew.iCornerRadiusLL + "px";

			//Bild spiegeln
			let flip = 1;
			if (dataNew.iFlipImage) {
				flip = -1;
			}

			//
			let imgMargin = dataNew.iImgSpaceTop + "px " + dataNew.iImgSpaceRight + "px " + dataNew.iImgSpaceBottom + "px " + dataNew.iImgSpaceLeft + "px";
			let txtMargin = dataNew.iTextSpaceTop + "px " + dataNew.iTextSpaceRight + "px " + dataNew.iTextSpaceBottom + "px " + dataNew.iTextSpaceLeft + "px";

			//Vertikale Inhaltsausrichtung
			let vertTextAlign = "";
			if (dataNew.iContentVertAlign == "iStart")
				vertTextAlign = "flex-start";
			else if (dataNew.iContentVertAlign == "iCenter")
				vertTextAlign = "center";
			else if (dataNew.iContentVertAlign == "iEnd")
				vertTextAlign = "flex-end";
			else if (dataNew.iContentVertAlign == "iSpace-between")
				vertTextAlign = "space-between";

			//Inhaltsausrichtung (Reihe oder Spalte)
			let contFlexDir = "";
			if (dataNew.iContentFlexDirection == "vertical")
				contFlexDir = "column";
			else if (dataNew.iContentFlexDirection == "horizontal")
				contFlexDir = "row";

			//Inhaltsreihenfolge (Erst Bild dann Text oder erst Text dann Bild)
			let orderContent = "";
			if (dataNew.iContentOrder == "orderTextImg")
				orderContent = 2;
			else
				orderContent = 0;

			//Bildausrichtung
			let imgAlign = "";
			if (dataNew.iImgAlign == "iStart")
				imgAlign = "flex-start";
			else if (dataNew.iImgAlign == "iCenter")
				imgAlign = "center";
			else if (dataNew.iImgAlign == "iEnd")
				imgAlign = "flex-end";

			//Textausrichtung
			let textAlign = "";
			if (dataNew.iTextAlign == "iStart")
				textAlign = "flex-start";
			else if (dataNew.iTextAlign == "iCenter")
				textAlign = "center";
			else if (dataNew.iTextAlign == "iEnd")
				textAlign = "flex-end";

			let html = `
			<div class="vis-inventwo-class vis-widget-body">
				<div>
					<div class="vis-inventwo-button-new"
						 style="background: ` + backCol + `;
						 		opacity: ` + dataNew.iOpacityBack + `;
						 		box-shadow: ` + shadow + `;
						 		border: ` + border + `;
						 		border-radius: ` + borderRadius + `;"></div>
					<div class="vis-inventwo-button-content"
						 style="opacity: ` + dataNew.iOpacityCtn + `;
						 		justify-content: ` + vertTextAlign + `;
						 		flex-direction: ` + contFlexDir + `">
						
						<div class="vis-inventwo-button-imageContainer"
							 style="order: ` + orderContent + `;
							 align-self: ` + imgAlign + `;
							 margin: ` + imgMargin + `;">
							<img src="` + img + `" width="` + dataNew.iIconSize + `"
								 style="filter: invert(` + Number(imgColInvert) + `);
								 		transform: scaleX(` + flip + `) rotateZ(` + dataNew.iImgRotation + `deg);
								 		animation:blink ` + imgBlink + `s infinite;"> 
						</div>
						
						<div class="vis-inventwo-button-text"
							 style="font-size: ` + dataNew.iTextSize + `px;
							 		color: ` + dataNew.iTextColor + `;
							 		margin: ` + txtMargin + `;
							 		align-self: ` + textAlign + `;">
							` + txt + `
						</div>
						
					</div>
				</div>
			</div>`;

			$(el).html(html);

			//Bindings
			if (createEvents) {
				if (dataNew.iUniversalWidgetType == "Switch") {
					vis.binds["vis-inventwo"].handleToggle(el, dataNew, type);
				} else if (dataNew.iUniversalWidgetType == "State") {
					vis.binds["vis-inventwo"].state(el, dataNew, type);
				} else if (dataNew.iUniversalWidgetType == "Navigation") {
					vis.binds["vis-inventwo"].handleNavigation(el, dataNew, type);
					if (type == "universal")
						$(el).parent().addClass("iUniversalNav");
					else if (type == "multi")
						$(el).parent().addClass("iMultiNav");
				} else if (dataNew.iUniversalWidgetType == "Background") {
					$(el).parent().css("cursor", "default");
				}

				$(el).parent().on("mouseup click", function () {
					setTimeout(function () {
						vis.binds["vis-inventwo"].updateUniversalDataFields();
					}, 100);
				});
			}

		}

	},

	getDatapointsValues: function (data) {

		for (let [key, value] of Object.entries(data)) {
			if (key.substring(0, 1) == "i") {

				let matches = [];
				let reg = /\{([^\{\}]*)\}/gm;
				let match = reg.exec(value);
				while (match != null) {
					matches.push(match);
					match = reg.exec(value);
				}

				matches.forEach(function (match) {
					let val = vis.states.attr(match[1] + ".val");
					data[key] = data[key].replace(match[0], val);
				});
			}
		}

		return data;
	},


	valueList: function (el, data) {

		vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
			createList();
		});

		createList();

		function createList() {
			let text = "";
			let arr = [];
			let listTxt = "";

			let dataNew = Object.assign({}, data);

			if (dataNew.iValueListText != undefined && dataNew.iValueListText != "") {
				listTxt = dataNew.iValueListText;
			} else if (data.oid != undefined && data.oid != "" && vis.states.attr(data.oid + ".val") != "") {
				listTxt = vis.states.attr(data.oid + ".val");
			}

			let paddingLeft = 14;

			if (data.iValueListStyle == "none") {
				paddingLeft = 0;
			}

			if (listTxt != "") {
				arr = listTxt.split(dataNew.iValueListDelimiter);

				text = `<ul class="vis-inventwo-valuelist-list"
					style="padding-left: ` + paddingLeft + `px;
							color: ` + dataNew.iTextColor + `;
							font-size: ` + dataNew.iTextSize + `px;
							list-style: ` + dataNew.iValueListStyle + `">`;

				text += "<li class='vis-inventwo-valuelist-li' style='padding-bottom: " + dataNew.iValueListEntryDistance + "px;'>";
				text += arr.join("</li><li class='vis-inventwo-valuelist-li' style='padding-bottom: " + dataNew.iValueListEntryDistance + "px;'>");
				text += "</li></ul>";

			}

			$(el).html(text);

		}

	}

};