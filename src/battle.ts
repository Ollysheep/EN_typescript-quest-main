import { Hero } from "./hero";
import { HeroAxe } from "./heroaxe";
import { HeroSword } from "./herosword";
import { HeroSpear } from "./herospear";

// Create instances of Hero
const kriss = new Hero("Kriss", 31, 62);
const ani = new Hero("Ani", 65, 130);

// Check initial status
console.log("----------------------");
console.log("Battle One: Kriss vs. Ani");
console.log(`Initial status:`);
console.log(
  `${kriss.getName()} life: ${kriss.getLife()}, ${ani.getName()} life: ${ani.getLife()}`
);
console.log("----------------------");

// Kriss attacks Ani then reverse
kriss.attack(ani);
ani.attack(kriss);
console.log("----------------------");

// Check status after the attack
console.log("Status after Battle One:");
console.log("----------------------");
console.log(
  `${kriss.getName()} life: ${kriss.getLife()}, ${ani.getName()} life: ${ani.getLife()}`
);

// Check if heroes are alive
console.log(`${kriss.getName()} is alive: ${kriss.isAlive()}`);
console.log(`${ani.getName()} is alive: ${ani.isAlive()}`);
console.log("----------------------");

// Create instances of the three classes
const axeHero = new HeroAxe("Pistache", 367, 1425, new Weapon("axe", 50));
const swordHero = new HeroSword("Maki", 1536, 3872, new Weapon("sword", 70));
const spearHero = new HeroSpear("Luci", 449, 1212, new Weapon("spear", 60));

// Test the attack methods
console.log("Battle Two: Pistache vs. Maki vs. Luci");
console.log(`Initial status:`);
console.log(
  `${axeHero.getName()} life: ${axeHero.getLife()}, ${swordHero.getName()} life: ${swordHero.getLife()}, ${spearHero.getName()} life: ${spearHero.getLife()}`
);
console.log("----------------------");
axeHero.attack(swordHero);
swordHero.attack(spearHero);
spearHero.attack(axeHero);

// Check status after Battle Two
console.log("----------------------");
console.log("Status after Battle Two Round One:");
console.log(
  `${axeHero.getName()} life: ${axeHero.getLife()}, ${swordHero.getName()} life: ${swordHero.getLife()}, ${spearHero.getName()} life: ${spearHero.getLife()}`
);

// Check if heroes are alive
console.log(`${axeHero.getName()} is alive: ${axeHero.isAlive()}`);
console.log(`${swordHero.getName()} is alive: ${swordHero.isAlive()}`);
console.log(`${spearHero.getName()} is alive: ${spearHero.isAlive()}`);
console.log("----------------------");

// The loop for simultaneous fights and determining the winner
const heroes = [axeHero, swordHero, spearHero]; // Array containing instances of Hero subclasses

let aliveCount = heroes.length; // Track the count of alive heroes
while (aliveCount > 1) {
  for (let i = 0; i < heroes.length; i++) {
    for (let j = i + 1; j < heroes.length; j++) {
      if (heroes[i].isAlive() && heroes[j].isAlive()) {
        heroes[i].attack(heroes[j]);
        heroes[j].attack(heroes[i]);
      }
    }
  }

  aliveCount = heroes.filter((hero) => hero.isAlive()).length;
}

console.log("----------------------");
console.log("Status after Battle Two Final One:");
console.log(
  `${axeHero.getName()} life: ${axeHero.getLife()}, ${swordHero.getName()} life: ${swordHero.getLife()}, ${spearHero.getName()} life: ${spearHero.getLife()}`
);

// Determine the result
const aliveHeroes = heroes.filter((hero) => hero.isAlive());

if (aliveHeroes.length === 1) {
  const winner = aliveHeroes[0];
  console.log("----------------------");
  console.log(`${winner.getName()} is the winner.`);
} else {
  console.log("----------------------");
  console.log("It's a draw.");
}
