/*global define*/
(function () {
	'use strict';
	
	define(['../qunit-1.18.0', '../../modules/object'], function (QUnit, object) {
		
		QUnit.test('object.copyProperties', function (assert) {
			var copyProperties = object.copyProperties;
			
			assert.deepEqual(copyProperties(), {}, 'no params yields empty object');
			assert.deepEqual(copyProperties({}), {}, 'empty object yields empty object');
			assert.deepEqual(copyProperties(null, undefined, 5, 0, -1, true, false), {}, 'primitives, null, undefined yield empty object');
			assert.deepEqual(copyProperties({asdf: 'zxcv'}), {asdf: 'zxcv'}, 'copies one property');
			assert.deepEqual(copyProperties({asdf: 'zxcv', qwerty: 'aoeu'}), {asdf: 'zxcv', qwerty: 'aoeu'}, 'copies all properties');
			assert.deepEqual(copyProperties({asdf: 'zxcv', qwerty: 'aoeu'}, {qwerty: 'htns'}), {asdf: 'zxcv', qwerty: 'htns'}, 'prioritizes properties from objects at greater "arguments" index');
		});
	});
}());