/*angular.
  module('work').
  component('work', {
    templateUrl: 'views/work.template.html',
    controller: ['Project',
      function workController(Project) {
        this.projects = Project.query();
    }]
  });*/

  angular.
    module('work').
    component('work', {
      templateUrl: 'views/work.template.html',
      controller: ['$attrs','Database',
        function workController($attrs, Database) {
          var self = this;
          Database.query({collection:'work'},function(projects){
            self.projects = projects;
          });
        }
      ]
  });
