const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', function(req, res) {
    res.send("Thanks!")
})

const { env: { PORT } } = process
app.listen(PORT, function() {
    console.log(`API listening on ${PORT}!`)
})