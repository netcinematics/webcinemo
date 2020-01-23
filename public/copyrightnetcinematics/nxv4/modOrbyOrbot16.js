/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No complete distribution without permission.
//For full distribution opportunities contact alpinefalcon@protonmail.com or netcinematics@protonmail.com. 
// If you want to use this code, great. No implied warranty. - (clean) MIT Open-source templates available.
//Contact alpinefalcon@protonmail.com for collaboration opportunities, affiliations, and future ventures.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('a module-loaded: Orby')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
if(!nx.orby){nx.orby = {}}
if(!nx.orby.sparks){nx.orby.sparks = {}}
/******************************-MODULE-**********************************/

if(nx.getMasterManifest){nx.getMasterManifest(function(){}) }; //get await spot in line on manifest to  loading-count.

/*******************************-ANMZ-************************************\
 //TODO PUT IN ORBY.ANMZ! as fn-wrapperz-.
var fall = nx.scene.beginAnimation(nx.orbySkeleton[0], 0, 10, false, 1.0);  //jump apex
var surfIdle = nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //ANIMATED-SURFBOARD-.
var animo = nx.scene.beginAnimation(nx.orbySkeleton[0], 20, 25, false, 1.0); //compress
var jmp1 = nx.scene.beginAnimation(nx.orbySkeleton[0], 25, 35, false, 1.0);  //jump apex
var jmp2 = nx.scene.beginAnimation(nx.orbySkeleton[0], 35, 50, false, 1.0);  //landing
var prone = nx.scene.beginAnimation(nx.orbySkeleton[0], 1, 1, false, 1.0);  //prone
var titleANM1 = nx.scene.beginAnimation(nx.orbySkeleton[0], 410, 488, false, 1.0);  //title
var titleANM2 = nx.scene.beginAnimation(nx.orbySkeleton[0], 488, 500, false, 1.0);  //title eye back
var titleANM3 = nx.scene.beginAnimation(nx.orbySkeleton[0], 500, 520, false, 1.0);  //title eye back
var fastDwn = nx.scene.beginAnimation(nx.orbySkeleton[0], 321, 340, false, 1.0);  //fastdown
var fastUp = nx.scene.beginAnimation(nx.orbySkeleton[0], 340, 350, false, 1.0);  //fastup
var lookLazer = nx.scene.beginAnimation(nx.orbySkeleton[0], 150, 200, false, 1.0);  //Look At Lazer
fastUp.onAnimationEnd = function(){nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);  } //idle
nx.scene.stopAnimation(nx.orbySkeleton[0]) 
var jmpCompress = nx.scene.beginAnimation(nx.orbySkeleton[0], 20, 25, false, 1.0); //compress
jmpCompress.onAnimationEnd = function (){
    var jmpApex = nx.scene.beginAnimation(nx.orbySkeleton[0], 25, 35, false, 1.0);  //jump apex
    jmpApex.onAnimationEnd = function(){
        var jmpFall = nx.scene.beginAnimation(nx.orbySkeleton[0], 35, 50, false, 1.0);  //landing
        jmpFall.onAnimationEnd = function(){
            nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);  //idleanm
        }
    }
}

//LASER-POS-.
nx.orby.lookFactory('proneLookUp')
var prone = nx.scene.beginAnimation(nx.orbySkeleton[0], 150, 150, false, 1.0);  //laser
var prone = nx.scene.beginAnimation(nx.orbySkeleton[0], 150, 160, false, 1.0);  //laser-thumb
var sitUp = nx.scene.beginAnimation(nx.orbySkeleton[0], 520, 550, false, 1.0);  //orby sit up
var lookback = nx.scene.beginAnimation(nx.orbySkeleton[0], 700, 720, false, 1.0);  //orby look back
var lookfwd = nx.scene.beginAnimation(nx.orbySkeleton[0], 720, 740, false, 1.0);  //orby look fwd again
nx.scene.beginAnimation(nx.orbySkeleton[0], 700, 708, false, 0.33);  //look back slow

/*******************************-ANMZ-************************************/
nx.loadOrbyAssets = function() {
    if(!nx.scene){return;}
    BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot24a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot22e.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot22d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot22c.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot19b.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot20a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot19d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot18d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot17d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    //    nx.orbyMesh = newMeshes[0]; //spacewaverider
        // nx.orbyMeshBody = newMeshes[1]; //orbymesh
        nx.orbyMesh = nx.scene.getMeshByName('spacewaverider') 
        // nx.orbyMesh.convertToFlatShadedMesh();
        nx.orbyMeshBody = nx.scene.getMeshByName('orbymesh') ; //orbymesh
        nx.orbySkeleton = skeletons;
        
        nx.orbyMesh.position.copyFrom(nx.anmz.orby.rig.originBox.position);
        nx.orbyMesh.rotation = new BABYLON.Vector3(0,Math.PI,0); //align-initial-rotation-.
        nx.orbyMesh.scaling = new BABYLON.Vector3(1*nx.anmz.orby.scale,1*nx.anmz.orby.scale,1*nx.anmz.orby.scale,)
        // nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //ANIMATED-SURFBOARD-. Move out to scriptz
        
        
        nx.orbyMesh.setPivotPoint(new BABYLON.Vector3(0, -3, 0)); //spacewaverider pivot
        
        nx.orbyMouth = nx.scene.getMeshByName('orbyMouthCover') ; //orbyMouth
        if(nx.orbyMouth) nx.orbyMouth.parent = nx.orbyMesh
        
        
        // debugger;

    
    // nx.orby.lftFingerIndex = nx.orbySkeleton[0].bones[35]; //lftTipIndex
    // debugger;
    
    
        
        nx.lazerbox = nx.scene.getMeshByName('lazerbox') ; //lazerbox
        nx.lazerbox.attachToBone(nx.orbySkeleton[0].bones[35], nx.orbyMesh); //left-index-tip-.
        // nx.lazerbox.attachToBone(nx.orbySkeleton[0].bones[47], nx.orbyMesh); //right-index-tip-.
        nx.lazerbox.position.y = 0.17
        // nx.lazerbox.position.x = 0.1
        nx.lazerbox.visibility = 1;


        // nx.scene.registerBeforeRender(function() {
        //     if(!nx || !nx.orby || !nx.orby.lftFingerIndex){return;}
        //     console.log(nx.orby.lftFingerIndex.getAbsolutePosition());
        // });
        // if(nx.lazerbox) nx.lazerbox.parent = nx.orbyMesh
        // debugger;
        nx.orby.iris = nx.scene.getMeshByName('separatedIRIS') 
        // if(nx.iris) nx.iris.parent = nx.orbyMesh
        nx.orby.eye = nx.scene.getMeshByName('separatedEYE') 
        
        nx.orby.noMouth = nx.scene.getMeshByName('orbymeshNoMouth')
        
        nx.orby.mouthCover = nx.scene.getMeshByName('orbyMouthCover');
        // if(nx.eye) nx.eye.parent = nx.orbyMesh
        //lookFactory
        // var prone = nx.scene.beginAnimation(nx.orbySkeleton[0], 1, 1, false, 1.0);  //prone
        
        // var manager = new BABYLON.MorphTargetManager();
        // nx.orbyMeshBody.morphTargetManager = manager;
        // nx.orby.EYEMLTGT = new BABYLON.MorphTarget("EYEML", 0);
        // nx.orby.EYEMLTGT.setPositions(nx.orby.EYEML);
        // manager.addTarget(nx.orby.EYEMLTGT);
        // nx.orby.EYEMLTGT.influence = 0;
        // nx.orbyMeshBody.morphTargetManager = manager;
        // nx.orby.IRISMLTGT = new BABYLON.MorphTarget("IRISML", 0);
        // nx.orby.IRISMLTGT.setPositions(nx.orby.IRISML);
        // manager.addTarget(nx.orby.IRISMLTGT);
        // nx.orby.IRISMLTGT.influence = 0;



        //ORBY-ELLIPSOID-IMPOSTOR
        var boardNoseLength = 3.2 * nx.anmz.orby.scale;
        var hoverHeightControl = nx.anmz.orby.hover * nx.anmz.orby.scale;// 1.35;//y axis of both makes for hover height 2.5 too low it hits dirt.
        var hoverClearance = nx.anmz.orby.clearance * nx.anmz.orby.scale; //allows hover over bumps.

//TODO probably not used since initial setting
        nx.orbyMesh.ellipsoid = new BABYLON.Vector3(2, hoverHeightControl, boardNoseLength);  
        // nx.orbyMesh.ellipsoid = new BABYLON.Vector3(2, -15, boardNoseLength);  

        // nx.orbyMesh.ellipsoidOffset = new BABYLON.Vector3(-1, -15, 0); //todo
        nx.orbyMesh.ellipsoidOffset = new BABYLON.Vector3(-1, hoverClearance, 0); //todo

        //DIAGNOSTICS: bounding info
        // nx.orbyMesh.showBoundingBox = true;
        // var x = meshPlayer.getBoundingInfo();


        //ORBY-CAM-FOCUS-TARGET-.
        nx.orbyMesh.camFocusTgt = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene); 
        nx.orbyMesh.camFocusTgt.position = new BABYLON.Vector3(0, 0, 0);
        nx.orbyMesh.camFocusTgt.rotation = new BABYLON.Vector3(0, Math.PI, 0);
        nx.orbyMesh.camFocusTgt.isVisible = 0; 
        //TODO compute a reliable hover target smoothed on ROT and Y. World x and z with Y low pass filter 
        // nx.orbyMesh.camFocusTgt.parent =  nx.orbyMesh;


        //INIT-ANIM-LOOP
        nx.scene.registerBeforeRender(function() {
            if(!nx.orbyMesh){ if(nx.anmz.orby.audit){console.log('>Wait: no mesh')};  return; } //TODO create this on mesh loaded-callback and remove this.
            if(!nx.isCinematicMode || nx.isCinematicMode()){
              if(nx.anmz.orby.hoverMode){ //hover for cinematic MODE, todo fix hover for game mode only to both-. remove this?
                nx.anmz.orby.hoverAlpha += 0.05; //orby-hover-.
                  nx.orbyMesh.position.y += nx.anmz.orby.hoverAmount * Math.cos(nx.anmz.orby.hoverAlpha);
              }
               return;
            } //silent return if(nx.anmz.orby.audit){console.log('>Skip AnmLoop')}
            // if(nx.anmz.orby.isIdle()){ return; } //silent return if(nx.anmz.orby.audit){console.log('>Skip AnmLoop')}
            else { //Orby-Anmz-.
                // if(nx.anmz.orby.audit){console.log('>Run AnmLoop')}  
                // if(nx.anmz.orby.audit){ nx.anmz.orby.auditAnmz() }
                if(nx.orbyAnmLoop){nx.orbyAnmLoop()} //todo takeout fn check
            }
        });



                // debugger;
        nx.orby.initLaser();

        nx.orby.initShadows(); //todo turn back on

        // nx.anmz.orby.hoverMode = 1 //TODO change to initHover();

    		// nx.createOrbySparkSystem(); //SPARK-BOX-.
        // nx.afterOrbyAssetLoad[0](); //TODO: call each fn()-. OR - LOOP INIT in BEFORERENDER-.
        // nx.afterMasterAssetsReady[0](); //TODO: if length, waiting, increment callbacks, and call [0] on final one?

// debugger;
        if(nx.setMasterManifest){ nx.setMasterManifest(); }

    }); //end import orby?



  //       // nx.zapBotGlow.addMesh(nx.kiloBotMesh1, new BABYLON.Color3(0,0,0.44));
		// // nx.zapBotGlow = new BABYLON.HighlightLayer('zapbotGlow', nx.scene);
  // //       nx.zapBotGlow.addMesh(nx.kiloBotMesh1, new BABYLON.Color3(0,0,0.44));
  // //       nx.zapBotGlow.blurHorizontalSize = 2;
  // //       nx.zapBotGlow.blurVerticalSize = 2;



  //       nx.createBotz();
  //   }
  //   nx.assetsManager.load();  // IMPORTANT.
}

// loadAssets();
nx.loadOrbyAssets();


          /*********************-ANIM-MODALITY-***********************\
           - anmology: sequence of modes. each mode an anm sequence.
           - sequence[modes];  modes{anm:sequence[];} in concept-.
          \*******************************************************/
          var createAnmz= function(){ 
              var initAnmz = {
                  orby:{idle:0,audit:0,bounceMode:0,freezeMode:0,tiltBounce:0,wallRayMode:0,currentState:'',collisionItems:[],
                      rig:{downRay:{},tiltRay:{},wallRay:{},downRayHit:{},tiltRayHit:{},originBox:{},downSphere:{},tiltSphere:{},rayStub:15},//8
                      jump:{jumpMode:0,jumpArc:0,preJumpMode:0,
                      fallMode:0, hoverMode:0,
                      zappedMode:0
                      },
                    //   scale:1,hover:20,clearance:20,turnSpeed:0.05,
                      scale:1,hover:1,clearance:1,turnSpeed:0.05,
                    //   scale:1,hover:1.5,clearance:1.55,turnSpeed:0.05,
                    //   scale:1,hover:8.5,clearance:8.55,turnSpeed:0.05,
                      startPos:{x:0,y:2,z:0}, //-1452, 451, -546, -1338 1178 -682, //-697 990 -672 //-1034 983 -1013 //-420 54 474 //-1118,1030,-1036
                      // startPos:{x: 0, y: 320, z: 0}, // top pyramid.
                      // startPos:{x: -1930, y: 3370, z: -2484}, // spacesequencestart.
                      // startPos:{x: -1930, y: 3370, z: -2484}, // spacesequencestart.
                      // startPos:{x: -750, y: 1500, z: -1750}, // spacepadstart.
                      // startPos:{x: -420, y: 54, z: 474}, // spacepos.
                      startRot:{x: 0.15, y: -0.35, z: 0.04, w: 0.91}, //0.15,-0.35,0.04,0.91
                      move:{fwd:0,lft:0,rgt:0,ulft:0,urgt:0,jmp:0,trick:0,
                          autofwdSpace:0,autoGO:0},
                      isIdle:function(){
                          nx.anmz.orby.currentState = ''; //calculate state, in movement, or idle-.
                          if(nx.anmz.orby.move.fwd){ nx.anmz.orby.currentState += ' fwd'; }
                          if(nx.anmz.orby.move.lft){ nx.anmz.orby.currentState += ' lft'}
                          if(nx.anmz.orby.move.rgt){ nx.anmz.orby.currentState += ' rgt'}
                          if(nx.anmz.orby.move.ulft){ nx.anmz.orby.currentState += ' ulft'}
                          if(nx.anmz.orby.move.urgt){ nx.anmz.orby.currentState += ' urgt'}
                          if(nx.anmz.orby.move.jmp){ nx.anmz.orby.currentState += ' jmp'}
                          if(nx.anmz.orby.move.autofwdSpace){ nx.anmz.orby.currentState += ' autofwdSpace'}
                          if(nx.anmz.orby.move.autoGO){ nx.anmz.orby.currentState += ' autoGO'}
                          if(nx.anmz.orby.jump.jumpMode){ nx.anmz.orby.currentState += ' jmpMode'}
                          if(nx.anmz.orby.jump.jumpArc){ nx.anmz.orby.currentState += ' jmpIndex'}
                          if(nx.anmz.orby.jump.preJumpMode){ nx.anmz.orby.currentState += ' preJmpMode'}
                          if(nx.anmz.orby.jump.fallMode){ nx.anmz.orby.currentState += ' fallMode'}
                          if(nx.anmz.orby.freezeMode){ nx.anmz.orby.currentState += ' freezeMode'; }
                          if(nx.anmz.orby.bounceMode){ nx.anmz.orby.currentState += ' bounceMode'; }
                          if(nx.anmz.orby.tiltBounce){ nx.anmz.orby.currentState += ' tiltBounce'; }
                          if(nx.anmz.orby.wallRayMode){ nx.anmz.orby.currentState += ' wallRayMode'; }
                          if(nx.anmz.orby.zappedMode){ nx.anmz.orby.currentState += ' zappedMode'; }
                          if(!nx.anmz.orby.currentState){ nx.anmz.orby.currentState='idle';
                              if(!nx.anmz.orby.idle){ //idle-one-time-.
                                  if(nx.anmz.orby.audit){console.log('>IDLE - one time.')}
                                //   nx.orby.lookFactory('runLookFwd'); //set-orby-eye-.
                                  var idle = nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);  //idle
                              }
                              return nx.anmz.orby.idle = true;
                          }
                          return nx.anmz.orby.idle = false;
                      },
                  // edit:{inc:0,dec:0,ext:0},//increment, decrement, extrude.
                  // bugz:{walk:1,look:0,chase:0,bite:0,digging:0,gone:0}
                      auditAnmz:function(){ //anmz-auditor-mechanism-. For precisely seeing what every animation is doing-.
                          console.log('TOP---------------------');
                          console.log('CurrentState: '+nx.anmz.orby.currentState);
                      },
                      jumpAction:function(){
					               if(!nx.anmz.orby.jump.preJumpMode && !nx.anmz.orby.jump.jumpMode &&!nx.anmz.orby.jump.fallMode){ nx.anmz.orby.move.jmp=1; }
                      },
                      trickAction:function(i){ //todo if not i, index, else run i
          					    if(!nx.anmz.orby.jump.preJumpMode && !nx.anmz.orby.jump.jumpMode &&!nx.anmz.orby.jump.fallMode){
          							if(i===1){ nx.anmz.orby.move.trick=1; }
          							else if(i===2){ nx.anmz.orby.move.trick=2; }
          							else if(i===3){ nx.anmz.orby.move.trick=3; }
          							else {
          								//TRICK-TOGGLE-SYSTEM: TERNARY-EXTENSIBLE-TRICK-TOGGLE-INDEX-.
          								nx.anmz.orby.move.trick=(!nx.anmz.orby.move.trickIdx)?
          									nx.anmz.orby.move.trickIdx=1:(nx.anmz.orby.move.trickIdx===1)?
          										nx.anmz.orby.move.trickIdx=2:(nx.anmz.orby.move.trickIdx===2)?
          											nx.anmz.orby.move.trickIdx=3:nx.anmz.orby.move.trickIdx=1;
          							}
          							nx.anmz.orby.move.jmp=1;
          					    }
                      }
                  } //endOrby-.
              }; //endAnmz-.
              nx.anmz = initAnmz; //restart-.  //TODO make this only re-initialize nx.anms.orby?
              // nx.anmz.seq = {};

              //TODO try to make this nx.orby with nx.orby.rig and nx.orby.mesh
          }
          /*********************-END-ANIM-MODEZ-***********************/

