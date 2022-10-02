const addForm = document["add-form"]
const subtractForm = document["subtract-form"]
const multiplyForm = document["multiply-form"]

addForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const num1 = addForm.num1.value
    const num2 = addForm.num2.value
    const sum = parseInt(num1) + parseInt(num2)
    const h3 = document.createElement('h3')
    h3.textContent = sum
    document.getElementById("add").append(h3)

})

subtractForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const num1 = subtractForm.num1.value
    const num2 = subtractForm.num2.value
    const difference = num1 - num2
    const h3 = document.createElement('h3')
    h3.textContent = difference
    document.getElementById("subtract").append(h3)
})

multiplyForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const num1 = multiplyForm.num1.value
    const num2 = multiplyForm.num2.value
    const mult = num1 * num2
    const h3 = document.createElement('h3')
    h3.textContent = mult
    document.getElementById("multiply").append(h3)
})


