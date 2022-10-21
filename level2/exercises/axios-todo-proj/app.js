// const { default: axios } = require("axios")


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
        var h3 = document.createElement("h3")
        h3.textContent = `${data[i].title}`
        var deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        var editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        var newDiv = document.createElement("div")
        newDiv.appendChild(h3)
        newDiv.appendChild(deleteBtn)
        newDiv.appendChild(editBtn)
        document.getElementById('todo-list').appendChild(newDiv)
        var singleTodoId = data[i]._id
        
        // this handles a delete request
        deleteBtn.addEventListener("click", (e) => {
            axios.delete(`https://api.vschool.io/paulrobertson/todo/${singleTodoId}`)
                .then(response => getData())
                .catch(error => alert("There was a problem deleting your todo :P"))
        })

        // this handles a put / update / edit request
        editBtn.addEventListener("click", (e) => {

            const editInput = document.createElement('input');
            editBtn.appendChild(editInput);
            // editInput.value = div.textContent;

            // const editSubmitBtn = document.createElement('button');
            // li.append(editSubmitBtn);
            // editSubmitBtn.textContent = 'Submit';

            // editSubmitBtn.addEventListener("click", (e) => {
            //     div.textContent = editInput.value;
            //     editInput.remove();
            //     editSubmitBtn.remove();

            axios.put(`https://api.vschool.io/paulrobertson/todo/${singleTodoId}`)
                .then(response => console.log("lets start editing"))
                .catch(error => console.log(error))
        })
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
    todoForm.reset()

// this handles a post request
    axios.post("https://api.vschool.io/paulrobertson/todo/", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
    
})




