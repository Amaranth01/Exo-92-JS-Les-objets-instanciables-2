let Personne = function (nom, prenom, age, sexe, metier, hobbie) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;
    this.metier = metier;
    this.hobbie = hobbie;

    this.getPersonne = function () {
        return nom + ' ' + prenom + ' ' + "âgée de " + age + " ans de sexe " + sexe + " elle est " + metier + " et aime " + hobbie
    }

    this.setName = function (NewName, NewJob) {
        this.nom = NewName;
        this.metier = NewJob;
    }
}

let myArray = []

let Marcus = new Personne("Ladinde", "Marcus", "45", "Homme", "Pro gamer", "dormir");
let Julien = new Personne("Tellouk", "Julien", "40", "Homme", "Présentateur", "les jeux vidéo");
let Guillaume = new Personne("Petrisot", "Guillaume", "32", "Homme", "Ouvrier", "la modélisation");
let Fabien = new Personne("Escoffier", "Fabien", "35", "Homme", "Glandeur", "s'amuser");
let Ayana = new Personne("Petrisot", "Ayana", "2", "Fille", "Aucun", "jouer");

myArray.push(Marcus, Julien, Guillaume, Fabien, Ayana);

for (let i = 0; i < myArray.length; i++) {
    let myDiv = document.createElement('div');
    myDiv.innerHTML = myArray[i].getPersonne();
    document.body.appendChild(myDiv);
}