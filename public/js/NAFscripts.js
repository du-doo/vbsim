
AFRAME.registerComponent('get-client-id', {
        
       tick: function () {     
    //     var clientIsConnected = NAF.connection.isConnected();
    //         if(clientIsConnected == true && onceBool == true) {
    //           console.error('------------------------------CLIENT ID ---------- =', NAF.clientId);
    //           onceBool = false;
    //         }
       
       document.body.addEventListener('clientConnected', function (evt) {
            console.log('CLIENT CONNETED =', NAF.clientId);
            this.id = evt.detail.clientId;             
       });         
        // var el = this.el;
         //var k = 'kstring';
         //var center = el.getAttribute('position');
         
     //   NAF.connection.subscribeToDataChannel('position', function (){NAF.connection.broadcastDataGuaranteed('position', center)});              
      }
    });

AFRAME.registerComponent('query-selector-example', {
  init: function () {
   // this.entities = document.querySelectorAll('#avatar-body');
   // console.error(this.entities);
    
  },
  
  tick: function () {
    
    
    NAF.utils.getNetworkedEntity(this.el);
    console.error(NAF.utils.getNetworkedEntity(this.el));
    // Don't call query selector in here, query beforehand.
       document.body.addEventListener('clientConnected', function (evt) {
        //console.error(NAF.connection.getConnectedClients());
       //  console.error(NAF.utils.getNetworkedEntity());
        // console.log('CLIENT CONNETED =', NAF.connection.getConnectedClients());
        // console.error(NAF.utils.getNetworkedEntity());
         
      });  
    
    document.body.addEventListener('clientConnected', function (evt) {
            
      this.entities = NAF.entities;
      //console.log('CLIENT CONNETED =', this.id.components);
      NAF.log.write('ENTITIES', NAF.clientId);
      
      for (var id in this.entities) {
      var entityCreator = NAF.utils.getCreator(this.entities);
      NAF.log.write('ENTITIES', this.entities[id]);
        }
      
      
         
  });
  }
});
