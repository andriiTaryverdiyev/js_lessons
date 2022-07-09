'use strict'
let name = 'Ivan'
let message = 'Just learn it'

export function sendMessage(name) {
    const sender = 'Gromcode';

    console.log(`${name},${message}! You ${sender}`)
}

function setMessage(text) {
    name = 'Ann'
    message = 'Good job'
}
setMessage()
sendMessage()