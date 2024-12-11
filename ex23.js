const Vehicule = class {
  constructor() {}

  seDeplacer = () => {
    return console.log("Je suis un véhicule et je me déplace.");
  };
};

class Voiture extends Vehicule {
  constructor(modele) {
    super();
    this.modele = modele;
  }

  klaxonner = () => {
    return console.log("Poueeet");
  };
}

class Bateau extends Vehicule {
  constructor(type) {
    super();
    this.type = type;
  }

  hisser = () => {
    return console.log("Hissez la grand voooiiile !!!!");
  };
}

const toyota = new Voiture("toyota");
const voilier = new Bateau("voilier");

toyota.seDeplacer();
toyota.klaxonner();
voilier.hisser();
