function fullNames(firstName, lastName) {
  return {
    // La prima lettera del nome in maiuscolo
    firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
    // La prima lettera del Cognome in maiuscolo
    lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
  };
}
// esportazione
module.exports = {
  fullNames,
};
