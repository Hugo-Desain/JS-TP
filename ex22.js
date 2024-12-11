const Livre = class {
  constructor(titre, auteur) {
    this.titre = titre;
    this.auteur = auteur;
  }
};

const Bibliotheque = class {
  constructor() {
    this.contenu = [];
  }

  ajouterLivre = (livre) => {
    this.contenu.push(livre);
  };

  rechercherLivre = (titre) => {
    let livreExistant = this.contenu.find((item) => item.titre === titre);

    if (livreExistant === undefined) {
      return console.log("Aucun livre de la bibliothèque ne possède ce nom...");
    } else {
      return console.log(livreExistant);
    }
  };
};

const bibli = new Bibliotheque();
const livre1 = new Livre("Javascript pour les nuls", "Micode");
const livre2 = new Livre("Python pour les nuls", "Bobby");
const livre3 = new Livre("HTML pour les nuls", "Jeannot");
const livre4 = new Livre("Java pour les nuls", "Richard");

bibli.ajouterLivre(livre1);
bibli.ajouterLivre(livre3);

console.log(bibli.contenu);

bibli.rechercherLivre("Javascript pour les nuls");
