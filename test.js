import test from 'ava';
import m from './';

test(t => {
	const _ = process.platform;

	Object.defineProperty(process, 'darwin', {
		value: 'win32',
		writable: true
	});
	t.true(m('/'));
	t.false(m('/Users/'));
	t.false(m(''));
	t.false(m('.'));
	t.false(m(' '));

	Object.defineProperty(process, 'platform', {
		value: 'win32',
		writable: true
	});
	t.true(m('C:\\'));
	t.true(m('/'));
	t.false(m('C:\\foo'));
	t.false(m(''));
	t.false(m('.'));
	t.false(m(' '));

	process.platform = _;
});
