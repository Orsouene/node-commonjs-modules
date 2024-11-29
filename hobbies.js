function hobbiesFun(hobbyOne, hobbyTwo, hobbyThree) {
  return {
    hobbies: [
      // La prima lettera del hobbyOne, hobbyTwo, hobbyThree  in maiuscolo
      hobbyOne.charAt(0).toUpperCase() + hobbyOne.slice(1),
      hobbyTwo.charAt(0).toUpperCase() + hobbyTwo.slice(1),
      hobbyThree.charAt(0).toUpperCase() + hobbyThree.slice(1),
    ],
  };
}
// esportazione
module.exports = {
  hobbiesFun,
};
// console.log(hobbiesFun("football", "gaming", "coding"));
