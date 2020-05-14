let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("'mongodb://127.0.0.1:27017/fooder'", {
  useNewUrlParser: true,
  useFindAndModify: true
});

let userSeed = [
    {
        name: "Stephanie",
        email: "steph@email.com",
        userID: { type: String, required: true },
        restaurants:[
            {
            restName: "Chipotle",
            location: "Minneapolis",
            websiteURL: "chipotle.com",
            },
            {
            restName: "Chipotle",
            location: "Minneapolis",
            websiteURL: "chipotle.com",
            }
        ],
    }
];

// db.User.deleteMany({})
//   .then(() => 
  
  db.User.collection.insertMany(userSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