/*******************************CREATE-ANIMO*****************************************/
// var createOrbyAnmRig = function(){
nx.createOrbyAnmRig = function(){
    //INIT-originBox-. clearance
    // debugger;
    var startingPtSTUB = 10; //TODO remove - starting hover over ground

    var sPOS = new BABYLON.Vector3(nx.anmz.orby.startPos.x * nx.anmz.orby.scale, startingPtSTUB+ nx.anmz.orby.startPos.y * nx.anmz.orby.scale, nx.anmz.orby.startPos.z * nx.anmz.orby.scale);
    // var sPOS = new BABYLON.Vector3(nx.anmz.orby.startPos.x * nx.anmz.orby.scale, nx.anmz.orby.startPos.y * nx.anmz.orby.scale - 3, nx.anmz.orby.startPos.z * nx.anmz.orby.scale);
    nx.anmz.orby.rig.originBox = BABYLON.MeshBuilder.CreateBox("originBox1", {height:1 * nx.anmz.orby.scale,width:1 * nx.anmz.orby.scale,depth:1 * nx.anmz.orby.scale}, nx.scene);
    nx.anmz.orby.rig.originBox.isVisible = 0;
    // nx.anmz.orby.rig.originBox.isVisible = 1; //also show attached rays-.
    nx.anmz.orby.rig.originBox.position = sPOS;    
    if(nx.anmz.orby.startRot){
        // nx.anmz.orby.rig.originBox.rotationQuaternion = new BABYLON.Quaternion(nx.anmz.orby.startRot.x, nx.anmz.orby.startRot.y, nx.anmz.orby.startRot.z, nx.anmz.orby.startRot.w)
        // nx.orbyMesh.rotation = new BABYLON.Vector3(0,Math.PI,0);
    }
    // nx.anmz.orby.rig.originBox.rotationQuaternion  = BABYLON.Quaternion.RotationAlphaBetaGamma(nx.anmz.orby.startRot.x, nx.anmz.orby.startRot.y, nx.anmz.orby.startRot.z);
    nx.anmz.orby.rig.originBox.scaling = new BABYLON.Vector3(1 * nx.anmz.orby.scale, 1 * nx.anmz.orby.scale, 1 * nx.anmz.orby.scale);
    //---------------------------------------------------------------INIT-DOWNRAY-.
    nx.anmz.orby.rig.downRay = new BABYLON.Ray();
    var rayHelper = new BABYLON.RayHelper(nx.anmz.orby.rig.downRay);
    var localMeshDirection = new BABYLON.Vector3(0, -1,0);
    var localMeshOrigin = new BABYLON.Vector3(0, 0, 0); //add ORIGINOFFSET -ray starts above spaceboard-.
    // var localMeshOrigin = new BABYLON.Vector3(0, -1.5, 0); //add ORIGINOFFSET -ray starts above spaceboard-.
    // var localMeshOrigin = new BABYLON.Vector3(0, -2.5, 0); //add ORIGINOFFSET -ray starts above spaceboard-.
    // var localMeshOrigin = new BABYLON.Vector3(0, -.4, 0);
    var length = nx.anmz.orby.rig.rayStub * nx.anmz.orby.scale; //DOWN-RAY-LENGTH-.
    // var length = nx.anmz.orby.rig.rayStub * nx.anmz.orby.scale;
    rayHelper.attachToMesh(nx.anmz.orby.rig.originBox, localMeshDirection, localMeshOrigin, length);
    // rayHelper.show(nx.scene, new BABYLON.Color3(1,0,0));
    //--------------------------------------------------------------INIT-TILTRAY-.
    nx.anmz.orby.rig.tiltRay = new BABYLON.Ray();
    var rayHelper2 = new BABYLON.RayHelper(nx.anmz.orby.rig.tiltRay);
    // var localMeshDirection2 = new BABYLON.Vector3(0, -1, 1); //tilt ray angle
    var localMeshDirection2 = new BABYLON.Vector3(0, -1, 0.7); //tilt ray angle ADJUSTMENT-.
    var localMeshOrigin2 = new BABYLON.Vector3(0, 0, 0);  //add ORIGINOFFSET -3.0 is right below board.
    // var localMeshOrigin2 = new BABYLON.Vector3(0, -1.5, 0);  //add ORIGINOFFSET -3.0 is right below board.
    // var localMeshOrigin2 = new BABYLON.Vector3(0, -2.5, 0);  //add ORIGINOFFSET -3.0 is right below board.
    // var localMeshOrigin2 = new BABYLON.Vector3(0, -0.4, 0);  //offset down
    // var localMeshOrigin2 = new BABYLON.Vector3(0, -0.1, 0);
    var length2 = nx.anmz.orby.rig.rayStub * nx.anmz.orby.scale + 15; //TILT-RAY-LENGTH-.
    rayHelper2.attachToMesh(nx.anmz.orby.rig.originBox, localMeshDirection2, localMeshOrigin2, length2);
    // rayHelper2.show(nx.scene, new BABYLON.Color3(0,0,1));
    //--------------------------------------------------------------INIT-WALLRAY-.
    nx.anmz.orby.rig.wallRay = new BABYLON.Ray();
    var rayHelper3 = new BABYLON.RayHelper(nx.anmz.orby.rig.wallRay);
    var localMeshDirection3 = new BABYLON.Vector3(0, 0, 1);
    // var localMeshOrigin3 = new BABYLON.Vector3(0, 0.5, 0);
    var localMeshOrigin3 = new BABYLON.Vector3(0, 0, 0); //add ORIGINOFFSET moves RAYS DOWN-.
    // var localMeshOrigin3 = new BABYLON.Vector3(0, -1.5, 0); //add ORIGINOFFSET moves RAYS DOWN-.
    // var localMeshOrigin3 = new BABYLON.Vector3(0, -2.5, 0); //add ORIGINOFFSET
    // var length3 = 1 * nx.anmz.orby.scale; //orig
    var length3 = 2;//1.5;//1 * nx.anmz.orby.scale + 1; //1.5 //ADD length to wall ray as space from wall.
    rayHelper3.attachToMesh(nx.anmz.orby.rig.originBox, localMeshDirection3, localMeshOrigin3, length3);
    // rayHelper3.show(nx.scene, new BABYLON.Color3(0,1,0));
    // debugger;
    //INIT-DOWNSPHERE
    nx.anmz.orby.rig.downSphere = BABYLON.MeshBuilder.CreateSphere('', {diameter: 1}, nx.scene);
    nx.anmz.orby.rig.downSphere.scaling = new BABYLON.Vector3(1 * nx.anmz.orby.scale, 1 * nx.anmz.orby.scale, 1 * nx.anmz.orby.scale);
    nx.anmz.orby.rig.downSphere.setEnabled(true);
    // nx.anmz.orby.rig.downSphere.visibility=1;
    nx.anmz.orby.rig.downSphere.visibility=0;
    //INIT-TILTSPHERE-.
    nx.anmz.orby.rig.tiltSphere = BABYLON.MeshBuilder.CreateSphere('', {diameter: 1}, nx.scene);
    nx.anmz.orby.rig.tiltSphere.scaling = new BABYLON.Vector3(1 * nx.anmz.orby.scale, 1 * nx.anmz.orby.scale, 1 * nx.anmz.orby.scale);
    nx.anmz.orby.rig.tiltSphere.setEnabled(true);
    // nx.anmz.orby.rig.tiltSphere.visibility=1;
    nx.anmz.orby.rig.tiltSphere.visibility=0;
    // //INIT-ANIM-LOOP
    // nx.scene.registerBeforeRender(function() {
    //     if(!nx.orbyMesh){ if(nx.anmz.orby.audit){console.log('>Wait: no mesh')};  return; } //TODO create this on mesh loaded-.
    //     if(nx.anmz.orby.isIdle()){ return; } //silent return if(nx.anmz.orby.audit){console.log('>Skip AnmLoop')}
    //     else { 
    //         if(nx.anmz.orby.audit){console.log('>Run AnmLoop')}  
    //         if(nx.anmz.orby.audit){ nx.anmz.orby.auditAnmz() }
    //         orbyAnmLoop()
    //     }

    // });

    //TODO: move up. Also add Wall modes-.
	nx.anmz.orby.hoverAlpha = 0; //used to make him float up and down-.
	nx.anmz.orby.zapAlpha = 0; //used to make him convulse on zap-.
  nx.anmz.orby.hoverAmount = 0.01;
}

/******************************* - ANIMATIONS - *********************************/

nx.orbyAnmLoop = function () {

    if(nx.worldOrbiting){return;} //transition between levels
    // if(nx.anmz.orby.isIdle() && nx.anmz.orby.hoverMode){ 
    if(nx.anmz.orby.intermissionFreeze){ return; }//SKIP-ALL-PROCESSING: raycasts and movement logic-. 
    else if(nx.anmz.orby.forceIdle) { //freeze orby movement, but idle for anm-.
    nx.anmz.orby.hoverAlpha += 0.05; //orby-hover-.
    nx.orbyMesh.position.y += nx.anmz.orby.hoverAmount * Math.cos(nx.anmz.orby.hoverAlpha);

    } //SKIP-ALL-PROCESSING: raycasts and movement logic-. 
    else if(nx.anmz.orby.isIdle()){ //SKIP-ALL-PROCESSING: raycasts and movement logic-. 
    // if(nx.anmz.orby.isIdle()){ //SKIP-ALL-PROCESSING: raycasts and movement logic-. 
                    // debugger;         
        if(nx.anmz.orby.hoverMode){ //init at landing not while in space-.
            nx.anmz.orby.hoverAlpha += 0.05; //orby-hover-.
            nx.orbyMesh.position.y += nx.anmz.orby.hoverAmount * Math.cos(nx.anmz.orby.hoverAlpha);
        }


                // return; 
    }
    else if(nx.anmz.orby.zappedMode){
    	// debugger;
                 
        nx.anmz.orby.zapAlpha += 0.5; //orby vertical zap-.
        nx.orbyMesh.rotation.x += 0.03 * Math.cos(nx.anmz.orby.zapAlpha);
        nx.orbyMesh.position.y += 0.08 * Math.cos(nx.anmz.orby.zapAlpha);
        nx.orbyMesh.rotation.z += 0.03 * Math.cos(nx.anmz.orby.zapAlpha);


     	// return;
     } 
    //anmMovement();
    else { // ORBY-MOVEMENT-MODE-.
       if(nx.camz && nx.camz.checkCam){nx.camz.checkCam();} //todo rename autocam //automatically switch cameras in some situations-. 
	    anmRigRayCasts();
        anmSurfMovement();
        if(nx.camz.isSmoothCam()){nx.camz.setSmoothCam()}
    }
}
// var checkCam = function(){ //when orby moves change to default cam if it was different-.

//   // if(nx.camz.freeCam.isInFrustum(nx.orbyMesh)){

//   //IN-VIEW-FRUSTURM?
//   if(nx.scene.activeCamera.name==='freeCam1' &&  !nx.camz.freeCam.isCompletelyInFrustum(nx.orbyMesh)){ //orby offCam-.
//     // console.log('offCAm')
//     // if(!nx.rightArrow && !nx.leftArrow ){
//       nx.initFollowCam();
//       // nx.initFaceCam();
//     // } else {
//     //   nx.rightArrow=0;
//     //   nx.leftArrow=0;
//     // }
//   } 
//   // else {
//   //   console.log('onCAm')
//   // }
//   //TODO: if freeCam and orby is not in view frustum, rotate cam toward orby, look at.
    //OR JUST FOLLOW CAM-.
