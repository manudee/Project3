const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.request.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getRequests: function (req, res) {
    db.request
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateRequest : function(req,res){
    console.log("I am in request controller.")
    console.log(req.params.id);
    console.log(req.body.status);
    db.request
      .findByIdAndUpdate({_id:req.params.id},{$set:{status:req.body.status}},{new:true}, function(err,dbModel){
        if (err) return handleError(err);
        console.log(dbModel)
        res.send(dbModel);
      })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
   }
  


}



