const express = require("express")

const app = express() //server instance create karta hai | instance means server ko create kar rhe hain

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/about', (req, res) => { // request response
    res.send("This is about page Hui hui hui")
})

app.listen(3000) //Server started with Port no 3000

//npx nodemon server.js -> restarts the server automatically when you make changes in the code



