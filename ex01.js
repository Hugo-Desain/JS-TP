const prompt = require("prompt-sync")({ sigint: true });

const operation = (n1, n2) => {
  n1 = parseInt(prompt("Entrez le premier nombre : "));
  n2 = parseInt(prompt("Entrez le deuxieme nombre : "));

  let addition = n1 + n2;
  console.log(`Addition : ${addition}`);

  let soustraction = n1 - n2;
  console.log(`Soustraction : ${soustraction}`);

  let division = n1 / n2;
  console.log(`Division : ${division}`);

  let multiplication = n1 * n2;
  console.log(`Multiplication : ${multiplication}`);
};

operation();
