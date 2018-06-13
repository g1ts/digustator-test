
var app = {
    initialize: function() {
        this.bindEvents();
        try{
          window.plugins.insomnia.keepAwake();
        }catch(e){
          console.log('insomnia error')
        }
    },
    bindEvents: function() {
      document.addEventListener("backbutton", function(e) {e.preventDefault();}, false);
    },
};
