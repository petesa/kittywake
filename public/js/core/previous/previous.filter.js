angular.
  module('core').
  filter('previous', function() {
    return function(input) {
      var arr = input.split('/');
      arr.pop();
      return( arr.join('/') );
    };
  });
