sap.ui.require([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.eh",
		settings : {
			id : "eh"
		}
	}).placeAt("content");
});