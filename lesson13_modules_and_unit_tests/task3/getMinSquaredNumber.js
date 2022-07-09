export default arr => {
    if (arr.length == 0) {
        return null
    }
    if (!Array.isArray(arr)) {
        return null
    }
    let square = []
    for (let i of arr) {
        square.push(i * i)
    }

    return Math.min(...square)
}