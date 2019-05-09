// Utility for testing the algos
// Runs a function times times and outputs the time taken
module.exports = function(times, id, action) {
  const start = new Date();
  for (let i = 0; i < times; i++) action(i);
  console.log(`Timer: ${times} - ${id} - ${new Date() - start}`);
};
