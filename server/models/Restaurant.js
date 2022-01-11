const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const restaurantSchema = new Schema(
  {
    id: {
      type: String,
      required: true
  },
    patio_seating: bool,
    location: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;