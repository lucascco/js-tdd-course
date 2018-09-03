module.exports = {
  sum: (n1, n2) => n1 + n2,
  sub: (n1, n2) => n1 - n2,
  mult: (n1, n2) => n1 * n2,
  divide: (n1, n2) => ((n2 === 0) ? 'Não pode ter divisão por zero' : (n1 / n2)),
};
