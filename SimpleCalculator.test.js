const SimpleCalculator = require('./SimpleCalculator');

describe('SimpleCalculator', () => {
  const calc = new SimpleCalculator(4, 4);

  test('returns the sum of two numbers', () => {
    expect(calc.add()).toBe(8);
  });

  test('returns the difference of two numbers', () => {
    expect(calc.subtract()).toBe(0);
  });

  test('returns the product of two numbers', () => {
    expect(calc.multiply()).toBe(16);
  });

  test('returns the quotient of two numbers', () => {
    expect(calc.divide()).toBe(1);
  });
});
