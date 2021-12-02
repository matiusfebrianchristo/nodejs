const db = require('../models')

// create main model
const student = db.students


// main work

// add student
const addStudent = async (req, res) => {
     let data = {
         nisn: req.body.nisn,
         name: req.body.name,
         class: req.body.class
     }

     const request = await student.create(data)
     res.status(200).send(request)
}

// list student
const getAllStudent = async (req, res) => {
    let data = await student.findAll({})
    res.status(200).send(data)
}


module.export = {
    addStudent,
    getAllStudent
}