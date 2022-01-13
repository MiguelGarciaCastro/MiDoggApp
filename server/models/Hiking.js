const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const brewery = require("./Brewery");
const dateFormat = require("../utils/dateFormat");
const brewerySchema = mongoose.model("Brewery").schema;
const bcrypt = require('bcrypt');

const hikingSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    handicap_accessible: bool,
    difficulty: String,
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