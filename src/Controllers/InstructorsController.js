const Instructors = require('../database/models/Instructors');

module.exports = {
    async create(req, res) {
        const {name, email, wage, certificates} = req.body;
        const instructor = await Instructors.create({name, email, wage, certificates});
        res.status(200).json(instructor);
    },

    async find(req, res){
        const instructors = await Instructors.findAll();
        res.status(200).json(instructors);
    }
}

/*
    console.log(name + '\n' + email + '\n' + wage + '\n' + certificates);
    console.log(typeof(name) + '\n' + typeof(email) + '\n' + typeof(wage) + '\n' + typeof(certificates));
    res.status(200).send();
*/