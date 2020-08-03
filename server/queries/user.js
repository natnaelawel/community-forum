const db = require("../db");

const Joi = require("joi");
const app = require("express")();
const validator = require("express-joi-validation").createValidator({});

const querySchema = Joi.object().keys({
  display_name: Joi.string().required(),
  email: Joi.string().email(),
  google_id: Joi.string().required(),
  //   banned: Joi.boolean().required(),
  image_url: Joi.string().uri({
    scheme: [/https/],
  }),
  role_id: Joi.number().integer(),
});

module.exports = {
  findByEmail(email) {
    return db("users").where("email", email).first();
  },
  async update(id, user) {
    // const result = Joi.validate(user, querySchema);
    // validator.body(querySchema,user);
    
    // if (result.error === null) {
    if (validator.query(querySchema, user)) {
      const rows = await db("users").where("id", id).update(user, "*");
      return rows[0];
    } else {
      return Promise.reject(result.error);
    }
  },
  insert(user) {
    //    const result = validator.query(querySchema, user);
    // const result = Joi.validate(user, querySchema);
    // const result = validator(user, querySchema);
    if (validator.query(querySchema, user)) {
        return db("users").insert(user);
    } else {
      return Promise.reject(result.error);
    }
  },
};
