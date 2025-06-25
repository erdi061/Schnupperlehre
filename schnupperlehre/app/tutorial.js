

console.log ("Hello Guys")

const readline = require("readline-sync");

let name=""
function abfrage() {
    name = readline.question("Wie heisst du?")
console.log("Hallo," + name)
}
abfrage()

function alter(){
    let alter = readline.question("Wie alt bist du Anna?")
    if (alter<10)
        console.log("Anna ist ein Kind.")
    else if (alter<18)
        console.log("Anna ist ein Teenager.")
    else
    console.log("Anna ist ein Erwachsener.")
}

if (name === "anna" || name === "Anna") {
    alter()
}



