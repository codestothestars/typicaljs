;(function() {
/*
 * typicaljs v0.1.0
 * https://github.com/codethestars
 * Copyright 2015 Ariel Ryan-Pagano (https://github.com/codethestars)
 * Licensed under the MIT license
 */
var object;
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.typical = {};
    root.typical.object = factory();
  }
}(this, function () {
  /*global define*/
  (function () {
    'use strict';
    object = {
      /*
      **Copies all of the enumerable own properties from the object arguments to a new object, and returns that object.
      **If two of the object arguments share a property, the object whose index is greater in "arguments" supercedes the other.
      */
      copy: function () {
        var newObject = {}, i, key, source;
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
    };
  }());
  return object;
}));
}());