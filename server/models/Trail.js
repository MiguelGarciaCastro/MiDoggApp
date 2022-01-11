const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const trailSchema = new Schema(
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

const Trail = model('Trail', trailSchema);

module.exports = Trail;
