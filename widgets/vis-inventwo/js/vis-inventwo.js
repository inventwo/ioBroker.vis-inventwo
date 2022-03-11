/*
	ioBroker.vis vis-inventwo Widget-Set
	version: "3.x.x"
	Copyright 2021 jkvarel jkvarel@inventwo.com
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
		"asc": {
			"en": "Ascending",
			"de": "Aufsteigend"
		},
		"desc": {
			"en": "Descending",
			"de": "Absteigend"
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
		"iContentType": {
			"en": "Content type",
			"de": "Inhalts Typ"
		},
		"clock_analog": {
			"en": "Analog clock",
			"de": "Analog Uhr"
		},
		"clock_digital": {
			"en": "Digital clock",
			"de": "Digital Uhr"
		},
		"html_text": {
			"en": "HTML/Text",
			"de": "HTML/Text"
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

		//#region Clock Settings
		"iClockShowSeconds": {
			"en": "Show seconds",
			"de": "Sekunden anzeigen"
		},
		"iImgColorClockFace": {
			"en": "Color face",
			"de": "Farbe Ziffernblatt"
		},
		"iImgColorHands": {
			"en": "Color hands",
			"de": "Farbe Zeiger"
		},
		"iImgColorHandSecond": {
			"en": "Color second hand",
			"de": "Farbe Sekundenzeiger"
		},
		"iImgClockFace": {
			"en": "Clock face",
			"de": "Ziffernblatt"
		},
		"iImgClockHands": {
			"en": "Clock hands",
			"de": "Zeiger"
		},
		"iImgClockShowBorder": {
			"en": "Show border",
			"de": "Zeige Rand"
		},
		"iClockTimezone": {
			"en": "Timezone",
			"de": "Zeitzone"
		},
		//#endregion

		//#region HTML/Text Settings
		"iHtmlTextFieldFalse": {
			"en": "HTML false",
			"de": "HTML falsch"
		},
		"iHtmlTextFieldTrue": {
			"en": "HTML true",
			"de": "HTML wahr"
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
		"iTextDecoration": {
			"en": "Text decoration",
			"de": "Textdekoration"
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
		"iTextColorActive": {
			"en": "Text color active",
			"de": "Farbe Aktiv"
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

		//#region Shadow Text Settingss
		"iShadowTextXOffset": {
			"en": "X offset",
			"de": "X Versatz"
		},
		"iShadowTextYOffset": {
			"en": "Y offset",
			"de": "Y Versatz"
		},
		"iShadowTextBlur": {
			"en": "Blur",
			"de": "Blur"
		},
		"iShadowTextColor": {
			"en": "Color",
			"de": "Farbe"
		},
		"iShadowTextColorActive": {
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iShadowTextColorActiveM": {
			"en": "shadow active",
			"de": "Schatten aktiv"
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
		"iHttpType": {
			"en": "HTTP behaviour",
			"de": "HTTP Verhalten"
		},
		"iSend": {
			"en": "Send",
			"de": "Senden"
		},
		"iOpenUrl": {
			"en": "Open",
			"de": "Öffnen"
		},
		"iOpenUrlNewTab": {
			"en": "Open (new tab)",
			"de": "Öffnen (neuer Tab)"
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
		"iRadiobtnWrap": {
			"en": "Schema",
			"de": "Darstellung"
		},
		"iOneRowCol": {
			"en": "One row/col",
			"de": "Eine Zeile/Spalte"
		},
		"iMatrix": {
			"en": "Matrix",
			"de": "Matrix"
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
		"iVisibleStepVal": {
			"en": "Step labels",
			"de": "Schritt Beschriftung"
		},
		"iStepTextSize": {
			"en": "Size steps",
			"de": "Größe Schritte"
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
		"iShowSteps": {
			"en": "Show steps",
			"de": "Zeige Schritte"
		},
		"iIdRed-oid": {
			"en": "Red",
			"de": "Rot"
		},
		"iIdGreen-oid": {
			"en": "Green",
			"de": "Grün"
		},
		"iIdBlue-oid": {
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
			"de": "Tabellenkopf fixieren"
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
		"iTblHeadTextAlign": {
			"en": "Head Text align",
			"de": "Kopf Textausrichtung"
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
		"iColPreText": {
			"en": "Pre text",
			"de": "Text voranstellen"
		},
		"iColAfterText": {
			"en": "After text",
			"de": "Text anhängen"
		},
		"iTblSortAttr": {
			"en": "Default sorting attribute",
			"de": "Standardsortierung Attribut"
		},
		"iTblSortOrder": {
			"en": "Default sorting direction",
			"de": "Standardsortierung Richtung"
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
			"de": "Vergleichsoperator"
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
		"Switch": {
			"en": "Switch",
			"de": "Switch"
		},
		"State": {
			"en": "State",
			"de": "State"
		},
		"Navigation": {
			"en": "Navigation",
			"de": "Navigation"
		},
		"Background": {
			"en": "Background",
			"de": "Background"
		},
		"IncreaseDecreaseValue": {
			"en": "Increase or decrease value",
			"de": "Wert erhöhen oder verringern"
		},
		"ViewInPopup": {
			"en": "View in popup",
			"de": "View in PopUp"
		},
		"iCheckType": {
			"en": "Check",
			"de": "Prüfe auf"
		},
		"iCheckDefault": {
			"en": "(Default for widget type)",
			"de": "(Standard für Widget Typ)"
		},
		"iCheckDpValue": {
			"en": "Datapoint value",
			"de": "Datenpunkt Wert"
		},
		"iCheckView": {
			"en": "View",
			"de": "View"
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

		//#region Pop Up Settings
		"iPopUpBackground": {
			"en": "Background color",
			"de": "Hintergrundfarbe"
		},
		"iPopUpPreventClickOutside": {
			"en": "Prevent close when clicking outside",
			"de": "Verhindere schließen beim Klicken außerhalb"
		},
		"iPopUpShowTitle": {
			"en": "Show title",
			"de": "Zeige Titel"
		},
		"iPopUpTitle": {
			"en": "Title",
			"de": "Titel"
		},
		"iPopUpTitleColor": {
			"en": "Title color",
			"de": "Titel Farbe"
		},
		"iPopUpCloseBtnColor": {
			"en": "Close buttom color",
			"de": "Farbe X-Button"
		},
		"iPopUpWidth": {
			"en": "Width",
			"de": "Breite"
		},
		"iPopUpHeight": {
			"en": "Height",
			"de": "Höhe"
		},
		"iPopUpHeightTitle": {
			"en": "Height title bar",
			"de": "Höhe Titelleiste"
		},
		"iPopUpTitleSize": {
			"en": "Title font size",
			"de": "Titel Schriftgröße"
		},
		"iPopUpPosition": {
			"en": "Position",
			"de": "Position"
		},
		"iPopUpPositionX": {
			"en": "Position X",
			"de": "Position X"
		},
		"iPopUpPositionY": {
			"en": "Position Y",
			"de": "Position Y"
		},
		"iPopUpCloseAfterSeconds": {
			"en": "Close after x seconds",
			"de": "Schließe nach X Sekunden"
		},
		"iPopUpCloseDp-oid": {
			"en": "Open/Close datapoint",
			"de": "Öffnen/Schließen Datenpunkt"
		},
		"iPopUpCloseDpValue": {
			"en": "Close if value",
			"de": "Schließen bei Wert"
		},
		"iPopUpOpenDpValue": {
			"en": "Open if value",
			"de": "Öffnen bei Wert"
		},
		"iPopUpCornerRadiusUL": {
			"en": "Border radius upper left",
			"de": "Abrundung oben links"
		},
		"iPopUpCornerRadiusUR": {
			"en": "Border radius upper right",
			"de": "Abrundung oben rechts"
		},
		"iPopUpCornerRadiusLR": {
			"en": "Border radius lower right",
			"de": "Abrundung unten rechts"
		},
		"iPopUpCornerRadiusLL": {
			"en": "Border radius lower left",
			"de": "Abrundung unten links"
		},

		"iPopUpShadowXOffset": {
			"en": "X offset",
			"de": "X Versatz"
		},
		"iPopUpShadowYOffset": {
			"en": "Y offset",
			"de": "Y Versatz"
		},
		"iPopUpShadowBlur": {
			"en": "Blur",
			"de": "Blur"
		},
		"iPopUpShadowSpread": {
			"en": "Spread",
			"de": "Größe"
		},
		"iPopUpShadowColor": {
			"en": "Color",
			"de": "Farbe"
		},
		"iPopUpScrollX": {
			"en": "Scroll horizontal",
			"de": "Horizontal scrollen"
		},
		"iPopUpScrollY": {
			"en": "Scroll vertical",
			"de": "Vertikal scrollen"
		},

		//#endregion

		//#region Basic Switch Settings
		"iBarWidth": {
			"en": "Width",
			"de": "Breite"
		},
		"iKnobWidth": {
			"en": "Width",
			"de": "Breite"
		},
		"iKnobHeight": {
			"en": "Height",
			"de": "Höhe"
		},
		"iBorderRadius": {
			"en": "Border radius",
			"de": "Rundung"
		},
		"iKnobBorderRadius": {
			"en": "Border radius",
			"de": "Rundung"
		},
		"iKnobOffset": {
			"en": "Offset",
			"de": "Versatz"
		},
		"iBackgroundColor": {
			"en": "Color",
			"de": "Farbe"
		},
		"iBackgroundColorActive": {
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iKnobBackgroundColor": {
			"en": "Color",
			"de": "Farbe"
		},
		"iKnobBackgroundColorActive": {
			"en": "Color active",
			"de": "Farbe Aktiv"
		},
		"iSwitchSpacing": {
			"en": "Spacing",
			"de": "Abstand"
		},
		"iSwitchTextSpacing": {
			"en": "Text spacing",
			"de": "Textabstand"
		},
		"group_iBasicSwitchSwitches": {
			"en": "Switch",
			"de": "Schalter"
		},
		"iSwitchCount": {
			"en": "Count switches",
			"de": "Anzahl Schalter"
		},
		"group_iCheckboxBox": {
			"en": "Box",
			"de": "Box"
		},
		"iCheckboxCount": {
			"en": "Count boxes",
			"de": "Anzahl Boxen"
		},
		"iCheckboxOrientation": {
			"en": "Orientation",
			"de": "Ausrichtung"
		},
		"iCheckboxSpacing": {
			"en": "Spacing",
			"de": "Abstand"
		},
		"iWidth": {
			"en": "Width",
			"de": "Breite"
		},
		"iHeight": {
			"en": "Height",
			"de": "Höhe"
		},
		"iCheckboxIcon": {
			"en": "Icon",
			"de": "Icon"
		},
		"iIconCheck": {
			"en": "Check",
			"de": "Haken"
		},
		"iIconCross": {
			"en": "Cross",
			"de": "Kreuz"
		},
		"iIconDot": {
			"en": "Dot",
			"de": "Punkt"
		},
		"iColorIcon": {
			"en": "Color icon",
			"de": "Farbe Icon"
		},
		//#endregion

		//#region Color Picker
		"iColorPickerColor1-oid": {
			"en": "First value",
			"de": "Erster Wert"
		},
		"iColorPickerColor2-oid": {
			"en": "Second value",
			"de": "Zweíter Wert"
		},
		"iColorPickerColor3-oid": {
			"en": "Thrid value",
			"de": "Dritter Wert"
		},
		"iColorPickerTransparency-oid": {
			"en": "Transparency value (optional)",
			"de": "Transparenz Wert (optional)"
		},


		"iColorPickerWidth": {
			"en": "Width",
			"de": "Breite"
		},
		"iColorPickerComponentMargin": {
			"en": "Gap between sliders",
			"de": "Abstand zwischen Slider"
		},
		"iColorPickerHandleRadius": {
			"en": "Handle width",
			"de": "Breite der Regler"
		},
		"iColorPickerHandlePadding": {
			"en": "Handle padding",
			"de": "Abstand um den Reglern"
		},

		"iColorPickerFormat": {
			"en": "Color model",
			"de": "Farbmodell"
		},
		"iColorPickerLayoutDirection": {
			"en": "Layout direction",
			"de": "Ausrichtung"
		},
		"iColorPickerShowWheel": {
			"en": "Color wheel",
			"de": "Farbkreis "
		},
		"iColorPickerShowSliderHue": {
			"en": "HUE slider",
			"de": "Slider für HUE"
		},
		"iColorPickerShowSliderSaturation": {
			"en": "Saturation slider",
			"de": "Slider für Sättigung"
		},
		"iColorPickerShowSliderValue": {
			"en": "Brightness slider",
			"de": "Slider für Helligkeit"
		},
		"iColorPickerShowSliderRed": {
			"en": "Red channel slider",
			"de": "Slider für Rot-Kanal"
		},
		"iColorPickerShowSliderGreen": {
			"en": "Green channel slider",
			"de": "Slider für Grün-Kanal"
		},
		"iColorPickerShowSliderBlue": {
			"en": "Blue channel slider",
			"de": "Slider für Blau-Kanal"
		},
		"iColorPickerShowSliderAlpha": {
			"en": "Alpha slider",
			"de": "Slider für Transparenz"
		},
		"iColorPickerShowSliderKelvin": {
			"en": "Temperatur slider",
			"de": "Slider für Temperatur"
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
		"iText-TextShadowSettings": {
			"en": "<b>Text shadow</b>",
			"de": "<b>Schatten Text</b>"
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
		"iText-ViewPopUpSettings": {
			"en": "<b>PopUp</b>",
			"de": "<b>PopUp</b>"
		},
		"iText-ViewPopUpCornersSettings": {
			"en": "<b>PopUp corners</b>",
			"de": "<b>PopUp Ecken</b>"
		},
		"iText-ViewPopUpShadowSettings": {
			"en": "<b>PopUp shadow</b>",
			"de": "<b>PopUp Schatten</b>"
		},
		"iText-GridSettings": {
			"en": "<b>Grid</b>",
			"de": "<b>Grid</b>"
		},
		"iText-ClockSettings": {
			"en": "<b>Clock</b>",
			"de": "<b>Uhr</b>"
		},
		"iText-HtmlTextSettings": {
			"en": "<b>HTML/Text</b>",
			"de": "<b>HTML/Text</b>"
		},
		"iText-BasicSwitchBackgroundSettings": {
			"en": "<b>Bar</b>",
			"de": "<b>Balken</b>"
		},
		"iText-BasicSwitchKnobSettings": {
			"en": "<b>Knob</b>",
			"de": "<b>Regler</b>"
		},
		"iText-CheckboxBoxSettings": {
			"en": "<b>Checkbox</b>",
			"de": "<b>Checkbox</b>"
		},
		"iText-ColorPickerSettings": {
			"en": "<b>Color Picker</b>",
			"de": "<b>Color Picker</b>"
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

			$(".isNavigation").each(function (el) {

				let id = $(this).attr("id");
				let data = vis.widgets[id].data;
				let styles = vis.binds['vis-inventwo'].universalButtonBackgroundStyles(data);
				styles = styles.split(";");

				styles.forEach(style => {
					let s = style.split(":");
					$(this).find(".vis-inventwo-button-new").get(0).style.setProperty(s[0], s[1]);
				});

				$(this).find(".vis-inventwo-button-text").html(vis.binds['vis-inventwo'].universalButtonText(data));
				$(this).find(".vis-inventwo-button-imageContainer img").attr("src", vis.binds['vis-inventwo'].universalButtonImage(data));

			});

			$(".vis-inventwo-nav").each(function (el) {

				if ($(this).attr("data-inventwo-nav") === vis.activeView)
					$(this).css("background-color", $(this).attr("data-activecol"));
				else
					$(this).css("background-color", $(this).attr("data-col"));

			});

			$(".iUniversalNav").each(function () {
				let id = $(this).attr("id");
				let data = vis.widgets[id].data;

				if (vis.editMode) {
					data = vis.binds["vis-inventwo"].getDatapointsValues(data);
				}

				let modalContent = $(this).closest(".vis-inventwo-modal-content");

				let val = data.iValueTrue;
				if (val == undefined)
					val = true;
				else if (val == "true")
					val = true;
				else if (val == "false")
					val = false;
				else if (!isNaN(val))
					val = parseFloat(val);

				if (
					(data.iUniversalWidgetType == "Navigation" && (data.nav_view === vis.activeView ||
						(modalContent.length > 0 && modalContent.attr("data-vis-contains") == data.nav_view)))

					||

					(
						(data.iUniversalWidgetType == "Switch" || data.iUniversalWidgetType == "Background") &&
						((data.iValueType == "value" && (
								(vis.states.attr(data.oid + ".val") == val && data.iValueComparison == "equal")
								|| (vis.states.attr(data.oid + ".val") < val && data.iValueComparison == "lower")
								|| (vis.states.attr(data.oid + ".val") > val && data.iValueComparison == "greater")
								|| (vis.states.attr(data.oid + ".val") != val && data.iValueComparison == "not")))

							|| (vis.states.attr(data.oid + ".val") === true && data.iValueType == "boolean")
						)
					)


				) {
					$(this).find(".vis-widget-body").get(0).style.setProperty("--background", data.iButtonActive);
					$(this).find(".vis-widget-body").get(0).style.setProperty("--text-color", data.iTextColorActive);
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
					$(this).find(".vis-widget-body").get(0).style.setProperty("--box-shadow-col", data.iShadowColorActive);
					$(this).find(".vis-widget-body").get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColorActive);
					if (data.iImgColorTrue != "") {
						vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorTrue, data.wid);
					} else {
						if (data.iImgColorInvertTrue) {
							$(this).find(".vis-inventwo-img").css("filter", "invert(1)");
						} else {
							$(this).find(".vis-inventwo-img").css("filter", "");
						}
					}
				} else {
					$(this).find(".vis-widget-body").get(0).style.setProperty("--background", data.iButtonCol);
					$(this).find(".vis-widget-body").get(0).style.setProperty("--text-color", data.iTextColor);
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
					$(this).find(".vis-widget-body").get(0).style.setProperty("--box-shadow-col", data.iShadowColor);
					$(this).find(".vis-widget-body").get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColor);

					if (data.iImgColorFalse != "") {
						vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorFalse, data.wid);
					} else {
						if (data.iImgColorInvertFalse) {
							$(this).find(".vis-inventwo-img").css("filter", "invert(1)");
						} else {
							$(this).find(".vis-inventwo-img").css("filter", "");
						}
					}
				}

			});

			$(".iMultiNav").each(function () {
				let id = $(this).attr("id");
				let data = vis.widgets[id].data;
				let stateFound = false;
				let hasViewCheck = false;

				let modalContent = $(this).closest(".vis-inventwo-modal-content");

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

					if ((data["iCheckType" + i] == "iCheckDefault" && data.iUniversalWidgetType == "Navigation")
						|| data["iCheckType" + i] == "iCheckView") {
						hasViewCheck = true;
					}

					if (
						(
							(
								(
									data["iCheckType" + i] == "iCheckDefault" && data.iUniversalWidgetType == "Navigation"
								)
								||

								data["iCheckType" + i] == "iCheckView"
							)
							&&
							(
								data["iView" + i] === vis.activeView
								||
								(
									modalContent.length > 0 && modalContent.attr("data-vis-contains") === data["iView" + i]
								)
							)
						)

						||

						(((data["iCheckType" + i] == "iCheckDefault" && data.iUniversalWidgetType != "Navigation") || data["iCheckType" + i] == "iCheckDpValue") &&
							data["oid" + i] != undefined &&
							((vis.states.attr(data["oid" + i] + ".val") == val && data["iValueComparison" + i] == "equal")
								|| (vis.states.attr(data["oid" + i] + ".val") < val && data["iValueComparison" + i] == "lower")
								|| (vis.states.attr(data["oid" + i] + ".val") > val && data["iValueComparison" + i] == "greater")
								|| (vis.states.attr(data["oid" + i] + ".val") != val && data["iValueComparison" + i] == "not"))
						)


					) {
						stateFound = true;
						// $(this).find(".vis-inventwo-button-new").css("background", data["iButtonActiveM" + i]);
						$(this).find(".vis-widget-body").get(0).style.setProperty("--background", data["iButtonActiveM" + i]);
						$(this).find(".vis-widget-body").get(0).style.setProperty("--text-color", data["iTextColorActive" + i]);
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
						if (data["iImgColorTrue" + i] != "") {
							vis.binds["vis-inventwo"].getImgColorFilter(data["iImgColorTrue" + i], data.wid);
						} else {
							if (data["iImgColorInvert" + i]) {
								$(this).find(".vis-inventwo-img").css("filter", "invert(1)");
							} else {
								$(this).find(".vis-inventwo-img").css("filter", "");
							}
						}

						break;
					}
				}
				if (!stateFound && hasViewCheck) {
					// $(this).find(".vis-inventwo-button-new").css("background", data.iButtonCol);
					$(this).find(".vis-widget-body").get(0).style.setProperty("--background", data.iButtonCol);
					$(this).find(".vis-widget-body").get(0).style.setProperty("--text-color", data.iTextColor);
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

					if (data.iImgColorFalse != "") {
						vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorFalse, data.wid);
					} else {
						if (data.iImgColorInvert) {
							$(this).find(".vis-inventwo-img").css("filter", "invert(1)");
						} else {
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
			$this.parent().on("click touchend", function (e) {
				if (e.type == 'touchend') {
					$(this).off('click');
					$(this).off('mouseenter');
				}

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
						if (typeof valTrue != "boolean" && !isNaN(valTrue))
							valTrue = parseFloat(valTrue);

						vis.setValue(oid, valTrue);
					} else {
						if (typeof valFalse != "boolean" && !isNaN(valFalse))
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

	addViewPopup: function (el, data, type) {
		let visContainer = $('#vis_container .vis-view[data-view="' + vis.activeView + '"]');

		let borderRadius = data.iPopUpCornerRadiusUL + "px " +
			data.iPopUpCornerRadiusUR + "px " +
			data.iPopUpCornerRadiusLR + "px " +
			data.iPopUpCornerRadiusLL + "px";

		let shadow = data.iPopUpShadowXOffset + "px " + data.iPopUpShadowYOffset + "px " + data.iPopUpShadowBlur + "px " + data.iPopUpShadowSpread + "px " + data.iPopUpShadowColor;

		let showTitlebar = "flex";
		if (data.iPopUpShowTitle == false) {
			showTitlebar = "none";
		}

		let modalPosition = "";
		let modalWindowStyle = "";

		if (!isNaN(data.iPopUpPositionX)) {
			data.iPopUpPositionX += "px";
		}
		if (!isNaN(data.iPopUpPositionY)) {
			data.iPopUpPositionY += "px";
		}

		switch (data.iPopUpPosition) {
			case "left":
				modalPosition = "justify-content: flex-start; align-items: center;";
				break;
			case "right":
				modalPosition = "justify-content: flex-end; align-items: center;";
				break;
			case "top":
				modalPosition = "justify-content: center; align-items: flex-start;";
				break;
			case "bottom":
				modalPosition = "justify-content: center; align-items: flex-end;";
				break;
			case "center":
				modalPosition = "justify-content: center; align-items: center;";
				break;
			case "custom":
				modalPosition = "";
				modalWindowStyle = "position: absolute; left: " + data.iPopUpPositionX + "; top: " + data.iPopUpPositionY + ";";
				break;
		}

		let modalWidth = data.iPopUpWidth;
		let modalHeight = data.iPopUpHeight;

		if (!isNaN(modalWidth)) {
			modalWidth += "px";
		}
		if (!isNaN(modalHeight)) {
			modalHeight += "px";
		}

		let scrollX = "hidden";
		let scrollY = "hidden";

		if (data.iPopUpScrollX) {
			scrollX = "scroll";
		}
		if (data.iPopUpScrollY) {
			scrollY = "scroll";
		}

		let modal = `
						<div id="vis-inventwo-modal-` + data.wid + `" 
							 style="` + modalPosition + `"
							 class="vis-inventwo-modal">
							<div class="vis-inventwo-modal-window vis-widget-dialog" 
								 style="width: ` + modalWidth + `; 
								 		height: ` + modalHeight + `;
								 		background: ` + data.iPopUpBackground + `;
								 		border-radius: ` + borderRadius + `; 
								 		box-shadow: ` + shadow + `; ` + modalWindowStyle + `">
								<div class="vis-inventwo-modal-titlebar" 
									 style="display: ` + showTitlebar + `; 
									 		height: calc(` + data.iPopUpHeightTitle + `px - 10px); 
									 		font-size: ` + data.iPopUpTitleSize + `px;">
									<span class="vis-inventwo-modal-title" 
										  style="color: ` + data.iPopUpTitleColor + `;">
										` + data.iPopUpTitle + `
									</span>
									<div class="vis-inventwo-modal-closebtn"
										 style="color: ` + data.iPopUpTitleColor + `;
										 	    background: ` + data.iPopUpCloseBtnColor + `;">X</div>
								</div>
								<div class="vis-inventwo-modal-content vis-view-container" 
									 style="overflow-x: ` + scrollX + `; overflow-y: ` + scrollY + `;"  
									 data-vis-contains="` + data.nav_view + `">
								
								</div>
							</div>
						</div>
					`;

		visContainer.append(modal);

		let modalContent = $('#vis-inventwo-modal-' + data.wid + ' .vis-inventwo-modal-content');

		modalContent.html("");

		if (!vis.views[data.nav_view]) {
			modalContent.html("View not found");
		} else if (data.nav_view == vis.activeView) {
			modalContent.html("Cannot add current view to popup");
		} else {
			vis.renderView(data.nav_view, data.nav_view, false, function (_view) {
				$('#visview_' + _view).appendTo(modalContent).show();
				vis.binds["vis-inventwo"].iUpdateNavigations(0, false);
			});
		}

		let moved2 = false;
		let moved3 = false;
		let moved4 = false;

		let closeTimeout = null;

		function closePopUp() {
			if (closeTimeout != null) {
				clearTimeout(closeTimeout);
				closeTimeout = null;
			}
			vis.destroyUnusedViews();
			$('#vis-inventwo-modal-' + data.wid).remove();
		}

		if (data.iPopUpCloseAfterSeconds > 0) {
			closeTimeout = setTimeout(function () {
				closePopUp();
			}, data.iPopUpCloseAfterSeconds * 1000);
		}

		if (data["iPopUpCloseDp-oid"] != "") {

			vis.states.bind(data["iPopUpCloseDp-oid"] + ".val", function (e, newVal, oldVal) {
				if (data.iPopUpCloseDpValue == "true") {
					data.iPopUpCloseDpValue = true;
				} else if (data.iPopUpCloseDpValue == "false") {
					data.iPopUpCloseDpValue = false;
				}

				// if (Math.floor(new Date(vis.states.attr(data["iPopUpCloseDp-oid"] + ".ts")).getTime() / 1000) == Math.floor(Date.now() / 1000) &&
				// 	newVal == data.iPopUpCloseDpValue) {
				// 	closePopUp();
				// }
				if (newVal == data.iPopUpCloseDpValue) {
					closePopUp();
				}
			});
		}

		if (data.iPopUpPreventClickOutside == false) {
			$('#vis-inventwo-modal-' + data.wid).on("click touchend", function () {
				if (vis.detectBounce(this)) return;
				if (moved2) return;

				closePopUp();
				event.preventDefault();
			}).on("touchmove", function () {
				moved2 = true;
			}).on("touchstart", function () {
				moved2 = false;
			});
		}

		$(".vis-inventwo-modal-closebtn").on("click touchend", function () {
			if (vis.detectBounce(this)) return;
			if (moved3) return;

			closePopUp();
			event.preventDefault();
		}).on("touchmove", function () {
			moved3 = true;
		}).on("touchstart", function () {
			moved3 = false;
		});

		$('#vis-inventwo-modal-' + data.wid + ' *').on("click touchend", function () {
			if (vis.detectBounce(this)) return;
			if (moved4) return;

			// event.preventDefault();
			event.stopPropagation();
		}).on("touchmove", function () {
			moved4 = true;
		}).on("touchstart", function () {
			moved4 = false;
		});
	},

	//Navigation Funktion - Wechsel der View
	handleNavigation: function (el, data, type) {

		let _this = this;

		if (!vis.editMode && data.nav_view) {
			var $this = $(el);
			var moved = false;


			$this.parent().on("click touchend", function (e) {
				// Protect against two events
				if (vis.detectBounce(this)) return;
				if (moved) return;

				if (data.iUniversalWidgetType == undefined || data.iUniversalWidgetType == "Navigation") {

					let modalContent = $this.closest(".vis-inventwo-modal-content");
					if (data.iUniversalWidgetType != undefined && modalContent.length > 0) {
						modalContent = $(modalContent[0]);

						modalContent.html("");

						if (!vis.views[data.nav_view]) {
							modalContent.html("View not found");
						} else if (data.nav_view == vis.activeView) {
							modalContent.html("Cannot add current view to popup");
						}

						vis.renderView(data.nav_view, data.nav_view, true, function (_view) {
							modalContent.attr('data-vis-contains', _view);
							$('#visview_' + _view).appendTo(modalContent).show();

							vis.binds["vis-inventwo"].iUpdateNavigations(0, false);
						});
					} else {
						vis.changeView(
							data.nav_view,
							data.nav_view,
							{
								effect: data.hide_effect,
								options: data.hide_duration,
								duration: data.hide_options,
							},
							{
								effect: data.hide_effect,
								options: data.hide_duration,
								duration: data.hide_options,
							},
							true
						);
					}

				} else if (data.iUniversalWidgetType == "ViewInPopup") {
					_this.addViewPopup(el, data, type);
				}
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

				// Auskommentiert da navChangeCallbacks die Funktion bereits aufruft
				//vis.binds["vis-inventwo"].iUpdateNavigations(data.iNavWait, true);


				e.preventDefault();

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

				let elem = $this.find(".vis-widget-body")

				let val = vis.binds["vis-inventwo"].convertValue(data.value);

				let oldValue = vis.states[oid + ".val"];

				vis.setValue(oid, val);

				if (data.iStateResponseTime > 0) {

					if (type == "universal" || type == "clock_analog" || type == "clock_digital") {

						let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data.iBorderColorActive;

						elem.get(0).style.setProperty("--background", data.iButtonActive);
						elem.get(0).style.setProperty("--box-shadow-col", data.iShadowColorActive);
						elem.get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColorActive);
						elem.get(0).style.setProperty("--background-border", border);
						elem.get(0).style.setProperty("--content-image-color-filter", data.iImgColorTrue);

						if (data.iImageTrue != undefined) {
							$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageTrue);
							vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorTrue, data.wid);
						}
						if (data.iTextTrue != undefined)
							$this.find(".vis-inventwo-button-text").html(data.iTextTrue);

						setTimeout(function () {
							let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data.iBorderColor;

							elem.get(0).style.setProperty("--background", data.iButtonCol);
							elem.get(0).style.setProperty("--box-shadow-col", data.iShadowColor);
							elem.get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColor);
							elem.get(0).style.setProperty("--background-border", border);
							elem.get(0).style.setProperty("--content-image-color-filter", data.iImgColorFalse);

							if (data.iImageFalse != undefined) {
								$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
								vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorFalse, data.wid);
							}
							if (data.iTextFalse != undefined)
								$this.find(".vis-inventwo-button-text").html(data.iTextFalse);
						}, data.iStateResponseTime);


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
									&& (vis.states.attr(data["oid" + i] + ".val") === val && data["iValueComparison" + i] == "equal")
									|| (vis.states.attr(data["oid" + i] + ".val") < val && data["iValueComparison" + i] == "lower")
									|| (vis.states.attr(data["oid" + i] + ".val") > val && data["iValueComparison" + i] == "greater")
									|| (vis.states.attr(data["oid" + i] + ".val") != val && data["iValueComparison" + i] == "not")
								)
								||
								(data.iUniversalWidgetType == "Navigation" && data["iView" + i] === vis.activeView)) {

								let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data["iBorderColorActiveM" + i];

								elem.get(0).style.setProperty("--background", data["iButtonActiveM" + i]);
								elem.get(0).style.setProperty("--box-shadow-col", data["iShadowColorActiveM" + i]);
								elem.get(0).style.setProperty("--box-shadow-inner-col", data["iShadowInnerColorActiveM" + i]);
								elem.get(0).style.setProperty("--background-border", border);
								elem.get(0).style.setProperty("--content-image-color-filter", data["iImgColorTrue" + i]);

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

						if (index == -1 && data.iStateResponseTime > 0) {
							let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data["iBorderColorActiveM1"];

							elem.get(0).style.setProperty("--background", data["iButtonActiveM1"]);
							elem.get(0).style.setProperty("--box-shadow-col", data["iShadowColorActiveM1"]);
							elem.get(0).style.setProperty("--box-shadow-inner-col", data["iShadowInnerColorActiveM1"]);
							elem.get(0).style.setProperty("--background-border", border);
							elem.get(0).style.setProperty("--content-image-color-filter", data["iImgColorTrue1"]);

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
									let val = data["iValue" + i];
									if (val == undefined)
										val = true;
									else if (val == "true")
										val = true;
									else if (val == "false")
										val = false;
									else if (!isNaN(val))
										val = parseFloat(val);

									if ((data.iUniversalWidgetType != "Navigation" && vis.states.attr(data["oid" + i] + ".val") == val) || (data.iUniversalWidgetType == "Navigation" && data["iView" + i] === vis.activeView)) {
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

								let border = data.iBorderSize + "px " + data.iBorderStyle + " " + borderCol;

								elem.get(0).style.setProperty("--background", backCol);
								elem.get(0).style.setProperty("--box-shadow-col", shadowCol);
								elem.get(0).style.setProperty("--box-shadow-inner-col", shadowColInner);
								elem.get(0).style.setProperty("--background-border", border);
								elem.get(0).style.setProperty("--content-image-color-filter", imgColor);

								$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
								vis.binds["vis-inventwo"].getImgColorFilter(imgColor, data.wid);

								$this.find(".vis-inventwo-button-text").html(txt);

							}, data.iStateResponseTime);
						}


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

	sendHttp: function (el, data, type) {
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

				let elem = $this.find(".vis-widget-body")

				let val = vis.binds["vis-inventwo"].convertValue(data.value);

				let oldValue = vis.states[oid + ".val"];

				// vis.setValue(oid, val);
				// $.ajax({
				// 	url: data.value,
				// 	type:'POST',
				// 	crossDomain: true,
				// 	dataType: "jsonp",
				// 	data: ""
				// })
				// 	.done(function (res) {
				// 		console.log(res);
				// 	});


				if (data.iHttpType == "iSend") {
					vis.conn.httpGet(data.value);
				} else if (data.iHttpType == "iOpenUrl") {
					window.open(data.value, '_self');
				} else if (data.iHttpType == "iOpenUrlNewTab") {
					window.open(data.value, '_blank').focus();
				}

				if (data.iStateResponseTime > 0) {

					if (type == "universal" || type == "clock_analog" || type == "clock_digital") {

						let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data.iBorderColorActive;

						elem.get(0).style.setProperty("--background", data.iButtonActive);
						elem.get(0).style.setProperty("--box-shadow-col", data.iShadowColorActive);
						elem.get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColorActive);
						elem.get(0).style.setProperty("--background-border", border);
						elem.get(0).style.setProperty("--content-image-color-filter", data.iImgColorTrue);

						if (data.iImageTrue != undefined) {
							$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageTrue);
							vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorTrue, data.wid);
						}
						if (data.iTextTrue != undefined)
							$this.find(".vis-inventwo-button-text").html(data.iTextTrue);

						setTimeout(function () {
							let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data.iBorderColor;

							elem.get(0).style.setProperty("--background", data.iButtonCol);
							elem.get(0).style.setProperty("--box-shadow-col", data.iShadowColor);
							elem.get(0).style.setProperty("--box-shadow-inner-col", data.iShadowInnerColor);
							elem.get(0).style.setProperty("--background-border", border);
							elem.get(0).style.setProperty("--content-image-color-filter", data.iImgColorFalse);

							if (data.iImageFalse != undefined) {
								$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
								vis.binds["vis-inventwo"].getImgColorFilter(data.iImgColorFalse, data.wid);
							}
							if (data.iTextFalse != undefined)
								$this.find(".vis-inventwo-button-text").html(data.iTextFalse);
						}, data.iStateResponseTime);


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
									&& (vis.states.attr(data["oid" + i] + ".val") === val && data["iValueComparison" + i] == "equal")
									|| (vis.states.attr(data["oid" + i] + ".val") < val && data["iValueComparison" + i] == "lower")
									|| (vis.states.attr(data["oid" + i] + ".val") > val && data["iValueComparison" + i] == "greater")
									|| (vis.states.attr(data["oid" + i] + ".val") != val && data["iValueComparison" + i] == "not")
								)
								||
								(data.iUniversalWidgetType == "Navigation" && data["iView" + i] === vis.activeView)) {

								let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data["iBorderColorActiveM" + i];

								elem.get(0).style.setProperty("--background", data["iButtonActiveM" + i]);
								elem.get(0).style.setProperty("--box-shadow-col", data["iShadowColorActiveM" + i]);
								elem.get(0).style.setProperty("--box-shadow-inner-col", data["iShadowInnerColorActiveM" + i]);
								elem.get(0).style.setProperty("--background-border", border);
								elem.get(0).style.setProperty("--content-image-color-filter", data["iImgColorTrue" + i]);

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

						if (index == -1 && data.iStateResponseTime > 0) {
							let border = data.iBorderSize + "px " + data.iBorderStyle + " " + data["iBorderColorActiveM1"];

							elem.get(0).style.setProperty("--background", data["iButtonActiveM1"]);
							elem.get(0).style.setProperty("--box-shadow-col", data["iShadowColorActiveM1"]);
							elem.get(0).style.setProperty("--box-shadow-inner-col", data["iShadowInnerColorActiveM1"]);
							elem.get(0).style.setProperty("--background-border", border);
							elem.get(0).style.setProperty("--content-image-color-filter", data["iImgColorTrue1"]);

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
									let val = data["iValue" + i];
									if (val == undefined)
										val = true;
									else if (val == "true")
										val = true;
									else if (val == "false")
										val = false;
									else if (!isNaN(val))
										val = parseFloat(val);

									if ((data.iUniversalWidgetType != "Navigation" && vis.states.attr(data["oid" + i] + ".val") == val) || (data.iUniversalWidgetType == "Navigation" && data["iView" + i] === vis.activeView)) {
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

								let border = data.iBorderSize + "px " + data.iBorderStyle + " " + borderCol;

								elem.get(0).style.setProperty("--background", backCol);
								elem.get(0).style.setProperty("--box-shadow-col", shadowCol);
								elem.get(0).style.setProperty("--box-shadow-inner-col", shadowColInner);
								elem.get(0).style.setProperty("--background-border", border);
								elem.get(0).style.setProperty("--content-image-color-filter", imgColor);

								$this.find(".vis-inventwo-button-imageContainer img").attr("src", data.iImageFalse);
								vis.binds["vis-inventwo"].getImgColorFilter(imgColor, data.wid);

								$this.find(".vis-inventwo-button-text").html(txt);

							}, data.iStateResponseTime);
						}


					}
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

		let dpIsArray = false;
		let dpIsArrayWithBrackets = false;

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
										if (dpIsArray == true) {
											output = output.split(",");
										} else if (dpIsArrayWithBrackets == true) {
											output = "[" + output + "]";
										}
										break;
								}
								if (data.iColorSliderType != "RGB")
									vis.setValue(oid, output);
								else {
									vis.setValue(data["iIdRed-oid"], rgb[0]);
									vis.setValue(data["iIdGreen-oid"], rgb[1]);
									vis.setValue(data["iIdBlue-oid"], rgb[2]);
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
								let output = "";
								switch (data.iColorSliderType) {
									case "HEX":
										output = hex;
										break;
									case "RGB":
										break;
									case "CIE":
										output = vis.binds['vis-inventwo'].cieConvert(rgb, "cie");
										if (dpIsArray == true) {
											output = output.split(",");
										} else if (dpIsArrayWithBrackets == true) {
											output = "[" + output + "]";
										}
										break;
								}
								if (data.iColorSliderType != "RGB")
									vis.setValue(oid, output);
								else {
									vis.setValue(data["iIdRed-oid"], rgb[0]);
									vis.setValue(data["iIdGreen-oid"], rgb[1]);
									vis.setValue(data["iIdBlue-oid"], rgb[2]);
								}

								break;
						}
					}
				}
			}
		}, options);


		$this.slider(settings)
			.each(function () {
				if (type == "normal" && data.iShowSteps) {
					var opt = $(this).data().uiSlider.options;

					// Get the number of possible values
					let vals = (opt.max - opt.min) / data.iVisibleStepVal;

					let sliderHeight = parseInt(data.iSliderHeight) > parseInt(data.iSliderKnobSize) ? parseInt(data.iSliderHeight) : parseInt(data.iSliderKnobSize)

					// Space out values
					for (let i = 0; i <= vals; i++) {

						let label = null;
						if (options.orientation == "horizontal") {
							let offset = parseInt(data.iMinVal) != 0 ? parseInt(data.iMinVal) : 0;

							let val = data.iInvertMinMax ? opt.max - i * data.iVisibleStepVal : i * parseInt(data.iVisibleStepVal) + offset;
							label = $('<span class="vis-inventwo-slider-step-label">' + val + '</span>')
								.css('left', (i / vals * 100) + '%')
								.css('margin-top', sliderHeight / 2 + 10 + 'px')
								.css('font-size', data.iStepTextSize + "px");
						} else {
							let offset = parseInt(data.iMinVal) != 0 ? parseInt(data.iMinVal) : 0;

							let val = data.iInvertMinMax ? i * parseInt(data.iVisibleStepVal) + offset : opt.max - i * parseInt(data.iVisibleStepVal);
							label = $('<span class="vis-inventwo-slider-step-label">' + val + '</span>')
								.css('top', (i / vals * 100) + '%')
								.css('margin-left', sliderHeight / 2 + 10 + 'px')
								.css('font-size', data.iStepTextSize + "px");
						}

						$(this).append(label);

					}
				}
			});

		let leftSpace = 0;
		leftSpace = parseFloat(data.iSliderHeight) / 2 - parseFloat(data.iSliderKnobSize) / 2;

		function isJson(string) {
			try {
				JSON.parse(string);
			} catch (e) {
				return false;
			}
			return true;
		}

		function updateSlider() {

			$this.slider();

			function setColor(rgb) {
				if (rgb == null) {
					rgb = [255, 0, 0];
					val = "#ff0000";
				} else {
					val = vis.binds['vis-inventwo'].rgbToHex(rgb);
				}

				$this.find(".ui-slider-handle").css("background", val);
				$this.slider("option", "value", rgbToDecimal(rgb));
			}

			if (oid == undefined) {
				return;
			}

			let val = vis.states.attr(oid + ".val");

			switch (type) {
				case "normal":
					val = parseFloat(val);
					if (isNaN(val)) {
						val = min;
					}
					$this.find(".ui-slider-handle").css("background", data.iSliderKnobColor);
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

							let r = vis.states.attr(data["iIdRed-oid"] + ".val");
							let g = vis.states.attr(data["iIdGreen-oid"] + ".val");
							let b = vis.states.attr(data["iIdBlue-oid"] + ".val");

							if (r != undefined && g != undefined && b != undefined) {
								rgb = [r, g, b];
								setColor(rgb);
							} else {
								rgb = [255, 0, 0];
							}

							break;
						case "CIE":
							if (isJson(val)) {
								let jsonVal = JSON.parse(val);
								val = jsonVal.join(",");
								dpIsArrayWithBrackets = true;
							} else if (typeof val == "object") {
								val = val.join(",");
								dpIsArray = true;
							}
							rgb = vis.binds['vis-inventwo'].cieConvert(val, "rgb");
							setColor(rgb);
							break;
					}
					break;
			}

		}

		updateSlider();

		$this.css("transform", "rotate(" + data.iSliderRotation + "deg)");
		$this.find(".ui-slider-handle").css("width", data.iSliderKnobSize + "px");
		$this.find(".ui-slider-handle").css("height", data.iSliderKnobSize + "px");
		$this.find(".ui-slider-handle").css("border", "0px");
		$this.find(".ui-slider-handle").css("border-radius", data.iSliderKnobCorners + "%");
		$this.find(".ui-slider-handle").css("box-shadow", "0 0 5px 1px black");
		if (options.orientation === "horizontal") {
			$this.find(".ui-slider-handle").css("margin-left", "-" + (data.iSliderKnobSize / 2) + "px");
			let topPos = ((data.iSliderKnobSize - data.iSliderHeight) / 2) * (-1);
			$this.find(".ui-slider-handle").css("top", topPos + "px");
		} else {
			$this.find(".ui-slider-handle").css("left", leftSpace + "px");
			$this.find(".ui-slider-handle").css("margin-bottom", "-" + (data.iSliderKnobSize / 2) + "px");
		}

		vis.states.bind(oid + ".val", function () {
			if (!isDragging) {
				updateSlider();
			}
		});

		if (type == "rgb" && data.iColorSliderType == "RGB") {
			vis.states.bind(data["iIdRed-oid"] + ".val", function () {
				if (!isDragging) {
					updateSlider();
				}
			});
			vis.states.bind(data["iIdGreen-oid"] + ".val", function () {
				if (!isDragging) {
					updateSlider();
				}
			});
			vis.states.bind(data["iIdBlue-oid"] + ".val", function () {
				if (!isDragging) {
					updateSlider();
				}
			});
		}


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

		if (data.iTblSortAttr != undefined && data.iTblSortAttr != "") {
			sortColumn = data.iTblSortAttr;
			sortOrder = data.iTblSortOrder;
		}

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
					let validJson = true;

					try {
						if (typeof jd === "string") {
							if (jd.trim().charAt(0) == "{") {
								jd = "[" + jd + "]";
							}
							jsondata = JSON.parse(jd);
						} else if (typeof jd === "object") {
							jsondata = [jd];
						} else {
							jsondata = [].slice.call(jd);
						}
					} catch (e) {
						console.log("ERROR ON JSON");
						console.log(e);
						validJson = false;
					}

					if (validJson) {

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

										thStyle += "text-align: " + data["iTblHeadTextAlign" + (i + 1)] + ";";
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
								let tdStyles = [];
								if (e % 2 === 0) {
									tdColor = data.iTblRowUnevenColor;
									tdTextColor = data.iTblRowUnevenTextColor;
								} else {
									tdColor = data.iTblRowEvenColor;
									tdTextColor = data.iTblRowEvenTextColor;
								}
								let cells = [];
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

										if (cellValue !== "") {
											switch (data["iTblCellFormat" + (i + 1)]) {
												case "normal":
													let val = "";
													val += data["iColPreText" + (i + 1)] != undefined ? data["iColPreText" + (i + 1)] : "";
													val += cellValue;
													val += data["iColAfterText" + (i + 1)] != undefined ? data["iColAfterText" + (i + 1)] : "";
													cellValue = val;
													break;
												case "datetime":
													if (cellValue != 0) {
														if (data["iTblCellDatetimeFormat" + (i + 1)] != "") {
															let datetime = null;
															if (isNaN(cellValue) == true) {
																datetime = new Date(cellValue.trim()).getTime();
															} else {
																datetime = parseInt(cellValue);
															}

															if (datetime.toString().length == 10)
																datetime = parseInt(datetime + "000");
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

													if (dpContent != undefined && dpContent != "") {
														try {
															thresholds = JSON.parse(dpContent);
														} catch (e) {
															console.log("error on parse dp");
															break;
														}
													} else if (data["iTblCellThresholdsText" + (i + 1)] != undefined && data["iTblCellThresholdsText" + (i + 1)] != "") {
														try {
															thresholds = JSON.parse(data["iTblCellThresholdsText" + (i + 1)]);
														} catch (e) {
															console.log("error on parse text");
															break;
														}
													}

													let preAfterText = "";
													preAfterText += data["iColPreText" + (i + 1)] != undefined ? data["iColPreText" + (i + 1)] : "";
													preAfterText += cellValue;
													preAfterText += data["iColAfterText" + (i + 1)] != undefined ? data["iColAfterText" + (i + 1)] : "";

													if (thresholds.length > 0) {
														thresholds.forEach(t => {
															if (t.comparator != undefined && t.comparator != "" && t.value != undefined) {
																let comparasionTable = {
																	'>': function (val1, val2) {
																		return val1 > val2
																	},
																	'<': function (val1, val2) {
																		return val1 < val2
																	},
																	'==': function (val1, val2) {
																		return val1 == val2
																	},
																	'>=': function (val1, val2) {
																		return val1 >= val2
																	},
																	'<=': function (val1, val2) {
																		return val1 <= val2
																	},
																	'!=': function (val1, val2) {
																		return val1 != val2
																	},
																}

																let styles = [];

																if (comparasionTable[t.comparator](parseFloat(cellValue), parseFloat(t.value))) {
																	if (t.color !== undefined) {
																		styles.push("color: " + t.color);
																	}
																	if (t.background !== undefined) {
																		console.log("has background");
																		tdColor = t.background;
																	}
																	cellValue = '<span style="' + styles.join(';') + '">' + preAfterText + '</span>';
																}

															}
														});
													} else {
														cellValue = preAfterText;
													}


													break;
												case "boolean":
													if (data["iTblCellBooleanCheckbox" + (i + 1)]) {
														let valBoolean = false;
														if (cellValue == true || cellValue == "true" || cellValue == "1" || cellValue == 1)
															valBoolean = true;

														let checkboxSize = 25;

														if (valBoolean === true) {
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

										cells.push("<td style='width: " + colWidth + ";padding-bottom: " + data.iRowSpacing + "px;padding-top: " + data.iRowSpacing + "px; " + border + " text-align: " + data["iTblTextAlign" + (i + 1)] + ";" + tdStyles.join(';') + "'>" + cellValue + "</td>");
									}
								}
								output += "<tr style='background: " + tdColor + "; color: " + tdTextColor + "'>";
								output += cells.join("");
								output += "</tr>";
							}
							output += "</tbody>";
						}


						output += "</table>";

						if (noData == true) {
							output = "No entries in JSON and no dummy row";
						}
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

				/*if(oid == undefined && view != undefined){
					vis.changeView(view, view);
				}
				else if(oid != undefined){*/
				val = vis.binds["vis-inventwo"].convertValue(val);
				if (!isNaN(val)) {
					val = parseFloat(val);
				}

				vis.setValue(oid, val);
				// }

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
				vis.hideShowAttr("iHttpType", false);

				vis.hideShowAttr("hide_effect", false);
				vis.hideShowAttr("hide_duration", false);
				vis.hideShowAttr("hide_options", false);

				vis.hideShowAttr("iText-ViewPopUpSettings", false);
				vis.hideShowAttr("iPopUpBackground", false);
				vis.hideShowAttr("iPopUpPreventClickOutside", false);
				vis.hideShowAttr("iPopUpShowTitle", false);
				vis.hideShowAttr("iPopUpTitle", false);
				vis.hideShowAttr("iPopUpTitleColor", false);
				vis.hideShowAttr("iPopUpCloseBtnColor", false);
				vis.hideShowAttr("iPopUpWidth", false);
				vis.hideShowAttr("iPopUpHeight", false);
				vis.hideShowAttr("iPopUpHeightTitle", false);
				vis.hideShowAttr("iPopUpTitleSize", false);
				vis.hideShowAttr("iPopUpPositionX", false);
				vis.hideShowAttr("iPopUpPositionY", false);
				vis.hideShowAttr("iPopUpScrollX", false);
				vis.hideShowAttr("iPopUpScrollY", false);
				vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
				vis.hideShowAttr("iPopUpCloseDp-oid", false);
				vis.hideShowAttr("iPopUpCloseDpValue", false);
				vis.hideShowAttr("iPopUpOpenDpValue", false);
				vis.hideShowAttr("iPopUpPosition", false);
				vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
				vis.hideShowAttr("iPopUpCornerRadiusUL", false);
				vis.hideShowAttr("iPopUpCornerRadiusUR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLL", false);
				vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
				vis.hideShowAttr("iPopUpShadowXOffset", false);
				vis.hideShowAttr("iPopUpShadowYOffset", false);
				vis.hideShowAttr("iPopUpShadowBlur", false);
				vis.hideShowAttr("iPopUpShadowSpread", false);
				vis.hideShowAttr("iPopUpShadowColor", false);

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, true);
				}
			} else if (val == "State" || val == "HTTP") {
				vis.hideShowAttr("iNavWait", false);
				vis.hideShowAttr("iValueType", false);
				vis.hideShowAttr("iValueTypeInfo", false);
				vis.hideShowAttr("iValueFalse", false);
				vis.hideShowAttr("iValueTrue", false);
				vis.hideShowAttr("value", true);
				vis.hideShowAttr("iStateResponseTime", true);
				vis.hideShowAttr("nav_view", false);
				vis.hideShowAttr("iIncreaseDecrease", false);
				vis.hideShowAttr("iHttpType", false);

				vis.hideShowAttr("hide_effect", false);
				vis.hideShowAttr("hide_duration", false);
				vis.hideShowAttr("hide_options", false);

				vis.hideShowAttr("iText-ViewPopUpSettings", false);
				vis.hideShowAttr("iPopUpBackground", false);
				vis.hideShowAttr("iPopUpPreventClickOutside", false);
				vis.hideShowAttr("iPopUpShowTitle", false);
				vis.hideShowAttr("iPopUpTitle", false);
				vis.hideShowAttr("iPopUpTitleColor", false);
				vis.hideShowAttr("iPopUpCloseBtnColor", false);
				vis.hideShowAttr("iPopUpWidth", false);
				vis.hideShowAttr("iPopUpHeight", false);
				vis.hideShowAttr("iPopUpHeightTitle", false);
				vis.hideShowAttr("iPopUpTitleSize", false);
				vis.hideShowAttr("iPopUpPositionX", false);
				vis.hideShowAttr("iPopUpPositionY", false);
				vis.hideShowAttr("iPopUpScrollX", false);
				vis.hideShowAttr("iPopUpScrollY", false);
				vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
				vis.hideShowAttr("iPopUpCloseDp-oid", false);
				vis.hideShowAttr("iPopUpCloseDpValue", false);
				vis.hideShowAttr("iPopUpOpenDpValue", false);
				vis.hideShowAttr("iPopUpPosition", false);
				vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
				vis.hideShowAttr("iPopUpCornerRadiusUL", false);
				vis.hideShowAttr("iPopUpCornerRadiusUR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLL", false);
				vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
				vis.hideShowAttr("iPopUpShadowXOffset", false);
				vis.hideShowAttr("iPopUpShadowYOffset", false);
				vis.hideShowAttr("iPopUpShadowBlur", false);
				vis.hideShowAttr("iPopUpShadowSpread", false);
				vis.hideShowAttr("iPopUpShadowColor", false);

				if (val == "State") {
					vis.hideShowAttr("iStateResetValueTime", true);
					vis.hideShowAttr("oid", true);
					vis.hideShowAttr("iValueComparison", true);
				} else {
					vis.hideShowAttr("iStateResetValueTime", false);
					vis.hideShowAttr("oid", false);
					vis.hideShowAttr("iValueComparison", false);
					vis.hideShowAttr("iHttpType", true);
				}

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, true);
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
				vis.hideShowAttr("iHttpType", false);

				vis.hideShowAttr("hide_effect", true);
				vis.hideShowAttr("hide_duration", true);
				vis.hideShowAttr("hide_options", false);

				vis.hideShowAttr("iText-ViewPopUpSettings", false);
				vis.hideShowAttr("iPopUpBackground", false);
				vis.hideShowAttr("iPopUpPreventClickOutside", false);
				vis.hideShowAttr("iPopUpShowTitle", false);
				vis.hideShowAttr("iPopUpTitle", false);
				vis.hideShowAttr("iPopUpTitleColor", false);
				vis.hideShowAttr("iPopUpCloseBtnColor", false);
				vis.hideShowAttr("iPopUpWidth", false);
				vis.hideShowAttr("iPopUpHeight", false);
				vis.hideShowAttr("iPopUpHeightTitle", false);
				vis.hideShowAttr("iPopUpTitleSize", false);
				vis.hideShowAttr("iPopUpPositionX", false);
				vis.hideShowAttr("iPopUpPositionY", false);
				vis.hideShowAttr("iPopUpScrollX", false);
				vis.hideShowAttr("iPopUpScrollY", false);
				vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
				vis.hideShowAttr("iPopUpCloseDp-oid", false);
				vis.hideShowAttr("iPopUpCloseDpValue", false);
				vis.hideShowAttr("iPopUpOpenDpValue", false);
				vis.hideShowAttr("iPopUpPosition", false);
				vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
				vis.hideShowAttr("iPopUpCornerRadiusUL", false);
				vis.hideShowAttr("iPopUpCornerRadiusUR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLL", false);
				vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
				vis.hideShowAttr("iPopUpShadowXOffset", false);
				vis.hideShowAttr("iPopUpShadowYOffset", false);
				vis.hideShowAttr("iPopUpShadowBlur", false);
				vis.hideShowAttr("iPopUpShadowSpread", false);
				vis.hideShowAttr("iPopUpShadowColor", false);

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iValue" + i, true);
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
				vis.hideShowAttr("iHttpType", false);

				vis.hideShowAttr("hide_effect", false);
				vis.hideShowAttr("hide_duration", false);
				vis.hideShowAttr("hide_options", false);

				vis.hideShowAttr("iText-ViewPopUpSettings", false);
				vis.hideShowAttr("iPopUpBackground", false);
				vis.hideShowAttr("iPopUpPreventClickOutside", false);
				vis.hideShowAttr("iPopUpShowTitle", false);
				vis.hideShowAttr("iPopUpTitle", false);
				vis.hideShowAttr("iPopUpTitleColor", false);
				vis.hideShowAttr("iPopUpCloseBtnColor", false);
				vis.hideShowAttr("iPopUpWidth", false);
				vis.hideShowAttr("iPopUpHeight", false);
				vis.hideShowAttr("iPopUpHeightTitle", false);
				vis.hideShowAttr("iPopUpTitleSize", false);
				vis.hideShowAttr("iPopUpPositionX", false);
				vis.hideShowAttr("iPopUpPositionY", false);
				vis.hideShowAttr("iPopUpScrollX", false);
				vis.hideShowAttr("iPopUpScrollY", false);
				vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
				vis.hideShowAttr("iPopUpCloseDp-oid", false);
				vis.hideShowAttr("iPopUpCloseDpValue", false);
				vis.hideShowAttr("iPopUpOpenDpValue", false);
				vis.hideShowAttr("iPopUpPosition", false);
				vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
				vis.hideShowAttr("iPopUpCornerRadiusUL", false);
				vis.hideShowAttr("iPopUpCornerRadiusUR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLL", false);
				vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
				vis.hideShowAttr("iPopUpShadowXOffset", false);
				vis.hideShowAttr("iPopUpShadowYOffset", false);
				vis.hideShowAttr("iPopUpShadowBlur", false);
				vis.hideShowAttr("iPopUpShadowSpread", false);
				vis.hideShowAttr("iPopUpShadowColor", false);

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, true);
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
				vis.hideShowAttr("iHttpType", false);

				vis.hideShowAttr("hide_effect", false);
				vis.hideShowAttr("hide_duration", false);
				vis.hideShowAttr("hide_options", false);

				vis.hideShowAttr("iText-ViewPopUpSettings", false);
				vis.hideShowAttr("iPopUpBackground", false);
				vis.hideShowAttr("iPopUpPreventClickOutside", false);
				vis.hideShowAttr("iPopUpShowTitle", false);
				vis.hideShowAttr("iPopUpTitle", false);
				vis.hideShowAttr("iPopUpTitleColor", false);
				vis.hideShowAttr("iPopUpCloseBtnColor", false);
				vis.hideShowAttr("iPopUpWidth", false);
				vis.hideShowAttr("iPopUpHeight", false);
				vis.hideShowAttr("iPopUpHeightTitle", false);
				vis.hideShowAttr("iPopUpTitleSize", false);
				vis.hideShowAttr("iPopUpPositionX", false);
				vis.hideShowAttr("iPopUpPositionY", false);
				vis.hideShowAttr("iPopUpScrollX", false);
				vis.hideShowAttr("iPopUpScrollY", false);
				vis.hideShowAttr("iPopUpCloseAfterSeconds", false);
				vis.hideShowAttr("iPopUpCloseDp-oid", false);
				vis.hideShowAttr("iPopUpCloseDpValue", false);
				vis.hideShowAttr("iPopUpOpenDpValue", false);
				vis.hideShowAttr("iPopUpPosition", false);
				vis.hideShowAttr("iText-ViewPopUpCornersSettings", false);
				vis.hideShowAttr("iPopUpCornerRadiusUL", false);
				vis.hideShowAttr("iPopUpCornerRadiusUR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLR", false);
				vis.hideShowAttr("iPopUpCornerRadiusLL", false);
				vis.hideShowAttr("iText-ViewPopUpShadowSettings", false);
				vis.hideShowAttr("iPopUpShadowXOffset", false);
				vis.hideShowAttr("iPopUpShadowYOffset", false);
				vis.hideShowAttr("iPopUpShadowBlur", false);
				vis.hideShowAttr("iPopUpShadowSpread", false);
				vis.hideShowAttr("iPopUpShadowColor", false);

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, true);
				}
			} else if (val == "ViewInPopup") {
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
				vis.hideShowAttr("iHttpType", false);

				vis.hideShowAttr("hide_effect", false);
				vis.hideShowAttr("hide_duration", false);
				vis.hideShowAttr("hide_options", false);

				vis.hideShowAttr("iText-ViewPopUpSettings", true);
				vis.hideShowAttr("iPopUpBackground", true);
				vis.hideShowAttr("iPopUpPreventClickOutside", true);
				vis.hideShowAttr("iPopUpShowTitle", true);
				vis.hideShowAttr("iPopUpTitle", true);
				vis.hideShowAttr("iPopUpTitleColor", true);
				vis.hideShowAttr("iPopUpCloseBtnColor", true);
				vis.hideShowAttr("iPopUpWidth", true);
				vis.hideShowAttr("iPopUpHeight", true);
				vis.hideShowAttr("iPopUpHeightTitle", true);
				vis.hideShowAttr("iPopUpTitleSize", true);
				vis.hideShowAttr("iPopUpPositionX", true);
				vis.hideShowAttr("iPopUpPositionY", true);
				vis.hideShowAttr("iPopUpScrollX", true);
				vis.hideShowAttr("iPopUpScrollY", true);
				vis.hideShowAttr("iPopUpCloseAfterSeconds", true);
				vis.hideShowAttr("iPopUpCloseDp-oid", true);
				vis.hideShowAttr("iPopUpCloseDpValue", true);
				vis.hideShowAttr("iPopUpOpenDpValue", true);
				vis.hideShowAttr("iPopUpPosition", true);
				vis.hideShowAttr("iText-ViewPopUpCornersSettings", true);
				vis.hideShowAttr("iPopUpCornerRadiusUL", true);
				vis.hideShowAttr("iPopUpCornerRadiusUR", true);
				vis.hideShowAttr("iPopUpCornerRadiusLR", true);
				vis.hideShowAttr("iPopUpCornerRadiusLL", true);
				vis.hideShowAttr("iText-ViewPopUpShadowSettings", true);
				vis.hideShowAttr("iPopUpShadowXOffset", true);
				vis.hideShowAttr("iPopUpShadowYOffset", true);
				vis.hideShowAttr("iPopUpShadowBlur", true);
				vis.hideShowAttr("iPopUpShadowSpread", true);
				vis.hideShowAttr("iPopUpShadowColor", true);

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("oid" + i, true);
					vis.hideShowAttr("iValue" + i, true);
					vis.hideShowAttr("iView" + i, true);
				}
			}

			if (data.iContentType == "image") {
				vis.hideShowAttr("iImgColorInvertFalse", true);
				vis.hideShowAttr("iImgColorInvertTrue", true);
				vis.hideShowAttr("iImgRotation", true);
				vis.hideShowAttr("iFlipImage", true);
				vis.hideShowAttr("iImgBlinkFalse", true);
				vis.hideShowAttr("iImgBlinkTrue", true);
				vis.hideShowAttr("iText-ImageSettings", true);
				vis.hideShowAttr("iText-HtmlTextSettings", false);
				vis.hideShowAttr("iText-ClockSettings", false);
				vis.hideShowAttr("iClockShowSeconds", false);
				vis.hideShowAttr("iImageFalse", true);
				vis.hideShowAttr("iImageTrue", true);
				vis.hideShowAttr("iHtmlTextFieldTrue", false);
				vis.hideShowAttr("iHtmlTextFieldFalse", false);
				vis.hideShowAttr("iImgColorFalse", true);
				vis.hideShowAttr("iImgColorTrue", true);
				vis.hideShowAttr("iImgColorClockFace", false);
				vis.hideShowAttr("iImgColorHands", false);
				vis.hideShowAttr("iImgColorHandSecond", false);
				vis.hideShowAttr("iImgClockFace", false);
				vis.hideShowAttr("iImgClockHands", false);
				vis.hideShowAttr("iImgClockShowBorder", false);
				vis.hideShowAttr("iClockTimezone", false);
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("iImageTrue" + i, true);
					vis.hideShowAttr("iImgBlinkTrue" + i, true);
					vis.hideShowAttr("iImgColorInvert" + i, true);
					vis.hideShowAttr("iHtmlTextFieldTrue" + i, false);
					vis.hideShowAttr("iImgColorTrue" + i, true);
					vis.hideShowAttr("iText-ImageSettings" + i, true);
					vis.hideShowAttr("iText-HtmlTextSettings" + i, false);
				}
			} else if (data.iContentType == "clock_analog" || data.iContentType == "clock_digital") {
				vis.hideShowAttr("iImgColorInvertFalse", false);
				vis.hideShowAttr("iImgColorInvertTrue", false);
				vis.hideShowAttr("iImgRotation", false);
				vis.hideShowAttr("iFlipImage", false);
				vis.hideShowAttr("iImgBlinkFalse", false);
				vis.hideShowAttr("iImgBlinkTrue", false);
				vis.hideShowAttr("iText-ImageSettings", false);
				vis.hideShowAttr("iText-HtmlTextSettings", false);
				vis.hideShowAttr("iText-ClockSettings", true);
				vis.hideShowAttr("iClockShowSeconds", true);
				vis.hideShowAttr("iImageFalse", false);
				vis.hideShowAttr("iImageTrue", false);
				vis.hideShowAttr("iHtmlTextFieldTrue", false);
				vis.hideShowAttr("iHtmlTextFieldFalse", false);
				vis.hideShowAttr("iClockTimezone", true);

				if (data.iContentType == "clock_analog") {
					vis.hideShowAttr("iImgColorFalse", false);
					vis.hideShowAttr("iImgColorTrue", false);
					vis.hideShowAttr("iImgColorClockFace", true);
					vis.hideShowAttr("iImgColorHands", true);
					vis.hideShowAttr("iImgColorHandSecond", true);
					vis.hideShowAttr("iImgClockFace", true);
					vis.hideShowAttr("iImgClockHands", true);
					vis.hideShowAttr("iImgClockShowBorder", true);
				} else {
					vis.hideShowAttr("iImgColorFalse", true);
					vis.hideShowAttr("iImgColorTrue", true);
					vis.hideShowAttr("iImgColorClockFace", false);
					vis.hideShowAttr("iImgColorHands", false);
					vis.hideShowAttr("iImgColorHandSecond", false);
					vis.hideShowAttr("iImgClockFace", false);
					vis.hideShowAttr("iImgClockHands", false);
					vis.hideShowAttr("iImgClockShowBorder", false);
				}

				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("iImageTrue" + i, false);
					vis.hideShowAttr("iImgBlinkTrue" + i, false);
					vis.hideShowAttr("iImgColorInvert" + i, false);
					vis.hideShowAttr("iHtmlTextFieldTrue" + i, false);
					vis.hideShowAttr("iText-ImageSettings" + i, false);
					vis.hideShowAttr("iText-HtmlTextSettings" + i, false);

					if (data.iContentType == "clock_analog") {
						vis.hideShowAttr("iImgColorTrue" + i, false);
					} else {
						vis.hideShowAttr("iImgColorTrue" + i, true);
					}
				}
			} else if (data.iContentType == "html_text") {
				vis.hideShowAttr("iImgColorInvertFalse", false);
				vis.hideShowAttr("iImgColorInvertTrue", false);
				vis.hideShowAttr("iImgRotation", false);
				vis.hideShowAttr("iFlipImage", false);
				vis.hideShowAttr("iImgBlinkFalse", false);
				vis.hideShowAttr("iImgBlinkTrue", false);
				vis.hideShowAttr("iText-ImageSettings", false);
				vis.hideShowAttr("iText-HtmlTextSettings", true);
				vis.hideShowAttr("iText-ClockSettings", false);
				vis.hideShowAttr("iClockShowSeconds", false);
				vis.hideShowAttr("iImageFalse", false);
				vis.hideShowAttr("iImageTrue", false);
				vis.hideShowAttr("iHtmlTextFieldTrue", true);
				vis.hideShowAttr("iHtmlTextFieldFalse", true);
				vis.hideShowAttr("iImgColorFalse", true);
				vis.hideShowAttr("iImgColorTrue", true);
				vis.hideShowAttr("iImgColorClockFace", false);
				vis.hideShowAttr("iImgColorHands", false);
				vis.hideShowAttr("iImgColorHandSecond", false);
				vis.hideShowAttr("iImgClockFace", false);
				vis.hideShowAttr("iImgClockHands", false);
				vis.hideShowAttr("iImgClockShowBorder", false);
				vis.hideShowAttr("iClockTimezone", false);
				for (let i = 1; i <= data.iUniversalValueCount; i++) {
					vis.hideShowAttr("iText-ImageSettings" + i, false);
					vis.hideShowAttr("iText-HtmlTextSettings" + i, true);
					vis.hideShowAttr("iImageTrue" + i, false);
					vis.hideShowAttr("iImgBlinkTrue" + i, false);
					vis.hideShowAttr("iImgColorInvert" + i, false);
					vis.hideShowAttr("iHtmlTextFieldTrue" + i, true);
					vis.hideShowAttr("iImgColorTrue" + i, true);
				}
			}


		});

	},

	//Standard Button Element
	buttonPrefab: function (imgElement, textElement, values) {

		let defaultValues = {
			background: "",
			backgroundOpacity: "",
			backgroundShadow: "",
			backgroundBorder: "",
			backgroundBorderRadius: "",
			contentOpacity: "",
			contentJustifyContent: "",
			contentFlexDirection: "",
			contentImageOrder: "",
			contentImageAlignSelf: "",
			contentImageMargin: "",
			textFontSize: "",
			textColor: "",
			textDecoration: "",
			textMargin: "",
			textTextAlign: "",
			textAlignSelf: "",
		}

		values = Object.assign({}, defaultValues, values);

		let styles = [];

		for (const [key, value] of Object.entries(values)) {
			styles.push("--" + this.camelCaseToKebabCase(key) + ": " + value);
		}

		let stylesString = styles.join(";");

		let html = `
			<div class="vis-inventwo-class vis-widget-body" style="` + stylesString + `">
			
				<div class="vis-inventwo-button-new"
					 style="background: var(--background);
					 		opacity: var(--background-opacity);
					 		box-shadow: var(--background-shadow);
					 		border: var(--background-border);
					 		border-radius: var(--background-border-radius);"></div>
					 		
				<div class="vis-inventwo-button-content"
					 style="opacity: var(--content-opacity);
					 		justify-content: var(--content-justify-content);
					 		flex-direction: var(--content-flex-direction); 
					 		text-shadow: var(--text-shadow);">
					
					<div class="vis-inventwo-button-imageContainer"
						 style="order: var(--content-image-order);
						 align-self: var(--content-image-align-self);
						 margin: var(--content-image-margin);">
						` + imgElement + `
					</div>
					
					<div class="vis-inventwo-button-text"
						 style="font-size: var(--text-font-size);
						 		color: var(--text-color);
						 		text-decoration: var(--text-decoration);
						 		margin: var(--text-margin);
						 		text-align: var(--text-text-align);
						 		align-self: var(--text-align-self);">
						` + textElement + `
					</div>
					
				</div>
			
			</div>`;

		return html;
	},

	camelCaseToKebabCase: function (string) {
		return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
	},

	//Generierung des Universal und Multi Widgets
	universalButton2: function (el, data, type) {

		let datapoints = [];
		let isHover = false;

		this.updateUniversalDataFields;
		if (!(type == "universal" && data.iUniversalWidgetType == "State")) {
			if (!datapoints.includes(data.attr("oid"))) {
				datapoints.push(data.attr("oid"));
				vis.states.bind(data.oid + ".val", function (e, newVal, oldVal) {
					if (newVal != oldVal) {
						updateWidget();
					}
				});
			}
		}

		vis.states.bind(vis.activeView, function (e, newVal, oldVal) {
			if (newVal != oldVal)
				updateWidget();
		});

		if (type == "multi") {
			for (let index = 1; index <= data.iUniversalValueCount; index++) {

				if (data.iUniversalWidgetType != "Navigation" || (data.iUniversalWidgetType == "Navigation" && data.attr("iCheckType" + index) == "iCheckDpValue")) {
					if (!datapoints.includes(data.attr("oid" + index))) {
						datapoints.push(data.attr("oid" + index));
						vis.states.bind(data.attr("oid" + index) + ".val", function (e, newVal, oldVal) {
							if (newVal != oldVal) {
								updateWidget();
							}
						});
					}
				}

			}
		}

		let $this = this;

		createWidget(true);

		function getValues(dataNew) {
			//Farben, Text & Bild bei true oder false
			let backCol = "";
			let shadowCol = "";
			let shadowColInner = "";
			let shadowTextCol = "";
			let borderCol = "";
			let img = "";
			let txt = "";
			let imgBlink = 0;
			let imgColorFilter = "";
			let invertCol = null;
			let htmlText = "";
			let shadowText = "";
			let textColor = "";

			let values = {};

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

					if (
						(
							(
								(
									dataNew["iCheckType" + i] == "iCheckDefault"
									&&
									dataNew.iUniversalWidgetType == "Navigation"
								)
								||
								dataNew["iCheckType" + i] == "iCheckView"
							)
							&&
							dataNew["iView" + i] === vis.activeView
						)
						||
						(
							(
								(
									dataNew["iCheckType" + i] == "iCheckDefault"
									&&
									dataNew.iUniversalWidgetType != "Navigation"
								)
								||
								dataNew["iCheckType" + i] == "iCheckDpValue"
							)
							&&
							dataNew["oid" + i] != undefined && $this.checkIfTrue(data, null, i)
						)
					) {
						backCol = dataNew["iButtonActiveM" + i];
						shadowCol = dataNew["iShadowColorActiveM" + i];
						shadowColInner = dataNew["iShadowInnerColorActiveM" + i];
						shadowTextCol = dataNew["iShadowTextColorActive" + i];
						borderCol = dataNew["iBorderColorActiveM" + i];
						textColor = dataNew["iTextColorActive" + i];

						imgColorFilter = dataNew["iImgColorTrue" + i];

						if (dataNew["iImageTrue" + i] != undefined)
							img = dataNew["iImageTrue" + i];
						if (dataNew["iTextTrue" + i] != undefined)
							txt = dataNew["iTextTrue" + i];
						imgBlink = dataNew["iImgBlinkTrue" + i];

						if (dataNew["iImgColorInvert" + i] == true) {
							invertCol = " filter: invert(1);";
						}

						if (dataNew.iContentType == "html_text") {
							htmlText = dataNew["iHtmlTextFieldTrue" + i];
						}

						found = true;
						break;
					}
				}
				if (!found) {
					backCol = dataNew.iButtonCol;
					shadowCol = dataNew.iShadowColor;
					shadowColInner = dataNew.iShadowInnerColor;
					shadowTextCol = dataNew.iShadowTextColor;
					borderCol = dataNew.iBorderColor;
					textColor = dataNew.iTextColor;

					imgColorFilter = dataNew.iImgColorFalse;

					if (dataNew.iImageFalse != undefined)
						img = dataNew.iImageFalse;
					if (dataNew.iTextFalse != undefined)
						txt = dataNew.iTextFalse;

					imgBlink = dataNew.iImgBlinkFalse;

					if (dataNew.iImgColorInvert == true) {
						invertCol = " filter: invert(1);";
					}

					if (dataNew.iContentType == "html_text") {
						htmlText = dataNew["iHtmlTextFieldFalse"];
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
						((dataNew.iValueType == "value" && dataNew.iUniversalWidgetType != "State" && $this.checkIfTrue(data, null) /*(
								(vis.states.attr(data.oid + ".val") == val && dataNew.iValueComparison == "equal")
								|| (vis.states.attr(data.oid + ".val") < val && dataNew.iValueComparison == "lower")
								|| (vis.states.attr(data.oid + ".val") > val && dataNew.iValueComparison == "greater")
								|| (vis.states.attr(data.oid + ".val") != val && dataNew.iValueComparison == "not"))*/)

							|| (vis.states.attr(dataNew.oid + ".val") === true && dataNew.iValueType == "boolean")
						)
					)
				) {

					backCol = dataNew.iButtonActive;
					shadowCol = dataNew.iShadowColorActive;
					shadowColInner = dataNew.iShadowInnerColorActive;
					shadowTextCol = dataNew.iShadowTextColorActive;
					borderCol = dataNew.iBorderColorActive;
					textColor = dataNew.iTextColorActive;

					imgColorFilter = dataNew.iImgColorTrue;


					if (dataNew.iImageTrue != undefined && dataNew.iImageTrue != "")
						img = dataNew.iImageTrue;
					if (dataNew.iTextTrue != undefined && dataNew.iTextTrue != "")
						txt = dataNew.iTextTrue;

					imgBlink = dataNew.iImgBlinkTrue;

					if (dataNew.iImgColorInvertTrue == true) {
						invertCol = " filter: invert(1)";
					}

					if (dataNew.iContentType == "html_text") {
						htmlText = dataNew["iHtmlTextFieldTrue"];
					}

				} else {
					backCol = dataNew.iButtonCol;
					shadowCol = dataNew.iShadowColor;
					shadowColInner = dataNew.iShadowInnerColor;
					shadowTextCol = dataNew.iShadowTextColor;
					borderCol = dataNew.iBorderColor;
					textColor = dataNew.iTextColor;

					imgColorFilter = dataNew.iImgColorFalse;

					if (dataNew.iImageFalse != undefined && dataNew.iImageFalse != "")
						img = dataNew.iImageFalse;
					if (dataNew.iTextFalse != undefined && dataNew.iTextFalse != "")
						txt = dataNew.iTextFalse;

					imgBlink = dataNew.iImgBlinkFalse;

					if (dataNew.iImgColorInvertFalse == true) {
						invertCol = " filter: invert(1)";
					}

					if (dataNew.iContentType == "html_text") {
						htmlText = dataNew["iHtmlTextFieldFalse"];
					}

				}

			}

			if (isHover == true) {
				if (dataNew.iButtonColHover != undefined && dataNew.iButtonColHover != "") {
					backCol = dataNew.iButtonColHover;
				}
				if (dataNew.iShadowColorHover != undefined && dataNew.iShadowColorHover != "") {
					shadowCol = dataNew.iShadowColorHover;
				}
				if (dataNew.iShadowInnerColorHover != undefined && dataNew.iShadowInnerColorHover != "") {
					shadowColInner = dataNew.iShadowInnerColorHover;
				}
				if (dataNew.iBorderColorHover != undefined && dataNew.iBorderColorHover != "") {
					borderCol = dataNew.iBorderColorHover;
				}
			}


			imgBlink = imgBlink / 1000;

			let shadow = dataNew.iShadowXOffset + "px " + dataNew.iShadowYOffset + "px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px var(--box-shadow-col),inset " +
				dataNew.iShadowInnerXOffset + "px " + dataNew.iShadowInnerYOffset + "px " + dataNew.iShadowInnerBlur + "px " + dataNew.iShadowInnerSpread + "px var(--box-shadow-inner-col)";
			let border = dataNew.iBorderSize + "px " + dataNew.iBorderStyle + " " + borderCol;
			let borderRadius = dataNew.iCornerRadiusUL + "px " + dataNew.iCornerRadiusUR + "px " + dataNew.iCornerRadiusLR + "px " + dataNew.iCornerRadiusLL + "px";

			if (dataNew.iShadowTextXOffset > 0 || dataNew.iShadowTextYOffset > 0 || dataNew.iShadowTextBlur > 0) {
				shadowText = dataNew.iShadowTextXOffset + "px " + dataNew.iShadowTextYOffset + "px " + dataNew.iShadowTextBlur + "px var(--text-shadow-col);";
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

			/*//Textausrichtung
			let textAlign = "";
			if (dataNew.iTextAlign == "iStart")
				textAlign = "flex-start";
			else if (dataNew.iTextAlign == "iCenter")
				textAlign = "center";
			else if (dataNew.iTextAlign == "iEnd")
				textAlign = "flex-end";*/

			//Textausrichtung
			let textAlign = "";
			let alignSelf = "";
			if (dataNew.iContentFlexDirection == "vertical") {
				if (dataNew.iTextAlign == "iStart")
					textAlign = "left";
				else if (dataNew.iTextAlign == "iCenter")
					textAlign = "center";
				else if (dataNew.iTextAlign == "iEnd")
					textAlign = "right";
			} else {
				if (dataNew.iTextAlign == "iStart")
					alignSelf = "flex-start";
				else if (dataNew.iTextAlign == "iCenter")
					alignSelf = "center";
				else if (dataNew.iTextAlign == "iEnd")
					alignSelf = "flex-end";
			}

			values = {
				background: backCol,
				backgroundOpacity: dataNew.iOpacityBack,
				backgroundShadow: shadow,
				backgroundBorder: border,
				backgroundBorderRadius: borderRadius,
				contentOpacity: dataNew.iOpacityCtn,
				contentJustifyContent: vertTextAlign,
				contentFlexDirection: contFlexDir,
				contentImageOrder: orderContent,
				contentImageAlignSelf: imgAlign,
				contentImageMargin: imgMargin,
				contentImageBlink: imgBlink + "s",
				contentImageInvert: invertCol,
				contentImageColorFilter: imgColorFilter,
				textFontSize: dataNew.iTextSize + "px",
				textColor: textColor,
				textMargin: txtMargin,
				textTextAlign: textAlign,
				textAlignSelf: alignSelf,
				textDecoration: dataNew.iTextDecoration,
				textShadowCol: shadowTextCol,
				boxShadowCol: shadowCol,
				boxShadowInnerCol: shadowColInner,
			};

			if (shadowText != "") {
				values.textShadow = shadowText;
			}

			return {
				values: values,
				img: img,
				txt: txt,
				htmlText: htmlText,
			};
		}

		function updateWidget() {
			let dataNew = Object.assign({}, data);
			if (vis.editMode) {
				dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
			}

			let d = getValues(dataNew);

			let elem = $('#' + data.wid + " .vis-widget-body");

			if (elem.length > 0) {

				for (const [key, value] of Object.entries(d.values)) {
					elem.get(0).style.setProperty("--" + $this.camelCaseToKebabCase(key), value);
				}

				if (dataNew.iContentType == "image") {
					elem.find('.vis-inventwo-button-imageContainer img').attr('src', d.img);
					vis.binds["vis-inventwo"].getImgColorFilter(d.values.contentImageColorFilter, data.wid, null, d.values.contentImageInvert != null);
				} else if (dataNew.iContentType == "html_text") {
					elem.find('.vis-inventwo-content-htmltext').html(d.htmlText);
				}

				elem.find('.vis-inventwo-button-text').html(d.txt);
			}

		}

		function createWidget(createEvents) {
			let dataNew = Object.assign({}, data);

			let values = {};

			if (vis.editMode) {
				dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
			}

			let d = getValues(dataNew);
			values = d.values

			let dispNone = "";
			if (d.img == "") {
				dispNone = "display: none";
			}

			//Bild spiegeln
			let flip = 1;
			if (dataNew.iFlipImage) {
				flip = -1;
			}

			let imgElement = "";
			if (dataNew.iContentType == "clock_analog") {

				let clock = "";

				if (dataNew.iImgClockShowBorder == true) {
					clock += `<div class='vis-inventwo-clock-analog-part vis-inventwo-clock-analog-face-border'>
							<img src='/vis/widgets/vis-inventwo/img/clock_analog/frame.png' style="filter: var(--clock-face-color-filter)"></div>`;
				}
				clock += `<div class='vis-inventwo-clock-analog-part vis-inventwo-clock-analog-face'>
							<img src='/vis/widgets/vis-inventwo/img/clock_analog/` + dataNew.iImgClockFace + `.png' style="filter: var(--clock-face-color-filter)"></div>`;
				clock += `<div class='vis-inventwo-clock-analog-part vis-inventwo-clock-analog-hand-hour'>
							<img src='/vis/widgets/vis-inventwo/img/clock_analog/` + dataNew.iImgClockHands + `/std.png' style="filter: var(--clock-hands-color-filter)"></div>`;
				clock += `<div class='vis-inventwo-clock-analog-part vis-inventwo-clock-analog-hand-minute'>
							<img src='/vis/widgets/vis-inventwo/img/clock_analog/` + dataNew.iImgClockHands + `/min.png' style="filter: var(--clock-hands-color-filter)"></div>`;

				if (dataNew.iClockShowSeconds == true) {
					clock += `<div class='vis-inventwo-clock-analog-part vis-inventwo-clock-analog-hand-second'>
							<img src='/vis/widgets/vis-inventwo/img/clock_analog/` + dataNew.iImgClockHands + `/sek.png' style="filter: var(--clock-hand-second-color-filter)"></div>`;
				}
				imgElement = `
				<div class="vis-inventwo-clock-analog" style="width: ` + dataNew.iIconSize + `px;height: ` + dataNew.iIconSize + `px;">` + clock + `</div>
				`;

				vis.binds["vis-inventwo"].getImgColorFilter(dataNew.iImgColorClockFace, dataNew.wid, "clock-face-color-filter");
				vis.binds["vis-inventwo"].getImgColorFilter(dataNew.iImgColorHands, dataNew.wid, "clock-hands-color-filter");
				vis.binds["vis-inventwo"].getImgColorFilter(dataNew.iImgColorHandSecond, dataNew.wid, "clock-hand-second-color-filter");

			} else if (dataNew.iContentType == "clock_digital") {
				imgElement = `
				<div class="vis-inventwo-clock-digital" 
					 style="font-size: ` + dataNew.iIconSize + `px; 
					 		color: var(--content-image-color-filter);">
					--:--
				</div>
				`;
			} else if (dataNew.iContentType == "image") {
				imgElement = `
				<img src="` + d.img + `" width="` + dataNew.iIconSize + `" class="vis-inventwo-img"
					 style="transform: scaleX(` + flip + `) rotateZ(` + dataNew.iImgRotation + `deg);
					 		animation:blink var(--content-image-blink) infinite; ` + values.contentImageInvert + ";" + dispNone + `"> `;

			} else if (dataNew.iContentType == "html_text") {
				imgElement = `
					<div class="vis-inventwo-content-htmltext" 
					 style="font-size: ` + dataNew.iIconSize + `px; 
					 		color: var(--content-image-color-filter);">` + d.htmlText + `</div>
				`;

			}

			let html = $this.buttonPrefab(imgElement, d.txt, values);

			$(el).html(html);

			/*if(dataNew.iGridId && dataNew.iGridColumn && dataNew.iGridRow){
				let $widget = $(el).closest('.vis-widget');

				let grid = $('#' + dataNew.iGridId);

				$(el).parent().addClass("is-grid-child");

				let pseudoElemId = dataNew.wid + "-pseudo-grid-child";

				let pseudoElem = $('#' + pseudoElemId);

				if(pseudoElem.length == 0){
					let pseudoElem = $('<div id="'+pseudoElemId+'" class="grid-pseudo-element"></div>');
					pseudoElem.css('grid-column', dataNew.iGridColumn + "/ span " + dataNew.iGridColumnSpan);
					pseudoElem.css('grid-row', dataNew.iGridRow + "/ span " + dataNew.iGridRowSpan);

					grid.append(pseudoElem);
				}
				else{
					pseudoElem.css('grid-column', dataNew.iGridColumn + "/ span " + dataNew.iGridColumnSpan);
					pseudoElem.css('grid-row', dataNew.iGridRow + "/ span " + dataNew.iGridRowSpan);
				}

				setTimeout(function () {
					let pElem = $('#' + pseudoElemId);

					let offsetX = 0;
					let offsetY = 0;

					if(vis.editMode){
						let offset = $('#vis_container').offset();
						offsetX = offset.left;
						offsetY = offset.top;
					}

					console.log(pElem.offset());
					$(el).parent().css("top", pElem.offset().top - offsetY);
					$(el).parent().css("left", pElem.offset().left - offsetX);
					$(el).parent().css("width", pElem.width());
					$(el).parent().css("height", pElem.height());
				},10);

				$(el).parent().css('grid-column', dataNew.iGridColumn + "/ span " + dataNew.iGridColumnSpan);
				$(el).parent().css('grid-row', dataNew.iGridRow + "/ span " + dataNew.iGridRowSpan);

			}*/

			vis.binds["vis-inventwo"].getImgColorFilter(values.contentImageColorFilter, dataNew.wid);

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
				} else if (dataNew.iUniversalWidgetType == "HTTP") {
					vis.binds["vis-inventwo"].sendHttp(el, dataNew, type);
				} else if (dataNew.iUniversalWidgetType == "Navigation" || dataNew.iUniversalWidgetType == "ViewInPopup") {
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

				if (dataNew.iUniversalWidgetType == "ViewInPopup") {
					vis.states.bind(data["iPopUpCloseDp-oid"] + ".val", function (e, newVal, oldVal) {

						console.log("test");

						if (dataNew.iPopUpOpenDpValue == "true") {
							dataNew.iPopUpOpenDpValue = true;
						} else if (dataNew.iPopUpOpenDpValue == "false") {
							dataNew.iPopUpOpenDpValue = false;
						}

						if (newVal == dataNew.iPopUpOpenDpValue) {
							vis.binds["vis-inventwo"].addViewPopup(el, dataNew, type);
						}

					});
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
						if (
							(dataNew.iButtonColHover != undefined && dataNew.iButtonColHover != "") ||
							(dataNew.iShadowColorHover != undefined && dataNew.iShadowColorHover != "") ||
							(dataNew.iShadowInnerColorHover != undefined && dataNew.iShadowInnerColorHover != "") ||
							(dataNew.iBorderColorHover != undefined && dataNew.iBorderColorHover != "")
						) {
							isHover = true;
							updateWidget();
						}
					});
					$(el).parent().on("mouseleave", function () {
						if (
							(dataNew.iButtonColHover != undefined && dataNew.iButtonColHover != "") ||
							(dataNew.iShadowColorHover != undefined && dataNew.iShadowColorHover != "") ||
							(dataNew.iShadowInnerColorHover != undefined && dataNew.iShadowInnerColorHover != "") ||
							(dataNew.iBorderColorHover != undefined && dataNew.iBorderColorHover != "")
						) {
							isHover = false;
							updateWidget();
						}
					});
				}

				function getTime(timezone = "Europe/Berlin") {
					let date = new Date().toLocaleString('en-US', {timeZone: timezone});
					date = new Date(date);
					let hour = date.getHours();
					let minutes = date.getMinutes();
					let seconds = date.getSeconds();

					return {
						hour: hour,
						minutes: minutes,
						seconds: seconds,
					}
				}

				if (dataNew.iContentType == "clock_analog") {

					setTimeout(function () {

						let date = getTime(dataNew.iClockTimezone);
						let hour = date.hour;
						let minutes = date.minutes;
						let seconds = date.seconds;

						let handHour = $('#' + data.wid + ' .vis-inventwo-clock-analog-hand-hour');
						let handMin = $('#' + data.wid + ' .vis-inventwo-clock-analog-hand-minute');
						let handSec = $('#' + data.wid + ' .vis-inventwo-clock-analog-hand-second');

						if (hour > 12) {
							hour = hour - 12;
						}

						let h1 = 360 / 12 / 60 * minutes;

						handMin.css("transform", "rotateZ(" + (minutes / 60 * 360) + "deg)");
						handHour.css("transform", "rotateZ(" + (hour / 12 * 360 + h1) + "deg)");
						if (dataNew.iClockShowSeconds == true) {
							handSec.css("transform", "rotateZ(" + (seconds / 60 * 360) + "deg)");
						} else {
							handSec.css("display", "none");
						}

						setInterval(function () {
							date = getTime(dataNew.iClockTimezone);
							hour = date.hour;
							minutes = date.minutes;
							seconds = date.seconds;

							if (hour > 12) {
								hour = hour - 12;
							}

							h1 = 360 / 12 / 60 * minutes;

							handMin.css("transform", "rotateZ(" + (minutes / 60 * 360) + "deg)");
							handHour.css("transform", "rotateZ(" + (hour / 12 * 360 + h1) + "deg)");
							if (dataNew.iClockShowSeconds == true) {
								handSec.css("transform", "rotateZ(" + (seconds / 60 * 360) + "deg)");
							}
						}, 1000);


					}, 100);

				} else if (dataNew.iContentType == "clock_digital") {

					setTimeout(function () {

						let date = getTime(dataNew.iClockTimezone);
						let hour = date.hour;
						let minutes = date.minutes;
						let seconds = date.seconds;

						let fullTime = ("0" + hour).slice(-2) + ":" + ("0" + minutes).slice(-2);

						if (dataNew.iClockShowSeconds == true) {
							fullTime += ":" + ("0" + seconds).slice(-2);
						}

						let timeContainer = $('#' + data.wid + ' .vis-inventwo-clock-digital');

						timeContainer.text(fullTime);

						setInterval(function () {
							date = date = getTime(dataNew.iClockTimezone);
							hour = date.hour;
							minutes = date.minutes;
							seconds = date.seconds;

							let fullTime = ("0" + hour).slice(-2) + ":" + ("0" + minutes).slice(-2)
							if (dataNew.iClockShowSeconds == true) {
								fullTime += ":" + ("0" + seconds).slice(-2);
							}
							timeContainer.text(fullTime);
						}, 1000);


					}, 100);

				}
			}
		}
	},

	/*
		Using the iro.js color picker https://iro.js.org/
	 */
	colorPicker: function (el, data) {

		let isMoving = false;

		let dataNew = Object.assign({}, data);
		if (vis.editMode) {
			dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
		}

		let borderColor = dataNew.iColorPickerBorderColor;
		if (borderColor == "") {
			borderColor = "transparent";
		}

		let borderWidth = dataNew.iColorPickerBorderWidth;
		let margin = dataNew.iColorPickerComponentMargin;

		let layoutComponents = [];

		if (dataNew.iColorPickerShowWheel) {
			layoutComponents.push({
				component: iro.ui.Wheel,
				options: {}
			});
		}
		if (dataNew.iColorPickerShowSliderHue) {
			layoutComponents.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'hue'
				}
			});
		}
		if (dataNew.iColorPickerShowSliderSaturation) {
			layoutComponents.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'saturation'
				}
			});
		}
		if (dataNew.iColorPickerShowSliderValue) {
			layoutComponents.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'value'
				}
			});
		}
		if (dataNew.iColorPickerShowSliderRed) {
			layoutComponents.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'red'
				}
			});
		}
		if (dataNew.iColorPickerShowSliderGreen) {
			layoutComponents.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'green'
				}
			});
		}
		if (dataNew.iColorPickerShowSliderBlue) {
			layoutComponents.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'blue'
				}
			});
		}
		if (dataNew.iColorPickerShowSliderAlpha) {
			layoutComponents.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'alpha'
				}
			});
		}
		if (dataNew.iColorPickerShowSliderKelvin) {
			layoutComponents.push({
				component: iro.ui.Slider,
				options: {
					sliderType: 'kelvin'
				}
			});
		}

		let textAlign = "";
		let alignSelf = "";
		if (dataNew.iContentFlexDirection == "vertical") {
			if (dataNew.iTextAlign == "iStart")
				textAlign = "left";
			else if (dataNew.iTextAlign == "iCenter")
				textAlign = "center";
			else if (dataNew.iTextAlign == "iEnd")
				textAlign = "right";
		} else {
			if (dataNew.iTextAlign == "iStart")
				alignSelf = "flex-start";
			else if (dataNew.iTextAlign == "iCenter")
				alignSelf = "center";
			else if (dataNew.iTextAlign == "iEnd")
				alignSelf = "flex-end";
		}

		let imgAlign = "";
		if (dataNew.iImgAlign == "iStart")
			imgAlign = "flex-start";
		else if (dataNew.iImgAlign == "iCenter")
			imgAlign = "center";
		else if (dataNew.iImgAlign == "iEnd")
			imgAlign = "flex-end";

		let orderContent = "";
		if (dataNew.iContentOrder == "orderTextImg")
			orderContent = 2;
		else
			orderContent = 0;

		let contFlexDir = "";
		if (dataNew.iContentFlexDirection == "vertical")
			contFlexDir = "column";
		else if (dataNew.iContentFlexDirection == "horizontal")
			contFlexDir = "row";

		let vertTextAlign = "";
		if (dataNew.iContentVertAlign == "iStart")
			vertTextAlign = "flex-start";
		else if (dataNew.iContentVertAlign == "iCenter")
			vertTextAlign = "center";
		else if (dataNew.iContentVertAlign == "iEnd")
			vertTextAlign = "flex-end";
		else if (dataNew.iContentVertAlign == "iSpace-between")
			vertTextAlign = "space-between";

		let shadow = dataNew.iShadowXOffset + "px " + dataNew.iShadowYOffset + "px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px var(--box-shadow-col),inset " +
			dataNew.iShadowInnerXOffset + "px " + dataNew.iShadowInnerYOffset + "px " + dataNew.iShadowInnerBlur + "px " + dataNew.iShadowInnerSpread + "px var(--box-shadow-inner-col)";
		let border = dataNew.iBorderSize + "px " + dataNew.iBorderStyle + " " + dataNew.iBorderColor;
		let borderRadius = dataNew.iCornerRadiusUL + "px " + dataNew.iCornerRadiusUR + "px " + dataNew.iCornerRadiusLR + "px " + dataNew.iCornerRadiusLL + "px";


		let values = {
			background: dataNew.iButtonCol,
			backgroundOpacity: dataNew.iOpacityBack,
			backgroundShadow: shadow,
			backgroundBorder: border,
			backgroundBorderRadius: borderRadius,
			contentOpacity: dataNew.iOpacityCtn,
			contentJustifyContent: vertTextAlign,
			contentFlexDirection: contFlexDir,
			contentImageOrder: orderContent,
			contentImageAlignSelf: imgAlign,
			contentImageMargin: dataNew.iImgSpaceTop + "px " + dataNew.iImgSpaceRight + "px " + dataNew.iImgSpaceBottom + "px " + dataNew.iImgSpaceLeft + "px",
			textFontSize: dataNew.iTextSize + "px",
			textColor: dataNew.iTextColor,
			textMargin: dataNew.iTextSpaceTop + "px " + dataNew.iTextSpaceRight + "px " + dataNew.iTextSpaceBottom + "px " + dataNew.iTextSpaceLeft + "px",
			textTextAlign: textAlign,
			textAlignSelf: alignSelf,
			textDecoration: dataNew.iTextDecoration,
			textShadowCol: dataNew.iShadowTextColor,
			boxShadowCol: dataNew.iShadowColor,
			boxShadowInnerCol: dataNew.iShadowInnerColor,
		};

		let txt = dataNew.iText;
		if(txt === undefined){
			txt = "";
		}

		$(el).html(this.buttonPrefab("<div class='vis-inventwo-colorpicker'></div>", txt, values));

		let colorPicker = new iro.ColorPicker($(el).find('.vis-inventwo-colorpicker')[0], {
			width: parseInt(dataNew.iColorPickerWidth),
			layout: layoutComponents,
			display: "block",
			padding: dataNew.iColorPickerHandlePadding,
			margin: margin + "px",
			handleRadius: dataNew.iColorPickerHandleRadius,
			layoutDirection: dataNew.iColorPickerLayoutDirection
		});

		function isJson(string) {
			try {
				JSON.parse(string);
			} catch (e) {
				return false;
			}
			return true;
		}

		let hexString = "";

		function setPickerColor() {
			switch (dataNew.iColorPickerFormat) {
				case "HEX":
					hexString = vis.states[dataNew.oid + ".val"];
					if ((/^#([A-Fa-f0-9]{3}$)|([A-Fa-f0-9]{6}$)/.test(hexString))) {
						colorPicker.color.hexString = hexString;
					} else {
						colorPicker.color.hexString = "#ffffff";
					}
					break;
				case "HEX 8":
					hexString = vis.states[dataNew.oid + ".val"];
					if ((/^#([A-Fa-f0-9]{8}$)/.test(hexString))) {
						colorPicker.color.hex8String = hexString;
					} else {
						colorPicker.color.hexString = "#ffffffff";
					}
					break;
				case "RGB":
					if (dataNew["iColorPickerColor1-oid"] != "" && dataNew["iColorPickerColor2-oid"] != "" && dataNew["iColorPickerColor3-oid"] != "") {
						colorPicker.color.rgb = {
							r: parseInt(vis.states[dataNew["iColorPickerColor1-oid"] + ".val"]),
							g: parseInt(vis.states[dataNew["iColorPickerColor2-oid"] + ".val"]),
							b: parseInt(vis.states[dataNew["iColorPickerColor3-oid"] + ".val"])
						}
						console.log({
							r: parseInt(vis.states[dataNew["iColorPickerColor1-oid"] + ".val"]),
							g: parseInt(vis.states[dataNew["iColorPickerColor2-oid"] + ".val"]),
							b: parseInt(vis.states[dataNew["iColorPickerColor3-oid"] + ".val"])
						});
					} else {
						colorPicker.color.rgb = {
							r: 255,
							g: 255,
							b: 255,
						}
					}
					break;
				case "HSL":
					if (dataNew["iColorPickerColor1-oid"] != "" && dataNew["iColorPickerColor2-oid"] != "" && dataNew["iColorPickerColor3-oid"] != "") {
						colorPicker.color.hsl = {
							h: parseInt(vis.states[dataNew["iColorPickerColor1-oid"] + ".val"]),
							s: parseInt(vis.states[dataNew["iColorPickerColor2-oid"] + ".val"]),
							l: parseInt(vis.states[dataNew["iColorPickerColor3-oid"] + ".val"])
						}
					} else {
						colorPicker.color.hsl = {
							h: 330,
							s: 0,
							l: 100,
						}
					}
					break;
				case "HSV":
					if (dataNew["iColorPickerColor1-oid"] != "" && dataNew["iColorPickerColor2-oid"] != "" && dataNew["iColorPickerColor3-oid"] != "") {
						colorPicker.color.hsv = {
							h: parseInt(vis.states[dataNew["iColorPickerColor1-oid"] + ".val"]),
							s: parseInt(vis.states[dataNew["iColorPickerColor2-oid"] + ".val"]),
							v: parseInt(vis.states[dataNew["iColorPickerColor3-oid"] + ".val"])
						}
					} else {
						colorPicker.color.hsv = {
							h: 0,
							s: 0,
							v: 100,
						}
					}
					break;
				case "CIE":
					let dpValue = vis.states[dataNew.oid + ".val"];
					if (isJson(dpValue)) {
						let jsonVal = JSON.parse(dpValue);
						dpValue = jsonVal.join(",");
						dpIsArrayWithBrackets = true;
					} else if (typeof dpValue == "object") {
						dpValue = dpValue.join(",");
						dpIsArray = true;
					}
					let rgb = vis.binds['vis-inventwo'].cieConvert(dpValue, "rgb");
					colorPicker.color.rgb = {
						r: rgb[0],
						g: rgb[1],
						b: rgb[2],
					}
					break;
				default:
					console.log("Error! Color model not implemented!");
					break;
			}

			colorPicker.color.alpha = vis.states[dataNew["iColorPickerTransparency-oid"] + ".val"];
		}

		setPickerColor();

		colorPicker.on('input:start', function (){
			isMoving = true;
		});

		colorPicker.on('input:change', function (color){
			console.log(color);
			if (color.index === 0) {
				switch (dataNew.iColorPickerFormat) {
					case "HEX":
						vis.setValue(dataNew.oid, color.hexString);
						break;
					case "HEX 8":
						vis.setValue(dataNew.oid, color.hex8String);
						break;
					case "RGB":
						vis.setValue(dataNew["iColorPickerColor1-oid"], color.rgb.r);
						vis.setValue(dataNew["iColorPickerColor2-oid"], color.rgb.g);
						vis.setValue(dataNew["iColorPickerColor3-oid"], color.rgb.b);
						break;
					case "HSL":
						vis.setValue(dataNew["iColorPickerColor1-oid"], color.hsl.h);
						vis.setValue(dataNew["iColorPickerColor2-oid"], color.hsl.s);
						vis.setValue(dataNew["iColorPickerColor3-oid"], color.hsl.l);
						break;
					case "HSV":
						vis.setValue(dataNew["iColorPickerColor1-oid"], color.hsv.h);
						vis.setValue(dataNew["iColorPickerColor2-oid"], color.hsv.s);
						vis.setValue(dataNew["iColorPickerColor3-oid"], color.hsv.v);
						break;
					case "CIE":
						vis.setValue(dataNew.oid, vis.binds['vis-inventwo'].cieConvert(
							[color.rgb.r, color.rgb.g, color.rgb.b], "cie"));
						break;
					default:
						console.log("Error! Color model not implemented!");
						break;
				}

				vis.setValue(dataNew["iColorPickerTransparency-oid"], color.alpha);
			}
		});

		colorPicker.on('input:end', function (){
			setTimeout(function (){
				isMoving = false;
			},100);
		});

		vis.states.bind(dataNew.oid + ".val", function (e, newVal, oldVal) {
			if (newVal !== oldVal && !isMoving) {
				setPickerColor();
			}
		});

		vis.states.bind(dataNew["iColorPickerTransparency-oid"] + ".val", function (e, newVal, oldVal) {
			if (newVal !== oldVal && !isMoving) {
				setPickerColor();
			}
		});

		vis.states.bind(dataNew["iColorPickerColor1-oid"] + ".val", function (e, newVal, oldVal) {
			if (newVal !== oldVal && !isMoving) {
				setPickerColor();
			}
		});
		vis.states.bind(dataNew["iColorPickerColor2-oid"] + ".val", function (e, newVal, oldVal) {
			if (newVal !== oldVal && !isMoving) {
				setPickerColor();
			}
		});
		vis.states.bind(dataNew["iColorPickerColor3-oid"] + ".val", function (e, newVal, oldVal) {
			if (newVal !== oldVal && !isMoving) {
				setPickerColor();
			}
		});
	},

	updateColorPickerFields: function (wid, view) {
		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.iColorPickerFormat;
			if (val == "RGB" || val == "HSL" || val == "HSV") {
				vis.hideShowAttr("oid", false);
				vis.hideShowAttr("iColorPickerColor1-oid", true);
				vis.hideShowAttr("iColorPickerColor2-oid", true);
				vis.hideShowAttr("iColorPickerColor3-oid", true);
			} else {
				vis.hideShowAttr("oid", true);
				vis.hideShowAttr("iColorPickerColor1-oid", false);
				vis.hideShowAttr("iColorPickerColor2-oid", false);
				vis.hideShowAttr("iColorPickerColor3-oid", false);
			}

		});
	},

	updateColorPickerFieldsClick: function (el) {
		if (vis.editMode) {
			$(el).parent().on("mouseup click", function () {
				setTimeout(function () {
					vis.binds["vis-inventwo"].updateColorPickerFields();
				}, 100);
			});

			$(".group-control").on("mouseup click", function () {
				setTimeout(function () {
					vis.binds["vis-inventwo"].updateColorPickerFields();
				}, 100);
			});
		}
	},

	//Funktion um im VIS Edit das Binding der Datenpunkte aufzulösen, damit die Werte wie in der Live auch im Editor zu sehen sind
	getDatapointsValues: function (data) {

		for (let [key, value] of Object.entries(data)) {
			if (key.substring(0, 1) == "i") {

				if (key.startsWith("iTblCellThresholdsText", 0)) {
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
		Generierung der Filter um ein Icon zu färben. Der Code stammt NICHT von uns.
		Ich hab ihn nur etwas abgeändert

		Credits goes to MultiplyByZer0
		https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991

		Code in Codepen -> https://codepen.io/sosuke/pen/Pjoqqp

		START
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

	/*
		END Colorfilter
	 */

	//Aktualisierung der Filter für das Icon
	getImgColorFilter: function (color, wid, varName = null, invert = false) {


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

				if (varName == null) {
					if ($("#" + wid).find(".vis-inventwo-img").css("filter") != filter.substring(8, filter.length - 1)) {
						$("#" + wid).find(".vis-inventwo-img").css("filter", filter.substring(8, filter.length - 1));
					}
				} else {
					$('#' + wid).find('.vis-widget-body').get(0).style.setProperty("--" + varName, filter.substring(8, filter.length - 1))
				}
			});
		} else {
			if (invert) {
				$("#" + wid).find(".vis-inventwo-img").css("filter", "invert(1)");
			} else {
				$("#" + wid).find(".vis-inventwo-img").css("filter", "");
			}
		}

	},


	//Converts boolean strings to booleans and numeric string to numeric value
	convertValue: function (val) {
		if (!isNaN(val) && typeof val != "boolean") {
			val = parseFloat(val);
		}

		if (val == "true")
			val = true;
		else if (val == "false")
			val = false;

		return val;
	},

	//Hide
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

	createBasicSwitchWidget: function (el, data, style) {

		let $this = this;

		for (let index = 1; index <= data.iSwitchCount; index++) {
			vis.states.bind(data["oid" + index] + ".val", function (e, newVal, oldVal) {
				updateWidget();
			});
		}

		createWidget(true);

		function getValues(dataNew) {

			let values = [];
			let text = [];

			let knobWidth = dataNew.iKnobWidth;
			if (!isNaN(knobWidth)) {
				knobWidth += "px";
			}

			for (let i = 1; i <= dataNew.iSwitchCount; i++) {

				let vals = {}
				let t = "";

				let val = dataNew["iValueTrue" + i];
				if (val == undefined)
					val = true;
				else if (val == "true")
					val = true;
				else if (val == "false")
					val = false;
				else if (!isNaN(val))
					val = parseFloat(val);

				if (dataNew["oid" + i] != undefined && vis.states.attr(dataNew["oid" + i] + ".val") == val) {
					vals.backgroundColor = dataNew.iBackgroundColorActive;
					vals.knobBackgroundColor = dataNew.iKnobBackgroundColorActive;
					vals.knobTransform = "translate(-100%, 0)";

					vals.knobLeft = "100%";
					t = dataNew["iTextTrue" + i];
				} else {
					vals.backgroundColor = dataNew.iBackgroundColor;
					vals.knobBackgroundColor = dataNew.iKnobBackgroundColor;
					vals.knobTransform = "translate(0, 0)";
					vals.knobLeft = "0";
					t = dataNew["iTextFalse" + i];
				}

				if (t == undefined) {
					t = "";
				}

				values[i - 1] = vals;
				text[i - 1] = t;
			}

			return {
				values: values,
				text: text
			};

		}

		function updateWidget() {
			let dataNew = Object.assign({}, data);
			if (vis.editMode) {
				dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
			}

			let d = getValues(dataNew);

			let elem = $('#' + data.wid + " .vis-widget-body");

			d.values.forEach((val, index) => {
				for (const [key, v] of Object.entries(val)) {
					elem.get(0).style.setProperty("--" + $this.camelCaseToKebabCase(key) + "-" + (index + 1), v);
				}
			});

			d.text.forEach((text, index) => {
				elem.find('#' + dataNew.wid + '-switch-' + index + ' .vis-inventwo-switch-basic-text').html(text);
			});
		}

		function createWidget(createEvents) {
			let dataNew = Object.assign({}, data);

			if (vis.editMode) {
				dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
			}

			let d = getValues(dataNew);
			let values = d.values;

			let height = dataNew.iBarWidth;
			let borderRadius = dataNew.iBorderRadius;
			if (!isNaN(height)) {
				height += "px";
			}
			if (!isNaN(borderRadius)) {
				borderRadius += "px";
			}

			let knobWidth = dataNew.iKnobWidth;
			let knobHeight = dataNew.iKnobHeight;
			let knobBorderRadius = dataNew.iKnobBorderRadius;
			let knobOffset = dataNew.iKnobOffset;
			if (!isNaN(knobWidth)) {
				knobWidth += "px";
			}
			if (!isNaN(knobHeight)) {
				knobHeight += "px";
			}
			if (!isNaN(knobBorderRadius)) {
				knobBorderRadius += "px";
			}
			if (!isNaN(knobOffset)) {
				knobOffset += "px";
			}

			let labelWrapperStyles = [];

			labelWrapperStyles.push(
				"min-height: calc(" + height + " + ((" + knobHeight + " - " + height + " ) / 2))"
			);

			labelWrapperStyles.push(
				"position: relative"
			);

			labelWrapperStyles.push("flex: 1 0 1px");


			let labelStyles = [];
			labelStyles.push(
				"height: " + height
			);
			labelStyles.push(
				"margin: 0 calc(" + knobOffset + " / 2)"
			);

			labelStyles.push(
				"border-radius: " + borderRadius
			);


			let knobStyles = [];
			knobStyles.push(
				"width: " + knobWidth
			);
			knobStyles.push(
				"height: " + knobHeight
			);
			knobStyles.push(
				"border-radius: " + knobBorderRadius
			);

			knobStyles.push(
				"left: var(--knob-left)"
			);
			knobStyles.push(
				"transform: var(--knob-transform)"
			);


			let styles = [];
			let switchStyles = [];


			values.forEach((val, index) => {
				for (const [key, v] of Object.entries(val)) {
					styles.push("--" + $this.camelCaseToKebabCase(key) + "-" + (index + 1) + ": " + v);
				}
			});

			styles.push("position: relative");

			if (dataNew.iSwitchOrientation == "vertical") {
				styles.push("flex-direction: column");
				styles.push("justify-content: flex-start");
				switchStyles.push("margin-bottom: " + dataNew.iSwitchSpacing + "px");
			} else if (dataNew.iSwitchOrientation == "horizontal") {
				styles.push("flex-direction: row");
				styles.push("align-items: center");
				switchStyles.push("margin-right: " + dataNew.iSwitchSpacing + "px");
				switchStyles.push("flex: 1 0 1px");
			}

			labelWrapperStyles.push("margin-bottom: " + dataNew.iSwitchTextSpacing + "px");

			let stylesString = styles.join(";");

			switchStyles = switchStyles.join(";");
			labelWrapperStyles = labelWrapperStyles.join("; ");
			labelStyles = labelStyles.join("; ");
			knobStyles = knobStyles.join("; ");

			let switches = [];

			values.forEach((val, index) => {

				let labelWrapperStyles2 = [];
				labelWrapperStyles2.push(
					"background: var(--background-color-" + (index + 1) + ")"
				);

				let knobStyles2 = [];
				knobStyles2.push(
					"left: var(--knob-left-" + (index + 1) + ")"
				);
				knobStyles2.push(
					"transform: var(--knob-transform-" + (index + 1) + ")"
				);
				knobStyles2.push(
					"background: var(--knob-background-color-" + (index + 1) + ")"
				);
				knobStyles2 = knobStyles2.join(";");

				let text = d.text[index];

				switches.push(`
				<div id="` + dataNew.wid + `-switch-` + index + `" 
					 class="vis-inventwo-switch-basic-entry" style="` + switchStyles + `">
					<div style="` + labelWrapperStyles + `">
						<label class="vis-inventwo-switch-basic-wrapper" style="` + labelStyles + `;` + labelWrapperStyles2 + `;">
					 		<span class="vis-inventwo-switch-basic-knob" style="` + knobStyles + `;` + knobStyles2 + `;"></span>
						</label>
					</div>
					<div class="vis-inventwo-switch-basic-text">
						` + text + `
					</div>
				</div>
				`);
			});

			let html = `
			<div class="vis-inventwo-class vis-widget-body vis-inventwo-switch-basic" style="` + stylesString + `">
				` + switches.join("") + `
			</div>`;

			$(el).html(html);

			//Bindings
			setTimeout(function () {
				if (createEvents) {
					values.forEach((val, index) => {
						vis.binds["vis-inventwo"].handleCheckbox(el, dataNew, index);
					});
				}
			}, 500);
		}
	},

	createCheckbox: function (el, data, style) {

		let $this = this;

		for (let index = 1; index <= data.iCheckboxCount; index++) {
			vis.states.bind(data["oid" + index] + ".val", function (e, newVal, oldVal) {
				updateWidget();
			});
		}

		createWidget(true);

		function getValues(dataNew) {

			let values = [];
			let text = [];

			for (let i = 1; i <= dataNew.iCheckboxCount; i++) {

				let vals = {}
				let t = "";

				let val = dataNew["iValueTrue" + i];
				if (val == undefined)
					val = true;
				else if (val == "true")
					val = true;
				else if (val == "false")
					val = false;
				else if (!isNaN(val))
					val = parseFloat(val);

				if (dataNew["oid" + i] != undefined && vis.states.attr(dataNew["oid" + i] + ".val") == val) {
					vals.background = dataNew.iBackgroundColorActive;
					vals.borderColor = dataNew.iBorderColorActive;
					vals.boxShadowCol = dataNew.iShadowColorActive;
					vals.boxShadowInnerCol = dataNew.iShadowInnerColorActive;
					vals.textShadowCol = dataNew.iShadowTextColorActive;
					vals.checkColor = dataNew.iColorIcon;
				} else {
					vals.background = dataNew.iBackgroundColor;
					vals.borderColor = dataNew.iBorderColor;
					vals.boxShadowCol = dataNew.iShadowColor;
					vals.boxShadowInnerCol = dataNew.iShadowInnerColor;
					vals.textShadowCol = dataNew.iShadowTextColor;
					vals.checkColor = "transparent";
				}

				if (dataNew["iText" + i] != undefined) {
					t = dataNew["iText" + i];
				}

				values[i - 1] = vals;
				text[i - 1] = t;
			}

			return {
				values: values,
				text: text
			};

		}

		function updateWidget() {
			let dataNew = Object.assign({}, data);
			if (vis.editMode) {
				dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
			}

			let d = getValues(dataNew);

			d.values.forEach((val, index) => {
				let elem = $("#" + dataNew.wid + "-switch-" + index)

				for (const [key, v] of Object.entries(val)) {
					elem.get(0).style.setProperty("--" + $this.camelCaseToKebabCase(key), v);
				}

			});
		}

		function createWidget(createEvents) {
			let dataNew = Object.assign({}, data);

			if (vis.editMode) {
				dataNew = vis.binds["vis-inventwo"].getDatapointsValues(dataNew);
			}

			let d = getValues(dataNew);
			let values = d.values;

			let width = dataNew.iWidth;
			if (!isNaN(width)) {
				width += "px";
			}

			let height = dataNew.iHeight;
			if (!isNaN(height)) {
				height += "px";
			}

			let borderRadius = dataNew.iCornerRadiusUL + "px " + dataNew.iCornerRadiusUR + "px " + dataNew.iCornerRadiusLR + "px " + dataNew.iCornerRadiusLL + "px"
			let border = dataNew.iBorderSize + "px " + dataNew.iBorderStyle + " var(--border-color)"
			let shadow = dataNew.iShadowXOffset + "px " + dataNew.iShadowYOffset + "px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px var(--box-shadow-col),inset " +
				dataNew.iShadowInnerXOffset + "px " + dataNew.iShadowInnerYOffset + "px " + dataNew.iShadowInnerBlur + "px " + dataNew.iShadowInnerSpread + "px var(--box-shadow-inner-col)"

			let styles = [];
			let boxStyles = [];
			let labelStyles = [];
			let boxEntryStyles = [];

			styles.push("min-height: " + height);
			styles.push("--width: " + width);
			styles.push("--height: " + height);

			if (dataNew.iCheckboxOrientation == "vertical") {
				styles.push("flex-direction: column");
				boxEntryStyles.push("margin-bottom: " + dataNew.iCheckboxSpacing + "px");
			} else if (dataNew.iCheckboxOrientation == "horizontal") {
				styles.push("flex-direction: row");
				boxEntryStyles.push("margin-right: " + dataNew.iCheckboxSpacing + "px");
			}

			labelStyles.push("padding-left: calc(" + dataNew.iBorderSize + "px + 5px)");

			if (dataNew.iShadowTextXOffset > 0 || dataNew.iShadowTextYOffset > 0 || dataNew.iShadowTextBlur > 0) {
				labelStyles.push("text-shadow: " + dataNew.iShadowTextXOffset + "px " + dataNew.iShadowTextYOffset + "px " + dataNew.iShadowTextBlur + "px var(--text-shadow-col)");
			}

			boxStyles.push("width: " + width);
			boxStyles.push("height: " + height);
			boxStyles.push("background: var(--background)");
			boxStyles.push("border-radius: " + borderRadius);
			boxStyles.push("border: " + border);
			boxStyles.push("box-shadow: " + shadow);

			boxStyles = boxStyles.join("; ");
			labelStyles = labelStyles.join("; ");
			styles = styles.join("; ");
			boxEntryStyles = boxEntryStyles.join("; ");

			let boxes = [];

			values.forEach((val, index) => {

				let styles2 = [];

				styles2.push("--background: " + val.background);
				styles2.push("--border-color: " + val.borderColor);
				styles2.push("--box-shadow-col: " + val.boxShadowCol);
				styles2.push("--box-shadow-inner-col: " + val.boxShadowInnerCol);
				styles2.push("--text-shadow-col: " + val.textShadowCol);
				styles2.push("--check-color: " + val.checkColor);

				styles2 = styles2.join(";");

				let text = d.text[index];

				boxes.push(`
				<div id="` + dataNew.wid + `-switch-` + index + `" 
				 	 class="vis-inventwo-checkbox-box-container" style="` + boxEntryStyles + `;` + styles2 + `">
					<div class="vis-inventwo-checkbox-box ` + dataNew.iCheckboxIcon + `" style="` + boxStyles + `"></div>
						<div class="vis-inventwo-checkbox-text" style="` + labelStyles + `">
						` + text + `
					</div>
				</div>
				`);
			});

			let html = `
			<div class="vis-inventwo-class vis-widget-body vis-inventwo-checkbox" style="` + styles + `">
				` + boxes.join("") + `
			</div>`;

			$(el).html(html);

			let s = `
			<style>
			#` + dataNew.wid + ` label:after{
				border-color: var(--check-color);
				left: 5px;
				width: 5px;
			}
			</style>
			`;

			$(el).before($(s));

			//Bindings
			setTimeout(function () {
				if (createEvents) {
					values.forEach((val, index) => {
						vis.binds["vis-inventwo"].handleCheckbox(el, dataNew, index);
					});
				}
			}, 500);
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

	//Switch Funktion - Datenpunktwert wechseln
	handleCheckbox: function (el, data, index = null) {
		var $this = $(el);

		var oid = data["oid" + (index + 1)];

		if (!vis.editMode) {
			var moved = false;
			if (index == null) {
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
			} else {

				$('#' + data.wid + '-switch-' + index).unbind();
				$('#' + data.wid + '-switch-' + index).on("click touchend", function () {

					if (vis.detectBounce(this)) return;
					if (moved) return;

					var val = vis.states[oid + ".val"];
					var valFalse = vis.binds["vis-inventwo"].convertValue(data["iValueFalse" + (index + 1)]);
					var valTrue = vis.binds["vis-inventwo"].convertValue(data["iValueTrue" + (index + 1)]);

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

		}

	},

	//Colors
	hexToRgb: function (hex) {
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
	rgbToHex: function (rgb) {
		function componentToHex(c) {
			var hex = c.toString(16);
			return hex.length == 1 ? "0" + hex : hex;
		}

		return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
	},
	cieConvert: function (value, type) {
		class ColorConverter {
			static getGamutRanges() {
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

				let defaultGamut = {
					red: [1.0, 0],
					green: [0.0, 1.0],
					blue: [0.0, 0.0]
				};

				return {"gamutA": gamutA, "gamutB": gamutB, "gamutC": gamutC, "default": defaultGamut}
			}

			static getLightColorGamutRange(modelId = null) {
				let ranges = ColorConverter.getGamutRanges();
				let gamutA = ranges.gamutA;
				let gamutB = ranges.gamutB;
				let gamutC = ranges.gamutC;

				let philipsModels = {
					LST001: gamutA,
					LLC010: gamutA,
					LLC011: gamutA,
					LLC012: gamutA,
					LLC006: gamutA,
					LLC005: gamutA,
					LLC007: gamutA,
					LLC014: gamutA,
					LLC013: gamutA,

					LCT001: gamutB,
					LCT007: gamutB,
					LCT002: gamutB,
					LCT003: gamutB,
					LLM001: gamutB,

					LCT010: gamutC,
					LCT014: gamutC,
					LCT015: gamutC,
					LCT016: gamutC,
					LCT011: gamutC,
					LLC020: gamutC,
					LST002: gamutC,
					LCT012: gamutC,
				};

				if (!!philipsModels[modelId]) {
					return philipsModels[modelId];
				}

				return ranges.default;
			}


			static rgbToXy(red, green, blue, modelId = null) {
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

				if (!ColorConverter.xyIsInGamutRange(xy, colorGamut)) {
					xy = ColorConverter.getClosestColor(xy, colorGamut);
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
				function getLineDistance(pointA, pointB) {
					return Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
				}

				function getClosestPoint(xy, pointA, pointB) {
					let xy2a = [xy.x - pointA.x, xy.y - pointA.y];
					let a2b = [pointB.x - pointA.x, pointB.y - pointA.y];
					let a2bSqr = Math.pow(a2b[0], 2) + Math.pow(a2b[1], 2);
					let xy2a_dot_a2b = xy2a[0] * a2b[0] + xy2a[1] * a2b[1];
					let t = xy2a_dot_a2b / a2bSqr;

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
					greenBlue: getClosestPoint(xy, greenBlue.a, greenBlue.b),
					greenRed: getClosestPoint(xy, greenRed.a, greenRed.b),
					blueRed: getClosestPoint(xy, blueRed.a, blueRed.b)
				};

				let distance = {
					greenBlue: getLineDistance(xy, closestColorPoints.greenBlue),
					greenRed: getLineDistance(xy, closestColorPoints.greenRed),
					blueRed: getLineDistance(xy, closestColorPoints.blueRed)
				};

				let closestDistance;
				let closestColor;
				for (let i in distance) {
					if (distance.hasOwnProperty(i)) {
						if (!closestDistance) {
							closestDistance = distance[i];
							closestColor = i;
						}

						if (closestDistance > distance[i]) {
							closestDistance = distance[i];
							closestColor = i;
						}
					}

				}
				return closestColorPoints[closestColor];
			}

			static xyBriToRgb(x, y, bri) {
				// function getReversedGammaCorrectedValue(value) {
				//     return value <= 0.0031308 ? 12.92 * value : (1.0 + 0.055) * Math.pow(value, (1.0 / 2.4)) - 0.055;
				// }
				//
				// let xy = {
				//     x: x,
				//     y: y
				// };
				//
				// let z = 1.0 - xy.x - xy.y;
				// let Y = bri / 255;
				// let X = (Y / xy.y) * xy.x;
				// let Z = (Y / xy.y) * z;
				// let r = X * 1.656492 - Y * 0.354851 - Z * 0.255038;
				// let g = -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
				// let b = X * 0.051713 - Y * 0.121364 + Z * 1.011530;
				//
				// r = getReversedGammaCorrectedValue(r);
				// g = getReversedGammaCorrectedValue(g);
				// b = getReversedGammaCorrectedValue(b);
				//
				// let red = parseInt(r * 255) > 255 ? 255 : parseInt(r * 255);
				// let green = parseInt(g * 255) > 255 ? 255 : parseInt(g * 255);
				// let blue = parseInt(b * 255) > 255 ? 255 : parseInt(b * 255);
				//
				// red = Math.abs(red);
				// green = Math.abs(green);
				// blue = Math.abs(blue);
				//
				// return [red, green, blue];

				function getReversedGammaCorrectedValue(value) {
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
				let b = X * 0.051713 - Y * 0.121364 + Z * 1.011530;

				r = getReversedGammaCorrectedValue(r);
				g = getReversedGammaCorrectedValue(g);
				b = getReversedGammaCorrectedValue(b);

				// Bring all negative components to zero
				r = Math.max(r, 0);
				g = Math.max(g, 0);
				b = Math.max(b, 0);

				// If one component is greater than 1, weight components by that value
				let max = Math.max(r, g, b);
				if (max > 1) {
					r = r / max;
					g = g / max;
					b = b / max;
				}

				return [
					Math.floor(r * 255),
					Math.floor(g * 255),
					Math.floor(b * 255)
				];

			}
		}

		if (type == "rgb") {
			let xy = value.split(",");
			return ColorConverter.xyBriToRgb(xy[0], xy[1], 254);
		} else if (type == "cie") {
			let xy = ColorConverter.rgbToXy(value[0], value[1], value[2]);
			return xy.x + "," + xy.y;
		}
	},

	//Color slider helpers
	updateColorSliderFields: function (wid, view) {
		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.iColorSliderType;
			if (val == "RGB") {
				vis.hideShowAttr("oid", false);
				vis.hideShowAttr("iIdRed-oid", true);
				vis.hideShowAttr("iIdGreen-oid", true);
				vis.hideShowAttr("iIdBlue-oid", true);
			} else {
				vis.hideShowAttr("oid", true);
				vis.hideShowAttr("iIdRed-oid", false);
				vis.hideShowAttr("iIdGreen-oid", false);
				vis.hideShowAttr("iIdBlue-oid", false);
			}

		});
	},
	updateColorSliderFieldsClick: function (el) {
		if (vis.editMode) {
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
	},


	checkIfTrue: function (data, value, index = null) {

		if ((index == null && data.iUniversalWidgetType == "Navigation") ||
			((data["iCheckType" + index] == "iCheckDefault" && data.iUniversalWidgetType == "Navigation") || data["iCheckType" + index] == "iCheckView")) {

			if (vis.activeView == data.nav_view) {
				return true
			} else {
				return false;
			}
		} else {

			let oid = null;
			let value = null;
			let comparator = null;

			if (index == null) {
				oid = data.oid;
				comparator = data.iValueComparison;
				value = data.iValueTrue;
			} else {
				oid = data["oid" + index];
				comparator = data["iValueComparison" + index];
				value = data["iValue" + index];
			}

			if (oid == undefined) {
				return false;
			}

			let valueType = data.iValueType;

			let comparasionTable = {
				'greater': function (val1, val2) {
					return val1 > val2
				},
				'lower': function (val1, val2) {
					return val1 < val2
				},
				'equal': function (val1, val2) {
					return val1 == val2
				},
				//'>=' : function (val1, val2) { return val1 >= val2 },
				//'<=' : function (val1, val2) { return val1 <= val2 },
				'not': function (val1, val2) {
					return val1 != val2
				},
				'greaterEqual': function (val1, val2) {
					return val1 >= val2
				},
				'lowerEqual': function (val1, val2) {
					return val1 >= val2
				},
			}

			let dpVal = vis.states.attr(oid + ".val");

			dpVal = this.convertValue(dpVal);
			if (valueType == "boolean" && index == null)
				value = true;

			value = this.convertValue(value);

			if (comparator != undefined && comparasionTable[comparator](dpVal, value)) {
				return true;
			} else {
				return false;
			}
		}

	},

	universalButtonBackgroundStyles: function (data) {
		let style = "";

		let isTrue = this.checkIfTrue(data);

		if (isTrue) {
			let invertImg = 0;
			if (data.iImgColorInvertTrue) {
				invertImg = 1;
			}

			style = "--background: " + data.iButtonActive + "; " +
				"--box-shadow-color:" + data.iShadowColorActive + ";" +
				"--border-color: " + data.iBorderColorActive + ";" +
				"--image-blink: " + data.iImgBlinkTrue / 1000 + "s;" +
				"--image-invert: " + invertImg + ";";

		} else {
			let invertImg = 0;
			if (data.iImgColorInvertFalse) {
				invertImg = 1;
			}

			style = "--background: " + data.iButtonCol + "; " +
				"--box-shadow-color:" + data.iShadowColor + ";" +
				"--border-color: " + data.iBorderColor + ";" +
				"--image-blink: " + data.iImgBlinkFalse / 1000 + "s;" +
				"--image-invert: " + invertImg + ";";
		}
		return style;
	},

	universalButtonText: function (data) {
		let text = "";

		let isTrue = this.checkIfTrue(data);

		if (isTrue) {
			text = data.iTextTrue;
		} else {
			text = data.iTextFalse;
		}
		return text;
	},

	universalButtonImage: function (data) {
		let img = "";

		let isTrue = this.checkIfTrue(data);

		if (isTrue) {
			img = data.iImageTrue;
		} else {
			img = data.iImageFalse;
		}
		return img;
	},

	/*universalButtonAlign: function (align) {
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
	},*/

	/*handleBtnClick: function (el, type, data) {
		$(el).parent().on('click touchend', function () {

			switch (type) {
				case "universal":
				case "multi":

					let btnType = data.iUniversalWidgetType;
					let oid = data.oid;
					switch (btnType) {
						case "Switch":
							let dpVal = vis.states[oid + ".val"];
							let valType = data.iValueType;

							if(valType == "boolean"){
								vis.setValue(oid, !dpVal);
							}
							else{
								let valTrue = vis.binds["vis-inventwo"].parseValue(data.iValueTrue);
								let valFalse = vis.binds["vis-inventwo"].parseValue(data.iValueFalse);

								dpVal = vis.binds["vis-inventwo"].parseValue(dpVal);

								if(dpVal == valTrue){
									vis.setValue(oid, valFalse);
								}
								else{
									vis.setValue(oid, valTrue);
								}
							}

							break;
						case "State":
							let val = vis.binds["vis-inventwo"].parseValue(data.value);
							vis.setValue(oid, val);
							break;
						case "Navigation":
							vis.changeView(data.nav_view, data.nav_view);
							break;
						case "Background":
							break;
						case "IncreaseDecreaseValue":
							break;
						default:
							console.log("no btn type");
					}

					break;

				default:
					console.log("no type");
			}

		});
	},*/

	/*parseValue: function (value, type = "") {
		switch (type) {
			case "numeric":
				return parseFloat(value);
			case "string":
				return value.toString();
			case "boolean":
				if(value == "true")
					return true;
				else
					return false;
			default:
				if(value == "true")
					return true;
				else if(value == "false")
					return false;
				else {
					if(!isNaN(value))
						return parseFloat(value);
					else{
						return value;
					}
				}

		}
	},*/

	gridWidget: function (wid, data) {
		console.log("CREATE GRID");

		let $widget = $('#' + wid);

		if (!$widget.length) {
			return setTimeout(function () {
				vis.binds['vis-inventwo'].gridWidget(wid, data);
			}, 100);
		}

		console.log($widget);

		let colWidth = data.iGridColWidth;
		let rowHeight = data.iGridRowHeight;
		let gap = data.iGridGap;
		let padding = data.iGridPadding;

		if (!isNaN(colWidth)) {
			colWidth = colWidth + "px";
		}
		if (!isNaN(rowHeight)) {
			rowHeight = rowHeight + "px";
		}
		if (!isNaN(gap)) {
			gap = gap + "px";
		}
		if (!isNaN(padding)) {
			padding = padding + "px";
		}


		let $view = $widget.closest('.vis-view');
		console.log($view);
		//let $grid = $('<div class="vis-inventwo-grid-container"></div>');
		//$view.append($grid);

		$view.addClass("vis-inventwo-grid-view");
		$view.css("grid-auto-columns", "calc(" + colWidth + " - " + gap + ")");
		$view.css("grid-auto-rows", "calc(" + rowHeight + " - " + gap + ")");
		$view.css("width", "calc(100% - " + padding + ")");
		$view.css("height", "calc(100% - " + padding + ")");
		$view.css("grid-gap", gap);
		$view.css("padding", padding);

		if (vis.editMode) {

			if (data.iGridShow) {


			}

		}

	}


};
