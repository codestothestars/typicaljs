/*global define*/
(function () {
	'use strict';
	
	if (define === undefined) {
		window.typical = {};
	} else {
		define(['modules/object'], function (object) {
			return {object: object};
		});
	}
}());