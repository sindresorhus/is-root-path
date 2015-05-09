# is-root-path [![Build Status](https://travis-ci.org/sindresorhus/is-root-path.svg?branch=master)](https://travis-ci.org/sindresorhus/is-root-path)

> Check if a path is the root path. Example: `/` or `C:\`


## Install

```
$ npm install --save is-root-path
```


## Usage

```js
var isRootPath = require('is-root-path');

isRootPath('/');
//=> true

isRootPath('/Users');
//=> false
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
