const prompt = require("prompt-sync")({ sigint: true });

const game = () => {
  const numberToFind = Math.floor(Math.random() * 100) + 1;

  let count = 1;
  while (count <= 5) {
    const numberInput = parseInt(
      prompt("Veuillez rentrez un nombre entre 1 et 100 : ")
    );

    if (isNaN(numberInput) || numberInput < 1 || numberInput > 100) {
      console.log("Veuillez entrer un nombre valide entre 1 et 100.");
      continue;
    }

    if (numberInput < numberToFind) {
      console.log(numberToFind);

      console.log("Le nombre à deviner est plus grand...");
    } else if (numberInput > numberToFind) {
      console.log(numberToFind);

      console.log("Le nombre à deviner est plus petit...");
    } else if (numberToFind === numberInput) {
      console.log(
        `Félicitations ! Le nombre à trouver était bien ${numberToFind}`
      );
      break;
    }
    count++;
  }
  if (count > 5) {
    console.log("GAME OVER - Vous avez épuisé toutes vos tentatives");
  }
};

game();
