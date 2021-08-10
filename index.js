import process from 'node:process';

const windowsPathRegex = /^(?:[a-zA-Z]:|[\\/]{2}[^\\/]+[\\/]+[^\\/]+)?[\\/]$/;

export default function isRootPath(path) {
	if (typeof path !== 'string') {
		throw new TypeError('Expected a string');
	}

	path = path.trim();

	// While it's unclear how long a root path can be on Windows, it definitely cannot be longer than 100 characters.
	if (path === '' || path.length > 100) {
		return false;
	}

	return process.platform === 'win32' ? windowsPathRegex.test(path) : path === '/';
}
