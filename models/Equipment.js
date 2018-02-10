var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EquipmentSchema = new Schema({

    equipmentDesc: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    quantity : {
        type: Number,
        required: true

    }

});


var equipment = mongoose.model("equipment",EquipmentSchema);

module.exports = equipment;