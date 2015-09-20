/*global define*/
(function () {
	'use strict';
	
	define({
		/*
		**Copies all of the enumerable own properties from the object arguments to a new object, and returns that object.
		**If two of the object arguments share a property, the object whose index is greater in "arguments" supercedes the other.
		*/
		copy: function () {
			var newObject = {},
				i,
				key,
				source;
			
			for (i = 0; i < arguments.length; i += 1) {
				source = arguments[i];

				for (key in source) {
					if (source.hasOwnProperty(key)) {
						newObject[key] = source[key];
					}
				}
			}
			return newObject;
		}
	});
}());