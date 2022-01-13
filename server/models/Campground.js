const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const brewerySchema = mongoose.model("Brewery").schema;
const bcrypt = require('bcrypt');

const campgroundSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    special_requirement: bool,
    fee: bool,
    address: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Campground = model('Campground', campgroundSchema);

module.exports = Campground;