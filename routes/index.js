var express = require('express');
var router = express.Router();
var schemas = {};
    schemas.work = require('../models/work');
    schemas.text = require('../models/text');
var app = express();

router.get('/api/:collection', function(req, res) {

    schemas[req.params.collection].find(function(err, texts) {
      if (err)
        return console.error(err);
      res.json(texts);
    });

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
  var transporter = nodemailer.createTransport('smtps://pedro.sanchezlira%40gmail.com:sprezzaturaSjalvklart37@smtp.gmail.com');

  // setup e-mail data with unicode symbols
  var mail = req.body.email;
  var message = req.body.message;

  var mailOptions = {
    from: '"Pedro Sanchez Lira" <pedro.sanchezlira@gmail.com>', // sender address
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

/* GET home page. */
router.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
});

module.exports = router;
