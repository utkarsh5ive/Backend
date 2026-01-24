//BACKEND WITH EXPRESS JS

const express = require("express")

const app = express()

app.use(express.json()) //request.body ko data read karne ke liye capable banata hai


const notes = []

app.post('/notes', (req, res) => {
    console.log(req.body)

    notes.push(req.body)

    res.send("Note Created")

})

app.get('/notes', (req, res) => {
    res.send(notes)
})

app.listen(3000, () => {
    console.log("Server is running on the port no. 3000")
})
