const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongoose.model("notes", noteSchema) //It allows to perform CRUD operations on database (MUST)

module.exports = noteModel