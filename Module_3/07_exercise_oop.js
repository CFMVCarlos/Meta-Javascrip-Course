// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  // Method to simulate sleeping, which increases energy
  sleep() {
    this.energy += 10;
    console.log(`${this.name} is sleeping. Energy is now: ${this.energy}`);
  }

  // Method to simulate doing something fun, which decreases energy
  doSomethingFun() {
    this.energy -= 10;
    console.log(`${this.name} is doing something fun. Energy is now: ${this.energy}`);
  }
}

// Task 2: Code a Worker class that extends Person
class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
    super(name, age, energy); // Inherit properties from Person
    this.xp = xp; // Experience points
    this.hourlyWage = hourlyWage; // Hourly wage
  }

  // Method to simulate working and gaining experience
  goToWork() {
    this.xp += 10;
    console.log(`${this.name} is working. Experience is now: ${this.xp}`);
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  const intern = new Worker("Bob", 21, 110); // Create an intern object with default values
  intern.goToWork(); // Intern works and gains experience
  return intern; // Return the intern object
}

// Task 4: Code a manager object, methods
function manager() {
  const manager = new Worker("Alice", 30, 120, 100, 30); // Create a manager object with specific values
  manager.doSomethingFun(); // Manager does something fun and loses energy
  return manager; // Return the manager object
}

// Testing the functionality
const internObject = intern(); // Create an intern and log their status
console.log(internObject); // Logs the intern's properties

const managerObject = manager(); // Create a manager and log their status
console.log(managerObject); // Logs the manager's properties
