function getTotalPrice(arr) {
    return `$${Math.floor(arr.reduce((acc, el) => acc + el, 0) * 100) / 100}`
}



console.log(getTotalPrice([1.3142, 5.412, 3.21, 4.78, 2.98]))