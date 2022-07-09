import { calc } from "./calculator"
it('shoud return sum', () => {
    const result = calc('5 + 5')

    expect(result).toEqual('5 + 5 = 10')
})
it('shoud return difference', () => {
    const result = calc('5 - 5')

    expect(result).toEqual('5 - 5 = 0')
})
it('shoud return product', () => {
    const result = calc('5 * 5')

    expect(result).toEqual('5 * 5 = 25')
})
it('shoud return quotient', () => {
    const result = calc('10 / 5')

    expect(result).toEqual('10 / 5 = 2')
})
it('shoud return null if expression is not string', () => {
    const result = calc(5 * 3)

    expect(result).toEqual(null)
})