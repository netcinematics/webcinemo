/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
var initNX = function(nx){ //todo rename to ini
    var nx = nx || {}; //NetcinematiX - anmscape-.
    nx.canvas = document.getElementById('renderCanvas');
    nx.canva$ = $('canvas'); //USAGE:nx.canva$.fadeIn(speedFI); 
    nx.engine = {};
    // nx.camz = {};
    //nx.camz = {};
    //nx.camz.freeCam,faceCam,personCam
    // nx.camz.cam1 = {};
    nx.spacebox = {};
    nx.stage = {};
    // nx.anm = {};
    // nx.idle = {};
    // nx.glow = {};
    // nx.meta = {};
    nx.anmDEBUG = 0;
    nx.anmVIS = 0;
    nx.edit = {};
    nx.anm = {};
    // nx.mesh = {};
    // nx.boximeta = {}; 
    // nx.act = {};    //maybe change to seq
    // nx.role = {};  
    // nx.route = {};
    nx.sonic = {};
    nx.sonic.toggle=0; //0off 1on
    // nx.light = {};
    // nx.util = {};
    // nx.lvl = {}; // level logic-.
    // nx.seq = {};    //sequence-scenes-.
    // nx.fx
    nx.zones = {};
    // nx.loopz = [] //todo; push all loops heere to see how many are running or leaking-.
    //----------
    nx.RUNTIME = 1;//0.1;//1;// 0.1;//2; //0.1 //allows for fast fwd to account for all MATH ANMS
    
    
    nx.state = {};  //0 or 1 - existence of assets-.
    //DYNAMIC~STATE~MACHINE~SYSTEM-. DSMS.
    // if(!nx.state.orion){ nx.createOrion1(); } 
    // if(!nx.state.starBurst1){ nx.createStarBurst1(); }
    
    
    
    //   // nx.ui = {};
    //   // window.addEventListener('DOMContentLoaded', function(){
        //       // nx.ui.body = $("body");
        //       // nx.screen = {orientation:'',width:0,height:0}
        //   // });



  //     // nx.sonic.toggle=0; //0off 1on
  //     // nx.light = {};
  //     // nx.util = {};
  //     // nx.lvl = {}; // level logic-.
  //     // nx.seq = {};    //sequence-scenes-.
  //     // nx.fx
  //     //----------
  //     // nx.ui.body = $("body"); //todo move up to appshell
  //     // nx.screen = {orientation:'',width:0,height:0}



    // nx.meta = {};                            //TODO-these will become anmscript
    // nx.meta.superTitle = 'Orby Orbot in';
    // nx.meta.mainTitle = 'ACOZMONET!';
    // nx.meta.subTitle = 'Orby Save Marrz!';
    // nx.meta.episode = 'ep1';
    // nx.meta.series = 's1'
    // nx.meta.dim = 'dimZ'
    // nx.meta.msg = nx.meta.mainTitle+'~'+nx.meta.dim+':'+nx.meta.series+':'+nx.meta.episode+'~'+nx.meta.subTitle;
    // nx.meta.appName = nx.meta.mainTitle+'~'+nx.meta.dim+':'+nx.meta.series+':'+nx.meta.episode;
    // nx.meta.returnVisitIdx = 0;


    // nx.ui = {};
    // nx.ui.body = $("body"); //todo move up to appshell
    // nx.screen = {orientation:'',width:0,height:0}
    nx.scene = {}; //todo possibly rename to nx.episode
    nx.epicSet=[];//allows dynamic versioning of epics.
    nx.epicSeqIdx=0;  
    nx.gameSet=[];//allows dynamic versioning of games.
    nx.gameSeqIdx=0;  
    // nx.ui.lvl = {}; //title, phase, format,
    // nx.ui.mov = {};
    // nx.ui.pts = {};
    // nx.ui.menus = {};
    nx.tst=1; //test-mode 1, free-mode 2, -.Boxodology-.
    //------------
    /////////////////CONFIG-.
    // nx.meta.NEOLVL = 2;
    // nx.meta.MSTRLVL = 3;
    // nx.meta.rankMax=4;
    // nx.meta.maxPts = 1000000000;
    nx.BQ4 = function (obj) { return new BABYLON.Quaternion(obj.x,obj.y,obj.x,obj.w); }
    nx.BV32 = function (obj) { return new BABYLON.Vector3(obj.x,obj.y,obj.z); }
    nx.BV3 = function (x,y,z) { return new BABYLON.Vector3(x,y,z); }
    nx.CV3 = function (r,g,b) { return new BABYLON.Color3(r,g,b); }
    nx.RV3 = function (x,y,z) { return new BABYLON.Vector3(Math.PI/x,Math.PI/y,Math.PI/z); }
}
/**************************-END-NX-****************************************/
/********************************************* - STANDARD - COLOR - MATERIALS - *********************************************************/
// var createEditColors = function(){
//     nx.greenMat = new BABYLON.StandardMaterial("green1", nx.scene);
//     nx.greenMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
//     nx.redMat = new BABYLON.StandardMaterial("red1", nx.scene);
//     nx.redMat.diffuseColor = new BABYLON.Color3(1, 0, 0);
//     nx.blueMat = new BABYLON.StandardMaterial("blue1", nx.scene);
//     nx.blueMat.diffuseColor = new BABYLON.Color3(0, 0, 1);
// }
/*********************************-CREATE-STAGE-******************************/
var createStage = function() {
    nx.stage = BABYLON.Mesh.CreateGround("stage1", 100, 100, 2, nx.scene);  //GRID
    var gridMaterial = new BABYLON.GridMaterial("", nx.scene);
    gridMaterial.mainColor = new BABYLON.Color3(187/255, 187/255, 204/255); 
    gridMaterial.lineColor = new BABYLON.Color3(86/255, 110/255, 173/255); //steelblue
    nx.stage.material = gridMaterial;

}
/******************************-CREATE-SPACE-*******************************/
var createSpace = function () {
    nx.spacebox = BABYLON.Mesh.CreateBox("spacebox", 7500, nx.scene); //spacebox //5000
    var spaceboxMaterial = new BABYLON.StandardMaterial("spacebox", nx.scene);
    spaceboxMaterial.backFaceCulling = false;
    spaceboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./copyrightnetcinematics/3d/spacebox1/spacebox1", nx.scene);
    spaceboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    spaceboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    spaceboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    spaceboxMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0.22);
    spaceboxMaterial.disableLighting = false; //true;
    nx.spacebox.material = spaceboxMaterial;
    nx.spacebox.isPickable = false;
    nx.spacebox.rotation.x = -0.75; //1.15 sun
}

