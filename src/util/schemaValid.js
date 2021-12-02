const Ajv = require("ajv");

const validateJSON = (schema = {}, body = {}) => {
  const ajv = new Ajv({ useDefaults: true });
  try {
    const validate = ajv.compile(schema);
    const valid = validate(body);
    return {
      valid,
      err: validate.errors,
      data: body,
    };
  } catch (error) {
    console.log("err::", error.toString());
    return {
      valid: false,
      err: null,
      data: null,
    };
  }
};

module.exports = { validateJSON };
