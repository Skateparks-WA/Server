'use strict';

const mongoose = require ('mongoose');

const skateSchemas = new mongoose.Schema ({
  name: {type: String, required: true},
  lat: {type: Number, required: true},
  lon: {type: Number, required: true},
  address: {type: String, required:true},
  // img: {type: String}
});

const ParkModel = mongoose.model('skateparks', skateSchemas);

module.exports = ParkModel;

