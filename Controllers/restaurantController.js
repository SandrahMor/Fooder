const db = require("../models/restaurant");

// Defining methods for the restaurantController
module.exports = {
  findAll: function(req, res) {
    db.Restaurant
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findById: function(req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log(req.body)
    db.Restaurant
      .create(req.body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { restaurant: _id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  remove: function(req, res) {
    db.Restaurant
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  //   update: function(req, res) {
//     db.Restaurant
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
};




