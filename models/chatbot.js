var Pandorabot = require('pb-node');

var options = {
  url: 'https://aiaas.pandorabots.com',
  app_id: '1409614710172',
  user_key: '16c0c48a4c081e3a6c06225e50707270',
  botname: 'pedrobot'
};

var Chatbot, callback;
var Chatbot = new Pandorabot(options);

//var Schema = mongoose.Schema;

/*var talkParams = {};
var Chatbot, callback;

bot.talk(talkParams, function (err, res) {
  Chatbot = "";
  if (!err){
    Chatbot = res;
  }
  if( typeof callback == 'function' ){
        callback(Chatbot);
    }
});

module.exports = function(input, cb){
    console.log("input is "+input);
    if(typeof Chatbot != 'undefined'){
        cb(Chatbot);
    } else {
        callback = cb;
    }
}
*/
module.exports = Chatbot;
