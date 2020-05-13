const router = require("express").Router();
const googleController = require("../../Controllers/googleController");

router
    .route("/")
    .get(googleController.findAll)

module.exports = router;