//load express module                               
const express=require("express");
// const mongoose = require('mongoose');
// var passport = require('passport');
const app = express()
const cors = require('cors')
const cookieParser = require("cookie-parser");
app.use(cookieParser());


//Database
// mongoose.connect('mongodb+srv://RyanM:RyanMSenProj@senprojtesting.mndai.mongodb.net', {dbName: 'default' })
// .then(() => console.log("Connected to database"))
// .catch(err => console.log(err))

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())

//Controllers
// const RandomDrinkControl = require('./controllers/RandomDrinkControl');
const UserControl = require('./UserControl');
const Control = require ('./Control'); 

// app.get('/api/drink/random', RandomDrinkControl.getRandom)
app.get('/show-all', Control.showAll); 
app.get('/new-node', Control.newNode); 
// app.get('/random-drinks', Control.randomDrinks); 
app.post('/save-selection', Control.saveSelection); 


//assign port number
app.listen(3000,()=> {
    console.log("server starting on port 3000");
});

