export function createArrayOfFunctions(num) {
    if (!num) {
        return []
    }
    if (!Number(num)) {
        return null
    }

    let result = []
    for (let i = 0; i < num; i++) {
        result.push(() => i)
    }


    return result
}