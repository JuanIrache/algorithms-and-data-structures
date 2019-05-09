// Utility for testing the algos
// Creates a random string of the specified length
module.exports = function(len) {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(Math.round(Math.random() * 65535));
  }
  return result;
};
