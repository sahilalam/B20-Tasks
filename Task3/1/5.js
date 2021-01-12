var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var obj= {};
 for(let i =0;i<arr.length;i++)
 {
     obj[arr[i][0]]=arr[i][1];
 }
 return obj;
}
let ans5=fromListToObject(arr);
console.log("PROBLEM 5.........................................");
console.log(ans5);