


AFRAME.registerComponent('read-from-json-file', {
        
      schema: {},
      init: function () {
       
        var xmlhttp = new XMLHttpRequest();
        var url = "http://intersim.glitch.me/getuserlist";

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log( "RESPONSE TO GET DATA FROM SERVER", myArr);
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();            
          
}});


//TODO  MAYO TODO "!!!!!!!!!!! var json = JSON.parse(xhr.responseText); - cause problem ayaya
AFRAME.registerComponent('write-to-json', {
        
      schema: {},
      init: function () {  
      //tick: function () {       
        var position =  this.el.getAttribute('position');
        var data = JSON.stringify({
          "text": "hello world from the json file","text2": "second row","text3": "final row"
        });
        
        console.log(data)

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.error(this.responseText);
            
          }
        });

        xhr.open("POST", "http://intersim.glitch.me/pospost");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("postman-token", "e1c9874a-721c-35a9-e338-541460b0f531");

        xhr.send(data);

}});
        
        
        
        



