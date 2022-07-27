const click = document.querySelector('body')
const handleClick = () => {
    console.log(event.target.textContent)
}
click.addEventListener('click', handleClick)