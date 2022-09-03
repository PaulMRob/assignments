const object = document.getElementById("square");

object.addEventListener("dblclick", onDblClick);
function onDblClick(){
    document.getElementById("square").style.backgroundColor = "green";
}

object.addEventListener("mousedown", onMouseDown)
function onMouseDown(){
    document.getElementById("square").style.backgroundColor = "red"
}

object.addEventListener("mouseup", onMouseUp)
function onMouseUp(){
    document.getElementById("square").style.backgroundColor = "yellow"
}

object.addEventListener("mouseenter", onMouseEnter)
function onMouseEnter(){
    document.getElementById("square").style.backgroundColor = "blue"
}


object.addEventListener("wheel", onWheel)
function onWheel(){
    document.getElementById("square").style.backgroundColor = "orange"
}

object.addEventListener("keypress", onKeyPress)
function onKeyPress(){
    document.getElementById("square").style.backgroundColor = "color of the key entered"
}






