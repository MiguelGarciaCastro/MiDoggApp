const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const citySchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    hotels: [Hotel],
    parks: [Park],
    groomers: [Groomer],
    stores: [Store],
    boarding: [Boarder],
    campgrounds: [Campground],
    beaches: [Beach],
    trails: [Trail],
    restaurants: [Restaurant],
    veterinarians: [Veterinarian],
    comments: [Comment],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const City = model('City', citySchema);

module.exports = City;
