const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoidGhlNGxjaGVtaXN0IiwiYSI6ImNrNTY2d3QweTAwNXMzbXM1djNrN2Z2aGkifQ.HfeeH1CJFVzc7J3Y6wlo2g&limit=1';

  request(url, { json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features.length == 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
