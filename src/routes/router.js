const express = require("express");
const router = express.Router();
const Courses = require('../controllers/CoursesController');
const Instructors = require('../controllers/InstructorsController');
const Class = require('../controllers/ClassController');
const Students = require('../controllers/StudentsController');
const Registration = require('../controllers/RegistrationController');

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
router.get('/classes', Class.findAll);

// Rotas do aluno
router.post('/students', Students.create);
router.get('/students', Students.find);

// Rotas da matricula
router.post('/registration', Registration.create);
router.get('/registration', Registration.find);
router.get('/enrollment', Registration.findAll);

module.exports = router;