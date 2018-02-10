const router = require("express").Router();
const reqController = require("../controllers/request.js");


router.route("/")
    .post(reqController.create);

module.exports = router;
