

//get todos from database
function getData(){
    axios.get("https://api.vschool.io/paulrobertson/todo")
        .then(response => listTodos(response.data))
        .catch(error => console.log(error))
}
    
// Lists todo's to the DOM
function listTodos(data){
//first, clear what is already there so it's not posted twice
    document.getElementById("todo-list").innerHTML = ""

    for( let i = 0; i < data.length; i++ ){
        var h3 = `<h3>${data[i].title}</h3>`
        var deleteBtn = `<button name="delete-btn">Delete Item</button>`
        var newDiv = document.createElement("div")
        newDiv.innerHTML = `${h3} ${deleteBtn}`
        document.getElementById('todo-list').appendChild(newDiv)
    }
}

getData()

//Form for Post request
const todoForm = document["todoform"]

//this captures the event of a "submit"
todoForm.addEventListener("submit", function(e) { 
    e.preventDefault();

//this is the new todo template
    const newTodo = { 
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

// clear the form after submit
    todoForm.input.value = ""

// this handles a post request
    axios.post("https://api.vschool.io/paulrobertson/todo/", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
    
})

// this handles a delete request
const deleteBtn = document["delete-btn"]
deleteBtn.addEventListener("click", function (e) {

    var deleteTodo = function (singleTodo) {
        axios.delete("https://api.vschool.io/paulrobertson/todo/", singleTodo._id)
            .then(response => alert("Your Todo was successfully deleted :O"))
            .catch(resposne => alert("There was a problem deleting your todo :P"))
    }

})