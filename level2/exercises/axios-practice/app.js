const readline = require("readline-sync")
const axios = require("axios");


// axios.get('https://swapi.co/api/people/1').then(response => {
//     console.log(response.data)
// }).catch(error => {
//     console.log(error)
// })

// axios.post("https://api.vschool.io/paulrobertson/todo/", newTodo).then(resonse => {
//     console.log(respose.data)
// }).catch(error => {
//     console.log(error)
// })


// get request uing axxios
axios.get("https://api.vschool.io/paulrobertson/todo")
    .then(response => { console.log(response.data)
        // for (i = 0; i < response.data.length; i++) {
        //     const h1 = document.createElement('h1')
        //     h1.textContent = response.data[i].title
        //     document.body.appendChild(h1)
        // }
    })
    .catch(error => console.log(error))

// const todoForm = document.todoForm

// todoForm.addEventListener("submit", function(event) {
//     event.preventDefault()
//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.drescription.value,
//         imgUrl: todoForm.imgUrl.value
//     }

    // axios.post("https://api.vschool.io/paulrobertson/todo", newTodo)
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))
// })


//axios delete request

// axios.delete("https://api.vschool.io/paulrobertson/todo/63518f9b18d1a05bceae8281")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


// put request with axios

const updates = {
    title: "I changed the title"
}
axios.put("https://api.vschool.io/paulrobertson/todo/", updates)
    .then(response => console.log(response.data))
    .catch(console.log(error))