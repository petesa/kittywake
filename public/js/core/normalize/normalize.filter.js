angular.
  module('core').
  filter('normalize', function() {
    return function(input) {
      return input.toLowerCase().replace(/\s+/g, '-');
    };
  });
