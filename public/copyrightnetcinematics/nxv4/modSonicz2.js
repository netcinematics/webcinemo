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

  if(!nx.ui || nx.ui.audioToggle1){nx.ui.audioToggle1 = $('#audioToggle1');} //good ui-.
  nx.ui.audioToggle1.click(function(){ 
      // debugger;
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



 }); //schedule in manifest for ready callback-.




/******************************-UI-**********************************/



/******************************-MODULE-**********************************/
nx.sonics.stopAllSonics = function(){
    //STOP ANY sonic.track THAT IS PLAYING-.
    // if(nx.sonics.footsteps1.isPlaying){nx.sonics.footsteps1.stop();}
    if(nx.sonics.breakBeatTheme1.isPlaying){nx.sonics.breakBeatTheme1.stop();}
    if(nx.sonics.fightScene1.isPlaying){nx.sonics.fightScene1.stop();}
    if(nx.sonics.fightScene2.isPlaying){nx.sonics.fightScene2.stop();}
    if(nx.sonics.goodTimes2.isPlaying){nx.sonics.goodTimes2.stop();}
    if(nx.sonics.exploreLoop1.isPlaying){nx.sonics.exploreLoop1.stop();}
    if(nx.sonics.spaceTrack2.isPlaying){nx.sonics.spaceTrack2.stop();}
    if(nx.sonics.griegFootsteps2.isPlaying){nx.sonics.griegFootsteps2.stop();}
    // if(nx.sonics.waltzFlowers2.isPlaying){nx.sonics.waltzFlowers2.stop();}
    // if(nx.sonics.footsteps1.isPlaying){nx.sonics.footsteps1.stop();}
    if(nx.sonics.spaceWind3.isPlaying){nx.sonics.spaceWind3.stop();}

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
        var mobileVol = (nx.mobile===0)?1:0.022;
    // nx.sonics.footsteps1= new BABYLON.Sound("footsteps1","./copyrightnetcinematics/sonicz/nxStepsAndDoor3.mp3", nx.scene, null, { loop: false, autoplay: false });
    // nx.sonics.waltzFlowers2= new BABYLON.Sound("waltzFlowers2","./copyrightnetcinematics/sonicz/nxWaltzFlowers2.mp3", nx.scene, null, { loop: false, autoplay: false, volume:mobileVol });
    // nx.sonics.waltzFlowers2= new BABYLON.Sound("waltzFlowers2","./copyrightnetcinematics/sonicz/nxWaltzFlowers3.mp3", nx.scene, function ready(){
    nx.sonics.griegFootsteps2= new BABYLON.Sound("griegFootsteps2","./copyrightnetcinematics/sonicz/nxGreigmix5a.mp3", nx.scene, function ready(){
    }, { loop: false, autoplay: false });


    if(nx.mobile){
      BABYLON.Engine.audioEngine.setGlobalVolume(2); //0.02 is on the quiet side.
    }else{
      BABYLON.Engine.audioEngine.setGlobalVolume(0.8); //0.02 is on the quiet side.
    }
    nx.sonics.loaded=1;
    nx.sonics.on=1;
    setTimeout(function(){
        //TODO: load at scene time.
    nx.sonics.blip2= new BABYLON.Sound("blipIn1","./copyrightnetcinematics/sonicz/nxBlip2b.mp3", nx.scene, null, { loop: false, autoplay: false, volume:2.22 });
    nx.sonics.sonicBoom1 = new BABYLON.Sound("bg1","./copyrightnetcinematics/sonicz/nxBoomCoreWind3.mp3",nx.scene,null,{loop:false,autoplay:false, volume:0.04});
        nx.sonics.themeTrack1= new BABYLON.Sound("theme1","./copyrightnetcinematics/sonicz/nxTheme1Phaser1.mp3", nx.scene, null, { loop: false, autoplay: false, volume:mobileVol });
        nx.sonics.breakBeatTheme1= new BABYLON.Sound("breakBeat1","./copyrightnetcinematics/sonicz/nxSpaceBreakBeat4.mp3", nx.scene, null, { loop: false, autoplay: false });
        nx.sonics.fightScene1= new BABYLON.Sound("fightScene1","./copyrightnetcinematics/sonicz/nxFightLoop1.mp3", nx.scene, null, { loop: false, autoplay: false });
        nx.sonics.fightScene2= new BABYLON.Sound("fightScene2","./copyrightnetcinematics/sonicz/nxFightScene2.mp3", nx.scene, null, { loop: false, autoplay: false });
        nx.sonics.goodTimes2= new BABYLON.Sound("goodTimes2","./copyrightnetcinematics/sonicz/nxGoodTimes2.mp3", nx.scene, null, { loop: false, autoplay: false });
        nx.sonics.exploreLoop1= new BABYLON.Sound("exploreLoop1","./copyrightnetcinematics/sonicz/nxExploreLoop1.mp3", nx.scene, null, { loop: false, autoplay: false });
        nx.sonics.spaceTrack2= new BABYLON.Sound("spaceTrack2","./copyrightnetcinematics/sonicz/nxSpaceTrack6.mp3", nx.scene, null, { loop: false, autoplay: false, volume:mobileVol });
// debugger;
        nx.sonics.spaceWind3= new BABYLON.Sound("spaceWind3","./copyrightnetcinematics/sonicz/nxSpaceWind3.mp3", nx.scene, null, { loop: false, autoplay: false, volume:0.44 });

        nx.sonics.initLoopz();

    },3000)


    

}
nx.sonics.createSonics();





