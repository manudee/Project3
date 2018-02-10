const db = require("../models");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

module.exports = {
  create: function(req, res) {
    //console.log("equipment", equipment);
    db.user
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.user
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.user
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  sign_in: async (req,res) => {
    const existingUser = await db.user.findOne({username: req.body.username})

    console.log('you hit me', existingUser)

    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    }
    return res.status(200).json({ token: jwt.sign({username: username, _id: user._id}, 'foashflsgdflu')})
    // db.user
    //   .find({"username":req.body.username})
    //   .then((err,user) => {
    //     if (err) throw err;
    //     if (!user || !user.comparePassword(req.body.password)) {
    //       return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    //     }
    //     return res.json({ token: jwt.sign({ username: user.username, role: user.role, _id: user._id }, 'RESTFULAPIs') });
    //   })


  },
  loginRequired:function(req,res,next){
    if(req.user){
      next();
    } else{
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  }
}
