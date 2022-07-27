const statusCheckbox = document.querySelector('.task-status')
const consoler = () => {
    if (statusCheckbox.checked) {
        console.log(true)
    } else {
        console.log(false)
    }
}
statusCheckbox.addEventListener('click', consoler)