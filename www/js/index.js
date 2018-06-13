
var app = {
    initialize: function() {
        this.bindEvents();
        try{
          window.plugins.insomnia.keepAwake(function(){alert('ok')});
        }catch(e){
          alert('insomnia error', e)
        }
    },
    bindEvents: function() {
      document.addEventListener("backbutton", function(e) {e.preventDefault();}, false);
    },
};
