class Weapon {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Hero {
  private heroName: string; // Private properties to encapsulate data
  private heroPower: number;
  private heroLife: number;
  weapon!: Weapon; // Add weapon attribute (initialized later)

  constructor(name: string, power: number, life: number) {
    this.heroName = name;
    this.heroPower = power;
    this.heroLife = life;
  }

  // Getter and setter methods to access and modify private properties
  getName(): string {
    return this.heroName;
  }

  getPower(): number {
    return this.heroPower;
  }

  getLife(): number {
    return this.heroLife;
  }

  setName(name: string): void {
    this.heroName = name;
  }

  setPower(power: number): void {
    this.heroPower = power;
  }

  setLife(life: number): void {
    this.heroLife = life;
  }

  attack(opponent: Hero): void {
    opponent.takeDamage(this.heroPower);
  }

  takeDamage(damage: number): void {
    this.heroLife -= damage;
    if (this.heroLife < 0) {
      this.heroLife = 0;
    }
  }

  isAlive(): boolean {
    return this.heroLife > 0;
  }
}

// Create instances of Hero
const kriss = new Hero("Kriss", 25, 80);
const ani = new Hero("Ani", 97, 230);

// Check initial status
console.log(`Initial status:`);
console.log(
  `${kriss.getName()} life: ${kriss.getLife()}, ${ani.getName()} life: ${ani.getLife()}`
);

// Kriss attacks Ani then reverse
kriss.attack(ani);

ani.attack(kriss);

// Check status after the attack
console.log(`Status after attack:`);
console.log(
  `${kriss.getName()} life: ${kriss.getLife()}, ${ani.getName()} life: ${ani.getLife()}`
);

// Check if heroes are alive
console.log(`${kriss.getName()} is alive: ${kriss.isAlive()}`);
console.log(`${ani.getName()} is alive: ${ani.isAlive()}`);

// HeroAxe, HeroSword, HeroSpear inherit from Hero class and implement specialized attacks based on opponent types
class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapon("axe");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      this.setPower(this.getPower() * 2);
    }
    super.attack(opponent);
  }
}

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapon("sword");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      this.setPower(this.getPower() * 2);
    }
    super.attack(opponent);
  }
}

class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapon("spear");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      this.setPower(this.getPower() * 2);
    }
    super.attack(opponent);
  }
}

// Create instances of the three classes
const axeHero = new HeroAxe("Pistache", 58, 230);
const swordHero = new HeroSword("Maki", 142, 567);
const spearHero = new HeroSpear("Luci", 28, 110);

/* Test the attack methods
 *axeHero.attack(swordHero);
 *swordHero.attack(spearHero);
 *spearHero.attack(axeHero);
 *
 * Check status after the attacks
 *console.log(`Status after attacks:`);
 *console.log(
 *  `${axeHero.getName()} life: ${axeHero.getLife()}, ${swordHero.getName()} life: ${swordHero.getLife()}, ${spearHero.getName()} life: ${spearHero.getLife()}`
 *);
 *
 * Check if heroes are alive
 *console.log(`${axeHero.getName()} is alive: ${axeHero.isAlive()}`);
 *console.log(`${swordHero.getName()} is alive: ${swordHero.isAlive()}`);
 *console.log(`${spearHero.getName()} is alive: ${spearHero.isAlive()}`); */

// The loop for simultaneous fights and determining the winner
const heroes = [axeHero, swordHero, spearHero]; // Array containing instances of Hero subclasses

let allDead = false;
while (!allDead) {
  // Simultaneous attacks
  for (let i = 0; i < heroes.length; i++) {
    for (let j = i + 1; j < heroes.length; j++) {
      if (heroes[i].isAlive() && heroes[j].isAlive()) {
        heroes[i].attack(heroes[j]);
        heroes[j].attack(heroes[i]);
      }
    }
  }

  // Check if all heroes are dead
  allDead = heroes.every((hero) => !hero.isAlive());
}

// Determine the result
const aliveHeroes = heroes.filter((hero) => hero.isAlive());

if (aliveHeroes.length === 0) {
  console.log("It's a draw.");
} else {
  const winner = aliveHeroes[0];
  console.log(`${winner.getName()} wins.`);
}
