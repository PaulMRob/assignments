const xhr = new XMLHttpRequest()


// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText

// xhr.open()
// xhr.send()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()


xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        const pokemonList = data.objects[0].pokemon
        showData(pokemonList)
    } 
}

function showData(arr){
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
        const li = document.createElement("li")
        li.textContent = arr[i].name
        document.body.appendChild(li)
    }
}