function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let clone = arr.slice()
    console.log(clone)
}
cloneArr([1, 2, 3, 4, 5, 6, 7, 8, 9])