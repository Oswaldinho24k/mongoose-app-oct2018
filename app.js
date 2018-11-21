const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')


//app
const app = express()
//mongoose
mongoose.connect('mongodb://localhost/mongooseapp')
//static files
app.use(express.static('public'))
//hbs
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

//routes
const users = require('./routes/users')
app.use('/', users)


app.listen(3000,()=>{
    console.log('App running on p 3000')
})