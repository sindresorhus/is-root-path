/**
Check if a path is the root path. Example: `/` or `C:\`.

@example
```
import isRootPath = require('is-root-path');

isRootPath('/');
//=> true

isRootPath('/Users');
//=> false
```
*/
declare function isRootPath(path: string): boolean;

export = isRootPath;
