const Courses = require('../database/models/Courses');

module.exports = {
    async create(req, res) {
        const {name, requirement, workload, price} = req.body;
        const course = await Courses.create({name, requirement, workload, price});
        res.status(200).json(course);
    },

    async find(req, res){
        const course = await Courses.findAll();
        res.status(200).json(course);
    }
}