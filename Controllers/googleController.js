const axios = require("axios");
const db = require("../models");


module.exports = {
    findAll: function(req, res) {
      axios
        .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBVbcko5gMzL50MmzOJnfAk86hsIJVvu6A&location=45.086140,-93.258360&radius=24000&type=restaurant") 
        .then(results =>
          results.data.items.filter(
            result =>
              result.name &&
              result.opening_hours.open_now &&
              result.photos 
          )
        )
        .then(apiBooks =>
          db.Restaurant.find().then(dbRestaurants =>
            apiRestaurants.filter(apiRestaurant =>
              dbRestaurants.every(dbRestaurant => dbRestaurant.googleId.toString() !== apiRestaurant.id)
            )
          )
        )
        .then(restaurants => res.json(restaurants))
        .catch(err => res.status(422).json(err));
    }
  };

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=YOURAPIKEY&location=latitude,longitude&radius=5000&type=restaurant
// var apiKey =
//          "AIzaSyBVbcko5gMzL50MmzOJnfAk86hsIJVvu6A";
    
//  var queryUrl = encodeURI(
//         "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" +
//         apiKey +
//         "&location=" +
//         latitude + longitude +
//         "&radius=24000&type=restaurant" );

//         console.log(queryUrl);
// $.ajax({
//         url: queryUrl,
//         method: "GET",
//         }).then(function(response) {
//         //console.log(response);
//         restaurantName.textContent= results.name;
//         $("#restaurantPhoto").attr("src", results.photos)
//       });
      