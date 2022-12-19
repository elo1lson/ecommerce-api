const express = require('express')
const mongoose = require('mongoose')
const port = 3000

const routes = require('./src/routes/index')
require('dotenv').config()

mongoose
    .set('strictQuery', true)
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('database connected')
    })
    .catch((e) => {
        console.log(e)
    })
const app = express()

app.use(express.json())
app.use(routes)

app.listen(port || 3000, () => {
    console.log('listening on http://localhost:' + port)
})
