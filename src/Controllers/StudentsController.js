const Students = require('../database/models/Students');

module.exports = {
    async create(req, res) {
        const {cpf ,name, email, phone, birth_date} = req.body;
        const student = await Students.create({cpf, name, email, phone, birth_date});
        res.status(200).json(student);
    },

    async find(req, res) {
        const student = await Students.findAll();
        res.status(200).json(student);
    }
}