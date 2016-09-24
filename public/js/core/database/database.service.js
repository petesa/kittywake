angular.
  module('core.database').
  factory('Database', ['$resource',
    function($resource) {
      return $resource('api/:collection', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
