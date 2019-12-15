/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('a module-loaded: ZAP')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
// if(!nx.sub){nx.sub={}}
// nx.sub = {num0:0,num1:0} 
// nx.botz = {};
if(!nx.botz){nx.botz={}}

// nx.botz.stopZap = 0;

/******************************-MODULE-**********************************/

/*********************************-LOCALVARS-******************************/
// var spykebughead, spykebugbody, spykebugtail;
// var merphbughead, merphbugbody, merphbugtail;
// var chompbughead, chompbugbody, chompbugtail;
// var bugModes = {walk:1,look:0,chase:0,bite:0,digging:0,gone:0}

//EXAMPLE-.
/*********************nx.anmz***********************/
// nx.heroX = {
//     orby:{name:'', mode:0, anim:function(){} },
//     merp:{name:'', mode:0, anim:function(){} },
//     spyk:{name:'', mode:0, anim:function(){} },
//     chmp:{name:'', mode:0, anim:function(){} },
//     zone:{
//         look:{name:'look', min:'',max:'', anim:function(){} },
//         gone:{name:'gone', min:'',max:'', anim:function(){} },
//         sink:{name:'sink', min:'',max:'', anim:function(){} },
//         walk:{name:'walk', min:'',max:'', anim:function(){} },
//         chase:{name:'chase', min:'',max:'', anim:function(){} }
//     },
//     mode:{
//         hidden:{name:'hidden', mode:0, min:'',max:'', anim:function(){} },
//         gohome:{name:'gohome', mode:0, min:'',max:'', anim:function(){} },
//         chasing:{name:'chasing', mode:0, min:'',max:'', anim:function(){} }
//     }
// };
// var anim = nx.anmz; //short-hand-alias
/*********************END-nx.anmz***********************/
// var loadAssets = function() {
nx.botz.loadAssets = function(initFn) {
    if(nx.kiloBotMesh1){return;} //already loaded-.
    if(nx.zapbotMesh2){return;} //already loaded-.
    if(!nx.scene){return;}
    if(!nx.botz){nx.botz={}}
    if(!nx.assetsManager){ nx.assetsManager = new BABYLON.AssetsManager(nx.scene); }

// debugger;
    // nx.getMasterManifest(function(){ }); //get await spot in line on manifest to loading-count.
    // var darkBotTask = nx.assetsManager.addMeshTask("darkbot task", "", "./copyrightnetcinematics/3d/", "darcbot1.babylon");
    // darkBotTask.onSuccess = function (task) {
    //     nx.darkbot = task.loadedMeshes[0]
    //     // nx.darkbot.position = new BABYLON.Vector3(0,15,350);
    //     // nx.darkbot.position.copyFrom({x: 7, y: 265.5, z: -6});
    //     nx.darkbot.position.copyFrom({x: 23, y: 262, z: -23});
    //     nx.darkbot.rotation.y = -0.7;

    //     nx.setMasterManifest(); //after assetLoad, signal asset arrived, needs to be done for every asset-.

    //     // nx.darkbot.showBoundingBox();
    //     if(nx.editz.createMasterEditor){ nx.editz.createMasterEditor(nx.darkbot); }  //GOOD-POS-EDITOR-example-.
    // }


    nx.getMasterManifest(function(){ }); //pretty sure need this FOR EACH LOADED ASSET - not just each module-.

    // var zapbotTask = nx.assetsManager.addMeshTask("zapbot task", "", "./copyrightnetcinematics/3d/", "zapbotKilo3.babylon");
    var zapbotTask = nx.assetsManager.addMeshTask("zapbot task", "", "./copyrightnetcinematics/3d/", "zapbotKilo4a.babylon");
    // var zapbotTask = nx.assetsManager.addMeshTask("zapbot task", "", "./copyrightnetcinematics/3d/", "zapbotMega1.babylon");
    // var zapbotTask = nx.assetsManager.addMeshTask("zapbot task", "", "./copyrightnetcinematics/3d/", "zapbotTera1.babylon");
    zapbotTask.onSuccess = function (task) {
        // debugger;
        nx.kiloBotMesh1 = task.loadedMeshes[0]; //TODO change nx.kiloBotMesh1 to nx.botz.bot1.mesh;
        nx.kiloBotMesh1.position.copyFrom({x:0, y: 5, z:0}); //PLACE ZAPBOT
        nx.kiloBotMesh1.rotation.x = 0.2
        nx.kiloBotMesh1.rotation.y = 0;
        nx.kiloBotMesh1.sirenLight = task.loadedMeshes[1];


        nx.kiloBotMesh1.blueMat = nx.kiloBotMesh1._material.subMaterials[4];
        nx.kiloBotMesh1.redMat = nx.kiloBotMesh1._material.subMaterials[5];
        nx.kiloBotMesh1.greyMat = nx.kiloBotMesh1._material.subMaterials[6];

        // var sirenMaterial = new BABYLON.StandardMaterial("sirenMaterial1", nx.scene);
        // sirenMaterial.emissiveColor = new BABYLON.Color3(0.8, 0.8, 1.0);
        // sirenMaterial.diffuseColor = new BABYLON.Color3(0.44, 0.44, 1.0);
        // sirenMaterial.backFaceCulling = false;
        // sirenMaterial.wireframe = true;//false;
        // sirenMaterial.alpha = 1.0;
        // nx.kiloBotMesh1.sirenLight.material = sirenMaterial;
        // nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.redMat;

        // setTimeout(function(){
        //     nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.blueMat;
        // },20000);

        nx.botz.initKiloBot();

        // debugger;
        nx.kiloBotMesh1._isListening=1; //important - TEST
        nx.kiloBotMesh1.startHovering(); //todo

        nx.botz.initBotShadows();

        // nx.botz.zapBotFactory({mesh:nx.kiloBotMesh1})

        // nx.zapBotGlow.addMesh(nx.kiloBotMesh1, new BABYLON.Color3(0,0,0.44));
        // nx.zapBotGlow = new BABYLON.HighlightLayer('zapbotGlow', nx.scene);
  //       nx.zapBotGlow.addMesh(nx.kiloBotMesh1, new BABYLON.Color3(0,0,0.44));
  //       nx.zapBotGlow.blurHorizontalSize = 2;
  //       nx.zapBotGlow.blurVerticalSize = 2;


// debugger;
        // nx.createBotz();
        // nx.botz.createBotz(); //change name to initBot
        nx.setMasterManifest(); //after assetLoad, signal asset arrived, needs to be done for every asset-.

// debugger; //TODO holdover from not having MASTERMANIFEST. needed to position AFTERLOAD so initFn is an afterLoad,
            //BUT if MASTERMANIFEST IS WORKING - no need for afterLOAD.
        // if(initFn){
            // debugger; //deprecated?
            // initFn();
        // } //CALLBACK inits-. //TODO double check fn might be removable-.
    } //END-nx.kiloBotMesh1 load-.


   

    nx.getMasterManifest(function(){ }); //pretty sure need this FOR EACH LOADED ASSET - not just each module-.
    // var zapbotTask2 = nx.assetsManager.addMeshTask("zapbot task2", "", "./copyrightnetcinematics/3d/", "zapbot20.babylon");
    var zapbotTask2 = nx.assetsManager.addMeshTask("zapbot task2", "", "./copyrightnetcinematics/3d/", "zapbotTerra2b.babylon");
    zapbotTask2.onSuccess = function (task) {
        // debugger;
        nx.zapbotMesh2 = task.loadedMeshes[0]; //TODO change nx.kiloBotMesh1 to nx.botz.bot1.mesh;
        // nx.zapbotMesh2 = task.loadedMeshes[2]; //TODO change nx.kiloBotMesh1 to nx.botz.bot1.mesh;
        nx.zapbotMesh2.position.copyFrom({x:0, y: 2, z:0}); //PLACE ZAPBOT
        nx.zapbotMesh2.rotation.x = 0
        nx.zapbotMesh2.rotation.y = 0;

// debugger;
        nx.botz.initBotFactory(nx.zapbotMesh2);
        // nx.zapbotMesh2.startListening();
        // nx.zapbotMesh2.startHovering();
        // nx.zapbotMesh2.startScanning();
        // nx.botz.zapBotFactory({mesh:nx.zapbotMesh2})

        nx.setMasterManifest(); //after assetLoad, signal asset arrived-.

    }

    nx.getMasterManifest(function(){ }); //pretty sure need this FOR EACH LOADED ASSET - not just each module-.
    var zapbotTask3 = nx.assetsManager.addMeshTask("zapbot task3", "", "./copyrightnetcinematics/3d/", "zapbotMega2.babylon");
    zapbotTask3.onSuccess = function (task) {
        nx.zapbotMega = task.loadedMeshes[0]; //TODO change nx.kiloBotMesh1 to nx.botz.bot1.mesh;
        // nx.zapbotMesh2 = task.loadedMeshes[2]; //TODO change nx.kiloBotMesh1 to nx.botz.bot1.mesh;
        nx.zapbotMega.position.copyFrom({x:0, y: 2, z:0}); //PLACE ZAPBOT
        nx.zapbotMega.rotation.x = 0
        nx.zapbotMega.rotation.y = 0;


// debugger;
        nx.botz.initBotFactory(nx.zapbotMega);
        // nx.zapbotMega.startListening();
        // nx.zapbotMega.startHovering();
        // nx.zapbotMega.startScanning();
        // nx.botz.zapBotFactory({mesh:nx.zapbotMesh2})

        nx.setMasterManifest(); //after assetLoad, signal asset arrived-.

    }



    nx.assetsManager.load();  // IMPORTANT.
}

//AUTO-LOAD: module automatically loads itself and then notifies MASTERMANIFEST when complete, before rendering-.
nx.botz.loadAssets(); 

//todo to namespace or not to namespace...
// nx.botz.createBotz = function(){
// nx.botz.initBotz = function(){
//     // debugger;
//     nx.botz.zapBotFactory({mesh:nx.kiloBotMesh1})
//     // nx.botz.zapBotFactory({mesh:nx.zapbotMesh2})
// }


/********************************************************-ZAP-BOT-INITS-****************************************************************/
//individualize logic for precision. zap bot factory worked but can be improved for each individual bot for performance.
nx.botz.initBotFactory = function(aBot){
    //tri-state-behavior-states-. //TIP: use start and stop accessors-.
    aBot._isListening=0;
    aBot._isFlashing=0;
    aBot._isShocking=0;
    aBot._isScanning=0;
    aBot._isHovering=0;
    aBot._isChasing=0;
    //init-abilities-.
    nx.botz.initBotScan(aBot);
    // nx.botz.initKiloBotShock();
    //start and stop accessor functions-.
    aBot.stopLooping = function(){ aBot._isListening=-1; }
    aBot.startListening = function(){ aBot._isListening=1; }
    aBot.stopListening = function(){ aBot._isListening=0; } //-1 to unload actionloop-.
    aBot.startFlashing = function(){ aBot._isFlashing=1; }
    aBot.stopFlashing = function(){ aBot._isFlashing=-1; aBot.sirenLight.material = aBot.greyMat; }
    aBot.startShocking = function(){ aBot._isShocking=1; aBot.zapWave.isVisible = 1; }
    aBot.stopShocking = function(){ aBot._isShocking=-1; aBot.zapWave.isVisible = 0;}
    aBot.startScanning = function(){ aBot._isScanning=1; aBot.searching=1; }
    aBot.stopScanning = function(){ aBot._isScanning=-1; aBot.stopSearching(); }
    aBot.startHovering = function(){ aBot._isHovering=1; }
    aBot.stopHovering = function(){ aBot._isHovering=0; }
    aBot.startChasing = function(){ aBot._isChasing=1; }
    aBot.stopChasing = function(){ aBot._isChasing=-1; }
    //loop-indexes-.
    aBot.hoverIdx = 0;
    aBot.loopIdx = 0;
    aBot.actionLoopFn = function(){
        if(++aBot.loopIdx%3===0){return} //loop damper
        //isLISTENING-.
        else if(aBot._isListening===0){return} //0 to shut off, -1 to kill loopz-.
        else if(aBot._isListening<0){ nx.scene.unregisterBeforeRender(aBot.actionLoopFn); } //-1 to UNLOAD-LOOPZ-.!
        // else if(aBot._isListening<0){ nx.scene.unregisterBeforeRender(kiloBotBehaviorLOOPZ); } //-1 to UNLOAD-LOOPZ-.!
        //Loop-actions-PATTERN-.
        //isFLASHING
        // if(aBot._isFlashing===1){
        //     if(aBot.loopIdx%20){ //red - %Frequency-Modulator-.
        //         aBot.sirenLight.material = aBot.redMat;
        //     } else { //blue
        //         aBot.sirenLight.material = aBot.blueMat;
        //     }
        // }else if(aBot._isFlashing===-1){
        //     aBot._isFlashing=0;//three way, one time, shut off switch-.
        //     // aBot.sirenLight.material = aBot.greyMat;
        // }
        //isSHOCKING
        if(aBot._isShocking===1){
// console.log('isShocking');
            // nx.botz.kiloBotShockAnm();
        }else if (aBot._isShocking===-1){ //TODO three way is removable because put logic in accessors
            aBot._isShocking=0;//three way, one time, shut off switch-.
        }
        //isSCANNING
        if(aBot._isScanning===1){
// console.log('isScanning');
            nx.botz.botScanSEQ(aBot);
            // nx.botz.kiloBotScanSEQ();
        }else if (aBot._isScanning===-1){ //negative one is shut off switch - 0 to be off.
            aBot._isScanning=0;//three way, one time, shut off switch-.
        }
        //isCHASING
        if(aBot._isChasing===1){
// console.log('isChasing');
        }else if (aBot._isChasing===-1){ //negative one is shut off switch - 0 to be off.
            aBot._isChasing=0;//three way, one time, shut off switch-.
        }
        //isHOVERING
        if(aBot._isHovering){
            aBot.hoverIdx += 0.05; //zap-bot-hover-.
            aBot.position.y += 0.01 * Math.cos(aBot.hoverIdx);
        } //ok to turn off with isHovering = 0;

    }
    //SOLO-ANIMATION-LOOP-FOR-ALL-BOT-BEHAVIORS!-.
    nx.scene.registerBeforeRender(aBot.actionLoopFn);
    // nx.scene.registerBeforeRender(function kiloBotBehaviorLOOPZ() { //LOOPZ hover, search and chase, zapwave and siren flash sequence-.
//         if(++aBot.loopIdx%3===0){return} //loop damper
//         //isLISTENING-.
//         else if(aBot._isListening===0){return} //0 to shut off, -1 to kill loopz-.
//         else if(aBot._isListening<0){ nx.scene.unregisterBeforeRender(kiloBotBehaviorLOOPZ); } //-1 to UNLOAD-LOOPZ-.!
//         //Loop-actions-PATTERN-.
//         //isFLASHING
//         if(aBot._isFlashing===1){
//             if(aBot.loopIdx%20){ //red - %Frequency-Modulator-.
//                 aBot.sirenLight.material = aBot.redMat;
//             } else { //blue
//                 aBot.sirenLight.material = aBot.blueMat;
//             }
//         }else if(aBot._isFlashing===-1){
//             aBot._isFlashing=0;//three way, one time, shut off switch-.
//             // aBot.sirenLight.material = aBot.greyMat;
//         }
//         //isSHOCKING
//         if(aBot._isShocking===1){
// // console.log('isShocking');
//             nx.botz.kiloBotShockAnm();
//         }else if (aBot._isShocking===-1){ //TODO three way is removable because put logic in accessors
//             aBot._isShocking=0;//three way, one time, shut off switch-.
//         }
//         //isSCANNING
//         if(aBot._isScanning===1){
// // console.log('isScanning');
//             nx.botz.kiloBotScanSEQ();
//         }else if (aBot._isScanning===-1){ //negative one is shut off switch - 0 to be off.
//             aBot._isScanning=0;//three way, one time, shut off switch-.
//         }
//         //isCHASING
//         if(aBot._isChasing===1){
// // console.log('isChasing');
//         }else if (aBot._isChasing===-1){ //negative one is shut off switch - 0 to be off.
//             aBot._isChasing=0;//three way, one time, shut off switch-.
//         }
//         //isHOVERING
//         if(aBot._isHovering){
//             aBot.hoverIdx += 0.05; //zap-bot-hover-.
//             aBot.position.y += 0.01 * Math.cos(aBot.hoverIdx);
//         } //ok to turn off with isHovering = 0;
//     });
}

