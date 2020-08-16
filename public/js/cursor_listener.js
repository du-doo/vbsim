var b = "nonn";
AFRAME.registerComponent('cursor-listener-c', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
     // lastIndex = (lastIndex + 1) % COLORS.length;
     // this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    b = "toA";
    
    console.log(b);
    
    });
  }
});

AFRAME.registerComponent('cursor-listener-b', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
     // lastIndex = (lastIndex + 1) % COLORS.length;
     // this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    b = "toB";
    
    console.log(b);
    
    });
  }
});


AFRAME.registerComponent('cursor-listener-a', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
     // lastIndex = (lastIndex + 1) % COLORS.length;
     // this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    b = "toC";
    
    console.log(b);
    
    });
  }
});



AFRAME.registerComponent('spawn-position-onclick', {
  tick: function () {
    var radius = 2;
    var randompos = Math.floor(Math.random() * 50); 
    var pos = randompos/10;
    var el = this.el;      
     if(b == "toA"){
                    el.setAttribute('position', {x: 10, y: 0, z: 15.3});  b = false;
                          
     } 
   if(b == "toB"){
                    el.setAttribute('position', {x: 0, y: 0, z: 14});  b = false;
                     
     } 
   if(b == "toC"){
                    el.setAttribute('position', {x: -10, y: 0, z: 13});  b = false;
                      
     } 
  }
});



