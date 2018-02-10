const router = require("express").Router();
const reqRoutes = require("./request.js");
const equipRoutes = require("./equipment.js");
const userRoutes = require("./user.js");
// req routes
router.use("/api/createRequest", reqRoutes);

//equipment routes
router.use("/api/createequipment", equipRoutes);

//user routes
router.use("/api/createuser", userRoutes);


router.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

module.exports = router;