/***************************************************NEW-GENERIC-BOT-BEHAVIORS***********************************/
nx.botz.initBotScan = function(aBot){
   if(aBot.laserTgtSphere){return;} //ONly 1 init-.
   //DYNAMIC-BEHAVIORS bot1
    aBot.targeting = 0;
    aBot.laserTgtSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    aBot.laserTgtSphere.parent =  aBot;
    aBot.laserTgtSphere.isVisible = 0;   //todo be sure target sphere is not orbiting when it doesnt need to. also parent pos to zapbot.
    aBot.laserOriginSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    aBot.laserOriginSphere.parent =  aBot;
    aBot.laserOriginSphere.position = new BABYLON.Vector3(0, 0.5, -1.5);
    // aBot.laserOriginSphere.position = new BABYLON.Vector3(0, 0.5, -2);
    aBot.laserOriginSphere.isVisible = 0; 
    aBot.laserBumperLft = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    aBot.laserBumperLft.parent =  aBot;
    aBot.laserBumperLft.position = new BABYLON.Vector3(-55, -17, -45);
    aBot.laserBumperLft.isVisible = 0;
    aBot.laserBumperRgt = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    aBot.laserBumperRgt.parent =  aBot;
    aBot.laserBumperRgt.position = new BABYLON.Vector3(55, -17, -45);
    aBot.laserBumperRgt.isVisible = 0;
    // aBot.hoverAlpha = 0; //zap bot hover-.
    aBot.searching = 0; //tick this to 1 to start searching-.
    aBot.rayIntersecting = 1; //turn off for movie, should not trigger-.
    aBot.delayOnTargeting = 1; //500
    aBot.scanDirToggle = 1;
    // aBot.zapAuraAlpha = 0; //glow size -.
    aBot.rayLines = [];
    aBot.hoverChaseAlpha = 0; //TODO rename to CHASE-DAMPER-.
    // aBot.setScanTarget = nx.botz.setKiloBotScanTgt;
    // aBot.setScanTarget = nx.botz.setBotScanTgt; //obsolete?
    aBot.stopSearching = function(){
      aBot.stopLaser = 1;
      setTimeout(function(){ //stop all laser animations then delete-.
        for(var i = 0; i<aBot.rayLines.length;i++){ 
          aBot.rayLines[i].dispose();  
        } 
        aBot.rayLines = [];
      },100)
    }
} //end initbotscan
    
nx.botz.botScanSEQ = function(aBot){ //anm is called on every frame!
    if(aBot.searching > 0){
        if(aBot.searching===1){ //ONE-TIME-INIT-MECHANISM-.
            // console.log('ONE-TIME LASER START')
            //ANM: laser from point to point-.
            if(++aBot.hoverChaseAlpha%2===0 || aBot.hoverChaseAlpha%3===0){return;} //LOOPZ-DAMPER-. //TODO TEST THIS_.   
            // nx.botz.laserScanAnm(config);
            // nx.botz.kiloBotScanANM();
            nx.botz.botScanANM(aBot);
        }
        aBot.searching++;
    } //end searching
    else if(aBot.targeting > 0 ){ //------------------------------------------------TARGETING-MODE-.
        if(aBot.targeting===1){ //init tracking-.
            //start zapping-.
        }
        else if(aBot.targeting%3===0){ //LOOPZ-DAMPER-.
            console.log('targeting')
            for(var i = 0; i<aBot.rayLines.length;i++){ aBot.rayLines[i].dispose();  } //TODO perf reuse rays

            aBot.lookAt(nx.orbyMesh.position)
            aBot.rotation.x = 0.2// default bot rot
            aBot.rotation.z = 0;

            //LOCAL_POSITION to WORLD_POSITION
            aBot.computeWorldMatrix();
            nx.botz.anmMatrix1 = aBot.getWorldMatrix();
            nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(aBot.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

            aBot.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, aBot.rayLines[0]);
            aBot.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
            aBot.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
            aBot.rayLines[0].color.g = aBot.rayLines[0].color.b = 0
            if(aBot.targeting%2===0){ //double-damper //todo probably not necessary-.
                aBot.targeting = 0;
                aBot.spotted=1;
                return;
            }
        }
        aBot.targeting++; //frame-iterator-.
    } //end targeting
    else if (aBot.spotted) {
        console.log('spotted')
        aBot.spotted = 0; //one time only-.
        setTimeout(function(){ //chase delay-.
            aBot.chasing = 1;
        },aBot.delayOnTargeting)    
    } else if( aBot.chasing > 0){
        console.log('chasing')
        // nx.botz.routeKiloBot();
        // nx.botz.routeZapBot(config);
    } else if( aBot.catch===1 ){
        // nx.botz.kiloBotZapsOrby();  //START ZAPPING call-.
        // nx.botz.startZapping(config);  //START ZAPPING call-.
    } 
} //end botscanSEQ

nx.botz.botScanANM = function(aBot){ //anm is called on every frame!
    aBot.stopLaser = 0;

    var scanDamperAlpha = 0
    var curScan, tgtScan;
    // var nx.botz.anmMatrix1, nx.botz.global_position_tgt, nx.botz.global_position_origin;
    curScan = (aBot.scanDirToggle)? aBot.laserBumperLft.position:aBot.laserBumperRgt.position;
    tgtScan = (aBot.scanDirToggle)? aBot.laserBumperRgt.position:aBot.laserBumperLft.position;

    aBot.scanTgtAlpha = 0;
    aBot.disposeRay = null;

    $({x:curScan.x,y:curScan.y,z:curScan.z}) //--------------------------------------------------LASER-SCAN-SWEEP-ANM-.
    .animate({x:tgtScan.x,y:tgtScan.y,z:tgtScan.z},{queue:false,duration:2000,easing:'swing',
    step: function(now) { 
            if(++scanDamperAlpha%2===0||scanDamperAlpha%3===0||scanDamperAlpha%5===0||scanDamperAlpha%7===0){return}

            aBot.laserTgtSphere.position.x = this.x;
            aBot.laserTgtSphere.position.y = this.y; 
            aBot.laserTgtSphere.position.z = this.z;

            //LOCAL_POSITION to WORLD_POSITION
            aBot.computeWorldMatrix();
            nx.botz.anmMatrix1 = aBot.getWorldMatrix();
            nx.botz.global_position_tgt = BABYLON.Vector3.TransformCoordinates(aBot.laserTgtSphere.position, nx.botz.anmMatrix1); //TODO no vars here
            aBot.laserTgtSphere.position.copyFrom(nx.botz.global_position_tgt);

            nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(aBot.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

            if(aBot.rayLines.length!=3){ //INIT-

               //LOCAL_POSITION to WORLD_POSITION
                aBot.computeWorldMatrix();
                nx.botz.anmMatrix1 = aBot.getWorldMatrix();
                nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(aBot.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

                aBot.rayLines= [];
                aBot.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, aBot.laserTgtSphere.position], nx.scene, aBot.rayLines[0]);
                aBot.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
                aBot.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.botz.global_position_origin, aBot.laserTgtSphere.position], nx.scene, aBot.rayLines[1]);
                aBot.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
                aBot.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, aBot.laserTgtSphere.position], nx.scene, aBot.rayLines[2]);
                aBot.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8

            }else{ //REPLACEMENT-POS.
                //FOR EACH ALPHA - PLACE AT A NEW POINT-.
                aBot.disposeRay = aBot.rayLines[aBot.scanTgtAlpha]; 
                aBot.rayLines[aBot.scanTgtAlpha] = BABYLON.Mesh.CreateLines("dynoray", [nx.botz.global_position_origin, aBot.laserTgtSphere.position], nx.scene, aBot.rayLines[aBot.scanTgtAlpha]);
                aBot.disposeRay.dispose();
            }

            aBot.scanTgtAlpha = (++aBot.scanTgtAlpha>2)?0:aBot.scanTgtAlpha; //TERNARY-TRIAD-ITERATOR-.
            aBot.rayLines[0].alpha = 0.6            
            aBot.rayLines[1].alpha = 0.3    //fade-out-.        
            aBot.rayLines[2].alpha = 0.3    //fade-out-.        

            aBot.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
            aBot.rayLines[0].color.g = aBot.rayLines[0].color.b = 0
            aBot.rayLines[1].color.b = 1;//Math.cos(alpha1);//1;
            aBot.rayLines[1].color.g = aBot.rayLines[1].color.r = 0
            aBot.rayLines[2].color.r = 1;//Math.cos(alpha1);//1;
            aBot.rayLines[2].color.g = aBot.rayLines[2].color.b = 0;        //spotted red laser

            if(aBot.rayIntersecting){ //turn off for movie because triggering too often-. turn on for game
                if (nx.orbyMesh && aBot.rayLines[0].intersectsMesh(nx.orbyMesh)) {                        //intersection
                    aBot.targeting = 1;
                    aBot.searching = 0;
                    $(this).stop(true);
                }
            }
        }, complete:function(){ //  BOUNCE-.
            // console.log('BOUNCE')
            aBot.scanDirToggle = !aBot.scanDirToggle;
            // console.log('searching5 on')
            // aBot.searching=1;  //FIX: removed to help shut off laser! maybe breaks something else...
            if(!aBot.stopLaser){aBot.searching=1;}  //FIX: removed to help shut off laser! maybe breaks something else...
            return; 
        } //NEXT-SUB-SEQUENCE-. 
    });
    
}//end botscananm

// nx.botz.setBotScanTgt = function(aBot,tgtPOS){ //obsolete?
//     aBot.searching = 0;
//     aBot.stopLaser = 1;
//     // var that = this;
//     setTimeout(function(){
//         for(var i = 0; i<aBot.rayLines.length;i++){ aBot.rayLines[i].dispose();  } //TODO perf reuse rays
//         aBot.rayLines = []; //clean up lasers-.
//         //draw laser from origin to tgt
//         //LOCAL_POSITION to WORLD_POSITION
//         aBot.computeWorldMatrix();
//         nx.botz.anmMatrix1 = aBot.getWorldMatrix();
//         nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(aBot.laserOriginSphere.position, nx.botz.anmMatrix1); 
//         aBot.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, tgtPOS], nx.scene, aBot.rayLines[0]);
//         aBot.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
//         aBot.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
//         aBot.rayLines[0].color.g = aBot.rayLines[0].color.b = 0;
//     },500)
// } //end set scan tgt
/********************************************************-END ZAPBOT INITS-****************************************************************/



