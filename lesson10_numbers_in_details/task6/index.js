const getRandomNumbers = (length, from, to) => {
    let result = []
    if (to - from < 1) {
        return null
    }
    for (let i = 0; i < length; i++) {
        result.push(Math.ceil(Math.random() * (Math.floor(to) - from) + from))
    }

    return result

};

// examples
console.log(getRandomNumbers(5, 1.4, 1.5)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]