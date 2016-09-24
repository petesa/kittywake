angular.
  module('core.project').
  factory('Project', ['$resource',
    function($resource) {
      return $resource('api/work/', {}, {
        query: {
          method: 'GET',
          params: {name: 'projects'},
          isArray: true
        }
      });
    }
  ]);
