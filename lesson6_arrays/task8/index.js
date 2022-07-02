const increaseEvenEl = (arr, delta) => {
  let result = [];
  if (!Array.isArray(arr)) {
    return 'strarsa';
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] + delta);
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result);
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
increaseEvenEl([], 120);
