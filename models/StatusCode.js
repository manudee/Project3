var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var statusSchema = new Schema({

    status: {
        type: String,
        required: true
    },

    code : {
        type: Number, 
        min: 1, 
        max: 5,
        required: true

    }

})

var statusCode = mongoose.model("statusCode",statusSchema);

module.exports = statusCode;