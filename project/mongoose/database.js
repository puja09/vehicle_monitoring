const mongo=require('mongoose');

const VehicleSchema = mongoose.Schema({

    stateCode: {
        type: String,
        required: true
    },
    stateNum: {
        type: String,
        required: true
    },
    subCode: {
        type: Array,
        default: []
    },
    subNum: {
        type: Int,
        required:true
    },
    temp: {
        type: Float32Array,
        required:true
    },
    humidity: {
        type: Int,
        required:true
    },
    vibration: {
        type: Flo,
        required:true
    }
});

const Vehicle = module.exports = mongoose.model('Vehicle', VehicleSchema);

module.exports.getAllVehicles = function (callback) {
    Vehicle.find(callback);
};
module.exports.getVehicleByDeviceID = function (vehicleID, callback) {
    let query = {
        vehicleID: vehicleID
    }
    Vehicle.find(query, callback)
}
