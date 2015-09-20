/*global define*/
(function () {
	'use strict';
	
	define(['../qunit-1.18.0', '../../src/modules/array'], function (QUnit, array) {
		var equal = array.equal;
		
		QUnit.test('array.equal', function (assert) {
			var basic = [1, 2, 3],
				unassigned = [1];
			
			assert.ok(equal(basic,			[1, 2, 3], [1, 2, 3]),	'array of primitives equal');
			assert.notOk(equal(basic,	[1, '2', 3]),						'equality is strict');
			assert.notOk(equal([{}],		[{}]),									'distinct objects not equal');
			assert.notOk(equal(basic,	[1, 2, 3, undefined]),	'must be same length');
			
			unassigned[2] = 3;
			assert.ok(equal(unassigned,	[1, undefined, 3]),	'unassigned index matches undefined');
		});
		QUnit.test('array.remove', function (assert) {
			var remove = array.remove,
				removedFirst = ['a', 'b', 'c', 'd', 'e'],
				removedMiddle = ['a', 'b', 'c', 'd', 'e'],
				removedLast = ['a', 'b', 'c', 'd', 'e'];
			
			assert.ok(remove(removedFirst,		'a'),										'remove first element');
			assert.ok(equal(removedFirst,	['b', 'c', 'd', 'e']),	'verify first element removed');
			assert.ok(remove(removedMiddle,		'c'),										'remove middle element');
			assert.ok(equal(removedMiddle,	['a', 'b', 'd', 'e']),	'verify middle element removed');
			assert.ok(remove(removedLast,			'e'),										'remove last element');
			assert.ok(equal(removedLast,		['a', 'b', 'c', 'd']),	'verify last element removed');
		});
	});
}());