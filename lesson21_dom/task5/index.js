const setTitle = (text) => {
    const element = document.querySelector('.title')
    const result = element.textContent = text

    return result
}
console.log(setTitle('Uzbek'))