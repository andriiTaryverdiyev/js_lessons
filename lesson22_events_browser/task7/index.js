const click = document.querySelector('.btn')
const handleClick = () => {
    console.log(event.target.textContent)
}
click.addEventListener('click', handleClick)