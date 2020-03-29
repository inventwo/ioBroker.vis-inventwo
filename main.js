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
		// this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here

         if(this.config.Button == "" || !this.config.Button){
        this.config.Button="#333333";
        }
        if(this.config.Active == "" || !this.config.Active){
        this.config.Active="#455618";
        }
        if(this.config.Text == "" || !this.config.Text){
        this.config.Text="#C7C7C7";
        }
        /*
        if(this.config.Radius == "" || !this.config.Radius){
        this.config.Radius=10;
        }
        if(this.config.Stripes == "" || !this.config.Stripes){
        this.config.Stripes="#393939";
        }
        if(this.config.Background == "" || !this.config.Background){
        this.config.Background='#989898';
        }*/

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		this.log.info("config Button: " + this.config.Button);
        this.log.info("config Active: " + this.config.Active);
        this.log.info("config Text: " + this.config.Text);
        this.log.info("config Wallpaper: " + this.config.Wallpaper);
        this.log.info("config ImgName: " + this.config.ImgName);
//      this.log.info("config Radius: " + this.config.Radius);
//      this.log.info("config Info: " + this.config.Info);

		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/
		
        await this.setObjectAsync("CSS.Button", {
			type: "state",
			common: {
				name: "Button-Color",
				type: "string",
				role: "inventwo.color",
				read: true,
				write: true,
			},
			native: {},
        });
        await this.setObjectAsync("CSS.Active", {
			type: "state",
			common: {
				name: "Button-Active-Color",
				type: "string",
				role: "inventwo.color",
				read: true,
				write: true,
			},
            native: {},
        });
        await this.setObjectAsync("CSS.Text", {
			type: "state",
			common: {
				name: "Text-Color",
				type: "string",
				role: "inventwo.color",
				read: true,
				write: true,
			},
			native: {},
       });
        await this.setObjectAsync("CSS.Wallpaper", {
			type: "state",
			common: {
				name: "WallpaperUrl",
				type: "string",
				role: "inventwo.wallpaper",
				read: true,
				write: true,
			},
			native: {},
        });
        await this.setObjectAsync("CSS.ImgName", {
			type: "state",
			common: {
				name: "Wallpaper-Name",
				type: "string",
				role: "inventwo.wallpaper",
				read: true,
				write: true,
			},
			native: {},
        });
 /*
        await this.setObjectAsync("CSS.Radius", {
			type: "state",
			common: {
				name: "Button-Radius",
				type: "string",
				role: "inventwo.design",
				read: true,
				write: true,
			},
			native: {},
        });
       
        await this.setObjectAsync("Info", {
			type: "state",
			common: {
				name: "Adapter-Version",
				type: "string",
				role: "inventwo.info",
				read: true,
				write: false,
			},
			native: {},
        });
*/
        
		// in this template all states changes inside the adapters namespace are subscribed
        this.subscribeStates("CSS.Button");
        this.subscribeStates("CSS.Active");
        this.subscribeStates("CSS.Text");
        this.subscribeStates("CSS.Wallpaper");
        this.subscribeStates("CSS.ImgName");
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
        await this.setStateAsync("CSS.Button", { val: this.config.Button, ack: true });
        await this.setStateAsync("CSS.Active", { val: this.config.Active, ack: true });
        await this.setStateAsync("CSS.Text", { val: this.config.Text, ack: true });
        await this.setStateAsync("CSS.Wallpaper", { val: this.config.Wallpaper + this.config.ImgName, ack: true });
        await this.setStateAsync("CSS.ImgName", { val: this.config.ImgName, ack: true });
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