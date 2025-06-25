const readline = require("readline-sync");

class player {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}
let health= 100;

function startgame() {
  let name1 = readline.question("Wie heisst du?");
  let name2 = readline.question("Wie heisst du?");
  const user1 = new player(name1, health);
  const user2 = new player(name2, health);
  while (user1.health >= 0 || user2.health >= 0) {
    fight(user2, user1);
    fight(user1, user2);
  }

  if (user1.health < 1) {
      console.log(user2.name + "hat gewonnen!");
    }
    if (user2.health < 1) {
        console.log(user1 + "hat gewonnen!");
    }
}
    function fight(attacker, opponent) {
  let entscheidung = readline.question(
    attacker.name + ",möchtest du angreifen oder heilen?"
  );
  if (entscheidung === "a" || entscheidung === "A") {
    let random = Math.floor(Math.random() * 21) + 5;
    opponent.health = parseInt(opponent.health) - random;
    console.log(
      attacker.name +
        "hat" +
        random +
        "Schaden hinzugefügt! Opfer hat noch" +
        opponent.health +
        "Leben!"
    );
  }
  if (entscheidung === "h" || entscheidung === "H") {
    let random = Math.floor(Math.random() * 16) + 5;
    attacker.health = parseInt(attacker.health) + random;
    console.log(
      attacker.name +
        "hat" +
        random +
        "Schaden geheilt! Er hat noch" +
        attacker.health +
        "Leben!"
    );
  }
}
startgame();
