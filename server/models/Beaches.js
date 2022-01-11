const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const beachesSchema = new Schema(
  {
    id: {
      type: String,
      required: true
  },
    location: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Beaches = model('Beaches', beachesSchema);

module.exports = Beaches;