/*angular.
  module('sendUsALink').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        /*when('/', {
          template: '<main></main>'
        }).
        when('/work', {
          template: '<work></work>'
        }).
        when('/work/:project', {
          template: '<detail></detail>'
        }).
        when('/contact/', {
          template: '<contact></contact>'
        }).
        otherwise('/');
    }
  ]);
*/

angular.
  module('sendUsALink').
  run(['$rootScope', '$state', '$stateParams',function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
      $rootScope.containerClass = toState.containerClass;
      $('#work').css({display:'block'})
    });
  }]).
  config(['$urlMatcherFactoryProvider','$locationProvider','$stateProvider', '$urlRouterProvider',
    function config($urlMatcherFactoryProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

      $locationProvider.html5Mode(true); // Removes hash from URL when in html5 compatible browser
      $urlMatcherFactoryProvider.strictMode(false); // Treats URLs with and without trailing slash equaly
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('main', {
          url: "/",
          template: "<main></main>",
          containerClass:"one-view"
        })
        .state('work', {
          parent:"main",
          url: "work",
          template: "<work></work>",
          containerClass:"two-views",
          sectionName:"Work"
        })
        .state('work.detail', {
          url: "/:project",
          template: "<detail></detail>",
          containerClass:"two-views three-views",
          sectionName:"Work"
        })
        .state('main.about', {
          url: "about",
          template: "<text name='about'></text>",
          containerClass:"two-views",
          sectionName:"About"
        })
        .state('main.contact', {
          url: "contact",
          template: "<contact></contact>",
          containerClass:"two-views",
          sectionName:"Contact"
        })

    }
]);