/*
Introducing SONIC~LOOPZ.
3DWEB~MUSICVIDZ in BABYLON - 2020.

:grin:

Because Wurld needs BABYLON MusicVidz.
Everyone will LUV them and so - you should make one.
Yes YOU! Join the falconarmy.
JK. Here it is.
*/

//*****************-SONICLOOPZ-*************-.
//DESCRIPTION: self-removing, audio triggerz-.
//USAGE: nx.sonics.breakBeatTheme1.initLoopz();
nx.sonics.initLoopz = function(){
  nx.sonics.breakBeatTheme1.initLoopz = function(){
    if(nx.sonics && nx.sonics.on && nx.sonics.breakBeatTheme1){ nx.sonics.breakBeatTheme1.play(); }  //BREAKBEAT THEME-.
    nx.sonics.breakBeatTheme1.loopDamper=0;
    nx.scene.registerBeforeRender(function () { 
      if(++nx.sonics.breakBeatTheme1.loopDamper%2!=0){return} //frame-damper-.
      if(nx.sonics.breakBeatTheme1.isPlaying&&!nx.sonics.breakBeatTheme1.endSound){ nx.sonics.breakBeatTheme1.endSound=1; } //init
      else if(!nx.sonics.breakBeatTheme1.isPlaying&&nx.sonics.breakBeatTheme1.endSound){ //done
        nx.sonics.breakBeatTheme1.endSound=0; nx.scene.unregisterBeforeRender(breakBeatSoundEndLoopz); /*self-removing-.*/
        if(nx.sonics){nx.sonics.stopAllSonics()}
        nx.sonics.fightScene1.initLoopz();
      } //done
    });
  }
  nx.sonics.fightScene1.initLoopz = function(){
    if(nx.sonics && nx.sonics.on && nx.sonics.fightScene1){ nx.sonics.fightScene1.play(); }  //fightScene1 THEME-.
    nx.sonics.fightScene1.loopDamper=0;
    nx.scene.registerBeforeRender(function () { 
      if(++nx.sonics.fightScene1.loopDamper%2!=0){return} //frame-damper-.
      if(nx.sonics.fightScene1.isPlaying&&!nx.sonics.fightScene1.endSound){ nx.sonics.fightScene1.endSound=1; } //init
      else if(!nx.sonics.fightScene1.isPlaying&&nx.sonics.fightScene1.endSound){ //done
        nx.sonics.fightScene1.endSound=0; nx.scene.unregisterBeforeRender(breakBeatSoundEndLoopz); /*self-removing-.*/
        if(nx.sonics){nx.sonics.stopAllSonics()}
        // nx.sonics.fightScene2.initLoopz();
        nx.sonics.exploreLoop1.initLoopz();
      } //done
    });
  }
  nx.sonics.fightScene2.initLoopz = function(){
    if(nx.sonics && nx.sonics.on && nx.sonics.fightScene2){ nx.sonics.fightScene2.play(); }  //fightScene2 THEME-.
    nx.sonics.fightScene2.loopDamper=0;
    nx.scene.registerBeforeRender(function () { 
      if(++nx.sonics.fightScene2.loopDamper%2!=0){return} //frame-damper-.
      if(nx.sonics.fightScene2.isPlaying&&!nx.sonics.fightScene2.endSound){ nx.sonics.fightScene2.endSound=1; } //init
      else if(!nx.sonics.fightScene2.isPlaying&&nx.sonics.fightScene2.endSound){ //done
        nx.sonics.fightScene2.endSound=0; nx.scene.unregisterBeforeRender(breakBeatSoundEndLoopz); /*self-removing-.*/
        if(nx.sonics){nx.sonics.stopAllSonics()}
        // nx.sonics.exploreLoop1.initLoopz();
        nx.sonics.goodTimes2.initLoopz();
      } //done
    });
  }
  nx.sonics.exploreLoop1.initLoopz = function(){
    if(nx.sonics && nx.sonics.on && nx.sonics.exploreLoop1){ nx.sonics.exploreLoop1.play(); }  //exploreLoop1 THEME-.
    nx.sonics.exploreLoop1.loopDamper=0;
    nx.scene.registerBeforeRender(function () { 
      if(++nx.sonics.exploreLoop1.loopDamper%2!=0){return} //frame-damper-.
      if(nx.sonics.exploreLoop1.isPlaying&&!nx.sonics.exploreLoop1.endSound){ nx.sonics.exploreLoop1.endSound=1; } //init
      else if(!nx.sonics.exploreLoop1.isPlaying&&nx.sonics.exploreLoop1.endSound){ //done
        nx.sonics.exploreLoop1.endSound=0; nx.scene.unregisterBeforeRender(breakBeatSoundEndLoopz); /*self-removing-.*/
        if(nx.sonics){nx.sonics.stopAllSonics()}
        nx.sonics.fightScene2.initLoopz();
        // nx.sonics.goodTimes2.initLoopz();
      } //done
    });
  }
  nx.sonics.goodTimes2.initLoopz = function(){
    if(nx.sonics && nx.sonics.on && nx.sonics.goodTimes2){ nx.sonics.goodTimes2.play(); }  //goodTimes2 THEME-.
    nx.sonics.goodTimes2.loopDamper=0;
    nx.scene.registerBeforeRender(function () { 
      if(++nx.sonics.goodTimes2.loopDamper%2!=0){return} //frame-damper-.
      if(nx.sonics.goodTimes2.isPlaying&&!nx.sonics.goodTimes2.endSound){ nx.sonics.goodTimes2.endSound=1; } //init
      else if(!nx.sonics.goodTimes2.isPlaying&&nx.sonics.goodTimes2.endSound){ //done
        nx.sonics.goodTimes2.endSound=0; nx.scene.unregisterBeforeRender(breakBeatSoundEndLoopz); /*self-removing-.*/
        if(nx.sonics){nx.sonics.stopAllSonics()}
        nx.sonics.themeTrack1.initLoopz();
      } //done
    });
  }
  nx.sonics.themeTrack1.initLoopz = function(){
    if(nx.sonics && nx.sonics.on && nx.sonics.themeTrack1){ nx.sonics.themeTrack1.play(); }  //themeTrack1 THEME-.
    nx.sonics.themeTrack1.loopDamper=0;
    nx.scene.registerBeforeRender(function () { 
      if(++nx.sonics.themeTrack1.loopDamper%2!=0){return} //frame-damper-.
      if(nx.sonics.themeTrack1.isPlaying&&!nx.sonics.themeTrack1.endSound){ nx.sonics.themeTrack1.endSound=1; } //init
      else if(!nx.sonics.themeTrack1.isPlaying&&nx.sonics.themeTrack1.endSound){ //done
        nx.sonics.themeTrack1.endSound=0; nx.scene.unregisterBeforeRender(breakBeatSoundEndLoopz); /*self-removing-.*/
        if(nx.sonics){nx.sonics.stopAllSonics()}
        nx.sonics.spaceTrack2.initLoopz();
      } //done
    });
  }
  nx.sonics.spaceTrack2.initLoopz = function(){
    if(nx.sonics && nx.sonics.on && nx.sonics.spaceTrack2){ nx.sonics.spaceTrack2.play(); }  //spaceTrack2 THEME-.
    nx.sonics.spaceTrack2.loopDamper=0;
    nx.scene.registerBeforeRender(function () { 
      if(++nx.sonics.spaceTrack2.loopDamper%2!=0){return} //frame-damper-.
      if(nx.sonics.spaceTrack2.isPlaying&&!nx.sonics.spaceTrack2.endSound){ nx.sonics.spaceTrack2.endSound=1; } //init
      else if(!nx.sonics.spaceTrack2.isPlaying&&nx.sonics.spaceTrack2.endSound){ //done
        nx.sonics.spaceTrack2.endSound=0; nx.scene.unregisterBeforeRender(breakBeatSoundEndLoopz); /*self-removing-.*/
        if(nx.sonics){nx.sonics.stopAllSonics()}
        nx.sonics.breakBeatTheme1.initLoopz();
      } //done
    });
  }

}
// nx.sonics.initLoopz();
/*
I hear you loud and clear. 
What is all this crazy madness aFalconMan?
Well have a seat I'll show you! 
Are you sitting? Jk.
> QUESTION: why COMPRESS all this USELESS CODE, into COMPACT WASTE OF SPACE?
Because it is ATOMIC. 
Whut?
> why bother with it?
Because it is how HUNDREDS of animations can be applied CINEMATICALLY.
:grin:
<i>only if they are ATOMIC</i> The KEY to CINEMATICS.

> You cannot do 3DWEBCINEMATICS in BABYLON without ATOMICITY-.

- AFalconsLaw.

That is why ATOMIC. That is why ATOMICLOOPZ and ATOMICANMZ. Coming to BABYLON - 2020.

Does that sound cool?

:grin:

Check it out!

3DWEBMOVIZ
3DWEBFLIX
3DWEBSONICZ
3DWEBVIDZ!

:eagle: 
*/




nx.setMasterManifest(); //signal success and await-.

// });