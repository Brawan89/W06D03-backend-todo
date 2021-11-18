const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json())

//app level midleware
const appMiddleware = (req, res, next) => {
    console.log("appMiddleware");
    next();
  };

app.use(appMiddleware);
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const todoRoute = require("./routers/routs/todo");

//my array ....
// let myTodos 


// router level middleware
const todoMiddleware = (req, res, next) => {
    console.log("todos");
    next();
  };

app.use("/todos", todoMiddleware, todoRoute);

//..................................
//read all list
// app.get("/allTodos" , (req , res) =>{
//     res.status(200).json(myTodos);
// })

//read all completed
// app.get("/todoComplete" , (req , res) =>{

//     const found = myTodos.find((elem)=> elem.isComplete === true );

//     if(found){
//         res.status(200).json(found);
//     }
//     else{
//         res.status(404).json("not found");
//     }

// })

//read all not completed
// app.get("/todoNotComplete" , (req , res) =>{

//     const found = myTodos.find((elem)=> elem.isComplete === false );

//     if(found){
//         res.status(200).json(found);
//     }
//     else{
//         res.status(404).json("not found");
//     }
// })

//create new items(on lists)
// app.post("/create" , (req , res) =>{
//     let newItems ={
//         id: myTodos.length + 1, //to add automaticlly id +1
//         todoName: req.body.todoName ,
//         isComplete: false
//     }
//     myTodos.push(newItems);
//     res.status(200).json(myTodos);
// })

//update -> 1- edit name... not working
// app.put( '/edit/:id' , (req , res) => {
//     const found = myTodos.find((elem) => { 
//         return elem.id == req.params.id
//     })
//     if (found) {
//         let newEdit = {
//             id: found.id,
//             todoName: req.body.todoName,
//             isComplete: found.isComplete
//         }
//         let todo = myTodos.indexOf(found)
//         myTodos.splice(todo , 1 , newEdit)
//         res.status(200)
//         res.json(myTodos);
//     }
//     else{
//         res.status(404)
//         res.json('not found');
//     }
// })

//updaet 2- edit complete or not
// app.put('/isComplete' , (req , res)=>{
//     let found = myTodos.find((e) =>{
//         return e.id == req.query.id;
//     })
//     if (found) {
//         let ed = {
//             id: found.id,
//             todoName: found.todoName,
//             isComplete: req.body.isComplete
//         }
//         let up = myTodos.indexOf(found)
//         myTodos.splice(up , 1 , ed)
//         res.status(200)
//         res.json(myTodos)
//     }
//     else{
//         res.status(404)
//         res.json('not found')
//     }  
// })

//delete 1- all list
// app.delete('/delete' , (req , res)=>{
//     myTodos = []; //empty array -> لان بدونها مارح تنحذف 
//     res.status(200)
//     res.json('delete all');
// })

//delete 2- all completed
// app.delete('/delComp' , (req , res)=>{
//     const found = myTodos.filter((elem)=>{
//         return elem.isComplete === false;
//     })
//     myTodos=[...found]
//     res.json(myTodos)


// })

//.........................................

app.listen(PORT , () =>{
    console.log(`run on port ${PORT}`);
})