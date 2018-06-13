
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
        //AndroidFullScreen.immersiveMode();
        AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN | AndroidFullScreen.SYSTEM_UI_FLAG_LOW_PROFILE);
      }catch(e){}
    }
};
