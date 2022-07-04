function filterNames(arr, text) {
    console.log(arr.filter(name => name.includes(text) && name.length > 5))

}
filterNames(['Jhon', 'Olivya', 'Oleksndr', 'Emanuel', 'Vanya', 'Nastya'], 'ya')