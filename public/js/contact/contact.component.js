angular.
  module('contact').
  component('contact', {
    templateUrl: 'views/contact.template.html',
    controller: ['Email',
      function contactController(Email) {
        var self = this;
        this.email = "";
        this.message = "";

        self.verify = function(){
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(re.test(self.email))
            $("#send-btn").prop('disabled', false);
          else
            $("#send-btn").prop('disabled', true);
        }

        self.sendEmail = function(){
          var data = {
            email: self.email,
            message: self.message
          }
          var success = function(response){
            self.response = response.data;
            $("input[type=text], textarea").val("");
          }
          var error = function(error){
            console.log(error);
          }
          Email.send(data, success, error);
        }
    }]
  });
