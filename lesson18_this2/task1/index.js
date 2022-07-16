const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'John', age: 18, email: 'user-email' },
        { name: 'Gena', age: 13, email: 'G@gmail.com' }
    ],
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email,
                text: `Dear ${name}! ${this.message}`
            }))
    }
}

console.log(event.getInvitations())