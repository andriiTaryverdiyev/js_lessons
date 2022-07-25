 export function setTitle(text) {
     const elem = document.querySelector('.title')
     const result = elem.textContent = text
 }
 console.log(setTitle('Gaspar'))