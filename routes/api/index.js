const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const restRoutes = require("./restaurant");
const googleRoutes = require("./google");

// user routes
router.use("/user", userRoutes);

// restaurant routes
// router.use("/:id/restaurant", restRoutes);

router.use("/restaurant", restRoutes)

router.use("/google", googleRoutes)


module.exports = router;
