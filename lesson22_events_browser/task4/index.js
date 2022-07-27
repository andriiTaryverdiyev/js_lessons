const input = document.querySelector('.text-input')
const consoler = () => {
    console.log(input.value)
}
input.addEventListener('change', consoler)