function getKeys(obj) {
    let result = Object.keys(obj)
    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}
// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel