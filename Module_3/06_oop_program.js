// Base class representing an Animal
class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;  // Default color is "yellow"
    this.energy = energy;  // Default energy is 100
  }

  // Method to simulate activity and decrease energy
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;  // Decrease energy by 20
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();  // If energy reaches 0, call sleep to regain energy
    }
  }

  // Method to simulate sleeping and increasing energy
  sleep() {
    this.energy += 20;  // Increase energy by 20
    console.log("Energy is increasing, currently at:", this.energy);
  }

  // Method to get the color of the animal
  getColor() {
    console.log(this.color);  // Logs the color of the animal
  }
}

// Class representing a Cat, inheriting from Animal
class Cat extends Animal {
  constructor(
    sound = "purr",  // Default sound is "purr"
    canJumpHigh = true,  // Default ability to jump high
    canClimbTrees = true,  // Default ability to climb trees
    color,
    energy
  ) {
    super(color, energy);  // Call the constructor of the parent class (Animal)
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }

  // Method to make the cat's sound
  makeSound() {
    console.log(this.sound);  // Logs the sound of the cat
  }
}

// Class representing a Bird, inheriting from Animal
class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy);  // Call the constructor of the parent class (Animal)
    this.sound = sound;
    this.canFly = canFly;
  }

  // Method to make the bird's sound
  makeSound() {
    console.log(this.sound);  // Logs the sound of the bird
  }
}

// Class representing a HouseCat, inheriting from Cat
class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",  // Default sound is "meow"
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);  // Call the constructor of the parent class (Cat)
    this.houseCatSound = houseCatSound;  // Set the house cat's specific sound
  }

  // Method to make the house cat's sound, with an option to also make the purring sound
  makeSound(option) {
    if (option) {
      super.makeSound();  // Call the parent class's makeSound() method
    }
    console.log(this.houseCatSound);  // Logs the house cat's sound (meow)
  }
}

// Class representing a Tiger, inheriting from Cat
class Tiger extends Cat {
  constructor(
    tigerSound = "Roar!",  // Default sound is "Roar!"
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);  // Call the constructor of the parent class (Cat)
    this.tigerSound = tigerSound;  // Set the tiger's specific sound
  }

  // Method to make the tiger's sound, with an option to also make the purring sound
  makeSound(option) {
    if (option) {
      super.makeSound();  // Call the parent class's makeSound() method
    }
    console.log(this.tigerSound);  // Logs the tiger's sound (Roar!)
  }
}

// Class representing a Parrot, inheriting from Bird
class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);  // Call the constructor of the parent class (Bird)
    this.canTalk = canTalk;  // Set whether the parrot can talk
  }

  // Method to make the parrot's sound, with an option to also make the chirping sound
  makeSound(option) {
    if (option) {
      super.makeSound();  // Call the parent class's makeSound() method
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");  // If the parrot can talk, log a message
    }
  }
}

// Creating instances and testing the functionality

var fiji = new Parrot(false);  // Parrot that cannot talk
var polly = new Parrot(true);  // Parrot that can talk

fiji.makeSound();  // Logs: undefined
fiji.makeSound(true);  // Logs: chirp

polly.makeSound();  // Logs: I'm a talking parrot!
polly.makeSound(true);  // Logs: chirp, I'm a talking parrot!

console.log(polly.color);  // Logs: yellow
console.log(polly.energy);  // Logs: 100

polly.isActive();  // Logs: Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200);  // Custom penguin instance
console.log(penguin);  // Logs the penguin instance details

console.log(penguin.sound);  // Logs: shriek
console.log(penguin.canFly);  // Logs: false
console.log(penguin.color);  // Logs: black and white
console.log(penguin.energy);  // Logs: 200
penguin.isActive();  // Logs: Energy is decreasing, currently at: 180

var leo = new HouseCat();  // House cat instance

// leo, no purring sound:
leo.makeSound(false);  // Logs: meow
// leo, both purr and meow:
leo.makeSound(true);  // Logs: purr, meow

var cuddles = new Tiger();  // Tiger instance
cuddles.makeSound(false);  // Logs: Roar!
cuddles.makeSound(true);  // Logs: purr, Roar!
