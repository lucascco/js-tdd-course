let obj1 = {
    name: 'Lucas',
    age: 27
}

let obj2 = {
    name: 'Henrique',
    age: 26
}

let ws = new WeakSet([obj1, obj2]);

ws.add({name: 'Filipe', age: 30});
ws.delete(obj2);

console.log(ws);