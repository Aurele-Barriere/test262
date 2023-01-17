// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.since
description: RangeError thrown if calendars' id properties do not match
features: [Temporal]
---*/

const calendar1 = { id: "A" };
const calendar2 = { id: "B" };

const plainDate1 = new Temporal.PlainDate(2000, 1, 1, calendar1);
const plainDate2 = new Temporal.PlainDate(2000, 1, 1, calendar2);
assert.throws(RangeError, () => plainDate1.since(plainDate2));
