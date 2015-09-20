/*global define*/
(function () {
	'use strict';
	
	define({
		/*
		**Returns true if the arrays are the same length and the element at each index of each array is strictly equal to the element at the same index of each other array.
		*/
		equal: function (first) {
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
	});
}());