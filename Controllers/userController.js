const db = require("../models");

// Defining methods for the userController

module.exports = {
  findAll: function(req, res) {
    // console.log(req.query)
    db.User
      .find(req.query) 
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    console.log(req.params.id)
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
 getUserRestaurants: function(req, res) {
    db.User 
      .findById(req.params.id).populate('restaurants')
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }, 

  newUserRestaurant: function (req, res) {
    console.log(req.body)
    console.log(req.params)

    const { id } = req.params;
    db.Restaurant.create(req.body)
    .then(({ _id }) => db.User.findOneAndUpdate({ _id : id }, { $push: { restaurants: _id } }, { new: true }))        
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },
}


// 
  // remove: function(req, res) {
  //   db.User
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }

