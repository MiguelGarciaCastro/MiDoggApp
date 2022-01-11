const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const beachSchema = new Schema(
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

const Beach = model('Beach', beachSchema);

module.exports = Beach;
