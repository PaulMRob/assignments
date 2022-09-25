const form = document["airline-form"];
const submit = document.getElementById("submit");
var query = document.querySelector;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = form["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    return alert(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Diet: ${diet}
    Travel Location: ${location}
    `)
});


