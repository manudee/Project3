const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.user
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let user = {
      username: req.body.headline.main,
      password: req.body.snippet,
      date: req.body.pub_date,
      url: req.body.web_url
    }
    console.log("request", request);
    db.request
      .create(request)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    console.log("req.params.id", req.params.id);
    db.request
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
