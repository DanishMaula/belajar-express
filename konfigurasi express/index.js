// const express = require('express')
// const app = express()

// app.enable("case sensitive routing")

// app.get('/home', (req, res)=> {
//     res.send('Hello world')
// })

// app.listen(3000)


// import dotenv
require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // buat kondisi ketika jalankan 5000 maka port nya ada di production, else berarti di development

    let status = process.env.PORT == 5000? "Production" : "Development"
    res.send(`Hello! anda masuk sebagai : ${status} App`)
})

app.listen(process.env.PORT, function(){
    console.log(`Anda menggunakan Port : ${process.env.PORT}`)
})