nx.botz.initKiloBot = function(){
    //tri-state-behavior-states-. //TIP: use start and stop accessors-.
    nx.kiloBotMesh1._isListening=0;
    nx.kiloBotMesh1._isFlashing=0;
    nx.kiloBotMesh1._isShocking=0;
    nx.kiloBotMesh1._isScanning=0;
    nx.kiloBotMesh1._isHovering=0;
    nx.kiloBotMesh1._isChasing=0;
    //init-abilities-.
    nx.botz.initKiloBotScan();
    nx.botz.initKiloBotShock();
    //start and stop accessor functions-.
    nx.kiloBotMesh1.stopLooping = function(){ nx.kiloBotMesh1._isListening=-1; }
    nx.kiloBotMesh1.startListening = function(){ nx.kiloBotMesh1._isListening=1; }
    nx.kiloBotMesh1.stopListening = function(){ nx.kiloBotMesh1._isListening=0; }
    nx.kiloBotMesh1.startFlashing = function(){ nx.kiloBotMesh1._isFlashing=1; }
    nx.kiloBotMesh1.stopFlashing = function(){ nx.kiloBotMesh1._isFlashing=-1; nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.greyMat; }
    nx.kiloBotMesh1.startShocking = function(){ nx.kiloBotMesh1._isShocking=1; nx.kiloBotMesh1.zapWave.isVisible = 1; }
    nx.kiloBotMesh1.stopShocking = function(){ nx.kiloBotMesh1._isShocking=-1; nx.kiloBotMesh1.zapWave.isVisible = 0;}
    nx.kiloBotMesh1.startScanning = function(){ nx.kiloBotMesh1._isScanning=1; nx.kiloBotMesh1.searching=1; }
    nx.kiloBotMesh1.stopScanning = function(){ nx.kiloBotMesh1._isScanning=-1; nx.kiloBotMesh1.stopSearching(); }
    nx.kiloBotMesh1.startHovering = function(){ nx.kiloBotMesh1._isHovering=1; }
    nx.kiloBotMesh1.stopHovering = function(){ nx.kiloBotMesh1._isHovering=0; }
    nx.kiloBotMesh1.startChasing = function(){ nx.kiloBotMesh1._isChasing=1; }
    nx.kiloBotMesh1.stopChasing = function(){ nx.kiloBotMesh1._isChasing=-1; }
    nx.kiloBotMesh1.speed = 0;
    //loop-indexes-.
    var kiloBotHoverIdx = 0;
    var kiloBotLoopIdx = 0;
    //SOLO-ANIMATION-LOOP-FOR-ALL-KILOBOT-BEHAVIORS!-.
    nx.scene.registerBeforeRender(function kiloBotBehaviorLOOPZ() { //LOOPZ hover, search and chase, zapwave and siren flash sequence-.
        if(++kiloBotLoopIdx%3===0){return} //loop damper
        //isLISTENING-.
        else if(nx.kiloBotMesh1._isListening===0){return} //0 to shut off, -1 to kill loopz-.
        else if(nx.kiloBotMesh1._isListening<0){ 
            debugger;
            nx.scene.unregisterBeforeRender(kiloBotBehaviorLOOPZ); 
            } //-1 to UNLOAD-LOOPZ-.!
        //Loop-actions-PATTERN-.
        //isFLASHING
        if(nx.kiloBotMesh1._isFlashing===1){
            // if(kiloBotLoopIdx%20){ //red - %Frequency-Modulator-.
            if(kiloBotLoopIdx%50){ //red - %Frequency-Modulator-.
                nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.redMat;
            } else { //blue
                nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.blueMat;
            }
        }else if(nx.kiloBotMesh1._isFlashing===-1){
            nx.kiloBotMesh1._isFlashing=0;//three way, one time, shut off switch-.
            // nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.greyMat;
        }
        //isSHOCKING
        if(nx.kiloBotMesh1._isShocking===1){
console.log('isShocking');
            nx.botz.kiloBotShockAnm();
        }else if (nx.kiloBotMesh1._isShocking===-1){ //TODO three way is removable because put logic in accessors
            nx.kiloBotMesh1._isShocking=0;//three way, one time, shut off switch-.
        }
        //isSCANNING
        if(nx.kiloBotMesh1._isScanning===1){
// console.log('isScanning');
            nx.botz.kiloBotScanSEQ();
        }else if (nx.kiloBotMesh1._isScanning===-1){ //negative one is shut off switch - 0 to be off.
            nx.kiloBotMesh1._isScanning=0;//three way, one time, shut off switch-.
        }
        //isCHASING
        if(nx.kiloBotMesh1._isChasing===1){
console.log('isChasing');
        }else if (nx.kiloBotMesh1._isChasing===-1){ //negative one is shut off switch - 0 to be off.
            nx.kiloBotMesh1._isChasing=0;//three way, one time, shut off switch-.
        }
        //isHOVERING
        if(nx.kiloBotMesh1._isHovering){
            kiloBotHoverIdx += 0.05; //zap-bot-hover-.
            nx.kiloBotMesh1.position.y += 0.01 * Math.cos(kiloBotHoverIdx);
        } //ok to turn off with isHovering = 0;
        // else if (nx.kiloBotMesh1._isHovering===-1){
            // nx.kiloBotMesh1.isHovering=0;
        // }
    });
}
nx.botz.initBotShadows = function(){

/*********************************CREATE-SHADOW******************************/
    if(!nx.botShadowLight){ //one-time- LIGHT - FOR - SHADOWS-.
        nx.botShadowLight = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, -0.2), nx.scene);
        nx.botShadowLight.position = new BABYLON.Vector3(0,0,0);
        nx.botShadowLight.position.copyFrom( {x:0, y:24, z: 0})
        nx.botShadowLight.diffuse = new BABYLON.Color3(1, 0.2, 0.2);
        nx.botShadowLight.specular = new BABYLON.Color3(1, 0, 0);
        nx.botShadowLight.intensity = 0.22;
    }
    var shadowMapSIZE = 24; //can be re-instanced by calling initShadows(); But doesnt seem necessary.
    nx.botShadow = new BABYLON.ShadowGenerator(shadowMapSIZE, nx.botShadowLight);
    nx.botShadow.useVarianceShadowMap = false; //default-.
    nx.botShadow.usePoissonSampling = false; //better shadows but slower-.
    nx.botShadow.useExponentialShadowMap = true; //true default, false is performance boost-.
    // nx.botShadow.useExponentialShadowMap = false; //true default, false is performance boost-.
    nx.botShadow.useBlurExponentialShadowMap = true; //blur the shadow, better, slower-.
    nx.botShadow.blurScale = 1;
    nx.botShadow.blurBoxOffset = 4;
    nx.botShadow.usePercentageCloserFiltering = false; //v3.2, webgl2 shadows-.
    nx.botShadow.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
    nx.botShadow.useContactHardeningShadow = false;
    setTimeout(function(){ //delay shadows to TEST rendering optimization-.
    // nx.botShadow.getShadowMap().renderList.push(nx.orbyMesh);
    // if(!nx.darkBot){
        // debugger; //TODO: nxdarkBot.shadow = 1 && darkbot.initShadow()
    // }
    nx.botShadow.getShadowMap().renderList.push(nx.kiloBotMesh1);
    },3000);

    nx.botShadowDamper=0;
    if(nx.botShadowDamper===0){ //one-time-.
        nx.scene.registerBeforeRender(function () {
            if(++nx.botShadowDamper%100!=0){return} //DECIDAMPER-.
            if(nx && nx.kiloBotMesh1 && nx.botShadowLight){
                var lightPOS = new BABYLON.Vector3.Zero(); //follow light
                lightPOS.copyFrom(nx.kiloBotMesh1.position);
                lightPOS.y += 24;
                nx.botShadowLight.position.copyFrom(lightPOS)
            }
        });
    }




}

nx.botz.initKiloBotShock = function(){
    //-----------------------------------------------------ZAPWAVE-.
    nx.kiloBotMesh1.zapWavePath = [];
    for(var i = -22; i < 22; i++) {
       var x = i, y = 0, z = 0;
       nx.kiloBotMesh1.zapWavePath.push(new BABYLON.Vector3(x, y, z));
    }
   if(!nx.kiloBotMesh1.zapParent){
       nx.kiloBotMesh1.zapParent = BABYLON.Mesh.CreateSphere("zapParent", 1, 6, nx.scene);
       nx.kiloBotMesh1.zapParent.parent =  nx.kiloBotMesh1;
       nx.kiloBotMesh1.zapParent.position = new BABYLON.Vector3(0.15, -1.5, -2);
       nx.kiloBotMesh1.zapParent.scaling = new BABYLON.Vector3(0.09, 0.08, 0.06);
       nx.kiloBotMesh1.zapParent.isVisible = 0;
   }
   if(!nx.kiloBotMesh1.zapWave){
       nx.kiloBotMesh1.zapMaterial = new BABYLON.StandardMaterial("zapMaterial1", nx.scene);
       nx.kiloBotMesh1.zapMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.3, 1);
       nx.kiloBotMesh1.zapMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
       nx.kiloBotMesh1.zapMaterial.backFaceCulling = false;
       nx.kiloBotMesh1.zapMaterial.wireframe = false;//true;
       nx.kiloBotMesh1.zapMaterial.alpha = 1.0;
       nx.kiloBotMesh1.zapWave = BABYLON.Mesh.CreateTube("tube", nx.kiloBotMesh1.zapWavePath, 2, 3, null, BABYLON.Mesh.CAP_ALL, nx.scene,true, BABYLON.Mesh.FRONTSIDE);
       nx.kiloBotMesh1.zapWave.material = nx.kiloBotMesh1.zapMaterial;
       nx.kiloBotMesh1.zapWave.parent = nx.kiloBotMesh1.zapParent;
       nx.kiloBotMesh1.zapWave.isVisible = 0;
    }
   //-----------------------------------------------------ZAPWAVE-.
} //end init bot shock

var kiloBotShockIdx = 0;
nx.botz.kiloBotShockAnm = function(){ //warning: anm calls every frame when on-.
    nx.botz.updateKiloBotZapPath(kiloBotShockIdx);
    nx.kiloBotMesh1.zapWave = BABYLON.Mesh.CreateTube("nx.kiloBotMesh1.zapWave", nx.kiloBotMesh1.zapWavePath, 0.8, 60, null, 0, nx.scene, true, BABYLON.Mesh.FRONTSIDE, nx.kiloBotMesh1.zapWave);
    nx.kiloBotMesh1.zapWave.parent = nx.kiloBotMesh1.zapParent;
    nx.kiloBotMesh1.zapWave.rotation.x += 7.4;
    kiloBotShockIdx += 0.09;
}//end kilobotshockanm

//replaced with generic initBotScan
nx.botz.initKiloBotScan = function(){
   if(nx.kiloBotMesh1.laserTgtSphere){return;} //ONly 1 init-.
   //DYNAMIC-BEHAVIORS bot1
    nx.kiloBotMesh1.targeting = 0;
    nx.kiloBotMesh1.laserTgtSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    nx.kiloBotMesh1.laserTgtSphere.parent =  nx.kiloBotMesh1;
    nx.kiloBotMesh1.laserTgtSphere.isVisible = 0;   //todo be sure target sphere is not orbiting when it doesnt need to. also parent pos to zapbot.
    nx.kiloBotMesh1.laserOriginSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    nx.kiloBotMesh1.laserOriginSphere.parent =  nx.kiloBotMesh1;
    nx.kiloBotMesh1.laserOriginSphere.position = new BABYLON.Vector3(0, 0.5, -2);
    nx.kiloBotMesh1.laserOriginSphere.isVisible = 0; 
    nx.kiloBotMesh1.laserBumperLft = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    nx.kiloBotMesh1.laserBumperLft.parent =  nx.kiloBotMesh1;
    nx.kiloBotMesh1.laserBumperLft.position = new BABYLON.Vector3(-55, -17, -45);
    nx.kiloBotMesh1.laserBumperLft.isVisible = 0;
    nx.kiloBotMesh1.laserBumperRgt = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    nx.kiloBotMesh1.laserBumperRgt.parent =  nx.kiloBotMesh1;
    nx.kiloBotMesh1.laserBumperRgt.position = new BABYLON.Vector3(55, -17, -45);
    nx.kiloBotMesh1.laserBumperRgt.isVisible = 0;
    // nx.kiloBotMesh1.hoverAlpha = 0; //zap bot hover-.
    nx.kiloBotMesh1.searching = 0; //tick this to 1 to start searching-.
    nx.kiloBotMesh1.delayOnTargeting = 1; //500
    nx.kiloBotMesh1.scanDirToggle = 1;
    // nx.kiloBotMesh1.zapAuraAlpha = 0; //glow size -.
    nx.kiloBotMesh1.rayLines = [];
    nx.kiloBotMesh1.hoverChaseAlpha = 0; //TODO rename to CHASE-DAMPER-.
    nx.kiloBotMesh1.setScanTarget = nx.botz.setKiloBotScanTgt; //todo obsolete remove?
    // nx.kiloBotMesh1.clearLaser = 0; //visible
    nx.kiloBotMesh1.stopSearching = function(){
          nx.kiloBotMesh1.stopLaser = 1;
          // nx.kiloBotMesh1.targeting = 0; //TODO???
          setTimeout(function(){ //stop all laser animations then delete-.
            for(var i = 0; i<nx.kiloBotMesh1.rayLines.length;i++){ 
              nx.kiloBotMesh1.rayLines[i].dispose();  
            } 
            nx.kiloBotMesh1.rayLines = [];
          // debugger;
          },200)
    }
} //end initkilobotscan
    
