const flatArray = arr => arr.reduce((acc, elem) => {
    let flat = acc.concat(elem)
    return flat.slice().sort((a, b) => a - b);
}, []);
flatArray([1, 2, 3, [4, 5, 6, ], 7, 8, 9])