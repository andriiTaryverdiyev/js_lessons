export function reverseArray(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    return array.map(elem => elem).reverse()
}
reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])