const calculerAvance = (n1, n2, operator) => {
  return operator(n1, n2);
};

const addition = (n1, n2) => n1 + n2;
const soustraction = (n1, n2) => n1 - n2;
const puissance = (n1, n2) => Math.pow(n1, n2);
const reste = (n1, n2) => n1 % n2;

console.log(calculerAvance(2, 13, addition));
console.log(calculerAvance(20, 7, soustraction));
console.log(calculerAvance(5, 3, puissance));
console.log(calculerAvance(17, 2, reste));
