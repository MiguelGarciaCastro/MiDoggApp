const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const brewerySchema = mongoose.model("Brewery").schema;
const bcrypt = require('bcrypt');

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