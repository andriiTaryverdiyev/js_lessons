export function setButton(buttonText) {
    return document
        .querySelector('body')
        .innerHTML = `<button>  ${buttonText} </button>`

}