const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const divide = (n1, n2) => ((n2 === 0) ? 'Não pode ter divisão por zero' : (n1 / n2));

export { sum, sub, mult, divide }