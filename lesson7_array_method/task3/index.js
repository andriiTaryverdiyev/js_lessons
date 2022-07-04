const sortDesc = numbers => {
    return numbers.slice().sort((a, b) => b - a)
}
sortDesc([1, 2, 3, 4, 5, 6, 7, 8, 9])