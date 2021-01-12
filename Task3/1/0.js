console.log("PROBLEM 0...............Part A....................");
var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
cat.height=3;
cat.weight=5;
console.log("height and weight added");

cat.name="Fluffyy";
console.log("Name updated to: "+cat.name);

let activities=[];
for(let i in cat.catFriends)
{
    activities.push(JSON.parse(JSON.stringify(cat.catFriends[i].activities)));
}
console.log("activities of Fluffyy’s catFriends:");
console.log(activities);

let fname=[];
for(let i in cat.catFriends)
{
    fname.push(cat.catFriends[i].name);
}
console.log("catFriends names:");
console.log(fname);

let tw=0;
for(let i in cat.catFriends)
{
    tw+=cat.catFriends[i].weight;
}
console.log("total weight of catFriends: "+tw);

let ta=cat.activities.length;
for(let i in cat.catFriends)
{
    ta+=cat.catFriends[i].activities.length;
}
console.log("total activities of all cats: "+ta);

for(let i in cat.catFriends)
{
    cat.catFriends[i].activities.push('Entertain');
    cat.catFriends[i].activities.push('go to walk');
}
let fa=[];
for(let i in cat.catFriends)
{
    fa.push(cat.catFriends[i].activities);
}
console.log(" 2 more activities to bar & foo cats:");
console.log(fa);

for(let i in cat.catFriends)
{
    if(cat.catFriends[i].name=='bar')
    {
        cat.catFriends[i].furcolor='black';
    }
}
console.log("fur color of bar updated to "+cat.catFriends[0].furcolor);

console.log("PROBLEM 0...............Part B....................");

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }
for(let i in myCar.accidents)
{
    myCar.accidents[i].atFaultForAccident=false;
}
console.log("atFaultForAccident from true to false changed:");
console.log(myCar);

console.log("Dates of my accidents:");
for(let i in myCar.accidents)
{
    console.log(myCar.accidents[i].date);
}

