function sumArray(arr1, arr2) {
    let array = arr1.concat(arr2)


    return array.sort((a, b) => a - b).filter((el, id) => array
        .indexOf(el) === id)
}



console.log(sumArray([1, 5, 3, 4, 2], [8, 9, 6, 2, 3, 7]))