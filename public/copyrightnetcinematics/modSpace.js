/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
    console.log('space module-loaded')
    // debugger;
    if(!nx){nx={}}
    /******************************-LOCALVARZ-**********************************/
    // if(!nx.sub){nx.sub={}}
    // nx.sub = {num0:0,num1:0} 
    /******************************-MODULE-**********************************/
nx.createAcozmoScope1 = function(doneFn){
    if(nx.state.acozmoScope1){return}
    nx.state.acozmoScope1 = 1;

        //top of track
        nx.scopeMat = new BABYLON.StandardMaterial("gMat", nx.scene);
        nx.txtur1 = new BABYLON.Texture("./copyrightnetcinematics/img/ascopegif/ascope1.png", nx.scene);
        nx.txtur2 = new BABYLON.Texture("./copyrightnetcinematics/img/ascopegif/ascope2.png", nx.scene);
        nx.txtur3 = new BABYLON.Texture("./copyrightnetcinematics/img/ascopegif/ascope3.png", nx.scene);
        nx.txtur4 = new BABYLON.Texture("./copyrightnetcinematics/img/ascopegif/ascope4.png", nx.scene);
        nx.txtur5 = new BABYLON.Texture("./copyrightnetcinematics/img/ascopegif/ascope5.png", nx.scene);




        //ACOZMOSCOPE-READY-RENDERER-MECHANISMO-.
       //  nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
       //  //local create call here-.
       //  }); //schedule in manifest for ready callback-.

            // debugger; //texture ready to show-.
            nx.txtur1._texture.onLoadedCallbacks.push(function(){

            // debugger; //texture ready to show-.
                // setTimeout(function(){
                    doneFn();
                // },13000)
            })
       // BABYLON.BaseTexture.WhenAllReady([nx.txtur1], () => {
       //      // nx.setMasterManifest(); //signal success and await-.
       //  })




        // var txtur1 = new BABYLON.Texture("./copyrightnetcinematics/img/space/acozmoscope4.png", nx.scene);
        nx.scopeMat.diffuseTexture = nx.txtur1;
        // nx.scopeMat.diffuseTexture = nx.txtur5;
        nx.scopeMat.diffuseTexture.hasAlpha = false;
        nx.scopeMat.emissiveColor = new BABYLON.Color3(1,1,1);
        nx.scopeMat.backFaceCulling = true;
        // nx.aScope1 = BABYLON.Mesh.CreatePlane("plane",1500, nx.scene);
        // nx.aScope1 = BABYLON.Mesh.CreatePlane("plane",2000, nx.scene);
        nx.aScope1 = BABYLON.MeshBuilder.CreatePlane("plane", {width: 2000, height: 1505.88}, nx.scene);
        nx.aScope1.position.copyFrom({x: 1200, y: 3892, z: -3489})
        nx.aScope1.rotation.x = 0.8;
        nx.aScope1.rotation.y = -1.0444;
        nx.aScope1.rotation.z = 0.03;
        nx.aScope1.visibility = 1;
        nx.aScope1.material = nx.scopeMat;
}
nx.removeAcozmoScope1 = function(){
    nx.scopeMat.dispose();
    nx.aScope1.dispose();
    nx.scopeMat = null;
    nx.aScope1 = null;
    nx.state.acozmoScope1 = 0;
}

