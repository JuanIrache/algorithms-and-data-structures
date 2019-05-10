class HashTable {
  constructor(len) {
    this.keyMap = new Array(len);
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const val = key.charCodeAt(i) - 96;
      total = (total * prime + val) % this.keyMap.length;
    }
    return total;
  }
  set(key, val) {
    const index = this._hash(key);
    this.keyMap[index] = this.keyMap[index] || [];
    this.keyMap[index].push([key, val]);
    return this;
  }
  get(key) {
    const index = this._hash(key);
    const pos = this.keyMap[index];
    if (!pos) return undefined;
    for (const elt of pos) if (elt[0] === key) return elt[1];
    return undefined;
  }
  keys() {
    let keys = [];
    for (const pos of this.keyMap) if (pos) for (const elt of pos) if (!keys.includes(elt[0])) keys.push(elt[0]);
    return keys;
  }
  values() {
    let values = [];
    for (const pos of this.keyMap) if (pos) for (const elt of pos) if (!values.includes(elt[1])) values.push(elt[1]);
    return values;
  }
}

let t = new HashTable(23);
t.set('big', 'grande');
t.set('hand', 'mano');
t.set('key', 'tecla');
t.set('scissors', 'tijera');
console.log(t.set('small', 'pequeño').keyMap);
console.log(t.get('scissors'));
console.log(t.keys());
console.log(t.values());
