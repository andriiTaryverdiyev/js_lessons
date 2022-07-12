let mem = 0;

export function add(addNum) {
    mem += addNum
}

export function decrease(decNum) {
    mem -= decNum
}

export function reset() {
    mem = 0
}

export function getMemo() {
    return mem
}