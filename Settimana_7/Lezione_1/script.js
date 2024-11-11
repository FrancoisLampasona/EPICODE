class Utente {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static confrontaEta(x, y) {
    return x > y ? `${x} è più grande di ${y}` : `${x} è più piccolo di ${y}`;
  }
}

const utente1 = new Utente("Mario", "Rossi", 30, "Roma");
const utente2 = new Utente("Luca", "Rossi", 20, "Milano");

console.log(Utente.confrontaEta(utente1.age, utente2.age));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static padrone(x, y) {
    return x === y ? true : false;
  }
}

const Array_Pet = [];

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const nuovoPet = new Pet(petName, ownerName, species, breed);

  Array_Pet.push(nuovoPet);

  console.log(nuovoPet);

  if (Array_Pet.length >= 2) {
    const areSameOwner = Pet.padrone(
      Array_Pet[0].ownerName,
      Array_Pet[1].ownerName
    );
    console.log("I proprietari dei primi due pets sono uguali ?", areSameOwner);
  }
});
