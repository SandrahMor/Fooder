const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const noteSchema = new Schema({
//   restID: { type: String, required: true },
//   userID: { type: String, required: true },
  note: { type: String, required: true },

});

const Restaurant = mongoose.model("Restaurant", noteSchema);

module.exports = Restaurant;

