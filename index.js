'use strict';
// https://github.com/iojs/io.js/blob/5883a59b21a97e8b7339f435c977155a2c29ba8d/lib/path.js#L43
const windowsPathRegex = /^(?:[a-zA-Z]:|[\\/]{2}[^\\/]+[\\/]+[^\\/]+)?[\\/]$/;

module.exports = path => {
	if (typeof path !== 'string') {
		throw new TypeError('Expected a string');
	}

	path = path.trim();

	if (path === '') {
		return false;
	}

	return process.platform === 'win32' ? windowsPathRegex.test(path) : path === '/';
};
