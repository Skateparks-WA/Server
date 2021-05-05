'use strict';

const ParkModel = require('./Schemas.js');

const axios = require('axios');

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

const parkArray = [
  '46.9673768,-123.7906958',
  '48.5036754,-122.6095971',
  '48.1644485,-122.1502036',
];

skateParks.daniel = async (request, response) => {
  console.log('here');

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  for (let i = 0; i < parkArray.length; i++) {
    await sleep(2000).then(async () => {
      const ans = await axios.get(
        `https://native-land.ca/api/index.php?maps=languages&position=${parkArray[i]}`
      );
      console.log(ans.data[0].properties.Name);
    });
  }

  console.log('end');
  response.send('yea boy');
};

module.exports = skateParks;
