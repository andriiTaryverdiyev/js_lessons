function checker(arr){
    if (!Array.isArray(arr)) {
        return null;
    }
    console.log(arr.sort((a,b)=>a-b))
    console.log (Math.max(arr)+Math.min(arr)>1000)
}
checker([15,20,55,20,60,20,55,10,1,5])