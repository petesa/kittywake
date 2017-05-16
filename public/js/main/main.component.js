angular.
  module('main').
  component('main', {
    templateUrl: 'views/main.template.html',
    controller: ['$routeParams',
      function mainController($routeParams) {
        var self = this;
        self.menuState = "closed";
        self.toggleMenu = function toggleMenu(state) {
          $('#all-views.open').addClass('transition');
          if(typeof state !== 'undefined')
            self.menuState = state;
          else
            self.menuState = self.menuState == "open" ? "close" : "open";
          setTimeout(function(){
            $('#all-views').removeClass('transition');
          }, 1000)
        }
    }]
  });
