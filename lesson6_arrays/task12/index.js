function sortAsc(array){
    if (!Array.isArray(arr)) {
        return null;
    }
    return (arr.sort((a,b)=>a-b))
}
function sortDesc(array){
    if (!Array.isArray(arr)) {
        return null;
    }
    return (arr.sort((a,b)=>b-a))
}
checker([15,20,55,20,60,20,55,10,1,5])