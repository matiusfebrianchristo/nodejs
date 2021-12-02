const studentController = require('../controllers/studentController')

const router = require('express').Router()


router.post('/addStudents', studentController.addStudent)
router.get('/listStudents', studentController.getAllStudent)

module.exports = router
