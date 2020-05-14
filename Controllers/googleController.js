const axios = require("axios");
// const db = require("../models");


module.exports = {
    findAll: function(req, res) {
      // const { query: params } = req;
      console.log('GOOGLE FINDALL')
      axios
        .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBVbcko5gMzL50MmzOJnfAk86hsIJVvu6A&location=45.086140,-93.258360&radius=24000&type=restaurant") 
        
        .then(({data}) => {
          console.log(data.results)
          res.json(data.results)
        })     
        .catch(err => res.status(422).json(err));
    }
  }
        // .then(results =>
        //   results.data.items.filter(
        //     result =>
        //       result.name &&
        //       result.opening_hours.open_now
        //   )
        // )
        // .then(apiRestaurants =>{
        //   db.Restaurant.find().then(dbRestaurants =>
        //     apiRestaurants.filter(apiRestaurant =>
        //       dbRestaurants.every(dbRestaurant => dbRestaurant.googleId.toString() !== apiRestaurant.id)
        //     )
        //   )
        
        // .then(restaurants => res.json(restaurants))

        
  



