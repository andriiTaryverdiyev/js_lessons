function arrAverage(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    console.log(arr.reduce((acc, el) => acc += el, 0) / arr.length)
}
arrAverage([2, 5, 6, 3])