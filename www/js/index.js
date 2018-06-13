
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
      
      /*try{
        AndroidFullScreen.setSystemUiVisibility(
            AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_STABLE
          | AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
          | AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
          | AndroidFullScreen.SYSTEM_UI_FLAG_HIDE_NAVIGATION
          | AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN
          | AndroidFullScreen.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
      }catch(e){}*/
    }
};
