//load express module                               
const express=require("express");
const app = express()
const cors = require('cors')
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())

//Controllers
const Control = require ('./Control'); 

app.get('/show-all', Control.showAll); 
app.post('/new-node', Control.newNode); 
app.post('/save-selection', Control.saveSelection); 


//assign port number
// app.listen(80,()=> {
//     console.log("server starting on port 80");
// });
//
app.listen(3000,()=> {
    console.log("server starting on port 3000");
});

