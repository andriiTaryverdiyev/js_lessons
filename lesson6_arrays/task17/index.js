function removeDublicates(array) {
    let arr = []
    const tempArray = [...array].sort()
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] !== tempArray[i]) {
            arr.push(tempArray[i])
        }
    }
    return arr
}

removeDublicates([1, 1, 4, 8, 3, 1, 4, 5, 6], );