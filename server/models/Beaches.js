const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const bcrypt = require('bcrypt');

const beachesSchema = new mongoose.Schema(
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