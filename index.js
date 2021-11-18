const express = require("express");
const PORT = 4000;
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

require("./db")

const app = express();

//app level midleware
const appMiddleware = (req, res, next) => {
  console.log("appMiddleware");
  next();
};

app.use(appMiddleware);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
dotenv.config();

const todoRoute = require("./routers/routs/todo");
// const { options } = require("./routers/routs/todo");

//my array ....
// let myTodos

// router level middleware
const todoMiddleware = (req, res, next) => {
  console.log("todos");
  next();
};

app.use("/todos", todoMiddleware, todoRoute);


process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`run on port ${PORT}`);
});


