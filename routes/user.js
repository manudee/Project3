const router = require("express").Router();
const usersController = require("../controllers/user");

router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)

router.route('/sign_in')
		.post(usersController.sign_in);

module.exports = router;
