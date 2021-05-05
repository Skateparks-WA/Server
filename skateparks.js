"use strict";

// const axios = require('axios');
const distance = require("./location.js");
const ParkModel = require("./Schemas.js");

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
  const searchQuery = request.query.searchQuery;
  console.log(request.query.searchQuery);
  // console.log(coordinates);
  // const locationIqKey = process.env.LOCATION_IQ_KEY;
  try {
    const parks = await ParkModel.find();
    console.log(parks);
    // const url = `https://us1.locationiq.com/v1/search.php?key=${locationIqKey}&q=${searchQuery}&format=json`;
    // const locationResponse = await axios.get(url);
    // const userLat = searchQuery[0];
    // const userLon = searchQuery[1];
    // const parkDistance = parks.map(
    //   (parks) =>
    //     (parks.distance = distance(userLat, userLon, parks.lat, parks.lon))
    // );
    // console.log(parkDistance);
    // const sortedParks = parkDistance.sort((a, b) => {
    //   return a.distance - b.distance;
    // });
    // response.send(sortedParks);
  } catch (err) {
    response.send(console.error(err));
  }
};

module.exports = skateParks;
