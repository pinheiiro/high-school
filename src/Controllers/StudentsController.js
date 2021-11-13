const Students = require('../database/models/Students');

module.exports = {
    async create(req, res) {
        const {cpf ,name, email, phone, birth_date} = req.body;
        const student = await Students.create({cpf, name, email, phone, birth_date});
        res.status(200).json(student);
    },

    async find(req, res) {
        const { id } = req.body;
        const student = await Students.findByPk(id);
        res.status(200).json(student);
    },

    async findAll(req, res) {
        const student = await Students.findAll();
        res.status(200).json(student);
    }
}