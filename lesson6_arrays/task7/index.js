const checkSum = (arr) => {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  console.log(sum>100)
  console.log(sum)
};

// examples
checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
