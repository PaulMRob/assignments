const readline = require("readline-sync");

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var output = [];
function forception(people, alphabet){
    for( i = 0; i < people.length; i++ ){
        output.push(people[i]);
        for( j = 0; j < alphabet.length; j++ ){
            alphabet.split("");
            output.push(alphabet[j]);
        }
    }
}
forception(people, alphabet);
console.log(output);