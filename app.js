const express = require('express')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')

const app = express()

// Cors
const corsOption = {
    origin: 'http://localhost:8080'
}


// middleware
app.use(cors(corsOption))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// router

const studentRouter = require('./routes/student')
app.use('/api/students', studentRouter)

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


