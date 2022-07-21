class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`)
    }
    setAge(value) {
        if (value < 0) {
            return false
        }
        this.age = age
        if (age >= 25) {
            this.requestNewPhoto()
        }
        return value
    }
    static createEmpty() {
        user1 = new User('', null)
    }
}