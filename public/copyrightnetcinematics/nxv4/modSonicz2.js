/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No complete distribution without permission.
// For full distribution opportunities contact alpinefalcon@protonmail.com or netcinematics@protonmail.com. 
// If you want to use this code, great. No implied warranty. - (clean) MIT Open-source templates available.
//Contact alpinefalcon@protonmail.com for collaboration opportunities, affiliations, and future ventures.
/**************************-NX-NETCINEMATIX-*******************************************************************/
window.addEventListener('DOMContentLoaded', function(){
console.log('sonic v2 module-loaded')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
if(!nx.sonic){nx.sonic={}}
nx.sonic.toggle=0; //0off 1on
// nx.sub = {num0:0,num1:0} 
/******************************-MODULE-**********************************/
var sonicBtn = $("#sonicBtn");
var playSounds = function(){
    debugger;
    if(nx.sonic.track1){ nx.sonic.track1.play(); }
    if(nx.sonic.blip2){ nx.sonic.blip2.play(); }
    if(nx.sonic.theme1){ nx.sonic.theme1.play(); }
    // nx.sonic.soundObjBlip2.play();
    sonicBtn.html('sound on')
}
sonicBtn.on({ 
    click: function (e) {
        if(!nx.sonic.toggle){
            playSounds();
        } else {
            if(nx.sonic.track1){ nx.sonic.blip2.stop();  }
            if(nx.sonic.track1){ nx.sonic.track1.stop(); }
            if(nx.sonic.track1){ nx.sonic.theme1.stop(); }
            sonicBtn.html('sound off')
        }
        nx.sonic.toggle = !nx.sonic.toggle;
    }
});
/*********************************-CREATE-SOUNDS-******************************/
var createSonicz = function( ){ //
    debugger;
    nx.sonic.track1=new BABYLON.Sound("bg1","./copyrightnetcinematics/sonic/nxBoomCore2cc0.mp3",nx.scene,null,{loop:false,autoplay:true, volume:0.04});
    nx.sonic.blip2= new BABYLON.Sound("blipIn1","./copyrightnetcinematics/sonic/nxBlip2b.mp3", nx.scene, null, { loop: false, autoplay: false });
    BABYLON.Engine.audioEngine.setGlobalVolume(0.8); //0.02 is on the quiet side.
    nx.sonic.loaded=1;
    setTimeout(function(){
    	nx.sonic.theme1= new BABYLON.Sound("theme1","./copyrightnetcinematics/sonic/nxTheme1.ogg", nx.scene, null, { loop: true, autoplay: false });
    },3000)
}
createSonicz();
});