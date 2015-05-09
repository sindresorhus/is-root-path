'use strict';
var test = require('ava');
var isRootPath = require('./');

test(function (t) {
	t.assert(isRootPath('/'));
	t.assert(!isRootPath('/Users/'));
	t.assert(!isRootPath(''));
	t.assert(!isRootPath('.'));
	t.assert(!isRootPath(' '));

	var _ = process.platform;
	process.platform === 'win32';
	Object.defineProperty(process, 'platform', {
		value: 'win32',
		writable: true
	});
	t.assert(isRootPath('C:\\'));
	t.assert(isRootPath('/'));
	t.assert(!isRootPath('C:\\foo'));
	t.assert(!isRootPath(''));
	t.assert(!isRootPath('.'));
	t.assert(!isRootPath(' '));
	process.platform = _;

	t.end();
});
