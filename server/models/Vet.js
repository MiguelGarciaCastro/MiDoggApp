const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const brewery = require("./Brewery");
const dateFormat = require("../utils/dateFormat");
const brewerySchema = mongoose.model("Brewery").schema;
const bcrypt = require('bcrypt');

const vetSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
  },
    name: String,
    clinic_name: String,
    phone: Number,
    website: String,
    location: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Vet = model('Vet', vetSchema);

module.exports = Vet;