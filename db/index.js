const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();



// options -> in object
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//connect->
//db url / databaseName , options , callback function
mongoose
  .connect(process.env.DB_URI, options)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("mongo err ", err);
  });