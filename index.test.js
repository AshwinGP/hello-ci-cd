// Added By Bhushan on 01_10_2025
import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('sum adds two numbers', () => {
  assert.equal(sum(2, 3), 5);
});

