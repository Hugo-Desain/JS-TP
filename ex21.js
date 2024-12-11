const Robot = class {
  constructor(name, posX, posY) {
    this.name = name;
    this.posX = posX;
    this.posY = posY;

    this.initialPosX = posX;
    this.initialPosY = posY;
  }

  seDeplacer = (direction) => {
    switch (direction) {
      case "haut":
        this.posY++;
        break;

      case "bas":
        this.posY--;
        break;

      case "droite":
        this.posX++;
        break;

      case "gauche":
        this.posX--;
        break;

      default:
        console.log("Position inchangée");
    }
    return direction;
  };

  nettoyer = () => {
    return console.log("La position actuelle est propre");
  };

  afficherPosition = () => {
    return console.log(
      `La position actuelle est de ${this.posY} pour l'axe Y et de ${this.posX} pour l'axe X.`
    );
  };

  reinitialiserPosition = () => {
    this.posX = this.initialPosX;
    this.posY = this.initialPosY;
    console.log("Position réinitialisée.");
  };
};

const robot = new Robot("robot1", 10, 10);

console.log(robot.afficherPosition());
robot.seDeplacer("haut");
console.log(robot.afficherPosition());
robot.seDeplacer("droite");
robot.seDeplacer("droite");
robot.seDeplacer("droite");
console.log(robot.afficherPosition());
robot.reinitialiserPosition();
console.log(robot.afficherPosition());
