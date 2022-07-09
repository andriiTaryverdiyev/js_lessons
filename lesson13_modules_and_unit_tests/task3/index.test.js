import getMinSquaredNumber, {} from "./getMinSquaredNumber.js"
it('shoud return null if array is empty', () => {
    const result = getMinSquaredNumber([])

    expect(result).toEqual(null)
})
it('shoud return null if is not array', () => {
    const result = getMinSquaredNumber(5)

    expect(result).toEqual(null)
})
it('shoud return min square ', () => {
    const result = getMinSquaredNumber([-2, 6, 1])

    expect(result).toEqual(1)
})