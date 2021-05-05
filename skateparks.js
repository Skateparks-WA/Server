'use strict';

// const axios = require('axios');
const distance = require('./location.js');
const ParkModel = require('./Schemas.js');

const skateParks = {};

skateParks.getAllParks = async (request, response) => {
  const parks = await ParkModel.find({});
  response.status(200).json(parks);
};

skateParks.createPark = async (request, response) => {
  const park = new ParkModel(request.body);
  await park.save();
  response.status(200).json(park);
};

skateParks.sortLocations = async (request, response) => {
  const { lat, lon } = request.query;

  try {
    const parks = await ParkModel.find({});

    const userLat = lat;
    const userLon = lon;

    const parkDistance = parks.map( parks => {
      const miles = distance(userLat, userLon, parks.lat, parks.lon);
      parks.distance = `${miles}`;
      return parks;
    }
    );
    const sortedParks = parkDistance.sort((a, b) => {
      return a.distance - b.distance;
    });
    const filteredParks = sortedParks.slice(0,10);
    response.send(filteredParks);
  } catch (err) {
    response.send(console.error(err));
  }
};

module.exports = skateParks;
