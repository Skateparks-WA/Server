'use strict';

const axios = require('axios');
const distance = require('./location.js');
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

skateParks.sortLocations = async (request,response) => {
  const parks = await ParkModel.find({});
  // console.log(process.env.LOCATION_IQ_KEY);
  // const locationURL = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_KEY}&q=${request.query.searchQuery}&format=json`;
  // console.log(locationURL);
  // const responseInfo = await axios.get(locationURL);
  // console.log(response.Info);
  // const userLat = responseInfo.data[0].lat;
  // const userLon = responseInfo.data[0].lon;

  let userLat = 42.3601;
  let userLon = -71.0589;

  parks.map(parks =>
    parks.Distance = distance(userLat, userLon, parks.lat, parks.lon)
  );
  const sortedParks = parks.sort((a, b) => {
    return a.Distance - b.Distance;
  });
  response.send(sortedParks);
};

module.exports = skateParks;
