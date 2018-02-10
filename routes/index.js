const router = require("express").Router();
const reqRoutes = require("./request.js");

// req routes
router.use("/api/createRequest", reqRoutes);

module.exports = router;
