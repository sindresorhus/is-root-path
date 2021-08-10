import {expectType} from 'tsd';
import isRootPath from './index.js';

expectType<boolean>(isRootPath('/'));
