// @ts-nocheck

"use strict";

/*
 * Created with @ioBroker/create-adapter v1.21.1
 */

const utils = require("@iobroker/adapter-core");

class visInventwo extends utils.Adapter {

	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: "vis-inventwo",
		});
		this.on("ready", this.onReady.bind(this));
		this.on("unload", this.onUnload.bind(this));
	}

	async onReady() {

		let states = [
			{
				typ: "channel",
				id: "Config",
				name: "Configuration",
				childs: [
					{
						typ: "state",
						id: "SelectedTheme",
						name: "Selected Theme",
						type: "string",
						states: {
							Basic: "inventwo Theme",
							Dark: "Dark Theme",
							Light: "Light Theme"
						},
						value: "Basic"
					}
				]
			},
			{
				typ: "channel",
				id: "Themes",
				name: "Themes",
				childs: [
					// inventwo Style
					{
						typ: "channel",
						id: "Basic",
						name: "inventwo Style",
						childs: [
							// Hintergrund
							{
								typ: "channel",
								id: "Background",
								name: "General Widget Settings",
								childs: [
									// Farbe
									{
										typ: "state",
										id: "Color1",
										name: "Button Color 1",
										type: "string",
										value: "linear-gradient(#444, #111)"
									},
									{
										typ: "state",
										id: "Color2",
										name: "Button Color 2",
										type: "string",
										value: "#666666"
									},
									{
										typ: "state",
										id: "Color3",
										name: "Button Color 3",
										type: "string",
										value: "#405d66"
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "ColorActive1",
										name: "Button Color Active 1",
										type: "string",
										value: "linear-gradient(#444, #2e434a)"
									},
									{
										typ: "state",
										id: "ColorActive2",
										name: "Button Color Active 2",
										type: "string",
										value: "#2e434a"
									},
									{
										typ: "state",
										id: "ColorActive3",
										name: "Button Color Active 3",
										type: "string",
										value: "#405d66"
									},
									// Farbe bei Hover
									{
										typ: "state",
										id: "ColorHover1",
										name: "Button Color Hover 1",
										type: "string",
										value: "#2e434a"
									},
									{
										typ: "state",
										id: "ColorHover2",
										name: "Button Color Hover 2",
										type: "string",
										value: "#1C4166"
									},
									{
										typ: "state",
										id: "ColorHover3",
										name: "Button Color Hover 3",
										type: "string",
										value: "#405d66"
									},
									// Transparenz
									{
										typ: "state",
										id: "Opacity1",
										name: "Button Opacity 1",
										type: "number",
										value: 0.8
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Button Opacity 2",
										type: "number",
										value: 0.9
									}
								]
							},
							// Ecken
							{
								typ: "channel",
								id: "Corners",
								name: "Corners",
								childs: [
									// Getrennte Radien
									{
										typ: "state",
										id: "UpperLeft",
										name: "Upper Left",
										type: "number",
										unit: "px",
										value: 10
									},
									{
										typ: "state",
										id: "UpperRight",
										name: "Upper Right",
										type: "number",
										unit: "px",
										value: 5
									},
									{
										typ: "state",
										id: "LowerRight",
										name: "Lower Right",
										type: "number",
										unit: "px",
										value: 10
									},
									{
										typ: "state",
										id: "LowerLeft",
										name: "Lower Left",
										type: "number",
										unit: "px",
										value: 5
									},
									// Alle Ecken gleich
									{
										typ: "state",
										id: "AllCorners1",
										name: "All Corners 1",
										type: "number",
										unit: "px",
										value: 5
									},
									{
										typ: "state",
										id: "AllCorners2",
										name: "All Corners 2",
										type: "number",
										unit: "%",
										value: 100
									},
								]
							},
							// Inhalt
							{
								typ: "channel",
								id: "Content",
								name: "Content",
								childs: [
									// Transparenz
									{
										typ: "state",
										id: "Opacity1",
										name: "Content Opacity 1",
										type: "number",
										value: 0.8
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Content Opacity 2",
										type: "number",
										value: 1
									}
								]
							},
							// Text
							{
								typ: "channel",
								id: "Text",
								name: "Content",
								childs: [
									// Farbe
									{
										typ: "state",
										id: "TextColor1",
										name: "Text Color 1",
										type: "string",
										value: "#FFFFFF"
									},
									{
										typ: "state",
										id: "TextColor2",
										name: "Text Color 2",
										type: "string",
										value: "#222222"
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "TextColorActive1",
										name: "Text Color Active 1",
										type: "string",
										value: "#FFFFFF"
									},
									{
										typ: "state",
										id: "TextColorActive2",
										name: "Text Color Active 2",
										type: "string",
										value: "#222222"
									},
									// Groesse
									{
										typ: "state",
										id: "TextSize1",
										name: "Text Size 1",
										type: "number",
										unit: "px",
										value: 14
									},
									{
										typ: "state",
										id: "TextSize2",
										name: "Text Size 2",
										type: "number",
										unit: "px",
										value: 30
									},
									// Abstand
									{
										typ: "state",
										id: "TextDistanceAbove",
										name: "Text Distance Above",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "TextDistanceBelow",
										name: "Text Distance Below",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "TextDistanceLeft",
										name: "Text Distance Left",
										type: "number",
										unit: "px",
										value: 3
									},
									{
										typ: "state",
										id: "TextDistanceRight",
										name: "Text Distance Right",
										type: "number",
										unit: "px",
										value: 0
									}
								]
							},
							// Bild
							{
								typ: "channel",
								id: "Icon",
								name: "Content",
								childs: [
									// Groesse
									{
										typ: "state",
										id: "IconSize1",
										name: "Icon Size 1",
										type: "number",
										unit: "px",
										value: 65
									},
									{
										typ: "state",
										id: "IconSize2",
										name: "Icon Size 2",
										type: "number",
										unit: "px",
										value: 30
									},
									// Abstand
									{
										typ: "state",
										id: "IconDistanceAbove",
										name: "Icon Distance Above",
										type: "number",
										unit: "px",
										value: 5
									},
									{
										typ: "state",
										id: "IconDistanceBelow",
										name: "Icon Distance Below",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "IconDistanceLeft",
										name: "Icon Distance Left",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "IconDistanceRight",
										name: "Icon Distance Right",
										type: "number",
										unit: "px",
										value: 0
									},
									// Farbe
									{
										typ: "state",
										id: "IconColor1",
										name: "Icon Color 1",
										type: "string",
										value: "#FFFFFF"
									},
									{
										typ: "state",
										id: "IconColorActive1",
										name: "Icon Color Active 1",
										type: "string",
										value: "#FFFFFF"
									}
								]
							},
							// Schatten aussen
							{
								typ: "channel",
								id: "ShadowOuter",
								name: "Shadow Outer",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowOuterOffsetX",
										name: "Shadow Outer Offset X",
										type: "number",
										unit: "px",
										value: 2
									},
									{
										typ: "state",
										id: "ShadowOuterOffsetY",
										name: "Shadow Outer Offset Y",
										type: "number",
										unit: "px",
										value: 2
									},
									// Blur
									{
										typ: "state",
										id: "ShadowOuterBlur",
										name: "Shadow Outer Blur",
										type: "number",
										unit: "px",
										value: 2
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowOuterSize",
										name: "Shadow Outer Size",
										type: "number",
										unit: "px",
										value: 2
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowOuterColor",
										name: "Shadow Outer Color",
										type: "string",
										value: "#111111"
									},
									{
										typ: "state",
										id: "ShadowOuterColorActive",
										name: "Shadow Outer Color Active",
										type: "string",
										value: "#111111"
									},
									{
										typ: "state",
										id: "ShadowOuterColorHover",
										name: "Shadow Outer Color Hover",
										type: "string",
										value: "#111111"
									}
								]
							},
							// Schatten innen
							{
								typ: "channel",
								id: "ShadowInner",
								name: "Shadow Inner",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowInnerOffsetX",
										name: "Shadow Inner Offset X",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "ShadowInnerOffsetY",
										name: "Shadow Inner Offset Y",
										type: "number",
										unit: "px",
										value: 0
									},
									// Blur
									{
										typ: "state",
										id: "ShadowInnerBlur",
										name: "Shadow Inner Blur",
										type: "number",
										unit: "px",
										value: 2
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowInnerSize",
										name: "Shadow Inner Size",
										type: "number",
										unit: "px",
										value: 2
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowInnerColor",
										name: "Shadow Inner Color",
										type: "string",
										value: "#2e434a"
									},
									{
										typ: "state",
										id: "ShadowInnerColorActive",
										name: "Shadow Inner Color Active",
										type: "string",
										value: "#2e434a"
									},
									{
										typ: "state",
										id: "ShadowInnerColorHover",
										name: "Shadow Inner Color Hover",
										type: "string",
										value: "#2e434a"
									}
								]
							},
							// Schatten Text
							{
								typ: "channel",
								id: "ShadowText",
								name: "Shadow Text",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowTextOffsetX",
										name: "Shadow Text Offset X",
										type: "number",
										unit: "px",
										value: 3
									},
									{
										typ: "state",
										id: "ShadowTextOffsetY",
										name: "Shadow Text Offset Y",
										type: "number",
										unit: "px",
										value: 3
									},
									// Blur
									{
										typ: "state",
										id: "ShadowTextBlur",
										name: "Shadow Text Blur",
										type: "number",
										unit: "px",
										value: 2
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowTextSize",
										name: "Shadow Text Size",
										type: "number",
										unit: "px",
										value: 2
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowTextColor",
										name: "Shadow Text Color",
										type: "string",
										value: "#111111"
									},
									{
										typ: "state",
										id: "ShadowTextColorActive",
										name: "Shadow Text Color Active",
										type: "string",
										value: "#111111"
									}
								]
							},
							// Umrandung
							{
								typ: "channel",
								id: "Border",
								name: "Border",
								childs: [
									// Breite
									{
										typ: "state",
										id: "BorderSize",
										name: "Border Size",
										type: "number",
										unit: "px",
										value: 0
									},
									// Farbe
									{
										typ: "state",
										id: "BorderColor",
										name: "Border Color",
										type: "string",
										value: "#2e434a"
									},
									{
										typ: "state",
										id: "BorderColorActive",
										name: "Border Color Active",
										type: "string",
										value: "#2e434a"
									}
								]
							},
							// Wallpaper
							{
								typ: "channel",
								id: "Wallpaper",
								name: "Walpaper",
								childs: [
									// URL
									{
										typ: "state",
										id: "WallpaperURL1",
										name: "Wallpaper URL 1",
										type: "string",
										value: "/vis-icontwo/Backgrounds/104.jpg"
									},
									{
										typ: "state",
										id: "WallpaperURL2",
										name: "Wallpaper URL 2",
										type: "string",
										value: "/vis-icontwo/Backgrounds/110.jpg"
									},
									// Transparenz
									{
										typ: "state",
										id: "WallpaperOpacity",
										name: "Wallpaper Opacity",
										type: "number",
										value: 0.9
									}
								]
							},
							// Eigene Datenpunkte
							{
								typ: "channel",
								id: "_Customs",
								name: "Custom Variables",
								childs: [
									{
										typ: "state",
										id: "Custom1",
										name: "Custom 1",
										type: "string",
										value: "",
									},
									{
										typ: "state",
										id: "Custom2",
										name: "Custom 2",
										type: "string",
										value: "",
									},
									{
										typ: "state",
										id: "Custom3",
										name: "Custom 3",
										type: "string",
										value: "",
									}
								]
							}
						]
					},
					// Light Style
					{
						typ: "channel",
						id: "Light",
						name: "Light Theme",
						childs: [
							// Hintergrund
							{
								typ: "channel",
								id: "Background",
								name: "General Widget Settings",
								childs: [
									// Farbe
									{
										typ: "state",
										id: "Color1",
										name: "Button Color 1",
										type: "string",
										value: "#FFFFFF"
									},
									{
										typ: "state",
										id: "Color2",
										name: "Button Color 2",
										type: "string",
										value: "#999999"
									},
									{
										typ: "state",
										id: "Color3",
										name: "Button Color 3",
										type: "string",
										value: "#888888"
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "ColorActive1",
										name: "Button Color Active 1",
										type: "string",
										value: "linear-gradient(#FFF, #dbdbdb)"
									},
									{
										typ: "state",
										id: "ColorActive2",
										name: "Button Color Active 2",
										type: "string",
										value: "#bababa"
									},
									{
										typ: "state",
										id: "ColorActive3",
										name: "Button Color Active 3",
										type: "string",
										value: "#9e9e9e"
									},
									// Farbe bei Hover
									{
										typ: "state",
										id: "ColorHover1",
										name: "Button Color Hover 1",
										type: "string",
										value: "#dbdbdb"
									},
									{
										typ: "state",
										id: "ColorHover2",
										name: "Button Color Hover 2",
										type: "string",
										value: "#bababa"
									},
									{
										typ: "state",
										id: "ColorHover3",
										name: "Button Color Hover 3",
										type: "string",
										value: "#9e9e9e"
									},
									// Transparenz
									{
										typ: "state",
										id: "Opacity1",
										name: "Button Opacity 1",
										type: "number",
										value: 0.9
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Button Opacity 2",
										type: "number",
										value: 0.8
									}
								]
							},
							// Ecken
							{
								typ: "channel",
								id: "Corners",
								name: "Corners",
								childs: [
									// Getrennte Radien
									{
										typ: "state",
										id: "UpperLeft",
										name: "Upper Left",
										type: "number",
										unit: "px",
										value: 1
									},
									{
										typ: "state",
										id: "UpperRight",
										name: "Upper Right",
										type: "number",
										unit: "px",
										value: 1
									},
									{
										typ: "state",
										id: "LowerRight",
										name: "Lower Right",
										type: "number",
										unit: "px",
										value: 1
									},
									{
										typ: "state",
										id: "LowerLeft",
										name: "Lower Left",
										type: "number",
										unit: "px",
										value: 1
									},
									// Alle Ecken gleich
									{
										typ: "state",
										id: "AllCorners1",
										name: "All Corners 1",
										type: "number",
										unit: "px",
										value: 2
									},
									{
										typ: "state",
										id: "AllCorners2",
										name: "All Corners 2",
										type: "number",
										unit: "%",
										value: 100
									},
								]
							},
							// Inhalt
							{
								typ: "channel",
								id: "Content",
								name: "Content",
								childs: [
									// Transparenz
									{
										typ: "state",
										id: "Opacity1",
										name: "Content Opacity 1",
										type: "number",
										value: 0.9
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Content Opacity 2",
										type: "number",
										value: 0.8
									}
								]
							},
							// Text
							{
								typ: "channel",
								id: "Text",
								name: "Content",
								childs: [
									// Farbe
									{
										typ: "state",
										id: "TextColor1",
										name: "Text Color 1",
										type: "string",
										value: "#111111"
									},
									{
										typ: "state",
										id: "TextColor2",
										name: "Text Color 2",
										type: "string",
										value: "#222222"
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "TextColorActive1",
										name: "Text Color Active 1",
										type: "string",
										value: "#111111"
									},
									{
										typ: "state",
										id: "TextColorActive2",
										name: "Text Color Active 2",
										type: "string",
										value: "#222222"
									},
									// Groesse
									{
										typ: "state",
										id: "TextSize1",
										name: "Text Size 1",
										type: "number",
										unit: "px",
										value: 14
									},
									{
										typ: "state",
										id: "TextSize2",
										name: "Text Size 2",
										type: "number",
										unit: "px",
										value: 30
									},
									// Abstand
									{
										typ: "state",
										id: "TextDistanceAbove",
										name: "Text Distance Above",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "TextDistanceBelow",
										name: "Text Distance Below",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "TextDistanceLeft",
										name: "Text Distance Left",
										type: "number",
										unit: "px",
										value: 3
									},
									{
										typ: "state",
										id: "TextDistanceRight",
										name: "Text Distance Right",
										type: "number",
										unit: "px",
										value: 0
									}
								]
							},
							// Bild
							{
								typ: "channel",
								id: "Icon",
								name: "Content",
								childs: [
									// Groesse
									{
										typ: "state",
										id: "IconSize1",
										name: "Icon Size 1",
										type: "number",
										unit: "px",
										value: 65
									},
									{
										typ: "state",
										id: "IconSize2",
										name: "Icon Size 2",
										type: "number",
										unit: "px",
										value: 30
									},
									// Abstand
									{
										typ: "state",
										id: "IconDistanceAbove",
										name: "Icon Distance Above",
										type: "number",
										unit: "px",
										value: 5
									},
									{
										typ: "state",
										id: "IconDistanceBelow",
										name: "Icon Distance Below",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "IconDistanceLeft",
										name: "Icon Distance Left",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "IconDistanceRight",
										name: "Icon Distance Right",
										type: "number",
										unit: "px",
										value: 0
									},
									// Farbe
									{
										typ: "state",
										id: "IconColor1",
										name: "Icon Color 1",
										type: "string",
										value: "#111111"
									},
									{
										typ: "state",
										id: "IconColorActive1",
										name: "Icon Color Active 1",
										type: "string",
										value: "#222222"
									}
								]
							},
							// Schatten aussen
							{
								typ: "channel",
								id: "ShadowOuter",
								name: "Shadow Outer",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowOuterOffsetX",
										name: "Shadow Outer Offset X",
										type: "number",
										unit: "px",
										value: 2
									},
									{
										typ: "state",
										id: "ShadowOuterOffsetY",
										name: "Shadow Outer Offset Y",
										type: "number",
										unit: "px",
										value: 2
									},
									// Blur
									{
										typ: "state",
										id: "ShadowOuterBlur",
										name: "Shadow Outer Blur",
										type: "number",
										unit: "px",
										value: 2
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowOuterSize",
										name: "Shadow Outer Size",
										type: "number",
										unit: "px",
										value: 2
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowOuterColor",
										name: "Shadow Outer Color",
										type: "string",
										value: "#333333"
									},
									{
										typ: "state",
										id: "ShadowOuterColorActive",
										name: "Shadow Outer Color Active",
										type: "string",
										value: "#333333"
									},
									{
										typ: "state",
										id: "ShadowOuterColorHover",
										name: "Shadow Outer Color Hover",
										type: "string",
										value: "#333333"
									}
								]
							},
							// Schatten innen
							{
								typ: "channel",
								id: "ShadowInner",
								name: "Shadow Inner",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowInnerOffsetX",
										name: "Shadow Inner Offset X",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "ShadowInnerOffsetY",
										name: "Shadow Inner Offset Y",
										type: "number",
										unit: "px",
										value: 0
									},
									// Blur
									{
										typ: "state",
										id: "ShadowInnerBlur",
										name: "Shadow Inner Blur",
										type: "number",
										unit: "px",
										value: 1
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowInnerSize",
										name: "Shadow Inner Size",
										type: "number",
										unit: "px",
										value: 1
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowInnerColor",
										name: "Shadow Inner Color",
										type: "string",
										value: "#595959"
									},
									{
										typ: "state",
										id: "ShadowInnerColorActive",
										name: "Shadow Inner Color Active",
										type: "string",
										value: "#B2B2B2"
									},
									{
										typ: "state",
										id: "ShadowInnerColorHover",
										name: "Shadow Inner Color Hover",
										type: "string",
										value: "#B2B2B2"
									}
								]
							},
							// Schatten Text
							{
								typ: "channel",
								id: "ShadowText",
								name: "Shadow Text",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowTextOffsetX",
										name: "Shadow Text Offset X",
										type: "number",
										unit: "px",
										value: 2
									},
									{
										typ: "state",
										id: "ShadowTextOffsetY",
										name: "Shadow Text Offset Y",
										type: "number",
										unit: "px",
										value: 2
									},
									// Blur
									{
										typ: "state",
										id: "ShadowTextBlur",
										name: "Shadow Text Blur",
										type: "number",
										unit: "px",
										value: 2
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowTextSize",
										name: "Shadow Text Size",
										type: "number",
										unit: "px",
										value: 1
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowTextColor",
										name: "Shadow Text Color",
										type: "string",
										value: "#9C9C9C"
									},
									{
										typ: "state",
										id: "ShadowTextColorActive",
										name: "Shadow Text Color Active",
										type: "string",
										value: "#9C9C9C"
									}
								]
							},
							// Umrandung
							{
								typ: "channel",
								id: "Border",
								name: "Border",
								childs: [
									// Breite
									{
										typ: "state",
										id: "BorderSize",
										name: "Border Size",
										type: "number",
										unit: "px",
										value: 0
									},
									// Farbe
									{
										typ: "state",
										id: "BorderColor",
										name: "Border Color",
										type: "string",
										value: "#9C9C9C"
									},
									{
										typ: "state",
										id: "BorderColorActive",
										name: "Border Color Active",
										type: "string",
										value: "#9C9C9C"
									}
								]
							},
							// Wallpaper
							{
								typ: "channel",
								id: "Wallpaper",
								name: "Walpaper",
								childs: [
									// URL
									{
										typ: "state",
										id: "WallpaperURL1",
										name: "Wallpaper URL 1",
										type: "string",
										value: "/vis-icontwo/Backgrounds/105.jpg"
									},
									{
										typ: "state",
										id: "WallpaperURL2",
										name: "Wallpaper URL 2",
										type: "string",
										value: "/vis-icontwo/Backgrounds/105.jpg"
									},
									// Transparenz
									{
										typ: "state",
										id: "WallpaperOpacity",
										name: "Wallpaper Opacity",
										type: "number",
										value: 0.5
									}
								]
							},
							// Eigene Datenpunkte
							{
								typ: "channel",
								id: "_Customs",
								name: "Custom Variables",
								childs: [
									{
										typ: "state",
										id: "Custom1",
										name: "Custom 1",
										type: "string",
										value: "",
									},
									{
										typ: "state",
										id: "Custom2",
										name: "Custom 2",
										type: "string",
										value: "",
									},
									{
										typ: "state",
										id: "Custom3",
										name: "Custom 3",
										type: "string",
										value: "",
									}
								]
							}
						]
					},
					// Dark Style
					{
						typ: "channel",
						id: "Dark",
						name: "Dark Theme",
						childs: [
							// Hintergrund
							{
								typ: "channel",
								id: "Background",
								name: "General Widget Settings",
								childs: [
									// Farbe
									{
										typ: "state",
										id: "Color1",
										name: "Button Color 1",
										type: "string",
										value: "#1c1c1c"
									},
									{
										typ: "state",
										id: "Color2",
										name: "Button Color 2",
										type: "string",
										value: "#444444"
									},
									{
										typ: "state",
										id: "Color3",
										name: "Button Color 3",
										type: "string",
										value: "#888888"
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "ColorActive1",
										name: "Button Color Active 1",
										type: "string",
										value: "#dbdbdb"
									},
									{
										typ: "state",
										id: "ColorActive2",
										name: "Button Color Active 2",
										type: "string",
										value: "#25361c"
									},
									{
										typ: "state",
										id: "ColorActive3",
										name: "Button Color Active 3",
										type: "string",
										value: "#9e9e9e"
									},
									// Farbe bei Hover
									{
										typ: "state",
										id: "ColorHover1",
										name: "Button Color Hover 1",
										type: "string",
										value: "#25361c"
									},
									{
										typ: "state",
										id: "ColorHover2",
										name: "Button Color Hover 2",
										type: "string",
										value: "#bababa"
									},
									{
										typ: "state",
										id: "ColorHover3",
										name: "Button Color Hover 3",
										type: "string",
										value: "#9e9e9e"
									},
									// Transparenz
									{
										typ: "state",
										id: "Opacity1",
										name: "Button Opacity 1",
										type: "number",
										value: 0.8
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Button Opacity 2",
										type: "number",
										value: 0.8
									}
								]
							},
							// Ecken
							{
								typ: "channel",
								id: "Corners",
								name: "Corners",
								childs: [
									// Getrennte Radien
									{
										typ: "state",
										id: "UpperLeft",
										name: "Upper Left",
										type: "number",
										unit: "px",
										value: 2
									},
									{
										typ: "state",
										id: "UpperRight",
										name: "Upper Right",
										type: "number",
										unit: "px",
										value: 15
									},
									{
										typ: "state",
										id: "LowerRight",
										name: "Lower Right",
										type: "number",
										unit: "px",
										value: 15
									},
									{
										typ: "state",
										id: "LowerLeft",
										name: "Lower Left",
										type: "number",
										unit: "px",
										value: 2
									},
									// Alle Ecken gleich
									{
										typ: "state",
										id: "AllCorners1",
										name: "All Corners 1",
										type: "number",
										unit: "px",
										value: 5
									},
									{
										typ: "state",
										id: "AllCorners2",
										name: "All Corners 2",
										type: "number",
										unit: "%",
										value: 100
									},
								]
							},
							// Inhalt
							{
								typ: "channel",
								id: "Content",
								name: "Content",
								childs: [
									// Transparenz
									{
										typ: "state",
										id: "Opacity1",
										name: "Content Opacity 1",
										type: "number",
										value: 0.9
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Content Opacity 2",
										type: "number",
										value: 0.8
									}
								]
							},
							// Text
							{
								typ: "channel",
								id: "Text",
								name: "Content",
								childs: [
									// Farbe
									{
										typ: "state",
										id: "TextColor1",
										name: "Text Color 1",
										type: "string",
										value: "#a3a3a3"
									},
									{
										typ: "state",
										id: "TextColor2",
										name: "Text Color 2",
										type: "string",
										value: "#222222"
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "TextColorActive1",
										name: "Text Color Active 1",
										type: "string",
										value: "#a3a3a3"
									},
									{
										typ: "state",
										id: "TextColorActive2",
										name: "Text Color Active 2",
										type: "string",
										value: "#222222"
									},
									// Groesse
									{
										typ: "state",
										id: "TextSize1",
										name: "Text Size 1",
										type: "number",
										unit: "px",
										value: 14
									},
									{
										typ: "state",
										id: "TextSize2",
										name: "Text Size 2",
										type: "number",
										unit: "px",
										value: 30
									},
									// Abstand
									{
										typ: "state",
										id: "TextDistanceAbove",
										name: "Text Distance Above",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "TextDistanceBelow",
										name: "Text Distance Below",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "TextDistanceLeft",
										name: "Text Distance Left",
										type: "number",
										unit: "px",
										value: 3
									},
									{
										typ: "state",
										id: "TextDistanceRight",
										name: "Text Distance Right",
										type: "number",
										unit: "px",
										value: 0
									}
								]
							},
							// Bild
							{
								typ: "channel",
								id: "Icon",
								name: "Content",
								childs: [
									// Groesse
									{
										typ: "state",
										id: "IconSize1",
										name: "Icon Size 1",
										type: "number",
										unit: "px",
										value: 65
									},
									{
										typ: "state",
										id: "IconSize2",
										name: "Icon Size 2",
										type: "number",
										unit: "px",
										value: 30
									},
									// Abstand
									{
										typ: "state",
										id: "IconDistanceAbove",
										name: "Icon Distance Above",
										type: "number",
										unit: "px",
										value: 5
									},
									{
										typ: "state",
										id: "IconDistanceBelow",
										name: "Icon Distance Below",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "IconDistanceLeft",
										name: "Icon Distance Left",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "IconDistanceRight",
										name: "Icon Distance Right",
										type: "number",
										unit: "px",
										value: 0
									},
									// Farbe
									{
										typ: "state",
										id: "IconColor1",
										name: "Icon Color 1",
										type: "string",
										value: "#a3a3a3"
									},
									{
										typ: "state",
										id: "IconColorActive1",
										name: "Icon Color Active 1",
										type: "string",
										value: "#a3a3a3"
									}
								]
							},
							// Schatten aussen
							{
								typ: "channel",
								id: "ShadowOuter",
								name: "Shadow Outer",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowOuterOffsetX",
										name: "Shadow Outer Offset X",
										type: "number",
										unit: "px",
										value: 2
									},
									{
										typ: "state",
										id: "ShadowOuterOffsetY",
										name: "Shadow Outer Offset Y",
										type: "number",
										unit: "px",
										value: 2
									},
									// Blur
									{
										typ: "state",
										id: "ShadowOuterBlur",
										name: "Shadow Outer Blur",
										type: "number",
										unit: "px",
										value: 2
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowOuterSize",
										name: "Shadow Outer Size",
										type: "number",
										unit: "px",
										value: 2
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowOuterColor",
										name: "Shadow Outer Color",
										type: "string",
										value: "#111111"
									},
									{
										typ: "state",
										id: "ShadowOuterColorActive",
										name: "Shadow Outer Color Active",
										type: "string",
										value: "#111111"
									},
									{
										typ: "state",
										id: "ShadowOuterColorHover",
										name: "Shadow Outer Color Hover",
										type: "string",
										value: "#111111"
									}
								]
							},
							// Schatten innen
							{
								typ: "channel",
								id: "ShadowInner",
								name: "Shadow Inner",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowInnerOffsetX",
										name: "Shadow Inner Offset X",
										type: "number",
										unit: "px",
										value: 0
									},
									{
										typ: "state",
										id: "ShadowInnerOffsetY",
										name: "Shadow Inner Offset Y",
										type: "number",
										unit: "px",
										value: 0
									},
									// Blur
									{
										typ: "state",
										id: "ShadowInnerBlur",
										name: "Shadow Inner Blur",
										type: "number",
										unit: "px",
										value: 2
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowInnerSize",
										name: "Shadow Inner Size",
										type: "number",
										unit: "px",
										value: 2
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowInnerColor",
										name: "Shadow Inner Color",
										type: "string",
										value: "#38522b"
									},
									{
										typ: "state",
										id: "ShadowInnerColorActive",
										name: "Shadow Inner Color Active",
										type: "string",
										value: "#B2B2B2"
									},
									{
										typ: "state",
										id: "ShadowInnerColorHover",
										name: "Shadow Inner Color Hover",
										type: "string",
										value: "#38522b"
									}
								]
							},
							// Schatten Text
							{
								typ: "channel",
								id: "ShadowText",
								name: "Shadow Text",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowTextOffsetX",
										name: "Shadow Text Offset X",
										type: "number",
										unit: "px",
										value: 2
									},
									{
										typ: "state",
										id: "ShadowTextOffsetY",
										name: "Shadow Text Offset Y",
										type: "number",
										unit: "px",
										value: 2
									},
									// Blur
									{
										typ: "state",
										id: "ShadowTextBlur",
										name: "Shadow Text Blur",
										type: "number",
										unit: "px",
										value: 2
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowTextSize",
										name: "Shadow Text Size",
										type: "number",
										unit: "px",
										value: 2
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowTextColor",
										name: "Shadow Text Color",
										type: "string",
										value: "#575757"
									},
									{
										typ: "state",
										id: "ShadowTextColorActive",
										name: "Shadow Text Color Active",
										type: "string",
										value: "#575757"
									}
								]
							},
							// Umrandung
							{
								typ: "channel",
								id: "Border",
								name: "Border",
								childs: [
									// Breite
									{
										typ: "state",
										id: "BorderSize",
										name: "Border Size",
										type: "number",
										unit: "px",
										value: 0
									},
									// Farbe
									{
										typ: "state",
										id: "BorderColor",
										name: "Border Color",
										type: "string",
										value: "#9C9C9C"
									},
									{
										typ: "state",
										id: "BorderColorActive",
										name: "Border Color Active",
										type: "string",
										value: "#9C9C9C"
									}
								]
							},
							// Wallpaper
							{
								typ: "channel",
								id: "Wallpaper",
								name: "Walpaper",
								childs: [
									// URL
									{
										typ: "state",
										id: "WallpaperURL1",
										name: "Wallpaper URL 1",
										type: "string",
										value: "/vis-icontwo/Backgrounds/105.jpg"
									},
									{
										typ: "state",
										id: "WallpaperURL2",
										name: "Wallpaper URL 2",
										type: "string",
										value: "/vis-icontwo/Backgrounds/105.jpg"
									},
									// Transparenz
									{
										typ: "state",
										id: "WallpaperOpacity",
										name: "Wallpaper Opacity",
										type: "number",
										value: 0.3
									}
								]
							},
							// Eigene Datenpunkte
							{
								typ: "channel",
								id: "_Customs",
								name: "Custom Variables",
								childs: [
									{
										typ: "state",
										id: "Custom1",
										name: "Custom 1",
										type: "string",
										value: "",
									},
									{
										typ: "state",
										id: "Custom2",
										name: "Custom 2",
										type: "string",
										value: "",
									},
									{
										typ: "state",
										id: "Custom3",
										name: "Custom 3",
										type: "string",
										value: "",
									}
								]
							}
						]
					},
					// Custom Style
					{
						typ: "channel",
						id: "_CustomTheme",
						name: "Custom Theme",
						childs: [
							// Hintergrund
							{
								typ: "channel",
								id: "Background",
								name: "General Widget Settings",
								childs: [
									// Farbe
									{
										typ: "state",
										id: "Color1",
										name: "Button Color 1",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "Color2",
										name: "Button Color 2",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "Color3",
										name: "Button Color 3",
										type: "string",
										value: ""
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "ColorActive1",
										name: "Button Color Active 1",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ColorActive2",
										name: "Button Color Active 2",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ColorActive3",
										name: "Button Color Active 3",
										type: "string",
										value: ""
									},
									// Farbe bei Hover
									{
										typ: "state",
										id: "ColorHover1",
										name: "Button Color Hover 1",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ColorHover2",
										name: "Button Color Hover 2",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ColorHover3",
										name: "Button Color Hover 3",
										type: "string",
										value: ""
									},
									// Transparenz
									{
										typ: "state",
										id: "Opacity1",
										name: "Button Opacity 1",
										type: "number",
										value: ""
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Button Opacity 2",
										type: "number",
										value: ""
									}
								]
							},
							// Ecken
							{
								typ: "channel",
								id: "Corners",
								name: "Corners",
								childs: [
									// Getrennte Radien
									{
										typ: "state",
										id: "UpperLeft",
										name: "Upper Left",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "UpperRight",
										name: "Upper Right",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "LowerRight",
										name: "Lower Right",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "LowerLeft",
										name: "Lower Left",
										type: "number",
										unit: "px",
										value: ""
									},
									// Alle Ecken gleich
									{
										typ: "state",
										id: "AllCorners1",
										name: "All Corners 1",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "AllCorners2",
										name: "All Corners 2",
										type: "number",
										unit: "%",
										value: ""
									},
								]
							},
							// Inhalt
							{
								typ: "channel",
								id: "Content",
								name: "Content",
								childs: [
									// Transparenz
									{
										typ: "state",
										id: "Opacity1",
										name: "Content Opacity 1",
										type: "number",
										value: ""
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Content Opacity 2",
										type: "number",
										value: ""
									}
								]
							},
							// Text
							{
								typ: "channel",
								id: "Text",
								name: "Content",
								childs: [
									// Farbe
									{
										typ: "state",
										id: "TextColor1",
										name: "Text Color 1",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "TextColor2",
										name: "Text Color 2",
										type: "string",
										value: ""
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "TextColorActive1",
										name: "Text Color Active 1",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "TextColorActive2",
										name: "Text Color Active 2",
										type: "string",
										value: ""
									},
									// Groesse
									{
										typ: "state",
										id: "TextSize1",
										name: "Text Size 1",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "TextSize2",
										name: "Text Size 2",
										type: "number",
										unit: "px",
										value: ""
									},
									// Abstand
									{
										typ: "state",
										id: "TextDistanceAbove",
										name: "Text Distance Above",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "TextDistanceBelow",
										name: "Text Distance Below",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "TextDistanceLeft",
										name: "Text Distance Left",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "TextDistanceRight",
										name: "Text Distance Right",
										type: "number",
										unit: "px",
										value: ""
									}
								]
							},
							// Bild
							{
								typ: "channel",
								id: "Icon",
								name: "Content",
								childs: [
									// Groesse
									{
										typ: "state",
										id: "IconSize1",
										name: "Icon Size 1",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "IconSize2",
										name: "Icon Size 2",
										type: "number",
										unit: "px",
										value: ""
									},
									// Abstand
									{
										typ: "state",
										id: "IconDistanceAbove",
										name: "Icon Distance Above",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "IconDistanceBelow",
										name: "Icon Distance Below",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "IconDistanceLeft",
										name: "Icon Distance Left",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "IconDistanceRight",
										name: "Icon Distance Right",
										type: "number",
										unit: "px",
										value: ""
									},
									// Farbe
									{
										typ: "state",
										id: "IconColor1",
										name: "Icon Color 1",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "IconColorActive1",
										name: "Icon Color Active 1",
										type: "string",
										value: ""
									}
								]
							},
							// Schatten aussen
							{
								typ: "channel",
								id: "ShadowOuter",
								name: "Shadow Outer",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowOuterOffsetX",
										name: "Shadow Outer Offset X",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "ShadowOuterOffsetY",
										name: "Shadow Outer Offset Y",
										type: "number",
										unit: "px",
										value: ""
									},
									// Blur
									{
										typ: "state",
										id: "ShadowOuterBlur",
										name: "Shadow Outer Blur",
										type: "number",
										unit: "px",
										value: ""
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowOuterSize",
										name: "Shadow Outer Size",
										type: "number",
										unit: "px",
										value: ""
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowOuterColor",
										name: "Shadow Outer Color",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ShadowOuterColorActive",
										name: "Shadow Outer Color Active",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ShadowOuterColorHover",
										name: "Shadow Outer Color Hover",
										type: "string",
										value: ""
									}
								]
							},
							// Schatten innen
							{
								typ: "channel",
								id: "ShadowInner",
								name: "Shadow Inner",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowInnerOffsetX",
										name: "Shadow Inner Offset X",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "ShadowInnerOffsetY",
										name: "Shadow Inner Offset Y",
										type: "number",
										unit: "px",
										value: ""
									},
									// Blur
									{
										typ: "state",
										id: "ShadowInnerBlur",
										name: "Shadow Inner Blur",
										type: "number",
										unit: "px",
										value: ""
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowInnerSize",
										name: "Shadow Inner Size",
										type: "number",
										unit: "px",
										value: ""
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowInnerColor",
										name: "Shadow Inner Color",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ShadowInnerColorActive",
										name: "Shadow Inner Color Active",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ShadowInnerColorHover",
										name: "Shadow Inner Color Hover",
										type: "string",
										value: ""
									}
								]
							},
							// Schatten Text
							{
								typ: "channel",
								id: "ShadowText",
								name: "Shadow Text",
								childs: [
									// X Versatz
									{
										typ: "state",
										id: "ShadowTextOffsetX",
										name: "Shadow Text Offset X",
										type: "number",
										unit: "px",
										value: ""
									},
									{
										typ: "state",
										id: "ShadowTextOffsetY",
										name: "Shadow Text Offset Y",
										type: "number",
										unit: "px",
										value: ""
									},
									// Blur
									{
										typ: "state",
										id: "ShadowTextBlur",
										name: "Shadow Text Blur",
										type: "number",
										unit: "px",
										value: ""
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowTextSize",
										name: "Shadow Text Size",
										type: "number",
										unit: "px",
										value: ""
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowTextColor",
										name: "Shadow Text Color",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "ShadowTextColorActive",
										name: "Shadow Text Color Active",
										type: "string",
										value: ""
									}
								]
							},
							// Umrandung
							{
								typ: "channel",
								id: "Border",
								name: "Border",
								childs: [
									// Breite
									{
										typ: "state",
										id: "BorderSize",
										name: "Border Size",
										type: "number",
										unit: "px",
										value: ""
									},
									// Farbe
									{
										typ: "state",
										id: "BorderColor",
										name: "Border Color",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "BorderColorActive",
										name: "Border Color Active",
										type: "string",
										value: ""
									}
								]
							},
							// Wallpaper
							{
								typ: "channel",
								id: "Wallpaper",
								name: "Walpaper",
								childs: [
									// URL
									{
										typ: "state",
										id: "WallpaperURL1",
										name: "Wallpaper URL 1",
										type: "string",
										value: ""
									},
									{
										typ: "state",
										id: "WallpaperURL2",
										name: "Wallpaper URL 2",
										type: "string",
										value: ""
									},
									// Transparenz
									{
										typ: "state",
										id: "WallpaperOpacity",
										name: "Wallpaper Opacity",
										type: "number",
										value: ""
									}
								]
							},
							// Eigene Datenpunkte
							{
								typ: "channel",
								id: "_Customs",
								name: "Custom Variables",
								childs: [
									{
										typ: "state",
										id: "Custom1",
										name: "Custom 1",
										type: "string",
										value: "",
									},
									{
										typ: "state",
										id: "Custom2",
										name: "Custom 2",
										type: "string",
										value: "",
									},
									{
										typ: "state",
										id: "Custom3",
										name: "Custom 3",
										type: "string",
										value: "",
									}
								]
							}
						]
					}
				]
			},
			// Eigene Datenpunkte
			{
				typ: "channel",
				id: "Customs",
				name: "Custom Variables",
				childs: [
					{
						typ: "state",
						id: "Custom1",
						name: "Custom 1",
						type: "string",
						value: "",
					},
					{
						typ: "state",
						id: "Custom2",
						name: "Custom 2",
						type: "string",
						value: "",
					},
					{
						typ: "state",
						id: "Custom3",
						name: "Custom 3",
						type: "string",
						value: "",
					},
					{
						typ: "state",
						id: "Custom4",
						name: "Custom 4",
						type: "string",
						value: "",
					},
					{
						typ: "state",
						id: "Custom5",
						name: "Custom 5",
						type: "string",
						value: "",
					}
				]
			},
			// Altlasten
			{
				typ: "channel",
				id: "CSS",
				name: "CSS Older Nature",
				childs: [
					{
						typ: "state",
						id: "Button",
						name: "Button Color",
						type: "string",
						value: "#333333",
					},
					{
						typ: "state",
						id: "Active",
						name: "Button Color Active",
						type: "string",
						value: "#455618",
					},
					{
						typ: "state",
						id: "Text",
						name: "Text Color",
						type: "string",
						value: "#C7C7C7",
					}
				]
			}
		];

		await this.createState("", states);

	}

	createState = async (id, states) => {
		let $this = this;
		let l = states.length;
		for (let i = 0; i < l; i++) {
			let state = states[i];

			let stateId = id;

			if(stateId !== ""){
				stateId = stateId + ".";
			}
			stateId = stateId + state.id;

			let stateData = {
				type: state.typ,
				common: {
					name: state.name,
				},
				native: {},
			};

			if(state.typ === "state"){
				stateData.common.type = state.type;
				stateData.common.role = "inventwo.value";
				if(state.value !== undefined){
					stateData.common.value = state.value;
				}
				if(state.states !== undefined){
					stateData.common.states = state.states;
				}
				if(state.unit !== undefined){
					stateData.common.unit = state.unit;
				}
			}

			await $this.setObjectAsync(stateId, stateData);

			if(await this.getStateAsync(stateId) == null) {
				await $this.setStateAsync(stateId, {
					val: state.value,
					ack: true
				});
			}

			if(state.childs !== undefined){
				await $this.createState(stateId, state.childs);
			}
		}
	};

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			// this.log.info("cleaned everything up...");
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed object changes
	 * @param {string} id
	 * @param {ioBroker.Object | null | undefined} obj
	 */
	// onObjectChange(id, obj) {
	// if (obj) {
	// 	// The object was changed
	// 	this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
	// } else {
	// 	// The object was deleted
	// 	this.log.info(`object ${id} deleted`);
	// }
	// }

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	// onStateChange(id, state) {
	// if (state) {
	// 	// The state was changed
	// 	this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
	// } else {
	// 	// The state was deleted
	// 	this.log.info(`state ${id} deleted`);
	// }
	// }
}

// @ts-ignore parent is a valid property on module
if (module.parent) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new visInventwo(options);
} else {

	new visInventwo();
}