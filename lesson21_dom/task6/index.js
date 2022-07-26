export function setButton(text) {
    return (document
        .querySelector('body')
        .innerHTML = `<button>  ${text} </button>`,
        document
        .querySelector('body')
        .textContent = `<button>  ${text} </button>`
    )
}