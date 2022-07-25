 const setTitle = (text) => {
     const element = document.querySelector('.title').textContent
     return (`${ element } ` + `${ text }`)
 }
 console.log(setTitle('Uzbek'))