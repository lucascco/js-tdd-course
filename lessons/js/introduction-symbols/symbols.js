let foo = Symbol('name');
let bar = Symbol('name');

console.log(foo);
console.log(bar);

console.log(bar == foo);

let obj = {
    [Symbol('name')]: 'Lucas',
    [Symbol('age')]: 27,
    city: 'Belo Horizonte'
}
const symbols = Object.getOwnPropertySymbols(obj);
let data = symbols.map(sym => obj[sym]);
console.log(obj, data);