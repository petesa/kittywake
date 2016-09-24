var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Text = new Schema({
    name: String,
    text: String
});

module.exports = mongoose.model('Text', Text, 'text');
