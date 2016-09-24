angular.
  module('text').
  component('text', {
    templateUrl: 'views/text.template.html',
    controller: ['$attrs','Database','$sce',
      function textController($attrs, Database, $sce) {
        var self = this;
        Database.query({collection:'text', name: $attrs.name},function(text){
          self.text = $sce.trustAsHtml(text[0].text);
        });
      }
    ]
});
