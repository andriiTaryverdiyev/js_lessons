const IsInteger = require("es-abstract/2015/IsInteger")

function getFiniteNumbers(arr) {
    // result = []
    // arr.forEach(num => {
    //     if (Number.isFinite(num)) {
    //         result.push(num)
    //     }
    // });
    // console.log(result)
    // console.log(arr)
    console.log(arr.filter(el => Number.isFinite(el)))
    console.log(arr)
}

function getFiniteNumbersV2(arr) {
    console.log(arr.filter(el => isFinite(el)))
}

function getNaN(arr) {
    console.log(arr.filter(el => Number.isNaN(el)))
}

function getNaNV2(arr) {
    return (arr.filter(el => isNaN(el)))
}

function getIntegers(arr) {
    return (arr.filter(el => Number.IsInteger(el)))
}
getFiniteNumbers([1, '2a', 3, 4, 1.15, 2.2, 3.3, 'a', 'c'])
getNaN