nx.createStarBurst1 = function(){
    nx.state.starBurst1 = 0; //state variable for display and clean up.
    //top of space vortex
    nx.gMatsf1 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtursf1 = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield4.png", nx.scene);
    nx.gMatsf1.diffuseTexture = txtursf1;
    nx.gMatsf1.diffuseTexture.hasAlpha = true;
    nx.gMatsf1.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatsf1.alpha = 0.9;
    nx.gMatsf1.backFaceCulling = true;
    nx.gMatsf1.emissiveColor = new BABYLON.Color3(0,0,1)
    nx.nebulasf1 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebulasf1.position.copyFrom({x: 300, y: 3200, z: -3250})
    nx.nebulasf1.rotation.y = -1
    nx.nebulasf1.rotation.x = 0.7
    nx.nebulasf1.rotation.z = 3
    nx.nebulasf1.visibility = 1;
    nx.nebulasf1.material = nx.gMatsf1;

    nx.gMatsf2 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtursf2 = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield4.png", nx.scene);
    nx.gMatsf2.diffuseTexture = txtursf2;
    nx.gMatsf2.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatsf2.alpha = 0.9;
    nx.gMatsf2.diffuseTexture.hasAlpha = true;
    nx.gMatsf2.backFaceCulling = true;
    nx.gMatsf2.emissiveColor = new BABYLON.Color3(0.5,0.2,1)
    nx.nebulasf2 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebulasf2.position.copyFrom({x: -100, y: 2830, z: -3050})
    nx.nebulasf2.rotation.y = -1;
    nx.nebulasf2.rotation.x = 0.6
    nx.nebulasf2.rotation.z = 3
    nx.nebulasf2.visibility = 1;
    nx.nebulasf2.material = nx.gMatsf2;

    nx.gMatsf3 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtursf3 = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield4.png", nx.scene);
    nx.gMatsf3.diffuseTexture = txtursf3;
    nx.gMatsf3.diffuseTexture.hasAlpha = true;
    nx.gMatsf3.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatsf3.alpha = 0.9;
    nx.gMatsf3.backFaceCulling = true;
    nx.gMatsf3.emissiveColor = new BABYLON.Color3(0.8,0,1)
    nx.nebulasf3 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebulasf3.position.copyFrom({x: -500, y: 2450, z: -2800})
    nx.nebulasf3.rotation.y = -1;
    nx.nebulasf3.rotation.x = 0.6
    nx.nebulasf3.rotation.z = 3
    nx.nebulasf3.visibility = 1;
    nx.nebulasf3.material = nx.gMatsf3;
    
    //third from top
    nx.gMatsf4 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtursf4 = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield4.png", nx.scene);
    nx.gMatsf4.diffuseTexture = txtursf4;
    nx.gMatsf4.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatsf4.alpha = 0.9;
    nx.gMatsf4.diffuseTexture.hasAlpha = true;
    nx.gMatsf4.backFaceCulling = true;
    nx.gMatsf4.emissiveColor = new BABYLON.Color3(0.2,0.2,1)
    nx.nebulasf4 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebulasf4.position.copyFrom({x: -800, y: 2135, z: -2600})
    nx.nebulasf4.rotation.y = -1;
    nx.nebulasf4.rotation.x = 0.6
    nx.nebulasf4.rotation.z = 3;
    nx.nebulasf4.visibility = 1;
    nx.nebulasf4.material = nx.gMatsf4;
}

nx.removeStarBurst1 = function(){
    if(nx.gMatsf1){nx.gMatsf1.dispose(); }
    if(nx.nebulasf1){nx.nebulasf1.dispose(); }
    if(nx.gMatsf2){nx.gMatsf2.dispose(); }
    if(nx.nebulasf2){nx.nebulasf2.dispose(); }
    if(nx.gMatsf3){nx.gMatsf3.dispose(); }
    if(nx.nebulasf3){nx.nebulasf3.dispose(); }
    if(nx.gMatsf4){nx.gMatsf4.dispose(); }
    if(nx.nebulasf4){nx.nebulasf4.dispose(); }
    nx.gMatsf1 = null;
    nx.nebulasf1 = null;
    nx.gMatsf2 = null;
    nx.nebulasf2 = null;
    nx.gMatsf3 = null;
    nx.nebulasf3 = null;
    nx.gMatsf4 = null;
    nx.nebulasf4 = null;
    nx.state.starBurst1 = 0;
}

