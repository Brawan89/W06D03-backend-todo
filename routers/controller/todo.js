const todoModel = require("./../../db/models/todo");


let todos = [  
{id: 1 , todoName: "study" , isComplete: true},
{id: 2 , todoName: "walk"  , isComplete: true}];

//get 1
const getAllTodos = (req , res) =>{
    res.status(200).json(todos);
}
//2
const getComplete =  (req , res) =>{
   
    const found = todos.find((elem)=> elem.isComplete === true );

    if(found){
        res.status(200).json(found);
    }
    else{
        res.status(404).json("not found");
    }
}

//3
const getNotComplet =  (req , res) =>{
   
    const found = todos.find((elem)=> elem.isComplete === false );

    if(found){
        res.status(200).json(found);
    }
    else{
        res.status(404).json("not found");
    }
}

//create
const createNewTodo = (req , res) =>{
    let newItems ={
        id: todos.length + 1, //to add automaticlly id +1
        todoName: req.body.todoName ,
        isComplete: false
    }
    todos.push(newItems);
    res.status(200).json(todos);
}

// put 1
const updateTodo = (req , res) => {
    const found = todos.find((elem) => { 
        return elem.id == req.params.id
    })
    if (found) {
        let newEdit = {
            id: found.id,
            todoName: req.body.todoName,
            isComplete: found.isComplete
        }
        let todo = todos.indexOf(found)
        todos.splice(todo , 1 , newEdit)
        res.status(200).json(todos);

    }
    else{
        res.status(404)
        res.json('not found');
    }
}
//2
const updateisComplete = (req , res)=>{
    let found = todos.find((e) =>{
        return e.id == req.query.id;
    })
    if (found) {
        let ed = {
            id: found.id,
            todoName: found.todoName,
            isComplete: req.body.isComplete
        }
        let up = todos.indexOf(found)
        todos.splice(up , 1 , ed)
        res.status(200).json(todos);
    }
    else{
        res.status(404)
        res.json('not found')
    }  
}

//del 1
const deletAllList = (req , res)=>{
    todos = []; //empty array -> لان بدونها مارح تنحذف 
    res.status(200).json(todos);
}
//2
const deletComplete = (req , res)=>{
    const found = todos.filter((elem)=>{
        return elem.isComplete === false;
    })
    todos=[...found]
    res.status(200).json(todos);
}



module.exports = {
    getAllTodos,
    getComplete,
    getNotComplet,
    createNewTodo,
    updateTodo,
    updateisComplete,
    deletAllList,
    deletComplete
}