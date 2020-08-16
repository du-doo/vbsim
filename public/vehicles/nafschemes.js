NAF.options.useLerp;

NAF.schemas.add({
  template: "#avatar-karosab732",
  components: [
    "position",
    "rotation",
    {
      selector: ".idtext",
      component: "text",
      property: "value"
    }
  ]
});

NAF.schemas.add({
  template: "#avatar-karosab952",
  components: [
    "position",
    "rotation",
    {
      selector: ".idtext",
      component: "text",
      property: "value"
    }
  ]
});

NAF.schemas.add({
  template: "#avatar-karosaSM",
  components: [
    "position",
    "rotation",
    {
      selector: ".idtext",
      component: "text",
      property: "value"
    }
  ]
});


// function wait(ms){
//    var start = new Date().getTime();
//    var end = start;
//    while(end < start + ms) {
//      end = new Date().getTime();
//   }
// }

// wait(7000); 