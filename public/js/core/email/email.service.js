angular.
  module('core.email').
  factory('Email', ['$http',
    function($http) {
      return{
        send: function(emailData,success, error){
          $http.post("/email/", emailData).then(success, error);
        }
      };
    }
  ]);