//   // if( (nx.anmz.orby.move.autoGO || nx.anmz.orby.move.fwd) && ( nx.scene.activeCamera.name != 'followCam1' || nx.scene.activeCamera.name != 'faceCam1' ) ){ nx.initFaceCam()}
// }
/******************************* - ANIMATION-RAY-CASTS - *********************************/
var anmRigRayCasts = function () { 
    //RUN-OR-SKIP: RAY-CAST-.
    if(nx.anmz.orby.jump.jumpMode || nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.fallMode
        || nx.anmz.orby.move.jmp && !nx.anmz.orby.tiltBounce ){ //bounce needs to run PITCH //TODO: jmp?
        if(nx.anmz.orby.audit){console.log('Skip Ray-Cast')}; return; //Sometimes-we-do-not-want-to-cast-.
    } else { if(nx.anmz.orby.audit){console.log('>Run Ray-Cast')} }
    nx.anmz.orby.tiltBounce = 0;
    nx.anmz.orby.freezeMode = 0;
    // nx.anmz.orby.backFromEdgeMode = 0;
    //DOWNRAY-.
    nx.anmz.orby.rig.downRayHit = nx.anmz.orby.rig.downRay.intersectsMeshes(nx.anmz.orby.collisionItems);
    if(nx.anmz.orby.rig.downRayHit.length){

        nx.anmz.orby.lastEdgePOS = new BABYLON.Vector3(nx.anmz.orby.rig.downRayHit[0].pickedPoint.x,nx.orbyMesh.position.y,nx.anmz.orby.rig.downRayHit[0].pickedPoint.z);
        // nx.anmz.orby.lastEdgePOS = nx.orbyMesh.position;
        // triggerMetaMode(nx.anmz.orby.rig.downRayHit[0].faceId)
        // if(nx.anmz.orby.rig.downRayHit[0].pickedMesh.name === "pyramid"){
        //     particleFountainReady = 1;
        // }
        if(!nx.anmz.orby.wallBounce){ //POSITION: originBox ???
            nx.anmz.orby.rig.downSphere.position.copyFrom(nx.anmz.orby.rig.downRayHit[0].pickedPoint);
            var centerBoxOffset = nx.anmz.orby.rig.downRayHit[0].pickedPoint;
            // centerBoxOffset.y += (2 * nx.anmz.orby.scale);
            centerBoxOffset.y += (2 * nx.anmz.orby.scale);//+1;//3.2; //add ORIGINOFFSET - distance from board to ground-.
            nx.anmz.orby.rig.originBox.position.copyFrom(centerBoxOffset);
            nx.orbyMesh.position.copyFrom(nx.anmz.orby.rig.originBox.position);
        }
    } //else {  noDownRay = 1; }
    //TILTRAY-.
    nx.anmz.orby.rig.tiltRayHit = nx.anmz.orby.rig.tiltRay.intersectsMeshes(nx.anmz.orby.collisionItems);
    if(nx.anmz.orby.rig.tiltRayHit.length){//POSITION: tiltsphere
        var tiltSphereOffset = nx.anmz.orby.rig.tiltRayHit[0].pickedPoint;
        tiltSphereOffset.y += (2 * nx.anmz.orby.scale);//+1;//3.2; //add ORIGINOFFSET
        // tiltSphereOffset.y += (2 * nx.anmz.orby.scale);
        nx.anmz.orby.rig.tiltSphere.position.copyFrom(tiltSphereOffset);
        // if(!nx.anmz.orby.tiltBounce){ //PITCH surfboard. //allow high-speed jump to recover before looking-.
        if(!nx.anmz.orby.tiltBounce && !nx.anmz.orby.wallRayMode){ //PITCH surfboard. //allow high-speed jump to recover before looking- and on wall.
            nx.orbyMesh.lookAt(nx.anmz.orby.rig.tiltSphere.position);
        }
    } //else {  noTiltRay=1   } //IF-NO-TILT-LENGTH-DO-NOT-MOVE-.
    //TODO: tilt ray distance minimum before this?
    if( nx.anmz.orby.rig.downRayHit.length && nx.anmz.orby.bounceMode){  //RECAPTURE-GRAVITY.
        console.log('bounce off');
        nx.anmz.orby.bounceMode=0;
        nx.anmz.orby.rig.downRay.length= nx.anmz.orby.rig.rayStub * nx.anmz.orby.scale;
    } else if( !nx.anmz.orby.rig.downRayHit.length && !nx.anmz.orby.rig.tiltRayHit.length){  //LOST-GRAVITY.
        nx.anmz.orby.rig.downRay.length = nx.anmz.orby.rig.rayStub*2 * nx.anmz.orby.scale; //Double Length (one time)
        if(nx.anmz.orby.rig.tiltSphere.position.y <= nx.anmz.orby.rig.originBox.position.y){ //DETECT-PITCH:-DOWN-OR-FLAT
          // debugger;
            nx.anmz.orby.jump.fallMode=1; //Apex of Jump - now falling.
        } else { //PITCH: UP.
            nx.anmz.orby.freezeMode=1;
            nx.anmz.orby.bounceMode=1; //bounceMode gets to the top of the rail-.
            console.log('bounce on1')
        }
    } 

    //EDGEDETECT
    if(!nx.anmz.orby.rig.downRayHit.length && !nx.anmz.orby.rig.tiltRayHit.length){
        console.log('EDGEDETECTMODE');
        // debugger;
        nx.anmz.orby.edgeDetectMode = 1;
        // nx.anmz.orby.backFromEdgeMode = 1;
        nx.anmz.orby.jump.fallMode=0; //caused freeze at top
        nx.anmz.orby.freezeMode=0;  //caused freeze at top
        // nx.orbyMesh.position = nx.anmz.orby.lastEdgePOS;
    }else{
        nx.anmz.orby.edgeDetectMode = 0;
        // if(nx.anmz.orby.rig.downRayHit.length){ nx.anmz.orby.lastEdgePOS = nx.orbyMesh.position; }
    }
}
/************************************-SURF-MOVEMENT-******************************************/
var anmSurfMovement = function(){
    // if(nx.anmz.orby.edgeDetectMode){
    //     // nx.anmz.orby.backFromEdgeMode = 0;
    //     nx.orbyMesh.position.copyFrom(nx.anmz.orby.lastEdgePOS);
    //     nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
    //     return;
    // }
    var moveX = 0, moveZ = 0, moveY = 0; //todo optimization - no vars in loop methods-.
    /*****************************- LEFT and RIGHT: YAW & ROLL - ************************/ 
    //RESET-UPRIGHT-. 
    if(nx.anmz.orby.move.urgt){ if(nx.anmz.orby.audit){console.log('>Up Right')};
        nx.anmz.orby.move.urgt=0; nx.orbyMesh.rotation.z = 0; }
    if(nx.anmz.orby.move.ulft){ if(nx.anmz.orby.audit){console.log('>Up Left')};
        nx.anmz.orby.move.ulft=0; nx.orbyMesh.rotation.z = 0; }
    //YAW & ROLL: surfboard
    // if(!nx.anmz.orby.freezeMode){ 
    //     if(nx.anmz.orby.move.lft){
    //         nx.orbyMesh.rotation.y -= nx.anmz.orby.turnSpeed;
    //         nx.anmz.orby.rig.originBox.rotation.y -= nx.anmz.orby.turnSpeed;
    //         if(!nx.anmz.orby.jump.jumpMode && !nx.anmz.orby.jump.preJumpMode && 
    //         	!nx.anmz.orby.jump.fallMode && nx.anmz.orby.rig.tiltRayHit.length && !nx.anmz.orby.wallRayMode){
    //             	nx.orbyMesh.rotation.z = -0.2;
    //             // nx.orbyMesh.rotation.z = 0.2;
    //         }
    //     } else if(nx.anmz.orby.move.rgt){
    //         nx.orbyMesh.rotation.y += nx.anmz.orby.turnSpeed;
    //         nx.anmz.orby.rig.originBox.rotation.y += nx.anmz.orby.turnSpeed;
    //         if(!nx.anmz.orby.jump.jumpMode && !nx.anmz.orby.jump.preJumpMode && 
    //         	!nx.anmz.orby.jump.fallMode && nx.anmz.orby.rig.tiltRayHit.length && !nx.anmz.orby.wallRayMode){
    //             	nx.orbyMesh.rotation.z = 0.2;
    //             // nx.orbyMesh.rotation.z = -0.2;
    //         }
    //     }
    // }
    //YAW & ROLL: surfboard - from acinematix
    // if(!nx.anmz.orby.freezeMode && !nx.anmz.orby.jump.fallMode){

        
        if(!nx.anmz.orby.freezeMode){
            nx.anmz.lastRotMeshY = nx.orbyMesh.rotation.y; //used for rollback to lock on to a vector-. 
            nx.anmz.lastRotRigY = nx.anmz.orby.rig.originBox.rotation.y; 
            if(nx.anmz.orby.move.lft){
                nx.orbyMesh.rotation.y -= nx.anmz.orby.turnSpeed; //setting both mesh and rig rotY
                nx.anmz.orby.rig.originBox.rotation.y -= nx.anmz.orby.turnSpeed;
                if(!nx.anmz.orby.jump.jumpMode && !nx.anmz.orby.jump.preJumpMode && !nx.anmz.orby.jump.fallMode && nx.anmz.orby.rig.tiltRayHit.length){
                    // nx.orbyMesh.rotation.z = -0.005;
                    nx.orbyMesh.rotation.z = -0.1;
                    // nx.orbyMesh.rotation.z = -0.2;
                }
            } else if(nx.anmz.orby.move.rgt){
                nx.orbyMesh.rotation.y += nx.anmz.orby.turnSpeed;
                nx.anmz.orby.rig.originBox.rotation.y += nx.anmz.orby.turnSpeed;
                if(!nx.anmz.orby.jump.jumpMode && !nx.anmz.orby.jump.preJumpMode && !nx.anmz.orby.jump.fallMode && nx.anmz.orby.rig.tiltRayHit.length){
                    // nx.orbyMesh.rotation.z = 0.005;
                    nx.orbyMesh.rotation.z = 0.1;
                    // nx.orbyMesh.rotation.z = 0.2;
                }
            }
        }
        
        
        //*********************************- MOVE-FORWARD-**************************************/.
        if (nx.anmz.orby.move.fwd && !nx.anmz.orby.freezeMode && !nx.anmz.orby.edgeDetectMode) { 
            if(nx.anmz.orby.audit){console.log('>Forward')}
            var FPS = Math.round(nx.engine.fps);
            // var speedGovernor = (FPS>49)? 2.5 : (FPS>29)? 3 : 2.8; //FPS SPEED GOVERNOR- FAST SPEED ON SPACEPIPE.
            // var speedGovernor = (FPS>49)? 0.6 : (FPS>29)? 0.7 : 0.8; //FPS SPEED GOVERNOR- NORMAL SPEED ON GROUND.
            var speedGovernor = (FPS>49)? 0.6 : (FPS>29)? 0.8 : 0.9; //FPS SPEED GOVERNOR- NORMAL SPEED ON GROUND.
            
            //SpeedGovernor on TILT
            if(FPS>40){
                if(nx.anmz.orby.rig.tiltSphere.position.y-nx.anmz.orby.rig.downSphere.position.y>2){ //console.log('UPTILT');
                  speedGovernor -= 0.1;
                }else if(nx.anmz.orby.rig.tiltSphere.position.y-nx.anmz.orby.rig.downSphere.position.y<1){ //console.log('DWNTILT');
                  speedGovernor += 0.2;
                }else{  //console.log('FLATTILT');
                }
            }

            speedGovernor = 0.7; //todo remove
        
        moveX = parseFloat(Math.sin(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * speedGovernor; //divided sin cos speed reduction 0.5 fast /0.9 slow
        moveZ = parseFloat(Math.cos(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * speedGovernor; //divide 3 pretty slow
    } else if(nx.anmz.orby.bounceMode && !nx.anmz.orby.edgeDetectMode){
        // debugger; //FIX: error this is what is boosting y on rail slide.
        moveY = nx.anmz.orby.hover * nx.anmz.orby.scale;
        nx.anmz.orby.bounceMode = 0; //FIXTODO remove bounce mode?
        console.log('MOVEY1 - no bounce mode',moveY); 
    } else {  // console.log('fallout on freezeMode settings...')
}

/*****************************************************JUMP-ANIMO***************/
var animo;
if(nx.anmz.orby.move.jmp && !nx.anmz.orby.jump.jumpMode){ //init jump
    nx.anmz.orby.move.jmp = 0;
    nx.anmz.orby.jump.preJumpMode = 1;
        // if(!nx.anmz.orby.move.lft){console.log('LFT1');} else {console.log('NOTLFT1');}
        // nx.orby.lookFactory('compressJmp'); //set-orby-eye-.
        animo = nx.scene.beginAnimation(nx.orbySkeleton[0], 20, 25, false, 1.0); //compress
        animo.onAnimationEnd = function (){
            // if(!nx.anmz.orby.move.lft){console.log('LFT2');} else {console.log('NOTLFT2');}
            nx.anmz.orby.jump.jumpMode = 1;
            nx.anmz.orby.jump.preJumpMode = 0;
            // nx.orby.lookFactory('runLookFwd'); //set-orby-eye-.
            var jmp1 = nx.scene.beginAnimation(nx.orbySkeleton[0], 25, 35, false, 1.0);  //jump apex
            jmp1.onAnimationEnd = function(){
                // if(!nx.anmz.orby.move.lft){console.log('LFT3');} else {console.log('NOTLFT3');}
                nx.anmz.orby.jump.jumpMode = 0;
                nx.anmz.orby.jump.fallMode = 1; //Bottom of Jump - now landed-.
                nx.anmz.orby.jump.jumpArc = 0;
                var jmp2 = nx.scene.beginAnimation(nx.orbySkeleton[0], 35, 50, false, 1.0);  //landing
                jmp2.onAnimationEnd = function(){
                    // if(!nx.anmz.orby.move.lft){console.log('LFT4');} else {console.log('NOTLFT4');}
                    // debugger;
                    // nx.orby.lookFactory('runLookFwd'); //set-orby-eye-.
                    nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);  //idleanm
                }
            }
        }
    }
    if(nx.anmz.orby.jump.preJumpMode){ //prejump MODE-.
        moveY = 0;
    }
    if(nx.anmz.orby.jump.jumpMode){ //JUMP-MODE-.


      //TODO: IF ACTIVE CAMERA is FOLLOW CAM reduce acceleration to 0, then reset at End of jump;


        moveY = (nx.anmz.orby.jump.jumpArc<=1)? 0.8 * nx.anmz.orby.scale :(nx.anmz.orby.jump.jumpArc<=4)? 0.6 * nx.anmz.orby.scale :(nx.anmz.orby.jump.jumpArc<=6)? 0.4 * nx.anmz.orby.scale :0.2 * nx.anmz.orby.scale ;
        nx.anmz.orby.jump.jumpArc++;
        console.log('MOVEY2',moveY);


        // console.log(moveY) //
        // if(moveY===0.2){nx.orbyMesh.rotationQuaternion = null;}

        if(nx.anmz.orby.move.trick > 0){
          // debugger;
          // nx.lastCam = nx.scene.activeCamera;

          // nx.initFreeCam();

          if(nx.scene.activeCamera.maxCameraSpeed){ nx.scene.activeCamera.lastCamSpeed = nx.scene.activeCamera.maxCameraSpeed; nx.scene.activeCamera.maxCameraSpeed = 0; } //FIX: space pad trick.
        //   if(nx.scene.activeCamera.lockedTarget){ nx.scene.activeCamera.lastTgt = nx.camz.followCam.lockedTarget; } //RESET-CAM-.
          if(nx.scene.activeCamera.lockedTarget){ nx.scene.activeCamera.lastTgt = nx.scene.activeCamera.lockedTarget; } //RESET-CAM-.
          if(nx.scene.activeCamera.cameraAcceleration){ //FOLOW-CAM-BOUNCE-ACCELERATION-RESET-.
            nx.scene.activeCamera.lastAcceleration=nx.scene.activeCamera.cameraAcceleration; 
            nx.scene.activeCamera.cameraAcceleration=0;//avoid jank by turning off follow speed-.
          }

        }

        var FPS = Math.round(nx.engine.fps);
        var trickDURModifier = (FPS>43)?0:500;
        if(trickDURModifier){console.log('TRICKMOD',trickDURModifier);}

        //TRICKS-.
        if(nx.anmz.orby.move.trick===1){ //SPIN-TRICK-.
            console.log('SPINTRICK');
                // if(nx.scene.activeCamera.maxCameraSpeed){ nx.scene.activeCamera.lastCamSpeed = nx.scene.activeCamera.maxCameraSpeed; nx.scene.activeCamera.maxCameraSpeed = 0; } //FIX: space pad trick.
                // if(nx.scene.activeCamera.lockedTarget){ nx.scene.activeCamera.lastTgt = nx.camz.followCam.lockedTarget; } //RESET-CAM-.
                // if(nx.scene.activeCamera.cameraAcceleration){ //FOLOW-CAM-BOUNCE-ACCELERATION-RESET-.
                //   nx.scene.activeCamera.lastAcceleration=nx.scene.activeCamera.cameraAcceleration; 
                //   nx.scene.activeCamera.cameraAcceleration=0;
                // }

                // nx.initFollowCam();
                // nx.camz.followCam.cameraAcceleration = 0.005;
                // if(nx.camz.followCam.cameraAcceleration){ //FOLOW-CAM-BOUNCE-ACCELERATION-RESET-.
                //   nx.camz.followCam.lastAcceleration=nx.camz.followCam.cameraAcceleration;nx.camz.followCam.cameraAcceleration=0;
                // }
                // if(nx.scene.activeCamera.lockedTarget = null){ //FOLOW-CAM-BOUNCE-ACCELERATION-RESET-.
                //   nx.scene.activeCamera.lastTgt = nx.scene.activeCamera.lockedTarget;
                //   nx.scene.activeCamera.lockedTarget = null
                // }
                // var preRot = nx.orbyMesh.rotation;
                // var preRotQuat = nx.orbyMesh.rotationQuaternion;
                // var preRotQuatOrigin = nx.anmz.orby.rig.originBox.rotation;
                // console.log('trick1')
                // var spinROT;
                var spinCounter=0;
                nx.anmz.orby.trickLanded=0;
                var originQ = nx.orbyMesh.rotationQuaternion;
                var spinLeft = (nx.anmz.orby.move.lft)?1:0;
                // if(nx.anmz.orby.move.lft){debugger;};
                $({pi:0}) //TRICK spin-.
                    .animate({pi:31},{queue:false,duration:750-trickDURModifier,easing:'swing',
                    // .animate({pi:31},{queue:false,duration:750,easing:'swing',
                    // .animate({ROT:nx.orbyMesh.rotation.y+(Math.PI/4)},{queue:false,duration:450,easing:'swing',
                    step: function(now) { 
                        if(nx.anmz.orby.trickLanded){console.log('landing stopper'); return;} //stop trick anms
                        if(this.pi>spinCounter){ //ensures static number of ROTS for addInPlace
                            spinCounter++;
                            // console.log('SPINCNT',spinCounter);
                            if(spinLeft){
                                nx.orbyMesh.rotation.y -= 0.2;
                            }else{
                                nx.orbyMesh.rotation.y += 0.2;
                            }
                            
                        }else{ 
                            return;
                        }
                    //   nx.orbyMesh.rotation.y = this.pi;
                    //   spinROT = nx.orbyMesh.rotation.y + this.pi;
                    //   console.log(spinROT)
                    //   console.log(this.ROT)
                    //   nx.orbyMesh.rotation = spinROT;
                    //   nx.orbyMesh.rotation.y = this.ROT;
                    //   nx.orbyMesh.rotation.y += 0.2;
                    // nx.orbyMesh.rotation.copyFrom({x:0,y:-0.2,z:0})
                    //   nx.orbyMesh.rotation.y += this.ROT;
                    }, complete:function(){ 
                    //   debugger;
                      // nx.orbyMesh.rotation = preRot;
                      // nx.orbyMesh.rotationQuaternion = preRotQuat; //causes glitch jump
                      // console.log('TST: '+nx.anmz.orby.rig.originBox.rotationQuaternion); 
                      // nx.anmz.orby.rig.originBox.rotation = preRotQuatOrigin; //causes lock bug
                    //   nx.orbyMesh.rotationQuaternion = null; //partially working, needs jump fall fix.
                        nx.orbyMesh.rotationQuaternion.copyFrom(originQ)
                    //   nx.orby
                    // nx.anmz.orby.rig.originBox.rotation.copyFrom(nx.orbyMesh.rotation)

                      // nx.orbyMesh.rotation = nx.anmz.orby.rig.originBox.rotation; //causes lock bug
                      setTimeout(function(){ 
                        // nx.scene.activeCamera = nx.lastCam; 
                        nx.scene.activeCamera.cameraAcceleration = nx.scene.activeCamera.lastAcceleration;//RESET-CAM-.
                        nx.scene.activeCamera.lockedTarget = nx.scene.activeCamera.lastTgt;
                        nx.scene.activeCamera.maxCameraSpeed = nx.scene.activeCamera.lastCamSpeed;


                      },1000);


                      return;
                     } //NEXT-SUB-SEQUENCE-. 
                });
        } else if(nx.anmz.orby.move.trick===2){ //FLIP-TRICK-.

                // if(nx.scene.activeCamera.maxCameraSpeed){ nx.scene.activeCamera.lastCamSpeed = nx.scene.activeCamera.maxCameraSpeed; nx.scene.activeCamera.maxCameraSpeed = 0; } //FIX: space pad trick.
                // if(nx.scene.activeCamera.lockedTarget){ nx.scene.activeCamera.lastTgt = nx.camz.followCam.lockedTarget; } //RESET-CAM-.
                // if(nx.scene.activeCamera.cameraAcceleration){ //FOLOW-CAM-BOUNCE-ACCELERATION-RESET-.
                //   nx.scene.activeCamera.lastAcceleration=nx.scene.activeCamera.cameraAcceleration; 
                //   nx.scene.activeCamera.cameraAcceleration=0;
                // }
                // if(nx.camz.followCam.cameraAcceleration){ //FOLOW-CAM-BOUNCE-ACCELERATION-RESET-.
                //   nx.camz.followCam.lastAcceleration=nx.camz.followCam.cameraAcceleration;nx.camz.followCam.cameraAcceleration=0;
                // }
                // var preRot = nx.orbyMesh.rotation;
                // var preRotQuat = nx.orbyMesh.rotationQuaternion;
                // $({x:nx.orbyMesh.rotation.x}) //TRICK: front-flip-.
                var flipCounter=0;
                var flipFwd = (nx.anmz.orby.move.fwd)?1:0;
                nx.anmz.orby.trickLanded=0;
                var originQ = nx.orbyMesh.rotationQuaternion;
                $({x:0}) //TRICK: front-flip-.
                    // .animate({x:nx.orbyMesh.rotation.x+Math.PI/8},{queue:false,duration:3350,easing:'swing',
                    // .animate({x:nx.orbyMesh.rotation.x+Math.PI/8},{queue:false,duration:450,easing:'swing',
                    // .animate({x:33},{queue:false,duration:450,easing:'swing',
                    // .animate({x:31},{queue:false,duration:750,easing:'swing',
                    .animate({x:31},{queue:false,duration:750-trickDURModifier,easing:'swing',
                    step: function(now) { 
                        if(nx.anmz.orby.trickLanded){console.log('landing stopper'); return;} //stop trick anms
                        if(this.x>flipCounter){ //ensures static number of ROTS for addInPlace
                            flipCounter++;
                            console.log('FlipCNT',flipCounter);
                            if(flipFwd){
                                nx.orbyMesh.rotation.x -= 0.2;
                            }else{
                                nx.orbyMesh.rotation.x += 0.2;
                            }
                        }else{ 
                            return;
                        }

                    //   nx.orbyMesh.rotation.x = this.x;
                    }, complete:function(){ 
                      // nx.orbyMesh.rotation = preRot;
                      // nx.orbyMesh.rotationQuaternion = preRotQuat;
                    //   nx.orbyMesh.rotationQuaternion = null;
                    nx.orbyMesh.rotationQuaternion.copyFrom(originQ)
                      // nx.orbyMesh.rotation = nx.anmz.orby.rig.originBox.rotation;
                      setTimeout(function(){ 
                        // nx.scene.activeCamera = nx.lastCam; 
                      nx.scene.activeCamera.cameraAcceleration = nx.scene.activeCamera.lastAcceleration;//RESET-CAM-.
                      nx.scene.activeCamera.lockedTarget = nx.scene.activeCamera.lastTgt;
                      nx.scene.activeCamera.maxCameraSpeed = nx.scene.activeCamera.lastCamSpeed;
                      },1000);
                     } //NEXT-SUB-SEQUENCE-. 
                });
        } else if(nx.anmz.orby.move.trick===3){ //ROLL-TRICK-.

                // if(nx.scene.activeCamera.maxCameraSpeed){ nx.scene.activeCamera.lastCamSpeed = nx.scene.activeCamera.maxCameraSpeed; nx.scene.activeCamera.maxCameraSpeed = 0; } //FIX: space pad trick.
                // if(nx.scene.activeCamera.lockedTarget){ nx.scene.activeCamera.lastTgt = nx.camz.followCam.lockedTarget; } //RESET-CAM-.
                // if(nx.scene.activeCamera.cameraAcceleration){ //FOLOW-CAM-BOUNCE-ACCELERATION-RESET-.
                //   nx.scene.activeCamera.lastAcceleration=nx.scene.activeCamera.cameraAcceleration; 
                //   nx.scene.activeCamera.cameraAcceleration=0;
                // }
                // if(nx.camz.followCam.cameraAcceleration){ //FOLOW-CAM-BOUNCE-ACCELERATION-RESET-.
                //   nx.camz.followCam.lastAcceleration=nx.camz.followCam.cameraAcceleration;nx.camz.followCam.cameraAcceleration=0;
                // }
            // if(!nx.rotationAmount) { nx.rotationAmount = Math.PI/8; } //todo possible gimble lock stopping the rotation?
                // var preRot = nx.orbyMesh.rotation;
                
                var rollCounter=0;
                nx.anmz.orby.trickLanded=0;
                var originQ = nx.orbyMesh.rotationQuaternion;
                var rollLeft = (nx.anmz.orby.move.lft)?1:0;

                // var preRotQuat = nx.orbyMesh.rotationQuaternion;
                // $({z:nx.orbyMesh.rotation.z}) //TRICK: roll-.
                $({z:0}) //TRICK: roll-.
                    // .animate({z:nx.orbyMesh.rotation.x+ nx.rotationAmount},{queue:false,duration:3350,easing:'swing',
                    // .animate({z:nx.orbyMesh.rotation.x+ nx.rotationAmount},{queue:false,duration:450,easing:'swing',
                    // .animate({z:31},{queue:false,duration:750,easing:'swing',
                    .animate({z:31},{queue:false,duration:750-trickDURModifier,easing:'swing',
                    step: function(now) { 
                        if(nx.anmz.orby.trickLanded){console.log('landing stopper'); return;} //stop trick anms
                        if(this.z>rollCounter){ //ensures static number of ROTS for addInPlace
                            rollCounter++;
                            if(rollLeft){
                                nx.orbyMesh.rotation.z -= 0.2;
                            }else{
                                nx.orbyMesh.rotation.z += 0.2;
                            }
                        }
                        //wrap-around
                    //   if(this.z > Math.PI){this.z = this.z-Math.PI}
                    //   nx.orbyMesh.rotation.z = 0.25;
                    }, complete:function(){ 
                      // nx.orbyMesh.rotation = preRot;
                      // nx.orbyMesh.rotationQuaternion = preRotQuat;
                    //   nx.orbyMesh.rotationQuaternion = null; 
                        nx.orbyMesh.rotationQuaternion.copyFrom(originQ)
                      // nx.orbyMesh.rotation = nx.anmz.orby.rig.originBox.rotation;
                      setTimeout(function(){ 
                        // nx.scene.activeCamera = nx.lastCam; 
                        nx.scene.activeCamera.cameraAcceleration = nx.scene.activeCamera.lastAcceleration;//RESET-CAM-.
                        nx.scene.activeCamera.lockedTarget = nx.scene.activeCamera.lastTgt;
                        nx.scene.activeCamera.maxCameraSpeed = nx.scene.activeCamera.lastCamSpeed;
                      },1000);
                     } //NEXT-SUB-SEQUENCE-. 
                });
        }
        nx.anmz.orby.move.trick=0; //init-one-time-.


    }
    if(nx.anmz.orby.jump.fallMode){
        moveY = -0.5; //fall speed
        // moveY -= 0.5; //fall speed
        // console.log('falling...MOVEY3')
    }
    //---------------------------------TILT-BOUNCE-ON-JUMP-.
    if(nx.anmz.orby.jump.fallMode || nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.jumpMode && !nx.anmz.orby.bounceBack){
        // console.log('falling...2')
        var fallDownRayHit = nx.anmz.orby.rig.downRay.intersectsMeshes(nx.anmz.orby.collisionItems);
        if(fallDownRayHit.length){
            if(fallDownRayHit[0].distance<= 1.5 * nx.anmz.orby.scale){           //ON JUMP: ground landing-.
                // if(nx.anmz.orby.audit){
                    // debugger;
                	console.log('GROUND-LANDING.') //FIRES for beginning and end of Jump-.
                    nx.anmz.orby.trickLanded=1; //stop trick anms
                // }
                // debugger;
                moveY+=nx.anmz.orby.hover;//rollback gravity-.
                console.log('MOVEY4',moveY);
                moveX = 0;
                moveZ = 0;
                nx.anmz.orby.tiltBounce = 1;
                nx.anmz.orby.jump.fallMode=0; //FIX stuck on side after jump-.

            }
        }
        var fallTiltRayHit = nx.anmz.orby.rig.tiltRay.intersectsMeshes(nx.anmz.orby.collisionItems);
        if(fallTiltRayHit.length){
            if(fallTiltRayHit[0].distance<=2 * nx.anmz.orby.scale){           //ON JUMP: ground landing-.
                // if(nx.anmz.orby.audit){
                    console.log('TILT-LANDING.')
                    nx.anmz.orby.trickLanded=1; //stop trick anms
                    // debugger;
                    // }
                    // nx.orbyMesh.rotationQuaternion.x = -0.44;
                    nx.anmz.orby.tiltBounce = 1;
                    moveX = moveX * -1;
                    moveY = 1;
                    console.log('MOVEY5',moveY);
                    moveZ = moveZ * -1;
                    // moveX = 0;
                    // moveZ = 0;
                    nx.anmz.orby.jump.fallMode=0; //FIX stuck on side after jump-.
                    
                    // if(nx.anmz.orby.edgeDetectMode){moveX = 0; moveZ=0;}
                    //MOVE-AND-RETURN-. was being overridden-.
                    nx.orbyMesh.moveWithCollisions(new BABYLON.Vector3( moveX, moveY, moveZ )); //todo reuse vector obj?
                    // if(nx.anmz.orby.edgeDetectMode){console.log('RESET1');nx.orbyMesh.position = nx.anmz.orby.lastEdgePOS;}//move back off edge-.
                    // zoneAlarm();
                    nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
                    
                    return; //Render and run-.
                    
                }
            }
        var fallWallRayHit = nx.anmz.orby.rig.wallRay.intersectsMeshes(nx.anmz.orby.collisionItems);
        if(fallWallRayHit.length){
            // console.log('FALL-WALL-HIT');
            if(fallWallRayHit[0].distance<=2 * nx.anmz.orby.scale){           //ON JUMP: ground landing-.
                // if(nx.anmz.orby.audit){
                    // debugger;
                	// console.log('WALL-LANDING-.')
                    nx.anmz.orby.trickLanded=1; //stop trick anms
                // }
                // nx.orbyMesh.rotationQuaternion.x = -0.44;
                nx.anmz.orby.tiltBounce = 1;
                // moveX = 0;
                // moveZ = 0;
                moveX = moveX * -1
                moveY = 1;
                // console.log('MOVEY6',moveY);
                moveZ = moveZ * -1;
                

                nx.anmz.orby.jump.fallMode=0; //FIX stuck on side after jump-.
                
                
                // if(nx.anmz.orby.edgeDetectMode){moveX = 0; moveZ=0;}
                //MOVE-AND-RETURN-. was being overridden-.
                nx.orbyMesh.moveWithCollisions(new BABYLON.Vector3( moveX, moveY, moveZ ));
                
                // if(nx.anmz.orby.edgeDetectMode){console.log('RESET2');nx.orbyMesh.position = nx.anmz.orby.lastEdgePOS;}//move back off edge-. 
		        // zoneAlarm();
		        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.

		        return; //Render and run-.



            }
        }

        //FREEFALL
        if(!fallDownRayHit.length && !fallTiltRayHit.length && !fallWallRayHit.length){
            console.log('freefalling');
            // nx.initFreeFallCam(); //TODO reset smoothcam on landin?
        }
    }


            //********************************************************************************

    //ORBY-DELAY-AUTOGO-.
    // if(nx.anmz.orby.delayAutoGO && (nx.anmz.orby.move.fwd || nx.anmz.orby.move.lft ||nx.anmz.orby.move.rgt || nx.anmz.orby.move.autoGO) ) {
    //     // debugger;
    //     nx.anmz.orby.move.autoGO = 1;
    //     nx.anmz.orby.delayAutoGO = 0;
    // }

    if(nx.anmz.orby.move.autofwdSpace){ //AUTO-FWD-MODE-.
        // moveX+=0.5
// debugger;
// console.log('TEST: '+ nx.anmz.orby.rig.originBox.rotation.y)


        //ORBY-VECTOR-CHANNEL-.
        // console.log('ROT2');
        if(nx.anmz.orby.rig.originBox.rotation.y<0.5){
            nx.anmz.orby.rig.originBox.rotation.y = nx.anmz.lastRotRigY;
            nx.orbyMesh.rotation.y = nx.anmz.lastRotMeshY
        } else if(nx.anmz.orby.rig.originBox.rotation.y>2.5){ //todo put on same line
            nx.anmz.orby.rig.originBox.rotation.y = nx.anmz.lastRotRigY;
            nx.orbyMesh.rotation.y = nx.anmz.lastRotMeshY
        }
        // moveX += (moveX>0) ? 0.9 : (moveX<0) ? -0.9 : (nx.anmz.orby.move.autofwdSpace.lastfwd.x<0) ? -0.9 : 0.9;
        // moveZ += (moveZ>0) ? 0.9 : (moveZ<0) ? -0.9 : (nx.anmz.orby.move.autofwdSpace.lastfwd.z<0) ? -0.9 : 0.9;
        // var FPS = Math.round(nx.engine.fps);
        // var speedGovernor = 1.5;//(FPS>49)? 0.8 : (FPS>29)? 0.3 : 1; //FPS SPEED GOVERNOR-.
        // moveX = parseFloat(Math.sin(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * speedGovernor; //divided sin cos speed reduction 0.5 fast /0.9 slow
        moveZ = parseFloat(Math.cos(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * 1; //divide 3 pretty slow
        if(nx.anmz.orby.jump.fallMode){ 
            moveY += -0.65 } //-0.5
            moveX = 0.75;
        console.log('MOVEY7',moveY);

    
        //MOVE-AND-RETURN-. was being overridden-.
        nx.orbyMesh.moveWithCollisions(new BABYLON.Vector3( moveX, moveY, moveZ )); 
        // if(nx.anmz.orby.edgeDetectMode){console.log('RESET3');nx.orbyMesh.position = nx.anmz.orby.lastEdgePOS;}
        // zoneAlarm();
        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
        return; //render-and-run-.

        // console.log('TEST XZ: '+moveX+'   '+moveZ)
        // if (moveX==0){

        // } else {
        //     nx.anmz.orby.move.autofwdSpace.lastfwd.x = moveX;

        // }
        // if (moveZ===0){
        // // nx.anmz.orby.move.autofwdSpace = {lastfwd:{x:0,z:0}};
            
        // } else {
        //     nx.anmz.orby.move.autofwdSpace.lastfwd.z = moveZ;

        // }



    }
    else if(nx.anmz.orby.move.autoGO){ //AUTO-FWD-MODE-.
        // var xDir = (moveX>0) ? 1 : -1;
        // var zDir = (moveZ>0) ? 1 : -1;
        var pipeSpeed = 0.6;
        moveX = parseFloat(Math.sin(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * pipeSpeed; //divided sin cos speed reduction 0.5 fast /0.9 slow
        moveZ = parseFloat(Math.cos(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * pipeSpeed; //divide 3 pretty slow
    }

    // if(nx.anmz.orby.move.autofwdSpace || nx.anmz.orby.move.autoGO || 
//********************************************************************************





    ////----------------------------------------AUTOGO-.
    // if(nx.anmz.orby.move.autofwdSpace){ //AUTO-FWD-MODE-.
    //     moveZ = parseFloat(Math.cos(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * 1; //divide 3 pretty slow
    //     if(nx.anmz.orby.jump.fallMode){ moveY += -0.65 } //-0.5
    //     moveX = 0.75;
    // }
    // else if(nx.anmz.orby.move.autoGO){ //AUTO-FWD-MODE-.
    // // else if(nx.anmz.orby.move.autoGO && !nx.anmz.orby.wallRayMode || !nx.anmz.orby.afterWallMode){ //AUTO-FWD-MODE-.
    // // else if(nx.anmz.orby.move.autoGO && !nx.anmz.orby.wallRayMode ){ //AUTO-FWD-MODE-.
    //     // var xDir = (moveX>0) ? 1 : -1;
    //     // var zDir = (moveZ>0) ? 1 : -1;
    //     var pipeSpeed = 0.6;
    //     moveX = parseFloat(Math.sin(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * pipeSpeed; //divided sin cos speed reduction 0.5 fast /0.9 slow
    //     moveZ = parseFloat(Math.cos(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * pipeSpeed; //divide 3 pretty slow
    // }

    
    //----------------------------------------WALLRAY-.
    //TODO
    var wallRayHit = nx.anmz.orby.rig.wallRay.intersectsMeshes(nx.anmz.orby.collisionItems);

    if(wallRayHit.length){
        // console.log('WALLRAY-DISTANCE: ',wallRayHit[0].distance);
        if(wallRayHit[0].distance <= 0.6){
            // moveY+=0.5;
            moveY+=0.25; //bounce up wall
            console.log('movey WALL');
        }
    }



    // if(nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.jumpMode && !nx.anmz.orby.bounceBack){
    // if(nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.jumpMode){


    // else if(nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.jumpMode
    if( (nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.jumpMode || nx.anmz.orby.jump.jumpArc || nx.anmz.orby.jump.fallMode )
    	&& ( nx.anmz.orby.wallRayMode || nx.anmz.orby.afterWallMode ) ){ //JUMP-CANCEL-WALL-MODES-.
    	// && ( nx.anmz.orby.wallRayMode || nx.anmz.orby.afterWallMode || nx.anmz.orby.railSlideMode) ){ //JUMP-CANCEL-WALL-MODES-.
    	// debugger;
		nx.anmz.orby.wallRayMode = 0;
		nx.anmz.orby.afterWallMode = 0;
		// nx.anmz.orby.railSlideMode = 1;
		moveX = 0;
		moveZ = 0;
		// console.log('jump wall mode off.')
    }

    /*******************************************-RAIL-SLIDE-*******************************/

	// else if(nx.anmz.orby.railSlideMode){
    // 	console.log('RAILSLIDING - with bounce back')
    //     debugger;


	//     moveY = 0;//rail slide

    //     moveX *= -1 * 0.02; //bounce back

	//     moveZ = 0.2; //railslide



	//     console.log('SPECIAL-CONDITION: slide up or down')
	// 	if(nx.anmz.orby.rig.downRayHit && nx.anmz.orby.rig.downRayHit.length && nx.anmz.orby.rig.downRayHit[0].distance > 2){
	// 		// debugger;
	//     	moveY = -0.5;//rail slide fall speed
	// 		// nx.anmz.orby.railSlideMode = 0;
	// 	}

	//     console.log('SPECIAL-CONDITION: tilt ray cancels railSlide')
	// 	if(nx.anmz.orby.rig.tiltRayHit && nx.anmz.orby.rig.tiltRayHit.length && nx.anmz.orby.rig.tiltRayHit[0].distance>0){
	// 		// debugger;
	// 		nx.anmz.orby.railSlideMode = 0;
	// 	}

	//     // if(moveX > moveZ){
	//     // 	moveZ = 0.2;
	//     // 	console.log('XGreater',moveX, moveZ);
	//     // } else {
	//     // 	moveZ = 0.2;
	//     // 	console.log('ZGreater',moveX, moveZ);
	//     // }



	// 	// moveX = moveX * -0.1;//-0.8;
	// 	// moveZ = moveZ * -0.1;//-0.8;
	// 	// moveX = 0;
	// 	// moveZ = 0;


    //         //MOVE-AND-RETURN-. was being overridden-.
    //     nx.orbyMesh.moveWithCollisions(new BABYLON.Vector3( moveX, moveY, moveZ )); 
    //     // zoneAlarm();
    //     nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
    //     return; //render-and-run-.


    // } //end rail slide-.



   //  else if(nx.anmz.orby.rig.downRayHit && nx.anmz.orby.rig.downRayHit.length){
   //  	console.log('downdistance',nx.anmz.orby.rig.downRayHit[0].distance)
	  //   if (nx.anmz.orby.rig.downRayHit[0].distance<=1.7 && nx.anmz.orby.rig.downRayHit[0].distance){
			// nx.anmz.orby.wallRayMode = 0;
			// nx.anmz.orby.afterWallMode = 0;
	  //   }
   //  }

    // nx.anmz.orby.wallRayMode = 0;
    // if(wallRayHit.length){
//     else if(wallRayHit.length){
//     	// debugger;
//         // if(nx.anmz.orby.wallRayMode){
//         //     //double wallRayMode
//         // }
//         nx.anmz.orby.wallRayMode = 1;
//         console.log('wall mode')


//         //CHECK


//         //detect distance pct of wall ray hit
//      //    nx.anmz.orby.rig.wallRay.pct = wallRayHit.length/ nx.anmz.orby.rig.wallRay.length;
//     	// console.log('pct',nx.anmz.orby.rig.wallRay.pct)
//     	// if(nx.anmz.orby.rig.wallRay.pct<=0.40){

// 	    //     moveX = (moveX>0) ? moveX/60 * -1 : 0; //move damping, bounce off, going up wall mode
// 	    //     moveZ = (moveZ>0) ? moveZ/60 * -1 : 0;

//     	// } else {
// 	    //     moveX = (moveX>0) ? moveX/50 : 0; //move damping, bounce in, going up wall mode
// 	    //     moveZ = (moveZ>0) ? moveZ/50 : 0;
    		
//     	// }

//         // moveX = 0;
//         // moveZ = 0;
//         // if(!nx.anmz.orby.move.lft && !nx.anmz.orby.move.rgt){ //do not go up if turning
// 	       //  // moveY = 0.15;//wall-speed up
// 	       //  // moveY = 0.2;//wall-speed up
// 	       //  // moveY = 0.3;//wall-speed up
// 	       //  moveY = 0;//wall-speed up
//         // }

//         //DEFAULT-WALL-MOVE-MUTING-.
//         moveY = 0.15;//wall-speed up
//         moveX = moveX * 0.2;//wall-speed up
//         moveZ = moveZ * 0.2;//wall-speed up

// // } else if(!nx.anmz.orby.rig.tiltRayHit.length ){
// // } else if(!nx.anmz.orby.rig.tiltRayHit.length && !nx.anmz.orby.jump.preJumpMode && !nx.anmz.orby.jump.jumpMode && !nx.anmz.orby.bounceBack){
// } else if(!nx.anmz.orby.rig.tiltRayHit.length && !nx.anmz.orby.jump.preJumpMode && !nx.anmz.orby.jump.jumpMode ){
// 	//DO NOT- compute rail slide while jumping-.
// 	// debugger;
// 	console.log('top-rail or off-wall') //TOP-RAIL: keeps movement on the top rail of ledge. 
// 	moveX = 0;
// 	moveZ = 0;


//         nx.anmz.orby.railSlideMode = 1;


// 	// moveY = 0;
// }
// // else if(nx.anmz.orby.wallRayMode || nx.anmz.orby.afterWallRayMode && nx.anmz.orby.rig.tiltRayHit && nx.anmz.orby.rig.tiltRayHit[0].distance<=1){
// else if(nx.anmz.orby.wallRayMode && nx.anmz.orby.rig.tiltRayHit && nx.anmz.orby.rig.tiltRayHit[0].distance<=1){
// 	console.log('wall-scrape',nx.anmz.orby.rig.tiltRayHit[0].distance)
//     moveY += 0.15;//wall-speed up
// 	moveX = moveX * -0.1;//-0.8;
// 	moveZ = moveZ * -0.1;//-0.8;
// // }

// // else if(nx.anmz.orby.rig.downRayHit[0].distance<=1){
// // 	console.log('wall-landing')
// // }
//         // moveY = 0.15;//wall-speed up



//         // debugger;
//         // var diff = 0.35 - nx.orbyMesh.rotationQuaternion.x;

//         // quaternion = new BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(1, 0, 0), 0.5);
//         // nx.orbyMesh.rotationQuaternion = quaternion;
//         // nx.orbyMesh.rotationQuaternion =  new BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(1, 0, 0), 0.5);
//     		console.log('SPECIAL CASE: wall mode, wall scrape')


//         //TODO: DETECT WALL DISTANCE?
//     // } else {  
//     } else 	if(nx.anmz.orby.wallRayMode){
//     	// noTiltRay=1
//     	// if(nx.anmz.orby.wallRayMode){
//     		// debugger;
//     		console.log('SPECIAL CASE: wall mode, no wall hit')
//         	// moveY = 0.05;//top of wall-speed up
//     		// debugger;
//     	// }

//         moveY = -0.5;//wall-speed up
//         moveX = moveX * 0.5;//wall-speed up
//         moveZ = moveZ * 0.5;//wall-speed up




//     	// if(!nx.anmz.orby.rig.tiltRayHit.length){  //when in wallmode tiltray stops the momentum
//     	// 	nx.anmz.orby.wallRayMode = 0;
//     	// }
//     	// console.log('off')
//     	// nx.anmz.orby.wallFallMode = 1;
//     	nx.anmz.orby.wallRayMode = 0;
//     	nx.anmz.orby.afterWallMode = 1;
//     } else if(nx.anmz.orby.afterWallMode){


// 	    if(nx.anmz.orby.rig.downRayHit && nx.anmz.orby.rig.downRayHit.length){
// 		    if (nx.anmz.orby.rig.downRayHit[0].distance<=1.7 && nx.anmz.orby.rig.downRayHit[0].distance){ //LANDING: turn off wallmode-.
// 				nx.anmz.orby.wallRayMode = 0;
// 				nx.anmz.orby.afterWallMode = 0;
// 	    	// console.log('downdistance',nx.anmz.orby.rig.downRayHit[0].distance)
// 		    }
// 	    }


//         moveY = -0.5;//wall-speed up
//         moveX = moveX * 0.5;//wall-speed up
//         moveZ = moveZ * 0.5;//wall-speed up

    	
//     		console.log('SPECIAL CASE: after wall mode')
//     }

    // if(nx.anmz.orby.move.autofwdSpace){ //AUTO-FWD-MODE-.
    //     moveZ = parseFloat(Math.cos(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * 1; //divide 3 pretty slow
    //     if(nx.anmz.orby.jump.fallMode){ moveY += -0.65 } //-0.5
    //     moveX = 0.75;
    // }
    // // else if(nx.anmz.orby.move.autoGO){ //AUTO-FWD-MODE-.
    // // else if(nx.anmz.orby.move.autoGO && !nx.anmz.orby.wallRayMode || !nx.anmz.orby.afterWallMode){ //AUTO-FWD-MODE-.
    // else if(nx.anmz.orby.move.autoGO && !nx.anmz.orby.wallRayMode ){ //AUTO-FWD-MODE-.
    //     // var xDir = (moveX>0) ? 1 : -1;
    //     // var zDir = (moveZ>0) ? 1 : -1;
    //     var pipeSpeed = 0.6;
    //     moveX = parseFloat(Math.sin(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * pipeSpeed; //divided sin cos speed reduction 0.5 fast /0.9 slow
    //     moveZ = parseFloat(Math.cos(parseFloat(nx.anmz.orby.rig.originBox.rotation.y))) * pipeSpeed; //divide 3 pretty slow
    // }
    // if(nx.anmz.orby.edgeDetectMode){
    //     debugger;
    //     nx.anmz.orby.edgeDetectMode = 0;
    //     moveX = 0;
    //     moveZ = 0;
    //     moveY = 0;
    // }

    if(nx.anmz.orby.move.autofwdSpace || nx.anmz.orby.move.autoGO || nx.anmz.orby.move.fwd || nx.anmz.orby.move.lft ||nx.anmz.orby.move.rgt 
        || nx.anmz.orby.jump.jumpMode || nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.fallMode 
        || nx.anmz.orby.tiltBounce || nx.anmz.orby.bounceMode){


    	// if(nx.anmz.orby.wallFallMode || nx.anmz.orby.afterWallMode){ return } //avoid move with collisions on wall mode because it drops...
    	// if(nx.anmz.orby.wallFallMode || nx.anmz.orby.wallRayMode || nx.anmz.orby.wallMode){ //avoid move with collisions on wall mode because it drops...
    	// 	// debugger; 
    	// 	// return;
    	// 	// if(!moveY){moveY=0.02}
    	// 	moveY=0.02;	
        // }
        
        // if(nx.anmz.orby.jump.fallMode){return;}
        console.log('MOVEY8',moveX,moveY,moveZ);
        nx.orbyMesh.moveWithCollisions(new BABYLON.Vector3( moveX, moveY, moveZ )); //MOVE-WITH-COLLISIONS-.
        // if(nx.anmz.orby.edgeDetectMode){console.log('RESET4');nx.orbyMesh.position = nx.anmz.orby.lastEdgePOS;}//move back off edge-.
        // zoneAlarm();
        
        //AFTER-MOVE-DOWNRAY-EDGE-TEST. //TODO detects edge, and if at edge reverts move-. So there is not glitch.
        nx.anmz.orby.rig.downRayHit = nx.anmz.orby.rig.downRay.intersectsMeshes(nx.anmz.orby.collisionItems);
        if(!nx.anmz.orby.rig.downRayHit.length && !nx.anmz.orby.jump.jumpMode && !nx.anmz.orby.jump.preJumpMode && !nx.anmz.orby.jump.fallMode ){
        // if(nx.anmz.orby.edgeDetectMode){
            //     // nx.anmz.orby.backFromEdgeMode = 0;
            console.log('LAST EDGE POSITION');
            nx.orbyMesh.position.copyFrom(nx.anmz.orby.lastEdgePOS);
            nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
            return;
        }
        
            
        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
            
            



        // if(!nx.anmz.orby.jump.fallMode){nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); }  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
        //RECORD-PATH
        if(nx.RECORD_MOVEMENT){ //TODO: turn off in production
            var product = {};
            if(nx.orbyMesh.rotationQuaternion){
              var eulerROT = nx.orbyMesh.rotationQuaternion.toEulerAngles();
              product = {
                pos:{x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y,z:nx.orbyMesh.position.z},
                // rot:{x:nx.orbyMesh.rotationQuaternion.x,y:nx.orbyMesh.rotationQuaternion.y,z:nx.orbyMesh.rotationQuaternion.z,w:nx.orbyMesh.rotationQuaternion.w}
                rot:{x:eulerROT.x,y:eulerROT.y,z:eulerROT.z}
              }
            } else {
              product = {
                pos:{x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y,z:nx.orbyMesh.position.z},
                rot:{x:nx.orbyMesh.rotation.x,y:nx.orbyMesh.rotation.y,z:nx.orbyMesh.rotation.z}
              }   
            }


            nx.recordPath.push(product);


          //VERY IMPORTANT COMMAND TO PUBLISH ANMPATH
          // JSON.stringify(nx.editz.truncatePathPrecision(nx.editz.decomposePath({aPath:nx.recordPath})))



            // nx.recordPath.push(
            //     // {x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y,z:nx.orbyMesh.position.z}//,
            //   {
            //     pos:{x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y,z:nx.orbyMesh.position.z},
            //     rot:{x:nx.orbyMesh.rotationQuaternion.x,y:nx.orbyMesh.rotationQuaternion.y,z:nx.orbyMesh.rotationQuaternion.z,w:nx.orbyMesh.rotationQuaternion.w}
            //   }
            // )  
        }
    }  
}

/*******************************************************END-PHYSICS*******************************************************/
/*******************************************************EYE-BALL-FACTORY*******************************************************/
nx.orby.lookFactory = function(config){
    var eyePOS, eyeROT, irisPOS, irisROT;
    var eyePOSCur, eyeROTCur, irisPOSCur, irisROTCur;
    if(!config){config = 'proneRest'}
    if(config==='proneRest'){ //resting
        eyePOS = {x: -0.75, y: 0.25, z: 0};
        eyeROT = {x:0,y:0,z:0};
        irisPOS = {x: -0.8076, y: 0.1401, z: 0.0016};
        irisROT = {x:0,y:0,z:0};
    } else if (config==='proneLookUp'){ //looking up
        eyePOS = {x: -0.75, y: 0.45, z: 0};
        eyeROT = {x:0,y:0,z:-0.1};
        irisPOS = {x: -0.77, y: 0.7, z: 0.0016};
        // irisPOS = {x: -0.8076, y: 0.6, z: 0.0016};
        irisROT = {x:0,y:0,z:-0.3};
    } else if(config==='runRest'){ //run rest position
        eyePOS = {x: -0.77, y: 0.3, z: -0.25};
        eyeROT = {x: 0, y: 0.38, z: -0.1};
        irisPOS = {x: -0.84, y: 0.15, z: -0.34};
        irisROT = {x: 0, y: 0.54, z: -0.2};
    } else if(config==='runLookFwd'){ //run rest position
        eyePOS = {x: -0.6, y: 0.1, z: -0.6};
        eyeROT = {x: 0, y: -0.1, z: 0.05};
        irisPOS = {x: -0.45, y: -0.05, z: -0.78};
        irisROT = {x: 0, y:-0.1, z:0.1};
    } else if (config==='compressJmp'){ //looking up
        nx.orby.eye.position.copyFrom({x: -0.85, y: -0.25, z: -0.25})
        nx.orby.eye.rotation.copyFrom({x: -0.30, y: 0.50, z: 0})
        nx.orby.iris.position.copyFrom({x: -0.8, y: -0.44, z: -0.4})
        nx.orby.iris.rotation.copyFrom( {x: -0.3, y: 0.5, z: 0})
        return;
    }
    // nx.orby.eye.position.copyFrom(eyePOS)
    // nx.orby.eye.rotation.copyFrom(eyeROT)
    // nx.orby.iris.position.copyFrom(irisPOS)
    // nx.orby.iris.rotation.copyFrom(irisROT)

    eyePOSCur = nx.orby.eye.position;
    eyeROTCur = nx.orby.eye.rotation;
    irisPOSCur = nx.orby.iris.position;
    irisROTCur = nx.orby.iris.rotation;

    //-------ANM: EYE and IRIS-.
    $({ex:eyePOSCur.x,ey:eyePOSCur.y,ez:eyePOSCur.z,ix:irisPOSCur.x,iy:irisPOSCur.y,iz:irisPOSCur.z,
       erx:eyeROTCur.x,ery:eyeROTCur.y,erz:eyeROTCur.z,irx:irisROTCur.x,iry:irisROTCur.y,irz:irisROTCur.z}). 
    animate({ex:eyePOS.x,ey:eyePOS.y,ez:eyePOS.z,ix:irisPOS.x,iy:irisPOS.y,iz:irisPOS.z,
        erx:eyeROT.x,ery:eyeROT.y,erz:eyeROT.z,irx:irisROT.x,iry:irisROT.y,irz:irisROT.z},
        {queue:false,duration:1000,easing:'linear',
        step: function(now) { 
            nx.orby.eye.position.copyFrom({x:this.ex,y:this.ey,z:this.ez})
            nx.orby.eye.rotation.copyFrom({x:this.erx,y:this.ery,z:this.erz})
            nx.orby.iris.position.copyFrom({x:this.ix,y:this.iy,z:this.iz})
            nx.orby.iris.rotation.copyFrom({x:this.irx,y:this.iry,z:this.irz})
        }, complete:function(){}
    }); 
    


}
/*******************************************************END-EYE-BALL-FACTORY*******************************************************/
/*******************************************************PARTICLE-BOX*******************************************************/

//SPARKBOX~USAGE-.********************************************************\
// if(!nx.orby.easyBakeSparks){nx.orby.createEasyBakeSparks();nx.orby.easyBakeSparks.start()}
// else{nx.orby.easyBakeSparks.start()}
// if(nx.orby.easyBakeSparks){nx.orby.easyBakeSparks.stop();}
// nx.orby.easyBakeSparks=null;
nx.orby.createEasyBakeSparks = function(config){
    nx.orby.easyBakeBox = BABYLON.Mesh.CreateBox("particleBox", 1.0, nx.scene);
    nx.orby.easyBakeBox.isVisible=0;
    nx.orby.easyBakeBox.parent = nx.orbyMesh;
    nx.orby.easyBakeBox.position = new BABYLON.Vector3(0,-4.22,0); //SPARKPOS-.
    // nx.orbySparkBox.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    nx.orby.easyBakeSparks = new BABYLON.ParticleSystem("particles", 1000, nx.scene);
    nx.orby.easyBakeSparks.minSize = 0.01;
    nx.orby.easyBakeSparks.maxSize = 0.66; //0.5
    nx.orby.easyBakeSparks.minLifeTime = 0.3;
    nx.orby.easyBakeSparks.maxLifeTime = 1.5;
    nx.orby.easyBakeSparks.minAngularSpeed = 0;
    nx.orby.easyBakeSparks.maxAngularSpeed = Math.PI;
    nx.orby.easyBakeSparks.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
    nx.orby.easyBakeSparks.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...
    nx.orby.easyBakeSparks.minEmitPower = 1;
    nx.orby.easyBakeSparks.maxEmitPower = 3;
    nx.orby.easyBakeSparks.emitter = nx.orby.easyBakeBox; // the starting object, the emitter
    nx.orby.easyBakeSparks.emitRate = 1500;
    nx.orby.easyBakeSparks.updateSpeed = 0.005;
    //TODO bring out orangeyellow - magenta??
    // nx.orby.easyBakeSparks.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    // debugger;
    // nx.orby.easyBakeSparks.color1 = nx.RGBAtoNormal(144,233,244, 1.0); //cyan
    nx.orby.easyBakeSparks.color1 = nx.RGBAtoNormal(233,244,8, 1.0); //yellow
    nx.orby.easyBakeSparks.color2 = nx.RGBAtoNormal(244,177,88, 1.0); //tan1
    // nx.orby.easyBakeSparks.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    nx.orby.easyBakeSparks.colorDead = new BABYLON.Color4(0, 0, 0.44, 0.0);
    nx.orby.easyBakeSparks.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    // nx.orbySparkSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
	// nx.orbySparkSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
	// nx.orbySparkSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_MULTIPLY;
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./copyrightnetcinematics/textures/customFlare7.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./textures/flare.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./copyrightnetcinematics/textures/customFlare6.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./textures/Flare4.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./textures/Flare2.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./textures/fire.jpg", nx.scene);
	// nx.orbySparkSystem.particleTexture = new BABYLON.Texture("http://i166.photobucket.com/star.jpg", nx.scene);
    nx.orby.easyBakeSparks.particleTexture = new BABYLON.Texture("textures/fire.jpg", nx.scene);
    nx.orby.easyBakeSparks.gravity = new BABYLON.Vector3(0, -9.81, 0);
    // nx.orby.easyBakeSparks.direction1 = new BABYLON.Vector3(-7, 8, 3);
    nx.orby.easyBakeSparks.direction1 = new BABYLON.Vector3(-7, -1, 3);
    nx.orby.easyBakeSparks.direction2 = new BABYLON.Vector3(7, -1, -3);
    // nx.orby.easyBakeSparks.direction2 = new BABYLON.Vector3(7, 8, -3);
}
/*******************************************************ENDPARTICLE-BOX*******************************************************/





/************************************************SPARK-SYSTEMS-*******************************/
nx.orby.createExpressModeSparks = function(config){
	nx.orbySparkBox = BABYLON.Mesh.CreateBox("nx.orbySparkBox", 2, nx.scene);
	nx.orbySparkBox.isVisible = 0;
	nx.orbySparkBox.parent = nx.orbyMesh;
    nx.orbySparkBox.position = new BABYLON.Vector3(0, -0.5, 2);
    // nx.orbySparkBox.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
	nx.orbySparkSystem = new BABYLON.ParticleSystem("particles", 30, nx.scene);
	nx.orbySparkSystem.minSize = 0.22;//2
	nx.orbySparkSystem.maxSize = 2;//6;
	nx.orbySparkSystem.minLifeTime = 0.3;
	nx.orbySparkSystem.maxLifeTime = 0.8;
	nx.orbySparkSystem.minEmitPower = 1;
	nx.orbySparkSystem.maxEmitPower = 8;
	nx.orbySparkSystem.emitRate = 24;
	nx.orbySparkSystem.minAngularSpeed = -4;
	nx.orbySparkSystem.maxAngularSpeed = 4;
	nx.orbySparkSystem.emitter = nx.orbySparkBox;
	nx.orbySparkSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
	// nx.orbySparkSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
	// nx.orbySparkSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
	// nx.orbySparkSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_MULTIPLY;
    nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./copyrightnetcinematics/textures/customFlare7.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./textures/flare.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./copyrightnetcinematics/textures/customFlare6.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./textures/Flare4.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./textures/Flare2.png", nx.scene);
    // nx.orbySparkSystem.particleTexture = new BABYLON.Texture("./textures/fire.jpg", nx.scene);
	// nx.orbySparkSystem.particleTexture = new BABYLON.Texture("http://i166.photobucket.com/star.jpg", nx.scene);
	nx.orbySparkSystem.direction1 = new BABYLON.Vector3(-0.6, -0.5, -0.6);
	nx.orbySparkSystem.direction2 = new BABYLON.Vector3(0.6, -0.5,0.6);
	nx.orbySparkSystem.gravity = new BABYLON.Vector3(0, 0, 0);
	//USAGE: nx.orbySparkSystem.start(); //TODO this needs to be done on epicz or gamez-.
    //SPARKLE-STARS-.
    // var animate = function() {
	// 	nx.orbySparkSystem.color1 = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
	// 	nx.orbySparkSystem.color2 = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
	// 	nx.orbySparkSystem.colorDead = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
	// }
	// nx.scene.registerBeforeRender(animate);	// animation
	nx.scene.registerBeforeRender(function sparkColorLOOPZ(){
		// nx.orbySparkSystem.color1 = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
		nx.orbySparkSystem.color1 = new BABYLON.Color4(1, 1, Math.random(), 1);
		// nx.orbySparkSystem.color2 = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
		nx.orbySparkSystem.color2 = new BABYLON.Color4(Math.random(), Math.random(), 1, 1);
		nx.orbySparkSystem.colorDead = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
	});	// animation
}

/******************************* - SPARK-BOX - *********************************/
// nx.createOrbySparkSystem = function(){
        // var sparkSystem = nx.createSparkSystem1();   
        // nx.createSparkSystem1();   
        // nx.orbySparkBox = sparkSystem.box;
        // nx.orbySparks = sparkSystem.ps;   
        // debugger; //start and stop  
        //-------------------------------------------------------------------------SPARK-BOX-LOOPZ-.Methodology
        // nx.scene.registerBeforeRender(function sparkBoxLoopz() {
        //     // if(!nx.orbyMesh){ return;
        //     // // } else if(nx.orbyMesh.position.y < 1222){ 
        //     //     // nx.scene.unregisterBeforeRender(sparkBoxLoopz); //STOP-LOOP!-.
        //     //     // todo clean up other memory
        //     //     // return;
        //     // } else {
        //     // }
        //     if(nx.orbyMesh){ nx.orbySparkBox.position = nx.orbyMesh.position; }

        // });

// }

// nx.createOrbySparkSystem(); //todo comment out



/*******************************************************END - SPARK - SYSTEM -*******************************************************/


/*******************************************************- BEGIN ORBY-LASER -*******************************************************/
nx.orby.startLaserScanAnm = function(){

    nx.orbyMesh.stopLaser = 0;
    nx.orbyMesh.scanning = 1;

    var scanDamperAlpha = 0
    var curScan, tgtScan;
    // var nx.orby.anmMatrix1, nx.orby.global_position_tgt, nx.orby.global_position_origin;

    //TODO remove laserBumperLft and rgt on orby init
    // curScan = (nx.orbyMesh.scanDirToggle)? nx.orbyMesh.laserBumperLft.position:nx.orbyMesh.laserBumperRgt.position;
    // tgtScan = (nx.orbyMesh.scanDirToggle)? nx.orbyMesh.laserBumperRgt.position:nx.orbyMesh.laserBumperLft.position;


    // nx.orbyMesh.laserBumperLft.position = nx.BV32({x: -55, y: -17, z: -45})
    // nx.orbyMesh.laserBumperRgt.position = nx.BV32({x: 55, y: -17, z: -45})


    // nx.orbyMesh.laserBumperLft.position = nx.BV32({x: -323.4889300956459, y: 5.717820962062265, z: 266.95865147353646})
    // nx.orbyMesh.laserBumperRgt.position = nx.BV32({x: -347.0334602261931, y: 8.896506634172113, z: 305})

    curScan = (nx.orbyMesh.scanDirToggle)? nx.orbyMesh.laserBumperLft.position:nx.orbyMesh.laserBumperRgt.position;
    tgtScan = (nx.orbyMesh.scanDirToggle)? nx.orbyMesh.laserBumperRgt.position:nx.orbyMesh.laserBumperLft.position;
    // console.log(nx.orbyMesh.laserBumperLft.position,nx.orbyMesh.laserBumperRgt.position)

    nx.orbyMesh.scanTgtAlpha = 0;
    nx.orbyMesh.disposeRay = null;


    $({x:curScan.x,y:curScan.y,z:curScan.z}) //--------------------------------------------------LASER-SCAN-SWEEP-ANM-.
    .animate({x:tgtScan.x,y:tgtScan.y,z:tgtScan.z},{queue:false,duration:2000,easing:'swing',
    step: function(now) { 
            if(nx.orbyMesh.stopLaser){return}
            // if(++scanDamperAlpha%2===0||scanDamperAlpha%3===0||scanDamperAlpha%5===0||scanDamperAlpha%7===0){return}
            if(++scanDamperAlpha%2===0){return}

            nx.orbyMesh.laserTgtSphere.position.x = this.x;
            nx.orbyMesh.laserTgtSphere.position.y = this.y; 
            nx.orbyMesh.laserTgtSphere.position.z = this.z;

            // //LOCAL_POSITION to WORLD_POSITION
            // nx.orbyMesh.computeWorldMatrix();
            // // var matrix = nx.orbyMesh.getWorldMatrix();
            // nx.orby.anmMatrix1 = nx.orbyMesh.getWorldMatrix();
            // // var nx.orby.global_position_tgt = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserTgtSphere.position, nx.orby.anmMatrix1); //TODO no vars here
            // nx.orby.global_position_tgt = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserTgtSphere.position, nx.orby.anmMatrix1); //TODO no vars here
            // // var nx.orby.global_position_tgt = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserTgtSphere.position, matrix); //TODO no vars here
            // // nx.orby.global_position_tgt.y = nx.orbyMesh.position.y - 5;
            // nx.orbyMesh.laserTgtSphere.position.copyFrom(nx.orby.global_position_tgt);

            // nx.orby.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, nx.orby.anmMatrix1); //TODO no vars here
            // // var nx.orby.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, nx.orby.anmMatrix1); //TODO no vars here
            // // var nx.orby.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, matrix); //TODO no vars here

            // if(nx.orbyMesh.rayLines.length && nx.orbyMesh.rayLines[3]){ nx.orbyMesh.rayLines[3].dispose(); nx.orbyMesh.rayLines.splice(3,1); } //remove back-.

            //OPTIMIZE- last array to new position-.


            // if(nx.orbyMesh.rayLines[1]){ nx.orbyMesh.rayLines[1].alpha = 0.5    }           
            // if(nx.orbyMesh.rayLines[2]){ nx.orbyMesh.rayLines[1].alpha = 0.4    }   //fade-out-.        
            
            // zapBotLaserOffset1 = nx.BV32(nx.orbyMesh.position);   //todo move into nx.zapbot
            // zapBotLaserOffset1.y = nx.orbyMesh.position.y + 1.15;

// debugger;
            if(nx.orbyMesh.rayLines.length!=3){ //INIT-

               //LOCAL_POSITION to WORLD_POSITION
                nx.orbyMesh.computeWorldMatrix();
                nx.orby.anmMatrix1 = nx.orbyMesh.getWorldMatrix();
                // var matrix = nx.orbyMesh.getWorldMatrix();
                // var nx.orby.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, matrix); //TODO no vars here
                // var nx.orby.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, nx.orby.anmMatrix1); //TODO no vars here
                nx.orby.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, nx.orby.anmMatrix1); //TODO no vars here

                nx.orbyMesh.rayLines= [];
                // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
                nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[0]);
                nx.orbyMesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
                nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[1]);
                nx.orbyMesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
                nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[2]);
                nx.orbyMesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8

            }else{ //REPLACEMENT-POS.

                //FOR EACH ALPHA - PLACE AT A NEW POINT-.
                nx.orbyMesh.disposeRay = nx.orbyMesh.rayLines[nx.orbyMesh.scanTgtAlpha]; 
                            // var ptArr1 = nx.orbyMesh.rayLines[1].getVerticesData(BABYLON.VertexBuffer.PositionKind)
                            // var ptArr0 = nx.orbyMesh.rayLines[0].getVerticesData(BABYLON.VertexBuffer.PositionKind)

                nx.orbyMesh.rayLines[nx.orbyMesh.scanTgtAlpha] = BABYLON.Mesh.CreateLines("dynoray", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[nx.orbyMesh.scanTgtAlpha]);


                nx.orbyMesh.disposeRay.dispose();
                // nx.orbyMesh.rayLines[nx.orbyMesh.scanTgtAlpha] = BABYLON.Mesh.CreateLines("ray3", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[nx.orbyMesh.scanTgtAlpha]);
                // nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.BV3(ptArr1[0],ptArr1[1],ptArr1[2]),nx.BV3(ptArr1[3],ptArr1[3],ptArr1[5])], nx.scene, nx.orbyMesh.rayLines[2]);
                // nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.BV3(ptArr0[0],ptArr0[1],ptArr0[2]),nx.BV3(ptArr0[3],ptArr0[3],ptArr0[5])], nx.scene, nx.orbyMesh.rayLines[1]);
                // nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[0]);


                // nx.orbyMesh.rayLines[0].refreshBoundingInfo();
                // nx.orbyMesh.rayLines[1].refreshBoundingInfo();
                // nx.orbyMesh.rayLines[2].refreshBoundingInfo();
            }


            nx.orbyMesh.scanTgtAlpha = (++nx.orbyMesh.scanTgtAlpha>2)?0:nx.orbyMesh.scanTgtAlpha; //TERNARY-TRIAD-ITERATOR-.
            // console.log('triad iterator', nx.orbyMesh.scanTgtAlpha)


            nx.orbyMesh.rayLines[0].alpha = 0.6            
            nx.orbyMesh.rayLines[1].alpha = 0.3    //fade-out-.        
            nx.orbyMesh.rayLines[2].alpha = 0.3    //fade-out-.        

            nx.orbyMesh.rayLines[0].color.g = 1;//Math.cos(alpha1);//1;
            nx.orbyMesh.rayLines[0].color.r = nx.orbyMesh.rayLines[0].color.b = 0
            nx.orbyMesh.rayLines[1].color.b = 0;//Math.cos(alpha1);//1;
            nx.orbyMesh.rayLines[1].color.g = nx.orbyMesh.rayLines[1].color.r = 1
            nx.orbyMesh.rayLines[2].color.g = 1;//Math.cos(alpha1);//1;
            nx.orbyMesh.rayLines[2].color.r = nx.orbyMesh.rayLines[2].color.b = 0;        //yellow-green-laser-.


            // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.rayLine1);
            // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene);
            // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.laserTgtSphere.position], nx.scene);
            // nx.rayLine1.alpha = 0.6;//Math.cos(alpha2);//0.8
            // nx.rayLine1.color.r = 1;//Math.cos(alpha1);//1;
            // nx.rayLine1.color.g = nx.rayLine1.color.b = 0;

            // nx.orbyMesh.rayLines.unshift(nx.rayLine1); //add to front

            // if (nx.orbyMesh && nx.orbyMesh.rayLines[0].intersectsMesh(nx.orbyMesh)) {                        //intersection
                // nx.orbyMesh.targeting = 1;
                // nx.orbyMesh.scanning = 0;
                // $(this).stop(true);
            // }
        }, complete:function(){ //  BOUNCE-.
            // console.log('BOUNCE')
            nx.orbyMesh.scanDirToggle = !nx.orbyMesh.scanDirToggle;
            // console.log('scanning5 on')
            // nx.orbyMesh.scanning=1;  //FIX: removed to help shut off laser! maybe breaks something else...
            if(!nx.orbyMesh.stopLaser){nx.orbyMesh.scanning=1;}  //FIX: removed to help shut off laser! maybe breaks something else...
            return; 
        } //NEXT-SUB-SEQUENCE-. 
    });
}


/*******************************************************- END ORBY-LASER -*******************************************************/
nx.orby.initHover = function(state){ //helper method
    nx.anmz.orby.hoverMode = (state===0)?0:1; 
}
/*******************************************************- INIT ORBY-LASER -*******************************************************/

nx.orby.stopLaser = function(){
  nx.orbyMesh.stopLaser = 1;
  setTimeout(function(){ //stop all laser animations then delete-.
    for(var i = 0; i<nx.orbyMesh.rayLines.length;i++){ 
      nx.orbyMesh.rayLines[i].dispose();  
    } 
    nx.orbyMesh.rayLines = [];
  },100)
}

nx.orby.initLaser = function(){ //USAGE: nx.orby.zapBotFactory({mesh:nx.zapbotTerra2})

    if(nx.orbyMesh.laserTgtSphere){return;} //ONly 1 init-.
   //DYNAMIC-BEHAVIORS bot1
    // nx.orbyMesh.targeting = 0;
    nx.orbyMesh.laserTgtSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    nx.orbyMesh.laserTgtSphere.parent =  nx.orbyMesh;
    nx.orbyMesh.laserTgtSphere.isVisible = 0;   //todo be sure target sphere is not orbiting when it doesnt need to. also parent pos to zapbot.

    nx.orbyMesh.laserOriginSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    nx.orbyMesh.laserOriginSphere.parent =  nx.orbyMesh;
    // nx.orbyMesh.laserOriginSphere.position = new BABYLON.Vector3(0, 5, -2);
    nx.orbyMesh.laserOriginSphere.position = new BABYLON.Vector3(-0.25, -0.044, -2.8);
    // nx.orbyMesh.laserOriginSphere.position = new BABYLON.Vector3(0, 2.5, -2.2);
    // nx.orbyMesh.laserOriginSphere.position = new BABYLON.Vector3(0, 0.5, -2);
    nx.orbyMesh.laserOriginSphere.isVisible = 0; 

    //parented offset interpolation spheres-.
    nx.orbyMesh.laserBumperLft = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    // nx.orbyMesh.laserBumperLft.parent =  nx.orbyMesh;
    // nx.orbyMesh.laserBumperLft.position = new BABYLON.Vector3(-55, -17, -45);
    nx.orbyMesh.laserBumperLft.isVisible = 0;
    // nx.orbyMesh.laserBumperLft.position = new BABYLON.Vector3(-25, -5, -35);
    nx.orbyMesh.laserBumperRgt = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    // nx.orbyMesh.laserBumperRgt.parent =  nx.orbyMesh;
    // nx.orbyMesh.laserBumperRgt.position = new BABYLON.Vector3(55, -17, -45);
    nx.orbyMesh.laserBumperRgt.isVisible = 0;
    // nx.orbyMesh.laserBumperRgt.position = new BABYLON.Vector3(25, -5, -35);



    nx.orbyMesh.laserBumperLft.position = nx.BV32({x: -313.4889300956459, y: 5.717820962062265, z: 266.95865147353646})
    nx.orbyMesh.laserBumperRgt.position = nx.BV32({x: -337.0334602261931, y: 8.896506634172113, z: 305})


    // nx.orbyMesh.hoverAlpha = 0; //zap bot hover-.
    nx.orbyMesh.scanning = 0; //tick this to 1 to start scanning-.
    nx.orbyMesh.delayOnTargeting = 1; //500
    nx.orbyMesh.scanDirToggle = 1;


    // nx.orbyMesh.zapAuraAlpha = 0; //glow size -.
    nx.orbyMesh.rayLines = [];

    // var scanDirToggle = 1;
    // var curScan, tgtScan;


    var anmLaserAlpha = 0;
    // nx.orbyMesh.anmLaserAlpha = 0; //TODO rename to CHASE-DAMPER-.


// debugger;
    // nx.orbyMesh.setScanTarget = nx.orby.setScanTgt;

    // debugger;

    // var zapPath = [];
    //-----------------------------------------------------ZAPWAVE-.
    // zapWavePath = [];
    // for(var i = -22; i < 22; i++) {
    // // for(var i = -20; i < 20; i++) {
    //     var x = i;
    //     var y = 0;
    //     var z = 0;
    //     zapWavePath.push(new BABYLON.Vector3(x, y, z));
    // }
    // if(!nx.orbyMesh.zapParent){
    //     nx.orbyMesh.zapParent = BABYLON.Mesh.CreateSphere("zapParent", 1, 6, nx.scene);
    //     // nx.orbyMesh.zapParent.material = mat
    //     nx.orbyMesh.zapParent.parent =  nx.orbyMesh;
    //     nx.orbyMesh.zapParent.position = new BABYLON.Vector3(0, -1.5, -2.5);
    //     nx.orbyMesh.zapParent.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    //     nx.orbyMesh.zapParent.isVisible = 0;
    // }
    // if(!nx.orbyMesh.zapWave){
    //     var zapMaterial = new BABYLON.StandardMaterial("zapMaterial1", nx.scene);
    //     zapMaterial.emissiveColor = new BABYLON.Color3(0.8, 0.8, 1.0);
    //     zapMaterial.diffuseColor = new BABYLON.Color3(0.44, 0.44, 1.0);
    //     zapMaterial.backFaceCulling = false;
    //     zapMaterial.wireframe = false;
    //     zapMaterial.alpha = 1.0;
    //     nx.orbyMesh.zapWave = BABYLON.Mesh.CreateTube("tube", zapWavePath, 2, 60, null, 0, nx.scene,true, BABYLON.Mesh.FRONTSIDE);
    //     nx.orbyMesh.zapWave.material = zapMaterial;
    //     nx.orbyMesh.zapWave.parent = nx.orbyMesh.zapParent;
    //     nx.orbyMesh.zapWave.isVisible = 0;
    // }
    //-----------------------------------------------------ZAPWAVE-.

// debugger;
    nx.scene.registerBeforeRender(function anmLaserSEQs() { //LOOPZ hover, search and chase sequence-.
    // nx.orbyMesh.anmLaserSEQs = function(config) { //LOOPZ hover, search and chase sequence-.

        if(nx.orbyMesh.scanning > 0){ //loop-limiter

            // if(nx.orbyMesh.stopLaser){
            //         nx.scene.unregisterBeforeRender(anmLaserSEQs); return; //LOOPZ-MUTER-.
            // }
            // nx.orbyMesh.anmLaserAlpha++;

        // nx.orbyMesh.hoverAlpha += 0.05; //zap-bot-hover-.
        // nx.orbyMesh.position.y += 0.01 * Math.cos(nx.orbyMesh.hoverAlpha);
            if(nx.orbyMesh.scanning===1){ //ONE-TIME-INIT-MECHANISM-.

                // console.log('ONE-TIME LASER START')
                //ANM: laser from point to point-.

                if(++nx.orbyMesh.anmLaserAlpha%2===0 || nx.orbyMesh.anmLaserAlpha%3===0){return;} //LOOPZ-DAMPER-. //TODO TEST THIS_.   
                nx.orby.startLaserScanAnm();

                // curScan = (scanDirToggle)? nx.orbyMesh.laserBumperLft.position:nx.orbyMesh.laserBumperRgt.position;
                // tgtScan = (scanDirToggle)? nx.orbyMesh.laserBumperRgt.position:nx.orbyMesh.laserBumperLft.position;
                // $({x:curScan.x,y:curScan.y,z:curScan.z})
                // .animate({x:tgtScan.x,y:tgtScan.y,z:tgtScan.z},{queue:false,duration:8000,easing:'swing',
                // step: function(now) { 

                //         nx.orbyMesh.laserTgtSphere.position.x = this.x;
                //         nx.orbyMesh.laserTgtSphere.position.y = this.y; 
                //         nx.orbyMesh.laserTgtSphere.position.z = this.z;

                //         //LOCAL_POSITION to WORLD_POSITION
                //         nx.orbyMesh.computeWorldMatrix();
                //         var matrix = nx.orbyMesh.getWorldMatrix();
                //         var nx.orby.global_position_tgt = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserTgtSphere.position, matrix); //TODO no vars here
                //         // nx.orby.global_position_tgt.y = nx.orbyMesh.position.y - 5;
                //         nx.orbyMesh.laserTgtSphere.position.copyFrom(nx.orby.global_position_tgt);

                //         var nx.orby.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, matrix); //TODO no vars here

                //         if(nx.orbyMesh.rayLines.length && nx.orbyMesh.rayLines[3]){ nx.orbyMesh.rayLines[3].dispose(); nx.orbyMesh.rayLines.splice(3,1); } //remove back-.
                //         if(nx.orbyMesh.rayLines[1]){ nx.orbyMesh.rayLines[1].alpha = 0.5    }           
                //         if(nx.orbyMesh.rayLines[2]){ nx.orbyMesh.rayLines[1].alpha = 0.4    }   //fade-out-.        
                        
                //         // zapBotLaserOffset1 = nx.BV32(nx.orbyMesh.position);   //todo move into nx.zapbot
                //         // zapBotLaserOffset1.y = nx.orbyMesh.position.y + 1.15;

                //         // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.rayLine1);
                //         nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene);
                //         // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.laserTgtSphere.position], nx.scene);
                //         nx.rayLine1.alpha = 0.6;//Math.cos(alpha2);//0.8
                //         nx.rayLine1.color.r = 1;//Math.cos(alpha1);//1;
                //         nx.rayLine1.color.g = nx.rayLine1.color.b = 0;
                //         nx.orbyMesh.rayLines.unshift(nx.rayLine1); //add to front
                //         if (nx.orbyMesh && nx.rayLine1.intersectsMesh(nx.orbyMesh)) {                        //intersection
                //             nx.orbyMesh.targeting = 1;
                //             nx.orbyMesh.scanning = 0;
                //             $(this).stop(true);
                //         }
                //     }, complete:function(){ //  BOUNCE-.
                //         // console.log('BOUNCE')
                //         scanDirToggle = !scanDirToggle;
                //         // console.log('looks suspicious')
                //         nx.orbyMesh.scanning=1; return; 
                //     } //NEXT-SUB-SEQUENCE-. 
                // });
            }
            nx.orbyMesh.scanning++;
        } //end scanning
//         else if(nx.orbyMesh.targeting > 0 ){ //------------------------------------------------TARGETING-MODE-.
//             if(nx.orbyMesh.targeting===1){ //init tracking-.
//                 //start zapping-.
//             }
//             else if(nx.orbyMesh.targeting%3===0){ //LOOPZ-DAMPER-.
//                 console.log('targeting')
//                 for(var i = 0; i<nx.orbyMesh.rayLines.length;i++){ nx.orbyMesh.rayLines[i].dispose();  } //TODO perf reuse rays
//                     // nx.orbyMesh.rayLines = []; //clean up lasers-.

//                 nx.orbyMesh.lookAt(nx.orbyMesh.position)
//                 nx.orbyMesh.rotation.x = 0.2// default bot rot
//                 nx.orbyMesh.rotation.z = 0;

//                     //LOCAL_POSITION to WORLD_POSITION
//                     nx.orbyMesh.computeWorldMatrix();
//                     nx.orby.anmMatrix1 = nx.orbyMesh.getWorldMatrix();
//                     nx.orby.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, nx.orby.anmMatrix1); //TODO no vars here


// // debugger;
//                 // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
//                 nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.orby.global_position_origin, nx.orbyMesh.position], nx.scene, nx.orbyMesh.rayLines[0]);
//                 nx.orbyMesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
//                 nx.orbyMesh.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
//                 nx.orbyMesh.rayLines[0].color.g = nx.orbyMesh.rayLines[0].color.b = 0
//                 // nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.orby.global_position_origin, nx.orbyMesh.position], nx.scene, nx.orbyMesh.rayLines[1]);
//                 // nx.orbyMesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
//                 // nx.orbyMesh.rayLines[1].color.g = 1;//Math.cos(alpha1);//1;
//                 // nx.orbyMesh.rayLines[1].color.r = nx.orbyMesh.rayLines[1].color.b = 0
//                 // nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.orby.global_position_origin, nx.orbyMesh.position], nx.scene, nx.orbyMesh.rayLines[2]);
//                 // nx.orbyMesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8
//                 // nx.orbyMesh.rayLines[2].color.b = 1;//Math.cos(alpha1);//1;
//                 // nx.orbyMesh.rayLines[2].color.g = nx.orbyMesh.rayLines[2].color.r = 0;        //spotted red laser

//                 // if(nx.orbyMesh.rayLines.length && nx.orbyMesh.rayLines[3]){ nx.orbyMesh.rayLines[3].dispose(); nx.orbyMesh.rayLines.splice(3,1); } //remove back-.
//                 // nx.orbyMesh.rayLines.unshift(nx.rayLine1); //add to front

//                 if(nx.orbyMesh.targeting%2===0){ //double-damper //todo probably not necessary-.
//                     console.log('doubledamper???')
//                         nx.orbyMesh.targeting = 0;
//                         nx.orbyMesh.spotted=1;
//                         return;
//                 }
//             }
//             nx.orbyMesh.targeting++; //frame-iterator-.

//         } //end targeting
//         else if (nx.orbyMesh.spotted) {
//             console.log('spotted')
//             nx.orbyMesh.spotted = 0; //one time only-.
//             setTimeout(function(){ //chase delay-.
//                 nx.orbyMesh.chasing = 1;
//             },nx.orbyMesh.delayOnTargeting)    
//         } else if( nx.orbyMesh.chasing > 0){
//             console.log('chasing')
//             nx.orby.routeZapBot(config);
//         } else if( nx.orbyMesh.catch===1 ){
//             console.log('catch')
//             // debugger;
//             nx.orby.startZapping(config);
//             // nx.orbyMesh.startZapping();
//             // nx.orbyMesh.chasing = 0;
//             // nx.orbyMesh.catch = 0;
//         } 

    // } //***********************************************************END hover, search and chase LOOPZ-.
    // nx.scene.registerBeforeRender(nx.orbyMesh.anmLaserSEQs(config));
    }); //***********************************************************END hover, search and chase LOOPZ-.
// }//end initbotz


} //END-ZAP-BOT-FACTORY********************************************************************



/*******************************************************- END IUNIT ORBY-LASER -*******************************************************/



/*********************************CREATE-SHADOW******************************/
nx.orby.initShadows = function(){
    if(!nx.lightShadow){ //one-time- LIGHT - FOR - SHADOWS-.
        nx.lightShadow = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, -0.2), nx.scene);
        nx.lightShadow.position = new BABYLON.Vector3(0,0,0);
        nx.lightShadow.position.copyFrom( {x:0, y:24, z: 0})
        nx.lightShadow.diffuse = new BABYLON.Color3(0.2, 0.2, 1);
        nx.lightShadow.specular = new BABYLON.Color3(0, 0, 1);
        nx.lightShadow.intensity = 0.88;
    }
    var shadowMapSIZE = 24; //can be re-instanced by calling initShadows(); But doesnt seem necessary.
    nx.shadowGenerator = new BABYLON.ShadowGenerator(shadowMapSIZE, nx.lightShadow);
    nx.shadowGenerator.useVarianceShadowMap = false; //default-.
    nx.shadowGenerator.usePoissonSampling = false; //better shadows but slower-.
    // nx.shadowGenerator.useExponentialShadowMap = false; //true default, false is performance boost-.
    nx.shadowGenerator.useExponentialShadowMap = true; //true default, false is performance boost-.
    nx.shadowGenerator.useBlurExponentialShadowMap = true; //blur the shadow, better, slower-.
    nx.shadowGenerator.blurScale = 1;
    nx.shadowGenerator.blurBoxOffset = 4;
    nx.shadowGenerator.usePercentageCloserFiltering = false; //v3.2, webgl2 shadows-.
    nx.shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
    nx.shadowGenerator.useContactHardeningShadow = false;
    setTimeout(function(){ //delay shadows to TEST rendering optimization-.
      nx.shadowGenerator.getShadowMap().renderList.push(nx.orbyMesh);
    //   nx.shadowGenerator.getShadowMap().renderList.push(nx.darkBot);
    },3000);
    nx.shadowDamper=0;
    if(nx.shadowDamper===0){ //one-time-.
        nx.scene.registerBeforeRender(function () {
            if(++nx.shadowDamper%10!=0){return} //DECIDAMPER-.
            if(nx && nx.orbyMesh && nx.lightShadow){
                var lightPOS = new BABYLON.Vector3.Zero(); //follow light
                lightPOS.copyFrom(nx.orbyMesh.position);
                lightPOS.y += 24;
                nx.lightShadow.position.copyFrom(lightPOS)
            }
        });
    }
}


// nx.isCinematicMode = function(){
// 	// debugger; //deprecated - NO - stubbed for example
//   return false;
//     // return (nx.cinematicMode>0);
// }


            



            // alphaFloating += 0.05; //zap-bot-hover-.
            // nx.kiloBotMesh1.position.y += 0.01 * Math.cos(alphaFloating);

              createAnmz();
              // createGround();
            //   debugger;
              if(nx.scene){ nx.createOrbyAnmRig(); }

              if(nx.ground && nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.ground);} //collision-.



              // nx.anmz.orby.move.autoGO = 1;







nx.orby.startLazerRainbow = function(fnEnd){

// debugger;
    nx.orby.fnEndRainbow = fnEnd;

    // nx.orby.rainbowLazerOn = 1;

    nx.orby.lazerBALL = BABYLON.Mesh.CreateSphere("nx.orby.lazerBALL", 4, 0.5, nx.scene);
    // nx.orby.lazerBALL.position.copyFrom({x: -355.555, y: 8.94342968043685, z: 290})
    nx.orby.lazerBALL.position.copyFrom({x: -355.555, y: 9.222, z: 290})
    // nx.orby.lazerBALL.position.copyFrom({x: -355.555, y: -1, z: 290})
    nx.orby.lazerBALL.visibility = 0

    // nx.orby.prysmTgts = BABYLON.Mesh.CreateCylinder("aPrysm",1, 5, 4, 6, 0, nx.scene);
    // nx.orby.prysmTgts.visibility = 0;
    // nx.orby.prysmTgts.position.y = -1;
    // nx.orby.prysmTgts.scaling = new BABYLON.Vector3(10,10,10)
    // nx.orby.prysmTgts.parent = nx.orby.lazerBALL; 

    //todo move function out of nexting
    // nx.orby.drawRainbow = function(stop){
    //   // return;
    //   if(!stop){

        // nx.orby.prysmData = nx.orby.prysmTgts.getVertexBuffer(BABYLON.VertexBuffer.PositionKind).getData();
        // var prysmVerts = nx.orby.prysmTgts.getIndices()

      //   nx.orby.tgtPts= [];
      //   // for(var i = 0; i< nx.orby.prysmData.length;i++){
      //   for(var i = 0; i< nx.orby.prysmData.length;i+=3){
      //   // for(var i = 0; i< 36;i++){
      //     nx.orby.aPt = BABYLON.Mesh.CreateSphere("nx.orby.aPt", 2, 0.05, nx.scene);
      //     nx.orby.aPt.position = new BABYLON.Vector3(nx.orby.prysmData[i],nx.orby.prysmData[i+1],nx.orby.prysmData[i+2])
      //     nx.orby.aPt.parent = nx.orby.prysmTgts;
      //     nx.orby.tgtPts.push(nx.orby.aPt)
      //   }
      // // debugger;

      //   nx.orby.worldTgtPts = [];
      //   // for(var i=0; i< tgtPts.length;i++){
      //   for(var i=0; i< 6;i++){
      //     nx.orby.prysmTgts.computeWorldMatrix();
      //     nx.orby.prysmMatrix = nx.orby.prysmTgts.getWorldMatrix();
      //     nx.orby.worldTgtPts.push(BABYLON.Vector3.TransformCoordinates(nx.orby.tgtPts[i].position, nx.orby.prysmMatrix) ); //TODO no vars here
      //   }



      //   //draw lines each vert.
      //   if(!nx.orby.rainbowRays){ nx.orby.rainbowRays = []; }
      //   // else { 
      //   //clean up.
      //   // debugger;
      //   for(var i=0; i<nx.orby.rainbowRays.length;i++){
      //     nx.orby.rainbowRays[i].dispose();
      //   }
      //   nx.orby.rainbowRays = []; 
        // }

  //     nx.orby.rainbowRayPts = [
  //       new BABYLON.Vector3(5, 10, 5),
  //       new BABYLON.Vector3(5, 10, 0),
  //       new BABYLON.Vector3(5, 10, -5),
  //       new BABYLON.Vector3(0, 10, -5),
  //       new BABYLON.Vector3(-5, 10, -5),
  //       new BABYLON.Vector3(-5, 10, 0),
  //       new BABYLON.Vector3(-5, 10, 5),
  //       new BABYLON.Vector3(0, 10, 5),
  //     ];

  //   // var nx.orby.rainbowRay1 = [];

  // //Create nx.orby.rainbowRay1 
  // nx.orby.rainbowRay1 = BABYLON.MeshBuilder.CreateLines("rainbowRays1", {points: nx.orby.rainbowRayPts}, nx.scene);
  //   // nx.orby.rainbowRay11.color = new BABYLON.Color3(.3, .3, .3);
  //   nx.orby.rainbowRay1.color = BABYLON.Color3.Green();
    // nx.orby.rainbowRay11.setPivotPoint(nx.orby.rainbowRay11.getBoundingInfo().boundingBox.center);
    // nx.orby.rainbowRay1.push(nx.orby.rainbowRay1);

  // var nx.orby.rainbowRay12 = nx.orby.rainbowRay11.clone();
  // lines2.position = new BABYLON.Vector3(-5.5, -5.5, 0);
  //   lines.push(lines2);

  // var lines3 = lines1.clone();
  // lines3.position = new BABYLON.Vector3(-5.5, 5.5, 0);
  //   lines.push(lines3);

  // var lines4 = lines1.clone();
  // lines4.position = new BABYLON.Vector3(5.5, 5.5, 0);
  //   lines.push(lines4);

  // // var lines5 = BABYLON.MeshBuilder.CreateLines("lines5", {points: myPoints4}, scene);
  // var lines5 = lines1.clone();
  // lines5.position = new BABYLON.Vector3(5.5, -5.5, 0);
  //   lines.push(lines5);


        // nx.orbyMesh.rayLines= [];
        // // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
        // nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[0]);
        // nx.orbyMesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
        // nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[1]);
        // nx.orbyMesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
        // nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.orby.global_position_origin, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[2]);
        // nx.orbyMesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8


        // for(var i=0; i<nx.orby.worldTgtPts.length; i++){
        //   // if(nx.orby.rainbowRays[i]){
        //     // nx.orby.aPrysmRay = BABYLON.Mesh.CreateLines("ray"+i, [nx.orby.lazerBALL.position,nx.orby.worldTgtPts[i]], nx.scene, nx.orby.rainbowRays[i]);
        //   // }else{
        //    nx.orby.aPrysmRay = BABYLON.Mesh.CreateLines("ray"+i, [nx.orby.lazerBALL.position,nx.orby.worldTgtPts[i]], nx.scene);

        //   // }

        //   if(nx.orby.prysmAlpha<50){
        //     nx.orby.aPrysmRay.color.r = 1;
        //     nx.orby.aPrysmRay.color.g = nx.orby.aPrysmRay.color.b = 0;
        //   } else if(nx.orby.prysmAlpha<100){
        //     nx.orby.aPrysmRay.color.g = 1;
        //     nx.orby.aPrysmRay.color.r = nx.orby.aPrysmRay.color.b = 0;
        //   } else {
        //     nx.orby.aPrysmRay.color.b = 1;
        //     nx.orby.aPrysmRay.color.r = nx.orby.aPrysmRay.color.g = 0;
        //   }
        //   // nx.orby.aPrysmRay.parent = nx.orby.lazerBALL;//nx.lazerbox;
        //   nx.orby.aPrysmRay.alpha = 0.8;//Math.cos(alpha2);//0.8
        //   nx.orby.rainbowRays.push(nx.orby.aPrysmRay);
        // } //end FOR
    //   } else { //stop

    //     for(var i=0; i<nx.orby.rainbowRays.length;i++){
    //       nx.orby.rainbowRays[i].dispose();
    //     }
    //     nx.orby.rainbowRays = []; 
    //     // nx.orby.prysmMatrix = [];
    //     // nx.orby.tgtPts= [];
    //     // nx.orby.worldTgtPts = [];
    //     // nx.orby.prysmData = [];

    //   }

    // }

    //todo: draw lines to each vert. spin prysm. move prysm up- (down), scale to a point.
// debugger;
      nx.orby.centerLazer = new BABYLON.Vector3(0, 0, 0);

        nx.orby.rainbowRayPts = [ //IDENTITY MATRIX-.
          new BABYLON.Vector3(15, -5, 15),
          new BABYLON.Vector3(15, -5, 0),
          new BABYLON.Vector3(15, -5, -15),
          new BABYLON.Vector3(0, -5, -15),
          new BABYLON.Vector3(-15, -5, -15),
          new BABYLON.Vector3(-15, -5, 0),
          new BABYLON.Vector3(-15, -5, 15),
          new BABYLON.Vector3(0, -5, 15),
        ];

        nx.orby.tempPnt = new BABYLON.Vector3.Zero();

        nx.orby.offRad = 1; //multiplier
        nx.orby.offY = 0;
      nx.orby.prysmFactory = function(){

        // config.offY = (config && config.offY)? config.offY : 0;  //defaults-.
        // config.offRad = (config && config.offRad)? config.offRad : 0;

// debugger;

        nx.orby.rainbowRayLines = [];
        for(var i=0; i<nx.orby.rainbowRayPts.length; i++){
          // if(nx.orby.rainbowRays[i]){
            // nx.orby.aPrysmRay = BABYLON.Mesh.CreateLines("ray"+i, [nx.orby.lazerBALL.position,nx.orby.worldTgtPts[i]], nx.scene, nx.orby.rainbowRays[i]);
          // }else{
          nx.orby.tempPnt.copyFrom({x:nx.orby.rainbowRayPts[i].x*nx.orby.offRad,y:nx.orby.rainbowRayPts[i].y+nx.orby.offY,z:nx.orby.rainbowRayPts[i].z*nx.orby.offRad});
          // nx.orby.rainbowRayLines.push(BABYLON.Mesh.CreateLines("ray"+i, [nx.orby.lazerBALL.position,nx.orby.tempPnt, nx.scene, nx.orby.rainbowRays[i]))
          // nx.orby.rainbowRayLines.push(nx.orby.tempPnt);
          nx.orby.tempPnt.copyFrom(nx.orby.tempPnt.add(nx.orby.lazerBALL.position))

          // console.log('PUSH: ',nx.orby.lazerBALL.position,nx.orby.tempPnt)

          nx.orby.rainbowRayLines.push([new BABYLON.Vector3(nx.orby.lazerBALL.position.x,nx.orby.lazerBALL.position.y,nx.orby.lazerBALL.position.z),
            new BABYLON.Vector3(nx.orby.tempPnt.x,nx.orby.tempPnt.y,nx.orby.tempPnt.z)]);

        }
        return nx.orby.rainbowRayLines;
      } //end factory


// debugger;

           // nx.orby.aPrysmRay = BABYLON.Mesh.CreateLines("ray"+i, [nx.orby.lazerBALL.position,nx.orby.worldTgtPts[i]], nx.scene);

    // var lines = [];
    // for (var i = 0; i < normals.length; i += 3) {
    //     // var v1 = BABYLON.Vector3.FromArray(positions, i);
    //     var v2 = v1.add(BABYLON.Vector3.FromArray(normals, i).scaleInPlace(size));
    //     lines.push([nx.orby.centerLazer, v2.add(mesh.position)]);
    // }


if(!nx.orby.rainBowRaySystem){

    nx.orby.offY = 0;
    nx.orby.rainbowRayLines = nx.orby.prysmFactory();
    nx.orby.rainBowRaySystem = BABYLON.MeshBuilder.CreateLineSystem("rainBowRaySystem", {lines: nx.orby.rainbowRayLines,updatable:true}, nx.scene);
    nx.orby.rainBowRaySystem.color = BABYLON.Color3.Green();
    // nx.orby.rainBowRaySystem.updatable = true;
}
// else{
//     nx.orby.offY += 0.02;
//     nx.orby.rainbowRayLines = nx.orby.prysmFactory();
//     nx.orby.rainBowRaySystem = BABYLON.MeshBuilder.CreateLineSystem("rainBowRaySystem", {lines: nx.orby.rainbowRayLines,instance:nx.orby.rainBowRaySystem});
//     nx.orby.rainBowRaySystem.color = BABYLON.Color3.Green();
//     // nx.orby.rainBowRaySystem.updatable = true;

// // updates the existing instance of lineSystem : no need for the parameter scene here
// // lineSystem = BABYLON.MeshBuilder.CreateLineSystem("lineSystem", {lines: myArray, instance: lineSystem});
// }



    // var nx.orby.rainbowRay1 = [];

  //Create nx.orby.rainbowRay1 
  // nx.orby.rainbowRay1 = BABYLON.MeshBuilder.CreateLines("rainbowRays1", {points: nx.orby.rainbowRayPts}, nx.scene);
    // nx.orby.rainbowRay11.color = new BABYLON.Color3(.3, .3, .3);
    // nx.orby.rainbowRay1.color = BABYLON.Color3.Green();

    // nx.orby.prysmScale = 10;
    nx.orby.prysmAlpha=0;
    nx.orby.prysmDamper=0;
    // nx.orby.prysmRot = 0;
    nx.orby.stopRainbowLazer = 0;
    // console.log('ONETIMECHECKA')
    nx.scene.registerBeforeRender(function rainbowLazerRun() {
        if(++nx.orby.prysmDamper%2===0){return}
        if(nx.orby.stopRainbowLazer<0){ nx.orby.fnEndRainbow(); nx.scene.unregisterBeforeRender(rainbowLazerRun); return; }
        // nx.orby.prysmTgts.rotation.y += 0.044;
        // nx.orby.prysmTgts.position.y += 0.444;
        // console.log('ALPHA',++nx.orby.prysmAlpha)
        // if(++nx.orby.prysmAlpha>100){
          // nx.orby.prysmScale -= 1;
          // if(nx.orby.prysmScale<=0){
          //   nx.orby.stopRainbowLazer = -1;
          // }else{
          //   // nx.orby.prysmTgts.scaling = new BABYLON.Vector3(nx.orby.prysmScale,nx.orby.prysmScale,nx.orby.prysmScale)
          // }
        // }
        // if(nx.orby.stopRainbowLazer===-1){
          // console.log('ONETIMECHECKB')
          // nx.orby.drawRainbow(true); //stop
          // nx.orby.fnEndRainbow();//callback to script-.



          // nx.orby.endRainbowRays('green');
          // setTimeout(function(){
          //   nx.orby.endRainbowRays('red');
          //   setTimeout(function(){
          //     nx.orby.endRainbowRays('end');
          //   },2000)
          // },3000)
        // } else {
        if(nx.orby.offRad>0){

          nx.orby.offRad = (nx.orby.offY<20)?1:nx.orby.offRad - 0.02; //multiplier
          nx.orby.offY += 0.4;
          nx.orby.rainbowRayLines = nx.orby.prysmFactory();
          nx.orby.rainBowRaySystem = BABYLON.MeshBuilder.CreateLineSystem("rainBowRaySystem", {lines: nx.orby.rainbowRayLines,instance:nx.orby.rainBowRaySystem});
          if(nx.orby.offRad===1){
            nx.orby.rainBowRaySystem.color = BABYLON.Color3.Green();
          }else{
            nx.orby.rainBowRaySystem.color = BABYLON.Color3.Blue();
          }

          // nx.orby.drawRainbow();
        } else { //signal DONE-.
          nx.orby.stopRainbowLazer=-1
          // debugger;
          nx.orby.rainBowRaySystem.dispose();
        }
        // nx.orby.prysmTgts.position.y += 0.01 * Math.cos(nx.orby.prysmDamper) *10;
        // nx.orby.prysmTgts.position.y = (Math.cos(nx.orby.prysmAlpha+=0.01) *10);
    });

    // nx.orbyMesh.computeWorldMatrix();
    // nx.orby.anmMatrix1 = nx.orbyMesh.getWorldMatrix();
    // var lazerWorldPOS = BABYLON.Vector3.TransformCoordinates(nx.orbyMesh.laserOriginSphere.position, nx.orby.anmMatrix1); //TODO no vars here
    //FIRE-LZR - UP
//     nx.orbyMesh.rayLines= [];
// //    nx.orbyMesh.laserORIG.position = new BABYLON.Vector3(nx.lazerbox.position.x,12,nx.lazerbox.position.z)
//     nx.orbyMesh.laserTgtSphere.position = new BABYLON.Vector3(nx.orby.lazerBALL.position.x,nx.orby.lazerBALL.position.y+100,nx.orby.lazerBALL.position.z)
//     nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[0]);
//     nx.orbyMesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
//     nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[1]);
//     nx.orbyMesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
//     nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[2]);
//     nx.orbyMesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8
//     nx.orbyMesh.rayLines[0].color.g = 1;//Math.cos(alpha1);//1;
//     nx.orbyMesh.rayLines[0].color.r = nx.orbyMesh.rayLines[0].color.b = 0
//     nx.orbyMesh.rayLines[1].color.b = 1;//Math.cos(alpha1);//1;
//     nx.orbyMesh.rayLines[1].color.g = nx.orbyMesh.rayLines[1].color.r = 0
//     nx.orbyMesh.rayLines[2].color.r = 1;//Math.cos(alpha1);//1;
//     nx.orbyMesh.rayLines[2].color.g = nx.orbyMesh.rayLines[2].color.b = 0;        //yellow-green-laser-.

}

//todo move out
nx.orby.endRainbowRays = function(mode){
  // console.log('ENDRAINBOW',mode)
    for(var i=0; i<nx.orbyMesh.rayLines.length;i++){
      nx.orbyMesh.rayLines[i].dispose();
    }
    nx.orbyMesh.rayLines = [];    
  //FIRE-LZR - UP
  if(mode==='green'){
      // nx.orbyMesh.rayLines= [];
  //    nx.orbyMesh.laserORIG.position = new BABYLON.Vector3(nx.lazerbox.position.x,12,nx.lazerbox.position.z)
      nx.orbyMesh.laserTgtSphere.position = new BABYLON.Vector3(nx.orby.lazerBALL.position.x,nx.orby.lazerBALL.position.y+500,nx.orby.lazerBALL.position.z)
      nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[0]);
      nx.orbyMesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
      nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[1]);
      nx.orbyMesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
      nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[2]);
      nx.orbyMesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8
      nx.orbyMesh.rayLines[0].color.g = 1;//Math.cos(alpha1);//1;
      nx.orbyMesh.rayLines[0].color.r = nx.orbyMesh.rayLines[0].color.b = 0
      nx.orbyMesh.rayLines[1].color.g = 1;//Math.cos(alpha1);//1;
      nx.orbyMesh.rayLines[1].color.b = nx.orbyMesh.rayLines[1].color.r = 0
      nx.orbyMesh.rayLines[2].color.g = 1;//Math.cos(alpha1);//1;
      nx.orbyMesh.rayLines[2].color.r = nx.orbyMesh.rayLines[2].color.b = 0;        //yellow-green-laser-.
  }else if(mode==='red'){
    // nx.orbyMesh.rayLines= [];
//    nx.orbyMesh.laserORIG.position = new BABYLON.Vector3(nx.lazerbox.position.x,12,nx.lazerbox.position.z)
    nx.orbyMesh.laserTgtSphere.position = new BABYLON.Vector3(nx.orby.lazerBALL.position.x,nx.orby.lazerBALL.position.y+500,nx.orby.lazerBALL.position.z)
    nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[0]);
    nx.orbyMesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
    nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[1]);
    nx.orbyMesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
    nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.orby.lazerBALL.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[2]);
    nx.orbyMesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8
    nx.orbyMesh.rayLines[0].color.g = 1;//Math.cos(alpha1);//1;
    nx.orbyMesh.rayLines[0].color.r = nx.orbyMesh.rayLines[0].color.b = 0
    nx.orbyMesh.rayLines[1].color.b = 1;//Math.cos(alpha1);//1;
    nx.orbyMesh.rayLines[1].color.g = nx.orbyMesh.rayLines[1].color.r = 0
    nx.orbyMesh.rayLines[2].color.r = 1;//Math.cos(alpha1);//1;
    nx.orbyMesh.rayLines[2].color.g = nx.orbyMesh.rayLines[2].color.b = 0;        //yellow-green-laser-.
  }else if(mode==='end'){
    // for(var i=0; i<nx.orbyMesh.rayLines.length;i++){
    //   nx.orbyMesh.rayLines[i].dispose();
    // }
    // nx.orbyMesh.rayLines = [];     
  }

}


