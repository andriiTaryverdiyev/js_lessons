class User {
    constructor(id, name, sessionId) {
        this._id = id
        this._name = name
        this._sessionId = sessionId

    }
    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get sessionId() {
        return this._sessionId
    }

}

class UserRepository {
    constructor(users) {
        this._users = users
        Object.freeze(users)
    }
    get users() {
        return this._users
    }
    getUserNames() {
        return this._users.map((elem) => elem.name)
    }
    getUserIds() {
        return this._users.map((elem) => elem.id)
    }
    getUserNameById(id) {
        for (let element of this._users) {
            if (element._id == id) {
                console.log(element)
                return element._name
            }
        }
    }
}

// examples
const user = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Gaspar', 'session-id');
const userRepository = new UserRepository([user, user2])

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id's
console.log(userRepository.getUserNameById(2))