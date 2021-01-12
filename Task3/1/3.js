var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
    let keys=Object.keys(obj);
    let ans=[];
    for(let i in keys)
    {
        ans.push([keys[i],obj[keys[i]]]);
    }
    return ans;
}
let ans3=convertListToObject(obj);
console.log("PROBLEM 3.........................................");
console.log(ans3);