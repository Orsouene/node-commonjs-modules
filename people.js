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
    fullName:
      utente.firstName.charAt(0).toUpperCase() +
      utente.firstName.slice(1) +
      " " +
      utente.lastName.charAt(0).toUpperCase() +
      utente.lastName.slice(1),
    // l'array di hobbies
    hobbies: allHobbies.hobbiesFun("football", "gaming", "coding").hobbies,
  };
}

console.log(people());