nx.createOrion1 = function(){
  //MIDDLE ORION
  nx.state.orion = 1; // STATE variable-.
  nx.gMatsf5 = new BABYLON.StandardMaterial("gMat", nx.scene);
  var txtursf5 = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield9.png", nx.scene);
  nx.gMatsf5.diffuseTexture = txtursf5;
  nx.gMatsf5.diffuseTexture = txtursf5;
  nx.gMatsf5.diffuseTexture.hasAlpha = true;
  nx.gMatsf5.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
  nx.gMatsf5.alpha = 0.9;
  nx.gMatsf5.backFaceCulling = false;
  nx.gMatsf5.emissiveColor = new BABYLON.Color3(0.8,0.5,1)
  nx.nebulasf5 = BABYLON.Mesh.CreatePlane("plane",600, nx.scene);
//   nx.nebulasf5.position.copyFrom({x: -1650, y: 1000, z: -2044})
//   nx.nebulasf5.position.copyFrom({x: -1650, y: 1800, z: -2044})
//   nx.nebulasf5.position.copyFrom({x: -1250, y: 900, z: -1700})
// nx.nebulasf5.position.copyFrom({x: -2500, y: 650, z: -1620})
nx.nebulasf5.position.copyFrom({x: -2800, y: 550, z: -1420})
  nx.nebulasf5.rotation.y = -1;
  nx.nebulasf5.rotation.x = 0.6
  nx.nebulasf5.rotation.z = 3.2;
  nx.nebulasf5.visibility = 1;
  nx.nebulasf5.material = nx.gMatsf5;

  //stars in background
  nx.gMatsf6 = new BABYLON.StandardMaterial("gMat", nx.scene);
  nx.gMatsf6.diffuseTexture = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield9b.png", nx.scene);
  nx.gMatsf6.diffuseTexture.hasAlpha = true;
  nx.gMatsf6.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
  nx.gMatsf6.alpha = 0.9;
  nx.gMatsf6.backFaceCulling = false;
  nx.gMatsf6.emissiveColor = new BABYLON.Color3(0,1,1)
  nx.nebulasf6 = BABYLON.Mesh.CreatePlane("plane",800, nx.scene);
  nx.nebulasf6.position.copyFrom({x: -4100, y: 222, z: -1200})
  nx.nebulasf6.rotation.y = -1.1;
  nx.nebulasf6.rotation.x = 0.6;
  nx.nebulasf6.rotation.z = 3.6;
  nx.nebulasf6.visibility = 1;
  nx.nebulasf6.material = nx.gMatsf6;
  
  //LOWER ORION
  nx.gMatsf8 = new BABYLON.StandardMaterial("gMat", nx.scene);
  nx.gMatsf8.diffuseTexture = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield10a.png", nx.scene);;
  nx.gMatsf8.diffuseTexture.hasAlpha = true;
  nx.gMatsf8.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
  nx.gMatsf8.alpha = 0.9;
  nx.gMatsf8.backFaceCulling = false;
  nx.gMatsf8.emissiveColor = new BABYLON.Color3(0,1,1)
  nx.nebulasf8 = BABYLON.Mesh.CreatePlane("plane",800, nx.scene);
//   nx.nebulasf8.position.copyFrom({x: -1400, y: 200, z: -1800})
//   nx.nebulasf8.position.copyFrom({x: -1400, y: 1000, z: -1800})
// nx.nebulasf8.position.copyFrom({x: -2000, y: 100, z: -1500})
nx.nebulasf8.position.copyFrom({x: -2400, y: -20, z: -1260})
  nx.nebulasf8.rotation.copyFrom({x: 0.6, y: -1.1, z: 0.3})
  nx.nebulasf8.visibility = 1;
  nx.nebulasf8.material = nx.gMatsf8;
}

nx.removeOrion1 = function(){
    if(nx.gMatsf5){ nx.gMatsf5.dispose(); }
    if(nx.nebulasf5){ nx.nebulasf5.dispose(); }
    if(nx.gMatsf6){ nx.gMatsf6.dispose(); }
    if(nx.nebulasf6){ nx.nebulasf6.dispose(); }
    if(nx.gMatsf8){ nx.gMatsf8.dispose(); }
    if(nx.nebulasf8){ nx.nebulasf8.dispose(); }
    if(nx.gMatsf5){ nx.gMatsf5 = null; }
    if(nx.nebulasf5){ nx.nebulasf5 = null; }
    if(nx.gMatsf6){ nx.gMatsf6 = null; }
    if(nx.nebulasf6){ nx.nebulasf6 = null; }
    if(nx.gMatsf8){ nx.gMatsf8 = null; }
    if(nx.nebulasf8){ nx.nebulasf8 = null; }
    if(nx.state){ nx.state.orion = 0; }
}

