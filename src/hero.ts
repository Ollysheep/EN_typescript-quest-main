import { Weapon } from "./weapon";

export class Hero {
  private heroName: string; // Private properties to encapsulate data
  private heroPower: number;
  private heroLife: number;
  weapon?: Weapon; // Add weapon attribute (initialized later)

  constructor(name: string, power: number, life: number, weapon?: Weapon) {
    this.heroName = name;
    this.heroPower = power;
    this.heroLife = life;
    this.weapon = weapon;
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
    if (!this.weapon) {
      console.log(`${this.getName()} has no weapon!`);
      return;
    }

    const totalDamage = this.getPower() + this.weapon.damage; // Calculate total damage
    console.log(`${this.getName()} attacks ${opponent.getName()}.`);
    opponent.takeDamage(totalDamage);
    console.log(`${opponent.getName()} took ${totalDamage} damage.`);
  }

  takeDamage(damage: number): void {
    this.heroLife -= damage;
    if (this.heroLife < 0) {
      this.heroLife = 0;
    }
    console.log(`${this.getName()} took ${damage} damage.`);
  }

  isAlive(): boolean {
    return this.heroLife > 0;
  }
}
