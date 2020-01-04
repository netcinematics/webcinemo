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
nx.dBot = {};
/******************************-MODULE-**********************************/
//MODULE-READY-RENDERER-MECHANISMO-.
nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
  //local create call here-.
}); //schedule in manifest for ready callback-.


nx.initDarkBot = function(){

  nx.getMasterManifest(function(){ }); //get await spot in line on manifest to loading-count.
 
  // var darkMezmo = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 0, 95, false, 0.5); //MEXMO 
  // var lookUp = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 50, 60, false, 0.5); //lookup

// 
  // setTimeout(function(){
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot18a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot17b.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
      // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "darkbot16c.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
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

nx.dBot.stopHover = 1;
nx.initDarkBotHover = function(){

  if(nx.darkBot.hoverAlpha>0){return} //init once
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
  nx.darkBot.hoverSpeed = 0.03;
  nx.darkBot.hoverAmount = 0.01;
  nx.scene.registerBeforeRender(function darkBotHover() { //hover, search and chase sequence-.

      if(nx.dBot.stopHover===0){return}
      if(nx.dBot.stopHover<0){nx.scene.unregisterBeforeRender(darkBotHover); return}

      //TODO NEED TO DAMPEN THIS-.
      //TODO if in frustum
      nx.darkBot.hoverAlpha += nx.darkBot.hoverSpeed; //bot-hover-.
      nx.darkBot.position.y += nx.darkBot.hoverAmount * Math.cos(nx.darkBot.hoverAlpha);
  });

}

/******************************-DARKBOT-MEZMORAY-*****************************/

// nx.dBot.mezmoLines = [];
nx.dBot.startMezmoRays = function(fnEnd){

// debugger;
    nx.dBot.fnEndMezmo = fnEnd || function(){};

    nx.dBot.lazerBALL1 = BABYLON.Mesh.CreateSphere("nx.dBot.lazerBALL1", 4, 0.5, nx.scene);
    // nx.dBot.lazerBALL1.position.copyFrom({x: -2, y: 2.35, z: -1.3})
    nx.dBot.lazerBALL1.position.copyFrom({x: -1.9, y: 2.35, z: -1.6})
    // nx.dBot.lazerBALL1.setPivotPoint(new BABYLON.Vector3(0, 0, 0)); //spacewaverider pivot
    nx.dBot.lazerBALL1.parent = nx.darkBot;
    nx.dBot.lazerBALL1.visibility = 0

    nx.dBot.lazerBALL2 = BABYLON.Mesh.CreateSphere("nx.dBot.lazerBALL2", 4, 0.5, nx.scene);
    // nx.dBot.lazerBALL2.position.copyFrom({x: 2, y: 2.45, z: -1.3})
    nx.dBot.lazerBALL2.position.copyFrom({x: 1.9, y: 2.45, z: -1.6})
    nx.dBot.lazerBALL2.parent = nx.darkBot;
    nx.dBot.lazerBALL2.visibility = 0




    // return;
      // nx.dBot.centerLazer = new BABYLON.Vector3(0, 0, 0);

      nx.dBot.mezmoRayPts1 = [ //IDENTITY MATRIX-.
        new BABYLON.Vector3(-15, 5, -15),
        new BABYLON.Vector3(-15, 5, 0),
        new BABYLON.Vector3(0, 5, -15),
        new BABYLON.Vector3(-15, 8, -15),
        new BABYLON.Vector3(0, 8, -15),
        new BABYLON.Vector3(-15, 3, -15),
        new BABYLON.Vector3(-15, 3, 0),
        new BABYLON.Vector3(-15, 3, -15),
      ];
      nx.dBot.mezmoRayPts2 = [ //IDENTITY MATRIX-.
        new BABYLON.Vector3(15, 5, -15),
        new BABYLON.Vector3(15, 5, 0),
        new BABYLON.Vector3(0, 5, -15),
        new BABYLON.Vector3(15, 8, -15),
        new BABYLON.Vector3(0, 8, -15),
        new BABYLON.Vector3(15, 3, -15),
        new BABYLON.Vector3(15, 3, 0),
        new BABYLON.Vector3(15, 3, -15),
      ];

      nx.dBot.tempPnt = new BABYLON.Vector3.Zero();

      nx.dBot.offRad = 1; //multiplier
      nx.dBot.offY = 0;
      nx.dBot.mezmoFactory = function(){
        nx.dBot.mezmoRayLines = [];
        for(var i=0; i<nx.dBot.mezmoRayPts1.length; i++){
          nx.dBot.tempPnt.copyFrom({x:nx.dBot.mezmoRayPts1[i].x*nx.dBot.offRad,y:nx.dBot.mezmoRayPts1[i].y+nx.dBot.offY,z:nx.dBot.mezmoRayPts1[i].z*nx.dBot.offRad});
          nx.dBot.tempPnt.copyFrom(nx.dBot.tempPnt.add(nx.dBot.lazerBALL1.position))
          nx.dBot.mezmoRayLines.push([new BABYLON.Vector3(nx.dBot.lazerBALL1.position.x,nx.dBot.lazerBALL1.position.y,nx.dBot.lazerBALL1.position.z),
            new BABYLON.Vector3(nx.dBot.tempPnt.x,nx.dBot.tempPnt.y,nx.dBot.tempPnt.z)]);
        }
        nx.dBot.mezmoRayLines2 = [];
        for(var i=0; i<nx.dBot.mezmoRayPts2.length; i++){
          nx.dBot.tempPnt.copyFrom({x:nx.dBot.mezmoRayPts2[i].x*nx.dBot.offRad,y:nx.dBot.mezmoRayPts2[i].y+nx.dBot.offY,z:nx.dBot.mezmoRayPts2[i].z*nx.dBot.offRad});
          nx.dBot.tempPnt.copyFrom(nx.dBot.tempPnt.add(nx.dBot.lazerBALL2.position))
          nx.dBot.mezmoRayLines2.push([new BABYLON.Vector3(nx.dBot.lazerBALL2.position.x,nx.dBot.lazerBALL2.position.y,nx.dBot.lazerBALL2.position.z),
            new BABYLON.Vector3(nx.dBot.tempPnt.x,nx.dBot.tempPnt.y,nx.dBot.tempPnt.z)]);
        }
        // return nx.dBot.mezmoRayLines;
      } //end factory

      if(!nx.dBot.mezmoRaySystem){
        // debugger;
          // nx.dBot.offY = 0;
          // nx.dBot.mezmoRayLines = nx.dBot.mezmoFactory();
          nx.dBot.mezmoFactory();
          nx.dBot.mezmoRaySystem = BABYLON.MeshBuilder.CreateLineSystem("mezmoRaySystem", {lines: nx.dBot.mezmoRayLines,updatable:true}, nx.scene);
          nx.dBot.mezmoRaySystem.color = BABYLON.Color3.Green();
          // nx.dBot.mezmoRaySystem.setPivotPoint(new BABYLON.Vector3(-2,2.35,-1.3)); //IMPORTANT same point as LIGHTBALL offset-.
          // nx.dBot.mezmoRaySystem.setPivotPoint(new BABYLON.Vector3(-1.9,2.35,-1.6)); //IMPORTANT same point as LIGHTBALL offset-.
          nx.dBot.mezmoRaySystem.setPivotPoint(nx.dBot.lazerBALL1.position); //IMPORTANT same point as LIGHTBALL offset-.
          nx.dBot.mezmoRaySystem.parent = nx.darkBot;

          // nx.dBot.mezmoFactory();
          nx.dBot.mezmoRaySystem2 = BABYLON.MeshBuilder.CreateLineSystem("mezmoRaySystem", {lines: nx.dBot.mezmoRayLines2,updatable:true}, nx.scene);
          nx.dBot.mezmoRaySystem2.color = BABYLON.Color3.Green();
          // nx.dBot.mezmoRaySystem2.setPivotPoint(new BABYLON.Vector3(2,2.45,-1.3)); //IMPORTANT same point as LIGHTBALL offset-.
          // nx.dBot.mezmoRaySystem2.setPivotPoint(new BABYLON.Vector3(1.9,2.45,-1.6)); //IMPORTANT same point as LIGHTBALL offset-.
          nx.dBot.mezmoRaySystem2.setPivotPoint(nx.dBot.lazerBALL2.position); //IMPORTANT same point as LIGHTBALL offset-.
          nx.dBot.mezmoRaySystem2.parent = nx.darkBot;
      }
      nx.dBot.mezmoAlpha=0;
      nx.dBot.mezmoDamper=0;
      nx.dBot.stopMezmoLazer = 0;
      nx.scene.registerBeforeRender(function mezmoLazerRun() {
        if(++nx.dBot.mezmoDamper%2===0){return}
        if(nx.dBot.stopMezmoLazer===1){return}
        if(nx.dBot.stopMezmoLazer<0){ nx.dBot.fnEndMezmo(); nx.dBot.endMezmoRays(); nx.scene.unregisterBeforeRender(mezmoLazerRun); return; }
        nx.dBot.mezmoAlpha += 0.02;
        nx.dBot.mezmoRaySystem.rotation.z = nx.dBot.mezmoAlpha;
        nx.dBot.mezmoRaySystem2.rotation.z = nx.dBot.mezmoAlpha;

        // if(nx.dBot.offRad>0){
        //   nx.dBot.offRad = (nx.dBot.offY<20)?1:nx.dBot.offRad - 0.02; //multiplier
        //   nx.dBot.offY += 0.4;
        //   nx.dBot.mezmoFactory();
        //   // nx.dBot.mezmoRayLines = nx.dBot.mezmoFactory();
        //   nx.dBot.mezmoRaySystem = BABYLON.MeshBuilder.CreateLineSystem("mezmoRaySystem", {lines: nx.dBot.mezmoRayLines,instance:nx.dBot.mezmoRaySystem});
        //   if(nx.dBot.offRad===1){
        //     nx.dBot.mezmoRaySystem.color = BABYLON.Color3.Green();
        //   }else{
        //     nx.dBot.mezmoRaySystem.color = BABYLON.Color3.Blue();
        //   }
        // } else { //signal DONE-.
        //   nx.dBot.stopMezmoLazer=-1
        //   // debugger;
        //   nx.dBot.mezmoRaySystem.dispose();
        // }
    });
}

nx.dBot.endMezmoRays = function(mode){
    nx.dBot.mezmoRaySystem.dispose();
    nx.dBot.mezmoRaySystem2.dispose();
    // for(var i=0; i<nx.dBot.mezmoLines.length;i++){
    //   nx.dBot.mezmoLines[i].dispose();
    // }
    // nx.dBot.mezmoLines = [];    
}



// });