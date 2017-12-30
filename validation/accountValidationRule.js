var Joi = require('joi');

module.exports = {
  options: { allowUnknownBody: false },
  body: {
    name: Joi.string().required(),
    balance: Joi.number().required()
  }

};
