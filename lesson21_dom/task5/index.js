export function setTitle(text) {
    const elem = document.querySelector('.title')
    const result = elem.textContent = text
    return result
}
console.log(setTitle('Uzbek'))