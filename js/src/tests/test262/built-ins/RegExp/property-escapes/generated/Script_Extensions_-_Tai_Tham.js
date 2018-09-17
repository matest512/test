// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tai_Tham`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001A20, 0x001A5E],
    [0x001A60, 0x001A7C],
    [0x001A7F, 0x001A89],
    [0x001A90, 0x001A99],
    [0x001AA0, 0x001AAD]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Tai_Tham}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tai_Tham}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Lana}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Lana}"
);
testPropertyEscapes(
  /^\p{scx=Tai_Tham}+$/u,
  matchSymbols,
  "\\p{scx=Tai_Tham}"
);
testPropertyEscapes(
  /^\p{scx=Lana}+$/u,
  matchSymbols,
  "\\p{scx=Lana}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x001A5F
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x001A1F],
    [0x001A7D, 0x001A7E],
    [0x001A8A, 0x001A8F],
    [0x001A9A, 0x001A9F],
    [0x001AAE, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Tai_Tham}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tai_Tham}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Lana}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Lana}"
);
testPropertyEscapes(
  /^\P{scx=Tai_Tham}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tai_Tham}"
);
testPropertyEscapes(
  /^\P{scx=Lana}+$/u,
  nonMatchSymbols,
  "\\P{scx=Lana}"
);

reportCompare(0, 0);
