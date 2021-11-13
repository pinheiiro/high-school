const joi = require('joi');

function validation(req, res, next) {
    const schema = joi.object({
        cpf: joi.string().
            min(11).
            max(11).
            required(),
        name: joi.string().
            min(3).
            max(50).
            required(),
        email: joi.string().
            email({minDomainSegments: 2}).
            lowercase().
            required(),
        phone: joi.string().
            min(6).
            max(25),
        birth_date: joi.string().
            min(4).
            max(10).
            required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        res.status(400).send(error.message);
    } else {
        next();
    }

}

module.exports = validation;