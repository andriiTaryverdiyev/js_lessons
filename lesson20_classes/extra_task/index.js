const user = {
    name: "leo",
    age: 30,
    family: {
        vife: "zara",
        age: 28,
    },
}

function copyUser(obj) {
    const clObj = {};
    for (const i in obj) {
        if (obj[i] instanceof Object) {
            clObj[i] = copyUser(obj[i]);
            continue;
        }
        clObj[i] = obj[i];
    }
    return clObj;
}



let v = copyUser(user)
user.name = "oleg"
user.family.vife = false
console.log(user) //{
    //"name": "oleg",
    //  "age": 30,
    //  "family": {
    //   "vife": false,
    // "age": 28
    // }
    //}
console.log(v) //{
    // "name": "leo",
    // "age": 30,
    // "family": {
    //   "vife": "zara",
    //  "age": 28
    // }
    //}