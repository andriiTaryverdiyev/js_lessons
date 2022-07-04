function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    console.log(arr.filter(num => num % 2 === 0).map(elem => elem + delta))
}
increaseEvenEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)