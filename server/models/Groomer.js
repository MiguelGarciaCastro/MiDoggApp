const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const groomerSchema = new Schema(
  {
    id: {
      type: String,
      required: true
  },
    address: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Groomer = model('Groomer', groomerSchema);

module.exports = Groomer;
