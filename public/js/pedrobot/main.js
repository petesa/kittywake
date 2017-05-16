var Subtitles, query_field ,state  = false;
$(function(){
  query_field = $("#query")
  query_field.on({'keydown':enter, 'focus':hilite})
  $("#submit").on({'click':submit})
  $("#subtitles").on({'click':toggleSubs})
  init("standby");
});

function enter(e){
  if(e.keyCode == 13){
    submit(e);
  }
}

function submit(e){
  e.preventDefault();
  init('loading');
  query_field.blur();
  var query = encodeURIComponent(query_field.val());
  if(query.length>0){
      $.ajax({
        url:'/api/chatbot?input='+query,
        success:function(text){
          var res = text.responses;
          respond(res);
        }
      });
  }
}

function toggleSubs(e){
  e.preventDefault();
  var label;
  state = state ? false : true;
  label = state ? "off" : "on";
  c_class = state ? "on" : "off";
  $("#subtitles").removeClass().addClass(c_class).text("Turn subtitles "+label);
  if(typeof Subtitles != "undefined")
    Subtitles.visible = state;
}

function hilite(e){
  $(this).select();
}

function respond(res){
  //init(res);
  init(res);
  Subtitles.visible = state;
  //var animations = new Array('mexico','nk','sotckholm','digital-designer','hobbie', 'hyper','hello','meaning-life','star-wars','weather','shut-up');
}
