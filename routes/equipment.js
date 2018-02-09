const router = require("express").Router();
const equipmentController = require("../../controllers/equipment");

router.route("/equipment")
  .get(equipmentController.findAll)
  .post(equipmentController.create);

router.route("/equipment/:id")
  .delete(equipmentController.delete);

module.exports = router;
