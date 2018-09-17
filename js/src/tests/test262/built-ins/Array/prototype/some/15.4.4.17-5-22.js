// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.some
es5id: 15.4.4.17-5-22
description: Array.prototype.some - boolean primitive can be used as thisArg
---*/

        function callbackfn(val, idx, obj) {
            return this.valueOf() === false;
        }

assert([11].some(callbackfn, false), '[11].some(callbackfn, false) !== true');

reportCompare(0, 0);
