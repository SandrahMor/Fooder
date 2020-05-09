const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restName: { type: String, required: true },
  location: { type: String, required: true },
  websiteURL: { type: String, required: true },
  photos: { type: String, required: true },
  notes:{
    type: Schema.Types.ObjectID,
    ref: "Notes"
},
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
