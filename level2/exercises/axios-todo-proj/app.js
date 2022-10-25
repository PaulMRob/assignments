// import axios from "axios"

//get todos from database
function getData(){
    axios.get("https://api.vschool.io/paulrobertson/todo")
        .then(response => listTodos(response.data))
        .catch(error => console.log(error))
}
    
// clears DOM for new stuff
function clearList(){
    const el = document.getElementById("todo-list") 
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}    

// Lists todo's to the DOM
function listTodos(data){
//first, clear what is already there so it's not posted twice
    clearList()

    for( let i = 0; i < data.length; i++ ){
        const newDiv = document.createElement("div")
        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        const h3 = document.createElement("h3")
        h3.textContent = `${data[i].title} $${data[i].price}`
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        const hr = document.createElement("hr")
        newDiv.appendChild(checkBox)
        if(data[i].completed === true) {
            checkBox.checked = true
            h3.style.textDecoration = "line-through"
        }
        newDiv.appendChild(h3)
        newDiv.appendChild(deleteBtn)
        newDiv.appendChild(editBtn)
        document.getElementById('todo-list').appendChild(newDiv)
        newDiv.appendChild(hr)
        
        
        // this handles a delete request
        deleteBtn.addEventListener("click", (e) => {
            console.log(`deleted ${ data[i].title }`)
            axios.delete(`https://api.vschool.io/paulrobertson/todo/${data[i]._id}`)
                .then(response => getData())
                .catch(error => alert("There was a problem deleting your todo :P"))
        })

        // this handles a put / update / edit request
        editBtn.addEventListener("click", (e) => {
            console.log(`editing ${data[i].title}`)
            // form for editing title
            const editTitle = document.createElement('input')
            newDiv.appendChild(editTitle);
            editTitle.value = `${data[i].title}`
            // form for editing price
            const editPrice = document.createElement('input')
            newDiv.appendChild(editPrice)
            editPrice.value = `${data[i].price}`
            // form for editing img
            const editImg = document.createElement('input')
            newDiv.appendChild(editImg)
            editImg.value = `${data[i].imgUrl}`
            //editSubmit button
            const editSubmitBtn = document.createElement('button')
            newDiv.append(editSubmitBtn);
            editSubmitBtn.textContent = 'Submit Edit';

            // submit edits to axios
            editSubmitBtn.addEventListener("click", (e) => {
                console.log(`pushed editSubmit button for ${data[i].title}`)
            
                // updates
                const updates = {
                    title: editTitle.value,
                    price: editPrice.value,
                    imgUrl: editImg.value
                }
                axios.put(`https://api.vschool.io/paulrobertson/todo/${data[i]._id}`, updates)
                    .then(response => getData())
                    .catch(error => console.log(error))
            })

            newDiv.appendChild(hr)
        })

        // this handles the check box
        checkBox.addEventListener("click", (e) => {
            if(checkBox.checked === false) {
                h3.style.textDecoration = "none"
                axios.put(`https://api.vschool.io/paulrobertson/todo/${data[i]._id}`, { "completed": false })
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            } else {
                h3.style.textDecoration = "line-through"
                axios.put(`https://api.vschool.io/paulrobertson/todo/${data[i]._id}`, { "completed": true })
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            }
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
    }

// clear the form after submit
    todoForm.reset()

// this handles a post request
    axios.post("https://api.vschool.io/paulrobertson/todo/", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
})




