const Robot = class {
  constructor(name, posX, posY) {
    this.name = name;
    this.posX = posX;
    this.posY = posY;

    this.initialPosX = posX;
    this.initialPosY = posY;
    this.positionsNettoyees = [];
    this.derniereDirection = null;
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

  reculer = () => {
    if (!this.derniereDirection) {
      console.log("Aucun déplacement précédent. Impossible de reculer.");
      return;
    }

    switch (this.derniereDirection) {
      case "haut":
        this.posY--;
        break;

      case "bas":
        this.posY++;
        break;

      case "droite":
        this.posX--;
        break;

      case "gauche":
        this.posX++;
        break;
    }

    console.log(
      `Le robot a reculé. Nouvelle position : (${this.posX}, ${this.posY})`
    );
  };

  nettoyer = () => {
    const positionActuelle = `(${this.posX}, ${this.posY})`;
    if (!this.positionsNettoyees.includes(positionActuelle)) {
      this.positionsNettoyees.push(positionActuelle);
      console.log(`Position ${positionActuelle} nettoyée.`);
    } else {
      console.log(`Position ${positionActuelle} déjà nettoyée.`);
    }
  };

  historiqueNettoyage = () => {
    console.log("Historique des positions nettoyées :");
    if (this.positionsNettoyees.length === 0) {
      console.log("Aucune position nettoyée pour le moment.");
    } else {
      this.positionsNettoyees.forEach((pos) => console.log(pos));
    }
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

robot.afficherPosition();
robot.seDeplacer("haut");
robot.seDeplacer("haut");
robot.seDeplacer("haut");
robot.seDeplacer("droite");
robot.seDeplacer("haut");
robot.afficherPosition();
robot.nettoyer();
robot.seDeplacer("haut");
robot.seDeplacer("gauche");
robot.seDeplacer("haut");
robot.seDeplacer("gauche");
robot.nettoyer();
robot.seDeplacer("haut");
robot.reculer();
robot.nettoyer();
robot.afficherPosition();
robot.historiqueNettoyage();
robot.reinitialiserPosition();
robot.afficherPosition();
