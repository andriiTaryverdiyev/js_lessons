const cleanTransactionsList = arr => {
    let result = []
    for (let i of arr) {
        if (!/[a-z]/gi.test(i)) {
            let number = Number(i).toFixed(2)
            result.push(`$${number}`)
        }

    }

    return result
}

console.log(cleanTransactionsList([' 1.9', '16.4', 17, ' 1 dollar ']))