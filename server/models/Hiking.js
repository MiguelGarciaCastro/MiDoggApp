const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const hikingSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    handicap_accessible: bool,
    difficulty: String,
    fee: bool,
    address: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Hiking = model('Hiking', hikingSchema);

module.exports = Hiking;