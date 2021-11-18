const mongoose = require("mongoose");
const todoRoute = require("../../routers/routs/todo");

//schema -> prototype -> object
const todo = mongoose.Schema(
    {todoName: {type: String , required: true} ,
     isComplete: {type: Boolean , default: false},
     isDel: {type: Boolean , default: false}
    })


//
//nameModel = todo , ShemaName
const todoModel = mongoose.model("Todo" , todo)
module.exports = todoModel;