nx.botz.kiloBotScanSEQ = function(){ //anm is called on every frame!

    // nx.kiloBotMesh1.hoverAlpha += 0.05; //zap-bot-hover-.
    // nx.kiloBotMesh1.position.y += 0.01 * Math.cos(nx.kiloBotMesh1.hoverAlpha);

    if(nx.kiloBotMesh1.searching > 0){
        if(nx.kiloBotMesh1.searching===1){ //ONE-TIME-INIT-MECHANISM-.
            // console.log('ONE-TIME LASER START')
            //ANM: laser from point to point-.
            if(++nx.kiloBotMesh1.hoverChaseAlpha%2===0 || nx.kiloBotMesh1.hoverChaseAlpha%3===0){return;} //LOOPZ-DAMPER-. //TODO TEST THIS_.   
            // nx.botz.laserScanAnm(config);
            nx.botz.kiloBotScanANM();
        }
        nx.kiloBotMesh1.searching++;
    } //end searching
    else if(nx.kiloBotMesh1.targeting > 0 ){ //------------------------------------------------TARGETING-MODE-.
        if(nx.kiloBotMesh1.targeting===1){ //init tracking-.
            //start zapping-.
        }
        else if(nx.kiloBotMesh1.targeting%3===0){ //LOOPZ-DAMPER-.
            console.log('targeting')
            for(var i = 0; i<nx.kiloBotMesh1.rayLines.length;i++){ nx.kiloBotMesh1.rayLines[i].dispose();  } //TODO perf reuse rays

            nx.kiloBotMesh1.lookAt(nx.orbyMesh.position)
            nx.kiloBotMesh1.rotation.x = 0.2// default bot rot
            nx.kiloBotMesh1.rotation.z = 0;

            //LOCAL_POSITION to WORLD_POSITION
            nx.kiloBotMesh1.computeWorldMatrix();
            nx.botz.anmMatrix1 = nx.kiloBotMesh1.getWorldMatrix();
            nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.kiloBotMesh1.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

            nx.kiloBotMesh1.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, nx.kiloBotMesh1.rayLines[0]);
            nx.kiloBotMesh1.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
            nx.kiloBotMesh1.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
            nx.kiloBotMesh1.rayLines[0].color.g = nx.kiloBotMesh1.rayLines[0].color.b = 0
            if(nx.kiloBotMesh1.targeting%2===0){ //double-damper //todo probably not necessary-.
                nx.kiloBotMesh1.targeting = 0;
                nx.kiloBotMesh1.spotted=1;
                return;
            }
        }
        nx.kiloBotMesh1.targeting++; //frame-iterator-.
    } //end targeting
    else if (nx.kiloBotMesh1.spotted) {
        console.log('spotted')
        nx.kiloBotMesh1.spotted = 0; //one time only-.
        setTimeout(function(){ //chase delay-.
            nx.kiloBotMesh1.chasing = 1;
        },nx.kiloBotMesh1.delayOnTargeting)    
    } else if( nx.kiloBotMesh1.chasing > 0){
        console.log('chasing')
        nx.botz.routeKiloBot();
        // nx.botz.routeZapBot(config);
    } else if( nx.kiloBotMesh1.catch===1 ){
        nx.botz.kiloBotZapsOrby();  //START ZAPPING call-.
        // nx.botz.startZapping(config);  //START ZAPPING call-.
    } 
} //end kilobotscanSEQ

nx.botz.kiloBotScanANM = function(){ //anm is called on every frame!
    nx.kiloBotMesh1.stopLaser = 0;

    var scanDamperAlpha = 0
    var curScan, tgtScan;
    // var nx.botz.anmMatrix1, nx.botz.global_position_tgt, nx.botz.global_position_origin;
    curScan = (nx.kiloBotMesh1.scanDirToggle)? nx.kiloBotMesh1.laserBumperLft.position:nx.kiloBotMesh1.laserBumperRgt.position;
    tgtScan = (nx.kiloBotMesh1.scanDirToggle)? nx.kiloBotMesh1.laserBumperRgt.position:nx.kiloBotMesh1.laserBumperLft.position;

    nx.kiloBotMesh1.scanTgtAlpha = 0;
    nx.kiloBotMesh1.disposeRay = null;

    $({x:curScan.x,y:curScan.y,z:curScan.z}) //--------------------------------------------------LASER-SCAN-SWEEP-ANM-.
    .animate({x:tgtScan.x,y:tgtScan.y,z:tgtScan.z},{queue:false,duration:2000,easing:'swing',
    step: function(now) { 
            if(++scanDamperAlpha%2===0||scanDamperAlpha%3===0||scanDamperAlpha%5===0||scanDamperAlpha%7===0){return}
            if(nx.kiloBotMesh1.stopLaser){return 1;}
            nx.kiloBotMesh1.laserTgtSphere.position.x = this.x;
            nx.kiloBotMesh1.laserTgtSphere.position.y = this.y; 
            nx.kiloBotMesh1.laserTgtSphere.position.z = this.z;

            //LOCAL_POSITION to WORLD_POSITION
            nx.kiloBotMesh1.computeWorldMatrix();
            nx.botz.anmMatrix1 = nx.kiloBotMesh1.getWorldMatrix();
            nx.botz.global_position_tgt = BABYLON.Vector3.TransformCoordinates(nx.kiloBotMesh1.laserTgtSphere.position, nx.botz.anmMatrix1); //TODO no vars here
            nx.kiloBotMesh1.laserTgtSphere.position.copyFrom(nx.botz.global_position_tgt);

            nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.kiloBotMesh1.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

            if(nx.kiloBotMesh1.rayLines.length!=3){ //INIT-

               //LOCAL_POSITION to WORLD_POSITION
                nx.kiloBotMesh1.computeWorldMatrix();
                nx.botz.anmMatrix1 = nx.kiloBotMesh1.getWorldMatrix();
                nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.kiloBotMesh1.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

                nx.kiloBotMesh1.rayLines= [];
                nx.kiloBotMesh1.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, nx.kiloBotMesh1.laserTgtSphere.position], nx.scene, nx.kiloBotMesh1.rayLines[0]);
                nx.kiloBotMesh1.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
                nx.kiloBotMesh1.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.botz.global_position_origin, nx.kiloBotMesh1.laserTgtSphere.position], nx.scene, nx.kiloBotMesh1.rayLines[1]);
                nx.kiloBotMesh1.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
                nx.kiloBotMesh1.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, nx.kiloBotMesh1.laserTgtSphere.position], nx.scene, nx.kiloBotMesh1.rayLines[2]);
                nx.kiloBotMesh1.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8

            }else{ //REPLACEMENT-POS.
                //FOR EACH ALPHA - PLACE AT A NEW POINT-.
                nx.kiloBotMesh1.disposeRay = nx.kiloBotMesh1.rayLines[nx.kiloBotMesh1.scanTgtAlpha]; 
                nx.kiloBotMesh1.rayLines[nx.kiloBotMesh1.scanTgtAlpha] = BABYLON.Mesh.CreateLines("dynoray", [nx.botz.global_position_origin, nx.kiloBotMesh1.laserTgtSphere.position], nx.scene, nx.kiloBotMesh1.rayLines[nx.kiloBotMesh1.scanTgtAlpha]);
                nx.kiloBotMesh1.disposeRay.dispose();
            }

            nx.kiloBotMesh1.scanTgtAlpha = (++nx.kiloBotMesh1.scanTgtAlpha>2)?0:nx.kiloBotMesh1.scanTgtAlpha; //TERNARY-TRIAD-ITERATOR-.
            nx.kiloBotMesh1.rayLines[0].alpha = 0.6            
            nx.kiloBotMesh1.rayLines[1].alpha = 0.3    //fade-out-.        
            nx.kiloBotMesh1.rayLines[2].alpha = 0.3    //fade-out-.        

            nx.kiloBotMesh1.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
            nx.kiloBotMesh1.rayLines[0].color.g = nx.kiloBotMesh1.rayLines[0].color.b = 0
            nx.kiloBotMesh1.rayLines[1].color.b = 1;//Math.cos(alpha1);//1;
            nx.kiloBotMesh1.rayLines[1].color.g = nx.kiloBotMesh1.rayLines[1].color.r = 0
            nx.kiloBotMesh1.rayLines[2].color.r = 1;//Math.cos(alpha1);//1;
            nx.kiloBotMesh1.rayLines[2].color.g = nx.kiloBotMesh1.rayLines[2].color.b = 0;        //spotted red laser


            // if(nx.kiloBotMesh1.clearLaser){
            //     // debugger;
            //     nx.kiloBotMesh1.rayLines[0].alpha = 0.1;
            //     nx.kiloBotMesh1.rayLines[1].alpha = 0.1;
            //     nx.kiloBotMesh1.rayLines[2].alpha = 0.1;
            // }

            if (nx.orbyMesh && nx.kiloBotMesh1.rayLines[0].intersectsMesh(nx.orbyMesh)) {                        //intersection
                nx.kiloBotMesh1.targeting = 1;
                nx.kiloBotMesh1.searching = 0;
                $(this).stop(true);
            }
        }, complete:function(){ //  BOUNCE-.
            // console.log('BOUNCE')
            nx.kiloBotMesh1.scanDirToggle = !nx.kiloBotMesh1.scanDirToggle;
            // console.log('searching5 on')
            // nx.kiloBotMesh1.searching=1;  //FIX: removed to help shut off laser! maybe breaks something else...
            if(!nx.kiloBotMesh1.stopLaser){nx.kiloBotMesh1.searching=1;}  //FIX: removed to help shut off laser! maybe breaks something else...
            return; 
        } //NEXT-SUB-SEQUENCE-. 
    });

    
}//end kilobotscananm
/********************************************************-END ZAPBOT INITS-****************************************************************/
//TEMPLATE: behavior animation loop shell:
// nx.kiloBotMesh1.sirenFlashing=0;
// var kiloBotLoopIdx = 0;
// nx.scene.registerBeforeRender(function kiloBotBehaviorLOOPZ() { //LOOPZ hover, search and chase, zapwave and siren flash sequence-.
//     if(++kiloBotLoopIdx%3===0){return} //loop damper and frequency modulator-.
//     else if(nx.kiloBotMesh1.listening===0){return} //-1 to UNLOAD-LOOPZ-.!
//     else if(nx.kiloBotMesh1.listening<0){ nx.scene.unregisterBeforeRender(kiloBotBehaviorLOOPZ); } //-1 to UNLOAD-LOOPZ-.!
//     //Loop-actions-.
//isSHOCKING
        // if(nx.kiloBotMesh1.isShocking){
            
            // }else if (nx.kiloBotMesh1.isShocking===-1){
                //     nx.kiloBotMesh1.isShocking=0;//three way, one time, shut off switch-.
                // }

//     if(nx.kiloBotMesh1.sirenFlashing){
//         if(kiloBotLoopIdx%2){ //red
//             nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.redMat;
//         } else { //blue
//             nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.blueMat;
//         }
//     }else if(nx.kiloBotMesh1.sirenFlashing===0){
//         nx.kiloBotMesh1.sirenFlashing=-1;//THREEWAY: one time switch-.
//         nx.kiloBotMesh1.sirenLight.material = nx.kiloBotMesh1.greyMat;
//     }
// });

