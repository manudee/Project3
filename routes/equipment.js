const router = require("express").Router();
const equipmentController = require("../controllers/equipment");

router.route("/")
  .get(equipmentController.findAll)
  .post(equipmentController.create)

router.route("/:id")
	.put(equipmentController.updateById)
	.get(equipmentController.findOne)
	.delete(equipmentController.delete)


module.exports = router;
