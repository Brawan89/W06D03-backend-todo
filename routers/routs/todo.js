const express = require("express");
// const app = express();

const {
    getAllTodos,
    getComplete,
    getNotComplet,
    createNewTodo,
    updateTodo,
    updateisComplete,
    deletAllList,
    deletComplete


} = require('../controller/todo');

const getAlltodosMiddleware = (req, res, next) => {
    console.log("get All todos");
    next();
  };

  const todoRoute = express.Router();

  todoRoute.get("/todos" , getAlltodosMiddleware ,getAllTodos);
  todoRoute.get("/todoComplete" , getComplete);
  todoRoute.get("/todoNotComplete" , getNotComplet);
  todoRoute.post("/add" , createNewTodo);
  todoRoute.put("/edit/:id" , updateTodo);
  todoRoute.put("/isComplete" , updateisComplete);
  todoRoute.delete("/delete" , deletAllList);
  todoRoute.delete("/delComp" , deletComplete)



  module.exports = todoRoute;