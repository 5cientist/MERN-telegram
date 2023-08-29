const express = require("express");
const app = express();
const cors = require("cors");
const todoRoute = require("./routes/todo");
// const { checkAuth } = require("./middlewares/auth");
// const errorHandle = require("./middlewares/errorHandle");


app.use(cors());
app.use(express.json());


app.use("/api/todo", todoRoute);
app.use("/api/profile", require("./routes/profile"));

app.use("*", (req, res) => {
    res.status(404).json({
      message: "This Route does not exist",
    });
  });

// TODO: Advance Error Handling
// app.use(errorHandle);


const PORT = 3005;

app.listen(PORT, () => console.log(`server runing in port ${PORT}`));


//! 1:29:33