nx.createGalaxy1 = function(){
    nx.state.galaxy1 = 1;
    nx.galaxyMaster1 = BABYLON.Mesh.CreateSphere("editNode", 20, 20, nx.scene);
    nx.gmasterMat1 = new BABYLON.StandardMaterial("gMat", nx.scene);
    nx.galaxyMaster1.material = nx.gmasterMat1;
    nx.galaxyMaster1.scaling = new BABYLON.Vector3(1.4,1.4,1.4)
    nx.galaxyMaster1.position.copyFrom( {x: -2800, y: 6300, z: -1000})
    nx.galaxyMaster1.rotation.copyFrom({x: -1.8, y: 1.8, z: -1.4})
    nx.galaxyMaster1.visibility = 0;
    nx.gMatsga1 = new BABYLON.StandardMaterial("gMat", nx.scene);
    //todo put these inline so that no var creation necessary
    var txtursga1 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g2/twistedGalaxy1.png", nx.scene);
    nx.gMatsga1.diffuseTexture = txtursga1;
    nx.gMatsga1.diffuseTexture.hasAlpha = true;
    nx.gMatsga1.emissiveColor = new BABYLON.Color3(1,0,0)
    nx.gMatsga1.diffuseColor = new BABYLON.Color3(1,1,1)
    nx.gMatsga1.alphaMode = BABYLON.Engine.ALPHA_MAXIMIZED;
    nx.gMatsga1.alpha = 0.9;
    nx.gMatsga1.backFaceCulling = false;
    nx.gMatsga1.emissiveColor = new BABYLON.Color3(0.2,0.2,1)
    nx.galaxyframe1 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.galaxyframe1.position.copyFrom({x:0,y:-500,z:0});
    nx.galaxyframe1.rotation.y = -0.8;
    nx.galaxyframe1.visibility = 1;
    nx.galaxyframe1.material = nx.gMatsga1;
    nx.galaxyframe1.parent = nx.galaxyMaster1;
    nx.gMatsga2 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtursga2 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g2/twistedGalaxy1.png", nx.scene);
    nx.gMatsga2.diffuseTexture = txtursga2;
    nx.gMatsga2.diffuseTexture.hasAlpha = true;
    nx.gMatsga2.diffuseColor = new BABYLON.Color3(1,1,1)
    nx.gMatsga2.emissiveColor = new BABYLON.Color3(0,0,0.5)
    nx.gMatsga2.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatsga2.alpha = 0.1;
    nx.gMatsga2.backFaceCulling = false;
    nx.galaxyframe2 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.galaxyframe2.position.copyFrom({x:0,y:-500,z:-5});
    nx.galaxyframe2.rotation.y = -0.8;
    nx.galaxyframe2.visibility = 1;
    nx.galaxyframe2.material = nx.gMatsga2;
    nx.galaxyframe2.parent = nx.galaxyMaster1;
    nx.gMatsga3 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtursga3 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g2/twistedGalaxy1.png", nx.scene);
    nx.gMatsga3.diffuseTexture = txtursga3;
    nx.gMatsga3.diffuseTexture.hasAlpha = true;
    nx.gMatsga3.diffuseColor = new BABYLON.Color3(1,1,1)
    nx.gMatsga3.emissiveColor = new BABYLON.Color3(0,1,0)
    nx.gMatsga3.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatsga3.alpha = 0.1;
    nx.gMatsga3.backFaceCulling = false;
    nx.galaxyframe3 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.galaxyframe3.position.copyFrom({x:0,y:-500,z:-10});
    nx.galaxyframe3.rotation.y = -0.8;
    nx.galaxyframe3.visibility = 1;
    nx.galaxyframe3.material = nx.gMatsga3;
    nx.galaxyframe3.parent = nx.galaxyMaster1;
    nx.gMatsga4 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtursga4 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g2/twistedGalaxy1.png", nx.scene);
    nx.gMatsga4.diffuseTexture = txtursga4;
    nx.gMatsga4.diffuseTexture.hasAlpha = true;
    nx.gMatsga4.emissiveColor = new BABYLON.Color3(1,0,0)
    nx.gMatsga4.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatsga4.alpha = 0.2;
    nx.gMatsga4.backFaceCulling = false;
    nx.galaxyframe4 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.galaxyframe4.position.copyFrom({x:0,y:-500,z:-15});
    nx.galaxyframe4.rotation.y = -0.8;
    nx.galaxyframe4.visibility = 1;
    nx.galaxyframe4.material = nx.gMatsga4;
    nx.galaxyframe4.parent = nx.galaxyMaster1;
    nx.gMatsga5 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtursga5 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g2/twistedGalaxy1.png", nx.scene);
    nx.gMatsga5.diffuseTexture = txtursga5;
    nx.gMatsga5.diffuseTexture.hasAlpha = true;
    nx.gMatsga5.emissiveColor = new BABYLON.Color3(1,1,0)
    nx.gMatsga5.alphaMode = BABYLON.Engine.ALPHA_MAXIMIZED;
    nx.gMatsga5.alpha = 0.2;
    nx.gMatsga5.backFaceCulling = false;
    nx.galaxyframe5 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.galaxyframe5.position.copyFrom({x:0,y:-500,z:-20});
    nx.galaxyframe5.rotation.y = -0.8;
    nx.galaxyframe5.visibility = 1;
    nx.galaxyframe5.material = nx.gMatsga5;
    nx.galaxyframe5.parent = nx.galaxyMaster1;

    //stars behind orby
    nx.gMatssc1 = new BABYLON.StandardMaterial("gMat", nx.scene);
    nx.gMatssc1.diffuseTexture = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield11a.png", nx.scene);
    nx.gMatssc1.diffuseTexture.hasAlpha = true;
    nx.gMatssc1.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatssc1.alpha = 0.9;
    nx.gMatssc1.backFaceCulling = 1;
    nx.gMatssc1.emissiveColor = new BABYLON.Color3(0,1,1)
    nx.nebulassc1 = BABYLON.Mesh.CreatePlane("plane",1200, nx.scene);
    nx.nebulassc1.position.copyFrom({x: -3950, y: 3900, z: -2100})
    nx.nebulassc1.rotation.copyFrom({x: -0.1, y: -1.2, z: 0.4})
    nx.nebulassc1.visibility = 1;
    nx.nebulassc1.material = nx.gMatssc1;

    //STARS BELOW NEBULA.
    nx.gMatsga6 = new BABYLON.StandardMaterial("gMat", nx.scene);
    nx.gMatsga6.diffuseTexture = new BABYLON.Texture("./copyrightnetcinematics/img/space/sf/starfield11a.png", nx.scene);;
    nx.gMatsga6.diffuseTexture.hasAlpha = true;
    nx.gMatsga6.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMatsga6.alpha = 0.9;
    nx.gMatsga6.backFaceCulling = false;
    nx.gMatsga6.emissiveColor = new BABYLON.Color3(0,1,1)
    nx.nebulasga6 = BABYLON.Mesh.CreatePlane("plane",800, nx.scene);
    nx.nebulasga6.position.copyFrom({x: -3100, y: 3700, z: -1300})
    nx.nebulasga6.rotation.copyFrom({x:-0.2, y:-1, z:0.35})
    nx.nebulasga6.visibility = 1;
    nx.nebulasga6.material = nx.gMatsga6;
}

