'use strict';

const mongoose = require ('mongoose');

const skateparks = new mongoose.Schema ({
  name: {type: String, required: true},
  lat: {type: Number, required: true},
  lon: {type: Number, required: true},
  address: {type: String, required:true},
  distance: {type: Number}
});

const ParkModel = mongoose.model('skatepark', skateparks);

module.exports = ParkModel;

