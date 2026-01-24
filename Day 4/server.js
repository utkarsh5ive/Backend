const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.send("Wooww! Very Dangerous 😂")
})

app.get('/about', (req, res)=>{
    res.send("About is called")
})


app.get('/about/rest', (req, res)=>{
    res.send("Server is started running.")
})
app.listen(3000)