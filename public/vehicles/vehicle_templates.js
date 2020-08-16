
const templateeElement = document.querySelector('#vehicleTemplates');
const avatarContent = '<template id="avatar-template"><a-entity class="avatar"></a-entity></template>'
const karosaB732 = '<template id="avatar-karosab732"><a-entity class="karosabodyavatar"><a-obj-model class="objmodelclass" src="https://raw.githubusercontent.com/mayorian/glitchproject/master/DrivingSimAFRAME/karosab732/karosab732.obj" mtl="https://raw.githubusercontent.com/mayorian/glitchproject/master/DrivingSimAFRAME/karosab732/karosab732.mtl"  scale="1 1 1" rotation="0 0 0">  </a-obj-model><a-text class="idtext" visible="true" rotation="0 183 0" position="0.71036 2.98203 -9.18899" text="value: -" scale="1.5 1.5 1"></a-text></a-entity></template>'       
const karosaB952 = '<template id="avatar-karosab732"><a-entity class="karosabodyavatar"><a-obj-model class="objmodelclass" src="https://raw.githubusercontent.com/mayorian/glitchproject/master/DrivingSimAFRAME/karosab951/karosab951.obj" mtl="https://raw.githubusercontent.com/mayorian/glitchproject/master/DrivingSimAFRAME/karosab951/karosab951.mtl"  scale="1 1 1" rotation="0 0 0">  </a-obj-model><a-text class="idtext" visible="true" rotation="0 183 0" position="0.71036 2.98203 -9.18899" text="value: -" scale="1.5 1.5 1"></a-text></a-entity></template>'
const karosaSM   = '<template id="avatar-karosab732"><a-entity class="karosabodyavatar"><a-obj-model class="objmodelclass" src="https://raw.githubusercontent.com/mayorian/glitchproject/master/DrivingSimAFRAME/karosaSx/karosaSM.obj" mtl="https://raw.githubusercontent.com/mayorian/glitchproject/master/DrivingSimAFRAME/karosaSx/karosaSM.mtl"  scale="1 1 1" rotation="0 0 0">  </a-obj-model><a-text class="idtext" visible="true" rotation="0 183 0" position="0.71036 2.98203 -9.18899" text="value: -" scale="1.5 1.5 1"></a-text></a-entity></template>'
        
templateeElement.innerHTML =  avatarContent + karosaB732 + karosaB952 + karosaSM;