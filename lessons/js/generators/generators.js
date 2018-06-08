function* genNames() {
    yield 'Willian';
    yield 'Jonas';
    yield 'Gabirel';
}

const names = genNames();
console.log(names.next());
console.log(names.next());
console.log(names.next());

