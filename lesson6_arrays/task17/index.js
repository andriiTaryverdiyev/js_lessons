function uniqueCount(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let count = 0
    const tempArray = [...array].sort()
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] !== tempArray[i]) {
            count += 1
        }
    }
    return count
}

uniqueCount([1, 1, 4, 8, 3, 1, 4, 5, 6], );