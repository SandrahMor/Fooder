const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
