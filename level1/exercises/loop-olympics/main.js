const readline = require("readline-sync");

// Prelimenaries 

// 1 )
// for( let i = 0; i <= 9; i++ ){
//     console.log(i);
// }

// 2 )
// for( let i = 9; i >= 0; i-- ){
//     console.log(i);
// }

// 3 )
// const fruit = ["banana", "orange", "apple", "kiwi"];
// for( i = 0; i < fruit.length; i++ ){
//     console.log(fruit[i]);
// }

// Bronze Medal

// 1 )
// arr = [];
// for( i = 0; i <= 9; i++ ){
//     arr.push(i);
// }
// console.log(arr);

// 2 )
// for( i = 0; i <= 100; i++ ){
//     if( i % 2 === 0) {
//         console.log(i);
//     }
// }

// 3 )
// arr = [];
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// for( i = 0; i < fruit.length; i++ ){
//     if( i % 2 !== 0 ){
//         arr.push(fruit[i]);
//     }
// }
// console.log(arr);

// Silver Medal
// const peopleArray = [
//     {
//         name: "Harrison Ford",
//         occupation: "Actor"
//     },
//     {
//         name: "Justin Bieber",
//         occupation: "Singer"
//     },
//     {
//         name: "Vladimir Putin",
//         occupation: "Politician"
//     },
//     {
//         name: "Oprah",
//         occupation: "Entertainer"
//     }
// ];

// 1 )
// for( i = 0; i < peopleArray.length; i++ ){
//     console.log(peopleArray[i].name);
// }

// 2 )
// namesArray = [];
// occupationsArray = [];

// for( i = 0; i < peopleArray.length; i++ ){
//     namesArray.push(peopleArray[i].name);
//     occupationsArray.push(peopleArray[i].occupation);
// }

// 3 )
// oddNamesArr = [];
// evenOccupationsArr = [];

// for( i = 0; i < peopleArray.length; i++ ){
//     if( i % 2 === 0 ){
//         nameArr.push( peopleArray[i].name );
//     } else {
//         occupationArr.push( peopleArray[i].occupation );
//     }
    
// }

// Gold Medal

// 1 )
// arrayOfArrays = [];
// for ( j = 0; j < 3; j++ ){
//     arr = [];
    
//     for ( i = 0; i < 3; i++ ){
//         arr.push(0);
//         console.log('arr', arr);
//     }
//     arrayOfArrays.push(arr);

//     console.log('arrayofarrays', arrayOfArrays);
// }    


// 2 )
// arrayOfArrays = [];
// for (j = 0; j < 3; j++) {
//     arr = [];

//     for (i = 0; i < 3; i++) {
//         arr.push(j);
//         console.log('arr', arr);
//     }
//     arrayOfArrays.push(arr);

//     console.log('arrayofarrays', arrayOfArrays);
// }    

// 3 )
// arrayOfArrays = [];
// for (j = 0; j < 3; j++) {
//     arr = [];

//     for (i = 0; i < 3; i++) {
//         arr.push(i);
//         console.log('arr', arr);
//     }
//     arrayOfArrays.push(arr);

//     console.log('arrayofarrays', arrayOfArrays);
// }    

// 4 )
// arrayOfArrays = [];
// for (j = 0; j < 3; j++) {
//     arr = [];

//     for (i = 0; i < 3; i++) {
//         arr.push('x');
//         console.log('arr', arr);
//     }
//     arrayOfArrays.push(arr);

//     console.log('arrayofarrays', arrayOfArrays);
// }     