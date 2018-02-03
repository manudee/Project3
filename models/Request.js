var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var requestSchema = new Schema({

    equipmentID: {
        type: String,
        required: true
    },

    qty: {
        type: Number,
        required: true
    },

    justification: {
        type: String,
        required: true

    },

    status: {
        type: String,
        required: true


    },


    user: [{

        type: Schema.Types.ObjectId,
        ref: 'user'

    }
    ],


    assetID: [{

        type: Schema.Types.ObjectId,
        ref: 'equipment'


    }]

});


var request = mongoose.model("request", requestSchema);

module.exports = request;