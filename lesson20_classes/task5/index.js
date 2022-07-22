class User {
    id
    name
    sessionId
    constructor(id, name, sessionId) {
        this.id = id
        this.name = name
        this.sessionId = sessionId
    }
}

class UserRepository {
    users = []
    constructor() {

    }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id's