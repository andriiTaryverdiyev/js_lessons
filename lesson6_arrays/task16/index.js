const includes = (arr, num) => {
    let number = false
    for(let i=0;i<arr.length;i++){
      if(arr[i]===num){
         number=true
      }
      
    }
    return number
  };

// examples
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false
