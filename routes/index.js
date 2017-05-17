var express = require('express');
var router = express.Router();
var schemas = {};
    schemas.work = require('../models/work');
    schemas.text = require('../models/text');
    schemas.chatbot = require('../models/chatbot');
var app = express();

router.get('/api/:collection', function(req, res) {
    if(req.params.collection == 'chatbot'){
      //var input = req.query.input;
      var talkParams = {input: req.query.input}
      schemas[req.params.collection].talk(talkParams, function (err, text){
        if (!err){
          console.log(text);
          res.send(text);
        }
      })
    }else{
      schemas[req.params.collection].find(function(err, texts) {
        if (err)
          return console.error(err);
        res.json(texts);
      });
    }
});

/*router.get('/api/work', function(req, res) {

    Work.find(function(err, works) {
      if (err)
        return console.error(err);
      res.json(works);
    });

});*/

router.post('/email',function(req,res){
  var nodemailer = require('nodemailer');

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport('smtps://pedro%40pedroese.com:matan.gaK437@mx.ecloudpanel.com');

  // setup e-mail data with unicode symbols
  var mail = req.body.email;
  var message = req.body.message;

  var mailOptions = {
    from: '"Pedro *S*" <pedro@pedroese.com>', // sender address
    to: 'pedro.sanchez@hyperisland.se', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b><p>'+mail+' ha escrito</p><p>'+message+'</p>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    res.send("Yaaay!!! You just send me an email.");
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
});

/*router.get('*', function(req, res, next){
  if(req.headers.host == 'chatbot.localhost:8080'){  //if it's a sub-domain
    /*req.url = '/chatbot' + req.url;  //append some text yourself
    res.sendfile('./chatbot/index.html');
  }
  next();
});*/

/* GET home page. */
router.get('*', function(req, res) {
  if(req.headers.host == 'pedrobot.pedroese.com'){  //if it's a sub-domain
    res.sendfile('./chatbot/index.html');
  }else{
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  }
});

module.exports = router;
