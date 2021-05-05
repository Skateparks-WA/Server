'use strict';

const mongoose = require ('mongoose');

const skateSchemas = new mongoose.Schema ({
  name: {type: String, required: true},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  address: {type: String, required:true},
  distance: {type: Number}
  // img: {type: String}
});

const ParkModel = mongoose.model('washington', skateSchemas);

module.exports = ParkModel;

