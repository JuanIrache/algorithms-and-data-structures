// Utility for testing the algos
// Checks if an array is sorted
module.exports = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};
