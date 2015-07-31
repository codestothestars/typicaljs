/*global define*/
(function () {
	'use strict';
	
	if (typeof define === 'function' && define.amd) {
		define(['modules/object'], function (object) {
			return {object: object};
		});
	} else {
		window.typical = {};
	}
}());