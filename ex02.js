const prompt = require("prompt-sync")({ sigint: true });

const checkAge = () => {
  age = parseInt(prompt("Entrez votre age : "));

  if (age <= 18) {
    console.log("Vous êtes mineur.");
  } else if (age > 18) {
    console.log("Vous êtes majeur");
  } else {
    console.log("Entrée invalide");
  }
};

checkAge();
