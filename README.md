# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

- Which are the different primitive data types in TypeScript?

In TypeScript, there is seven primitive types : **bigint**, **boolean**, **null**, **number**, **string**, **nsymbol**, **undefined**.

```ts
let myName: string = "Kristina";
let myAge: number = 25;
let amIaWoman: boolean = true;
```

- How to type an Array?

You can type an Array by declaring a name followed by square brackets, you can add or not some values in there and at the end a semi-colon.

```ts
let nameOfTheApprentices = [
  'Kriss',
  'Virand',
  'Idriss',
  'Audrey',
  'Manue',
  'Martin',
  'Elo',
  'Davy',
  'Xavier',
  'Pouki'];`
```

- What is the `any` type?

The `any` type is when you don't assign a type to your value. You can do it when you don't know the type that will return to you. Here is an example :

```ts
let myKnowledge; // the type here is any because we don't assign one particular type

myKnowledge = true; // this is valid
myKnowledge = "is abundant"; // this is valid (Well not necessarily true...)
myKnowledge = 42; // this is valid
```

- How to type the return of a function as well as the type of its parameters?

To type the return of a function and its parameters in TypeScript, you habe to put the parameters into a pair of parentheses, then a colon after that you have to indicate the return type. Then you have to add types to each of the parameters and then to the function itself to add a return type. If your function is declared without a specified return data type statement, then an undefined is returned. When you define a function, you can explicitly indicate the type of value it should return right after the parameter list.

```ts
function logAgeAndName(age: number, name = String) {
  console.log(`${name}, age ${age}`);
}

logAgeAndName(25, "Kristina"); // This is valid 25 is a number and 'Kristina' a string

logAgeAndName("Kristina", 25); // This is invalid because argument of type 'string' is not assignable to parameter of type 'number'
```

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 2

- What is a class?

A class permit to contain data for the object.

```ts
class Books {
  author: string;
  release: boolean;
  pages: number;
}
```

- What is a class constructor?

A class constructor is a special member function of a class that is executed whenever a new object of that class is created. It has the same name as the class and does not have any return type.

```ts
class Books {
  author: string;
  pages: number;
  constructor(author: string, pages: number) {
    this.author = author;
    this.pages = pages;
  }
}

const myBook = new Books("Shinning", 571);
```

- What is a class instance?

A class instance is a specific object created from a class, following the guidelines set by that class. It has its own unique data and behaviors based on the class blueprint. Here it's `myBook`.

- How to check that a class is of a certain instance?

The `instanceof` operator allows to check whether an object belongs to a certain class.

```ts
class Books {}
let myBook = new Books();

// is it an object of Books class?
alert(myBook instanceof Books); // true
```

- What is `this` in a class?

when we assign `this.author = author` inside the constructor, we are creating a public property that’s available throughout the class.

- What is a class method?

A class method is a method that is bound to the class and not the object of the class.

```ts
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}

// Creating an instance of the Calculator class
const myCalculator = new Calculator();

// Using the methods of the Calculator class
const sum = myCalculator.add(5, 3); // Using the add method
console.log("Sum:", sum); // Output: Sum: 8

const difference = myCalculator.subtract(10, 4); // Using the subtract method
console.log("Difference:", difference); // Output: Difference: 6
```

- What is the visibility of properties?

In TypeScript, by default, all properties and methods within classes are considered "public", but , TypeScript also supports two other member visibilities apart from public: "private" and "protected." These different visibilities control how properties and methods can be accessed within the class and its subclasses:
By explicitly specifying member visibility (public, private, or protected), developers can control and restrict access to properties and methods within their classes, enabling better encapsulation and control over how class members are used and accessed.

- What is the difference between `public`, `private` and `protected`?

**Public**: This is the default visibility in TypeScript. Public members can be accessed from anywhere, both inside and outside of the class.

**Private**: Private members are accessible only within the class where they are declared. They cannot be accessed from outside the defining class, not even in its subclasses.

**Protected**: Protected members are similar to private members, but they can be accessed within the defining class and its subclasses. They are not accessible from outside the class hierarchy.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 3

- How to split our program into different files? (e.g. a class in a file that I import into another)
- What is the `export` keyword?
- What is the `import` keyword?
- What's inheritance?
- How to call the constructor of a parent class?
- How to call a method of a parent class?
- What is polymorphism?

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Boss level

You've learned a lot of things! Now it's time to put it into practice through this exercise in pairs!

### Part 1 : Heroes

Create a `Hero` class that allows you to create objects with the following properties:

```ts
name: string;
power: number;
life: number;
```

And the methods

```ts
  attack(opponent: Hero)
  isAlive()
```

The `attack` method has an `opponent` parameter (of type `Hero`). It is necessary to reduce the number (`life`) of `opponent` by as much damage (`power`) of the attacker.

​*Example: If the Joan instance, attacks the Leon instance, it will be represented by this method call:*

```ts
joan.attack(leon);
```

The `isAlive` method should return `true` if the hero's life points are greater than zero and `false` otherwise.

Create two instances of `Hero` and check that the `attack` and `isAlive` methods work.

**Constraint to add**: you now have to make sure that the `name`, `power`, `life` properties are private. You will have to create methods to access their value and modify their value.

### Part 2 : Weapons

​
Create a `Weapon` class with the following property:

```ts
name: string;
```

Add the `weapon` attribute (of type `Weapon`) to the `Hero` class without modifying the constructor (so `weapon` is not initialized).

Create three classes `HeroAxe`, `HeroSword` and `HeroSpear` that inherit from `Hero`.

These three classes call the constructor of their parent and initialize `weapon` with instances of the `Weapon` class whose names will be `axe`, `sword` or `spear` as the case may be.

In the `HeroAxe`, `HeroSword` and `HeroSpear` classes, redefine the `attack` method to take into account the following cases:

- `HeroAxe` : if the type of `opponent` is `HeroSword`, multiply `power` by two
- `HeroSword` : if the type of `opponent` is `HeroSpear`, multiply `power` by two
- `HeroSpear` : if the type of `opponent` is `HeroAxe`, multiply `power` by two

Tip: use the `super` keyword to call the `attack` method of the parent class.
​
Create instances of the three classes `HeroAxe`, `HeroSword` and `HeroSpear` and check that their `attack` methods work correctly.
​

### Part 3 : Battle

Create a loop that makes two instances of subclasses `Hero` fight each other (they attack at the same time).

When at least one of them is dead, display `{heroName} wins`. If both are dead, display `It's a draw`.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

---

**_Bonus 1 : Weapon damage_**

_Add a `damage` property to the `Weapon` class and make sure it is initialized by the constructor._

_Edit the `attack` method of `Hero` so that the damage is calculated as follows: the hero's power `power` + the weapon's damage `power`_

**_Bonus 2 : User interface_**

_Create a user interface for the application (for example, with a choice of heroes and weapons, and a visual on the damage inflicted)_
