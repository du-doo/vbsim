var el = document.querySelector('#environmentmodel');
        el.addEventListener('model-loaded', function (e) {
          e.detail.model.traverse(function (node) {
            if ( node.isMesh ) node.material.alphaTest = 0.8;
            if( node.material ) {
                node.material.side = THREE.DoubleSide;
            }
          });
        });