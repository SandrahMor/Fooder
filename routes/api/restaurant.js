const router = require("express").Router();
const restaurantController = require("../../Controllers/restaurantController");

// Matches with "/api/restaurant"
router.route("/restaurant")
  .get(restaurantController.findAll)
  .post(restaurantController.create); 

// Matches with "/api/restaurant/:id"
router
  .route("/restaurant/:id")
  .get(restaurantController.findById)
  .delete(restaurantController.remove);

module.exports = router;