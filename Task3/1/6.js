var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
 var ans = [];
 for(let i=0;i<arr.length;i++)
 {
     let obj={};
     for(let j=0;j<arr[i].length;j++)
     {
         obj[arr[i][j][0]]=arr[i][j][1];
     }
     ans.push(obj);
 }
 
 return ans;
}
let ans6=transformEmployeeData(arr);
console.log("PROBLEM 6.........................................");
console.log(ans6);