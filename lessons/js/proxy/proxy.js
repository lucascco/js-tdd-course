let obj = {
    name: 'Lucas',
    age: '27'
}

let proxy = new Proxy(obj, {
    get(target, prop) {
        console.log('Alguem esta pedindo ' + prop);
        return target[prop];
    },
    set(target, prop, value) {
        console.log('Alguem esta mudando ' + prop);
        target[prop] = value;
    }
});
