const input = document.querySelector('.task-status')
const handleClick = (event) => {
    console.log(event.target.checked)
}
input.addEventListener('change', handleClick)