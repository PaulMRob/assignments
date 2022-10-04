const readline = require("readline-sync")

function sum(x, y) {
    try{
        if(typeof x !== "number") {
            throw new Error("Hey I'm not a number :(")
        }
    }
    catch(err){
        console.log(err)
    }
    finally {
        return x + y;
    }
}

console.log(sum(3,5))


var user = { username: "sam", password: "123ab" };
function login(username, password) {
    try{
        if(user.username === "sam" && user.password === "123abc") {
            console.log("login was successful!")
        } else {
            throw new Error("Unsuccessful login attempt")
        }
    }
    catch(err){
        console.log(err)
    }
    
}
try{
    login(user);
}
catch(err){
    console.log(err)
}