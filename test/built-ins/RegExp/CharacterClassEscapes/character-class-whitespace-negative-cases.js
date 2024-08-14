// Copyright (C) 2018 Leo Balter.  All rights reserved.
// Copyright (C) 2024 Aurèle Barrière.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: Check that none of the non-whitespace characters are matched by \s.
info: |
    21.2.2.12 CharacterClassEscape

    The production CharacterClassEscape :: s evaluates as follows:
        Return the set of characters containing the characters that are on the right-hand side of
        the WhiteSpace or LineTerminator productions.
features: [String.fromCodePoint]
includes: [regExpUtils.js]
---*/

const str = buildString({
    loneCodePoints: [],
    ranges: [
        [0x00DC00, 0x00DFFF],
        [0x000000, 0x000008],
        [0x00000E, 0x00001F],
        [0x000021, 0x00009F],
        [0x0000A1, 0x00167F],
        [0x001681, 0x001FFF],
        [0x00200B, 0x002027],
        [0x00202A, 0x00202E],
        [0x002030, 0x00205E],
        [0x002060, 0x002FFF],
        [0x003001, 0x00DBFF],
        [0x00E000, 0x00FEFE],
        [0x00FF00, 0x10FFFF],
    ],
});

const re = /\s/;
const re_u = /\s/u;

const regexes = [re, re_u];

const errors = [];

for (const regex of regexes) {
    if (regex.test(str)) {
	// Error, let's find out where
	for (const char of str) {
            if (regex.test(char)) {
		errors.push('0x' + char.codePointAt(0).toString(16));
            }
	}
    }
};

assert.sameValue(
    errors.length,
    0,
    'Expected no match, but matched: ' + errors.join(',')
);