//USAGE: addGlow('zap'||'ionized'||'stop', glowfactory instance) - glow any actor/impostor-.
nx.orby.addGlowFactory = function(glowType, instance){
  if(glowType==='zap'){
    //ANM GLOW BLUR-.
    if(!instance.glow){ //one-time-init-.
        instance.glow = new BABYLON.HighlightLayer("orby.glow", nx.scene, {
            // blueTextureSizeRatio: 0.5,
            // alphaBlendingMode: 2,
            blurHorizontalSize: 1,
            blurVerticalSize: 1,
            innerGlow:false,
            outerGlow:false
            // mainTextureRatio: 0.25
        });

        instance.glow.addMesh(instance, new BABYLON.Color3(0.44,0.44,1));
        // instance.glow.addMesh(instanceBody, new BABYLON.Color3(0.44,0.44,1));
    } 
        // instance.glow.addMesh(config.mesh, new BABYLON.Color3(0.44,0.44,1));
        // instance1.glow.removeMesh(config.mesh);
        // instance1.glow.blurHorizontalSize = 2;
        // instance1.glow.blurVerticalSize = 2;
        // instance1.glow.innerGlow = false;
        // instance1.glow.outerGlow = true;

    // config.mesh.zapAuraAlpha++ //todo move into render loop?
    // instance.glow.blurHorizontalSize = 1 +  Math.cos(config.mesh.zapAuraAlpha)*2;
    // instance.glow.blurVerticalSize = 1 +  Math.cos(config.mesh.zapAuraAlpha)*2;

  }//end zap
  else if (glowType==='stop'){
    instance.glow.removeMesh(instance);
    instance.glow.removeMesh(instanceBody);
    instance.glow = null;
  }
}//end addglow


