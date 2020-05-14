const router = require("express").Router();
const googleController = require("../../Controllers/googleController");

router
    .route("/google")
    .get(googleController.findAll)

module.exports = router;