/*********************************-CREATE-LIGHTS-******************************/
var spot1, light1, light2;
var createLights = function() {
    // debugger; //obsolete?
    // var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,10,0), nx.scene);
    // light.intensity = 0.4;
    // light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-1, -2, -1), nx.scene);
    // light1.position = new BABYLON.Vector3(20, 39, 20);
    // light1.intensity = 0.5;
    // light2 = new BABYLON.SpotLight("spot02", new BABYLON.Vector3(0, 40, 20), new BABYLON.Vector3(-1, -2, -1), 1.1, 16, nx.scene);
    // light2.intensity = 0.5;

    //SPACELIGHT - used for nebula!
    var light3 = new BABYLON.PointLight("pl", new BABYLON.Vector3(0, 200, 0), nx.scene);
    // light3.diffuse = new BABYLON.Color3(0.8, 0.5, 1);
    light3.diffuse = new BABYLON.Color3(0.444, 0.444, 1);
    light3.specular = new BABYLON.Color3(0, 0, 1);
    light3.intensity = 0.44; //80

}
/*********************************-CREATE-CAMERA-******************************/
var createDefaultCamera = function(cam) {
    // cam = cam || 'default'; 
    // if(cam==='default'){ //FOLLOW-CAM-1
        // debugger;
        
        // console.log('createcam1')
        // nx.camz.followCam = new BABYLON.FollowCamera("FollowCam1", new BABYLON.Vector3(0, 50, -50) , nx.scene);
        // nx.camz.followCam.radius = 30; //distance from tgt-.
        // nx.camz.followCam.heightOffset = 30; //distance above-.
        // // nx.camz.followCam.heightOffset = 2; //distance above-.
        // nx.camz.followCam.rotationOffset = 0; //rotation around origin
        // // nx.camz.followCam.rotationOffset = -120; //rotation around origin
        // nx.camz.followCam.cameraAcceleration = 0.007 //amount cam moves
        // nx.camz.followCam.maxCameraSpeed = 2;  //max accelleration
        // // nx.camz.followCam.position = new BABYLON.Vector3(0, 150, -150);
        // nx.camz.followCam.position = new BABYLON.Vector3(-750, 1500, -1770); //top landing pad
    // } else if(cam==='dev'){ //ARC-ROTATE-CAMERA
    //     nx.camz.cam1 = new BABYLON.ArcRotateCamera("Cam1",  0, 0, 0, new BABYLON.Vector3(0, 0, 0), nx.scene);
    //     // nx.camz.cam1.setPosition(new BABYLON.Vector3(0, 50, 80)); //SHORT-z-NEGATIVE
    //     nx.camz.cam1.setPosition(new BABYLON.Vector3(0, 1900, -2500)); //LONG-Z-POS
    //     nx.camz.cam1.setTarget(BABYLON.Vector3.Zero());
    //     // nx.camz.cam1.setEnabled(false);
    //     // nx.camz.cam1.attachControl(nx.canvas, true);
    // } else if(cam==='free'){ //FREE-ROAM-CAMERA
        // console.log('createcamfree')
        if(!nx.camz){nx.camz={}};//FIX
        nx.camz.editcam = new BABYLON.FreeCamera('editcam', new BABYLON.Vector3(0, 10000, 0), nx.scene);
        nx.camz.editcam.setTarget( new BABYLON.Vector3(0, 10100, 0)); //CAM: LOOK INTO BLACK SPACE-.
        nx.camz.editcam.attachControl(nx.canvas, true); //EDIT-CAM-FOR separate 4P editing-.

        //0 10000 0 - is the beginning of Orby space decent


        //todo this has been moved to initfreecam - deprecated-.
        nx.camz.freeCam = new BABYLON.FreeCamera('freecam1', new BABYLON.Vector3(0, 10000, 0), nx.scene); //LOOK INTO BLACKSPACE
        nx.camz.freeCam.setTarget( new BABYLON.Vector3(0, 10100, 0)); //CAM: LOOK INTO BLACK SPACE-.  //todo
        nx.camz.freeCam.attachControl(nx.canvas, true);
        nx.scene.activeCamera = nx.camz.freeCam; //BLACK-SCREEN FIX: avoids cam flicker
    // }
}
/*********************************-CREATE-ASSETS-******************************/
var createAssets = function() {
    // debugger; //deprecated?
    nx.assetsManager = new BABYLON.AssetsManager(nx.scene); //INIT-ASSETS-MANAGER-.
    // nx.engine.loadingUIText = "Welcome..."; //----ASSETS-MANAGER--------------Loading Indicator
    // assetsManager.addMeshTask("asset2", "", "./3d/assets/", "skull.babylon").onSuccess = function (task){
    //     task.loadedMeshes.forEach(function(e,i){
    //             task.loadedMeshes[0].position = new BABYLON.Vector3(0,30,150);
    //     });
    // };   


    var meshTask = nx.assetsManager.addMeshTask("task5", "", "./copyrightnetcinematics/3d/", "spacetrain1.babylon");
    meshTask.onSuccess = function (task) {
        
        nx.spacecaboose1 = task.loadedMeshes[0];
        nx.spacecaboose1.position.copyFrom({"x":-300,"y":6.700000000000001,"z":284.5999999999988});// = new BABYLON.Vector3(-300,18,300);
        nx.spacecaboose1.rotation.copyFrom({"x":0.10000000000000003,"y":2.500000000000001,"z":-0.5799999999999998});
        nx.spacecaboose1.scaling = new nx.BV3(4,4,4);
        // nx.editz.createMasterEditor(nx.spacecaboose1);


        nx.spacecrate1 = task.loadedMeshes[1];
        nx.spacecrate1.position.copyFrom({"x":-291.90000000000066,"y":0.09999999999999998,"z":238.89999999999984}); // = new BABYLON.Vector3(-270,18,300);
        nx.spacecrate1.rotation.copyFrom({"x":-0.1,"y":4.000000000000002,"z":-1.7000000000000002});
        nx.spacecrate1.scaling = new nx.BV3(1.5,1.5,1.5)
        // nx.editz.createMasterEditor(nx.spacecrate1);

        nx.spaceball1 = task.loadedMeshes[3];
        nx.spaceball1.position.copyFrom({x: -268, y: -0.09999999999999995, z: 206}); // = new BABYLON.Vector3(-240,18,300);
        nx.spaceball1.rotation.copyFrom({x: -0.4200000000000002, y: 2.3000000000000007, z: -0.5});
        nx.spaceball1.scaling = new nx.BV3(1.5,1.5,1.5)
        // nx.editz.createMasterEditor(nx.spaceball1);

        nx.spaceball2 = task.loadedMeshes[2];
        nx.spaceball2.position.copyFrom({x: -269, y: -0.10000000000000064, z: 223});// = new BABYLON.Vector3(-200,18,300);
        nx.spaceball2.rotation.copyFrom({x: 5.399999999999997, y: -3.100000000000002, z: 5.399999999999997});
        nx.spaceball2.scaling = new nx.BV3(1.5,1.5,1.5);
        // nx.editz.createMasterEditor(nx.spaceball2);
        // task.loadedMeshes[0].position = new BABYLON.Vector3(-300,18,300);
        // task.loadedMeshes[1].position = new BABYLON.Vector3(-270,18,300);
        // task.loadedMeshes[2].position = new BABYLON.Vector3(-240,18,300);
        // task.loadedMeshes[3].position = new BABYLON.Vector3(-200,18,300);

        // task.loadedMeshes[0].showBoundingBox();
    }





    // nx.assetsManager.addMeshTask("asset3", "", "./copyrightnetcinematics/3d/assets/", "worldbox2.babylon").onSuccess = function (task){};
    // nx.assetsManager.onFinish = function(tasks) {
        // nx.engine.runRenderLoop(function() {
        //     nx.scene.render();
        // });
    // };
    nx.assetsManager.load();  // IMPORTANT-.
}
/*********************************-CREATE-SOUNDS-******************************/
// var createSounds = function( ){ //
//     nx.sonic.loaded=1;
//     nx.sonic.soundObjTrack1=new BABYLON.Sound("bg1","./sonicz/nxBoomCore2cc0.mp3",nx.scene,null,{loop:false,autoplay:false, volume:0.04});
//     nx.sonic.soundObjBlip2= new BABYLON.Sound("blipIn1","./sonicz/nxBlip2b.mp3", nx.scene, null, { loop: false, autoplay: false });
//     BABYLON.Engine.audioEngine.setGlobalVolume(0.8); //0.02 is on the quiet side.
// }
/***************************************-3D-MESH-*********************************/
// var centroid;
// var createCentroid = function (){
//     var material = new BABYLON.StandardMaterial("k", nx.scene);
//     var centroid = BABYLON.Mesh.CreateSphere("centroid", 16, 3, nx.scene);
//     centroid.position = new BABYLON.Vector3(0,10,0);
//     material.diffuseColor = new BABYLON.Color3(1, 1, 1);
//     centroid.material = material;
// }
var createFPSUI = function(){
    if(nx.tst===1){
        var fpsUI= `
        <style>.steelBlueDlgStyle{border:#748696 solid 1px;background-color:rgba(150,180,200,0.8);border-radius:20px;height:32px;width:64px; 
            cursor:default;user-select:none;outline:none;position:absolute;top:1px;right:3px;text-align:center;
            text-shadow: 0 1px 0 rgba(255,255,255,.8);} .steelBlueDlgStyle span{line-height: 30px;}</style>
        <section id='fpsDlg' class='steelBlueDlgStyle'><span>FPS: </span><span id='fpsTxt'>0</span></section>`;
        $("body").append(fpsUI);
        nx.ui.fpsTxt = $('#fpsTxt'); 
        nx.scene.registerBeforeRender(function () {  //INIT-FPS
            if(nx && nx.ui && nx.ui.fpsTxt){
                nx.ui.fpsTxt.html(Math.round(nx.engine.fps));
            }
        });
    }
} 

