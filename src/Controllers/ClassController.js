const Class = require('../database/models/Class');

module.exports = {
    async create(req, res) {
        const {initial_date, workload, instructors_id, courses_id} = req.body;
        const newClass = await Class.create({initial_date, workload, instructors_id, courses_id});
        res.status(200).json(newClass);
    },

    async find(req, res) {
        const {id} = req.body;
        const classes = await Class.findByPk(id, {
            attributes: ['initial_date', 'workload'],
            include: [
                {association: 'instructor', attributes: ['name', 'email']},
                {association: 'course', attributes: ['name', 'price']}
            ]
        });
        res.status(200).json(classes);
    },

    async findAll(req, res) {
        const classes = await Class.findAll({
            attributes: ['id', 'initial_date', 'workload'],
            include: [
                {association: 'instructor', attributes: ['name', 'email']},
                {association: 'course', attributes: ['name', 'price']}
            ]
        });
        res.status(200).json(classes);
    }
}