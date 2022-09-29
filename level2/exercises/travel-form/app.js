const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const mealPreferences = []
    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            mealPreferences.push(form.diet[i].value)
        }
    }
    console.log(form.firstName.value)
    console.log(form.lastName.value)
    console.log(form.age.value)
    console.log(form.pronouns.value)
    console.log(mealPreferences)
    console.log(form.city.value)

    alert(`
    First Name: ${form.firstName.value}
    Last Name: ${form.lastName.value}
    Age: ${form.age.value}
    Pronouns: ${form.pronouns.value}
    Location: ${form.city.value }
    Diet: ${mealPreferences}
    `)
})