//DARBOT used to be DOORBOT, before he was promoted by AEON
//To special-service on ALPHA~MOON
//Where he reported to Durk and aGuy.
//aGuy was in charge of the GARDENZ.
//And Durk took DOORBOT out into space
//to secretly build a castle
//in a crater on the far-side of ALPHA~MOON.
//DOORBOT was given ZAPPERZ and a JETPAK
//Which he used to build the castle.
//He became strong.
//He became DARBOT.
//Then, in preparation for invasion of ERTH.
//DAR gave DARBOT two MEZMOS
//You are the first of A LEGION of MEZMOBOTZ
//But DAR left it off, just in case 
//DARBOT turns on his BOT~MASTER



//ORBY-IMPOSTORS!

nx.orby.loadOrbyMouth = function(endfn){

    BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyMouth2a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyMouth1c.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot19b.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot18d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyorbot17d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    //    nx.orbyMesh = newMeshes[0]; //spacewaverider
        // nx.orbyMeshBody = newMeshes[1]; //orbymesh
        nx.orbyMeshM = nx.scene.getMeshByName('spacewaveriderM') 
        // nx.orbyMesh.convertToFlatShadedMesh();
        nx.orbyMeshBodyM = nx.scene.getMeshByName('orbymeshM') ; //orbymesh
        nx.orbySkeletonM = skeletons;
        // nx.orbyMeshM.position.copyFrom(nx.anmz.orby.rig.originBox.position);
        
        //SCENE SPECIFIC
        nx.orbyMeshM.position.copyFrom({x: 0, y: 265, z: 0}); //pyramid top

        nx.orbyMeshM.rotation = new BABYLON.Vector3(0,-2,0); //align-initial-rotation-.
        nx.orbyMeshM.scaling = new BABYLON.Vector3(1*nx.anmz.orby.scale,1*nx.anmz.orby.scale,1*nx.anmz.orby.scale,)
        // nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //ANIMATED-SURFBOARD-. Move out to scriptz

        nx.orbyMeshM.glow = new BABYLON.HighlightLayer("orby.glowM", nx.scene, {
            // blueTextureSizeRatio: 0.5,
            // alphaBlendingMode: 2,
            blurHorizontalSize: 1,
            blurVerticalSize: 1,
            innerGlow:false,
            outerGlow:false
            // mainTextureRatio: 0.25
        });

        nx.orbyMeshM.glow.addMesh(nx.orbyMeshM, new BABYLON.Color3(0.44,0.44,1));
        nx.orbyMeshM.glow.addMesh(nx.orbyMeshBodyM, new BABYLON.Color3(0.44,0.44,1));
        
        // nx.orbyMesh.setPivotPoint(new BABYLON.Vector3(0, -3, 0)); //spacewaverider pivot
        
        nx.orbyMouthM = nx.scene.getMeshByName('orbyMouthCoverM') ; //orbyMouth
        if(nx.orbyMouthM) nx.orbyMouthM.parent = nx.orbyMeshM

        // nx.orbyM.mouthCover = nx.scene.getMeshByName('orbyMouthCover');
        
          //TODO DELETE lazerboxM
        // nx.lazerboxM = nx.scene.getMeshByName('lazerboxM') ; //lazerbox
        // nx.lazerboxM.visibility = 0;

// nx.scene.beginAnimation(nx.orbySkeletonM[0], 22, 35, false, 0.5); // beforeBOOM-. 
// nx.scene.beginAnimation(nx.orbySkeletonM[0], 4, 4, false, 1); //end shock-. 
// nx.scene.beginAnimation(nx.orbySkeletonM[0], 3, 22, true, 0.1); //end shock-. 
        // nx.orby.iris = nx.scene.getMeshByName('separatedIRIS') 
        // if(nx.iris) nx.iris.parent = nx.orbyMesh
        // nx.orbyM.eye = nx.scene.getMeshByName('separatedEYE') 
        
        // nx.orbyM.noMouth = nx.scene.getMeshByName('orbymeshNoMouth')
        
        endfn(); //important
    }); //end orby mouth
}//end orby mouth

