export function getSection(num) {
    let array = document
        .querySelectorAll('span')
    for (let elem of array) {
        let elemNum = Number(elem.dataset.number)
        if (elemNum === num) {
            return (elem.parentNode.dataset)
        }
    }
}