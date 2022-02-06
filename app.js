var express = require('express')
var app = express()
var fs = require('fs')
const port =8000
const path =require('path')

app.use('/static', express.static('static')) 

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')// set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// set the views directory

app.get('/',(req ,res)=>{
    res.status(200).render('home.pug')
})
app.get('/contact',(req ,res)=>{
    res.status(200).render('contact.pug')
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})