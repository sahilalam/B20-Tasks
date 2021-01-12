var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    let a=JSON.stringify(actual);
    let b=JSON.stringify(expected);
    if(a.length==b.length)
    {
        for(let i=0;i<a.length;i++)
        {
            if(a[i]!=b[i])
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return false;
    }
}
console.log("PROBLEM 7.........................................");
if(assertObjectsEqual(actual,expected,'detects that two objects are equal'))
{
    console.log("PASSED");
}
else
{
    console.log("FAILED");
}