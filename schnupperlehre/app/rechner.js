function buttonpress(charakter) {
  let eingabe = document.getElementById("eingabebereich");
  eingabe.innerText = eingabe.innerText + charakter;
}
function gleichheitszeichen() {
  let eingabe = document.getElementById("eingabebereich");
  eingabe.innerText = eval(eingabe.innerText);
}
function löschen() {
  let eingabe = document.getElementById("eingabebereich");
  eingabe.innerText = eingabe.innerText.slice(0, -1);
}
function allesweg() {
  let eingabe = document.getElementById("eingabebereich");
  eingabe.innerText = "";
}
