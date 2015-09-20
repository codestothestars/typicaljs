/*global define*/
(function () {
	'use strict';
	
	define(['../qunit-1.18.0', '../../src/modules/object'], function (QUnit, object) {
		
		QUnit.test('object.copy', function (assert) {
			var copy = object.copy;
			
			assert.deepEqual(copy(), {}, 'no params yields empty object');
			assert.deepEqual(copy({}), {}, 'empty object yields empty object');
			assert.deepEqual(copy(null, undefined, 5, 0, -1, true, false), {}, 'primitives, null, undefined yield empty object');
			assert.deepEqual(copy({asdf: 'zxcv'}), {asdf: 'zxcv'}, 'copies one property');
			assert.deepEqual(copy({asdf: 'zxcv', qwerty: 'aoeu'}), {asdf: 'zxcv', qwerty: 'aoeu'}, 'copies all properties');
			assert.deepEqual(copy({asdf: 'zxcv', qwerty: 'aoeu'}, {qwerty: 'htns'}), {asdf: 'zxcv', qwerty: 'htns'}, 'prioritizes properties from objects at greater "arguments" index');
		});
	});
}());