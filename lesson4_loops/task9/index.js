let sum = 0;
let div = 0;
let mod = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
div = sum / 1234;
mod = sum % 1234;
console.log(div > mod);
