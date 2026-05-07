// math.test.js
const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  assert.strictEqual(add(1, 2), 3);
});

test('adds -1 + 5 to equal 4', () => {
  assert.strictEqual(add(-1, 5), 4);
});
