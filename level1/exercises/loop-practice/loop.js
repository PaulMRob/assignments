
//exercise 1)

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0;

for( let i = 0; i < officeItems.length; i++ ){
    if(officeItems[i] === "computer"){
        count ++;
    }
}

console.log(count);

//exercise 2)

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]
for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max: Fury Road :)")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough not see Mad Max: Fury Road :( ")
    }
}

//exercise 3)
// this one didn't work wwhen i had my vars as const. but once i switched const to var it worked. Not sure why that is but i'm guessing it's the boolean. 
var lightOn = false;
var switches = [4, 6, 3, 2];
for (var i = 0; i < switches.length; i++) {
  for (var j = 0; j < switches[i]; j++) {
    lightOn = !lightOn;
  }
}

if (lightOn) {
  console.log("the lights are on");
} else {
  console.log("the lights are off");
}

