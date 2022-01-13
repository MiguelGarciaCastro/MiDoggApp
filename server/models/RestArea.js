const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const bcrypt = require('bcrypt');

const restAreaSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    open: bool,
    dog_run: bool,
    vending_machines: bool,
    handicap_spaces: int,
    route_direction: String,
    address: [Address]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const RestArea = model('RestArea', restAreaSchema);

module.exports = RestArea;