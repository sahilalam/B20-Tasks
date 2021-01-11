let req=new XMLHttpRequest();
req.open("GET","https://restcountries.eu/rest/v2/all",true);
req.send();
req.onload=function(){
    var cd=JSON.parse(this.response);
    for(let i=0;i<cd.length;i++)
    {
        console.log(cd[i].name);
    }
}