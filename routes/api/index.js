const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const restRoutes = require("./restaurant");

// user routes
router.use("/", userRoutes);

// restaurant routes
// router.use("/:id/restaurant", restRoutes);

router.use("/restaurant", restRoutes)
// note Routes
// router.use("/note", noteRoutes);


module.exports = router;