/*************************************************************************-MATERIALS-TEXTURES-***********************************/
//TODO
nx.mats = []
var createDefaultMaterials = function(){

    //METAL-MATERIAL-COLORS-.
    var mat = new BABYLON.StandardMaterial('darkMetal', nx.scene);
    mat.diffuseColor = new BABYLON.Color3(0.4,0.4,0.4);
    nx.mats['darkMetal'] = mat;
    mat = new BABYLON.StandardMaterial('darkerMetal', nx.scene);
    mat.diffuseColor = new BABYLON.Color3(0.2,0.2,0.2);
    nx.mats['darkerMetal'] = mat;
    mat = new BABYLON.StandardMaterial('lightMetal', nx.scene);
    mat.diffuseColor = new BABYLON.Color3(0.8,0.8,0.8);
    nx.mats['lightMetal'] = mat;
    mat = new BABYLON.StandardMaterial('lightMetal', nx.scene);
    mat.diffuseColor = new BABYLON.Color3(0.9,0.8,0.75);
    nx.mats['lighterMetal'] = mat;

    //todo put reusable materials into nx.matz-.

    //RANDOM-SPACE-TEXTURE-.
    nx.defaultMat1 = new BABYLON.StandardMaterial("defaultmat1", nx.scene);
    nx.defaultMat1.alpha = 1.0;
    // nx.defaultMat1.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0);
    // nx.defaultMat1.specularColor = new BABYLON.Color3(0, 0, 0.22);
    nx.defaultMat1.backFaceCulling = false;
    // var texture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    var texture = new BABYLON.Texture("./copyrightnetcinematics/3d/spacebox1/spacebox1_pz.jpg", nx.scene);
    texture.vScale = 1.0; //How many images span the surface.
    texture.uScale = 30.0; //Lots of images squashed and stretched makes an interesting effect-.
    nx.defaultMat1.diffuseTexture = texture;

    //UTILITY: EDIT-COLORS-. todo utility
    nx.greenMat = new BABYLON.StandardMaterial("green1", nx.scene);
    nx.greenMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
    nx.redMat = new BABYLON.StandardMaterial("red1", nx.scene);
    nx.redMat.diffuseColor = new BABYLON.Color3(1, 0, 0);
    nx.blueMat = new BABYLON.StandardMaterial("blue1", nx.scene);
    nx.blueMat.diffuseColor = new BABYLON.Color3(0, 0, 1);

}
/*************************************************************************-END-MATERIALS-TEXTURES-***********************************/


