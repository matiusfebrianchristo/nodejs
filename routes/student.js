
const studentController = require('../controllers/studentController')
const router = require('express').Router()

router.post('/addStudent', studentController.addStudent)
router.get('/listStudents', studentController.getAllStudent)
router.patch('/updateStudent/:nisn', studentController.updateStudent)
router.delete('/deleteStudent/:nisn', studentController.deleteStudent)

// 	app.use('/api/students', routmoduleer)
module.exports = router