const express = require("express");
const router = express.Router();
const Student = require('../Controllers/StudentController');
const Class = require('../Controllers/ClassController');

router.get('/student', Student.find);

router.post('/student', Student.create);

router.post('/class', Class.create);

module.exports = router;