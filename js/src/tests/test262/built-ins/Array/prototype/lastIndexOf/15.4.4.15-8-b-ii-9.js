// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.lastindexof
es5id: 15.4.4.15-8-b-ii-9
description: >
    Array.prototype.lastIndexOf - both array element and search
    element are strings, and they have exactly the same sequence of
    characters
---*/

assert.sameValue(["abc", "ab", "bca", ""].lastIndexOf("abc"), 0, '["abc", "ab", "bca", ""].lastIndexOf("abc")');

reportCompare(0, 0);
