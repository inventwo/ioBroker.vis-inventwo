vis.binds["vis-inventwo-audio"] = {

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

		$this.children().css("left", "-" + (data.iSliderKnobSize / 2 - data.iSliderHeight/2) + "px");
		$this.children().css("margin-bottom", "-" + (data.iSliderKnobSize / 2) + "px");


		$this.slider("option","value",vis.states.attr(oid + ".val"));

		vis.states.bind(oid + ".val",function () {
			$this.slider("option","value",vis.states.attr(oid + ".val"));
		});

	},

}