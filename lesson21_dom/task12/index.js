export function squaredNumbers() {
    let array = document
        .querySelectorAll('.number')
    for (let elem of array) {
        console.log(elem)
        let num = elem.dataset
        let square = num.number * num.number
        elem.setAttribute('data-squared-number', square)
    }
}