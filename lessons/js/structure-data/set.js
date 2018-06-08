let mySet = new Set(['Filipe', 'Lucas', 'Miguel']);

mySet.add('Lucas');
mySet.add('Tiago');

mySet.delete('Lucas');

console.log(mySet);

let it = mySet.values();

for(name of it) {
    console.log(name);
}