/********************************************************-ZAP-BOT-FACTORY-****************************************************************/
nx.botz.zapBotFactory = function( config ){ //USAGE: nx.botz.zapBotFactory({mesh:nx.zapbotMesh2})
 
debugger; //obsolete? YES. Moved to initBotFactory changed to individual behavior loop, not shared behavior loops-.

   if(config.mesh.laserTgtSphere){return;} //ONly 1 init-.
   //DYNAMIC-BEHAVIORS bot1
    config.mesh.targeting = 0;
    config.mesh.laserTgtSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    config.mesh.laserTgtSphere.parent =  config.mesh;
    config.mesh.laserTgtSphere.isVisible = 0;   //todo be sure target sphere is not orbiting when it doesnt need to. also parent pos to zapbot.

    config.mesh.laserOriginSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    config.mesh.laserOriginSphere.parent =  config.mesh;
    config.mesh.laserOriginSphere.position = new BABYLON.Vector3(0, 0.5, -2);
    config.mesh.laserOriginSphere.isVisible = 0; 

    //parented offset interpolation spheres-.
    config.mesh.laserBumperLft = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    config.mesh.laserBumperLft.parent =  config.mesh;
    config.mesh.laserBumperLft.position = new BABYLON.Vector3(-55, -17, -45);
    // config.mesh.laserBumperLft.position = new BABYLON.Vector3(-25, -5, -35);
    config.mesh.laserBumperLft.isVisible = 0;
    config.mesh.laserBumperRgt = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
    config.mesh.laserBumperRgt.parent =  config.mesh;
    config.mesh.laserBumperRgt.position = new BABYLON.Vector3(55, -17, -45);
    // config.mesh.laserBumperRgt.position = new BABYLON.Vector3(25, -5, -35);
    config.mesh.laserBumperRgt.isVisible = 0;

    config.mesh.hoverAlpha = 0; //zap bot hover-.
    config.mesh.searching = 0; //tick this to 1 to start searching-.
    config.mesh.delayOnTargeting = 1; //500
    config.mesh.scanDirToggle = 1;


    config.mesh.zapAuraAlpha = 0; //glow size -.
    config.mesh.rayLines = [];

    // var scanDirToggle = 1;
    // var curScan, tgtScan;


    // var hoverChaseAlpha = 0;
    config.mesh.hoverChaseAlpha = 0; //TODO rename to CHASE-DAMPER-.



    config.mesh.setScanTarget = nx.botz.setScanTgt;


    config.mesh.stopSearching = function(){
          config.mesh.stopLaser = 1;
          setTimeout(function(){ //stop all laser animations then delete-.
            for(var i = 0; i<config.mesh.rayLines.length;i++){ 
              config.mesh.rayLines[i].dispose();  
            } 
            config.mesh.rayLines = [];
          },100)
    }


    debugger;

    // var zapPath = [];
    //-----------------------------------------------------ZAPWAVE-.
    zapWavePath = [];
    for(var i = -22; i < 22; i++) {
    // for(var i = -20; i < 20; i++) {
        var x = i;
        var y = 0;
        var z = 0;
        zapWavePath.push(new BABYLON.Vector3(x, y, z));
    }
    if(!config.mesh.zapParent){
        config.mesh.zapParent = BABYLON.Mesh.CreateSphere("zapParent", 1, 6, nx.scene);
        // config.mesh.zapParent.material = mat
        config.mesh.zapParent.parent =  config.mesh;
        config.mesh.zapParent.position = new BABYLON.Vector3(0, -1.5, -2.5);
        config.mesh.zapParent.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        config.mesh.zapParent.isVisible = 0;
    }
    if(!config.mesh.zapWave){
        var zapMaterial = new BABYLON.StandardMaterial("zapMaterial1", nx.scene);
        zapMaterial.emissiveColor = new BABYLON.Color3(0.8, 0.8, 1.0);
        zapMaterial.diffuseColor = new BABYLON.Color3(0.44, 0.44, 1.0);
        zapMaterial.backFaceCulling = false;
        zapMaterial.wireframe = true;//false;
        zapMaterial.alpha = 1.0;
        config.mesh.zapWave = BABYLON.Mesh.CreateTube("tube", zapWavePath, 2, 60, null, 0, nx.scene,true, BABYLON.Mesh.FRONTSIDE);
        config.mesh.zapWave.material = zapMaterial;
        config.mesh.zapWave.parent = config.mesh.zapParent;
        config.mesh.zapWave.isVisible = 0;
    }
    //-----------------------------------------------------ZAPWAVE-.


    nx.scene.registerBeforeRender(function hoverChaseLOOPZ() { //LOOPZ hover, search and chase sequence-.
    // config.mesh.hoverChaseLOOPZ = function(config) { //LOOPZ hover, search and chase sequence-.


        if(config.mesh.stopChase){
                nx.scene.unregisterBeforeRender(config.mesh.hoverChaseLOOPZ); return; //LOOPZ-MUTER-.
        }
        // config.mesh.hoverChaseAlpha++;
        // config.mesh.hoverAlpha = 0; //zap bot hover-.
        config.mesh.hoverAlpha += 0.05; //zap-bot-hover-.
        config.mesh.position.y += 0.01 * Math.cos(config.mesh.hoverAlpha);

        if(config.mesh.searching > 0){
            if(config.mesh.searching===1){ //ONE-TIME-INIT-MECHANISM-.
                // console.log('ONE-TIME LASER START')
                //ANM: laser from point to point-.

                if(++config.mesh.hoverChaseAlpha%2===0 || config.mesh.hoverChaseAlpha%3===0){return;} //LOOPZ-DAMPER-. //TODO TEST THIS_.   
                nx.botz.laserScanAnm(config);

                // curScan = (scanDirToggle)? config.mesh.laserBumperLft.position:config.mesh.laserBumperRgt.position;
                // tgtScan = (scanDirToggle)? config.mesh.laserBumperRgt.position:config.mesh.laserBumperLft.position;
                // $({x:curScan.x,y:curScan.y,z:curScan.z})
                // .animate({x:tgtScan.x,y:tgtScan.y,z:tgtScan.z},{queue:false,duration:8000,easing:'swing',
                // step: function(now) { 

                //         config.mesh.laserTgtSphere.position.x = this.x;
                //         config.mesh.laserTgtSphere.position.y = this.y; 
                //         config.mesh.laserTgtSphere.position.z = this.z;

                //         //LOCAL_POSITION to WORLD_POSITION
                //         config.mesh.computeWorldMatrix();
                //         var matrix = config.mesh.getWorldMatrix();
                //         var nx.botz.global_position_tgt = BABYLON.Vector3.TransformCoordinates(config.mesh.laserTgtSphere.position, matrix); //TODO no vars here
                //         // nx.botz.global_position_tgt.y = config.mesh.position.y - 5;
                //         config.mesh.laserTgtSphere.position.copyFrom(nx.botz.global_position_tgt);

                //         var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, matrix); //TODO no vars here

                //         if(config.mesh.rayLines.length && config.mesh.rayLines[3]){ config.mesh.rayLines[3].dispose(); config.mesh.rayLines.splice(3,1); } //remove back-.
                //         if(config.mesh.rayLines[1]){ config.mesh.rayLines[1].alpha = 0.5    }           
                //         if(config.mesh.rayLines[2]){ config.mesh.rayLines[1].alpha = 0.4    }   //fade-out-.        
                        
                //         // zapBotLaserOffset1 = nx.BV32(config.mesh.position);   //todo move into nx.zapbot
                //         // zapBotLaserOffset1.y = config.mesh.position.y + 1.15;

                //         // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, nx.rayLine1);
                //         nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene);
                //         // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, config.mesh.laserTgtSphere.position], nx.scene);
                //         nx.rayLine1.alpha = 0.6;//Math.cos(alpha2);//0.8
                //         nx.rayLine1.color.r = 1;//Math.cos(alpha1);//1;
                //         nx.rayLine1.color.g = nx.rayLine1.color.b = 0;
                //         config.mesh.rayLines.unshift(nx.rayLine1); //add to front
                //         if (nx.orbyMesh && nx.rayLine1.intersectsMesh(nx.orbyMesh)) {                        //intersection
                //             config.mesh.targeting = 1;
                //             config.mesh.searching = 0;
                //             $(this).stop(true);
                //         }
                //     }, complete:function(){ //  BOUNCE-.
                //         // console.log('BOUNCE')
                //         scanDirToggle = !scanDirToggle;
                //         // console.log('looks suspicious')
                //         config.mesh.searching=1; return; 
                //     } //NEXT-SUB-SEQUENCE-. 
                // });
            }
            config.mesh.searching++;
        } //end searching
        else if(config.mesh.targeting > 0 ){ //------------------------------------------------TARGETING-MODE-.
            if(config.mesh.targeting===1){ //init tracking-.
                //start zapping-.
            }
            else if(config.mesh.targeting%3===0){ //LOOPZ-DAMPER-.
                console.log('targeting')
                for(var i = 0; i<config.mesh.rayLines.length;i++){ config.mesh.rayLines[i].dispose();  } //TODO perf reuse rays
                    // config.mesh.rayLines = []; //clean up lasers-.

                config.mesh.lookAt(nx.orbyMesh.position)
                config.mesh.rotation.x = 0.2// default bot rot
                config.mesh.rotation.z = 0;

                    //LOCAL_POSITION to WORLD_POSITION
                    config.mesh.computeWorldMatrix();
                    nx.botz.anmMatrix1 = config.mesh.getWorldMatrix();
                    nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here


// debugger;
                // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
                config.mesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, config.mesh.rayLines[0]);
                config.mesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
                config.mesh.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
                config.mesh.rayLines[0].color.g = config.mesh.rayLines[0].color.b = 0
                // config.mesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, config.mesh.rayLines[1]);
                // config.mesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
                // config.mesh.rayLines[1].color.g = 1;//Math.cos(alpha1);//1;
                // config.mesh.rayLines[1].color.r = config.mesh.rayLines[1].color.b = 0
                // config.mesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, config.mesh.rayLines[2]);
                // config.mesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8
                // config.mesh.rayLines[2].color.b = 1;//Math.cos(alpha1);//1;
                // config.mesh.rayLines[2].color.g = config.mesh.rayLines[2].color.r = 0;        //spotted red laser

                // if(config.mesh.rayLines.length && config.mesh.rayLines[3]){ config.mesh.rayLines[3].dispose(); config.mesh.rayLines.splice(3,1); } //remove back-.
                // config.mesh.rayLines.unshift(nx.rayLine1); //add to front

                if(config.mesh.targeting%2===0){ //double-damper //todo probably not necessary-.
                    console.log('doubledamper???')
                        config.mesh.targeting = 0;
                        config.mesh.spotted=1;
                        return;
                }
            }
            config.mesh.targeting++; //frame-iterator-.

        } //end targeting
        else if (config.mesh.spotted) {
            console.log('spotted')
            config.mesh.spotted = 0; //one time only-.
            setTimeout(function(){ //chase delay-.
                config.mesh.chasing = 1;
            },config.mesh.delayOnTargeting)    
        } else if( config.mesh.chasing > 0){
            console.log('chasing')
            nx.botz.routeZapBot(config);
        } else if( config.mesh.catch===1 ){
            // console.log('catch')
            debugger; //deprecated
            nx.botz.startZapping(config);  //START ZAPPING call-.
            // config.mesh.startZapping();
            // config.mesh.chasing = 0;
            // config.mesh.catch = 0;
        } 

    // } //***********************************************************END hover, search and chase LOOPZ-.
    // nx.scene.registerBeforeRender(config.mesh.hoverChaseLOOPZ(config));
    }); //***********************************************************END hover, search and chase LOOPZ-.
// }//end initbotz


} //END-ZAP-BOT-FACTORY********************************************************************




// nx.botz.initBotz = function(){
    //TODO: THIS FUNCTION NEEDS PERFORMANCE OPTIMIZATION-.
//     //DYNAMIC-BEHAVIORS bot1
//     nx.kiloBotMesh1.targeting = 0;
//     config.mesh.laserTgtSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
//     config.mesh.laserTgtSphere.parent =  nx.kiloBotMesh1;
//     config.mesh.laserTgtSphere.isVisible = 0;   //todo be sure target sphere is not orbiting when it doesnt need to. also parent pos to zapbot.

//     config.mesh.laserOriginSphere = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
//     config.mesh.laserOriginSphere.parent =  nx.kiloBotMesh1;
//     config.mesh.laserOriginSphere.position = new BABYLON.Vector3(0, 0.5, -2);
//     config.mesh.laserOriginSphere.isVisible = 0; 

//     //parented offset interpolation spheres-.
//     config.mesh.laserBumperLft = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
//     config.mesh.laserBumperLft.parent =  nx.kiloBotMesh1;
//     config.mesh.laserBumperLft.position = new BABYLON.Vector3(-55, -17, -45);
//     // config.mesh.laserBumperLft.position = new BABYLON.Vector3(-25, -5, -35);
//     config.mesh.laserBumperLft.isVisible = 0;
//     config.mesh.laserBumperRgt = BABYLON.Mesh.CreateSphere("sphere", 4, 1, nx.scene);
//     config.mesh.laserBumperRgt.parent =  nx.kiloBotMesh1;
//     config.mesh.laserBumperRgt.position = new BABYLON.Vector3(55, -17, -45);
//     nx.zapbotMesh2.targeting = 0;
//     // config.mesh.laserBumperRgt.position = new BABYLON.Vector3(25, -5, -35);
//     config.mesh.laserBumperRgt.isVisible = 0;

//     nx.kiloBotMesh1.hoverAlpha = 0; //zap bot hover-.
//     nx.kiloBotMesh1.searching = 0; //tick this to 1 to start searching-.
//     nx.kiloBotMesh1.delayOnTargeting = 1; //500


//     config.mesh.zapAuraAlpha = 0; //glow size -.
//     config.mesh.rayLines = [];

//     // var scanDirToggle = 1;
//     // var curScan, tgtScan;


//     var config.mesh.hoverChaseAlpha = 0;


//     // debugger;

//     // var zapPath = [];
//     //-----------------------------------------------------ZAPWAVE-.
//     zapWavePath = [];
//     for(var i = -22; i < 22; i++) {
//     // for(var i = -20; i < 20; i++) {
//         var x = i;
//         var y = 0;
//         var z = 0;
//         zapWavePath.push(new BABYLON.Vector3(x, y, z));
//     }
//     if(!nx.kiloBotMesh1.zapParent){
//         nx.kiloBotMesh1.zapParent = BABYLON.Mesh.CreateSphere("zapParent", 1, 6, nx.scene);
//         // nx.kiloBotMesh1.zapParent.material = mat
//         nx.kiloBotMesh1.zapParent.parent =  nx.kiloBotMesh1;
//         nx.kiloBotMesh1.zapParent.position = new BABYLON.Vector3(0, -1.5, -2.5);
//         nx.kiloBotMesh1.zapParent.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
//         nx.kiloBotMesh1.zapParent.isVisible = 0;
//     }
//     if(!nx.kiloBotMesh1.zapWave){
//         var zapMaterial = new BABYLON.StandardMaterial("zapMaterial1", nx.scene);
//         zapMaterial.emissiveColor = new BABYLON.Color3(0.8, 0.8, 1.0);
//         zapMaterial.diffuseColor = new BABYLON.Color3(0.44, 0.44, 1.0);
//         zapMaterial.backFaceCulling = false;
//         zapMaterial.wireframe = false;
//         zapMaterial.alpha = 1.0;
//         nx.kiloBotMesh1.zapWave = BABYLON.Mesh.CreateTube("tube", zapWavePath, 2, 60, null, 0, nx.scene,true, BABYLON.Mesh.FRONTSIDE);
//         nx.kiloBotMesh1.zapWave.material = zapMaterial;
//         nx.kiloBotMesh1.zapWave.parent = nx.kiloBotMesh1.zapParent;
//         nx.kiloBotMesh1.zapWave.isVisible = 0;
//     }
//     //-----------------------------------------------------ZAPWAVE-.


//     nx.scene.registerBeforeRender(function hoverChaseLOOPZ() { //LOOPZ hover, search and chase sequence-.


//         if(nx.kiloBotMesh1.stopChase){
//                 nx.scene.unregisterBeforeRender(hoverChaseLOOPZ); return; //LOOPZ-MUTER-.
//         }
//         // config.mesh.hoverChaseAlpha++;

//         nx.kiloBotMesh1.hoverAlpha += 0.05; //zap-bot-hover-.
//         nx.kiloBotMesh1.position.y += 0.01 * Math.cos(nx.kiloBotMesh1.hoverAlpha);

//         if(nx.kiloBotMesh1.searching > 0){
//             if(nx.kiloBotMesh1.searching===1){ //ONE-TIME-INIT-MECHANISM-.
//                 // console.log('ONE-TIME LASER START')
//                 //ANM: laser from point to point-.

//                 if(++config.mesh.hoverChaseAlpha%2===0 || config.mesh.hoverChaseAlpha%3===0){return;} //LOOPZ-DAMPER-. //TODO TEST THIS_.   
//                 nx.botz.laserScanAnm();

