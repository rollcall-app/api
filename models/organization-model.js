var mongoose = require('mongoose');
var PointCategory = require('./point-category').schema;

var Organization = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    point_cateogries: [PointCategory],
    users: [{
        type: String,
        required: false
    }],
    qr_code: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Organization', Organization);