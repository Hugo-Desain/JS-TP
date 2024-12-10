const prompt = require("prompt-sync")({ sigint: true });

const checkString = () => {
  sentence = prompt("Ecrivez une phrase : ");

  console.log(`La taile de la phrase est de : ${sentence.length} caractètes`);

  console.log(`Phrase convertie en majuscule : ${sentence.toUpperCase()}`);

  if (sentence.includes("Javascript")) {
    console.log("Le mot 'Javascript' est bien présent dans la phrase.");
  } else {
    console.log("Le mot 'Javascript' n'est pas présent dans la phrase.");
  }
};

checkString();
