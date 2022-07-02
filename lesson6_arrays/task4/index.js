function swap(numbers) {
 const[start,...rest] = numbers;
 return[...rest,start]
}

function swapManual(numbers) {
    let arr=[]
  for(let i =0;i<=numbers.length-1 ;i++){
    arr.push (numbers[i])
  }
  arr.push (arr[0])
  arr.shift()
  return arr
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
