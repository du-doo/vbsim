var targetpositionLookControls;
var targetForlookControls = document.querySelector('rig');
AFRAME.registerComponent('set-target-position', {

  init: function() {
    
    var el = this.el;
    targetpositionLookControls = el.getAttribute('position');
    el.setAttribute('position', {targetpositionLookControls});

  },

  
});