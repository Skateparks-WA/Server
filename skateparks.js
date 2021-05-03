'use strict';

const ParkModel = require('./Schemas.js');

const skateParks = { };

skateParks.getAllParks = async (request, response) => {
  const parks = await ParkModel.find({});
  response.status(200).json(parks);
};

module.exports = skateParks;
