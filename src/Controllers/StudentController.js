const Student = require('../database/models/Student');

module.exports = {
    async create(req, res) {
        const user = req.body;
        const nome = user.name;
        const cpf = Number(user.cpf);
        const idade = Number(user.idade);
        const student = await Student.create({nome, cpf, idade});
        return res.status(200).json(student);  
    },

    async find(req, res) {
        const students = await Student.findAll();
        return res.status(200).json(students);
    }
}