export function setButton(text) {
    return document
        .querySelector('body')
        .innerHTML = `<button>  ${text} </button>`
}
setButton('button')