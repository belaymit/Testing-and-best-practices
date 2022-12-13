const fucntions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(fucntions.add(2, 2)).toBe(4);
});
