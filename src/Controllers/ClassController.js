const Class = require('../database/models/Class');

module.exports = {
    async create(req, res) {
        const {turma} = req.body;
        const newClass = await Class.create({turma});
        return res.status(200).json(newClass);
    }
}