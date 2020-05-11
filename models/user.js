const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  userID: { type: String, required: true },
  restaurants:[{
      type: Schema.Types.ObjectId,
      ref: "Restaurant"
  }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
