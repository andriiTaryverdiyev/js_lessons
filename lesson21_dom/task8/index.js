function createButton(buttonText) {
    let button = document
        .createElement("button")
    button.innerHTML = `${buttonText}`
    const body = document
        .querySelector('body')
    body.append(button)

}