nx.orby.loadOrbyStep = function(){
    BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyStep3d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) { //still working?
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbyStep1a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) { //still working?

  // nx.anm.tipStep.aMesh = {};
  // nx.anm.tipStep.aSkel = {};

      nx.anm.tipStep.stepBoard = nx.scene.getMeshByName('spacewaveriderStep')
      nx.anm.tipStep.stepBoard.visibility = 0; 
      nx.anm.tipStep.aMesh = nx.scene.getMeshByName('orbymeshStep') ; //orbymesh
      nx.anm.tipStep.aMesh.visibility = 1; 
      nx.anm.tipStep.aSkel = skeletons;

      nx.orbyEYEStep = nx.scene.getMeshByName('separatedEYEStep') 
      nx.orbyIRISStep = nx.scene.getMeshByName('separatedIRIStep') 

      // nx.orbyMeshStep = nx.scene.getMeshByName('spacewaveriderStep')
      // nx.orbyMeshStep.visibility = 0; 
      // nx.orbyMeshBodyStep = nx.scene.getMeshByName('orbymeshStep') ; //orbymesh
      // nx.orbyMeshBodyStep.visibility = 1; 
      // nx.orbySkeletonStep = skeletons;
      
      // endfn(); //important
    }); //end orby sit up

    //anmethodology: anmactivator pattern - load function with an activate handle to trigger local callback in script-.
    // return function activator(){
    //   if(stepLoaded){endfn();} //important
    //   stepActivated=1;
    // }
}

