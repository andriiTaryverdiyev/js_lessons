const getSubArray = (arr, numberOfElements) => {
   let newArr=[]
    for(let i=0;i<numberOfElements;i++){
      newArr.push(arr[i])
   }
    console.log(newArr)
};
getSubArray([1,3,5,7,8],1)
  