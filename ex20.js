const prompt = require("prompt-sync")({ sigint: true });

const playPendu = () => {
  const words = ["banane", "oignon", "tomate", "carotte", "pomme", "choux"];
  const wordToFind = words[Math.floor(Math.random() * words.length)];
  const wordInProgress = Array(wordToFind.length).fill("_");
  const attemptsMax = 8;
  let attemptsRemaining = attemptsMax;
  let guessedLetters = [];

  console.log("Bienvenue dans le jeu du pendu !");
  console.log(`Vous avez ${attemptsRemaining} tentatives pour deviner le mot.`);
  console.log(wordInProgress.join(" "));

  while (attemptsMax > 0) {
    const letter = prompt("Devinez une lettre :").toLowerCase();

    if (!letter || letter.length !== 1 || !/[a-z]/.test(letter)) {
      console.log("Veuillez entrer une seule lettre.");
      continue;
    }

    if (guessedLetters.includes(letter)) {
      console.log(`Vous avez déjà deviné la lettre "${letter}".`);
      continue;
    }

    guessedLetters.push(letter);

    if (wordToFind.includes(letter)) {
      for (let i = 0; i < wordToFind.length; i++) {
        if (wordToFind[i] === letter) {
          wordInProgress[i] = letter;
        }
      }
      console.log(`Bonne lettre ! ${wordInProgress.join(" ")}`);
    } else {
      attemptsRemaining--;
      console.log(
        `Lettre incorrecte. Il vous reste ${attemptsRemaining} tentatives.`
      );
    }

    if (!wordInProgress.includes("_")) {
      console.log(`Félicitations ! Vous avez trouvé le mot : ${wordToFind}`);
      return;
    }

    if (attemptsRemaining === 0) {
      console.log(
        `Dommage ! Vous avez épuisé vos tentatives. Le mot était : ${wordToFind}`
      );
      return;
    }
  }

  console.log(
    `Dommage ! Vous avez épuisé vos tentatives. Le mot était : ${wordToFind}`
  );
};
playPendu();
