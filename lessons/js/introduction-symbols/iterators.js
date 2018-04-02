let txt = 'Brasil';
let iteratorIxt = txt[Symbol.iterator]();

// console.log(iteratorIxt.next());
// console.log(iteratorIxt.next());
// console.log(iteratorIxt.next());
// console.log(iteratorIxt.next());
// console.log(iteratorIxt.next());
// console.log(iteratorIxt.next());
// console.log(iteratorIxt.next());

for(letters of txt) {
    console.log(letters);
    if(letters === 'a') break;
}