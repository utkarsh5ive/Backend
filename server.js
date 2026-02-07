
//SERVER KO START KARNA AUR DB KO CONNECT KARNA

require('dotenv').config()
const app = require('./src/app')
const ConnectToDB = require('./src/config/database')

ConnectToDB()

app.listen(3000, ()=>{
    console.log("Server started on port 3000")
})


