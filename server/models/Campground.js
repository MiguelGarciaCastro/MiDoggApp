const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const campgroundSchema = new Schema(
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

const Campground = model('Campground', campgroundSchema);

module.exports = Campground;
