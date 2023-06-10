const express = require("express");
const app = express();
const cors = require("cors");
// uuid
const { v4: uuidv4 } = require("uuid");
app.use(cors());
app.use(express.json());

// PROJECT START ----

const todoList = [
  {
    id: "asas112",
    todo: "test1",
    isCompleted: false,
  },
];

//GET (Query params | path params)

// (!GET   Body params)

// path params

// app.get("/api/todo/:id", (req, res) => {
//   res.json(req.params.id);
// });

app.get("/api/todo", (req, res) => {
  // res.status(200).json("Get Methods");
  res.status(200).json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { todo } = req.body;
  if (!("todo" in req.body)) {
    return res.status(400).json({
      message: `${JSON.stringify(
        req.body
      )}: This attribute is not accepted, Required attributes: todo`,
    });
    // return;
  }
  const todoItem = {
    id: uuidv4(),
    todo: todo,
    isCompleted: false,
  };
  todoList.push(todoItem);
  res.json(todoList);
});

app.put("/api/todo", (req, res) => {
  const { id, todo, isCompleted } = req.body;

  const isExist = todoList.find((data) => data.id === id);
  if (isExist) {
    todoList.forEach((todoItem) => {
      if (todoItem.id === id) {
        todoItem.todo = todo;
        todoItem.isCompleted = isCompleted || false;
      }
    });
    return res.json(todoList);
  }
  res.status(404).json({
    message: `item with id : ${id} does not exist`,
  });
});

app.delete("/api/todo", (req, res) => {
  const { id } = req.body;
  const todoIndex = todoList.findIndex((item) => item.id === id);
  if (todoIndex !== -1) {
    todoList.splice(todoIndex, 1);
    return res.json(todoList);
  }
  res.status(404).json({
    message: "item does not exist",
  });
});

app.all("*", (req, res) => {
  res.status(404).json("This page does not exist");
});

const PORT = 3005;

app.listen(PORT, () => console.log(`server runing in port ${PORT}`));

// 1:18
