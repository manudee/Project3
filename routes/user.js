const router = require("express").Router();
const usersController = require("../../controllers/user");

router.route("/user")
  .get(usersController.findOne)


module.exports = router;
