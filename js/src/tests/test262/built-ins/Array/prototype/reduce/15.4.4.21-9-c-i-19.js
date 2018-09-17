// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
es5id: 15.4.4.21-9-c-i-19
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property without a get function that overrides an inherited
    accessor property on an Array-like object
---*/

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === undefined);
            }
        }

            Object.defineProperty(Object.prototype, "1", {
                get: function () {
                    return 1;
                },
                configurable: true
            });

            var obj = { 0: 0, 2: 2, length: 3 };

            Object.defineProperty(obj, "1", {
                set: function () { },
                configurable: true
            });

            Array.prototype.reduce.call(obj, callbackfn, initialValue);

assert(testResult, 'testResult !== true');

reportCompare(0, 0);
