const getAdults = obj => {
    let ob = {}
    for (let key in obj) {
        if (obj[key] >= 18) {
            ob[key] = obj[key]
        }
    }
    console.log(ob)
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }