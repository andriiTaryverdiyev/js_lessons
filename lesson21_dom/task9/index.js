export function finishList() {
    let first = document
        .createElement("li")
    first.textContent = `1`
    const body = document
        .querySelector('.list')
    body.prepend(first);

    let four = document
        .createElement("li")
    four.textContent = `4`
    const fourBody = document
        .querySelector('.special')
    fourBody.before(four);

    let six = document
        .createElement("li")
    six.textContent = `6`
    const sixBody = document
        .querySelector('.special')
    sixBody.after(six);

    let eight = document
        .createElement("li")
    eight.textContent = `8`
    const eightBody = document
        .querySelector('.list')
    eightBody.append(eight);


}