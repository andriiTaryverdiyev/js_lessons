class Vehicle {
    constructor(name, hasWeels) {
        this.hasWeels = hasWeels
        this.name = name
    }

    move() {
        console.log(`${this.name} is moving`)
    }

    stop() {
        console.log(`${this.name} stopped`)
    }

};

class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels)
        this.maxSpeed = maxSpeed
    }
    move() {
        console.log(`${this.name} lifting anchor up`)
        super.move()
    }
    stop() {
        super.stop()
        console.log(`${this.name} lifting anchor down`)
    }
}