const splitString = (text, len = 10) => {

    if (typeof text !== 'string') {
        return null
    }

    const strArr = [];
    let startPosition = 0;

    while (true) {
        let chank = text.slice(startPosition, startPosition + len)
        if (chank.length === 0) {
            break
        }
        chank.length < len ? strArr.push(chank + '.'.repeat(len - chank.length)) : strArr.push(chank);

        startPosition += len
    }


    return strArr
}
console.log(splitString('abcdefgfrcexe', 4))