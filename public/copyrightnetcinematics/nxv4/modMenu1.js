/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('MENU module-loaded')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
if(!nx.menu){nx.menu={}}
// nx.sub = {num0:0,num1:0} 
/******************************-MODULE-**********************************/


//MODULE-READY-RENDERER-MECHANISMO-.
nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
  //local create call here-.

  //epicMENUacozmoscopeSEQ,epicMENUvortexSEQ,epicMENUnebulaSEQ,epicMENUorbyIntroSEQ,
  //epicMENUspaceIonzGAM,epicMENUshowdownSEQ,epicMENUpipeRideGAM

  $('#epicMENUacozmoscopeSEQ').on('click',function(){
  });
  $('#epicMENUvortexSEQ').on('click',function(){
  });
  $('#epicMENUnebulaSEQ').on('click',function(){
      nx.menu.nebulaSEQ();
  });
  $('#epicMENUorbyIntroSEQ').on('click',function(){
  });
  $('#epicMENUspaceIonzGAM').on('click',function(){
  });
  $('#epicMENUshowdownSEQ').on('click',function(){
  });
  $('#epicMENUpipeRideGAM').on('click',function(){
  });



}); //schedule in manifest for ready callback-.


nx.menu.nebulaSEQ = function(){
    // nx.stopAllCinematicSEQ(); //stop currently running mode, clean up idx.
    // nx.spaceSeqIdx[0] = {on:1}; 
    // nx.runCinematicSequence("SpaceSequence")
    nx.setCinemo({id:'SpaceSequence',start:0});
}





nx.setMasterManifest(); //signal success and await-.
// });