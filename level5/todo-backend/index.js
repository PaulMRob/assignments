const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use("/", express.json());

const todos = [
  {
    name: "Wake up",
    description: "When alarm sounds, open eyes",
    imageUrl:
      "https://www.audicus.com/wp-content/uploads/2018/03/alarm-clock-black-2.jpg",
    completed: true,
    _id: uuidv4(),
  },
  {
    name: "take a nap",
    description: "power naps are exactly 22 minutes and 43 seconds.",
    imageUrl: "",
    completed: false,
    _id: uuidv4(),
  },
];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuidv4();
  todos.push(newTodo);
  res.send(`${newTodo.name} was added to your list!`);
});

app.delete("/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex(todo => todo._id === todoId);
  todos.splice(todoIndex, 1);
  res.send(`successfully deleted the todo from your list!`);
});

app.put("/todos/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(`${updatedTodo.name} was edited`)
})

app.get("/todos/:todoId", (req, res) =>{
    const singleTodo = req.body
    res.send(singleTodo)
})
app.listen(9000, () => {
  console.log("server running on port 9000");
});