nx.removeGalaxy1 = function(){
    if(nx.gmasterMat1){ nx.gmasterMat1.dispose(); }
    if(nx.galaxyMaster1){ nx.galaxyMaster1.dispose(); }
    if(nx.gMatsga1){ nx.gMatsga1.dispose(); }
    if(nx.galaxyframe1){ nx.galaxyframe1.dispose(); }
    if(nx.gMatsga2){ nx.gMatsga2.dispose(); }
    if(nx.galaxyframe2){ nx.galaxyframe2.dispose(); }
    if(nx.gMatsga3){ nx.gMatsga3.dispose(); }
    if(nx.galaxyframe3){ nx.galaxyframe3.dispose(); }
    if(nx.gMatsga4){ nx.gMatsga4.dispose(); }
    if(nx.galaxyframe4){ nx.galaxyframe4.dispose(); }
    if(nx.gMatsga5){ nx.gMatsga5.dispose(); }
    if(nx.galaxyframe5){ nx.galaxyframe5.dispose(); }
    nx.gmasterMat1 = null;
    nx.galaxyMaster1 = null;
    nx.gMatsga1 = null;
    nx.galaxyframe1 = null;
    nx.gMatsga2 = null;
    nx.galaxyframe2 = null;
    nx.gMatsga3 = null;
    nx.galaxyframe3 = null;
    nx.gMatsga4 = null;
    nx.galaxyframe4 = null;
    nx.gMatsga5 = null;
    nx.galaxyframe5 = null;

    if(nx.gMatssc1){ nx.gMatssc1.dispose(); }
    if(nx.nebulassc1){ nx.nebulassc1.dispose(); }
    if(nx.gMatsga6){ nx.gMatsga6.dispose(); }
    if(nx.nebulasga6){ nx.nebulasga6.dispose(); }
    nx.gMatssc1 = null;
    nx.nebulassc1 = null;
    nx.gMatsga6 = null;
    nx.nebulasga6  = null;
    nx.state.galaxy1 = 0;
}

