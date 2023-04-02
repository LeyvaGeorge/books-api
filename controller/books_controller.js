const express = require('express')
const book_router = express.Router()
const db = require('../model/models')
//Delete One ===========
book_router.delete('/:id', (req, res) => {
    db.findByIdAndDelete(req.params.id)
        .then((books) => {
            res.send('/')
        })
        .catch((err) => { console.log(err) })
})
//Create Book
book_router.post('/', (req, res) => {
    db.create(req.body)
        .catch(err => {console.log(err)})
    res.redirect('/')
})
//Update Book
book_router.put('/:id', (req, res) => {
    db.findByIdAndUpdate(req.params.id)
        .then((books) => {
            res.send('/')
        })
        .catch((err) => { console.log(err) })
})
//Book
book_router.get('/:id', (req, res) => {
    db.findById(req.params.id)
        .then((books) => {
            res.json(books)
        })
        .catch((err) => { console.log(err) })
})

//All books
book_router.get('/', (req, res) => {
    db.find()
        .then((books) => {
            res.json(books)
        })
        .catch((err) => { console.log(err) })
})


module.exports = book_router