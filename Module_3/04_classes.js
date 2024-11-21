// Defining the Car class with a constructor and a method for turbo functionality
class Car {
  constructor(color, speed) {
    this.color = color;  // Initializing the color property
    this.speed = speed;  // Initializing the speed property
  }
  turboOn() {
    console.log("turbo is on");  // Method to activate turbo
  }
}

const car1 = new Car("red", 120);  // Creating an instance of the Car class
console.log(car1);  // Logs the car details
car1.turboOn();  // Calls the turboOn method on car1

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Defining a Bird class with a useWings method
class Bird {
  useWings() {
    console.log("Flying!");  // General flying behavior
  }
}

// Eagle class extends Bird, overriding the useWings method
class Eagle extends Bird {
  useWings() {
    super.useWings();  // Calls the parent method (Flying!)
    console.log("Barely flapping!");  // Eagle's specific behavior
  }
}

// Penguin class extends Bird, with its own implementation of useWings
class Penguin extends Bird {
  useWings() {
    console.log("Diving!");  // Penguin-specific behavior
  }
}

var baldEagle = new Eagle();  // Creating an instance of Eagle
var kingPenguin = new Penguin();  // Creating an instance of Penguin
baldEagle.useWings();  // Output: "Flying! Barely flapping!"
kingPenguin.useWings();  // Output: "Diving!"

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Defining the Train class with constructor, methods, and prototype handling
class Train {
    constructor(color, lightsOn) {
        this.color = color;  // Initializing color property
        this.lightsOn = lightsOn;  // Initializing lightsOn property
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;  // Toggles the lights state
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);  // Logs the light status
    }
    getSelf() {
        console.log(this);  // Logs the current instance (this)
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);  // Retrieves the prototype of the instance
        console.log(proto);  // Logs the prototype object
    }
}

// HighSpeedTrain class extends Train, with additional features like passengers and high-speed functionality
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);  // Calls the parent constructor to initialize common properties
        this.passengers = passengers;  // Passengers property
        this.highSpeedOn = highSpeedOn;  // High speed property
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;  // Toggles high speed status
        console.log('High speed status:', this.highSpeedOn);  // Logs the status of high speed
    }
    toggleLights() {
        super.toggleLights();  // Calls the parent method to toggle lights
        super.lightsStatus();  // Calls the parent method to check lights status
        console.log('Lights are 100% operational.');  // Custom message for high-speed trains
    }
}

var myFirstTrain = new Train('red', false);  // Creating an instance of Train
console.log(myFirstTrain);  // Logs the Train instance details
var mySecondTrain = new Train('blue', false);  // Another Train instance
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights();  // Toggles lights, then checks the status
train4.lightsStatus();  // Logs light status (on)
train4.getSelf();  // Logs the Train instance
train4.getPrototype();  // Logs the Train prototype

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights();  // Toggles and checks lights for Train instance
train5.lightsStatus();  // Logs light status
highSpeed1.toggleLights();  // Toggles lights and logs custom messages for HighSpeedTrain

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Gym system with StationaryBike and Treadmill classes, and Gym class that encapsulates them
class StationaryBike {
    constructor(position, gears) {
        this.position = position;  // Position of the bike in the gym
        this.gears = gears;  // Number of gears on the bike
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position;  // Position of the treadmill in the gym
        this.modes = modes;  // Number of modes the treadmill supports
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs;  // Opening hours of the gym
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8);  // Instantiates StationaryBike
        this.treadmill = new Treadmill(treadmillPos, 5);  // Instantiates Treadmill
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner");  // Creating a Gym instance

console.log(boxingGym.openHrs);  // Logs the gym's opening hours
console.log(boxingGym.stationaryBike);  // Logs the stationary bike details
console.log(boxingGym.treadmill);  // Logs the treadmill details
