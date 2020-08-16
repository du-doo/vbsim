var con = document.getElementById('templatepool');
                               var  xhr = new XMLHttpRequest();

                              xhr.onreadystatechange = function (e) { 
                                    if (xhr.readyState == 4 && xhr.status == 200) {
                                      con.innerHTML = xhr.responseText;
                                    }
                              }

                              xhr.open("GET", "https://ridesim.glitch.me/getvehicles", true);
                              xhr.setRequestHeader('Content-type', 'text/html');
                              xhr.send();

// function wait(ms){
//    var start = new Date().getTime();
//    var end = start;
//    while(end < start + ms) {
//      end = new Date().getTime();
//   }
// }

// wait(7000);