//                 // curScan = (scanDirToggle)? config.mesh.laserBumperLft.position:config.mesh.laserBumperRgt.position;
//                 // tgtScan = (scanDirToggle)? config.mesh.laserBumperRgt.position:config.mesh.laserBumperLft.position;
//                 // $({x:curScan.x,y:curScan.y,z:curScan.z})
//                 // .animate({x:tgtScan.x,y:tgtScan.y,z:tgtScan.z},{queue:false,duration:8000,easing:'swing',
//                 // step: function(now) { 

//                 //         config.mesh.laserTgtSphere.position.x = this.x;
//                 //         config.mesh.laserTgtSphere.position.y = this.y; 
//                 //         config.mesh.laserTgtSphere.position.z = this.z;

//                 //         //LOCAL_POSITION to WORLD_POSITION
//                 //         nx.kiloBotMesh1.computeWorldMatrix();
//                 //         var matrix = nx.kiloBotMesh1.getWorldMatrix();
//                 //         var nx.botz.global_position_tgt = BABYLON.Vector3.TransformCoordinates(config.mesh.laserTgtSphere.position, matrix); //TODO no vars here
//                 //         // nx.botz.global_position_tgt.y = nx.kiloBotMesh1.position.y - 5;
//                 //         config.mesh.laserTgtSphere.position.copyFrom(nx.botz.global_position_tgt);

//                 //         var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, matrix); //TODO no vars here

//                 //         if(config.mesh.rayLines.length && config.mesh.rayLines[3]){ config.mesh.rayLines[3].dispose(); config.mesh.rayLines.splice(3,1); } //remove back-.
//                 //         if(config.mesh.rayLines[1]){ config.mesh.rayLines[1].alpha = 0.5    }           
//                 //         if(config.mesh.rayLines[2]){ config.mesh.rayLines[1].alpha = 0.4    }   //fade-out-.        
                        
//                 //         // zapBotLaserOffset1 = nx.BV32(nx.kiloBotMesh1.position);   //todo move into nx.zapbot
//                 //         // zapBotLaserOffset1.y = nx.kiloBotMesh1.position.y + 1.15;

//                 //         // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, nx.rayLine1);
//                 //         nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene);
//                 //         // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, config.mesh.laserTgtSphere.position], nx.scene);
//                 //         nx.rayLine1.alpha = 0.6;//Math.cos(alpha2);//0.8
//                 //         nx.rayLine1.color.r = 1;//Math.cos(alpha1);//1;
//                 //         nx.rayLine1.color.g = nx.rayLine1.color.b = 0;
//                 //         config.mesh.rayLines.unshift(nx.rayLine1); //add to front
//                 //         if (nx.orbyMesh && nx.rayLine1.intersectsMesh(nx.orbyMesh)) {                        //intersection
//                 //             nx.kiloBotMesh1.targeting = 1;
//                 //             nx.kiloBotMesh1.searching = 0;
//                 //             $(this).stop(true);
//                 //         }
//                 //     }, complete:function(){ //  BOUNCE-.
//                 //         // console.log('BOUNCE')
//                 //         scanDirToggle = !scanDirToggle;
//                 //         // console.log('looks suspicious')
//                 //         nx.kiloBotMesh1.searching=1; return; 
//                 //     } //NEXT-SUB-SEQUENCE-. 
//                 // });
//             }
//             nx.kiloBotMesh1.searching++;
//         } //end searching
//         else if(nx.kiloBotMesh1.targeting > 0 ){
//             if(nx.kiloBotMesh1.targeting===1){ //init tracking-.
//                 //start zapping-.
//             }
//             else if(nx.kiloBotMesh1.targeting%3===0){ //LOOPZ-DAMPER-.
//                 console.log('targeting')
//                 for(var i = 0; i<config.mesh.rayLines.length;i++){ config.mesh.rayLines[i].dispose();  } //TODO perf reuse rays
//                     // config.mesh.rayLines = []; //clean up lasers-.

//                 nx.kiloBotMesh1.lookAt(nx.orbyMesh.position)
//                 nx.kiloBotMesh1.rotation.x = 0.2// default bot rot
//                 nx.kiloBotMesh1.rotation.z = 0;

//                     //LOCAL_POSITION to WORLD_POSITION
//                     nx.kiloBotMesh1.computeWorldMatrix();
//                     nx.botz.anmMatrix1 = nx.kiloBotMesh1.getWorldMatrix();
//                     nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here


// // debugger;
//                 // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
//                 config.mesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, config.mesh.rayLines[0]);
//                 config.mesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
//                 config.mesh.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
//                 config.mesh.rayLines[0].color.g = config.mesh.rayLines[0].color.b = 0
//                 // config.mesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, config.mesh.rayLines[1]);
//                 // config.mesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
//                 // config.mesh.rayLines[1].color.g = 1;//Math.cos(alpha1);//1;
//                 // config.mesh.rayLines[1].color.r = config.mesh.rayLines[1].color.b = 0
//                 // config.mesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, config.mesh.rayLines[2]);
//                 // config.mesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8
//                 // config.mesh.rayLines[2].color.b = 1;//Math.cos(alpha1);//1;
//                 // config.mesh.rayLines[2].color.g = config.mesh.rayLines[2].color.r = 0;        //spotted red laser

//                 // if(config.mesh.rayLines.length && config.mesh.rayLines[3]){ config.mesh.rayLines[3].dispose(); config.mesh.rayLines.splice(3,1); } //remove back-.
//                 // config.mesh.rayLines.unshift(nx.rayLine1); //add to front

//                 if(nx.kiloBotMesh1.targeting%2===0){ //double-damper //todo probably not necessary-.
//                     console.log('doubledamper???')
//                         nx.kiloBotMesh1.targeting = 0;
//                         nx.kiloBotMesh1.spotted=1;
//                         return;
//                 }
//             }
//             nx.kiloBotMesh1.targeting++; //frame-iterator-.

//         } //end targeting
//         else if (nx.kiloBotMesh1.spotted) {
//             console.log('spotted')
//             nx.kiloBotMesh1.spotted = 0; //one time only-.
//             setTimeout(function(){ //chase delay-.
//                 nx.kiloBotMesh1.chasing = 1;
//             },nx.kiloBotMesh1.delayOnTargeting)    
//         } else if( nx.kiloBotMesh1.chasing > 0){
//             console.log('chasing')
//             nx.botz.routeZapBot();
//         } else if( nx.kiloBotMesh1.catch===1 ){
//             console.log('catch')
//             // debugger;
//             nx.botz.startZapping();
//             // nx.kiloBotMesh1.startZapping();
//             // nx.kiloBotMesh1.chasing = 0;
//             // nx.kiloBotMesh1.catch = 0;
//         } 

//     }); //***********************************************************END hover, search and chase LOOPZ-.
// }//end initbotz

// config.mesh.scanDirToggle = 1;




nx.botz.setKiloBotScanTgt = function(tgtPOS){
    nx.kiloBotMesh1.searching = 0;
    nx.kiloBotMesh1.stopLaser = 1;
    // var that = this;
    setTimeout(function(){
        for(var i = 0; i<nx.kiloBotMesh1.rayLines.length;i++){ nx.kiloBotMesh1.rayLines[i].dispose();  } //TODO perf reuse rays
        nx.kiloBotMesh1.rayLines = []; //clean up lasers-.
        //draw laser from origin to tgt
        //LOCAL_POSITION to WORLD_POSITION
        nx.kiloBotMesh1.computeWorldMatrix();
        nx.botz.anmMatrix1 = nx.kiloBotMesh1.getWorldMatrix();
        nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.kiloBotMesh1.laserOriginSphere.position, nx.botz.anmMatrix1); 
        nx.kiloBotMesh1.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, tgtPOS], nx.scene, nx.kiloBotMesh1.rayLines[0]);
        nx.kiloBotMesh1.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
        nx.kiloBotMesh1.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
        nx.kiloBotMesh1.rayLines[0].color.g = nx.kiloBotMesh1.rayLines[0].color.b = 0;
    },500)
} //end set scan tgt

