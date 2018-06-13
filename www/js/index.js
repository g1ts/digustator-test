
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
      document.addEventListener("backbutton", function(e) {e.preventDefault();}, false);
      document.addEventListener("deviceready", this.onDeviceReady, false);
    },
    onDeviceReady: function(){
      try{
        window.plugins.insomnia.keepAwake();
      }catch(e){}
      try{
        AndroidFullScreen.leanMode();
      }catch(e){}
    }
};
