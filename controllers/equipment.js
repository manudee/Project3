const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.equipment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let equipment = {
      username: req.body.headline.main,
      password: req.body.snippet,
      role: req.body.pub_date
    }
    console.log("equipment", equipment);
    db.equipment
      .create(equipment)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    console.log("req.params.id", req.params.id);
    db.equipment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
