const readline = require("readline-sync");

let anzahlrichtig = 0;

function richtig(){
console.log("Richtig! Das gibt ein Pluspunkt!")
anzahlrichtig= anzahlrichtig+1
}
function falsch(){
console.log("Leider falsch :( Das gibt kein Pluspunkt")
}
let antwort1 = readline.question("Im welchen Jahr kam der Film Top Gun: Maverick raus?")

if (antwort1 === "2022")
    richtig()
else
falsch()
let antwort2 = readline.question("Ist der F/A 18 Hornet ein US-amerikanischer Kampfjet?")

if (antwort2 === "Ja" || antwort2 === "ja")
    richtig()
else
falsch()

console.log (anzahlrichtig)