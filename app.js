const express = require("express");
const mongoose = require("mongoose");


const app = express();


// connection to mongodb
mongoose.connect("mongodb://0.0.0.0:27017/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//middlewares

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.set("view engine", "ejs")


//routes
app.use(require("./routes/index.js"))
app.use(require("./routes/todos.js"))

app.listen(3000, ()=>{
    console.log("server started listening on port: 3000")
})