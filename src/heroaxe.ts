import { Hero } from "./hero";
import { Weapon } from "./weapon";

export class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number, weapon?: Weapon) {
    super(name, power, life, weapon);
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      this.setPower(this.getPower() * 2);
    }
    if (this.weapon) {
      const totalDamage = this.getPower() + this.weapon.damage;
      console.log(`${this.getName()} attacks ${opponent.getName()}.`);
      opponent.takeDamage(totalDamage);
      console.log(`${opponent.getName()} took ${totalDamage} damage.`);
    } else {
      console.log(`${this.getName()} has no weapon!`);
    }

    super.attack(opponent); // Call the attack method of the base class (Hero)
  }
}
