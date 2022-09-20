const form = document.getElementById("add-todo");


form.addEventListener("submit", e => {
    e.preventDefault();

    const listItem = form.listItem.value
    form.listItem.value = ""

    // 1. <li></li>
    const li = document.createElement('li');
    const div = document.createElement('div');
    const editBtn = document.createElement('button');
    const xBtn = document.createElement('button');
    li.setAttribute("id", "list");

    // 2. <li>shopping list item here</li>
    div.textContent = listItem;
    editBtn.textContent = "Edit";
    xBtn.textContent = "X";
    li.append(div, editBtn, xBtn);

    // 3. Append
    document.getElementById("list").append(li);

    xBtn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    });

    editBtn.addEventListener("click", (e) => {
        const editInput = document.createElement('input');
        li.append(editInput);
        editInput.value = div.textContent;

        const editSubmitBtn = document.createElement('button');
        li.append(editSubmitBtn);
        editSubmitBtn.textContent = 'Submit';

        editSubmitBtn.addEventListener("click", (e) => {                                                                                                                                                     
            div.textContent = editInput.value;
            editInput.remove();
            editSubmitBtn.remove();
        })
    });

});

// document.getElementById("list").addEventListener("click", e => 
//     let editBtn = e.target;
//     let xBtn = e.target;
//     if (e.target = editBtn){
//         alert("this is the editBtn");
//     } else {
//         alert("this is xBtn");
//     }
    
// })