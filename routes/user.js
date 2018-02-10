const router = require("express").Router();
const usersController = require("../controllers/user");

router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)


module.exports = router;
