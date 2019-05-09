// Utility for testing the algos
// Pauses the execution for the provided duration, allowing for slower console logging, for example

module.exports = async function(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
