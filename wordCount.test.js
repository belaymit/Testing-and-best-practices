const wordCount = require('./wordCount');

describe('word count', () => {
  test('returns the number of words in a given sentence', () => {
    expect(wordCount('this is the name of all of the students')).toBe(9);
  });
});
