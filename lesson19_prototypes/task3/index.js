function user(name, age) {
    this.name = name
    this.age = age
}
user.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`)
}

user.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`)
}

user.prototype.setAge = function(age) {
    if (age >= 25) {
        this.requestNewPhoto()
        this.age = age

    }
    if (age < 0) {
        return false
    }
    if (age > 0 < 25) {
        return age
    }
}