/*********************************CREATE-WORLD******************************/
var createWorld = function(){ //APPSHELL- createEpic is World
    console.log('create world')
    nx.engine = new BABYLON.Engine(nx.canvas, true);
    nx.scene = new BABYLON.Scene(nx.engine);

    // nx.showCurtain({dur:3000,speed:3000,initCurtain:function(){
        createSpace();
        createLights(); //todo turn back on FIX: break shadow
        
        // createSpace();
        // nx.createStarfield1();
        // nx.createNebula1();
        // createStage(); //called by loader-.
        // createLights(); //todo turn back on
        createDefaultCamera();
        createAssets();
        // createSounds(); //op: create sound after user gesture.
        // createBoxes();
        // createCentroid();
        createFPSUI();
        
        // createEditColors();
        createDefaultMaterials();
    // }}); //end show curtain
  // All immobile meshes can be now frozen to avoid un-needed matrix computations //TODO OPTIMIZE-.
//   skybox.freezeWorldMatrix();
//   ground.freezeWorldMatrix();
    /******************************Initialization******************************/
    nx.canvas.tabIndex = 0; //accessibility
    // scene.clearColor = new BABYLON.Color3(.33,.44,.55);
    nx.scene.autoClear = false; //background color optimization
    nx.scene.autoClearDepthAndStencil = false; // Depth and stencil optimization

    nx.engine.runRenderLoop(function(){ nx.scene.render(); }); //the-one-render-loop-.
    window.addEventListener('resize', function(){ nx.engine.resize(); });
}
/**************************-END-CREATE-WORLD-****************************************/
/**************************-BABYLON-LOADER-****************************************/
var loadBabylon = function() {
    var load = (function() { //https://davidwalsh.name/javascript-loader
      function _load(tag) { // Function returns a function: https://davidwalsh.name/javascript-functions
        return function(url) {
          return new Promise(function(resolve, reject) { //used by Promise.all to determine success or failure
            var element = document.createElement(tag);
            var parent = 'body';
            var attr = 'src';
            element.onload = function() { resolve(url); }; //success and error for the promise
            element.onerror = function() { 
                console.log('module error');
                reject(url); 
            };
            switch(tag) { //different attributes depending on tag type
              case 'script': element.async = true; break;
              case 'link': element.type = 'text/css'; element.rel = 'stylesheet'; attr = 'href'; parent = 'head';
            }
            // try{
                element[attr] = url; //inject and load
                document[parent].appendChild(element);
            // } catch (e) { console.log('errrrr') }
          });
        };
      }
      return { js: _load('script'), css: _load('link')/*, img: _load('img')*/ }
    })();
    Promise.all([
        load.js('./libs/babylon/babylon.3.0.2-alpha.max.js'), /*working bjs from sps scene 8 */
        // load.js('./libs/babylon/babylon3.2-min.js'), /*working bjs from sps scene 8 */
        // load.js('./libs/babylon/babylon.3.0-min.js'),      /*error in jitter and particles??? contains MORPHTARGET*/
        load.js('./libs/babylon/hand.min-1.2.js') ,
        // load.js('./lib/babylon/hand.min-1.2.js') ,
        // load.js('./copyrightnetcinematics/templateModule1.js') 
        // load.css('lib/.css'),// load.img('images/logo.png')
        // load.css('./libs/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css')
        load.css('./libs/font-awesome/fontawesome-free-5.10.2/css/all.min.css')
      ]).then(function() {
        // debugger;
        console.log('MODULE-LOADING: one time.');
        // try{
            // load.js('./copyrightnetcinematics/templateModule1.js') 
            //NOTE: disable caching and reenable in Network tab of dev tools.
            // load.js('./libs/babylon/materials/babylon.gridMaterial.min.js')
            // load.js('./copyrightnetcinematics/modOrbyOrbot.js') //to nxv4
            load.js('./copyrightnetcinematics/nxv4/modOrbyOrbot16.js') 
            load.js('./copyrightnetcinematics/modGroundz.js') 
            load.js('./copyrightnetcinematics/modSpace.js') 
            load.js('./copyrightnetcinematics/modAlphaMoon.js') 
            // load.js('./copyrightnetcinematics/modCamz.js') //to nxv4DONE
            load.js('./copyrightnetcinematics/nxv4/modCamz3.js') 
            load.js('./copyrightnetcinematics/mod2dtxt.js') 
            load.js('./copyrightnetcinematics/modBugz3.js') 
            load.js('./copyrightnetcinematics/modGemz1.js') 
            // load.js('./copyrightnetcinematics/modPyramidz1.js') //to nxv4DONE (unnecessary)
            load.js('./copyrightnetcinematics/modPyramidz1.js') 
            // load.js('./copyrightnetcinematics/modHalfpipe.js') //to nxv4DONE (unnecessary)
            load.js('./copyrightnetcinematics/modHalfpipe.js') 
            // load.js('./copyrightnetcinematics/modKeyCtrlz.js') //to nxv4DONE
            load.js('./copyrightnetcinematics/nxv4/modKeyCtrlz3.js') 
            // load.js('./copyrightnetcinematics/modZapBot.js')  // to nxv4DONE (unnecessary)
            load.js('./copyrightnetcinematics/nxv4/modDarkBot2.js') 
            load.js('./copyrightnetcinematics/modZapBot.js') 
            load.js('./copyrightnetcinematics/modZonez.js') 
            // load.js('./copyrightnetcinematics/modEditorz.js') //to nxv4DONE
            load.js('./copyrightnetcinematics/nxv4/modEditorz3.js') 
            load.js('./copyrightnetcinematics/nxv4/modMenu1.js') 
            // load.js('./copyrightnetcinematics/modSonicz1.js')  //to nxv4DONE
            load.js('./copyrightnetcinematics/nxv4/modSonicz2.js')  
      }).then(function(){
        setTimeout(function(){ 
            createWorld(); 
            // nx.showCurtain({dur:1000,speedFI:1000,initCurtain:function(){
                // createWorld();
            // }}); 
        },1) //create-appshell-world-.
      }).then(function(){
      // }).then(function(){
      //   debugger;
        nx.loadEpicSeq(); //load-scene0-.
      // }).then(function(){
      //   debugger;
        nx.loadGameSeq();//load-scene0-.

// debugger;
        // nx.ui.initFlashCanvas(); //-----------------------------------------todo

      // }).then(function(){
      //   debugger;
        // setTimeout(function(){nx.createMasterStart();},100);
        // setTimeout(function(){ nx.loadEpicSeq(); },100) //load-scene0-.
        // setTimeout(function(){ nx.loadGameSeq(); },100) //load-scene0-.
      }).catch(function() { console.log('ERROR: loading babylonjs'); });
}

