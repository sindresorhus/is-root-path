'use strict';
// https://github.com/iojs/io.js/blob/5883a59b21a97e8b7339f435c977155a2c29ba8d/lib/path.js#L43
var winRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]$/;

module.exports = function (pth) {
	if (typeof pth !== 'string') {
		throw new TypeError('Expected a string');
	}

	pth = pth.trim();

	if (pth === '') {
		return false;
	}

	return process.platform === 'win32' ? winRe.test(pth) : pth === '/';
}
