const router = require("express").Router();
const articleController = require("../../controllers/articleController");



// Matches with "/api/books"
router.route("/api/savedArticle")
  .post(articleController.create);
