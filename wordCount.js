function wordCount(string) {
  const arr = string.split(' ');
  return arr.filter((word) => word !== '').length;
}
console.log(wordCount('this is the name of all of the students'));
module.exports = wordCount;
