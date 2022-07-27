const button = document.querySelector('body')
const handleClick = () => {
    let elem = event.target
    console.log(elem.textContent)
}
button.addEventListener('click', handleClick)