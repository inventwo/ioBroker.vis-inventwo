"use strict";

/*
 * Created with @ioBroker/create-adapter v1.21.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");

// Load  your  modules here, e.g.:
// const fs = require("fs");

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
		//this.on("objectChange", this.onObjectChange.bind(this));
		//this.on("stateChange", this.onStateChange.bind(this));
		//this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here

//      this.log.info("config Stripes: " + this.config.Stripes);
//      this.log.info("config Background: " + this.config.Background);
//      this.log.info("config Radius: " + this.config.Radius);
//      this.log.info("config Info: " + this.config.Info);

		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/
		

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
						states: "Basic:inventwo Theme;Dark:Dark Theme;Light:Light Theme",
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
										value: "#333333"
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
										value: "#555555"
									},
									// Farbe Aktiv
									{
										typ: "state",
										id: "ColorActive1",
										name: "Button Color Active 1",
										type: "string",
										value: "#456534"
									},
									{
										typ: "state",
										id: "ColorActive2",
										name: "Button Color Active 2",
										type: "string",
										value: "#1C4166"
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
										value: "#456534"
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
										value: "0.8"
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Button Opacity 2",
										type: "number",
										value: "0.8"
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
										type: "string",
										value: "5px"
									},
									{
										typ: "state",
										id: "UpperRight",
										name: "Upper Right",
										type: "string",
										value: "5px"
									},
									{
										typ: "state",
										id: "LowerRight",
										name: "Lower Right",
										type: "string",
										value: "5px"
									},
									{
										typ: "state",
										id: "LowerLeftt",
										name: "Lower Left",
										type: "string",
										value: "5px"
									},
									// Alle Ecken gleich
									{
										typ: "state",
										id: "AllCorners1",
										name: "All Corners 1",
										type: "string",
										value: "5px"
									},
									{
										typ: "state",
										id: "AllCorners2",
										name: "All Corners 2",
										type: "string",
										value: "100%"
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
										value: "0.8"
									},
									{
										typ: "state",
										id: "Opacity2",
										name: "Content Opacity 2",
										type: "number",
										value: "0.8"
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
										value: "#456534"
									},
									{
										typ: "state",
										id: "TextColorActive2",
										name: "Text Color Active 2",
										type: "string",
										value: "#1C4166"
									},
									// Groesse
									{
										typ: "state",
										id: "TextSize1",
										name: "Text Size 1",
										type: "string",
										value: "14px"
									},
									{
										typ: "state",
										id: "TextSize2",
										name: "Text Size 2",
										type: "string",
										value: "20px"
									},
									// Abstand
									{
										typ: "state",
										id: "TextDistanceAbove",
										name: "Text Distance Above",
										type: "string",
										value: "0px"
									},
									{
										typ: "state",
										id: "TextDistanceBelow",
										name: "Text Distance Below",
										type: "string",
										value: "0px"
									},
									{
										typ: "state",
										id: "TextDistanceLeft",
										name: "Text Distance Left",
										type: "string",
										value: "0px"
									},
									{
										typ: "state",
										id: "TextDistanceRight",
										name: "Text Distance Right",
										type: "string",
										value: "0px"
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
										type: "string",
										value: "70px"
									},
									{
										typ: "state",
										id: "IconSize2",
										name: "Icon Size 2",
										type: "string",
										value: "30px"
									},
									// Abstand
									{
										typ: "state",
										id: "IcontDistanceAbove",
										name: "Icon Distance Above",
										type: "string",
										value: "0px"
									},
									{
										typ: "state",
										id: "IconDistanceBelow",
										name: "Icon Distance Below",
										type: "string",
										value: "0px"
									},
									{
										typ: "state",
										id: "IconDistanceLeft",
										name: "Icon Distance Left",
										type: "string",
										value: "0px"
									},
									{
										typ: "state",
										id: "IconDistanceRight",
										name: "Icon Distance Right",
										type: "string",
										value: "0px"
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
										id: "TextColorActive1",
										name: "Text Color Active 1",
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
										type: "string",
										value: "2px"
									},
									{
										typ: "state",
										id: "ShadowOuterOffsetY",
										name: "Shadow Outer Offset Y",
										type: "string",
										value: "2px"
									},
									// Blur
									{
										typ: "state",
										id: "ShadowOuterBlur",
										name: "Shadow Outer Blur",
										type: "string",
										value: "2px"
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowOuterSize",
										name: "Shadow Outer Size",
										type: "string",
										value: "2px"
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
										value: "#456534"
									},
									{
										typ: "state",
										id: "ShadowOuterColorHovere",
										name: "Shadow Outer Color Hover",
										type: "string",
										value: "#456534"
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
										type: "string",
										value: "0px"
									},
									{
										typ: "state",
										id: "ShadowInnerOffsetY",
										name: "Shadow Inner Offset Y",
										type: "string",
										value: "0px"
									},
									// Blur
									{
										typ: "state",
										id: "ShadowInnerBlur",
										name: "Shadow Inner Blur",
										type: "string",
										value: "2px"
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowInnerSize",
										name: "Shadow Inner Size",
										type: "string",
										value: "2px"
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowInnerColor",
										name: "Shadow Inner Color",
										type: "string",
										value: "#456534"
									},
									{
										typ: "state",
										id: "ShadowInnerColorActive",
										name: "Shadow Inner Color Active",
										type: "string",
										value: "#456534"
									},
									{
										typ: "state",
										id: "ShadowInnerColorHovere",
										name: "Shadow Inner Color Hover",
										type: "string",
										value: "#456534"
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
										type: "string",
										value: "0px"
									},
									{
										typ: "state",
										id: "ShadowTextOffsetY",
										name: "Shadow Text Offset Y",
										type: "string",
										value: "0px"
									},
									// Blur
									{
										typ: "state",
										id: "ShadowTextBlur",
										name: "Shadow Text Blur",
										type: "string",
										value: "0px"
									},
									// Groesse
									{
										typ: "state",
										id: "ShadowTextSize",
										name: "Shadow Text Size",
										type: "string",
										value: "2px"
									},
									// Farbe
									{
										typ: "state",
										id: "ShadowTextColor",
										name: "Shadow Text Color",
										type: "string",
										value: "#456534"
									},
									{
										typ: "state",
										id: "ShadowInnerColorActive",
										name: "Shadow Inner Color Active",
										type: "string",
										value: "#456534"
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
										type: "string",
										value: "2px"
									},
									// Farbe
									{
										typ: "state",
										id: "BorderColor",
										name: "Border Color",
										type: "string",
										value: "#456534"
									},
									{
										typ: "state",
										id: "BorderColorActive",
										name: "Border Color Active",
										type: "string",
										value: "#456534"
									}
								]
							},
						]
					},
				]
			}
		];


        
		// in this template all states changes inside the adapters namespace are subscribed
        this.subscribeStates("CSS.Button");
        this.subscribeStates("CSS.Active");
        this.subscribeStates("CSS.Text");
//      this.subscribeStates("CSS.Stripes");
//      this.subscribeStates("CSS.Background");
//      this.subscribeStates("CSS.Radius");
//      this.subscribeStates("CSS.Info");

		/*
		setState examples
		you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		//await this.setStateAsync("testVariable", true);

		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		if(await this.getStateAsync("CSS.Button") == null)
        	await this.setStateAsync("CSS.Button", { val: "#333333", ack: true });
		if(await this.getStateAsync("CSS.Active") == null)
        	await this.setStateAsync("CSS.Active", { val: "#455618", ack: true });
		if(await this.getStateAsync("CSS.Text") == null)
        	await this.setStateAsync("CSS.Text", { val: "#C7C7C7", ack: true });
//      await this.setStateAsync("CSS.Stripes", { val: this.config.Stripes, ack: true });
//      await this.setStateAsync("CSS.Background", { val: this.config.Background, ack: true });
//      await this.setStateAsync("CSS.Radius", { val: this.config.Radius, ack: true });
//      await this.setStateAsync("Info", { val: this.config.Version, ack: true });
       

		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		//await this.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });

		// examples for the checkPassword/checkGroup functions
		//let result = await this.checkPasswordAsync("admin", "ioBroker");
		//this.log.info("check user admin pw ioBroker: " + result);

		//result = await this.checkGroupAsync("admin", "admin");
		//this.log.info("check group user admin group admin: " + result);
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			this.log.info("cleaned everything up...");
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
	onObjectChange(id, obj) {
		if (obj) {
			// The object was changed
			this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
		} else {
			// The object was deleted
			this.log.info(`object ${id} deleted`);
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.message" property to be set to true in io-package.json
	//  * @param {ioBroker.Message} obj
	//  */
	// onMessage(obj) {
	// 	if (typeof obj === "object" && obj.message) {
	// 		if (obj.command === "send") {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info("send command");

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
	// 		}
	// 	}
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
	// otherwise start the instance directly
	new visInventwo();
}
