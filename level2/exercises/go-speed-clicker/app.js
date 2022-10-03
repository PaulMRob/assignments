countDown()
clickCounter()


function clickCounter() {
    if (localStorage.clickCount) {
        localStorage.clickCount = Number(localStorage.clickCount) + 1
    } else {
        localStorage.clickCount = 1
    }
    document.getElementById("clicks").innerHTML = localStorage.clickCount
}

var timer = document.getElementById("timer")

function countDown() {
    var sec = 1
    timer = setInterval(function() {
        timer.innerHTML = sec
        sec --
        if (sec < 0) {
            clearInterval(sec)
            timer.innerHTML = "EXPIRED"
        }
    }, 1000)
}
