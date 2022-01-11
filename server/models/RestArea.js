const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const restAreaSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    open: bool,
    dog_run: bool,
    vending_machines: bool,
    handicap_spaces: Number,
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