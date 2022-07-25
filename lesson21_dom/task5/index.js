export const setTitle = (text) => {
    const elem = document.querySelector('.title').textContent = text
    return elem
}
console.log(setTitle('Uzbek'))