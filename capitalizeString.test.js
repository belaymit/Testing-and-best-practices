const capitalizeString = require('./capitalizeString');

test('The first letter should be capital', () => {
  expect(capitalizeString('belay')).toBe('Belay');
});