nx.createPurpleNebula1 = function(){
    // return;

// //CAM POS on bottom vortex.
// nx.TSTSPHERE2 = BABYLON.Mesh.CreateSphere("editNode", 20, 20, nx.scene);
// nx.TSTSPHERE2.position.copyFrom({x: -1110, y: 1645, z: -2384});
// nx.TSTSPHERE2.material = new BABYLON.StandardMaterial("gMat", nx.scene);
// nx.TSTSPHERE2.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
// //CAM POS on ZIG
// nx.TSTSPHERE3 = BABYLON.Mesh.CreateSphere("editNode", 20, 20, nx.scene);
// nx.TSTSPHERE3.position.copyFrom({x: -1011, y: 1962, z: -2934});
// nx.TSTSPHERE3.material = new BABYLON.StandardMaterial("gMat", nx.scene);
// nx.TSTSPHERE3.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
// nx.TSTSPHERE2.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
// //CAM POS on oby befor descent to alpha moon
// nx.TSTSPHERE4 = BABYLON.Mesh.CreateSphere("editNode", 20, 20, nx.scene);
// nx.TSTSPHERE4.position.copyFrom({x: -2510, y: 3963, z: -1500});
// nx.TSTSPHERE4.material = new BABYLON.StandardMaterial("gMat", nx.scene);
// nx.TSTSPHERE4.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
// //orby position on pause mid space.
// nx.TSTSPHERE = BABYLON.Mesh.CreateSphere("editNode", 20, 20, nx.scene);
// nx.TSTSPHERE.position.copyFrom({x: -2485, y: 3933, z: -1935.04});
// nx.TSTSPHERE.material = new BABYLON.StandardMaterial("gMat", nx.scene);
// nx.TSTSPHERE.material.diffuseColor = new BABYLON.Color3(1, 1, 0);

    nx.nebulaMaster1 = BABYLON.Mesh.CreateSphere("editNode", 40, 40, nx.scene);
    nx.masterMat1 = new BABYLON.StandardMaterial("gMat", nx.scene);
    nx.masterMat1.diffuseColor = new BABYLON.Color3(1, 0, 1);
    nx.nebulaMaster1.material = nx.masterMat1;
    nx.nebulaMaster1.position.copyFrom({x:-2500,y:4450,z:-1780}); //good pos 1
    nx.nebulaMaster1.rotation.copyFrom({x: -0.7, y: -0.3, z: 0}) //good rot 1
    nx.nebulaMaster1.visibility = 0;

    nx.gMat1 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur1 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g5.png", nx.scene);
    nx.gMat1.diffuseTexture = txtur1;
    nx.gMat1.diffuseTexture.hasAlpha = true;
    nx.gMat1.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat1.alpha = 0.9;
    nx.gMat1.backFaceCulling = false;
    nx.nebula1 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula1.position.copyFrom({x:0,y:0,z:0});
    nx.nebula1.position.y += -500;
    nx.nebula1.position.z = -100;
    nx.nebula1.rotation.copyFrom({x: 0, y: -0.25, z: 0})
    nx.nebula1.visibility = 1;
    nx.nebula1.material = nx.gMat1;
    nx.nebula1.parent = nx.nebulaMaster1;
    
    nx.gMat2 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur2 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g2.png", nx.scene);
    nx.gMat2.diffuseTexture = txtur2;
    nx.gMat2.diffuseTexture.hasAlpha = true;
    nx.gMat2.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat2.alpha = 0.9;
    nx.gMat2.backFaceCulling = false;
    nx.nebula2 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula2.position.copyFrom({x:0,y:0,z:0});
    nx.nebula2.position.y += -500;
    nx.nebula2.position.z = -200;
    nx.nebula2.rotation.copyFrom({x: 0, y: -0.35, z: 0})
    nx.nebula2.visibility = 1;
    nx.nebula2.material = nx.gMat2;
    nx.nebula2.parent = nx.nebulaMaster1;
    
    nx.gMat3 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur3 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g3.png", nx.scene);
    nx.gMat3.diffuseTexture = txtur3;
    nx.gMat3.diffuseTexture.hasAlpha = true;
    nx.gMat3.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat3.alpha = 0.9;
    nx.gMat3.backFaceCulling = false;
    nx.nebula3 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula3.position.copyFrom({x:0,y:0,z:0});
    nx.nebula3.position.y += -500;
    nx.nebula3.position.z = -300;
    nx.nebula3.visibility = 1;
    nx.nebula3.material = nx.gMat3;
    nx.nebula3.parent = nx.nebulaMaster1;
    
    nx.gMat4 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur4 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g4.png", nx.scene);
    nx.gMat4.diffuseTexture = txtur4;
    nx.gMat4.diffuseTexture.hasAlpha = true;
    nx.gMat4.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat4.alpha = 0.9;
    nx.gMat4.backFaceCulling = false;
    nx.nebula4 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula4.position.copyFrom({x:0,y:0,z:0});
    nx.nebula4.position.y += -500;
    nx.nebula4.position.z = -400;
    nx.nebula4.visibility = 1;
    nx.nebula4.material = nx.gMat4;
    nx.nebula4.parent = nx.nebulaMaster1;
    
    nx.gMat5 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur5 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g5.png", nx.scene);
    nx.gMat5.diffuseTexture = txtur5;
    nx.gMat5.diffuseTexture.hasAlpha = true;
    nx.gMat5.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat5.alpha = 0.9;
    nx.gMat5.backFaceCulling = false;
    nx.nebula5 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula5.position.copyFrom({x:0,y:0,z:0});
    nx.nebula5.position.y += -500;
    nx.nebula5.position.z = -500;
    nx.nebula5.visibility = 1;
    nx.nebula5.material = nx.gMat5;
    nx.nebula5.parent = nx.nebulaMaster1;
    
    nx.gMat6 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur6 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g6.png", nx.scene);
    nx.gMat6.diffuseTexture = txtur6;
    nx.gMat6.diffuseTexture.hasAlpha = true;
    nx.gMat6.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat6.alpha = 0.9;
    nx.gMat6.backFaceCulling = false;
    nx.nebula6 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula6.position.copyFrom({x:0,y:0,z:0});
    nx.nebula6.position.y += -500;
    nx.nebula6.position.z = -600;
    nx.nebula6.visibility = 1;
    nx.nebula6.material = nx.gMat6;
    nx.nebula6.parent = nx.nebulaMaster1;
    
    nx.gMat7 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur7 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g7.png", nx.scene);
    nx.gMat7.diffuseTexture = txtur7;
    nx.gMat7.diffuseTexture.hasAlpha = true;
    nx.gMat7.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat7.alpha = 0.9;
    nx.gMat7.backFaceCulling = false;
    nx.nebula7 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula7.position.copyFrom({x:0,y:0,z:0});
    nx.nebula7.position.y += -500;
    nx.nebula7.position.z = -700;
    nx.nebula7.visibility = 1;
    nx.nebula7.material = nx.gMat7;
    nx.nebula7.parent = nx.nebulaMaster1;
    
    nx.gMat8 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur8 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g8.png", nx.scene);
    nx.gMat8.diffuseTexture = txtur8;
    nx.gMat8.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat8.alpha = 0.9;
    nx.gMat8.diffuseTexture.hasAlpha = true;
    nx.gMat8.backFaceCulling = false;
    nx.nebula8 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula8.position.copyFrom({x:0,y:0,z:0});
    nx.nebula8.position.y += -500;
    nx.nebula8.position.z = -800;
    nx.nebula8.visibility = 1;
    nx.nebula8.material = nx.gMat8;
    nx.nebula8.parent = nx.nebulaMaster1;
    
    nx.gMat9 = new BABYLON.StandardMaterial("gMat", nx.scene);
    var txtur9 = new BABYLON.Texture("./copyrightnetcinematics/img/space/g1/g9.png", nx.scene);
    nx.gMat9.diffuseTexture = txtur9;
    nx.gMat9.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
    nx.gMat9.alpha = 0.9;
    nx.gMat9.diffuseTexture.hasAlpha = true;
    nx.gMat9.backFaceCulling = false;
    nx.nebula9 = BABYLON.Mesh.CreatePlane("plane",1000, nx.scene);
    nx.nebula9.position.copyFrom({x:0,y:0,z:0});
    nx.nebula9.position.y += -500;
    nx.nebula9.position.z = -900;
    nx.nebula9.visibility = 1;
    nx.nebula9.material = nx.gMat9;
    nx.nebula9.parent = nx.nebulaMaster1;


// setTimeout(function(){
// //Todo need a better promise:
// // - from light start or
// // - from nebula create
// // - if the other exists 
// // - then exclude nebula from character lights-. 
//     if(nx.light0){ 
//         light0.excludedMeshes.push(nx.nebula1,nx.nebula2,nx.nebula3,nx.nebula4,nx.nebula5,nx.nebula6,nx.nebula7,nx.nebula8,nx.nebula9);   
//         light1.excludedMeshes.push(nx.nebula1,nx.nebula2,nx.nebula3,nx.nebula4,nx.nebula5,nx.nebula6,nx.nebula7,nx.nebula8,nx.nebula9);   
//         light2.excludedMeshes.push(nx.nebula1,nx.nebula2,nx.nebula3,nx.nebula4,nx.nebula5,nx.nebula6,nx.nebula7,nx.nebula8,nx.nebula9);   
//     }

// },2000)


}

