const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json())




app.listen(PORT , () =>{
    console.log(`run on port ${PORT}`);
})