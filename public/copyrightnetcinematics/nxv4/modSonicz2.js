/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No complete distribution without permission.
// For full distribution opportunities contact alpinefalcon@protonmail.com or netcinematics@protonmail.com. 
// If you want to use this code, great. No implied warranty. - (clean) MIT Open-source templates available.
//Contact alpinefalcon@protonmail.com for collaboration opportunities, affiliations, and future ventures.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('sonics v4 module-loaded')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
if(!nx.sonics){nx.sonics={}}
// nx.sonic.toggle=0; //0off 1on
// nx.sub = {num0:0,num1:0} 


//MODULE-READY-RENDERER-MECHANISMO-.
nx.getMasterManifest(function readyRender (){

    // debugger;
    // if(nx.sonic.sonicBoom1){ nx.sonic.track1.play(); }
    // if(nx.sonic.blip2){ nx.sonic.blip2.play(); }
    // if(nx.sonic.theme1){ nx.sonic.theme1.play(); }


 }); //schedule in manifest for ready callback-.




/******************************-UI-**********************************/
if(!nx.ui || nx.ui.audioToggle1){nx.ui.audioToggle1 = $('#audioToggle1');} //good ui-.
nx.ui.audioToggle1.click(function(){ 
    debugger;
  var toggleOn = nx.ui.audioToggle1.hasClass('sonicOff'); //if off toggle on-.
  if(toggleOn){
    nx.ui.audioToggle1.removeClass('sonicOff');
    nx.sonics.on=1;
    
  }else { //toggle off
    nx.ui.audioToggle1.addClass('sonicOff');
    nx.sonics.stopAllSonics();
    nx.sonics.on=0;
  }

  // var toggleOff = nx.ui.pauseBtn2.hasClass('playModeSelector');
  // nx.ui.playModeSelector = $('.playModeSelector'); //remove all selectors-.
  // nx.ui.playModeSelector.removeClass('playModeSelector');
  // if(!toggleOff){ nx.ui.pauseBtn2.addClass('playModeSelector'); }
});

/******************************-MODULE-**********************************/
nx.sonics.stopAllSonics = function(){
    //STOP ANY sonic.track THAT IS PLAYING-.
}

// var sonicBtn = $("#sonicBtn");
// var playSounds = function(){
//     // debugger;
//     if(nx.sonic.track1){ nx.sonic.track1.play(); }
//     if(nx.sonic.blip2){ nx.sonic.blip2.play(); }
//     if(nx.sonic.theme1){ nx.sonic.theme1.play(); }
//     // nx.sonic.soundObjBlip2.play();
//     sonicBtn.html('sound on')
// }
// sonicBtn.on({ 
//     click: function (e) {
//         if(!nx.sonic.toggle){
//             playSounds();
//         } else {
//             if(nx.sonic.track1){ nx.sonic.blip2.stop();  }
//             if(nx.sonic.track1){ nx.sonic.track1.stop(); }
//             if(nx.sonic.track1){ nx.sonic.theme1.stop(); }
//             sonicBtn.html('sound off')
//         }
//         nx.sonic.toggle = !nx.sonic.toggle;
//     }
// });
/*********************************-CREATE-SOUNDS-******************************/
nx.sonics.createSonics = function( ){ //
    // debugger;
    nx.sonics.footsteps1= new BABYLON.Sound("footsteps1","./copyrightnetcinematics/sonicz/368834__georgisound__footsteps-hallway.wav", nx.scene, null, { loop: false, autoplay: true });

    nx.sonics.sonicBoom1 = new BABYLON.Sound("bg1","./copyrightnetcinematics/sonicz/nxBoomCore2cc0.mp3",nx.scene,null,{loop:false,autoplay:false, volume:0.04});
    nx.sonics.blip2= new BABYLON.Sound("blipIn1","./copyrightnetcinematics/sonicz/nxBlip2b.mp3", nx.scene, null, { loop: false, autoplay: false });
    BABYLON.Engine.audioEngine.setGlobalVolume(0.8); //0.02 is on the quiet side.
    nx.sonics.loaded=1;
    nx.sonics.on=1;
    setTimeout(function(){
        nx.sonics.bloopTrack1= new BABYLON.Sound("theme1","./copyrightnetcinematics/sonicz/nxTheme1.ogg", nx.scene, null, { loop: true, autoplay: false });
        nx.sonics.bloopTrack2= new BABYLON.Sound("theme2","./copyrightnetcinematics/sonicz/nxTheme1.ogg", nx.scene, null, { loop: true, autoplay: false });
        nx.sonics.bloopTrack3= new BABYLON.Sound("theme3","./copyrightnetcinematics/sonicz/nxTheme1.ogg", nx.scene, null, { loop: true, autoplay: false });
        nx.sonics.bloopTrack4= new BABYLON.Sound("theme4","./copyrightnetcinematics/sonicz/nxTheme1.ogg", nx.scene, null, { loop: true, autoplay: false });
    	nx.sonics.bloopTrack5= new BABYLON.Sound("theme5","./copyrightnetcinematics/sonicz/nxTheme1.ogg", nx.scene, null, { loop: true, autoplay: false });
    },3000)
}
nx.sonics.createSonics();

nx.setMasterManifest(); //signal success and await-.

// });