const router = require("express").Router();
const reqController = require("../controllers/request.js");


router.route("/")
    .get(reqController.getRequests)
    .post(reqController.create);
	
module.exports = router;
