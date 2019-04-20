import test from 'ava';
import isRootPath from '.';

test('main', t => {
	const originalPlatform = process.platform;

	Object.defineProperty(process, 'platform', {
		value: 'darwin',
		writable: true,
		configurable: true,
		enumerable: true
	});
	t.true(isRootPath('/'));
	t.false(isRootPath('/Users/'));
	t.false(isRootPath(''));
	t.false(isRootPath('.'));
	t.false(isRootPath(' '));

	Object.defineProperty(process, 'platform', {
		value: 'win32',
		writable: true,
		configurable: true,
		enumerable: true
	});
	t.true(isRootPath('C:\\'));
	t.true(isRootPath('/'));
	t.false(isRootPath('C:\\foo'));
	t.false(isRootPath(''));
	t.false(isRootPath('.'));
	t.false(isRootPath(' '));

	process.platform = originalPlatform;
});