export var initAnmscape = function(){
    initNX(nx);
    loadBabylon(); //then promise to createWorld-.
}
/*********************************-END-BABYLON-LOADER-******************************/
/*********************************-NX-LOAD-EPIC-******************************/
nx.epicSeq=[
    'acozmobotz1', //from acinematix1.
    // 'epic1', //from acinematix1.
    // 'acinematix1', //from combined1.
    // 'combined1', //from 2dtxt1.
    // '2DTXT1', //from aaOpeningCrashSeq1: 1: 2dtxt.
    // 'aaOpeningCrashSequence7', //from sandCrashSeq12 1: nice landpad 2: zapbot path 3: zapup 4:seqfixes 5: gemz tower 6: tower botz 7:
];//scene versioning mechanism
nx.loadEpicSeq = function(/*scriptIdx*/){ //epic-loader-.

    var epicPath = './epicz/'+nx.epicSeq[nx.epicSeqIdx]+'.js';
    import(epicPath)
    .then(function(epicData) {
        nx.modEPICZ = epicData;
        // debugger;
        nx.setMasterManifest();
        // epicData.initEpicz();
        // nx.epicSet.push(epicData); //save epicss for cleanup-.
        // nx.epicSeqIdx++;  //increment forward in epicSequence-.
    }).catch(function(e){console.log('error loading epic: '+e)})


    // debugger;
    nx.getMasterManifest(function(){ //get await spot in line on manifest to  loading-count.
    // debugger;
        nx.modEPICZ.initEpicz(); //READY-TO-RENDER-.
    });

}   
/*********************************-END-LOAD-EPIC-******************************/


