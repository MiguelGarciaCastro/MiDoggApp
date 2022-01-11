const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const veterinarianSchema = new Schema(
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

const Veterinarian = model('Veterinarian', veterinarianSchema);

module.exports = Veterinarian;
