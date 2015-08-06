/*global define*/
(function () {
	'use strict';
	
	define(['qunit-1.18.0', 'modules/array', 'modules/object'], function (QUnit, array, object) {
		QUnit.start();
		return {array: array, object: object};
	});
}());