function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  console.log(arr.map(e=>e).reverse())
}
reverseArray([11,22,33,44,55])