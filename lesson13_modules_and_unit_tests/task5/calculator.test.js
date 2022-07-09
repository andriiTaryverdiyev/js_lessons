import { reverseArray } from "./reverseArray"
import { withdraw } from "./withdraw"
import { getAdults } from "./getAdults"

//reverseArray tests

it('shoud return reversed array', () => {
    const result = reverseArray([5, 6, 7, 8, 9, 10])

    expect(result).toEqual([10, 9, 8, 7, 6, 5])
})
it('shoud return null if not array', () => {
    const result = reverseArray(5)

    expect(result).toEqual(null)
})
it('shoud return array', () => {
    const result = reverseArray([])

    expect(result).toEqual([])
})

//withdraw tests

it('shoud return correctly output', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

    expect(result).toEqual(37)
})

it('shoud return correctly output', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 400)

    expect(result).toEqual(1000)
})

it('shoud return -1 if not enought', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

    expect(result).toEqual(-1)
})


//getAdult tests

it('shoud return correct result', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })

    expect(result).toEqual({ 'John Doe': 19, Bob: 18 })
})
it('shoud return correct result', () => {
    const result = getAdults({ Ann: 56, Andrey: 7 })

    expect(result).toEqual({ Ann: 56 })
})
it('shoud return null', () => {
    const result = reverseArray({})

    expect(result).toEqual(null)
})