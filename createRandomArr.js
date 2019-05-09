// Utility for testing the algos
// Creates a random nubmers array of the provided length and number range
module.exports = function(len, range = len) {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(Math.round(Math.random() * range));
  }
  return result;
};
