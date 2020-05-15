const axios = require("axios");
// const db = require("../models");


module.exports = {
    findAll: function(req, res) {
      console.log('GOOGLE FINDALL')
      axios
        .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBVbcko5gMzL50MmzOJnfAk86hsIJVvu6A&location=44.9765,-93.2761&radius=1000&type=restaurant	") 
        .then(({data}) => {
          // console.log(data);
          // data.items = data.items.map(
          //   item =>
          //     item["name"] &&
          //     item["opening_hours.open_now"]
          // ) //still is not returning just the two fields of name and opening_hours.open_now
          console.log(data.results)
          res.json(data.results)
        })     
        .catch(err => res.status(422).json(err));
    }
  }

  // 
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

        
  



