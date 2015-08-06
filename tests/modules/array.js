/*global define*/
(function () {
	'use strict';
	
	define(['../qunit-1.18.0', '../../modules/array'], function (QUnit, array) {
		var allEqual = array.allEqual;
		
		QUnit.test('array.allEqual', function (assert) {
			var basic = [1, 2, 3],
				unassigned = [1];
			
			assert.ok(allEqual(basic,			[1, 2, 3], [1, 2, 3]),	'array of primitives equal');
			assert.notOk(allEqual(basic,	[1, '2', 3]),						'equality is strict');
			assert.notOk(allEqual([{}],		[{}]),									'distinct objects not equal');
			assert.notOk(allEqual(basic,	[1, 2, 3, undefined]),	'must be same length');
			
			unassigned[2] = 3;
			assert.ok(allEqual(unassigned,	[1, undefined, 3]),	'unassigned index matches undefined');
		});
		QUnit.test('array.remove', function (assert) {
			var remove = array.remove,
				removedFirst = ['a', 'b', 'c', 'd', 'e'],
				removedMiddle = ['a', 'b', 'c', 'd', 'e'],
				removedLast = ['a', 'b', 'c', 'd', 'e'];
			
			assert.ok(remove(removedFirst,		'a'),										'remove first element');
			assert.ok(allEqual(removedFirst,	['b', 'c', 'd', 'e']),	'verify first element removed');
			assert.ok(remove(removedMiddle,		'c'),										'remove middle element');
			assert.ok(allEqual(removedMiddle,	['a', 'b', 'd', 'e']),	'verify middle element removed');
			assert.ok(remove(removedLast,			'e'),										'remove last element');
			assert.ok(allEqual(removedLast,		['a', 'b', 'c', 'd']),	'verify last element removed');
		});
	});
}());