const Class = require('../database/models/Class');

module.exports = {
    async create(req, res) {
        const {initial_date, workload, instructors_id, courses_id} = req.body;
        const newClass = await Class.create({initial_date, workload, instructors_id, courses_id});
        res.status(200).json(newClass);
    },

    async find(req, res) {
        const classes = await Class.findAll();
        res.status(200).json(classes);
    }
}