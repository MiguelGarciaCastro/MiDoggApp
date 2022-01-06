const { Schema, model } = require('mongoose');

const placesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Places = model('Places', techSchema);

module.exports = Places;
