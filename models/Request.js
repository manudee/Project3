var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var requestSchema = new Schema({

    equipment: {
        type: String,
        required: true
    },
    equipDesc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },

    justification: {
        type: String,
        required: true

    },

     status: {
        type: Number,         
        default:0,
        min:0,
        max:5
     }
    
    
    // ,

    // user: [{

    //     type: Schema.Types.ObjectId,
    //     ref: 'user'

    // }
    // ],


    // assetID: [{

    //     type: Schema.Types.ObjectId,
    //     ref: 'equipment'


    // }]

});


var request = mongoose.model("request", requestSchema);

module.exports = request;