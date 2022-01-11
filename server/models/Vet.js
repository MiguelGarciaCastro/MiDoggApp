const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const vetSchema = new Schema(
  {
    id: {
      type: String,
      required: true
  },
    name: String,
    clinic_name: String,
    phone: Number,
    website: String,
    location: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Vet = model('Vet', vetSchema);

module.exports = Vet;