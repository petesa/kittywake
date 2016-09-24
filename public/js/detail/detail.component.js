/*angular.
  module('detail').
  component('detail', {
    templateUrl: 'views/detail.template.html',
    controller: ['$routeParams', 'Project',
      function detailController($routeParams, Project) {
        var self = this;
        Project.query({name: $routeParams.project}, function(projects){
          self.project = projects[0];
        });
      }
    ]
  });*/

  angular.
    module('detail').
     directive('media', function ($compile) {
      return {
          scope: false,
          restrict: 'E',
          link: function (scope, elem, attrs, ctrl) {
              var html = "";
              switch (scope.item.type) {
                case "image":
                  html = '<img class="detail-item" src="'+scope.item.src+'" alt="'+scope.item.alt+'">';
                  break;
                case "video":
                  /*html ='<video class="detail-item" controls>'+
                          '<source src="'+scope.item.src+'.mp4" type="video/mp4">'+
                          '<source src="'+scope.item.src+'.webm" type="video/webm">'+
                          '<source src="'+scope.item.src+'.ogg" type="video/ogg">'+
                          '<p>There should be a video here, but it wasn\'t available in 1996, the year you updated your browser.</p>.'+
                        '</video>';*/
                    html = '<div class="iframe_wrapper detail-item"><div class="h_iframe"><iframe src="'+scope.item.src+'" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>';
                break;
                default:

              }

              elem.replaceWith($compile(html)(scope));
              var sliderWrap = $('#slider-wrap');
              if (scope.$last){
                  var items = $('.detail-item');
                  if(items.length > 1){
                    var slider = $('#slider');

                    var first = items.first();
                    var last = items.last();

                    first.clone().appendTo(sliderWrap);
                    last.clone().prependTo(sliderWrap);

                    $('.detail-item').css({ width: ( (100/$('.detail-item').length) - 1)+"%"});

                    slider.scrollLeft( slider.outerWidth() );
                }
              }
              sliderWrap.css({width:($('.detail-item').length * 100)+"%"})
          }
      }
    }).
    component('detail', {
      templateUrl: 'views/detail.template.html',
      controller: ['$stateParams', '$filter','Database', '$timeout', '$scope', '$animate','$sce',
        function detailController($stateParams, $filter, Database, $timeout, $scope, $animate, $sce) {
          var self = this;
          self.currentIndex = 0;

          Database.query({collection:'work'},function(projects){
            var normalized = $stateParams.project.replace(/\b\w/g, function(l){ return l.toUpperCase() }).replace(/-/g, ' ');
            var projects = $filter("filter")(projects, {name: normalized});
            self.project = projects[0];
            self.project.description = $sce.trustAsHtml(projects[0].description);

          });

          $('#slider').swipe({
            swipeLeft:function(event, direction, distance, duration, fingerCount){
              $('.slider-btn').not('.last').first().click();
            },
            swipeRight:function(event, direction, distance, duration, fingerCount){
              $('.slider-btn.last').first().click();
            }
          });

          var container = $('.secondary-view');

          setTimeout(function(){
            $('#work').css({display:'none'})
          }, 2000)


          /*$animate.on('enter', container,
             function callback(element, phase) {
               $('.secondary-view').css({width:$('.secondary-view').outerWidth()+"px"})
             }
          )

          $animate.on('leave', container,
             function callback(element, phase) {
               $('.secondary-view').css({width:$('.secondary-view').outerWidth()+"px"})
             }
          )*/

          $('#slider').resize( function(){
            /*self.setScroll(self.currentIndex);*/
            var slider = $('#slider');
            slider.scrollLeft((self.currentIndex+1) * slider.outerWidth())
          })

          self.setScroll = function setScroll(index) {

            var slider = $('#slider');
            var sliderWrap = $('#slider-wrap')

            var left = (index + 1) * slider.outerWidth();
            var snapshot = index;

            slider.find('video').each(function(){
              $(this).get(0).pause();
            })

            slider.animate({scrollLeft:left}, function(){
              if(snapshot > self.project.media.length-1){
                slider.scrollLeft( slider.outerWidth() );
              }else if(snapshot < 0){
                slider.scrollLeft( self.project.media.length * slider.outerWidth() );
              }

            });

            if(index > self.project.media.length-1){
              index = 0;
            }else if(index < 0){
              index = self.project.media.length - 1;
            }

            self.currentIndex = index;
          };

        }
      ]
  });
