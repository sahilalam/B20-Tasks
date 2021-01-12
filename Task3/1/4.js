var array = ['GUVI', 'I', 'am', 'Geek'];
function transformFirstAndLast(arr) {
    let obj={};
    obj[arr[0]]=arr[arr.length-1];
 
    return obj;
}
let obj4=transformFirstAndLast(array);
console.log("PROBLEM 4.........................................");
console.log(obj4);