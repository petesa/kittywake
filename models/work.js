var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Work = new Schema({
    name: String,
    description: String,
    thumbnail: String,
    media: { type : Array , "default" : [{
      alt: String,
      type: String,
      src: String
    }] }
});

module.exports = mongoose.model('Work', Work, 'work');
