const router = require("express").Router();
const userController = require("../../Controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create); 

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .post(userController.update)

module.exports = router; 