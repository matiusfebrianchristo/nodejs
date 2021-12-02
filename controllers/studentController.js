const { json } = require('body-parser')
const db = require('../models')

// create main model
const student = db.students


// main work

// add student
const addStudent = async (req, res) => {
    try {
        const data = {
            nisn: req.body.nisn,
            name: req.body.name,
            class: req.body.class
        }
        //  console.log(data)
         const request = await student.create(data)
         
         return res.status(200).send(request)
         
     } catch (error) {
        console.log(JSON.stringify(req.body), req)
         return res.status(500).send({
             message: error.message
         })
     }

}

// list student
const getAllStudent = async (req, res) => {
    try {
        const data = await student.findAll()
        return res.status(200).send(data)
        
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
        
    }


}


module.exports = {
    addStudent,
    getAllStudent
}