const countOccurrences = (text, str) => {
    if (!str) {
        return null
    }
    const tt = new RegExp(str, 'gi')
    return (text.match(tt).length)
};

console.log(countOccurrences('abcdeaa', 'a'))