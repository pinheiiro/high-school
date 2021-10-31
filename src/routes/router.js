const express = require("express");
const router = express.Router();
const Courses = require('../controllers/CoursesController');
const Instructors = require('../controllers/InstructorsController');
const Class = require('../controllers/ClassController');

// Rotas de teste

// Rotas do curso
router.post('/courses', Courses.create);
router.get('/courses', Courses.find);

// Rotas do instrutor
router.post('/instructors', Instructors.create);
router.get('/instructors', Instructors.find);

// Rotas da turma
router.post('/class', Class.create);
router.get('/class', Class.find);

module.exports = router;