nx.botz.laserScanAnm = function(config){

    config.mesh.stopLaser = 0;

    var scanDamperAlpha = 0
    var curScan, tgtScan;
    // var nx.botz.anmMatrix1, nx.botz.global_position_tgt, nx.botz.global_position_origin;
    curScan = (config.mesh.scanDirToggle)? config.mesh.laserBumperLft.position:config.mesh.laserBumperRgt.position;
    tgtScan = (config.mesh.scanDirToggle)? config.mesh.laserBumperRgt.position:config.mesh.laserBumperLft.position;


    config.mesh.scanTgtAlpha = 0;
    config.mesh.disposeRay = null;


    $({x:curScan.x,y:curScan.y,z:curScan.z}) //--------------------------------------------------LASER-SCAN-SWEEP-ANM-.
    .animate({x:tgtScan.x,y:tgtScan.y,z:tgtScan.z},{queue:false,duration:2000,easing:'swing',
    step: function(now) { 

            if(++scanDamperAlpha%2===0||scanDamperAlpha%3===0||scanDamperAlpha%5===0||scanDamperAlpha%7===0){return}

            config.mesh.laserTgtSphere.position.x = this.x;
            config.mesh.laserTgtSphere.position.y = this.y; 
            config.mesh.laserTgtSphere.position.z = this.z;

            //LOCAL_POSITION to WORLD_POSITION
            config.mesh.computeWorldMatrix();
            // var matrix = config.mesh.getWorldMatrix();
            nx.botz.anmMatrix1 = config.mesh.getWorldMatrix();
            // var nx.botz.global_position_tgt = BABYLON.Vector3.TransformCoordinates(config.mesh.laserTgtSphere.position, nx.botz.anmMatrix1); //TODO no vars here
            nx.botz.global_position_tgt = BABYLON.Vector3.TransformCoordinates(config.mesh.laserTgtSphere.position, nx.botz.anmMatrix1); //TODO no vars here
            // var nx.botz.global_position_tgt = BABYLON.Vector3.TransformCoordinates(config.mesh.laserTgtSphere.position, matrix); //TODO no vars here
            // nx.botz.global_position_tgt.y = config.mesh.position.y - 5;
            config.mesh.laserTgtSphere.position.copyFrom(nx.botz.global_position_tgt);

            nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here
            // var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here
            // var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, matrix); //TODO no vars here

            // if(config.mesh.rayLines.length && config.mesh.rayLines[3]){ config.mesh.rayLines[3].dispose(); config.mesh.rayLines.splice(3,1); } //remove back-.

            //OPTIMIZE- last array to new position-.


            // if(config.mesh.rayLines[1]){ config.mesh.rayLines[1].alpha = 0.5    }           
            // if(config.mesh.rayLines[2]){ config.mesh.rayLines[1].alpha = 0.4    }   //fade-out-.        
            
            // zapBotLaserOffset1 = nx.BV32(config.mesh.position);   //todo move into nx.zapbot
            // zapBotLaserOffset1.y = config.mesh.position.y + 1.15;


            if(config.mesh.rayLines.length!=3){ //INIT-

               //LOCAL_POSITION to WORLD_POSITION
                config.mesh.computeWorldMatrix();
                nx.botz.anmMatrix1 = config.mesh.getWorldMatrix();
                // var matrix = config.mesh.getWorldMatrix();
                // var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, matrix); //TODO no vars here
                // var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here
                nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

                config.mesh.rayLines= [];
                // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
                config.mesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, config.mesh.rayLines[0]);
                config.mesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
                config.mesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, config.mesh.rayLines[1]);
                config.mesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
                config.mesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, config.mesh.rayLines[2]);
                config.mesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8

            }else{ //REPLACEMENT-POS.

                //FOR EACH ALPHA - PLACE AT A NEW POINT-.
                config.mesh.disposeRay = config.mesh.rayLines[config.mesh.scanTgtAlpha]; 
                            // var ptArr1 = config.mesh.rayLines[1].getVerticesData(BABYLON.VertexBuffer.PositionKind)
                            // var ptArr0 = config.mesh.rayLines[0].getVerticesData(BABYLON.VertexBuffer.PositionKind)

                config.mesh.rayLines[config.mesh.scanTgtAlpha] = BABYLON.Mesh.CreateLines("dynoray", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, config.mesh.rayLines[config.mesh.scanTgtAlpha]);


                config.mesh.disposeRay.dispose();
                // config.mesh.rayLines[config.mesh.scanTgtAlpha] = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, config.mesh.rayLines[config.mesh.scanTgtAlpha]);
                // config.mesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.BV3(ptArr1[0],ptArr1[1],ptArr1[2]),nx.BV3(ptArr1[3],ptArr1[3],ptArr1[5])], nx.scene, config.mesh.rayLines[2]);
                // config.mesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.BV3(ptArr0[0],ptArr0[1],ptArr0[2]),nx.BV3(ptArr0[3],ptArr0[3],ptArr0[5])], nx.scene, config.mesh.rayLines[1]);
                // config.mesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, config.mesh.rayLines[0]);


                // config.mesh.rayLines[0].refreshBoundingInfo();
                // config.mesh.rayLines[1].refreshBoundingInfo();
                // config.mesh.rayLines[2].refreshBoundingInfo();
            }


            config.mesh.scanTgtAlpha = (++config.mesh.scanTgtAlpha>2)?0:config.mesh.scanTgtAlpha; //TERNARY-TRIAD-ITERATOR-.
            // console.log('triad iterator', config.mesh.scanTgtAlpha)


            config.mesh.rayLines[0].alpha = 0.6            
            config.mesh.rayLines[1].alpha = 0.3    //fade-out-.        
            config.mesh.rayLines[2].alpha = 0.3    //fade-out-.        

            config.mesh.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
            config.mesh.rayLines[0].color.g = config.mesh.rayLines[0].color.b = 0
            config.mesh.rayLines[1].color.b = 1;//Math.cos(alpha1);//1;
            config.mesh.rayLines[1].color.g = config.mesh.rayLines[1].color.r = 0
            config.mesh.rayLines[2].color.r = 1;//Math.cos(alpha1);//1;
            config.mesh.rayLines[2].color.g = config.mesh.rayLines[2].color.b = 0;        //spotted red laser


            // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene, nx.rayLine1);
            // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, config.mesh.laserTgtSphere.position], nx.scene);
            // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, config.mesh.laserTgtSphere.position], nx.scene);
            // nx.rayLine1.alpha = 0.6;//Math.cos(alpha2);//0.8
            // nx.rayLine1.color.r = 1;//Math.cos(alpha1);//1;
            // nx.rayLine1.color.g = nx.rayLine1.color.b = 0;

            // config.mesh.rayLines.unshift(nx.rayLine1); //add to front

            if (nx.orbyMesh && config.mesh.rayLines[0].intersectsMesh(nx.orbyMesh)) {                        //intersection
                config.mesh.targeting = 1;
                config.mesh.searching = 0;
                $(this).stop(true);
            }
        }, complete:function(){ //  BOUNCE-.
            // console.log('BOUNCE')
            config.mesh.scanDirToggle = !config.mesh.scanDirToggle;
            // console.log('searching5 on')
            // config.mesh.searching=1;  //FIX: removed to help shut off laser! maybe breaks something else...
            if(!config.mesh.stopLaser){config.mesh.searching=1;}  //FIX: removed to help shut off laser! maybe breaks something else...
            return; 
        } //NEXT-SUB-SEQUENCE-. 
    });
}
        // var routeZapBot = function(){ //EMBEDDED-FUNCTION-BEHAVIOR-.
        //     config.mesh.chaseDistance = BABYLON.Vector3.Distance(config.mesh.position, nx.orbyMesh.position);  
        //     if(config.mesh.chasing===1){ //init chasing-.
        //         // config.mesh.chasing = 0; //one time only-.
        //         config.mesh.lookAt(nx.orbyMesh.position)
        //         config.mesh.rotation.x = 0.2;
        //         config.mesh.rotation.z = 0;

        //         var botSpeed = config.mesh.chaseDistance/10*1000/3;//start at 1 sec for 10 distance. 20 /10 * 1000 = 2000 miliseconds. Too slow /2 speed-.

        //         $({x:nx.kiloBotMesh1.position.x,y:nx.kiloBotMesh1.position.y,z:nx.kiloBotMesh1.position.z,pct:0})
        //             .animate({x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y+4,z:nx.orbyMesh.position.z,pct:1},{queue:false,duration:botSpeed,easing:'swing',
        //             step: function(now) { 
        //                 if(nx.kiloBotMesh1.catch){ return; }
        //                 // nx.kiloBotMesh1.lookAt(nx.orbyMesh.position)
        //                 nx.kiloBotMesh1.position.x = this.x;
        //                 nx.kiloBotMesh1.position.y = this.y;
        //                 nx.kiloBotMesh1.position.z = this.z;

        //                 if(this.pct>0.5){ //halfway point-.
        //                     if(nx.anmz.orby.move.trick){
        //                         nx.kiloBotMesh1.searching = 1;
        //                         nx.kiloBotMesh1.chasing = 0;
        //                     } else {
        //                         nx.kiloBotMesh1.chasing=1; //re-init-.
        //                     }
        //                     $(this).stop(true);
        //                 }

        //             }, complete:function(){ 
        //                 if(nx.kiloBotMesh1.catch){
        //                     nx.kiloBotMesh1.rotation.x = 0.2// default bot rot
        //                     nx.kiloBotMesh1.rotation.z = 0;
        //                 }
        //                 else{
        //                     nx.kiloBotMesh1.searching = 1;
        //                     nx.kiloBotMesh1.chasing = 0;
        //                     return; //end chasing frame iteration-.
        //                 }
        //              } //NEXT-SUB-SEQUENCE-. 
        //         });
        //         // return; do not do this will skip frame iteration
        //     } //end INIT-ANM-.
        //     else{ //run ray collision logic-.
        //         //LOCAL_POSITION to WORLD_POSITION
        //         nx.kiloBotMesh1.computeWorldMatrix();
        //         var matrix = nx.kiloBotMesh1.getWorldMatrix();
        //         var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, matrix); //TODO no vars here

        //         // zapBotLaserOffset1 = nx.BV32(nx.kiloBotMesh1.position);
        //         // zapBotLaserOffset1.y = nx.kiloBotMesh1.position.y + 1.15; //todo nx.zapbotmesh

        //         nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene);
        //         // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
        //         nx.rayLine1.alpha = 0.8;//Math.cos(alpha2);//0.8
        //         nx.rayLine1.color.r = 1;//Math.cos(alpha1);//1;
        //         nx.rayLine1.color.g = nx.rayLine1.color.b = 0.5;        //chasing red-blue laser

        //         if(config.mesh.rayLines.length && config.mesh.rayLines[3]){ config.mesh.rayLines[3].dispose(); config.mesh.rayLines.splice(3,1); } //remove back-.
        //         config.mesh.rayLines.unshift(nx.rayLine1); //add to front

        //         if(nx.kiloBotMesh1.chaseDistance < 5.5){ //CATCH-DISTANCE-.
        //             for(var i = 0; i<config.mesh.rayLines.length;i++){ config.mesh.rayLines[i].dispose();  }
        //             config.mesh.rayLines = []; //clean up lasers-.
        //             nx.kiloBotMesh1.chasing = 0;
        //             nx.kiloBotMesh1.catch = 1;
        //             return; //return to end frame iteration-.
        //         }
        //     }

        //     nx.kiloBotMesh1.chasing++; //frame-iterator-.
        // }
// nx.kiloBotMesh1.startZapping = function(){ //EMBEDDED-FUNCTION-BEHAVIOR-.
nx.botz.startZapping = function(config){ //EMBEDDED-FUNCTION-BEHAVIOR-.
    if(!config || !config.mesh || config.mesh.zapping){return;}//one-time-zapping-.
    config.mesh.zapping = 1;
    config.mesh.zapWave.isVisible = 1;
    //NOTIFY-ORBY-HE-IS-BEING-ZAPPED-.
    nx.anmz.orby.zappedMode = 1;
    nx.initFaceCam();
    setTimeout(function(){
        config.mesh.stopZap = 1;
        config.mesh.zapping = 0;
        config.mesh.catch = 0;
        nx.anmz.orby.zappedMode = 0;
        nx.orbyMesh.glow.removeMesh(nx.orbyMesh);
        nx.orbyMesh.glow.removeMesh(nx.orbyMeshBody);
        nx.orbyMesh.glow = null;
        config.mesh.zapWave.isVisible = 0;
        nx.gameRestart();
    },5000);

    //ANM GLOW BLUR-.
    if(!nx.orbyMesh.glow){ //one-time-init-.
        nx.orbyMesh.glow = new BABYLON.HighlightLayer("orby.glow", nx.scene, {
            // blueTextureSizeRatio: 0.5,
            // alphaBlendingMode: 2,
            blurHorizontalSize: 1,
            blurVerticalSize: 1,
            innerGlow:false,
            outerGlow:false
            // mainTextureRatio: 0.25
        });

        nx.orbyMesh.glow.addMesh(nx.orbyMesh, new BABYLON.Color3(0.44,0.44,1));
        nx.orbyMesh.glow.addMesh(nx.orbyMeshBody, new BABYLON.Color3(0.44,0.44,1));
    } 
        // nx.orbyMesh.glow.addMesh(config.mesh, new BABYLON.Color3(0.44,0.44,1));
        // nx.orbyMesh1.glow.removeMesh(config.mesh);
        // nx.orbyMesh1.glow.blurHorizontalSize = 2;
        // nx.orbyMesh1.glow.blurVerticalSize = 2;
        // nx.orbyMesh1.glow.innerGlow = false;
        // nx.orbyMesh1.glow.outerGlow = true;

    config.mesh.zapAuraAlpha++
    nx.orbyMesh.glow.blurHorizontalSize = 1 +  Math.cos(config.mesh.zapAuraAlpha)*2;
    nx.orbyMesh.glow.blurVerticalSize = 1 +  Math.cos(config.mesh.zapAuraAlpha)*2;
    // morphing
    var zapAlpha = 0;
    // config.mesh.stopZap = 0;
    // debugger; //TEST this needs OPTIMIZATION-. COMBINE WITH CHASE LOOP???
    nx.scene.registerBeforeRender(function zapLOOPZ() {  //TODO nx.loopz.zapLOOPZ

        //TODO unregister this-.
        // if(config.mesh.stopZap){ 
        if(nx.botz.stopZap){ 
            nx.scene.unregisterBeforeRender(zapLOOPZ); return;
        } //STOP-LOOPZ!-.

        // updateZapPath(zapPath, zapAlpha);
        nx.botz.updateZapPath(zapAlpha);
        //updateLines(mesh, zapPath);
        config.mesh.zapWave = BABYLON.Mesh.CreateTube("config.mesh.zapWave", zapWavePath, 0.8, 60, null, 0, nx.scene, true, BABYLON.Mesh.FRONTSIDE, config.mesh.zapWave);
        config.mesh.zapWave.parent = config.mesh.zapParent;
        // config.mesh.zap = BABYLON.Mesh.CreateLines(null, zapPath, null, null, config.mesh.zap);
        config.mesh.zapWave.rotation.x += 7.4;

        zapAlpha += 0.09;
       // pl.position = camera.position;
    }); //END ZAPPING LOOPZ
} //END start zapping


