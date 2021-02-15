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
		"horizontal": {
			"en": "Horizontal",
			"de": "Waagerecht"
		},
		"vertical": {
			"en": "Vertical",
			"de": "Senkrecht"
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
		"iImgColorFalse": {
			"en": "Color false",
			"de": "Farbe falsch"
		},
		"iImgColorTrue": {
			"en": "Color true",
			"de": "Farbe wahr"
		},
		"iImgColorInvertTrue": {
			"en": "Invert color true",
			"de": "Farbe invertieren wahr"
		},
		"iImgColorInvertFalse": {
			"en": "Invert color false",
			"de": "Farbe invertieren falsch"
		},

		"iImgColorInvert": {
			"en": "Invert color",
			"de": "Farbe invertieren"
		},

		"iImgScaleType": {
			"en": "Scale type",
			"de": "Art der Skalierung"
		},

		"iImgTileSize": {
			"en": "Tile size",
			"de": "Kachelgröße"
		},

		"iStretch": {
			"en": "Stretch",
			"de": "Füllen"
		},

		"iRepeat": {
			"en": "Repeat",
			"de": "Wiederholen"
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
		"iButtonColHover": {
			"en": "Color on Hover",
			"de": "Farbe bei Hover"
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
		"iShadowColorHover": {
			"en": "Color on Hover",
			"de": "Farbe bei Hover"
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
		"iShadowInnerColorHover": {
			"en": "Color on Hover",
			"de": "Farbe bei Hover"
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
		"iBorderColorHover": {
			"en": "Color on Hover",
			"de": "Farbe bei Hover"
		},
		"iBorderColorActiveM": {
			"en": "Border active",
			"de": "Umrandung aktiv"
		},
		"iBorderStyleLeft": {
			"en": "Style left",
			"de": "Stil links"
		},
		"iBorderStyleRight": {
			"en": "Style right",
			"de": "Stil rechts"
		},
		"iBorderStyleUp": {
			"en": "Style top",
			"de": "Stil oben"
		},
		"iBorderStyleDown": {
			"en": "Style bottom",
			"de": "Stil unten"
		},
		"iBorderRemoveDouble": {
			"en": "Collapse",
			"de": "Zusammenfassen"
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
			"en": "Color",
			"de": "Farbe"
		},
		"iSliderKnobColor": {
			"en": "Color",
			"de": "Farbe"
		},
		"iSliderCorners": {
			"en": "Border radius",
			"de": "Rundung"
		},
		"iSliderKnobCorners": {
			"en": "Border radius",
			"de": "Rundung"
		},
		"iSliderHeight": {
			"en": "Size",
			"de": "Größe"
		},
		"iSliderKnobSize": {
			"en": "Size",
			"de": "Größe"
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
			"en": "Color",
			"de": "Farbe"
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
		"iValueAfterText": {
			"en": "After text",
			"de": "Text anhängen"
		},
		"iChangeOnRelease": {
			"en": "Update value on release",
			"de": "Wert erst beim loslassen setzen"
		},
		"iInvertMinMax": {
			"en": "Invert min/max",
			"de": "Invertiere Min/Max"
		},
		"iIdRed": {
			"en": "Red",
			"de": "Rot"
		},
		"iIdGreen": {
			"en": "Green",
			"de": "Grün"
		},
		"iIdBlue": {
			"en": "Blue",
			"de": "Blau"
		},
		"iColorSliderType": {
			"en": "Color model",
			"de": "Farbmodell"
		},
		//#endregion

		//#region Table Settings
		"iTblShowHead": {
			"en": "Table Head",
			"de": "Tabellenkopf"
		},
		"iTblFixedHead": {
			"en": "Fixed Table Head",
			"de": "Tabellenkopf fixierenn"
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
		"iTblCellFormat": {
			"en": "Format",
			"de": "Format"
		},
		"iTblCellDatetimeFormat": {
			"en": "Date/Time format",
			"de": "Datum/Zeit Format"
		},
		"iTblCellImageSize": {
			"en": "Image size",
			"de": "Bildgröße"
		},
		"iTblCellDatetimeFormatInfo": {
			"en": "Format help",
			"de": "Format Hilfe"
		},
		"iTblTextAlign": {
			"en": "Text align",
			"de": "Textausrichtung"
		},
		"iTableRefreshRate": {
			"en": "Refresh rate (seconds)",
			"de": "Aktualisierung (Sekunden)"
		},
		"iTblCellPlaceholder": {
			"en": "Placeholder if cell is empty",
			"de": "Platzhalter wenn Zeile leer ist"
		},
		"iTblDummyRow": {
			"en": "Header if JSON is empty (words separated by commas)",
			"de": "Überschrift, wenn JSON leer ist (Wörter kommagetrennt schreiben)"
		},
		"iTblCellNumberDecimals": {
			"en": "Decimals",
			"de": "Nachkommastellen"
		},
		"iTblCellNumberDecimalSeperator": {
			"en": "Decimal seperator",
			"de": "Dezimaltrennzeichen"
		},
		"iTblCellNumberThousandSeperator": {
			"en": "Thousand seperator",
			"de": "Tausendertrennzeichen"
		},
		"iTblCellBooleanCheckbox": {
			"en": "Show as Checkbox",
			"de": "Zeige als Checkbox"
		},
		"iTblCellBooleanColorFalse": {
			"en": "Color false",
			"de": "Farbe falsch"
		},
		"iTblCellBooleanColorTrue": {
			"en": "Color true",
			"de": "Farbe wahr"
		},
		"iTblCellThresholdsDp": {
			"en": "Thresholds from Dp",
			"de": "Schwellenwerte aus Dp"
		},
		"iTblCellThresholdsText": {
			"en": "Thresholds from text",
			"de": "Schwellenwerte aus Text"
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
		"iValueComparison": {
			"en": "Comparison operator",
			"de": "Vergeleichsoperator"
		},
		"equal": {
			"en": "equal",
			"de": "Gleich"
		},
		"greater": {
			"en": "greater",
			"de": "Größer"
		},
		"lower": {
			"en": "lower",
			"de": "Kleiner"
		},
		"not": {
			"en": "not",
			"de": "Nicht"
		},
		"horizontal": {
			"en": "horizontal",
			"de": "Waagerecht"
		},
		"vertical": {
			"en": "vertical",
			"de": "Senkrecht"
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

		//#region Toggle Switch Settings
		"iSwitchSize": {
			"en": "Size",
			"de": "Größe"
		},
		"iSwitchColOn": {
			"en": "Color on",
			"de": "Farbe an"
		},
		"iSwitchColOnActive": {
			"en": "Color on active",
			"de": "Farbe an aktiv"
		},
		"iSwitchColOff": {
			"en": "Color off",
			"de": "Farbe aus"
		},
		"iSwitchColOffActive": {
			"en": "Color off active",
			"de": "Farbe aus aktiv"
		},
		"iSwitchColor": {
			"en": "Toggle Switch color",
			"de": "Schalterfarbe"
		},
		"iSwitchOrientation": {
			"en": "Orientation",
			"de": "Ausrichtung"
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
		"iText-tblDateInfo": {
			"en": "H = Hours, i = Minutes, s = Seconds, S = Milliseconds, d = Day, M = Month, m = Monthnumber, y = Year",
			"de": "H = Stunden, i = Minuten, s = Sekunden, S = Millisekunden, d = Tag, M = Monat, m = Monatszahl, y = Jahr"
		},
		"iText-ToggleSwitchSettings": {
			"en": "<b>Switch</b>",
			"de": "<b>Schalter</b>"
		},
		"iText-SliderBarSettings": {
			"en": "<b>Slider bar</b>",
			"de": "<b>Slider Balken</b>"
		},
		"iText-SliderKnobSettings": {
			"en": "<b>Slider knob</b>",
			"de": "<b>Slider Regler</b>"
		},
		//#endregion

	});
}

vis.navChangeCallbacks.push(function (view) {
	vis.binds["vis-inventwo"].iUpdateNavigations(0, false);
});

vis.binds["vis-inventwo"] = {

	//Navigationen updaten - Farben, Texte und Bilder wechseln
	iUpdateNavigations: function (timeoutVal, byclick) {
		if (byclick == false) {
			/*
			$("#visview_" + vis.activeView + " .vis-inventwo-nav, #visview_" + vis.activeView + " .iUniversalNav").each(function () {
				let id = $(this).attr("id");
				if (id != undefined) {
					let data = vis.views[vis.activeView].widgets[id].data;

					if (data.iNavWait > timeoutVal)
						timeoutVal = data.iNavWait;
				}

			});*/
			timeoutVal = 0;
		}

		setTimeout(function () {

			$(".vis-inventwo-nav").each(function (el) {

				if ($(this).attr("data-inventwo-nav") === vis.activeView)
					$(this).css("background-color", $(this).attr("data-activecol"));
				else
					$(this).css("background-color", $(this).attr("data-col"));

			});

			$(".iUniversalNav").each(function () {
				let id = $(this).attr("id");
				let data = vis.widgets[id].data;

				if (data.nav_view === vis.activeView) {
					$(this).find(".vis-inventwo-button-new").css("background", data.iButtonActive);
					$(this).find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageTrue);
					if (data.iImgColorTrueFilter != undefined && data.iImgColorTrueFilter != "")
						$(this).find(".vis-inventwo-button-imageContainer img").css("filter", data.iImgColorTrueFilter.substring(8, data.iImgColorTrueFilter.length - 1));
					$(this).find(".vis-inventwo-button-text").html(data.iTextTrue);
					$(this).find(".vis-inventwo-button-new").css("border-color", data.iBorderColorActive);
					if (vis.editMode) {
						let shadowCols = {
							iShadowColorActive: data.iShadowColorActive,
							iShadowInnerColorActive: data.iShadowInnerColorActive
						};
						const shadowColors = vis.binds["vis-inventwo"].getDatapointsValues(shadowCols);
						data.iShadowColorActive = shadowColors.iShadowColorActive;
						data.iShadowInnerColorActive = shadowColors.iShadowInnerColorActive;
					}
					$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-col", data.iShadowColorActive);
					$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColorActive);
					if(data.iImgColorTrue != ""){
						vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorTrue, data.wid);
					}
					else{
						if(data.iImgColorInvertTrue){
							$(this).find(".vis-inventwo-img").css("filter", "invert(1)");
						}
						else{
							$(this).find(".vis-inventwo-img").css("filter", "");
						}
					}
				} else {
					$(this).find(".vis-inventwo-button-new").css("background", data.iButtonCol);
					$(this).find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
					if (data.iImgColorFalseFilter != undefined && data.iImgColorFalseFilter != "")
						$(this).find(".vis-inventwo-button-imageContainer img").css("filter", data.iImgColorFalseFilter.substring(8, data.iImgColorFalseFilter.length - 1));
					$(this).find(".vis-inventwo-button-text").html(data.iTextFalse);
					$(this).find(".vis-inventwo-button-new").css("border-color", data.iBorderColor);
					if (vis.editMode) {
						const shadowColors = vis.binds["vis-inventwo"].getDatapointsValues({
							iShadowColor: data.iShadowColor,
							iShadowInnerColor: data.iShadowInnerColor
						});

						data.iShadowColor = shadowColors.iShadowColor;
						data.iShadowInnerColor = shadowColors.iShadowInnerColor;
					}
					$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-col", data.iShadowColor);
					$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColor);

					if(data.iImgColorFalse != ""){
						vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorFalse, data.wid);
					}
					else{
						if(data.iImgColorInvertFalse){
							$(this).find(".vis-inventwo-img").css("filter", "invert(1)");
						}
						else{
							$(this).find(".vis-inventwo-img").css("filter", "");
						}
					}
				}

			});

			$(".iMultiNav").each(function () {
				let id = $(this).attr("id");
				let data = vis.widgets[id].data;
				let stateFound = false;

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					if (data["iView" + i] === vis.activeView) {
						stateFound = true;
						$(this).find(".vis-inventwo-button-new").css("background", data["iButtonActiveM" + i]);
						$(this).find(".vis-inventwo-button-imageContainer img").attr("src", data["iImageTrue" + i]);
						if (data["iImgColorTrueFilter" + i] != undefined && data["iImgColorTrueFilter" + i] != "")
							$(this).find(".vis-inventwo-button-imageContainer img").css("filter", data["iImgColorTrueFilter" + i].substring(8, data["iImgColorTrueFilter" + i].length - 1));
						$(this).find(".vis-inventwo-button-text").html(data["iTextTrue" + i]);
						$(this).find(".vis-inventwo-button-new").css("border-color", data["iBorderColorActiveM" + i]);
						if (vis.editMode) {
							let shadowCols = {
								iShadowColorActive: data["iShadowColorActiveM" + i],
								iShadowInnerColorActive: data["iShadowInnerColorActiveM" + i]
							};
							const shadowColors = vis.binds["vis-inventwo"].getDatapointsValues(shadowCols);
							data["iShadowColorActiveM" + i] = shadowColors.iShadowColorActive;
							data["iShadowInnerColorActiveM" + i] = shadowColors.iShadowInnerColorActive;
						}
						$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-col", data["iShadowColorActiveM" + i]);
						$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-inner-col", data["iShadowInnerColorActiveM" + i]);
						if(data["iImgColorTrue" + i] != ""){
							vis.binds["vis-inventwo"].getImgColorFilter(data["iImgColorTrue" + i], data.wid);
						}
						else{
							if(data["iImgColorInvert" + i]){
								$(this).find(".vis-inventwo-img").css("filter", "invert(1)");
							}
							else{
								$(this).find(".vis-inventwo-img").css("filter", "");
							}
						}

						break;
					}
				}
				if (!stateFound) {
					$(this).find(".vis-inventwo-button-new").css("background", data.iButtonCol);
					$(this).find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
					if (data.iImgColorFalseFilter != undefined && data.iImgColorFalseFilter != "")
						$(this).find(".vis-inventwo-button-imageContainer img").css("filter", data.iImgColorFalseFilter.substring(8, data.iImgColorFalseFilter.length - 1));
					$(this).find(".vis-inventwo-button-text").html(data.iTextFalse);
					$(this).find(".vis-inventwo-button-new").css("border-color", data.iBorderColor);
					if (vis.editMode) {
						const shadowColors = vis.binds["vis-inventwo"].getDatapointsValues({
							iShadowColor: data.iShadowColor,
							iShadowInnerColor: data.iShadowInnerColor
						});

						data.iShadowColor = shadowColors.iShadowColor;
						data.iShadowInnerColor = shadowColors.iShadowInnerColor;
					}
					$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-col", data.iShadowColor);
					$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColor);

					if(data.iImgColorFalse != ""){
						vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorFalse, data.wid);
					}
					else{
						if(data.iImgColorInvert){
							$(this).find(".vis-inventwo-img").css("filter", "invert(1)");
						}
						else{
							$(this).find(".vis-inventwo-img").css("filter", "");
						}
					}
				}

			});


		}, timeoutVal);


	},

	//VIS Edit Links
	externalLinks: function (widAttr, data) {
		let url = "";
		if (data[1] === "wiki") {
			url = "https://github.com/inventwo/ioBroker.vis-inventwo/wiki";
		}
		return {input: `<a target="_blank" href="${url}">${_("iWikiText")}</a>`};
	},

	//VIS Edit Info Texte
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
		} else if (data[1] === "tblDateInfo") {
			text = "iText-tblDateInfo";
		}

		return {input: `<span>${_(text)}</span>`};
	},

	//Switch Funktion - Datenpunktwert wechseln
	handleToggle: function (el, data, type) {
		var $this = $(el);

		var oid = data.oid;

		if (!vis.editMode) {
			var moved = false;
			$this.parent().on("click", function (e) {

				if (vis.detectBounce(this)) return;
				if (moved) return;

				var val = vis.states[oid + ".val"];
				var type = data.iValueType;
				var valFalse = vis.binds["vis-inventwo"].convertValue(data.iValueFalse);
				var valTrue = vis.binds["vis-inventwo"].convertValue(data.iValueTrue);

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

	//Navigation Funktion - Wechsel der View
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

	//State Funktion - Datenpunktwert setzen
	state: function (el, data, type) {
		var $this = $(el);
		var oid = data.oid;

		if (!vis.editMode) {
			var moved = false;
			$this.parent().on("click touchend", function () {

				if (vis.detectBounce(this)) return;
				if (moved) return;
				if (parseFloat(data.iStateResetValueTime) > 0) {
					if (vis.settings[data.wid] == true) {
						return;
					} else {
						vis.settings[data.wid] = true;
					}
				}

				let val = vis.binds["vis-inventwo"].convertValue(data.value);

				let oldValue = vis.states[oid + ".val"];

				vis.setValue(oid, val);

				if (type == "universal") {
					let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + data.iShadowColorActive + ",inset " +
						data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + data.iShadowInnerColorActive;
					let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data.iBorderColorActive;
					$this.find(".vis-inventwo-button-new").css("background", data.iButtonActive);
					$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
					$this.find(".vis-inventwo-button-new").css("border", border);
					if (data.iImageTrue != undefined) {
						$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageTrue);
						vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorTrue, data.wid);
					}
					if (data.iTextTrue != undefined)
						$this.find(".vis-inventwo-button-text").html(data.iTextTrue);

					if (data.iStateResponseTime) {
						setTimeout(function () {
							let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + data.iShadowColor + ",inset " +
								data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + data.iShadowInnerColor;
							let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data.iBorderColor;
							$this.find(".vis-inventwo-button-new").css("background", data.iButtonCol);
							$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
							$this.find(".vis-inventwo-button-new").css("border", border);
							if (data.iImageFalse != undefined) {
								$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
								vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorFalse, data.wid);
							}
							if (data.iTextFalse != undefined)
								$this.find(".vis-inventwo-button-text").html(data.iTextFalse);
						}, data.iStateResponseTime);
					}

				} else if (type == "multi") {

					let index = -1;

					for (let i = 1; i <= data.iUniversalValueCount; i++) {

						let val = data["iValue" + i];
						if (val == undefined)
							val = true;
						else if (val == "true")
							val = true;
						else if (val == "false")
							val = false;
						else if (!isNaN(val))
							val = parseFloat(val);

						if ((data.iUniversalWidgetType != "Navigation" && data["oid" + i] != undefined
								&& (vis.states.attr(data["oid" + i] + ".val") == val && data["iValueComparison" + i] == "equal")
								|| (vis.states.attr(data["oid" + i] + ".val") < val && data["iValueComparison" + i] == "lower")
								|| (vis.states.attr(data["oid" + i] + ".val") > val && data["iValueComparison" + i] == "greater")
								|| (vis.states.attr(data["oid" + i] + ".val") != val && data["iValueComparison" + i] == "not")
							)
							||
							(data.iUniversalWidgetType == "Navigation" && data["iView" + i] === vis.activeView)) {

							let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + data["iShadowColorActiveM" + i] + ",inset " +
								data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + data["iShadowInnerColorActiveM" + i];
							let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data["iBorderColorActiveM" + i];
							$this.find(".vis-inventwo-button-new").css("background", data["iButtonActiveM" + i]);
							$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
							$this.find(".vis-inventwo-button-new").css("border", border);
							if (data["iImageTrue" + i] != undefined) {
								$this.find(".vis-inventwo-button-imageContainer img").attr("src", data["iImageTrue" + i]);
								vis.binds["vis-inventwo"].getImgColorFilter(data["iImgColorTrue" + i], data.wid);
							}
							if (data.iTextTrue != undefined)
								$this.find(".vis-inventwo-button-text").html(data.iTextTrue);

							index = i;

							break;
						}
					}

					if (index == -1) {
						let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + data["iShadowColorActiveM1"] + ",inset " +
							data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + data["iShadowInnerColorActiveM1"];
						let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data["iBorderColorActiveM1"];
						$this.find(".vis-inventwo-button-new").css("background", data["iButtonActiveM1"]);
						$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
						$this.find(".vis-inventwo-button-new").css("border", border);
						if (data["iImageTrue1"] != undefined) {
							$this.find(".vis-inventwo-button-imageContainer img").attr("src", data["iImageTrue1"]);
							vis.binds["vis-inventwo"].getImgColorFilter(data["iImgColorTrue1"], data.wid);
						}
						if (data.iTextTrue != undefined)
							$this.find(".vis-inventwo-button-text").html(data.iTextTrue);

					}

					if (data.iStateResponseTime > 0) {
						setTimeout(function () {

							let backCol = data.iButtonCol;
							let shadowCol = data.iShadowColor;
							let shadowColInner = data.iShadowInnerColor;
							let borderCol = data.iBorderColor;
							let img = "";
							let txt = "";
							let imgColor = "";
							if (data.iImageFalse != undefined) {
								img = data.iImageFalse;
								imgColor = data.iImgColorFalse;
							}
							if (data.iTextFalse != undefined)
								txt = data.iTextFalse;

							for (let i = 1; i <= data.iUniversalValueCount; i++) {
								if ((data.iUniversalWidgetType != "Navigation" && vis.states.attr(data["oid" + i] + ".val") == data["iValue" + i]) || (data.iUniversalWidgetType == "Navigation" && data["iView" + i] === vis.activeView)) {
									backCol = data["iButtonActiveM" + i];
									shadowCol = data["iShadowColorActiveM" + i];
									shadowColInner = data["iShadowInnerColorActiveM" + i];
									borderCol = data["iBorderColorActiveM" + i];
									if (data["iImageTrue" + i] != undefined) {
										img = data["iImageTrue" + i];
										imgColor = data["iImgColorFalse" + i];
									}
									if (data["iTextTrue" + i] != undefined)
										txt = data["iTextTrue" + i];
									break;
								}
							}

							let shadow = data.iShadowXOffset + "px " + data.iShadowYOffset + "px " + data.iShadowBlur + "px " + data.iShadowSpread + "px " + shadowCol + ",inset " +
								data.iShadowInnerXOffset + "px " + data.iShadowInnerYOffset + "px " + data.iShadowInnerBlur + "px " + data.iShadowInnerSpread + "px " + shadowColInner;
							let border = data.iBorderSize + "px " + data.iBorderStyle + " " + borderCol;
							$this.find(".vis-inventwo-button-new").css("background", backCol);
							$this.find(".vis-inventwo-button-new").css("box-shadow", shadow);
							$this.find(".vis-inventwo-button-new").css("border", border);
							if (data.iImageFalse != undefined) {
								$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
								vis.binds["vis-inventwo"].getImgColorFilter(imgColor, data.wid);
							}
							if (data.iTextFalse != undefined)
								$this.find(".vis-inventwo-button-text").html(data.iTextFalse);
						}, data.iStateResponseTime);
					}


				}

				if (data.iStateResetValueTime > 0) {
					setTimeout(function () {
						vis.setValue(oid, oldValue);
						delete vis.settings[data.wid];
					}, data.iStateResetValueTime);
				}
			})
				.on("touchmove", function () {
					moved = true;
				}).on("touchstart", function () {
				moved = false;
			});

		}
	},

	//Slider Funktion - Setzt den Wert beim schieben
	handleSlider: function (el, data, options, type) {
		var $this = $(el);
		var oid = data.oid;

		let min = 0;
		let max = 99;
		let step = 0.1;

		if (type == "normal") {
			min = parseFloat(data.iMinVal);
			max = parseFloat(data.iMaxVal);
			step = parseFloat(data.iStepVal);
		}

		function getColor(sliderVal) {

			let myRed, myGreen, myBlue;
			if (sliderVal <= 16) {
				myRed = 255;
				myGreen = parseInt(((sliderVal * 6) * 255) / 100);
				myBlue = 0;
			} else if (sliderVal <= 33) {
				myRed = 255 - parseInt((((sliderVal - 16)) * 6) * 255 / 100);
				myGreen = 255;
				myBlue = 0;
			} else if (sliderVal < 50) {
				myRed = 0;
				myGreen = 255;
				myBlue = parseInt((((sliderVal - 33)) * 6) * 255 / 100);
			} else if (sliderVal < 66) {
				myRed = 0;
				myGreen = 255 - parseInt((((sliderVal - 50)) * 6) * 255 / 100);
				myBlue = 255;
			} else if (sliderVal < 83) {
				myRed = parseInt((((sliderVal - 66)) * 6) * 255 / 100);
				myGreen = 0;
				myBlue = 255;
			} else {
				myRed = 255;
				myGreen = 0;
				myBlue = 255 - parseInt((((sliderVal - 83)) * 6) * 255 / 100);
			}

			return [myRed, myGreen, myBlue];
		}

		function rgbToDecimal(rgbArr) {
			let r = parseFloat(rgbArr[0]);
			let g = parseFloat(rgbArr[1]);
			let b = parseFloat(rgbArr[2]);

			let sixth = 100 / 6;
			let res = 0;

			if (r == 255 && b == 0) {
				res = g / 255 * sixth;
			} else if (g == 255 && b == 0) {
				res = sixth + sixth - (r / 255 * sixth);
			} else if (r == 0 && g == 255) {
				res = sixth * 2 + b / 255 * sixth;
			} else if (r == 0 && b == 255) {
				res = sixth * 3 + sixth - (g / 255 * sixth);
			} else if (g == 0 && b == 255) {
				res = sixth * 4 + r / 255 * sixth;
			} else {
				res = sixth * 5 + sixth - (b / 255 * sixth);
			}

			return res;
		}

		let isDragging = false;

		var settings = $.extend({
			min: min,
			max: max,
			step: step,
			slide: function (event, ui) {
				isDragging = true;
				if (!vis.editMode) {
					switch (type) {
						case "normal":
							if (!data.iChangeOnRelease) {
								if (data.iInvertMinMax) {
									vis.setValue(oid, (parseFloat(data.iMaxVal) - ui.value + parseFloat(data.iMinVal)));
								} else {
									vis.setValue(oid, ui.value);
								}
							}
							$this.parent().parent().find(".vis-inventwo-slider-currentvalue").html(ui.value);
							break;
						case "rgb":
							let sliderVal = parseFloat(ui.value);
							let rgb = getColor(sliderVal);
							let hex = vis.binds['vis-inventwo'].rgbToHex(rgb);
							$(ui.handle).css("background", hex);
							if (!data.iChangeOnRelease) {
								let output = "";
								switch (data.iColorSliderType) {
									case "HEX":
										output = hex;
										break;
									case "RGB":
										break;
									case "CIE":
										output = vis.binds['vis-inventwo'].cieConvert(rgb, "cie");
										break;
								}
								if(data.iColorSliderType != "RGB")
									vis.setValue(oid, output);
								else{
									vis.setValue(data.iIdRed, rgb[0]);
									vis.setValue(data.iIdGreen, rgb[1]);
									vis.setValue(data.iIdBlue, rgb[2]);
								}
							}
							break;

					}
				}
			},
			stop: function (event, ui) {
				isDragging = false;
				if (!vis.editMode) {
					if (data.iChangeOnRelease) {
						switch (type) {
							case "normal":

								if (data.iInvertMinMax) {
									vis.setValue(oid, (parseFloat(data.iMaxVal) - ui.value + parseFloat(data.iMinVal)));
								} else {
									vis.setValue(oid, ui.value);
								}

								$this.parent().parent().find(".vis-inventwo-slider-currentvalue").html(ui.value);
								break;
							case "rgb":
								let sliderVal = parseFloat(ui.value);
								let rgb = getColor(sliderVal);
								let hex = vis.binds['vis-inventwo'].rgbToHex(rgb);
								$(ui.handle).css("background", hex);
								if (!data.iChangeOnRelease) {
									let output = "";
									switch (data.iColorSliderType) {
										case "HEX":
											output = hex;
											break;
										case "RGB":
											break;
										case "CIE":
											output = vis.binds['vis-inventwo'].cieConvert(rgb, "cie");
											break;
									}
									if(data.iColorSliderType != "RGB")
										vis.setValue(oid, output);
									else{
										vis.setValue(data.iIdRed, rgb[0]);
										vis.setValue(data.iIdGreen, rgb[1]);
										vis.setValue(data.iIdBlue, rgb[2]);
									}
								}
								break;
						}
					}
				}
			}
		}, options);

		$this.slider(settings);

		let leftSpace = 0;
		leftSpace = parseFloat(data.iSliderHeight) / 2 - parseFloat(data.iSliderKnobSize) / 2;

		function updateSlider() {

			function setColor(rgb) {
				if (rgb == null) {
					rgb = [255, 0, 0];
					val = "#ff0000";
				}
				else{
					val = vis.binds['vis-inventwo'].rgbToHex(rgb);
				}

				$this.children().css("background", val);
				$this.slider("option", "value", rgbToDecimal(rgb));
			}

			let val = vis.states.attr(oid + ".val");

			switch (type) {
				case "normal":
					val = parseFloat(val);
					if(isNaN(val)){
						val = min;
					}

					$this.children().css("background", data.iSliderKnobColor);
					if (data.iInvertMinMax) {
						val = data.iMaxVal - (val - data.iMinVal);
					}
					$this.slider("option", "value", val);
					break;
				case "rgb":
					let rgb = null;
					switch (data.iColorSliderType) {
						case "HEX":
							rgb = vis.binds['vis-inventwo'].hexToRgb(val);
							setColor(rgb);
							break;
						case "RGB":
							vis.conn._socket.emit("getState", data.iIdRed, function (err, obj1) {
								vis.conn._socket.emit("getState", data.iIdGreen, function (err2, obj2) {
									vis.conn._socket.emit("getState", data.iIdBlue, function (err, obj3) {

										if(obj1 && obj2 && obj3){
											rgb = [obj1.val, obj2.val, obj3.val];

											setColor(rgb);
										}
										else{
											rgb = [255,0,0];
										}


									});
								});
							});
							break;
						case "CIE":
							rgb = vis.binds['vis-inventwo'].cieConvert(val, "rgb");
							setColor(rgb);
							break;
					}
					break;
			}

		}

		updateSlider();

		$this.css("transform", "rotate(" + data.iSliderRotation + "deg)");
		$this.children().css("width", data.iSliderKnobSize + "px");
		$this.children().css("height", data.iSliderKnobSize + "px");
		$this.children().css("border", "0px");
		$this.children().css("border-radius", data.iSliderKnobCorners + "%");
		$this.children().css("box-shadow", "0 0 5px 1px black");
		if (options.orientation === "horizontal") {
			$this.children().css("margin-left", "-" + (data.iSliderKnobSize / 2) + "px");
			let topPos = ((data.iSliderKnobSize - data.iSliderHeight) / 2) * (-1);
			$this.children().css("top", topPos + "px");
		} else {
			$this.children().css("left", leftSpace + "px");
			$this.children().css("margin-bottom", "-" + (data.iSliderKnobSize / 2) + "px");
		}

		vis.states.bind(oid + ".val", function () {
			if (!isDragging) {
				updateSlider();
			}
		});


	},

	//IncreaseDecreaseValue Funktion - Erhöht oder senkt Datenpunkwert
	increaseDecreaseValue: function (el, data, type) {
		var $this = $(el);
		var oid = data.oid;

		if (!vis.editMode) {
			var moved = false;

			var lastVal = parseFloat(vis.states[oid + ".val"]);
			var isChecking = false;
			var clickCount = 1;
			var timeout;

			$this.parent().on("click touchend", function () {
				if (vis.detectBounce(this)) return;
				if (moved) return;

				if (isChecking) {
					clickCount++;
					clearTimeout(timeout);
					timeout = null;
				} else {
					isChecking = true;
				}

				if (timeout == null) {
					timeout = setTimeout(function () {
						let val = vis.binds["vis-inventwo"].convertValue(data.value);
						let oldValue = parseFloat(vis.states[oid + ".val"]);

						vis.setValue(oid, (oldValue + val * clickCount));

						clickCount = 1;
						timeout = null;
						isChecking = false;
					}, 500);
				}


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
								if (data["iImageTrue" + i] != undefined)
									img = data["iImageTrue" + i];
								if (data["iTextTrue" + i] != undefined)
									txt = data["iTextTrue" + i];
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
			})
				.on("touchmove", function () {
					moved = true;
				}).on("touchstart", function () {
				moved = false;
			});

		}
	},

	//JSON Tabelle Funktion - Generiert aus einem JSON eine HTML Tabelle
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

		let timeout = null;

		let sortColumn = "";
		let sortOrder = "asc";

		function sortData(column, el, data) {
			if (sortColumn != column) {
				sortColumn = column;
				sortOrder = "asc";
			} else {
				if (sortOrder == "desc") {
					sortColumn = "";
					sortOrder = "asc";
				} else {
					sortOrder = "desc";
				}
			}
			create(el, data);
		}

		function create(el, data) {

			if (vis.editMode) {
				setTimeout(function () {
					vis.binds["vis-inventwo"].updateJsonTableFields();
				}, 100);

				$(el).parent().on("mouseup click", function () {
					setTimeout(function () {
						vis.binds["vis-inventwo"].updateJsonTableFields();
					}, 100);
				});
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
						jsondata = [].slice.call(jd);

					let rowLimit = jsondata.length;
					if (data.iTblRowLimit < rowLimit) {
						rowLimit = data.iTblRowLimit;
					}

					let colLimit = 0;
					if (jsondata.length > 0) {
						colLimit = Object.keys(jsondata[0]).length;
						if (data.iColCount < colLimit) {
							colLimit = data.iColCount;
						}
					}

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

					let tblBorder = "";
					if (data.iBorderRemoveDouble) {
						tblBorder = "border-collapse:collapse;";
					}

					let tblClasses = "vis-inventwo-json-table";
					if (data.iTblFixedHead == true) {
						tblClasses += " vis-inventwo-json-table-fixedheader";
					}

					let noData = false;

					let border = "";
					border += "border-left: " + data.iBorderSize + "px " + data.iBorderStyleLeft + " " + data.iBorderColor + ";";
					border += "border-right: " + data.iBorderSize + "px " + data.iBorderStyleRight + " " + data.iBorderColor + ";";
					border += "border-top: " + data.iBorderSize + "px " + data.iBorderStyleUp + " " + data.iBorderColor + ";";
					border += "border-bottom: " + data.iBorderSize + "px " + data.iBorderStyleDown + " " + data.iBorderColor + ";";

					output = "<table class='" + tblClasses + "' style='opacity: " + data.iOpacityAll + "; " + tblBorder + "'>";

					if (data.iTblShowHead) {
						let tblHead = "";
						let headStyle = "background:" + data.iTblHeaderColor + "; color: " + data.iTblHeaderTextColor;
						tblHead += "<thead style='" + headStyle + "'>";

						if (jsondata.length > 0) {
							for (let i = 0; i < colLimit; i++) {
								if (data["iColShow" + (i + 1)]) {
									let colWidth = "";
									if (data["iColWidth" + (i + 1)] !== undefined && data["iColWidth" + (i + 1)] !== "") {
										colWidth = data["iColWidth" + (i + 1)];
									}

									let sortArrow = "";

									let colAttr = Object.keys(jsondata[0])[i];
									if (data["iColAttr" + (i + 1)] !== undefined && data["iColAttr" + (i + 1)] !== "") {
										colAttr = data["iColAttr" + (i + 1)];
									}

									if (colAttr == sortColumn) {
										let borderWidth = "5px 5px 0 5px;";
										let borderColor = data.iTblHeaderTextColor + " transparent transparent transparent;";
										if (sortOrder == "asc") {
											borderWidth = "0 5px 5px 5px;";
											borderColor = "transparent transparent " + data.iTblHeaderTextColor + " transparent;";
										}
										let style = `border-width: ` + borderWidth + `
    											 border-color: ` + borderColor + `
    											 margin-left: 5px;
    											 display: inline-block;
    											 vertical-align: middle;
    											 border-style: solid;`;
										sortArrow = `<span style="` + style + `"></span>`;
									}

									let thStyle = "width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px; " + border;
									if (data.iTblFixedHead == true) {
										thStyle += headStyle;
									}
									if (data["iColName" + (i + 1)] !== undefined && data["iColName" + (i + 1)] !== "") {
										tblHead += "<th data-column='" + colAttr + "' style='" + thStyle + "'>" + data["iColName" + (i + 1)] + sortArrow + "</th>";
									} else {
										tblHead += "<th data-column='" + colAttr + "' style='" + thStyle + "'>" + colAttr + sortArrow + "</th>";
									}
								}
							}
						} else if (data.iTblDummyRow != "") {
							let headers = data.iTblDummyRow.split(",");

							let thStyle = "padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px; " + border;
							headers.forEach(head => {
								tblHead += "<th style='" + thStyle + "'>" + head + "</th>";
							});
						} else {
							noData = true;
						}

						tblHead += "</thead>";
						output += tblHead;

					}

					if (jsondata.length > 0) {

						output += "<tbody>";

						if (sortColumn != "") {
							jsondata.sort(function (a, b) {
								let first = a[sortColumn];
								let second = b[sortColumn];
								let ret;

								if (isNaN(first)) {
									if (isNaN(second)) {
										ret = first.localeCompare(second);
									} else {
										ret = 1;
									}
								} else {
									if (isNaN(second)) {
										ret = -1;
									} else {
										ret = parseFloat(first) - parseFloat(second);
									}
								}

								if (sortOrder == "desc")
									ret = ret * (-1);

								return ret;
							});
						}

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
										cellValue = jsondata[e][data["iColAttr" + (i + 1)]];
									} else {
										cellValue = jsondata[e][Object.keys(jsondata[e])[i]];
									}

									if (cellValue != "") {

										switch (data["iTblCellFormat" + (i + 1)]) {
											case "normal":
												break;
											case "datetime":
												if (cellValue != 0) {
													if (data["iTblCellDatetimeFormat" + (i + 1)] != "") {
														let datetime = null;
														if (isNaN(cellValue) == true) {
															datetime = new Date(cellValue).getTime();
														} else {
															datetime = parseInt(cellValue);
														}

														//if (cellValue.toString().length == 13)
														//	datetime = datetime / 1000;
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
														var formattedDate = getDateString(new Date(datetime), data["iTblCellDatetimeFormat" + (i + 1)]);
														cellValue = formattedDate;


													}
												} else {
													cellValue = data["iTblCellPlaceholder" + (i + 1)];
												}
												break;
											case "image":
												if (cellValue != undefined && cellValue != "") {
													cellValue = "<img src='" + cellValue + "' style='width:" + data["iTblCellImageSize" + (i + 1)] + "px;' onerror='this.style.display=`none`'>";
												}
												break;
											case "number":

												let orgVal = parseFloat(cellValue);

												let tempVal = parseFloat(cellValue).toLocaleString("en",
													{
														minimumFractionDigits: parseFloat(data["iTblCellNumberDecimals" + (i + 1)]),
														maximumFractionDigits: parseFloat(data["iTblCellNumberDecimals" + (i + 1)])
													});

												let decimalSeperator = ".";
												let thousandSeperator = ",";
												if (data["iTblCellNumberDecimalSeperator" + (i + 1)] != "") {
													decimalSeperator = data["iTblCellNumberDecimalSeperator" + (i + 1)];
												}
												thousandSeperator = data["iTblCellNumberThousandSeperator" + (i + 1)];

												tempVal = tempVal.replace(".", "[tempSeperatorXYZ]");
												tempVal = tempVal.replace(/\,/gm, thousandSeperator);
												tempVal = tempVal.replace("[tempSeperatorXYZ]", decimalSeperator);
												cellValue = tempVal;

												let thresholds = [];

												let dpContent = vis.states.attr(data["iTblCellThresholdsDp" + (i + 1)] + ".val");

												if(dpContent != undefined && dpContent != ""){
													try{
														thresholds = JSON.parse(dpContent);
													}
													catch (e) {
														console.log("error on parse dp");
														break;
													}
												}
												else if(data["iTblCellThresholdsText" + (i + 1)] != undefined && data["iTblCellThresholdsText" + (i + 1)] != ""){
													try{
														thresholds = JSON.parse(data["iTblCellThresholdsText" + (i + 1)]);
													}
													catch (e) {
														console.log("error on parse text");
														break;
													}
												}

												if(thresholds.length > 0){
													thresholds.forEach(t =>{
														if(t.comparator != undefined && t.comparator != "" && t.value != undefined){
															let comparasionTable = {
																'>' : function (val1, val2) { return val1 > val2 },
																'<' : function (val1, val2) { return val1 < val2 },
																'==' : function (val1, val2) { return val1 == val2 },
																'>=' : function (val1, val2) { return val1 >= val2 },
																'<=' : function (val1, val2) { return val1 <= val2 },
																'!=' : function (val1, val2) { return val1 != val2 },
															}
															if(comparasionTable[t.comparator](parseFloat(cellValue),parseFloat(t.value))){
																cellValue = '<span style="color:'+t.color+'">' + cellValue + '</span>';
															}

														}
													});
												}


												break;
											case "boolean":
												if (data["iTblCellBooleanCheckbox" + (i + 1)]) {
													let valBoolean = false;
													if (cellValue == true || cellValue == "true" || cellValue == "1" || cellValue == 1)
														valBoolean = true;

													let checkboxSize = 25;

													if (valBoolean) {
														let style = "background: " + data["iTblCellBooleanColorTrue" + (i + 1)] + "; width: " + checkboxSize + "px; height: " + checkboxSize + "px;";
														cellValue = "<div class=\"vis-inventwo-json-table-checkbox-container checked\"><span style=\"" + style + "\" class=\"vis-inventwo-json-table-checkbox-checkmark\"></span></div>";
													} else {
														let style = "background: " + data["iTblCellBooleanColorFalse" + (i + 1)] + "; width: " + checkboxSize + "px; height: " + checkboxSize + "px;";
														cellValue = "<div class=\"vis-inventwo-json-table-checkbox-container\"><span style=\"" + style + "\" class=\"vis-inventwo-json-table-checkbox-checkmark\"></span></div>";
													}
												}
												break;
										}
									} else {
										cellValue = data["iTblCellPlaceholder" + (i + 1)];
									}

									if (cellValue == undefined)
										cellValue = "";

									output += "<td style='width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px; " + border + " text-align: " + data["iTblTextAlign" + (i + 1)] + ";'>" + cellValue + "</td>";
								}
							}
							output += "</tr>";
						}
						output += "</tbody>";
					}


					output += "</table>";

					if (noData == true) {
						output = "No entries in JSON and no dummy row";
					}


				} else {
					output = "Columncount can't be zero/empty!";
				}
			}

			$(el).html(output);

			if (!vis.editMode) {
				$(el).parent().find("th").on("click touchend", function () {
					sortData($(this).data("column"), el, data);
				});
			}

		}

		vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
			create(el, data);
		});

		if (data.oid !== "" && data.oid !== "nothing_selected" && data.oid !== undefined && vis.states.attr(data.oid + ".val") != undefined && vis.states.attr(data.oid + ".val") != "" &&
			vis.states.attr(data.oid + ".val") != "null" && typeof vis.states.attr(data.oid + ".val") != "null") {

			if (data.iTableRefreshRate > 0 && !vis.editMode) {

				setInterval(function () {
					create(el, data);
				}, data.iTableRefreshRate * 1000);
			}

		}

		create(el, data);
	},

	//Radiobutton Funktion - Setzt den Datenpunktwert
	radiobutton: function (el, oid, val, data) {
		var $this = $(el);

		if (!vis.editMode) {
			var moved = false;
			$this.parent().on("click touchend", function () {
				if (vis.detectBounce(this)) return;
				if (moved) return;

				val = vis.binds["vis-inventwo"].convertValue(val);
				if(!isNaN(val)){
					val = parseFloat(val);
				}

				vis.setValue(oid, val);

			}).on("touchmove", function () {
				moved = true;
			}).on("touchstart", function () {
				moved = false;
			});

			$this.parent().on("mouseenter", function () {
				if (data.iButtonColHover != undefined && data.iButtonColHover != "") {
					$(this).find(".vis-inventwo-button-new").attr("data-oldbackground", $(this).find(".vis-inventwo-button-new").css("background"));
					$(this).find(".vis-inventwo-button-new").css("background", data.iButtonColHover);
				}
			});

			$this.parent().on("mouseleave", function () {
				if ($(this).find(".vis-inventwo-button-new").data("oldbackground") != undefined)
					$(this).find(".vis-inventwo-button-new").css("background", $(this).find(".vis-inventwo-button-new").data("oldbackground"));
			});

		}
	},

	//Aktualisierung der Felder in VIS Edit für Universal und Multi Widget
	updateJsonTableFields: function (wid, view) {

		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;

			for (let i = 1; i <= data.iColCount; i++) {
				if (data["iTblCellFormat" + i] == "normal") {
					vis.hideShowAttr("iTblCellDatetimeFormat" + i, false);
					vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, false);

					vis.hideShowAttr("iTblCellImageSize" + i, false);

					vis.hideShowAttr("iTblCellBooleanCheckbox" + i, false);
					vis.hideShowAttr("iTblCellBooleanColorFalse" + i, false);
					vis.hideShowAttr("iTblCellBooleanColorTrue" + i, false);

					vis.hideShowAttr("iTblCellNumberDecimals" + i, false);
					vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, false);
					vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, false);
					vis.hideShowAttr("iTblCellThresholdsDp" + i, false);
					vis.hideShowAttr("iTblCellThresholdsText" + i, false);
				} else if (data["iTblCellFormat" + i] == "datetime") {
					vis.hideShowAttr("iTblCellDatetimeFormat" + i, true);
					vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, true);

					vis.hideShowAttr("iTblCellImageSize" + i, false);

					vis.hideShowAttr("iTblCellBooleanCheckbox" + i, false);
					vis.hideShowAttr("iTblCellBooleanColorFalse" + i, false);
					vis.hideShowAttr("iTblCellBooleanColorTrue" + i, false);

					vis.hideShowAttr("iTblCellNumberDecimals" + i, false);
					vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, false);
					vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, false);
					vis.hideShowAttr("iTblCellThresholdsDp" + i, false);
					vis.hideShowAttr("iTblCellThresholdsText" + i, false);
				} else if (data["iTblCellFormat" + i] == "image") {
					vis.hideShowAttr("iTblCellDatetimeFormat" + i, false);
					vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, false);

					vis.hideShowAttr("iTblCellImageSize" + i, true);

					vis.hideShowAttr("iTblCellBooleanCheckbox" + i, false);
					vis.hideShowAttr("iTblCellBooleanColorFalse" + i, false);
					vis.hideShowAttr("iTblCellBooleanColorTrue" + i, false);

					vis.hideShowAttr("iTblCellNumberDecimals" + i, false);
					vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, false);
					vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, false);
					vis.hideShowAttr("iTblCellThresholdsDp" + i, false);
					vis.hideShowAttr("iTblCellThresholdsText" + i, false);
				} else if (data["iTblCellFormat" + i] == "number") {
					vis.hideShowAttr("iTblCellDatetimeFormat" + i, false);
					vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, false);

					vis.hideShowAttr("iTblCellImageSize" + i, false);

					vis.hideShowAttr("iTblCellBooleanCheckbox" + i, false);
					vis.hideShowAttr("iTblCellBooleanColorFalse" + i, false);
					vis.hideShowAttr("iTblCellBooleanColorTrue" + i, false);

					vis.hideShowAttr("iTblCellNumberDecimals" + i, true);
					vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, true);
					vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, true);
					vis.hideShowAttr("iTblCellThresholdsDp" + i, true);
					vis.hideShowAttr("iTblCellThresholdsText" + i, true);
				} else if (data["iTblCellFormat" + i] == "boolean") {
					vis.hideShowAttr("iTblCellDatetimeFormat" + i, false);
					vis.hideShowAttr("iTblCellDatetimeFormatInfo" + i, false);

					vis.hideShowAttr("iTblCellImageSize" + i, false);

					vis.hideShowAttr("iTblCellBooleanCheckbox" + i, true);
					vis.hideShowAttr("iTblCellBooleanColorFalse" + i, true);
					vis.hideShowAttr("iTblCellBooleanColorTrue" + i, true);

					vis.hideShowAttr("iTblCellNumberDecimals" + i, false);
					vis.hideShowAttr("iTblCellNumberDecimalSeperator" + i, false);
					vis.hideShowAttr("iTblCellNumberThousandSeperator" + i, false);
					vis.hideShowAttr("iTblCellThresholdsDp" + i, false);
					vis.hideShowAttr("iTblCellThresholdsText" + i, false);
				}

			}
		});

	},

	//Aktualisierung der Felder in VIS Edit für Universal und Multi Widget
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
				vis.hideShowAttr("iIncreaseDecrease", false);
				vis.hideShowAttr("iValueComparison", true);
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
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
				vis.hideShowAttr("iIncreaseDecrease", false);
				vis.hideShowAttr("iValueComparison", true);
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
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
				vis.hideShowAttr("iIncreaseDecrease", false);
				vis.hideShowAttr("iValueComparison", false);
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, false);
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
				vis.hideShowAttr("iIncreaseDecrease", false);
				vis.hideShowAttr("iValueComparison", true);
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
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, false);
				}
			} else if (val == "IncreaseDecreaseValue") {
				vis.hideShowAttr("iNavWait", false);
				vis.hideShowAttr("iValueFalse", false);
				vis.hideShowAttr("value", true);
				vis.hideShowAttr("iStateResponseTime", false);
				vis.hideShowAttr("nav_view", false);
				vis.hideShowAttr("iStateResetValueTime", false);
				vis.hideShowAttr("iIncreaseDecrease", true);
				vis.hideShowAttr("iValueComparison", false);
				vis.hideShowAttr("oid", true);
				vis.hideShowAttr("iValueType", false);
				vis.hideShowAttr("iValueTypeInfo", false);
				vis.hideShowAttr("iValueTrue", false);

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, false);
				}
			}


		});

	},

	//Generierung des Universal und Multi Widgets
	universalButton: function (el, data, type) {

		this.updateUniversalDataFields;
		vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
			if (newVal != oldVal)
				createWidget(false);
		});

		vis.states.bind(vis.activeView, function (e, newVal, oldVal) {
			if (newVal != oldVal)
				createWidget(false);
		});

		if (type == "multi" && data.iUniversalWidgetType != "Navigation") {
			for (let index = 1; index <= data.iUniversalValueCount; index++) {

				vis.states.bind(data.attr("oid" + index) + ".val", function (e, newVal, oldVal) {
					if (newVal != oldVal)
						createWidget(false);
				});

			}
		}


		createWidget(true);

		function createWidget(createEvents) {
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
			let imgColorFilter = "";
			let invertCol = "";

			if (type == "multi") {
				let found = false;
				for (let i = 1; i <= dataNew.iUniversalValueCount; i++) {

					let val = dataNew["iValue" + i];
					if (val == undefined)
						val = true;
					else if (val == "true")
						val = true;
					else if (val == "false")
						val = false;
					else if (!isNaN(val))
						val = parseFloat(val);

					if ((dataNew.iUniversalWidgetType != "Navigation" && dataNew["oid" + i] != undefined
							&& (vis.states.attr(dataNew["oid" + i] + ".val") == val && dataNew["iValueComparison" + i] == "equal")
							|| (vis.states.attr(dataNew["oid" + i] + ".val") < val && dataNew["iValueComparison" + i] == "lower")
							|| (vis.states.attr(dataNew["oid" + i] + ".val") > val && dataNew["iValueComparison" + i] == "greater")
							|| (vis.states.attr(dataNew["oid" + i] + ".val") != val && dataNew["iValueComparison" + i] == "not")
						)
						||
						(dataNew.iUniversalWidgetType == "Navigation" && dataNew["iView" + i] === vis.activeView)) {
						backCol = dataNew["iButtonActiveM" + i];
						shadowCol = dataNew["iShadowColorActiveM" + i];
						shadowColInner = dataNew["iShadowInnerColorActiveM" + i];
						borderCol = dataNew["iBorderColorActiveM" + i];

						imgColorFilter = dataNew["iImgColorTrue" + i];

						if (dataNew["iImageTrue" + i] != undefined)
							img = dataNew["iImageTrue" + i];
						if (dataNew["iTextTrue" + i] != undefined)
							txt = dataNew["iTextTrue" + i];
						imgBlink = dataNew["iImgBlinkTrue" + i];

						if(dataNew["iImgColorInvert" + i] == true){
							invertCol = " filter: invert(1);";
						}

						found = true;
						break;
					}
				}
				if (!found) {
					backCol = dataNew.iButtonCol;
					shadowCol = dataNew.iShadowColor;
					shadowColInner = dataNew.iShadowInnerColor;
					borderCol = dataNew.iBorderColor;

					imgColorFilter = dataNew.iImgColorFalse;

					if (dataNew.iImageFalse != undefined)
						img = dataNew.iImageFalse;
					if (dataNew.iTextFalse != undefined)
						txt = dataNew.iTextFalse;

					imgBlink = dataNew.iImgBlinkFalse;

					if(dataNew.iImgColorInvert == true){
						invertCol = " filter: invert(1);";
					}
				}
			} else if (type == "universal") {

				let val = dataNew.iValueTrue;
				if (val == undefined)
					val = true;
				else if (val == "true")
					val = true;
				else if (val == "false")
					val = false;
				else if (!isNaN(val))
					val = parseFloat(val);

				if ((dataNew.iUniversalWidgetType == "Navigation" && dataNew.nav_view === vis.activeView) ||
					(
						(dataNew.iUniversalWidgetType == "Switch" || dataNew.iUniversalWidgetType == "Background") &&
						((dataNew.iValueType == "value" && (
								(vis.states.attr(data.oid + ".val") == val && dataNew.iValueComparison == "equal")
								|| (vis.states.attr(data.oid + ".val") < val && dataNew.iValueComparison == "lower")
								|| (vis.states.attr(data.oid + ".val") > val && dataNew.iValueComparison == "greater")
								|| (vis.states.attr(data.oid + ".val") != val && dataNew.iValueComparison == "not")))

							|| (vis.states.attr(dataNew.oid + ".val") === true && dataNew.iValueType == "boolean")
						)
					)
				) {

					backCol = dataNew.iButtonActive;
					shadowCol = dataNew.iShadowColorActive;
					shadowColInner = dataNew.iShadowInnerColorActive;
					borderCol = dataNew.iBorderColorActive;

					imgColorFilter = dataNew.iImgColorTrue;


					if (dataNew.iImageTrue != undefined && dataNew.iImageTrue != "")
						img = dataNew.iImageTrue;
					if (dataNew.iTextTrue != undefined && dataNew.iTextTrue != "")
						txt = dataNew.iTextTrue;

					imgBlink = dataNew.iImgBlinkTrue;

					if(dataNew.iImgColorInvertTrue == true){
						invertCol = " filter: invert(1);";
					}

				} else {
					backCol = dataNew.iButtonCol;
					shadowCol = dataNew.iShadowColor;
					shadowColInner = dataNew.iShadowInnerColor;
					borderCol = dataNew.iBorderColor;

					imgColorFilter = dataNew.iImgColorFalse;

					if (dataNew.iImageFalse != undefined && dataNew.iImageFalse != "")
						img = dataNew.iImageFalse;
					if (dataNew.iTextFalse != undefined && dataNew.iTextFalse != "")
						txt = dataNew.iTextFalse;

					imgBlink = dataNew.iImgBlinkFalse;

					if(dataNew.iImgColorInvertFalse == true){
						invertCol = " filter: invert(1);";
					}

				}

			}

			imgBlink = imgBlink / 1000;

			let shadow = dataNew.iShadowXOffset + "px " + dataNew.iShadowYOffset + "px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px var(--box-shadow-col),inset " +
				dataNew.iShadowInnerXOffset + "px " + dataNew.iShadowInnerYOffset + "px " + dataNew.iShadowInnerBlur + "px " + dataNew.iShadowInnerSpread + "px var(--box-shadow-inner-col); --box-shadow-col: "
				+ shadowCol + "; --box-shadow-inner-col: " + shadowColInner;
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

			let dispNone = "";
			if(img == ""){
				dispNone = "display: none";
			}

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
							<div class="vis-inventwo-img"
								 style="background-image: url('` + img + `'); transform: scaleX(` + flip + `) rotateZ(` + dataNew.iImgRotation + `deg);
								 		animation:blink ` + imgBlink + `s infinite; ` + invertCol + ` width: ` + dataNew.iIconSize + `px; 
								 		height: ` + dataNew.iIconSize + `px;` + dispNone + `"> </div>
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

			vis.binds["vis-inventwo"].getImgColorFilter(imgColorFilter, dataNew.wid);

			//Felder beim reinziehen eines Widgets aktualisieren
			if (vis.editMode) {
				setTimeout(function () {
					vis.binds["vis-inventwo"].updateUniversalDataFields();
				}, 100);
			}

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
				} else if (dataNew.iUniversalWidgetType == "IncreaseDecreaseValue") {
					vis.binds["vis-inventwo"].increaseDecreaseValue(el, dataNew, type);
				}


				if (vis.editMode) {
					$(el).parent().on("mouseup click", function () {
						setTimeout(function () {
							vis.binds["vis-inventwo"].updateUniversalDataFields();
							//vis.binds["vis-inventwo"].hideImgFilterFields();
						}, 100);
					});

					$(".group-control").on("mouseup click", function () {
						setTimeout(function () {
							vis.binds["vis-inventwo"].hideImgFilterFields();
						}, 100);
					});
				} else {
					$(el).parent().on("mouseenter", function () {
						if (data.iButtonColHover != undefined && data.iButtonColHover != "") {
							$(this).find(".vis-inventwo-button-new").attr("data-oldbackground", $(this).find(".vis-inventwo-button-new").css("background"));
							$(this).find(".vis-inventwo-button-new").css("background", data.iButtonColHover);
						}
						if (data.iShadowColorHover != undefined && data.iShadowColorHover != "") {
							$(this).find(".vis-inventwo-button-new").attr("data-oldshadowcol", $(this).find(".vis-inventwo-button-new").get(0).style.getPropertyValue("--box-shadow-col"));
							$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-col", data.iShadowColorHover);
						}
						if (data.iShadowInnerColorHover != undefined && data.iShadowInnerColorHover != "") {
							$(this).find(".vis-inventwo-button-new").attr("data-oldshadowinnercol", $(this).find(".vis-inventwo-button-new").get(0).style.getPropertyValue("--box-shadow-inner-col"));
							$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColorHover);
						}
						if (data.iBorderColorHover != undefined && data.iBorderColorHover != "") {
							$(this).find(".vis-inventwo-button-new").attr("data-oldbordercol", $(this).find(".vis-inventwo-button-new").css("border-color"));
							$(this).find(".vis-inventwo-button-new").css("border-color", data.iBorderColorHover);
						}

					});
					$(el).parent().on("mouseleave", function () {
						if ($(this).find(".vis-inventwo-button-new").data("oldbackground") != undefined) {
							$(this).find(".vis-inventwo-button-new").css("background", $(this).find(".vis-inventwo-button-new").data("oldbackground"));
						}
						if ($(this).find(".vis-inventwo-button-new").data("oldshadowcol") != undefined){
							$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-col", $(this).find(".vis-inventwo-button-new").data("oldshadowcol"));
						}
						if ($(this).find(".vis-inventwo-button-new").data("oldshadowinnercol") != undefined){
							$(this).find(".vis-inventwo-button-new").get(0).style.setProperty("--box-shadow-inner-col", $(this).find(".vis-inventwo-button-new").data("oldshadowinnercol"));
						}
						if ($(this).find(".vis-inventwo-button-new").data("oldbordercol") != undefined){
							$(this).find(".vis-inventwo-button-new").css("border-color", $(this).find(".vis-inventwo-button-new").data("oldbordercol"));
						}
					});
				}
			}
		}
	},

	//Funktion um im VIS Edit das Binding der Datenpunkte aufzulösen, damit die Werte wie in der Live auch im Editor zu sehen sind
	getDatapointsValues: function (data) {

		for (let [key, value] of Object.entries(data)) {
			if (key.substring(0, 1) == "i") {

				if(key.startsWith("iTblCellThresholdsText", 0)){
					continue;
				}

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

	//Generierung des List Widgets
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

	},

	/*
		Generierung der Filter um ein Icon zu färben. Der Code zur stammt NICHT von uns.
		Ich hab ihn nur etwas abgeändert

		Credits goes to MultiplyByZer0
		https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991

		Code in Codepen -> https://codepen.io/sosuke/pen/Pjoqqp
	 */
	colorFilterGenerator: function (hex) {

		class Color {
			constructor(r, g, b) {
				this.set(r, g, b);
			}

			toString() {
				return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
			}

			set(r, g, b) {
				this.r = this.clamp(r);
				this.g = this.clamp(g);
				this.b = this.clamp(b);
			}

			hueRotate(angle = 0) {
				angle = angle / 180 * Math.PI;
				const sin = Math.sin(angle);
				const cos = Math.cos(angle);

				this.multiply([
					0.213 + cos * 0.787 - sin * 0.213,
					0.715 - cos * 0.715 - sin * 0.715,
					0.072 - cos * 0.072 + sin * 0.928,
					0.213 - cos * 0.213 + sin * 0.143,
					0.715 + cos * 0.285 + sin * 0.140,
					0.072 - cos * 0.072 - sin * 0.283,
					0.213 - cos * 0.213 - sin * 0.787,
					0.715 - cos * 0.715 + sin * 0.715,
					0.072 + cos * 0.928 + sin * 0.072,
				]);
			}

			grayscale(value = 1) {
				this.multiply([
					0.2126 + 0.7874 * (1 - value),
					0.7152 - 0.7152 * (1 - value),
					0.0722 - 0.0722 * (1 - value),
					0.2126 - 0.2126 * (1 - value),
					0.7152 + 0.2848 * (1 - value),
					0.0722 - 0.0722 * (1 - value),
					0.2126 - 0.2126 * (1 - value),
					0.7152 - 0.7152 * (1 - value),
					0.0722 + 0.9278 * (1 - value),
				]);
			}

			sepia(value = 1) {
				this.multiply([
					0.393 + 0.607 * (1 - value),
					0.769 - 0.769 * (1 - value),
					0.189 - 0.189 * (1 - value),
					0.349 - 0.349 * (1 - value),
					0.686 + 0.314 * (1 - value),
					0.168 - 0.168 * (1 - value),
					0.272 - 0.272 * (1 - value),
					0.534 - 0.534 * (1 - value),
					0.131 + 0.869 * (1 - value),
				]);
			}

			saturate(value = 1) {
				this.multiply([
					0.213 + 0.787 * value,
					0.715 - 0.715 * value,
					0.072 - 0.072 * value,
					0.213 - 0.213 * value,
					0.715 + 0.285 * value,
					0.072 - 0.072 * value,
					0.213 - 0.213 * value,
					0.715 - 0.715 * value,
					0.072 + 0.928 * value,
				]);
			}

			multiply(matrix) {
				const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
				const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
				const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
				this.r = newR;
				this.g = newG;
				this.b = newB;
			}

			brightness(value = 1) {
				this.linear(value);
			}

			contrast(value = 1) {
				this.linear(value, -(0.5 * value) + 0.5);
			}

			linear(slope = 1, intercept = 0) {
				this.r = this.clamp(this.r * slope + intercept * 255);
				this.g = this.clamp(this.g * slope + intercept * 255);
				this.b = this.clamp(this.b * slope + intercept * 255);
			}

			invert(value = 1) {
				this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
				this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
				this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
			}

			hsl() {
				// Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
				const r = this.r / 255;
				const g = this.g / 255;
				const b = this.b / 255;
				const max = Math.max(r, g, b);
				const min = Math.min(r, g, b);
				let h, s, l = (max + min) / 2;

				if (max === min) {
					h = s = 0;
				} else {
					const d = max - min;
					s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
					switch (max) {
						case r:
							h = (g - b) / d + (g < b ? 6 : 0);
							break;

						case g:
							h = (b - r) / d + 2;
							break;

						case b:
							h = (r - g) / d + 4;
							break;
					}
					h /= 6;
				}

				return {
					h: h * 100,
					s: s * 100,
					l: l * 100,
				};
			}

			clamp(value) {
				if (value > 255) {
					value = 255;
				} else if (value < 0) {
					value = 0;
				}
				return value;
			}
		}

		class Solver {
			constructor(target, baseColor) {
				this.target = target;
				this.targetHSL = target.hsl();
				this.reusedColor = new Color(0, 0, 0);
			}

			solve() {
				const result = this.solveNarrow(this.solveWide());
				return {
					values: result.values,
					loss: result.loss,
					filter: this.css(result.values),
				};
			}

			solveWide() {
				const A = 5;
				const c = 15;
				const a = [60, 180, 18000, 600, 1.2, 1.2];

				let best = {loss: Infinity};
				for (let i = 0; best.loss > 25 && i < 3; i++) {
					const initial = [50, 20, 3750, 50, 100, 100];
					const result = this.spsa(A, a, c, initial, 1000);
					if (result.loss < best.loss) {
						best = result;
					}
				}
				return best;
			}

			solveNarrow(wide) {
				const A = wide.loss;
				const c = 2;
				const A1 = A + 1;
				const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
				return this.spsa(A, a, c, wide.values, 500);
			}

			spsa(A, a, c, values, iters) {
				const alpha = 1;
				const gamma = 0.16666666666666666;

				let best = null;
				let bestLoss = Infinity;
				const deltas = new Array(6);
				const highArgs = new Array(6);
				const lowArgs = new Array(6);

				for (let k = 0; k < iters; k++) {
					const ck = c / Math.pow(k + 1, gamma);
					for (let i = 0; i < 6; i++) {
						deltas[i] = Math.random() > 0.5 ? 1 : -1;
						highArgs[i] = values[i] + ck * deltas[i];
						lowArgs[i] = values[i] - ck * deltas[i];
					}

					const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
					for (let i = 0; i < 6; i++) {
						const g = lossDiff / (2 * ck) * deltas[i];
						const ak = a[i] / Math.pow(A + k + 1, alpha);
						values[i] = fix(values[i] - ak * g, i);
					}

					const loss = this.loss(values);
					if (loss < bestLoss) {
						best = values.slice(0);
						bestLoss = loss;
					}
				}
				return {values: best, loss: bestLoss};

				function fix(value, idx) {
					let max = 100;
					if (idx === 2 /* saturate */) {
						max = 7500;
					} else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
						max = 200;
					}

					if (idx === 3 /* hue-rotate */) {
						if (value > max) {
							value %= max;
						} else if (value < 0) {
							value = max + value % max;
						}
					} else if (value < 0) {
						value = 0;
					} else if (value > max) {
						value = max;
					}
					return value;
				}
			}

			loss(filters) {
				// Argument is array of percentages.
				const color = this.reusedColor;
				color.set(0, 0, 0);

				color.invert(filters[0] / 100);
				color.sepia(filters[1] / 100);
				color.saturate(filters[2] / 100);
				color.hueRotate(filters[3] * 3.6);
				color.brightness(filters[4] / 100);
				color.contrast(filters[5] / 100);

				const colorHSL = color.hsl();
				return (
					Math.abs(color.r - this.target.r) +
					Math.abs(color.g - this.target.g) +
					Math.abs(color.b - this.target.b) +
					Math.abs(colorHSL.h - this.targetHSL.h) +
					Math.abs(colorHSL.s - this.targetHSL.s) +
					Math.abs(colorHSL.l - this.targetHSL.l)
				);
			}

			css(filters) {
				function fmt(idx, multiplier = 1) {
					return Math.round(filters[idx] * multiplier);
				}

				return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%);`;
			}
		}


		function hexToRgb(hex) {
			if ((/^#([A-Fa-f0-9]{3}$)|([A-Fa-f0-9]{6}$)/.test(hex))) {
				// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
				const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
				hex = hex.replace(shorthandRegex, (m, r, g, b) => {
					return r + r + g + g + b + b;
				});

				const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

				return result
					? [
						parseInt(result[1], 16),
						parseInt(result[2], 16),
						parseInt(result[3], 16),
					]
					: null;
			} else {
				return null;
			}
		}

		let filter = "";

		if (hex != undefined && hex != "") {
			let rgb = hexToRgb(hex);

			if (rgb != null && rgb.length === 3) {
				let loss = 999;
				for (let i = 0; i < 10; i++) {
					const color = new Color(rgb[0], rgb[1], rgb[2]);
					const solver = new Solver(color);
					const result = solver.solve();

					if (result.loss < loss) {
						filter = result.filter;
					}
				}
			}
		}

		return filter;

	},

	//Aktualisierung der Filter für das Icon
	getImgColorFilter: function (color, wid) {

		if (color == undefined || color == null || color == "") {
			return;
		}

		let filter = "";
		color = color.toLowerCase();

		if (/^#[0-9A-F]{6}$/i.test(color)) {

			vis.conn._socket.emit("getState", "vis-inventwo.0.intern.ColorFilter." + color.substring(1), function (err, obj) {
				if (obj != undefined) {
					filter = obj.val;
				} else {
					filter = vis.binds["vis-inventwo"].colorFilterGenerator(color);
					vis.conn._socket.emit("setObject", "vis-inventwo.0.intern.ColorFilter." + color.substring(1), {
						type: "state",
						common: {
							name: color,
							type: "string",
							role: "inventwo.color",
							read: true,
							write: true,
						},
						native: {},
					});

					vis.setValue("vis-inventwo.0.intern.ColorFilter." + color.substring(1), filter);
				}

				if ($("#" + wid).find(".vis-inventwo-img").css("filter") != filter.substring(8, filter.length - 1)) {
					$("#" + wid).find(".vis-inventwo-img").css("filter", filter.substring(8, filter.length - 1));
				}
			});
		}
		else{
			$("#" + wid).find(".vis-inventwo-img").css("filter", "");
		}

	},


	convertValue: function (val) {

		if (val == "true")
			val = true;
		else if (val == "false")
			val = false;

		return val;
	},

	hideImgFilterFields: function (e) {

		if (vis.editMode) {
			$(e).parent().on("mouseup click", function () {
				setTimeout(function () {
					vis.activeWidgets.forEach(function (el) {
						let data = vis.views[vis.activeView].widgets[el].data;

						vis.hideShowAttr("iImgColorFalseFilter", false);
						vis.hideShowAttr("iImgColorTrueFilter", false);

						for (let i = 1; i <= data.iRadiobtnsCount; i++) {
							vis.hideShowAttr("iImgColorFalseFilter" + i, false);
							vis.hideShowAttr("iImgColorTrueFilter" + i, false);
						}

						for (let i = 1; i <= data.iUniversalValueCount; i++) {
							vis.hideShowAttr("iImgColorFalseFilter" + i, false);
							vis.hideShowAttr("iImgColorTrueFilter" + i, false);
						}


					});
				}, 100);
			});
		}
	},

	//Generierung des Universal und Multi Widgets
	createSwitchWidget: function (el, data, style) {

		vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
			createWidget(false);
		});

		createWidget(true);

		function createWidget(createEvents) {
			let dataNew = Object.assign({}, data);

			if (vis.editMode) {
				dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
			}

			//Farben, Text & Bild bei true oder false
			let switchOnCol = dataNew.iSwitchColOn;
			let switchOffCol = dataNew.iSwitchColOff;
			let switchImg = "";
			let switchColsSizeStyles = "";
			let switchWidth = "";
			let switchHeight = "";
			let backDirection = "";
			let flip = 1;
			let flipStyle = "";

			if (dataNew.iFlipImage) {
				flip = -1;
			}

			if (vis.states.attr(dataNew.oid + ".val") == vis.binds["vis-inventwo"].convertValue(dataNew.iValueTrue)) {
				switchOnCol = dataNew.iSwitchColOnActive;
				if (dataNew.iSwitchOrientation == "vertical") {
					switchImg = "widgets/vis-inventwo/img/ToggleSwitch/switch-1-vert-on-" + dataNew.iSwitchColor + ".png";
				} else {
					switchImg = "widgets/vis-inventwo/img/ToggleSwitch/switch-1-hor-on-" + dataNew.iSwitchColor + ".png";
				}
			} else {
				switchOffCol = dataNew.iSwitchColOffActive;
				if (dataNew.iSwitchOrientation == "vertical") {
					switchImg = "widgets/vis-inventwo/img/ToggleSwitch/switch-1-vert-off-" + dataNew.iSwitchColor + ".png";
				} else {
					switchImg = "widgets/vis-inventwo/img/ToggleSwitch/switch-1-hor-off-" + dataNew.iSwitchColor + ".png";
				}
			}


			if (dataNew.iSwitchOrientation == "vertical") {
				switchWidth = dataNew.iSwitchSize + "px";
				switchHeight = "calc(" + dataNew.iSwitchSize + "px" + " * 2)";
				switchColsSizeStyles = "margin: auto; width: 90%; height: 45%;";
				backDirection = "column";
				flipStyle = "scaleY(" + flip + ")";
			} else if (dataNew.iSwitchOrientation == "horizontal") {
				switchWidth = "calc(" + dataNew.iSwitchSize + "px" + " * 2)";
				switchHeight = dataNew.iSwitchSize + "px";
				switchColsSizeStyles = "margin: auto; width: 45%; height: 90%;";
				backDirection = "row";
				flipStyle = "scaleX(" + flip + ")";
			}

			let html = `
			<div class="vis-inventwo-class vis-widget-body" 
				 style="position: relative; opacity: ` + dataNew.iOpacityBack + `;width: ` + switchWidth + `; height: ` + switchHeight + `; transform: ` + flipStyle + ` ">
					<div class="vis-inventwo-button-new" style="display: flex; flex-direction: ` + backDirection + `;">
						 <div style="` + switchColsSizeStyles + ` background: ` + switchOnCol + `;"></div>
						 <div style="` + switchColsSizeStyles + ` background: ` + switchOffCol + `;"></div>
					</div>
					<div class="vis-inventwo-overlay">
						<img src="` + switchImg + `" width="100%"> 
					</div>
			</div>`;

			$(el).html(html);

			//Bindings
			if (createEvents) {
				vis.binds["vis-inventwo"].handleToggleSwitch(el, dataNew);

			}
		}
	},


	//Switch Funktion - Datenpunktwert wechseln
	handleToggleSwitch: function (el, data) {
		var $this = $(el);

		var oid = data.oid;

		if (!vis.editMode) {
			var moved = false;
			$this.parent().on("click touchend", function () {

				if (vis.detectBounce(this)) return;
				if (moved) return;

				var val = vis.states[oid + ".val"];
				var valFalse = vis.binds["vis-inventwo"].convertValue(data.iValueFalse);
				var valTrue = vis.binds["vis-inventwo"].convertValue(data.iValueTrue);

				if (val == valFalse) {
					vis.setValue(oid, valTrue);
				} else {
					vis.setValue(oid, valFalse);
				}

			}).on("touchmove", function () {
				moved = true;
			}).on("touchstart", function () {
				moved = false;
			});

		}

	},

	hexToRgb: function(hex){
		if ((/^#([A-Fa-f0-9]{3}$)|([A-Fa-f0-9]{6}$)/.test(hex))) {
			// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
			const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			hex = hex.replace(shorthandRegex, (m, r, g, b) => {
				return r + r + g + g + b + b;
			});

			const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

			return result
				? [
					parseInt(result[1], 16),
					parseInt(result[2], 16),
					parseInt(result[3], 16),
				]
				: null;
		} else {
			return null;
		}
	},

	rgbToHex: function(rgb){
		function componentToHex(c) {
			var hex = c.toString(16);
			return hex.length == 1 ? "0" + hex : hex;
		}
		return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
	},

	cieConvert: function(value, type){
		class ColorConverter {
			static getGamutRanges(){
				let gamutA = {
					red: [0.704, 0.296],
					green: [0.2151, 0.7106],
					blue: [0.138, 0.08]
				};

				let gamutB = {
					red: [0.675, 0.322],
					green: [0.409, 0.518],
					blue: [0.167, 0.04]
				};

				let gamutC = {
					red: [0.692, 0.308],
					green: [0.17, 0.7],
					blue: [0.153, 0.048]
				};

				let defaultGamut ={
					red: [1.0, 0],
					green: [0.0, 1.0],
					blue: [0.0, 0.0]
				};

				return {"gamutA":gamutA,"gamutB": gamutB, "gamutC":gamutC,"default": defaultGamut}
			}

			static getLightColorGamutRange(modelId = null){
				let ranges = ColorConverter.getGamutRanges();
				let gamutA = ranges.gamutA;
				let gamutB = ranges.gamutB;
				let gamutC = ranges.gamutC;

				let philipsModels = {
					LST001 : gamutA,
					LLC010 : gamutA,
					LLC011 : gamutA,
					LLC012 : gamutA,
					LLC006 : gamutA,
					LLC005 : gamutA,
					LLC007 : gamutA,
					LLC014 : gamutA,
					LLC013 : gamutA,

					LCT001 : gamutB,
					LCT007 : gamutB,
					LCT002 : gamutB,
					LCT003 : gamutB,
					LLM001 : gamutB,

					LCT010 : gamutC,
					LCT014 : gamutC,
					LCT015 : gamutC,
					LCT016 : gamutC,
					LCT011 : gamutC,
					LLC020 : gamutC,
					LST002 : gamutC,
					LCT012 : gamutC,
				};

				if(!!philipsModels[modelId]){
					return philipsModels[modelId];
				}

				return ranges.default;
			}


			static rgbToXy(red, green, blue,modelId = null) {
				function getGammaCorrectedValue(value) {
					return (value > 0.04045) ? Math.pow((value + 0.055) / (1.0 + 0.055), 2.4) : (value / 12.92)
				}

				let colorGamut = ColorConverter.getLightColorGamutRange(modelId);

				red = parseFloat(red / 255);
				green = parseFloat(green / 255);
				blue = parseFloat(blue / 255);

				red = getGammaCorrectedValue(red);
				green = getGammaCorrectedValue(green);
				blue = getGammaCorrectedValue(blue);

				let x = red * 0.649926 + green * 0.103455 + blue * 0.197109;
				let y = red * 0.234327 + green * 0.743075 + blue * 0.022598;
				let z = red * 0.0000000 + green * 0.053077 + blue * 1.035763;

				let xy = {
					x: x / (x + y + z),
					y: y / (x + y + z)
				};

				if(!ColorConverter.xyIsInGamutRange(xy, colorGamut)){
					xy = ColorConverter.getClosestColor(xy,colorGamut);
				}

				return xy;
			}

			static xyIsInGamutRange(xy, gamut) {
				gamut = gamut || ColorConverter.getGamutRanges().gamutC;
				if (Array.isArray(xy)) {
					xy = {
						x: xy[0],
						y: xy[1]
					};
				}

				let v0 = [gamut.blue[0] - gamut.red[0], gamut.blue[1] - gamut.red[1]];
				let v1 = [gamut.green[0] - gamut.red[0], gamut.green[1] - gamut.red[1]];
				let v2 = [xy.x - gamut.red[0], xy.y - gamut.red[1]];

				let dot00 = (v0[0] * v0[0]) + (v0[1] * v0[1]);
				let dot01 = (v0[0] * v1[0]) + (v0[1] * v1[1]);
				let dot02 = (v0[0] * v2[0]) + (v0[1] * v2[1]);
				let dot11 = (v1[0] * v1[0]) + (v1[1] * v1[1]);
				let dot12 = (v1[0] * v2[0]) + (v1[1] * v2[1]);

				let invDenom = 1 / (dot00 * dot11 - dot01 * dot01);

				let u = (dot11 * dot02 - dot01 * dot12) * invDenom;
				let v = (dot00 * dot12 - dot01 * dot02) * invDenom;

				return ((u >= 0) && (v >= 0) && (u + v < 1));
			}

			static getClosestColor(xy, gamut) {
				function getLineDistance(pointA,pointB){
					return Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
				}

				function getClosestPoint(xy, pointA, pointB) {
					let xy2a = [xy.x - pointA.x, xy.y - pointA.y];
					let a2b = [pointB.x - pointA.x, pointB.y - pointA.y];
					let a2bSqr = Math.pow(a2b[0],2) + Math.pow(a2b[1],2);
					let xy2a_dot_a2b = xy2a[0] * a2b[0] + xy2a[1] * a2b[1];
					let t = xy2a_dot_a2b /a2bSqr;

					return {
						x: pointA.x + a2b[0] * t,
						y: pointA.y + a2b[1] * t
					}
				}

				let greenBlue = {
					a: {
						x: gamut.green[0],
						y: gamut.green[1]
					},
					b: {
						x: gamut.blue[0],
						y: gamut.blue[1]
					}
				};

				let greenRed = {
					a: {
						x: gamut.green[0],
						y: gamut.green[1]
					},
					b: {
						x: gamut.red[0],
						y: gamut.red[1]
					}
				};

				let blueRed = {
					a: {
						x: gamut.red[0],
						y: gamut.red[1]
					},
					b: {
						x: gamut.blue[0],
						y: gamut.blue[1]
					}
				};

				let closestColorPoints = {
					greenBlue : getClosestPoint(xy,greenBlue.a,greenBlue.b),
					greenRed : getClosestPoint(xy,greenRed.a,greenRed.b),
					blueRed : getClosestPoint(xy,blueRed.a,blueRed.b)
				};

				let distance = {
					greenBlue : getLineDistance(xy,closestColorPoints.greenBlue),
					greenRed : getLineDistance(xy,closestColorPoints.greenRed),
					blueRed : getLineDistance(xy,closestColorPoints.blueRed)
				};

				let closestDistance;
				let closestColor;
				for (let i in distance){
					if(distance.hasOwnProperty(i)){
						if(!closestDistance){
							closestDistance = distance[i];
							closestColor = i;
						}

						if(closestDistance > distance[i]){
							closestDistance = distance[i];
							closestColor = i;
						}
					}

				}
				return  closestColorPoints[closestColor];
			}

			static xyBriToRgb(x,y,bri){
				function getReversedGammaCorrectedValue(value){
					return value <= 0.0031308 ? 12.92 * value : (1.0 + 0.055) * Math.pow(value, (1.0 / 2.4)) - 0.055;
				}

				let xy = {
					x: x,
					y: y
				};

				let z = 1.0 - xy.x - xy.y;
				let Y = bri / 255;
				let X = (Y / xy.y) * xy.x;
				let Z = (Y / xy.y) * z;
				let r = X * 1.656492 - Y * 0.354851 - Z * 0.255038;
				let g = -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
				let b =  X * 0.051713 - Y * 0.121364 + Z * 1.011530;

				r = getReversedGammaCorrectedValue(r);
				g = getReversedGammaCorrectedValue(g);
				b = getReversedGammaCorrectedValue(b);

				let red = parseInt(r * 255) > 255 ? 255: parseInt(r * 255);
				let green = parseInt(g * 255) > 255 ? 255: parseInt(g * 255);
				let blue = parseInt(b * 255) > 255 ? 255: parseInt(b * 255);

				red = Math.abs(red);
				green = Math.abs(green);
				blue = Math.abs(blue);

				return [red, green, blue];
			}
		}

		if(type == "rgb"){
			let xy = value.split(",");
			return ColorConverter.xyBriToRgb(xy[0], xy[1], 255);
		}
		else if(type == "cie"){
			let xy = ColorConverter.rgbToXy(value[0], value[1], value[2]);
			return  xy.x + "," + xy.y;
		}
	},

	updateColorSliderFields: function (wid,view) {
		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.iColorSliderType;
			if (val == "RGB") {
				vis.hideShowAttr("oid", false);
				vis.hideShowAttr("iIdRed", true);
				vis.hideShowAttr("iIdGreen", true);
				vis.hideShowAttr("iIdBlue", true);
			}
			else{
				vis.hideShowAttr("oid", true);
				vis.hideShowAttr("iIdRed", false);
				vis.hideShowAttr("iIdGreen", false);
				vis.hideShowAttr("iIdBlue", false);
			}

		});
	},

	updateColorSliderFieldsClick: function (el) {
		if(vis.editMode) {
			$(el).parent().on("mouseup click", function () {
				setTimeout(function () {
					vis.binds["vis-inventwo"].updateColorSliderFields();
				}, 100);
			});

			$(".group-control").on("mouseup click", function () {
				setTimeout(function () {
					vis.binds["vis-inventwo"].updateColorSliderFields();
				}, 100);
			});
		}
	}


	/*
		checkIfTrue: function (oid, value, comparator, valueType) {
			let comparasionTable = {
				'greater' : function (val1, val2) { return val1 > val2 },
				'lower' : function (val1, val2) { return val1 < val2 },
				'equal' : function (val1, val2) { return val1 == val2 },
				//'>=' : function (val1, val2) { return val1 >= val2 },
				//'<=' : function (val1, val2) { return val1 <= val2 },
				'not' : function (val1, val2) { return val1 != val2 },
			}

			let dpVal = vis.states.attr(oid + ".val");
			dpVal = this.convertValue(dpVal);

			if(valueType == "boolean")
				value = true;

			value = this.convertValue(value);

			console.log(value);
			console.log(dpVal);

			if(comparasionTable[comparator](dpVal,value)){
				console.log("is strue");
				return true;
			}
			else{
				console.log("is false");
				return false;
			}

		},

		universalButtonBackgroundStyles: function (data) {
			let style = "";
			if(this.checkIfTrue(data.oid, data.iValueTrue, data.iValueComparison, data.iValueType)){
				let invertImg = 0;
				if(data.iImgColorInvertTrue){
					invertImg = 1;
				}

				style = "--background: " + data.iButtonActive + "; " +
						"--box-shadow-color:" + data.iShadowColorActive + ";" +
						"--border-color: " + data.iBorderColorActive + ";" +
						"--image-blink: " + data.iImgBlinkTrue / 1000 + ";" +
						"--image-invert: " + invertImg + ";";

			}
			else{
				let invertImg = 0;
				if(data.iImgColorInvertFalse){
					invertImg = 1;
				}

				style = "--background: " + data.iButtonCol + "; " +
						"--box-shadow-color:" + data.iShadowColor + ";" +
						"--border-color: " + data.iBorderColor + ";" +
						"--image-blink: " + data.iImgBlinkFalse / 1000 + ";" +
						"--image-invert: " + invertImg + ";";
			}
			return style;
		},

		universalButtonText: function (data) {
			let text = "";
			if(this.checkIfTrue(data.oid, data.iValueTrue, data.iValueComparison, data.iValueType)){
				text = data.iTextTrue;
			}
			else{
				text = data.iTextFalse;
			}
			return text;
		},

		universalButtonImage: function (data) {
			let img = "";
			if(this.checkIfTrue(data.oid, data.iValueTrue, data.iValueComparison, data.iValueType)){
				img = data.iImageTrue;
			}
			else{
				img = data.iImageFalse;
			}
			return img;
		},

		universalButtonAlign: function (align) {
			let ret = "";
			if(align == "iStart"){
				ret = "flex-start";
			}
			else if(align == "iCenter"){
				ret = "center";
			}
			else if(align == "iEnd"){
				ret = "flex-end";
			}
			else if(align == "iSpace-between"){
				ret = "space-between";
			}
			return ret;
		},

		universalButtonContentDirection: function (dir) {
			let ret = "";
			if(dir == "vertical"){
				ret = "column";
			}
			else if(dir == "horizontal"){
				ret = "row";
			}
			return ret;
		},

		universalButtonContentOrder: function (order) {
			let ret = 0;
			if(order == "orderTextImg"){
				ret = 2;
			}
			return ret;
		},

		universalButtonImageFlip: function (flip) {
			let ret = 1;
			if(flip){
				ret = -1;
			}
			return ret;
		},
	*/



};
