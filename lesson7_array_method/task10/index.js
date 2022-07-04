function sum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    console.log(arr.reduce((acc, el) => acc += el, 0))
}
sum([1, 2, 3, 4, 5, 6])