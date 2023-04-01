// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const languageSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String,
})

// model and export: 
module.exports = mongoose.model('Language', languageSchema)
