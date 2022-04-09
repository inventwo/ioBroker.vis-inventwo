vis.binds["vis-inventwo-components"] = {
	getPopUpTemplate: function (placeholders, showTitlebar = true){
		let modal = `
		<div id="vis-inventwo-modal-%%wid%%" 
			 style="%%styles%%"
			 class="vis-inventwo-modal %%classes%%">
			<div class="vis-inventwo-modal-window vis-widget-dialog" 
				 style="width: %%width%%; 
				 		height:  %%height%%;
				 		background:  %%background%%;
				 		border-radius:  %%border-radius%%; 
				 		box-shadow:  %%box-shadow%%;  %%modal-styles%%">`;

		if(showTitlebar){
			modal += `<div class="vis-inventwo-modal-titlebar" 
					   style="display: flex; 
					   		  height: calc(%%height-title%% ` + ` - 10px); 
					   		  font-size: %%font-size-title%%;">
					   <span class="vis-inventwo-modal-title" style="color: %%title-color%%;">%%title%%</span>
					   <div class="vis-inventwo-modal-closebtn" 
					   		style="color:%%close-x-color%%; background: %%close-color%%;">X</div>
				  </div>`;
		}

		modal += `	<div class="vis-inventwo-modal-content vis-view-container" 
					 style="overflow-x: %%scroll-x%%; overflow-y: %%scroll-y%%;"  
					 data-vis-contains="%%viewname%%">
				</div>
			</div>
		</div>`;

		modal = vis.binds["vis-inventwo-helper"].replacePlaceholders(modal, placeholders)

		return modal;
	},

	getViewPopUp: function (data){

		let placeholders = [];

		switch (data.iPopUpPosition) {
			case "left":
				placeholders["styles"] = "justify-content: flex-start; align-items: center;";
				break;
			case "right":
				placeholders["styles"] = "justify-content: flex-end; align-items: center;";
				break;
			case "top":
				placeholders["styles"] = "justify-content: center; align-items: flex-start;";
				break;
			case "bottom":
				placeholders["styles"] = "justify-content: center; align-items: flex-end;";
				break;
			case "center":
				placeholders["styles"] = "justify-content: center; align-items: center;";
				break;
			case "custom":
				placeholders["modal-styles"] = "position: absolute; left: "
					+ vis.binds["vis-inventwo-helper"].unitize(data.iPopUpPositionX) + "; top: "
					+ vis.binds["vis-inventwo-helper"].unitize(data.iPopUpPositionY) + ";";
				break;
		}

		placeholders["wid"] = vis.binds["vis-inventwo-helper"].unitize(data.wid);
		placeholders["width"] = vis.binds["vis-inventwo-helper"].unitize(data.iPopUpWidth);
		placeholders["height"] = vis.binds["vis-inventwo-helper"].unitize(data.iPopUpHeight);
		placeholders["background"] = data.iPopUpBackground;

		placeholders["border-radius"] = vis.binds["vis-inventwo-helper"].unitize(data.iPopUpShadowXOffset) + " "
			+ vis.binds["vis-inventwo-helper"].unitize(data.iPopUpShadowYOffset) + " "
			+ vis.binds["vis-inventwo-helper"].unitize(data.iPopUpShadowBlur) + " "
			+ vis.binds["vis-inventwo-helper"].unitize(data.iPopUpShadowSpread) + " "
			+ data.iPopUpShadowColor;

		placeholders["box-shadow"] = vis.binds["vis-inventwo-helper"].unitize(data.iPopUpCornerRadiusUL) + " "
			+ vis.binds["vis-inventwo-helper"].unitize(data.iPopUpCornerRadiusUR) + " "
			+ vis.binds["vis-inventwo-helper"].unitize(data.iPopUpCornerRadiusLR) + " "
			+ vis.binds["vis-inventwo-helper"].unitize(data.iPopUpCornerRadiusLL);

		placeholders["height-title"] = vis.binds["vis-inventwo-helper"].unitize(data.iPopUpHeightTitle);
		placeholders["font-size-title"] = vis.binds["vis-inventwo-helper"].unitize(data.iPopUpTitleSize);
		placeholders["title-color"] = data.iPopUpTitleColor;
		placeholders["title"] = data.iPopUpTitle;
		placeholders["close-x-color"] = data.iPopUpTitleColor;
		placeholders["close-color"] = data.iPopUpCloseBtnColor;
		placeholders["scroll-x"] = data.iPopUpScrollX ? "scroll" : "hidden";
		placeholders["scroll-y"] = data.iPopUpScrollY ? "scroll" : "hidden";
		placeholders["viewname"] = data.nav_view;

		let modal = vis.binds["vis-inventwo-components"].getPopUpTemplate(placeholders, data.iPopUpShowTitle);
		return modal;
	},

	getButton: function (values, classes, contentType, data){
		let html =  `<div class="vis-inventwo-class vis-widget-body vis-inventwo-button-new %%classes%%" style="%%styles%%">
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
						 margin: var(--content-image-margin);">%%content%%</div>
					
					<div class="vis-inventwo-button-text"
						 style="font-size: var(--text-font-size);
						 		color: var(--text-color);
						 		text-decoration: var(--text-decoration);
						 		margin: var(--text-margin);
						 		text-align: var(--text-text-align);
						 		align-self: var(--text-align-self);">%%title%%</div>
					
				</div>
			</div>`;

		let styles = [];
		let placeholders = {};

		for (const [key, value] of Object.entries(values.styles)) {
			styles.push(key + ":" + value);
		}

		styles = styles.join(";");

		placeholders.styles = styles;
		placeholders.content = vis.binds["vis-inventwo-helper"].getButtonContent(contentType, values.content, data);
		placeholders.title = values.text;
		placeholders.classes = classes.join(" ");

		return vis.binds["vis-inventwo-helper"].replacePlaceholders(html, placeholders);
	},

	getRadioButtonList: function (childs, styles, classes){
		let html = `
			<div class="vis-inventwo-class vis-widget-body vis-inventwo-radiobtnlist-body %%classes%%" style="%%styles%%">
			 %%childs%%
			</div>
		`;

		let placeholders = {};
		placeholders.childs = childs.join("");
		placeholders.styles = styles.join(";");
		placeholders.classes = classes.join(" ");

		return vis.binds["vis-inventwo-helper"].replacePlaceholders(html, placeholders);
	}
}