/*********************************-NX-LOAD-GAME-******************************/
nx.gameSeq=[
    'gamez1', //from acinematix1.
];//scene versioning mechanism
nx.loadGameSeq = function(/*scriptIdx*/){ //epic-loader-.
    // debugger;
    var gamePath = './gamez/'+nx.gameSeq[nx.gameSeqIdx]+'.js';
    import(gamePath)
    .then(function(gameData) {
        nx.modGAMEZ = gameData;
        // debugger;
        nx.setMasterManifest();
        // debugger;
        // gameData.initGamez();
        // nx.gameSet.push(gameData); //save gamez for cleanup-.
        // nx.gameSeqIdx++;  //increment forward in gameSequence-.
    }).catch(function(e){console.log('error loading gamez: '+e)});

    // debugger;
    nx.getMasterManifest(function(){ //get await spot in line on manifest to  loading-count.
        // debugger;
        nx.modGAMEZ.initGamez(); //READY-TO-RENDER
    });

}   
/*********************************-END-LOAD-EPIC-******************************/

/*********************************-NX-LOAD-Epic-******************************/
nx.nextEpicSeq = function(/*scriptIdx*/){ //Epic-loader-.
    debugger; //unused-.
    var epicPath = './epicz/'+nx.epicSeq[nx.epicSeqIdx]+'.js';
    import(epicPath)
    .then(function(epicData) {
        nx.unloadEpicSeq();
        epicData.initEpicz();
        nx.epicSet.push(epicData); //save epicss for cleanup-.
        nx.epicSeqIdx++;  //increment forward in epicSequence-.
    }).catch(function(e){console.log('error loading epic: '+e)});
}   
/*********************************-NX-LOAD-SCENE-******************************/
/*********************************-NX-UNLOAD-SCENE-******************************/
nx.unloadEpicSeq = function(){
    if(!nx.epicSet || !nx.epicSet[nx.epicSeqIdx-1] || !nx.epicSet[nx.epicSeqIdx-1].unloadEpic ){return}
    console.log('BEFORE-UNLOAD')
    console.log(nx.scene.meshes.length)
    console.log(nx.scene.materials.length)
    console.log('____')
    nx.epicSet[nx.epicSeqIdx-1].unloadEpic()
    console.log('AFTER-UNLOAD')
    console.log(nx.scene.meshes.length)
    console.log(nx.scene.materials.length)
    console.log('____')
}
/*********************************-NX-UNLOAD-SCENE-******************************/
nx.showCurtain = function(config){ // {config.startEpicIDX:0,fadeCurtain:0}
    var dur = (config && config.dur)?config.dur : 1000; //amount of time black
    var speedFO = (config && config.speedFO)?config.speedFO : "fast"; 
    var speedFI = (config && config.speedFI)?config.speedFI : 3000; 
    // $('canvas').fadeOut("fast"); 
    $('canvas').fadeOut(speedFO); 
    if(config.initCurtain){config.initCurtain()}
    setTimeout(function(){ //important delay: allows animations time to stop, in cinemaStop
        // nx.cinemaStop = 0; //reset after animations stop
        // debugger;
        // nx.anmfn = null; //stops the startCinematicSequence
        // if(config.startEpicIDX>=0) { nx.movieRunner(config.startEpicIDX); } // only restart if idx given-. else just stop movie-.
        // if(config && config.startEpicIDX>=0 && config.startEpicIDX!=null) { nx.movieRunner(config.startEpicIDX); } // only restart if idx given-. else just stop movie-.
        // $('canvas').fadeIn("fast"); 
        $('canvas').fadeIn(speedFI); 
        if(config.afterCurtainUp){config.afterCurtainUp()}
    },dur)

}
//STOP all EPIC ANIMATIONS and then allow cinematic loop restart-.
nx.stopMovie = function(config){ // {config.startEpicIDX:0,fadeCurtain:0}
// debugger; //deprecated? NOPE. //todo needs to be stopCinemo and move to EPIC? or CINEMOZ stopSEQ
    nx.cinemaStop = 1; 
    nx.cinematicMode = 0; 
    var dur = (config && config.dur)?config.dur : 1000;
    if(config && config.fadeCurtain) { $('canvas').fadeOut(); }
    if(config && config.initFn){ setTimeout(function(){ config.initFn(); },500)  } //call after dark
    setTimeout(function(){ //important delay: allows animations time to stop, in cinemaStop
        nx.cinemaStop = 0; //reset after animations stop
        // debugger;
        // nx.anmfn = null; //stops the startCinematicSequence
        // if(config.startEpicIDX>=0) { nx.movieRunner(config.startEpicIDX); } // only restart if idx given-. else just stop movie-.
        // if(config && config.startEpicIDX>=0 && config.startEpicIDX!=null) { nx.movieRunner(config.startEpicIDX); } // only restart if idx given-. else just stop movie-.
        if(config && config.endFn){config.endFn()} //call right before fading back in
        if(config && config.fadeCurtain) { $('canvas').fadeIn(); }
    },dur)

}

