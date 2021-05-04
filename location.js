'use strict';

require('dotenv').config();
const axios = require('axios');

// getInformation = async () => {
//     const locationURL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

//     const response = await axios.get(locationURL);
//     const location = response.data[0];

// module.exports = getInformation;


//=======haversine=======//

function distance(lat1, lon1, lat2, lon2) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    // if (unit == 'K') { dist = dist * 1.609344 }
    // if (unit == 'N') { dist = dist * 0.8684 }
    return dist;
  }
}

// user location
let userLat = 42.3601;
let userLon = 71.0589;


let parks = [
  {
    'name': 'Aberdeen',
    'lat': 46.9673768,
    'lon': 123.7906958,
    'dist': 0
  },

  {
    'name': 'Anacortes',
    'lat': 48.5036754,
    'lon': 122.6095971,
    'dist': 0
  },

  {
    'name': 'Arlington',
    'lat': 48.1644485,
    'lon': 122.1502036,
    'dist': 0
  },

  {
    'name': 'Auburn',
    'lat': 47.3320402,
    'lon': 122.2146019,
    'dist': 0
  },

  {
    'name': 'Bainbridge',
    'lat': 47.638247,
    'lon': 122.5490859,
    'dist': 0
  }
];

const work = parks.map( parks =>
  parks.dist = distance(userLat, userLon, parks.lat, parks.lon)
);

const sortedParks = parks.sort((a, b) => {
  return a.dist - b.dist;
});

console.log(sortedParks);
