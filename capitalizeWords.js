function capitalizeWords(arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  return capitalizeWords([arr[0]]).concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
