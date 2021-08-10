/**
Check if a path is the root path. Example: `/` or `C:\`.

@example
```
import isRootPath from 'is-root-path';

isRootPath('/');
//=> true

isRootPath('/Users');
//=> false
```
*/
export default function isRootPath(path: string): boolean;
