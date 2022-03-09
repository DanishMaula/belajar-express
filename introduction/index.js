const express = require('express')
const port = 3000

// create express app
const app = express()

// create routing / bisa menggunakan express middleware
app.get('/', (req, res)=>{
    res.send('wee bisa')
})

app.listen(3000)