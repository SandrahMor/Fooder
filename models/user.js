const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  userID: { type: String, required: true },
  restaurants:[{
      type: Schema.Types.ObjectID,
      ref: "Restaurant"
  }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
