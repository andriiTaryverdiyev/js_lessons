const getTitleElement = () => {
    const titleElem = document.querySelector('.title')
    console.dir(titleElem)
    return titleElem
}
const getImputElement = () => {
    const inputElem = document.querySelector('input[type="text"]')
    console.dir(inputElem)
    return inputElem
}
getTitleElement()
getImputElement()