// nx.restartMovie = function(){
//     nx.cinemaStop = 0;
//     nx.cinematicMode = 1;
// }

/******************************************************************-MASTERSEQUENCE-******************************\
= MasterSequence - purpose for dynamic restart and dynamic clean up of scene specific elements
\****************************************************************************************************************/


/******************************************************************-createMasterStart-*******************************\
- create animated epic from anmscript
- the naming convention is difficult because of nx.scene. I would call that episode.... epic
- ui.scene is smaller and wrapped up in epics - an episode has epics and epics have scenes
- this function will read script, populate all the epicTXT, init scene and run scene, and end scenes OR EPICZ.
\***************************************************************************************************************/


/*************************************************-MASTER-MANIFEST-***********************************************\
PURPOSE: solve the problem - when are all the assets loaded, at beginning, or dynamically at runtime-.
DESIGN: publisher/subscriber uses callback to resolve each new package addition-. The last item finishes/resets load.
EXTEND: initEpisode() override to point to each dynamically loaded episode init-. 
EXAMPLE USE:
   nx.getMasterManifest(function(){ mod.init(); });//get await spot in line on manifest to  loading-count.
   nx.setMasterManifest(); //after assetLoad, signal asset arrived-.
\*****************************************************************************************************************/
nx.manifestIDX = 0;
nx.readyRender = [];
nx.getMasterManifest = function(readyFn){ nx.readyRender.push(readyFn); } //get await spot in line on manifest to  loading-count.
nx.setMasterManifest = function(){ nx.manifestIDX++; //set await arrival from loaded asset
    if(nx.manifestIDX===nx.readyRender.length){ //all packages arrive-. Load at episode and reset-.
        console.log('MODULE-LOADING: COMPLETE',nx.manifestIDX,nx.readyRender.length);
        for(var i=0; i < nx.readyRender.length; i++){  nx.readyRender[i](); } //callback-.
        nx.createMasterStart(); //todo initEpisode();
        nx.readyRender = []; //all assets loaded, callback functions to render all modules-.
        nx.manifestIDX = 0; //reset-ready-renderer-.
        nx.createCinematicLoop(); //start up sequence loop TEST
    } else if( nx.manifestIDX > nx.readyRender.length){
        console.log('MODULE-LOADING: overflow',nx.manifestIDX,nx.readyRender.length)
        debugger; //error TEST 27 24
    } else {
        console.log('MODULE-LOADING: PROGRESS',nx.manifestIDX,nx.readyRender.length);
    }
}

