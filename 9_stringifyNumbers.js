let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

function stringifyNumbers(o) {
  if (typeof o === 'number') return o.toString();
  if (typeof o !== 'object') return o;
  let result = JSON.parse(JSON.stringify(o));
  for (const k in o) {
    result[k] = stringifyNumbers(o[k]);
  }
  return result;
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
