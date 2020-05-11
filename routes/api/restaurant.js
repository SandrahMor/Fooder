const router = require("express").Router();
const restaurantController = require("../../Controllers/restaurantController");

// Matches with "/api/restaurant"
router.route("/restaurant")
  // restaurant is created in userController
  // .post(restaurantController.create); 
  // .get(restaurantController.findAll)

// Matches with "/api/restaurant/:id"
router
  .route("/restaurant/:id")
  .get(restaurantController.findRestById)
  .delete(restaurantController.remove);

module.exports = router;