const input = document.querySelectorAll('.pagination__page')
const handleClick = (event) => {
    console.log(event.target.getAttribute("data-page-number"))
}
for (let elem of input) {
    elem.addEventListener('click', handleClick)
}