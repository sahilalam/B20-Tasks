let req=new XMLHttpRequest();
req.open("GET","https://restcountries.eu/rest/v2/all",true);
req.send();
req.onload=function(){
    let countrydata=JSON.parse(this.response);
    countrydata.forEach(country => {
        let lat=country["latlng"][0];
        let long=country["latlng"][1];
        if(lat && long)
        {
            getTemperature(lat,long,country["name"]);
        }
        
        
    });
    
}
let getTemperature=function(lat,lng,countryname)
{
    try
    {
        let req=new XMLHttpRequest();
        req.open("GET",`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3ebaae948426e52a2b0f068145a131f3`,true);
        req.send();
        req.onload=function(){
            let weatherdata=JSON.parse(this.response);
            console.log("Temperature of "+countryname+"is : "+weatherdata["main"]["temp"]);
        }
    }
    catch(error)
    {
        console.log(error);
    }
   
    
}

