/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('a module-loaded: DARKBOT')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
// if(!nx.sub){nx.sub={}}
// nx.sub = {num0:0,num1:0} 
nx.darkBot = {};
/******************************-MODULE-**********************************/
//MODULE-READY-RENDERER-MECHANISMO-.
nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
  //local create call here-.
}); //schedule in manifest for ready callback-.


nx.initDarkBot = function(){

  nx.getMasterManifest(function(){ }); //get await spot in line on manifest to loading-count.
 
  // var darkMezmo = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 0, 95, false, 0.5); //MEXMO 

// 
  // setTimeout(function(){
      BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot16c.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot15c.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot14d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot13b.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot12h.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot11e.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot10c  .babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot9i.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot8c.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot8d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot6c.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot4e.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot3d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot1b.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot2.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
// debugger;
          // nx.darkBot = newMeshes[0]
          nx.darkBot = nx.scene.getMeshByName('darkBotMesh')
          // nx.darkBot.convertToFlatShadedMesh();
          // nx.darkBot.position.copyFrom({x:0,y:10,z:0})
          nx.darkBot.position.copyFrom({x: 23, y: 262, z: -23});
          nx.darkBot.rotation.y = -0.7;


          
          nx.darkBotSkeleton = skeletons;
          // var darkMezmo = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 0, 30, false, 1); 

          // nx.initDarkBotHover();
          

          nx.initDarkBotShadow();
          // nx.darkOrbL = nx.scene.getMeshByName('darkOrbL')
          // nx.darkOrbR = nx.scene.getMeshByName('darkOrbR')

                  
          // // nx.darkOrbL = nx.scene.getMeshByName('darkOrbL') ; //darkOrbL
          // nx.darkOrbL = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene); 
          // // nx.darkOrbL.attachToBone(nx.orbySkeleton[0].bones[35], nx.orbyMesh);
          // nx.darkOrbL.attachToBone(nx.darkBotSkeleton[0].bones[3], nx.darkBot);
          // nx.darkOrbL.position.y = 0.1

          // nx.orbyMesh.camFocusTgt.position = new BABYLON.Vector3(0, 0, 0);

          nx.setMasterManifest(); //after assetLoad, signal asset arrived, needs to be done for every asset-.

      });
  // },10); //Necessary???

  // var darkBotTask = nx.assetsManager.addMeshTask("darkbot task", "", "./copyrightnetcinematics/3d/", "darcbot1.babylon");
  // darkBotTask.onSuccess = function (task) {
  //     nx.darkbot = task.loadedMeshes[0]
  //     // nx.darkbot.position = new BABYLON.Vector3(0,15,350);
  //     // nx.darkbot.position.copyFrom({x: 7, y: 265.5, z: -6});
  //     nx.darkbot.position.copyFrom({x: 10, y: 10, z: -10});
  //     nx.darkbot.rotation.y = -0.7;

      // nx.setMasterManifest(); //after assetLoad, signal asset arrived, needs to be done for every asset-.

  //     // nx.darkbot.showBoundingBox();
  //     // if(nx.editz.createMasterEditor){ nx.editz.createMasterEditor(nx.darkbot); }  //GOOD-POS-EDITOR-example-.
  // }


  nx.setMasterManifest(); //signal success and await-.

}

nx.initDarkBot();

nx.initDarkBotShadow = function(){


  /*********************************CREATE-SHADOW******************************/
    if(!nx.dBShadowLight){ //one-time- LIGHT - FOR - SHADOWS-.
        nx.dBShadowLight = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, -0.2), nx.scene);
        nx.dBShadowLight.position = new BABYLON.Vector3(0,0,0);
        nx.dBShadowLight.position.copyFrom( {x:0, y:24, z: 0})
        nx.dBShadowLight.diffuse = new BABYLON.Color3(1, 0.2, 0.2);
        nx.dBShadowLight.specular = new BABYLON.Color3(1, 0, 0);
        nx.dBShadowLight.intensity = 0.22;
    }
    var shadowMapSIZE = 24; //can be re-instanced by calling initShadows(); But doesnt seem necessary.
    nx.dBShadow = new BABYLON.ShadowGenerator(shadowMapSIZE, nx.dBShadowLight);
    nx.dBShadow.useVarianceShadowMap = false; //default-.
    nx.dBShadow.usePoissonSampling = false; //better shadows but slower-.
    // nx.dBShadow.useExponentialShadowMap = false; //true default, false is performance boost-.
    nx.dBShadow.useExponentialShadowMap = true; //true default, false is performance boost-.
    nx.dBShadow.useBlurExponentialShadowMap = true; //blur the shadow, better, slower-.
    nx.dBShadow.blurScale = 1;
    nx.dBShadow.blurBoxOffset = 4;
    nx.dBShadow.usePercentageCloserFiltering = false; //v3.2, webgl2 shadows-.
    nx.dBShadow.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
    nx.dBShadow.useContactHardeningShadow = false;
    setTimeout(function(){ //delay shadows to TEST rendering optimization-.
      // nx.dBShadow.getShadowMap().renderList.push(nx.orbyMesh);
      if(!nx.darkBot){debugger;}
      nx.dBShadow.getShadowMap().renderList.push(nx.darkBot);
    },3000);

    nx.dBShadowDamper=0;
    if(nx.dBShadowDamper===0){ //one-time-.
        nx.scene.registerBeforeRender(function () {
            if(++nx.dBShadowDamper%100!=0){return} //DECIDAMPER-.
            if(nx && nx.darkBot && nx.dBShadowLight){
                var lightPOS = new BABYLON.Vector3.Zero(); //follow light
                lightPOS.copyFrom(nx.darkBot.position);
                lightPOS.y += 24;
                nx.dBShadowLight.position.copyFrom(lightPOS)
            }
        });
    }

}

nx.initDarkBotHover = function(){


  // nx.darkBot.hoverAlpha += 0.05; //orby-hover-.
  // nx.orbyMesh.position.y += 0.01 * Math.cos(nx.anmz.orby.hoverAlpha);
  // nx.rayLines1 = [];
  // var rayBouncer1 = 1;
  // var rayDistance1 = 44;
  // var raySpeed1 = 0.03;
  // var zapBotLaserOffset1; //todo move this up here and add to nx.zapbotMesh1
  // var xVectorDetectionRange = -10;
  // nx.zapbotMesh1.chaseDistance = 20;
  nx.darkBot.hoverAlpha = 0; //bot hover-.
  // nx.zapbotMesh1.searching = 1;
  // nx.zapbotMesh1.delayOnTargeting = 500;
  // nx.zapbotMesh1.zapOffset = 

  nx.scene.registerBeforeRender(function() { //hover, search and chase sequence-.
      //TODO NEED TO DAMPEN THIS-.
      //TODO if in frustum
      nx.darkBot.hoverAlpha += 0.05; //bot-hover-.
      nx.darkBot.position.y += 0.01 * Math.cos(nx.darkBot.hoverAlpha);
  });

}





// });