const button = document.querySelector('body')
const handleClick = () => {
    console.log(event.target.textContent)
}
button.addEventListener('click', handleClick)