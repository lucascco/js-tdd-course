let obj1 = {
    name: 'Lucas',
    age: 27
}

let obj2 = {
    name: 'Henrique',
    age: 26
}

let wm = new WeakMap();

wm.set(obj1, 'Informações de Lucas');
wm.set(obj2, 'Informações de Henrique');
wm.set(obj2, 'Informações de Henrique');


console.log(wm);