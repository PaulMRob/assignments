const readline = require("readline-sync");

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1 )

vegetables.pop();
console.log("veg:", vegetables);

// 2 )
fruit.shift();
console.log("fruit:", fruit);

// 3 )
fruit.indexOf("orange");

// 4 )
fruit.push(fruit.indexOf("orange"));
console.log("fruit:", fruit);

// 5 )
var vegNum = vegetables.length;

// 6 )
vegetables.push(vegNum);
console.log("veg:", vegetables);

// 7 )
var food = fruit.concat(vegetables);
console.log("food:", food);

// 8 )
food.splice(4, 2);
console.log("food:", food);

// 9 )
var reverseFood = food.reverse();
console.log("reverseFood:", reverseFood); 

// 10 )
console.log("string:", reverseFood.join());