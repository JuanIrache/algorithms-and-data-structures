module.exports = function(len, range = 100) {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(Math.round(Math.random() * range));
  }
  return result;
};
