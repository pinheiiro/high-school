const express = require("express");
const router = express.Router();
const Courses = require('../Controllers/CoursesController');
const Instructors = require('../Controllers/InstructorsController');

// Rotas de teste

// Rotas do curso
router.post('/courses', Courses.create);
router.get('/courses', Courses.find);

// Rotas do instrutor
router.post('/instructors', Instructors.create);
router.get('/instructors', Instructors.find);

module.exports = router;