const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const divide = (n1, n2) => ((n2 === 0) ? 'Não pode ter divisão por zero' : (n1 / n2));


const FizzBuzz = (num) => {
  if (num === 0) return num;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};

function foo() {
    return 'bla';
}

function foo2() {
    return 'bla2';
}


export { sum, sub, mult, divide, FizzBuzz };
