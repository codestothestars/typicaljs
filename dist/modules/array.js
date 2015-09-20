;(function() {
/*
 * typicaljs v0.1.0
 * https://github.com/codethestars
 * Copyright 2015 Ariel Ryan-Pagano (https://github.com/codethestars)
 * Licensed under the MIT license
 */
var array;
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.typical = {};
    root.typical.array = factory();
  }
}(this, function () {
  /*global define*/
  (function () {
    'use strict';
    array = {
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
    };
  }());
  return array;
}));
}());