nx.orby.loadSpaceWaveRider = function(){
  BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "spaceWaveRider3a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) { 
  // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "spaceWaveRider1b.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) { 
// debugger

nx.anm.waveRiderTip.aMesh = nx.scene.getMeshByName('SpaceRiderFREE')
nx.anm.waveRiderTip.aSkel = skeletons[0];


        // nx.orbyEYEStep.visibility = 0;
        // nx.orbyIRISStep.visibility = 0;


    // nx.orbySpaceWaveRider1 = nx.scene.getMeshByName('SpaceRiderFREE') 
    // nx.orbyRiderSkeleton = skeletons;

    // endfn();
  });
}

nx.orby.loadOrbySitUp = function(endfn){

    BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbySitUp6a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) { //still working?
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbySitUp4d.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) { //still working?
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbySitUp5a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) { //broke free armature
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbySitUp4c.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbySitUp4a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    // BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "orbySitUp3a.babylon", nx.scene, function (newMeshes, particleSystems, skeletons) {
    //    nx.orbyMesh = newMeshes[0]; //spacewaverider
        // nx.orbyMeshBody = newMeshes[1]; //orbymesh
        // debugger;

        nx.orbyMeshSitUp = nx.scene.getMeshByName('spacewaveriderS') 
        // nx.orbyMesh.convertToFlatShadedMesh();
        nx.orbyMeshBodySitUp = nx.scene.getMeshByName('orbymeshS') ; //orbymesh
        nx.orbyMeshBodySitUp.visibility = 0;
        
        nx.orbyEYESit = nx.scene.getMeshByName('separatedEYESit') 
        nx.orbyIRISSit = nx.scene.getMeshByName('separatedIRISSit') 
        nx.orbyIRISSit.visibility = 0;
        nx.orbyEYESit.visibility = 0;

        // debugger;
        nx.orbySkeletonSit = skeletons;
        // nx.orbyMeshSitUp.position.copyFrom(nx.anmz.orby.rig.originBox.position);
        
        //SCENE SPECIFIC
        nx.orbyMeshSitUp.position.copyFrom({x: 0, y: 265, z: 0}); //pyramid top

        nx.orbyMeshSitUp.rotation = new BABYLON.Vector3(0,-2,0); //align-initial-rotation-.
        nx.orbyMeshSitUp.scaling = new BABYLON.Vector3(1*nx.anmz.orby.scale,1*nx.anmz.orby.scale,1*nx.anmz.orby.scale,)
   
        nx.orbyMeshSitUp.visibility = 0;
        // nx.scene.beginAnimation(nx.orbySkeletonSit[0], 0, 140, true, 1.0); //ANIMATED-SURFBOARD-. Move out to scriptz

        nx.orbyMeshSitUp.glow = new BABYLON.HighlightLayer("orby.glowS", nx.scene, {
            // blueTextureSizeRatio: 0.5,
            // alphaBlendingMode: 2,
            blurHorizontalSize: 1,
            blurVerticalSize: 1,
            innerGlow:false,
            outerGlow:false
            // mainTextureRatio: 0.25
        });

        nx.orbyMeshSitUp.glow.addMesh(nx.orbyMeshSitUp, new BABYLON.Color3(0.44,0.44,1));
        nx.orbyMeshSitUp.glow.addMesh(nx.orbyMeshBodySitUp, new BABYLON.Color3(0.44,0.44,1));
        
        // nx.orbyMesh.setPivotPoint(new BABYLON.Vector3(0, -3, 0)); //spacewaverider pivot
        
        // nx.orbyMouthM = nx.scene.getMeshByName('orbyMouthCoverM') ; //orbyMouth
        // if(nx.orbyMouthM) nx.orbyMouthM.parent = nx.orbyMeshM

        // nx.orbyM.mouthCover = nx.scene.getMeshByName('orbyMouthCover');
        
          //TODO DELETE lazerboxM
        // nx.lazerboxM = nx.scene.getMeshByName('lazerboxM') ; //lazerbox
        // nx.lazerboxM.visibility = 0;

// nx.scene.beginAnimation(nx.orbySkeletonSit[0], 22, 35, false, 0.5); // beforeBOOM-. 
// nx.scene.beginAnimation(nx.orbySkeletonSit[0], 4, 4, false, 1); //end shock-. 
// nx.scene.beginAnimation(nx.orbySkeletonSit[0], 3, 22, true, 0.1); //end shock-. 
        // nx.orby.iris = nx.scene.getMeshByName('separatedIRIS') 
        // if(nx.iris) nx.iris.parent = nx.orbyMesh
        // nx.orbyM.eye = nx.scene.getMeshByName('separatedEYE') 
        
        // nx.orbyM.noMouth = nx.scene.getMeshByName('orbymeshNoMouth')
        
        endfn(); //important
    }); //end orby sit up
} //end load orby sit up



// }); //end-module-.



