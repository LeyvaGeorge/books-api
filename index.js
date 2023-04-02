// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// DEPENDENCIES
const express = require('express')
const app = express()

//Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Hello World! API')
})

app.use('/books' ,require('./controller/books_controller'))

app.get('*', (req,res) => {
  res.send('error404')
})


// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})