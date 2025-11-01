const { sum } = require('../../src/math');

test('should add two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
