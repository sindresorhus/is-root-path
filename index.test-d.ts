import {expectType} from 'tsd';
import isRootPath = require('.');

expectType<boolean>(isRootPath('/'));
