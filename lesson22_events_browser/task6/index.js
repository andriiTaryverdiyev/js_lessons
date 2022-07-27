let flag = true
const button = document.querySelector('.single-use-btn')
const consoler = () => {
    if (!flag) {
        return
    }
    console.log('clicked')
    flag = false
}
button.addEventListener('click', consoler)