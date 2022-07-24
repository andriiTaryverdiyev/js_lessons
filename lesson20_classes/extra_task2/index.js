let total = [];

function User(name) {
    this.name = name;
    this.id = createId();
    total.push(this)
}

function createId() {
    let ser = total.sort((a, b) => {
        return a.id - b.id
    })
    if (!ser.length) {
        return 1
    }

    if (ser[0].id > 1) {
        return 1
    }

    for (let i = 1; i < ser.length; i++) {
        if (ser[i].id - ser[i - 1].id !== 1) {
            return (ser[i - 1].id + 1)
        }
    }
    return ser[ser.length - 1].id + 1

    //здесь код для присваивания id  новому пользователю
    // id  должен быть по порядку начиная с первого так чтоб новый пользователь добавлялся в места списка где пробел по id
}

function del(user) {
    total.splice(total.indexOf(user), 1)
        //тут удаляем юзера из списка
}




const user1 = new User('VASIA')
const user2 = new User('OLGA')
const user3 = new User('ANTON')
const user4 = new User('ANDREY')

del(user1)
del(user4)
const user5 = new User('PETRO')
const user6 = new User('MICHAIL')
console.log(total)
    /*
        [
        {
            "name": "PETRO",
            "id": 1
        },
        {
            "name": "OLGA",
            "id": 2
        },
        {
            "name": "ANTON",
            "id": 3
        },
        {
            "name": "MICHAIL",
            "id": 4
        }

    ]*/