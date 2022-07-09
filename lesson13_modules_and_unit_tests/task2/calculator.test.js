import getSum, { getSquaredArray, getoddNumbers } from "./calculator.js";

it('shoud get squared numbers', () => {
    const result = getSquaredArray([1, 2, 3])

    expect(result).toEqual([1, 4, 9])
})
it('shoud keep odd numbers only', () => {
    const result = getoddNumbers([1, 2, 3, 4, 5])

    expect(result).toEqual([1, 3, 5])
})
it('shoud get sum of numbers', () => {
    const result = getSum(8, 4)

    expect(result).toEqual(12)
})