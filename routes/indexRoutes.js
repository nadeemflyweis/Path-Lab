const express = require("express");
const router = express.Router();

// ------------------- List of all Route paths --------------------
router.use("/admin", require("./adminRoutes"));

router.use("/deliveryboy", require("./deliveryBoyRoute"));

router.use("/samplecollector", require("./sampleCollectorRoute"));

router.use("/user", require("./userRoute"));

router.use("/vendor", require("./vendorRoute"));

// ------------------- Exporting --------------------
module.exports = router;
