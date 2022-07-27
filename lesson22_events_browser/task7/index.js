const array = document.querySelectorAll('.btn')
const firstButton = document.querySelector('.btn')
const lastButton = array[array.length - 1]
const handleClick = (event) => {
    console.log(event.target.textContent)
}
firstButton.addEventListener('click', handleClick)
lastButton.addEventListener('click', handleClick)