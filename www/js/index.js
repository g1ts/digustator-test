
var app = {
    initialize: function() {
        this.bindEvents();
        setTimeout(function(){
          try{
            window.plugins.insomnia.keepAwake(function(){alert('ok')});
          }catch(e){
            alert('insomnia error', e)
          }
        }, 5000)
    },
    bindEvents: function() {
      document.addEventListener("backbutton", function(e) {e.preventDefault();}, false);
    },
};
