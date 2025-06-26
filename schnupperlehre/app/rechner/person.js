const readline = require("readline-sync");

let namee = ""
let alter = ""
let hobbies= ""

function abfrage(){
namee = readline.question("Wie heisst du?")
alter = parseInt(readline.question("Wie alt bist du?"))
hobbies = readline.question("Was für Hobbies hast du?")
}

class Person {
  constructor(namee, alter, hobbies) {
    this.namee = namee;
    this.alter = alter;
    this.hobbies = hobbies;
  }
}
function person(){
const user = new Person(namee, alter, hobbies);
console.log("Name:" + user.namee)
console.log("Alter:" + user.alter)
console.log("Hobbies:" + user.hobbies)
}

abfrage()
person()