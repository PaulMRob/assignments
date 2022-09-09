//header
const h1 = document.createElement("h1");

h1.textContent = "JavaScript Made This!!";

h1.className = "header";

document.getElementById("header").appendChild(h1);

const subTitle = document.createElement("h3");

subTitle.innerHTML = '<h3 id="header"><span class="name">Paul</span> wrote the JavaScript</h3>';

document.getElementById("header").appendChild(subTitle);

//Messages

const messages = document.getElementsByClassName("message");
messages[0].textContent = "What is the meaning of this?"
messages[1].textContent = "None whatsoever."
messages[2].textContent = "....what?"
messages[3].textContent = "Chicken butt."

document.getElementById("clear-button").addEventListener("click", function () {
    for (let i = 0; i < messages.length; i++) {
        messages[i].textContent = "";
    }
});

document.getElementById("theme-drop-down").addEventListener("change", function () {
    for( let i = 0; i < messages.length; i++) {
        
        if(messages[i].classList.contains("right")){
            messages[i].classList.toggle("newRight"); 
        } else {
            messages[i].classList.toggle("newLeft");
        }

    }
});

document.getElementById("send-button").addEventListener("click", function(){
    document.getElementsByClassName("messages").createElement("div");
})