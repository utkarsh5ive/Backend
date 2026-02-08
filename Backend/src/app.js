// SERVER KO CREATE KARNA
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')



const noteModel = require('./models/node.model')

//MIDDLEWARE

app.use(express.json())
app.use(cors())
app.use(express.static('./public')) //saare src files ko publicly available kar sakte ho

/* 

    POST /api/notes/
    create new note and save data in mongoDB
    req.body = {title, description}

*/


app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({ //status code basically indicates the outcome of the user's request
        message: "Note created successfully",
        note
    })

})

/*
    GET - Fetches the data from the mongoDB and send them in the response
*/

app.get('/api/notes', async (req, res) => {
    const note = await noteModel.find()

    res.status(200).json({
        message: "Notes fetch successfully",
        note
    })
})

/*
    DELETE /api/notes/:id
    delete the particular note by using id
    notModel.findByIdAndDelete

*/
app.delete('/api/notes/:id', async (req, res) => {
    const id = req.params.id

    const note = await noteModel.findByIdAndDelete(id)


    res.status(200).json({
        message: "Note deleted successfully",
        note
    })
})


/*
    PATCH = /api/notes/:id
    update the description of the note by id
    req.body = {description}

*/

app.patch('/api/notes/:id', async(req, res) => {

    const id = req.params.id

    const { description } = req.body

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message: "The note is updated successfully"
    })
})

console.log(__dirname)


app.use('*name', (req, res)=>{  //Jo API humne nhi create kari unko handle karega
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app


//Integration Wala Topic hi sabse hard hai to next class jaldi bhut axhe se padh lo
//Isse Tough kuch nhi hai