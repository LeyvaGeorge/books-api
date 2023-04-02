// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const book_Schema = new Schema({

    title:  String, 
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String,
})

// model and export: 
module.exports = mongoose.model('book', book_Schema)
