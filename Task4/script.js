let req=new XMLHttpRequest();
req.open("GET","https://restcountries.eu/rest/v2/all",true);
req.send();
req.onload=function(){
    let cd=JSON.parse(this.response);

    //Get all the countries from Asia continent / “region” using Filter function
    let asia=cd.filter(x=>x.region==='Asia');
    asia=asia.map(x=>x.name);
    console.log(asia);

    //Get all the countries with population of less than 2 lacs using Filter function
    let under2lac=cd.filter(x=>x.population<200000);
    under2lac=under2lac.map(x=>x.name);
    console.log(under2lac);

    //Print the following details name, capital, flag using forEach function
    cd.forEach(element => {
        console.log(`Name: ${element.name},Capital: ${element.capital},Flag: ${element.flag}`);
    });


    //Print the total population of countries using reduce function
    let population=cd.reduce((accumulator,element)=>{
        return accumulator+element.population;
    },0);
    console.log(population);

    //Print the country which uses US Dollars as currency
    cd.forEach(element => {
        element["currencies"].forEach(curr=>{
            if(curr["code"]=="USD")
            {
                console.log(element["name"]);
            }
        })
    });

    
}