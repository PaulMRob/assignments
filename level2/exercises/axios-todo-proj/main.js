//get todos from database
function getData() {
    axios.get("https://api.vschool.io/paulrobertson/todo")
        .then(response => listTodos(response.data))
        .catch(error => console.log(error))
}

// clears DOM for new stuff
function clearList() {
    const el = document.getElementById("todo-list")
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}    

function listTodos(data) {
    document.getElementById("todo-list").innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        //DIV for each todo
        const newDiv = document.createElement("div")
        const h3 = document.createElement("h3")
        h3.textContent = `${data[i].title}`
        const singleTodoId = data[i]._id
        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        const editBtn = document.createElement("button")
        editBtn.textContent = "edit"
        const editInput = document.createElement("input")
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        newDiv.appendChild(h3)
        newDiv.appendChild(checkBox)
        newDiv.appendChild(editBtn)
        newDiv.appendChild(deleteBtn)
        document.getElementById("todo-list").appendChild(newDiv)
        //checkBox eventListener
        checkBox.addEventListener("click", () => {
            h3.style.textDecoration = "line-through"
        })
        //editBTN eventListener
        editBtn.addEventListener("click", () => {
            newDiv.appendChild(editInput)
        })
        //deleteBtn eventListener
        deleteBtn.addEventListener("click", () => {
            console.log(singleTodoId)
            axios.delete(`https://api.vschool.io/paulrobertson/todo/${singleTodoId}`)
                .then(response => getData())
                .catch(error => alert("There was a problem deleting your todo :P"))
        })
    }
}

getData()

//Form for Post request
const todoForm = document["todoform"]

//this captures the event of a "submit"
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    //this is the new todo template
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    // clear the form after submit
    todoForm.reset()

    // this handles a post request
    axios.post("https://api.vschool.io/paulrobertson/todo/", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
})




