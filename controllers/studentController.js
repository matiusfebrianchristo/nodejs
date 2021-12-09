const db = require('../models')

// create main model
const Student = db.students


// main work

// add student
const addStudent = async (req, res) => {
    // console.log(req)
    try {
        const data = {
            nisn: req.body.nisn,
            name: req.body.name,
            class: req.body.class
        }
         // console.log(data)
         const request = await Student.create(data)
         
         res.status(200).send(request)
         
     } catch (error) {
        console.log(Student)
        res.status(500).send({
             message: error.message
         })
     }

}

// list student
const getAllStudent = async (req, res) => {
    try {
        const data = await Student.findAll()
        res.status(200).send(data)
        
    } catch (error) {
        console.log(db)
        res.status(500).send({
            message: error.message
        })
        
    }
}

const updateStudent = async (req, res) => {
    try{
        const nisn = req.params.nisn
        const request = await Student.update(req.body, {where : { nisn: nisn }})

        res.status(200).send(request)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteStudent = async (req, res) => {
    try {
        const nisn = req.params.nisn
        await Student.destroy({
            where: {
                nisn : nisn
            }
        })
        res.status(200).send('Data has been deleted')
    } catch ( error ){
        res.status(500).send({
            message: error.message
        })
    }
}


module.exports = {
    addStudent,
    getAllStudent,
    updateStudent,
    deleteStudent
}