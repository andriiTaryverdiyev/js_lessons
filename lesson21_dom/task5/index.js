export const setTitle = (text) => {
    const element = document.querySelector('.title')
    const result = element.textContent
    return (`${ result } ` + `${ text }`)
}
console.log(setTitle('Uzbek'))