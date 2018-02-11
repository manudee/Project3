const router = require("express").Router();
const reqController = require("../controllers/request.js");


router.route("/")
    .get(reqController.getRequests)
    .post(reqController.create)

router.route("/:id")    
    .post(reqController.updateRequest)

module.exports = router;