nx.removePurpleNebula1 = function(){
    nx.nebulaMaster1.dispose();
    nx.masterMat1.dispose();
    nx.gMat1.dispose();
    nx.nebula1.dispose();
    nx.gMat2.dispose();
    nx.nebula2.dispose();
    nx.gMat3.dispose();
    nx.nebula3.dispose();
    nx.gMat4.dispose();
    nx.nebula4.dispose();
    nx.gMat5.dispose();
    nx.nebula5.dispose();
    nx.gMat6.dispose();
    nx.nebula6.dispose();
    nx.gMat7.dispose();
    nx.nebula7.dispose();
    nx.gMat8.dispose();
    nx.nebula8.dispose();
    nx.gMat9.dispose();
    nx.nebula9.dispose();
    nx.nebulaMaster1 = null;
    nx.masterMat1 = null;
    nx.gMat1 = null;
    nx.nebula1 = null;
    nx.gMat2 = null;
    nx.nebula2 = null;
    nx.gMat3 = null;
    nx.nebula3 = null;
    nx.gMat4 = null;
    nx.nebula4 = null;
    nx.gMat5 = null;
    nx.nebula5 = null;
    nx.gMat6 = null;
    nx.nebula6 = null;
    nx.gMat7 = null;
    nx.nebula7 = null;
    nx.gMat8 = null;
    nx.nebula8 = null;
    nx.gMat9 = null;
    nx.nebula9 = null;

}

//MODULE-READY-RENDERER-MECHANISMO-.
nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
//local create call here-.
}); //schedule in manifest for ready callback-.
nx.setMasterManifest(); //signal success and await-.
      