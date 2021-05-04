'use strict';

const ParkModel = require('./Schemas.js');

const skateParks = { };

skateParks.getAllParks = async (request, response) => {
  const parks = await ParkModel.find({});
  response.status(200).json(parks);
};

skateParks.createPark = async (request, response) => {
  const park = new ParkModel (request.body);
  await park.save();
  response.status(200).json(park);
};

module.exports = skateParks;
