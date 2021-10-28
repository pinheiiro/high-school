const express = require("express");
const router = express.Router();
const Courses = require('../Controllers/CoursesController');

// Rotas de teste

router.post('/courses', Courses.create);

router.get('/courses', Courses.find);

module.exports = router;