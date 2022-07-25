export const getTitle = () => {
    const element = document.querySelector('.title')
    const text = element.textContent
    return text
}

export const getDescription = () => {
    const element = document.querySelector('.about')
    const text = element.innerText
    return text
}

export const getPlans = () => {
    const element = document.querySelector('.plans')
    const text = element.innerHTML
    return text
}

export const getGoal = () => {
    const element = document.querySelector('.goal')
    const text = element.outerHTML
    return text
}
console.log(getTitle())
console.log(getDescription())
console.log(getPlans())
console.log(getGoal())