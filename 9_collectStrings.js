const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

function collectStrings(o) {
  if (typeof o === 'string') return o;
  if (typeof o !== 'object') return null;
  let result = [];
  for (let k in o) {
    if (collectStrings(o[k])) result = result.concat(collectStrings(o[k]));
  }
  return result;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
