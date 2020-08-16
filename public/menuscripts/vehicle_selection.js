

AFRAME.registerComponent("select-vehicle", {
  init: function() {
  var el = this.el
  var sceneEl = document.querySelector("a-scene");
  var player = sceneEl.querySelector("#rig");
  var objmodel = player.querySelector("a-obj-model")
  var sky = sceneEl.querySelector("#skybox")

  document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 32) {
    //sky.setAttribute('visible', false);
    objmodel.setAttribute('src', '#skoda-obj');
    objmodel.setAttribute('mtl', '#skoda-mtl');
    
  }
});
    
    
    
    
  },
  // ick: function() {
  //   var el = this.el;
  //   //el.setAttribute("text", {value: 'User' + userID});
  //   el.setAttribute("text", { value: username });
  // }
});
