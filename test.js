'use strict';
var test = require('ava');
var isRootPath = require('./');

test(function (t) {
	var _ = process.platform;

	Object.defineProperty(process, 'darwin', {
		value: 'win32',
		writable: true
	});
	t.assert(isRootPath('/'));
	t.assert(!isRootPath('/Users/'));
	t.assert(!isRootPath(''));
	t.assert(!isRootPath('.'));
	t.assert(!isRootPath(' '));

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
