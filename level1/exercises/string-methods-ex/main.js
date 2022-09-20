const readline = require("readline-sync");

// 1 )
function capitalizeAndLowercase(a) {
    var upperCaseWord = a.toUpperCase();
    var lowerCaseWord = a.toLowerCase();
    return upperCaseWord.concat(lowerCaseWord);
}

console.log(capitalizeAndLowercase("rock"))
// console.log(capitalizeAndLowercase("brain"))
// console.log(capitalizeAndLowercase("fork"))
// console.log(capitalizeAndLowercase("alabaster"))

// 2 )
function middleIndex(a) {
    var halfStringNumber = a.length / 2;
    return Math.floor(halfStringNumber);
}

console.log(middleIndex("stingrays"));
// console.log(middleIndex("Eat the taco"));
// console.log(middleIndex("strange entity girlfriend"));
// console.log(middleIndex("beyond dog hair"));

// 3 )
function firstHalf(a){
    var arr = a.split("");
    var halfArr = arr.slice(0, arr.length/2);
    return halfArr.join("")
}
console.log(firstHalf("bedbugs"));
// console.log(firstHalf("Blue iris shines"));
// console.log(firstHalf("extended conversion"));
// console.log(firstHalf("hyperbolic"));

// 4 )
function halfCapHalfLow(a) {
    var firstHalf = a.slice(0, Math.floor(a.length / 2));
    var secondHalf = a.slice(Math.floor(a.length / 2));
    return firstHalf.toUpperCase() + secondHalf.toLowerCase();
}
console.log(halfCapHalfLow("The ship is sinking"));
// console.log(halfCapHalfLow("Tell Layla I love her"));
// console.log(halfCapHalfLow("In the green bucket"));
// console.log(halfCapHalfLow("Silenced"));

// optional challenge )
function capitalize(a) {
    var a = a.split(" ");
    for( i = 0; i < a.length; i++ ){ //loop over array a
        a[i] = a[i][0].toUpperCase() + a[i].slice(1); //capitalizing the first letter of each element in the array a and concatinating it with the rest of the string which has been sliced from a[i].
    }    
    return a.join(" ");  
}
console.log(capitalize("everything is everything"));
// console.log(capitalize("a farewell to arms"));
// console.log(capitalize("is it all so difficult?"));
// console.log(capitalize("is it all this easy?"));