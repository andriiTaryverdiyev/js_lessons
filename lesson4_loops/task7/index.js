let sum = 0;
for (let i = 0; i <= 1000; i++) {
  sum += i;
  if (i % 2 == 1) {
    console.log("Found");
  }
}
if (sum * 5 > 5000) {
  console.log("Bigger");
}
if (sum * 5 === 5000) {
  console.log("equal");
}
if (sum * 5 < 5000) {
  console.log("Smaller");
}

