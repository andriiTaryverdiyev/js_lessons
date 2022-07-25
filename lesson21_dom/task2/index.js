export const getTitleElement = () => {
    const titleElem = document.querySelector('.title')
    console.dir(titleElem)
    return titleElem
}
export const getImputElement = () => {
    const inputElem = document.querySelector('input[type="text"]')
    console.dir(inputElem)
    return inputElem
}
getTitleElement()
getImputElement()