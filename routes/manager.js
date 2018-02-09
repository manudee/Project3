const router = require("express").Router();
const managersController = require("../../controllers/user");

router.route("/manager")
  .get(managersController.findAll)


module.exports = router;