nx.afterMasterAssetsReady = [];
nx.createMasterStart = function(){

// nx.afterMasterAssetsReady = function(){ //init sequences after assets load
    // nx.afterMasterAssetsReady.push( function(){ //cool way to init sequences after assets load



        // gameData.initGamez();
        // epicData.initEpicz();


// debugger;


        //DESIGN: Master Sequence has masterSEQID. Any subSEQID can go into any master sequence

        // nx.masterIDX = 1; //playhead index of what is playing now-. Used to clean up after current scene-.
        // nx.masterSequence = { 1:nx.SEQZ[1],2:nx.GAMEZ[2],3:nx.SEQZ[3],4:nx.GAMEZ[4],5:nx.SEQZ[5] }; 

        // nx.currentSequence = null; //todo activeSEQ.
        nx.activeSEQ = null; 
         //TODO: simply assign nx.currentSEQ




         //NEED TO MAKE SEQUENCES GENERAL with BOTH seqID and epicID gameID txtID.
         //MASTER-SEQUENCES and SUB-SEQUENCES; MSTRSEQ and SUBSEQ-. 
         //make it possible to load with seqID or subSeqID

        // debugger;
        
        //---------------------------------MASTER~SCRIPT------------------------------------------------
        // nx.runSCENE({id:"IntroSEQ",frame:0,type:'SEQ'}); //SCENEZFactory-.
        // nx.runSCENE({id:"VortexSEQ",frame:0,type:'SEQ'}); //SCENEZFactory-.
        // nx.runSCENE({id:"TestWorldSEQ"}); //SCENEZFactory-.
        // nx.initSEQ({seqID:SCENEitem.id,frame:SCENEitem.frame}); 
        //GAME 1 INIT / RUN --------------------------------------------------------------------------------------
        // nx.initGAME({gameID:"SpaceIonz"}); //softload GO IONZ!
        // nx.initSEQ({seqID:'landingSequence'}); //softload Landing Seq!
        // debugger;
        // nx.initGAME({gameID:'Showdown'}); //space pipe game
        nx.initSEQ({seqID:'sneakSEQ'}); //softload Landing Seq!
        //---------------------------------------------------------------------------------
        
        
        // nx.initSEQ({seqID:1}); //Orby Space Origin-.


        // nx.masterSequence = [nx.SEQZ[1],nx.GAMEZ[1],nx.SEQZ[2],nx.GAMEZ[2],nx.SEQZ[3]];
        // MASTERSTART------------------------------------------------------------------MASTERSTART-. masterview
        //TODO: generalize seqID and gameID and txtID to --> seqID??? or seqName is even better. unordered descriptive-.
        // nx.initSEQ({seqID:1}); //Orby Space Origin-.
        //GAME 1 INIT / RUN --------------------------------------------------------------------------------------
        // nx.initGAME({gameID:2}); //softload GO IONZ!
        //EPIC 2 INIT / RUN --------------------------------------------------------------------------------------
        // nx.initSEQ({seqID:3}); //softload Landing Seq!
        //GAME 4 INIT / RUN --------------------------------------------------------------------------------------
        // nx.initGAME({gameID:4}); //softload LandingPad Showdown!
        //EPIC 5 INIT / RUN --------------------------------------------------------------------------------------
        // nx.initSEQ({seqID:5})//DOORSEQUENCE
        //EPIC 6 INIT / RUN --------------------------------------------------------------------------------------
        // nx.initSEQ({seqID:6})//CRASHSEQUENCE
        //GAME 5 - Orby SpaceTrain------------------------------------------------------------
        // nx.initGAME({gameID:5}); //softload: Scan SpaceTrain!
        //EPIC 7 INIT / RUN --------------------------------------------------------------------------------------
        // nx.initSEQ({seqID:7})//AFFIRMATIONSEQUENCE
        //EPIC 8 INIT/RUN------------------------------------------------------------------------
        // nx.initSEQ({seqID:8})//ScanTrainSEQUENCE
        //EPIC 8 INIT/RUN------------------------------------------------------------------------
        // nx.initSEQ({seqID:9})//FINALSEQUENCE Reckoning


    // })

}
// nx.createMasterStart();


//METHODOLOGY: aEPIC,aSCENE,aSEQ,aFRAME,aANM-.
//TODO: nx.startAScene add to sceneState.js aSCENE
nx.runSCENE = function(SCENEitem){ //SCENEFACTORY-. SCENEZ are (dynamic) either SEQ or GAM or TXT
    if(!SCENEitem || !SCENEitem.id){return}
    if(!SCENEitem.type){ SCENEitem.type='SEQ'; /*todo search sceneitem.id for SEQ,TXT,GAM*/}
    // {id:"IntroScene",start:0,type:'SEQ'}
    if(SCENEitem.type==='SEQ'){
        if(!SCENEitem.frame){ SCENEitem.frame='0';}
        nx.initSEQ({seqID:SCENEitem.id,frame:SCENEitem.frame}); //Orby Space Origin-.
        // nx.initSEQ({seqID:1}); //Orby Space Origin-.
    }else if (SCENEitem.type==='GAM'){
    }else if (SCENEitem.type==='TXT'){}
}

//Beautiful-to-me-. //todo utility
nx.RGBAtoNormal = function(r,g,b,a){
 a = (a)?a:1; //FAULT-TOLERANCES-built-in-ANMFACTORY~METHODOLOGY-.
 if(r===typeof 'object'){debugger;}
 if(r && g && b){return new BABYLON.Color4(r/255,g/255,b/255,a);}
 return new BABYLON.Color4(0.22, 0.44, 0.88, 1.0);
}