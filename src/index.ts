class Hero {
  private name: string;
  private power: number;
  private life: number;

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }
  // Getter for name property
  get name(): string {
    return return this.name;
  }

  // Getter for power property
  get power(): number {
    return this.power;
  }

  // Getter for life property
  get life() : number {
    return this.life;
  }

  // Method to attack opponent
  attack(opponent: Hero): void {
    opponent.reduceLife(this.power);
    console.log('${this.name} attacks ${opponent.name} with power ${this.power}');
  }

  // Method to reduce life points
  private reduceLife(damage: number): void {
    this.life -= damage;
  }

  // Method to check if the hero is alive
  isAlive(): boolean {
    return this.life > 0;
  }
  

}

