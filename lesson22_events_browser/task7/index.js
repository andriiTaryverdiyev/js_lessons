const array = document.querySelectorAll('.btn')
const firstButton = document.querySelector('.btn')
const lastButton = array[array.length - 1]
const handleClick = () => {
    let result = event.target.textContent
    console.log(result)
}
firstButton.addEventListener('click', handleClick)
lastButton.addEventListener('click', handleClick)