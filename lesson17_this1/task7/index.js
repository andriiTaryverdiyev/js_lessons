const user = {
    firstName: 'Jhon',
    lastName: 'Doe',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`)
    },
    setFullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ')
    }
}
console.log(user.getFullName())
console.log(user.setFullName('Get Puc'))