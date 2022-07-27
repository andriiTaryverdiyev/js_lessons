const searchButton = document.querySelector('.search__btn')
const searchInput = document.querySelector('.search__input')
const consoler = () => {
    console.log(searchInput.value)
}
searchButton.addEventListener('click', consoler)