const studentController = require('../controllers/studentController')

const router = require('express').Router()


router.post('/student/addStudent', studentController.addStudent)
router.get('/student/listStudent', studentController.getAllStudent)

module.export = router