// var routeZapBot = function(){ //EMBEDDED-FUNCTION-BEHAVIOR-.
nx.botz.routeZapBot = function(config){ //EMBEDDED-FUNCTION-BEHAVIOR-.
    config.mesh.chaseDistance = BABYLON.Vector3.Distance(config.mesh.position, nx.orbyMesh.position);  
    if(config.mesh.chasing===1){ //init chasing-.
        // config.mesh.chasing = 0; //one time only-.
        config.mesh.lookAt(nx.orbyMesh.position)
        config.mesh.rotation.x = 0.2;
        config.mesh.rotation.z = 0;
// debugger;
        // var botSpeed = config.mesh.chaseDistance/10*1000/3;//start at 1 sec for 10 distance. 20 /10 * 1000 = 2000 miliseconds. Too slow /2 speed-.
        var botSpeed = config.mesh.chaseDistance/10*1000/8;// /2 slower /4 faster-. start at 1 sec for 10 distance. 20 /10 * 1000 = 2000 miliseconds. Too slow /2 speed-.

        $({x:config.mesh.position.x,y:config.mesh.position.y,z:config.mesh.position.z,pct:0})
            .animate({x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y+4,z:nx.orbyMesh.position.z,pct:1},{queue:false,duration:botSpeed,easing:'linear',
            step: function(now) { 
                if(config.mesh.catch){ return; }
                // config.mesh.lookAt(nx.orbyMesh.position)
                config.mesh.position.x = this.x;
                config.mesh.position.y = this.y;
                config.mesh.position.z = this.z;

                if(this.pct>0.5){ //halfway point-.
                    if(nx.anmz.orby.move.trick){
                        console.log('searching 6 on')
                        config.mesh.searching = 1;
                        config.mesh.chasing = 0;
                    } else {
                        config.mesh.chasing=1; //re-init-.
                    }
                    $(this).stop(true);
                }

            }, complete:function(){ 
                if(config.mesh.catch){
                    config.mesh.rotation.x = 0.2// default bot rot
                    config.mesh.rotation.z = 0;
                }
                else{
                    console.log('searching 7 on')
                    config.mesh.searching = 1;
                    config.mesh.chasing = 0;
                    return; //end chasing frame iteration-.
                }
             } //NEXT-SUB-SEQUENCE-. 
        });
        // return; do not do this will skip frame iteration
    } //end INIT-ANM-.
    else{ //run ray collision logic-.
        //LOCAL_POSITION to WORLD_POSITION
        config.mesh.computeWorldMatrix();
        // var matrix = config.mesh.getWorldMatrix();
        nx.botz.anmMatrix1 = config.mesh.getWorldMatrix();
        // var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, matrix); //TODO no vars here
        // var nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here
        nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(config.mesh.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

        // zapBotLaserOffset1 = nx.BV32(config.mesh.position);
        // zapBotLaserOffset1.y = config.mesh.position.y + 1.15; //todo nx.zapbotmesh




        //FOR EACH ALPHA - PLACE AT A NEW POINT-.
        config.mesh.disposeRay = config.mesh.rayLines[config.mesh.scanTgtAlpha]; 
        config.mesh.rayLines[config.mesh.scanTgtAlpha] = BABYLON.Mesh.CreateLines("dynoray", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, config.mesh.rayLines[config.mesh.scanTgtAlpha]);
        config.mesh.disposeRay.dispose();
        // }


        config.mesh.scanTgtAlpha = (++config.mesh.scanTgtAlpha>2)?0:config.mesh.scanTgtAlpha; //TERNARY-TRIAD-ITERATOR-.
        // console.log('triad iterator', config.mesh.scanTgtAlpha)


        config.mesh.rayLines[0].alpha = 0.6            
        config.mesh.rayLines[1].alpha = 0.6    //track laser-.      
        config.mesh.rayLines[2].alpha = 0.6         

        config.mesh.rayLines[0].color.r = 1;
        config.mesh.rayLines[0].color.g = config.mesh.rayLines[0].color.b = 0
        config.mesh.rayLines[1].color.b = 1;
        config.mesh.rayLines[1].color.g = config.mesh.rayLines[1].color.r = 0
        config.mesh.rayLines[2].color.r = 1;
        config.mesh.rayLines[2].color.g = config.mesh.rayLines[2].color.b = 0;       





        // for(var i = 0; i<config.mesh.rayLines.length;i++){ config.mesh.rayLines[i].dispose();  } 

        // config.mesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene);
        // // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
        // config.mesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
        // config.mesh.rayLines[0].color.r = 1;//Math.cos(alpha1);//1;
        // config.mesh.rayLines[0].color.g = config.mesh.rayLines[0].color.b = 0;        //chasing red-blue laser

        // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene);
        // // nx.rayLine1 = BABYLON.Mesh.CreateLines("ray3", [zapBotLaserOffset1, nx.orbyMesh.position], nx.scene);
        // nx.rayLine1.alpha = 0.8;//Math.cos(alpha2);//0.8
        // nx.rayLine1.color.r = 1;//Math.cos(alpha1);//1;
        // nx.rayLine1.color.g = nx.rayLine1.color.b = 0.5;        //chasing red-blue laser

        // if(config.mesh.rayLines.length && config.mesh.rayLines[3]){ config.mesh.rayLines[3].dispose(); config.mesh.rayLines.splice(3,1); } //remove back-.
        // config.mesh.rayLines.unshift(nx.rayLine1); //add to front

        if(config.mesh.chaseDistance < 5.5){ //CATCH-DISTANCE-.
            for(var i = 0; i<config.mesh.rayLines.length;i++){ config.mesh.rayLines[i].dispose();  }
            config.mesh.rayLines = []; //clean up lasers-.
            config.mesh.chasing = 0;
            config.mesh.catch = 1;
            return; //return to end frame iteration-.
        }
    }

    config.mesh.chasing++; //frame-iterator-.
} //end route zapbot

/***************************************************KILO-BOT-BEHAVIOR-CALCULATIONS-***************/
// nx.kiloBotMesh1.speed = 0;
nx.botz.routeKiloBot = function(){ //EMBEDDED-FUNCTION-BEHAVIOR-.
    nx.kiloBotMesh1.chaseDistance = BABYLON.Vector3.Distance(nx.kiloBotMesh1.position, nx.orbyMesh.position);  
    if(nx.kiloBotMesh1.chasing===1){ //init chasing-.
        nx.kiloBotMesh1.lookAt(nx.orbyMesh.position)
        nx.kiloBotMesh1.rotation.x = 0.2;
        nx.kiloBotMesh1.rotation.z = 0;

        var speedGovernor = (nx.kiloBotMesh1.speed)?nx.kiloBotMesh1.speed:3;
        // var botSpeed = nx.kiloBotMesh1.chaseDistance/10*1000/3;//start at 1 sec for 10 distance. 20 /10 * 1000 = 2000 miliseconds. Too slow /2 speed-.
        var botSpeed = nx.kiloBotMesh1.chaseDistance/10*1000/speedGovernor;// /2 slower /4 faster-. start at 1 sec for 10 distance. 20 /10 * 1000 = 2000 miliseconds. Too slow /2 speed-.
// console.log('for KAYALASTAR!!!',botSpeed)
        $({x:nx.kiloBotMesh1.position.x,y:nx.kiloBotMesh1.position.y,z:nx.kiloBotMesh1.position.z,pct:0})
            .animate({x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y+4,z:nx.orbyMesh.position.z,pct:1},{queue:false,duration:botSpeed,easing:'linear',
            step: function(now) { 
                if(nx.kiloBotMesh1.catch){ return; }
                // nx.kiloBotMesh1.lookAt(nx.orbyMesh.position)
                nx.kiloBotMesh1.position.x = this.x;
                nx.kiloBotMesh1.position.y = this.y;
                nx.kiloBotMesh1.position.z = this.z;
                if(this.pct>0.5){ //halfway point-.
                    if(nx.anmz.orby.move.trick){
                        console.log('searching 6 on')
                        nx.kiloBotMesh1.searching = 1;
                        nx.kiloBotMesh1.chasing = 0;
                    } else {
                        nx.kiloBotMesh1.chasing=1; //re-init-.
                    }
                    $(this).stop(true);
                }
            }, complete:function(){ 
                if(nx.kiloBotMesh1.catch){
                    nx.kiloBotMesh1.rotation.x = 0.2// default bot rot
                    nx.kiloBotMesh1.rotation.z = 0;
                }
                else{
                    console.log('searching 7 on')
                    nx.kiloBotMesh1.searching = 1;
                    nx.kiloBotMesh1.chasing = 0;
                    return; //end chasing frame iteration-.
                }
             } //NEXT-SUB-SEQUENCE-. 
        });
    } //end INIT-ANM-.
    else{ //run ray collision logic-.
        //LOCAL_POSITION to WORLD_POSITION
        nx.kiloBotMesh1.computeWorldMatrix();
        nx.botz.anmMatrix1 = nx.kiloBotMesh1.getWorldMatrix();
        nx.botz.global_position_origin = BABYLON.Vector3.TransformCoordinates(nx.kiloBotMesh1.laserOriginSphere.position, nx.botz.anmMatrix1); //TODO no vars here

        //FOR EACH ALPHA - PLACE AT A NEW POINT-.
        nx.kiloBotMesh1.disposeRay = nx.kiloBotMesh1.rayLines[nx.kiloBotMesh1.scanTgtAlpha]; 
        nx.kiloBotMesh1.rayLines[nx.kiloBotMesh1.scanTgtAlpha] = BABYLON.Mesh.CreateLines("dynoray", [nx.botz.global_position_origin, nx.orbyMesh.position], nx.scene, nx.kiloBotMesh1.rayLines[nx.kiloBotMesh1.scanTgtAlpha]);
        nx.kiloBotMesh1.disposeRay.dispose();

        nx.kiloBotMesh1.scanTgtAlpha = (++nx.kiloBotMesh1.scanTgtAlpha>2)?0:nx.kiloBotMesh1.scanTgtAlpha; //TERNARY-TRIAD-ITERATOR-.

        nx.kiloBotMesh1.rayLines[0].alpha = 0.6            
        nx.kiloBotMesh1.rayLines[1].alpha = 0.6    //track laser-.      
        nx.kiloBotMesh1.rayLines[2].alpha = 0.6         

        nx.kiloBotMesh1.rayLines[0].color.r = 1;
        nx.kiloBotMesh1.rayLines[0].color.g = nx.kiloBotMesh1.rayLines[0].color.b = 0
        nx.kiloBotMesh1.rayLines[1].color.b = 1;
        nx.kiloBotMesh1.rayLines[1].color.g = nx.kiloBotMesh1.rayLines[1].color.r = 0
        nx.kiloBotMesh1.rayLines[2].color.r = 1;
        nx.kiloBotMesh1.rayLines[2].color.g = nx.kiloBotMesh1.rayLines[2].color.b = 0;       

        if(nx.kiloBotMesh1.chaseDistance < 5.5){ //CATCH-DISTANCE-.
            for(var i = 0; i<nx.kiloBotMesh1.rayLines.length;i++){ nx.kiloBotMesh1.rayLines[i].dispose();  }
            nx.kiloBotMesh1.rayLines = []; //clean up lasers-.
            nx.kiloBotMesh1.chasing = 0;
            nx.kiloBotMesh1.catch = 1;
            return; //return to end frame iteration-.
        }
    }
    nx.kiloBotMesh1.chasing++; //frame-iterator-.
} //end route kilobot



nx.botz.kiloBotZapsOrby = function(){ 

    nx.kiloBotMesh1.startFlashing(); //todo move this earlier
    nx.kiloBotMesh1.startShocking();
    nx.initFaceCam();
    nx.anmz.orby.zappedMode = 1; //NOTIFY-ORBY-HE-IS-BEING-ZAPPED-.
    
    //ANM GLOW BLUR-.
    if(!nx.orbyMesh.glow){ //one-time-init-.
        nx.orbyMesh.glow = new BABYLON.HighlightLayer("orby.glow", nx.scene, {
            // blueTextureSizeRatio: 0.5,
            // alphaBlendingMode: 2,
            blurHorizontalSize: 1,
            blurVerticalSize: 1,
            innerGlow:false,
            outerGlow:false
            // mainTextureRatio: 0.25
        });

        nx.orbyMesh.glow.addMesh(nx.orbyMesh, new BABYLON.Color3(0.44,0.44,1));
        nx.orbyMesh.glow.addMesh(nx.orbyMeshBody, new BABYLON.Color3(0.44,0.44,1));
    } 

    setTimeout(function(){
        // nx.kiloBotMesh1.stopZap = 1;
        nx.kiloBotMesh1.stopShocking();
        nx.kiloBotMesh1.zapping = 0;
        nx.kiloBotMesh1.catch = 0;
        nx.anmz.orby.zappedMode = 0;
        nx.orbyMesh.glow.removeMesh(nx.orbyMesh);
        nx.orbyMesh.glow.removeMesh(nx.orbyMeshBody);
        nx.orbyMesh.glow = null;
        nx.kiloBotMesh1.zapWave.isVisible = 0;
        nx.gameRestart();
    },5000);

 return;
 
 
    if(!config || !nx.kiloBotMesh1 || nx.kiloBotMesh1.zapping){return;}//one-time-zapping-.
    nx.kiloBotMesh1.zapping = 1;
    nx.kiloBotMesh1.zapWave.isVisible = 1;
    //NOTIFY-ORBY-HE-IS-BEING-ZAPPED-.
    nx.anmz.orby.zappedMode = 1;
    nx.initFaceCam();
    setTimeout(function(){
        nx.kiloBotMesh1.stopZap = 1;
        nx.kiloBotMesh1.zapping = 0;
        nx.kiloBotMesh1.catch = 0;
        nx.anmz.orby.zappedMode = 0;
        nx.orbyMesh.glow.removeMesh(nx.orbyMesh);
        nx.orbyMesh.glow.removeMesh(nx.orbyMeshBody);
        nx.orbyMesh.glow = null;
        nx.kiloBotMesh1.zapWave.isVisible = 0;
        nx.gameRestart();
    },5000);

    //ANM GLOW BLUR-.
    if(!nx.orbyMesh.glow){ //one-time-init-.
        nx.orbyMesh.glow = new BABYLON.HighlightLayer("orby.glow", nx.scene, {
            // blueTextureSizeRatio: 0.5,
            // alphaBlendingMode: 2,
            blurHorizontalSize: 1,
            blurVerticalSize: 1,
            innerGlow:false,
            outerGlow:false
            // mainTextureRatio: 0.25
        });

        nx.orbyMesh.glow.addMesh(nx.orbyMesh, new BABYLON.Color3(0.44,0.44,1));
        nx.orbyMesh.glow.addMesh(nx.orbyMeshBody, new BABYLON.Color3(0.44,0.44,1));
    } 
        // nx.orbyMesh.glow.addMesh(nx.kiloBotMesh1, new BABYLON.Color3(0.44,0.44,1));
        // nx.orbyMesh1.glow.removeMesh(nx.kiloBotMesh1);
        // nx.orbyMesh1.glow.blurHorizontalSize = 2;
        // nx.orbyMesh1.glow.blurVerticalSize = 2;
        // nx.orbyMesh1.glow.innerGlow = false;
        // nx.orbyMesh1.glow.outerGlow = true;

    nx.kiloBotMesh1.zapAuraAlpha++
    nx.orbyMesh.glow.blurHorizontalSize = 1 +  Math.cos(nx.kiloBotMesh1.zapAuraAlpha)*2;
    nx.orbyMesh.glow.blurVerticalSize = 1 +  Math.cos(nx.kiloBotMesh1.zapAuraAlpha)*2;
    // morphing
    var zapAlpha = 0;
    // nx.kiloBotMesh1.stopZap = 0;
    // debugger; //TEST this needs OPTIMIZATION-. COMBINE WITH CHASE LOOP???
    nx.scene.registerBeforeRender(function zapLOOPZ() {  //TODO nx.loopz.zapLOOPZ

        //TODO unregister this-.
        // if(nx.kiloBotMesh1.stopZap){ 
        if(nx.botz.stopZap){ 
            nx.scene.unregisterBeforeRender(zapLOOPZ); return;
        } //STOP-LOOPZ!-.

        // updateZapPath(zapPath, zapAlpha);
        nx.botz.updateZapPath(zapAlpha);
        //updateLines(mesh, zapPath);
        nx.kiloBotMesh1.zapWave = BABYLON.Mesh.CreateTube("nx.kiloBotMesh1.zapWave", zapWavePath, 0.8, 60, null, 0, nx.scene, true, BABYLON.Mesh.FRONTSIDE, nx.kiloBotMesh1.zapWave);
        nx.kiloBotMesh1.zapWave.parent = nx.kiloBotMesh1.zapParent;
        // nx.kiloBotMesh1.zap = BABYLON.Mesh.CreateLines(null, zapPath, null, null, nx.kiloBotMesh1.zap);
        nx.kiloBotMesh1.zapWave.rotation.x += 7.4;

        zapAlpha += 0.09;
       // pl.position = camera.position;
    }); //END ZAPPING LOOPZ
} //END kiloBotZapsOrby



//creates new positioning for zapwave based on zapIdx
nx.botz.updateKiloBotZapPath = function(zapIdx) {
    for (var i = 0; i < nx.kiloBotMesh1.zapWavePath.length; i++) {
        var x = nx.kiloBotMesh1.zapWavePath[i].x;
        var y = 5 * Math.sin(i / 3 + zapIdx);
        var z = nx.kiloBotMesh1.zapWavePath[i].z;
        nx.kiloBotMesh1.zapWavePath[i].x = x;
        nx.kiloBotMesh1.zapWavePath[i].y = y;
        nx.kiloBotMesh1.zapWavePath[i].z = z;
    }
};


