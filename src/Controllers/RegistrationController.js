const Registration = require('../database/models/Registration');

module.exports = {
    async create(req, res) {
        const { date_registration, class_id, students_id } = req.body;
        const newRegistration = await Registration.create({ date_registration, class_id, students_id });
        res.status(200).json(newRegistration);
    },

    async find(req, res) {
        const { id } = req.body;
        const registration = await Registration.findByPk(id, {
            attributes: ['date_registration'],
            include: [
                {
                    association: 'classes',
                    attributes: ['initial_date', 'workload'],
                    include: [
                        { association: 'course', attributes: ['name', 'price'] }
                    ]
                },
                { association: 'student', attributes: ['name', 'cpf', 'email'] }
            ]
        });
        res.status(200).json(registration);
    },

    async findAll(req, res) {
        const registration = await Registration.findAll({
            attributes: ['date_registration'],
            include: [
                {
                    association: 'classes',
                    attributes: ['initial_date'],
                    include: [
                        { association: 'course', attributes: ['name'] }
                    ]
                },
                { association: 'student', attributes: ['name', 'cpf'] }
            ]
        });
        res.status(200).json(registration);
    }
}