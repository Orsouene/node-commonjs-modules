// import from names.js
const allNames = require("./names");
// import from hobbies.js
const allHobbies = require("./hobbies");

// function people
function people() {
  //  salvo l'oggetto fullnames
  const utente = allNames.fullNames("orsouene", "elaouizeb");
  return {
    // Nome concatinato
    fullName: utente.firstName + " " + utente.lastName,
    // l'array di hobbies
    hobbies: allHobbies.hobbiesFun("football", "gaming", "coding").hobbies,
  };
}
//  Stampare l'oggetto
console.log(people());
