import Joi from '@hapi/joi';

export const genericValidator = (req, res, schema, next) => {
    const { error } = Joi.validate(req.body, schema, {
      abortEarly: false,
      convert: true
    });
    if (error) {
      const errors = [];
      const { details: errArr = [] } = error || {};
      errArr.forEach(err => {
        errors.push(err.message.split('"').join(''));
      });
      return res.status(400).json({
        status: res.statusCode,
        errors
      });
    }
    return next();
  };

export class Validation {
    
    static createTripValidation(req, res, next) {
    const schema = Joi.object().keys({
     id: Joi.number()
        .min(0)
        .required(),
     origin: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),
     destination: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),
     seating_capacity: Joi.number()
        .min(0)
        .required(),
     fare: Joi.number()
        .min(0)
        .required(),
    });
    genericValidator(req, res, schema, next);
    }
    static signUpValidation(req, res, next) {
        const schema = Joi.object().keys({
          email: Joi.string()
            .email({ minDomainSegments: 2 })
            .required(),
          first_name: Joi.string()
            .strict()
            .trim()
            .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
            .min(2)
            .max(30)
            .required(),
          last_name: Joi.string()
            .alphanum()
            .strict()
            .trim()
            .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
            .min(2)
            .max(30)
            .required(),
          password: Joi.string()
            .min(6)
            .max(50)
            .required()
        });
        genericValidator(req, res, schema, next);
      }



}