const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const hotelSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    bigDog: bool,
    fee: bool,
    address: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;
