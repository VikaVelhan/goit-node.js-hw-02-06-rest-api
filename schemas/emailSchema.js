const Joi = require("joi");
const emailRegexp =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = emailSchema;
