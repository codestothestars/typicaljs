/*
 * typicaljs
 * https://github.com/codethestars/typical.js
 * The Initial Developer of the Original Code is Ariel Ryan-Pagano.
 * Portions created by the Initial Developer are Copyright (C) 2015
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s): Ariel Ryan-Pagano <https://github.com/codethestars>
 */
/*global define*/
(function () {
	'use strict';
	
	var array = {
		/*
		**Returns true if the arrays are the same length and the element at each index of each array is strictly equal to the element at the same index of each other array.
		*/
		allEqual: function (first) {
			var i, j;
		
			for (i = 1; i < arguments.length; i += 1) {
				if (arguments[i].length !== first.length) {
					return false;
				}
				for (j = 0; j < arguments[i].length; j += 1) {
					if (arguments[i][j] !== first[j]) {
						return false;
					}
				}
			}
			return true;
		},
		/*
		**Removes from the specified array the first instance of the specified element.
		*/
		remove: function (array, element) {
			var index = array.indexOf(element);

			if (index > -1) {
				array.splice(index, 1);
				return true;
			}
			return false;
		}
	};
	
	if (typeof define === 'function' && define.amd) {
		define(array);
	} else {
		if (window.typical === undefined) {
			window.typical = {};
		}
		window.typical.array = array;
	}
}());