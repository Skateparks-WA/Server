'use strict';

require('dotenv').config();
const axios = require('axios');
const skateParks = require('./skateparks.js');


// getInformation = async (event) => {
//   event.preventDefault();
//   const locationURL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.query.searchQuery}&format=json`;

//   const response = await axios.get(locationURL);
//   const userLat = response.data[0].lat;
//   const userLon = response.data[0].lon;


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

let userLat = 42.3601;
let userLon = 71.0589;

const work = park.map(parks =>
  parks.dist = distance(userLat, userLon, parks.lat, parks.lon)
);

const sortedParks = parks.sort((a, b) => {
  return a.dist - b.dist;
});

console.log(sortedParks);

module.exports = getInformation;

    // TODO : PUT URL IN FRONT END:
    //cost locationURL = `http://localhost:3001/location?searchQuery=${this.state.searchQuery}`;