const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ParkSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    bigDog: {
    bool
    },
    separateSmallDogArea: {
    bool
    },
    fencedIn: {
    bool
    },
    offLeash: {
    bool
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Park = model('Park', parkSchema);

module.exports = Park;
