/*global define*/
(function () {
	'use strict';
	
	var object = {
		/*
		**Takes a target object and any additional objects desired. Copies all of the enumerable own properties from the additional objects to the target.
		**If two of the additional objects share a property, the object whose value is greater in "arguments" supercedes the other.
		*/
		extend: function (target) {
			var i,
				key,
				source;
			
			if (target === undefined || target === null) {
				target = {};
			}

			for (i = 1; i < arguments.length; i += 1) {
				source = arguments[i];

				for (key in source) {
					if (source.hasOwnProperty(key)) {
						target[key] = source[key];
					}
				}
			}
			return target;
		}
	};
	
	if (define === undefined) {
		window.typical.object = object;
	} else {
		define(function () {
			return object;
		});
	}
}());