function sum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
    let firstSum=sum(firstFrom, firstTo)
    let secondSum=sum(secondFrom, secondTo)
  console.log(firstSum > secondSum);
}

// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
