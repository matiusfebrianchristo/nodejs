const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

// Cors
const corsOption = {
    origin: 'http://localhost:8080'
}

// router
const router = require('./routes/student')

// middleware
app.use(cors(corsOption))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// testing API
app.get("/", (req, res) => {
    res.json({
        message: "Hello from API"
    })
})


const PORT = process.env.PORT || 3000

// listen

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


