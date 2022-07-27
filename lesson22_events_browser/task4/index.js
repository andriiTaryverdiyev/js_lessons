const statusCheckbox = document.querySelector('.task-status')
const consoler = () => {
    if (statusCheckbox.checked) {
        console.log(statusCheckbox.checked)
    } else {
        console.log(statusCheckbox.checked)
    }
}
statusCheckbox.addEventListener('click', consoler)