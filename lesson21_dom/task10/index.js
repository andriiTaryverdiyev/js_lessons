export function finishForm() {
    let login = document
        .createElement("input")
    login.name = `login`
    login.type = 'text'
    const body = document
        .querySelector('.login-form')
    body.append(login);

    let password = document
        .querySelector('input')
    password.type = `password`

    body.append(password)
}
finishForm()