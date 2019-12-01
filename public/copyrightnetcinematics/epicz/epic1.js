//begin-interchangable-epic-movies-.
var sceneMesh = []; //used for cleanup-.


/****************************************************************-EPICZ-*****************************************************/
//aSEQUENCE-PATTERN-. Load by seqID or by epicID
//USAGE: config = {seqID:'',epicID:'',autoRun:0}
// nx.epic Init = function(config){//if we found the epic init, run, end-.
nx.initSEQ = function(config){//if we found the epic init, run, end-.
    // if(config && config.epicID && nx.SEQZ[config.epicID] && nx.SEQZ[config.epicID].epicID===config.epicID){ 
    if(config && config.epicID && nx.SEQZ[config.epicID]){ 
        nx.SEQZ[config.epicID].initfn();
        // nx.masterIDX = config.epicID; //The only place master sequence idx is set-.
        nx.activeSEQ = nx.SEQZ[config.epicID]; //The only place where current EPIC is set into Sequence-.
    }
}

nx.runSEQ = function(config){ //if we found the epic init, run, end-.
    debugger;
    // if(config && config.epicID && nx.SEQZ[config.epicID] && nx.SEQZ[config.epicID].epicID===config.epicID){ 
    if(config && config.epicID && nx.SEQZ[config.epicID]){ 
        nx.SEQZ[config.epicID].runfn();
    }
}

nx.endSEQ = function(config){ //if we found the epic init, run, end-.
    // if(config && config.epicID && nx.SEQZ[config.epicID] && nx.SEQZ[config.epicID].epicID===config.epicID){ 
    if(config && config.epicID && nx.SEQZ[config.epicID]){ 
        if(nx.SEQZ[config.epicID].endfn){ nx.SEQZ[config.epicID].endfn(); }
        // nx.masterIDX++; //The only place to iterate master sequence is after last sequence endfn-.
    }
}

/****************************************************************-EPICZ-*****************************************************/
nx.SEQZ = { //todo rename all to SEQZ Epic moves up above SCENEZ - has a SEQ, GAM, TXT, which has frames, chapters, levels?
    0:{epicID:0},
    // 1:{epicID:1,name:'A Space Signal!',initfn:function(){
    "TestWorldSEQ":{epicID:'test1',desc:'planet landing',initfn:function(){

        nx.initFollowCam();
        nx.scene.stopAnimation(nx.orbySkeleton[0])      //---------------------ANM: FREEZE-ORBY-.
        nx.anmz.orby.idle = 1; //FIX: keep orby frozen; //todo removable?
        nx.scene.activeCamera.position = new BABYLON.Vector3(-230, 300, -180); //START CAM POS - space pos3 FOC side of nebula ADMIN 
        nx.orbyMesh.position.copyFrom({x:1.5,y:278,z:-6.0})
        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);
        nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.

    }},
    "IntroSEQ":{epicID:1,name:'A Space Signal!',initfn:function(){}},
    "VortexSEQ":{epicID:1,name:"Orion's Nebula!",initfn:function(){

        // nx.endSEQ(nx.masterSequence[nx.masterIDX]); //end previous epic-.
        nx.endSEQ(nx.activeSEQ); //end previous epic-.
        
        nx.spacebox.rotation.y = 0.5;  //adjusted BOX-.
        nx.spacebox.position.z = -1500;
        nx.spacebox.position.y = 1500

        nx.createAcozmoScope1();
        // nx.removeAcozmoScope1();
        // nx.createStarBurst1();
        // nx.removeStarBurst1();
        // nx.createOrion1();
        // nx.removeOrion1();
        // nx.createPurpleNebula1();
        // nx.removePurpleNebula1();
        // nx.createGalaxy1();
        // nx.removeGalaxy1();
        
        
        nx.camz.freeCam.maxZ = 15000; //todo perf reduce this later
        // nx.scene.activeCamera.position //center black focal
        // Vector3 {x: 1120.8917429339435, y: 3894.637580198742, z: -3696.2958863424215}
        // nx.scene.activeCamera.position //center eye piece
        // Vector3 {x: 1329.779188901316, y: 4105.487010837002, z: -3819.5482822515205}
        
        // Vector3 {x: 76.43460499999992, y: 2840.9965199999997, z: -3081.56778030848}
        
        // Vector3 {x: -1010.0543109615251, y: 2013.3458185390257, z: -2993.825633618921}
        // Vector3 {x: -1231.419234759466, y: 2307.179589467517, z: -2837.505837212271}

        // nx.scene.activeCamera.position; //side of nebula POS
        // Vector3 {x: 772.4405151810807, y: 1572.3445863862307, z: -1759.150430448861}
        // nx.scene.activeCamera.position; //side of nebula FOC
        // Vector3 {x: 697.2126569149015, y: 1586.8887381400948, z: -1785.6924846258428}


        
        // {x: -2510, y: 3963, z: -1500} //before decent
        
        if(false){  //TEST-SCENE--------------------------------------------------------------------------------.
            //todo nx.setScene('1.0'); //convert float to string for unique id-.
            //TEST-CAM-.
            // nx.initFreeCam();
            nx.initFollowCam();


            nx.scene.stopAnimation(nx.orbySkeleton[0])      //---------------------ANM: FREEZE-ORBY-.
            nx.anmz.orby.idle = 1; //FIX: keep orby frozen; //todo removable?


            // nx.scene.activeCamera.position = new BABYLON.Vector3(-104, 171, -10); //START CAM POS - space pos3 FOC side of nebula ADMIN 
            // nx.scene.activeCamera.setTarget(new BABYLON.Vector3(-76, 146, 0));
            // nx.orbyMesh.position.copyFrom({x: -72.19746415151445, y: 126.34751409874244, z: -5.952208006958919})
            // nx.scene.activeCamera.position = new BABYLON.Vector3(-104, 340, -10); //START CAM POS - space pos3 FOC side of nebula ADMIN 
            nx.scene.activeCamera.position = new BABYLON.Vector3(-230, 300, -180); //START CAM POS - space pos3 FOC side of nebula ADMIN 
            // nx.scene.activeCamera.setTarget(new BABYLON.Vector3(-76, 146, 0));
            // nx.orbyMesh.position.copyFrom({x: -72.19746415151445, y:330, z: -5.952208006958919})
            // nx.orbyMesh.position.copyFrom( {x: -200, y: 50, z: -172.94191286506089})
            nx.orbyMesh.position.copyFrom({x:1.5,y:278,z:-6.0})
            // nx.orbyMesh.position.copyFrom( {x: -200, y: 288.0467824665846, z: -172.94191286506089})
            nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);
            // nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.
        
            // nx.scene.activeCamera.position = new BABYLON.Vector3(-2510, 3963, -1500); //START CAM POS - space pos3 FOC side of nebula ADMIN 
            // nx.camz.freeCam.setTarget(new BABYLON.Vector3(-10000, 1586, 0));
            // nx.scene.activeCamera.position = new BABYLON.Vector3(-1010.05, 2013.34, -2993.82); //START CAM POS - space pos2 FOC into nebula PROD
            // nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1231.41, 2307.17, -2837.5));
            // nx.scene.activeCamera.position = new BABYLON.Vector3(1329.77, 4105.48, -3819.54); //START CAM POS - space pos1
            // nx.camz.freeCam.setTarget(new BABYLON.Vector3( 1120.89, 3894.63, -3696.29));
            nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.
            return; //STOPS AT TEST CAMERA
        }

        // debugger;
        
        nx.plateMaster1.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);  //shrink-wurld-.
        // nx.ground.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);  //shrink-wurld-.

        //FROM-ORBY-LOAD*************************
        nx.orbyMesh.position.copyFrom(nx.anmz.orby.rig.originBox.position);
        nx.orbyMesh.rotationQuaternion = null;
        nx.orbyMesh.rotation = new BABYLON.Vector3(0,Math.PI,0); //align-initial-rotation-.
        // nx.orbyMesh.scaling = new BABYLON.Vector3(1*nx.anmz.orby.scale,1*nx.anmz.orby.scale,1*nx.anmz.orby.scale,)
        
        nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //ANIMATED-SURFBOARD-.

        //SparkSystemz
        if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.start();}
        else{ nx.orby.createSparkSystem(); nx.orby.sparks.easybake.start();}
            // nx.orby.sparks.easybake.start(); 
        // }

        //FROM-ORBY-LOAD*************************
        // nx.anmz = initAnmz; //restart-. 

        nx.anmz.orby.jump.fallMode = 0; //FIX: falling before GO
        nx.anmz.orby.move.autofwdSpace = 0; //FIX: falling before GO

        nx.spacepadmaterial.alpha = 0;

        // $('#backingSpan').empty(); //INITcanvasFooter-.
        // $('#canvasFooter').hide(1);
        //TODO if autorun add autoRun
        //TODO - this is weird!!! - should NOT be here-.
        // nx.spaceSeqIdx[0] = {on:1}; 
        // nx.spaceSeqIdx[2] = {on:1};
        //TODO switch back! 
        nx.runCinematicSequence("VortexSequence") //very beginning todo runEpic then runEpic and initEpic and endEpic
        // nx.runCinematicSequence("SpaceSequence") //very beginning todo runEpic then runEpic and initEpic and endEpic

    },runfn:function(){},endfn:function(){}},
    3:{epicID:3,name:'LandingPadSeq',initfn:function(){
        // nx.endSEQ(nx.masterSequence[nx.masterIDX]);
        nx.endSEQ(nx.activeSEQ);
        // nx.masterIDX++;
// debugger;
        // nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.
        // nx.plateMaster1 = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.


        //LANDING PAD SEQUENCE-------------------------------------------------------------------
         nx.initFaceCam() //-------------------------------------------------ANM: FACE-CAM-.
         nx.CAMPOS = nx.BV32({x: -790, y: 1343, z: -1550});

         nx.spacepadmaterial.alpha = 1;

         if(!nx.kiloBotMesh1){ //flexible initializer-.
            debugger; //deprecated? IF zapbot always exists then MASTERMANIFEST IS WORKING, no need for initFn
            nx.botz.loadAssets(function(){
                debugger;
                // nx.botz.initBotz(); //TODO: removable?
            });
        }
         // if(!nx.kiloBotMesh1){nx.botz.loadAssets();}
         // if(!nx.kiloBotMesh1){nx.botz.createBotz(); //change name to initBot;}

         nx.scene.activeCamera.position = nx.CAMPOS; //reusable variable for init positions-.

        nx.cinematicMode=0;//Start new cinematic-.
        nx.landingPadSeqIdx[0] = {on:1}; nx.runCinematicSequence("LandingPadSequence");


    },runfn:function(){},endfn:function(){}},
    5:{epicID:5,name:'DoorSeq',initfn:function(){
        // nx.endSEQ(nx.masterSequence[nx.masterIDX]); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.endSEQ(nx.activeSEQ); //stop prior epic. TODO switch this to nx.currentSEQ
        // nx.masterIDX++;
        nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.


        // nx.ui.flashCanvasMSG({txt:'DarkBot!'});  

        //MOVIE2 DOOR INIT-------------------------------------------------------------------
        nx.cinematicMode=0;//Start new cinematic-. 1 keeps two movies from running-.
        nx.doorSeqIdx[0] = {on:1}; 
        nx.runCinematicSequence("DoorSequence") //HARDLOAD AUTORUN 

    },runfn:function(){},endfn:function(){}},
    6:{epicID:6,name:'CrashSeq',initfn:function(){
        // nx.endSEQ(nx.masterSequence[nx.masterIDX]); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.endSEQ(nx.activeSEQ); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.cinematicMode=0;//Start new cinematic-. 1 keeps two movies from running-.

        nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.



        nx.crashSeqIdx[0] = {on:1}; nx.runCinematicSequence("CrashSequence");

    },runfn:function(){},endfn:function(){}},
    7:{epicID:7,name:'AffirmationSeq',initfn:function(){
        // nx.endSEQ(nx.masterSequence[nx.masterIDX]); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.endSEQ(nx.activeSEQ); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.cinematicMode=0;//Start new cinematic-. 1 keeps two movies from running-.
        nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.


        // nx.crashSeqIdx[0] = {on:1}; nx.runCinematicSequence("AffirmationSequence");
        nx.affirmSeqIdx[0] = {on:1}; nx.runCinematicSequence("AffirmationSequence");


    },runfn:function(){},endfn:function(){}},
    8:{epicID:8,name:'TrainScanSeq',initfn:function(){
        // nx.endSEQ(nx.masterSequence[nx.masterIDX]); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.endSEQ(nx.activeSEQ); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.cinematicMode=0;//Start new cinematic-. 1 keeps two movies from running-.
        nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.


        // nx.finalSeqIdx[0] = {on:1}; nx.runCinematicSequence("FinalSequence"); //COOL PATTERN for FRAME-SET-.
        // nx.finalSeqIdx[6] = {on:1}; //ANMETHODOLOGY: AUTO-START-FRAMESET-.
        // nx.finalSeqIdx[10] = {on:1}; //ANMETHODOLOGY: AUTO-START-FRAMESET-.
        nx.runCinematicSequence("ScanTrainSequence"); //Pattern to start sequence (at zero frame)-.

    },runfn:function(){},endfn:function(){}},
    9:{epicID:9,name:'FinalSeq',initfn:function(){
        // nx.endSEQ(nx.masterSequence[nx.masterIDX]); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.endSEQ(nx.activeSEQ); //stop prior epic. TODO switch this to nx.currentSEQ
        nx.cinematicMode=0;//Start new cinematic-. 1 keeps two movies from running-.
        nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.


        // nx.finalSeqIdx[0] = {on:1}; nx.runCinematicSequence("FinalSequence"); //COOL PATTERN for FRAME-SET-.
        // nx.finalSeqIdx[6] = {on:1}; //ANMETHODOLOGY: AUTO-START-FRAMESET-.
        // nx.finalSeqIdx[10] = {on:1}; //ANMETHODOLOGY: AUTO-START-FRAMESET-.
        nx.runCinematicSequence("FinalSequence"); //Pattern to start sequence (at zero frame)-.

    },runfn:function(){},endfn:function(){}},
// ]
}

//TEMPLATE-EPIC-.
// nx.SEQZ = {
//     0:{epicID:0},
//     1:{epicID:1,name:'A Space Signal!',initfn:function(){
//     8:{epicID:8,name:'FinalSeq',initfn:function(){
//         nx.endSEQ(nx.activeSEQ); //stop prior epic. TODO switch this to nx.currentSEQ
//         nx.cinematicMode=0;//Start new cinematic-. 1 keeps two movies from running-.
//         nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.
//         nx.finalSeqIdx[10] = {on:1}; //ANMETHODOLOGY: AUTO-START-FRAMESET-.
//         nx.runCinematicSequence("FinalSequence"); //COOL PATTERN for FRAME-SET-.
//     },runfn:function(){},endfn:function(){}},
// }


nx.epicIdx =0;
nx.epicStack = [];

export var initEpicz = function(){
    nx.globalScale = 1;//0.01; //anm to make planet zoom in from space-.

/*********************************- CINEMATIC-SEQUENCES and ANIMATION-FRAMES -*****************************/
// nx.setCinemo = function(SEQ){
//     if(!SEQ || !SEQ.id){return}
//     if(!SEQ.start){SEQ.start=0;}
//     nx.resetAllCinematics(); //stop currently running mode, clean up idx.
//     nx.spaceSeqIdx[SEQ.start] = {on:1}; 
//     nx.runCinematicSequence(SEQ.id)
//     // nx.runCinematicSequence("SpaceSequence")
// }
// var seqIdx = [{on:1}]; //DIAGNOSTICS: SHOW WHAT IS PLAYING AT ANY GIVEN TIME!-. ///*seqIdx = 1,*/ 
nx.resetCinemoz = function(){
    //stop currently running mode, clean up idx.
    // nx.introSEQ = [{on:1}]; //DIAGNOSTICS: SHOW WHAT IS PLAYING AT ANY GIVEN TIME!-. ///*nx.spaceSeqIdx = 1,*/ 
    nx.vortexSeqIdx = [{on:1}]; //DIAGNOSTICS: SHOW WHAT IS PLAYING AT ANY GIVEN TIME!-. ///*nx.spaceSeqIdx = 1,*/ 
    nx.spaceSeqIdx = [{on:0}]; //DIAGNOSTICS: SHOW WHAT IS PLAYING AT ANY GIVEN TIME!-. ///*nx.spaceSeqIdx = 1,*/ 
    nx.landingPadSeqIdx = [{on:0}] //anmethodology change to initfn and runfn 
    nx.doorSeqIdx = [{on:0}] //anmethodology
    nx.crashSeqIdx = [{on:1}]; //DIAGNOSTICS: SHOW WHAT IS PLAYING AT ANY GIVEN TIME!-. ///*seqIdx = 1,*/ 
    nx.zapScanSeqIdx = [{on:1}]; //not necessary if call is prepended witn ={on:1} todo remove on calls.
    nx.affirmSeqIdx = [{on:1}]
    nx.scanTrainSeqIdx = [{on:1}]
    nx.finalSeqIdx = [{on:1}] //ANMETHODOLOGY: AUTO-START-ANIMATION-FRAME-CONTROLS-.
    nx.transSeq = [];
    // nx.cinematicMode = 0; //SEQ not running-.
    // nx.cinemaStop = 1; //Stop any currently running SEQs
}
nx.resetCinemoz();

nx.runCinematicSequence = function(seqName){ //LOOPZ
    if(nx.cinematicMode){ return;} //Cinematic is currently running-.one seq at a time-. do not run two sequences ever-.
    //CREATE-VECTORS-HERE-AND-REUSE-NO-NEW-IN_LOOPS-. methodology
    var initCAMPOS, endCAMPOS, iniORBYPOS, endORBYPOS;//, initORBYPOS, initORBYROT; performance, no new memory in ANM or CINEM LOOPS
    // nx.anmCAM = 0; //INIT-. SHOWING FREE CAMERA VIEW-. //todo move to anmscape
    // nx.anmVIS = 1; //INIT-- SHOWING-COLORED LINES-..
    // nx.CAMBOX = BABYLON.MeshBuilder.CreateBox("camBOX", {height: 10, width:10, depth:10 }, nx.scene);
    // nx.CAMTGT = BABYLON.Mesh.CreateSphere("camTGT", 1, 0.5, nx.scene);
    // nx.CAMBOX.material = nx.greenMat;
    // nx.CAMTGT.material = nx.blueMat;
    // nx.cinemaStop=0;debugger;
    // console.log('startasequence...')

    if(seqName==="VortexSequence"){ //runner
        nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as nx.spaceSeqIdx.
            // console.log('vortexsequence...')
            // if(nx.cinemaStop){console.log('vortex sequence stopped'); return;}//CINEMASTOP-.
            if(nx.vortexSeqIdx[0] && nx.vortexSeqIdx[0].on){ var NUM = 0; nx.vortexSeqIdx[NUM].on=0;  //ONE-TIME-RUNTIME-INIT-.

                //CURRENT STARTING POINT
                // nx.scene.activeCamera.position = new BABYLON.Vector3(2000, 4782, -4215); //START CAM POS
                // nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));

                // //NEW STARTING POINT
                // nx.scene.activeCamera.position = new BABYLON.Vector3(2223.58, 4908.3, -4121.98); //START CAM POS
                // nx.camz.freeCam.setTarget(new BABYLON.Vector3( 1425.21, 4102.43, -3650.91));


                // nx.scene.activeCamera.position //center black focal
                // Vector3 {x: 1120.8917429339435, y: 3894.637580198742, z: -3696.2958863424215}
                // nx.scene.activeCamera.position //center eye piece
                // Vector3 {x: 1329.779188901316, y: 4105.487010837002, z: -3819.5482822515205}
                // nx.scene.activeCamera.position //center binoculars
                // Vector3 {x: 1755.6734552251924, y: 4430.057729684613, z: -3832.405566314164}
                // nx.scene.activeCamera.position //focal binoculars
                // Vector3 {x: 1710.0308569429517, y: 4383.986628921013, z: -3805.481219117383}
                // nx.scene.activeCamera.position //starting POS
                // Vector3 {x: 2227.336820744903, y: 4906.149171827865, z: -4110.713791140138}

                // debugger;



                //NEW STARTING POINT
                nx.initFreeCam();
                nx.scene.activeCamera.position = new BABYLON.Vector3(2227.33, 4906.14, -4110.71); //START CAM POS
                nx.camz.freeCam.setTarget(new BABYLON.Vector3( 1710.03, 4383.98, -3805.48));


                nx.camz.freeCam.maxZ = 15000; //todo perf reduce this later, FIX?

                $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). //-------ANM: CAM-ZOOM-TOWARD BINOCULAR-.
                // animate({cx:endCAMPOS.x,cy:endCAMPOS.y,cz:endCAMPOS.z},{queue:false,duration:8000,easing:'swing',
                animate({cx:1755.67,cy:4430.05,cz:-3832.40},{queue:false,duration:4000,easing:'linear',
                    step: function(now) {
                       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                        nx.camz.freeCam.position.x = this.cx;
                        nx.camz.freeCam.position.y = this.cy;
                        nx.camz.freeCam.position.z = this.cz;
                        nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
                    },complete:function(){ 

                        // nx.createAcozmoScope1();
                        // nx.removeAcozmoScope1();
                        nx.createStarBurst1();
                        // nx.removeStarBurst1();
                        nx.createOrion1();
                        // nx.removeOrion1();
                        // nx.createPurpleNebula1();
                        // nx.removePurpleNebula1();
                        // nx.createGalaxy1();
                        // nx.removeGalaxy1();

                        $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). //-------ANM: CAM-ZOOM-TO EYEPIECE-.
                        // animate({cx:endCAMPOS.x,cy:endCAMPOS.y,cz:endCAMPOS.z},{queue:false,duration:8000,easing:'swing',
                        animate({cx:1329.77,cy:4105.48,cz:-3819.54},{queue:false,duration:4000,easing:'linear',
                            step: function(now) {
                               if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-. 
                                nx.camz.freeCam.position.x = this.cx;
                                nx.camz.freeCam.position.y = this.cy;
                                nx.camz.freeCam.position.z = this.cz;
                                nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
                            },complete:function(){ 
        

                                // nx.createAcozmoScope1();
                                // nx.removeAcozmoScope1();
                                // nx.createStarBurst1();
                                // nx.removeStarBurst1();
                                // nx.createOrion1();
                                // nx.removeOrion1();
                                nx.createPurpleNebula1();
                                // nx.removePurpleNebula1();
                                // nx.createGalaxy1();
                                // nx.removeGalaxy1();

        

                                nx.vortexSeqIdx[1] = {on:1}
        
                            }
                        });
        



                    }
                });




            }else if(nx.vortexSeqIdx[1] && nx.vortexSeqIdx[1].on){ var NUM = 1; nx.vortexSeqIdx[NUM].on=0;  //ONE-TIME-RUNTIME-INIT-.

                nx.ui.setMovieModeTXT({title:'',txt:"OrbyOrbot Origin!",type:'movie',clickFn:function(){
                        nx.ui.flashMSGQueue = [];
                        nx.ui.flashMSGPlaying = 0;
                        nx.stopMovie({fadeCurtain:1});
                        nx.initSEQ({epicID:1});            
                }}); 


// debugger;

// $('#canvasFooter').show(1).promise().done(function(){
    // $('#canvasFooter').empty()
// setTimeout(function(){

    // $('<div class="" style="color:white;width:79%;max-width:599px;margin:0 auto;border:1px solid orange;line-height:1em;height:2em;display:flex;align-items:center;justify-content:center;border-radius:10px">A bunch of text so that I can test line wrap...</div>').fadeOut(1).appendTo('#canvasFooter').fadeIn(3000)
// },1)
// })

// $('#canvasFooter').show(1).promise().done(function(){
//     $('<div class="" style="color:white;width:79%;max-width:599px;margin:0 auto;border:1px solid orange;line-height:1em;height:2em;display:flex;align-items:center;justify-content:center;border-radius:10px">AXX bunch of text so that I can test line wrap...</div>').fadeOut(1).appendTo('#canvasFooter').fadeIn(3000)
//   });

        nx.ui.flashCanvasMSG({txt:'Dr.Acozmo!',txtIcon:'drbecky',dur:4000});                 //on first frame   //TODO add with another space zooom anm-.

        nx.ui.flashCanvasMSG({txt:'Yes, Dr.Becky?',txtIcon:'dracozmo',dur:4000,txtAlign:'right'});                 //on first frame   //TODO add with another space zooom anm-.
        // return;

// return;
          nx.ui.setMovieModeTXT({txt:"Dr.Acozmo!",type:'drbecky',align:'left',metaLink:'1.1.1'}); 
          nx.ui.setMovieModeTXT({txt:"Yes, Dr.Becky?",type:'dracozmo',align:'right',metaLink:'1.1.1'}); 



                // nx.ui.flashCanvasMSG({txt:'Yes?'});                 //on first frame   //TODO add with another space zooom anm-.
                // nx.ui.flashCanvasMSG({txt:'We found a signal in space.'});     
                // nx.ui.flashCanvasMSG({txt:'Oh?'});     
                // nx.ui.flashCanvasMSG({txt:'In dimension Zeta'});     
                // nx.ui.flashCanvasMSG({txt:'DIGITIZE'});     
                if(nx.anmDEBUG){debugger;} //todo update to pause logic

                // debugger;
                // nx.ground.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);  //shrink-wurld-.
                nx.plateMaster1.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);  //shrink-wurld-.

                //3D-WEB-ANMETHODOLOGY-.  3DWEBANMZ
                // nx.orbyMesh.position = new BABYLON.Vector3(-2000,3400,-2300); //ANM: INIORBYPOS 
                nx.orbyMesh.position = new BABYLON.Vector3(-4543,3592,-1975); //ANM: INIORBYPOS 
                //TODO: redundant


                nx.orbyMesh.rotationQuaternion = null; //FIX: spinning orby?
                nx.orbyMesh.rotation = new BABYLON.Vector3(-0.5,-2, 0); //ANM: INIORBYROT-.
                nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y;
                nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);



                // nx.scene.activeCamera = nx.camz.freeCam; 
 // nx.scene.activeCamera.position = new BABYLON.Vector3(0, 20000, 0)
 // nx.scene.activeCamera.position = new BABYLON.Vector3(1000, 0, -10000)


 // nx.scene.activeCamera.position = new BABYLON.Vector3(-1000,2000,-3000) //  ORIGINAL START POS
 //  var endCAMPOS = new BABYLON.Vector3(-2454,3930,-1945) // ORIGINAL END POS
 // nx.scene.activeCamera.position = new BABYLON.Vector3(-1000,2000,-3000) //  NEW START POS
 //  var endCAMPOS = new BABYLON.Vector3(-1000,2000,-3000) // NEW END POS

                // nx.camz.freeCam.position = initCAMPOS;
                // nx.camz.freeCam.setTarget(nx.orbyMesh.position); //NEW -FOCUS-TGT - 

                
                // nx.scene.activeCamera = nx.camz.freeCam; 
                // nx.scene.activeCamera.position = new BABYLON.Vector3(2000, 4782, -4215); //START CAM POS
                // nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
                // nx.scene.activeCamera.position = new BABYLON.Vector3(-1,3000,-3000) //START CAM POS
                // nx.camz.freeCam.setTarget(new BABYLON.Vector3(-1,0,-3000));
                // nx.camz.freeCam.setTarget(new BABYLON.Vector3(-1.6502326130867004,2999.344079375267,-2999.616638958454));
                // nx.camz.freeCam.setTarget(new BABYLON.Vector3( -758, 2000, -2588));
                // nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1111, 1642, -2380));
                
                // nx.camz.freeCam.maxZ = 15000; //todo perf reduce this later
                nx.vortexSeqIdx[2] = {on:1}

                // nx.cinemaStop = 1;

            }
            else if(nx.vortexSeqIdx[2] && nx.vortexSeqIdx[2].on){ var NUM=2; nx.vortexSeqIdx[NUM].on=0; 
                if(nx.anmDEBUG){debugger;} //todo switch to step debug animation frame logic )single-frame step debug
                // initCAMPOS = nx.camz.freeCam.position;           //ANM: INICAMPOS
                // var endCAMPOS = new BABYLON.Vector3(-1000,2000,-3000) //ANM: ENDCAMPOS
                var endCAMPOS = new BABYLON.Vector3(-1111,1643,-2380) //ANM: ENDCAMPOS


                // $({cx:initCAMPOS.x,cy:initCAMPOS.y,cz:initCAMPOS.z}). //-------ANM: CAM-ZOOM-THROUGH-STAR-FIELD-.
                $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). //-------ANM: CAM-ZOOM-THROUGH-STAR-FIELD-.
                // animate({cx:endCAMPOS.x,cy:endCAMPOS.y,cz:endCAMPOS.z},{queue:false,duration:8000,easing:'swing',
                animate({cx:endCAMPOS.x,cy:endCAMPOS.y,cz:endCAMPOS.z},{queue:false,duration:20000,easing:'linear',
                    step: function(now) {
                       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                       nx.camz.freeCam.position.x = this.cx;
                       nx.camz.freeCam.position.y = this.cy;
                       nx.camz.freeCam.position.z = this.cz;
                       nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
                    },complete:function(){ 
                        console.log('FREECAMSET - DONE');

                // nx.cinemaStop = 1;

            // return; //stops at bottom VORTEX;


                        // nx.createAcozmoScope1();
                        nx.removeAcozmoScope1();
                        // nx.createStarBurst1();
                        nx.removeStarBurst1();
                        // nx.createOrion1();
                        // nx.removeOrion1();
                        // nx.createPurpleNebula1();
                        // nx.removePurpleNebula1();
                        nx.createGalaxy1();
                        // nx.removeGalaxy1();



                        nx.ui.flashCanvasMSG({txt:'A MESSAGE in SPACE!',txtIcon:'drbecky',dur:4000});  
                        // nx.ui.flashCanvasMSG({txt:'A SIGNAL in SPACE!',txtIcon:'drbecky'});  
                        // nx.ui.flashCanvasMSG({txt:'In Dimension~Z!'});  
          nx.ui.setMovieModeTXT({txt:"A MESSAGE in SPACE!",type:'drbecky',align:'left',metaLink:'1.1.1'}); 
        //   nx.ui.setMovieModeTXT({txt:"A SIGNAL in SPACE!",type:'drbecky',align:'left',metaLink:'1.1.1'}); 
          // nx.ui.setMovieModeTXT({txt:"First SIGNAL in SPACE!",type:'drbecky',align:'left',metaLink:'1.1.1'}); 



                                nx.ui.flashCanvasMSG({txt:'CONNECTING!!!',txtIcon:'dracozmo',txtAlign:'right'});    
                                // nx.ui.flashCanvasMSG({txt:'DIGITIZE!!!',txtIcon:'dracozmo',txtAlign:'right'});    
        //   nx.ui.setMovieModeTXT({txt:"DIGITIZE!!!",type:'dracozmo',align:'right',metaLink:'1.1.1'}); 
          nx.ui.setMovieModeTXT({txt:"CONNECTING!!!",type:'dracozmo',align:'right',metaLink:'1.1.1'}); 
 



//                         $({focx:nx.scene.activeCamera._currentTarget.x,focy:nx.scene.activeCamera._currentTarget.y,focz:nx.scene.activeCamera._currentTarget.z}). //-------ANM: focus on orby
//                         animate({focx:nx.orbyMesh.position.x,focy:nx.orbyMesh.position.y,focz:nx.orbyMesh.position.z},{queue:false,duration:4000,easing:'swing',
//                             step: function(now) {
//                                if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
//                                nx.camz.freeCam.setTarget(new BABYLON.Vector3(this.focx,this.focy,this.focz));
//                             },complete:function(){ 
//                 // nx.cinemaStop = 1;
//                 debugger;

// //23423 orb pos
//  // nx.scene.activeCamera.position = new BABYLON.Vector3(-1000,2000,-3000) //FIX
//                 // nx.camz.freeCam.setTarget(nx.orbyMesh.position);


//                                 nx.ui.flashCanvasMSG({txt:'Digitize!'});    
//                                 //TODO - this is weird!!! - should NOT be here-.
//                                 nx.spaceSeqIdx[0] = {on:1}; 
//                                 nx.spaceSeqIdx[2] = {on:1};
//                                 nx.cinematicMode = 0; 
//                                 //Start-Next-Sequence-.
//                                 nx.runCinematicSequence("SpaceSequence") //very beginning todo runEpic then runEpic and initEpic and endEpic

//                             } //done-. 
//                         });


// $({focx:nx.scene.activeCamera._currentTarget.x,focy:nx.scene.activeCamera._currentTarget.y,focz:nx.scene.activeCamera._currentTarget.z}). //-------ANM: focus on orby
//                         animate({focx:nx.orbyMesh.position.x,focy:nx.orbyMesh.position.y,focz:nx.orbyMesh.position.z}

                        var focalPnt = BABYLON.Mesh.CreateSphere("tgtsphere", 4, 1, nx.scene);
                        focalPnt.visibility = 0;
                        var currTGT =  {x: -3164.4938240202537, y: -435.90834360815273, z: -1165.1680923678448}
                        // $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). //-------ANM: CAM-FROM-STAR-FIELD-TO SIGNAL.
                        $({focx:currTGT.x,focy:currTGT.y,focz:currTGT.z,cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). //-------ANM: CAM-ZOOM-THROUGH-STAR-FIELD-.
                        // $({focx:nx.scene.activeCamera._currentTarget.x,focy:nx.scene.activeCamera._currentTarget.y,focz:nx.scene.activeCamera._currentTarget.z,cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). //-------ANM: CAM-ZOOM-THROUGH-STAR-FIELD-.
                        // animate({cx:-1000,cy:2000,cz:-3000},{queue:false,duration:8000,easing:'swing',
                        // nx.TSTSPHERE.position.copyFrom({x: -2485, y: 3933, z: -1935.04});
                        // animate({focx:-2485,focy:3933,focz:-1934,cx:-1000,cy:2000,cz:-3000},
// Vector3 {x: -2485, y: 3933, z: -1935.048}
// (-1111,1643,-2380) 
                        // animate({focx:-1111,focy:1643,focz:-2350,cx:-1000,cy:2000,cz:-3000},
                        // animate({focx:-2485,focy:3933,focz:-1900,cx:-1000,cy:2000,cz:-3000},
                        animate({focx:-2485,focy:3933,focz:-1935.01,cx:-1000,cy:2000,cz:-3000}, //CAM FOC: top of nebula
                        // animate({focx:-2485,focy:3933,focz:-1800,cx:-1000,cy:2000,cz:-3000},
                        // animate({focx:nx.orbyMesh.position.x,focy:nx.orbyMesh.position.y,focz:nx.orbyMesh.position.z,cx:-1000,cy:2000,cz:-3000},
                            {queue:false,duration:8000,easing:'swing',
                            step: function(now) {
                                console.log('tgt1');
                               if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                                nx.camz.freeCam.position.x = this.cx;
                                nx.camz.freeCam.position.y = this.cy;
                                nx.camz.freeCam.position.z = this.cz;
                                // nx.scene.activeCamera.setTarget(new BABYLON.Vector3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z));
                                focalPnt.position.copyFrom({x:this.focx,y:this.focy,z:this.focz})
                                nx.scene.activeCamera.setTarget(focalPnt.position);
                                // nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
                            },complete:function(){ 
                                console.log('ACTIVECAM set TGT');
                                nx.scene.activeCamera.setTarget(new BABYLON.Vector3(-2485,3933,-1935.01));


                                //  console.log('Ending POS: ',nx.scene.activeCamera.position,nx.scene.activeCamera._currentTarget)


                                //TODO - this is weird!!! - should NOT be here-.
                                nx.spaceSeqIdx[0] = {on:1}; 
                                // nx.spaceSeqIdx[2] = {on:1};
                                nx.cinematicMode = 0; 

                                //TODO  - move this up to EPIC loop-?

                                //Start-Next-Sequence-.
                                nx.runCinematicSequence("SpaceSequence") //very beginning todo runEpic then runEpic and initEpic and endEpic


                            } //done-. 
                        });






                    } //done-. 
                });

            }

        });
    } else if(seqName==="SpaceSequence"){ //runner
    // if(seqName==="SpaceSequence"){ //runner
        nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as nx.spaceSeqIdx.
            // console.log('spacesequence...')
            // if(!nx.cinematicMode){return;}//CINEMASTOP-.
            // if(nx.cinemaStop){console.log('space sequence stopped'); return;}//CINEMASTOP-.
            // console.log('PRE-ANM3: '+nx.orbyMesh.rotation.z)//todo perf - stopthis loop on end moviescene

            if(nx.spaceSeqIdx[0] && nx.spaceSeqIdx[0].on){ nx.spaceSeqIdx[0].on=0; 
                if(nx.anmDEBUG){debugger;} //todo update to pause logic
                
                // debugger;  //BOTTOM: CAM LOOK UP TO NEBULA/GALAXY-.     
                
                // console.log('space0...')
                
                // nx.scene.activeCamera = nx.camz.freeCam;    //INIT-CAMERA-.
                // nx.scene.activeCamera.position = new BABYLON.Vector3(0, 10000, 0)
                // Vector3 {x: 0, y: , z: -1499.3050972200485}

                
                
                
              


                // debugger; STOPS BOTTOM OF nebula.

                // nx.ground.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);  //shrink-wurld-.
                nx.plateMaster1.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);  //shrink-wurld-.

                //3D-WEB-ANMETHODOLOGY-.  WEBANMZ
                // nx.orbyMesh.position = new BABYLON.Vector3(-2000,3400,-2300); //ANM: INIORBYPOS 
                nx.orbyMesh.position = new BABYLON.Vector3(-4543,3592,-1975); //ANM: INIORBYPOS 
                //TODO: redundant


                // debugger;
                nx.orbyMesh.rotationQuaternion = null; //FIX: spinning orby?
                // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(-0.5,-2,0,0);
                nx.orbyMesh.rotation = new BABYLON.Vector3(-0.5,-2, 0); //ANM: INIORBYROT-.


                // debugger;

                //todo rename to slowbakesparks
                // if(nx.orbySparks){nx.orbySparks.start();}
                // if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.start();}
                // else{ nx.orby.createSparkSystem(); }//ONE-TIME-.
                // else{ nx.createOrbySparkBox(); }//ONE-TIME-.

                // nx.createOrbySparkBox(); //sparks.

                nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y;
                // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y;
                nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);
                // console.log('campos1')
                // var startSpaceCamPOS = new BABYLON.Vector3(-2176,4300,-2425); //initCAMPOS1
                // initCAMPOS = new BABYLON.Vector3(-2012,3433,-2306); //ANM: INICAMPOS2
                // nx.scene.activeCamera.lockedTarget = nx.orbyMesh.position;

                // if(nx.anmCAM){ //todo probably remove
                //     if(nx.scene.activeCamera.name!='editcam'){
                //         // console.log('anmeditcam1')
                //         nx.camz.editcam.setTarget(nx.BV3(0, 0, 0));
                //         nx.camz.editcam.position = nx.BV3(-2222,3500,-2222)
                //         nx.scene.activeCamera = nx.camz.editcam;  
                //     }
                //     nx.CAMBOX.parent = nx.camz.freeCam; } //SETCAM
                // else { nx.scene.activeCamera = nx.camz.freeCam; }  //ANM
                // console.log('efreecam1')
                
                
                // initCAMPOS = new BABYLON.Vector3(-2012,3433,-2306); //ANM: INICAMPOS2

                console.log('SPACECAM FREECAM set POS - looking up?');
                nx.scene.activeCamera = nx.camz.freeCam; 
                // nx.scene.activeCamera.position = new BABYLON.Vector3(0, 20000, 0)
                // nx.scene.activeCamera.position = new BABYLON.Vector3(1000, 0, -10000)
                nx.scene.activeCamera.position = new BABYLON.Vector3(-1000,2000,-3000) //CAM: looking up at NEBULA
                // var endCAMPOS = new BABYLON.Vector3(-2454,3930,-1945) //ANM: ENDCAMPOS
                // nx.camz.freeCam.position = initCAMPOS;
                // nx.camz.freeCam.setTarget(nx.orbyMesh.position);
                // nx.camz.freeCam.setTarget({x: -2485, y: 3933, z: -1935.04});
                // nx.camz.freeCam.setTarget(new nx.BV32({x: -2485, y: 3500, z: -1935.04}));
                
                
                // nx.camz.freeCam.maxZ = 15000; //todo perf reduce this later, redundant?
                
                
    
                // nx.ui.flashCanvasMSG({txt:'Dr.Acozmo!'});                 //on first frame   //TODO add with another space zooom anm-.
                
                //ORBY-JITTER-.
                // nx.orbyJitter = -1; //ANMethodology: different types of jitter 0:0ff 1:min 2:med 3:max
                // nx.scene.registerBeforeRender(function jitterLoop() {
                    //     if(nx.orbyJitter>0){anmOrbyJitter();}else if(!nx.orbyJitter){ console.log('PLAYBACK DONE.'); nx.scene.unregisterBeforeRender(jitterLoop); } 
                // });
                // var jitterAlpha = 0; nx.jitterSmooth = 16;
                // function anmOrbyJitter(){
                    //     var jitterVal = (Math.sin(jitterAlpha+=0.05)/nx.jitterSmooth)
                    //     // console.log(jitterVal)
                    //     // nx.orbyMesh.position.z += jitterVal 
                    //     nx.orbyMesh.position.x += jitterVal 
                //     // nx.orbyMesh.position.y += jitterVal 
                // }
                nx.spaceSeqIdx[1]={on:1} //ONE-TIME-RUNTIME-INIT-.
                
            }/*use for sequence config*/
            if(nx.spaceSeqIdx[1] && nx.spaceSeqIdx[1].on){ nx.spaceSeqIdx[1].on=0; 
                if(nx.anmDEBUG){debugger;} //todo switch to step debug animation frame logic )single-frame step debug
                // console.log('start111')
                // nx.orbyMesh.rotation.z = 0;
                // debugger; //PRE-FLICKER-.
                // console.log('space1...')
                // var startCAMPOS = nx.scene.activeCamera.position;
                // initCAMPOS = nx.camz.freeCam.position;           //ANM: INICAMPOS
                initCAMPOS = nx.scene.activeCamera.position;           //ANM: INICAMPOS
                // var endCAMPOS = new BABYLON.Vector3(-2012,3433,-2306)
                // var endCAMPOS = new BABYLON.Vector3(-2485,3900,-1955) //ANM: ENDCAMPOS
                var endCAMPOS = new BABYLON.Vector3(-2454,3930,-1945) //ANM: ENDCAMPOS into nebula
                
                
            // nx.ui.flashCanvasMSG({txt:'...receiving signal...'});                 //on first frame
            // nx.ui.flashCanvasMSG({txt:'Digitize!'});                 //on first frame
            // nx.ui.flashCanvasMSG({txt:'A signal in space!'});                 //on first frame
            // nx.ui.flashCanvasMSG({txt:'...a vibration encoded in photons!'});                 //on first frame

                //  if(nx.anmVIS){ //VISUALIZE-PATH. //todo nx.visPathIdx and createVISPATH()
                //     // nx.VISPATH1 = BABYLON.Mesh.CreateLines('aline', [initCAMPOS,endCAMPOS], nx.scene);
                //     // nx.VISPATH1.color = BABYLON.Color3.Blue();
                //     // nx.createVISPATHEditor([initCAMPOS,endCAMPOS]);   
                // }

                //VISUALIZE-CAMERA. //todo nx.visPathIdx and createVISCAM()
                // nx.VISCAMPOS1 = BABYLON.MeshBuilder.CreateBox("aBox", {height: 1, width:1, depth:1 }, nx.scene);


                // nx.createAcozmoScope1();
                // nx.removeAcozmoScope1();
                // nx.createStarBurst1();
                // nx.removeStarBurst1();
                // nx.createOrion1();
                nx.removeOrion1();
                // nx.createPurpleNebula1();
                // nx.removePurpleNebula1();
                // nx.createGalaxy1();
                // nx.removeGalaxy1();


                if(nx.sonic.sonicBoom1){ nx.sonic.sonicBoom1.play(); }  //SONIC-BOOM-.

        //   debugger; 
                // console.log('PRE CAMPOS');
                $({cx:initCAMPOS.x,cy:initCAMPOS.y,cz:initCAMPOS.z}). //-------ANM: CAM-ZOOM-INTO NEBULA-.
                animate({cx:endCAMPOS.x,cy:endCAMPOS.y,cz:endCAMPOS.z},{queue:false,duration:8000,easing:'swing',
                step: function(now) {
                    // console.log('CAMPOSING');
                    if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                    nx.camz.freeCam.position.x = this.cx;
                    nx.camz.freeCam.position.y = this.cy;
                    nx.camz.freeCam.position.z = this.cz;
                },complete:function(){
                        // console.log('doneCAMPOS');
                        //FREEZE FACE FOCAL
                        var focalPnt = BABYLON.Mesh.CreateSphere("tgtsphere", 4, 1, nx.scene);
                        focalPnt.visibility = 0;
                        var currTGT =  nx.scene.activeCamera.getTarget(); //THIS ZOOMS TO PRE - ORBY ARRIVAL FOC-.
                        console.log('start get tgt',currTGT.x,currTGT.y,currTGT.z);
                        // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                        // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                        $({focx:currTGT.x,focy:currTGT.y,focz:currTGT.z}). //-------ANM: CAM-PAN - look at orby stopping spot-.
                        // animate({focx:-2485,focy:3933,focz:-1935.048}, //orby end POS.
                        // {x: -2485, y: 3933, z: -1935.016842105263}
                        // animate({focx:-2455,focy:3933,focz:-1935.048}, //orby end POS.
                        // animate({focx:-2485,focy:3933,focz:-1935.048}, //orby end POS.
                        animate({focx:-2475,focy:3933,focz:-1935.048}, //orby end POS.
                        // animate({focx:-2642,focy:3907,focz:-1945}, //FOC on orby before end POS.
                            {queue:false,duration:6000,easing:'swing',
                            step: function(now) {

                                console.log('CAMTRACKING');

                               if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                                focalPnt.position.copyFrom({x:this.focx,y:this.focy,z:this.focz})
                                nx.scene.activeCamera.setTarget(focalPnt.position);
                            },complete:function(){ 
                                console.log('DONE CAMTRACKING');
                                // nx.initFaceCam();
                                //FREEZE FACE FOCAL
                                // var focalPnt = BABYLON.Mesh.CreateSphere("tgtsphere", 4, 1, nx.scene);
                                // focalPnt.visibility = 0;
                                // var currTGT =  nx.scene.activeCamera.getTarget();
                                // var nxtTGT = nx.orbyMesh.position;
                                // var focalPnt = new BABYLON.Vector3.Zero();
                                // // console.log(currTGT.x,currTGT.y,currTGT.z,nxtTGT.x,nxtTGT.y,nxtTGT.z);
                                // // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                                // // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                                // $({focx:currTGT.x,focy:currTGT.y,focz:currTGT.z}). //-------ANM: CAM-PAN - look at orby stopping spot-.
                                // // animate({focx:-2485,focy:3933,focz:-1935.048}, //orby end POS.
                                // // {x: -2485, y: 3933, z: -1935.016842105263}
                                // animate({focx:nxtTGT.x,focy:nxtTGT.y,focz:nxtTGT.z}, //orby end POS.
                                //     {queue:false,duration:3000,easing:'swing',
                                //     step: function(now) {
                                //         // console.log('look at orby end');
                                //     if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                                //         focalPnt.copyFrom({x:this.focx,y:this.focy,z:this.focz})
                                //         nx.scene.activeCamera.setTarget(focalPnt);
                                //     },complete:function(){ 
                                //         console.log('DONE freeze face');
                                //         // debugger;
                                //         nx.initFaceCam() //-------------------------------------------------ANM: FACE-CAM-.
                                //         nx.camz.faceCam.heightOffset = -3
                                //         nx.camz.faceCam.rotationOffset = -150
                                //         nx.camz.faceCam.cameraAcceleration = 0.007 //amount cam moves
                                //         nx.camz.faceCam.maxCameraSpeed = 1;  //max accelleration
                                //         nx.spaceSeqIdx[2] = {on:1};
                                //     }
                                // })






                            }
                        });

                     } //done-. 
                });
                
                console.log('start freeze face');
                //SIMULTANEOUS-DELAY-CAM-FOC-ANM-AT-ORBY-END-POS-.
                // setTimeout(function(){
                        // //FREEZE FACE FOCAL
                        // var focalPnt = BABYLON.Mesh.CreateSphere("tgtsphere", 4, 1, nx.scene);
                        // focalPnt.visibility = 0;
                        // var currTGT =  nx.scene.activeCamera.getTarget();
                        // console.log('start get tgt',currTGT.x,currTGT.y,currTGT.z);
                        // // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                        // // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                        // $({focx:currTGT.x,focy:currTGT.y,focz:currTGT.z}). //-------ANM: CAM-PAN - look at orby stopping spot-.
                        // // animate({focx:-2485,focy:3933,focz:-1935.048}, //orby end POS.
                        // // {x: -2485, y: 3933, z: -1935.016842105263}
                        // animate({focx:-2485,focy:3933,focz:-1935.048}, //orby end POS.
                        //     {queue:false,duration:3000,easing:'swing',
                        //     step: function(now) {
                        //         console.log('look at orby end');
                        //        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                        //         focalPnt.position.copyFrom({x:this.focx,y:this.focy,z:this.focz})
                        //         nx.scene.activeCamera.setTarget(focalPnt.position);
                        //     },complete:function(){ 
                        //         console.log('done freeze face');
                        //     }
                        // })
                // },9000);


                //SIMULTANEOUS ANMFRAME
                nx.spaceSeqIdx[2] = {on:1};


            } else if(nx.spaceSeqIdx[2] && nx.spaceSeqIdx[2].on){ nx.spaceSeqIdx[2].on=0;
                if(nx.anmDEBUG){debugger;}
                // console.log('start orby zippp')

                // console.log('space2...')

// nx.orbyMesh.rotation.z = 0;
                iniORBYPOS = nx.BV3(-4543,3592,-1975);
                endORBYPOS = nx.BV3(-2485,3933,-1935);

                // if(nx.anmVIS){
                //     // nx.VISPATH2 = BABYLON.Mesh.CreateLines('aline', [iniORBYPOS,endORBYPOS], nx.scene);
                //     // nx.VISPATH2.color = BABYLON.Color3.Green();  //VISUALIZE-PATH-----------------------------------.
                // } 
               

//TOP FOCUS, bottom end CAM POS
// Vector3 {x: -2485, y: 3933, z: -1935.016842105263}
// nx.scene.activeCamera.position.copyFrom({x: -2485, y: 3933, z: -1935.016842105263})


                    // console.log('start orby pos')
                $({cpx:iniORBYPOS.x,cpy:iniORBYPOS.y,cpz:iniORBYPOS.z}). //------------------------------------------------------ANM: ORBYPOS-.
                animate({cpx:endORBYPOS.x,cpy:endORBYPOS.y,cpz:endORBYPOS.z},{queue:false,duration:13000,easing:'linear',

                // $({cpx:-4543,cpy:3592,cpz:-1975}). //------------------------------------------------------ANM: ORBYPOS-.
                // animate({cpx:-2485,cpy:3933,cpz:-1935},{queue:false,duration:5000,easing:'linear',
                step: function(now) { 
                   if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[2]={on:1}; return;}//CINEMA-STOP-.
                    nx.orbyMesh.position.x = this.cpx;
                    nx.orbyMesh.position.y = this.cpy;
                    nx.orbyMesh.position.z = this.cpz;
                    // console.log('editfrooocam1')
                    // nx.camz.freeCam.setTarget(new BABYLON.Vector3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z));
                }, complete:function(){
                    console.log('end orby space zip')

                    if(nx.cinemaStop){nx.spaceSeqIdx[2]={on:1}; return;}//CINEMA-STOP-.


                        // nx.spaceSeqIdx[3] = {on:1}; //SIGNAL - upper zig zag before moon decent-.
                        
                        if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.stop();}      //TODO probably need fn to TURN OFF ALL SPARKS-.
                        
                        // nx.ui.flashCanvasMSG({txt:"OrbyOrbot!",txtAlign:'hero',txtIcon:'orby',dur:4000});      //on orby freeze
                        nx.ui.flashCanvasMSG({txt:"OrbyOrbot!",txtType:'hero',txtIcon:'orby',dur:4000});      //on orby freeze
                        
                        nx.ui.setMovieModeTXT({txt:"OrbyOrbot!",type:'hero',align:'center'}); 
                        
                        
                        // nx.ui.flashCanvasMSG({txt:'Orby Orbot!'});      //on orby freeze
                            
                            //FREEZE FACE FOCAL
                            var focalPnt = BABYLON.Mesh.CreateSphere("tgtsphere", 4, 1, nx.scene);
                            focalPnt.visibility = 1;
                            var currTGT =  nx.scene.activeCamera.getTarget();
                            var nxtTGT = nx.orbyMesh.position;
                            var focalPnt = new BABYLON.Vector3.Zero();
                            // console.log(currTGT.x,currTGT.y,currTGT.z,nxtTGT.x,nxtTGT.y,nxtTGT.z);
                            // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                            // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                            $({focx:currTGT.x,focy:currTGT.y,focz:currTGT.z}). //-------ANM: CAM-PAN - look at orby stopping spot-.
                            // animate({focx:-2485,focy:3933,focz:-1935.048}, //orby end POS.
                            // {x: -2485, y: 3933, z: -1935.016842105263}
                            animate({focx:nxtTGT.x,focy:nxtTGT.y,focz:nxtTGT.z}, //orby end POS.
                                {queue:false,duration:2000,easing:'swing',
                                step: function(now) {
                                    // console.log('look at orby end');
                                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                                        focalPnt.copyFrom({x:this.focx,y:this.focy,z:this.focz})
                                        nx.scene.activeCamera.setTarget(focalPnt);
                                    },complete:function(){ 
                                    console.log('DONE freeze face');
                                    nx.spaceSeqIdx[3] = {on:1}; //SIGNAL - upper zig zag before moon decent-.
                                    // debugger;
                                    // nx.initFaceCam() //-------------------------------------------------ANM: FACE-CAM-.
                                    // nx.camz.faceCam.heightOffset = -3
                                    // nx.camz.faceCam.rotationOffset = -150
                                    // nx.camz.faceCam.cameraAcceleration = 0.007 //amount cam moves
                                    //     nx.camz.faceCam.maxCameraSpeed = 1;  //max accelleration
                                    //     // nx.spaceSeqIdx[2] = {on:1};
                                    }
                                })





                    // },5000)
                    } //NEXT-SUB-SEQUENCE-. 
                });
                // $({cpx:0,cpy:0,cpz:-1000}). //------------------------------------------------------ANM: SPACEBOX-NEBULA-POS-.
                // animate({cpx:-2000,cpy:3000,cpz:-1000},{queue:false,duration:5000,easing:'linear',
                // step: function(now) { 
                //     nx.spacebox.position.z = this.cpz;//-1000; //TOANM -3000//TODO set back to 0-.
                //     nx.spacebox.position.x = this.cpx;//0; //TOANM -3000   //TODO set back to 0-.
                //     nx.spacebox.position.y = this.cpy;//0; //TOANM -3000   //TODO set back to 0-.
                // }, complete:function(){
                //     console.log('end2')
                //      /*nx.spaceSeqIdx[1].initAnm = 0;*/ 
                //     } //NEXT-SUB-SEQUENCE-. 
                // });

// 3DANM-Methodology-.
// CAM4P
// CAMOM
// CAMTGT
// RUNTIME ANM EDIT MODE

            } else if(nx.spaceSeqIdx[3] && nx.spaceSeqIdx[3].on){  nx.spaceSeqIdx[3].on=0 
                if(nx.anmDEBUG){debugger;}
                if(nx.cinemaStop){nx.spaceSeqIdx[3]={on:1};return;}//CINEMA-STOP-.
                // console.log('start3') //ANM: ---------------------------------------------FREEZE-FRAME-.
                // nx.orbyJitter = 0; //stop jitter-.
                // console.log('space3...')
                // debugger;
                
                
                // console.log('FACECAMJANK: '+nx.orbyMesh.rotation.z)
                //TODO: is this the CAM JANKFIX?
// debugger;

                        // //FREEZE FACE FOCAL
                        // // var focalPnt = BABYLON.Mesh.CreateSphere("tgtsphere", 4, 1, nx.scene);
                        // // focalPnt.visibility = 0;
                        // var currTGT =  nx.scene.activeCamera.getTarget();
                        // var nxtTGT = nx.orbyMesh.position;
                        // var focalPnt = new BABYLON.Vector3.Zero();
                        // console.log(currTGT.x,currTGT.y,currTGT.z,nxtTGT.x,nxtTGT.y,nxtTGT.z);
                        // // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                        // // var currTGT = {x: -2454, y: 3930, z: -1945.0008034282407};
                        // $({focx:currTGT.x,focy:currTGT.y,focz:currTGT.z}). //-------ANM: CAM-PAN - look at orby stopping spot-.
                        // // animate({focx:-2485,focy:3933,focz:-1935.048}, //orby end POS.
                        // // {x: -2485, y: 3933, z: -1935.016842105263}
                        // animate({focx:nxtTGT.x,focy:nxtTGT.y,focz:nxtTGT.z}, //orby end POS.
                        //     {queue:false,duration:1000,easing:'swing',
                        //     step: function(now) {
                        //         // console.log('look at orby end');
                        //        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                        //         focalPnt.copyFrom({x:this.focx,y:this.focy,z:this.focz})
                        //         nx.scene.activeCamera.setTarget(focalPnt);
                        //     },complete:function(){ 
                        //         console.log('DONE freeze face');
                        //         // debugger;
                        //         nx.initFaceCam() //-------------------------------------------------ANM: FACE-CAM-.
                        //         nx.camz.faceCam.heightOffset = -3
                        //         nx.camz.faceCam.rotationOffset = -150
                        //         nx.camz.faceCam.cameraAcceleration = 0.001 //amount cam moves
                        //         nx.camz.faceCam.maxCameraSpeed = 0.04;  //max accelleration
                        //     }
                        // })






                // nx.initFaceCam() //-------------------------------------------------ANM: FACE-CAM-.
                // if(nx.anmCAM){nx.CAMBOX.parent = nx.camz.faceCam;
                //     // console.log('editcamoa1')
                //     nx.scene.activeCamera = nx.camz.editcam;  
                // } //todo lower case C or uppercase or CAM
// nx.orbyMesh.rotation.z =0;
                // nx.camz.faceCam.heightOffset = -3
                // nx.camz.faceCam.rotationOffset = -150
                nx.scene.stopAnimation(nx.orbySkeleton[0])      //---------------------ANM: FREEZE-ORBY-.
                setTimeout(function(){
                    if(nx.cinemaStop){nx.spaceSeqIdx[3]={on:1};return;}//CINEMA-STOP-.
                    //TODO FREEZEFOCUS - EYEball look -FALL-. ZOOM-OUT-.
                    //TODO TILE ANIMATION
                    // setTimeout(function(){ seqIdx[6] = {on:1} }, 1000);
                    nx.spaceSeqIdx[4] = {on:1}
                    // console.log('end3')
                    // nx.cinematicMode = 0; //END-SEQUENCE-AND-PLAYBACK-.
                },3000)
                //     } //NEXT-SUB-SEQUENCE-. 
                // });
            }
            if(nx.spaceSeqIdx[4] && nx.spaceSeqIdx[4].on){ nx.spaceSeqIdx[4].on=0;
                // if(nx.anmDEBUG){debugger;} //todo deprecate this
                if(nx.cinemaStop){nx.spaceSeqIdx[4]={on:1};return;}//CINEMA-STOP-.
                    // console.log('start4')
                    // console.log('space4...')
                // var startCAMPOS = new BABYLON.Vector3(nx.scene.activeCamera.position.x,nx.scene.activeCamera.position.y,nx.scene.activeCamera.position.z); 
                // var endCAMPOS = new BABYLON.Vector3(-2012,3433,-2306)
                nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //---------------ANM-ORBY-.
                // if(nx.orbySparks){nx.orbySparks.start();} //start after title screen
                if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.start();} //start after title screen

                console.log('start follow cam');
                setTimeout(function(){
                    nx.initFollowCam();
                    nx.camz.followCam.cameraAcceleration = 0.005;
                    nx.camz.followCam.heightOffset = 30;
                    nx.camz.followCam.radius = 10;
                },100);



                // if(nx.anmCAM){ //todo deprecate this
                //     console.log('editcamdfs1')
                //     nx.CAMBOX.parent = nx.camz.followCam;
                //     nx.scene.activeCamera = nx.camz.editcam;  
                // } //todo lower case C or uppercase on others


                // nx.camz.freeCam.position = startCAMPOS; 
                // nx.scene.activeCamera = nx.camz.freeCam; //SET-FREECAM-.
                // nx.scene.activeCamera.lockedTarget = nx.orbyMesh.position;
                // nx.camz.followCam.position = startCAMPOS; 
                // nx.scene.activeCamera = nx.camz.followCam; //SET-FOLLOWCAM-.
                // nx.scene.activeCamera.setTarget(nx.orbyMesh.position);

                iniORBYPOS = nx.orbyMesh.position;
                // endORBYPOS = {x:-1965,y:3933,z:-1933}; //perf, vector3 new not needed-.
                endORBYPOS = {x:-2500,y:3933,z:-1500}; //perf, vector3 new not needed-.

                // if(nx.anmVIS){
                //     // nx.VISPATH3 = BABYLON.Mesh.CreateLines('aline', [iniORBYPOS,endORBYPOS], nx.scene);
                //     // nx.VISPATH3.color = BABYLON.Color3.Purple();  //VISUALIZE-PATH-----------------------------------.
                // }

            // nx.ui.flashCanvasMSG({txt:'Riding gravity waves.'});             //on orby resume
            nx.ui.flashCanvasMSG({txt:'On a MICROWAVE SpaceBoard!?!',txtIcon:'dracozmo',txtAlign:'right'});             //on orby resume
            // nx.ui.flashCanvasMSG({txt:'He Gravitates by MICROWAVE!',txtIcon:'dracozmo',txtAlign:'right'});             //on orby resume
            // nx.ui.flashCanvasMSG({txt:'He gravitates to AlphaMoon',txtIcon:'dracozmo',txtAlign:'right'});             //on orby resume

          nx.ui.setMovieModeTXT({txt:"A MICROWAVE SpaceBoard!",type:'narrator'}); 
        //   nx.ui.setMovieModeTXT({txt:"He Gravitates by MICROWAVE!",type:'narrator'}); 
        //   nx.ui.setMovieModeTXT({txt:"He gravitates to AlphaMoon",type:'narrator'}); 


            // nx.ui.flashCanvasMSG({txt:'Gravity boarding space'});             //on orby resume
            // nx.ui.flashCanvasMSG({txt:'Shot from a Space~Cannon by Commander Zawd.'});             //on orby resume

            // console.log('PRE-TURN: '+nx.orbyMesh.rotation.z)
                        // nx.orbyJitter = 1; //start jitter-.
                    console.log('start Orby POS 2')
                $({rotz:0}). //------------------------------------------------------ANM: ORBYPOS-.
                animate({rotz:-0.5},{queue:false,duration:2000,easing:'linear',
                step: function(now) { 
                   if(nx.cinemaStop){ $(this).stop(); console.log('stopped');nx.spaceSeqIdx[4]={on:1}; return;}//CINEMA-STOP-.
                    nx.orbyMesh.rotation.z = this.rotz;
                    // nx.orbyMesh.rotationQuaternion.z = this.rotz;
                }, complete:function(){
                    console.log('end Orby POS 2')



            // nx.ui.flashCanvasMSG({txt:"Orby's SpaceQuest!",txtIcon:'drbecky',dur:3000});                      //On cut back 1
            nx.ui.flashCanvasMSG({txt:"A SpaceQuest to AlphaMoon!",txtIcon:'drbecky',dur:3000});                      //On cut back 1
            // nx.ui.flashCanvasMSG({txt:"On a SpaceQuest!",txtIcon:'drbecky',dur:3000});                      //On cut back 1
            // nx.ui.flashCanvasMSG({txt:'On a MISSION!',dur:3000});                      //On cut back 1



            
        //   nx.ui.setMovieModeTXT({txt:"Orby's SpaceQuest!",type:'book'}); 
        //                 //TODO: AUTO-LINK to Quest-.
                } //NEXT-SUB-SEQUENCE-. 
             });



                //ANM-METHODOLOGY - 4-WAY-ANM! POS,ROT,CAMTGT, WORLDZOOM-.
                // $({rotx:0, px:iniORBYPOS.x, py:iniORBYPOS.y, pz:iniORBYPOS.z}). //--------------------------------------------------ANM: ORBYPOSROT (PATH?)
                    console.log('start orby rot1')
                $({rotx:-0.5, px:iniORBYPOS.x, py:iniORBYPOS.y, pz:iniORBYPOS.z}). //--------------------------------------------------ANM: ORBYPOSROT (PATH?)
                animate({rotx:-1, px:endORBYPOS.x, py:endORBYPOS.y, pz:endORBYPOS.z},{queue:false,duration:5000,easing:'swing',
                step: function(now) {
                   if(nx.cinemaStop){ $(this).stop(); console.log('stopped');nx.spaceSeqIdx[4]={on:1}; return;}//CINEMA-STOP-.
                    nx.orbyMesh.position.x = this.px;
                    nx.orbyMesh.position.y = this.py;
                    nx.orbyMesh.position.z = this.pz;
                    nx.orbyMesh.rotation.x = this.rotx; 
                    // nx.orbyMesh.rotationQuaternion.x = this.rotx; 
// console.log('editcamsdfs1')
                    // nx.camz.followCam.setTarget(new BABYLON.Vector3(nx.orbyMesh.position.x,3400,nx.orbyMesh.position.z));
                }, complete:function(){
                    console.log('end orby rot1')
                        if(nx.cinemaStop){nx.spaceSeqIdx[4]={on:1};return;}//CINEMA-STOP-.
                        if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.stop();} //stop at end of turn-.
                        nx.spaceSeqIdx[5] = {on:1}; //ANM: SIM  simultaneous methodology-.
                    } //NEXT-SUB-SEQUENCE-. 
                });

            } 
            if(nx.spaceSeqIdx[5] && nx.spaceSeqIdx[5].on){ nx.spaceSeqIdx[5].on=0; 
                // console.log('start5')
                if(nx.cinemaStop){nx.spaceSeqIdx[5]={on:1};return;}//CINEMA-STOP-.
                    // console.log('space5...')
// debugger;
// nx.ui.flashCanvasMSG({txt:'...scan the Space~Train~Crash and...'});         //on cut back 2    


// nx.ui.flashCanvasMSG({txt:'Land on AlphaMoon!',persist:true});         //on cut back 2    
// nx.ui.flashCanvasMSG({txt:'Find the Space Train Crash!',persist:true});         //on cut back 2    
// nx.ui.flashCanvasMSG({txt:'"Find SpaceTrain Crash"',txtIcon:'azod'});         //on cut back 2    
nx.ui.flashCanvasMSG({txt:'"Find the SpaceTrain CRASH..."',txtIcon:'azod'});         //on cut back 2    

nx.ui.setMovieModeTXT({txt:"Find the SpaceTrain CRASH and",type:'azod',align:'center'}); 
// nx.ui.setMovieModeTXT({txt:"Find the Space Train Crash!",type:'azod',align:'center'}); 

          // nx.ui.setMovieModeTXT({title:'Mission 1',txt:"Land on AlphaMoon",type:'mission',align:'center'}); 



// nx.ui.flashCanvasMSG({txt:'...find SpaceTrain Crash and...'});         //on cut back 2    
// nx.ui.flashCanvasMSG({txt:'...find a Space~Train~Crash and...'});         //on cut back 2    
// nx.ui.flashCanvasMSG({txt:'...find Space~Train wreck, and...'});         //on cut back 2    

                $({rotz:-0.5}). //------------------------------------------------------ANM: ORBYPOS-.
                animate({rotz:0.75},{queue:false,duration:2000,easing:'linear',
                step: function(now) { 
                   if(nx.cinemaStop){ $(this).stop(); nx.spaceSeqIdx[5]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                    nx.orbyMesh.rotation.z = this.rotz;
                    // nx.orbyMesh.rotationQuaternion.z = this.rotz;
                }, complete:function(){
                    // console.log('end51')

                    nx.spaceSeqIdx[6] = {on:1}; //ANM: SIM  simultaneous methodology-.
                    $({rotz:0.75}). //------------------------------------------------------ANM: ORBYPOS-.
                    animate({rotz:-0.35},{queue:false,duration:2000,easing:'linear',
                    step: function(now) { 
                       if(nx.cinemaStop){ $(this).stop(); nx.spaceSeqIdx[5]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.rotation.z = this.rotz;
                        // nx.orbyMesh.rotationQuaternion.z = this.rotz;
                    }, complete:function(){
                        // console.log('end52')


                 $({rotz:-0.35}). //------------------------------------------------------ANM: ORBYPOS-.
                    animate({rotz:0.35},{queue:false,duration:2000,easing:'linear',
                    step: function(now) { 
                       if(nx.cinemaStop){ $(this).stop(); nx.spaceSeqIdx[5]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.rotation.z = this.rotz;
                        // nx.orbyMesh.rotationQuaternion.z = this.rotz;
                    }, complete:function(){
                        // console.log('end8')
                        nx.camz.followCam.cameraAcceleration = 0.01;


                        nx.ui.flashCanvasMSG({txt:'CONNECTED 100%!',txtIcon:'dracozmo',txtAlign:'right',dur:2000});

                        nx.ui.flashCanvasMSG({txt:'Chapter 1: Land on AlphaMoon!',type:'chapter',dur:2000,txtInit:function(){  }}); 

// nx.ui.flashCanvasMSG({txt:'Find SpaceTrain Crash'});         //on cut back 2


// nx.ui.flashCanvasMSG({txt:'2) Any survivors?'});         //on cut back 2    
// nx.ui.flashCanvasMSG({txt:'"and report back to me."',txtIcon:'azod'});         //on cut back 2    
// nx.ui.flashCanvasMSG({txt:'"and Save AlphaMoon!"',txtIcon:'azod'});         //on cut back 2    
// nx.ui.setMovieModeTXT({txt:"and report back to me.",type:'quest'});  //TODO: WORKING QUEST ITEM NEEDS TO USE MAP AND GLOBE AND OTHER ICONS.
          // nx.ui.setMovieModeTXT({txt:"Save AlphaMoon!",type:'quest'});  //TODO: WORKING QUEST ITEM NEEDS TO USE MAP AND GLOBE AND OTHER ICONS.




                         setTimeout(function(){
                                $({rotz:0.35}). //------------------------------------------------------ANM: ORBYPOS-.
                                animate({rotz:0},{queue:false,duration:2000,easing:'linear',
                                step: function(now) { 
                                   if(nx.cinemaStop){ $(this).stop(); nx.spaceSeqIdx[5]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                                    nx.orbyMesh.rotation.z = this.rotz;
                                    // nx.orbyMesh.rotationQuaternion.z = this.rotz;
                                }, complete:function(){
                                    setTimeout(function(){
                                        // console.log('end8')
                                            $({roty:-2}). //------------------------------------------------------ANM: ORBYPOS-.
                                            animate({roty:-1.5},{queue:false,duration:2000,easing:'linear',
                                            step: function(now) { 
                                               if(nx.cinemaStop){ $(this).stop();nx.spaceSeqIdx[5]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                                                // nx.orbyMesh.rotationQuaternion.y = this.roty;
                                                nx.orbyMesh.rotation.y = this.roty;
                                            }, complete:function(){
                                                // console.log('end8')

                                                } //NEXT-SUB-SEQUENCE-. 
                                            });  

                                    },1000)
                                        } //NEXT-SUB-SEQUENCE-. 
                                });  
                            },1000)
                            } //NEXT-SUB-SEQUENCE-. 
                        }); 
                        } //NEXT-SUB-SEQUENCE-. 
                    });
                    } //NEXT-SUB-SEQUENCE-. 
                });

            }
            if(nx.spaceSeqIdx[6] && nx.spaceSeqIdx[6].on){ nx.spaceSeqIdx[6].on=0; 
                if(nx.anmDEBUG){debugger;}
                if(nx.cinemaStop){nx.spaceSeqIdx[6]={on:1}; return;}//CINEMA-STOP-.
                // console.log('start5')
                    // console.log('space6...')
                // nx.initFollowCam();

// debugger; stops top of spacegemz


                var local_scale = 0;
                $({gscale:0.01}). //--------------------------------------------ANM: WORLD-SCALING-. 
                animate({gscale:1},{queue:false,duration:10000,easing:'linear',
                step: function(now) { 
                   if(nx.cinemaStop){ $(this).stop(); nx.spaceSeqIdx[6]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                    local_scale = this.gscale;
                    //TODO fix zoom in
                    // nx.landPad.scaling = new BABYLON.Vector3(local_scale, local_scale, local_scale);
                    // nx.ground.scaling = new BABYLON.Vector3(local_scale, local_scale, local_scale);
                    nx.plateMaster1.scaling = new BABYLON.Vector3(local_scale, local_scale, local_scale);
                    // nx.plateMaster1.scaling.copyFrom({x:1,y:1,z:1});

                }, complete:function(){                     // } //NEXT-SUB-SEQUENCE-. 
                    // debugger;
                    nx.spaceSeqIdx[7] = {on:1}
                    }
                });  
            }
            if(nx.spaceSeqIdx[7] && nx.spaceSeqIdx[7].on){ nx.spaceSeqIdx[7].on=0;

                if(nx.cinemaStop){nx.spaceSeqIdx[7]={on:1};return;}//CINEMA-STOP-.

                //- FROZEN -INTERMISSION - BEGINNING OF GAME-.

                nx.removeGalaxy1();

                // nx.ui.flashCanvasMSG({txt:'CONNECTED 100%!',txtIcon:'dracozmo',txtAlign:'right',dur:2000});

                // nx.ui.flashCanvasMSG({txt:'Chapter 1: Land on AlphaMoon!',dur:2000,txtInit:function(){  }}); 
// debugger;
                if(nx.cinemaPlayAll){ //PLAY ALL BUTTON-. Go to next Movie-.
                    nx.initSEQ({epicID:3}); /*landingseq*/ 
                }else{
                    nx.ui.flashCanvasMSG({txtIcon:'drbecky',persist:true,
                    txtInit:function(){
                        setTimeout(function(){ nx.ui.showMovieModeView() }, 1); //detach from render loop-.
                    }, btns:{
                        movieFn:function(){ nx.initSEQ({epicID:3}); /*landingseq*/ },
                        gameFn: function(){
                            nx.gameInit({gameID:2});
                            nx.gameRun({gameID:2});
                            //  nx.gameInit({gameID:2}); /*spacegems*/ 
                        },
                        bookFn: function(){ /*todo autolink to quests*/ }
                    }
                    });
                }
                
                
                nx.ui.setMovieModeTXT({txt:"ZapBot Showdown!",type:'movie',clickfn:function(){
                    nx.initSEQ({epicID:3}); //softload Landing Seq! //softload LandingPad Showdown!
                    // nx.gameInit({gameID:4}); //softload GO Showdown!
                    $('#canvasFooter').hide();
                }}); 
                
                nx.ui.setMovieModeTXT({txt:"Collect SpaceGemz!",type:'game',clickfn:function(){
                  nx.gameInit({gameID:2});  //load game on epic list hardload btn click
                  $('#canvasFooter').hide();
                }}); 

                nx.ui.setMovieModeTXT({txt:"Orby's SpaceQuest!",type:'book',clickfn:function(){
                    //todo auto link to book
                }});


            }
            // if(nx.spaceSeqIdx[8] && nx.spaceSeqIdx[8].on){ 

                // need double check this
            //     if(nx.orbyMesh.position.z>-400){
            //         nx.spaceSeqIdx[8].on=0;


                // }
            // }
        });



    //TODO - pull these if statements out to EPICFN in anm script - callback or look up


    } else if(seqName==="LandingPadSequence"){ //-----------------------------------------------------------------------------LANDINGPAD-SEQUENCE---.
        // debugger;
        nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as SEQIDX.
            // console.log('landingpadsequence...')

            // if(!nx.kiloBotMesh1 || !nx.orbyMesh){ return; } //LOAD-MANIFEST: No mesh, wait for asynchronous load to start-.


            if(nx.landingPadSeqIdx[0] && nx.landingPadSeqIdx[0].on){ nx.landingPadSeqIdx[0].on=0; 
                    if(nx.cinemaStop){nx.landingPadSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.

                    //PLACE ZAPBOT 1

                        nx.kiloBotMesh1.position.copyFrom({x: -666, y: 1274, z: -1530});
                        // nx.kiloBotMesh1.rotation.x = 0.2;
                        nx.kiloBotMesh1.rotation.x = 0.55
                                                nx.kiloBotMesh1.rotation.y = 1.9;


                        nx.zapBotGlow = new BABYLON.HighlightLayer('zapbotGlow', nx.scene);
                        nx.zapBotGlow.addMesh(nx.kiloBotMesh1, new BABYLON.Color3(0.155,0,0));


                        nx.kiloBotMesh1.searching = 0;
                        // nx.zapBotGlow.addMesh(nx.kiloBotMesh1, BABYLON.Color3.Blue());

                        // nx.zapBotMesh2.position.copyFrom({x: -666, y: 1274, z: -1530});
                        // nx.zapBotMesh2.rotation.x = 0.2;
                        // nx.zapBotMesh2.rotation.y = 2;


                        //ADD ZAPBOT-POSITION-.
                        var posZapBotPod1 = function(){
                            nx.zapbotMesh2.position.copyFrom({x:172,y:980,z:-1395}); //PLACE ZAPBOT
                            nx.zapbotMesh2.rotationQuaternion = null;
                            nx.zapbotMesh2.rotation.x = 0.2;
                            nx.zapbotMesh2.rotation.y = 0.17;
                        }
                        //RESET-SEARCHING-STATE-.
                        // if(!nx.zapbotMesh2.searching){
                        //     console.log('search2 on')
                        //     nx.zapbotMesh2.searching = 1;
                        // } //init new laser on 1. //start scanning-.
                        // if(nx.zapbotMesh2.chasing>0){ 
                        //     nx.zapbotMesh2.chasing=0
                        //     setTimeout(function(){
                        //         posZapBotPod1(); //delay needed to position zapbot after done chasing-.
                        //     },1000)
                        // } else {
                                posZapBotPod1();
                        // }


                // $({x: -666, y: 1274, z: -1530}). //--------------------------------------------ANM: ZAPBOT POS
                // animate({x: -700, y: 1288, z: -1514},{queue:false,duration:2000,easing:'linear',
                // step: function(now) { 
                //    if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                //    nx.zapBotMesh2.position.copyFrom({x:this.x,y:this.y,z:this.z})
                // }, complete:function(){ }
                // }); 




                //INITIALIZE-SEQUENCE-
                // nx.orbyMesh.position.copyFrom({x: 302.3481750488281, y: 320.0316091078848, z: -368.6502685546875})
                // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(0,-0.8,0,-0.5);
                // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y;
                // nx.ui.showMovieModeView();

                // nx.camz.freeCam.position.copyFrom({x: 1.1078729504925633, y: 228.92358345159658, z: 71.78831572314027})
                // nx.camz.freeCam.setTarget(nx.orbyMesh.position);
                // nx.camz.freeCam.setTarget(new nx.BV3.Zero())
                // nx.camz.freeCam.maxZ = 8000; //15 to 8?
                // nx.scene.activeCamera = nx.camz.freeCam;
                //SET-WORLD-SCALE-.
                // nx.landPad.scaling = new BABYLON.Vector3(1, 1, 1);
                // nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);
                //TODO: SET-SKYBOX-.
                // nx.spacebox.position.x = 0
                // nx.spacebox.position.y = 0
                // nx.spacebox.position.z = 0
                nx.landingPadSeqIdx[1] = {on:1} 
            }/*use for sequence config*/
            if(nx.landingPadSeqIdx[1] && nx.landingPadSeqIdx[1].on){ //ANM-COMPLEX:MECHANISM-TO-PLAY-MULTIPLE-ANIMATIONS-CONCURRENTLY-. 
                if(!nx.landingPadSeqIdx[1].initSeq){ nx.landingPadSeqIdx[1].initSeq=1; //one time init
                    if(nx.cinemaStop){nx.landingPadSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                    nx.landingPadSeqIdx[1].movepath = [{"pos":{"x":-803.65,"y":1334.5,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-803.05,"y":1334.18,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-802.45,"y":1333.86,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-801.85,"y":1333.55,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-801.25,"y":1333.23,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-800.65,"y":1332.92,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-800.05,"y":1332.6,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-799.45,"y":1332.28,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-798.85,"y":1331.97,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-798.25,"y":1331.65,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-797.65,"y":1331.34,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-797.05,"y":1331.02,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-796.45,"y":1330.7,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-795.85,"y":1330.39,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-795.25,"y":1330.07,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-794.65,"y":1329.76,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-794.05,"y":1329.44,"z":-1500},"rot":{"x":-0.17,"y":-0.69,"z":-0.17,"w":0.69}},{"pos":{"x":-793.45,"y":1329.12,"z":-1500},"rot":{"x":-0.16,"y":-0.69,"z":-0.16,"w":0.69}},{"pos":{"x":-792.85,"y":1328.81,"z":-1500},"rot":{"x":-0.16,"y":-0.69,"z":-0.16,"w":0.69}},{"pos":{"x":-792.25,"y":1328.49,"z":-1500},"rot":{"x":-0.15,"y":-0.69,"z":-0.15,"w":0.69}},{"pos":{"x":-791.65,"y":1328.18,"z":-1500},"rot":{"x":-0.14,"y":-0.69,"z":-0.14,"w":0.69}},{"pos":{"x":-791.05,"y":1327.86,"z":-1500},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-790.45,"y":1327.54,"z":-1500},"rot":{"x":-0.12,"y":-0.7,"z":-0.12,"w":0.7}},{"pos":{"x":-789.85,"y":1327.26,"z":-1500},"rot":{"x":-0.11,"y":-0.7,"z":-0.11,"w":0.7}},{"pos":{"x":-789.25,"y":1327.07,"z":-1500},"rot":{"x":-0.11,"y":-0.7,"z":-0.11,"w":0.7}},{"pos":{"x":-788.65,"y":1326.87,"z":-1500},"rot":{"x":-0.11,"y":-0.7,"z":-0.11,"w":0.7}},{"pos":{"x":-788.05,"y":1326.67,"z":-1500},"rot":{"x":-0.11,"y":-0.7,"z":-0.11,"w":0.7}},{"pos":{"x":-787.45,"y":1326.48,"z":-1500},"rot":{"x":-0.11,"y":-0.7,"z":-0.11,"w":0.7}},{"pos":{"x":-786.85,"y":1326.28,"z":-1500},"rot":{"x":-0.11,"y":-0.7,"z":-0.11,"w":0.7}},{"pos":{"x":-786.25,"y":1326.08,"z":-1500},"rot":{"x":-0.11,"y":-0.7,"z":-0.11,"w":0.7}},{"pos":{"x":-785.65,"y":1325.89,"z":-1500},"rot":{"x":-0.11,"y":-0.7,"z":-0.11,"w":0.7}},{"pos":{"x":-785.05,"y":1325.69,"z":-1500},"rot":{"x":-0.12,"y":-0.7,"z":-0.12,"w":0.7}},{"pos":{"x":-784.45,"y":1325.49,"z":-1500},"rot":{"x":-0.12,"y":-0.7,"z":-0.12,"w":0.7}},{"pos":{"x":-783.85,"y":1325.3,"z":-1500},"rot":{"x":-0.13,"y":-0.7,"z":-0.13,"w":0.7}},{"pos":{"x":-783.25,"y":1325.1,"z":-1500},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-782.65,"y":1324.87,"z":-1500},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-782.05,"y":1324.63,"z":-1500},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-781.45,"y":1324.39,"z":-1500},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-780.85,"y":1324.15,"z":-1500},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-780.25,"y":1323.91,"z":-1500},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-779.65,"y":1323.67,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-779.05,"y":1323.43,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-778.45,"y":1323.18,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-777.85,"y":1322.94,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-777.25,"y":1322.7,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-776.65,"y":1322.46,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-776.05,"y":1322.22,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-775.45,"y":1321.98,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-774.85,"y":1321.74,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-774.25,"y":1321.49,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-773.65,"y":1321.25,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-773.05,"y":1321.01,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-772.45,"y":1320.77,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-771.85,"y":1320.53,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-771.25,"y":1320.29,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-770.65,"y":1320.05,"z":-1499.99},"rot":{"x":-0.13,"y":-0.69,"z":-0.13,"w":0.69}},{"pos":{"x":-770.05,"y":1319.8,"z":-1500.02},"rot":{"x":-0.2,"y":-0.66,"z":-0.07,"w":0.72}},{"pos":{"x":-769.45,"y":1319.56,"z":-1500.08},"rot":{"x":-0.2,"y":-0.64,"z":-0.06,"w":0.74}},{"pos":{"x":-768.86,"y":1319.31,"z":-1500.17},"rot":{"x":-0.2,"y":-0.62,"z":-0.06,"w":0.75}},{"pos":{"x":-768.27,"y":1319.06,"z":-1500.29},"rot":{"x":-0.21,"y":-0.6,"z":-0.05,"w":0.77}},{"pos":{"x":-767.68,"y":1318.81,"z":-1500.41},"rot":{"x":-0.15,"y":-0.62,"z":-0.12,"w":0.76}},{"pos":{"x":-767.09,"y":1318.56,"z":-1500.53},"rot":{"x":-0.15,"y":-0.62,"z":-0.13,"w":0.76}},{"pos":{"x":-766.51,"y":1318.31,"z":-1500.65},"rot":{"x":-0.15,"y":-0.62,"z":-0.13,"w":0.76}},{"pos":{"x":-765.92,"y":1318.06,"z":-1500.77},"rot":{"x":-0.16,"y":-0.62,"z":-0.13,"w":0.76}},{"pos":{"x":-765.33,"y":1317.81,"z":-1500.89},"rot":{"x":-0.16,"y":-0.62,"z":-0.13,"w":0.76}},{"pos":{"x":-764.74,"y":1317.56,"z":-1501.01},"rot":{"x":-0.16,"y":-0.62,"z":-0.13,"w":0.76}},{"pos":{"x":-764.15,"y":1317.3,"z":-1501.13},"rot":{"x":-0.16,"y":-0.62,"z":-0.13,"w":0.76}},{"pos":{"x":-763.57,"y":1317.04,"z":-1501.24},"rot":{"x":-0.16,"y":-0.62,"z":-0.13,"w":0.76}},{"pos":{"x":-762.98,"y":1316.78,"z":-1501.39},"rot":{"x":-0.21,"y":-0.58,"z":-0.06,"w":0.78}},{"pos":{"x":-762.41,"y":1316.51,"z":-1501.57},"rot":{"x":-0.22,"y":-0.56,"z":-0.05,"w":0.8}},{"pos":{"x":-761.85,"y":1316.25,"z":-1501.78},"rot":{"x":-0.22,"y":-0.54,"z":-0.05,"w":0.81}},{"pos":{"x":-761.29,"y":1315.99,"z":-1502.01},"rot":{"x":-0.22,"y":-0.52,"z":-0.04,"w":0.82}},{"pos":{"x":-760.75,"y":1315.73,"z":-1502.27},"rot":{"x":-0.22,"y":-0.5,"z":-0.04,"w":0.84}},{"pos":{"x":-760.23,"y":1315.48,"z":-1502.56},"rot":{"x":-0.22,"y":-0.48,"z":-0.03,"w":0.85}},{"pos":{"x":-759.72,"y":1315.22,"z":-1502.87},"rot":{"x":-0.22,"y":-0.46,"z":-0.02,"w":0.86}},{"pos":{"x":-759.22,"y":1314.97,"z":-1503.21},"rot":{"x":-0.22,"y":-0.44,"z":-0.02,"w":0.87}},{"pos":{"x":-758.74,"y":1314.71,"z":-1503.57},"rot":{"x":-0.22,"y":-0.42,"z":-0.01,"w":0.88}},{"pos":{"x":-758.27,"y":1314.46,"z":-1503.94},"rot":{"x":-0.18,"y":-0.44,"z":-0.09,"w":0.88}},{"pos":{"x":-757.79,"y":1314.21,"z":-1504.3},"rot":{"x":-0.18,"y":-0.44,"z":-0.09,"w":0.88}},{"pos":{"x":-757.31,"y":1313.96,"z":-1504.66},"rot":{"x":-0.18,"y":-0.44,"z":-0.09,"w":0.88}},{"pos":{"x":-756.83,"y":1313.71,"z":-1505.03},"rot":{"x":-0.18,"y":-0.44,"z":-0.09,"w":0.88}},{"pos":{"x":-756.36,"y":1313.46,"z":-1505.39},"rot":{"x":-0.17,"y":-0.44,"z":-0.09,"w":0.88}},{"pos":{"x":-755.88,"y":1313.21,"z":-1505.75},"rot":{"x":-0.17,"y":-0.44,"z":-0.08,"w":0.88}},{"pos":{"x":-755.4,"y":1312.96,"z":-1506.11},"rot":{"x":-0.16,"y":-0.44,"z":-0.08,"w":0.88}},{"pos":{"x":-754.92,"y":1312.71,"z":-1506.48},"rot":{"x":-0.15,"y":-0.44,"z":-0.07,"w":0.88}},{"pos":{"x":-754.44,"y":1312.46,"z":-1506.84},"rot":{"x":-0.13,"y":-0.44,"z":-0.07,"w":0.89}},{"pos":{"x":-753.97,"y":1312.21,"z":-1507.2},"rot":{"x":-0.12,"y":-0.44,"z":-0.06,"w":0.89}},{"pos":{"x":-753.49,"y":1312.03,"z":-1507.57},"rot":{"x":-0.12,"y":-0.44,"z":-0.06,"w":0.89}},{"pos":{"x":-753.03,"y":1311.87,"z":-1507.95},"rot":{"x":-0.16,"y":-0.4,"z":0.03,"w":0.9}},{"pos":{"x":-752.59,"y":1311.71,"z":-1508.36},"rot":{"x":-0.15,"y":-0.38,"z":0.04,"w":0.91}},{"pos":{"x":-752.17,"y":1311.57,"z":-1508.79},"rot":{"x":-0.14,"y":-0.36,"z":0.04,"w":0.92}},{"pos":{"x":-751.78,"y":1311.44,"z":-1509.24},"rot":{"x":-0.13,"y":-0.34,"z":0.05,"w":0.93}},{"pos":{"x":-751.4,"y":1311.32,"z":-1509.71},"rot":{"x":-0.12,"y":-0.32,"z":0.06,"w":0.94}},{"pos":{"x":-751.06,"y":1311.22,"z":-1510.2},"rot":{"x":-0.11,"y":-0.29,"z":0.06,"w":0.95}},{"pos":{"x":-750.73,"y":1311.13,"z":-1510.71},"rot":{"x":-0.1,"y":-0.27,"z":0.07,"w":0.95}},{"pos":{"x":-750.43,"y":1311.05,"z":-1511.23},"rot":{"x":-0.09,"y":-0.25,"z":0.08,"w":0.96}},{"pos":{"x":-750.16,"y":1310.98,"z":-1511.76},"rot":{"x":-0.08,"y":-0.23,"z":0.08,"w":0.97}},{"pos":{"x":-749.92,"y":1310.93,"z":-1512.31},"rot":{"x":-0.06,"y":-0.2,"z":0.09,"w":0.97}},{"pos":{"x":-749.7,"y":1310.89,"z":-1512.87},"rot":{"x":-0.05,"y":-0.18,"z":0.09,"w":0.98}},{"pos":{"x":-749.51,"y":1310.87,"z":-1513.44},"rot":{"x":-0.04,"y":-0.16,"z":0.09,"w":0.98}},{"pos":{"x":-749.35,"y":1310.86,"z":-1514.01},"rot":{"x":-0.02,"y":-0.13,"z":0.1,"w":0.99}},{"pos":{"x":-749.22,"y":1310.86,"z":-1514.6},"rot":{"x":-0.01,"y":-0.11,"z":0.1,"w":0.99}},{"pos":{"x":-749.11,"y":1310.87,"z":-1515.19},"rot":{"x":0,"y":-0.09,"z":0.1,"w":0.99}},{"pos":{"x":-749.04,"y":1310.9,"z":-1515.79},"rot":{"x":0.02,"y":-0.06,"z":0.1,"w":0.99}},{"pos":{"x":-748.97,"y":1310.95,"z":-1516.38},"rot":{"x":0.04,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.9,"y":1310.99,"z":-1516.98},"rot":{"x":0.04,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.83,"y":1311.03,"z":-1517.57},"rot":{"x":0.04,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.75,"y":1311.08,"z":-1518.17},"rot":{"x":0.04,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.68,"y":1311.12,"z":-1518.76},"rot":{"x":0.04,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.61,"y":1311.16,"z":-1519.36},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.54,"y":1311.21,"z":-1519.96},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.46,"y":1311.24,"z":-1520.55},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.39,"y":1311.28,"z":-1521.15},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.32,"y":1311.31,"z":-1521.74},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.25,"y":1311.35,"z":-1522.34},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.17,"y":1311.38,"z":-1522.93},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.1,"y":1311.41,"z":-1523.53},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-748.03,"y":1311.45,"z":-1524.12},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-747.96,"y":1311.48,"z":-1524.72},"rot":{"x":0.03,"y":-0.06,"z":0,"w":1}},{"pos":{"x":-747.91,"y":1311.52,"z":-1525.32},"rot":{"x":0.02,"y":-0.04,"z":0.1,"w":0.99}},{"pos":{"x":-747.9,"y":1311.56,"z":-1525.92},"rot":{"x":0.04,"y":-0.01,"z":0.1,"w":0.99}},{"pos":{"x":-747.92,"y":1311.62,"z":-1526.52},"rot":{"x":0.05,"y":0.01,"z":0.1,"w":0.99}},{"pos":{"x":-747.97,"y":1311.7,"z":-1527.12},"rot":{"x":0.06,"y":0.03,"z":0.1,"w":0.99}},{"pos":{"x":-748.04,"y":1311.78,"z":-1527.71},"rot":{"x":0.08,"y":0.06,"z":0.1,"w":0.99}},{"pos":{"x":-748.15,"y":1311.88,"z":-1528.3},"rot":{"x":0.09,"y":0.08,"z":0.1,"w":0.99}},{"pos":{"x":-748.29,"y":1311.99,"z":-1528.89},"rot":{"x":0.1,"y":0.1,"z":0.09,"w":0.99}},{"pos":{"x":-748.45,"y":1312.11,"z":-1529.46},"rot":{"x":0.11,"y":0.13,"z":0.09,"w":0.98}},{"pos":{"x":-748.65,"y":1312.24,"z":-1530.03},"rot":{"x":0.12,"y":0.15,"z":0.09,"w":0.98}},{"pos":{"x":-748.87,"y":1312.38,"z":-1530.59},"rot":{"x":0.13,"y":0.17,"z":0.08,"w":0.97}},{"pos":{"x":-749.12,"y":1312.54,"z":-1531.13},"rot":{"x":0.14,"y":0.2,"z":0.08,"w":0.97}},{"pos":{"x":-749.4,"y":1312.7,"z":-1531.67},"rot":{"x":0.15,"y":0.22,"z":0.07,"w":0.96}},{"pos":{"x":-749.7,"y":1312.87,"z":-1532.18},"rot":{"x":0.16,"y":0.24,"z":0.07,"w":0.95}},{"pos":{"x":-750.03,"y":1313.06,"z":-1532.68},"rot":{"x":0.17,"y":0.27,"z":0.06,"w":0.95}},{"pos":{"x":-750.36,"y":1313.25,"z":-1533.19},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-750.68,"y":1313.44,"z":-1533.69},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-751.01,"y":1313.64,"z":-1534.19},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-751.34,"y":1313.83,"z":-1534.69},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-751.67,"y":1314.02,"z":-1535.2},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-752,"y":1314.21,"z":-1535.7},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-752.33,"y":1314.41,"z":-1536.2},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-752.65,"y":1314.6,"z":-1536.7},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-752.98,"y":1314.79,"z":-1537.2},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-753.31,"y":1314.98,"z":-1537.71},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-753.64,"y":1315.18,"z":-1538.21},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-753.97,"y":1315.37,"z":-1538.71},"rot":{"x":0.15,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-754.3,"y":1315.56,"z":-1539.21},"rot":{"x":0.13,"y":0.28,"z":-0.04,"w":0.95}},{"pos":{"x":-754.65,"y":1315.75,"z":-1539.7},"rot":{"x":0.08,"y":0.3,"z":0.08,"w":0.95}},{"pos":{"x":-755.03,"y":1315.89,"z":-1540.16},"rot":{"x":0.06,"y":0.33,"z":0.09,"w":0.94}},{"pos":{"x":-755.43,"y":1315.94,"z":-1540.61},"rot":{"x":0.07,"y":0.35,"z":0.08,"w":0.93}},{"pos":{"x":-755.85,"y":1316,"z":-1541.04},"rot":{"x":0.09,"y":0.37,"z":0.08,"w":0.92}},{"pos":{"x":-756.29,"y":1316.07,"z":-1541.44},"rot":{"x":0.1,"y":0.39,"z":0.07,"w":0.91}},{"pos":{"x":-756.75,"y":1316.16,"z":-1541.83},"rot":{"x":0.12,"y":0.41,"z":0.06,"w":0.9}},{"pos":{"x":-757.23,"y":1316.28,"z":-1542.18},"rot":{"x":0.13,"y":0.43,"z":0.05,"w":0.89}},{"pos":{"x":-757.73,"y":1316.41,"z":-1542.52},"rot":{"x":0.14,"y":0.46,"z":0.04,"w":0.88}},{"pos":{"x":-758.24,"y":1316.56,"z":-1542.83},"rot":{"x":0.14,"y":0.48,"z":0.04,"w":0.87}},{"pos":{"x":-758.77,"y":1316.71,"z":-1543.11},"rot":{"x":0.14,"y":0.5,"z":0.04,"w":0.85}},{"pos":{"x":-759.32,"y":1316.85,"z":-1543.37},"rot":{"x":0.15,"y":0.52,"z":0.03,"w":0.84}},{"pos":{"x":-759.87,"y":1316.99,"z":-1543.6},"rot":{"x":0.15,"y":0.54,"z":0.02,"w":0.83}},{"pos":{"x":-760.42,"y":1317.15,"z":-1543.83},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-760.98,"y":1317.3,"z":-1544.05},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-761.53,"y":1317.45,"z":-1544.28},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-762.09,"y":1317.6,"z":-1544.51},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-762.64,"y":1317.75,"z":-1544.74},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-763.2,"y":1317.91,"z":-1544.97},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-763.75,"y":1318.06,"z":-1545.2},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-764.31,"y":1318.21,"z":-1545.43},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-764.86,"y":1318.36,"z":-1545.66},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-765.42,"y":1318.51,"z":-1545.89},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-765.97,"y":1318.67,"z":-1546.11},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-766.53,"y":1318.82,"z":-1546.34},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-767.08,"y":1318.97,"z":-1546.57},"rot":{"x":0.1,"y":0.55,"z":-0.07,"w":0.82}},{"pos":{"x":-767.64,"y":1319.12,"z":-1546.77},"rot":{"x":0.16,"y":0.56,"z":0.02,"w":0.81}},{"pos":{"x":-768.22,"y":1319.28,"z":-1546.95},"rot":{"x":0.17,"y":0.58,"z":0.01,"w":0.8}},{"pos":{"x":-768.8,"y":1319.46,"z":-1547.09},"rot":{"x":0.17,"y":0.6,"z":0,"w":0.78}},{"pos":{"x":-769.39,"y":1319.64,"z":-1547.2},"rot":{"x":0.18,"y":0.61,"z":-0.01,"w":0.77}},{"pos":{"x":-769.99,"y":1319.83,"z":-1547.29},"rot":{"x":0.18,"y":0.63,"z":-0.02,"w":0.75}},{"pos":{"x":-770.58,"y":1320.03,"z":-1547.34},"rot":{"x":0.19,"y":0.65,"z":-0.03,"w":0.74}},{"pos":{"x":-771.18,"y":1320.24,"z":-1547.37},"rot":{"x":0.19,"y":0.67,"z":-0.04,"w":0.72}},{"pos":{"x":-771.78,"y":1320.45,"z":-1547.36},"rot":{"x":0.2,"y":0.68,"z":-0.05,"w":0.7}},{"pos":{"x":-772.38,"y":1320.67,"z":-1547.33},"rot":{"x":-0.2,"y":-0.7,"z":0.05,"w":-0.68}},{"pos":{"x":-772.98,"y":1320.9,"z":-1547.26},"rot":{"x":-0.2,"y":-0.72,"z":0.06,"w":-0.67}},{"pos":{"x":-773.57,"y":1321.14,"z":-1547.17},"rot":{"x":-0.2,"y":-0.73,"z":0.07,"w":-0.65}},{"pos":{"x":-774.16,"y":1321.38,"z":-1547.04},"rot":{"x":-0.2,"y":-0.75,"z":0.08,"w":-0.63}},{"pos":{"x":-774.74,"y":1321.62,"z":-1546.89},"rot":{"x":-0.2,"y":-0.76,"z":0.09,"w":-0.61}},{"pos":{"x":-775.31,"y":1321.87,"z":-1546.71},"rot":{"x":-0.2,"y":-0.78,"z":0.09,"w":-0.59}},{"pos":{"x":-775.87,"y":1322.12,"z":-1546.5},"rot":{"x":-0.2,"y":-0.79,"z":0.1,"w":-0.57}},{"pos":{"x":-776.42,"y":1322.38,"z":-1546.26},"rot":{"x":-0.2,"y":-0.8,"z":0.11,"w":-0.55}},{"pos":{"x":-776.97,"y":1322.64,"z":-1546.02},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-777.52,"y":1322.89,"z":-1545.78},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-778.07,"y":1323.16,"z":-1545.54},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-778.62,"y":1323.43,"z":-1545.3},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-779.17,"y":1323.71,"z":-1545.07},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-779.73,"y":1323.98,"z":-1544.83},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-780.28,"y":1324.25,"z":-1544.59},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-780.83,"y":1324.52,"z":-1544.35},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-781.38,"y":1324.79,"z":-1544.11},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-781.93,"y":1325.06,"z":-1543.87},"rot":{"x":-0.12,"y":-0.82,"z":0.18,"w":-0.54}},{"pos":{"x":-782.48,"y":1325.34,"z":-1543.64},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-783.03,"y":1325.61,"z":-1543.4},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-783.58,"y":1325.87,"z":-1543.16},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-784.13,"y":1326.13,"z":-1542.92},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-784.68,"y":1326.39,"z":-1542.68},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-785.23,"y":1326.66,"z":-1542.44},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-785.78,"y":1326.92,"z":-1542.21},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-786.33,"y":1327.18,"z":-1541.97},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-786.88,"y":1327.44,"z":-1541.73},"rot":{"x":-0.11,"y":-0.82,"z":0.17,"w":-0.54}},{"pos":{"x":-787.42,"y":1327.71,"z":-1541.46},"rot":{"x":-0.2,"y":-0.82,"z":0.12,"w":-0.53}},{"pos":{"x":-787.95,"y":1327.97,"z":-1541.17},"rot":{"x":-0.2,"y":-0.83,"z":0.12,"w":-0.51}},{"pos":{"x":-788.45,"y":1328.23,"z":-1540.85},"rot":{"x":-0.19,"y":-0.84,"z":0.13,"w":-0.49}},{"pos":{"x":-788.95,"y":1328.49,"z":-1540.51},"rot":{"x":-0.19,"y":-0.85,"z":0.13,"w":-0.47}},{"pos":{"x":-789.42,"y":1328.75,"z":-1540.14},"rot":{"x":-0.18,"y":-0.87,"z":0.12,"w":-0.45}},{"pos":{"x":-789.88,"y":1328.99,"z":-1539.75},"rot":{"x":-0.16,"y":-0.89,"z":0.1,"w":-0.42}},{"pos":{"x":-790.31,"y":1329.18,"z":-1539.34},"rot":{"x":-0.16,"y":-0.9,"z":0.1,"w":-0.4}},{"pos":{"x":-790.73,"y":1329.36,"z":-1538.91},"rot":{"x":-0.15,"y":-0.91,"z":0.09,"w":-0.38}},{"pos":{"x":-791.12,"y":1329.54,"z":-1538.45},"rot":{"x":-0.15,"y":-0.92,"z":0.09,"w":-0.36}},{"pos":{"x":-791.49,"y":1329.7,"z":-1537.98},"rot":{"x":-0.14,"y":-0.93,"z":0.09,"w":-0.33}},{"pos":{"x":-791.83,"y":1329.86,"z":-1537.49},"rot":{"x":-0.14,"y":-0.94,"z":0.09,"w":-0.31}},{"pos":{"x":-792.15,"y":1330,"z":-1536.98},"rot":{"x":-0.13,"y":-0.95,"z":0.09,"w":-0.29}},{"pos":{"x":-792.45,"y":1330.14,"z":-1536.46},"rot":{"x":-0.13,"y":-0.95,"z":0.08,"w":-0.26}},{"pos":{"x":-792.71,"y":1330.27,"z":-1535.92},"rot":{"x":-0.13,"y":-0.96,"z":0.08,"w":-0.24}},{"pos":{"x":-792.98,"y":1330.39,"z":-1535.38},"rot":{"x":-0.02,"y":-0.97,"z":0.09,"w":-0.23}},{"pos":{"x":-793.25,"y":1330.5,"z":-1534.84},"rot":{"x":-0.02,"y":-0.97,"z":0.09,"w":-0.23}},{"pos":{"x":-793.52,"y":1330.62,"z":-1534.31},"rot":{"x":-0.02,"y":-0.97,"z":0.09,"w":-0.23}},{"pos":{"x":-793.79,"y":1330.74,"z":-1533.77},"rot":{"x":-0.02,"y":-0.97,"z":0.09,"w":-0.23}},{"pos":{"x":-794.05,"y":1330.86,"z":-1533.23},"rot":{"x":-0.02,"y":-0.97,"z":0.09,"w":-0.23}},{"pos":{"x":-794.32,"y":1330.98,"z":-1532.7},"rot":{"x":-0.02,"y":-0.97,"z":0.09,"w":-0.23}},{"pos":{"x":-794.56,"y":1331.09,"z":-1532.15},"rot":{"x":-0.12,"y":-0.97,"z":0.07,"w":-0.21}},{"pos":{"x":-794.77,"y":1331.2,"z":-1531.59},"rot":{"x":-0.12,"y":-0.97,"z":0.07,"w":-0.19}},{"pos":{"x":-794.96,"y":1331.3,"z":-1531.01},"rot":{"x":-0.11,"y":-0.98,"z":0.06,"w":-0.16}},{"pos":{"x":-795.11,"y":1331.38,"z":-1530.43},"rot":{"x":-0.11,"y":-0.98,"z":0.06,"w":-0.14}},{"pos":{"x":-795.24,"y":1331.46,"z":-1529.85},"rot":{"x":-0.11,"y":-0.99,"z":0.05,"w":-0.11}},{"pos":{"x":-795.34,"y":1331.52,"z":-1529.26},"rot":{"x":-0.11,"y":-0.99,"z":0.04,"w":-0.09}},{"pos":{"x":-795.4,"y":1331.58,"z":-1528.66},"rot":{"x":-0.1,"y":-0.99,"z":0.04,"w":-0.06}},{"pos":{"x":-795.44,"y":1331.62,"z":-1528.06},"rot":{"x":-0.1,"y":-0.99,"z":0.03,"w":-0.03}},{"pos":{"x":-795.45,"y":1331.65,"z":-1527.46},"rot":{"x":-0.1,"y":-0.99,"z":0.02,"w":-0.01}},{"pos":{"x":-795.43,"y":1331.66,"z":-1526.86},"rot":{"x":-0.1,"y":-0.99,"z":0.02,"w":0.02}},{"pos":{"x":-795.4,"y":1331.67,"z":-1526.26},"rot":{"x":0,"y":-1,"z":0.01,"w":0.02}},{"pos":{"x":-795.38,"y":1331.68,"z":-1525.66},"rot":{"x":0,"y":-1,"z":0.01,"w":0.02}},{"pos":{"x":-795.36,"y":1331.68,"z":-1525.06},"rot":{"x":0,"y":-1,"z":0,"w":0.02}},{"pos":{"x":-795.34,"y":1331.69,"z":-1524.46},"rot":{"x":0,"y":-1,"z":-0.03,"w":0.02}},{"pos":{"x":-795.31,"y":1331.7,"z":-1523.86},"rot":{"x":0,"y":-1,"z":-0.05,"w":0.02}},{"pos":{"x":-795.29,"y":1331.66,"z":-1523.26},"rot":{"x":0,"y":-1,"z":-0.05,"w":0.02}},{"pos":{"x":-795.27,"y":1331.59,"z":-1522.66},"rot":{"x":0,"y":-1,"z":-0.05,"w":0.02}},{"pos":{"x":-795.25,"y":1331.53,"z":-1522.06},"rot":{"x":0,"y":-1,"z":-0.05,"w":0.02}},{"pos":{"x":-795.22,"y":1331.46,"z":-1521.46},"rot":{"x":0,"y":-1,"z":-0.05,"w":0.02}},{"pos":{"x":-795.17,"y":1331.4,"z":-1520.87},"rot":{"x":-0.1,"y":-0.99,"z":-0.05,"w":0.05}},{"pos":{"x":-795.09,"y":1331.32,"z":-1520.27},"rot":{"x":-0.1,"y":-0.99,"z":-0.06,"w":0.07}},{"pos":{"x":-794.98,"y":1331.23,"z":-1519.68},"rot":{"x":-0.1,"y":-0.99,"z":-0.07,"w":0.1}},{"pos":{"x":-794.84,"y":1331.12,"z":-1519.1},"rot":{"x":-0.1,"y":-0.98,"z":-0.08,"w":0.13}},{"pos":{"x":-794.67,"y":1330.99,"z":-1518.52},"rot":{"x":-0.11,"y":-0.98,"z":-0.09,"w":0.15}},{"pos":{"x":-794.47,"y":1330.85,"z":-1517.96},"rot":{"x":-0.11,"y":-0.97,"z":-0.1,"w":0.18}},{"pos":{"x":-794.24,"y":1330.7,"z":-1517.4},"rot":{"x":-0.12,"y":-0.97,"z":-0.1,"w":0.2}},{"pos":{"x":-793.99,"y":1330.53,"z":-1516.86},"rot":{"x":-0.12,"y":-0.96,"z":-0.11,"w":0.23}},{"pos":{"x":-793.7,"y":1330.35,"z":-1516.33},"rot":{"x":-0.12,"y":-0.95,"z":-0.12,"w":0.25}},{"pos":{"x":-793.4,"y":1330.16,"z":-1515.81},"rot":{"x":-0.13,"y":-0.94,"z":-0.12,"w":0.28}},{"pos":{"x":-793.09,"y":1329.95,"z":-1515.3},"rot":{"x":-0.04,"y":-0.95,"z":-0.16,"w":0.26}},{"pos":{"x":-792.78,"y":1329.74,"z":-1514.78},"rot":{"x":-0.04,"y":-0.95,"z":-0.16,"w":0.26}},{"pos":{"x":-792.48,"y":1329.54,"z":-1514.27},"rot":{"x":-0.04,"y":-0.95,"z":-0.16,"w":0.26}},{"pos":{"x":-792.17,"y":1329.33,"z":-1513.75},"rot":{"x":-0.04,"y":-0.95,"z":-0.16,"w":0.26}},{"pos":{"x":-791.86,"y":1329.13,"z":-1513.24},"rot":{"x":-0.04,"y":-0.95,"z":-0.16,"w":0.26}},{"pos":{"x":-791.55,"y":1328.92,"z":-1512.72},"rot":{"x":-0.04,"y":-0.95,"z":-0.16,"w":0.26}},{"pos":{"x":-791.22,"y":1328.71,"z":-1512.22},"rot":{"x":-0.13,"y":-0.94,"z":-0.13,"w":0.3}},{"pos":{"x":-790.86,"y":1328.5,"z":-1511.74},"rot":{"x":-0.14,"y":-0.93,"z":-0.14,"w":0.32}},{"pos":{"x":-790.48,"y":1328.27,"z":-1511.27},"rot":{"x":-0.14,"y":-0.92,"z":-0.14,"w":0.35}}/*,{"pos":{"x":-790.08,"y":1328.02,"z":-1510.83},"rot":{"x":-0.15,"y":-0.91,"z":-0.14,"w":0.37}},{"pos":{"x":-789.65,"y":1327.77,"z":-1510.41},"rot":{"x":-0.16,"y":-0.89,"z":-0.15,"w":0.39}},{"pos":{"x":-789.21,"y":1327.51,"z":-1510.01},"rot":{"x":-0.16,"y":-0.88,"z":-0.15,"w":0.42}},{"pos":{"x":-788.74,"y":1327.24,"z":-1509.63},"rot":{"x":-0.17,"y":-0.87,"z":-0.15,"w":0.44}},{"pos":{"x":-788.26,"y":1326.97,"z":-1509.27},"rot":{"x":-0.17,"y":-0.86,"z":-0.15,"w":0.46}},{"pos":{"x":-787.78,"y":1326.68,"z":-1508.92},"rot":{"x":-0.1,"y":-0.87,"z":-0.2,"w":0.44}},{"pos":{"x":-787.29,"y":1326.4,"z":-1508.56},"rot":{"x":-0.1,"y":-0.87,"z":-0.19,"w":0.44}},{"pos":{"x":-786.81,"y":1326.11,"z":-1508.21},"rot":{"x":-0.1,"y":-0.87,"z":-0.19,"w":0.44}},{"pos":{"x":-786.32,"y":1325.83,"z":-1507.85},"rot":{"x":-0.09,"y":-0.87,"z":-0.18,"w":0.44}},{"pos":{"x":-785.82,"y":1325.54,"z":-1507.52},"rot":{"x":-0.16,"y":-0.85,"z":-0.12,"w":0.48}},{"pos":{"x":-785.31,"y":1325.25,"z":-1507.22},"rot":{"x":-0.16,"y":-0.84,"z":-0.1,"w":0.5}},{"pos":{"x":-784.78,"y":1324.96,"z":-1506.94},"rot":{"x":-0.16,"y":-0.83,"z":-0.09,"w":0.52}},{"pos":{"x":-784.24,"y":1324.66,"z":-1506.66},"rot":{"x":-0.08,"y":-0.85,"z":-0.13,"w":0.51}},{"pos":{"x":-783.71,"y":1324.44,"z":-1506.38},"rot":{"x":-0.07,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-783.18,"y":1324.29,"z":-1506.1},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-782.65,"y":1324.11,"z":-1505.82},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-782.12,"y":1323.93,"z":-1505.54},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-781.59,"y":1323.75,"z":-1505.26},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-781.06,"y":1323.57,"z":-1504.99},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-780.53,"y":1323.39,"z":-1504.71},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-779.99,"y":1323.21,"z":-1504.43},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-779.46,"y":1323.03,"z":-1504.15},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-778.93,"y":1322.85,"z":-1503.87},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-778.4,"y":1322.67,"z":-1503.59},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-777.87,"y":1322.49,"z":-1503.31},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-777.34,"y":1322.31,"z":-1503.03},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-776.81,"y":1322.13,"z":-1502.75},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-776.27,"y":1321.95,"z":-1502.48},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-775.74,"y":1321.77,"z":-1502.2},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-775.21,"y":1321.59,"z":-1501.92},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}},{"pos":{"x":-774.68,"y":1321.41,"z":-1501.64},"rot":{"x":-0.08,"y":-0.85,"z":-0.12,"w":0.51}}*/];
                    nx.landingPadSeqIdx[1].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    nx.landingPadSeqIdx[1].stepIdx = 0;//, nx.landingPadSeqIdx[1].curPOS, nx.landingPadSeqIdx[1].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    nx.landingPadSeqIdx[1].anmSpeed = 8;
                }
                if(!nx.landingPadSeqIdx[1].initAnm){  //init next path point
                    nx.landingPadSeqIdx[1].curPOS = nx.landingPadSeqIdx[1].movepath[nx.landingPadSeqIdx[1].stepIdx];
                    nx.landingPadSeqIdx[1].nxtPOS = nx.landingPadSeqIdx[1].movepath[++nx.landingPadSeqIdx[1].stepIdx]
                    nx.landingPadSeqIdx[1].initAnm = 1;
                    if(!nx.landingPadSeqIdx[1].nxtPOS){  
                        nx.landingPadSeqIdx[1].on=0; //important

                                nx.landingPadSeqIdx[2] = {on:1}; //NEXT-ANM-. 
                        
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.landingPadSeqIdx[1].runAnm = 1;
                }  
                if(nx.landingPadSeqIdx[1].runAnm) { nx.landingPadSeqIdx[1].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.landingPadSeqIdx[1].curPOS.pos.x,curPOSy:nx.landingPadSeqIdx[1].curPOS.pos.y,curPOSz:nx.landingPadSeqIdx[1].curPOS.pos.z}).//ORBYLOOP
                    animate({curPOSx:nx.landingPadSeqIdx[1].nxtPOS.pos.x,curPOSy:nx.landingPadSeqIdx[1].nxtPOS.pos.y,curPOSz:nx.landingPadSeqIdx[1].nxtPOS.pos.z},{queue:false,duration:nx.landingPadSeqIdx[1].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); nx.landingPadSeqIdx[1]={on:1};  console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.landingPadSeqIdx[1].curPOS.rot.x,nx.landingPadSeqIdx[1].curPOS.rot.y,nx.landingPadSeqIdx[1].curPOS.rot.z,nx.landingPadSeqIdx[1].curPOS.rot.w);
                        nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                    }, complete:function(){ 
                        nx.landingPadSeqIdx[1].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });

                }
                // if(nx.orbyMesh.position.z>=-335 && !nx.landingPadSeqIdx[2]) { //CAM-TRIGGER -anmethodology-.
                //     nx.landingPadSeqIdx[2] = {on:1}; 
                // } //Orby position Trigger next view-.
            }

            if(nx.landingPadSeqIdx[2] && nx.landingPadSeqIdx[2].on){ nx.landingPadSeqIdx[2].on = 0; //SWITCH-VIEW ZAPBOT!
                if(nx.cinemaStop){nx.landingPadSeqIdx[2]={on:1}; return;}//CINEMA-STOP-.
                //CAM-SINK-MOVE: LOOK AT ORBY
                $({h: nx.camz.faceCam.heightOffset}). //--------------------------------------------ANM: ZAPBOT POS
                animate({h: -5},{queue:false,duration:3000,easing:'linear',
                step: function(now) { 
                    if(nx.cinemaStop){ $(this).stop(); nx.landingPadSeqIdx[2]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
 nx.camz.faceCam.heightOffset = this.h
                    // nx.camz.freeCam.position.y = this.y; //SINK-CAM - 
                    // nx.camz.freeCam.setTarget(nx.orbyMesh.position); //CAM: TGT ORBY
                }, complete:function(){
                        nx.landingPadSeqIdx[3] = {on:1};

                }
                }); 





            }
            if(nx.landingPadSeqIdx[3] && nx.landingPadSeqIdx[3].on){ nx.landingPadSeqIdx[3].on = 0; //SWITCH-VIEW ZAPBOT!
                // debugger;
                if(nx.cinemaStop){nx.landingPadSeqIdx[3]={on:1}; return;}//CINEMA-STOP-.

                //CAM-POS, TGT-.
                nx.camz.freeCam.position.copyFrom({x: -722.1870745445868, y: 1301.5, z: -1507.1508288389007}); 
                nx.camz.freeCam.setTarget(nx.BV32({x: -712, y: 1298.3551858656433, z: -1506.5313333333334}));
                nx.scene.activeCamera = nx.camz.freeCam; //FREE-Camera-.

                //START FLASHING AND HOVERING
                // nx.kiloBotMesh1.isListening= 1; //important to start and stop listening for loopz performance-.
                // nx.kiloBotMesh1.isFlashing = 1;
                // nx.kiloBotMesh1.isHovering = 1;
                nx.kiloBotMesh1.startListening();
                nx.kiloBotMesh1.startFlashing();
                nx.kiloBotMesh1.startHovering();

                //ANM-ZAPBOT- ADVANCE TO CAM
                $({x: -666, y: 1274, z: -1530}). //--------------------------------------------ANM: ZAPBOT POS
                animate({x: -712, y: 1298, z: -1506.5},{queue:false,duration:2000,easing:'linear',
                // animate({x: -724, y: 1300, z: -1511},{queue:false,duration:3000,easing:'linear',
                // animate({x: -705, y: 1295, z: -1517.5},{queue:false,duration:3000,easing:'linear',
                // animate({x: -705, y: 1290.5, z: -1518},{queue:false,duration:3000,easing:'linear',
                // animate({x:nx.scene.activeCamera.position.x, y:nx.scene.activeCamera.position.y, z:nx.scene.activeCamera.position.z},{queue:false,duration:3000,easing:'linear',
                // animate({x: -700, y: 1288, z: -1514},{queue:false,duration:3000,easing:'linear',
                step: function(now) { 
                   if(nx.cinemaStop){ $(this).stop(); nx.landingPadSeqIdx[3]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                   // nx.zapBotMesh2.position.copyFrom({x:this.x,y:this.y,z:this.z})
                   nx.kiloBotMesh1.position.copyFrom({x:this.x,y:this.y,z:this.z})
                }, complete:function(){

                    //ANM-ZAPBOT- ROT look at cam
                    $({y:nx.kiloBotMesh1.rotation.y}). //--------------------------------------------ANM: ZAPBOT ROT
                    animate({y:1.54},{queue:false,duration:2000,easing:'linear',
                    // animate({x: -705, y: 1295, z: -1517.5},{queue:false,duration:3000,easing:'linear',
                    // animate({x: -705, y: 1290.5, z: -1518},{queue:false,duration:3000,easing:'linear',
                    // animate({x:nx.scene.activeCamera.position.x, y:nx.scene.activeCamera.position.y, z:nx.scene.activeCamera.position.z},{queue:false,duration:3000,easing:'linear',
                    // animate({x: -700, y: 1288, z: -1514},{queue:false,duration:3000,easing:'linear',
                    step: function(now) { 
                    if(nx.cinemaStop){ $(this).stop(); nx.landingPadSeqIdx[3]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                    // nx.zapBotMesh2.position.copyFrom({x:this.x,y:this.y,z:this.z})
                    // nx.kiloBotMesh1.position.copyFrom({x:this.x,y:this.y,z:this.z})
                    nx.kiloBotMesh1.rotation.y = this.y;
                }, complete:function(){

                    
                    // nx.kiloBotMesh1.isFlashing = -1;
                    // nx.kiloBotMesh1.isShocking = 1;
                    // nx.kiloBotMesh1.stopFlashing();
                    nx.kiloBotMesh1.startShocking();


                    nx.ui.flashCanvasMSG({txt:'ZAPBOT!',txtType:'villian',txtIcon:'zapbot', dur:4000});  
                    // nx.ui.flashCanvasMSG({txt:'Zapbot!',txtType:'villian',txtIcon:'zapbot', dur:4000});  
                    // nx.ui.flashCanvasMSG({txt:'Epic 1: Zapbots on AlphaMoon!',txtType:'chapter',persist:true,dur:4000});         //on look at zapbot 
                    // nx.ui.flashCanvasMSG({txt:'Quest 1: Zapbots on AlphaMoon!',txtType:'quest',persist:true,dur:4000});         //on look at zapbot 
                    // nx.ui.flashCanvasMSG({txt:'Success: Land on AlphaMoon!',txtType:'success',persist:true,dur:4000});         //on look at zapbot 
                    // nx.ui.flashCanvasMSG({txt:'Item: SpaceGem!',txtType:'item',persist:true,dur:4000});         //on look at zapbot 
                    // nx.ui.flashCanvasMSG({txt:'OrbyOrbot!',txtType:'hero',txtIcon:'orby',dur:4000});         //on look at zapbot 
                    // nx.ui.flashCanvasMSG({txt:'ZAPBOT!',txtType:'hero',txtIcon:'zapbot',persist:true,dur:4000});         //on look at zapbot 
                    // nx.ui.flashCanvasMSG({txt:'ZAPBOTZ!?!',txtIcon:'orby',dur:4000});         //on look at zapbot 
                    // nx.ui.flashCanvasMSG({txt:'ZAPBOT!',txtIcon:'orby',dur:4000});         //on look at zapbot 
                    
                    // debugger;
                    // nx.botz.startZapping({mesh:nx.kiloBotMesh1});  //START ZAPPING call-.
                    
                    setTimeout(function(){
                        if(nx.cinemaStop){nx.landingPadSeqIdx[3]={on:1}; return;}//CINEMA-STOP-.
                        nx.landingPadSeqIdx[4] = {on:1};
                    },2000)
                    
                }}); 
            }}); 
            
            nx.ui.unlockEpic({class:'sceneItem3'});  //On LOOK AT ZAPBOT
            
            
            // debugger;
            
            
            
            //TODO: new zapbot path then zap, then zoom out, then scan, cam and focus pos also zap move end
            // nx.scene.activeCamera.position
            // Vector3 {x: -728.066717572568, y: 1307.462716449417, z: -1511.562216106574}
            // nx.scene.activeCamera.position
            // Vector3 {x: -723.9879428073931, y: 1305.236300200725, z: -1511.17983191345}
            
            
            // "zap rotation 1.54 y"
            // "zap rotation 1.54 y"
            // "cam pos over shoulder"
            // "cam pos over shoulder"
            // nx.scene.activeCamera.position
            // Vector3 {x: -722.1870745445868, y: 1301.5, z: -1507.1508288389007}
            // "cam pos foc tgt and prezoom out"
            // "cam pos foc tgt and prezoom out"
            // nx.scene.activeCamera.position
            // Vector3 {x: -722.1870745445868, y: 1301.5, z: -1507.1508288389007}
            
            
            
            //LOOK-AT-ZAPBOT-.
            // nx.camz.freeCam.position.copyFrom({x: -722.1870745445868, y: 1301.5, z: -1507.1508288389007}); 
            // nx.camz.freeCam.setTarget(nx.BV32({x: -712, y: 1298.3551858656433, z: -1506.5313333333334}));
            // nx.camz.freeCam.position.copyFrom({x: -728, y: 1302, z: -1511}); 
            // nx.camz.freeCam.position.copyFrom({x: -714, y: 1299.5, z: -1514.5}); 
            // nx.camz.freeCam.position.copyFrom({x: -718.0162789004661, y: 1296.9476264321468, z: -1510.1607971961473}); 
            // nx.camz.freeCam.setTarget(nx.zapBotMesh2.position);
            // nx.camz.freeCam.setTarget(nx.kiloBotMesh1.position);
            // nx.scene.activeCamera = nx.camz.freeCam; //FREE-Camera-.
            // if(nx.orbyMesh.position.z>=-300 ) { nx.landingPadSeqIdx[2].on=0; nx.doorSeqIdx[3] = {on:1}; } //Orby position Trigger next view-.
            
            
            
            // debugger; //this is probably a problem
            // nx.ui.flashMSGQueue = []; //todo method - resetFlashMSGs
            // nx.ui.flashMSGPlaying = 0;
            // $('#backingSpan').empty();
            // $('#canvasFooter').empty();
            
            // $('#canvasFooter').fadeIn(1000,function(){
                // $('#canvasFooter').fadeIn('fast').promise().done(function() {
                    // debugger;
                    // $('.sidebarsuccess').fadeIn('slow');
                    // });
                    // if(nx.cinemaStop){nx.landingPadSeqIdx[3]={on:1}; return;}//CINEMA-STOP-.
                    // setTimeout(function(){
                        // nx.ui.flashCanvasMSG({txt:'ZAPBOT?!?',txtIcon:'orby',dur:5000});         //on look at zapbot 
                    // },1000)
                    // setTimeout(function(){
                        //     if(nx.cinemaStop){return;}//CINEMA-STOP-.
                        //     nx.landingPadSeqIdx[3] = {on:1};
                        // },3000)
                        // }) ;
                        
                        
                        
                    } 
                    else if(nx.landingPadSeqIdx[4] && nx.landingPadSeqIdx[4].on){ nx.landingPadSeqIdx[4].on = 0; //SWITCH-VIEW ZAPBOT!
                        if(nx.cinemaStop){nx.landingPadSeqIdx[4]={on:1}; return;}//CINEMA-STOP-.
                        
                        nx.initFreeCam();      //CAM-POS, TGT-.
                        nx.camz.freeCam.position.copyFrom({x: -722.1870745445868, y: 1301.5, z: -1507.1508288389007}); 
                        nx.camz.freeCam.setTarget(nx.BV32({x: -712, y: 1298.3551858656433, z: -1506.5313333333334}));
                        
                        // nx.ui.flashCanvasMSG({txt:'Showdown!',txtType:'villian',txtIcon:'zapbot', dur:4000});  
                        
                        //ANM- CAM ZOOM OUT-.
                        $({x:nx.scene.activeCamera.position.x, y:nx.scene.activeCamera.position.y, z:nx.scene.activeCamera.position.z }). //--------------------------------------------ANM: CAM ZOOM OUT
                        animate({x: -814.2817601280293, y: 1343.4733705156095, z: -1509.7345204137712},{queue:false,duration:4000,easing:'swing',
                        // animate({x: -800.4660097925297, y: 1339.2175402239827, z: -1508.910077613021},{queue:false,duration:4000,easing:'swing',
                        step: function(now) { 
                        if(nx.cinemaStop){ $(this).stop(); nx.landingPadSeqIdx[4]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.scene.activeCamera.position.x = this.x;
                        nx.scene.activeCamera.position.y = this.y;
                        nx.scene.activeCamera.position.z = this.z;
                    }, complete:function(){
                        
                        
                        nx.kiloBotMesh1.stopFlashing();
                        nx.kiloBotMesh1.stopShocking();
                        nx.kiloBotMesh1.startScanning();
                        
                        // setTimeout(function(){
                            // if(nx.cinemaStop){nx.landingPadSeqIdx[4]={on:1}; return;}//CINEMA-STOP-.
                            nx.landingPadSeqIdx[5] = {on:1};
                        // },3000)

                    }}); 


            } 
            else if(nx.landingPadSeqIdx[5] && nx.landingPadSeqIdx[5].on){ nx.landingPadSeqIdx[5].on = 0; //SWITCH-VIEW ZAPBOT!
                if(nx.cinemaStop){nx.landingPadSeqIdx[5]={on:1}; return;}//CINEMA-STOP-.
                    // nx.gameInit({'gameID':4});
                    // nx.ui.flashCanvasMSG({'btn':'GO!',fn:function(){ 
                    //     nx.gameRun({gameID:4}); // on click go at end of movie. softload
                    // }});


                    //TODO: MOVIE - TO MOVIE - GAME TO GAME

                    if(nx.cinemaPlayAll){
                        nx.initSEQ({epicID:5}); /*doorseq todo coil sequence*/ 
                    }else{
                        nx.ui.flashCanvasMSG({txtIcon:'',persist:true,
                            txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
                                // nx.ui.showMovieModeView()
                            }, btns:{
                                movieFn:function(){ 
                                    nx.initSEQ({epicID:5}); /*doorseq todo coil sequence*/ },
                                gameFn: function(){
                                    nx.gameInit({gameID:4}); //space pipe game
                                    nx.gameRun({gameID:4});
                                },
                                bookFn: function(){ /*todo autolink to quests*/ }
                            }
                        });
                    }

            } 
        // }




        }); //end sequence










    } else if(seqName==="DoorSequence"){ //-----------------------------------------------------------------------------DOOR-SEQUENCE---.
        nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as SEQIDX.
            // if(nx.cinemaStop){return;}//CINEMA-STOP-.
            console.log('doorsequence...')
            if(nx.doorSeqIdx[0] && nx.doorSeqIdx[0].on){ nx.doorSeqIdx[0].on=0; 

                if(nx.cinemaStop){nx.doorSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
                //INITIALIZE-SEQUENCE-
                nx.orbyMesh.position.copyFrom({x: 302.3481750488281, y: 320.0316091078848, z: -368.6502685546875})
                nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(0,-0.8,0,-0.5);
                nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y;

                //todo if nx.cinemaPlayAll?
                // nx.ui.showMovieModeView();

                // nx.ui.flashCanvasMSG({txt:'DarkBot!',txtAlign:'hero',txtIcon:'darkbot',dur:1000}); 
                nx.ui.flashCanvasMSG({txt:'DarkBot!',txtType:'villian',txtIcon:'darkbot',dur:1000}); 
                // nx.ui.flashCanvasMSG({txt:'DarkBot!',dur:1000}); 

                //TODO
                nx.initFreeCam();  //CAMERA: CLOSEUP ON DARKBOT
                nx.camz.freeCam.position.copyFrom({x: 31, y: 264, z: -31 });
                nx.camz.freeCam.setTarget(new nx.BV32({x: 30.30, y: 263.82, z: -30.32}))

                nx.pyramid.aSpaceDoor.scaling.x = 0; 
                nx.pyramid.aSpaceDoor.scaling.z = 0;




                // nx.camz.freeCam.position.copyFrom({x: 1.1078729504925633, y: 228.92358345159658, z: 71.78831572314027})
                // nx.camz.freeCam.setTarget(nx.orbyMesh.position);
                nx.camz.freeCam.maxZ = 8000; //15 to 8?
                nx.scene.activeCamera = nx.camz.freeCam;

                //SET-WORLD-SCALE-.
                nx.landPad.scaling = new BABYLON.Vector3(1, 1, 1);
                nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);

                //TODO: SET-SKYBOX-.
                nx.spacebox.position.x = 0
                nx.spacebox.position.y = 0
                nx.spacebox.position.z = 0

                setTimeout(function(){
                    nx.doorSeqIdx[1] = {on:1} 

                    nx.camz.freeCam.setTarget(nx.orbyMesh.position)

                    if(nx.cinemaStop){nx.doorSeqIdx[0]={on:1}; return;}
                    // nx.cinemaStop = 1;  //stop movies
                    // nx.cinematicMode = 0 //switch to playMode;

                },3000)

                // nx.cinematicMode = 0; //turn off

            }/*use for sequence config*/
            // if(nx.doorSeqIdx[1].on) { nx.doorSeqIdx[1].on = 0; //one-time-trigger;

                    // nx.camz.freeCam.position
                    // Vector3 {x: 31, y: 264, z: -31.00395631068568}
                    // nx.camz.freeCam._currentTarget
                    // Vector3 {x: 30.30766990552854, y: 263.827611349969, z: -30.325606638488807}
                    //     nx.doorSeqIdx[2] = {on:1};


            // }

            //TODO - use if else instead to skip frames and be faster-.


            if(nx.doorSeqIdx[1] && nx.doorSeqIdx[1].on){ //ANM-COMPLEX:MECHANISM-TO-PLAY-MULTIPLE-ANIMATIONS-CONCURRENTLY-. 
                var NUM = 1;
                if(nx.cinemaStop){nx.doorSeqIdx[NUM]={on:1}; return;}

                if(!nx.doorSeqIdx[1].initSeq){ nx.doorSeqIdx[1].initSeq=1; //one time init

                    // var descentPath = [{"pos":{"x":289.8837021722073,"y":316.6532450734138,"z":-356.37048485906547},"rot":{"x":0.024698191527708777,"y":-0.9283897151929095,"z":-0.0627452318772955,"w":-0.36543887578629836}},{"pos":{"x":288.1796006097073,"y":316.2840141860512,"z":-354.54126122625297},"rot":{"x":0.028911363885670005,"y":-0.9276042878574633,"z":-0.07344870691686428,"w":-0.3651297107042365}},{"pos":{"x":286.4754990472073,"y":315.8856105704048,"z":-352.71203759344047},"rot":{"x":0.02891136388567259,"y":-0.9276042878574614,"z":-0.07344870691687003,"w":-0.3651297107042398}},{"pos":{"x":284.68210415751685,"y":315.4872069547584,"z":-350.9702693594446},"rot":{"x":0.11859684314760657,"y":-0.9108979019881883,"z":-0.03502236841231507,"w":-0.39366640021689775}},{"pos":{"x":282.8038973758211,"y":315.1048512447359,"z":-349.32031801419384},"rot":{"x":0.11831897208525023,"y":-0.901106575073262,"z":-0.029144943840243152,"w":-0.4161227384474137}},{"pos":{"x":280.84557676890006,"y":314.739495164498,"z":-347.7662875793234},"rot":{"x":0.11774747530984334,"y":-0.8907729388390594,"z":-0.023127572604907345,"w":-0.4383197678357525}},{"pos":{"x":278.40533454031936,"y":314.39205802539044,"z":-346.02124711832715},"rot":{"x":0.1168736756586006,"y":-0.8799017687877899,"z":-0.016990092971455838,"w":-0.46024423729470854}},{"pos":{"x":275.8809215182326,"y":313.99767078770293,"z":-344.4003333167706},"rot":{"x":0.11569055687594841,"y":-0.868498049722394,"z":-0.010753608940203732,"w":-0.4818829656388486}},{"pos":{"x":273.2786507333742,"y":313.62680931687913,"z":-342.90761644616856},"rot":{"x":0.11419224048422047,"y":-0.8565671862112039,"z":-0.004439092601434824,"w":-0.5032226964041772}},{"pos":{"x":270.60503392567506,"y":313.2804021954649,"z":-341.54683492673894},"rot":{"x":0.1123745808587925,"y":-0.8441148698708316,"z":0.0019314914902660366,"w":-0.5242502354604932}},{"pos":{"x":267.93141942372193,"y":312.95931360955353,"z":-340.1860561181452},"rot":{"x":0.024904223481854976,"y":-0.8515562770515549,"z":-0.040619820338125896,"w":-0.5220935901374002}},{"pos":{"x":265.2578049217688,"y":312.7124493131227,"z":-338.82527730955144},"rot":{"x":0.01825133148294743,"y":-0.8520046294531849,"z":-0.029768677843300027,"w":-0.5223684773308038}},{"pos":{"x":262.5841904198157,"y":312.50255871003804,"z":-337.4644985009577},"rot":{"x":0.01825133148294762,"y":-0.8520046294531902,"z":-0.029768677843301016,"w":-0.5223684773307951}},{"pos":{"x":259.91057591786256,"y":312.2926681069534,"z":-336.10371969236394},"rot":{"x":0.01825133148294527,"y":-0.8520046294531914,"z":-0.029768677843297335,"w":-0.5223684773307933}},{"pos":{"x":257.23696141590943,"y":312.1852810901022,"z":-334.7429408837702},"rot":{"x":-0.006073819344144049,"y":-0.852466961856076,"z":0.009906651002595092,"w":-0.5226519357357811}},{"pos":{"x":254.63469931735858,"y":312.25502053871924,"z":-333.25023729577794},"rot":{"x":-0.09267040325080943,"y":-0.8603118902023997,"z":-0.04033142037219082,"w":-0.4996489011980992}},{"pos":{"x":252.11029163542005,"y":312.2257733802476,"z":-331.6293372230206},"rot":{"x":-0.08504327249436437,"y":-0.8734452930760073,"z":-0.052050172396340924,"w":-0.47660438663563337}},{"pos":{"x":249.67004401297564,"y":312.0974299465137,"z":-329.88428422770215},"rot":{"x":-0.07810063719735912,"y":-0.8857173741062755,"z":-0.06405164551263197,"w":-0.4531030902375029}},{"pos":{"x":247.32006321643004,"y":312.0605494346134,"z":-328.019447438938},"rot":{"x":-0.13377473151651592,"y":-0.8876408697192547,"z":0.03779518450461306,"w":-0.4390552717369319}},{"pos":{"x":245.0662271439541,"y":312.382565311961,"z":-326.0394902596107},"rot":{"x":-0.1151409263918123,"y":-0.9027519263244577,"z":0.006183217286205099,"w":-0.4144192254361613}},{"pos":{"x":242.9141548718327,"y":312.3697618158171,"z":-323.9493696180523},"rot":{"x":-0.08174682469339438,"y":-0.9172273923424843,"z":-0.05994123337705727,"w":-0.385251107630323}},{"pos":{"x":240.86923777266438,"y":311.9794446971012,"z":-321.7543047312692},"rot":{"x":-0.06618018431969844,"y":-0.9265833739378758,"z":-0.09508951323619733,"w":-0.357800808855732}},{"pos":{"x":238.9365791160213,"y":311.3410364039739,"z":-319.4597764166622},"rot":{"x":-0.05271833553235968,"y":-0.9336162409928233,"z":-0.1299486779240437,"w":-0.32968899399118706}},{"pos":{"x":237.12102525544813,"y":310.4561244354322,"z":-317.07152643638415},"rot":{"x":-0.04154740541126277,"y":-0.9384620777564059,"z":-0.16388015207230072,"w":-0.3011744303115413}},{"pos":{"x":235.42710529465865,"y":309.3269327903209,"z":-314.595526358396},"rot":{"x":-0.03274198354827385,"y":-0.9413311825769356,"z":-0.1963859834081253,"w":-0.2724997481511789}},{"pos":{"x":233.85904707785647,"y":307.95527277692406,"z":-312.0379464533528},"rot":{"x":-0.026219081257378093,"y":-0.9424395251005598,"z":-0.22728773616876216,"w":-0.2438454147478054}},{"pos":{"x":232.42077794961708,"y":306.3436707572127,"z":-309.40518566393825},"rot":{"x":-0.022062562514755916,"y":-0.942133772822529,"z":-0.2558811395000902,"w":-0.2154577450234857}},{"pos":{"x":231.11587976485382,"y":304.4974992432952,"z":-306.70384057770764},"rot":{"x":-0.018596270976812077,"y":-0.9394210048955215,"z":-0.2868851046995725,"w":-0.1866528622024341}},{"pos":{"x":230.02550388567641,"y":302.4061336821057,"z":-304.12485612108884},"rot":{"x":-0.03295434096983674,"y":-0.9501781210417469,"z":-0.2610702112979899,"w":-0.1670864880163617}},{"pos":{"x":229.06538357564818,"y":300.7731612714102,"z":-301.4946038161367},"rot":{"x":-0.03747435005435323,"y":-0.9521578358056497,"z":-0.26793627755560256,"w":-0.14213120688839648}},{"pos":{"x":228.23792733248106,"y":299.0878723656631,"z":-298.8196562191202},"rot":{"x":-0.04220029342496819,"y":-0.9532431511036897,"z":-0.27538974745991496,"w":-0.11707739791573335}},{"pos":{"x":227.5451992119389,"y":297.3389801416776,"z":-296.10668633249145},"rot":{"x":-0.04741515023122293,"y":-0.9537203858957295,"z":-0.28228370520533175,"w":-0.09211481330926401}},{"pos":{"x":226.98892240697694,"y":295.527901648765,"z":-293.36250303516954},"rot":{"x":-0.057835744510139474,"y":-0.9606863762329239,"z":-0.26218898877571334,"w":-0.07066574376725761}},{"pos":{"x":226.43264799291444,"y":293.873018139559,"z":-290.6183013750133},"rot":{"x":0.025033203134039343,"y":-0.9632157161843623,"z":-0.24949704116526633,"w":-0.0966439304150719}},{"pos":{"x":225.87637357885194,"y":292.31838204758253,"z":-287.87409971485704},"rot":{"x":0.025042568145060746,"y":-0.9631915345423261,"z":-0.2495903789026652,"w":-0.0966415041580125}},{"pos":{"x":225.32009916478944,"y":290.76280073203554,"z":-285.1298980547008},"rot":{"x":0.022404148100425212,"y":-0.9696251837440497,"z":-0.22329418376682994,"w":-0.09728702222350817}},{"pos":{"x":224.76382475072694,"y":289.36739494631667,"z":-282.38569639454454},"rot":{"x":0.019929802583911357,"y":-0.9749759571483423,"z":-0.19863326115595636,"w":-0.09782389030390143}},{"pos":{"x":224.20755033666444,"y":288.17707951537284,"z":-279.6414947343883},"rot":{"x":0.02404657853292156,"y":-0.9657093756851186,"z":-0.23966370432052136,"w":-0.09689413091660395}},{"pos":{"x":223.65127592260194,"y":286.70062727684774,"z":-276.89729307423204},"rot":{"x":0.0246128617551662,"y":-0.9642911631303498,"z":-0.24530764799225754,"w":-0.09675183502882395}},{"pos":{"x":223.09500150853944,"y":285.1774542770787,"z":-274.1530914140758},"rot":{"x":0.02461286175516571,"y":-0.9642911631303498,"z":-0.24530764799225815,"w":-0.09675183502882179}},{"pos":{"x":222.53872709447694,"y":283.65428127730974,"z":-271.40888975391954},"rot":{"x":0.024616376991213062,"y":-0.9642822498125767,"z":-0.24534268310094653,"w":-0.09675094071403306}},{"pos":{"x":221.98245268041444,"y":282.1308686631937,"z":-268.6646880937633},"rot":{"x":0.024617605964110903,"y":-0.9642791332793421,"z":-0.24535493183715887,"w":-0.09675062801770053}},{"pos":{"x":221.42617826635194,"y":280.6073397861596,"z":-265.92048643360704},"rot":{"x":0.020590382166598274,"y":-0.9736114537458075,"z":-0.20521702314806017,"w":-0.09768698330615558}},{"pos":{"x":220.86990385228944,"y":279.3237577441147,"z":-263.1762847734508},"rot":{"x":0.014864233721473661,"y":-0.9839135598647288,"z":-0.14814653613599302,"w":-0.09872064171740863}},{"pos":{"x":220.31362943822694,"y":278.46101112030044,"z":-260.43208311329454},"rot":{"x":0.014823812051946163,"y":-0.9839741348755239,"z":-0.1477436677179113,"w":-0.09872671949109035}},{"pos":{"x":219.75735502416444,"y":277.60144864983795,"z":-257.6878814531383},"rot":{"x":0.014773426362519925,"y":-0.9840494055936626,"z":-0.14724149145378693,"w":-0.09873427175370802}},{"pos":{"x":219.20108061010194,"y":276.7443386409469,"z":-254.94367979298204},"rot":{"x":0.014773426362518558,"y":-0.984049405593664,"z":-0.14724149145377924,"w":-0.0987342717537042}},{"pos":{"x":218.64480619603944,"y":275.8872314001797,"z":-252.19949339161485},"rot":{"x":0.013861378711366756,"y":-0.9853666678084708,"z":-0.13815143657163548,"w":-0.09886643882250469}},{"pos":{"x":218.08853178197694,"y":275.09669739262205,"z":-249.45530699024766},"rot":{"x":0.013130168207890472,"y":-0.9863609764713505,"z":-0.13086372128768417,"w":-0.09896620245344329}},{"pos":{"x":217.53225736791444,"y":274.34040434161153,"z":-246.71112058888048},"rot":{"x":0.00978998224149124,"y":-0.990208435405387,"z":-0.09757327455195558,"w":-0.09935223597350586}},{"pos":{"x":216.97598295385194,"y":273.85986513521675,"z":-243.9669341875133},"rot":{"x":0.005575598618399802,"y":-0.9934511882327619,"z":-0.055570010380505644,"w":-0.09967759650628713}},{"pos":{"x":216.41970853978944,"y":273.54563826282134,"z":-241.2227477861461},"rot":{"x":0.005576182687173346,"y":-0.9934508625987754,"z":-0.055575831586447855,"w":-0.09967756383390876}},{"pos":{"x":215.72697716604046,"y":273.2313582035572,"z":-238.50979302194457},"rot":{"x":0.10074368304589644,"y":-0.9868073378953898,"z":-0.010385998462872591,"w":-0.12630961657012266}},{"pos":{"x":214.89951790865294,"y":273.05968295342075,"z":-235.83485397302644},"rot":{"x":0.0996679560797194,"y":-0.9836890402037205,"z":0.005348523011354564,"w":-0.14964479281141485}},{"pos":{"x":213.93940701314818,"y":272.84279965950594,"z":-233.20461053000392},"rot":{"x":0.10303058961459338,"y":-0.9785934947449647,"z":-0.02079481131671555,"w":-0.176937970681276}},{"pos":{"x":212.8490359901686,"y":272.46365762825235,"z":-230.625634319331},"rot":{"x":0.10762057274844727,"y":-0.9719598670085183,"z":-0.04636798252388023,"w":-0.20386721031775729}},{"pos":{"x":211.63112604550417,"y":271.9232735289072,"z":-228.10438898255313},"rot":{"x":0.08092750629071051,"y":-0.9673944518684776,"z":0.11252981635698887,"w":-0.21198055016986153}},{"pos":{"x":210.2887272663223,"y":272.26689435492153,"z":-225.64715420268354},"rot":{"x":0.07654832740463972,"y":-0.9612491484496165,"z":0.1217592339039921,"w":-0.2351916604294292}},{"pos":{"x":208.82520256563478,"y":272.4043406290893,"z":-223.26008709995213},"rot":{"x":0.09060951982409692,"y":-0.9578753033522883,"z":0.050886223673813236,"w":-0.26772263704294186}},{"pos":{"x":207.2441963869939,"y":272.1302130688501,"z":-220.94914633782324},"rot":{"x":0.09946001994591648,"y":-0.9500207664844896,"z":0.013446754357294893,"w":-0.2956136540788251}},{"pos":{"x":205.54967972409534,"y":271.6234351682413,"z":-218.72010782011736},"rot":{"x":0.11831622148618956,"y":-0.93674586244467,"z":-0.053614379999015874,"w":-0.32501378306672374}},{"pos":{"x":203.74587309292195,"y":270.7055869178378,"z":-216.57854990783},"rot":{"x":0.1389526133181014,"y":-0.9183478649997493,"z":-0.11601253862845304,"w":-0.3519523561271522}},{"pos":{"x":201.8372915988878,"y":269.3776707971093,"z":-214.52982341324707},"rot":{"x":0.16040330032270278,"y":-0.8962541672772437,"z":-0.1714075624200584,"w":-0.37632259622426695}},{"pos":{"x":199.8286984777079,"y":267.6422712446814,"z":-212.57905214644512},"rot":{"x":0.18187899664146634,"y":-0.872043362773884,"z":-0.21859532053576256,"w":-0.39834217685625084}},{"pos":{"x":197.72511969959154,"y":265.50375366932536,"z":-210.7311029776549},"rot":{"x":0.20291624674771616,"y":-0.8469923857899789,"z":-0.2576278648769813,"w":-0.41839787100145154}},{"pos":{"x":195.5317975680821,"y":262.9674132566879,"z":-208.99060170798276},"rot":{"x":0.21106623246564618,"y":-0.8345565998951826,"z":-0.25710349859078196,"w":-0.4391629744144305}},{"pos":{"x":193.25423590299602,"y":260.041462529457,"z":-207.36188793543863},"rot":{"x":0.19799468466066442,"y":-0.8395554029837764,"z":-0.20494434663820182,"w":-0.4625393442161576}},{"pos":{"x":190.89812318589728,"y":258.06203754361945,"z":-205.84904624376455},"rot":{"x":0.20155612623382713,"y":-0.8288002199839801,"z":-0.19658735983990294,"w":-0.4835480671901151}},{"pos":{"x":188.46933203376645,"y":256.19605105884295,"z":-204.45584586570786},"rot":{"x":0.20927465035850754,"y":-0.8145143899599293,"z":-0.19747714154543042,"w":-0.503759077171394}},{"pos":{"x":185.97394922581236,"y":254.31722377482373,"z":-203.1857719244615},"rot":{"x":0.2148859561150215,"y":-0.8011866273195433,"z":-0.19363782167585167,"w":-0.5238591490901914}},{"pos":{"x":183.41821421434085,"y":252.35204861998278,"z":-202.0420109223603},"rot":{"x":0.21150623976359276,"y":-0.7927264759931472,"z":-0.17317053117319958,"w":-0.5448502656085834}},{"pos":{"x":180.86247385789554,"y":250.64495045834246,"z":-200.89824261181343},"rot":{"x":0.146896811920383,"y":-0.8079983869591406,"z":-0.22667669483100802,"w":-0.523619718249365}},{"pos":{"x":178.30673350145022,"y":248.9395672160237,"z":-199.75447430126655},"rot":{"x":0.13749547544912383,"y":-0.8119284635015098,"z":-0.21216947816347206,"w":-0.5261665866652278}},{"pos":{"x":175.7509931450049,"y":247.27156090048555,"z":-198.61070599071968},"rot":{"x":0.11730765930569279,"y":-0.8194365964335609,"z":-0.1810176282395328,"w":-0.5310321984212776}},{"pos":{"x":173.1952527885596,"y":245.97102750816546,"z":-197.4669376801728},"rot":{"x":0.1173076593056933,"y":-0.8194365964335601,"z":-0.18101762823953307,"w":-0.5310321984212786}},{"pos":{"x":170.6395124321143,"y":244.6704941158454,"z":-196.32316936962593},"rot":{"x":0.11730765930569387,"y":-0.8194365964335597,"z":-0.18101762823953374,"w":-0.5310321984212789}},{"pos":{"x":168.08377207566897,"y":243.3699607235253,"z":-195.17940105907905},"rot":{"x":0.11050473769156262,"y":-0.8216852419540869,"z":-0.17052002950661144,"w":-0.532489423030765}},{"pos":{"x":165.52803171922366,"y":242.14886927146384,"z":-194.03563274853218},"rot":{"x":0.09731169895672023,"y":-0.8256483160118515,"z":-0.15016183128504446,"w":-0.5350576753379698}},{"pos":{"x":162.97229136277835,"y":241.0955479471262,"z":-192.8918644379853},"rot":{"x":0.09731169895672068,"y":-0.825648316011851,"z":-0.15016183128504484,"w":-0.5350576753379704}},{"pos":{"x":160.41655100633304,"y":240.04222662278852,"z":-191.74809612743843},"rot":{"x":0.09275784499074212,"y":-0.8268954917484219,"z":-0.14313477227500565,"w":-0.5358659019611074}},{"pos":{"x":157.86081064988772,"y":239.1042504619677,"z":-190.60432781689155},"rot":{"x":0.04513155869626999,"y":-0.8362975718937797,"z":-0.0696425771540014,"w":-0.5419588776849794}},{"pos":{"x":155.3050702934424,"y":238.63465364579753,"z":-189.46055950634468},"rot":{"x":0.0451315586962708,"y":-0.8362975718937798,"z":-0.06964257715400274,"w":-0.5419588776849789}},{"pos":{"x":152.7493299369971,"y":238.16505682962733,"z":-188.3167911957978},"rot":{"x":0.04513155869627002,"y":-0.8362975718937797,"z":-0.06964257715400146,"w":-0.5419588776849794}},{"pos":{"x":150.1935895805518,"y":237.69546001345716,"z":-187.17302288525093},"rot":{"x":0.045131558696271286,"y":-0.8362975718937805,"z":-0.0696425771540037,"w":-0.5419588776849777}},{"pos":{"x":147.63784922410647,"y":237.225863197287,"z":-186.02925457470405},"rot":{"x":0.04513155869627054,"y":-0.8362975718937802,"z":-0.0696425771540024,"w":-0.5419588776849785}},{"pos":{"x":145.08210886766116,"y":236.75626638111683,"z":-184.88548626415718},"rot":{"x":0.04513155869627134,"y":-0.8362975718937791,"z":-0.06964257715400338,"w":-0.54195887768498}},{"pos":{"x":142.52636851121585,"y":236.28666956494664,"z":-183.7417179536103},"rot":{"x":0.045131558696271015,"y":-0.8362975718937807,"z":-0.06964257715400334,"w":-0.5419588776849774}},{"pos":{"x":140.030986579328,"y":235.81707274877647,"z":-182.47164533754744},"rot":{"x":-0.0854560684107859,"y":-0.848230607560603,"z":-0.051676408747924715,"w":-0.520126566854702}},{"pos":{"x":137.6022055689227,"y":235.78151137626267,"z":-181.07845023582504},"rot":{"x":-0.0848595359224201,"y":-0.8611508410605065,"z":-0.052396029649167376,"w":-0.4984704045184802}},{"pos":{"x":135.24608461167853,"y":235.708275205665,"z":-179.56559897813952},"rot":{"x":-0.08080495353724303,"y":-0.8738059076915494,"z":-0.058949066377307846,"w":-0.47587687771148834}},{"pos":{"x":132.9685150778007,"y":235.57780638395204,"z":-177.93688488368082},"rot":{"x":-0.07714754282189314,"y":-0.8857750070660971,"z":-0.06568866719521249,"w":-0.4529193002022722}},{"pos":{"x":130.7752057712071,"y":235.3904291540019,"z":-176.19638173727967},"rot":{"x":-0.07390967262609402,"y":-0.8970474256624262,"z":-0.07256844449881138,"w":-0.42962436763728845}},{"pos":{"x":128.67162238513845,"y":235.1763238429654,"z":-174.34842780675643},"rot":{"x":-0.08227294992704365,"y":-0.9071922350176638,"z":-0.05800047436703642,"w":-0.40849645703133947}},{"pos":{"x":126.66301854606728,"y":234.98288844309297,"z":-172.39765566207015},"rot":{"x":-0.07697467835825225,"y":-0.9174118664289824,"z":-0.06974743845657039,"w":-0.3841427612954348}},{"pos":{"x":124.75442874488388,"y":234.70315482937914,"z":-170.34893046891113},"rot":{"x":-0.07236316038260619,"y":-0.9267602654409447,"z":-0.0816341468114096,"w":-0.35946467071694854}},{"pos":{"x":122.9506155245626,"y":234.33782853300386,"z":-168.20737986388468},"rot":{"x":-0.06846528893740463,"y":-0.9352339794082958,"z":-0.0935708763895552,"w":-0.33450620182969937}},{"pos":{"x":121.25609299313831,"y":233.88781610220067,"z":-165.97834756621108},"rot":{"x":-0.06529962176154097,"y":-0.9428353495237739,"z":-0.10546932762431797,"w":-0.3093116292942392}},{"pos":{"x":119.67509696072437,"y":233.37085851415705,"z":-163.6674080565732},"rot":{"x":-0.06580148929271461,"y":-0.9500027558243552,"z":-0.10944988417128951,"w":-0.2849309579317108}},{"pos":{"x":118.21157036348635,"y":232.80379286566588,"z":-161.28033551303807},"rot":{"x":-0.06390644072974487,"y":-0.9560198884920265,"z":-0.12104342994395728,"w":-0.2594039855290417}},{"pos":{"x":116.86917923165433,"y":232.1558614083124,"z":-158.8231032993632},"rot":{"x":-0.06274012019877602,"y":-0.9611930880369948,"z":-0.13239958904064714,"w":-0.23375601307606353}},{"pos":{"x":115.6512752764612,"y":231.42876886167267,"z":-156.30185297181094},"rot":{"x":-0.06758865598220333,"y":-0.9671847906454719,"z":-0.12549301388721207,"w":-0.21032559946924684}},{"pos":{"x":114.5609042763014,"y":230.76728839795186,"z":-153.7228785820263},"rot":{"x":-0.06872080949876354,"y":-0.9714845493889763,"z":-0.13118347470577849,"w":-0.18516510633607608}},{"pos":{"x":113.6007915956677,"y":230.06147369808264,"z":-151.0926415358633},"rot":{"x":-0.07021733711038125,"y":-0.975089779192251,"z":-0.1367149812844752,"w":-0.1599326795133497}},{"pos":{"x":112.7733353525006,"y":229.31236372250996,"z":-148.41769393884675},"rot":{"x":-0.07210433561593312,"y":-0.978023361761579,"z":-0.14189897327501044,"w":-0.13466978138194996}},{"pos":{"x":112.08060723195842,"y":228.52191235767506,"z":-145.70473931100707},"rot":{"x":-0.07436098620400161,"y":-0.9802969758310168,"z":-0.14669823761980288,"w":-0.10939794324654803}},{"pos":{"x":111.38787346730999,"y":227.7804227596842,"z":-142.99178765085082},"rot":{"x":0.011478654085788333,"y":-0.9879834536509766,"z":-0.09135045473023809,"w":-0.12414519818682564}},{"pos":{"x":110.69513970266155,"y":227.25822302514462,"z":-140.27883599069457},"rot":{"x":0.00649545518237753,"y":-0.9908501771561519,"z":-0.051692714159292934,"w":-0.12450541672731263}},{"pos":{"x":110.00240593801311,"y":226.97837259223502,"z":-137.56588433053832},"rot":{"x":0.005820806493414864,"y":-0.9911156987862546,"z":-0.04632366443801923,"w":-0.12453878088464808}},{"pos":{"x":109.30967217336467,"y":226.7160621626929,"z":-134.85293267038207},"rot":{"x":0.005820806493413799,"y":-0.991115698786255,"z":-0.046323664438011246,"w":-0.1245387808846468}},{"pos":{"x":108.61693840871624,"y":226.4537517331508,"z":-132.13998101022582},"rot":{"x":0.005820806493413822,"y":-0.9911156987862549,"z":-0.04632366443801077,"w":-0.12453878088464858}},{"pos":{"x":107.9242046440678,"y":226.1913638820962,"z":-129.42702935006957},"rot":{"x":0.005826506700121286,"y":-0.9911135774868868,"z":-0.04636902833441436,"w":-0.1245385143324776}},{"pos":{"x":107.23147087941936,"y":225.92879488607133,"z":-126.71407768991332},"rot":{"x":0.005826506700119748,"y":-0.9911135774868871,"z":-0.046369028334401624,"w":-0.12453851433247899}},{"pos":{"x":106.53873711477092,"y":225.6662258900465,"z":-124.00112602975707},"rot":{"x":0.005826506700119798,"y":-0.991113577486887,"z":-0.04636902833440168,"w":-0.12453851433247988}},{"pos":{"x":105.84600335012249,"y":225.63966924007417,"z":-121.28817436960082},"rot":{"x":-0.005827383425680781,"y":-0.9911132510338387,"z":0.04637600557041464,"w":-0.12453847331197716}},{"pos":{"x":105.01854409273497,"y":225.90227714405694,"z":-118.61323532068269},"rot":{"x":0.09391792791421988,"y":-0.9832067050309632,"z":0.06159240014329556,"w":-0.1438414899917407}},{"pos":{"x":104.0584331972302,"y":226.1207720478957,"z":-115.98299187766015},"rot":{"x":0.09339951493429137,"y":-0.9795477513622923,"z":0.05584231484358699,"w":-0.1692464749530263}},{"pos":{"x":102.96806217425062,"y":226.2919440606594,"z":-113.40402329638178},"rot":{"x":0.09313944761622668,"y":-0.9751592886564845,"z":0.05063075080969755,"w":-0.1944888997273869}},{"pos":{"x":101.75015985898074,"y":226.42064504794354,"z":-110.88277033020938},"rot":{"x":0.09329723508764162,"y":-0.9700671294862524,"z":0.04485652416343336,"w":-0.21966629795050222}},{"pos":{"x":100.40776870919339,"y":226.5016445022196,"z":-108.42553555033976},"rot":{"x":0.09386141294037877,"y":-0.9642578978607358,"z":0.03879709727806953,"w":-0.2447274541542624}},{"pos":{"x":98.94424400850588,"y":226.53423074961145,"z":-106.03846844760838},"rot":{"x":0.09478403786806196,"y":-0.957730831769665,"z":0.0327737344979057,"w":-0.26961736288724464}},{"pos":{"x":97.36324545925953,"y":226.51875464206083,"z":-103.72752768547946},"rot":{"x":0.09604397469062294,"y":-0.9504930569308013,"z":0.026879447047100474,"w":-0.2943059615067448}},{"pos":{"x":95.78224417752125,"y":226.45499394975002,"z":-101.41659171135836},"rot":{"x":0.0033640195838086544,"y":-0.9552745888823416,"z":-0.010874960612694648,"w":-0.2955010633476388}},{"pos":{"x":94.08771988522815,"y":226.39123325743924,"z":-99.18756082304702},"rot":{"x":0.0976767597461066,"y":-0.942546727061052,"z":0.02097470057874224,"w":-0.318786730977988}},{"pos":{"x":92.28391325405478,"y":226.27911252411053,"z":-97.04600291075968},"rot":{"x":0.09964573408348194,"y":-0.9339022863458097,"z":0.015205329180133818,"w":-0.3430248463326769}},{"pos":{"x":90.37532413062607,"y":226.11890838637203,"z":-94.99727641617675},"rot":{"x":0.10193577033069554,"y":-0.9245701194597925,"z":0.009609614416242956,"w":-0.36699706843510815}},{"pos":{"x":88.36672338005165,"y":225.91102219355514,"z":-93.04649751998028},"rot":{"x":0.10020356020067017,"y":-0.9153591715384752,"z":0.016187939908958678,"w":-0.38963416714273214}},{"pos":{"x":86.26313697254078,"y":225.80091257083907,"z":-91.19854835119003},"rot":{"x":0.09388745731064223,"y":-0.906163058635061,"z":0.03369735513593931,"w":-0.410996526483784}},{"pos":{"x":84.06982247042586,"y":225.70788002653833,"z":-89.45803945212339},"rot":{"x":0.09631675206844051,"y":-0.8951794752013016,"z":0.02819923281386877,"w":-0.43425982282271763}},{"pos":{"x":81.79226080533975,"y":225.567201460245,"z":-87.82932567957926},"rot":{"x":0.09904971086737038,"y":-0.8835381410120545,"z":0.022892661735717097,"w":-0.45719299447028605}},{"pos":{"x":79.43614045884648,"y":225.37922781289458,"z":-86.31647635851061},"rot":{"x":0.10206582691721326,"y":-0.871252743122966,"z":0.01781238604546553,"w":-0.47977488833804094}},{"pos":{"x":77.00735693611018,"y":225.14442978987526,"z":-84.92327598045395},"rot":{"x":0.10534223874151909,"y":-0.8583384236990401,"z":0.01299112954903732,"w":-0.5019854516734645}},{"pos":{"x":74.57856970466487,"y":224.863391893996,"z":-83.53007987449692},"rot":{"x":0.02505902442443677,"y":-0.8642417496949032,"z":-0.043263390059626934,"w":-0.5005861788540872}},{"pos":{"x":72.14978247321956,"y":224.58235399811676,"z":-82.13688376853989},"rot":{"x":0.02505902442443319,"y":-0.8642417496949059,"z":-0.0432633900596212,"w":-0.5005861788540836}},{"pos":{"x":69.72099524177425,"y":224.30131610223754,"z":-80.74368766258286},"rot":{"x":-0.0019577945520643566,"y":-0.8653173395218844,"z":0.003380052947311676,"w":-0.5012091820840207}},{"pos":{"x":67.29220801032893,"y":224.40363149084246,"z":-79.35049155662583},"rot":{"x":-0.015461204631261766,"y":-0.864912133654438,"z":0.026693143173670383,"w":-0.5009744787074367}},{"pos":{"x":64.86342077888364,"y":224.56545763456054,"z":-77.9572954506688},"rot":{"x":-0.009197463634745207,"y":-0.8651782351997112,"z":0.01587904820433419,"w":-0.5011286100668422}},{"pos":{"x":62.43463354743832,"y":224.66827224012388,"z":-76.56409934471176},"rot":{"x":-0.00919746363474314,"y":-0.865178235199709,"z":0.01587904820433046,"w":-0.5011286100668462}},{"pos":{"x":60.0785164048914,"y":224.77108653249573,"z":-75.05125571642077},"rot":{"x":-0.09714091986650653,"y":-0.8720937175008426,"z":-0.032288612484256914,"w":-0.47851189649463327}},{"pos":{"x":57.80095450040811,"y":224.85963924271869,"z":-73.42254162196207},"rot":{"x":-0.0966531803910378,"y":-0.8839484544047581,"z":-0.03204203043195171,"w":-0.4563623570821047}},{"pos":{"x":55.60763756442,"y":224.93370947791155,"z":-71.68203084616636},"rot":{"x":-0.09619480083623431,"y":-0.8952373751454807,"z":-0.03187367410479852,"w":-0.43391320714374193}},{"pos":{"x":53.504054178351325,"y":224.99311179185688,"z":-69.83407691564314},"rot":{"x":-0.09577320465408104,"y":-0.9059521150803608,"z":-0.03177653042494571,"w":-0.41117941408326947}},{"pos":{"x":51.49545796867469,"y":225.03769794581473,"z":-67.88329714156231},"rot":{"x":-0.0953952482812893,"y":-0.916084779226716,"z":-0.03174301219738253,"w":-0.38817625513563625}},{"pos":{"x":49.5868681674913,"y":225.06735795765627,"z":-65.83457194840331},"rot":{"x":-0.09506963246036768,"y":-0.9256277010348686,"z":-0.03175957282555218,"w":-0.3649197906317122}},{"pos":{"x":47.678279758067475,"y":225.08205553664934,"z":-63.78584300553221},"rot":{"x":-0.0009612986747002223,"y":-0.9305044133475217,"z":0.0024421588997612684,"w":-0.36627127720523056}},{"pos":{"x":45.76969134864365,"y":225.09675311564237,"z":-61.737114062661114},"rot":{"x":-0.004188378519818813,"y":-0.9304467784024789,"z":0.010640486819493679,"w":-0.366248590558472}},{"pos":{"x":43.86110293921982,"y":225.19703393526783,"z":-59.68838511979002},"rot":{"x":-0.008068672965010156,"y":-0.9302818107437192,"z":0.020498292579990997,"w":-0.36618365490184834}},{"pos":{"x":41.95251452979599,"y":225.32048703920967,"z":-57.639656176918926},"rot":{"x":-0.00806867296500493,"y":-0.9302818107437191,"z":0.02049829257997767,"w":-0.3661836549018493}},{"pos":{"x":40.04392612037216,"y":225.44394014315148,"z":-55.59092723404783},"rot":{"x":-0.00806867296500969,"y":-0.930281810743719,"z":0.020498292579989773,"w":-0.36618365490184895}},{"pos":{"x":38.135337710948335,"y":225.56739324709332,"z":-53.54219829117674},"rot":{"x":-0.008068672965010494,"y":-0.9302818107437189,"z":0.02049829257999179,"w":-0.3661836549018494}},{"pos":{"x":36.22674930152451,"y":225.69084635103516,"z":-51.493469348305645},"rot":{"x":-0.008068672965011221,"y":-0.9302818107437184,"z":0.020498292579993596,"w":-0.36618365490184995}},{"pos":{"x":34.31816089210068,"y":225.814299454977,"z":-49.44474040543455},"rot":{"x":-0.008068672965010874,"y":-0.9302818107437186,"z":0.020498292579992743,"w":-0.3661836549018495}},{"pos":{"x":32.40957248267685,"y":225.93775255891885,"z":-47.39601146256346},"rot":{"x":-0.008068672965006407,"y":-0.9302818107437196,"z":0.020498292579981512,"w":-0.3661836549018478}},{"pos":{"x":30.500984073253022,"y":226.0612056628607,"z":-45.347282519692364},"rot":{"x":-0.008068672965007226,"y":-0.9302818107437184,"z":0.020498292579983406,"w":-0.3661836549018506}},{"pos":{"x":28.592395663829194,"y":226.1846587668025,"z":-43.29855357682127},"rot":{"x":-0.004610386355560532,"y":-0.9304339002118448,"z":0.011712588777968753,"w":-0.3662435213602359}},{"pos":{"x":26.683807254405366,"y":225.82064854169317,"z":-41.249824633950176},"rot":{"x":0.03930755054851075,"y":-0.9251337244205251,"z":-0.09985999869374312,"w":-0.3641572312484948}},{"pos":{"x":24.87999784878134,"y":225.20905212489123,"z":-39.108266399529214},"rot":{"x":-0.051656457603665135,"y":-0.9334539587174476,"z":-0.13238734757430282,"w":-0.3293461819192796}},{"pos":{"x":23.076187729152434,"y":224.54344722245025,"z":-36.966706798699136},"rot":{"x":0.03992270051583318,"y":-0.9329842358284072,"z":-0.1093687284545415,"w":-0.3405658158351232}},{"pos":{"x":21.272377609523527,"y":223.8778423200093,"z":-34.82514719786906},"rot":{"x":0.039922700515832334,"y":-0.9329842358284076,"z":-0.10936872845453943,"w":-0.3405658158351226}},{"pos":{"x":19.46856748989462,"y":223.21223741756836,"z":-32.68358759703898},"rot":{"x":0.03992270051583415,"y":-0.9329842358284068,"z":-0.10936872845454418,"w":-0.3405658158351231}},{"pos":{"x":17.664757370265715,"y":222.54663251512738,"z":-30.5420279962089},"rot":{"x":0.004938084076394723,"y":-0.9392753046118844,"z":-0.013527941984353486,"w":-0.3428622350997179}},{"pos":{"x":15.860947250636809,"y":222.5,"z":-28.400470302727456},"rot":{"x":0,"y":-0.9393727178644695,"z":0,"w":-0.3428977937110704}},{"pos":{"x":14.057138084682219,"y":222.5,"z":-26.25891260924601},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":12.253328918727629,"y":222.5,"z":-24.117354915764565},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":10.449519752773039,"y":222.5,"z":-21.97579722228312},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":8.64571058681845,"y":222.5,"z":-19.834239528801675},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":6.841901420863859,"y":222.5,"z":-17.69268183532023},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":5.038091778072111,"y":222.5,"z":-15.551124141838784},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":3.2342821352803637,"y":222.5,"z":-13.409566448357339},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371107015}},{"pos":{"x":1.4304724924886156,"y":222.5,"z":-11.268008754875893},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371107015}},{"pos":{"x":-0.37333703109384286,"y":222.5,"z":-9.126451061394448},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371106993}},{"pos":{"x":-2.1771465546763014,"y":222.5,"z":-6.984893367913003},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371107015}},{"pos":{"x":-3.98095619746805,"y":222.5,"z":-4.843335197594399},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371107015}},{"pos":{"x":-5.784765840259798,"y":222.5,"z":-2.7017770272757957},"rot":{"x":0,"y":-0.9393727178644695,"z":0,"w":-0.3428977937110704}},{"pos":{"x":-7.588575244632967,"y":222.5,"z":-0.5602188569571922},"rot":{"x":0,"y":-0.9393727178644695,"z":0,"w":-0.3428977937110704}},{"pos":{"x":-9.392384887424715,"y":222.5,"z":1.5813392537567665},"rot":{"x":0,"y":-0.9393727178644695,"z":0,"w":-0.3428977937110704}},{"pos":{"x":-11.196194053379305,"y":222.5,"z":3.7228973644707253},"rot":{"x":0,"y":-0.9393727178644695,"z":0,"w":-0.3428977937110704}},{"pos":{"x":-13.000003219333895,"y":222.5,"z":5.864455415580039},"rot":{"x":0,"y":-0.9393727178644695,"z":0,"w":-0.3428977937110704}},{"pos":{"x":-14.803812385288484,"y":222.5,"z":8.006013347480064},"rot":{"x":0,"y":-0.9393727178644695,"z":0,"w":-0.3428977937110704}},{"pos":{"x":-16.607621551243074,"y":222.5,"z":10.147571040961509},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371107015}},{"pos":{"x":-18.41143167087198,"y":222.5,"z":12.289128734442954},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371107015}},{"pos":{"x":-20.215241790500887,"y":222.5,"z":14.4306864279244},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371107015}},{"pos":{"x":-22.019051910129793,"y":222.5,"z":16.572244121405845},"rot":{"x":0,"y":-0.9393727178644696,"z":0,"w":-0.34289779371107015}},{"pos":{"x":-23.8228620297587,"y":222.5,"z":18.713802768561607},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":-25.626672149387606,"y":222.5,"z":20.855360462043052},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":-27.43048226901651,"y":222.5,"z":22.996918155524497},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":-29.234292388645418,"y":222.5,"z":25.138475849005943},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":-31.03810250827432,"y":222.5,"z":27.280033542487388},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":-32.84191262790323,"y":222.5,"z":29.421591235968833},"rot":{"x":0.05595908002532573,"y":-0.9267793706818075,"z":-0.1533005573617306,"w":-0.3383009289876911}},{"pos":{"x":-34.64572181894873,"y":222.00000751018524,"z":31.563149806282013},"rot":{"x":0,"y":-0.9393727178644694,"z":0,"w":-0.3428977937110706}},{"pos":{"x":-36.449531992335366,"y":222.00000751018524,"z":33.70470947093554},"rot":{"x":0,"y":-0.9393727178644693,"z":0,"w":-0.342897793711071}},{"pos":{"x":-38.253342165722,"y":222.00000751018524,"z":35.84626722824038},"rot":{"x":0,"y":-0.9393727178644693,"z":0,"w":-0.342897793711071}},{"pos":{"x":-40.05715233910864,"y":222.00000751018524,"z":37.98782689289391},"rot":{"x":0,"y":-0.9393727178644693,"z":0,"w":-0.342897793711071}},{"pos":{"x":-40.057152988229745,"y":221.9550480829195,"z":37.98782843315087},"rot":{"x":0,"y":-0.9393727178644693,"z":0,"w":-0.342897793711071}}];
                    // nx.reducedPath = nx.editz.decomposePath({aPath:descentPath}) //reduce path in half
                    // nx.truncatedPath = nx.editz.truncatePath(nx.reducedPath)
                    // console.log(JSON.stringify(nx.truncatedPath)); //PUBLISH-RECORD-.  
                    // nx.doorSeqIdx[NUM].descentPath = [{"pos":{"x":289.883,"y":316.653,"z":-356.371},"rot":{"x":0.024,"y":-0.929,"z":-0.063,"w":-0.366}},{"pos":{"x":286.475,"y":315.885,"z":-352.713},"rot":{"x":0.028,"y":-0.928,"z":-0.074,"w":-0.366}},{"pos":{"x":282.803,"y":315.104,"z":-349.321},"rot":{"x":0.118,"y":-0.902,"z":-0.03,"w":-0.417}},{"pos":{"x":278.405,"y":314.392,"z":-346.022},"rot":{"x":0.116,"y":-0.88,"z":-0.017,"w":-0.461}},{"pos":{"x":273.278,"y":313.626,"z":-342.908},"rot":{"x":0.114,"y":-0.857,"z":-0.005,"w":-0.504}},{"pos":{"x":267.931,"y":312.959,"z":-340.187},"rot":{"x":0.024,"y":-0.852,"z":-0.041,"w":-0.523}},{"pos":{"x":262.584,"y":312.502,"z":-337.465},"rot":{"x":0.018,"y":-0.853,"z":-0.03,"w":-0.523}},{"pos":{"x":257.236,"y":312.185,"z":-334.743},"rot":{"x":-0.007,"y":-0.853,"z":0.009,"w":-0.523}},{"pos":{"x":252.11,"y":312.225,"z":-331.63},"rot":{"x":-0.086,"y":-0.874,"z":-0.053,"w":-0.477}},{"pos":{"x":247.32,"y":312.06,"z":-328.02},"rot":{"x":-0.134,"y":-0.888,"z":0.037,"w":-0.44}},{"pos":{"x":242.914,"y":312.369,"z":-323.95},"rot":{"x":-0.082,"y":-0.918,"z":-0.06,"w":-0.386}},{"pos":{"x":238.936,"y":311.341,"z":-319.46},"rot":{"x":-0.053,"y":-0.934,"z":-0.13,"w":-0.33}},{"pos":{"x":235.427,"y":309.326,"z":-314.596},"rot":{"x":-0.033,"y":-0.942,"z":-0.197,"w":-0.273}},{"pos":{"x":232.42,"y":306.343,"z":-309.406},"rot":{"x":-0.023,"y":-0.943,"z":-0.256,"w":-0.216}},{"pos":{"x":230.025,"y":302.406,"z":-304.125},"rot":{"x":-0.033,"y":-0.951,"z":-0.262,"w":-0.168}},{"pos":{"x":228.237,"y":299.087,"z":-298.82},"rot":{"x":-0.043,"y":-0.954,"z":-0.276,"w":-0.118}},{"pos":{"x":226.988,"y":295.527,"z":-293.363},"rot":{"x":-0.058,"y":-0.961,"z":-0.263,"w":-0.071}},{"pos":{"x":225.876,"y":292.318,"z":-287.875},"rot":{"x":0.025,"y":-0.964,"z":-0.25,"w":-0.097}},{"pos":{"x":224.763,"y":289.367,"z":-282.386},"rot":{"x":0.019,"y":-0.975,"z":-0.199,"w":-0.098}},{"pos":{"x":223.651,"y":286.7,"z":-276.898},"rot":{"x":0.024,"y":-0.965,"z":-0.246,"w":-0.097}},{"pos":{"x":222.538,"y":283.654,"z":-271.409},"rot":{"x":0.024,"y":-0.965,"z":-0.246,"w":-0.097}},{"pos":{"x":221.426,"y":280.607,"z":-265.921},"rot":{"x":0.02,"y":-0.974,"z":-0.206,"w":-0.098}},{"pos":{"x":220.313,"y":278.461,"z":-260.433},"rot":{"x":0.014,"y":-0.984,"z":-0.148,"w":-0.099}},{"pos":{"x":219.201,"y":276.744,"z":-254.944},"rot":{"x":0.014,"y":-0.985,"z":-0.148,"w":-0.099}},{"pos":{"x":218.088,"y":275.096,"z":-249.456},"rot":{"x":0.013,"y":-0.987,"z":-0.131,"w":-0.099}},{"pos":{"x":216.975,"y":273.859,"z":-243.967},"rot":{"x":0.005,"y":-0.994,"z":-0.056,"w":-0.1}},{"pos":{"x":215.726,"y":273.231,"z":-238.51},"rot":{"x":0.1,"y":-0.987,"z":-0.011,"w":-0.127}},{"pos":{"x":213.939,"y":272.842,"z":-233.205},"rot":{"x":0.103,"y":-0.979,"z":-0.021,"w":-0.177}},{"pos":{"x":211.631,"y":271.923,"z":-228.105},"rot":{"x":0.08,"y":-0.968,"z":0.112,"w":-0.212}},{"pos":{"x":208.825,"y":272.404,"z":-223.261},"rot":{"x":0.09,"y":-0.958,"z":0.05,"w":-0.268}},{"pos":{"x":205.549,"y":271.623,"z":-218.721},"rot":{"x":0.118,"y":-0.937,"z":-0.054,"w":-0.326}},{"pos":{"x":201.837,"y":269.377,"z":-214.53},"rot":{"x":0.16,"y":-0.897,"z":-0.172,"w":-0.377}},{"pos":{"x":197.725,"y":265.503,"z":-210.732},"rot":{"x":0.202,"y":-0.847,"z":-0.258,"w":-0.419}},{"pos":{"x":193.254,"y":260.041,"z":-207.362},"rot":{"x":0.197,"y":-0.84,"z":-0.205,"w":-0.463}},{"pos":{"x":188.469,"y":256.196,"z":-204.456},"rot":{"x":0.209,"y":-0.815,"z":-0.198,"w":-0.504}},{"pos":{"x":183.418,"y":252.352,"z":-202.043},"rot":{"x":0.211,"y":-0.793,"z":-0.174,"w":-0.545}},{"pos":{"x":178.306,"y":248.939,"z":-199.755},"rot":{"x":0.137,"y":-0.812,"z":-0.213,"w":-0.527}},{"pos":{"x":173.195,"y":245.971,"z":-197.467},"rot":{"x":0.117,"y":-0.82,"z":-0.182,"w":-0.532}},{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.671,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":5.038,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.43,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-2.178,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-5.785,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-9.393,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-13.001,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.608,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-20.216,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-23.823,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-27.431,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.039,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-34.646,"y":222,"z":31.563},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-38.254,"y":222,"z":35.846},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-40.058,"y":221.955,"z":37.987},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
                    nx.doorSeqIdx[NUM].descentPath = [{"pos":{"x":289.883,"y":316.653,"z":-356.371},"rot":{"x":0.024,"y":-0.929,"z":-0.063,"w":-0.366}},{"pos":{"x":286.475,"y":315.885,"z":-352.713},"rot":{"x":0.028,"y":-0.928,"z":-0.074,"w":-0.366}},{"pos":{"x":282.803,"y":315.104,"z":-349.321},"rot":{"x":0.118,"y":-0.902,"z":-0.03,"w":-0.417}},{"pos":{"x":278.405,"y":314.392,"z":-346.022},"rot":{"x":0.116,"y":-0.88,"z":-0.017,"w":-0.461}},{"pos":{"x":273.278,"y":313.626,"z":-342.908},"rot":{"x":0.114,"y":-0.857,"z":-0.005,"w":-0.504}},{"pos":{"x":267.931,"y":312.959,"z":-340.187},"rot":{"x":0.024,"y":-0.852,"z":-0.041,"w":-0.523}},{"pos":{"x":262.584,"y":312.502,"z":-337.465},"rot":{"x":0.018,"y":-0.853,"z":-0.03,"w":-0.523}},{"pos":{"x":257.236,"y":312.185,"z":-334.743},"rot":{"x":-0.007,"y":-0.853,"z":0.009,"w":-0.523}},{"pos":{"x":252.11,"y":312.225,"z":-331.63},"rot":{"x":-0.086,"y":-0.874,"z":-0.053,"w":-0.477}},{"pos":{"x":247.32,"y":312.06,"z":-328.02},"rot":{"x":-0.134,"y":-0.888,"z":0.037,"w":-0.44}},{"pos":{"x":242.914,"y":312.369,"z":-323.95},"rot":{"x":-0.082,"y":-0.918,"z":-0.06,"w":-0.386}},{"pos":{"x":238.936,"y":311.341,"z":-319.46},"rot":{"x":-0.053,"y":-0.934,"z":-0.13,"w":-0.33}},{"pos":{"x":235.427,"y":309.326,"z":-314.596},"rot":{"x":-0.033,"y":-0.942,"z":-0.197,"w":-0.273}},{"pos":{"x":232.42,"y":306.343,"z":-309.406},"rot":{"x":-0.023,"y":-0.943,"z":-0.256,"w":-0.216}},{"pos":{"x":230.025,"y":302.406,"z":-304.125},"rot":{"x":-0.033,"y":-0.951,"z":-0.262,"w":-0.168}},{"pos":{"x":228.237,"y":299.087,"z":-298.82},"rot":{"x":-0.043,"y":-0.954,"z":-0.276,"w":-0.118}},{"pos":{"x":226.988,"y":295.527,"z":-293.363},"rot":{"x":-0.058,"y":-0.961,"z":-0.263,"w":-0.071}},{"pos":{"x":225.876,"y":292.318,"z":-287.875},"rot":{"x":0.025,"y":-0.964,"z":-0.25,"w":-0.097}},{"pos":{"x":224.763,"y":289.367,"z":-282.386},"rot":{"x":0.019,"y":-0.975,"z":-0.199,"w":-0.098}},{"pos":{"x":223.651,"y":286.7,"z":-276.898},"rot":{"x":0.024,"y":-0.965,"z":-0.246,"w":-0.097}},{"pos":{"x":222.538,"y":283.654,"z":-271.409},"rot":{"x":0.024,"y":-0.965,"z":-0.246,"w":-0.097}},{"pos":{"x":221.426,"y":280.607,"z":-265.921},"rot":{"x":0.02,"y":-0.974,"z":-0.206,"w":-0.098}},{"pos":{"x":220.313,"y":278.461,"z":-260.433},"rot":{"x":0.014,"y":-0.984,"z":-0.148,"w":-0.099}},{"pos":{"x":219.201,"y":276.744,"z":-254.944},"rot":{"x":0.014,"y":-0.985,"z":-0.148,"w":-0.099}},{"pos":{"x":218.088,"y":275.096,"z":-249.456},"rot":{"x":0.013,"y":-0.987,"z":-0.131,"w":-0.099}},{"pos":{"x":216.975,"y":273.859,"z":-243.967},"rot":{"x":0.005,"y":-0.994,"z":-0.056,"w":-0.1}},{"pos":{"x":215.726,"y":273.231,"z":-238.51},"rot":{"x":0.1,"y":-0.987,"z":-0.011,"w":-0.127}},{"pos":{"x":213.939,"y":272.842,"z":-233.205},"rot":{"x":0.103,"y":-0.979,"z":-0.021,"w":-0.177}},{"pos":{"x":211.631,"y":271.923,"z":-228.105},"rot":{"x":0.08,"y":-0.968,"z":0.112,"w":-0.212}},{"pos":{"x":208.825,"y":272.404,"z":-223.261},"rot":{"x":0.09,"y":-0.958,"z":0.05,"w":-0.268}},{"pos":{"x":205.549,"y":271.623,"z":-218.721},"rot":{"x":0.118,"y":-0.937,"z":-0.054,"w":-0.326}},{"pos":{"x":201.837,"y":269.377,"z":-214.53},"rot":{"x":0.16,"y":-0.897,"z":-0.172,"w":-0.377}},{"pos":{"x":197.725,"y":265.503,"z":-210.732},"rot":{"x":0.202,"y":-0.847,"z":-0.258,"w":-0.419}},{"pos":{"x":193.254,"y":260.041,"z":-207.362},"rot":{"x":0.197,"y":-0.84,"z":-0.205,"w":-0.463}},{"pos":{"x":188.469,"y":256.196,"z":-204.456},"rot":{"x":0.209,"y":-0.815,"z":-0.198,"w":-0.504}},{"pos":{"x":183.418,"y":252.352,"z":-202.043},"rot":{"x":0.211,"y":-0.793,"z":-0.174,"w":-0.545}},{"pos":{"x":178.306,"y":248.939,"z":-199.755},"rot":{"x":0.137,"y":-0.812,"z":-0.213,"w":-0.527}},{"pos":{"x":173.195,"y":245.971,"z":-197.467},"rot":{"x":0.117,"y":-0.82,"z":-0.182,"w":-0.532}}];



                    nx.doorSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    nx.doorSeqIdx[NUM].stepIdx = 0;//, nx.doorSeqIdx[1].curPOS, nx.doorSeqIdx[1].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    nx.doorSeqIdx[NUM].anmSpeed = 85;
                    // nx.doorSeqIdx[NUM].anmSpeed = 8;
                    // nx.doorSeqIdx[NUM].anmSpeed = 16;
                    // nx.doorSeqIdx[1].closeDoor = 0;

// //VISUALIZE-.
// debugger;
//TODO: this is removable-. change to method call optimized version
var aPOSPath = [];
for(var i=0; i< nx.doorSeqIdx[NUM].descentPath.length;i++){
    var item = nx.doorSeqIdx[NUM].descentPath[i];
    if(item.pos){
        // var oldPOS = new BABYLON.Vector3(item.pos.x,item.pos.y,item.pos.z);
        // var newPOS = new BABYLON.Vector3.Zero();
        // newPOS.position = oldPOS.addInPlace(new BABYLON.Vector3(360,240,-450)); //Origin for... orby?
        // item.pos.x = newPOS.position.x;
        // item.pos.y = newPOS.position.y;
        // item.pos.z = newPOS.position.z;
        // moveAnm1.push(item)
        // aPath.push(nx.BV3(item.pos.x,item.pos.y,item.pos.z))
        // aPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000)) //TRUNCATE PRECISION-.
        // aPath.push(
        //     { pos: nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000),
        //         rot:item.rot
        //     }
        // ) //TRUNCATE PRECISION-.
        aPOSPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000))

    }
}
// var instPath = nx.createPathEditor({aName:'decentPATH', aPath:aPOSPath}); //ACTUALL-WORKING-.


//VISUALIZE-.
// debugger;
// var instPath = nx.createPathEditor({aName:'decentPATH', aPath:aPOSPath}); //WORKING-.
// var instPath = nx.createPathEditor({aName:'decentPATH', aPath:nx.doorSeqIdx[1].descentPath});
// if(instPath && instPath.aPath){nx.doorSeqIdx[NUM].descentPath.aPath = instPath.aPath}

                } //end init sequence-.


                //TODO add animation here-.
                if(!nx.doorSeqIdx[NUM].initAnm){  //init next path point
                    // nx.doorSeqIdx[1].curPOS = nx.doorSeqIdx[1].movepath[nx.doorSeqIdx[1].stepIdx];
                    // nx.doorSeqIdx[1].nxtPOS = nx.doorSeqIdx[1].movepath[++nx.doorSeqIdx[1].stepIdx]
                    nx.doorSeqIdx[NUM].curPOS = nx.doorSeqIdx[NUM].descentPath[nx.doorSeqIdx[NUM].stepIdx];
                    nx.doorSeqIdx[NUM].nxtPOS = nx.doorSeqIdx[NUM].descentPath[++nx.doorSeqIdx[NUM].stepIdx];
                    nx.doorSeqIdx[NUM].initAnm = 1;
                    if(!nx.doorSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.doorSeqIdx[NUM].on=0; //important
                        // nx.doorSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                        //SIMULTANEOUS-ANMS-
                        nx.doorSeqIdx[2] = {on:1}; 
                        // nx.doorSeqIdx[2] = {on:0}; //NEXT-ANM-. 
                        // nx.doorSeqIdx[3] = {on:1}; //NEXT-ANM-. 
                        nx.cinematicMode = 0;
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.doorSeqIdx[1].runAnm = 1;
                }  

                //NEW-POSROT-ANM-FORMAT-.
                if(nx.doorSeqIdx[1].runAnm) { nx.doorSeqIdx[1].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.doorSeqIdx[1].curPOS.pos.x,curPOSy:nx.doorSeqIdx[1].curPOS.pos.y,curPOSz:nx.doorSeqIdx[1].curPOS.pos.z}).
                    animate({curPOSx:nx.doorSeqIdx[1].nxtPOS.pos.x,curPOSy:nx.doorSeqIdx[1].nxtPOS.pos.y,curPOSz:nx.doorSeqIdx[1].nxtPOS.pos.z},{queue:false,duration:nx.doorSeqIdx[1].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); nx.doorSeqIdx[1]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.doorSeqIdx[1].curPOS.rot.x,nx.doorSeqIdx[1].curPOS.rot.y,nx.doorSeqIdx[1].curPOS.rot.z,nx.doorSeqIdx[1].curPOS.rot.w);
                        nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                    }, complete:function(){ 
                        nx.doorSeqIdx[1].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });


                }

                //ZONE-TRIGGER-CAM-REPOSITION-.
                // if(nx.orbyMesh.position.z>=-235 && !nx.doorSeqIdx[2]) { //CAM-TRIGGER -anmethodology-.
                //     // nx.cinemaStop = 1;
                //     debugger;
                //     nx.doorSeqIdx[2] = {on:1}; //REINSTATE-.
                // } //Orby position Trigger next view-.




            } //end doorSeq 1

            //REMOVED-ANM-.
//             if( false && nx.doorSeqIdx[1] && nx.doorSeqIdx[1].on){ //ANM-COMPLEX:MECHANISM-TO-PLAY-MULTIPLE-ANIMATIONS-CONCURRENTLY-. 
//                 var NUM = 1;

//                 if(!nx.doorSeqIdx[1].initSeq){ nx.doorSeqIdx[1].initSeq=1; //one time init
                    

// //VISUALIZE-.
// var aPath = [];
// var aPOSPath = [];
//                         for(var i=0; i< nx.doorSeqIdx[1].movepath.length;i++){
//                             var item = nx.doorSeqIdx[1].movepath[i];
//                             if(item.pos){
//                                 // var oldPOS = new BABYLON.Vector3(item.pos.x,item.pos.y,item.pos.z);
//                                 // var newPOS = new BABYLON.Vector3.Zero();
//                                 // newPOS.position = oldPOS.addInPlace(new BABYLON.Vector3(360,240,-450)); //Origin for... orby?
//                                 // item.pos.x = newPOS.position.x;
//                                 // item.pos.y = newPOS.position.y;
//                                 // item.pos.z = newPOS.position.z;
//                                 // moveAnm1.push(item)
//                                 // aPath.push(nx.BV3(item.pos.x,item.pos.y,item.pos.z))
//                                 // aPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000)) //TRUNCATE PRECISION-.
//                                 aPath.push(
//                                     { pos: nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000),
//                                         rot:item.rot
//                                     }
//                                 ) //TRUNCATE PRECISION-.
//                                 aPOSPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000))

//                             }
//                         }
// // nx.aPathEditor = nx.createPathEditor({aName:'finalDescentPATH', aPath:aPath});
// // nx.reducedPath = nx.editz.decomposePath({aPath:nx.aPathEditor.aPath}) //reduce path
// nx.reducedPath = nx.editz.decomposePath({aPath:aPath}) //reduce path
// // nx.reducedPath = nx.editz.decomposePath({aPath:nx.reducedPath}) //reduce path
// // nx.reducedPath = nx.editz.decomposePath({aPath:nx.reducedPath}) //reduce path
// // nx.reducedPath = nx.editz.decomposePath({aPath:nx.reducedPath}) //reduce path
// // nx.reducedPath = nx.editz.decomposePath({aPath:nx.reducedPath}) //reduce path
// // debugger;



// // nx.doorSeqIdx[NUM].descentPath = {aPath:[],aRot:[]}; //Dynamic Path and Rotation Pattern-.
// // nx.doorSeqIdx[NUM].descentPath.aRot = []; 
// // nx.doorSeqIdx[NUM].descentPath.aPath = [{"x":301.827,"y":319.49,"z":-368.352},{"x":297.664,"y":319.889,"z":-365.964},{"x":293.758,"y":319.333,"z":-363.208},{"x":291.084,"y":317.56,"z":-359.246},{"x":288.783,"y":315.211,"z":-355.034},{"x":286.482,"y":312.951,"z":-350.821},{"x":284.343,"y":310.958,"z":-346.532},{"x":283.718,"y":309.442,"z":-341.8},{"x":283.689,"y":308.931,"z":-337},{"x":282.394,"y":308.472,"z":-332.411},{"x":279.414,"y":307.007,"z":-328.688},{"x":275.253,"y":304.621,"z":-326.336},{"x":270.871,"y":302.557,"z":-324.375},{"x":266.49,"y":300.568,"z":-322.415},{"x":262.108,"y":299.409,"z":-320.454},{"x":257.726,"y":298.439,"z":-318.493},{"x":253.163,"y":297.926,"z":-316.451},{"x":248.081,"y":297.415,"z":-312.969},{"x":244.278,"y":295.166,"z":-307.834},{"x":240.664,"y":292.61,"z":-302.551},{"x":237.05,"y":290.055,"z":-297.269},{"x":233.436,"y":287.515,"z":-291.987},{"x":229.823,"y":285.093,"z":-286.705},{"x":226.209,"y":282.672,"z":-281.422},{"x":222.595,"y":280.251,"z":-276.14},{"x":218.981,"y":277.863,"z":-270.858},{"x":215.679,"y":275.734,"z":-265.969},{"x":213.567,"y":273.587,"z":-260.792},{"x":211.646,"y":271.395,"z":-255.532},{"x":209.726,"y":269.77,"z":-250.271},{"x":207.806,"y":268.432,"z":-245.011},{"x":205.853,"y":267.2,"z":-239.763},{"x":202.598,"y":265.649,"z":-235.251},{"x":198.116,"y":263.249,"z":-232.486},{"x":193.561,"y":261.248,"z":-230.973},{"x":189.006,"y":259.856,"z":-229.459},{"x":184.451,"y":259.19,"z":-227.945},{"x":179.927,"y":259.18,"z":-226.348},{"x":176.119,"y":259.028,"z":-223.478},{"x":173.729,"y":257.187,"z":-219.351},{"x":172.513,"y":254.45,"z":-214.709},{"x":171.325,"y":252.42,"z":-210.058},{"x":170.138,"y":250.677,"z":-205.407},{"x":168.779,"y":249.234,"z":-200.811},{"x":166.349,"y":248.119,"z":-196.675},{"x":163.84,"y":246.785,"z":-192.583},{"x":161.331,"y":245.28,"z":-188.491},{"x":158.797,"y":243.718,"z":-184.415},{"x":155.593,"y":242.083,"z":-180.844},{"x":152.321,"y":240.436,"z":-177.332},{"x":149.049,"y":238.907,"z":-173.82},{"x":145.778,"y":237.767,"z":-170.308},{"x":142.506,"y":236.739,"z":-166.796},{"x":138.714,"y":235.505,"z":-163.864},{"x":134.81,"y":234.408,"z":-161.072},{"x":131.324,"y":233.449,"z":-157.811},{"x":128.419,"y":232.187,"z":-153.99},{"x":125.514,"y":231.131,"z":-150.169},{"x":122.609,"y":230.225,"z":-146.348},{"x":119.704,"y":229.249,"z":-142.527},{"x":116.799,"y":228.183,"z":-138.705},{"x":113.894,"y":227.114,"z":-134.884},{"x":110.99,"y":226.064,"z":-131.063},{"x":108.085,"y":225.014,"z":-127.242},{"x":105.18,"y":223.977,"z":-123.421},{"x":102.275,"y":222.994,"z":-119.6},{"x":99.37,"y":222.011,"z":-115.778},{"x":96.465,"y":221.04,"z":-111.957},{"x":93.56,"y":220.099,"z":-108.136},{"x":90.655,"y":219.342,"z":-104.315},{"x":87.75,"y":218.877,"z":-100.493},{"x":84.845,"y":218.637,"z":-96.672},{"x":81.94,"y":218.416,"z":-92.851},{"x":79.036,"y":218.25,"z":-89.03},{"x":76.131,"y":218.222,"z":-85.208},{"x":73.226,"y":218.194,"z":-81.387},{"x":70.321,"y":218.233,"z":-77.566},{"x":67.346,"y":218.488,"z":-73.801},{"x":64.253,"y":218.85,"z":-70.13},{"x":61.161,"y":219.142,"z":-66.458},{"x":58.069,"y":219.46,"z":-62.787},{"x":54.977,"y":219.869,"z":-59.116},{"x":51.884,"y":220.297,"z":-55.445},{"x":48.792,"y":220.804,"z":-51.774},{"x":45.7,"y":221.302,"z":-48.102},{"x":42.608,"y":221.76,"z":-44.431},{"x":39.515,"y":222.221,"z":-40.76},{"x":36.423,"y":222.748,"z":-37.089},{"x":33.331,"y":223.181,"z":-33.417},{"x":30.239,"y":223.386,"z":-29.746}]; 
// nx.doorSeqIdx[NUM].descentPath = nx.reducedPath;

// // var instPath = nx.createPathEditor({aName:'finalDescentPATH', aPath:nx.doorSeqIdx[1].movepath});
// // if(instPath && instPath.aPath){nx.doorSeqIdx[1].movepath = instPath.aPath} //rerenderer
//                     //----------------------------------------------------------



// //                     nx.crashSeqIdx[NUM].bouncePath = {aPath:[],aRot:[]};
// //                     nx.crashSeqIdx[NUM].bouncePath.aRot = [{idx:0,x:0.8},{idx:5,x:-0.2},{idx:8,x:-0.2},{idx:10,x:0.1},{idx:14,z:0.6},{idx:16,z:0},{idx:18,z:-0.6},{idx:20,z:0},{idx:22,z:0.6},{idx:24,x:-0.4},{idx:27,x:-0.4}];
                    
// // nx.crashSeqIdx[NUM].bouncePath.aPath = [{"x":-197.89999999999975,"y":2.583326933471156,"z":136.60000000000002},{"x":-202.40000000000055,"y":7.141471008651299,"z":143.10000000000127},{"x":-212.30000000000052,"y":9.69120738390481,"z":153.00000000000097},{"x":-215.3000000000004,"y":9.332039109810621,"z":156.00000000000085},{"x":-218.3000000000003,"y":8.263558209260651,"z":159.00000000000074},{"x":-221.30000000000018,"y":5.385449753832079,"z":162.00000000000063},{"x":-226.6000000000006,"y":6.497495010447608,"z":166.60000000000088},{"x":-229.3000000000004,"y":7.099573626885032,"z":170.30000000000092},{"x":-232.3000000000003,"y":7.19166483429599,"z":173.3000000000008},{"x":-235.30000000000018,"y":6.473847654721752,"z":176.3000000000007},{"x":-239.20000000000027,"y":4.646300111531083,"z":180.50000000000085},{"x":-243.10000000000036,"y":5.709297450669284,"z":184.50000000000097},{"x":-246.8000000000004,"y":5.163209390492517,"z":188.6000000000011},{"x":-251.00000000000057,"y":4.208496427663285,"z":192.80000000000126},{"x":-255.20000000000073,"y":4.145705236020428,"z":197.60000000000156},{"x":-260.00000000000216,"y":4.0754632043948575,"z":203.000000000002},{"x":-260.4000000000028,"y":3.9984721679476762,"z":208.9000000000022},{"x":-264.20000000000397,"y":3.9155013956651827,"z":214.2000000000025},{"x":-269.70000000000556,"y":3.8273799040775556,"z":217.7000000000029},{"x":-273.9000000000068,"y":3.7349881739996325,"z":222.4000000000034},{"x":-279.90000000000845,"y":3.639249353057716,"z":226.20000000000377},{"x":-284.30000000000007,"y":3.600000023841309,"z":230.99999999999264},{"x":-285.8000000000013,"y":3.4998334404890175,"z":237.5999999999924},{"x":-287.50000000000216,"y":3.2986693546374326,"z":243.39999999999233},{"x":-293.1000000000039,"y":3.195520230503939,"z":247.2999999999924},{"x":-298.800000000005,"y":2.98941836615143,"z":250.49999999999193},{"x":-302.60000000000616,"y":2.879425562447226,"z":254.6999999999921},{"x":-307.9000000000083,"y":2.764642497238231,"z":258.3999999999928},{"x":-313.0000000000105,"y":2.744217711081045,"z":262.19999999999425},{"x":-316.600000000012,"y":2.617356114743022,"z":265.3999999999951}];

// //                     nx.crashSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
// //                     nx.crashSeqIdx[NUM].stepIdx = 0;//, nx.crashSeqIdx[NUM].curPOS, nx.crashSeqIdx[NUM].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
// //                     nx.crashSeqIdx[NUM].anmSpeed = 88;//8;
// //     //VISUALIZE-.
// //     var instPath = nx.createPathEditor({aName:'bouncePATH', aPath:nx.crashSeqIdx[NUM].bouncePath.aPath});
// //     if(instPath && instPath.aPath){nx.crashSeqIdx[NUM].bouncePath.aPath = instPath.aPath}

//                     //----------------------------------------------------------
//                     // nx.doorSeqIdx[1].movepath = nx.topFallPath;
//                     //----------------------------------------------------------POINT-CONVERSION--.
//                         // var moveAnm1 = []
//                         // for(var i=0; i< nx.doorSeqIdx[1].movepath.length;i++){
//                         //     var item = nx.doorSeqIdx[1].movepath[i];
//                         //     if(item.pos){
//                         //         var oldPOS = new BABYLON.Vector3(item.pos.x,item.pos.y,item.pos.z);
//                         //         var newPOS = new BABYLON.Vector3.Zero();
//                         //         newPOS.position = oldPOS.addInPlace(new BABYLON.Vector3(360,240,-450)); //Origin for... orby?
//                         //         item.pos.x = newPOS.position.x;
//                         //         item.pos.y = newPOS.position.y;
//                         //         item.pos.z = newPOS.position.z;
//                         //         moveAnm1.push(item)
//                         //     }
//                         // }
//                         // nx.transSeq.push(moveAnm1)
//                     //----------------------------------------------------------POINT-CONVERSION--.
//                 // nx.topFallPath = [];
//                 //     if(nx.doorSeqIdx[1].movepath){
//                 //         for (var i = 0; i < nx.doorSeqIdx[1].movepath.length; i++) {
//                 //             nx.topFallPath.push( new BABYLON.Vector3(nx.doorSeqIdx[1].movepath[i].pos.x, nx.doorSeqIdx[1].movepath[i].pos.y+1, nx.doorSeqIdx[1].movepath[i].pos.z) );
//                 //         }
//                 //     }
//                 //     //VISUALIZE-.
//                 // nx.createPathEditor(nx.topFallPath);


//     // }}); //EDIT-.
//     // var aPath = nx.editedVerts; //PROD-.





//                     // nx.editLine2 = BABYLON.Mesh.CreateLines('aline', aPath, nx.scene);
//                     // nx.editLine2.color = BABYLON.Color3.Green();
//                     nx.doorSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
//                     nx.doorSeqIdx[NUM].stepIdx = 0;//, nx.doorSeqIdx[1].curPOS, nx.doorSeqIdx[1].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
//                     // nx.doorSeqIdx[NUM].anmSpeed = 8;
//                     nx.doorSeqIdx[NUM].anmSpeed = 16;
//                     // nx.doorSeqIdx[1].closeDoor = 0;
// // //VISUALIZE-.
// debugger;

// var aPOSPath = [];
// for(var i=0; i< nx.doorSeqIdx[NUM].descentPath.length;i++){
//     var item = nx.doorSeqIdx[NUM].descentPath[i];
//     if(item.pos){
//         // var oldPOS = new BABYLON.Vector3(item.pos.x,item.pos.y,item.pos.z);
//         // var newPOS = new BABYLON.Vector3.Zero();
//         // newPOS.position = oldPOS.addInPlace(new BABYLON.Vector3(360,240,-450)); //Origin for... orby?
//         // item.pos.x = newPOS.position.x;
//         // item.pos.y = newPOS.position.y;
//         // item.pos.z = newPOS.position.z;
//         // moveAnm1.push(item)
//         // aPath.push(nx.BV3(item.pos.x,item.pos.y,item.pos.z))
//         // aPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000)) //TRUNCATE PRECISION-.
//         aPath.push(
//             { pos: nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000),
//                 rot:item.rot
//             }
//         ) //TRUNCATE PRECISION-.
//         aPOSPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000))

//     }
// }

// var instPath = nx.createPathEditor({aName:'decentPATH', aPath:aPOSPath}); //WORKING-.
// // var instPath = nx.createPathEditor({aName:'decentPATH', aPath:nx.doorSeqIdx[1].descentPath});
// // if(instPath && instPath.aPath){nx.doorSeqIdx[NUM].descentPath.aPath = instPath.aPath}



//                 }
//                 //TODO change curPOS and nxtPOS to curPOS and tgtPOS-.
//                 // if(!NUM || !nx.doorSeqIdx[NUM]){debugger}
//                 if(!nx.doorSeqIdx[NUM].initAnm){  //init next path point
//                     // nx.doorSeqIdx[1].curPOS = nx.doorSeqIdx[1].movepath[nx.doorSeqIdx[1].stepIdx];
//                     // nx.doorSeqIdx[1].nxtPOS = nx.doorSeqIdx[1].movepath[++nx.doorSeqIdx[1].stepIdx]
//                     nx.doorSeqIdx[NUM].curPOS = nx.doorSeqIdx[NUM].descentPath[nx.doorSeqIdx[NUM].stepIdx];
//                     nx.doorSeqIdx[NUM].nxtPOS = nx.doorSeqIdx[NUM].descentPath[++nx.doorSeqIdx[NUM].stepIdx];
//                     nx.doorSeqIdx[NUM].initAnm = 1;
//                     if(!nx.doorSeqIdx[NUM].nxtPOS){  //END-ANM 
//                         nx.doorSeqIdx[NUM].on=0; //important
//                         nx.doorSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
//                         nx.cinematicMode = 0;
//                         return; //END-SUB-SEQUENCES-.
//                     } 
//                     nx.doorSeqIdx[1].runAnm = 1;
//                 }  

//                 //NEW-RUN-ANM-FORMAT-.
//                 if(nx.doorSeqIdx[1].runAnm) { nx.doorSeqIdx[1].runAnm = 0; //one-time-trigger;

//                     $({curPOSx:nx.doorSeqIdx[1].curPOS.pos.x,curPOSy:nx.doorSeqIdx[1].curPOS.pos.y,curPOSz:nx.doorSeqIdx[1].curPOS.pos.z}).
//                     animate({curPOSx:nx.doorSeqIdx[1].nxtPOS.pos.x,curPOSy:nx.doorSeqIdx[1].nxtPOS.pos.y,curPOSz:nx.doorSeqIdx[1].nxtPOS.pos.z},{queue:false,duration:nx.doorSeqIdx[1].anmSpeed,easing:'linear',
//                     step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH-.
//                         if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
//                         nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
//                         nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
//                         nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.doorSeqIdx[1].curPOS.rot.x,nx.doorSeqIdx[1].curPOS.rot.y,nx.doorSeqIdx[1].curPOS.rot.z,nx.doorSeqIdx[1].curPOS.rot.w);
//                         nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
//                     }, complete:function(){ 
//                         nx.doorSeqIdx[1].initAnm = 0; 
//                         } //NEXT-SUB-SEQUENCE-. 
//                     });


//                 }

//                 // //ORIGINAL-ANM-FORMAT-.
//                 // if(nx.doorSeqIdx[1].runAnm) { nx.doorSeqIdx[1].runAnm = 0; //one-time-trigger;
//                 //     $({curPOSx:nx.doorSeqIdx[1].curPOS.pos.x,curPOSy:nx.doorSeqIdx[1].curPOS.pos.y,curPOSz:nx.doorSeqIdx[1].curPOS.pos.z}).
//                 //     animate({curPOSx:nx.doorSeqIdx[1].nxtPOS.pos.x,curPOSy:nx.doorSeqIdx[1].nxtPOS.pos.y,curPOSz:nx.doorSeqIdx[1].nxtPOS.pos.z},{queue:false,duration:nx.doorSeqIdx[1].anmSpeed,easing:'linear',
//                 //     step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH-.
//                 //         nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
//                 //         nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
//                 //         nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.doorSeqIdx[1].curPOS.rot.x,nx.doorSeqIdx[1].curPOS.rot.y,nx.doorSeqIdx[1].curPOS.rot.z,nx.doorSeqIdx[1].curPOS.rot.w);
//                 //         nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
//                 //     }, complete:function(){ 
//                 //         nx.doorSeqIdx[1].initAnm = 0; 
//                 //         } //NEXT-SUB-SEQUENCE-. 
//                 //     });

//                 // }


//                 // if(nx.orbyMesh.position.z>=-335 && !nx.doorSeqIdx[2]) { //CAM-TRIGGER -anmethodology-.
//                 if(nx.orbyMesh.position.z>=-299 && !nx.doorSeqIdx[2]) { //CAM-TRIGGER -anmethodology-.
//                     debugger;
//                     nx.cinemaStop = 1;
//                     // nx.doorSeqIdx[2] = {on:1}; //REINSTATE-.
//                 } //Orby position Trigger next view-.


//                  // else if(nx.orbyMesh.position.y<=52){
//                 //     debugger;
//                 //     // nx.scene.activeCamera.position.y +=0.04
//                 //     // if(!nx.doorSeqIdx[1].closeDoor){ nx.doorSeqIdx[1].closeDoor=1; //one-time-trigger-.
//                 //     //     //ANM: door closing
//                 //     //     $({rotx:-0.45}).
//                 //     //     animate({rotx:-0.61},{queue:false,duration:5000,easing:'linear',
//                 //     //     step: function(now) { //ANM: Close Pyramid Door
//                 //     //         nx.testPlane.rotation.x = this.rotx;
//                 //     //     }, complete:function(){  } //NEXT-SUB-SEQUENCE-. 
//                 //     //     });
//                 //     // }
//                 // } //Anm cam height-.
//             }

            if(nx.doorSeqIdx[2] && nx.doorSeqIdx[2].on){   //ANM: FLYBY CAM
                nx.doorSeqIdx[2].on = 0;
                if(nx.cinemaStop){nx.doorSeqIdx[2]={on:1}; return;}
                nx.camz.freeCam.position.copyFrom({x: 89.66514393404334, y: 249.32559596314383, z: -91.34010774485866}); 
                nx.camz.freeCam.setTarget(nx.BV32({x: -2.828953502703266, y: 238.0717112587607, z: 0.2734890415875874})); //flyby follow cam

                // $({xScale:0,zScale:0}). //CLOSE-DOOR-.
                // animate({xScale:1,zScale:1},{queue:false,duration:8000,easing:'swing',
                $({xScale:0.5,zScale:0.5,doorY:175}). //CLOSE-DOOR-.
                animate({xScale:1,zScale:1,doorY:190},{queue:false,duration:8000,easing:'swing',
                step: function(now) { //ANM:-CAM-.
                    if(nx.cinemaStop){ $(this).stop(); nx.doorSeqIdx[2]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.

                    nx.pyramid.aSpaceDoor.scaling.x = this.xScale; 
                    nx.pyramid.aSpaceDoor.scaling.z = this.zScale;
                    nx.pyramid.aSpaceDoor.position.y = this.doorY;

                }, complete:function(){ 

                    nx.pyramid.aSpaceDoor.scaling.x = 1; 
                    nx.pyramid.aSpaceDoor.scaling.z = 1;
                    // nx.doorSeqIdx[5] = {on:1};
                    } //NEXT-SUB-SEQUENCE-. 
                });

                nx.ui.flashCanvasMSG({txt:'Door is closing!',txtIcon:'orby',dur:1000}); 
                
                setTimeout(function(){
                    // debugger;
                    if(nx.cinemaStop){nx.doorSeqIdx[2]={on:1}; return;}
                    nx.doorSeqIdx[3] = {on:1};
                },3000)

                // console.log('doorcam1')
                // nx.camz.freeCam.setTarget(nx.orbyMesh.position); //flyby follow cam

                // if(!nx.doorSeqIdx[2].init){
                    // nx.doorSeqIdx[2].init = 1; //one-time-.
                    // nx.camz.freeCam.position.copyFrom({x: 216.2455279276293, y: 284.68231138758637, z: -238.01987235268035}); 
                    // nx.scene.activeCamera = nx.camz.freeCam; //FREE-Camera-.
                    // if(nx.orbyMesh.position.z>=-300 ) { nx.doorSeqIdx[2].on=0; nx.doorSeqIdx[3] = {on:1}; } //Orby position Trigger next view-.
    // debugger;

                // }


            }

    //         if(false && nx.doorSeqIdx[2] && nx.doorSeqIdx[2].on){   //ANM: FLYBY CAM
    //             // console.log('doorcam1')
    //             nx.camz.freeCam.setTarget(nx.orbyMesh.position); //flyby follow cam

    //             if(!nx.doorSeqIdx[2].init){
    //                 nx.doorSeqIdx[2].init = 1; //one-time-.
    //                 // nx.camz.freeCam.position.copyFrom({x: 216.2455279276293, y: 284.68231138758637, z: -238.01987235268035}); 
    //                 nx.camz.freeCam.position.copyFrom({x: 163.1524480321646, y: 264.23332459212844, z: -156.64804891073317}); 
    //                 // nx.scene.activeCamera = nx.camz.freeCam; //FREE-Camera-.
    //                 // if(nx.orbyMesh.position.z>=-300 ) { nx.doorSeqIdx[2].on=0; nx.doorSeqIdx[3] = {on:1}; } //Orby position Trigger next view-.
    // // debugger;
    //                 $({xScale:0,zScale:0}). //CLOSE-DOOR-.
    //                 animate({xScale:1,zScale:1},{queue:false,duration:4000,easing:'swing',
    //                 step: function(now) { //ANM:-CAM-.
    //                     if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.

    //                     nx.pyramid.aSpaceDoor.scaling.x = this.xScale; 
    //                     nx.pyramid.aSpaceDoor.scaling.z = this.zScale;

    //                 }, complete:function(){ 
    //                     // nx.doorSeqIdx[5] = {on:1};
    //                     } //NEXT-SUB-SEQUENCE-. 
    //                 });

    //             }


    //         } 


            if(nx.doorSeqIdx[3] && nx.doorSeqIdx[3].on){ //ANM-COMPLEX:MECHANISM-TO-PLAY-MULTIPLE-ANIMATIONS-CONCURRENTLY-. 
                var NUM = 3;
                if(nx.cinemaStop){nx.doorSeqIdx[3]={on:1}; return;}
                // if(!nx.doorSeqIdx[NUM].initCam){
                if(!nx.doorSeqIdx[NUM].flyby){
                    // console.log('still in flyby')
                    nx.camz.freeCam.setTarget(nx.orbyMesh.position); //flyby follow cam
                }

                if(!nx.doorSeqIdx[NUM].init){ nx.doorSeqIdx[NUM].init=1; //one time init


                    //FlyBy CamPos
                    nx.camz.freeCam.position.copyFrom({x: 125.91809305164549, y: 252.910231776879, z: -113.34096907171961}); 
                    // nx.camz.freeCam.position.copyFrom({x: 139.56092055366688, y: 267.4872420873601, z: -103.42442340008849}); 

                    //TODO rename from Path to POSROTs
                    // nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.671,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":5.038,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.43,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-2.178,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-5.785,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-9.393,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-13.001,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.608,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-20.216,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-23.823,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-27.431,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.039,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-34.646,"y":222,"z":31.563},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-38.254,"y":222,"z":35.846},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-40.058,"y":221.955,"z":37.987},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
                    nx.doorSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    nx.doorSeqIdx[NUM].stepIdx = 0;//, nx.doorSeqIdx[1].curPOS, nx.doorSeqIdx[1].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    nx.doorSeqIdx[NUM].anmSpeed = 85;
// //VISUALIZE-.

// // var worldPath =  [{"x":168.083,"y":243.369,"z":-195.18},{"x":162.972,"y":241.095,"z":-192.892},{"x":157.86,"y":239.104,"z":-190.605},{"x":152.749,"y":238.165,"z":-188.317},{"x":147.637,"y":237.225,"z":-186.03},{"x":142.526,"y":236.286,"z":-183.742},{"x":137.602,"y":235.781,"z":-181.079},{"x":132.968,"y":235.577,"z":-177.937},{"x":128.67,"y":235.176,"z":-174.349},{"x":124.754,"y":234.703,"z":-170.349},{"x":121.256,"y":233.887,"z":-165.979},{"x":118.211,"y":232.803,"z":-161.281},{"x":115.651,"y":231.428,"z":-156.302},{"x":113.6,"y":230.061,"z":-151.093},{"x":112.08,"y":228.521,"z":-145.705},{"x":110.695,"y":227.258,"z":-140.279},{"x":109.309,"y":226.716,"z":-134.853},{"x":107.924,"y":226.191,"z":-129.428},{"x":106.538,"y":225.666,"z":-124.002},{"x":105.018,"y":225.902,"z":-118.614},{"x":102.968,"y":226.291,"z":-113.405},{"x":100.407,"y":226.501,"z":-108.426},{"x":97.363,"y":226.518,"z":-103.728},{"x":94.087,"y":226.391,"z":-99.188},{"x":90.375,"y":226.118,"z":-94.998},{"x":86.263,"y":225.8,"z":-91.199},{"x":81.792,"y":225.567,"z":-87.83},{"x":77.007,"y":225.144,"z":-84.924},{"x":72.149,"y":224.582,"z":-82.137},{"x":67.292,"y":224.403,"z":-79.351},{"x":62.434,"y":224.668,"z":-76.565},{"x":57.8,"y":224.859,"z":-73.423},{"x":53.504,"y":224.993,"z":-69.835},{"x":49.586,"y":225.067,"z":-65.835},{"x":45.769,"y":225.096,"z":-61.738},{"x":41.952,"y":225.32,"z":-57.64},{"x":38.135,"y":225.567,"z":-53.543},{"x":34.318,"y":225.814,"z":-49.445},{"x":30.5,"y":226.061,"z":-45.348},{"x":26.683,"y":225.82,"z":-41.25},{"x":23.076,"y":224.543,"z":-36.967},{"x":19.468,"y":223.212,"z":-32.684},{"x":15.86,"y":222.5,"z":-28.401},{"x":12.253,"y":222.5,"z":-24.118},{"x":8.645,"y":222.5,"z":-19.835},{"x":4.838000000000001,"y":222.5,"z":-15.552},{"x":1.0299999999999996,"y":222.5,"z":-11.269},{"x":-3.0780000000000007,"y":222.5,"z":-6.985},{"x":-7.184999999999995,"y":222.5,"z":-2.702},{"x":-11.692999999999993,"y":222.5,"z":1.581},{"x":-16.300999999999995,"y":222.5,"z":5.864},{"x":-21.108000000000064,"y":222.5,"z":10.147},{"x":-26.016000000000084,"y":222.5,"z":14.43},{"x":-31.723000000000113,"y":222.5,"z":18.713},{"x":-37.831000000000145,"y":222.5,"z":22.996},{"x":-44.8390000000002,"y":222.5,"z":27.28},{"x":-50.74600000000023,"y":222.39999999999998,"z":29.662999999999972},{"x":-56.95400000000026,"y":222,"z":35.846},{"x":-60.45800000000029,"y":221.955,"z":37.987}];
// // var worldPath = [{"x":168.083,"y":243.369,"z":-195.18},{"x":162.972,"y":241.095,"z":-192.892},{"x":157.86,"y":239.104,"z":-190.605},{"x":152.749,"y":238.165,"z":-188.317},{"x":147.637,"y":237.225,"z":-186.03},{"x":142.526,"y":236.286,"z":-183.742},{"x":137.602,"y":235.781,"z":-181.079},{"x":132.968,"y":235.577,"z":-177.937},{"x":128.669,"y":235.176,"z":-174.349},{"x":124.754,"y":234.703,"z":-170.349},{"x":121.256,"y":233.887,"z":-165.979},{"x":118.211,"y":232.803,"z":-161.281},{"x":115.651,"y":231.428,"z":-156.302},{"x":113.6,"y":230.061,"z":-151.093},{"x":112.08,"y":228.521,"z":-145.705},{"x":110.695,"y":227.258,"z":-140.279},{"x":109.309,"y":226.716,"z":-134.853},{"x":107.924,"y":226.191,"z":-129.428},{"x":106.538,"y":225.666,"z":-124.002},{"x":105.018,"y":225.902,"z":-118.614},{"x":102.968,"y":226.291,"z":-113.405},{"x":100.407,"y":226.501,"z":-108.426},{"x":97.363,"y":226.518,"z":-103.728},{"x":94.087,"y":226.391,"z":-99.188},{"x":90.375,"y":226.118,"z":-94.998},{"x":86.263,"y":225.8,"z":-91.199},{"x":81.792,"y":225.567,"z":-87.83},{"x":77.007,"y":225.144,"z":-84.924},{"x":72.149,"y":224.582,"z":-82.137},{"x":67.292,"y":224.403,"z":-79.351},{"x":62.434,"y":224.668,"z":-76.565},{"x":57.8,"y":224.859,"z":-73.423},{"x":53.504,"y":224.993,"z":-69.835},{"x":49.586,"y":225.067,"z":-65.835},{"x":45.769,"y":225.096,"z":-61.738},{"x":41.952,"y":225.32,"z":-57.64},{"x":38.135,"y":225.567,"z":-53.543},{"x":34.318,"y":225.814,"z":-49.445},{"x":30.5,"y":226.061,"z":-45.348},{"x":26.683,"y":225.82,"z":-41.25},{"x":23.076,"y":224.543,"z":-36.967},{"x":19.468,"y":223.212,"z":-32.684},{"x":15.86,"y":222.5,"z":-28.401},{"x":12.253,"y":222.5,"z":-24.118},{"x":8.645,"y":222.5,"z":-19.835},{"x":4.838,"y":222.5,"z":-15.552},{"x":1.029,"y":222.5,"z":-11.269},{"x":-3.079,"y":222.5,"z":-6.985},{"x":-7.185,"y":222.5,"z":-2.702},{"x":-11.693,"y":222.5,"z":1.581},{"x":-16.301,"y":222.5,"z":5.864},{"x":-21.109,"y":222.5,"z":10.147},{"x":-26.017,"y":222.5,"z":14.43},{"x":-31.724,"y":222.5,"z":18.713},{"x":-37.832,"y":222.5,"z":22.996},{"x":-44.84,"y":222.5,"z":27.28},{"x":-49.447,"y":222.599,"z":28.561}];
// var worldPath =  [{"x":168.083,"y":243.369,"z":-195.18},{"x":162.972,"y":241.095,"z":-192.892},{"x":157.86,"y":239.104,"z":-190.605},{"x":152.749,"y":238.165,"z":-188.317},{"x":147.637,"y":237.225,"z":-186.03},{"x":142.526,"y":236.286,"z":-183.742},{"x":137.602,"y":235.781,"z":-181.079},{"x":132.968,"y":235.577,"z":-177.937},{"x":128.669,"y":235.176,"z":-174.349},{"x":124.754,"y":234.703,"z":-170.349},{"x":121.256,"y":233.887,"z":-165.979},{"x":118.211,"y":232.803,"z":-161.281},{"x":115.651,"y":231.428,"z":-156.302},{"x":113.6,"y":230.061,"z":-151.093},{"x":112.08,"y":228.521,"z":-145.705},{"x":110.695,"y":227.258,"z":-140.279},{"x":109.309,"y":226.716,"z":-134.853},{"x":107.924,"y":226.191,"z":-129.428},{"x":106.538,"y":225.666,"z":-124.002},{"x":105.018,"y":225.902,"z":-118.614},{"x":102.968,"y":226.291,"z":-113.405},{"x":100.407,"y":226.501,"z":-108.426},{"x":97.363,"y":226.518,"z":-103.728},{"x":94.087,"y":226.391,"z":-99.188},{"x":90.375,"y":226.118,"z":-94.998},{"x":86.263,"y":225.8,"z":-91.199},{"x":81.792,"y":225.567,"z":-87.83},{"x":77.007,"y":225.144,"z":-84.924},{"x":72.149,"y":224.582,"z":-82.137},{"x":67.292,"y":224.403,"z":-79.351},{"x":62.434,"y":224.668,"z":-76.565},{"x":57.8,"y":224.859,"z":-73.423},{"x":53.504,"y":224.993,"z":-69.835},{"x":49.586,"y":225.067,"z":-65.835},{"x":45.769,"y":225.096,"z":-61.738},{"x":41.952,"y":225.32,"z":-57.64},{"x":38.135,"y":225.567,"z":-53.543},{"x":34.318,"y":225.814,"z":-49.445},{"x":30.5,"y":226.061,"z":-45.348},{"x":26.683,"y":225.82,"z":-41.25},{"x":23.076,"y":224.543,"z":-36.967},{"x":19.468,"y":223.212,"z":-32.684},{"x":15.86,"y":222.5,"z":-28.401},{"x":12.253,"y":222.5,"z":-24.118},{"x":8.645,"y":222.5,"z":-19.835},{"x":4.838,"y":222.5,"z":-15.552},{"x":1.029,"y":222.5,"z":-11.269},{"x":-3.079,"y":222.5,"z":-6.985},{"x":-7.185,"y":222.5,"z":-2.702},{"x":-11.693,"y":222.5,"z":1.581},{"x":-16.301,"y":222.5,"z":5.864},{"x":-21.109,"y":222.5,"z":9.647},{"x":-26.017,"y":222.5,"z":13.03},{"x":-31.724,"y":222.5,"z":16.512},{"x":-37.832,"y":222.5,"z":18.895},{"x":-44.84,"y":222.5,"z":24.079},{"x":-49.447,"y":222.599,"z":28.16}];
// nx.truncatedPath = nx.editz.truncatePathPrecision(worldPath)
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-21.109,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-26.017,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.724,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-37.832,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-44.84,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-49.447,"y":222.599,"z":28.561},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
// nx.newTruncatedPOSROTS = nx.editz.splicePOStoROTs(nx.truncatedPath,nx.doorSeqIdx[NUM].descentPath2)
// //TODO RENAME POSROTS to ANMPath and TruncAnmPath
// console.log(JSON.stringify(nx.newTruncatedPOSROTS));
// nx.doorSeqIdx[NUM].descentPath2 = nx.newTruncatedPOSROTS;
// debugger;

// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-44.84,"y":222.5,"z":24.079},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-49.447,"y":222.599,"z":28.16},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
//newROTS in reverse: z: 0, 0.1, 0.2, 0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3, -0.2, -0.1
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":2.24,"z":-0.3}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-44.84,"y":222.5,"z":24.079},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-47.247,"y":222.599,"z":25},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-49.447,"y":222.599,"z":26.01},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-50.248,"y":222.599,"z":27.02},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-51.148,"y":222.599,"z":28.03},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-52.148,"y":222.599,"z":29.04},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-52.848,"y":222.599,"z":30.15},"rot":{"x":0,"y":2.24,"z":0}}];
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":2.24,"z":-0.3}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-44.84,"y":222.5,"z":24.079},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-46.847,"y":222.599,"z":25},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-48.547,"y":222.599,"z":26.01},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-49.447,"y":222.599,"z":27.02},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-50.048,"y":222.599,"z":28.03},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-50.748,"y":222.599,"z":29.04},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-51.548,"y":222.599,"z":30.05},"rot":{"x":0,"y":2.24,"z":0}}]
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":2.24,"z":-0.3}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-44.84,"y":222.5,"z":24.079},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-49.447,"y":222.599,"z":25.00},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-49.447,"y":222.599,"z":26.01},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-49.447,"y":222.599,"z":27.02},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-49.447,"y":222.599,"z":28.03},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-49.447,"y":222.599,"z":29.04},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-49.447,"y":222.599,"z":30.05},"rot":{"x":0,"y":2.24,"z":0}}];
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":2.24,"z":-0.3}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-44.84,"y":222.5,"z":24.079},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-48.347,"y":222.599,"z":25},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-49.447,"y":222.599,"z":26.01},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-50.548,"y":222.599,"z":27.02},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-51.448,"y":222.599,"z":28.03},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-52.548,"y":222.599,"z":29.04},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-53.448,"y":222.599,"z":30.05},"rot":{"x":0,"y":2.24,"z":0}}];
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":2.24,"z":-0.3}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-41.14,"y":222.5,"z":20.778},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-43.947,"y":222.599,"z":22.599},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-46.647,"y":222.599,"z":24.209},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-48.948,"y":222.599,"z":25.819},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-50.948,"y":222.599,"z":27.529},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-52.548,"y":222.599,"z":29.04},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-53.448,"y":222.599,"z":30.05},"rot":{"x":0,"y":2.24,"z":0}}];
nx.doorSeqIdx[NUM].descentPath2 =  [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":2.24,"z":-0.3}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-41.14,"y":222.5,"z":20.778},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-43.947,"y":222.599,"z":22.599},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-46.647,"y":222.599,"z":24.209},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-48.948,"y":222.599,"z":25.819},"rot":{"x":-0.1,"y":2.24,"z":0}},{"pos":{"x":-50.948,"y":222.599,"z":27.529},"rot":{"x":-0.2,"y":2.24,"z":0}},{"pos":{"x":-52.749,"y":222.599,"z":29.04},"rot":{"x":-0.1,"y":2.24,"z":0}},{"pos":{"x":-53.849,"y":222.599,"z":30.05},"rot":{"x":0,"y":2.24,"z":0}}];

// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":-195.18,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":-192.892,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":-190.605,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":-188.317,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":-186.03,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":-183.742,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":-181.079,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":-177.937,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":-174.349,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":-170.349,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":-165.979,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":-161.281,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":-156.302,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":-151.093,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":-145.705,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":-140.279,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":-134.853,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":-129.428,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":-124.002,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":-118.614,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":-113.405,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":-108.426,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":-103.728,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":-99.188,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":-94.998,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":-91.199,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":-87.83,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":-84.924,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":-82.137,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":-79.351,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":-76.565,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":-73.423,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":-69.835,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":-65.835,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":-61.738,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":-57.64,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":-53.543,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":-49.445,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":-45.348,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":-41.25,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":-36.967,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":-32.684,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":-28.401,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-24.118,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-19.835,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-15.552,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-11.269,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-6.985,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-2.702,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.581,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":5.864,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":10.147,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":14.43,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":18.713,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":22.996,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":27.28,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":29.662,"y":222.39999999999998,"z":29.662999999999972},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":35.846,"y":222,"z":35.846},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":37.987,"y":221.955,"z":37.987},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-21.109,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-26.017,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.724,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-37.832,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-44.84,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-50.747,"y":222.399,"z":29.662},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-56.955,"y":222,"z":35.846},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-60.459,"y":221.955,"z":37.987},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-21.109,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-26.017,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.724,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-37.832,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-44.84,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-50.747,"y":222.399,"z":29.662},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-21.109,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-26.017,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.724,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-37.832,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-44.84,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-49.447,"y":222.599,"z":28.561},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-38.254,"y":222,"z":35.846},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-21.109,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-26.017,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.724,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-37.832,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-44.84,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-49.447,"y":222.599,"z":28.561},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];

//WORKING POS PATH TO EDITOR!!!!
// var aPOSPath = [];
// var aROTPath = [];
// for(var i=0; i< nx.doorSeqIdx[NUM].descentPath2.length;i++){
//     var item = nx.doorSeqIdx[NUM].descentPath2[i];
//     if(item.pos){
//         // var oldPOS = new BABYLON.Vector3(item.pos.x,item.pos.y,item.pos.z);
//         // var newPOS = new BABYLON.Vector3.Zero();
//         // newPOS.position = oldPOS.addInPlace(new BABYLON.Vector3(360,240,-450)); //Origin for... orby?
//         // item.pos.x = newPOS.position.x;
//         // item.pos.y = newPOS.position.y;
//         // item.pos.z = newPOS.position.z;
//         // moveAnm1.push(item)
//         // aPath.push(nx.BV3(item.pos.x,item.pos.y,item.pos.z))
//         // aPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000)) //TRUNCATE PRECISION-.
//         // aPath.push(
//         //     { pos: nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000),
//         //         rot:item.rot
//         //     }
//         // ) //TRUNCATE PRECISION-.
//         aPOSPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000))
//         //SPLIT POS AND ROT-.
//         if(!item.rot.w){ //non quaternion-.
//             aROTPath.push(nx.BV3(Math.floor(item.rot.x*1000)/1000,Math.floor(item.rot.y*1000)/1000,Math.floor(item.rot.z*1000)/1000))
//         }

//     }
// }


// var instPath = nx.createPathEditor({aName:'decentPATH2', ANMPath:nx.doorSeqIdx[NUM].descentPath2}); //ACTUALL-WORKING-.


                } //end init sequence-.

                if(!nx.doorSeqIdx[NUM].initAnm){  //init next path point
                    // nx.doorSeqIdx[1].curPOS = nx.doorSeqIdx[1].movepath[nx.doorSeqIdx[1].stepIdx];
                    // nx.doorSeqIdx[1].nxtPOS = nx.doorSeqIdx[1].movepath[++nx.doorSeqIdx[1].stepIdx]
                    nx.doorSeqIdx[NUM].curPOS = nx.doorSeqIdx[NUM].descentPath2[nx.doorSeqIdx[NUM].stepIdx];
                    nx.doorSeqIdx[NUM].nxtPOS = nx.doorSeqIdx[NUM].descentPath2[++nx.doorSeqIdx[NUM].stepIdx];
                    nx.doorSeqIdx[NUM].initAnm = 1;
                    if(!nx.doorSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.doorSeqIdx[NUM].on=0; //important
                        // nx.doorSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                        //SIMULTANEOUS-ANMS-
                        // nx.doorSeqIdx[4] = {on:1};  //TODO change to TRIGGER on enter DOOR-
                        // nx.doorSeqIdx[2] = {on:0}; //NEXT-ANM-. 
                        // nx.doorSeqIdx[3] = {on:1}; //NEXT-ANM-. 
                        // nx.cinematicMode = 0;
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.doorSeqIdx[NUM].runAnm = 1;
                }  
                //NEW-RUN-ANM-FORMAT-.
                if(nx.doorSeqIdx[NUM].runAnm) { nx.doorSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.doorSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.doorSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.doorSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.doorSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.doorSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.doorSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.doorSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); nx.doorSeqIdx[3]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        //EDITABLE-ROTATIONS-.
                        if(nx.doorSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.doorSeqIdx[NUM].curPOS.rot.x,nx.doorSeqIdx[NUM].curPOS.rot.y,nx.doorSeqIdx[NUM].curPOS.rot.z,nx.doorSeqIdx[NUM].curPOS.rot.w);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }else{ //EULER-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = null;
                            nx.orbyMesh.rotation = new BABYLON.Vector3(nx.doorSeqIdx[NUM].curPOS.rot.x,nx.doorSeqIdx[NUM].curPOS.rot.y,nx.doorSeqIdx[NUM].curPOS.rot.z);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }
                    }, complete:function(){ 
                        nx.doorSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });


                }

                //ZONE-TRIGGER-CAM-REPOSITION-.
                if(nx.orbyMesh.position.z>=-82 && !nx.doorSeqIdx[4]) { //CAM-TRIGGER -anmethodology-.
                    // nx.cinemaStop = 1;
                    // debugger;
                    // nx.doorSeqIdx[3].on = 0;
                    nx.doorSeqIdx[NUM].flyby = 1;

                    // nx.doorSeqIdx[NUM].initCam = 1;
                    nx.doorSeqIdx[4] = {on:1}; 
                } //Orby position Trigger next view-.




            } //end doorSeq 3


            if(nx.doorSeqIdx[4] && nx.doorSeqIdx[4].on){ nx.doorSeqIdx[4].on=0; //ANM: TOP VIEW CAM
                if(nx.cinemaStop){nx.doorSeqIdx[4]={on:1}; return;}
                var NUM = 4; //TODO move these out so garbage collector need not collect any memory-.
                // nx.camz.freeCam.position.copyFrom({x: 246.36744157800896, y: 331.1583171252257, z: -248.9611846485055}); 
                // nx.camz.freeCam.setTarget( new nx.BV3(30,223,-30) );
                // if(nx.orbyMesh.position.z>=-265 ) { nx.doorSeqIdx[4] = {on:1}; } //Orby position Trigger next view-.
            // }



                // nx.camz.freeCam.position.copyFrom({x: -41, y: 237, z: 27})      //Shoulder Shot 1 - spacetrain
                // nx.camz.freeCam.setTarget( nx.BV32({x: -46, y: 232, z: 30}) );


            // console.log('ANM3')
                    $({cPOSx:nx.camz.freeCam.position.x,cPOSy:nx.camz.freeCam.position.y,cPOSz:nx.camz.freeCam.position.z}). //{x: 143.60593853803792, y: 258.3492073176974, z: -130.58655007937782}
                    // animate({cPOSx:-28,cPOSy:230,cPOSz:34},{queue:false,duration:4000,easing:'swing',
                    // animate({cPOSx:-38,cPOSy:230,cPOSz:24},{queue:false,duration:4000,easing:'swing',
                    // animate({cPOSx:-35,cPOSy:240,cPOSz:23},{queue:false,duration:4000,easing:'swing',
                    animate({cPOSx:-44,cPOSy:230,cPOSz:28},{queue:false,duration:4000,easing:'swing',
                    step: function(now) { //ANM:-CAM *******************************************************POS move to edge-.
                        if(nx.cinemaStop){ $(this).stop(); nx.doorSeqIdx[4]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.camz.freeCam.position.x = this.cPOSx;
                        nx.camz.freeCam.position.y = this.cPOSy;
                        nx.camz.freeCam.position.z = this.cPOSz;
                        // nx.scene.activeCamera.setTarget(new nx.BV3(0,this.cTGTy,0));
                        // console.log('activecam1')
                    }, complete:function(){ 

                        // debugger;

                        nx.ui.flashCanvasMSG({txt:'The SpaceTrain!',txtIcon:'orby',txtInit:function(){ //todo sonic ding
                        }}); //todo quest complete badge on right

                        $({FOCx:nx.camz.freeCam._currentTarget.x,FOCy:nx.camz.freeCam._currentTarget.y,FOCz:nx.camz.freeCam._currentTarget.z}). //{x: 143.60593853803792, y: 258.3492073176974, z: -130.58655007937782}
                        animate({FOCx:-50,FOCy:226,FOCz:31},{queue:false,duration:3000,easing:'swing',
                        // animate({FOCx:-43,FOCy:227,FOCz:27},{queue:false,duration:3000,easing:'swing',
                        // animate({FOCx:-47,FOCy:218,FOCz:43},{queue:false,duration:3000,easing:'swing',
                        step: function(now) { //ANM:-CAM-. ***********************************************FOCUS ONTO SPACE TRAIN-.
                            if(nx.cinemaStop){ $(this).stop(); nx.doorSeqIdx[4]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                            // nx.camz.freeCam.position.x = this.cPOSx;
                            // nx.camz.freeCam.position.y = this.cPOSy;
                            // nx.camz.freeCam.position.z = this.cPOSz;
                            nx.camz.freeCam.setTarget(new nx.BV32( {x: this.FOCx, y: this.FOCy, z: this.FOCz}));
                            // nx.camz.freeCam.setTarget(new nx.BV3(0,this.cTGTy,0));
                            // console.log('activecam1')
                        }, complete:function(){ 

                            setTimeout(function(){
                                if(nx.cinemaStop){nx.doorSeqIdx[4]={on:1}; return;}
                                // debugger;
                                // nx.cinematicMode =0;
                                nx.doorSeqIdx[5] = {on:1};
                            },2000)

                            } //NEXT-SUB-SEQUENCE-. 
                        });



                        // nx.ui.flashCanvasMSG({txt:'A wrecked SpaceTrain!'}); 
                        // nx.scene.activeCamera.setTarget(new nx.BV32( {x: -47.171615452765245, y: 218.56095645248953, z: 43.51296364165076}));
                        // nx.doorSeqIdx[5] = {on:1};
                        } //NEXT-SUB-SEQUENCE-. 
                    });

                    // $({cPOSx:246,cPOSy:330,cPOSz:-248,cTGTy:220}). //{x: 143.60593853803792, y: 258.3492073176974, z: -130.58655007937782}
                    // animate({cPOSx:143,cPOSy:258,cPOSz:-130,cTGTy:250},{queue:false,duration:4000,easing:'swing',
                    // step: function(now) { //ANM:-CAM-.
                    //     if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                    //     nx.scene.activeCamera.position.x = this.cPOSx;
                    //     nx.scene.activeCamera.position.y = this.cPOSy;
                    //     nx.scene.activeCamera.position.z = this.cPOSz;
                    //     nx.scene.activeCamera.setTarget(new nx.BV3(0,this.cTGTy,0));
                    //     // console.log('activecam1')
                    // }, complete:function(){ 
                    //     nx.doorSeqIdx[5] = {on:1};
                    //     } //NEXT-SUB-SEQUENCE-. 
                    // });

                    //TODO change to Door with ZapBOt coming up.
                    // $({towery:230}).
                    // animate({towery:191.5},{queue:false,duration:8000,easing:'linear',
                    // step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                    //     nx.tower.position.y = this.towery;
                    // }, complete:function(){ 
                    //     // nx.doorSeqIdx[1].initAnm = 0; 
                    //     } //NEXT-SUB-SEQUENCE-. 
                    // });

            }

            if(nx.doorSeqIdx[5] && nx.doorSeqIdx[5].on){ nx.doorSeqIdx[5].on=0; //ANM:  MID CAM LOOK_BACK AND FOLLOW
                if(nx.cinemaStop){nx.doorSeqIdx[5]={on:1}; return;}
                // nx.camz.freeCam.position.copyFrom({x: 139.69990173160264, y: 260.5549340410019, z: -122.80201090853345}); 
                // nx.camz.freeCam.setTarget( nx.orbyMesh.position );
                // //FREE-FOLLOW
                // if(nx.orbyMesh.position.z>=-50 ) { 
                //     // console.log('done')
                //     nx.doorSeqIdx[5].on=0;


                //     // nx.pyramid.aSpaceDoor.scaling.x = 0.95; nx.pyramid.aSpaceDoor.scaling.z = 0.95


                //     // nx.doorSeqIdx[3] = {on:1}; 
                // } //Orby position Trigger next view-.

                // setTimeout(function(){
                //     nx.ui.flashCanvasMSG({txt:'ZapBot!'}); 
                // },1000);


                //LOOKBACK CAM FOC on ZAPBOT
                // nx.camz.freeCam.position.copyFrom({x: -58, y: 227, z: 41}); 
                // nx.camz.freeCam.position.copyFrom({x: -61.29, y: 225.5, z: 39.64}); 
                nx.camz.freeCam.position.copyFrom({x: -66, y: 226, z: 48}); 
                // nx.camz.freeCam.setTarget( new nx.BV32({x: -50, y: 226, z: 35}) );
                // nx.camz.freeCam.setTarget( new nx.BV32({x: -56.29, y: 224.83, z: 35.84}) );
                nx.camz.freeCam.setTarget( new nx.BV32({x: -60, y: 226, z: 44}) );

                // nx.camz.freeCam.position.copyFrom({x: -67.89485018349265, y: 234.3895369087558, z: 64.28269625435749}); 
                // nx.camz.freeCam.setTarget( new nx.BV32({x: -47.69278669884974, y: 233.521376118712, z: 44.76822246838478}) );

                // nx.cinematicMode = 0;
                // nx.cinemaStop = 1;

                //INIT-ZAPBOT
                nx.kiloBotMesh1.searching = 0;
                nx.kiloBotMesh1.rotation.y = 2.44;


                    $({zbPOSx:280,zbPOSy:319,zbPOSz:-344}). //{x: 143.60593853803792, y: 258.3492073176974, z: -130.58655007937782}
                    animate({zbPOSx:120,zbPOSy:230,zbPOSz:-150},{queue:false,duration:3000,easing:'linear',
                    step: function(now) { //ANM:-CAM *******************************************************POS //ZAPBOT-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); nx.doorSeqIdx[5]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.kiloBotMesh1.position.x = this.zbPOSx;
                        nx.kiloBotMesh1.position.y = this.zbPOSy;
                        nx.kiloBotMesh1.position.z = this.zbPOSz;
                        // nx.scene.activeCamera.setTarget(new nx.BV3(0,this.cTGTy,0));
                        // console.log('activecam1')
                    }, complete:function(){ 
                            nx.doorSeqIdx[6] = {on:1};
                        }
                    });



                // setTimeout(function(){
                //     // debugger;
                    
                // },3000)







            }
            if(nx.doorSeqIdx[6] && nx.doorSeqIdx[6].on){ nx.doorSeqIdx[6].on=0; //ANM CAM: Follow HERO down pyramid  
                if(nx.cinemaStop){nx.doorSeqIdx[6]={on:1}; return;}
                var NUM = 6;
                // if(!nx.doorSeqIdx[NUM].initCam){
                    // nx.doorSeqIdx[NUM].initCam = 1;
                    // nx.initFollowCam();
                    // nx.camz.freeCam.setTarget(nx.orbyMesh.position); //flyby follow cam

                // setTimeout(function(){
                    // nx.cinemaStop = 1;
                    nx.cinematicMode=0;//Start new cinematic-.
                    nx.crashSeqIdx[0] = {on:1}; nx.runCinematicSequence("CrashSequence")
                    
                // },1000)

                // }
                // if(!nx.doorSeqIdx[NUM].init){ nx.doorSeqIdx[NUM].init=1; //one time init


                    //FlyBy CamPos
                    // nx.camz.freeCam.position.copyFrom({x: 125.91809305164549, y: 252.910231776879, z: -113.34096907171961}); 
                    // // nx.camz.freeCam.position.copyFrom({x: 139.56092055366688, y: 267.4872420873601, z: -103.42442340008849}); 

                    // nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":211.631,"y":271.923,"z":-228.105},"rot":{"x":0.08,"y":-0.968,"z":0.112,"w":-0.212}},{"pos":{"x":208.825,"y":272.404,"z":-223.261},"rot":{"x":0.09,"y":-0.958,"z":0.05,"w":-0.268}},{"pos":{"x":205.549,"y":271.623,"z":-218.721},"rot":{"x":0.118,"y":-0.937,"z":-0.054,"w":-0.326}},{"pos":{"x":201.837,"y":269.377,"z":-214.53},"rot":{"x":0.16,"y":-0.897,"z":-0.172,"w":-0.377}},{"pos":{"x":197.725,"y":265.503,"z":-210.732},"rot":{"x":0.202,"y":-0.847,"z":-0.258,"w":-0.419}},{"pos":{"x":193.254,"y":260.041,"z":-207.362},"rot":{"x":0.197,"y":-0.84,"z":-0.205,"w":-0.463}},{"pos":{"x":188.469,"y":256.196,"z":-204.456},"rot":{"x":0.209,"y":-0.815,"z":-0.198,"w":-0.504}},{"pos":{"x":183.418,"y":252.352,"z":-202.043},"rot":{"x":0.211,"y":-0.793,"z":-0.174,"w":-0.545}},{"pos":{"x":178.306,"y":248.939,"z":-199.755},"rot":{"x":0.137,"y":-0.812,"z":-0.213,"w":-0.527}},{"pos":{"x":173.195,"y":245.971,"z":-197.467},"rot":{"x":0.117,"y":-0.82,"z":-0.182,"w":-0.532}},{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.671,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":5.038,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.43,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-2.178,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-5.785,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-9.393,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-13.001,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.608,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-20.216,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-23.823,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-27.431,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.039,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-34.646,"y":222,"z":31.563},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-38.254,"y":222,"z":35.846},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-40.058,"y":221.955,"z":37.987},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
                    // nx.doorSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    // nx.doorSeqIdx[NUM].stepIdx = 0;//, nx.doorSeqIdx[1].curPOS, nx.doorSeqIdx[1].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    // nx.doorSeqIdx[NUM].anmSpeed = 85;
//VISUALIZE-.
// debugger;
// var instPath = nx.createPathEditor({aName:'decentPATH', aPath:aPOSPath}); //WORKING-.
// var instPath = nx.createPathEditor({aName:'decentPATH', aPath:nx.doorSeqIdx[1].descentPath});
// if(instPath && instPath.aPath){nx.doorSeqIdx[NUM].descentPath.aPath = instPath.aPath}

                // } //end init sequence-.

                // if(!nx.doorSeqIdx[NUM].initAnm){  //init next path point
                //     // nx.doorSeqIdx[1].curPOS = nx.doorSeqIdx[1].movepath[nx.doorSeqIdx[1].stepIdx];
                //     // nx.doorSeqIdx[1].nxtPOS = nx.doorSeqIdx[1].movepath[++nx.doorSeqIdx[1].stepIdx]
                //     nx.doorSeqIdx[NUM].curPOS = nx.doorSeqIdx[NUM].descentPath2[nx.doorSeqIdx[NUM].stepIdx];
                //     nx.doorSeqIdx[NUM].nxtPOS = nx.doorSeqIdx[NUM].descentPath2[++nx.doorSeqIdx[NUM].stepIdx];
                //     nx.doorSeqIdx[NUM].initAnm = 1;
                //     if(!nx.doorSeqIdx[NUM].nxtPOS){  //END-ANM 
                //         nx.doorSeqIdx[NUM].on=0; //important
                //         // nx.doorSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                //         //SIMULTANEOUS-ANMS-
                //         // nx.doorSeqIdx[4] = {on:1};  //TODO change to TRIGGER on enter DOOR-
                //         // nx.doorSeqIdx[2] = {on:0}; //NEXT-ANM-. 
                //         // nx.doorSeqIdx[3] = {on:1}; //NEXT-ANM-. 
                //         // nx.cinematicMode = 0;
                //         return; //END-SUB-SEQUENCES-.
                //     } 
                //     nx.doorSeqIdx[NUM].runAnm = 1;
                // }  
                // //NEW-RUN-ANM-FORMAT-.
                // if(nx.doorSeqIdx[NUM].runAnm) { nx.doorSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                //     $({curPOSx:nx.doorSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.doorSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.doorSeqIdx[NUM].curPOS.pos.z}).
                //     animate({curPOSx:nx.doorSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.doorSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.doorSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.doorSeqIdx[NUM].anmSpeed,easing:'linear',
                //     step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                //         if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                //         nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                //         nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                //         nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.doorSeqIdx[NUM].curPOS.rot.x,nx.doorSeqIdx[NUM].curPOS.rot.y,nx.doorSeqIdx[NUM].curPOS.rot.z,nx.doorSeqIdx[NUM].curPOS.rot.w);
                //         nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                //     }, complete:function(){ 
                //         nx.doorSeqIdx[NUM].initAnm = 0; 
                //         } //NEXT-SUB-SEQUENCE-. 
                //     });


                // }



            }

        });
    } //END-SEQUENCE-.
    else if(seqName==="CrashSequence"){
        nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as SEQIDX.
            if(nx.crashSeqIdx[0] && nx.crashSeqIdx[0].on){ 
                // debugger;
                if(nx.cinemaStop){nx.crashSeqIdx[0]={on:1}; return;}
                nx.crashSeqIdx[0].on=0; 



                    //SET-WORLD-SCALE-.
                    nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);
                    // nx.landPad.scaling = new BABYLON.Vector3(1, 1, 1);


                    //CAM-POS.
                    // console.log('crashcam1')
//                     Vector3 {x: -9.500764482927815, y: 252.29155032726516, z: 165.3748807099497}
// nx.scene.activeCamera.position
// Vector3 {x: -9.908939405808331, y: 252.21131129933184, z: 159.3092357617978}
                    nx.camz.freeCam.position.copyFrom({x: -9, y: 252, z: 165})      //Midshot 1 - space and pyramid
                    nx.camz.freeCam.setTarget( nx.BV32({x: -10, y: 252, z: 159}) );
                    // nx.camz.freeCam.position.copyFrom({x: -15.194582636015335, y: 226.69069308844618, z: 59.26712472853547})
                    // nx.camz.freeCam.setTarget( nx.orbyMesh.position );
                    nx.scene.activeCamera = nx.camz.freeCam; 


                    //ROT-.
                    // console.log('RESETROT')
                    nx.orbyMesh.rotationQuaternion = null;
                    nx.orbyMesh.rotation = new nx.BV3(0,2.5,0);




                // if(nx.orbyMesh.position.z >= 50 ){
                setTimeout(function(){
                    // debugger;
                    if(nx.cinemaStop){nx.crashSeqIdx[0]={on:1}; return;}
                    nx.crashSeqIdx[1] = {on:1} 
                },3000)
                    // nx.crashSeqIdx[2] = {on:1}; 
                    // nx.crashSeqIdx[3] = {on:1}; 
                    // nx.crashSeqIdx[6] = {on:1}; 

                // }
            }/*use for sequence config*/
            if(nx.crashSeqIdx[1] && nx.crashSeqIdx[1].on){ nx.crashSeqIdx[1].on = 0; //ANM------------------------------- CAM POV
                if(nx.cinemaStop){nx.crashSeqIdx[1]={on:1}; return;}

                // debugger;
                nx.camz.freeCam.position.copyFrom({x: -41, y: 237, z: 27})      //Shoulder Shot 1 - spacetrain
                nx.camz.freeCam.setTarget( nx.BV32({x: -46, y: 232, z: 30}) );
                // nx.camz.freeCam.position.copyFrom({x: -35, y: 240, z: 23})      //Shoulder Shot 1 - spacetrain
                // nx.camz.freeCam.setTarget( nx.BV32({x: -40, y: 235, z: 25}) );

                setTimeout(function(){
                    // debugger;
                    if(nx.cinemaStop){nx.crashSeqIdx[1]={on:1}; return;}
                    nx.crashSeqIdx[2] = {on:1};
                    nx.crashSeqIdx[3] = {on:1}; //SIMCAM: -VIEW-TRIGGERz.
                },2000)

            }
            // if(nx.crashSeqIdx[2] && nx.crashSeqIdx[2].on){ nx.crashSeqIdx[2].on = 0; //ANM---------------- ORBY DOWN PYRAMID!

//top of skid
// nx.orbyMesh.rotation.y = 2.24
// nx.orbyMesh.position
// Vector3 {x: -49.447, y: 222.599, z: 27.77590588235294}





            // }
            //ANM METHODOLOGY if(false && frame)- splicing out frames at devtime-.
            if(nx.crashSeqIdx[2] && nx.crashSeqIdx[2].on){ //ANM-------------------------------ORBY-DOWNFINAL-LENGTH oF SPACE-PIPE
                if(nx.cinemaStop){nx.crashSeqIdx[1]={on:1}; return;}



                    // nx.cinemaStop = 1;  //stop movies
                    // nx.cinematicMode = 0 //switch to playMode for RECORDING;
                    // nx.orbyMesh.rotation.y = 2.24;


                var NUM = 2; //todo change to nx.ANMIDX-.
                if(!nx.crashSeqIdx[NUM].initSeq){ nx.crashSeqIdx[NUM].initSeq=1; //one time init




                    nx.camz.freeCam.position.copyFrom({x: -319.74, y: 30.38, z: 535.032})  //LONG-VIEW
                    // nx.scene.activeCamera = nx.camz.freeCam; 
                    nx.camz.freeCam.setTarget( new nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z ));
                    // nx.scene.activeCamera.setTarget( new nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y+200,nx.orbyMesh.position.z ));





                    // nx.crashSeqIdx[NUM].pyramidPath = {aPath:{},rot:{}}
                    // nx.crashSeqIdx[1].movepath = [{"x":29.75486761531188,"y":224.32266860020542,"z":-29.850291642082745},{"x":29.270582260697623,"y":224.30289489747554,"z":-29.496077927483135},{"x":28.786296906083365,"y":224.28263862057136,"z":-29.141864212883526},{"x":28.302011551469107,"y":224.26081129647264,"z":-28.787650498283917},{"x":27.81772619685485,"y":224.2936900771914,"z":-28.433436783684307},{"x":27.33344084224059,"y":224.34083146085953,"z":-28.079223069084698},{"x":26.849155487626334,"y":224.38815621839524,"z":-27.72500935448509},{"x":26.364870133012076,"y":224.436588811908,"z":-27.37079563988548},{"x":25.880584778397818,"y":224.4856138636259,"z":-27.01658192528587},{"x":25.39629942378356,"y":224.53624946992633,"z":-26.66236821068626},{"x":24.912014069169302,"y":224.58733114535318,"z":-26.30815449608665},{"x":24.427728714555045,"y":224.64077267816143,"z":-25.95394078148704},{"x":23.943443359940787,"y":224.70883748828012,"z":-25.599727066887436},{"x":23.459158718896745,"y":224.70000753998744,"z":-25.245514115219162},{"x":22.97487334984966,"y":224.70000753998744,"z":-24.89130039006316},{"x":22.490587980802573,"y":224.70000753998744,"z":-24.53708666490716},{"x":22.006302611755487,"y":224.70000753998744,"z":-24.18287293975116},{"x":21.5220172427084,"y":224.69000753998745,"z":-23.82865921459516},{"x":21.037731873661315,"y":224.68000753998746,"z":-23.47444548943916},{"x":20.55344650461423,"y":224.66000753998748,"z":-23.120231764283158},{"x":20.069161135567143,"y":224.6200075399875,"z":-22.766018039127157},{"x":19.584875766520057,"y":224.60000753998753,"z":-22.411804313971157},{"x":19.10058981379821,"y":224.55369140624998,"z":-22.057589920891342},{"x":18.61630445918395,"y":224.53369140625,"z":-21.703376206291733},{"x":18.132019104569693,"y":224.53369140625,"z":-21.349162491692123},{"x":17.647733749955435,"y":224.53369140625,"z":-20.994948777092514},{"x":17.163448395341177,"y":224.53369140625,"z":-20.640735062492904},{"x":16.67916304072692,"y":224.53369140625,"z":-20.286521347893295},{"x":16.19487768611266,"y":224.53369140625,"z":-19.932307633293686},{"x":15.710592331498406,"y":224.53369140625,"z":-19.578093918694076},{"x":15.226306976884148,"y":224.53369140625,"z":-19.223880204094467},{"x":14.74202162226989,"y":224.53369140625,"z":-18.869666489494858},{"x":14.257736267655632,"y":224.53369140625,"z":-18.515452774895248},{"x":13.773450913041374,"y":224.53369140625,"z":-18.16123906029564},{"x":13.289165558427117,"y":224.53369140625,"z":-17.80702534569603},{"x":12.804880203812859,"y":224.53369140625,"z":-17.45281163109642},{"x":12.320594849198601,"y":224.53369140625,"z":-17.09859791649681},{"x":11.836309494584343,"y":224.53369140625,"z":-16.7443842018972},{"x":11.352024139970085,"y":224.53369140625,"z":-16.390170487297592},{"x":10.867738785355828,"y":224.53369140625,"z":-16.035956772697983},{"x":10.38345343074157,"y":224.53369140625,"z":-15.681743058098371},{"x":9.899168076127312,"y":224.53369140625,"z":-15.327528389824446},{"x":9.414882721513054,"y":224.53369140625,"z":-14.97331372155052},{"x":8.930597366898795,"y":224.53369140625,"z":-14.619099053276594},{"x":8.446312012284537,"y":224.53369140625,"z":-14.264884385002668},{"x":7.96202665767028,"y":224.53369140625,"z":-13.910669716728743},{"x":7.477741303056022,"y":224.53369140625,"z":-13.556455048454817},{"x":6.993455948441764,"y":224.53369140625,"z":-13.202240380180891},{"x":6.509170593827506,"y":224.53369140625,"z":-12.848025711906965},{"x":6.024885239213249,"y":224.53369140625,"z":-12.493811043633038},{"x":5.540599884598991,"y":224.53369140625,"z":-12.139596375359112},{"x":5.056314529984733,"y":224.53369140625,"z":-11.785381707085186},{"x":4.572029175370475,"y":224.53369140625,"z":-11.43116703881126},{"x":4.087743820756217,"y":224.53369140625,"z":-11.076952370537335},{"x":3.6034584661419595,"y":224.53369140625,"z":-10.722737702263409},{"x":3.1191731115277017,"y":224.53369140625,"z":-10.368523033989483},{"x":2.634887756913444,"y":224.53369140625,"z":-10.014308365715557},{"x":2.150602402299186,"y":224.53369140625,"z":-9.660093697441631},{"x":1.6663170476849283,"y":224.53369140625,"z":-9.305879029167706},{"x":1.18203181227996,"y":224.53369140625,"z":-8.95166436089378},{"x":0.6977465768749918,"y":224.53369140625,"z":-8.597449692619854},{"x":0.21346128186537872,"y":224.53369140625,"z":-8.243235024345928},{"x":-0.2708240131442343,"y":224.53369140625,"z":-7.8890203560720025},{"x":-0.7551093081538474,"y":224.53369140625,"z":-7.534806164635235},{"x":-1.2393946031634604,"y":224.53369140625,"z":-7.180591973198467},{"x":-1.7236798385684287,"y":224.53369140625,"z":-6.8263777817617},{"x":-2.207965073973397,"y":224.53369140625,"z":-6.472163590324932},{"x":-2.6922504285876547,"y":224.53369140625,"z":-6.1179493988881655},{"x":-3.1765357832019125,"y":224.53369140625,"z":-5.763735207451398},{"x":-3.6608211378161704,"y":224.53369140625,"z":-5.40952101601463},{"x":-4.145106492430428,"y":224.53369140625,"z":-5.055306824577863},{"x":-4.629391608626107,"y":224.53369140625,"z":-4.701092633141095},{"x":-5.113676963240365,"y":224.53369140625,"z":-4.346878441704328},{"x":-5.5979623178546225,"y":224.53369140625,"z":-3.99266425026756},{"x":-6.08224767246888,"y":224.53369140625,"z":-3.6384500588307924},{"x":-6.566533027083138,"y":224.53369140625,"z":-3.284235867394025},{"x":-7.050818381697395,"y":224.53369140625,"z":-2.930021675957257},{"x":-7.535103736311653,"y":224.53369140625,"z":-2.5758074845204892},{"x":-8.01938909092591,"y":224.53369140625,"z":-2.2215932930837217},{"x":-8.503674445540168,"y":224.53369140625,"z":-1.867379101646954},{"x":-8.987959800154426,"y":224.53369140625,"z":-1.513164791000897},{"x":-9.472245154768684,"y":224.53369140625,"z":-1.1589504803548398},{"x":-9.956530509382942,"y":224.53369140625,"z":-0.8047361697087827},{"x":-10.4408158639972,"y":224.53369140625,"z":-0.45052191866737035},{"x":-10.925101218611458,"y":224.53369140625,"z":-0.0963076378236356},{"x":-11.409386573225715,"y":224.53369140625,"z":0.25790664302009914},{"x":-11.893671927839973,"y":224.53369140625,"z":0.6121209238638339},{"x":-12.377957282454231,"y":224.53369140625,"z":0.9663352047075687},{"x":-12.862242637068489,"y":224.53369140625,"z":1.3205494557489812},{"x":-13.346527991682747,"y":224.53369140625,"z":1.6747637663950383},{"x":-13.830813346297004,"y":224.53369140625,"z":2.0289780770410952},{"x":-14.315098700911262,"y":224.53369140625,"z":2.3831923876871524},{"x":-14.79938405552552,"y":224.53369140625,"z":2.7374065791239204},{"x":-15.28366941013978,"y":224.53369140625,"z":3.091620770560688},{"x":-15.767954764754037,"y":224.53369140625,"z":3.445834961997455},{"x":-16.252240119368295,"y":224.53369140625,"z":3.8000491534342227},{"x":-16.736524520308237,"y":224.53369140625,"z":4.15426334487099},{"x":-17.220809874922494,"y":224.53369140625,"z":4.5084777747263365},{"x":-17.705095229536752,"y":224.53369140625,"z":4.862691966163105},{"x":-18.18938058415101,"y":224.53369140625,"z":5.2169061575998725},{"x":-18.673665938765268,"y":224.53369140625,"z":5.57112034903664},{"x":-19.157951293379526,"y":224.53369140625,"z":5.925334540473408},{"x":-19.642236647993784,"y":224.53369140625,"z":6.279548731910175},{"x":-20.12652200260804,"y":224.53369140625,"z":6.633762923346943},{"x":-20.6108073572223,"y":224.53369140625,"z":6.98797711478371},{"x":-21.095092711836557,"y":224.53369140625,"z":7.342191306220478},{"x":-21.579378066450815,"y":224.53369140625,"z":7.696405497657246},{"x":-22.063663421065073,"y":224.53369140625,"z":8.050619689094013},{"x":-22.54794877567933,"y":224.53369140625,"z":8.404834357367939},{"x":-23.03223413029359,"y":224.53369140625,"z":8.759049025641865},{"x":-23.516519484907846,"y":224.53369140625,"z":9.11326369391579},{"x":-24.000804839522104,"y":224.53369140625,"z":9.467478362189716},{"x":-24.48509019413636,"y":224.53369140625,"z":9.821693030463642},{"x":-24.96937554875062,"y":224.53369140625,"z":10.175907698737568},{"x":-25.453660903364877,"y":224.53369140625,"z":10.530122367011494},{"x":-25.937946257979135,"y":224.53369140625,"z":10.88433703528542},{"x":-26.422231612593393,"y":224.53369140625,"z":11.238551703559345},{"x":-26.90651696720765,"y":224.53369140625,"z":11.592766371833271},{"x":-27.39080232182191,"y":224.53369140625,"z":11.946981040107197},{"x":-27.87508849274569,"y":224.50000753998754,"z":12.301196064428915},{"x":-28.359373861792776,"y":224.40000753998754,"z":12.65541074325926},{"x":-28.84365923083986,"y":224.30000753998755,"z":13.009625422089606},{"x":-29.327944599886948,"y":224.20000753998755,"z":13.363840100919951},{"x":-29.812229968934034,"y":224.10000753998756,"z":13.718054779750297},{"x":-30.29651533798112,"y":224.10000753998756,"z":14.072269458580642},{"x":-30.780800707028206,"y":224.20000753998755,"z":14.426484137410988},{"x":-31.265086076075292,"y":224.30000753998755,"z":14.780698816241333},{"x":-31.749371445122378,"y":224.30000753998755,"z":15.134913495071679},{"x":-32.233656814169464,"y":224.20000753998755,"z":15.489128173902024},{"x":-32.71794409056524,"y":224.10000753998756,"z":15.84334285273237},{"x":-33.202231366961016,"y":224.00000753998756,"z":16.197557531562715},{"x":-33.68651864335679,"y":224.00000753998756,"z":16.55177221039306},{"x":-34.17080591975257,"y":224.00000753998756,"z":16.90598784289775},{"x":-34.65509319614834,"y":224.00000753998756,"z":17.26020347540244},{"x":-35.13938047254412,"y":224.00000753998756,"z":17.614419107907132},{"x":-35.623667748939894,"y":224.00000753998756,"z":17.968634740411822},{"x":-36.10795502533567,"y":224.00000753998756,"z":18.322850372916513},{"x":-36.592242301731446,"y":224.00000753998756,"z":18.677066005421203},{"x":-37.07652957812722,"y":224.00000753998756,"z":19.031281637925893},{"x":-37.560816854523,"y":224.00000753998756,"z":19.385497270430584},{"x":-38.04510413091877,"y":224.00000753998756,"z":19.739712902935274},{"x":-38.52939140731455,"y":224.00000753998756,"z":20.093928535439964},{"x":-39.013678683710324,"y":224.00000753998756,"z":20.448144167944655},{"x":-39.4979659601061,"y":224.00000753998756,"z":20.802359800449345},{"x":-39.982253236501876,"y":224.00000753998756,"z":21.156575432954035},{"x":-40.46654051289765,"y":224.00000753998756,"z":21.510791065458726},{"x":-40.95082778929343,"y":224.00000753998756,"z":21.865006697963416},{"x":-41.4351150656892,"y":224.00000753998756,"z":22.219222330468106},{"x":-41.91940234208498,"y":224.00000753998756,"z":22.573437962972797},{"x":-42.403689618480755,"y":224.00000753998756,"z":22.927653595477487},{"x":-42.88797689487653,"y":224.00000753998756,"z":23.281869227982178},{"x":-43.372264171272306,"y":223.9584679620999,"z":23.636084860486868},{"x":-43.85655144766808,"y":223.85971553801613,"z":23.990300492991558},{"x":-44.34083872406386,"y":223.76096311393238,"z":24.34451612549625},{"x":-44.82512600045963,"y":223.66221068984862,"z":24.69873175800094},{"x":-45.30941327685541,"y":223.56345826576487,"z":25.05294739050563},{"x":-45.793700553251185,"y":223.4647058416811,"z":25.40716302301032},{"x":-46.27798782964696,"y":223.36595341759735,"z":25.761378655515013},{"x":-46.762275106042736,"y":223.2672009935136,"z":26.115594288019704},{"x":-47.24656238243851,"y":223.16844856942984,"z":26.469809920524394},{"x":-47.73084965883429,"y":223.0696961453461,"z":26.824025553029085},{"x":-48.21513693523006,"y":222.97094372126233,"z":27.178241185533775},{"x":-48.69942421162584,"y":222.87219129717857,"z":27.532456818038465},{"x":-49.183711488021615,"y":222.77343887309482,"z":27.886672450543156},{"x":-49.66799876441739,"y":222.67468644901106,"z":28.240888083047846},{"x":-50.152286040813166,"y":222.5759340249273,"z":28.595103715552536},{"x":-50.63657331720894,"y":222.47718160084355,"z":28.949319348057227}];
                    // nx.crashSeqIdx[NUM].pyramidPath.aPath = [{"x":29.75486761531188,"y":224.32266860020542,"z":-29.850291642082745},{"x":29.270582260697623,"y":224.30289489747554,"z":-29.496077927483135},{"x":28.786296906083365,"y":224.28263862057136,"z":-29.141864212883526},{"x":28.302011551469107,"y":224.26081129647264,"z":-28.787650498283917},{"x":27.81772619685485,"y":224.2936900771914,"z":-28.433436783684307},{"x":27.33344084224059,"y":224.34083146085953,"z":-28.079223069084698},{"x":26.849155487626334,"y":224.38815621839524,"z":-27.72500935448509},{"x":26.364870133012076,"y":224.436588811908,"z":-27.37079563988548},{"x":25.880584778397818,"y":224.4856138636259,"z":-27.01658192528587},{"x":25.39629942378356,"y":224.53624946992633,"z":-26.66236821068626},{"x":24.912014069169302,"y":224.58733114535318,"z":-26.30815449608665},{"x":24.427728714555045,"y":224.64077267816143,"z":-25.95394078148704},{"x":23.943443359940787,"y":224.70883748828012,"z":-25.599727066887436},{"x":23.459158718896745,"y":224.70000753998744,"z":-25.245514115219162},{"x":22.97487334984966,"y":224.70000753998744,"z":-24.89130039006316},{"x":22.490587980802573,"y":224.70000753998744,"z":-24.53708666490716},{"x":22.006302611755487,"y":224.70000753998744,"z":-24.18287293975116},{"x":21.5220172427084,"y":224.69000753998745,"z":-23.82865921459516},{"x":21.037731873661315,"y":224.68000753998746,"z":-23.47444548943916},{"x":20.55344650461423,"y":224.66000753998748,"z":-23.120231764283158},{"x":20.069161135567143,"y":224.6200075399875,"z":-22.766018039127157},{"x":19.584875766520057,"y":224.60000753998753,"z":-22.411804313971157},{"x":19.10058981379821,"y":224.55369140624998,"z":-22.057589920891342},{"x":18.61630445918395,"y":224.53369140625,"z":-21.703376206291733},{"x":18.132019104569693,"y":224.53369140625,"z":-21.349162491692123},{"x":17.647733749955435,"y":224.53369140625,"z":-20.994948777092514},{"x":17.163448395341177,"y":224.53369140625,"z":-20.640735062492904},{"x":16.67916304072692,"y":224.53369140625,"z":-20.286521347893295},{"x":16.19487768611266,"y":224.53369140625,"z":-19.932307633293686},{"x":15.710592331498406,"y":224.53369140625,"z":-19.578093918694076},{"x":15.226306976884148,"y":224.53369140625,"z":-19.223880204094467},{"x":14.74202162226989,"y":224.53369140625,"z":-18.869666489494858},{"x":14.257736267655632,"y":224.53369140625,"z":-18.515452774895248},{"x":13.773450913041374,"y":224.53369140625,"z":-18.16123906029564},{"x":13.289165558427117,"y":224.53369140625,"z":-17.80702534569603},{"x":12.804880203812859,"y":224.53369140625,"z":-17.45281163109642},{"x":12.320594849198601,"y":224.53369140625,"z":-17.09859791649681},{"x":11.836309494584343,"y":224.53369140625,"z":-16.7443842018972},{"x":11.352024139970085,"y":224.53369140625,"z":-16.390170487297592},{"x":10.867738785355828,"y":224.53369140625,"z":-16.035956772697983},{"x":10.38345343074157,"y":224.53369140625,"z":-15.681743058098371},{"x":9.899168076127312,"y":224.53369140625,"z":-15.327528389824446},{"x":9.414882721513054,"y":224.53369140625,"z":-14.97331372155052},{"x":8.930597366898795,"y":224.53369140625,"z":-14.619099053276594},{"x":8.446312012284537,"y":224.53369140625,"z":-14.264884385002668},{"x":7.96202665767028,"y":224.53369140625,"z":-13.910669716728743},{"x":7.477741303056022,"y":224.53369140625,"z":-13.556455048454817},{"x":6.993455948441764,"y":224.53369140625,"z":-13.202240380180891},{"x":6.509170593827506,"y":224.53369140625,"z":-12.848025711906965},{"x":6.024885239213249,"y":224.53369140625,"z":-12.493811043633038},{"x":5.540599884598991,"y":224.53369140625,"z":-12.139596375359112},{"x":5.056314529984733,"y":224.53369140625,"z":-11.785381707085186},{"x":4.572029175370475,"y":224.53369140625,"z":-11.43116703881126},{"x":4.087743820756217,"y":224.53369140625,"z":-11.076952370537335},{"x":3.6034584661419595,"y":224.53369140625,"z":-10.722737702263409},{"x":3.1191731115277017,"y":224.53369140625,"z":-10.368523033989483},{"x":2.634887756913444,"y":224.53369140625,"z":-10.014308365715557},{"x":2.150602402299186,"y":224.53369140625,"z":-9.660093697441631},{"x":1.6663170476849283,"y":224.53369140625,"z":-9.305879029167706},{"x":1.18203181227996,"y":224.53369140625,"z":-8.95166436089378},{"x":0.6977465768749918,"y":224.53369140625,"z":-8.597449692619854},{"x":0.21346128186537872,"y":224.53369140625,"z":-8.243235024345928},{"x":-0.2708240131442343,"y":224.53369140625,"z":-7.8890203560720025},{"x":-0.7551093081538474,"y":224.53369140625,"z":-7.534806164635235},{"x":-1.2393946031634604,"y":224.53369140625,"z":-7.180591973198467},{"x":-1.7236798385684287,"y":224.53369140625,"z":-6.8263777817617},{"x":-2.207965073973397,"y":224.53369140625,"z":-6.472163590324932},{"x":-2.6922504285876547,"y":224.53369140625,"z":-6.1179493988881655},{"x":-3.1765357832019125,"y":224.53369140625,"z":-5.763735207451398},{"x":-3.6608211378161704,"y":224.53369140625,"z":-5.40952101601463},{"x":-4.145106492430428,"y":224.53369140625,"z":-5.055306824577863},{"x":-4.629391608626107,"y":224.53369140625,"z":-4.701092633141095},{"x":-5.113676963240365,"y":224.53369140625,"z":-4.346878441704328},{"x":-5.5979623178546225,"y":224.53369140625,"z":-3.99266425026756},{"x":-6.08224767246888,"y":224.53369140625,"z":-3.6384500588307924},{"x":-6.566533027083138,"y":224.53369140625,"z":-3.284235867394025},{"x":-7.050818381697395,"y":224.53369140625,"z":-2.930021675957257},{"x":-7.535103736311653,"y":224.53369140625,"z":-2.5758074845204892},{"x":-8.01938909092591,"y":224.53369140625,"z":-2.2215932930837217},{"x":-8.503674445540168,"y":224.53369140625,"z":-1.867379101646954},{"x":-8.987959800154426,"y":224.53369140625,"z":-1.513164791000897},{"x":-9.472245154768684,"y":224.53369140625,"z":-1.1589504803548398},{"x":-9.956530509382942,"y":224.53369140625,"z":-0.8047361697087827},{"x":-10.4408158639972,"y":224.53369140625,"z":-0.45052191866737035},{"x":-10.925101218611458,"y":224.53369140625,"z":-0.0963076378236356},{"x":-11.409386573225715,"y":224.53369140625,"z":0.25790664302009914},{"x":-11.893671927839973,"y":224.53369140625,"z":0.6121209238638339},{"x":-12.377957282454231,"y":224.53369140625,"z":0.9663352047075687},{"x":-12.862242637068489,"y":224.53369140625,"z":1.3205494557489812},{"x":-13.346527991682747,"y":224.53369140625,"z":1.6747637663950383},{"x":-13.830813346297004,"y":224.53369140625,"z":2.0289780770410952},{"x":-14.315098700911262,"y":224.53369140625,"z":2.3831923876871524},{"x":-14.79938405552552,"y":224.53369140625,"z":2.7374065791239204},{"x":-15.28366941013978,"y":224.53369140625,"z":3.091620770560688},{"x":-15.767954764754037,"y":224.53369140625,"z":3.445834961997455},{"x":-16.252240119368295,"y":224.53369140625,"z":3.8000491534342227},{"x":-16.736524520308237,"y":224.53369140625,"z":4.15426334487099},{"x":-17.220809874922494,"y":224.53369140625,"z":4.5084777747263365},{"x":-17.705095229536752,"y":224.53369140625,"z":4.862691966163105},{"x":-18.18938058415101,"y":224.53369140625,"z":5.2169061575998725},{"x":-18.673665938765268,"y":224.53369140625,"z":5.57112034903664},{"x":-19.157951293379526,"y":224.53369140625,"z":5.925334540473408},{"x":-19.642236647993784,"y":224.53369140625,"z":6.279548731910175},{"x":-20.12652200260804,"y":224.53369140625,"z":6.633762923346943},{"x":-20.6108073572223,"y":224.53369140625,"z":6.98797711478371},{"x":-21.095092711836557,"y":224.53369140625,"z":7.342191306220478},{"x":-21.579378066450815,"y":224.53369140625,"z":7.696405497657246},{"x":-22.063663421065073,"y":224.53369140625,"z":8.050619689094013},{"x":-22.54794877567933,"y":224.53369140625,"z":8.404834357367939},{"x":-23.03223413029359,"y":224.53369140625,"z":8.759049025641865},{"x":-23.516519484907846,"y":224.53369140625,"z":9.11326369391579},{"x":-24.000804839522104,"y":224.53369140625,"z":9.467478362189716},{"x":-24.48509019413636,"y":224.53369140625,"z":9.821693030463642},{"x":-24.96937554875062,"y":224.53369140625,"z":10.175907698737568},{"x":-25.453660903364877,"y":224.53369140625,"z":10.530122367011494},{"x":-25.937946257979135,"y":224.53369140625,"z":10.88433703528542},{"x":-26.422231612593393,"y":224.53369140625,"z":11.238551703559345},{"x":-26.90651696720765,"y":224.53369140625,"z":11.592766371833271},{"x":-27.39080232182191,"y":224.53369140625,"z":11.946981040107197},{"x":-27.87508849274569,"y":224.50000753998754,"z":12.301196064428915},{"x":-28.359373861792776,"y":224.40000753998754,"z":12.65541074325926},{"x":-28.84365923083986,"y":224.30000753998755,"z":13.009625422089606},{"x":-29.327944599886948,"y":224.20000753998755,"z":13.363840100919951},{"x":-29.812229968934034,"y":224.10000753998756,"z":13.718054779750297},{"x":-30.29651533798112,"y":224.10000753998756,"z":14.072269458580642},{"x":-30.780800707028206,"y":224.20000753998755,"z":14.426484137410988},{"x":-31.265086076075292,"y":224.30000753998755,"z":14.780698816241333},{"x":-31.749371445122378,"y":224.30000753998755,"z":15.134913495071679},{"x":-32.233656814169464,"y":224.20000753998755,"z":15.489128173902024},{"x":-32.71794409056524,"y":224.10000753998756,"z":15.84334285273237},{"x":-33.202231366961016,"y":224.00000753998756,"z":16.197557531562715},{"x":-33.68651864335679,"y":224.00000753998756,"z":16.55177221039306},{"x":-34.17080591975257,"y":224.00000753998756,"z":16.90598784289775},{"x":-34.65509319614834,"y":224.00000753998756,"z":17.26020347540244},{"x":-35.13938047254412,"y":224.00000753998756,"z":17.614419107907132},{"x":-35.623667748939894,"y":224.00000753998756,"z":17.968634740411822},{"x":-36.10795502533567,"y":224.00000753998756,"z":18.322850372916513},{"x":-36.592242301731446,"y":224.00000753998756,"z":18.677066005421203},{"x":-37.07652957812722,"y":224.00000753998756,"z":19.031281637925893},{"x":-37.560816854523,"y":224.00000753998756,"z":19.385497270430584},{"x":-38.04510413091877,"y":224.00000753998756,"z":19.739712902935274},{"x":-38.52939140731455,"y":224.00000753998756,"z":20.093928535439964},{"x":-39.013678683710324,"y":224.00000753998756,"z":20.448144167944655},{"x":-39.4979659601061,"y":224.00000753998756,"z":20.802359800449345},{"x":-39.982253236501876,"y":224.00000753998756,"z":21.156575432954035},{"x":-40.46654051289765,"y":224.00000753998756,"z":21.510791065458726},{"x":-40.95082778929343,"y":224.00000753998756,"z":21.865006697963416},{"x":-41.4351150656892,"y":224.00000753998756,"z":22.219222330468106},{"x":-41.91940234208498,"y":224.00000753998756,"z":22.573437962972797},{"x":-42.403689618480755,"y":224.00000753998756,"z":22.927653595477487},{"x":-42.88797689487653,"y":224.00000753998756,"z":23.281869227982178},{"x":-43.372264171272306,"y":223.9584679620999,"z":23.636084860486868},{"x":-43.85655144766808,"y":223.85971553801613,"z":23.990300492991558},{"x":-44.34083872406386,"y":223.76096311393238,"z":24.34451612549625},{"x":-44.82512600045963,"y":223.66221068984862,"z":24.69873175800094},{"x":-45.30941327685541,"y":223.56345826576487,"z":25.05294739050563},{"x":-45.793700553251185,"y":223.4647058416811,"z":25.40716302301032},{"x":-46.27798782964696,"y":223.36595341759735,"z":25.761378655515013},{"x":-46.762275106042736,"y":223.2672009935136,"z":26.115594288019704},{"x":-47.24656238243851,"y":223.16844856942984,"z":26.469809920524394},{"x":-47.73084965883429,"y":223.0696961453461,"z":26.824025553029085},{"x":-48.21513693523006,"y":222.97094372126233,"z":27.178241185533775},{"x":-48.69942421162584,"y":222.87219129717857,"z":27.532456818038465},{"x":-49.183711488021615,"y":222.77343887309482,"z":27.886672450543156},{"x":-49.66799876441739,"y":222.67468644901106,"z":28.240888083047846},{"x":-50.152286040813166,"y":222.5759340249273,"z":28.595103715552536},{"x":-50.63657331720894,"y":222.47718160084355,"z":28.949319348057227}];
                    nx.crashSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    nx.crashSeqIdx[NUM].stepIdx = 0;//, nx.crashSeqIdx[1].curPOS, nx.crashSeqIdx[1].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    nx.crashSeqIdx[NUM].anmSpeed = 100; //88




// debugger;

//THE BIG CHALLENGE IS understanding DATATYPES converting between VERTPATH or RAWPATH for example. So name as PRIMITIVES to clarify-.
//OTHER ANM PRIMITIVES: FOC POS TGT ROT ANMPATH POLYRUBBER STACKPATH rename to POLYPATH
//NEW ANM PRIMITIVE ANMPATH-.
// nx.crashSeqIdx[NUM].pyramidANMPath = [{"pos":{"x":-49.932,"y":222,"z":27.985},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-50.417,"y":222,"z":28.339},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-50.901,"y":221.244,"z":28.693},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-51.466,"y":220.405,"z":29.106},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-52.032,"y":219.427,"z":29.519},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-52.597,"y":218.449,"z":29.932},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-53.162,"y":217.471,"z":30.344},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-53.728,"y":216.493,"z":30.757},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-54.293,"y":215.515,"z":31.17},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-54.858,"y":214.537,"z":31.583},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-55.423,"y":213.558,"z":31.996},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-55.989,"y":212.58,"z":32.409},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-56.554,"y":211.602,"z":32.822},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-57.119,"y":210.624,"z":33.234},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-57.685,"y":209.646,"z":33.647},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-58.25,"y":208.668,"z":34.06},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-58.815,"y":207.69,"z":34.473},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-59.38,"y":206.711,"z":34.886},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-59.946,"y":205.733,"z":35.299},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-60.511,"y":204.755,"z":35.711},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-61.076,"y":203.777,"z":36.124},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-61.642,"y":202.799,"z":36.537},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-62.207,"y":201.821,"z":36.95},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-62.772,"y":200.843,"z":37.363},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-63.338,"y":199.864,"z":37.776},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-63.903,"y":198.886,"z":38.189},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-64.468,"y":197.908,"z":38.601},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-65.033,"y":196.93,"z":39.014},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-65.599,"y":195.952,"z":39.427},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-66.164,"y":194.974,"z":39.84},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-66.729,"y":193.995,"z":40.253},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-67.295,"y":193.017,"z":40.666},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-67.86,"y":192.039,"z":41.079},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-68.425,"y":191.061,"z":41.491},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-68.99,"y":190.083,"z":41.904},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-69.556,"y":189.105,"z":42.317},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-70.121,"y":188.127,"z":42.73},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-70.686,"y":187.148,"z":43.143},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-71.252,"y":186.17,"z":43.556},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-71.817,"y":185.192,"z":43.969},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-72.382,"y":184.214,"z":44.381},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-72.948,"y":183.236,"z":44.794},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-73.513,"y":182.258,"z":45.207},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-74.078,"y":181.28,"z":45.62},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-74.643,"y":180.301,"z":46.033},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-75.209,"y":179.323,"z":46.446},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-75.774,"y":178.345,"z":46.859},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-76.339,"y":177.367,"z":47.271},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-76.905,"y":176.389,"z":47.684},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-77.47,"y":175.411,"z":48.097},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-78.035,"y":174.433,"z":48.51},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-78.681,"y":173.454,"z":48.982},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-79.327,"y":172.337,"z":49.454},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-79.973,"y":171.219,"z":49.925},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-80.619,"y":170.101,"z":50.397},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-81.265,"y":168.983,"z":50.869},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-81.911,"y":167.865,"z":51.341},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-82.557,"y":166.747,"z":51.813},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-83.204,"y":165.629,"z":52.285},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-83.85,"y":164.511,"z":52.756},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-84.415,"y":163.394,"z":53.169},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-84.98,"y":162.415,"z":53.582},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-85.545,"y":161.437,"z":53.995},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-86.111,"y":160.459,"z":54.408},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-86.676,"y":159.481,"z":54.821},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-87.241,"y":158.503,"z":55.234},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-87.807,"y":157.525,"z":55.646},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-88.372,"y":156.546,"z":56.059},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-88.937,"y":155.568,"z":56.472},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-89.503,"y":154.59,"z":56.885},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-90.068,"y":153.612,"z":57.298},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-90.633,"y":152.634,"z":57.711},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-91.198,"y":151.656,"z":58.124},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-91.764,"y":150.678,"z":58.536},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-92.329,"y":149.699,"z":58.949},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-92.894,"y":148.721,"z":59.362},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-93.46,"y":147.743,"z":59.775},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-94.025,"y":146.765,"z":60.188},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-94.59,"y":145.787,"z":60.601},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-95.155,"y":144.809,"z":61.014},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-95.721,"y":143.831,"z":61.426},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-96.286,"y":142.852,"z":61.839},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-96.851,"y":141.874,"z":62.252},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-97.417,"y":140.896,"z":62.665},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-97.982,"y":139.918,"z":63.078},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-98.547,"y":138.94,"z":63.491},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-99.112,"y":137.962,"z":63.903},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-99.678,"y":136.984,"z":64.316},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-100.243,"y":136.005,"z":64.729},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-100.808,"y":135.027,"z":65.141},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-101.374,"y":134.049,"z":65.555},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-101.939,"y":133.071,"z":65.968},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-102.504,"y":132.093,"z":66.381},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-103.07,"y":131.115,"z":66.793},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-103.635,"y":130.137,"z":67.206},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-104.2,"y":129.157,"z":67.619},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-104.765,"y":128.18,"z":68.032},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-105.331,"y":127.202,"z":68.445},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-105.896,"y":126.224,"z":68.858},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-106.461,"y":125.246,"z":69.271},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-107.027,"y":124.268,"z":69.683},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-107.592,"y":123.289,"z":70.096},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-108.157,"y":122.311,"z":70.509},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-108.722,"y":121.333,"z":70.922},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-109.288,"y":120.355,"z":71.335},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-109.853,"y":119.377,"z":71.748},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-110.418,"y":118.399,"z":72.161},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-110.984,"y":117.421,"z":72.573},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-111.549,"y":116.442,"z":72.986},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-112.114,"y":115.464,"z":73.399},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-112.679,"y":114.486,"z":73.812},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-113.245,"y":113.508,"z":74.225},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-113.81,"y":112.53,"z":74.638},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-114.375,"y":111.552,"z":75.051},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-114.941,"y":110.574,"z":75.463},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-115.506,"y":109.595,"z":75.876},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-116.071,"y":108.617,"z":76.289},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-116.637,"y":107.639,"z":76.702},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-117.202,"y":106.661,"z":77.115},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-117.767,"y":105.683,"z":77.528},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-118.332,"y":104.705,"z":77.941},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-118.898,"y":103.726,"z":78.353},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-119.463,"y":102.748,"z":78.766},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-120.028,"y":101.77,"z":79.179},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-120.594,"y":100.792,"z":79.592},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-121.159,"y":99.814,"z":80.005},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-121.724,"y":98.836,"z":80.418},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-122.289,"y":97.858,"z":80.831},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-122.855,"y":96.879,"z":81.243},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-123.42,"y":95.901,"z":81.656},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-123.985,"y":94.923,"z":82.069},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-124.551,"y":93.945,"z":82.482},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-125.116,"y":92.967,"z":82.895},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-125.681,"y":91.989,"z":83.308},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-126.247,"y":91.011,"z":83.721},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-126.812,"y":90.032,"z":84.133},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-127.377,"y":89.054,"z":84.546},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-127.942,"y":88.076,"z":84.959},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-128.509,"y":87.098,"z":85.372},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-129.074,"y":86.12,"z":85.785},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-129.638,"y":85.142,"z":86.198},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-130.205,"y":84.163,"z":86.611},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-130.769,"y":83.185,"z":87.023},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-131.334,"y":82.207,"z":87.436},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-131.899,"y":81.229,"z":87.849},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-132.465,"y":80.251,"z":88.262},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-133.03,"y":79.273,"z":88.675},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-133.595,"y":78.295,"z":89.088},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-134.161,"y":77.316,"z":89.501},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-134.726,"y":76.338,"z":89.913},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-135.291,"y":75.36,"z":90.326},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-135.856,"y":74.382,"z":90.739},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-136.422,"y":73.404,"z":91.152},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-136.987,"y":72.426,"z":91.565},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-137.552,"y":71.448,"z":91.978},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-138.118,"y":70.469,"z":92.391},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-138.683,"y":69.491,"z":92.803},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-139.248,"y":68.513,"z":93.216},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-139.814,"y":67.535,"z":93.629},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-140.379,"y":66.557,"z":94.042},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-140.944,"y":65.579,"z":94.455},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-141.509,"y":64.601,"z":94.868},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-142.075,"y":63.622,"z":95.281},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-142.64,"y":62.644,"z":95.693},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-143.205,"y":61.666,"z":96.106},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-143.771,"y":60.688,"z":96.519},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-144.336,"y":59.71,"z":96.932},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-144.901,"y":58.732,"z":97.345},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-145.466,"y":57.753,"z":97.758},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-146.032,"y":56.775,"z":98.171},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-146.597,"y":55.797,"z":98.583},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-147.162,"y":54.819,"z":98.996},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-147.728,"y":53.841,"z":99.409},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-148.293,"y":52.863,"z":99.822},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-148.858,"y":51.885,"z":100.235},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-149.424,"y":50.906,"z":100.648},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-149.989,"y":49.928,"z":101.061},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-150.554,"y":48.95,"z":101.473},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-151.119,"y":47.972,"z":101.886},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-151.685,"y":46.994,"z":102.299},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-152.25,"y":46.016,"z":102.712},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-152.815,"y":45.038,"z":103.125},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-153.381,"y":44.059,"z":103.538},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-153.946,"y":43.081,"z":103.951},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-154.511,"y":42.103,"z":104.363},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-155.076,"y":41.125,"z":104.776},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-155.642,"y":40.147,"z":105.189},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-156.207,"y":39.169,"z":105.602},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-156.772,"y":38.19,"z":106.015},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-157.338,"y":37.212,"z":106.428},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-157.903,"y":36.234,"z":106.841},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-158.468,"y":35.256,"z":107.253},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-159.033,"y":34.278,"z":107.666},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-159.599,"y":33.3,"z":108.079},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-160.164,"y":32.322,"z":108.492},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-160.729,"y":31.343,"z":108.905},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-161.295,"y":30.365,"z":109.318},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-161.86,"y":29.387,"z":109.731},"rot":{"x":0.2,"y":-0.8,"z":-0.395,"w":-0.407}},{"pos":{"x":-162.425,"y":28.409,"z":110.143},"rot":{"x":0.2,"y":-0.8,"z":-0.395,"w":-0.407}},{"pos":{"x":-162.991,"y":27.431,"z":110.556},"rot":{"x":0.199,"y":-0.801,"z":-0.394,"w":-0.407}},{"pos":{"x":-163.556,"y":26.453,"z":110.969},"rot":{"x":0.199,"y":-0.801,"z":-0.393,"w":-0.407}},{"pos":{"x":-164.121,"y":25.475,"z":111.382},"rot":{"x":0.199,"y":-0.801,"z":-0.392,"w":-0.407}},{"pos":{"x":-164.686,"y":24.496,"z":111.795},"rot":{"x":0.198,"y":-0.802,"z":-0.392,"w":-0.407}},{"pos":{"x":-165.252,"y":23.518,"z":112.208},"rot":{"x":0.198,"y":-0.802,"z":-0.391,"w":-0.408}},{"pos":{"x":-165.817,"y":22.54,"z":112.621},"rot":{"x":0.197,"y":-0.803,"z":-0.39,"w":-0.408}},{"pos":{"x":-166.382,"y":21.562,"z":113.033},"rot":{"x":0.197,"y":-0.803,"z":-0.389,"w":-0.408}},{"pos":{"x":-166.948,"y":20.584,"z":113.446},"rot":{"x":0.196,"y":-0.804,"z":-0.387,"w":-0.409}},{"pos":{"x":-167.513,"y":19.606,"z":113.859},"rot":{"x":0.195,"y":-0.804,"z":-0.386,"w":-0.409}},{"pos":{"x":-168.078,"y":18.627,"z":114.272},"rot":{"x":0.195,"y":-0.805,"z":-0.385,"w":-0.409}},{"pos":{"x":-168.643,"y":17.649,"z":114.685},"rot":{"x":0.194,"y":-0.806,"z":-0.383,"w":-0.41}},{"pos":{"x":-169.209,"y":16.671,"z":115.098},"rot":{"x":0.193,"y":-0.807,"z":-0.381,"w":-0.41}},{"pos":{"x":-169.774,"y":15.693,"z":115.511},"rot":{"x":0.192,"y":-0.808,"z":-0.379,"w":-0.411}},{"pos":{"x":-170.339,"y":14.715,"z":115.923},"rot":{"x":0.191,"y":-0.809,"z":-0.377,"w":-0.411}},{"pos":{"x":-170.905,"y":13.737,"z":116.336},"rot":{"x":0.189,"y":-0.81,"z":-0.374,"w":-0.412}},{"pos":{"x":-171.47,"y":12.759,"z":116.749},"rot":{"x":0.187,"y":-0.812,"z":-0.371,"w":-0.413}},{"pos":{"x":-172.035,"y":11.78,"z":117.162},"rot":{"x":0.186,"y":-0.813,"z":-0.367,"w":-0.413}},{"pos":{"x":-172.6,"y":10.802,"z":117.575},"rot":{"x":0.183,"y":-0.815,"z":-0.362,"w":-0.414}},{"pos":{"x":-173.166,"y":9.824,"z":117.988},"rot":{"x":0.18,"y":-0.818,"z":-0.356,"w":-0.416}},{"pos":{"x":-173.731,"y":8.846,"z":118.401},"rot":{"x":0.177,"y":-0.821,"z":-0.349,"w":-0.417}},{"pos":{"x":-174.296,"y":7.868,"z":118.813},"rot":{"x":0.172,"y":-0.825,"z":-0.34,"w":-0.419}},{"pos":{"x":-174.862,"y":6.89,"z":119.226},"rot":{"x":0.166,"y":-0.83,"z":-0.328,"w":-0.422}},{"pos":{"x":-175.427,"y":5.912,"z":119.639},"rot":{"x":0.157,"y":-0.836,"z":-0.311,"w":-0.425}},{"pos":{"x":-175.992,"y":4.933,"z":120.052},"rot":{"x":0.144,"y":-0.845,"z":-0.285,"w":-0.43}},{"pos":{"x":-176.558,"y":3.955,"z":120.465},"rot":{"x":0.123,"y":-0.858,"z":-0.244,"w":-0.436}},{"pos":{"x":-177.123,"y":2.977,"z":120.878},"rot":{"x":0.084,"y":-0.877,"z":-0.166,"w":-0.445}},{"pos":{"x":-177.688,"y":2,"z":121.291},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-178.253,"y":2,"z":121.703},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-178.819,"y":2,"z":122.116},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-179.384,"y":2,"z":122.529},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-179.949,"y":2,"z":122.942},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-180.515,"y":2,"z":123.355},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-181.08,"y":2,"z":123.768},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-181.564,"y":2,"z":124.122},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-182.049,"y":2,"z":124.475},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-182.533,"y":2,"z":124.829},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}}];
// nx.reducedANMPath = nx.editz.decomposeANMPath({ANMPath:nx.crashSeqIdx[NUM].pyramidANMPath}) //reduces paths within ANMPATH
// nx.crashSeqIdx[NUM].pyramidANMPath = [{"pos":{"x":-49.932,"y":222,"z":27.985},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-50.901,"y":221.244,"z":28.693},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-52.032,"y":219.427,"z":29.519},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-53.162,"y":217.471,"z":30.344},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-54.293,"y":215.515,"z":31.17},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-55.423,"y":213.558,"z":31.996},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-56.554,"y":211.602,"z":32.822},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-57.685,"y":209.646,"z":33.647},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-58.815,"y":207.69,"z":34.473},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-59.946,"y":205.733,"z":35.299},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-61.076,"y":203.777,"z":36.124},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-62.207,"y":201.821,"z":36.95},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-63.338,"y":199.864,"z":37.776},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-64.468,"y":197.908,"z":38.601},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-65.599,"y":195.952,"z":39.427},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-66.729,"y":193.995,"z":40.253},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-67.86,"y":192.039,"z":41.079},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-68.99,"y":190.083,"z":41.904},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-70.121,"y":188.127,"z":42.73},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-71.252,"y":186.17,"z":43.556},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-72.382,"y":184.214,"z":44.381},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-73.513,"y":182.258,"z":45.207},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-74.643,"y":180.301,"z":46.033},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-75.774,"y":178.345,"z":46.859},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-76.905,"y":176.389,"z":47.684},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-78.035,"y":174.433,"z":48.51},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-79.327,"y":172.337,"z":49.454},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-80.619,"y":170.101,"z":50.397},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-81.911,"y":167.865,"z":51.341},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-83.204,"y":165.629,"z":52.285},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-84.415,"y":163.394,"z":53.169},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-85.545,"y":161.437,"z":53.995},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-86.676,"y":159.481,"z":54.821},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-87.807,"y":157.525,"z":55.646},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-88.937,"y":155.568,"z":56.472},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-90.068,"y":153.612,"z":57.298},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-91.198,"y":151.656,"z":58.124},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-92.329,"y":149.699,"z":58.949},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-93.46,"y":147.743,"z":59.775},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-94.59,"y":145.787,"z":60.601},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-95.721,"y":143.831,"z":61.426},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-96.851,"y":141.874,"z":62.252},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-97.982,"y":139.918,"z":63.078},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-99.112,"y":137.962,"z":63.903},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-100.243,"y":136.005,"z":64.729},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-101.374,"y":134.049,"z":65.555},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-102.504,"y":132.093,"z":66.381},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-103.635,"y":130.137,"z":67.206},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-104.765,"y":128.18,"z":68.032},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-105.896,"y":126.224,"z":68.858},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-107.027,"y":124.268,"z":69.683},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-108.157,"y":122.311,"z":70.509},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-109.288,"y":120.355,"z":71.335},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-110.418,"y":118.399,"z":72.161},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-111.549,"y":116.442,"z":72.986},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-112.679,"y":114.486,"z":73.812},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-113.81,"y":112.53,"z":74.638},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-114.941,"y":110.574,"z":75.463},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-116.071,"y":108.617,"z":76.289},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-117.202,"y":106.661,"z":77.115},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-118.332,"y":104.705,"z":77.941},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-119.463,"y":102.748,"z":78.766},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-120.594,"y":100.792,"z":79.592},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-121.724,"y":98.836,"z":80.418},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-122.855,"y":96.879,"z":81.243},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-123.985,"y":94.923,"z":82.069},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-125.116,"y":92.967,"z":82.895},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-126.247,"y":91.011,"z":83.721},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-127.377,"y":89.054,"z":84.546},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-128.509,"y":87.098,"z":85.372},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-129.638,"y":85.142,"z":86.198},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-130.769,"y":83.185,"z":87.023},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-131.899,"y":81.229,"z":87.849},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-133.03,"y":79.273,"z":88.675},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-134.161,"y":77.316,"z":89.501},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-135.291,"y":75.36,"z":90.326},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-136.422,"y":73.404,"z":91.152},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-137.552,"y":71.448,"z":91.978},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-138.683,"y":69.491,"z":92.803},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-139.814,"y":67.535,"z":93.629},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-140.944,"y":65.579,"z":94.455},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-142.075,"y":63.622,"z":95.281},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-143.205,"y":61.666,"z":96.106},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-144.336,"y":59.71,"z":96.932},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-145.466,"y":57.753,"z":97.758},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-146.597,"y":55.797,"z":98.583},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-147.728,"y":53.841,"z":99.409},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-148.858,"y":51.885,"z":100.235},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-149.989,"y":49.928,"z":101.061},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-151.119,"y":47.972,"z":101.886},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-152.25,"y":46.016,"z":102.712},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-153.381,"y":44.059,"z":103.538},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-154.511,"y":42.103,"z":104.363},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-155.642,"y":40.147,"z":105.189},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-156.772,"y":38.19,"z":106.015},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-157.903,"y":36.234,"z":106.841},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-159.033,"y":34.278,"z":107.666},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-160.164,"y":32.322,"z":108.492},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-161.295,"y":30.365,"z":109.318},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-162.425,"y":28.409,"z":110.143},"rot":{"x":0.2,"y":-0.8,"z":-0.395,"w":-0.407}},{"pos":{"x":-163.556,"y":26.453,"z":110.969},"rot":{"x":0.199,"y":-0.801,"z":-0.393,"w":-0.407}},{"pos":{"x":-164.686,"y":24.496,"z":111.795},"rot":{"x":0.198,"y":-0.802,"z":-0.392,"w":-0.407}},{"pos":{"x":-165.817,"y":22.54,"z":112.621},"rot":{"x":0.197,"y":-0.803,"z":-0.39,"w":-0.408}},{"pos":{"x":-166.948,"y":20.584,"z":113.446},"rot":{"x":0.196,"y":-0.804,"z":-0.387,"w":-0.409}},{"pos":{"x":-168.078,"y":18.627,"z":114.272},"rot":{"x":0.195,"y":-0.805,"z":-0.385,"w":-0.409}},{"pos":{"x":-169.209,"y":16.671,"z":115.098},"rot":{"x":0.193,"y":-0.807,"z":-0.381,"w":-0.41}},{"pos":{"x":-170.339,"y":14.715,"z":115.923},"rot":{"x":0.191,"y":-0.809,"z":-0.377,"w":-0.411}},{"pos":{"x":-171.47,"y":12.759,"z":116.749},"rot":{"x":0.187,"y":-0.812,"z":-0.371,"w":-0.413}},{"pos":{"x":-172.6,"y":10.802,"z":117.575},"rot":{"x":0.183,"y":-0.815,"z":-0.362,"w":-0.414}},{"pos":{"x":-173.731,"y":8.846,"z":118.401},"rot":{"x":0.177,"y":-0.821,"z":-0.349,"w":-0.417}},{"pos":{"x":-174.862,"y":6.89,"z":119.226},"rot":{"x":0.166,"y":-0.83,"z":-0.328,"w":-0.422}},{"pos":{"x":-175.992,"y":4.933,"z":120.052},"rot":{"x":0.144,"y":-0.845,"z":-0.285,"w":-0.43}},{"pos":{"x":-177.123,"y":2.977,"z":120.878},"rot":{"x":0.084,"y":-0.877,"z":-0.166,"w":-0.445}},{"pos":{"x":-178.253,"y":2,"z":121.703},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-179.384,"y":2,"z":122.529},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-180.515,"y":2,"z":123.355},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-181.564,"y":2,"z":124.122},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-182.533,"y":2,"z":124.829},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}}];
// nx.reducedANMPath = nx.editz.decomposeANMPath({ANMPath:nx.crashSeqIdx[NUM].pyramidANMPath}) //reduces paths within ANMPATH
// nx.reducedANMPath = nx.editz.decomposeANMPath({ANMPath:nx.crashSeqIdx[NUM].pyramidANMPath}) //reduces paths within ANMPATH
// nx.crashSeqIdx[NUM].pyramidANMPath = [{"pos":{"x":-49.932,"y":222,"z":27.985},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-52.032,"y":219.427,"z":29.519},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-54.293,"y":215.515,"z":31.17},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-56.554,"y":211.602,"z":32.822},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-58.815,"y":207.69,"z":34.473},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-61.076,"y":203.777,"z":36.124},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-63.338,"y":199.864,"z":37.776},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-65.599,"y":195.952,"z":39.427},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-67.86,"y":192.039,"z":41.079},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-70.121,"y":188.127,"z":42.73},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-72.382,"y":184.214,"z":44.381},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-74.643,"y":180.301,"z":46.033},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-76.905,"y":176.389,"z":47.684},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-79.327,"y":172.337,"z":49.454},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-81.911,"y":167.865,"z":51.341},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-84.415,"y":163.394,"z":53.169},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-86.676,"y":159.481,"z":54.821},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-88.937,"y":155.568,"z":56.472},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-91.198,"y":151.656,"z":58.124},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-93.46,"y":147.743,"z":59.775},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-95.721,"y":143.831,"z":61.426},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-97.982,"y":139.918,"z":63.078},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-100.243,"y":136.005,"z":64.729},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-102.504,"y":132.093,"z":66.381},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-104.765,"y":128.18,"z":68.032},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-107.027,"y":124.268,"z":69.683},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-109.288,"y":120.355,"z":71.335},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-111.549,"y":116.442,"z":72.986},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-113.81,"y":112.53,"z":74.638},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-116.071,"y":108.617,"z":76.289},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-118.332,"y":104.705,"z":77.941},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-120.594,"y":100.792,"z":79.592},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-122.855,"y":96.879,"z":81.243},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-125.116,"y":92.967,"z":82.895},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-127.377,"y":89.054,"z":84.546},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-129.638,"y":85.142,"z":86.198},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-131.899,"y":81.229,"z":87.849},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-134.161,"y":77.316,"z":89.501},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-136.422,"y":73.404,"z":91.152},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-138.683,"y":69.491,"z":92.803},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-140.944,"y":65.579,"z":94.455},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-143.205,"y":61.666,"z":96.106},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-145.466,"y":57.753,"z":97.758},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-147.728,"y":53.841,"z":99.409},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-149.989,"y":49.928,"z":101.061},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-152.25,"y":46.016,"z":102.712},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-154.511,"y":42.103,"z":104.363},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-156.772,"y":38.19,"z":106.015},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-159.033,"y":34.278,"z":107.666},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-161.295,"y":30.365,"z":109.318},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-163.556,"y":26.453,"z":110.969},"rot":{"x":0.199,"y":-0.801,"z":-0.393,"w":-0.407}},{"pos":{"x":-165.817,"y":22.54,"z":112.621},"rot":{"x":0.197,"y":-0.803,"z":-0.39,"w":-0.408}},{"pos":{"x":-168.078,"y":18.627,"z":114.272},"rot":{"x":0.195,"y":-0.805,"z":-0.385,"w":-0.409}},{"pos":{"x":-170.339,"y":14.715,"z":115.923},"rot":{"x":0.191,"y":-0.809,"z":-0.377,"w":-0.411}},{"pos":{"x":-172.6,"y":10.802,"z":117.575},"rot":{"x":0.183,"y":-0.815,"z":-0.362,"w":-0.414}},{"pos":{"x":-174.862,"y":6.89,"z":119.226},"rot":{"x":0.166,"y":-0.83,"z":-0.328,"w":-0.422}},{"pos":{"x":-177.123,"y":2.977,"z":120.878},"rot":{"x":0.084,"y":-0.877,"z":-0.166,"w":-0.445}},{"pos":{"x":-179.384,"y":2,"z":122.529},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}},{"pos":{"x":-181.564,"y":2,"z":124.122},"rot":{"x":0,"y":-0.892,"z":0,"w":-0.453}}];

// nx.reducedANMPath = nx.editz.decomposeANMPath({ANMPath:nx.crashSeqIdx[NUM].pyramidANMPath}) //reduces paths within ANMPATH
// nx.truncatedPath = nx.editz.truncatePathPrecision(nx.reducedANMPath)
// nx.crashSeqIdx[NUM].pyramidANMPath = nx.truncatedPath;


// nx.crashSeqIdx[NUM].pyramidANMPath = [{"pos":{"x":-54.416,"y":222,"z":30.365},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-55.549,"y":221.741,"z":31.188},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-56.683,"y":220.016,"z":32.01},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-57.816,"y":218.291,"z":32.832},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-58.949,"y":216.566,"z":33.654},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-60.082,"y":214.84,"z":34.476},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-61.215,"y":213.115,"z":35.298},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-62.349,"y":211.39,"z":36.12},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-63.482,"y":209.664,"z":36.942},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-64.615,"y":207.939,"z":37.764},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-65.748,"y":206.214,"z":38.586},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-66.881,"y":204.489,"z":39.409},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-68.015,"y":202.763,"z":40.231},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-69.148,"y":201.038,"z":41.053},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-70.281,"y":199.313,"z":41.875},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-71.414,"y":197.588,"z":42.697},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-72.547,"y":195.862,"z":43.519},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-73.681,"y":194.137,"z":44.341},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-74.814,"y":192.412,"z":45.163},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-75.947,"y":190.686,"z":45.985},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-77.08,"y":188.961,"z":46.807},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-78.213,"y":187.236,"z":47.63},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-79.347,"y":185.511,"z":48.452},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-80.48,"y":183.785,"z":49.274},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-81.613,"y":182.06,"z":50.096},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-82.746,"y":180.335,"z":50.918},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-83.88,"y":178.61,"z":51.74},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-85.013,"y":176.884,"z":52.562},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-86.146,"y":175.159,"z":53.384},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-87.279,"y":173.434,"z":54.206},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-88.412,"y":171.709,"z":55.028},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-89.546,"y":169.983,"z":55.851},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-90.679,"y":168.258,"z":56.673},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-91.812,"y":166.533,"z":57.495},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-92.945,"y":164.807,"z":58.317},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-94.078,"y":163.082,"z":59.139},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-95.212,"y":161.357,"z":59.961},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-96.345,"y":159.632,"z":60.783},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-97.478,"y":157.906,"z":61.605},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-98.611,"y":156.181,"z":62.427},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-99.744,"y":154.456,"z":63.249},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-100.878,"y":152.731,"z":64.072},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-102.011,"y":151.005,"z":64.894},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-103.144,"y":149.28,"z":65.716},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-104.277,"y":147.555,"z":66.538},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-105.411,"y":145.829,"z":67.36},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-106.544,"y":144.104,"z":68.182},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-107.677,"y":142.379,"z":69.004},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-108.81,"y":140.654,"z":69.826},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-109.943,"y":138.928,"z":70.648},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-111.077,"y":137.203,"z":71.47},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-112.21,"y":135.478,"z":72.292},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-113.343,"y":133.753,"z":73.115},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-114.476,"y":132.027,"z":73.937},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-115.609,"y":130.302,"z":74.759},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-116.743,"y":128.577,"z":75.581},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-117.876,"y":126.851,"z":76.403},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-119.009,"y":125.126,"z":77.225},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-120.142,"y":123.401,"z":78.047},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-121.275,"y":121.676,"z":78.869},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-122.409,"y":119.95,"z":79.691},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-123.542,"y":118.225,"z":80.513},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-124.675,"y":116.5,"z":81.336},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-125.808,"y":114.775,"z":82.158},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-126.941,"y":113.049,"z":82.98},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-128.075,"y":111.324,"z":83.802},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-129.208,"y":109.599,"z":84.624},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-130.341,"y":107.873,"z":85.446},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-131.474,"y":106.148,"z":86.268},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-132.608,"y":104.423,"z":87.09},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-133.741,"y":102.698,"z":87.912},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-134.874,"y":100.972,"z":88.734},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-136.007,"y":99.247,"z":89.557},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-137.14,"y":97.522,"z":90.379},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-138.274,"y":95.797,"z":91.201},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-139.407,"y":94.071,"z":92.023},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-140.54,"y":92.346,"z":92.845},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-141.673,"y":90.621,"z":93.667},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-142.806,"y":88.896,"z":94.489},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-143.94,"y":87.17,"z":95.311},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-145.073,"y":85.445,"z":96.133},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-146.206,"y":83.72,"z":96.955},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-147.339,"y":81.994,"z":97.778},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-148.472,"y":80.269,"z":98.6},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-149.606,"y":78.544,"z":99.422},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-150.739,"y":76.819,"z":100.244},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-151.872,"y":75.093,"z":101.066},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-153.005,"y":73.368,"z":101.888},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-154.139,"y":71.643,"z":102.71},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-155.272,"y":69.918,"z":103.532},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-156.405,"y":68.192,"z":104.354},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-157.538,"y":66.467,"z":105.176},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-158.671,"y":64.742,"z":105.998},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-159.805,"y":63.016,"z":106.821},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-160.938,"y":61.291,"z":107.643},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-162.071,"y":59.566,"z":108.465},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-163.204,"y":57.841,"z":109.287},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-164.337,"y":56.115,"z":110.109},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-165.471,"y":54.39,"z":110.931},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-166.604,"y":52.665,"z":111.753},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-167.737,"y":50.94,"z":112.575},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-168.87,"y":49.214,"z":113.397},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-170.003,"y":47.489,"z":114.219},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-171.137,"y":45.764,"z":115.042},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-172.27,"y":44.038,"z":115.864},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-173.403,"y":42.313,"z":116.686},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-174.536,"y":40.588,"z":117.508},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-175.669,"y":38.863,"z":118.33},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-176.803,"y":37.137,"z":119.152},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-177.936,"y":35.412,"z":119.974},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-179.069,"y":33.687,"z":120.796},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-180.202,"y":31.962,"z":121.618},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-181.336,"y":30.236,"z":122.44},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-182.469,"y":28.511,"z":123.263},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-183.602,"y":26.786,"z":124.085},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-184.735,"y":25.06,"z":124.907},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-185.868,"y":23.335,"z":125.729},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-187.002,"y":21.61,"z":126.551},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-188.135,"y":19.885,"z":127.373},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-189.268,"y":18.159,"z":128.195},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-190.401,"y":16.434,"z":129.017},"rot":{"x":0.194,"y":-0.806,"z":-0.382,"w":-0.411}},{"pos":{"x":-191.534,"y":14.709,"z":129.839},"rot":{"x":0.192,"y":-0.807,"z":-0.378,"w":-0.412}},{"pos":{"x":-192.668,"y":12.984,"z":130.661},"rot":{"x":0.189,"y":-0.81,"z":-0.373,"w":-0.413}},{"pos":{"x":-193.801,"y":11.258,"z":131.484},"rot":{"x":0.186,"y":-0.813,"z":-0.366,"w":-0.415}},{"pos":{"x":-194.934,"y":9.533,"z":132.306},"rot":{"x":0.181,"y":-0.817,"z":-0.357,"w":-0.417}},{"pos":{"x":-196.067,"y":7.808,"z":133.128},"rot":{"x":0.174,"y":-0.823,"z":-0.342,"w":-0.42}},{"pos":{"x":-197.2,"y":6.082,"z":133.95},"rot":{"x":0.161,"y":-0.833,"z":-0.318,"w":-0.425}},{"pos":{"x":-198.334,"y":4.357,"z":134.772},"rot":{"x":0.136,"y":-0.85,"z":-0.268,"w":-0.434}},{"pos":{"x":-199.467,"y":2.632,"z":135.594},"rot":{"x":0.064,"y":-0.882,"z":-0.127,"w":-0.45}}/*,{"pos":{"x":-200.6,"y":2,"z":136.416},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-201.733,"y":2,"z":137.238},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-202.867,"y":2,"z":138.06},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-204,"y":2,"z":138.883},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-205.133,"y":2,"z":139.705},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-206.266,"y":2,"z":140.527},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-207.399,"y":2,"z":141.349},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-208.533,"y":2,"z":142.171},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-209.666,"y":2,"z":142.993},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}}*/];
nx.crashSeqIdx[NUM].pyramidANMPath = [{"pos":{"x":-54.416,"y":222,"z":30.365},"rot":{"x":0,"y":-0.891,"z":0,"w":-0.455}},{"pos":{"x":-58.949,"y":216.566,"z":33.654},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-63.482,"y":209.664,"z":36.942},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-68.015,"y":202.763,"z":40.231},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-72.547,"y":195.862,"z":43.519},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-77.08,"y":188.961,"z":46.807},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-81.613,"y":182.06,"z":50.096},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-86.146,"y":175.159,"z":53.384},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-90.679,"y":168.258,"z":56.673},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-95.212,"y":161.357,"z":59.961},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-99.744,"y":154.456,"z":63.249},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-104.277,"y":147.555,"z":66.538},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-108.81,"y":140.654,"z":69.826},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-113.343,"y":133.753,"z":73.115},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-117.876,"y":126.851,"z":76.403},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-122.409,"y":119.95,"z":79.691},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-126.941,"y":113.049,"z":82.98},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-131.474,"y":106.148,"z":86.268},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-136.007,"y":99.247,"z":89.557},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-140.54,"y":92.346,"z":92.845},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-145.073,"y":85.445,"z":96.133},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-149.606,"y":78.544,"z":99.422},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-154.139,"y":71.643,"z":102.71},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-158.671,"y":64.742,"z":105.998},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-163.204,"y":57.841,"z":109.287},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-167.737,"y":50.94,"z":112.575},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-172.27,"y":44.038,"z":115.864},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-176.803,"y":37.137,"z":119.152},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-181.336,"y":30.236,"z":122.44},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-185.868,"y":23.335,"z":125.729},"rot":{"x":0.195,"y":-0.805,"z":-0.384,"w":-0.411}},{"pos":{"x":-190.002,"y":16.434,"z":129.416},"rot":{"x":0.194,"y":-0.806,"z":-0.382,"w":-0.411}},{"pos":{"x":-194.135,"y":9.533,"z":133.105},"rot":{"x":0.181,"y":-0.817,"z":-0.357,"w":-0.417}},{"pos":{"x":-198.268,"y":2.632,"z":136.793},"rot":{"x":0.064,"y":-0.882,"z":-0.127,"w":-0.45}}];

                    //VISUALIZE-.
                    // debugger;
                    // var instPath = nx.createPathEditor({aName:'pyramidPATH', ANMPath:nx.crashSeqIdx[NUM].pyramidANMPath});
                    // if(instPath && instPath.aPath){nx.crashSeqIdx[1].pyramidPath.aPath = instPath.aPath} //for playback of rotation editing-.
 // nx.crashSeqIdx[3] = {on:1} //important
 // nx.crashSeqIdx[6] = {on:1} //important
                    // if(instPath && instPath.aPath){nx.crashSeqIdx[1].pyramidPath.aPath = instPath.aPath} //for playback of rotation editing-.
                // }

                } //end init sequence-.

                //TODO the NEW ANMITERATOR-.
                if(!nx.crashSeqIdx[NUM].initAnm){  //init next path point
                    // nx.crashSeqIdx[1].curPOS = nx.crashSeqIdx[1].movepath[nx.crashSeqIdx[1].stepIdx];
                    // nx.crashSeqIdx[1].nxtPOS = nx.crashSeqIdx[1].movepath[++nx.crashSeqIdx[1].stepIdx]
                    nx.crashSeqIdx[NUM].curPOS = nx.crashSeqIdx[NUM].pyramidANMPath[nx.crashSeqIdx[NUM].stepIdx];
                    nx.crashSeqIdx[NUM].nxtPOS = nx.crashSeqIdx[NUM].pyramidANMPath[++nx.crashSeqIdx[NUM].stepIdx];
                    nx.crashSeqIdx[NUM].initAnm = 1;
                    if(!nx.crashSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.crashSeqIdx[NUM].on=0; //important
                        // nx.crashSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-.  
                        //SIMULTANEOUS-ANMS-
                        nx.crashSeqIdx[4] = {on:1};  //SIMCAM offsets-.
                        // nx.crashSeqIdx[2] = {on:0}; //NEXT-ANM-. 
                        // nx.crashSeqIdx[3] = {on:1}; //NEXT-ANM-. 
                        // nx.cinematicMode = 0;
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.crashSeqIdx[NUM].runAnm = 1;
                }  
                //NEW-RUN-ANM-FORMAT-.
                if(nx.crashSeqIdx[NUM].runAnm) { nx.crashSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.crashSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.crashSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.crashSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH---------------------------------DOWN-PYRAMID.
                        if(nx.cinemaStop){ $(this).stop(); nx.crashSeqIdx[1]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        if(nx.crashSeqIdx[NUM].curPOS.rot){  //EDITABLE-ROTATIONS-.
                            if(nx.crashSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                                nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.crashSeqIdx[NUM].curPOS.rot.x,nx.crashSeqIdx[NUM].curPOS.rot.y,nx.crashSeqIdx[NUM].curPOS.rot.z,nx.crashSeqIdx[NUM].curPOS.rot.w);
                                nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                                //TODO FIX THIS needs to apply total rotation not just part.
                            }else{ //EULER-ANM-ROT-.
                                nx.orbyMesh.rotationQuaternion = null;
                                nx.orbyMesh.rotation = new BABYLON.Vector3(nx.crashSeqIdx[NUM].curPOS.rot.x,nx.crashSeqIdx[NUM].curPOS.rot.y,nx.crashSeqIdx[NUM].curPOS.rot.z);
                                nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                            }
                        }
                    }, complete:function(){ 
                        nx.crashSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });


                }




                // if(!nx.crashSeqIdx[1].initAnm){  //init next path point
                //     nx.crashSeqIdx[1].curPOS = nx.crashSeqIdx[1].pyramidPath.aPath[nx.crashSeqIdx[1].stepIdx];
                //     nx.crashSeqIdx[1].nxtPOS = nx.crashSeqIdx[1].pyramidPath.aPath[++nx.crashSeqIdx[1].stepIdx]
                //     // nx.crashSeqIdx[1].curPOS = nx.crashSeqIdx[1].movepath[nx.crashSeqIdx[1].stepIdx];
                //     // nx.crashSeqIdx[1].nxtPOS = nx.crashSeqIdx[1].movepath[++nx.crashSeqIdx[1].stepIdx]
                //     nx.crashSeqIdx[1].initAnm = 1;
                //     if(!nx.crashSeqIdx[1].nxtPOS){  
                        // nx.crashSeqIdx[3].on=0; //important
                        // nx.crashSeqIdx[3] = {on:0} //important
                //         return; //END-SUB-SEQUENCES-.
                //     } 
                //     nx.crashSeqIdx[1].runAnm = 1;
                // }  
                // if(nx.crashSeqIdx[1].runAnm) { nx.crashSeqIdx[1].runAnm = 0; //ANM: ------------------------------------------------TOP-PYRAMID-.
                //     // $({curPOSx:nx.crashSeqIdx[1].curPOS.aPath.x,curPOSy:nx.crashSeqIdx[1].curPOS.aPath.y,curPOSz:nx.crashSeqIdx[1].curPOS.aPath.z}).
                //     $({curPOSx:nx.crashSeqIdx[1].curPOS.x,curPOSy:nx.crashSeqIdx[1].curPOS.y,curPOSz:nx.crashSeqIdx[1].curPOS.z}).
                //     // animate({curPOSx:nx.crashSeqIdx[1].nxtPOS.aPath.x,curPOSy:nx.crashSeqIdx[1].nxtPOS.aPath.y,curPOSz:nx.crashSeqIdx[1].nxtPOS.aPath.z},{queue:false,duration:nx.crashSeqIdx[1].anmSpeed,easing:'linear',
                //     animate({curPOSx:nx.crashSeqIdx[1].nxtPOS.x,curPOSy:nx.crashSeqIdx[1].nxtPOS.y,curPOSz:nx.crashSeqIdx[1].nxtPOS.z},{queue:false,duration:nx.crashSeqIdx[1].anmSpeed,easing:'linear',
                //     step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                //         if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                //         nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                //         nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                //     nx.camz.freeCam.setTarget( nx.orbyMesh.position );
                //     // console.log('crashcam2')
                //         // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.crashSeqIdx[1].curPOS.rot.x,nx.crashSeqIdx[1].curPOS.rot.y,nx.crashSeqIdx[1].curPOS.rot.z,nx.crashSeqIdx[1].curPOS.rot.w);
                //         // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                //     }, complete:function(){ 
                //             nx.crashSeqIdx[1].initAnm = 0; 
                //             // console.log('completed anm')
                //             //TODO: this is firing too much!!!
                //         } //NEXT-SUB-SEQUENCE-. 
                //     });

                // }

            }
            // if(false && nx.crashSeqIdx[2] && nx.crashSeqIdx[2].on){  //ANM: trigger follow cam at TOP CENTER PYRAMID-.

//                 if(nx.orbyMesh.position.z >= 0 ){
//                     // debugger;
//                     nx.crashSeqIdx[2].on=0;
//                     // nx.crashSeqIdx[2] = {on:1}; 
//                     nx.initFaceCam();
//                     nx.camz.faceCam.cameraAcceleration = 0.0005;
//                     setTimeout(function(){
                        // nx.crashSeqIdx[3]={on:1};
//                         nx.crashSeqIdx[4]={on:1};
// // console.log('crashcam3')
//                         nx.camz.freeCam.position.copyFrom(nx.scene.activeCamera.position)
//                         nx.camz.freeCam.setTarget( nx.orbyMesh.position );
//                         nx.scene.activeCamera = nx.camz.freeCam; 

//                         // nx.cinematicMode = 0;

//                     },3000)

//                 }
            // } 



//             if(nx.crashSeqIdx[3] && nx.crashSeqIdx[3].on){ //ANM: ----------------------------------------------------------------------SKIDFALL-.
//                     // nx.crashSeqIdx[3].on=0;
//                 if(!nx.crashSeqIdx[3].initSeq){ nx.crashSeqIdx[3].initSeq=1; //one time init
//                     // if(nx.orbySparks){nx.orbySparks.start();} //start going down pyramid
//                     if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.start();} //start going down pyramid
//                     nx.crashSeqIdx[3].skidPath = {aPath:[],aRot:[{idx:0,x:-0.5}]} 
//                     nx.crashSeqIdx[3].skidPath.aPath = [{"x":-50.68514685135697,"y":222.3554614063724,"z":29.10681004727359},{"x":-51.869434127752754,"y":217.55671057174615,"z":29.661023772429594},{"x":-52.25372140414853,"y":214.05795973711983,"z":29.61523749758559},{"x":-52.738008680544304,"y":210.75920890249358,"z":29.86945122274159},{"x":-54.12229595694009,"y":207.7604580678672,"z":29.923664947897585},{"x":-55.40658323333588,"y":208.26170723324063,"z":31.077878673053597},{"x":-56.79087050973167,"y":208.3629563986141,"z":32.032092398209606},{"x":-58.17515778612746,"y":208.36420556398744,"z":33.48630612336562},{"x":-59.35944506252324,"y":207.66545472936107,"z":34.24051984852163},{"x":-60.14373233891902,"y":205.8667038947345,"z":34.894733573677634},{"x":-60.6280196153148,"y":203.76795306010828,"z":35.248947298833635},{"x":-61.112306891710574,"y":201.5692022254819,"z":35.603161023989635},{"x":-61.59659416810636,"y":199.47045139085552,"z":35.95737474914564},{"x":-62.08088144450217,"y":197.3717005562291,"z":36.311588474301644},{"x":-62.5651649062006,"y":195.17295290051717,"z":36.665802199457644},{"x":-63.54944836789904,"y":193.37420524480524,"z":37.42001592461365},{"x":-64.93373182959742,"y":193.5754575890932,"z":38.47422964976966},{"x":-66.11801529129578,"y":193.57670993338115,"z":39.728443374925675},{"x":-67.2023063823889,"y":191.87795591984025,"z":40.48265710008168},{"x":-67.68659747348205,"y":190.27920190629933,"z":40.83687082523768},{"x":-68.17088856457521,"y":188.5804478927584,"z":41.19108455039368},{"x":-68.65517965566836,"y":186.78169387921756,"z":41.54529827554968},{"x":-69.3394707467615,"y":185.1829398656766,"z":42.19951200070569},{"x":-70.12376183785464,"y":183.4841858521357,"z":42.85372572586169},{"x":-71.00805292894778,"y":182.18543183859478,"z":43.7079394510177},{"x":-71.79234402004091,"y":180.88667782505385,"z":44.362153176173706},{"x":-72.47663511113406,"y":180.18792381151286,"z":44.91636690132971},{"x":-73.06092620222721,"y":179.4891697979719,"z":45.37058062648571},{"x":-73.54521729332036,"y":179.0904157844312,"z":45.72479435164171},{"x":-74.02950838441352,"y":178.39166177089,"z":46.07900807679771},{"x":-74.41379947550668,"y":177.69290775734905,"z":46.433221801953714},{"x":-74.89809056659983,"y":176.994153743808,"z":46.68743552710971},{"x":-75.38238165769299,"y":176.29539973026698,"z":47.041649252265714},{"x":-75.86667274878614,"y":175.59664253781176,"z":47.395866792119094},{"x":-76.3509638398793,"y":174.89788534535623,"z":47.750084331972474},{"x":-76.83525493097245,"y":174.19912815290084,"z":48.104301871825854},{"x":-77.31954602206561,"y":173.50037096044522,"z":48.458519411679234},{"x":-77.80383711315876,"y":172.80161376798992,"z":48.812736951532614},{"x":-78.28812820425192,"y":172.10285657553433,"z":49.166954491385994},{"x":-78.67241929534508,"y":171.50409938307914,"z":49.42117203123937},{"x":-79.15671038643823,"y":170.80534219062355,"z":49.77538957109275},{"x":-79.64100147753139,"y":170.10658499816816,"z":50.12960711094613},{"x":-80.12529256862454,"y":169.4078278057126,"z":50.48382465079951},{"x":-80.6095836597177,"y":168.70907061325738,"z":50.83804219065289},{"x":-81.09387475081085,"y":168.0103134208018,"z":51.19225973050627},{"x":-81.57816584190401,"y":167.31155622834626,"z":51.54647727035965},{"x":-82.06245693299716,"y":166.61279903589084,"z":51.90069481021303},{"x":-82.54674802409032,"y":165.91404184343543,"z":52.25491235006641},{"x":-83.03103911518348,"y":165.2152846509799,"z":52.60912988991979},{"x":-83.51533020627663,"y":164.5165274585245,"z":52.96334742977317},{"x":-83.99962129736979,"y":163.8177702660691,"z":53.31756496962655},{"x":-84.48391238846294,"y":163.11901307361367,"z":53.67178250947993},{"x":-84.9682034795561,"y":162.4202558811582,"z":54.02600004933331},{"x":-85.45249457064925,"y":161.7214986887026,"z":54.38021758918669},{"x":-85.9367856617424,"y":161.0227414962472,"z":54.73443512904007},{"x":-86.42107675283556,"y":160.32398430379178,"z":55.08865266889345},{"x":-86.90536784392872,"y":159.62522711133644,"z":55.44287020874683},{"x":-87.38965893502187,"y":158.92646991888085,"z":55.79708774860021},{"x":-87.87395002611503,"y":158.22771272642558,"z":56.15130528845359},{"x":-88.35824111720818,"y":157.52895553397002,"z":56.50552282830697},{"x":-88.84253220830134,"y":156.83019834151455,"z":56.85974036816035},{"x":-89.32682329939449,"y":156.1314411490591,"z":57.21395790801373},{"x":-89.81111439048765,"y":155.43268395660368,"z":57.56817544786711},{"x":-90.2954054815808,"y":154.73392676414812,"z":57.92239298772049},{"x":-90.77969657267396,"y":154.0351695716928,"z":58.27661052757387},{"x":-91.26398766376711,"y":153.33641237923752,"z":58.63082806742725},{"x":-91.74827875486027,"y":152.63765518678193,"z":58.98504560728063},{"x":-92.23256984595342,"y":151.93889799432657,"z":59.33926314713401},{"x":-92.71686093704658,"y":151.24014080187078,"z":59.69348068698739},{"x":-93.10115202813974,"y":150.74138360941558,"z":59.94769822684077},{"x":-93.58544311923289,"y":150.04262641696013,"z":60.20191576669415},{"x":-94.16973421032604,"y":149.34386922450466,"z":60.55613330654753},{"x":-94.6540253014192,"y":148.64511203204933,"z":60.91035084640091},{"x":-95.13831639251235,"y":147.94635483959385,"z":61.26456838625429},{"x":-95.52260748360551,"y":147.24759764713835,"z":61.51878592610767},{"x":-96.00689857469867,"y":146.5488404546829,"z":61.87300346596105},{"x":-96.49118966579182,"y":145.85008326222743,"z":62.22722100581443},{"x":-96.97548075688498,"y":145.15132606977195,"z":62.58143854566781},{"x":-97.45977184797813,"y":144.45256887731645,"z":62.93565608552119},{"x":-97.94406293907129,"y":143.75381168486115,"z":63.28987362537457},{"x":-98.42835403016444,"y":143.05505449240582,"z":63.64409116522795},{"x":-98.9126451212576,"y":142.35629729995028,"z":63.99830870508132},{"x":-99.39693621235075,"y":141.65754010749478,"z":64.35252624493468},{"x":-99.88122730344391,"y":140.9587829150393,"z":64.70674378478803},{"x":-100.36551839453706,"y":140.2600257225839,"z":65.0609613246414},{"x":-100.84980948563022,"y":139.56127170904293,"z":65.4151750497974},{"x":-101.33410057672337,"y":138.86251451658748,"z":65.76939258965078},{"x":-101.81839166781653,"y":138.16375732413204,"z":66.12361012950416},{"x":-102.30268275890968,"y":137.4650001316766,"z":66.47782766935754},{"x":-102.78697385000284,"y":136.76624293922112,"z":66.83204520921092},{"x":-103.27126494109599,"y":136.0674857467657,"z":67.1862627490643},{"x":-103.75555603218915,"y":135.36872855431025,"z":67.54048028891768},{"x":-104.2398471232823,"y":134.6699713618548,"z":67.89469782877106},{"x":-104.72413821437546,"y":133.97121416939936,"z":68.24891536862444},{"x":-105.20842930546861,"y":133.27245697694391,"z":68.60313290847782},{"x":-105.69272039656177,"y":132.57369978448847,"z":68.9573504483312},{"x":-106.17701148765492,"y":131.87494259203305,"z":69.31156798818458},{"x":-106.66130257874808,"y":131.17618539957758,"z":69.66578552803796},{"x":-107.14559366984123,"y":130.47742820712213,"z":70.02000306789134},{"x":-107.62988476093439,"y":129.77867101466668,"z":70.37422060774472},{"x":-108.11417585202754,"y":129.07991382221124,"z":70.7284381475981},{"x":-108.5984669431207,"y":128.3811566297558,"z":71.08265568745148},{"x":-109.08275803421385,"y":127.68239943730035,"z":71.43687322730486},{"x":-109.56704912530701,"y":126.9836422448449,"z":71.79109076715824},{"x":-110.05134021640016,"y":126.28488505238943,"z":72.14530830701162},{"x":-110.53563130749332,"y":125.58612785993401,"z":72.499525846865},{"x":-111.01992239858647,"y":124.88737066747856,"z":72.85374338671838},{"x":-111.50421348967963,"y":124.18861347502312,"z":73.20796092657176},{"x":-111.98850458077278,"y":123.48985628256769,"z":73.56217846642514},{"x":-112.47279567186594,"y":122.79109909011223,"z":73.91639600627852},{"x":-112.9570867629591,"y":122.09234189765677,"z":74.2706135461319},{"x":-113.44137785405225,"y":121.3935847052013,"z":74.62483108598528},{"x":-113.9256689451454,"y":120.69482751274589,"z":74.97904862583866},{"x":-114.40996003623856,"y":119.99607032029044,"z":75.33326616569204},{"x":-114.89425112733171,"y":119.29731312783503,"z":75.68748370554542},{"x":-115.37854221842487,"y":118.59855593537958,"z":76.0417012453988},{"x":-115.86283330951802,"y":117.89979874292409,"z":76.39591878525218},{"x":-116.34712440061118,"y":117.20104155046864,"z":76.75013632510556},{"x":-116.83141549170433,"y":116.50228435801321,"z":77.10435386495894},{"x":-117.31570658279749,"y":115.80352716555775,"z":77.45857140481232},{"x":-117.79999767389064,"y":115.10476997310232,"z":77.8127889446657},{"x":-118.2842887649838,"y":114.40601278064688,"z":78.16700648451908},{"x":-118.76857985607695,"y":113.7072555881914,"z":78.52122402437246},{"x":-119.25287094717011,"y":113.00849839573597,"z":78.87544156422584},{"x":-119.73716203826326,"y":112.30974120328052,"z":79.22965910407922},{"x":-120.22145312935642,"y":111.61098401082509,"z":79.5838766439326},{"x":-120.70574422044957,"y":110.91222681836967,"z":79.93809418378598},{"x":-121.19003531154273,"y":110.21346962591421,"z":80.29231172363936},{"x":-121.67432640263588,"y":109.51471243345875,"z":80.64652926349274},{"x":-122.15861749372904,"y":108.81595524100328,"z":81.00074680334612},{"x":-122.6429085848222,"y":108.11719804854788,"z":81.3549643431995},{"x":-123.12719967591535,"y":107.41844085609243,"z":81.70918188305288},{"x":-123.6114907670085,"y":106.71968366363699,"z":82.06339942290626},{"x":-124.09578185810166,"y":106.02092647118154,"z":82.41761696275964},{"x":-124.58007294919481,"y":105.32216927872608,"z":82.77183450261302},{"x":-125.06436404028797,"y":104.6234120862706,"z":83.1260520424664},{"x":-125.54865513138112,"y":103.92465489381517,"z":83.48026958231978},{"x":-126.03294622247428,"y":103.22589770135974,"z":83.83448712217316},{"x":-126.51723731356743,"y":102.52714050890432,"z":84.18870466202654},{"x":-127.00152840466059,"y":101.82838331644888,"z":84.54292220187992},{"x":-127.48581949575374,"y":101.1296261239934,"z":84.8971397417333},{"x":-127.97011058684691,"y":100.43086893153794,"z":85.25135728158668},{"x":-128.45440167794004,"y":99.73211173908253,"z":85.60557482144006},{"x":-128.9386927690332,"y":99.03335454662708,"z":85.95979236129344},{"x":-129.42298386012635,"y":98.33459735417165,"z":86.31400990114682},{"x":-129.9072749512195,"y":97.63584016171619,"z":86.6682274410002},{"x":-130.3915584129179,"y":96.93708932708971,"z":87.02244498085358},{"x":-130.8758418746163,"y":96.23833849246321,"z":87.37666252070696},{"x":-131.3601253363147,"y":95.53958765783673,"z":87.73088006056034},{"x":-131.8444087980131,"y":94.84083682321027,"z":88.08509760041372},{"x":-132.3286922597115,"y":94.14208598858377,"z":88.4393151402671},{"x":-132.81297572140988,"y":93.44333515395729,"z":88.79353268012048},{"x":-133.29725918310828,"y":92.74458431933081,"z":89.14775021997386},{"x":-133.78154264480668,"y":92.04583348470433,"z":89.50196775982724},{"x":-134.26582610650507,"y":91.34708265007784,"z":89.85618529968062},{"x":-134.75010956820347,"y":90.64833181545136,"z":90.210402839534},{"x":-135.23439302990187,"y":89.94958098082489,"z":90.56462037938738},{"x":-135.71867649160026,"y":89.25083014619841,"z":90.91883791924076},{"x":-136.20295995329866,"y":88.55207931157192,"z":91.27305545909414},{"x":-136.68724341499706,"y":87.85332847694545,"z":91.62727299894752},{"x":-137.17152687669545,"y":87.15457764231897,"z":91.9814905388009},{"x":-137.65581033839385,"y":86.4558268076925,"z":92.33570807865428},{"x":-138.14009380009225,"y":85.75707597306601,"z":92.68992561850766},{"x":-138.62437726179064,"y":85.05832513843953,"z":93.04414315836104},{"x":-139.10866072348904,"y":84.35957430381306,"z":93.39836069821442},{"x":-139.59294418518743,"y":83.66082346918657,"z":93.7525782380678},{"x":-140.07722764688583,"y":82.96207263456007,"z":94.10679577792118},{"x":-140.56151110858423,"y":82.2633217999336,"z":94.46101331777456},{"x":-141.04579457028262,"y":81.56457096530713,"z":94.81523085762794},{"x":-141.53007803198102,"y":80.86582013068065,"z":95.16944839748132},{"x":-142.01436149367942,"y":80.16706929605417,"z":95.5236659373347},{"x":-142.4986449553778,"y":79.46831846142769,"z":95.87788347718808},{"x":-142.9829284170762,"y":78.7695676268012,"z":96.23210101704146},{"x":-143.4672118787746,"y":78.07081679217474,"z":96.58631855689484},{"x":-143.951495340473,"y":77.37206595754823,"z":96.94053609674822},{"x":-144.4357788021714,"y":76.67331512292176,"z":97.2947536366016},{"x":-144.9200622638698,"y":75.97456428829528,"z":97.64897117645498},{"x":-145.4043457255682,"y":75.2758134536688,"z":98.00318871630836},{"x":-145.8886291872666,"y":74.57706261904232,"z":98.35740625616174},{"x":-146.37291264896498,"y":73.87831178441584,"z":98.71162379601512},{"x":-146.85719611066338,"y":73.17956094978938,"z":99.0658413358685},{"x":-147.34147957236178,"y":72.48081011516288,"z":99.42005887572188},{"x":-147.82576303406017,"y":71.78205928053642,"z":99.77427641557526},{"x":-148.31004649575857,"y":71.08330844590992,"z":100.12849395542864},{"x":-148.79432995745697,"y":70.38455761128346,"z":100.48271149528202},{"x":-149.27861341915536,"y":69.68580677665697,"z":100.8369290351354},{"x":-149.76289688085376,"y":68.98705594203048,"z":101.19114657498878},{"x":-150.24718034255216,"y":68.288305107404,"z":101.54536411484216},{"x":-150.73146380425055,"y":67.58955427277752,"z":101.89958165469554},{"x":-151.21574726594895,"y":66.89080343815104,"z":102.25379919454892},{"x":-151.70003072764734,"y":66.19205260352457,"z":102.6080167344023},{"x":-152.18431418934574,"y":65.49330176889809,"z":102.96223427425568},{"x":-152.66859765104414,"y":64.79455093427161,"z":103.31645181410906},{"x":-153.15288111274253,"y":64.09580009964513,"z":103.67066935396244},{"x":-153.63716457444093,"y":63.39704926501859,"z":104.02488689381582},{"x":-154.12144803613933,"y":62.69829843039206,"z":104.3791044336692},{"x":-154.60573149783772,"y":61.99954759576553,"z":104.73332197352258},{"x":-155.09001495953612,"y":61.30079676113902,"z":105.08753951337596},{"x":-155.57429842123452,"y":60.60204592651255,"z":105.44175705322934},{"x":-156.0585818829329,"y":59.90329509188607,"z":105.79597459308272},{"x":-156.5428653446313,"y":59.2045442572596,"z":106.1501921329361},{"x":-157.0271488063297,"y":58.50579342263312,"z":106.50440967278948},{"x":-157.5114322680281,"y":57.80704258800664,"z":106.85862721264286},{"x":-157.9957157297265,"y":57.10829175338016,"z":107.21284475249624},{"x":-158.4799991914249,"y":56.40954091875367,"z":107.56706229234962},{"x":-158.9642826531233,"y":55.71079008412718,"z":107.921279832203},{"x":-159.4485661148217,"y":55.01203924950071,"z":108.27549737205638},{"x":-159.93284957652008,"y":54.313288414874215,"z":108.62971491190976},{"x":-160.41713303821848,"y":53.61453758024775,"z":108.98393245176314},{"x":-160.90141649991688,"y":52.91578674562127,"z":109.33814999161652},{"x":-161.38569996161527,"y":52.21703591099479,"z":109.6923675314699},{"x":-161.86998342331367,"y":51.518285076368315,"z":110.04658507132328},{"x":-162.35426688501207,"y":50.81953424174183,"z":110.40080261117666},{"x":-162.83855034671046,"y":50.12078340711535,"z":110.75502015103004},{"x":-163.32283380840886,"y":49.422032572488874,"z":111.10923769088342},{"x":-163.80711727010726,"y":48.72328173786238,"z":111.4634552307368},{"x":-164.29140073180565,"y":48.0245309032359,"z":111.81767277059018},{"x":-164.77568419350405,"y":47.325780068609426,"z":112.17189031044356},{"x":-165.25996765520244,"y":46.62702923398295,"z":112.52610785029694},{"x":-165.74425111690084,"y":45.92827839935647,"z":112.88032539015032},{"x":-166.22853457859924,"y":45.22952756472999,"z":113.2345429300037},{"x":-166.71281804029763,"y":44.53077673010351,"z":113.58876046985708},{"x":-167.19710150199603,"y":43.832025895477024,"z":113.94297800971046},{"x":-167.68138496369443,"y":43.13327506085055,"z":114.29719554956384},{"x":-168.16566842539282,"y":42.43452422622406,"z":114.65141308941722},{"x":-168.64995188709122,"y":41.735773391597576,"z":115.0056306292706},{"x":-169.13423534878962,"y":41.0370225569711,"z":115.35984816912398},{"x":-169.618518810488,"y":40.338271722344615,"z":115.71406570897736},{"x":-170.1028022721864,"y":39.63952088771814,"z":116.06828324883074},{"x":-170.5870857338848,"y":38.94077005309167,"z":116.42250078868412},{"x":-171.0713691955832,"y":38.24201921846519,"z":116.7767183285375},{"x":-171.5556526572816,"y":37.54326838383871,"z":117.13093586839088},{"x":-172.03993611898,"y":36.84451754921222,"z":117.48515340824426},{"x":-172.5242195806784,"y":36.14576671458575,"z":117.83937094809764},{"x":-173.0085030423768,"y":35.44701587995925,"z":118.19358848795102},{"x":-173.49278650407518,"y":34.74826504533278,"z":118.5478060278044},{"x":-173.97706996577358,"y":34.04951421070629,"z":118.90202356765778},{"x":-174.46135342747198,"y":33.350763376079826,"z":119.25624110751116},{"x":-174.94563688917037,"y":32.65201254145334,"z":119.61045864736454},{"x":-175.42992035086877,"y":31.953261706826865,"z":119.96467618721792},{"x":-175.91420381256717,"y":31.254510872200385,"z":120.3188937270713},{"x":-176.39848727426556,"y":30.555760037573904,"z":120.67311126692468},{"x":-176.88277073596396,"y":29.857009202947417,"z":121.02732880677806},{"x":-177.36705419766236,"y":29.158258368320933,"z":121.38154634663144},{"x":-177.85133765936075,"y":28.45950753369446,"z":121.73576388648482},{"x":-178.33562112105915,"y":27.760756699067972,"z":122.0899814263382},{"x":-178.81990458275754,"y":27.062005864441502,"z":122.44419896619158},{"x":-179.30418804445594,"y":26.36325502981502,"z":122.79841650604496},{"x":-179.78847150615434,"y":25.66450419518854,"z":123.15263404589834},{"x":-180.27275496785273,"y":24.965753360562058,"z":123.50685158575172},{"x":-180.75703842955113,"y":24.267002525935574,"z":123.8610691256051},{"x":-181.24132189124953,"y":23.5682516913091,"z":124.21528666545848},{"x":-181.72560535294792,"y":22.869500856682617,"z":124.56950420531186},{"x":-182.20988881464632,"y":22.170750022056144,"z":124.92372174516524},{"x":-182.69417227634472,"y":21.471999187429653,"z":125.27793928501862},{"x":-183.1784557380431,"y":20.77324835280318,"z":125.632156824872},{"x":-183.6627391997415,"y":20.0744975181767,"z":125.98637436472538},{"x":-184.1470226614399,"y":19.37574668355022,"z":126.34059190457876},{"x":-184.6313061231383,"y":18.67699584892373,"z":126.69480944443214},{"x":-185.1155895848367,"y":17.97824501429726,"z":127.04902698428552},{"x":-185.5998730465351,"y":17.279494179670777,"z":127.4032445241389},{"x":-186.0841565082335,"y":16.580743345044297,"z":127.75746206399228},{"x":-186.5684399699319,"y":15.881992510417817,"z":128.11167960384566},{"x":-187.05272343163028,"y":15.183241675791352,"z":128.46589714369904},{"x":-187.53700689332868,"y":14.484490841164885,"z":128.82011468355242},{"x":-188.02129035502708,"y":13.785740006538417,"z":129.1743322234058},{"x":-188.50557381672547,"y":13.08698917191194,"z":129.52854976325918},{"x":-188.98985727842387,"y":12.38823833728546,"z":129.88276730311256},{"x":-189.47414074012227,"y":11.689487502658983,"z":130.23698484296594},{"x":-189.95842420182066,"y":10.990736668032497,"z":130.59120238281932},{"x":-190.44270766351906,"y":10.291985833406018,"z":130.9454199226727},{"x":-190.92699112521746,"y":9.593234998779538,"z":131.29963746252608},{"x":-191.41127458691585,"y":8.894484164153058,"z":131.65385500237946},{"x":-191.89555804861425,"y":8.19573332952658,"z":132.00807254223284},{"x":-192.37984151031264,"y":7.496982494900097,"z":132.36229008208622},{"x":-192.86412497201104,"y":6.798231660273617,"z":132.7165076219396},{"x":-193.34840843370944,"y":6.099480825647136,"z":133.07072516179298},{"x":-193.83269189540783,"y":5.400729991020657,"z":133.42494270164636},{"x":-194.31697535710623,"y":4.701979156394179,"z":133.77916024149974},{"x":-194.80125881880463,"y":4.003228321767695,"z":134.13337778135312},{"x":-195.28554228050302,"y":3.3044774871412117,"z":134.4875953212065},{"x":-195.76982574220142,"y":2.6057266525147282,"z":134.84181286105988},{"x":-196.25410920389982,"y":1.9069758178882448,"z":135.19603040091326},{"x":-197.0384079243877,"y":1.5082122676038323,"z":135.75024794076663}];
                



// //TEST 1 Quaternion {x: -0, y: -0.9019239481551782, z: 0, w: -0.431894885063687} //slightly right


//                     nx.crashSeqIdx[3].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
//                     nx.crashSeqIdx[3].stepIdx = 0;//, nx.crashSeqIdx[3].curPOS, nx.crashSeqIdx[3].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
//                     nx.crashSeqIdx[3].anmSpeed = 8;
//                     //VISUALIZE-.
// // debugger;
// var instPath = nx.createPathEditor({aName:'skidPATH', aPath:nx.crashSeqIdx[3].skidPath.aPath});
// if(instPath && instPath.aPath){nx.crashSeqIdx[3].skidPath.aPath = instPath.aPath}
//                 }
//                 if(!nx.crashSeqIdx[3].initAnm){  //init next path point
//                     nx.crashSeqIdx[3].curPOS = nx.crashSeqIdx[3].skidPath.aPath[nx.crashSeqIdx[3].stepIdx];
//                     nx.crashSeqIdx[3].nxtPOS = nx.crashSeqIdx[3].skidPath.aPath[++nx.crashSeqIdx[3].stepIdx]
//                     nx.crashSeqIdx[3].initAnm = 1;
//                     if(!nx.crashSeqIdx[3].nxtPOS){  
//                         nx.crashSeqIdx[3].on=0; //important
//                         // nx.crashSeqIdx[6] = {on:1}; //TODO??? 
//                         // nx.crashSeqIdx[4] = {on:1}; //TODO??? 
//                         return; //END-SUB-SEQUENCES-.
//                     } 
//                     nx.crashSeqIdx[3].runAnm = 1;
//                 }  
//                 if(nx.crashSeqIdx[3].runAnm) { nx.crashSeqIdx[3].runAnm = 0; //one-time-trigger;
//                     // var smoothYCam = nx.orbyMesh.position.y;
//                     // $({curPOSx:nx.crashSeqIdx[3].curPOS.aPath.x,curPOSy:nx.crashSeqIdx[3].curPOS.aPath.y,curPOSz:nx.crashSeqIdx[3].curPOS.aPath.z}).
//                     $({curPOSx:nx.crashSeqIdx[3].curPOS.x,curPOSy:nx.crashSeqIdx[3].curPOS.y,curPOSz:nx.crashSeqIdx[3].curPOS.z}).
//                     // animate({curPOSx:nx.crashSeqIdx[3].nxtPOS.aPath.x,curPOSy:nx.crashSeqIdx[3].nxtPOS.aPath.y,curPOSz:nx.crashSeqIdx[3].nxtPOS.aPath.z},{queue:false,duration:nx.crashSeqIdx[3].anmSpeed,easing:'linear',
//                     animate({curPOSx:nx.crashSeqIdx[3].nxtPOS.x,curPOSy:nx.crashSeqIdx[3].nxtPOS.y,curPOSz:nx.crashSeqIdx[3].nxtPOS.z},{queue:false,duration:nx.crashSeqIdx[3].anmSpeed,easing:'linear',
//                     step: function(now) { //ANM:-----------------------------------------------SKID
//                         if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
//                         //TODO bad pause
//                         if(!nx.cinematicMode || (nx.ctrl.shift && nx.tenKey.mode === 'anm')){ nx.cinematicMode=0; return;} //PAUSEANM-. methodology
//                         nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove y from interpolation
//                         nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
//                         // nx.camz.freeCam.setTarget( nx.orbyMesh.position ); 
//                         // nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,smoothYCam,this.curPOSz) ); //SMOOTH-CAM-.
//                         nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) ); //SMOOTH-CAM-.


// // console.log('crashcam5')
//                         // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.crashSeqIdx[1].curPOS.rot.x,nx.crashSeqIdx[1].curPOS.rot.y,nx.crashSeqIdx[1].curPOS.rot.z,nx.crashSeqIdx[1].curPOS.rot.w);
//                         // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
//                     }, complete:function(){ 
//                             nx.crashSeqIdx[3].initAnm = 0; 
//                         } //NEXT-SUB-SEQUENCE-. 
//                     });

//                     // console.log('SKID: '+nx.crashSeqIdx[3].stepIdx+'  of '+nx.crashSeqIdx[3].skidPath.aPath.length)
//                     // aRots:[{idx:0,x:-0.5}]}
//                     //ROTATE-.
//                     for(var i = 0; i<nx.crashSeqIdx[3].skidPath.aRot.length;i++ ){ 
//                         if(nx.crashSeqIdx[3].skidPath.aRot[i].idx===nx.crashSeqIdx[3].stepIdx-1){
//                             // console.log('ONE-TIME')
//                             var rotstart = 0, rotend = 0, xrt=nx.crashSeqIdx[3].skidPath.aRot[i].x || 0, yrt=nx.crashSeqIdx[3].skidPath.aRot[i].y || 0, zrt=nx.crashSeqIdx[3].skidPath.aRot[i].z || 0;
//                             if(xrt){ rotstart=nx.orbyMesh.rotation.x; rotend=nx.crashSeqIdx[3].skidPath.aRot[i].x;}
//                             else if(yrt){ rotstart=nx.orbyMesh.rotation.y; rotend=nx.crashSeqIdx[3].skidPath.aRot[i].y;}
//                             else if(zrt){ rotstart=nx.orbyMesh.rotation.z; rotend=nx.crashSeqIdx[3].skidPath.aRot[i].z;}
//                             $({rot:rotstart}). //------------------------------------------------------ANM: ROT-.
//                             animate({rot:rotend},{queue:false,duration:100,easing:'linear',
//                             step: function(now) { //-------------------------------------------SKID ROT
//                                 if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
//                                 if(xrt){ nx.orbyMesh.rotation.x = this.rot}
//                                 else if(yrt){ nx.orbyMesh.rotation.y = this.rot}
//                                 else if(zrt){ nx.orbyMesh.rotation.z = this.rot}
//                                     // console.log('ROT'+this.rot)
//                             }, complete:function(){
//                             //     console.log('end8')
//                                 } //NEXT-SUB-SEQUENCE-. 
//                             }); 
//                             break;
//                         } 
//                     }

//                 }

//             }

//             if(nx.crashSeqIdx[4] && nx.crashSeqIdx[4].on){ //ANM: -----------------------------------------------------------long-view
//                 if(nx.orbyMesh.position.z>=75 ) { //anmthreshold anmethodology
//                     // console.log('done')
//                     nx.crashSeqIdx[4].on=0;

//                     setTimeout(function(){
//                         nx.crashSeqIdx[5] = {on:1,init:0}; //cam-init-switch pattern
//                     },3000)

// // console.log('crashcam6 - long view')
// // debugger;
//                     nx.camz.freeCam.position.copyFrom({x: -319.7470039671573, y: 30.389301516696722, z: 535.0326931496461})  //LONG-VIEW
//                     // nx.scene.activeCamera = nx.camz.freeCam; 
//                     nx.camz.freeCam.setTarget( new nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z ));
//                     // nx.scene.activeCamera.setTarget( new nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y+200,nx.orbyMesh.position.z ));


//                     // {x: -256.26974866381187, y: 33.533174886216514, z: 548.2053702511412}


//                 } //Orby position Trigger next view-.
//             //     nx.initFaceCam() //FACE-CAM-.
//             //     setTimeout(function(){
//             //         //TODO FREEZEFOCUS - EYEball look -FALL-. ZOOM-OUT-.
//             //         nx.crashSeqIdx[5] = {on:1}
//             //         // setTimeout(function(){ nx.crashSeqIdx[6] = {on:1} }, 1000);
//             //         // nx.cinematicMode = 0; //END-SEQUENCE-AND-PLAYBACK-.
//             //     },4000)
//             }
            if(nx.crashSeqIdx[3] && nx.crashSeqIdx[3].on){ //ANM:---------------------------------------BOTTOM-OF-PYRAMID-. ---------
                if(nx.cinemaStop){nx.crashSeqIdx[1]={on:1}; return;}
                nx.camz.freeCam.setTarget( new nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z ));
                    
                if(nx.orbyMesh.position.z>=80 ) { //anmthreshold anmethodology
                    // nx.crashSeqIdx[3].on = 0;
                    if(!nx.crashSeqIdx[3].init){ nx.crashSeqIdx[3].init = 1; //anmethodology:anm-init-switch-pattern-.  //CAM-INIT-SWITCH-.
                        
    // console.log('crashcam7 midview')
        // debugger;
                        // nx.camz.freeCam.position.copyFrom({x: -196.7402073730567, y: 13.461529498321113, z: 249.03460769625465})  //MID-PASSING-.
                        nx.camz.freeCam.position.copyFrom({x: -196.7402073730567, y: 13.461529498321113, z: 249.03460769625465})  //MID-PASSING-.
                        // nx.camz.freeCam.position.copyFrom({x: -225.5582187396452, y: 10.833965663699324, z: 212.68746267269756})  //CLOSE-UP-.
                        // nx.scene.activeCamera = nx.camz.freeCam; 
                        // nx.scene.activeCamera.setTarget( new nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y+100,nx.orbyMesh.position.z ));

                    }


                    // setTimeout(function(){
                        // if(nx.orbyMesh.position.z>=80 ) { //anmthreshold anmethodology
                        // nx.crashSeqIdx[4] = {on:1}; //SIMCAM: init-switch pattern
                    // },3000)



                }

            }

            if(nx.crashSeqIdx[4] && nx.crashSeqIdx[4].on){ //ANM: orby bounce 
                var NUM = 4;
                if(nx.cinemaStop){nx.crashSeqIdx[4]={on:1}; return;}
                  // nx.crashSeqIdx[NUM].on=0;
                if(!nx.crashSeqIdx[NUM].initSeq){ nx.crashSeqIdx[NUM].initSeq=1; //one time init
                    nx.crashSeqIdx[NUM].bouncePath = {aPath:[],aRot:[]};
                    nx.crashSeqIdx[NUM].bouncePath.aRot = [{idx:0,x:0.8},{idx:5,x:-0.2},{idx:8,x:-0.2},{idx:10,x:0.1},{idx:14,z:0.6},{idx:16,z:0},{idx:18,z:-0.6},{idx:20,z:0},{idx:22,z:0.6},{idx:24,x:-0.4},{idx:27,x:-0.4}];
                    
// debugger;
// nx.crashSeqIdx[NUM].bouncePath.aPath = nx.editz.truncatePathPrecision(nx.crashSeqIdx[NUM].bouncePath.aPath)
nx.crashSeqIdx[NUM].bouncePath.aPath = [{"x":-197.9,"y":2.583,"z":136.6},{"x":-202.401,"y":7.141,"z":143.1},{"x":-212.301,"y":9.691,"z":153},{"x":-215.301,"y":9.332,"z":156},{"x":-218.301,"y":8.263,"z":159},{"x":-221.301,"y":5.385,"z":162},{"x":-226.601,"y":6.497,"z":166.6},{"x":-229.301,"y":7.099,"z":170.3},{"x":-232.301,"y":7.191,"z":173.3},{"x":-235.301,"y":6.473,"z":176.3},{"x":-239.201,"y":4.646,"z":180.5},{"x":-243.101,"y":5.709,"z":184.5},{"x":-246.801,"y":5.163,"z":188.6},{"x":-251.001,"y":4.208,"z":192.8},{"x":-255.201,"y":4.145,"z":197.6},{"x":-260.001,"y":4.075,"z":203},{"x":-260.401,"y":3.998,"z":208.9},{"x":-264.201,"y":3.915,"z":214.2},{"x":-269.701,"y":3.827,"z":217.7},{"x":-273.901,"y":3.734,"z":222.4},{"x":-279.901,"y":3.639,"z":226.2},{"x":-284.301,"y":3.6,"z":230.999},{"x":-285.801,"y":3.499,"z":237.599},{"x":-287.501,"y":3.298,"z":243.399},{"x":-293.101,"y":3.195,"z":247.299},{"x":-298.801,"y":2.989,"z":250.499},{"x":-302.601,"y":2.879,"z":254.699},{"x":-307.901,"y":2.764,"z":258.399},{"x":-313.001,"y":2.744,"z":262.199},{"x":-316.601,"y":2.617,"z":265.399}];
                    nx.crashSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    nx.crashSeqIdx[NUM].stepIdx = 0;//, nx.crashSeqIdx[NUM].curPOS, nx.crashSeqIdx[NUM].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    nx.crashSeqIdx[NUM].anmSpeed = 50;//88;//8;
    //VISUALIZE-.
    // var instPath = nx.createPathEditor({aName:'bouncePATH', aPath:nx.crashSeqIdx[NUM].bouncePath.aPath});
    // if(instPath && instPath.aPath){nx.crashSeqIdx[NUM].bouncePath.aPath = instPath.aPath}
                }
                if(!nx.crashSeqIdx[NUM].initAnm){  //init next path point

                    nx.crashSeqIdx[NUM].curPOS = nx.crashSeqIdx[NUM].bouncePath.aPath[nx.crashSeqIdx[NUM].stepIdx];
                    nx.crashSeqIdx[NUM].nxtPOS = nx.crashSeqIdx[NUM].bouncePath.aPath[++nx.crashSeqIdx[NUM].stepIdx]
                    // nx.crashSeqIdx[NUM].curPOS = nx.crashSeqIdx[NUM].movepath.aPath[nx.crashSeqIdx[NUM].stepIdx];
                    // nx.crashSeqIdx[NUM].nxtPOS = nx.crashSeqIdx[NUM].movepath.aPath[++nx.crashSeqIdx[NUM].stepIdx]


                    nx.orbyMesh.rotationQuaternion = null;
                    nx.orbyMesh.rotation.copyFrom(nx.anmz.orby.rig.originBox.rotation)
                    nx.orbyMesh.rotation.y = 2.75; //WEIRD-FIX: Orby rots all messed up.





                    nx.crashSeqIdx[NUM].initAnm = 1;
                    if(!nx.crashSeqIdx[NUM].nxtPOS){  //END-ANM-.
                        nx.crashSeqIdx[3].on=0; //important - end SIMCAM-.
                        nx.crashSeqIdx[NUM].on=0; //important
                        nx.crashSeqIdx[NUM+1] = {on:1}; //next-.
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.crashSeqIdx[NUM].runAnm = 1;
                }  
                if(nx.crashSeqIdx[NUM].runAnm) { nx.crashSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    // $({curPOSx:nx.crashSeqIdx[NUM].curPOS.aPath.x,curPOSy:nx.crashSeqIdx[NUM].curPOS.aPath.y,curPOSz:nx.crashSeqIdx[NUM].curPOS.aPath.z}).
                    $({curPOSx:nx.crashSeqIdx[NUM].curPOS.x,curPOSy:nx.crashSeqIdx[NUM].curPOS.y,curPOSz:nx.crashSeqIdx[NUM].curPOS.z}).
                    // animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.aPath.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.aPath.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.aPath.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
                    animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH----------------------------------CRASH-PATH.
                        if(nx.cinemaStop){ $(this).stop(); nx.crashSeqIdx[4]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        // if(!nx.cinematicMode || (nx.ctrl.shift && nx.tenKey.mode === 'anm')){ nx.cinematicMode=0; return;} //PAUSEANM-. methodology
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        nx.camz.freeCam.setTarget( nx.orbyMesh.position );

                        if(nx.crashSeqIdx[NUM].stepIdx === 1 && !nx.crashSeqIdx[NUM].dust1){//TRIGGER-DUST-POOF-.
                            // debugger;
                            nx.crashSeqIdx[NUM].dust1=1;
                            nx.createDustPoof({pos:{x: -200, y: 6, z: 141}});
                        }
                        if(nx.crashSeqIdx[NUM].stepIdx === 6 && !nx.crashSeqIdx[NUM].dust2){//TRIGGER-DUST-POOF-.
                            // debugger;
                            nx.crashSeqIdx[NUM].dust2=1;
                            nx.createDustPoof({pos:{x: -220, y: 11, z: 165}});
                        }
                        if(nx.crashSeqIdx[NUM].stepIdx === 11 && !nx.crashSeqIdx[NUM].dust3){//TRIGGER-DUST-POOF-.
                            // debugger;
                            nx.crashSeqIdx[NUM].dust3=1;
                            nx.createDustPoof({pos:{x: -220, y: 11, z: 165}});
                        }


                        // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.crashSeqIdx[1].curPOS.rot.x,nx.crashSeqIdx[1].curPOS.rot.y,nx.crashSeqIdx[1].curPOS.rot.z,nx.crashSeqIdx[1].curPOS.rot.w);
                        // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                    }, complete:function(){ 
                            nx.crashSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });

                    // console.log('BOUNCE: '+nx.crashSeqIdx[NUM].stepIdx+'  of '+nx.crashSeqIdx[NUM].bouncePath.aPath.length)
                    // aRots:[{idx:0,x:-0.5}]}
                    //ROTATOR-.
                    for(var i = 0; i<nx.crashSeqIdx[NUM].bouncePath.aRot.length;i++ ){ //TODO optimization break if idx is > search (does not exist)
                        if(nx.crashSeqIdx[NUM].bouncePath.aRot[i].idx===nx.crashSeqIdx[NUM].stepIdx-1){
                            // console.log('ONE-TIME')
                            var rotstart = 0, rotend = 0, xrt=nx.crashSeqIdx[NUM].bouncePath.aRot[i].x || 0, yrt=nx.crashSeqIdx[NUM].bouncePath.aRot[i].y || 0, zrt=nx.crashSeqIdx[NUM].bouncePath.aRot[i].z || 0;
                            if(xrt){ rotstart=nx.orbyMesh.rotation.x; rotend=nx.crashSeqIdx[NUM].bouncePath.aRot[i].x;}
                            else if(yrt){ rotstart=nx.orbyMesh.rotation.y; rotend=nx.crashSeqIdx[NUM].bouncePath.aRot[i].y;}
                            else if(zrt){ rotstart=nx.orbyMesh.rotation.z; rotend=nx.crashSeqIdx[NUM].bouncePath.aRot[i].z;}
                            $({rot:rotstart}). //------------------------------------------------------ANM: ROT-.
                            animate({rot:rotend},{queue:false,duration:100,easing:'linear',
                            step: function(now) { //-------------------------------------------SKID ROT
                                if(nx.cinemaStop){ $(this).stop(); if(nx.cinemaStop){nx.crashSeqIdx[4]={on:1}; return;} console.log('stopped'); return;}//CINEMA-STOP-.
                                if(xrt){ nx.orbyMesh.rotation.x = this.rot}
                                else if(yrt){ nx.orbyMesh.rotation.y = this.rot} //this.rot + Math.PI/2}
                                else if(zrt){ nx.orbyMesh.rotation.z = this.rot}
                                    // console.log('ROT'+this.rot)
                            }, complete:function(){
                            //     console.log('end8')
                                } //NEXT-SUB-SEQUENCE-. 
                            }); 
                            break;
                        } 
                    }
                }


            }

            if(nx.crashSeqIdx[5] && nx.crashSeqIdx[5].on){ var NUM = 5;//ANM: orby ----------------------------------front flip
                if(nx.cinemaStop){nx.crashSeqIdx[5]={on:1}; return;}
                // nx.stopCinema = 1;
                // nx.cinematicMode = 0;

                  // nx.crashSeqIdx[NUM].on=0;
                if(!nx.crashSeqIdx[NUM].initSeq){ nx.crashSeqIdx[NUM].initSeq=1; //one time init
                    nx.crashSeqIdx[NUM].crashPath = {aPath:[],aRot:[{idx:4,x:0.25},{idx:8,x:0.5}]}


// nx.crashSeqIdx[NUM].crashPath.aPath = nx.editz.truncatePathPrecision(nx.crashSeqIdx[NUM].crashPath.aPath)

// console.log(JSON.stringify(nx.crashSeqIdx[NUM].crashPath.aPath));
// debugger;


nx.crashSeqIdx[NUM].crashPath.aPath = [{"x":-317.501,"y":3.3,"z":265.8},{"x":-322.001,"y":6.599,"z":266.8},{"x":-329.601,"y":9.598,"z":268.9},{"x":-336.301,"y":11.895,"z":271.2},{"x":-343.101,"y":14.289,"z":273.9},{"x":-351.701,"y":17.079,"z":277.5},{"x":-362.801,"y":20.164,"z":282.7},{"x":-372.601,"y":22.344,"z":287.3},{"x":-377.801,"y":23.217,"z":290.1},{"x":-383.501,"y":23.283,"z":293},{"x":-390.801,"y":23.341,"z":296.4},{"x":-395.701,"y":22.391,"z":298.8},{"x":-398.801,"y":21.332,"z":300.5},{"x":-402.301,"y":19.463,"z":302.3},{"x":-404.801,"y":17.685,"z":303.6},{"x":-407.201,"y":15.197,"z":304.8},{"x":-409.301,"y":12.799,"z":305.9},{"x":-410.701,"y":10.491,"z":306.7},{"x":-412.501,"y":7.673,"z":307.9},{"x":-414.201,"y":5.246,"z":309},{"x":-416.001,"y":3.009,"z":310},{"x":-417.801,"y":0.863,"z":311},{"x":-419.501,"y":-1.592,"z":312},{"x":-421.101,"y":-4.355,"z":313},{"x":-422.101,"y":-8.625,"z":314},{"x":-423.101,"y":-8.702,"z":315},{"x":-424.101,"y":-8.785,"z":316.3},{"x":-425.101,"y":-8.873,"z":317.3},{"x":-426.101,"y":-8.966,"z":318.3},{"x":-427.101,"y":-9.061,"z":319}];


                    // nx.crashSeqIdx[NUM].movepath.aPath = nx.bouncePath; 
                    // nx.crashSeqIdx[NUM].movepath.aPath = [{"x":-205.89999999999975,"y":4.483326909629298,"z":143.10000000000002},{"x":-210.40000000000055,"y":9.241470984809439,"z":149.60000000000127},{"x":-213.10000000000093,"y":9.491207360062958,"z":151.30000000000143},{"x":-214.10000000000093,"y":9.13203908596877,"z":152.30000000000143},{"x":-215.10000000000093,"y":8.063558185418799,"z":153.30000000000143},{"x":-216.10000000000093,"y":5.185449729990225,"z":154.30000000000143},{"x":-219.40000000000146,"y":6.297494986605756,"z":156.9000000000018},{"x":-220.1000000000014,"y":6.89957360304318,"z":158.60000000000196},{"x":-221.1000000000014,"y":6.9916648104541395,"z":159.60000000000196},{"x":-222.1000000000014,"y":6.273847630879899,"z":160.60000000000196},{"x":-224.0000000000016,"y":4.446300087689224,"z":162.80000000000223},{"x":-225.9000000000018,"y":5.50929742682743,"z":164.80000000000246},{"x":-227.60000000000196,"y":4.963209366650659,"z":166.9000000000027},{"x":-229.80000000000223,"y":4.008496403821425,"z":169.10000000000298},{"x":-232.0000000000025,"y":3.9457052121785665,"z":171.9000000000034},{"x":-234.8000000000029,"y":3.875463180552998,"z":175.30000000000393},{"x":-233.20000000000354,"y":3.7984721441058156,"z":179.20000000000425},{"x":-234.80000000000373,"y":3.715501371823322,"z":182.30000000000467},{"x":-238.30000000000388,"y":3.6273798802356936,"z":183.80000000000518},{"x":-240.50000000000406,"y":3.5349881501577727,"z":186.5000000000058},{"x":-244.5000000000041,"y":3.439249329215855,"z":188.3000000000063},{"x":-246.89999999999463,"y":3.3999999999994466,"z":191.09999999999528},{"x":-246.39999999999557,"y":3.2998334166471572,"z":195.69999999999516},{"x":-246.09999999999604,"y":3.0986693307955724,"z":199.4999999999952},{"x":-249.6999999999963,"y":2.995520206662079,"z":201.39999999999537},{"x":-253.3999999999959,"y":2.78941834230957,"z":202.59999999999502},{"x":-255.1999999999961,"y":2.679425538605366,"z":204.7999999999953},{"x":-258.4999999999968,"y":2.5646424733963706,"z":206.49999999999545},{"x":-261.5999999999977,"y":2.544217687239185,"z":208.29999999999595},{"x":-263.1999999999983,"y":2.417356090901162,"z":209.499999999996}]; 
                    nx.crashSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    nx.crashSeqIdx[NUM].stepIdx = 0;//, nx.crashSeqIdx[NUM].curPOS, nx.crashSeqIdx[NUM].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    nx.crashSeqIdx[NUM].anmSpeed = 50;//88;

                    nx.crashSeqIdx[NUM].smoothYCam = nx.orbyMesh.position.y;
                    // nx.crashSeqIdx[NUM].smoothXCam = nx.orbyMesh.position.x;
                    nx.crashSeqIdx[NUM].smoothZCam = nx.orbyMesh.position.z;

                    //VISUALIZE-.
                    // var instPath = nx.createPathEditor({aName:'crashPATH',aPath:nx.crashSeqIdx[NUM].crashPath.aPath});
                    // if(instPath && instPath.aPath){nx.crashSeqIdx[NUM].crashPath.aPath = instPath.aPath} //Edited Instance-.
                }
                if(!nx.crashSeqIdx[NUM].initAnm){  //init next path point
                    nx.crashSeqIdx[NUM].curPOS = nx.crashSeqIdx[NUM].crashPath.aPath[nx.crashSeqIdx[NUM].stepIdx];
                    // nx.crashSeqIdx[NUM].curPOS = nx.crashSeqIdx[NUM].movepath.aPath[nx.crashSeqIdx[NUM].stepIdx];
                    nx.crashSeqIdx[NUM].nxtPOS = nx.crashSeqIdx[NUM].crashPath.aPath[++nx.crashSeqIdx[NUM].stepIdx]
                    // nx.crashSeqIdx[NUM].nxtPOS = nx.crashSeqIdx[NUM].movepath.aPath[++nx.crashSeqIdx[NUM].stepIdx]
                    nx.crashSeqIdx[NUM].initAnm = 1;
                    if(!nx.crashSeqIdx[NUM].nxtPOS){  
                        nx.crashSeqIdx[NUM].on=0; //important
                        // nx.crashSeqIdx[NUM] = {on:1}; 
                        setTimeout(function(){
                            nx.crashSeqIdx[6] = {on:1}; //NEXT-.
                        }, 2000)
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.crashSeqIdx[NUM].runAnm = 1;
                }  
                if(nx.crashSeqIdx[NUM].runAnm) { nx.crashSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    // $({curPOSx:nx.crashSeqIdx[NUM].curPOS.aPath.x,curPOSy:nx.crashSeqIdx[NUM].curPOS.aPath.y,curPOSz:nx.crashSeqIdx[NUM].curPOS.aPath.z}).
                    // var smoothYCam = nx.orbyMesh.position.y;
                    // var smoothXCam = nx.orbyMesh.position.x;
                    $({curPOSx:nx.crashSeqIdx[NUM].curPOS.x,curPOSy:nx.crashSeqIdx[NUM].curPOS.y,curPOSz:nx.crashSeqIdx[NUM].curPOS.z}).
                    // animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.aPath.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.aPath.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.aPath.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
                    animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); nx.crashSeqIdx[5]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        // if(!nx.cinematicMode || (nx.ctrl.shift && nx.tenKey.mode === 'anm')){ nx.cinematicMode=0; return;} //PAUSEANM-. methodology
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        if(nx.crashSeqIdx[NUM].stepIdx === 20 && !nx.crashSeqIdx[NUM].dust4){//TRIGGER-DUST-POOF-.
                            // debugger;
                            nx.crashSeqIdx[NUM].dust4=1;
                            nx.createDustPoof({pos:{x: -410, y: 10, z: 304}});
                        }

                        nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,nx.crashSeqIdx[NUM].smoothYCam,nx.crashSeqIdx[NUM].smoothZCam) ); //SMOOTH-CAM-.
                        nx.orbyMesh.rotation.x -= 0.02; //spinning crash
// console.log('crashcam9')
                        // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.crashSeqIdx[1].curPOS.rot.x,nx.crashSeqIdx[1].curPOS.rot.y,nx.crashSeqIdx[1].curPOS.rot.z,nx.crashSeqIdx[1].curPOS.rot.w);
                        // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                    }, complete:function(){ 
                            nx.crashSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });

                    // console.log('CRASH: '+nx.crashSeqIdx[NUM].stepIdx+'  of '+nx.crashSeqIdx[NUM].crashPath.aPath.length)
                    //ANM: ROTATOR-. methodology
                    for(var i = 0; i<nx.crashSeqIdx[NUM].crashPath.aRot.length;i++ ){ 
                        if(nx.crashSeqIdx[NUM].crashPath.aRot[i].idx===nx.crashSeqIdx[NUM].stepIdx-1){
                            // debugger;
                        } 
                    }
                    
                }


            }
            if(nx.crashSeqIdx[6] && nx.crashSeqIdx[6].on){ var NUM = 6; nx.crashSeqIdx[NUM].on = 0;
                if(nx.cinemaStop){nx.crashSeqIdx[6]={on:1}; return;}
                    // var curFOC = nx.scene.activeCamera.getTarget();
                    // var curFOC = nx.orbyMesh.position;
                    // var tgtFOC = nx.BV3(0,200,0)

                    // $({xFOC:curFOC.x,yFOC:curFOC.y,zFOC:curFOC.z}).
                    // // animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.aPath.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.aPath.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.aPath.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
                    // animate({xFOC:tgtFOC.x,yFOC:tgtFOC.y,zFOC:tgtFOC.z},{queue:false,duration:5000,easing:'swing',
                    // step: function(now) { //ANM: FOC
                    //     nx.camz.freeCam.setTarget( nx.BV3(this.xFOC,this.yFOC,this.zFOC) ); //SMOOTH-CAM-.
                    // }, complete:function(){ 


                        nx.scene.activeCamera.position.copyFrom({x: -325, y: 8, z: 292}); //low view crash position
                        var tgtPOS = nx.BV3(-331,8,293) //sand burm view
                        nx.scene.activeCamera.setTarget(tgtPOS); //CAM FOC: on sand mountain



//first look at sand burm
// undefined
// nx.scene.activeCamera.position
// Vector3 {x: -324.90825082824165, y: 8.251384479507614, z: 291.6728769075706}
// nx.scene.activeCamera.position
// Vector3 {x: -331.1696395533409, y: 8.191759058086788, z: 292.82251177120855}




                        setTimeout(function(){
                            // debugger;
                            if(nx.cinemaStop){nx.crashSeqIdx[6]={on:1}; return;}
                            // nx.stopCinema = 1;
                            // nx.cinematicMode = 0;

                            // nx.crashSeqIdx[NUM+1] = {on:1}; //next 
                            nx.cinematicMode=0;//Start new cinematic-.
                            nx.zapScanSeqIdx[0] = {on:1}; nx.runCinematicSequence("ZapScanSequence")
                        },2000)





                    // debugger;
                // var meshTask = nx.assetsManager.addMeshTask("task5", "", "./copyrightnetcinematics/3d/", "darcbot1.babylon");
                // meshTask.onSuccess = function (task) {
                //     // debugger;
                //     nx.darkbot = task.loadedMeshes[0]
                //     nx.darkbot.position = new BABYLON.Vector3(100,15,350);
                //     // nx.darkbot.showBoundingBox();
                //     nx.editz.createMasterEditor(nx.darkbot);
                // }

                // nx.engine.loadingUIText = "";
                // nx.assetsManager.load();  // IMPORTANT.

                //just after orby crash - look pyramid
                // debugger;
                //TODO update TXT MSGS
                // nx.setTXT({txt:'1st Mission COMPLETE! Land on Betamoon',type:'mission'}) //todo
                // nx.setTXT({txt:'MISSION: Why did Spacetrain crash?',type:'mission'}) //todo
                // nx.setTXT({txt:'STEP: Investigate Spacecaboose.',type:'step'}) //todo
                // nx.setTXT({txt:'FACT: Spacecaboose is Empty.',type:'fact'}) //todo
                // nx.setTXT({txt:'MISSION: Find Spacecabin.',type:'mission'}) //todo
                // nx.setTXT({txt:'LEVEL UP! Northern Oxy Lake',type:'levelup'}) //todo


            }




        });
    } else if(seqName==="ZapScanSequence"){ //-----------------------------------------------------------------------------ZAP SCAN-SEQUENCE---.
        nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as SEQIDX.

            if(nx.zapScanSeqIdx[0] && nx.zapScanSeqIdx[0].on){ var NUM = 0; 
                // nx.zapScanSeqIdx[NUM].on = 0;
                if(nx.cinemaStop){nx.zapScanSeqIdx[0]={on:1}; return;}

                //Flyby CAM POS-.
                // nx.camz.freeCam.position.copyFrom({x: -196.7402073730567, y: 13.461529498321113, z: 249.03460769625465})  //MID-PASSING-.
                nx.camz.freeCam.position.copyFrom({x: -203, y: 6.504815881513393, z: 227.9945152407537})  //bottom pyramid -closeup -PASSING-.

// nx.scene.activeCamera.position
// Vector3 
// nx.scene.activeCamera.position
// Vector3 {x: -200.7490602210358, y: 8.60662389857969, z: 221.78264108131245}


              
                  // nx.zapScanSeqIdx[NUM].on=0;
                if(!nx.zapScanSeqIdx[NUM].initSeq){ nx.zapScanSeqIdx[NUM].initSeq=1; //one time init      ----------------ANM BOT - DOWN
                    


                    nx.zapScanSeqIdx[NUM].zapPath1 = {aPath:[],aRot:[{idx:46,y:1.9}]}

                    //9 - length;


                    nx.kiloBotMesh1.rotation.y = 2.4;
                    nx.kiloBotMesh1.rotation.x = 0.2;



// debugger;
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = nx.editz.decomposeANMPath(nx.zapScanSeqIdx[NUM].zapPath1.aPath) //reduces paths within ANMPATH
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = nx.editz.decomposeANMPath(nx.zapScanSeqIdx[NUM].zapPath1.aPath) //reduces paths within ANMPATH
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = nx.editz.decomposeANMPath(nx.zapScanSeqIdx[NUM].zapPath1.aPath) //reduces paths within ANMPATH
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = nx.editz.truncatePathPrecision(nx.zapScanSeqIdx[NUM].zapPath1.aPath)


// nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":226.633,"z":36.748},{"x":-40.55,"y":220.05,"z":40.977},{"x":-44.222,"y":213.467,"z":45.205},{"x":-47.893,"y":206.883,"z":49.434},{"x":-51.564,"y":200.3,"z":53.662},{"x":-55.236,"y":193.717,"z":57.891},{"x":-58.907,"y":187.133,"z":62.12},{"x":-62.579,"y":180.55,"z":66.348},{"x":-66.25,"y":173.967,"z":70.577},{"x":-70.446,"y":166.561,"z":75.409},{"x":-74.642,"y":159.037,"z":80.242},{"x":-78.838,"y":151.513,"z":85.075},{"x":-82.837,"y":144.224,"z":89.681},{"x":-87.033,"y":136.818,"z":94.514},{"x":-91.228,"y":129.294,"z":99.346},{"x":-95.424,"y":121.77,"z":104.179},{"x":-99.62,"y":114.247,"z":109.012},{"x":-103.816,"y":106.723,"z":113.845},{"x":-108.012,"y":99.199,"z":118.677},{"x":-111.814,"y":92.263,"z":123.057},{"x":-115.486,"y":85.68,"z":127.286},{"x":-119.157,"y":79.096,"z":131.514},{"x":-122.829,"y":72.513,"z":135.743},{"x":-126.5,"y":65.93,"z":139.971},{"x":-130.171,"y":59.346,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":7,"z":182.258},{"x":-166.885,"y":7,"z":186.486},{"x":-170.557,"y":7,"z":190.715},{"x":-174.228,"y":7,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":7,"z":203.401},{"x":-185.242,"y":7,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":7,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082},{"x":-235.868,"y":7,"z":215.001},{"x":-241.363,"y":7,"z":213.92},{"x":-246.858,"y":7,"z":212.84},{"x":-252.353,"y":7,"z":211.759},{"x":-257.848,"y":7,"z":210.679},{"x":-263.343,"y":7,"z":209.598},{"x":-268.837,"y":7,"z":208.518},{"x":-274.332,"y":7,"z":207.437},{"x":-274.332,"y":7,"z":207.437},{"x":-274.332,"y":7,"z":207.437},{"x":-274.332,"y":7,"z":207.437},{"x":-274.332,"y":7,"z":207.437}];
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":226.633,"z":36.748},{"x":-40.55,"y":220.05,"z":40.977},{"x":-44.222,"y":213.467,"z":45.205},{"x":-47.893,"y":206.883,"z":49.434},{"x":-51.564,"y":200.3,"z":53.662},{"x":-55.236,"y":193.717,"z":57.891},{"x":-58.907,"y":187.133,"z":62.12},{"x":-62.579,"y":180.55,"z":66.348},{"x":-66.25,"y":173.967,"z":70.577},{"x":-70.446,"y":166.561,"z":75.409},{"x":-74.642,"y":159.037,"z":80.242},{"x":-78.838,"y":151.513,"z":85.075},{"x":-82.837,"y":144.224,"z":89.681},{"x":-87.033,"y":136.818,"z":94.514},{"x":-91.228,"y":129.294,"z":99.346},{"x":-95.424,"y":121.77,"z":104.179},{"x":-99.62,"y":114.247,"z":109.012},{"x":-103.816,"y":106.723,"z":113.845},{"x":-108.012,"y":99.199,"z":118.677},{"x":-111.814,"y":92.263,"z":123.057},{"x":-115.486,"y":85.68,"z":127.286},{"x":-119.157,"y":79.096,"z":131.514},{"x":-122.829,"y":72.513,"z":135.743},{"x":-126.5,"y":65.93,"z":139.971},{"x":-130.171,"y":59.346,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":7,"z":182.258},{"x":-166.885,"y":7,"z":186.486},{"x":-170.557,"y":7,"z":190.715},{"x":-174.228,"y":7,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":7,"z":203.401},{"x":-185.242,"y":7,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":7,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082},{"x":-235.868,"y":7,"z":215.001},{"x":-241.363,"y":7,"z":213.92},{"x":-246.858,"y":7,"z":212.84},{"x":-252.353,"y":7,"z":211.759},{"x":-257.848,"y":7,"z":210.679},{"x":-263.343,"y":7,"z":209.598}];
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":226.633,"z":36.748},{"x":-40.55,"y":220.05,"z":40.977},{"x":-44.222,"y":213.467,"z":45.205},{"x":-47.893,"y":206.883,"z":49.434},{"x":-51.564,"y":200.3,"z":53.662},{"x":-55.236,"y":193.717,"z":57.891},{"x":-58.907,"y":187.133,"z":62.12},{"x":-62.579,"y":180.55,"z":66.348},{"x":-66.25,"y":173.967,"z":70.577},{"x":-70.446,"y":166.561,"z":75.409},{"x":-74.642,"y":159.037,"z":80.242},{"x":-78.838,"y":151.513,"z":85.075},{"x":-82.837,"y":144.224,"z":89.681},{"x":-87.033,"y":136.818,"z":94.514},{"x":-91.228,"y":129.294,"z":99.346},{"x":-95.424,"y":121.77,"z":104.179},{"x":-99.62,"y":114.247,"z":109.012},{"x":-103.816,"y":106.723,"z":113.845},{"x":-108.012,"y":99.199,"z":118.677},{"x":-111.814,"y":92.263,"z":123.057},{"x":-115.486,"y":85.68,"z":127.286},{"x":-119.157,"y":79.096,"z":131.514},{"x":-122.829,"y":72.513,"z":135.743},{"x":-126.5,"y":65.93,"z":139.971},{"x":-130.171,"y":59.346,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":7,"z":182.258},{"x":-166.885,"y":7,"z":186.486},{"x":-170.557,"y":7,"z":190.715},{"x":-174.228,"y":7,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":7,"z":203.401},{"x":-185.242,"y":7,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":7,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082},{"x":-235.868,"y":7,"z":215.001},{"x":-241.363,"y":7,"z":213.92}];
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":226.633,"z":36.748},{"x":-40.55,"y":220.05,"z":40.977},{"x":-44.222,"y":213.467,"z":45.205},{"x":-47.893,"y":206.883,"z":49.434},{"x":-51.564,"y":200.3,"z":53.662},{"x":-55.236,"y":193.717,"z":57.891},{"x":-58.907,"y":187.133,"z":62.12},{"x":-62.579,"y":180.55,"z":66.348},{"x":-66.25,"y":173.967,"z":70.577},{"x":-70.446,"y":166.561,"z":75.409},{"x":-74.642,"y":159.037,"z":80.242},{"x":-78.838,"y":151.513,"z":85.075},{"x":-82.837,"y":144.224,"z":89.681},{"x":-87.033,"y":136.818,"z":94.514},{"x":-91.228,"y":129.294,"z":99.346},{"x":-95.424,"y":121.77,"z":104.179},{"x":-99.62,"y":114.247,"z":109.012},{"x":-103.816,"y":106.723,"z":113.845},{"x":-108.012,"y":99.199,"z":118.677},{"x":-111.814,"y":92.263,"z":123.057},{"x":-115.486,"y":85.68,"z":127.286},{"x":-119.157,"y":79.096,"z":131.514},{"x":-122.829,"y":72.513,"z":135.743},{"x":-126.5,"y":65.93,"z":139.971},{"x":-130.171,"y":59.346,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":11.399,"z":182.258},{"x":-166.885,"y":13.599,"z":186.486},{"x":-170.557,"y":13.599,"z":190.715},{"x":-174.228,"y":11.399,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":9.599,"z":203.401},{"x":-185.242,"y":9.599,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":8.499,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082},{"x":-235.868,"y":7,"z":215.001},{"x":-241.363,"y":7,"z":213.92},{"x":-246.858,"y":7,"z":212.84},{"x":-252.353,"y":7,"z":211.759},{"x":-257.848,"y":7,"z":210.679},{"x":-263.343,"y":7,"z":209.598}];
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":226.633,"z":36.748},{"x":-40.55,"y":220.05,"z":40.977},{"x":-44.222,"y":213.467,"z":45.205},{"x":-47.893,"y":206.883,"z":49.434},{"x":-51.564,"y":200.3,"z":53.662},{"x":-55.236,"y":193.717,"z":57.891},{"x":-58.907,"y":187.133,"z":62.12},{"x":-62.579,"y":180.55,"z":66.348},{"x":-66.25,"y":173.967,"z":70.577},{"x":-70.446,"y":166.561,"z":75.409},{"x":-74.642,"y":159.037,"z":80.242},{"x":-78.838,"y":151.513,"z":85.075},{"x":-82.837,"y":144.224,"z":89.681},{"x":-87.033,"y":136.818,"z":94.514},{"x":-91.228,"y":129.294,"z":99.346},{"x":-95.424,"y":121.77,"z":104.179},{"x":-99.62,"y":114.247,"z":109.012},{"x":-103.816,"y":106.723,"z":113.845},{"x":-108.012,"y":99.199,"z":118.677},{"x":-111.814,"y":92.263,"z":123.057},{"x":-115.486,"y":85.68,"z":127.286},{"x":-119.157,"y":79.096,"z":131.514},{"x":-122.829,"y":72.513,"z":135.743},{"x":-126.5,"y":65.93,"z":139.971},{"x":-130.171,"y":59.346,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":11.399,"z":182.258},{"x":-166.885,"y":13.599,"z":186.486},{"x":-170.557,"y":13.599,"z":190.715},{"x":-174.228,"y":11.399,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":9.599,"z":203.401},{"x":-185.242,"y":9.599,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":8.499,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082},{"x":-235.868,"y":7,"z":215.001}];
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":226.633,"z":36.748},{"x":-40.55,"y":224.249,"z":40.977},{"x":-44.222,"y":216.866,"z":45.205},{"x":-47.893,"y":210.282,"z":49.434},{"x":-51.564,"y":203.199,"z":53.662},{"x":-55.236,"y":196.116,"z":57.891},{"x":-58.907,"y":189.032,"z":62.12},{"x":-62.579,"y":181.949,"z":66.348},{"x":-66.25,"y":174.866,"z":70.577},{"x":-70.446,"y":166.96,"z":75.409},{"x":-74.642,"y":159.037,"z":80.242},{"x":-78.838,"y":151.513,"z":85.075},{"x":-82.837,"y":144.224,"z":89.681},{"x":-87.033,"y":136.818,"z":94.514},{"x":-91.228,"y":129.294,"z":99.346},{"x":-95.424,"y":121.77,"z":104.179},{"x":-99.62,"y":114.247,"z":109.012},{"x":-103.816,"y":106.723,"z":113.845},{"x":-108.012,"y":99.199,"z":118.677},{"x":-111.814,"y":92.263,"z":123.057},{"x":-115.486,"y":85.68,"z":127.286},{"x":-119.157,"y":79.096,"z":131.514},{"x":-122.829,"y":72.513,"z":135.743},{"x":-126.5,"y":65.93,"z":139.971},{"x":-130.171,"y":59.346,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":11.399,"z":182.258},{"x":-166.885,"y":13.599,"z":186.486},{"x":-170.557,"y":13.599,"z":190.715},{"x":-174.228,"y":11.399,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":9.599,"z":203.401},{"x":-185.242,"y":9.599,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":8.499,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082},{"x":-235.868,"y":7,"z":215.001}];
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":227.632,"z":36.748},{"x":-40.55,"y":226.048,"z":40.977},{"x":-44.222,"y":223.165,"z":45.205},{"x":-47.893,"y":219.281,"z":49.434},{"x":-51.564,"y":209.298,"z":53.662},{"x":-55.236,"y":201.915,"z":57.891},{"x":-58.907,"y":196.631,"z":62.12},{"x":-62.579,"y":190.748,"z":66.348},{"x":-66.25,"y":183.665,"z":70.577},{"x":-70.446,"y":174.859,"z":75.409},{"x":-74.642,"y":164.936,"z":80.242},{"x":-78.838,"y":154.212,"z":85.075},{"x":-82.837,"y":147.923,"z":89.681},{"x":-87.033,"y":141.117,"z":94.514},{"x":-91.228,"y":132.293,"z":99.346},{"x":-95.424,"y":123.469,"z":104.179},{"x":-99.62,"y":114.646,"z":109.012},{"x":-103.816,"y":107.022,"z":113.845},{"x":-108.012,"y":99.398,"z":118.677},{"x":-111.814,"y":92.263,"z":123.057},{"x":-115.486,"y":85.68,"z":127.286},{"x":-119.157,"y":79.096,"z":131.514},{"x":-122.829,"y":72.513,"z":135.743},{"x":-126.5,"y":65.93,"z":139.971},{"x":-130.171,"y":59.346,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":11.399,"z":182.258},{"x":-166.885,"y":13.599,"z":186.486},{"x":-170.557,"y":13.599,"z":190.715},{"x":-174.228,"y":11.399,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":9.599,"z":203.401},{"x":-185.242,"y":9.599,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":8.499,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082},{"x":-235.868,"y":7,"z":215.001}];      
// nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":227.632,"z":36.748},{"x":-40.55,"y":226.048,"z":40.977},{"x":-44.222,"y":223.165,"z":45.205},{"x":-47.893,"y":219.281,"z":49.434},{"x":-51.564,"y":209.298,"z":53.662},{"x":-55.236,"y":201.915,"z":57.891},{"x":-58.907,"y":196.631,"z":62.12},{"x":-62.579,"y":190.748,"z":66.348},{"x":-66.25,"y":183.665,"z":70.577},{"x":-70.446,"y":174.859,"z":75.409},{"x":-74.642,"y":164.936,"z":80.242},{"x":-78.838,"y":156.211,"z":85.075},{"x":-82.837,"y":148.422,"z":89.681},{"x":-87.033,"y":141.316,"z":94.514},{"x":-91.228,"y":133.992,"z":99.346},{"x":-95.424,"y":125.968,"z":104.179},{"x":-99.62,"y":117.645,"z":109.012},{"x":-103.816,"y":109.121,"z":113.845},{"x":-108.012,"y":101.097,"z":118.677},{"x":-111.814,"y":93.662,"z":123.057},{"x":-115.486,"y":86.179,"z":127.286},{"x":-119.157,"y":79.595,"z":131.514},{"x":-122.829,"y":72.912,"z":135.743},{"x":-126.5,"y":66.229,"z":139.971},{"x":-130.171,"y":59.546,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":11.399,"z":182.258},{"x":-166.885,"y":13.599,"z":186.486},{"x":-170.557,"y":13.599,"z":190.715},{"x":-174.228,"y":11.399,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":9.599,"z":203.401},{"x":-185.242,"y":9.599,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":8.499,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082},{"x":-235.868,"y":7,"z":215.001}];
nx.zapScanSeqIdx[NUM].zapPath1.aPath = [{"x":-25.406,"y":228,"z":23.534},{"x":-29.536,"y":228,"z":28.291},{"x":-33.208,"y":228,"z":32.519},{"x":-36.879,"y":227.632,"z":36.748},{"x":-40.55,"y":226.048,"z":40.977},{"x":-44.222,"y":223.165,"z":45.205},{"x":-47.893,"y":219.281,"z":49.434},{"x":-51.564,"y":209.298,"z":53.662},{"x":-55.236,"y":201.915,"z":57.891},{"x":-58.907,"y":196.631,"z":62.12},{"x":-62.579,"y":190.748,"z":66.348},{"x":-66.25,"y":183.665,"z":70.577},{"x":-70.446,"y":174.859,"z":75.409},{"x":-74.642,"y":164.936,"z":80.242},{"x":-78.838,"y":156.211,"z":85.075},{"x":-82.837,"y":148.422,"z":89.681},{"x":-87.033,"y":141.316,"z":94.514},{"x":-91.228,"y":133.992,"z":99.346},{"x":-95.424,"y":125.968,"z":104.179},{"x":-99.62,"y":117.645,"z":109.012},{"x":-103.816,"y":109.121,"z":113.845},{"x":-108.012,"y":101.097,"z":118.677},{"x":-111.814,"y":93.662,"z":123.057},{"x":-115.486,"y":86.179,"z":127.286},{"x":-119.157,"y":79.595,"z":131.514},{"x":-122.829,"y":72.912,"z":135.743},{"x":-126.5,"y":66.229,"z":139.971},{"x":-130.171,"y":59.546,"z":144.2},{"x":-133.843,"y":52.763,"z":148.429},{"x":-137.514,"y":46.179,"z":152.657},{"x":-141.186,"y":39.596,"z":156.886},{"x":-144.857,"y":33.013,"z":161.115},{"x":-148.528,"y":26.429,"z":165.343},{"x":-152.2,"y":19.846,"z":169.572},{"x":-155.871,"y":13.263,"z":173.801},{"x":-159.542,"y":7,"z":178.029},{"x":-163.214,"y":11.399,"z":182.258},{"x":-166.885,"y":13.599,"z":186.486},{"x":-170.557,"y":13.599,"z":190.715},{"x":-174.228,"y":11.399,"z":194.944},{"x":-177.899,"y":7,"z":199.172},{"x":-181.571,"y":9.599,"z":203.401},{"x":-185.242,"y":9.599,"z":207.63},{"x":-188.914,"y":7,"z":211.858},{"x":-192.585,"y":8.499,"z":216.087},{"x":-196.256,"y":7,"z":220.316},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-198.092,"y":7,"z":222.43},{"x":-202.9,"y":7,"z":221.484},{"x":-208.395,"y":7,"z":220.404},{"x":-213.889,"y":7,"z":219.323},{"x":-219.384,"y":7,"z":218.243},{"x":-224.879,"y":7,"z":217.162},{"x":-230.374,"y":7,"z":216.082}];

                    nx.zapScanSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    nx.zapScanSeqIdx[NUM].stepIdx = 0;//, nx.zapScanSeqIdx[NUM].curPOS, nx.zapScanSeqIdx[NUM].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    nx.zapScanSeqIdx[NUM].anmSpeed = 200; //8 88


                    nx.kiloBotMesh1.searching = 0;

                    // nx.zapScanSeqIdx[NUM].smoothYCam = nx.orbyMesh.position.y;
                    // nx.zapScanSeqIdx[NUM].smoothZCam = nx.orbyMesh.position.z;

                    //VISUALIZE-.
                    // var instPath = nx.createPathEditor({aName:'zapPath1',aPath:nx.zapScanSeqIdx[NUM].zapPath1.aPath});
                    // if(instPath && instPath.aPath){nx.zapScanSeqIdx[NUM].zapPath1.aPath = instPath.aPath} //Edited Instance-.
                }
                if(!nx.zapScanSeqIdx[NUM].initAnm){  //init next path point
                    nx.zapScanSeqIdx[NUM].curPOS = nx.zapScanSeqIdx[NUM].zapPath1.aPath[nx.zapScanSeqIdx[NUM].stepIdx];
                    nx.zapScanSeqIdx[NUM].nxtPOS = nx.zapScanSeqIdx[NUM].zapPath1.aPath[++nx.zapScanSeqIdx[NUM].stepIdx]
                    nx.zapScanSeqIdx[NUM].initAnm = 1;
                    if(!nx.zapScanSeqIdx[NUM].nxtPOS){  
                        nx.zapScanSeqIdx[NUM].on=0; //important
                        nx.zapScanSeqIdx[NUM+1] = {on:1}; //NEXT-.
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.zapScanSeqIdx[NUM].runAnm = 1;
                }  


        // nx.stopCinema = 1;
        // nx.cinematicMode = 0;


                if(nx.zapScanSeqIdx[NUM].runAnm) { nx.zapScanSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.zapScanSeqIdx[NUM].curPOS.x,curPOSy:nx.zapScanSeqIdx[NUM].curPOS.y,curPOSz:nx.zapScanSeqIdx[NUM].curPOS.z}).
                    animate({curPOSx:nx.zapScanSeqIdx[NUM].nxtPOS.x,curPOSy:nx.zapScanSeqIdx[NUM].nxtPOS.y,curPOSz:nx.zapScanSeqIdx[NUM].nxtPOS.z},{queue:false,duration:nx.zapScanSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM: - ZAP-BOT -FROM-POINT-TO-POINT-ON-PATH-.-----------------------ZAP-DOWN-PYRAMID-.
                        if(nx.cinemaStop){ $(this).stop(); nx.zapScanSeqIdx[0]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        // if(!nx.cinematicMode || (nx.ctrl.shift && nx.tenKey.mode === 'anm')){ nx.cinematicMode=0; return;} //PAUSEANM-. methodology
                        nx.kiloBotMesh1.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
                        // nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
                        // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 

                        nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) ); //FOLLOW-CAM-.
                    }, complete:function(){ 
                            nx.zapScanSeqIdx[NUM].initAnm = 0; 

                            // nx.zapScanSeqIdx[NUM+1]={on:1}; //NEXT-ANM-.


                        } //NEXT-SUB-SEQUENCE-. 
                    });

                    // console.log('ZAP: '+nx.zapScanSeqIdx[NUM].stepIdx+'  of '+nx.zapScanSeqIdx[NUM].zapPath1.aPath.length)
                    //ANM: ROTATOR-. methodology
                    for(var i = 0; i<nx.zapScanSeqIdx[NUM].zapPath1.aRot.length;i++ ){ 
                        if(nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].idx===nx.zapScanSeqIdx[NUM].stepIdx-1){
                            console.log('ONE-TIME')
                            var rotstart = 0, rotend = 0, xrt=nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].x || 0, yrt=nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].y || 0, zrt=nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].z || 0;
                            if(xrt){ rotstart=nx.kiloBotMesh1.rotation.x; rotend=nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].x;}
                            else if(yrt){ rotstart=nx.kiloBotMesh1.rotation.y; rotend=nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].y;}
                            else if(zrt){ rotstart=nx.kiloBotMesh1.rotation.z; rotend=nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].z;}
                            $({rot:rotstart}). //------------------------------------------------------ANM: ROT-.
                            animate({rot:rotend},{queue:false,duration:100,easing:'linear',
                            step: function(now) { //-------------------------------------------SKID ROT
                                if(nx.cinemaStop){ $(this).stop(); nx.zapScanSeqIdx[0]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                                if(xrt){ nx.kiloBotMesh1.rotation.x = this.rot}
                                else if(yrt){ nx.kiloBotMesh1.rotation.y = this.rot}
                                else if(zrt){ nx.kiloBotMesh1.rotation.z = this.rot}
                                    console.log('ROT'+this.rot)
                            }, complete:function(){
                            //     console.log('end8')
                                } //NEXT-SUB-SEQUENCE-. 
                            }); 
                            break;
                        } 
                        // else if(nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].idx > nx.zapScanSeqIdx[NUM].stepIdx-1){console.log('rot break on '+nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].idx +' < ' + nx.zapScanSeqIdx[NUM].stepIdx-1);break;} //optimization break if idx is > search (does not exist)
                    }
                    
                }
            }
           if(nx.zapScanSeqIdx[1] && nx.zapScanSeqIdx[1].on){ var NUM = 1; //ZAP-SCANNING-spaceJunk-.
                nx.zapScanSeqIdx[NUM].on = 0;
                if(nx.cinemaStop){nx.zapScanSeqIdx[1]={on:1}; return;}
                if(!nx.zapScanSeqIdx[NUM].initSeq){ nx.zapScanSeqIdx[NUM].initSeq=1; //one time init ------ANM: BOT UP


                    //Arrive at Scan / Start scanning
                    console.log('search1 on')
                    nx.kiloBotMesh1.searching = 1;




                    setTimeout(function(){ 
                        if(nx.cinemaStop){nx.zapScanSeqIdx[1]={on:1}; return;}
// debugger;
                        //CAM POS: mid, over the shoulder
                        nx.camz.freeCam.position.copyFrom({x: -130.5586698413899, y: 17.779687901514585, z: 263.4697962533402})  //CLOSE-UP-.
                        nx.scene.activeCamera.setTarget( new nx.BV32({x: -138.33831687325923, y: 17.656844203922134, z: 262.35931945571065}));

                        setTimeout(function(){ 
                            if(nx.cinemaStop){nx.zapScanSeqIdx[1]={on:1}; return;}
                            //CAM POS: long birdseye cam
                            nx.camz.freeCam.position.copyFrom({x: -75.97024617569491, y: 219.35071194314025, z: 194.5190495522716})  //CLOSE-UP-.
                            nx.camz.freeCam.setTarget( new nx.BV32({x: -90.25610402551536, y: 207.08212337326484, z: 197.1301012628388}));

                            setTimeout(function(){ //HIT TARGET
                                if(nx.cinemaStop){nx.zapScanSeqIdx[1]={on:1}; return;}
                                var tgtPOS = nx.BV32({x: -268.7693036422465, y: 0.5208297617480848, z: 222.3401839212607})
                               
                            //    debugger; stops at zapbot stop scan train
                            
                            
                            //todo: this has changed ...
                               //aStrataAmentoa
                                // nx.kiloBotMesh1.setScanTarget(tgtPOS)


                                setTimeout(function(){ //CONCLUSION-.
                                    if(nx.cinemaStop){nx.zapScanSeqIdx[1]={on:1}; return;}

                                    //TODO could add a camera zoom here on to zapbot close up - for effect-. spaceJunk on zoom complete

                                    //CAM POS: tgt Zapbot "spaceJunk"-.
                                    nx.camz.freeCam.position.copyFrom({x: -328, y: 2.5, z: 245}) 
                                    nx.camz.freeCam.setTarget( new nx.BV32({x: -313, y: 4.2, z: 240}));

                                    // nx.ui.flashCanvasMSG({txt:'RUBBISH!',dur:2000, txtEnd:function(){
                                    nx.ui.flashCanvasMSG({txt:'JUNK!',txtIcon:'zapbot',dur:2000, txtEnd:function(){
                                        // debugger;


                                        //return flyby cam of zap scan
                                        // nx.camz.freeCam.position.copyFrom({x: -203, y: 6.504815881513393, z: 227.9945152407537})  //CLOSE-UP-.
                                        // nx.scene.activeCamera.setTarget( new nx.BV32({x: -138.33831687325923, y: 17.656844203922134, z: 262.35931945571065}));



                                        //stoplaser//todo upgrade to nx.kiloBotMesh1.stopSearching();
                                        for(var i = 0; i<nx.kiloBotMesh1.rayLines.length;i++){ nx.kiloBotMesh1.rayLines[i].dispose();  } //TODO perf reuse rays
                                        nx.kiloBotMesh1.rayLines = []; //clean up lasers-.

                                        $({rot:nx.kiloBotMesh1.rotation.y}). //------------------------------------------------------ANM: ROT-.
                                        animate({rot:-1},{queue:false,duration:100,easing:'linear',
                                        step: function(now) { //-------------------------------------------SKID ROT
                                            if(nx.cinemaStop){ $(this).stop(); nx.zapScanSeqIdx[0]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                                            nx.kiloBotMesh1.rotation.y = this.rot;
                                            nx.scene.activeCamera.setTarget(nx.kiloBotMesh1.position);
                                        }, complete:function(){
                                                nx.zapScanSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-.
                                            } //NEXT-SUB-SEQUENCE-. 
                                        }); 
                                    }});         //on scan of wreckage-. 
                                },2000)
                            },2000)
                        },2000)
                    },2000) //scanning
                }
           }
           if(nx.zapScanSeqIdx[2] && nx.zapScanSeqIdx[2].on){ var NUM = 2; 
                if(nx.cinemaStop){nx.zapScanSeqIdx[2]={on:1}; return;}
                // nx.zapScanSeqIdx[NUM].on = 0;
                if(!nx.zapScanSeqIdx[NUM].initSeq){ nx.zapScanSeqIdx[NUM].initSeq=1; //one time init ------ANM: BOT UP
                    // nx.zapScanSeqIdx[NUM].zapPath2 = {aPath:[],aRot:[{idx:0,y:-1},{idx:8,x:0.2}]}

                    nx.kiloBotMesh1.rotation.y = -1;
                    nx.kiloBotMesh1.rotation.x = 0.1;

                    nx.zapScanSeqIdx[NUM].zapPath2 = {aPath:[],aRot:[]}

// console.log(JSON.stringify(nx.zapScanSeqIdx[NUM].zapPath2.aPath))

nx.zapScanSeqIdx[NUM].zapPath2.aPath = [{"x":-243.633,"y":8,"z":190.608},{"x":-239.155,"y":8,"z":187.245},{"x":-234.678,"y":8,"z":183.882},{"x":-230.2,"y":8,"z":180.519},{"x":-225.722,"y":8,"z":177.156},{"x":-221.245,"y":8,"z":173.792},{"x":-216.767,"y":8,"z":170.429},{"x":-212.289,"y":8,"z":167.066},{"x":-207.812,"y":8,"z":163.703},{"x":-203.334,"y":8,"z":160.34},{"x":-198.856,"y":8,"z":156.977},{"x":-194.379,"y":8,"z":153.614},{"x":-189.901,"y":8,"z":150.251},{"x":-185.423,"y":12.899,"z":146.888},{"x":-181.505,"y":17.573,"z":143.946},{"x":-177.028,"y":23.308,"z":140.582},{"x":-172.55,"y":29.541,"z":137.219},{"x":-168.072,"y":35.675,"z":133.856},{"x":-163.595,"y":42.309,"z":130.493},{"x":-159.117,"y":49.943,"z":127.13},{"x":-154.64,"y":58.377,"z":123.767},{"x":-150.162,"y":66.011,"z":120.404},{"x":-145.684,"y":73.244,"z":117.041},{"x":-140.807,"y":80.845,"z":113.378},{"x":-135.689,"y":89.012,"z":109.534},{"x":-130.572,"y":96.979,"z":105.691},{"x":-125.455,"y":104.346,"z":101.848},{"x":-120.337,"y":111.714,"z":98.004},{"x":-115.22,"y":119.481,"z":94.161},{"x":-110.103,"y":127.949,"z":90.317},{"x":-104.985,"y":136.316,"z":86.474},{"x":-100.508,"y":142.867,"z":83.111},{"x":-96.03,"y":149.5,"z":79.748},{"x":-91.552,"y":156.134,"z":76.385},{"x":-87.074,"y":162.868,"z":73.022},{"x":-82.597,"y":169.402,"z":69.659},{"x":-78.119,"y":175.936,"z":66.296},{"x":-73.481,"y":182.587,"z":62.812},{"x":-68.364,"y":190.054,"z":58.969},{"x":-63.247,"y":197.522,"z":55.126},{"x":-58.129,"y":204.989,"z":51.282},{"x":-53.012,"y":212.456,"z":47.439},{"x":-47.894,"y":219.924,"z":43.595},{"x":-42.777,"y":227.391,"z":39.752},{"x":-37.66,"y":228.858,"z":35.908},{"x":-32.542,"y":229,"z":32.064},{"x":-25.625,"y":229,"z":25.821},{"x":-19.29,"y":229,"z":19.116},{"x":-13.582,"y":228.999,"z":12.981},{"x":-7.074,"y":228.999,"z":5.946},{"x":0.834,"y":228.999,"z":-3.189},{"x":8.742,"y":228.999,"z":-12.324}];
// nx.zapScanSeqIdx[NUM].zapPath2.aPath = [{"pos":{"x":-229.016,"y":2,"z":212.974},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-227.972,"y":2,"z":212.04},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-226.929,"y":2,"z":211.107},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-225.885,"y":2,"z":210.174},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-224.841,"y":2,"z":209.241},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-223.798,"y":2,"z":208.307},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-222.754,"y":2,"z":207.374},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-221.711,"y":2,"z":206.441},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-220.667,"y":2,"z":205.508},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-219.623,"y":2,"z":204.574},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-218.58,"y":2,"z":203.641},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-217.536,"y":2,"z":202.708},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-216.493,"y":2,"z":201.775},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-215.449,"y":2,"z":200.841},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-214.406,"y":2,"z":199.908},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-213.362,"y":2,"z":198.975},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-212.318,"y":2,"z":198.042},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-211.275,"y":2,"z":197.108},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-210.231,"y":2,"z":196.175},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-209.188,"y":2,"z":195.242},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-208.144,"y":2,"z":194.309},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-207.101,"y":2,"z":193.375},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-206.057,"y":2,"z":192.442},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-205.013,"y":2,"z":191.509},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-203.97,"y":2,"z":190.576},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-202.926,"y":2,"z":189.642},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-201.883,"y":2,"z":188.709},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-200.839,"y":2,"z":187.776},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-199.795,"y":2,"z":186.843},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-198.752,"y":2,"z":185.909},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-197.708,"y":2,"z":184.976},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-196.665,"y":2,"z":184.043},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-195.621,"y":2,"z":183.109},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-194.578,"y":2,"z":182.176},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-193.534,"y":2,"z":181.243},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-192.49,"y":2,"z":180.31},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-191.447,"y":2,"z":179.376},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-190.403,"y":2,"z":178.443},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-189.36,"y":2,"z":177.51},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-188.316,"y":2,"z":176.577},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-187.273,"y":2,"z":175.643},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-186.229,"y":2,"z":174.71},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-185.185,"y":2,"z":173.777},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-184.142,"y":2,"z":172.844},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-183.098,"y":2,"z":171.91},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-182.055,"y":2,"z":170.977},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-181.011,"y":2,"z":170.044},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-179.967,"y":2,"z":169.111},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-178.924,"y":2,"z":168.177},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-177.88,"y":2,"z":167.244},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-176.837,"y":2,"z":166.311},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-175.793,"y":2,"z":165.378},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-174.75,"y":2,"z":164.444},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-173.706,"y":2,"z":163.511},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-172.662,"y":2,"z":162.578},"rot":{"x":0.03,"y":-0.409,"z":0.013,"w":0.912}},{"pos":{"x":-171.619,"y":2.483,"z":161.645},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-170.575,"y":4.227,"z":160.711},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-169.532,"y":5.972,"z":159.778},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-168.488,"y":7.716,"z":158.845},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-167.445,"y":9.46,"z":157.912},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-166.401,"y":11.204,"z":156.978},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-165.358,"y":12.949,"z":156.045},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-164.314,"y":14.693,"z":155.112},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-163.27,"y":16.437,"z":154.179},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-162.227,"y":18.181,"z":153.246},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-161.183,"y":19.925,"z":152.312},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-160.14,"y":21.67,"z":151.379},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-159.096,"y":23.414,"z":150.446},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-158.053,"y":25.158,"z":149.513},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-157.009,"y":26.902,"z":148.579},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-155.966,"y":28.646,"z":147.646},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-154.922,"y":30.391,"z":146.713},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-153.878,"y":32.135,"z":145.78},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-152.835,"y":33.879,"z":144.846},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-151.791,"y":35.623,"z":143.913},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-150.748,"y":37.368,"z":142.98},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-149.704,"y":39.112,"z":142.047},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-148.661,"y":40.856,"z":141.114},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-147.617,"y":42.6,"z":140.18},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-146.573,"y":44.345,"z":139.247},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-145.53,"y":46.089,"z":138.314},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-144.486,"y":47.833,"z":137.381},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-143.443,"y":49.577,"z":136.447},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-142.399,"y":51.321,"z":135.514},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-141.356,"y":53.066,"z":134.581},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-140.312,"y":54.81,"z":133.648},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-139.268,"y":56.554,"z":132.715},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-138.225,"y":58.298,"z":131.781},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-137.181,"y":60.043,"z":130.848},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-136.138,"y":61.787,"z":129.915},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-135.094,"y":63.531,"z":128.982},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-134.051,"y":65.275,"z":128.048},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-133.007,"y":67.02,"z":127.115},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-131.963,"y":68.764,"z":126.182},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-130.92,"y":70.508,"z":125.249},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-129.876,"y":72.252,"z":124.315},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-128.833,"y":73.997,"z":123.382},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-127.789,"y":75.741,"z":122.449},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-126.746,"y":77.485,"z":121.516},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-125.702,"y":79.229,"z":120.582},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-124.658,"y":80.974,"z":119.649},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-123.615,"y":82.718,"z":118.716},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-122.571,"y":84.462,"z":117.783},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-121.528,"y":86.206,"z":116.849},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-120.484,"y":87.951,"z":115.916},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-119.441,"y":89.695,"z":114.983},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-118.397,"y":91.439,"z":114.05},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-117.353,"y":93.183,"z":113.116},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-116.31,"y":94.928,"z":112.183},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-115.266,"y":96.672,"z":111.25},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-114.223,"y":98.416,"z":110.317},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-113.179,"y":100.16,"z":109.384},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-112.136,"y":101.905,"z":108.45},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-111.092,"y":103.649,"z":107.517},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-110.048,"y":105.393,"z":106.584},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-109.005,"y":107.137,"z":105.651},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-107.961,"y":108.882,"z":104.717},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-106.918,"y":110.626,"z":103.784},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-105.874,"y":112.37,"z":102.851},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-104.831,"y":114.114,"z":101.918},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-103.787,"y":115.858,"z":100.984},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-102.744,"y":117.603,"z":100.051},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-101.7,"y":119.347,"z":99.118},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-100.656,"y":121.091,"z":98.185},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-99.613,"y":122.835,"z":97.251},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-98.569,"y":124.58,"z":96.318},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-97.526,"y":126.324,"z":95.385},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-96.482,"y":128.068,"z":94.452},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-95.439,"y":129.812,"z":93.518},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-94.395,"y":131.557,"z":92.585},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-93.351,"y":133.301,"z":91.652},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-92.308,"y":135.045,"z":90.719},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-91.264,"y":136.789,"z":89.785},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-90.221,"y":138.534,"z":88.852},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-89.177,"y":140.278,"z":87.919},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-88.134,"y":142.022,"z":86.986},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-87.09,"y":143.766,"z":86.052},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-86.047,"y":145.511,"z":85.119},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-85.003,"y":147.255,"z":84.186},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-83.959,"y":148.999,"z":83.253},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-82.916,"y":150.743,"z":82.319},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-81.872,"y":152.488,"z":81.386},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-80.829,"y":154.232,"z":80.453},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-79.785,"y":155.976,"z":79.52},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-78.742,"y":157.72,"z":78.587},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-77.698,"y":159.465,"z":77.653},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-76.654,"y":161.209,"z":76.72},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-75.611,"y":162.953,"z":75.787},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-74.567,"y":164.697,"z":74.854},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-73.524,"y":166.441,"z":73.92},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-72.48,"y":168.186,"z":72.987},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-71.437,"y":169.93,"z":72.054},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-70.393,"y":171.674,"z":71.121},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-69.349,"y":173.418,"z":70.187},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-68.306,"y":175.163,"z":69.254},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-67.262,"y":176.907,"z":68.321},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-66.219,"y":178.651,"z":67.388},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-65.175,"y":180.395,"z":66.454},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-64.132,"y":182.14,"z":65.521},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-63.088,"y":183.884,"z":64.588},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-62.045,"y":185.628,"z":63.655},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-61.001,"y":187.372,"z":62.721},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-59.957,"y":189.117,"z":61.788},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-58.914,"y":190.861,"z":60.855},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-57.87,"y":192.605,"z":59.922},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-56.827,"y":194.349,"z":58.988},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-55.783,"y":196.094,"z":58.055},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-54.74,"y":197.838,"z":57.122},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-53.696,"y":199.582,"z":56.189},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-52.652,"y":201.326,"z":55.255},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-51.609,"y":203.071,"z":54.322},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-50.565,"y":204.815,"z":53.389},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-49.522,"y":206.559,"z":52.456},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-48.478,"y":208.303,"z":51.522},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-47.435,"y":210.048,"z":50.589},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-46.391,"y":211.792,"z":49.656},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-45.347,"y":213.536,"z":48.723},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-44.304,"y":215.28,"z":47.789},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-43.26,"y":217.025,"z":46.856},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-42.217,"y":218.769,"z":45.923},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-41.173,"y":220.513,"z":44.99},"rot":{"x":0.394,"y":-0.369,"z":0.176,"w":0.823}},{"pos":{"x":-40.13,"y":222,"z":44.056},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-39.086,"y":222,"z":43.123},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-38.042,"y":222,"z":42.19},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-36.999,"y":222,"z":41.257},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-35.955,"y":222,"z":40.323},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-34.912,"y":222,"z":39.39},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-33.868,"y":222,"z":38.457},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-32.825,"y":222,"z":37.524},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-31.781,"y":222,"z":36.59},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-30.737,"y":222,"z":35.657},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-29.694,"y":222,"z":34.724},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-28.65,"y":222,"z":33.791},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-27.607,"y":222,"z":32.857},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-26.563,"y":222,"z":31.924},"rot":{"x":0.259,"y":-0.392,"z":0.115,"w":0.875}},{"pos":{"x":-25.52,"y":222.5,"z":30.991},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-24.476,"y":222.5,"z":30.058},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-23.432,"y":222.5,"z":29.124},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-22.389,"y":222.5,"z":28.191},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-21.345,"y":222.5,"z":27.258},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-20.302,"y":222.5,"z":26.325},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-19.258,"y":222.5,"z":25.391},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-18.215,"y":222.5,"z":24.458},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-17.171,"y":222.5,"z":23.525},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-16.127,"y":222.5,"z":22.592},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-15.084,"y":222.5,"z":21.658},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-14.115,"y":222.5,"z":20.792},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-13.22,"y":222.5,"z":19.992},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-12.326,"y":222.5,"z":19.192},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-11.431,"y":222.5,"z":18.392},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-10.537,"y":222.5,"z":17.592},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-9.642,"y":222.5,"z":16.792},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-8.748,"y":222.5,"z":15.992},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-7.853,"y":222.5,"z":15.192},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-6.959,"y":222.5,"z":14.392},"rot":{"x":0,"y":-0.409,"z":0,"w":0.912}},{"pos":{"x":-5.988,"y":222.5,"z":13.384},"rot":{"x":-0.037,"y":-0.361,"z":0.093,"w":0.927}},{"pos":{"x":-5.124,"y":222.5,"z":12.284},"rot":{"x":-0.032,"y":-0.314,"z":0.094,"w":0.944}},{"pos":{"x":-4.286,"y":222.5,"z":11.162},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":-3.449,"y":222.5,"z":10.04},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":-2.611,"y":222.5,"z":8.918},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":-1.774,"y":222.5,"z":7.796},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":-0.937,"y":222.5,"z":6.674},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":-0.099,"y":222.5,"z":5.552},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":0.738,"y":222.5,"z":4.43},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":1.575,"y":222.5,"z":3.308},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":2.413,"y":222.5,"z":2.186},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":3.25,"y":222.5,"z":1.064},"rot":{"x":0,"y":-0.316,"z":0,"w":0.949}},{"pos":{"x":4.03,"y":222.5,"z":-0.099},"rot":{"x":0,"y":-0.292,"z":0,"w":0.956}},{"pos":{"x":4.811,"y":222.5,"z":-1.261},"rot":{"x":0,"y":-0.292,"z":0,"w":0.956}},{"pos":{"x":5.591,"y":222.5,"z":-2.423},"rot":{"x":0,"y":-0.292,"z":0,"w":0.956}},{"pos":{"x":6.371,"y":222.5,"z":-3.586},"rot":{"x":0,"y":-0.292,"z":0,"w":0.956}},{"pos":{"x":7.122,"y":222.5,"z":-4.767},"rot":{"x":-0.027,"y":-0.266,"z":0.096,"w":0.958}},{"pos":{"x":7.843,"y":222.5,"z":-5.967},"rot":{"x":0,"y":-0.268,"z":0,"w":0.963}},{"pos":{"x":8.564,"y":222.5,"z":-7.167},"rot":{"x":0,"y":-0.268,"z":0,"w":0.963}},{"pos":{"x":9.285,"y":222.5,"z":-8.367},"rot":{"x":0,"y":-0.268,"z":0,"w":0.963}},{"pos":{"x":10.006,"y":222.5,"z":-9.567},"rot":{"x":0,"y":-0.268,"z":0,"w":0.963}},{"pos":{"x":10.728,"y":222.5,"z":-10.767},"rot":{"x":0,"y":-0.268,"z":0,"w":0.963}},{"pos":{"x":11.449,"y":222.5,"z":-11.967},"rot":{"x":0,"y":-0.268,"z":0,"w":0.963}},{"pos":{"x":12.17,"y":222.5,"z":-13.167},"rot":{"x":0,"y":-0.268,"z":0,"w":0.963}},{"pos":{"x":12.891,"y":222.5,"z":-14.367},"rot":{"x":0,"y":-0.268,"z":0,"w":0.963}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.025,"y":-0.242,"z":0.096,"w":0.965}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.02,"y":-0.194,"z":0.097,"w":0.976}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.015,"y":-0.145,"z":0.098,"w":0.984}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.01,"y":-0.095,"z":0.099,"w":0.99}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.005,"y":-0.046,"z":0.099,"w":0.993}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0,"y":0.004,"z":0.099,"w":0.994}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.005,"y":0.054,"z":0.099,"w":0.993}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.01,"y":0.103,"z":0.099,"w":0.989}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.015,"y":0.153,"z":0.098,"w":0.983}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.02,"y":0.201,"z":0.097,"w":0.974}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.025,"y":0.25,"z":0.096,"w":0.962}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.029,"y":0.298,"z":0.095,"w":0.949}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.034,"y":0.345,"z":0.093,"w":0.933}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.039,"y":0.391,"z":0.091,"w":0.914}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.043,"y":0.436,"z":0.089,"w":0.894}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.048,"y":0.48,"z":0.087,"w":0.871}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.052,"y":0.523,"z":0.084,"w":0.845}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.056,"y":0.565,"z":0.082,"w":0.818}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.06,"y":0.605,"z":0.079,"w":0.789}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.064,"y":0.644,"z":0.076,"w":0.758}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.068,"y":0.681,"z":0.072,"w":0.725}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.071,"y":0.716,"z":0.069,"w":0.69}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.076,"y":-0.751,"z":-0.066,"w":-0.654}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.079,"y":-0.783,"z":-0.062,"w":-0.616}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.082,"y":-0.812,"z":-0.058,"w":-0.576}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.085,"y":-0.84,"z":-0.054,"w":-0.534}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.087,"y":-0.866,"z":-0.05,"w":-0.492}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.09,"y":-0.889,"z":-0.045,"w":-0.448}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.092,"y":-0.91,"z":-0.041,"w":-0.403}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.094,"y":-0.929,"z":-0.036,"w":-0.357}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.095,"y":-0.946,"z":-0.032,"w":-0.31}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.097,"y":-0.96,"z":-0.027,"w":-0.262}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.098,"y":-0.972,"z":-0.022,"w":-0.214}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":-0.099,"y":-0.982,"z":-0.017,"w":-0.165}},{"pos":{"x":13.252,"y":222.5,"z":-14.967},"rot":{"x":0.097,"y":-0.972,"z":0.021,"w":-0.214}}];

                    nx.zapScanSeqIdx[NUM].runAnm = 0;//,runSeq1=0, //ANMETHODOLOGY 0 off 1 on-. 
                    nx.zapScanSeqIdx[NUM].stepIdx = 0;//, nx.zapScanSeqIdx[NUM].curPOS, nx.zapScanSeqIdx[NUM].nxtPOS;// orbySlowMo=0;//TODO all specific confiv to IDX1
                    nx.zapScanSeqIdx[NUM].anmSpeed = 200; //8
// setTimeout(function(){
    nx.scene.activeCamera.position.copyFrom({x: -337.6425561420048, y: 2.3408378520896362, z: 308.0463108256668}); //low view crash position
// },3000)
                    // nx.zapScanSeqIdx[NUM].smoothYCam = nx.orbyMesh.position.y;
                    // nx.zapScanSeqIdx[NUM].smoothZCam = nx.orbyMesh.position.z;

                    //VISUALIZE-.
                    // var instPath = nx.createPathEditor({aName:'zapPath2',aPath:nx.zapScanSeqIdx[NUM].zapPath2.aPath});
                    // if(instPath && instPath.aPath){nx.zapScanSeqIdx[NUM].zapPath2.aPath = instPath.aPath} //Edited Instance-.
                }
                if(!nx.zapScanSeqIdx[NUM].initAnm){  //init next path point
                    nx.zapScanSeqIdx[NUM].curPOS = nx.zapScanSeqIdx[NUM].zapPath2.aPath[nx.zapScanSeqIdx[NUM].stepIdx];
                    nx.zapScanSeqIdx[NUM].nxtPOS = nx.zapScanSeqIdx[NUM].zapPath2.aPath[++nx.zapScanSeqIdx[NUM].stepIdx]
                    nx.zapScanSeqIdx[NUM].initAnm = 1;
                    if(!nx.zapScanSeqIdx[NUM].nxtPOS){  
                        nx.zapScanSeqIdx[NUM].on=0; //important


                        nx.kiloBotMesh1.rotation.y = 2.44 //END ZAPBOT ROTATION-.



                        nx.stopMovie({fadeCurtain:1,dur:2000});
                        setTimeout(function(){
                            nx.initSEQ({epicID:7})//AFFIRMATIONSEQUENCE
                        },500) //avoid flicker on fadeout-.


                        // nx.zapScanSeqIdx[NUM+1] = {on:1}; 


                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.zapScanSeqIdx[NUM].runAnm = 1;
                }  
                if(nx.zapScanSeqIdx[NUM].runAnm) { nx.zapScanSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.zapScanSeqIdx[NUM].curPOS.x,curPOSy:nx.zapScanSeqIdx[NUM].curPOS.y,curPOSz:nx.zapScanSeqIdx[NUM].curPOS.z}).
                    animate({curPOSx:nx.zapScanSeqIdx[NUM].nxtPOS.x,curPOSy:nx.zapScanSeqIdx[NUM].nxtPOS.y,curPOSz:nx.zapScanSeqIdx[NUM].nxtPOS.z},{queue:false,duration:nx.zapScanSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM: - ZAP-BOT -FROM-POINT-TO-POINT-ON-PATH-. ----------------------------GOES BACK UP PYRAMID-.
                        if(nx.cinemaStop){ $(this).stop(); nx.zapScanSeqIdx[2]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        // if(!nx.cinematicMode || (nx.ctrl.shift && nx.tenKey.mode === 'anm')){ nx.cinematicMode=0; return;} //PAUSEANM-. methodology
                        nx.kiloBotMesh1.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
                        // nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
                        // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 

                        nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) ); //SMOOTH-CAM-.
                    }, complete:function(){ 
                            nx.zapScanSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });

                    // console.log('ZAP: '+nx.zapScanSeqIdx[NUM].stepIdx+'  of '+nx.zapScanSeqIdx[NUM].zapPath2.aPath.length)
                    //ANM: ROTATOR-. methodology
                    for(var i = 0; i<nx.zapScanSeqIdx[NUM].zapPath2.aRot.length;i++ ){ 
                        debugger; //REMOVABLE??? because empty rot array...
                        if(nx.zapScanSeqIdx[NUM].zapPath2.aRot[i].idx===nx.zapScanSeqIdx[NUM].stepIdx-1){
                            // console.log('ONE-TIME')
                            var rotstart = 0, rotend = 0, xrt=nx.zapScanSeqIdx[NUM].zapPath2.aRot[i].x || 0, yrt=nx.zapScanSeqIdx[NUM].zapPath2.aRot[i].y || 0, zrt=nx.zapScanSeqIdx[NUM].zapPath2.aRot[i].z || 0;
                            if(xrt){ rotstart=nx.kiloBotMesh1.rotation.x; rotend=nx.zapScanSeqIdx[NUM].zapPath2.aRot[i].x;}
                            else if(yrt){ rotstart=nx.kiloBotMesh1.rotation.y; rotend=nx.zapScanSeqIdx[NUM].zapPath2.aRot[i].y;}
                            else if(zrt){ rotstart=nx.kiloBotMesh1.rotation.z; rotend=nx.zapScanSeqIdx[NUM].zapPath2.aRot[i].z;}
                            $({rot:rotstart}). //------------------------------------------------------ANM: ROT-.
                            animate({rot:rotend},{queue:false,duration:100,easing:'linear',
                            step: function(now) { //-------------------------------------------SKID ROT
                                if(nx.cinemaStop){ $(this).stop(); nx.zapScanSeqIdx[2]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                                if(xrt){ nx.kiloBotMesh1.rotation.x = this.rot}
                                else if(yrt){ nx.kiloBotMesh1.rotation.y = this.rot}
                                else if(zrt){ nx.kiloBotMesh1.rotation.z = this.rot}
                                    console.log('ROT'+this.rot)
                            }, complete:function(){
                            //     console.log('end8')



                                } //NEXT-SUB-SEQUENCE-. 
                            }); 
                            break;
                        } 
                        // else if(nx.zapScanSeqIdx[NUM].zapPath2.aRot[i].idx > nx.zapScanSeqIdx[NUM].stepIdx-1){console.log('rot break on '+nx.zapScanSeqIdx[NUM].zapPath1.aRot[i].idx +' < ' + nx.zapScanSeqIdx[NUM].stepIdx-1);break;} //optimization break if idx is > search (does not exist)
                    }


                //     nx.ui.showGameModeView();




                    
                }
            }//end-anmframe-.

//REMOVEABLE-FRAME-.
//             if(nx.zapScanSeqIdx[3] && nx.zapScanSeqIdx[3].on){ var NUM = 3; nx.zapScanSeqIdx[NUM].on = 0; //one-time-.
//                 debugger; //deprecated goes to affirmation sequence instead
//                 if(nx.cinemaStop){nx.zapScanSeqIdx[3]={on:1}; return;}
//                 // var tgtPOS = nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z-50) //CAM FOC: LookBack at sand burm-.
//                 // nx.scene.activeCamera.setTarget(tgtPOS); //CAM FOC: on sand mountain
//                 // nx.scene.activeCamera.position.copyFrom({x: -337.6425561420048, y: 2.3408378520896362, z: 308.0463108256668}); //low view crash position

//                 nx.scene.activeCamera.position.copyFrom({x:-331, y: 2, z: 306}); //CAM POS: low view crash position
//                 // var tgtPOS = nx.BV3(-337,3,306) //CAM FOC: LookBack at sand burm-.
//                 // nx.scene.activeCamera.setTarget(tgtPOS); //CAM FOC: on sand mountain
//                 nx.scene.activeCamera.setTarget(nx.BV32({x: -410, y: 8, z: 308})); //CAM TGT: on sand mountain


//                 setTimeout(function(){
//                     if(nx.cinemaStop){nx.zapScanSeqIdx[3]={on:1}; return;}
//                     $({camPOSx:nx.scene.activeCamera.position.x,camPOSy:nx.scene.activeCamera.position.y,camPOSz:nx.scene.activeCamera.position.z}).
//                     // animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.aPath.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.aPath.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.aPath.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
//                     animate({camPOSx:-400,camPOSy:7.5,camPOSz:307.5},{queue:false,duration:3000,easing:'swing',
//                     step: function(now) { //ANM:-CAM POS ZOOM IN
//                         if(nx.cinemaStop){ $(this).stop(); nx.zapScanSeqIdx[3]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                            
//                         nx.scene.activeCamera.position.copyFrom({x:this.camPOSx, y: this.camPOSy, z: this.camPOSz}); //low view crash position
//                         // if(!nx.cinematicMode || (nx.ctrl.shift && nx.tenKey.mode === 'anm')){ nx.cinematicMode=0; return;} //PAUSEANM-. methodology
//                         // nx.scene.activeCamera.setTarget(nx.BV32({x: -410, y: 8, z: 308})); //CAM FOC: on sand mountain
//                         // nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
//                         // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
//                         // if(nx.crashSeqIdx[NUM].stepIdx === 20 && !nx.crashSeqIdx[NUM].dust4){//TRIGGER-DUST-POOF-.
//                             // debugger;
//                             // nx.crashSeqIdx[NUM].dust4=1;
//                             // nx.createDustPoof({pos:{x: -410, y: 10, z: 304}});
//                         // }

//                         // nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,nx.crashSeqIdx[NUM].smoothYCam,nx.crashSeqIdx[NUM].smoothZCam) ); //SMOOTH-CAM-.
//                         // nx.orbyMesh.rotation.x -= 0.02; //spinning crash
// // console.log('crashcam9')
//                         // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.crashSeqIdx[1].curPOS.rot.x,nx.crashSeqIdx[1].curPOS.rot.y,nx.crashSeqIdx[1].curPOS.rot.z,nx.crashSeqIdx[1].curPOS.rot.w);
//                         // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
//                     }, complete:function(){ 
//                             // nx.crashSeqIdx[NUM].initAnm = 0; 
//                             // debugger;
//                             nx.zapScanSeqIdx[NUM+1] = {on:1};
//                         } //NEXT-SUB-SEQUENCE-. 
//                     });


//                 },1000)//look then cam zoom
// //zoom in on orby cam pos, foc, zoom pos, spot orby eye
// // nx.scene.activeCamera.position startPOS
// // Vector3 {x: -330.9897474649184, y: 2.483523718146994, z: 306.11943811068375}
// // nx.scene.activeCamera.position FOC
// // Vector3 {x: -337.3415382526454, y: 2.957312979618484, z: 306.30610262617256}


// // nx.scene.activeCamera.position ZOOM end
// // Vector3 {x: -378.63674365509183, y: 6.07100351603582, z: 307.5546257914531}

// // nx.scene.activeCamera.position orby
// // Vector3 {x: -409.9703397091614, y: 8.456518087926495, z: 308.53126194095756}

// // nx.scene.activeCamera.position end zoom tight
// // Vector3 {x: -386.72322861998083, y: 6.570163639942308, z: 307.17845463120307}


// //close up  {x: -398.54395207377826, y: 7.4506014824547515, z: 307.46871743720453}


// //orby pos coming up end {x: -410.5, y: 5.5, z: 308}


//             }  //end-anmframe-.

//REMOVABLE-FRAME-. moved to end of affirmation-.
//             if(nx.zapScanSeqIdx[4] && nx.zapScanSeqIdx[4].on){ var NUM = 4; nx.zapScanSeqIdx[NUM].on = 0;
// debugger; //deprecated moved to end of affirmation
//                 if(nx.cinemaStop){nx.zapScanSeqIdx[4]={on:1}; return;}
//                 // debugger;


//                 nx.orbyMesh.rotation.x = 0;
//                 nx.orbyMesh.rotation.y = -2.4;

//                 $({orbyPOSx:-410.5,orbyPOSy:3,orbyPOSz:308}).
//                 // animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.aPath.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.aPath.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.aPath.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
//                 animate({orbyPOSx:-410.5,orbyPOSy:5.5,orbyPOSz:308},{queue:false,duration:3000,easing:'swing',
//                 step: function(now) { //ANM:- =--------------------------------------------------------ORBY RISE UP OUT OF SAND-.
//                     if(nx.cinemaStop){ $(this).stop(); nx.zapScanSeqIdx[4]={on:1}; console.log('stopped'); return;}//CINEMA-STOP-.
                        
//                     // nx.scene.activeCamera.position.copyFrom({x:this.camPOSx, y: this.camPOSy, z: this.camPOSz}); //low view crash position
//                     // if(!nx.cinematicMode || (nx.ctrl.shift && nx.tenKey.mode === 'anm')){ nx.cinematicMode=0; return;} //PAUSEANM-. methodology
//                     // nx.scene.activeCamera.setTarget(nx.BV32({x: -410, y: 8, z: 308})); //CAM FOC: on sand mountain
//                     nx.orbyMesh.position = new BABYLON.Vector3(this.orbyPOSx,this.orbyPOSy,this.orbyPOSz) //todo remove x and y from interpolation
//                     nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
//                     // if(nx.crashSeqIdx[NUM].stepIdx === 20 && !nx.crashSeqIdx[NUM].dust4){//TRIGGER-DUST-POOF-.
//                         // debugger;
//                         // nx.crashSeqIdx[NUM].dust4=1;
//                         // nx.createDustPoof({pos:{x: -410, y: 10, z: 304}});
//                     // }

//                     // nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,nx.crashSeqIdx[NUM].smoothYCam,nx.crashSeqIdx[NUM].smoothZCam) ); //SMOOTH-CAM-.
//                     // nx.orbyMesh.rotation.x -= 0.02; //spinning crash
// // console.log('crashcam9')
//                     // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.crashSeqIdx[1].curPOS.rot.x,nx.crashSeqIdx[1].curPOS.rot.y,nx.crashSeqIdx[1].curPOS.rot.z,nx.crashSeqIdx[1].curPOS.rot.w);
//                     // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
//                 }, complete:function(){ 
//                         // nx.crashSeqIdx[NUM].initAnm = 0; 
//                         // nx.zapScanSeqIdx[NUM+1] = {on:0};

//                         nx.ui.flashCanvasMSG({title:'Complete!',txt:'Quest 1: Land on AlphaMoon!',dur:5000,
//                         // });         //on orby eye focus-. 
//                         // nx.ui.flashCanvasMSG({txt:'Complete!',dur:4000,
//                             txtInit:function(){ //todo sonic ding quest complete with certificate icon
//                             },
//                             txtEnd:function(){ //For signaling next GAME SEQ as TXT fades out-.
//                                 // debugger;
//                                 // nx.gameInit({gameID:5}); //softload: Scan SpaceTrain!
//                                 // if(nx.cinemaPlayAll){ //auto call the movie.
//                                 //     nx.initSEQ({epicID:7}); /* affirmation seq todo coil sequence*/
//                                 // }else{
//                                 //     nx.ui.flashCanvasMSG({txtIcon:'',persist:true,
//                                 //     txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
//                                 //         // nx.ui.showMovieModeView()
//                                 //     }, btns:{
//                                 //         movieFn:function(){ 
//                                 //             nx.initSEQ({epicID:7}); /* affirmation seq todo coil sequence*/ },
//                                 //         gameFn: function(){
//                                 //             nx.gameInit({gameID:5}); //open world scan game
//                                 //             nx.gameRun({gameID:5});
//                                 //         },
//                                 //         bookFn: function(){ /*todo autolink to quests*/ }
//                                 //     }
//                                 //     });
//                                 // }

//                             }
//                         });   



// //CAM-POS: GameStart
// // Vector3 {x: -478.1365031303217, y: 21.321846007235653, z: 364.63460065228054}
// // nx.scene.activeCamera.position
// // Vector3 {x: -474.090460708942, y: 21.995056915796674, z: 361.6818477126597}

//                         // nx.ui.flashCanvasMSG({txt:'Mission 2: Scan SpaceTrain',dur:2000,txtfn:function(){
//                         //     debugger;
//                         //     //START-SCANTRAIN - GAME-SEQUENCE_.

//                         // }});   



//                     } //NEXT-SUB-SEQUENCE-. 
//                 }); //end anm



//             }//end frame-.


        });//end sequence function-.
    // } //END-SEQUENCE-.





    } else if(seqName==="AffirmationSequence"){ //-----------------------------------------------------------------------------ZAP SCAN-SEQUENCE---.
        nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as SEQIDX.

            if(nx.affirmSeqIdx[0] && nx.affirmSeqIdx[0].on){ var NUM = 0;
                if(!nx.affirmSeqIdx[NUM].init){ nx.affirmSeqIdx[NUM].init=1; //one-time-.
                    nx.zapbotMesh2.position.copyFrom({x: 0, y: 5, z: 0})
                    
                    
                    // nx.zapbotMesh2.searching = 0;
                    // for(var i = 0; i<nx.zapbotMesh2.rayLines.length;i++){ nx.zapbotMesh2.rayLines[i].dispose();  } //TODO perf reuse rays
                    // nx.zapbotMesh2.rayLines = []; //clean up lasers-.
                    
                    
                    // debugger;
                    //TODO: FIX
                    // nx.zapbotMesh2.stopSearching();


                    nx.scene.activeCamera.position.copyFrom({x: 50, y: 270, z: -50}); //CAMPOS: frontview darkbot
                    nx.scene.activeCamera.setTarget(new BABYLON.Vector3(25, 265, -25)); //CAMTGT

                    setTimeout(function(){
                        nx.affirmSeqIdx[NUM].on=0;  //stop this frame-.
                        nx.affirmSeqIdx[NUM+1]={on:1};  //next frame-.
                    },3000)                }                
            } 


            if(nx.affirmSeqIdx[1] && nx.affirmSeqIdx[1].on){ var NUM = 1;
                if(!nx.affirmSeqIdx[NUM].init){ nx.affirmSeqIdx[NUM].init=1; //one time init

                    nx.scene.activeCamera.position.copyFrom({x: 28.6, y: 265, z: -31}); //CAM-POS and FOCUS - over shoulder
                    nx.scene.activeCamera.setTarget(new BABYLON.Vector3(24, 265, -27));


                    // nx.zapbotMesh2.searching = 0;
                    // for(var i = 0; i<nx.zapbotMesh2.rayLines.length;i++){ nx.zapbotMesh2.rayLines[i].dispose();  } //TODO perf reuse rays
                    // nx.zapbotMesh2.rayLines = []; //clean up lasers-.



                    nx.affirmSeqIdx[NUM].runAnm = 0; //ANMETHODOLOGY 0 off 1 on-. 
                    nx.affirmSeqIdx[NUM].stepIdx = 0;
                    nx.affirmSeqIdx[NUM].anmSpeed = 60;
                    //initialize-path and edit-.
                    nx.affirmSeqIdx[NUM].zapCorner =   [{"pos":{"x":-15.36,"y":259.5,"z":-13.47},"rot":{"x":0,"y":-0.93,"z":0,"w":0.38}},{"pos":{"x":-14.52,"y":259.5,"z":-12.62},"rot":{"x":0,"y":-0.93,"z":0,"w":0.38}},{"pos":{"x":-13.67,"y":259.5,"z":-11.77},"rot":{"x":0,"y":-0.93,"z":0,"w":0.38}},{"pos":{"x":-12.82,"y":259.5,"z":-10.92},"rot":{"x":0,"y":-0.93,"z":0,"w":0.38}},{"pos":{"x":-11.9,"y":259.5,"z":-9.99},"rot":{"x":0,"y":-0.93,"z":0,"w":0.38}},{"pos":{"x":-10.92,"y":259.5,"z":-9},"rot":{"x":0,"y":-0.93,"z":0,"w":0.38}},{"pos":{"x":-9.93,"y":259.5,"z":-8.01},"rot":{"x":0,"y":-0.93,"z":0,"w":0.38}},{"pos":{"x":-8.94,"y":259.5,"z":-7.02},"rot":{"x":0,"y":-0.93,"z":0,"w":0.38}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.91,"z":0,"w":0.4}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.89,"z":0,"w":0.44}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.87,"z":0,"w":0.49}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.84,"z":0,"w":0.53}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.82,"z":0,"w":0.56}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.79,"z":0,"w":0.61}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.76,"z":0,"w":0.65}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.72,"z":0,"w":0.69}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.69,"z":0,"w":0.72}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.65,"z":0,"w":0.75}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.61,"z":0,"w":0.78}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.57,"z":0,"w":0.81}},{"pos":{"x":-8.45,"y":259.5,"z":-6.52},"rot":{"x":0,"y":-0.53,"z":0,"w":0.84}},{"pos":{"x":-7.84,"y":259.5,"z":-6.87},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":-6.62,"y":259.5,"z":-7.55},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":-5.4,"y":259.5,"z":-8.24},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":-4.18,"y":259.5,"z":-8.93},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":-2.96,"y":259.5,"z":-9.61},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":-1.74,"y":259.5,"z":-10.31},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":-0.52,"y":259.5,"z":-10.99},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":0.7,"y":259.5,"z":-11.68},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":1.92,"y":259.5,"z":-12.36},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":3.14,"y":259.5,"z":-13.05},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":4.36,"y":259.5,"z":-13.74},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}},{"pos":{"x":5.58,"y":259.5,"z":-14.42},"rot":{"x":0,"y":-0.51,"z":0,"w":0.86}}];
                    // var instPath = nx.createPathEditor({aName:'zapCornerPATH', ANMPath:nx.affirmSeqIdx[NUM].zapCorner}); //-WORKING-PATH-EDITOR-.
                } //end init sequence-.
                if(!nx.affirmSeqIdx[NUM].initAnm){  //init next path point
                    nx.affirmSeqIdx[NUM].curPOS = nx.affirmSeqIdx[NUM].zapCorner[nx.affirmSeqIdx[NUM].stepIdx];
                    nx.affirmSeqIdx[NUM].nxtPOS = nx.affirmSeqIdx[NUM].zapCorner[++nx.affirmSeqIdx[NUM].stepIdx];
                    nx.affirmSeqIdx[NUM].initAnm = 1;
                    if(!nx.affirmSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.affirmSeqIdx[NUM].on=0; //important
                        nx.affirmSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.affirmSeqIdx[NUM].runAnm = 1;
                }  
                //NEW-RUN-ANM-FORMAT-.
                if(nx.affirmSeqIdx[NUM].runAnm) { nx.affirmSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.affirmSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.affirmSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.affirmSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.affirmSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.affirmSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.affirmSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.affirmSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.zapbotMesh2.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //POS
                        //EDITABLE-ROTATIONS-.
                        if(nx.affirmSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                            nx.zapbotMesh2.rotationQuaternion = new BABYLON.Quaternion(nx.affirmSeqIdx[NUM].curPOS.rot.x,nx.affirmSeqIdx[NUM].curPOS.rot.y,nx.affirmSeqIdx[NUM].curPOS.rot.z,nx.affirmSeqIdx[NUM].curPOS.rot.w);
                        }else{ //EULER-ANM-ROT-.
                            nx.zapbotMesh2.rotationQuaternion = null;
                            nx.zapbotMesh2.rotation = new BABYLON.Vector3(nx.affirmSeqIdx[NUM].curPOS.rot.x,nx.affirmSeqIdx[NUM].curPOS.rot.y,nx.affirmSeqIdx[NUM].curPOS.rot.z);
                        }
                    }, complete:function(){ 
                        nx.affirmSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });
                }
            }
            else if(nx.affirmSeqIdx[2] && nx.affirmSeqIdx[2].on){ var NUM = 2; 
                if(!nx.affirmSeqIdx[NUM].init){ nx.affirmSeqIdx[NUM].init=1; //one-time-.
                    
                    // nx.scene.activeCamera.position.copyFrom({x: 50, y: 270, z: -50}); //CAM-POS and FOCUS - medium cam
                    // nx.scene.activeCamera.setTarget(new BABYLON.Vector3(25, 265, -25));

                        // nx.ui.flashCanvasMSG({txt:'The orb-shaped robot',txtIcon:'zapbot',dur:2000,
                        //     txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
                        //         //TODO: add GUI updates sonics here-.
                        //         nx.scene.activeCamera.position.copyFrom({x: 28.6, y: 265, z: -31}); //CAM-POS and FOCUS - over shoulder
                        //         nx.scene.activeCamera.setTarget(new BABYLON.Vector3(24, 265, -27));
                        //     },
                        //     txtEnd:function(){ //For signaling next GAME SEQ as TXT fades out-.
                        //         // debugger;
                        //     }
                        // });  


                    //    nx.ui.flashCanvasMSG({txt:'Yes?',txtIcon:'darkbot',dur:2000,txtAlign:'right',
                    //         txtInit:function(){  },
                    //         txtEnd:function(){ }
                    //     }); 

                    //    nx.ui.flashCanvasMSG({txt:'The little Orbot?',txtIcon:'darkbot',dur:2000,txtAlign:'right',
                       nx.ui.flashCanvasMSG({txt:'The little robot?',txtIcon:'darkbot',dur:3000,txtAlign:'right',
                            txtInit:function(){  },
                            txtEnd:function(){ }
                        }); 


                        nx.ui.flashCanvasMSG({txt:"He is SpaceJunk!",txtIcon:'zapbot',dur:3000,
                        txtInit:function(){  },
                        txtEnd:function(){ }
                    }); 


// debugger;
                        nx.ui.flashCanvasMSG({txt:'GOOD.',txtIcon:'darkbot',txtAlign:'right',dur:2000,
                            txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
                                // debugger;
                                //TODO: add GUI updates sonics here-.
                                nx.scene.activeCamera.position.copyFrom({x: 25.6, y: 265.0, z: -26}); //CAM-POS and FOCUS extreme close up
                                nx.scene.activeCamera.setTarget(new BABYLON.Vector3(24.77, 264.9, -25.3));
                            },
                            txtEnd:function(){ //For signaling next GAME SEQ as TXT fades out-.
                                // debugger;
                                nx.affirmSeqIdx[NUM].on=0;  //stop this frame-.
                                nx.affirmSeqIdx[NUM+1]={on:1};  //next frame-.
                            }
                        }); 


                    // setTimeout(function(){
                    // },4000)
//over the shoulder dark and zap bot
// Vector3 {x: 28.64040893259114, y: 265.76379413831523, z: -31.912046167468112}
// Vector3 {x: 24.197750494524627, y: 265.075660188182, z: -27.60296921767441}

// //extreeme close up
// Vector3 {x: 25.6303935751104, y: 265.0756601883436, z: -26.09962975891377}
// Vector3 {x: 24.772928666831508, y: 264.90144544823653, z: -25.387983214282773}


// Vector3 {x: -16.621571642620086, y: 263.15743686175136, z: -13.876292904460119} zapbot start position
// Vector3 {x: -5.149792632242116, y: 263.50335833191025, z: -6.556562573380201} zapbot turn position
// Vector3 {x: 5.416920109685552, y: 262.87518163975113, z: -14.808811433032565} zapbot end position
                }

            } //endframe
            else if(nx.affirmSeqIdx[3] && nx.affirmSeqIdx[3].on){ var NUM = 3;
                if(!nx.affirmSeqIdx[NUM].init){
                    nx.affirmSeqIdx[NUM].init=1; //one-time-.

                            nx.orbyMesh.position.copyFrom({x:-410.5,y:0,z:308}) //POS: prepare to go up
                            nx.orbyMesh.rotation.x = 0;
                            nx.orbyMesh.rotation.y = -2.4;
                            nx.scene.stopAnimation(nx.orbySkeleton[0])      //---------------------ANM: FREEZE-ORBY-.

                                nx.affirmSeqIdx[NUM+1]={on:1};

                        nx.affirmSeqIdx[NUM].on=0;  //stop this frame-.
                        // nx.affirmSeqIdx[NUM+1]={on:1};  //next frame-.
                }                
            } 


            else if(nx.affirmSeqIdx[4] && nx.affirmSeqIdx[4].on){ var NUM = 4; nx.affirmSeqIdx[NUM].on = 0; //one-time-.
                // debugger;

                // var tgtPOS = nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z-50) //CAM FOC: LookBack at sand burm-.
                // nx.scene.activeCamera.setTarget(tgtPOS); //CAM FOC: on sand mountain
                // nx.scene.activeCamera.position.copyFrom({x: -337.6425561420048, y: 2.3408378520896362, z: 308.0463108256668}); //low view crash position

                nx.initFreeCam();
                nx.scene.activeCamera.position.copyFrom({x:-331, y: 2, z: 306}); //CAM POS: low view crash position
                // var tgtPOS = nx.BV3(-337,3,306) //CAM FOC: LookBack at sand burm-.
                // nx.scene.activeCamera.setTarget(tgtPOS); //CAM FOC: on sand mountain
                nx.scene.activeCamera.setTarget(nx.BV32({x: -410, y: 8, z: 308})); //CAM TGT: on sand mountain


                setTimeout(function(){

                    $({camPOSx:nx.scene.activeCamera.position.x,camPOSy:nx.scene.activeCamera.position.y,camPOSz:nx.scene.activeCamera.position.z}).
                    // animate({curPOSx:nx.crashSeqIdx[NUM].nxtPOS.aPath.x,curPOSy:nx.crashSeqIdx[NUM].nxtPOS.aPath.y,curPOSz:nx.crashSeqIdx[NUM].nxtPOS.aPath.z},{queue:false,duration:nx.crashSeqIdx[NUM].anmSpeed,easing:'linear',
                    animate({camPOSx:-400,camPOSy:7.5,camPOSz:307.5},{queue:false,duration:3000,easing:'swing',
                    step: function(now) { //ANM:-CAM POS ZOOM IN
                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                            
                        nx.scene.activeCamera.position.copyFrom({x:this.camPOSx, y: this.camPOSy, z: this.camPOSz}); //low view crash position ZOOMCAM
                        // if(!nx.cinematicMode || (nx.ctrl.shift && nx.tenKey.mode === 'anm')){ nx.cinematicMode=0; return;} //PAUSEANM-. methodology
                        // nx.scene.activeCamera.setTarget(nx.BV32({x: -410, y: 8, z: 308})); //CAM FOC: on sand mountain
                        // nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
                        // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        // if(nx.crashSeqIdx[NUM].stepIdx === 20 && !nx.crashSeqIdx[NUM].dust4){//TRIGGER-DUST-POOF-.
                            // debugger;
                            // nx.crashSeqIdx[NUM].dust4=1;
                            // nx.createDustPoof({pos:{x: -410, y: 10, z: 304}});
                        // }

                        // nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,nx.crashSeqIdx[NUM].smoothYCam,nx.crashSeqIdx[NUM].smoothZCam) ); //SMOOTH-CAM-.
                        // nx.orbyMesh.rotation.x -= 0.02; //spinning crash
// console.log('crashcam9')
                        // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.crashSeqIdx[1].curPOS.rot.x,nx.crashSeqIdx[1].curPOS.rot.y,nx.crashSeqIdx[1].curPOS.rot.z,nx.crashSeqIdx[1].curPOS.rot.w);
                        // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                    }, complete:function(){ 
                            // nx.crashSeqIdx[NUM].initAnm = 0; 
                            // debugger;
                            nx.affirmSeqIdx[NUM+1] = {on:1};
                        } //NEXT-SUB-SEQUENCE-. 
                    });//end anm


                },1000)//look then cam zoom


            }

            else if(nx.affirmSeqIdx[5] && nx.affirmSeqIdx[5].on){ var NUM = 5; nx.affirmSeqIdx[NUM].on=0; //one-time-.

                // nx.orbyMesh.rotation.x = 0;
                // nx.orbyMesh.rotation.y = -2.4;

                $({orbyPOSx:-410.5,orbyPOSy:3,orbyPOSz:308}).
                animate({orbyPOSx:-410.5,orbyPOSy:5,orbyPOSz:308},{queue:false,duration:3000,easing:'swing',
                step: function(now) { //ANM:- =----------------------------------------------------------------ORBY RISES UP-.
                    if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                    nx.orbyMesh.position = new BABYLON.Vector3(this.orbyPOSx,this.orbyPOSy,this.orbyPOSz) //todo remove x and y from interpolation
                    nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                }, complete:function(){ 
                    // debugger;//no title?
                        nx.ui.flashCanvasMSG({title:'Quest Path!',txt:'Land on AlphaMoon!',dur:4000,
                            txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
                                //TODO: sonic ding here-. and quest complete badge
                            },
                            txtEnd:function(){ //For signaling next GAME SEQ as TXT fades out-.
                                
                                // debugger;
                                nx.affirmSeqIdx[NUM+1]={on:1};  //next frame-.

                                // nx.stopMovie({fadeCurtain:1,dur:1000});
                                // setTimeout(function(){
                                //     nx.gameInit({gameID:5})//SCAN SPACETRAIN!
                                // },500) //avoid flicker on fadeout-.

                                // nx.gameInit({gameID:5}); //softload: Scan SpaceTrain!
                            }
                        });   
                    } //NEXT-SUB-SEQUENCE-. 
                }); //end anm-.
            } //end frame
            
            else if(nx.affirmSeqIdx[6] && nx.affirmSeqIdx[6].on){ var NUM = 6; nx.affirmSeqIdx[NUM].on=0; //one-time-.
                
                nx.initSEQ({epicID:8})//SCAN-TRAIN-SEQUENCE

            } //end frame



            //TEMPLATE: simple frame-.
            // else if(nx.affirmSeqIdx[6] && nx.affirmSeqIdx[6].on){ var NUM = 6; nx.affirmSeqIdx[NUM].on=0; //one-time-.
            // } //end frame

            //TEMPLATE: new FRAME - use this to add new SEQUENCE empty frames.
            // else if(nx.affirmSeqIdx[1] && nx.affirmSeqIdx[1].on){ var NUM = 1;
            //     if(!nx.affirmSeqIdx[NUM].init){ nx.affirmSeqIdx[NUM].init=1; //one-time-.
                        // nx.affirmSeqIdx[NUM].on=0;  //stop this frame-.
                        // nx.affirmSeqIdx[NUM+1]={on:1};  //next frame-.
            //         debugger;
            //     }                
            // } 

            //TEMPLATE: TXTUSAGE:
            // nx.ui.flashCanvasMSG({title:'1',txt:'Good',dur:3000,
            //         txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
            //             //TODO: add GUI updates sonics here-.
            //         },
            //         txtEnd:function(){ //For signaling next GAME SEQ as TXT fades out-.
            //             // debugger;
            //         }
            //     });  

            //TEMPLATE-sequence loop with first frame
            // } else if(seqName==="ScanTrainSequence"){ //----------------SCANTRAIN-SEQUENCE---.
                // nx.startCinematicSequence(function(){ 
                    // if(nx.scanTrainSeqIdx[0] && nx.scanTrainSeqIdx[0].on){ var NUM = 0; nx.scanTrainSeqIdx[NUM].on=0;
                // }//end frame
            // }) //end sequence loop


        });//end fn
    // } //END-SEQUENCE-.

    } else if(seqName==="ScanTrainSequence"){ //-----------------------------------------------------------------SCANTRAIN-SEQUENCE---.
        nx.startCinematicSequence(function(){ 
            if(nx.scanTrainSeqIdx[0] && nx.scanTrainSeqIdx[0].on){ var NUM = 0; nx.scanTrainSeqIdx[NUM].on=0;
    // debugger;

                //CAM-INIT-------------------------
                nx.initFreeCam();
                nx.camz.freeCam.position.copyFrom({x: -478.1365031303217, y: 21.321846007235653, z: 364.63460065228054}); //CAMPOS: gamestart spacetrain
                nx.camz.freeCam.setTarget(nx.BV32({x: -474.090460708942, y: 21.995056915796674, z: 361.6818477126597}));


                //ORBY-INIT------------------------------------------------
                nx.orbyMesh.position.copyFrom({x: -418.0711228317587, y: 14.892315408405217, z: 318.1141529417893}); //START ACTORPOS of GO GEMZ1
                // nx.orbyMesh.position = new BABYLON.Vector3(-2500,3933,-1500); //START ACTORPOS of GO GEMZ1
                // nx.orbyMesh.rotation = new BABYLON.Vector3(0,Math.PI,0); //align-initial-rotation-.
                nx.orbyMesh.rotationQuaternion = null;
                nx.orbyMesh.rotation = new BABYLON.Vector3(0,0,0); //align-initial-rotation-.
                nx.orbyMesh.rotation.y = -1; //add custom rotation
                // nx.orbyMesh.rotation = new BABYLON.Vector3(-1,Math.PI/2,0); //align-initial-rotation-.
                nx.anmz.orby.rig.originBox.rotation = nx.BV3(0,0,0); //nx.orbyMesh.rotation.y;
                nx.anmz.orby.rig.originBox.rotation.y = 2.2; //weird rotation fix-.
                // nx.anmz.orby.rig.originBox.rotation.y = Math.PI/2; //nx.orbyMesh.rotation.y;
                // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y;
                nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);
        
                nx.scene.stopAnimation(nx.orbySkeleton[0])      //---------------------ANM: FREEZE-ORBY-.
                nx.anmz.orby.idle = 1; //FIX: keep orby frozen; //todo removable?
                // nx.anmz.orby.forceIdle = 1; //FREEZE ORBY MOVEMENTS and HOVER -.
                nx.anmz.orby.forceIdle = 0; //DO NOT HOVER on FOLLOWCAM -.
           
                // if(nx.orbySparks){nx.orbySparks.stop();}
                 if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.stop();}
        

                nx.ui.flashCanvasMSG({txt:'Chapter 2: SpaceTrain Wreck',dur:2000,txtInit:function(){
                }}); 

                if(nx.cinemaPlayAll){ //auto call the movie.
                    // nx.initSEQ({epicID:7}); /* affirmation seq todo orby skip game scane sequence*/
                    nx.scanTrainSeqIdx[NUM+1]={on:1};  //next frame-.
                }else{
                    nx.ui.flashCanvasMSG({txtIcon:'',persist:true,
                    txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
                        // nx.ui.showMovieModeView()
                    }, btns:{
                        movieFn:function(){ 
                            
                            //TODO: this is needs to be orby scan
                            nx.scanTrainSeqIdx[NUM+1]={on:1};  //next frame-.
                            // nx.initSEQ({epicID:9})//FINALSEQUENCE

                        },
                        gameFn: function(){
                            // debugger;
                            nx.stopMovie({fadeCurtain:1,dur:3000,
                                initFn:function(){
                                    nx.gameInit({gameID:5}); //open world scan game
                                },
                                endFn:function(){
                                    setTimeout(function(){
                                        nx.gameRun({gameID:5});
                                    },3000)
                            }}); 
                            // debugger;
                        },
                        bookFn: function(){ /*todo autolink to quests*/ }
                    }
                    });
                }
            }//end frame

            else if(nx.scanTrainSeqIdx[1] && nx.scanTrainSeqIdx[1].on){ var NUM = 1; //nx.scanTrainSeqIdx[NUM].on=0; //one-time-.
                //SCAN TRAIN SEQUENCE-.
                // if(nx.doorSeqIdx[3] && nx.scanTrainSeqIdx[3].on){ var NUM = 3;
                if(!nx.scanTrainSeqIdx[NUM].init){ nx.scanTrainSeqIdx[NUM].init=1; //one time init
                    nx.initFollowCam();
                    // nx.camz.freeCam.position.copyFrom({x: 125.91809305164549, y: 252.910231776879, z: -113.34096907171961}); 
                    nx.scanTrainSeqIdx[NUM].runAnm = 0; //ANMETHODOLOGY 0 off 1 on-. 
                    nx.scanTrainSeqIdx[NUM].stepIdx = 0;
                    nx.scanTrainSeqIdx[NUM].anmSpeed = 20;//50;//85;
                    //initialize-path and edit-.
                    // nx.scanTrainSeqIdx[NUM].orbyJumpDunePATH = [{"pos":{"x":-417.59,"y":13.34,"z":317.76},"rot":{"x":0.13,"y":-0.95,"z":-0.01}},{"pos":{"x":-416.62,"y":13.5,"z":317.05},"rot":{"x":0.13,"y":-0.95,"z":-0.01}},{"pos":{"x":-415.65,"y":13.66,"z":316.34},"rot":{"x":0.13,"y":-0.95,"z":0}},{"pos":{"x":-414.68,"y":13.82,"z":315.64},"rot":{"x":-0.34,"y":-0.95,"z":0}},{"pos":{"x":-413.71,"y":13.51,"z":314.93},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-412.74,"y":12.51,"z":314.23},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-411.77,"y":11.5,"z":313.52},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-410.8,"y":10.5,"z":312.81},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-409.83,"y":9.5,"z":312.11},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-408.86,"y":8.5,"z":311.4},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-407.89,"y":7.49,"z":310.69},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-406.92,"y":6.49,"z":309.99},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-405.95,"y":5.49,"z":309.28},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-404.98,"y":4.48,"z":308.58},"rot":{"x":-0.65,"y":-0.95,"z":0}},{"pos":{"x":-404.01,"y":3.48,"z":307.87},"rot":{"x":-0.5,"y":-0.95,"z":0}},{"pos":{"x":-403.04,"y":2.48,"z":307.16},"rot":{"x":-0.17,"y":-0.95,"z":0}},{"pos":{"x":-402.07,"y":2.2,"z":306.46},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-401.1,"y":2.2,"z":305.75},"rot":{"x":-0.16,"y":-0.95,"z":0}},{"pos":{"x":-400.13,"y":2,"z":305.04},"rot":{"x":-0.01,"y":-0.95,"z":-0.01}},{"pos":{"x":-399.16,"y":2,"z":304.34},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-398.19,"y":2,"z":303.63},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-397.22,"y":2,"z":302.93},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-396.25,"y":2,"z":302.22},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-395.28,"y":2,"z":301.51},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-394.31,"y":2,"z":300.81},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-393.34,"y":2,"z":300.1},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-392.37,"y":2,"z":299.4},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-391.4,"y":2,"z":298.69},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-390.43,"y":2,"z":297.98},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-389.45,"y":2,"z":297.28},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-388.48,"y":2,"z":296.57},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-387.51,"y":2,"z":295.86},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-386.54,"y":2,"z":295.16},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-385.57,"y":2,"z":294.45},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-384.6,"y":2,"z":293.75},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-383.63,"y":2,"z":293.04},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-382.66,"y":2,"z":292.33},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-381.69,"y":2,"z":291.63},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-380.72,"y":2,"z":290.92},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-379.75,"y":2,"z":290.22},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-378.78,"y":2,"z":289.51},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-377.81,"y":2,"z":288.8},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-376.84,"y":2,"z":288.1},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-375.87,"y":2,"z":287.39},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-374.9,"y":2,"z":286.68},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-373.93,"y":2,"z":285.98},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-372.96,"y":2,"z":285.27},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-371.99,"y":2,"z":284.57},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-371.02,"y":2,"z":283.86},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-370.05,"y":2,"z":283.15},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-369.08,"y":2,"z":282.45},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-368.13,"y":2,"z":281.72},"rot":{"x":0,"y":-0.9,"z":0.2}},{"pos":{"x":-367.25,"y":2,"z":280.9},"rot":{"x":0,"y":-0.8,"z":0.2}},{"pos":{"x":-366.47,"y":2,"z":279.99},"rot":{"x":0,"y":-0.7,"z":0.2}},{"pos":{"x":-365.77,"y":2,"z":279.01},"rot":{"x":0,"y":-0.6,"z":0.2}},{"pos":{"x":-365.18,"y":2,"z":277.97},"rot":{"x":0,"y":-0.5,"z":0.2}},{"pos":{"x":-364.69,"y":2,"z":276.87},"rot":{"x":0,"y":-0.4,"z":0.2}},{"pos":{"x":-364.32,"y":2,"z":275.73},"rot":{"x":-0.01,"y":-0.3,"z":0.2}},{"pos":{"x":-364.06,"y":2,"z":274.56},"rot":{"x":0,"y":-0.2,"z":0.2}},{"pos":{"x":-363.92,"y":2,"z":273.37},"rot":{"x":0,"y":-0.1,"z":0.2}},{"pos":{"x":-363.9,"y":2,"z":272.17},"rot":{"x":-0.01,"y":0,"z":0.2}},{"pos":{"x":-364,"y":2,"z":270.97},"rot":{"x":0,"y":0.1,"z":0.2}},{"pos":{"x":-364.22,"y":2,"z":269.79},"rot":{"x":0,"y":0.2,"z":0.2}},{"pos":{"x":-364.56,"y":2,"z":268.64},"rot":{"x":0,"y":0.3,"z":0.2}},{"pos":{"x":-365.01,"y":2,"z":267.53},"rot":{"x":0,"y":0.4,"z":0.2}},{"pos":{"x":-365.56,"y":2,"z":266.47},"rot":{"x":-0.01,"y":0.5,"z":0.2}},{"pos":{"x":-366.23,"y":2,"z":265.47},"rot":{"x":0,"y":0.6,"z":0.2}},{"pos":{"x":-366.98,"y":2,"z":264.54},"rot":{"x":0,"y":0.7,"z":0.2}},{"pos":{"x":-367.83,"y":2,"z":263.69},"rot":{"x":-0.01,"y":0.8,"z":0.2}},{"pos":{"x":-368.76,"y":2,"z":262.93},"rot":{"x":0,"y":0.9,"z":0.2}},{"pos":{"x":-369.75,"y":2,"z":262.26},"rot":{"x":-0.01,"y":1,"z":0.2}},{"pos":{"x":-370.81,"y":2,"z":261.7},"rot":{"x":-0.01,"y":1.1,"z":0.2}},{"pos":{"x":-371.93,"y":2,"z":261.25},"rot":{"x":0,"y":1.2,"z":0.2}},{"pos":{"x":-373.08,"y":2,"z":260.91},"rot":{"x":-0.01,"y":1.3,"z":0.2}},{"pos":{"x":-374.25,"y":2,"z":260.68},"rot":{"x":0,"y":1.4,"z":0.2}},{"pos":{"x":-375.45,"y":2,"z":260.55},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-376.64,"y":2,"z":260.41},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-377.83,"y":2,"z":260.28},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-379.02,"y":2,"z":260.14},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-380.22,"y":2,"z":260.01},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-381.41,"y":2,"z":259.88},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-382.6,"y":2,"z":259.74},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-383.79,"y":2,"z":259.61},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-384.99,"y":2,"z":259.47},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-386.18,"y":2,"z":259.34},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-387.37,"y":2,"z":259.2},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-388.56,"y":2,"z":259.07},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-389.76,"y":2,"z":258.93},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-390.95,"y":2,"z":258.8},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-392.14,"y":2,"z":258.66},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-393.33,"y":2,"z":258.53},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-394.53,"y":2,"z":258.39},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-395.72,"y":2,"z":258.26},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-396.91,"y":2,"z":258.13},"rot":{"x":0,"y":1.45,"z":0}},{"pos":{"x":-398.11,"y":2,"z":258.08},"rot":{"x":0,"y":1.55,"z":0.2}},{"pos":{"x":-399.31,"y":2,"z":258.16},"rot":{"x":0,"y":1.65,"z":0.2}},{"pos":{"x":-400.49,"y":2,"z":258.35},"rot":{"x":-0.01,"y":1.75,"z":0.2}},{"pos":{"x":-401.65,"y":2,"z":258.66},"rot":{"x":0,"y":1.85,"z":0.2}},{"pos":{"x":-402.77,"y":2,"z":259.09},"rot":{"x":0,"y":1.95,"z":0.2}},{"pos":{"x":-403.84,"y":2,"z":259.62},"rot":{"x":-0.01,"y":2.05,"z":0.19}},{"pos":{"x":-404.86,"y":2,"z":260.26},"rot":{"x":0,"y":2.15,"z":0.2}},{"pos":{"x":-405.8,"y":2,"z":261},"rot":{"x":0,"y":2.25,"z":0.2}},{"pos":{"x":-406.67,"y":2,"z":261.83},"rot":{"x":0,"y":2.35,"z":0.2}},{"pos":{"x":-407.45,"y":2,"z":262.74},"rot":{"x":0,"y":2.45,"z":0.2}},{"pos":{"x":-408.14,"y":2,"z":263.72},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-408.72,"y":2,"z":264.77},"rot":{"x":0,"y":2.65,"z":0.2}},{"pos":{"x":-409.2,"y":2,"z":265.87},"rot":{"x":0,"y":2.75,"z":0.2}},{"pos":{"x":-409.56,"y":2,"z":267.02},"rot":{"x":-0.01,"y":2.85,"z":0.2}},{"pos":{"x":-409.81,"y":2,"z":268.19},"rot":{"x":-0.01,"y":2.95,"z":0.2}},{"pos":{"x":-410.03,"y":2,"z":269.37},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-410.25,"y":2,"z":270.55},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-410.47,"y":2,"z":271.73},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-410.68,"y":2,"z":272.91},"rot":{"x":0.05,"y":2.95,"z":0}},{"pos":{"x":-410.9,"y":2.07,"z":274.09},"rot":{"x":0.26,"y":2.95,"z":0}},{"pos":{"x":-411.12,"y":2.52,"z":275.27},"rot":{"x":0.6,"y":2.95,"z":0}},{"pos":{"x":-411.34,"y":3.36,"z":276.45},"rot":{"x":0.6,"y":2.95,"z":0}},{"pos":{"x":-411.56,"y":4.2,"z":277.63},"rot":{"x":0.6,"y":2.95,"z":0}},{"pos":{"x":-411.78,"y":5.03,"z":278.81},"rot":{"x":0.6,"y":2.95,"z":0}},{"pos":{"x":-412,"y":5.87,"z":279.99},"rot":{"x":0.6,"y":2.95,"z":-0.01}},{"pos":{"x":-412.24,"y":6.71,"z":281.16},"rot":{"x":0.6,"y":2.89,"z":-0.24}},{"pos":{"x":-412.61,"y":7.55,"z":282.31},"rot":{"x":0.61,"y":2.79,"z":-0.24}},{"pos":{"x":-413.08,"y":8.41,"z":283.41},"rot":{"x":0.61,"y":2.69,"z":-0.24}},{"pos":{"x":-413.59,"y":9.26,"z":284.5},"rot":{"x":0.61,"y":2.7,"z":0}},{"pos":{"x":-414.09,"y":10.12,"z":285.59},"rot":{"x":0.61,"y":2.7,"z":0}},{"pos":{"x":-414.59,"y":10.97,"z":286.68},"rot":{"x":0.61,"y":2.7,"z":0}},{"pos":{"x":-415.1,"y":11.82,"z":287.76},"rot":{"x":0.61,"y":2.7,"z":0}},{"pos":{"x":-415.6,"y":12.68,"z":288.85},"rot":{"x":0.61,"y":2.7,"z":-0.01}},{"pos":{"x":-416.11,"y":13.53,"z":289.94},"rot":{"x":0.61,"y":2.7,"z":0}},{"pos":{"x":-416.61,"y":14.39,"z":291.03},"rot":{"x":0.61,"y":2.7,"z":0}},{"pos":{"x":-417.11,"y":14.86,"z":292.12},"rot":{"x":0,"y":2.7,"z":-0.01}},{"pos":{"x":-417.62,"y":14.87,"z":293.21},"rot":{"x":0,"y":2.7,"z":-0.01}},{"pos":{"x":-418.12,"y":14.89,"z":294.3},"rot":{"x":0.29,"y":2.7,"z":0}},{"pos":{"x":-418.62,"y":15.3,"z":295.39},"rot":{"x":0.46,"y":2.7,"z":0}},{"pos":{"x":-419.13,"y":15.9,"z":296.48},"rot":{"x":0.46,"y":2.7,"z":0}},{"pos":{"x":-419.63,"y":16.5,"z":297.57},"rot":{"x":0.46,"y":2.7,"z":-0.01}},{"pos":{"x":-419.88,"y":18.5,"z":298.11},"rot":{"x":0.46,"y":2.7,"z":-0.01}},{"pos":{"x":-420.39,"y":18.5,"z":299.2},"rot":{"x":0.46,"y":2.7,"z":-0.01}},{"pos":{"x":-420.64,"y":19.5,"z":299.75},"rot":{"x":0.46,"y":2.7,"z":-0.01}},{"pos":{"x":-421.14,"y":20.3,"z":300.83},"rot":{"x":0.46,"y":2.7,"z":-0.01}},{"pos":{"x":-421.65,"y":21.7,"z":301.92},"rot":{"x":0.46,"y":2.72,"z":0}},{"pos":{"x":-422.15,"y":22.9,"z":303.01},"rot":{"x":0.45,"y":2.94,"z":0.1}},{"pos":{"x":-422.65,"y":23.7,"z":304.1},"rot":{"x":0.29,"y":-2.68,"z":0.35}},{"pos":{"x":-423.16,"y":24.1,"z":305.19},"rot":{"x":-0.23,"y":-1.54,"z":0.41}},{"pos":{"x":-423.66,"y":24.5,"z":306.28},"rot":{"x":-0.25,"y":0.61,"z":-0.4}},{"pos":{"x":-424.16,"y":24.9,"z":307.37},"rot":{"x":0.31,"y":-2.71,"z":0.34}},{"pos":{"x":-424.67,"y":25.3,"z":308.46},"rot":{"x":0.03,"y":1.2,"z":-0.47}},{"pos":{"x":-425.17,"y":25.7,"z":309.55},"rot":{"x":-0.46,"y":-0.29,"z":-0.07}},{"pos":{"x":-425.68,"y":26.1,"z":310.64},"rot":{"x":-0.38,"y":-1.11,"z":0.28}},{"pos":{"x":-426.18,"y":26.5,"z":311.73},"rot":{"x":-0.28,"y":-1.41,"z":0.37}},{"pos":{"x":-426.68,"y":26.9,"z":312.82},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-427.19,"y":27.3,"z":313.9},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-427.69,"y":27.7,"z":314.99},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-428.19,"y":26.7,"z":316.08},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-428.7,"y":25.7,"z":317.17},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-429.2,"y":24.7,"z":318.26},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-429.71,"y":23.7,"z":319.35},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-430.21,"y":22.7,"z":320.44},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-430.71,"y":21.7,"z":321.53},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-431.22,"y":20.7,"z":322.62},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-431.72,"y":19.7,"z":323.71},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-432.22,"y":18.7,"z":324.8},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-432.64,"y":17.7,"z":325.92},"rot":{"x":0,"y":3.24,"z":0}},{"pos":{"x":-432.95,"y":16.7,"z":327.08},"rot":{"x":0,"y":3.34,"z":0}},{"pos":{"x":-433.14,"y":15.7,"z":328.26},"rot":{"x":0,"y":3.44,"z":0}},{"pos":{"x":-433.21,"y":14.7,"z":329.46},"rot":{"x":0,"y":3.54,"z":0}},{"pos":{"x":-433.16,"y":13.7,"z":330.66},"rot":{"x":0,"y":3.64,"z":0}},{"pos":{"x":-432.99,"y":12.7,"z":331.85},"rot":{"x":0,"y":3.74,"z":0}},{"pos":{"x":-432.7,"y":11.7,"z":333.01},"rot":{"x":0,"y":3.84,"z":0}},{"pos":{"x":-432.3,"y":10.7,"z":334.14},"rot":{"x":0,"y":3.94,"z":0}},{"pos":{"x":-431.79,"y":9.7,"z":335.23},"rot":{"x":0,"y":4.04,"z":0}},{"pos":{"x":-431.17,"y":8.7,"z":336.25},"rot":{"x":0,"y":4.14,"z":0}},{"pos":{"x":-430.45,"y":7.7,"z":337.22},"rot":{"x":0,"y":4.24,"z":0}},{"pos":{"x":-429.64,"y":6.7,"z":338.1},"rot":{"x":0,"y":4.34,"z":0}},{"pos":{"x":-428.75,"y":5.7,"z":338.9},"rot":{"x":0,"y":4.44,"z":0}},{"pos":{"x":-428.29,"y":5.96,"z":339.29},"rot":{"x":-0.38,"y":-2.28,"z":-0.01}},{"pos":{"x":-427.37,"y":5.49,"z":340.06},"rot":{"x":-0.38,"y":-2.28,"z":0}},{"pos":{"x":-426.46,"y":5.02,"z":340.84},"rot":{"x":-0.38,"y":-2.28,"z":0}},{"pos":{"x":-425.54,"y":4.55,"z":341.62},"rot":{"x":-0.38,"y":-2.28,"z":0}},{"pos":{"x":-424.63,"y":4.07,"z":342.39},"rot":{"x":-0.38,"y":-2.28,"z":0}},{"pos":{"x":-423.71,"y":3.6,"z":343.17},"rot":{"x":-0.38,"y":-2.28,"z":0}},{"pos":{"x":-422.8,"y":3.13,"z":343.95},"rot":{"x":-0.38,"y":-2.28,"z":0}},{"pos":{"x":-421.89,"y":2.66,"z":344.72},"rot":{"x":-0.37,"y":-2.28,"z":0}},{"pos":{"x":-420.97,"y":2,"z":345.5},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-420.06,"y":2,"z":346.28},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-419.14,"y":2,"z":347.05},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-418.23,"y":2,"z":347.83},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-417.31,"y":2,"z":348.61},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-416.4,"y":2,"z":349.39},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-415.48,"y":2,"z":350.16},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-414.57,"y":2,"z":350.94},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-413.65,"y":2,"z":351.72},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-412.74,"y":2,"z":352.49},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-411.82,"y":2,"z":353.27},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-410.91,"y":2,"z":354.05},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-409.99,"y":2,"z":354.82},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-409.08,"y":2,"z":355.6},"rot":{"x":0,"y":-2.28,"z":0}},{"pos":{"x":-408.11,"y":2,"z":356.3},"rot":{"x":0,"y":-2.18,"z":0.2}},{"pos":{"x":-407.07,"y":2,"z":356.91},"rot":{"x":0,"y":-2.08,"z":0.2}},{"pos":{"x":-405.98,"y":2,"z":357.41},"rot":{"x":0,"y":-1.98,"z":0.2}},{"pos":{"x":-404.85,"y":2,"z":357.8},"rot":{"x":0,"y":-1.88,"z":0.2}},{"pos":{"x":-403.68,"y":2,"z":358.07},"rot":{"x":0,"y":-1.78,"z":0.2}},{"pos":{"x":-402.49,"y":2,"z":358.22},"rot":{"x":-0.01,"y":-1.68,"z":0.2}},{"pos":{"x":-401.29,"y":2,"z":358.26},"rot":{"x":0,"y":-1.58,"z":0.2}},{"pos":{"x":-400.09,"y":2,"z":358.17},"rot":{"x":0,"y":-1.48,"z":0.2}},{"pos":{"x":-398.91,"y":2,"z":357.97},"rot":{"x":-0.01,"y":-1.38,"z":0.2}},{"pos":{"x":-397.76,"y":2,"z":357.65},"rot":{"x":0,"y":-1.28,"z":0.2}},{"pos":{"x":-396.64,"y":2,"z":357.21},"rot":{"x":-0.01,"y":-1.18,"z":0.2}},{"pos":{"x":-395.57,"y":2,"z":356.67},"rot":{"x":0,"y":-1.08,"z":0.2}},{"pos":{"x":-394.56,"y":2,"z":356.02},"rot":{"x":0,"y":-0.98,"z":0.2}},{"pos":{"x":-393.62,"y":2,"z":355.27},"rot":{"x":-0.01,"y":-0.88,"z":0.19}},{"pos":{"x":-392.76,"y":2,"z":354.44},"rot":{"x":0,"y":-0.78,"z":0.2}},{"pos":{"x":-391.99,"y":2,"z":353.52},"rot":{"x":0,"y":-0.68,"z":0.2}},{"pos":{"x":-391.31,"y":2,"z":352.53},"rot":{"x":0,"y":-0.58,"z":0.2}},{"pos":{"x":-390.73,"y":2,"z":351.48},"rot":{"x":0,"y":-0.48,"z":0.2}},{"pos":{"x":-390.27,"y":2,"z":350.37},"rot":{"x":-0.01,"y":-0.38,"z":0.2}},{"pos":{"x":-389.91,"y":2,"z":349.23},"rot":{"x":0,"y":-0.28,"z":0.2}},{"pos":{"x":-389.68,"y":2,"z":348.05},"rot":{"x":0,"y":-0.18,"z":0.2}},{"pos":{"x":-389.56,"y":2,"z":346.86},"rot":{"x":0,"y":-0.08,"z":0.2}},{"pos":{"x":-389.56,"y":2,"z":345.66},"rot":{"x":0,"y":0.02,"z":0.2}},{"pos":{"x":-389.68,"y":2,"z":344.46},"rot":{"x":0,"y":0.12,"z":0.2}},{"pos":{"x":-389.91,"y":2,"z":343.29},"rot":{"x":0,"y":0.22,"z":0.2}},{"pos":{"x":-390.24,"y":2,"z":342.13},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-390.57,"y":2,"z":340.98},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-390.89,"y":2,"z":339.82},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-391.22,"y":2,"z":338.67},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-391.55,"y":2,"z":337.51},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-391.87,"y":2,"z":336.36},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-392.2,"y":2,"z":335.2},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-392.52,"y":2,"z":334.05},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-392.85,"y":2,"z":332.89},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-393.18,"y":2,"z":331.74},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-393.5,"y":2,"z":330.58},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-393.83,"y":2,"z":329.43},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-394.15,"y":2,"z":328.27},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-394.48,"y":2,"z":327.12},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-394.81,"y":2,"z":325.97},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-395.13,"y":2,"z":324.81},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-395.46,"y":2,"z":323.66},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-395.78,"y":2,"z":322.5},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-396.11,"y":2,"z":321.35},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-396.44,"y":2,"z":320.19},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-396.76,"y":2,"z":319.04},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-397.09,"y":2,"z":317.88},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-397.42,"y":2,"z":316.73},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-397.74,"y":2,"z":315.57},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-398.07,"y":2,"z":314.42},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-398.39,"y":2,"z":313.26},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-398.72,"y":2,"z":312.11},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-399.02,"y":2,"z":310.94},"rot":{"x":0,"y":0.22,"z":-0.2}},{"pos":{"x":-399.2,"y":2,"z":309.76},"rot":{"x":0,"y":0.12,"z":-0.21}},{"pos":{"x":-399.26,"y":2,"z":308.56},"rot":{"x":0,"y":0.02,"z":-0.21}},{"pos":{"x":-399.2,"y":2,"z":307.36},"rot":{"x":-0.01,"y":-0.08,"z":-0.2}},{"pos":{"x":-399.02,"y":2,"z":306.18},"rot":{"x":0,"y":-0.18,"z":-0.2}},{"pos":{"x":-398.72,"y":2,"z":305.01},"rot":{"x":0,"y":-0.28,"z":-0.2}},{"pos":{"x":-398.31,"y":2,"z":303.89},"rot":{"x":-0.01,"y":-0.38,"z":-0.2}},{"pos":{"x":-397.79,"y":2,"z":302.81},"rot":{"x":0,"y":-0.48,"z":-0.2}},{"pos":{"x":-397.24,"y":2,"z":301.74},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-396.69,"y":2,"z":300.67},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-396.14,"y":2,"z":299.6},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-395.59,"y":2,"z":298.54},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-395.05,"y":2,"z":297.47},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-394.5,"y":2,"z":296.4},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-393.95,"y":2,"z":295.34},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-393.4,"y":2,"z":294.27},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-392.85,"y":2,"z":293.2},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-392.3,"y":2,"z":292.13},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-391.75,"y":2,"z":291.07},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-391.21,"y":2,"z":290},"rot":{"x":0,"y":-0.48,"z":0}},{"pos":{"x":-390.63,"y":2,"z":288.95},"rot":{"x":0,"y":-0.53,"z":-0.2}},{"pos":{"x":-389.95,"y":2,"z":287.96},"rot":{"x":0,"y":-0.63,"z":-0.2}},{"pos":{"x":-389.18,"y":2,"z":287.04},"rot":{"x":0,"y":-0.73,"z":-0.2}},{"pos":{"x":-388.32,"y":2,"z":286.2},"rot":{"x":0,"y":-0.83,"z":-0.2}},{"pos":{"x":-387.38,"y":2,"z":285.46},"rot":{"x":0,"y":-0.93,"z":-0.2}},{"pos":{"x":-386.37,"y":2,"z":284.81},"rot":{"x":0,"y":-1.03,"z":-0.2}},{"pos":{"x":-385.3,"y":2,"z":284.26},"rot":{"x":-0.01,"y":-1.13,"z":-0.21}},{"pos":{"x":-384.18,"y":2,"z":283.83},"rot":{"x":0,"y":-1.23,"z":-0.2}},{"pos":{"x":-383.03,"y":2,"z":283.51},"rot":{"x":0,"y":-1.33,"z":-0.2}},{"pos":{"x":-381.85,"y":2,"z":283.3},"rot":{"x":-0.01,"y":-1.43,"z":-0.2}},{"pos":{"x":-380.65,"y":2,"z":283.22},"rot":{"x":0,"y":-1.53,"z":-0.2}},{"pos":{"x":-379.45,"y":2,"z":283.22},"rot":{"x":0,"y":-1.58,"z":0}},{"pos":{"x":-378.25,"y":2,"z":283.23},"rot":{"x":0,"y":-1.58,"z":0}},{"pos":{"x":-377.05,"y":2,"z":283.29},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-375.85,"y":2,"z":283.36},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-374.66,"y":2,"z":283.42},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-373.46,"y":2,"z":283.49},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-372.26,"y":2,"z":283.55},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-371.06,"y":2,"z":283.62},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-369.86,"y":2,"z":283.68},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-368.66,"y":2,"z":283.75},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-367.47,"y":2,"z":283.81},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-366.27,"y":2,"z":283.88},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-365.07,"y":2,"z":283.94},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-363.87,"y":2,"z":284.01},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-362.67,"y":2,"z":284.07},"rot":{"x":0,"y":-1.63,"z":-0.01}},{"pos":{"x":-361.47,"y":2,"z":284.13},"rot":{"x":0,"y":-1.63,"z":-0.01}}]
                    // nx.scanTrainSeqIdx[NUM].orbyJumpDunePATH = [{"pos":{"x":-417.59,"y":13.34,"z":317.76},"rot":{"x":0.13,"y":-0.95,"z":-0.01}},{"pos":{"x":-416.62,"y":13.5,"z":317.05},"rot":{"x":0.13,"y":-0.95,"z":-0.01}},{"pos":{"x":-415.65,"y":13.66,"z":316.34},"rot":{"x":0.13,"y":-0.95,"z":0}},{"pos":{"x":-414.68,"y":13.82,"z":315.64},"rot":{"x":-0.34,"y":-0.95,"z":0}},{"pos":{"x":-413.71,"y":13.51,"z":314.93},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-412.74,"y":12.51,"z":314.23},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-411.77,"y":11.5,"z":313.52},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-410.8,"y":10.5,"z":312.81},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-409.83,"y":9.5,"z":312.11},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-408.86,"y":8.5,"z":311.4},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-407.89,"y":7.49,"z":310.69},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-406.92,"y":6.49,"z":309.99},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-405.95,"y":5.49,"z":309.28},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-404.98,"y":4.48,"z":308.58},"rot":{"x":-0.65,"y":-0.95,"z":0}},{"pos":{"x":-404.01,"y":3.48,"z":307.87},"rot":{"x":-0.5,"y":-0.95,"z":0}},{"pos":{"x":-403.04,"y":2.48,"z":307.16},"rot":{"x":-0.17,"y":-0.95,"z":0}},{"pos":{"x":-402.07,"y":2.2,"z":306.46},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-401.1,"y":2.2,"z":305.75},"rot":{"x":-0.16,"y":-0.95,"z":0}},{"pos":{"x":-400.13,"y":2,"z":305.04},"rot":{"x":-0.01,"y":-0.95,"z":-0.01}},{"pos":{"x":-399.16,"y":2,"z":304.34},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-398.19,"y":2,"z":303.63},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-397.22,"y":2,"z":302.93},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-396.25,"y":2,"z":302.22},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-395.28,"y":2,"z":301.51},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-394.31,"y":2,"z":300.81},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-393.34,"y":2,"z":300.1},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-392.2,"y":2,"z":299.28},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-391.07,"y":2,"z":298.45},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-389.94,"y":2,"z":297.63},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-388.81,"y":2,"z":296.81},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-387.76,"y":2,"z":296.04},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-386.79,"y":2,"z":295.33},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-385.82,"y":2,"z":294.63},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-384.85,"y":2,"z":293.92},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-383.88,"y":2,"z":293.22},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-382.91,"y":2,"z":292.51},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-381.94,"y":2,"z":291.8},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-380.97,"y":2,"z":291.1},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-380,"y":2,"z":290.39},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-379.03,"y":2,"z":289.69},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-378.05,"y":2,"z":288.98},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-377.08,"y":2,"z":288.27},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-376.11,"y":2,"z":287.57},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-375.14,"y":2,"z":286.86},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-374.17,"y":2,"z":286.15},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-373.2,"y":2,"z":285.45},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-372.23,"y":2,"z":284.74},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-371.26,"y":2,"z":284.04},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-370.29,"y":2,"z":283.33},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-369.32,"y":2,"z":282.62},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-368.35,"y":2,"z":281.92},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-367.38,"y":2,"z":281.21},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-366.41,"y":2,"z":280.51},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-365.44,"y":2,"z":279.8},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-364.47,"y":2,"z":279.09},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-363.5,"y":2,"z":278.39},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-362.53,"y":2,"z":277.68},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-361.56,"y":2,"z":276.97},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-360.59,"y":2,"z":276.27},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-359.62,"y":2,"z":275.56},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-358.65,"y":2,"z":274.86},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-357.68,"y":2,"z":274.15},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-356.71,"y":2,"z":273.44},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-355.74,"y":2,"z":272.74},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-354.77,"y":2,"z":272.03},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-353.8,"y":2,"z":271.32},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-352.83,"y":2,"z":270.62},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-351.86,"y":2,"z":269.91},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-350.89,"y":2,"z":269.21},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-349.97,"y":2,"z":268.43},"rot":{"x":0,"y":-0.85,"z":0.2}},{"pos":{"x":-349.14,"y":2,"z":267.57},"rot":{"x":0,"y":-0.75,"z":0.2}},{"pos":{"x":-348.4,"y":2,"z":266.62},"rot":{"x":0,"y":-0.65,"z":0.2}},{"pos":{"x":-347.76,"y":2,"z":265.61},"rot":{"x":-0.01,"y":-0.55,"z":0.2}},{"pos":{"x":-347.22,"y":2,"z":264.54},"rot":{"x":0,"y":-0.45,"z":0.2}},{"pos":{"x":-346.79,"y":2,"z":263.42},"rot":{"x":0,"y":-0.35,"z":0.2}},{"pos":{"x":-346.47,"y":2,"z":262.26},"rot":{"x":0,"y":-0.25,"z":0.2}},{"pos":{"x":-346.24,"y":2,"z":261.08},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-346.01,"y":2,"z":259.91},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-345.79,"y":2,"z":258.73},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-345.56,"y":2,"z":257.55},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-345.33,"y":2,"z":256.37},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-345.1,"y":2,"z":255.19},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-344.87,"y":2,"z":254.02},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-344.64,"y":2,"z":252.84},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-344.41,"y":2,"z":251.66},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-344.19,"y":2,"z":250.48},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-343.96,"y":2,"z":249.3},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-343.82,"y":2,"z":248.11},"rot":{"x":0,"y":-0.1,"z":0.2}},{"pos":{"x":-343.8,"y":2,"z":246.91},"rot":{"x":0,"y":0,"z":0.2}},{"pos":{"x":-343.9,"y":2,"z":245.72},"rot":{"x":0,"y":0.1,"z":0.2}},{"pos":{"x":-344.12,"y":2,"z":244.54},"rot":{"x":0,"y":0.2,"z":0.2}},{"pos":{"x":-344.45,"y":2,"z":243.39},"rot":{"x":0,"y":0.3,"z":0.2}},{"pos":{"x":-344.9,"y":2,"z":242.27},"rot":{"x":0,"y":0.4,"z":0.2}},{"pos":{"x":-345.46,"y":2,"z":241.21},"rot":{"x":-0.01,"y":0.5,"z":0.2}},{"pos":{"x":-346.09,"y":2,"z":240.19},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-346.73,"y":2,"z":239.18},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-347.37,"y":2,"z":238.16},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-348,"y":2,"z":237.14},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-348.64,"y":2,"z":236.12},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-349.3,"y":2,"z":235.12},"rot":{"x":0,"y":0.6,"z":0.2}},{"pos":{"x":-350.06,"y":2,"z":234.19},"rot":{"x":0,"y":0.7,"z":0.2}},{"pos":{"x":-350.9,"y":2,"z":233.34},"rot":{"x":-0.01,"y":0.8,"z":0.2}},{"pos":{"x":-351.83,"y":2,"z":232.58},"rot":{"x":0,"y":0.9,"z":0.2}},{"pos":{"x":-352.83,"y":2,"z":231.92},"rot":{"x":-0.01,"y":1,"z":0.2}},{"pos":{"x":-353.89,"y":2,"z":231.35},"rot":{"x":-0.01,"y":1.1,"z":0.2}},{"pos":{"x":-355,"y":2,"z":230.9},"rot":{"x":0,"y":1.2,"z":0.2}},{"pos":{"x":-356.15,"y":2,"z":230.56},"rot":{"x":-0.01,"y":1.3,"z":0.2}},{"pos":{"x":-357.32,"y":2,"z":230.31},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-358.5,"y":2,"z":230.05},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-359.67,"y":2,"z":229.8},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-360.84,"y":2,"z":229.55},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-362.01,"y":2,"z":229.3},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-363.19,"y":2,"z":229.04},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-364.37,"y":2,"z":228.82},"rot":{"x":0,"y":1.4,"z":0.2}},{"pos":{"x":-365.56,"y":2,"z":228.71},"rot":{"x":0,"y":1.5,"z":0.2}},{"pos":{"x":-366.76,"y":2,"z":228.73},"rot":{"x":-0.01,"y":1.6,"z":0.2}},{"pos":{"x":-367.95,"y":2,"z":228.86},"rot":{"x":0,"y":1.7,"z":0.2}},{"pos":{"x":-369.13,"y":2,"z":229.12},"rot":{"x":0,"y":1.8,"z":0.2}},{"pos":{"x":-370.29,"y":2,"z":229.4},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-371.46,"y":2,"z":229.68},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-372.62,"y":2,"z":229.96},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-373.79,"y":2,"z":230.25},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-374.96,"y":2,"z":230.53},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-376.12,"y":2,"z":230.81},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-377.28,"y":2,"z":231.12},"rot":{"x":0,"y":1.85,"z":0.2}},{"pos":{"x":-378.4,"y":2,"z":231.55},"rot":{"x":0,"y":1.95,"z":0.2}},{"pos":{"x":-379.48,"y":2,"z":232.08},"rot":{"x":0,"y":2.05,"z":0.2}},{"pos":{"x":-380.49,"y":2,"z":232.72},"rot":{"x":0,"y":2.15,"z":0.2}},{"pos":{"x":-381.46,"y":2,"z":233.44},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-382.42,"y":2,"z":234.15},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-383.38,"y":2,"z":234.87},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-384.35,"y":2,"z":235.58},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-385.31,"y":2,"z":236.3},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-386.28,"y":2,"z":237.01},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-387.22,"y":2,"z":237.75},"rot":{"x":0,"y":2.25,"z":0.2}},{"pos":{"x":-388.09,"y":2,"z":238.58},"rot":{"x":-0.01,"y":2.35,"z":0.2}},{"pos":{"x":-388.87,"y":2,"z":239.49},"rot":{"x":0,"y":2.45,"z":0.2}},{"pos":{"x":-389.56,"y":2,"z":240.47},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-390.22,"y":2,"z":241.47},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-390.88,"y":2,"z":242.48},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-391.54,"y":2,"z":243.48},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-392.2,"y":2,"z":244.48},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-392.86,"y":2,"z":245.48},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-393.52,"y":2,"z":246.48},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-394.18,"y":2,"z":247.48},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-394.84,"y":2,"z":248.49},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-395.5,"y":2,"z":249.49},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-396.16,"y":2,"z":250.49},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-396.82,"y":2,"z":251.49},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-397.49,"y":2,"z":252.49},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-398.15,"y":2,"z":253.49},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-398.81,"y":2,"z":254.5},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-399.47,"y":2,"z":255.5},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-400.13,"y":2,"z":256.5},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-400.79,"y":2,"z":257.5},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-401.45,"y":2,"z":258.5},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-402.11,"y":2,"z":259.5},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-402.77,"y":2,"z":260.51},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-403.43,"y":2,"z":261.51},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-404.09,"y":2,"z":262.51},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-404.75,"y":2,"z":263.51},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-405.42,"y":2,"z":264.51},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-406.08,"y":2,"z":265.51},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-406.74,"y":2,"z":266.52},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-407.4,"y":2,"z":267.52},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-408.06,"y":2,"z":268.52},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-408.72,"y":2,"z":269.52},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-409.38,"y":2,"z":270.52},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-410.04,"y":2,"z":271.52},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-410.7,"y":2,"z":272.53},"rot":{"x":0,"y":2.55,"z":0}},{"pos":{"x":-411.36,"y":2.01,"z":273.53},"rot":{"x":0.16,"y":2.55,"z":0}},{"pos":{"x":-412.02,"y":2.28,"z":274.53},"rot":{"x":0.61,"y":2.55,"z":-0.01}},{"pos":{"x":-412.68,"y":3.12,"z":275.53},"rot":{"x":0.61,"y":2.55,"z":0}},{"pos":{"x":-413.35,"y":3.96,"z":276.53},"rot":{"x":0.61,"y":2.55,"z":0}},{"pos":{"x":-414.01,"y":4.8,"z":277.53},"rot":{"x":0.61,"y":2.55,"z":0}},{"pos":{"x":-414.67,"y":5.64,"z":278.54},"rot":{"x":0.61,"y":2.55,"z":0}},{"pos":{"x":-415.33,"y":6.48,"z":279.54},"rot":{"x":0.61,"y":2.55,"z":0}},{"pos":{"x":-415.99,"y":7.31,"z":280.54},"rot":{"x":0.61,"y":2.55,"z":-0.01}},{"pos":{"x":-416.65,"y":8.15,"z":281.54},"rot":{"x":0.61,"y":2.55,"z":0}},{"pos":{"x":-417.31,"y":8.99,"z":282.54},"rot":{"x":0.61,"y":2.55,"z":-0.01}},{"pos":{"x":-417.94,"y":9.83,"z":283.56},"rot":{"x":0.6,"y":2.61,"z":0.23}},{"pos":{"x":-418.48,"y":10.68,"z":284.64},"rot":{"x":0.61,"y":2.71,"z":0.23}},{"pos":{"x":-418.9,"y":11.53,"z":285.76},"rot":{"x":0.61,"y":2.81,"z":0.23}},{"pos":{"x":-419.29,"y":12.39,"z":286.89},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-419.68,"y":13.24,"z":288.03},"rot":{"x":0.61,"y":2.8,"z":-0.01}},{"pos":{"x":-420.07,"y":14.09,"z":289.16},"rot":{"x":0.61,"y":2.8,"z":-0.01}},{"pos":{"x":-420.47,"y":14.95,"z":290.29},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-420.86,"y":15.8,"z":291.43},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-421.25,"y":16.65,"z":292.56},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-421.64,"y":17.51,"z":293.7},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-422.04,"y":18.36,"z":294.83},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-422.43,"y":19.21,"z":295.96},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-422.62,"y":21.64,"z":296.53},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-423.02,"y":21.64,"z":297.67},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-423.41,"y":21.64,"z":298.8},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-423.8,"y":21.64,"z":299.93},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-424.19,"y":21.64,"z":301.07},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-424.59,"y":22.44,"z":302.2},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-424.98,"y":23.84,"z":303.34},"rot":{"x":0.61,"y":2.82,"z":0}},{"pos":{"x":-425.37,"y":25.04,"z":304.47},"rot":{"x":0.59,"y":3.11,"z":0.17}},{"pos":{"x":-425.76,"y":25.84,"z":305.6},"rot":{"x":0.36,"y":-2.49,"z":0.5}},{"pos":{"x":-426.16,"y":26.24,"z":306.74},"rot":{"x":-0.37,"y":-1.33,"z":0.5}},{"pos":{"x":-426.55,"y":26.64,"z":307.87},"rot":{"x":-0.21,"y":0.93,"z":-0.59}},{"pos":{"x":-426.94,"y":27.04,"z":309.01},"rot":{"x":0.26,"y":-2.31,"z":0.56}},{"pos":{"x":-427.33,"y":27.44,"z":310.14},"rot":{"x":0.24,"y":1.59,"z":-0.58}},{"pos":{"x":-427.73,"y":27.84,"z":311.27},"rot":{"x":-0.53,"y":0.28,"z":-0.35}},{"pos":{"x":-428.12,"y":28.24,"z":312.41},"rot":{"x":-0.6,"y":-0.64,"z":0.17}},{"pos":{"x":-428.51,"y":28.64,"z":313.54},"rot":{"x":-0.53,"y":-0.95,"z":0.34}},{"pos":{"x":-428.9,"y":29.04,"z":314.68},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-429.3,"y":29.44,"z":315.81},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-429.69,"y":29.14,"z":316.94},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-430.08,"y":28.14,"z":318.08},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-430.47,"y":27.14,"z":319.21},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-430.87,"y":26.14,"z":320.35},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-431.26,"y":25.14,"z":321.48},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-431.65,"y":24.14,"z":322.61},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-432.04,"y":23.14,"z":323.75},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-432.44,"y":22.14,"z":324.88},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-432.83,"y":21.14,"z":326.02},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-433.22,"y":20.14,"z":327.15},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-433.61,"y":19.14,"z":328.28},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-434.01,"y":18.14,"z":329.42},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-434.4,"y":17.14,"z":330.55},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-434.79,"y":16.14,"z":331.69},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-435.18,"y":15.14,"z":332.82},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-435.58,"y":14.14,"z":333.95},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-435.97,"y":13.14,"z":335.09},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-436.36,"y":12.14,"z":336.22},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-436.75,"y":11.14,"z":337.36},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-437.15,"y":10.14,"z":338.49},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-437.54,"y":9.14,"z":339.62},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-437.93,"y":8.14,"z":340.76},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-438.32,"y":7.14,"z":341.89},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-438.72,"y":6.14,"z":343.03},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-439.11,"y":5.14,"z":344.16},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-439.5,"y":4.14,"z":345.29},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-439.89,"y":3.14,"z":346.43},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-440.09,"y":3.42,"z":346.99},"rot":{"x":-0.38,"y":2.8,"z":0}},{"pos":{"x":-440.48,"y":2.95,"z":348.13},"rot":{"x":-0.38,"y":2.8,"z":0}},{"pos":{"x":-440.87,"y":2.49,"z":349.26},"rot":{"x":-0.3,"y":2.8,"z":0}},{"pos":{"x":-441.27,"y":2,"z":350.4},"rot":{"x":0,"y":2.8,"z":0}},{"pos":{"x":-441.66,"y":2,"z":351.53},"rot":{"x":-0.01,"y":2.8,"z":0}},{"pos":{"x":-442.05,"y":2,"z":352.66},"rot":{"x":-0.01,"y":2.8,"z":0}},{"pos":{"x":-442.36,"y":2,"z":353.82},"rot":{"x":-0.01,"y":2.9,"z":0.2}},{"pos":{"x":-442.55,"y":2,"z":355.01},"rot":{"x":0,"y":3,"z":0.2}},{"pos":{"x":-442.62,"y":2,"z":356.21},"rot":{"x":-0.01,"y":3.1,"z":0.2}},{"pos":{"x":-442.57,"y":2,"z":357.41},"rot":{"x":0,"y":-3.08,"z":0.19}},{"pos":{"x":-442.4,"y":2,"z":358.59},"rot":{"x":-0.01,"y":-2.98,"z":0.2}},{"pos":{"x":-442.11,"y":2,"z":359.76},"rot":{"x":0,"y":-2.88,"z":0.2}},{"pos":{"x":-441.71,"y":2,"z":360.89},"rot":{"x":0,"y":-2.78,"z":0.2}},{"pos":{"x":-441.22,"y":2,"z":361.99},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-440.74,"y":2,"z":363.08},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-440.25,"y":2,"z":364.18},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-439.76,"y":2,"z":365.28},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-439.28,"y":2,"z":366.37},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-438.79,"y":2,"z":367.47},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-438.31,"y":2,"z":368.57},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-437.82,"y":2,"z":369.67},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-437.33,"y":2,"z":370.76},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-436.82,"y":2,"z":371.85},"rot":{"x":0,"y":-2.68,"z":0.2}},{"pos":{"x":-436.2,"y":2,"z":372.88},"rot":{"x":0,"y":-2.58,"z":0.2}},{"pos":{"x":-435.49,"y":2,"z":373.84},"rot":{"x":0,"y":-2.48,"z":0.2}},{"pos":{"x":-434.67,"y":2,"z":374.72},"rot":{"x":0,"y":-2.38,"z":0.2}},{"pos":{"x":-433.8,"y":2,"z":375.54},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-432.93,"y":2,"z":376.36},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-432.05,"y":2,"z":377.19},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-431.18,"y":2,"z":378.01},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-430.3,"y":2,"z":378.83},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-429.43,"y":2,"z":379.65},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-428.55,"y":2,"z":380.47},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-427.68,"y":2,"z":381.29},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-426.8,"y":2,"z":382.11},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-425.93,"y":2,"z":382.94},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-425.05,"y":2,"z":383.76},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-424.18,"y":2,"z":384.58},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-423.3,"y":2,"z":385.4},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-422.43,"y":2,"z":386.22},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-421.55,"y":2,"z":387.04},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-420.68,"y":2,"z":387.86},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-419.8,"y":2,"z":388.69},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-418.93,"y":2,"z":389.51},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-418.05,"y":2,"z":390.33},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-417.18,"y":2,"z":391.15},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-416.3,"y":2,"z":391.97},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-415.43,"y":2,"z":392.79},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-414.56,"y":2,"z":393.62},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-413.68,"y":2,"z":394.44},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-412.81,"y":2,"z":395.26},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-411.93,"y":2,"z":396.08},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-411,"y":2,"z":396.83},"rot":{"x":-0.01,"y":-2.23,"z":0.2}},{"pos":{"x":-409.99,"y":2,"z":397.49},"rot":{"x":-0.01,"y":-2.13,"z":0.2}},{"pos":{"x":-408.93,"y":2,"z":398.04},"rot":{"x":0,"y":-2.03,"z":0.2}},{"pos":{"x":-407.81,"y":2,"z":398.49},"rot":{"x":-0.01,"y":-1.93,"z":0.2}},{"pos":{"x":-406.66,"y":2,"z":398.82},"rot":{"x":0,"y":-1.83,"z":0.2}},{"pos":{"x":-405.48,"y":2,"z":399.03},"rot":{"x":0,"y":-1.73,"z":0.2}},{"pos":{"x":-404.28,"y":2,"z":399.12},"rot":{"x":-0.01,"y":-1.63,"z":0.2}},{"pos":{"x":-403.09,"y":2,"z":399.1},"rot":{"x":0,"y":-1.53,"z":0.2}},{"pos":{"x":-401.89,"y":2,"z":398.95},"rot":{"x":0,"y":-1.43,"z":0.2}},{"pos":{"x":-400.72,"y":2,"z":398.69},"rot":{"x":0,"y":-1.33,"z":0.2}},{"pos":{"x":-399.59,"y":2,"z":398.31},"rot":{"x":-0.01,"y":-1.23,"z":0.2}},{"pos":{"x":-398.49,"y":2,"z":397.82},"rot":{"x":0,"y":-1.13,"z":0.2}},{"pos":{"x":-397.45,"y":2,"z":397.23},"rot":{"x":0,"y":-1.03,"z":0.2}},{"pos":{"x":-396.42,"y":2,"z":396.6},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-395.4,"y":2,"z":395.98},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-394.37,"y":2,"z":395.36},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-393.35,"y":2,"z":394.73},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-392.32,"y":2,"z":394.11},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-391.3,"y":2,"z":393.49},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-390.27,"y":2,"z":392.86},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-389.25,"y":2,"z":392.24},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-388.24,"y":2,"z":391.59},"rot":{"x":0,"y":-0.98,"z":0.2}},{"pos":{"x":-387.3,"y":2,"z":390.85},"rot":{"x":-0.01,"y":-0.88,"z":0.19}},{"pos":{"x":-386.44,"y":2,"z":390.01},"rot":{"x":0,"y":-0.78,"z":0.2}},{"pos":{"x":-385.66,"y":2,"z":389.09},"rot":{"x":0,"y":-0.68,"z":0.2}},{"pos":{"x":-384.99,"y":2,"z":388.1},"rot":{"x":0,"y":-0.58,"z":0.2}},{"pos":{"x":-384.41,"y":2,"z":387.05},"rot":{"x":0,"y":-0.48,"z":0.2}},{"pos":{"x":-383.95,"y":2,"z":385.94},"rot":{"x":-0.01,"y":-0.38,"z":0.2}},{"pos":{"x":-383.59,"y":2,"z":384.8},"rot":{"x":0,"y":-0.28,"z":0.2}},{"pos":{"x":-383.35,"y":2,"z":383.62},"rot":{"x":0,"y":-0.18,"z":0.2}},{"pos":{"x":-383.14,"y":2,"z":382.44},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.94,"y":2,"z":381.26},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.73,"y":2,"z":380.08},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.52,"y":2,"z":378.9},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.31,"y":2,"z":377.71},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.1,"y":2,"z":376.53},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.89,"y":2,"z":375.35},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.68,"y":2,"z":374.17},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.47,"y":2,"z":372.99},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.27,"y":2,"z":371.81},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.06,"y":2,"z":370.62},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.85,"y":2,"z":369.44},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.64,"y":2,"z":368.26},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.43,"y":2,"z":367.08},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.22,"y":2,"z":365.9},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.01,"y":2,"z":364.72},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-379.81,"y":2,"z":363.53},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-379.6,"y":2,"z":362.35},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-379.39,"y":2,"z":361.17},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-379.18,"y":2,"z":359.99},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.97,"y":2,"z":358.81},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.76,"y":2,"z":357.62},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.55,"y":2,"z":356.44},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.34,"y":2,"z":355.26},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.14,"y":2,"z":354.08},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-377.93,"y":2,"z":352.9},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-377.72,"y":2,"z":351.72},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-377.51,"y":2,"z":350.53},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-377.33,"y":2,"z":349.35},"rot":{"x":0,"y":-0.13,"z":0.2}},{"pos":{"x":-377.27,"y":2,"z":348.15},"rot":{"x":-0.01,"y":-0.03,"z":0.19}},{"pos":{"x":-377.33,"y":2,"z":346.95},"rot":{"x":-0.01,"y":0.07,"z":0.2}},{"pos":{"x":-377.51,"y":2,"z":345.77},"rot":{"x":0,"y":0.17,"z":0.2}},{"pos":{"x":-377.81,"y":2,"z":344.6},"rot":{"x":0,"y":0.27,"z":0.2}},{"pos":{"x":-378.13,"y":2,"z":343.45},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-378.46,"y":2,"z":342.29},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-378.79,"y":2,"z":341.14},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-379.11,"y":2,"z":339.98},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-379.44,"y":2,"z":338.83},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-379.76,"y":2,"z":337.67},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-380.09,"y":2,"z":336.52},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-380.42,"y":2,"z":335.37},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-380.74,"y":2,"z":334.21},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-381.07,"y":2,"z":333.06},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-381.4,"y":2,"z":331.9},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-381.72,"y":2,"z":330.75},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-382.05,"y":2,"z":329.59},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-382.37,"y":2,"z":328.44},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-382.7,"y":2,"z":327.28},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-383.03,"y":2,"z":326.13},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-383.35,"y":2,"z":324.97},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-383.68,"y":2,"z":323.82},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-384,"y":2,"z":322.66},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-384.33,"y":2,"z":321.51},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-384.66,"y":2,"z":320.35},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-384.98,"y":2,"z":319.2},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-385.31,"y":2,"z":318.04},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-385.63,"y":2,"z":316.89},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-385.96,"y":2,"z":315.73},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-386.29,"y":2,"z":314.58},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-386.61,"y":2,"z":313.42},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-386.94,"y":2,"z":312.27},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-387.27,"y":2,"z":311.11},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-387.59,"y":2,"z":309.96},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-387.89,"y":2,"z":308.8},"rot":{"x":0,"y":0.22,"z":-0.2}},{"pos":{"x":-388.07,"y":2,"z":307.61},"rot":{"x":0,"y":0.12,"z":-0.21}},{"pos":{"x":-388.13,"y":2,"z":306.41},"rot":{"x":0,"y":0.02,"z":-0.21}},{"pos":{"x":-388.07,"y":2,"z":305.21},"rot":{"x":-0.01,"y":-0.08,"z":-0.2}},{"pos":{"x":-387.89,"y":2,"z":304.03},"rot":{"x":0,"y":-0.18,"z":-0.2}},{"pos":{"x":-387.59,"y":2,"z":302.87},"rot":{"x":0,"y":-0.28,"z":-0.2}},{"pos":{"x":-387.18,"y":2,"z":301.74},"rot":{"x":-0.01,"y":-0.38,"z":-0.2}},{"pos":{"x":-386.66,"y":2,"z":300.66},"rot":{"x":0,"y":-0.48,"z":-0.2}},{"pos":{"x":-386.03,"y":2,"z":299.64},"rot":{"x":0,"y":-0.58,"z":-0.2}},{"pos":{"x":-385.38,"y":2,"z":298.63},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-384.73,"y":2,"z":297.62},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-384.08,"y":2,"z":296.61},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-383.42,"y":2,"z":295.61},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-382.77,"y":2,"z":294.6},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-382.12,"y":2,"z":293.59},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-381.44,"y":2,"z":292.6},"rot":{"x":0,"y":-0.63,"z":-0.2}},{"pos":{"x":-380.67,"y":2,"z":291.68},"rot":{"x":0,"y":-0.73,"z":-0.2}},{"pos":{"x":-379.81,"y":2,"z":290.85},"rot":{"x":0,"y":-0.83,"z":-0.2}},{"pos":{"x":-378.87,"y":2,"z":290.1},"rot":{"x":0,"y":-0.93,"z":-0.2}},{"pos":{"x":-377.86,"y":2,"z":289.45},"rot":{"x":0,"y":-1.03,"z":-0.2}},{"pos":{"x":-376.79,"y":2,"z":288.91},"rot":{"x":-0.01,"y":-1.13,"z":-0.21}},{"pos":{"x":-375.67,"y":2,"z":288.47},"rot":{"x":0,"y":-1.23,"z":-0.2}},{"pos":{"x":-374.52,"y":2,"z":288.15},"rot":{"x":0,"y":-1.33,"z":-0.2}},{"pos":{"x":-373.34,"y":2,"z":287.95},"rot":{"x":-0.01,"y":-1.43,"z":-0.2}},{"pos":{"x":-372.14,"y":2,"z":287.86},"rot":{"x":0,"y":-1.53,"z":-0.2}},{"pos":{"x":-370.94,"y":2,"z":287.9},"rot":{"x":0,"y":-1.63,"z":-0.2}},{"pos":{"x":-369.75,"y":2,"z":288.05},"rot":{"x":0,"y":-1.73,"z":-0.21}},{"pos":{"x":-368.58,"y":2,"z":288.33},"rot":{"x":-0.01,"y":-1.83,"z":-0.2}},{"pos":{"x":-367.45,"y":2,"z":288.71},"rot":{"x":0,"y":-1.93,"z":-0.2}},{"pos":{"x":-366.36,"y":2,"z":289.21},"rot":{"x":0,"y":-2.03,"z":-0.21}},{"pos":{"x":-365.32,"y":2,"z":289.82},"rot":{"x":0,"y":-2.13,"z":-0.2}},{"pos":{"x":-364.35,"y":2,"z":290.52},"rot":{"x":0,"y":-2.23,"z":-0.2}},{"pos":{"x":-363.45,"y":2,"z":291.32},"rot":{"x":0,"y":-2.33,"z":-0.2}},{"pos":{"x":-362.64,"y":2,"z":292.21},"rot":{"x":0,"y":-2.43,"z":-0.2}},{"pos":{"x":-361.9,"y":2,"z":293.15},"rot":{"x":0,"y":-2.48,"z":0}}]
                    nx.scanTrainSeqIdx[NUM].orbyJumpDunePATH = [{"pos":{"x":-417.59,"y":13.34,"z":317.76},"rot":{"x":0.13,"y":-0.95,"z":-0.01}},{"pos":{"x":-416.62,"y":13.5,"z":317.05},"rot":{"x":0.13,"y":-0.95,"z":-0.01}},{"pos":{"x":-415.65,"y":13.66,"z":316.33},"rot":{"x":0.13,"y":-0.95,"z":0}},{"pos":{"x":-414.68,"y":13.82,"z":315.64},"rot":{"x":-0.34,"y":-0.95,"z":0}},{"pos":{"x":-413.71,"y":13.51,"z":314.93},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-412.74,"y":12.51,"z":314.23},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-411.77,"y":11.5,"z":313.52},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-410.8,"y":10.5,"z":312.81},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-409.83,"y":9.5,"z":312.11},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-408.86,"y":8.5,"z":311.39},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-407.89,"y":7.49,"z":310.69},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-406.92,"y":6.49,"z":309.99},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-405.95,"y":5.49,"z":309.27},"rot":{"x":-0.7,"y":-0.95,"z":0}},{"pos":{"x":-404.98,"y":4.48,"z":308.58},"rot":{"x":-0.65,"y":-0.95,"z":0}},{"pos":{"x":-404.01,"y":3.48,"z":307.87},"rot":{"x":-0.5,"y":-0.95,"z":0}},{"pos":{"x":-403.04,"y":2.48,"z":307.16},"rot":{"x":-0.17,"y":-0.95,"z":0}},{"pos":{"x":-402.07,"y":2.2,"z":306.45},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-401.1,"y":2.2,"z":305.75},"rot":{"x":-0.16,"y":-0.95,"z":0}},{"pos":{"x":-400.13,"y":2,"z":305.04},"rot":{"x":-0.01,"y":-0.95,"z":-0.01}},{"pos":{"x":-399.16,"y":2,"z":304.33},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-398.19,"y":2,"z":303.63},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-397.22,"y":2,"z":302.93},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-396.25,"y":2,"z":302.22},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-395.28,"y":2,"z":301.51},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-394.31,"y":2,"z":300.81},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-393.34,"y":2,"z":300.1},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-392.2,"y":2,"z":299.27},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-391.07,"y":2,"z":298.45},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-389.94,"y":2,"z":297.63},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-388.81,"y":2,"z":296.81},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-387.76,"y":2,"z":296.04},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-386.79,"y":2,"z":295.33},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-385.82,"y":2,"z":294.63},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-384.85,"y":2,"z":293.92},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-383.88,"y":2,"z":293.22},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-382.91,"y":2,"z":292.51},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-381.94,"y":2,"z":291.8},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-380.97,"y":2,"z":291.1},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-380,"y":2,"z":290.39},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-379.03,"y":2,"z":289.69},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-378.05,"y":2,"z":288.98},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-377.08,"y":2,"z":288.27},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-376.11,"y":2,"z":287.57},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-375.14,"y":2,"z":286.86},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-374.17,"y":2,"z":286.14},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-373.2,"y":2,"z":285.45},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-372.23,"y":2,"z":284.74},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-371.26,"y":2,"z":284.04},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-370.29,"y":2,"z":283.33},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-369.32,"y":2,"z":282.62},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-368.35,"y":2,"z":281.92},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-367.38,"y":2,"z":281.2},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-366.41,"y":2,"z":280.51},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-365.44,"y":2,"z":279.8},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-364.47,"y":2,"z":279.08},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-363.5,"y":2,"z":278.39},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-362.53,"y":2,"z":277.68},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-361.56,"y":2,"z":276.97},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-360.59,"y":2,"z":276.27},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-359.62,"y":2,"z":275.56},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-358.65,"y":2,"z":274.86},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-357.68,"y":2,"z":274.14},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-356.71,"y":2,"z":273.44},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-355.74,"y":2,"z":272.74},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-354.77,"y":2,"z":272.02},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-353.8,"y":2,"z":271.32},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-352.83,"y":2,"z":270.62},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-351.86,"y":2,"z":269.91},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-350.89,"y":2,"z":269.2},"rot":{"x":0,"y":-0.95,"z":0}},{"pos":{"x":-349.97,"y":2,"z":268.43},"rot":{"x":0,"y":-0.85,"z":0.2}},{"pos":{"x":-349.14,"y":2,"z":267.57},"rot":{"x":0,"y":-0.75,"z":0.2}},{"pos":{"x":-348.4,"y":2,"z":266.62},"rot":{"x":0,"y":-0.65,"z":0.2}},{"pos":{"x":-347.76,"y":2,"z":265.61},"rot":{"x":-0.01,"y":-0.56,"z":0.2}},{"pos":{"x":-347.22,"y":2,"z":264.54},"rot":{"x":0,"y":-0.45,"z":0.2}},{"pos":{"x":-346.79,"y":2,"z":263.42},"rot":{"x":0,"y":-0.35,"z":0.2}},{"pos":{"x":-346.47,"y":2,"z":262.26},"rot":{"x":0,"y":-0.25,"z":0.2}},{"pos":{"x":-346.24,"y":2,"z":261.07},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-346.01,"y":2,"z":259.91},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-345.79,"y":2,"z":258.73},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-345.56,"y":2,"z":257.55},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-345.33,"y":2,"z":256.37},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-345.1,"y":2,"z":255.19},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-344.87,"y":2,"z":254.02},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-344.64,"y":2,"z":252.84},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-344.41,"y":2,"z":251.66},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-344.19,"y":2,"z":250.48},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-343.96,"y":2,"z":249.3},"rot":{"x":0,"y":-0.2,"z":0}},{"pos":{"x":-343.82,"y":2,"z":248.11},"rot":{"x":0,"y":-0.1,"z":0.2}},{"pos":{"x":-343.8,"y":2,"z":246.91},"rot":{"x":0,"y":0,"z":0.2}},{"pos":{"x":-343.9,"y":2,"z":245.72},"rot":{"x":0,"y":0.1,"z":0.2}},{"pos":{"x":-344.12,"y":2,"z":244.54},"rot":{"x":0,"y":0.2,"z":0.2}},{"pos":{"x":-344.45,"y":2,"z":243.39},"rot":{"x":0,"y":0.3,"z":0.2}},{"pos":{"x":-344.9,"y":2,"z":242.27},"rot":{"x":0,"y":0.4,"z":0.2}},{"pos":{"x":-345.46,"y":2,"z":241.21},"rot":{"x":-0.01,"y":0.5,"z":0.2}},{"pos":{"x":-346.09,"y":2,"z":240.19},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-346.73,"y":2,"z":239.18},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-347.37,"y":2,"z":238.16},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-348,"y":2,"z":237.14},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-348.64,"y":2,"z":236.12},"rot":{"x":0,"y":0.55,"z":0}},{"pos":{"x":-349.3,"y":2,"z":235.12},"rot":{"x":0,"y":0.6,"z":0.2}},{"pos":{"x":-350.06,"y":2,"z":234.19},"rot":{"x":0,"y":0.7,"z":0.2}},{"pos":{"x":-350.9,"y":2,"z":233.34},"rot":{"x":-0.01,"y":0.8,"z":0.2}},{"pos":{"x":-351.83,"y":2,"z":232.58},"rot":{"x":0,"y":0.9,"z":0.2}},{"pos":{"x":-352.83,"y":2,"z":231.92},"rot":{"x":-0.01,"y":1,"z":0.2}},{"pos":{"x":-353.89,"y":2,"z":231.35},"rot":{"x":-0.01,"y":1.1,"z":0.2}},{"pos":{"x":-355,"y":2,"z":230.9},"rot":{"x":0,"y":1.2,"z":0.2}},{"pos":{"x":-356.15,"y":2,"z":230.56},"rot":{"x":-0.01,"y":1.3,"z":0.2}},{"pos":{"x":-357.32,"y":2,"z":230.31},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-358.5,"y":2,"z":230.05},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-359.67,"y":2,"z":229.8},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-360.84,"y":2,"z":229.55},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-362.01,"y":2,"z":229.3},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-363.19,"y":2,"z":229.04},"rot":{"x":0,"y":1.35,"z":0}},{"pos":{"x":-364.37,"y":2,"z":228.82},"rot":{"x":0,"y":1.4,"z":0.2}},{"pos":{"x":-365.56,"y":2,"z":228.71},"rot":{"x":0,"y":1.5,"z":0.2}},{"pos":{"x":-366.76,"y":2,"z":228.73},"rot":{"x":-0.01,"y":1.6,"z":0.2}},{"pos":{"x":-367.95,"y":2,"z":228.86},"rot":{"x":0,"y":1.7,"z":0.2}},{"pos":{"x":-369.13,"y":2,"z":229.12},"rot":{"x":0,"y":1.8,"z":0.2}},{"pos":{"x":-370.29,"y":2,"z":229.4},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-371.46,"y":2,"z":229.68},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-372.62,"y":2,"z":229.96},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-373.79,"y":2,"z":230.25},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-374.96,"y":2,"z":230.53},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-376.12,"y":2,"z":230.81},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-377.28,"y":2,"z":231.12},"rot":{"x":0,"y":1.85,"z":0.2}},{"pos":{"x":-378.4,"y":2,"z":231.55},"rot":{"x":0,"y":1.95,"z":0.2}},{"pos":{"x":-379.48,"y":2,"z":232.08},"rot":{"x":0,"y":2.04,"z":0.2}},{"pos":{"x":-380.49,"y":2,"z":232.72},"rot":{"x":0,"y":2.15,"z":0.2}},{"pos":{"x":-381.46,"y":2,"z":233.44},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-382.42,"y":2,"z":234.15},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-383.38,"y":2,"z":234.87},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-384.35,"y":2,"z":235.58},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-385.31,"y":2,"z":236.3},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-386.28,"y":2,"z":237.01},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-387.22,"y":2,"z":237.75},"rot":{"x":0,"y":2.25,"z":0.2}},{"pos":{"x":-388.09,"y":2,"z":238.58},"rot":{"x":-0.01,"y":2.35,"z":0.2}},{"pos":{"x":-388.87,"y":2,"z":239.49},"rot":{"x":0,"y":2.45,"z":0.2}},{"pos":{"x":-389.56,"y":2,"z":240.47},"rot":{"x":0,"y":2.54,"z":0.2}},{"pos":{"x":-390.22,"y":2,"z":241.47},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-390.88,"y":2,"z":242.48},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-391.54,"y":2,"z":243.48},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-392.2,"y":2,"z":244.48},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-392.86,"y":2,"z":245.48},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-393.52,"y":2,"z":246.48},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-394.18,"y":2,"z":247.48},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-394.84,"y":2,"z":248.49},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-395.5,"y":2,"z":249.49},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-396.16,"y":2,"z":250.49},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-396.82,"y":2,"z":251.49},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-397.49,"y":2,"z":252.49},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-398.15,"y":2,"z":253.49},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-398.81,"y":2,"z":254.5},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-399.47,"y":2,"z":255.5},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-400.13,"y":2,"z":256.5},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-400.79,"y":2,"z":257.5},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-401.45,"y":2,"z":258.5},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-402.11,"y":2,"z":259.5},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-402.77,"y":2,"z":260.51},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-403.43,"y":2,"z":261.51},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-404.09,"y":2,"z":262.51},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-404.75,"y":2,"z":263.51},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-405.42,"y":2,"z":264.51},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-406.08,"y":2,"z":265.51},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-406.74,"y":2,"z":266.52},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-407.4,"y":2,"z":267.52},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-408.06,"y":2,"z":268.52},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-408.72,"y":2,"z":269.52},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-409.38,"y":2,"z":270.52},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-410.04,"y":2,"z":271.52},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-410.7,"y":2,"z":272.52},"rot":{"x":0,"y":2.54,"z":0}},{"pos":{"x":-411.36,"y":2,"z":273.52},"rot":{"x":0.16,"y":2.54,"z":0}},{"pos":{"x":-412.02,"y":2.27,"z":274.52},"rot":{"x":0.61,"y":2.54,"z":-0.01}},{"pos":{"x":-412.68,"y":3.12,"z":275.52},"rot":{"x":0.61,"y":2.54,"z":0}},{"pos":{"x":-413.35,"y":3.96,"z":276.52},"rot":{"x":0.61,"y":2.54,"z":0}},{"pos":{"x":-414.01,"y":4.8,"z":277.52},"rot":{"x":0.61,"y":2.54,"z":0}},{"pos":{"x":-414.67,"y":5.64,"z":278.54},"rot":{"x":0.61,"y":2.54,"z":0}},{"pos":{"x":-415.33,"y":6.48,"z":279.54},"rot":{"x":0.61,"y":2.54,"z":0}},{"pos":{"x":-415.99,"y":7.31,"z":280.54},"rot":{"x":0.61,"y":2.54,"z":-0.01}},{"pos":{"x":-416.65,"y":8.15,"z":281.54},"rot":{"x":0.61,"y":2.54,"z":0}},{"pos":{"x":-417.31,"y":8.99,"z":282.54},"rot":{"x":0.61,"y":2.54,"z":-0.01}},{"pos":{"x":-417.94,"y":9.83,"z":283.56},"rot":{"x":0.6,"y":2.61,"z":0.23}},{"pos":{"x":-418.48,"y":10.68,"z":284.64},"rot":{"x":0.61,"y":2.71,"z":0.23}},{"pos":{"x":-418.9,"y":11.53,"z":285.76},"rot":{"x":0.61,"y":2.81,"z":0.23}},{"pos":{"x":-419.29,"y":12.39,"z":286.89},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-419.68,"y":13.24,"z":288.02},"rot":{"x":0.61,"y":2.8,"z":-0.01}},{"pos":{"x":-420.07,"y":14.09,"z":289.16},"rot":{"x":0.61,"y":2.8,"z":-0.01}},{"pos":{"x":-420.47,"y":14.95,"z":290.29},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-420.86,"y":15.8,"z":291.43},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-421.25,"y":16.64,"z":292.56},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-421.64,"y":17.51,"z":293.7},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-422.04,"y":18.36,"z":294.83},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-422.43,"y":19.21,"z":295.95},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-422.93,"y":19.93,"z":296.83},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-423.02,"y":20.63,"z":297.67},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-423.21,"y":21.43,"z":298.59},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-423.5,"y":22.34,"z":299.62},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-423.89,"y":23.34,"z":300.76},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-424.59,"y":24.34,"z":302.2},"rot":{"x":0.61,"y":2.8,"z":0}},{"pos":{"x":-424.98,"y":24.94,"z":303.33},"rot":{"x":0.61,"y":2.82,"z":0}},{"pos":{"x":-425.37,"y":25.44,"z":304.47},"rot":{"x":0.59,"y":3.11,"z":0.17}},{"pos":{"x":-425.76,"y":25.84,"z":305.6},"rot":{"x":0.36,"y":-2.5,"z":0.5}},{"pos":{"x":-426.16,"y":26.24,"z":306.74},"rot":{"x":-0.37,"y":-1.33,"z":0.5}},{"pos":{"x":-426.55,"y":26.64,"z":307.87},"rot":{"x":-0.21,"y":0.93,"z":-0.59}},{"pos":{"x":-426.94,"y":27.04,"z":309.01},"rot":{"x":0.26,"y":-2.31,"z":0.56}},{"pos":{"x":-427.33,"y":27.44,"z":310.14},"rot":{"x":0.24,"y":1.59,"z":-0.58}},{"pos":{"x":-427.73,"y":27.84,"z":311.27},"rot":{"x":-0.53,"y":0.28,"z":-0.35}},{"pos":{"x":-428.12,"y":28.24,"z":312.41},"rot":{"x":-0.6,"y":-0.64,"z":0.17}},{"pos":{"x":-428.51,"y":28.54,"z":313.54},"rot":{"x":-0.53,"y":-0.95,"z":0.34}},{"pos":{"x":-428.9,"y":28.83,"z":314.68},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-429.3,"y":29.03,"z":315.81},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-429.69,"y":28.83,"z":316.94},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-430.08,"y":28.14,"z":318.08},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-430.47,"y":27.14,"z":319.2},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-430.87,"y":26.14,"z":320.35},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-431.26,"y":25.14,"z":321.48},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-431.65,"y":24.14,"z":322.61},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-432.04,"y":23.14,"z":323.75},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-432.44,"y":22.14,"z":324.88},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-432.83,"y":21.14,"z":326.02},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-433.22,"y":20.14,"z":327.14},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-433.61,"y":19.14,"z":328.28},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-434.01,"y":18.14,"z":329.42},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-434.4,"y":17.14,"z":330.55},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-434.79,"y":16.14,"z":331.69},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-435.18,"y":15.14,"z":332.82},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-435.58,"y":14.14,"z":333.95},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-435.97,"y":13.14,"z":335.09},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-436.36,"y":12.14,"z":336.22},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-436.75,"y":11.14,"z":337.36},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-437.15,"y":10.14,"z":338.49},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-437.54,"y":9.14,"z":339.62},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-437.93,"y":8.14,"z":340.76},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-438.32,"y":7.14,"z":341.89},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-438.72,"y":6.14,"z":343.03},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-439.11,"y":5.14,"z":344.16},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-439.5,"y":4.13,"z":345.29},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-439.89,"y":3.14,"z":346.43},"rot":{"x":0,"y":3.14,"z":0}},{"pos":{"x":-440.29,"y":3.01,"z":347.19},"rot":{"x":-0.38,"y":2.8,"z":0}},{"pos":{"x":-440.48,"y":2.95,"z":348.13},"rot":{"x":-0.38,"y":2.8,"z":0}},{"pos":{"x":-440.87,"y":2.49,"z":349.26},"rot":{"x":-0.3,"y":2.8,"z":0}},{"pos":{"x":-441.27,"y":2,"z":350.4},"rot":{"x":0,"y":2.8,"z":0}},{"pos":{"x":-441.66,"y":2,"z":351.53},"rot":{"x":-0.01,"y":2.8,"z":0}},{"pos":{"x":-442.05,"y":2,"z":352.66},"rot":{"x":-0.01,"y":2.8,"z":0}},{"pos":{"x":-442.36,"y":2,"z":353.82},"rot":{"x":-0.01,"y":2.9,"z":0.2}},{"pos":{"x":-442.55,"y":2,"z":355.01},"rot":{"x":0,"y":3,"z":0.2}},{"pos":{"x":-442.62,"y":2,"z":356.21},"rot":{"x":-0.01,"y":3.1,"z":0.2}},{"pos":{"x":-442.57,"y":2,"z":357.41},"rot":{"x":0,"y":-3.08,"z":0.19}},{"pos":{"x":-442.4,"y":2,"z":358.59},"rot":{"x":-0.01,"y":-2.98,"z":0.2}},{"pos":{"x":-442.11,"y":2,"z":359.76},"rot":{"x":0,"y":-2.88,"z":0.2}},{"pos":{"x":-441.71,"y":2,"z":360.89},"rot":{"x":0,"y":-2.78,"z":0.2}},{"pos":{"x":-441.22,"y":2,"z":361.99},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-440.74,"y":2,"z":363.08},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-440.25,"y":2,"z":364.18},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-439.76,"y":2,"z":365.28},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-439.28,"y":2,"z":366.37},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-438.79,"y":2,"z":367.47},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-438.31,"y":2,"z":368.57},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-437.82,"y":2,"z":369.67},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-437.33,"y":2,"z":370.76},"rot":{"x":0,"y":-2.73,"z":0}},{"pos":{"x":-436.82,"y":2,"z":371.85},"rot":{"x":0,"y":-2.68,"z":0.2}},{"pos":{"x":-436.2,"y":2,"z":372.88},"rot":{"x":0,"y":-2.58,"z":0.2}},{"pos":{"x":-435.49,"y":2,"z":373.84},"rot":{"x":0,"y":-2.48,"z":0.2}},{"pos":{"x":-434.67,"y":2,"z":374.72},"rot":{"x":0,"y":-2.38,"z":0.2}},{"pos":{"x":-433.8,"y":2,"z":375.54},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-432.93,"y":2,"z":376.36},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-432.05,"y":2,"z":377.19},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-431.18,"y":2,"z":378.01},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-430.3,"y":2,"z":378.83},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-429.43,"y":2,"z":379.65},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-428.55,"y":2,"z":380.47},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-427.68,"y":2,"z":381.29},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-426.8,"y":2,"z":382.11},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-425.93,"y":2,"z":382.94},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-425.05,"y":2,"z":383.76},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-424.18,"y":2,"z":384.58},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-423.3,"y":2,"z":385.4},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-422.43,"y":2,"z":386.22},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-421.55,"y":2,"z":387.04},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-420.68,"y":2,"z":387.86},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-419.8,"y":2,"z":388.69},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-418.93,"y":2,"z":389.51},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-418.05,"y":2,"z":390.33},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-417.18,"y":2,"z":391.15},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-416.3,"y":2,"z":391.97},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-415.43,"y":2,"z":392.79},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-414.56,"y":2,"z":393.62},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-413.68,"y":2,"z":394.44},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-412.81,"y":2,"z":395.26},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-411.93,"y":2,"z":396.08},"rot":{"x":0,"y":-2.33,"z":0}},{"pos":{"x":-411,"y":2,"z":396.83},"rot":{"x":-0.01,"y":-2.23,"z":0.2}},{"pos":{"x":-409.99,"y":2,"z":397.49},"rot":{"x":-0.01,"y":-2.13,"z":0.2}},{"pos":{"x":-408.93,"y":2,"z":398.04},"rot":{"x":0,"y":-2.03,"z":0.2}},{"pos":{"x":-407.81,"y":2,"z":398.49},"rot":{"x":-0.01,"y":-1.93,"z":0.2}},{"pos":{"x":-406.66,"y":2,"z":398.82},"rot":{"x":0,"y":-1.83,"z":0.2}},{"pos":{"x":-405.48,"y":2,"z":399.03},"rot":{"x":0,"y":-1.73,"z":0.2}},{"pos":{"x":-404.28,"y":2,"z":399.12},"rot":{"x":-0.01,"y":-1.63,"z":0.2}},{"pos":{"x":-403.09,"y":2,"z":399.1},"rot":{"x":0,"y":-1.53,"z":0.2}},{"pos":{"x":-401.89,"y":2,"z":398.95},"rot":{"x":0,"y":-1.43,"z":0.2}},{"pos":{"x":-400.72,"y":2,"z":398.69},"rot":{"x":0,"y":-1.33,"z":0.2}},{"pos":{"x":-399.59,"y":2,"z":398.31},"rot":{"x":-0.01,"y":-1.23,"z":0.2}},{"pos":{"x":-398.49,"y":2,"z":397.82},"rot":{"x":0,"y":-1.13,"z":0.2}},{"pos":{"x":-397.45,"y":2,"z":397.23},"rot":{"x":0,"y":-1.03,"z":0.2}},{"pos":{"x":-396.42,"y":2,"z":396.6},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-395.4,"y":2,"z":395.98},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-394.37,"y":2,"z":395.36},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-393.35,"y":2,"z":394.73},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-392.32,"y":2,"z":394.11},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-391.3,"y":2,"z":393.49},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-390.27,"y":2,"z":392.86},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-389.25,"y":2,"z":392.24},"rot":{"x":0,"y":-1.03,"z":0}},{"pos":{"x":-388.24,"y":2,"z":391.59},"rot":{"x":0,"y":-0.98,"z":0.2}},{"pos":{"x":-387.3,"y":2,"z":390.85},"rot":{"x":-0.01,"y":-0.88,"z":0.19}},{"pos":{"x":-386.44,"y":2,"z":390.01},"rot":{"x":0,"y":-0.78,"z":0.2}},{"pos":{"x":-385.66,"y":2,"z":389.09},"rot":{"x":0,"y":-0.68,"z":0.2}},{"pos":{"x":-384.99,"y":2,"z":388.1},"rot":{"x":0,"y":-0.58,"z":0.2}},{"pos":{"x":-384.41,"y":2,"z":387.05},"rot":{"x":0,"y":-0.48,"z":0.2}},{"pos":{"x":-383.95,"y":2,"z":385.94},"rot":{"x":-0.01,"y":-0.38,"z":0.2}},{"pos":{"x":-383.59,"y":2,"z":384.8},"rot":{"x":0,"y":-0.29,"z":0.2}},{"pos":{"x":-383.35,"y":2,"z":383.62},"rot":{"x":0,"y":-0.18,"z":0.2}},{"pos":{"x":-383.14,"y":2,"z":382.44},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.94,"y":2,"z":381.26},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.73,"y":2,"z":380.08},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.52,"y":2,"z":378.9},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.31,"y":2,"z":377.71},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-382.1,"y":2,"z":376.53},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.89,"y":2,"z":375.35},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.68,"y":2,"z":374.17},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.47,"y":2,"z":372.99},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.27,"y":2,"z":371.81},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-381.06,"y":2,"z":370.62},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.85,"y":2,"z":369.44},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.64,"y":2,"z":368.26},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.43,"y":2,"z":367.08},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.22,"y":2,"z":365.9},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-380.01,"y":2,"z":364.72},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-379.81,"y":2,"z":363.53},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-379.6,"y":2,"z":362.35},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-379.39,"y":2,"z":361.17},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-379.18,"y":2,"z":359.99},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.97,"y":2,"z":358.81},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.76,"y":2,"z":357.62},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.55,"y":2,"z":356.44},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.34,"y":2,"z":355.26},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-378.14,"y":2,"z":354.08},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-377.93,"y":2,"z":352.9},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-377.72,"y":2,"z":351.72},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-377.51,"y":2,"z":350.53},"rot":{"x":0,"y":-0.18,"z":0}},{"pos":{"x":-377.33,"y":2,"z":349.35},"rot":{"x":0,"y":-0.13,"z":0.2}},{"pos":{"x":-377.27,"y":2,"z":348.15},"rot":{"x":-0.01,"y":-0.03,"z":0.19}},{"pos":{"x":-377.33,"y":2,"z":346.95},"rot":{"x":-0.01,"y":0.07,"z":0.2}},{"pos":{"x":-377.51,"y":2,"z":345.77},"rot":{"x":0,"y":0.17,"z":0.2}},{"pos":{"x":-377.81,"y":2,"z":344.6},"rot":{"x":0,"y":0.27,"z":0.2}},{"pos":{"x":-378.13,"y":2,"z":343.45},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-378.46,"y":2,"z":342.29},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-378.79,"y":2,"z":341.14},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-379.11,"y":2,"z":339.98},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-379.44,"y":2,"z":338.83},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-379.76,"y":2,"z":337.67},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-380.09,"y":2,"z":336.52},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-380.42,"y":2,"z":335.37},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-380.74,"y":2,"z":334.21},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-381.07,"y":2,"z":333.06},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-381.4,"y":2,"z":331.9},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-381.72,"y":2,"z":330.75},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-382.05,"y":2,"z":329.59},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-382.37,"y":2,"z":328.44},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-382.7,"y":2,"z":327.27},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-383.03,"y":2,"z":326.13},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-383.35,"y":2,"z":324.97},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-383.68,"y":2,"z":323.82},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-384,"y":2,"z":322.66},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-384.33,"y":2,"z":321.51},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-384.66,"y":2,"z":320.35},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-384.98,"y":2,"z":319.2},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-385.31,"y":2,"z":318.04},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-385.63,"y":2,"z":316.89},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-385.96,"y":2,"z":315.73},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-386.29,"y":2,"z":314.58},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-386.61,"y":2,"z":313.42},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-386.94,"y":2,"z":312.27},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-387.27,"y":2,"z":311.11},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-387.59,"y":2,"z":309.95},"rot":{"x":0,"y":0.27,"z":0}},{"pos":{"x":-387.89,"y":2,"z":308.8},"rot":{"x":0,"y":0.22,"z":-0.2}},{"pos":{"x":-388.07,"y":2,"z":307.61},"rot":{"x":0,"y":0.12,"z":-0.21}},{"pos":{"x":-388.13,"y":2,"z":306.41},"rot":{"x":0,"y":0.02,"z":-0.21}},{"pos":{"x":-388.07,"y":2,"z":305.2},"rot":{"x":-0.01,"y":-0.08,"z":-0.2}},{"pos":{"x":-387.89,"y":2,"z":304.02},"rot":{"x":0,"y":-0.18,"z":-0.2}},{"pos":{"x":-387.59,"y":2,"z":302.87},"rot":{"x":0,"y":-0.29,"z":-0.2}},{"pos":{"x":-387.18,"y":2,"z":301.74},"rot":{"x":-0.01,"y":-0.38,"z":-0.2}},{"pos":{"x":-386.66,"y":2,"z":300.66},"rot":{"x":0,"y":-0.48,"z":-0.2}},{"pos":{"x":-386.03,"y":2,"z":299.64},"rot":{"x":0,"y":-0.58,"z":-0.2}},{"pos":{"x":-385.38,"y":2,"z":298.63},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-384.73,"y":2,"z":297.62},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-384.08,"y":2,"z":296.61},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-383.42,"y":2,"z":295.61},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-382.77,"y":2,"z":294.6},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-382.12,"y":2,"z":293.58},"rot":{"x":0,"y":-0.58,"z":0}},{"pos":{"x":-381.44,"y":2,"z":292.6},"rot":{"x":0,"y":-0.63,"z":-0.2}},{"pos":{"x":-380.67,"y":2,"z":291.68},"rot":{"x":0,"y":-0.73,"z":-0.2}},{"pos":{"x":-379.81,"y":2,"z":290.85},"rot":{"x":0,"y":-0.83,"z":-0.2}},{"pos":{"x":-378.87,"y":2,"z":290.1},"rot":{"x":0,"y":-0.93,"z":-0.2}},{"pos":{"x":-377.86,"y":2,"z":289.45},"rot":{"x":0,"y":-1.03,"z":-0.2}},{"pos":{"x":-376.79,"y":2,"z":288.91},"rot":{"x":-0.01,"y":-1.13,"z":-0.21}},{"pos":{"x":-375.67,"y":2,"z":288.47},"rot":{"x":0,"y":-1.23,"z":-0.2}},{"pos":{"x":-374.52,"y":2,"z":288.14},"rot":{"x":0,"y":-1.33,"z":-0.2}},{"pos":{"x":-373.34,"y":2,"z":287.95},"rot":{"x":-0.01,"y":-1.43,"z":-0.2}},{"pos":{"x":-372.14,"y":2,"z":287.86},"rot":{"x":0,"y":-1.53,"z":-0.2}},{"pos":{"x":-370.94,"y":2,"z":287.89},"rot":{"x":0,"y":-1.63,"z":-0.2}},{"pos":{"x":-369.75,"y":2,"z":288.05},"rot":{"x":0,"y":-1.73,"z":-0.21}},{"pos":{"x":-368.58,"y":2,"z":288.33},"rot":{"x":-0.01,"y":-1.83,"z":-0.2}},{"pos":{"x":-367.45,"y":2,"z":288.7},"rot":{"x":0,"y":-1.93,"z":-0.2}},{"pos":{"x":-366.36,"y":2,"z":289.2},"rot":{"x":0,"y":-2.03,"z":-0.21}},{"pos":{"x":-365.32,"y":2,"z":289.82},"rot":{"x":0,"y":-2.13,"z":-0.2}},{"pos":{"x":-364.35,"y":2,"z":290.52},"rot":{"x":0,"y":-2.23,"z":-0.2}},{"pos":{"x":-363.45,"y":2,"z":291.32},"rot":{"x":0,"y":-2.33,"z":-0.2}},{"pos":{"x":-362.64,"y":2,"z":292.2},"rot":{"x":0,"y":-2.44,"z":-0.2}},{"pos":{"x":-361.9,"y":2,"z":293.14},"rot":{"x":0,"y":-2.48,"z":0}}];
                    // nx.scanTrainSeqIdx[NUM].descentPath2 =  [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":2.24,"z":-0.3}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-41.14,"y":222.5,"z":20.778},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-43.947,"y":222.599,"z":22.599},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-46.647,"y":222.599,"z":24.209},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-48.948,"y":222.599,"z":25.819},"rot":{"x":-0.1,"y":2.24,"z":0}},{"pos":{"x":-50.948,"y":222.599,"z":27.529},"rot":{"x":-0.2,"y":2.24,"z":0}},{"pos":{"x":-52.749,"y":222.599,"z":29.04},"rot":{"x":-0.1,"y":2.24,"z":0}},{"pos":{"x":-53.849,"y":222.599,"z":30.05},"rot":{"x":0,"y":2.24,"z":0}}];
                    // var instPath = nx.createPathEditor({aName:'orbyJumpDunePATH', ANMPath:nx.scanTrainSeqIdx[NUM].orbyJumpDunePATH}); //-WORKING-PATH-EDITOR-.
                } //end init sequence-.
                if(!nx.scanTrainSeqIdx[NUM].initAnm){  //init next path point
                    nx.scanTrainSeqIdx[NUM].curPOS = nx.scanTrainSeqIdx[NUM].orbyJumpDunePATH[nx.scanTrainSeqIdx[NUM].stepIdx];
                    nx.scanTrainSeqIdx[NUM].nxtPOS = nx.scanTrainSeqIdx[NUM].orbyJumpDunePATH[++nx.scanTrainSeqIdx[NUM].stepIdx];
                    nx.scanTrainSeqIdx[NUM].initAnm = 1;
                    nx.scanTrainSeqIdx[NUM].runAnm = 1;
                    if(!nx.scanTrainSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.scanTrainSeqIdx[NUM].on=0; //important
                        nx.scanTrainSeqIdx[NUM+1] = {on:1}; //NEXT-Frame-. 
                        return; //END-SUB-SEQUENCES-.
                    } 
                }  
                //NEW-POSROT-ANM-FORMAT- //TODO add in the ROTIdx option-..
                if(nx.scanTrainSeqIdx[NUM].runAnm) { nx.scanTrainSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.scanTrainSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.scanTrainSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.scanTrainSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.scanTrainSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.scanTrainSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.scanTrainSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.scanTrainSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        //EDITABLE-ROTATIONS-.
                        if(nx.scanTrainSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.scanTrainSeqIdx[NUM].curPOS.rot.x,nx.scanTrainSeqIdx[NUM].curPOS.rot.y,nx.scanTrainSeqIdx[NUM].curPOS.rot.z,nx.scanTrainSeqIdx[NUM].curPOS.rot.w);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }else{ //EULER-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = null;
                            nx.orbyMesh.rotation = new BABYLON.Vector3(nx.scanTrainSeqIdx[NUM].curPOS.rot.x,nx.scanTrainSeqIdx[NUM].curPOS.rot.y,nx.scanTrainSeqIdx[NUM].curPOS.rot.z);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }
                    }, complete:function(){ 
                        nx.scanTrainSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });
                }
    // }            
            } //end frame
            else if(nx.scanTrainSeqIdx[2] && nx.scanTrainSeqIdx[2].on){ var NUM = 2; nx.scanTrainSeqIdx[NUM].on=0; //one-time-.
                nx.initFaceCam();
                nx.scene.activeCamera.heightOffset = 15;
                nx.scene.activeCamera.radius = 60;
                
                setTimeout(function(){
                    nx.scanTrainSeqIdx[NUM+1] = {on:1}; //NEXT-Frame-. 
                },2000)
                //END POSITION
                // nx.scene.activeCamera.heightOffset = 13
                // 13
                // nx.scene.activeCamera.rotationOffset = -150
                // -150
                // nx.scene.activeCamera.radius = 50
                
                // nx.orbyMesh.position
                // Vector3 {x: -361.4505310058594, y: 2, z: 290.6370849609375}
                // nx.orbyMesh.rotationQuaternion
                // Quaternion {x: 1.1059962765802784e-16, y: -0.8299296912361345, z: 1.6453697740589647e-16, w: 0.5578680019544897}
                
                
            } //end frame
            else if(nx.scanTrainSeqIdx[3] && nx.scanTrainSeqIdx[3].on){ var NUM = 3; nx.scanTrainSeqIdx[NUM].on=0; //one-time-.
                nx.orby.startLaserScanAnm();
                nx.ui.flashCanvasMSG({txt:'Scanning...',dur:3000,
                    txtInit:function(){  },
                    txtEnd:function(){  }
                });   
                
                
                // nx.ui.flashCanvasMSG({txt:"Zawd's Ship!",dur:3000})
                nx.ui.flashCanvasMSG({txt:"Zawd's SpaceTrain!",dur:3000})
                
                // nx.ui.flashCanvasMSG({txt:'Caboose EMPTY!',dur:3000,
                nx.ui.flashCanvasMSG({txt:'SpaceCaboose EMPTY?!?',dur:3000,
                txtInit:function(){ 
                    // debugger;
                    nx.orby.stopLaser();
                        },
                        txtEnd:function(){
                            nx.scanTrainSeqIdx[NUM+1] = {on:1}; //NEXT-Frame-.   
                        }
                    });  
                
            } //end frame
            else if(nx.scanTrainSeqIdx[4] && nx.scanTrainSeqIdx[4].on){ var NUM = 4; nx.scanTrainSeqIdx[NUM].on=0; //one-time-.
                
                //TODO: laser sequence, new QUESTS: where is Zawd?, Why zapbots on AlphaMoon?
                
                nx.ui.flashCanvasMSG({'txt':'Where is Zawd???',txtEnd:function(){

                    
                    // if(nx.scene.spacetrainscanned){ //GAME
                    //     nx.ui.flashCanvasMSG({'btn':'Search!',fn:function(){ 
                    //         // debugger;
                    //         nx.initFollowCam();
                    //         nx.anmz.orby.forceIdle = 0; //UNFREEZE ORBY MOVEMENTS
                    //         nx.cinematicMode = 0;
                            
                    //         //TODO probably show game UI here-.
                    //     }}); 
                    // } else { //MOVIE

                        nx.stopMovie({fadeCurtain:1,dur:2000,
                            initFn:function(){
                                nx.scanTrainSeqIdx[NUM+1] = {on:1}; //NEXT-Frame-. 
                            },
                            endFn:function(){
                                nx.initFreeCam();
                                nx.scene.activeCamera.position.copyFrom({x: -500, y: 100, z: 500});
                                nx.scene.setTarget = nx.orbyMesh.position;
                        }}); 

                    // }
                    
                }}); //SpaceKang Zawd and his brother SpaceKang Azod 
                
            } //end frame
            else if(nx.scanTrainSeqIdx[5] && nx.scanTrainSeqIdx[5].on){ var NUM = 5; //nx.scanTrainSeqIdx[NUM].on=0; //one-time-.
                //UP-PYRAMID-SEQUENCE - TO-QUESTION-DARKBOT
                if(!nx.scanTrainSeqIdx[NUM].init){ nx.scanTrainSeqIdx[NUM].init=1; //one time init
                    nx.scanTrainSeqIdx[NUM].runAnm = 0; //ANMETHODOLOGY 0 off 1 on-. 
                    nx.scanTrainSeqIdx[NUM].stepIdx = 0;
                    nx.scanTrainSeqIdx[NUM].anmSpeed = 20;//50;//85;
                    //initialize-path and edit-.
                    // nx.scanTrainSeqIdx[NUM].orbyUpPyramidPATH = [{"pos":{"x":-187.34,"y":21.87,"z":124.31},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-186.14,"y":22.96,"z":124.27},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-184.94,"y":24.05,"z":124.24},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-183.74,"y":25.14,"z":124.2},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-182.55,"y":26.23,"z":124.17},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-181.35,"y":27.32,"z":124.13},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-180.15,"y":28.41,"z":124.1},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-178.95,"y":29.5,"z":124.06},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-177.75,"y":30.59,"z":124.03},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-176.55,"y":31.68,"z":123.99},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-175.35,"y":32.77,"z":123.96},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-174.15,"y":33.86,"z":123.92},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-172.95,"y":34.95,"z":123.89},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-171.75,"y":36.03,"z":123.85},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-170.55,"y":37.12,"z":123.82},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-169.35,"y":38.21,"z":123.78},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-168.15,"y":39.3,"z":123.75},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-166.95,"y":40.39,"z":123.71},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-165.75,"y":41.48,"z":123.68},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-164.55,"y":42.57,"z":123.64},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-163.35,"y":43.66,"z":123.61},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-162.15,"y":44.75,"z":123.57},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-160.95,"y":45.84,"z":123.54},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-159.76,"y":46.93,"z":123.5},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-158.56,"y":48.02,"z":123.47},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-157.16,"y":49.2,"z":123.43},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-155.76,"y":50.47,"z":123.39},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-154.36,"y":51.74,"z":123.35},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-152.96,"y":53.01,"z":123.31},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-151.56,"y":54.28,"z":123.26},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-150.16,"y":55.55,"z":123.22},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-148.86,"y":56.82,"z":123.19},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-147.56,"y":58,"z":123.15},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-146.36,"y":59.09,"z":123.11},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-145.16,"y":60.18,"z":123.08},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-143.96,"y":61.27,"z":123.04},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-142.76,"y":62.36,"z":123.01},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-141.56,"y":63.45,"z":122.97},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-140.36,"y":64.54,"z":122.94},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-138.96,"y":65.72,"z":122.9},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-137.56,"y":66.99,"z":122.86},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-136.17,"y":68.26,"z":122.81},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-134.77,"y":69.53,"z":122.77},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-133.57,"y":70.71,"z":122.74},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-132.37,"y":71.8,"z":122.7},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-131.17,"y":72.89,"z":122.67},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-129.97,"y":73.98,"z":122.63},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-128.77,"y":75.07,"z":122.6},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-127.57,"y":76.16,"z":122.56},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-126.37,"y":77.25,"z":122.53},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-125.17,"y":78.34,"z":122.49},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-123.97,"y":79.42,"z":122.46},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-122.77,"y":80.51,"z":122.42},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-121.57,"y":81.6,"z":122.39},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-120.37,"y":82.69,"z":122.35},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-119.17,"y":83.78,"z":122.32},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-117.97,"y":84.87,"z":122.28},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-116.77,"y":85.96,"z":122.25},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-115.57,"y":87.05,"z":122.21},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-114.37,"y":88.14,"z":122.18},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-113.18,"y":89.23,"z":122.14},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-111.98,"y":90.32,"z":122.11},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-110.78,"y":91.41,"z":122.07},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-109.58,"y":92.5,"z":122.04},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-108.38,"y":93.59,"z":122},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-107.18,"y":94.67,"z":121.97},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-105.98,"y":95.76,"z":121.93},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-104.78,"y":96.85,"z":121.9},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-103.58,"y":97.94,"z":121.86},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-102.38,"y":99.03,"z":121.83},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-101.18,"y":100.12,"z":121.79},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-99.98,"y":101.21,"z":121.76},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-98.78,"y":102.3,"z":121.72},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-97.58,"y":103.39,"z":121.69},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-96.38,"y":104.48,"z":121.65},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-95.18,"y":105.57,"z":121.62},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-93.98,"y":106.66,"z":121.58},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-92.78,"y":107.75,"z":121.55},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-91.58,"y":108.84,"z":121.51},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-90.39,"y":109.92,"z":121.48},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-89.19,"y":111.01,"z":121.44},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-87.99,"y":112.1,"z":121.41},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-86.79,"y":113.19,"z":121.37},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-85.59,"y":114.28,"z":121.34},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-84.39,"y":115.37,"z":121.3},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-83.19,"y":116.46,"z":121.27},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-81.99,"y":117.55,"z":121.23},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-80.79,"y":118.64,"z":121.2},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-79.59,"y":119.73,"z":121.16},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-78.39,"y":120.82,"z":121.13},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-77.19,"y":121.91,"z":121.09},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-75.99,"y":123,"z":121.06},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-74.79,"y":124.08,"z":121.02},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-73.59,"y":125.17,"z":120.99},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-72.39,"y":126.26,"z":120.95},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-71.19,"y":127.35,"z":120.92},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-69.99,"y":128.44,"z":120.88},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-68.79,"y":129.53,"z":120.85},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-67.59,"y":130.62,"z":120.81},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-66.4,"y":131.71,"z":120.78},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-65.2,"y":132.8,"z":120.74},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-64,"y":133.89,"z":120.71},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-62.8,"y":134.98,"z":120.67},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-61.6,"y":136.07,"z":120.64},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-60.4,"y":137.16,"z":120.6},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-59.2,"y":138.25,"z":120.57},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-58,"y":139.33,"z":120.53},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-56.8,"y":140.42,"z":120.5},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-55.6,"y":141.51,"z":120.46},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-54.4,"y":142.6,"z":120.43},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-53.2,"y":143.69,"z":120.39},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-52,"y":144.78,"z":120.36},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-50.8,"y":145.87,"z":120.32},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-49.6,"y":146.96,"z":120.29},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-48.4,"y":148.05,"z":120.25},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-47.2,"y":149.14,"z":120.22},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-46,"y":150.23,"z":120.18},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-44.8,"y":151.32,"z":120.15},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-43.61,"y":152.41,"z":120.11},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-42.41,"y":153.5,"z":120.08},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-41.21,"y":154.58,"z":120.01},"rot":{"x":0.73,"y":-1.48,"z":0.24}},{"pos":{"x":-40.02,"y":155.75,"z":119.83},"rot":{"x":0.77,"y":-1.38,"z":0.24}},{"pos":{"x":-38.86,"y":157,"z":119.53},"rot":{"x":0.81,"y":-1.27,"z":0.25}},{"pos":{"x":-37.74,"y":158.33,"z":119.11},"rot":{"x":0.84,"y":-1.17,"z":0.25}},{"pos":{"x":-36.62,"y":159.7,"z":118.67},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-35.51,"y":161.08,"z":118.22},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-34.39,"y":162.45,"z":117.78},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-33.28,"y":163.83,"z":117.33},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-32.16,"y":165.2,"z":116.89},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-31.05,"y":166.58,"z":116.44},"rot":{"x":0.85,"y":-1.2,"z":-0.01}},{"pos":{"x":-29.93,"y":167.95,"z":116},"rot":{"x":0.85,"y":-1.2,"z":-0.01}},{"pos":{"x":-28.82,"y":169.33,"z":115.56},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-27.72,"y":170.71,"z":115.08},"rot":{"x":0.85,"y":-1.12,"z":0.25}},{"pos":{"x":-26.67,"y":172.12,"z":114.5},"rot":{"x":0.87,"y":-1.02,"z":0.25}},{"pos":{"x":-25.68,"y":173.58,"z":113.82},"rot":{"x":0.88,"y":-0.92,"z":0.26}},{"pos":{"x":-24.74,"y":175.06,"z":113.07},"rot":{"x":0.89,"y":-0.9,"z":0}},{"pos":{"x":-23.81,"y":176.55,"z":112.32},"rot":{"x":0.89,"y":-0.9,"z":0}},{"pos":{"x":-22.88,"y":178.04,"z":111.56},"rot":{"x":0.89,"y":-0.9,"z":0}},{"pos":{"x":-21.94,"y":179.53,"z":110.81},"rot":{"x":0.89,"y":-0.9,"z":0}},{"pos":{"x":-21.03,"y":181.02,"z":110.03},"rot":{"x":0.89,"y":-0.82,"z":0.26}},{"pos":{"x":-20.2,"y":182.51,"z":109.17},"rot":{"x":0.89,"y":-0.72,"z":0.26}},{"pos":{"x":-19.45,"y":184.01,"z":108.22},"rot":{"x":0.89,"y":-0.62,"z":0.26}},{"pos":{"x":-18.81,"y":185.48,"z":107.21},"rot":{"x":0.88,"y":-0.52,"z":0.26}},{"pos":{"x":-18.27,"y":186.93,"z":106.14},"rot":{"x":0.87,"y":-0.42,"z":0.25}},{"pos":{"x":-17.76,"y":188.34,"z":105.06},"rot":{"x":0.86,"y":-0.45,"z":0}},{"pos":{"x":-17.25,"y":189.75,"z":103.97},"rot":{"x":0.86,"y":-0.45,"z":0}},{"pos":{"x":-16.73,"y":191.16,"z":102.89},"rot":{"x":0.86,"y":-0.45,"z":-0.01}},{"pos":{"x":-16.22,"y":192.57,"z":101.8},"rot":{"x":0.86,"y":-0.45,"z":0}},{"pos":{"x":-15.71,"y":193.98,"z":100.72},"rot":{"x":0.86,"y":-0.45,"z":0}},{"pos":{"x":-15.28,"y":195.37,"z":99.6},"rot":{"x":0.85,"y":-0.32,"z":0.25}},{"pos":{"x":-14.93,"y":196.71,"z":98.45},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-14.59,"y":198.03,"z":97.3},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-14.24,"y":199.34,"z":96.15},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-13.9,"y":200.66,"z":95},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-13.55,"y":201.98,"z":93.85},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-13.21,"y":203.3,"z":92.7},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-12.86,"y":204.62,"z":91.55},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-12.52,"y":205.94,"z":90.4},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-12.17,"y":207.26,"z":89.25},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-11.83,"y":208.57,"z":88.1},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-11.48,"y":209.89,"z":86.95},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-11.14,"y":211.21,"z":85.8},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-10.79,"y":212.53,"z":84.65},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-10.45,"y":213.85,"z":83.51},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-10.1,"y":215.17,"z":82.36},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-9.76,"y":216.48,"z":81.21},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-9.41,"y":217.8,"z":80.06},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-9.07,"y":219.12,"z":78.91},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-8.72,"y":220.44,"z":77.76},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-8.38,"y":221.76,"z":76.5},"rot":{"x":0.83,"y":-0.22,"z":0.25}},{"pos":{"x":-8.15,"y":223.23,"z":75.12},"rot":{"x":0.8,"y":-0.12,"z":0.25}},{"pos":{"x":-8.06,"y":224.6,"z":73.73},"rot":{"x":0.76,"y":-0.03,"z":0.24}},{"pos":{"x":-8,"y":225.89,"z":72.33},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.94,"y":227.17,"z":70.93},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.88,"y":228.46,"z":69.53},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.82,"y":229.74,"z":68.13},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.77,"y":231.03,"z":66.73},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.71,"y":232.31,"z":65.34},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.65,"y":233.6,"z":63.94},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.59,"y":234.89,"z":62.54},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.53,"y":236.17,"z":61.14},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.48,"y":237.46,"z":59.74},"rot":{"x":0.74,"y":-0.05,"z":-0.01}},{"pos":{"x":-7.42,"y":238.74,"z":58.34},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.36,"y":240.03,"z":56.94},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.3,"y":241.31,"z":55.54},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.24,"y":242.6,"z":54.14},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.18,"y":243.88,"z":52.75},"rot":{"x":0.74,"y":-0.05,"z":-0.01}},{"pos":{"x":-7.13,"y":245.17,"z":51.35},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.07,"y":246.46,"z":49.95},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.01,"y":247.74,"z":48.55},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.95,"y":249.03,"z":47.15},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.82,"y":250.27,"z":46.28},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.71,"y":251.04,"z":45.1},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.66,"y":252.33,"z":43.71},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.6,"y":253.61,"z":42.31},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.54,"y":254.9,"z":40.91},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.48,"y":256.18,"z":39.51},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.42,"y":257.47,"z":38.11},"rot":{"x":0.74,"y":-0.05,"z":-0.01}},{"pos":{"x":-6.36,"y":258.76,"z":36.71},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.31,"y":260.04,"z":35.31},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.35,"y":261.3,"z":33.91},"rot":{"x":0.71,"y":0.07,"z":0.24}},{"pos":{"x":-6.35,"y":261.88,"z":33.91},"rot":{"x":0.66,"y":0.17,"z":0.23}},{"pos":{"x":-6.35,"y":261.88,"z":33.91},"rot":{"x":0.59,"y":0.26,"z":0.23}},{"pos":{"x":-6.35,"y":261.88,"z":33.91},"rot":{"x":0.51,"y":0.36,"z":0.22}},{"pos":{"x":-6.35,"y":261.88,"z":33.91},"rot":{"x":0.43,"y":0.46,"z":0.22}},{"pos":{"x":-6.35,"y":261.88,"z":33.91},"rot":{"x":0.32,"y":0.56,"z":0.21}},{"pos":{"x":-6.35,"y":261.88,"z":33.91},"rot":{"x":0.21,"y":0.65,"z":0.21}},{"pos":{"x":-6.35,"y":261.88,"z":33.91},"rot":{"x":0.09,"y":0.75,"z":0.2}},{"pos":{"x":-6.88,"y":261.88,"z":33.46},"rot":{"x":-0.03,"y":0.85,"z":0.19}},{"pos":{"x":-7.94,"y":261.75,"z":32.54},"rot":{"x":-0.1,"y":0.85,"z":0}},{"pos":{"x":-9,"y":261.62,"z":31.63},"rot":{"x":-0.1,"y":0.85,"z":0}},{"pos":{"x":-10.06,"y":261.49,"z":30.71},"rot":{"x":1.13,"y":0.85,"z":0}},{"pos":{"x":-11.12,"y":262.5,"z":29.8},"rot":{"x":0,"y":0.85,"z":0}},{"pos":{"x":-12.16,"y":262.5,"z":28.86},"rot":{"x":0,"y":0.8,"z":-0.2}},{"pos":{"x":-13.12,"y":262.5,"z":27.84},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-14.08,"y":262.5,"z":26.82},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-15.05,"y":262.5,"z":25.81},"rot":{"x":0,"y":0.75,"z":0}}];
                    nx.scanTrainSeqIdx[NUM].orbyUpPyramidPATH = [{"pos":{"x":-187.34,"y":21.87,"z":124.31},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-186.14,"y":22.96,"z":124.27},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-184.94,"y":24.05,"z":124.24},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-183.74,"y":25.14,"z":124.2},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-182.55,"y":26.23,"z":124.17},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-181.35,"y":27.32,"z":124.13},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-180.15,"y":28.41,"z":124.1},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-178.95,"y":29.5,"z":124.06},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-177.75,"y":30.59,"z":124.03},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-176.55,"y":31.68,"z":123.99},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-175.35,"y":32.77,"z":123.96},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-174.15,"y":33.86,"z":123.92},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-172.95,"y":34.95,"z":123.89},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-171.75,"y":36.03,"z":123.85},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-170.55,"y":37.11,"z":123.82},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-169.35,"y":38.21,"z":123.78},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-168.15,"y":39.29,"z":123.75},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-166.95,"y":40.39,"z":123.71},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-165.75,"y":41.48,"z":123.68},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-164.55,"y":42.57,"z":123.64},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-163.35,"y":43.66,"z":123.61},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-162.15,"y":44.75,"z":123.57},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-160.95,"y":45.84,"z":123.54},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-159.76,"y":46.93,"z":123.5},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-158.56,"y":48.02,"z":123.47},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-157.16,"y":49.2,"z":123.43},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-155.76,"y":50.47,"z":123.39},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-154.37,"y":51.74,"z":123.35},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-152.96,"y":53.01,"z":123.31},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-151.56,"y":54.28,"z":123.26},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-150.16,"y":55.55,"z":123.22},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-148.87,"y":56.82,"z":123.19},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-147.56,"y":58,"z":123.15},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-146.37,"y":59.09,"z":123.11},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-145.16,"y":60.18,"z":123.08},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-143.96,"y":61.27,"z":123.04},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-142.76,"y":62.36,"z":123.01},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-141.56,"y":63.45,"z":122.97},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-140.37,"y":64.54,"z":122.94},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-138.96,"y":65.72,"z":122.9},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-137.56,"y":66.98,"z":122.86},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-136.17,"y":68.26,"z":122.81},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-134.78,"y":69.53,"z":122.77},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-133.57,"y":70.7,"z":122.74},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-132.37,"y":71.8,"z":122.7},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-131.17,"y":72.89,"z":122.67},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-129.97,"y":73.98,"z":122.63},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-128.78,"y":75.06,"z":122.6},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-127.57,"y":76.16,"z":122.56},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-126.37,"y":77.25,"z":122.53},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-125.17,"y":78.34,"z":122.49},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-123.97,"y":79.42,"z":122.46},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-122.77,"y":80.51,"z":122.42},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-121.57,"y":81.59,"z":122.39},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-120.37,"y":82.69,"z":122.35},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-119.17,"y":83.78,"z":122.32},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-117.97,"y":84.87,"z":122.28},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-116.77,"y":85.96,"z":122.25},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-115.57,"y":87.05,"z":122.21},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-114.37,"y":88.14,"z":122.18},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-113.18,"y":89.23,"z":122.14},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-111.98,"y":90.32,"z":122.11},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-110.78,"y":91.41,"z":122.07},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-109.58,"y":92.5,"z":122.04},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-108.38,"y":93.59,"z":122},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-107.18,"y":94.67,"z":121.97},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-105.98,"y":95.76,"z":121.93},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-104.78,"y":96.85,"z":121.9},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-103.58,"y":97.94,"z":121.86},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-102.38,"y":99.03,"z":121.83},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-101.18,"y":100.12,"z":121.79},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-99.98,"y":101.21,"z":121.76},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-98.78,"y":102.3,"z":121.72},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-97.58,"y":103.39,"z":121.69},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-96.38,"y":104.48,"z":121.65},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-95.18,"y":105.57,"z":121.62},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-93.98,"y":106.66,"z":121.58},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-92.78,"y":107.75,"z":121.55},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-91.58,"y":108.84,"z":121.51},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-90.39,"y":109.92,"z":121.48},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-89.19,"y":111.01,"z":121.44},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-87.99,"y":112.1,"z":121.41},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-86.79,"y":113.19,"z":121.37},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-85.59,"y":114.28,"z":121.34},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-84.39,"y":115.37,"z":121.3},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-83.19,"y":116.46,"z":121.27},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-81.99,"y":117.55,"z":121.23},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-80.8,"y":118.64,"z":121.2},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-79.59,"y":119.73,"z":121.16},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-78.39,"y":120.82,"z":121.13},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-77.19,"y":121.91,"z":121.09},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-75.99,"y":123,"z":121.06},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-74.8,"y":124.08,"z":121.02},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-73.59,"y":125.17,"z":120.99},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-72.39,"y":126.26,"z":120.95},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-71.19,"y":127.35,"z":120.92},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-69.99,"y":128.44,"z":120.88},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-68.8,"y":129.53,"z":120.85},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-67.59,"y":130.62,"z":120.81},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-66.41,"y":131.71,"z":120.78},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-65.2,"y":132.8,"z":120.74},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-64,"y":133.88,"z":120.71},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-62.8,"y":134.97,"z":120.67},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-61.6,"y":136.07,"z":120.64},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-60.4,"y":137.16,"z":120.6},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-59.2,"y":138.25,"z":120.57},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-58,"y":139.33,"z":120.53},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-56.8,"y":140.41,"z":120.5},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-55.6,"y":141.51,"z":120.46},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-54.4,"y":142.6,"z":120.43},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-53.2,"y":143.69,"z":120.39},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-52,"y":144.78,"z":120.36},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-50.8,"y":145.87,"z":120.32},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-49.6,"y":146.96,"z":120.29},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-48.4,"y":148.05,"z":120.25},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-47.2,"y":149.13,"z":120.22},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-46,"y":150.22,"z":120.18},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-44.8,"y":151.32,"z":120.15},"rot":{"x":0.73,"y":-1.55,"z":-0.01}},{"pos":{"x":-43.61,"y":152.41,"z":120.11},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-42.41,"y":153.5,"z":120.08},"rot":{"x":0.73,"y":-1.55,"z":0}},{"pos":{"x":-41.21,"y":154.58,"z":120.01},"rot":{"x":0.73,"y":-1.48,"z":0.24}},{"pos":{"x":-40.03,"y":155.75,"z":119.83},"rot":{"x":0.77,"y":-1.38,"z":0.24}},{"pos":{"x":-38.86,"y":157,"z":119.53},"rot":{"x":0.81,"y":-1.27,"z":0.25}},{"pos":{"x":-37.74,"y":158.33,"z":119.11},"rot":{"x":0.84,"y":-1.17,"z":0.25}},{"pos":{"x":-36.62,"y":159.69,"z":118.67},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-35.51,"y":161.08,"z":118.22},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-34.39,"y":162.44,"z":117.78},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-33.28,"y":163.83,"z":117.33},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-32.16,"y":165.2,"z":116.89},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-31.05,"y":166.58,"z":116.44},"rot":{"x":0.85,"y":-1.2,"z":-0.01}},{"pos":{"x":-29.93,"y":167.95,"z":116},"rot":{"x":0.85,"y":-1.2,"z":-0.01}},{"pos":{"x":-28.82,"y":169.33,"z":115.56},"rot":{"x":0.85,"y":-1.2,"z":0}},{"pos":{"x":-27.72,"y":170.71,"z":115.08},"rot":{"x":0.85,"y":-1.13,"z":0.25}},{"pos":{"x":-26.67,"y":172.12,"z":114.5},"rot":{"x":0.87,"y":-1.02,"z":0.25}},{"pos":{"x":-25.68,"y":173.58,"z":113.82},"rot":{"x":0.88,"y":-0.92,"z":0.26}},{"pos":{"x":-24.74,"y":175.06,"z":113.07},"rot":{"x":0.89,"y":-0.9,"z":0}},{"pos":{"x":-23.81,"y":176.55,"z":112.32},"rot":{"x":0.89,"y":-0.9,"z":0}},{"pos":{"x":-22.88,"y":178.04,"z":111.56},"rot":{"x":0.89,"y":-0.9,"z":0}},{"pos":{"x":-21.94,"y":179.53,"z":110.81},"rot":{"x":0.89,"y":-0.9,"z":0}},{"pos":{"x":-21.03,"y":181.02,"z":110.03},"rot":{"x":0.89,"y":-0.82,"z":0.26}},{"pos":{"x":-20.2,"y":182.51,"z":109.17},"rot":{"x":0.89,"y":-0.72,"z":0.26}},{"pos":{"x":-19.45,"y":184.01,"z":108.22},"rot":{"x":0.89,"y":-0.62,"z":0.26}},{"pos":{"x":-18.81,"y":185.48,"z":107.21},"rot":{"x":0.88,"y":-0.52,"z":0.26}},{"pos":{"x":-18.27,"y":186.93,"z":106.14},"rot":{"x":0.87,"y":-0.42,"z":0.25}},{"pos":{"x":-17.77,"y":188.34,"z":105.06},"rot":{"x":0.86,"y":-0.45,"z":0}},{"pos":{"x":-17.25,"y":189.75,"z":103.97},"rot":{"x":0.86,"y":-0.45,"z":0}},{"pos":{"x":-16.73,"y":191.16,"z":102.89},"rot":{"x":0.86,"y":-0.45,"z":-0.01}},{"pos":{"x":-16.22,"y":192.57,"z":101.8},"rot":{"x":0.86,"y":-0.45,"z":0}},{"pos":{"x":-15.71,"y":193.98,"z":100.72},"rot":{"x":0.86,"y":-0.45,"z":0}},{"pos":{"x":-15.28,"y":195.37,"z":99.6},"rot":{"x":0.85,"y":-0.32,"z":0.25}},{"pos":{"x":-14.93,"y":196.71,"z":98.45},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-14.59,"y":198.03,"z":97.3},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-14.24,"y":199.34,"z":96.15},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-13.9,"y":200.66,"z":95},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-13.55,"y":201.98,"z":93.85},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-13.21,"y":203.3,"z":92.7},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-12.86,"y":204.62,"z":91.55},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-12.52,"y":205.94,"z":90.4},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-12.17,"y":207.26,"z":89.25},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-11.83,"y":208.57,"z":88.1},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-11.48,"y":209.89,"z":86.95},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-11.14,"y":211.21,"z":85.8},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-10.79,"y":212.53,"z":84.65},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-10.45,"y":213.85,"z":83.51},"rot":{"x":0.83,"y":-0.3,"z":-0.01}},{"pos":{"x":-10.1,"y":215.17,"z":82.36},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-9.76,"y":216.48,"z":81.2},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-9.41,"y":217.8,"z":80.06},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-9.07,"y":219.12,"z":78.91},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-8.73,"y":220.44,"z":77.76},"rot":{"x":0.83,"y":-0.3,"z":0}},{"pos":{"x":-8.39,"y":221.76,"z":76.5},"rot":{"x":0.83,"y":-0.22,"z":0.25}},{"pos":{"x":-8.15,"y":223.23,"z":75.12},"rot":{"x":0.8,"y":-0.12,"z":0.25}},{"pos":{"x":-8.07,"y":224.6,"z":73.73},"rot":{"x":0.76,"y":-0.03,"z":0.24}},{"pos":{"x":-8,"y":225.89,"z":72.33},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.94,"y":227.17,"z":70.93},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.88,"y":228.46,"z":69.53},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.82,"y":229.74,"z":68.13},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.77,"y":231.03,"z":66.73},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.71,"y":232.31,"z":65.34},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.65,"y":233.6,"z":63.94},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.59,"y":234.89,"z":62.54},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.53,"y":236.17,"z":61.14},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.48,"y":237.46,"z":59.74},"rot":{"x":0.74,"y":-0.05,"z":-0.01}},{"pos":{"x":-7.42,"y":238.74,"z":58.34},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.36,"y":240.03,"z":56.94},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.3,"y":241.31,"z":55.54},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.24,"y":242.6,"z":54.14},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.18,"y":243.88,"z":52.75},"rot":{"x":0.74,"y":-0.05,"z":-0.01}},{"pos":{"x":-7.13,"y":245.17,"z":51.35},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.07,"y":246.46,"z":49.95},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-7.01,"y":247.74,"z":48.55},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.95,"y":249.03,"z":47.15},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.82,"y":250.27,"z":46.28},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.71,"y":251.04,"z":45.1},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.66,"y":252.33,"z":43.71},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.6,"y":253.61,"z":42.31},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.54,"y":254.9,"z":40.9},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.48,"y":256.18,"z":39.51},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.42,"y":257.47,"z":38.11},"rot":{"x":0.74,"y":-0.05,"z":-0.01}},{"pos":{"x":-6.36,"y":258.76,"z":36.71},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.31,"y":260.04,"z":35.31},"rot":{"x":0.74,"y":-0.05,"z":0}},{"pos":{"x":-6.25,"y":260.59,"z":34.71},"rot":{"x":0.71,"y":0.07,"z":0.24}},{"pos":{"x":-6.25,"y":260.87,"z":34.31},"rot":{"x":0.66,"y":0.17,"z":0.23}},{"pos":{"x":-6.35,"y":261.17,"z":34.21},"rot":{"x":0.59,"y":0.26,"z":0.23}},{"pos":{"x":-6.45,"y":261.47,"z":34.11},"rot":{"x":0.51,"y":0.36,"z":0.22}},{"pos":{"x":-6.55,"y":261.77,"z":34.01},"rot":{"x":0.43,"y":0.46,"z":0.22}},{"pos":{"x":-6.65,"y":262.18,"z":33.9},"rot":{"x":0.32,"y":0.56,"z":0.21}},{"pos":{"x":-6.75,"y":262.27,"z":33.7},"rot":{"x":0.21,"y":0.65,"z":0.21}},{"pos":{"x":-7.05,"y":262.27,"z":33.3},"rot":{"x":0.09,"y":0.75,"z":0.2}},{"pos":{"x":-7.48,"y":262.27,"z":32.95},"rot":{"x":-0.03,"y":0.85,"z":0.19}},{"pos":{"x":-7.94,"y":262.35,"z":32.54},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-9,"y":262.42,"z":31.63},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-10.06,"y":262.49,"z":30.71},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-11.12,"y":262.5,"z":29.8},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-12.16,"y":262.5,"z":28.86},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-13.12,"y":262.5,"z":27.84},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-14.08,"y":262.5,"z":26.82},"rot":{"x":0,"y":0.75,"z":0}},{"pos":{"x":-15.05,"y":262.5,"z":25.81},"rot":{"x":0,"y":0.75,"z":0}}];
                    // var instPath = nx.createPathEditor({aName:'orbyUpPyramidPATH', ANMPath:nx.scanTrainSeqIdx[NUM].orbyUpPyramidPATH}); //-WORKING-PATH-EDITOR-.
                } //end init sequence-.
                if(!nx.scanTrainSeqIdx[NUM].initAnm){  //init next path point
                    //SET PYRAMID-STRATA-CAM-.
                    if(nx.orbyMesh.position.y>100 && !nx.scanTrainSeqIdx[NUM].cam2){
                        nx.scanTrainSeqIdx[NUM].cam2=1; //one-time-.
                        nx.scene.activeCamera.position.copyFrom({x: -250, y: 200, z: 250});
                        nx.camz.freeCam.setTarget(nx.orbyMesh.position); //SET CAM ON ORBY-.
                    } else if(nx.orbyMesh.position.y>200 && !nx.scanTrainSeqIdx[NUM].cam3){
                        nx.scanTrainSeqIdx[NUM].cam3=1; //one-time-.
                        nx.scene.activeCamera.position.copyFrom({x: -100, y: 240, z: 100});
                        nx.camz.freeCam.setTarget(nx.orbyMesh.position); //SET CAM ON ORBY-.
                    } else if(nx.orbyMesh.position.y>250 && !nx.scanTrainSeqIdx[NUM].cam4){
                        nx.scanTrainSeqIdx[NUM].cam4=1; //one-time-.
                        nx.scene.activeCamera.position.copyFrom({x: -50, y: 270, z: 50});
                        nx.camz.freeCam.setTarget(nx.orbyMesh.position); //SET CAM ON ORBY-.
                    }

                    nx.scanTrainSeqIdx[NUM].curPOS = nx.scanTrainSeqIdx[NUM].orbyUpPyramidPATH[nx.scanTrainSeqIdx[NUM].stepIdx];
                    nx.scanTrainSeqIdx[NUM].nxtPOS = nx.scanTrainSeqIdx[NUM].orbyUpPyramidPATH[++nx.scanTrainSeqIdx[NUM].stepIdx];
                    nx.scanTrainSeqIdx[NUM].initAnm = 1;
                    nx.scanTrainSeqIdx[NUM].runAnm = 1;
                    if(!nx.scanTrainSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.scanTrainSeqIdx[NUM].on=0; //important
                        nx.initSEQ({epicID:9})//FINALSEQUENCE
                        // nx.scanTrainSeqIdx[NUM+1] = {on:1}; //NEXT-Frame-. 
                        return; //END-SUB-SEQUENCES-.
                    } 
                }  
                //NEW-POSROT-ANM-FORMAT- //TODO add in the ROTIdx option-..
                if(nx.scanTrainSeqIdx[NUM].runAnm) { nx.scanTrainSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.scanTrainSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.scanTrainSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.scanTrainSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.scanTrainSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.scanTrainSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.scanTrainSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.scanTrainSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        nx.camz.freeCam.setTarget(nx.orbyMesh.position); //SET CAM ON ORBY-.
                        //EDITABLE-ROTATIONS-.
                        if(nx.scanTrainSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.scanTrainSeqIdx[NUM].curPOS.rot.x,nx.scanTrainSeqIdx[NUM].curPOS.rot.y,nx.scanTrainSeqIdx[NUM].curPOS.rot.z,nx.scanTrainSeqIdx[NUM].curPOS.rot.w);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }else{ //EULER-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = null;
                            nx.orbyMesh.rotation = new BABYLON.Vector3(nx.scanTrainSeqIdx[NUM].curPOS.rot.x,nx.scanTrainSeqIdx[NUM].curPOS.rot.y,nx.scanTrainSeqIdx[NUM].curPOS.rot.z);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }
                    }, complete:function(){ 
                        nx.scanTrainSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });
                }




//orby start spot
// undefined
// nx.orbyMesh.position
// Vector3 {x: -197.61641519118575, y: 12.692051301572313, z: 125.0659598429786}
// nx.scene.activeCamera.position
// Vector3 {x: -500, y: 100, z: 500}
// gamez1.js:1068 quad3 2

// nx.orbyMesh.position
// Vector3 {x: -85.12876618070275, y: 112.30436434320545, z: 123.98734849009526}
// nx.scene.activeCamera.position
// Vector3 {x: -250, y: 200, z: 250}
// gamez1.js:1068 quad3 3

// nx.orbyMesh.position
// Vector3 {x: -21.70419742116154, y: 200.0491740332562, z: 87.84123397041057}
// nx.scene.activeCamera.position
// Vector3 {x: -100, y: 240, z: 100}
// gamez1.js:939 not override
// gamez1.js:1068 quad3 4

// nx.orbyMesh.position
// Vector3 {x: -6.73883139821424, y: 252.06276381553448, z: 43.928235051231695}
// nx.scene.activeCamera.position
// Vector3 {x: -50, y: 270, z: 50}

                //Todo recurring loop if not shut off to suggest from Azod "You must question DarkBot."

            } //end frame
            
        }) //end sequence loop
    } else if(seqName==="FinalSequence"){ //-----------------------------------------------------------------------------FINAL-SEQUENCE---.
        nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as SEQIDX.
            if(nx.finalSeqIdx[0] && nx.finalSeqIdx[0].on){ var NUM = 0; //nx.finalSeqIdx[NUM].on=0;
// debugger;
                nx.scene.finalSequenceFlag = 1; //Scene state var to suppress zoneCam

                //POSROT ANM-PATH SEQUENCE FRAME:
                // if(nx.finalSeqIdx[3] && nx.finalSeqIdx[3].on){ var NUM = 3;
                if(!nx.finalSeqIdx[NUM].init){ nx.finalSeqIdx[NUM].init=1; //one time init
                    nx.initFreeCam();
                    nx.scene.activeCamera.position.copyFrom({x: 50, y: 270, z: -50}); //CAMPOS: frontview darkbot
                    nx.scene.activeCamera.setTarget(new BABYLON.Vector3(25, 265, -25)); //CAMTGT

                    nx.ui.flashCanvasMSG({txt:'Chapter 3: A Final Warning',dur:2000,txtInit:function(){
                    }}); 

                    nx.zapbotMesh2.position.copyFrom({x: 0, y: 5, z: 0})


                    // nx.camz.freeCam.position.copyFrom({x: 125.91809305164549, y: 252.910231776879, z: -113.34096907171961}); 
                    nx.finalSeqIdx[NUM].runAnm = 0; //ANMETHODOLOGY 0 off 1 on-. 
                    nx.finalSeqIdx[NUM].stepIdx = 0;
                    nx.finalSeqIdx[NUM].anmSpeed = 85;
                    //initialize-path and edit-.
                    // nx.finalSeqIdx[NUM].confronting1 =  [{"pos":{"x":-20.53,"y":262.5,"z":20.47},"rot":{"x":-0.05,"y":-0.46,"z":0.08,"w":0.88}},{"pos":{"x":-19.56,"y":262.5,"z":19.76},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-18.59,"y":262.5,"z":19.05},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-17.62,"y":262.5,"z":18.35},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-16.65,"y":262.5,"z":17.64},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-15.68,"y":262.5,"z":16.94},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-14.71,"y":262.5,"z":16.23},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-13.74,"y":262.5,"z":15.52},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-12.77,"y":262.5,"z":14.82},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-11.72,"y":262.5,"z":14.05},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-10.58,"y":262.5,"z":13.23},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-9.45,"y":262.5,"z":12.4},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-8.32,"y":262.5,"z":11.58},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-7.19,"y":262.5,"z":10.76},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-6.06,"y":262.5,"z":9.93},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-4.92,"y":262.5,"z":9.11},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-3.79,"y":262.5,"z":8.28},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-2.66,"y":262.5,"z":7.46},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-1.53,"y":262.5,"z":6.64},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-0.4,"y":262.5,"z":5.81},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":0.74,"y":262.5,"z":4.99},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":1.87,"y":262.5,"z":4.17},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":3,"y":262.5,"z":3.34},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":4.13,"y":262.5,"z":2.52},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":5.26,"y":262.5,"z":1.69},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":6.39,"y":262.5,"z":0.87},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":7.53,"y":262.5,"z":0.05},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":8.66,"y":262.5,"z":-0.78},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":9.79,"y":262.5,"z":-1.6},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":10.92,"y":262.5,"z":-2.43},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":12.05,"y":262.5,"z":-3.25},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":13.19,"y":262.5,"z":-4.07},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":14.32,"y":262.5,"z":-4.9},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":15.45,"y":262.5,"z":-5.72},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":16.58,"y":262.5,"z":-6.55},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":17.71,"y":262.5,"z":-7.37},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":18.85,"y":262.5,"z":-8.19},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":19.98,"y":262.5,"z":-9.02},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":21.11,"y":262.5,"z":-9.84},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":22.24,"y":262.5,"z":-10.66},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}}];
                    // nx.finalSeqIdx[NUM].confronting1 =  [{"pos":{"x":-24.53,"y":262.5,"z":20.47},"rot":{"x":-0.05,"y":-0.46,"z":0.08,"w":0.88}},{"pos":{"x":-23.56,"y":262.5,"z":19.76},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-22.59,"y":262.5,"z":19.05},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-21.62,"y":262.5,"z":18.35},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-20.65,"y":262.5,"z":17.64},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-19.68,"y":262.5,"z":16.94},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-18.71,"y":262.5,"z":16.23},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-17.75,"y":262.5,"z":15.52},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-16.77,"y":262.5,"z":14.82},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-15.72,"y":262.5,"z":14.05},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-14.58,"y":262.5,"z":13.23},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-13.45,"y":262.5,"z":12.4},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-12.32,"y":262.5,"z":11.58},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-11.2,"y":262.5,"z":10.76},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-10.06,"y":262.5,"z":9.93},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-8.92,"y":262.5,"z":9.11},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-7.79,"y":262.5,"z":8.27},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-6.66,"y":262.5,"z":7.46},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-5.53,"y":262.5,"z":6.64},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-4.41,"y":262.5,"z":5.81},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-3.26,"y":262.5,"z":4.99},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-2.13,"y":262.5,"z":4.17},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-1,"y":262.5,"z":3.34},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":0.12,"y":262.5,"z":2.52},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":1.25,"y":262.5,"z":1.69},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":2.38,"y":262.5,"z":0.87},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":3.53,"y":262.5,"z":0.05},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":4.66,"y":262.5,"z":-0.78},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":5.78,"y":262.5,"z":-1.6},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":6.92,"y":262.5,"z":-2.44},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":8.05,"y":262.5,"z":-3.25},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":9.19,"y":262.5,"z":-4.08},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":10.32,"y":262.5,"z":-4.91},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":11.45,"y":262.5,"z":-5.72},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":12.57,"y":262.5,"z":-6.55},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":13.71,"y":262.5,"z":-7.37},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":14.85,"y":262.5,"z":-8.19},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":15.98,"y":262.5,"z":-9.02},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":17.11,"y":262.5,"z":-9.84},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":18.23,"y":262.5,"z":-10.66},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}}];
                    nx.finalSeqIdx[NUM].confronting1 =  [{"pos":{"x":-21.53,"y":262.5,"z":17.47},"rot":{"x":-0.05,"y":-0.46,"z":0.08,"w":0.88}},{"pos":{"x":-20.56,"y":262.5,"z":16.76},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-19.59,"y":262.5,"z":16.05},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-18.62,"y":262.5,"z":15.35},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-17.65,"y":262.5,"z":14.64},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-16.68,"y":262.5,"z":13.94},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-15.71,"y":262.5,"z":13.23},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-14.75,"y":262.5,"z":12.52},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-13.77,"y":262.5,"z":11.82},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-12.72,"y":262.5,"z":11.05},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-11.58,"y":262.5,"z":10.23},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-10.45,"y":262.5,"z":9.4},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-9.32,"y":262.5,"z":8.58},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-8.2,"y":262.5,"z":7.76},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-7.07,"y":262.5,"z":6.93},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-5.92,"y":262.5,"z":6.1},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-4.79,"y":262.5,"z":5.27},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-3.66,"y":262.5,"z":4.46},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-2.54,"y":262.5,"z":3.63},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-1.42,"y":262.5,"z":2.8},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":-0.26,"y":262.5,"z":1.99},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":0.87,"y":262.5,"z":1.17},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":2,"y":262.5,"z":0.33},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":3.12,"y":262.5,"z":-0.48},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":4.25,"y":262.5,"z":-1.31},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":5.38,"y":262.5,"z":-2.13},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":6.52,"y":262.5,"z":-2.95},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":7.66,"y":262.5,"z":-3.79},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":8.77,"y":262.5,"z":-4.6},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":9.92,"y":262.5,"z":-5.44},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":11.05,"y":262.5,"z":-6.25},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":12.19,"y":262.5,"z":-7.08},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":13.32,"y":262.5,"z":-7.91},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":14.45,"y":262.5,"z":-8.73},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":15.57,"y":262.5,"z":-9.56},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":16.71,"y":262.5,"z":-10.38},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":17.85,"y":262.5,"z":-11.19},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":18.98,"y":262.5,"z":-12.02},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":20.11,"y":262.5,"z":-12.84},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}},{"pos":{"x":21.23,"y":262.5,"z":-13.66},"rot":{"x":0,"y":-0.46,"z":0,"w":0.89}}];
                    // var instPath = nx.createPathEditor({aName:'confronting1', ANMPath:nx.finalSeqIdx[NUM].confronting1}); //-WORKING-PATH-EDITOR-.
                } //end init sequence-.
                if(!nx.finalSeqIdx[NUM].initAnm){  //init next path point
                    nx.finalSeqIdx[NUM].curPOS = nx.finalSeqIdx[NUM].confronting1[nx.finalSeqIdx[NUM].stepIdx];
                    nx.finalSeqIdx[NUM].nxtPOS = nx.finalSeqIdx[NUM].confronting1[++nx.finalSeqIdx[NUM].stepIdx];
                    nx.finalSeqIdx[NUM].initAnm = 1;
                    if(!nx.finalSeqIdx[NUM].nxtPOS){  //END-ANM --------------------------------------/
                        nx.finalSeqIdx[NUM].on=0; //important
                        nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.finalSeqIdx[NUM].runAnm = 1;
                }  
                //NEW-POSROT-ANM-FORMAT- //TODO add in the ROTIdx option-.nx.editz.clearROTs(aPath).?
                if(nx.finalSeqIdx[NUM].runAnm) { nx.finalSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.finalSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.finalSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.finalSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.finalSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.finalSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.finalSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.finalSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        //EDITABLE-ROTATIONS-.
                        if(nx.finalSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z,nx.finalSeqIdx[NUM].curPOS.rot.w);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }else{ //EULER-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = null;
                            nx.orbyMesh.rotation = new BABYLON.Vector3(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }
                    }, complete:function(){ 
                        nx.finalSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });
                }
                // }

                
            }//end frame
            else if(nx.finalSeqIdx[1] && nx.finalSeqIdx[1].on){ var NUM = 1; nx.finalSeqIdx[NUM].on=0;
                
                //METHODOLOGY: cinematics frontView, sideView, heroView, birdEyeView, longView, PAIRVIEW, GROUPVIEW-.
                nx.scene.activeCamera.position.copyFrom({x: 15, y: 266, z: -41}); //CAMPOS: sideview darkbot zscope1
                nx.scene.activeCamera.setTarget(nx.BV32({x: 16, y: 266, z: -36.8})) //CAMTGT: 

                nx.ui.flashCanvasMSG({txt:"Where is Zawd?",txtIcon:'orby',dur:2000,
                    txtInit:function(){  },
                    txtEnd:function(){  }
                }); 

                // nx.ui.flashCanvasMSG({txt:"I don't know,",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                nx.ui.flashCanvasMSG({txt:"How should I know.",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                    txtInit:function(){  },
                    txtEnd:function(){ 
                        nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                    }
                }); 
            }//end frame
            else if(nx.finalSeqIdx[2] && nx.finalSeqIdx[2].on){ var NUM = 2; nx.finalSeqIdx[NUM].on=0;
                // nx.initFreeCam(); 
                //METHODOLOGY: cinematics frontView, sideView, heroView, birdEyeView, longView, PAIRVIEW, GROUPVIEW-.
                nx.scene.activeCamera.position.copyFrom({x: 20.55963344538219, y: 263.81614691268715, z: -31.47744778076308}); //CAMPOS: zscope2
                nx.scene.activeCamera.setTarget(nx.BV32({x: 20.94169472338265, y: 263.81803254924404, z: -25.21296959870571})) //CAMTGT: 


                nx.ui.flashCanvasMSG({txt:"but you must go.",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                    txtInit:function(){ },
                    txtEnd:function(){ }
                }); 
                //NOTE: AlphaMoon is a peaceful moon, built for the peaceful colonizaiton of the SolarStarz.
                nx.ui.flashCanvasMSG({txt:"Why Zapbotz on AlphaMoon?",txtIcon:'orby',dur:2000,
                    txtInit:function(){ },
                    txtEnd:function(){ }
                }); 

                nx.ui.flashCanvasMSG({txt:"Prinz Dark COMMANDS it!",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                    txtInit:function(){ },
                    txtEnd:function(){ 
                        // nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                    }
                }); 

                nx.ui.flashCanvasMSG({txt:"Prinz Dark?!?",txtIcon:'orby',dur:2000,
                    txtInit:function(){
                        //TODO: sonic ding. and quest emblem
                     },
                    txtEnd:function(){ 
                        nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                    }
                }); 
            }//end frame
            else if(nx.finalSeqIdx[3] && nx.finalSeqIdx[3].on){ var NUM = 3; nx.finalSeqIdx[NUM].on=0;
                // nx.initFreeCam(); 
                //METHODOLOGY: cinematics frontView, sideView, heroView, birdEyeView, longView, PAIRVIEW, GROUPVIEW-.
                nx.scene.activeCamera.position.copyFrom({x: 20.40128581284473, y: 264.70539579989634, z: -23.66391276021648}); //CAMPOS: sideview zscope 4
                nx.scene.activeCamera.setTarget(nx.BV32({x: 21.20959485213273, y: 264.2566834337343, z: -15.36015374973629})) //CAMTGT: 

                nx.ui.flashCanvasMSG({txt:"Whatever he ZAPS...",txtIcon:'darkbot',txtAlign:'right',dur:2000, //THE WARNING!
                    txtInit:function(){ },
                    txtEnd:function(){ }
                }); 
                nx.ui.flashCanvasMSG({txt:"PrinzDark CONTROLS!",txtIcon:'darkbot',txtAlign:'right',dur:2000, //Prinz Dark, "With one finger, I CONTROL your everything."
                    txtInit:function(){ //Prinz Dark has a ZAPFINGER-. aFINGERZAPPER-. Same as what is used on SpaceRooz
                    },
                    txtEnd:function(){ //For signaling next GAME SEQ as TXT fades out-.
                        nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                    }
                }); 
            }//end frame
            else if(nx.finalSeqIdx[4] && nx.finalSeqIdx[4].on){ var NUM = 4; nx.finalSeqIdx[NUM].on=0;
                // nx.initFreeCam(); 
                //METHODOLOGY: cinematics frontView, sideView, heroView, birdEyeView, longView, PAIRVIEW, GROUPVIEW-.
                nx.scene.activeCamera.position.copyFrom({x: 20.622311576562176, y: 264.59912429481346, z: -21.04874184492707}); //CAMPOS: zscope5
                nx.scene.activeCamera.setTarget(nx.BV32({x: 21.20959485213273, y: 264.2566834337343, z: -15.36015374973629})) //CAMTGT: 

                nx.ui.flashCanvasMSG({txt:"Including me.",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                    txtInit:function(){ },
                    txtEnd:function(){ }
                }); 

                nx.ui.flashCanvasMSG({txt:"But Zawd's SpaceTrain...",txtIcon:'orby',dur:2000,
                    txtInit:function(){ },
                    txtEnd:function(){ }
                }); 

                nx.ui.flashCanvasMSG({txt:"FINAL WARNING!",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                    txtInit:function(){ },
                    txtEnd:function(){ }
                }); 

                // nx.ui.flashCanvasMSG({txt:"Forget AlphaMoon forever!",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                nx.ui.flashCanvasMSG({txt:"Never return to AlphaMoon!",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                    txtInit:function(){ },
            txtEnd:function(){  nx.finalSeqIdx[NUM+1] = {on:1}; /*NEXT-ANM-.*/}
                }); 
                // nx.ui.flashCanvasMSG({txt:"It's not safe.",txtIcon:'darkbot',txtAlign:'right',dur:2000, //prinzdark "you dub the audio AND let him off with a warning?!? Unfogivable ZAP!"
                //     txtInit:function(){ },
                //     txtEnd:function(){     nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                //     }
                // }); 
            }//end frame
            else if(nx.finalSeqIdx[5] && nx.finalSeqIdx[5].on){ var NUM = 5; nx.finalSeqIdx[NUM].on=0;
                //animate eye
                    setTimeout(function(){
                        nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 

                    },3000)
            }//end frame
            else if(nx.finalSeqIdx[6] && nx.finalSeqIdx[6].on){ var NUM = 6; //nx.finalSeqIdx[NUM].on=0;
                // nx.initFreeCam(); 
                //METHODOLOGY: cinematics frontView, sideView, heroView, birdEyeView, longView, PAIRVIEW, GROUPVIEW-.

                //animate leave path, flyby cam-.

    //TEMPLATE: POSROT ANM-PATH SEQUENCE FRAME:
    // if(nx.finalSeqIdx[3] && nx.finalSeqIdx[3].on){ var NUM = 3;
                if(!nx.finalSeqIdx[NUM].init){ nx.finalSeqIdx[NUM].init=1; //one time init
                    nx.scene.activeCamera.position.copyFrom({x: 20.55963344538219, y: 263.81614691268715, z: -31.47744778076308}); //CAMPOS: back to zscope2
                    nx.scene.activeCamera.setTarget(nx.BV32({x: 20.94169472338265, y: 263.81803254924404, z: -25.21296959870571})) //CAMTGT: 
                    // nx.camz.freeCam.position.copyFrom({x: 125.91809305164549, y: 252.910231776879, z: -113.34096907171961}); 
                    nx.finalSeqIdx[NUM].runAnm = 0; //ANMETHODOLOGY 0 off 1 on-. 
                    nx.finalSeqIdx[NUM].stepIdx = 0;
                    nx.finalSeqIdx[NUM].anmSpeed = 85;
                    nx.orbyMesh.rotationQuaternion = null;
                    //initialize-path and edit-.
                    // nx.finalSeqIdx[NUM].leavingPath = [{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.05,"y":-0.42,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.04,"y":-0.37,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.04,"y":-0.32,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.03,"y":-0.28,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.03,"y":-0.23,"z":0.09,"w":0.96}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.02,"y":-0.18,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.02,"y":-0.13,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.01,"y":-0.08,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":-0.01,"y":-0.03,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":0,"y":0.02,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":0,"y":0.07,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":0.01,"y":0.12,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.57},"rot":{"x":0.01,"y":0.17,"z":0.09,"w":0.97}},{"pos":{"x":20.92,"y":262.5,"z":-14.2},"rot":{"x":0.02,"y":0.22,"z":0.09,"w":0.97}},{"pos":{"x":20.22,"y":262.5,"z":-15.41},"rot":{"x":0.02,"y":0.26,"z":0.09,"w":0.95}},{"pos":{"x":19.4,"y":262.5,"z":-16.55},"rot":{"x":0.03,"y":0.31,"z":0.09,"w":0.94}},{"pos":{"x":18.48,"y":262.5,"z":-17.6},"rot":{"x":0.03,"y":0.36,"z":0.09,"w":0.92}},{"pos":{"x":17.45,"y":262.5,"z":-18.55},"rot":{"x":0.04,"y":0.4,"z":0.09,"w":0.9}},{"pos":{"x":16.34,"y":262.5,"z":-19.39},"rot":{"x":0.04,"y":0.45,"z":0.08,"w":0.88}},{"pos":{"x":15.14,"y":262.5,"z":-20.12},"rot":{"x":0.04,"y":0.49,"z":0.08,"w":0.86}},{"pos":{"x":13.88,"y":262.5,"z":-20.73},"rot":{"x":0.05,"y":0.54,"z":0.08,"w":0.83}},{"pos":{"x":12.56,"y":262.5,"z":-21.2},"rot":{"x":0.05,"y":0.58,"z":0.08,"w":0.8}},{"pos":{"x":11.65,"y":262.49,"z":-20.41},"rot":{"x":0.06,"y":0.62,"z":0.07,"w":0.77}},{"pos":{"x":10.63,"y":262.49,"z":-19.4},"rot":{"x":0.06,"y":0.65,"z":0.07,"w":0.74}},{"pos":{"x":9.5,"y":262.49,"z":-18.28},"rot":{"x":0.06,"y":0.69,"z":0.07,"w":0.71}},{"pos":{"x":8.32,"y":262.49,"z":-17.11},"rot":{"x":-0.08,"y":-0.74,"z":-0.07,"w":-0.68}},{"pos":{"x":7.11,"y":262.49,"z":-15.92},"rot":{"x":-0.08,"y":-0.77,"z":-0.07,"w":-0.64}},{"pos":{"x":5.88,"y":262.49,"z":-14.7},"rot":{"x":-0.08,"y":-0.8,"z":-0.07,"w":-0.6}},{"pos":{"x":4.64,"y":262.49,"z":-13.47},"rot":{"x":-0.09,"y":-0.83,"z":-0.06,"w":-0.56}},{"pos":{"x":3.4,"y":262.49,"z":-12.25},"rot":{"x":-0.09,"y":-0.86,"z":-0.06,"w":-0.52}},{"pos":{"x":2.18,"y":262.49,"z":-11.04},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.48}},{"pos":{"x":0.96,"y":262.5,"z":-9.94},"rot":{"x":-0.1,"y":-0.9,"z":-0.05,"w":-0.43}},{"pos":{"x":-0.28,"y":262.5,"z":-8.94},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.44}},{"pos":{"x":-1.53,"y":262.5,"z":-7.93},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.44}},{"pos":{"x":-2.78,"y":262.5,"z":-6.93},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.44}},{"pos":{"x":-4.02,"y":262.5,"z":-5.93},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.44}},{"pos":{"x":-5.27,"y":262.5,"z":-4.92},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.44}},{"pos":{"x":-6.44,"y":262.5,"z":-3.83},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.39}},{"pos":{"x":-7.49,"y":262.5,"z":-2.63},"rot":{"x":-0.1,"y":-0.94,"z":-0.04,"w":-0.34}},{"pos":{"x":-8.42,"y":262.5,"z":-1.32},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.3}},{"pos":{"x":-9.24,"y":262.5,"z":0.05},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-10.07,"y":262.5,"z":1.42},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-10.9,"y":262.5,"z":2.79},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-11.73,"y":262.5,"z":4.16},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-12.55,"y":262.5,"z":5.53},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-13.38,"y":262.5,"z":6.9},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-14.21,"y":262.5,"z":8.27},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-15.03,"y":262.5,"z":9.64},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-15.86,"y":262.5,"z":11.01},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-16.69,"y":262.5,"z":12.38},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-17.51,"y":262.5,"z":13.74},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-18.34,"y":262.5,"z":15.11},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-19.17,"y":262.5,"z":16.48},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-20,"y":262.5,"z":17.85},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-20.82,"y":262.5,"z":19.22},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-21.65,"y":262.5,"z":20.59},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-22.48,"y":262.5,"z":21.96},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-22.89,"y":262.5,"z":22.65},"rot":{"x":-0.1,"y":-0.97,"z":-0.03,"w":-0.25}},{"pos":{"x":-22.89,"y":262.5,"z":22.65},"rot":{"x":-0.1,"y":-0.98,"z":-0.02,"w":-0.2}},{"pos":{"x":-22.89,"y":262.5,"z":22.65},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.15}},{"pos":{"x":-22.89,"y":262.5,"z":22.65},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.1}},{"pos":{"x":-22.89,"y":262.5,"z":22.65},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.05}},{"pos":{"x":-22.89,"y":262.5,"z":22.65},"rot":{"x":-0.1,"y":-1,"z":0,"w":0}}]
                    // nx.finalSeqIdx[NUM].leavingPath = [{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.05,"y":-0.42,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.37,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.32,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.28,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.23,"z":0.09,"w":0.96}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.18,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.13,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.08,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.03,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.02,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.07,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.12,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.17,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.22,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.26,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.31,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.36,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.4,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.45,"z":0.08,"w":0.88}},{"pos":{"x":20.03,"y":262.5,"z":-14.31},"rot":{"x":0.04,"y":0.49,"z":0.08,"w":0.86}},{"pos":{"x":18.77,"y":262.5,"z":-14.91},"rot":{"x":0.05,"y":0.54,"z":0.08,"w":0.83}},{"pos":{"x":17.45,"y":262.5,"z":-15.39},"rot":{"x":0.05,"y":0.58,"z":0.08,"w":0.8}},{"pos":{"x":16.1,"y":262.5,"z":-15.73},"rot":{"x":0.06,"y":0.62,"z":0.07,"w":0.77}},{"pos":{"x":14.71,"y":262.5,"z":-15.94},"rot":{"x":0.06,"y":0.65,"z":0.07,"w":0.74}},{"pos":{"x":13.11,"y":262.5,"z":-16.01},"rot":{"x":0.06,"y":0.69,"z":0.07,"w":0.71}},{"pos":{"x":11.52,"y":262.5,"z":-15.93},"rot":{"x":-0.08,"y":-0.74,"z":-0.07,"w":-0.68}},{"pos":{"x":9.93,"y":262.5,"z":-15.69},"rot":{"x":-0.08,"y":-0.77,"z":-0.07,"w":-0.64}},{"pos":{"x":8.39,"y":262.5,"z":-15.29},"rot":{"x":-0.08,"y":-0.8,"z":-0.07,"w":-0.6}},{"pos":{"x":6.89,"y":262.5,"z":-14.73},"rot":{"x":-0.09,"y":-0.83,"z":-0.06,"w":-0.56}},{"pos":{"x":5.45,"y":262.5,"z":-14.03},"rot":{"x":-0.09,"y":-0.86,"z":-0.06,"w":-0.52}},{"pos":{"x":4.18,"y":262.49,"z":-13.01},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.48}},{"pos":{"x":2.99,"y":262.49,"z":-11.83},"rot":{"x":-0.1,"y":-0.9,"z":-0.05,"w":-0.43}},{"pos":{"x":1.84,"y":262.5,"z":-10.7},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.39}},{"pos":{"x":0.79,"y":262.5,"z":-9.49},"rot":{"x":-0.1,"y":-0.94,"z":-0.04,"w":-0.34}},{"pos":{"x":-0.14,"y":262.5,"z":-8.19},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.3}},{"pos":{"x":-0.97,"y":262.5,"z":-6.82},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-1.8,"y":262.5,"z":-5.45},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-2.62,"y":262.5,"z":-4.08},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-3.48,"y":262.5,"z":-2.73},"rot":{"x":0.09,"y":-0.96,"z":0.02,"w":-0.3}},{"pos":{"x":-4.47,"y":262.5,"z":-1.48},"rot":{"x":0.09,"y":-0.94,"z":0.03,"w":-0.34}},{"pos":{"x":-5.59,"y":262.5,"z":-0.33},"rot":{"x":0.09,"y":-0.92,"z":0.03,"w":-0.39}},{"pos":{"x":-6.81,"y":262.5,"z":0.71},"rot":{"x":0.09,"y":-0.9,"z":0.04,"w":-0.43}},{"pos":{"x":-8.1,"y":262.5,"z":1.65},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-9.4,"y":262.5,"z":2.59},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-10.69,"y":262.5,"z":3.53},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-11.99,"y":262.5,"z":4.47},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-13.28,"y":262.5,"z":5.41},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-14.62,"y":262.5,"z":6.28},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-15.96,"y":262.5,"z":7.15},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-17.3,"y":262.5,"z":8.03},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-18.56,"y":262.5,"z":9.11},"rot":{"x":-0.09,"y":-0.89,"z":-0.05,"w":-0.46}},{"pos":{"x":-19.74,"y":262.5,"z":10.24},"rot":{"x":-0.1,"y":-0.91,"z":-0.05,"w":-0.41}},{"pos":{"x":-20.85,"y":262.5,"z":11.39},"rot":{"x":-0.1,"y":-0.93,"z":-0.04,"w":-0.37}},{"pos":{"x":-21.84,"y":262.5,"z":12.65},"rot":{"x":-0.1,"y":-0.95,"z":-0.04,"w":-0.32}},{"pos":{"x":-22.7,"y":262.5,"z":14},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.27}},{"pos":{"x":-23.42,"y":262.5,"z":15.42},"rot":{"x":-0.1,"y":-0.98,"z":-0.03,"w":-0.22}},{"pos":{"x":-24,"y":262.5,"z":16.92},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.17}},{"pos":{"x":-24.42,"y":262.5,"z":18.46},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.13}},{"pos":{"x":-24.69,"y":262.5,"z":20.03},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.08}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.03}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.02}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-0.99,"z":0.01,"w":0.12}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-0.98,"z":0.01,"w":0.17}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-0.97,"z":0.02,"w":0.22}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-0.96,"z":0.02,"w":0.27}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-0.95,"z":0.03,"w":0.32}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-0.93,"z":0.03,"w":0.36}}];
                    // nx.finalSeqIdx[NUM].leavingPath = [{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.05,"y":-0.42,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.37,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.32,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.28,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.23,"z":0.09,"w":0.96}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.18,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.13,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.08,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.03,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.02,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.07,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.12,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.17,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.22,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.26,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.31,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.36,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.4,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.45,"z":0.08,"w":0.88}},{"pos":{"x":20.03,"y":262.5,"z":-14.31},"rot":{"x":0.04,"y":0.49,"z":0.08,"w":0.86}},{"pos":{"x":18.77,"y":262.5,"z":-14.91},"rot":{"x":0.05,"y":0.54,"z":0.08,"w":0.83}},{"pos":{"x":17.45,"y":262.5,"z":-15.39},"rot":{"x":0.05,"y":0.58,"z":0.08,"w":0.8}},{"pos":{"x":16.1,"y":262.5,"z":-15.73},"rot":{"x":0.06,"y":0.62,"z":0.07,"w":0.77}},{"pos":{"x":14.71,"y":262.5,"z":-15.94},"rot":{"x":0.06,"y":0.65,"z":0.07,"w":0.74}},{"pos":{"x":13.11,"y":262.5,"z":-16.01},"rot":{"x":0.06,"y":0.69,"z":0.07,"w":0.71}},{"pos":{"x":11.52,"y":262.5,"z":-15.93},"rot":{"x":-0.08,"y":-0.74,"z":-0.07,"w":-0.68}},{"pos":{"x":9.93,"y":262.5,"z":-15.69},"rot":{"x":-0.08,"y":-0.77,"z":-0.07,"w":-0.64}},{"pos":{"x":8.39,"y":262.5,"z":-15.29},"rot":{"x":-0.08,"y":-0.8,"z":-0.07,"w":-0.6}},{"pos":{"x":6.89,"y":262.5,"z":-14.73},"rot":{"x":-0.09,"y":-0.83,"z":-0.06,"w":-0.56}},{"pos":{"x":5.45,"y":262.5,"z":-14.03},"rot":{"x":-0.09,"y":-0.86,"z":-0.06,"w":-0.52}},{"pos":{"x":4.18,"y":262.49,"z":-13.01},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.48}},{"pos":{"x":2.99,"y":262.49,"z":-11.83},"rot":{"x":-0.1,"y":-0.9,"z":-0.05,"w":-0.43}},{"pos":{"x":1.84,"y":262.5,"z":-10.7},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.39}},{"pos":{"x":0.79,"y":262.5,"z":-9.49},"rot":{"x":-0.1,"y":-0.94,"z":-0.04,"w":-0.34}},{"pos":{"x":-0.14,"y":262.5,"z":-8.19},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.3}},{"pos":{"x":-0.97,"y":262.5,"z":-6.82},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-1.8,"y":262.5,"z":-5.45},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-2.62,"y":262.5,"z":-4.08},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-3.48,"y":262.5,"z":-2.73},"rot":{"x":0.09,"y":-0.96,"z":0.02,"w":-0.3}},{"pos":{"x":-4.47,"y":262.5,"z":-1.48},"rot":{"x":0.09,"y":-0.94,"z":0.03,"w":-0.34}},{"pos":{"x":-5.59,"y":262.5,"z":-0.33},"rot":{"x":0.09,"y":-0.92,"z":0.03,"w":-0.39}},{"pos":{"x":-6.81,"y":262.5,"z":0.71},"rot":{"x":0.09,"y":-0.9,"z":0.04,"w":-0.43}},{"pos":{"x":-8.1,"y":262.5,"z":1.65},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-9.4,"y":262.5,"z":2.59},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-10.69,"y":262.5,"z":3.53},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-11.99,"y":262.5,"z":4.47},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-13.28,"y":262.5,"z":5.41},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-14.62,"y":262.5,"z":6.28},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-15.96,"y":262.5,"z":7.15},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-17.3,"y":262.5,"z":8.03},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-18.56,"y":262.5,"z":9.11},"rot":{"x":-0.09,"y":-0.89,"z":-0.05,"w":-0.46}},{"pos":{"x":-19.74,"y":262.5,"z":10.24},"rot":{"x":-0.1,"y":-0.91,"z":-0.05,"w":-0.41}},{"pos":{"x":-20.85,"y":262.5,"z":11.39},"rot":{"x":-0.1,"y":-0.93,"z":-0.04,"w":-0.37}},{"pos":{"x":-21.84,"y":262.5,"z":12.65},"rot":{"x":-0.1,"y":-0.95,"z":-0.04,"w":-0.32}},{"pos":{"x":-22.7,"y":262.5,"z":14},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.27}},{"pos":{"x":-23.42,"y":262.5,"z":15.42},"rot":{"x":-0.1,"y":-0.98,"z":-0.03,"w":-0.22}},{"pos":{"x":-24,"y":262.5,"z":16.92},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.17}},{"pos":{"x":-24.42,"y":262.5,"z":18.46},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.13}},{"pos":{"x":-24.69,"y":262.5,"z":20.03},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.08}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.03}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.02}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}}];
                    // nx.finalSeqIdx[NUM].leavingPath = [{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.05,"y":-0.42,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.37,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.32,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.29,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.23,"z":0.09,"w":0.96}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.18,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.13,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.08,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.03,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.02,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.07,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.12,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.17,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.22,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.26,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.31,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.36,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.4,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.45,"z":0.08,"w":0.88}},{"pos":{"x":20.03,"y":262.5,"z":-14.31},"rot":{"x":0.04,"y":0.49,"z":0.08,"w":0.86}},{"pos":{"x":18.77,"y":262.5,"z":-14.91},"rot":{"x":0.05,"y":0.54,"z":0.08,"w":0.83}},{"pos":{"x":17.45,"y":262.5,"z":-15.39},"rot":{"x":0.05,"y":0.57,"z":0.08,"w":0.8}},{"pos":{"x":16.1,"y":262.5,"z":-15.73},"rot":{"x":0.06,"y":0.62,"z":0.07,"w":0.77}},{"pos":{"x":14.71,"y":262.5,"z":-15.94},"rot":{"x":0.06,"y":0.65,"z":0.07,"w":0.74}},{"pos":{"x":13.11,"y":262.5,"z":-16.02},"rot":{"x":0.06,"y":0.69,"z":0.07,"w":0.71}},{"pos":{"x":11.52,"y":262.5,"z":-15.93},"rot":{"x":-0.08,"y":-0.74,"z":-0.08,"w":-0.68}},{"pos":{"x":9.93,"y":262.5,"z":-15.69},"rot":{"x":-0.08,"y":-0.77,"z":-0.08,"w":-0.64}},{"pos":{"x":8.39,"y":262.5,"z":-15.29},"rot":{"x":-0.08,"y":-0.8,"z":-0.08,"w":-0.6}},{"pos":{"x":6.89,"y":262.5,"z":-14.73},"rot":{"x":-0.09,"y":-0.83,"z":-0.06,"w":-0.57}},{"pos":{"x":5.45,"y":262.5,"z":-14.03},"rot":{"x":-0.09,"y":-0.86,"z":-0.06,"w":-0.52}},{"pos":{"x":4.18,"y":262.49,"z":-13.01},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.48}},{"pos":{"x":2.99,"y":262.49,"z":-11.83},"rot":{"x":-0.1,"y":-0.9,"z":-0.05,"w":-0.43}},{"pos":{"x":1.84,"y":262.5,"z":-10.7},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.39}},{"pos":{"x":0.79,"y":262.5,"z":-9.49},"rot":{"x":-0.1,"y":-0.94,"z":-0.04,"w":-0.34}},{"pos":{"x":-0.15,"y":262.5,"z":-8.19},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.3}},{"pos":{"x":-0.97,"y":262.5,"z":-6.82},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-1.8,"y":262.5,"z":-5.45},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-2.62,"y":262.5,"z":-4.08},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-3.48,"y":262.5,"z":-2.73},"rot":{"x":0.09,"y":-0.96,"z":0.02,"w":-0.3}},{"pos":{"x":-4.47,"y":262.5,"z":-1.48},"rot":{"x":0.09,"y":-0.94,"z":0.03,"w":-0.34}},{"pos":{"x":-5.59,"y":262.5,"z":-0.33},"rot":{"x":0.09,"y":-0.92,"z":0.03,"w":-0.39}},{"pos":{"x":-6.81,"y":262.5,"z":0.71},"rot":{"x":0.09,"y":-0.9,"z":0.04,"w":-0.43}},{"pos":{"x":-8.1,"y":262.5,"z":1.65},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-9.4,"y":262.5,"z":2.59},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-10.69,"y":262.5,"z":3.53},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-11.99,"y":262.5,"z":4.47},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-13.38,"y":262.5,"z":5.31},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-14.92,"y":262.5,"z":5.98},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-16.47,"y":262.5,"z":6.65},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-18.01,"y":262.5,"z":7.42},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-19.07,"y":262.5,"z":8.61},"rot":{"x":-0.09,"y":-0.89,"z":-0.05,"w":-0.46}},{"pos":{"x":-20.05,"y":262.5,"z":9.94},"rot":{"x":-0.1,"y":-0.91,"z":-0.05,"w":-0.41}},{"pos":{"x":-20.96,"y":262.5,"z":11.29},"rot":{"x":-0.1,"y":-0.93,"z":-0.04,"w":-0.37}},{"pos":{"x":-21.84,"y":262.5,"z":12.65},"rot":{"x":-0.1,"y":-0.95,"z":-0.04,"w":-0.32}},{"pos":{"x":-22.7,"y":262.5,"z":14},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.27}},{"pos":{"x":-23.42,"y":262.5,"z":15.42},"rot":{"x":-0.1,"y":-0.98,"z":-0.03,"w":-0.22}},{"pos":{"x":-24,"y":262.5,"z":16.92},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.17}},{"pos":{"x":-24.42,"y":262.5,"z":18.46},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.13}},{"pos":{"x":-24.69,"y":262.5,"z":20.03},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.08}},{"pos":{"x":-24.77,"y":262.5,"z":23.23},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.03}},{"pos":{"x":-24.77,"y":262.5,"z":22.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.02}},{"pos":{"x":-24.77,"y":262.5,"z":22.43},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":22.03},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":21.63},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":21.23},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}}];
                    // nx.finalSeqIdx[NUM].leavingPath = [{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.05,"y":-0.42,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.37,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.32,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.29,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.23,"z":0.09,"w":0.96}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.18,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.13,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.08,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.03,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.02,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.07,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.12,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.17,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.22,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.26,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.31,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.36,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.4,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.45,"z":0.08,"w":0.88}},{"pos":{"x":20.03,"y":262.5,"z":-14.31},"rot":{"x":0.04,"y":0.49,"z":0.08,"w":0.86}},{"pos":{"x":18.77,"y":262.5,"z":-14.91},"rot":{"x":0.05,"y":0.54,"z":0.08,"w":0.83}},{"pos":{"x":17.45,"y":262.5,"z":-15.39},"rot":{"x":0.05,"y":0.56,"z":0.08,"w":0.8}},{"pos":{"x":16.1,"y":262.5,"z":-15.73},"rot":{"x":0.06,"y":0.62,"z":0.07,"w":0.77}},{"pos":{"x":14.71,"y":262.5,"z":-15.94},"rot":{"x":0.06,"y":0.65,"z":0.07,"w":0.74}},{"pos":{"x":13.11,"y":262.5,"z":-16.02},"rot":{"x":0.06,"y":0.69,"z":0.07,"w":0.71}},{"pos":{"x":11.52,"y":262.5,"z":-15.93},"rot":{"x":-0.08,"y":-0.74,"z":-0.08,"w":-0.68}},{"pos":{"x":9.93,"y":262.5,"z":-15.69},"rot":{"x":-0.08,"y":-0.77,"z":-0.08,"w":-0.64}},{"pos":{"x":8.39,"y":262.5,"z":-15.29},"rot":{"x":-0.08,"y":-0.8,"z":-0.08,"w":-0.6}},{"pos":{"x":6.89,"y":262.5,"z":-14.73},"rot":{"x":-0.09,"y":-0.83,"z":-0.06,"w":-0.57}},{"pos":{"x":5.45,"y":262.5,"z":-14.03},"rot":{"x":-0.09,"y":-0.86,"z":-0.06,"w":-0.52}},{"pos":{"x":4.18,"y":262.49,"z":-13.01},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.48}},{"pos":{"x":2.99,"y":262.49,"z":-11.83},"rot":{"x":-0.1,"y":-0.9,"z":-0.05,"w":-0.43}},{"pos":{"x":1.84,"y":262.5,"z":-10.7},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.39}},{"pos":{"x":0.79,"y":262.5,"z":-9.49},"rot":{"x":-0.1,"y":-0.94,"z":-0.04,"w":-0.34}},{"pos":{"x":-0.15,"y":262.5,"z":-8.19},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.3}},{"pos":{"x":-0.97,"y":262.5,"z":-6.82},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-1.8,"y":262.5,"z":-5.45},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-2.62,"y":262.5,"z":-4.08},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-3.48,"y":262.5,"z":-2.73},"rot":{"x":0.09,"y":-0.96,"z":0.02,"w":-0.3}},{"pos":{"x":-4.47,"y":262.5,"z":-1.48},"rot":{"x":0.09,"y":-0.94,"z":0.03,"w":-0.34}},{"pos":{"x":-5.59,"y":262.5,"z":-0.33},"rot":{"x":0.09,"y":-0.92,"z":0.03,"w":-0.39}},{"pos":{"x":-6.81,"y":262.5,"z":0.71},"rot":{"x":0.09,"y":-0.9,"z":0.04,"w":-0.43}},{"pos":{"x":-8.1,"y":262.5,"z":1.65},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-9.4,"y":262.5,"z":2.59},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-10.69,"y":262.5,"z":3.53},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-11.99,"y":262.5,"z":4.47},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-13.38,"y":262.5,"z":5.31},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-14.92,"y":262.5,"z":5.98},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-16.47,"y":262.5,"z":6.65},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-18.02,"y":262.5,"z":7.42},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-18.97,"y":262.5,"z":8.11},"rot":{"x":-0.09,"y":-0.89,"z":-0.05,"w":-0.46}},{"pos":{"x":-19.95,"y":262.5,"z":9.03},"rot":{"x":-0.1,"y":-0.91,"z":-0.05,"w":-0.41}},{"pos":{"x":-20.96,"y":262.5,"z":10.39},"rot":{"x":-0.1,"y":-0.93,"z":-0.04,"w":-0.37}},{"pos":{"x":-21.84,"y":262.5,"z":12.05},"rot":{"x":-0.1,"y":-0.95,"z":-0.04,"w":-0.32}},{"pos":{"x":-22.7,"y":262.5,"z":13.7},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.27}},{"pos":{"x":-23.42,"y":262.5,"z":15.32},"rot":{"x":-0.1,"y":-0.98,"z":-0.03,"w":-0.22}},{"pos":{"x":-24,"y":262.5,"z":16.92},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.17}},{"pos":{"x":-24.42,"y":262.5,"z":18.46},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.13}},{"pos":{"x":-24.69,"y":262.5,"z":20.03},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.08}},{"pos":{"x":-24.77,"y":262.5,"z":24.43},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.03}},{"pos":{"x":-24.77,"y":262.5,"z":23.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.02}},{"pos":{"x":-24.77,"y":262.5,"z":23.23},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":22.63},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":22.03},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":21.43},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.77,"y":262.5,"z":20.83},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}}];
                    // nx.finalSeqIdx[NUM].leavingPath = [{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.05,"y":-0.42,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.37,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.04,"y":-0.32,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.29,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.03,"y":-0.23,"z":0.09,"w":0.96}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.18,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.13,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.08,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.03,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.02,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.07,"z":0.09,"w":0.99}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.12,"z":0.09,"w":0.98}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.01,"y":0.17,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.22,"z":0.09,"w":0.97}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.02,"y":0.26,"z":0.09,"w":0.95}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.31,"z":0.09,"w":0.94}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.03,"y":0.36,"z":0.09,"w":0.92}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.4,"z":0.09,"w":0.9}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0.04,"y":0.45,"z":0.08,"w":0.88}},{"pos":{"x":20.03,"y":262.5,"z":-14.31},"rot":{"x":0.04,"y":0.49,"z":0.08,"w":0.86}},{"pos":{"x":18.77,"y":262.5,"z":-14.91},"rot":{"x":0.05,"y":0.54,"z":0.08,"w":0.83}},{"pos":{"x":17.45,"y":262.5,"z":-15.39},"rot":{"x":0.05,"y":0.56,"z":0.08,"w":0.8}},{"pos":{"x":16.1,"y":262.5,"z":-15.73},"rot":{"x":0.06,"y":0.62,"z":0.07,"w":0.77}},{"pos":{"x":14.71,"y":262.5,"z":-15.94},"rot":{"x":0.06,"y":0.65,"z":0.07,"w":0.74}},{"pos":{"x":13.11,"y":262.5,"z":-16.02},"rot":{"x":0.06,"y":0.69,"z":0.07,"w":0.71}},{"pos":{"x":11.52,"y":262.5,"z":-15.93},"rot":{"x":-0.08,"y":-0.74,"z":-0.08,"w":-0.68}},{"pos":{"x":9.93,"y":262.5,"z":-15.69},"rot":{"x":-0.08,"y":-0.77,"z":-0.08,"w":-0.64}},{"pos":{"x":8.39,"y":262.5,"z":-15.29},"rot":{"x":-0.08,"y":-0.8,"z":-0.08,"w":-0.6}},{"pos":{"x":6.89,"y":262.5,"z":-14.73},"rot":{"x":-0.09,"y":-0.83,"z":-0.06,"w":-0.57}},{"pos":{"x":5.45,"y":262.5,"z":-14.03},"rot":{"x":-0.09,"y":-0.86,"z":-0.06,"w":-0.52}},{"pos":{"x":4.18,"y":262.49,"z":-13.01},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.48}},{"pos":{"x":2.99,"y":262.49,"z":-11.83},"rot":{"x":-0.1,"y":-0.9,"z":-0.05,"w":-0.43}},{"pos":{"x":1.84,"y":262.5,"z":-10.7},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.39}},{"pos":{"x":0.79,"y":262.5,"z":-9.49},"rot":{"x":-0.1,"y":-0.94,"z":-0.04,"w":-0.34}},{"pos":{"x":-0.15,"y":262.5,"z":-8.19},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.3}},{"pos":{"x":-0.97,"y":262.5,"z":-6.82},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-1.8,"y":262.5,"z":-5.45},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-2.62,"y":262.5,"z":-4.08},"rot":{"x":0,"y":-0.97,"z":0,"w":-0.27}},{"pos":{"x":-3.48,"y":262.5,"z":-2.73},"rot":{"x":0.09,"y":-0.96,"z":0.02,"w":-0.3}},{"pos":{"x":-4.47,"y":262.5,"z":-1.48},"rot":{"x":0.09,"y":-0.94,"z":0.03,"w":-0.34}},{"pos":{"x":-5.59,"y":262.5,"z":-0.33},"rot":{"x":0.09,"y":-0.92,"z":0.03,"w":-0.39}},{"pos":{"x":-6.81,"y":262.5,"z":0.71},"rot":{"x":0.09,"y":-0.9,"z":0.04,"w":-0.43}},{"pos":{"x":-8.1,"y":262.5,"z":1.65},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-9.4,"y":262.5,"z":2.59},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-10.69,"y":262.5,"z":3.53},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-11.99,"y":262.5,"z":4.47},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-13.38,"y":262.5,"z":5.31},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.46}},{"pos":{"x":-14.92,"y":262.5,"z":5.98},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-16.47,"y":262.5,"z":6.65},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-18.02,"y":262.5,"z":7.42},"rot":{"x":0,"y":-0.88,"z":0,"w":-0.48}},{"pos":{"x":-18.97,"y":262.5,"z":8.1},"rot":{"x":-0.09,"y":-0.89,"z":-0.05,"w":-0.46}},{"pos":{"x":-19.95,"y":262.5,"z":9.02},"rot":{"x":-0.1,"y":-0.91,"z":-0.05,"w":-0.41}},{"pos":{"x":-20.96,"y":262.5,"z":10.39},"rot":{"x":-0.1,"y":-0.93,"z":-0.04,"w":-0.37}},{"pos":{"x":-21.84,"y":262.5,"z":12.05},"rot":{"x":-0.1,"y":-0.95,"z":-0.04,"w":-0.32}},{"pos":{"x":-22.7,"y":262.5,"z":13.7},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.27}},{"pos":{"x":-23.42,"y":262.5,"z":15.32},"rot":{"x":-0.1,"y":-0.98,"z":-0.03,"w":-0.22}},{"pos":{"x":-24,"y":262.5,"z":16.92},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.17}},{"pos":{"x":-24.42,"y":262.5,"z":18.05},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.13}},{"pos":{"x":-24.59,"y":262.5,"z":19.02},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.08}},{"pos":{"x":-24.57,"y":262.5,"z":19.62},"rot":{"x":-0.1,"y":-1,"z":-0.01,"w":-0.03}},{"pos":{"x":-24.57,"y":262.5,"z":20.22},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.02}},{"pos":{"x":-24.57,"y":262.5,"z":20.82},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.57,"y":262.5,"z":21.42},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.57,"y":262.5,"z":22.03},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.57,"y":262.5,"z":22.63},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}},{"pos":{"x":-24.57,"y":262.5,"z":23.23},"rot":{"x":-0.1,"y":-1,"z":0,"w":0.07}}];
                    // nx.finalSeqIdx[NUM].leavingPath = [{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.88,"z":0.2}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.77,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.66,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.6,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.48,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.37,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.27,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.17,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.07,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.04,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":0.14,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.24,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":0.34,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.44,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.53,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.63,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.74,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.83,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.94,"z":0.18}},{"pos":{"x":20.03,"y":262.5,"z":-14.31},"rot":{"x":-0.01,"y":1.03,"z":0.17}},{"pos":{"x":18.77,"y":262.5,"z":-14.91},"rot":{"x":-0.01,"y":1.15,"z":0.18}},{"pos":{"x":17.45,"y":262.5,"z":-15.39},"rot":{"x":-0.01,"y":1.22,"z":0.19}},{"pos":{"x":16.1,"y":262.5,"z":-15.73},"rot":{"x":0,"y":1.35,"z":0.18}},{"pos":{"x":14.71,"y":262.5,"z":-15.94},"rot":{"x":-0.01,"y":1.44,"z":0.18}},{"pos":{"x":13.11,"y":262.5,"z":-16.02},"rot":{"x":-0.02,"y":1.54,"z":0.18}},{"pos":{"x":11.52,"y":262.5,"z":-15.93},"rot":{"x":-0.01,"y":1.65,"z":0.22}},{"pos":{"x":9.93,"y":262.5,"z":-15.69},"rot":{"x":-0.03,"y":1.75,"z":0.22}},{"pos":{"x":8.39,"y":262.5,"z":-15.29},"rot":{"x":-0.04,"y":1.85,"z":0.22}},{"pos":{"x":6.89,"y":262.5,"z":-14.73},"rot":{"x":0,"y":1.93,"z":0.21}},{"pos":{"x":5.45,"y":262.5,"z":-14.03},"rot":{"x":-0.01,"y":2.05,"z":0.21}},{"pos":{"x":4.18,"y":262.49,"z":-13.01},"rot":{"x":-0.01,"y":2.14,"z":0.2}},{"pos":{"x":2.99,"y":262.49,"z":-11.83},"rot":{"x":-0.01,"y":2.24,"z":0.22}},{"pos":{"x":1.84,"y":262.5,"z":-10.7},"rot":{"x":0,"y":2.34,"z":0.21}},{"pos":{"x":0.79,"y":262.5,"z":-9.49},"rot":{"x":-0.01,"y":2.44,"z":0.21}},{"pos":{"x":-0.15,"y":262.5,"z":-8.19},"rot":{"x":0,"y":2.53,"z":0.2}},{"pos":{"x":-0.97,"y":262.5,"z":-6.82},"rot":{"x":0,"y":2.59,"z":0}},{"pos":{"x":-1.8,"y":262.5,"z":-5.45},"rot":{"x":0,"y":2.59,"z":0}},{"pos":{"x":-2.62,"y":262.5,"z":-4.08},"rot":{"x":0,"y":2.59,"z":0}},{"pos":{"x":-3.48,"y":262.5,"z":-2.73},"rot":{"x":-0.02,"y":2.53,"z":-0.19}},{"pos":{"x":-4.47,"y":262.5,"z":-1.48},"rot":{"x":-0.01,"y":2.44,"z":-0.19}},{"pos":{"x":-5.59,"y":262.5,"z":-0.33},"rot":{"x":-0.02,"y":2.34,"z":-0.19}},{"pos":{"x":-6.81,"y":262.5,"z":0.71},"rot":{"x":-0.01,"y":2.25,"z":-0.2}},{"pos":{"x":-8.1,"y":262.5,"z":1.65},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-9.4,"y":262.5,"z":2.59},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-10.69,"y":262.5,"z":3.53},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-11.99,"y":262.5,"z":4.47},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-13.38,"y":262.5,"z":5.31},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-14.92,"y":262.5,"z":5.98},"rot":{"x":0,"y":2.14,"z":0}},{"pos":{"x":-16.47,"y":262.5,"z":6.65},"rot":{"x":0,"y":2.14,"z":0}},{"pos":{"x":-18.02,"y":262.5,"z":7.42},"rot":{"x":0,"y":2.14,"z":0}},{"pos":{"x":-18.97,"y":262.5,"z":8.1},"rot":{"x":-0.01,"y":2.18,"z":0.2}},{"pos":{"x":-19.95,"y":262.5,"z":9.02},"rot":{"x":-0.01,"y":2.29,"z":0.22}},{"pos":{"x":-20.96,"y":262.5,"z":10.39},"rot":{"x":-0.01,"y":2.38,"z":0.21}},{"pos":{"x":-21.84,"y":262.5,"z":12.05},"rot":{"x":-0.02,"y":2.49,"z":0.21}},{"pos":{"x":-22.7,"y":262.5,"z":13.7},"rot":{"x":-0.01,"y":2.59,"z":0.2}},{"pos":{"x":-23.42,"y":262.5,"z":15.32},"rot":{"x":-0.02,"y":2.69,"z":0.2}},{"pos":{"x":-24,"y":262.5,"z":16.72},"rot":{"x":0,"y":2.8,"z":0.2}},{"pos":{"x":-24.42,"y":262.5,"z":17.95},"rot":{"x":0.1,"y":2.87,"z":0.2}},{"pos":{"x":-24.59,"y":262.5,"z":18.81},"rot":{"x":0.2,"y":2.98,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":19.52},"rot":{"x":0.3,"y":3.08,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":20.22},"rot":{"x":0.2,"y":-3.11,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":20.92},"rot":{"x":0.1,"y":-3.01,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":21.72},"rot":{"x":0,"y":-3.01,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":22.63},"rot":{"x":-0.1,"y":-3.01,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":23.23},"rot":{"x":0,"y":-3.01,"z":0.19}},{"pos":{"x":-24.57,"y":262.39,"z":22.02},"rot":{"x":0.1,"y":-3.01,"z":0.19}}];
                    nx.finalSeqIdx[NUM].leavingPath = [{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.88,"z":0.2}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.77,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.66,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.6,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.48,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.37,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.27,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":-0.17,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":-0.08,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.04,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":0.14,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.24,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.02,"y":0.34,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.44,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.53,"z":0.18}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.63,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.74,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":0,"y":0.83,"z":0.19}},{"pos":{"x":21.22,"y":262.5,"z":-13.58},"rot":{"x":-0.01,"y":0.94,"z":0.18}},{"pos":{"x":20.03,"y":262.5,"z":-14.31},"rot":{"x":-0.01,"y":1.03,"z":0.17}},{"pos":{"x":18.77,"y":262.5,"z":-14.91},"rot":{"x":-0.01,"y":1.14,"z":0.18}},{"pos":{"x":17.45,"y":262.5,"z":-15.39},"rot":{"x":-0.01,"y":1.22,"z":0.19}},{"pos":{"x":16.1,"y":262.5,"z":-15.73},"rot":{"x":0,"y":1.35,"z":0.18}},{"pos":{"x":14.71,"y":262.5,"z":-15.94},"rot":{"x":-0.01,"y":1.44,"z":0.18}},{"pos":{"x":13.11,"y":262.5,"z":-16.02},"rot":{"x":-0.02,"y":1.54,"z":0.18}},{"pos":{"x":11.52,"y":262.5,"z":-15.93},"rot":{"x":-0.01,"y":1.65,"z":0.22}},{"pos":{"x":9.93,"y":262.5,"z":-15.69},"rot":{"x":-0.03,"y":1.75,"z":0.22}},{"pos":{"x":8.39,"y":262.5,"z":-15.29},"rot":{"x":-0.04,"y":1.85,"z":0.22}},{"pos":{"x":6.89,"y":262.5,"z":-14.73},"rot":{"x":0,"y":1.93,"z":0.21}},{"pos":{"x":5.45,"y":262.5,"z":-14.03},"rot":{"x":-0.01,"y":2.04,"z":0.21}},{"pos":{"x":4.18,"y":262.49,"z":-13.01},"rot":{"x":-0.01,"y":2.14,"z":0.2}},{"pos":{"x":2.99,"y":262.49,"z":-11.83},"rot":{"x":-0.01,"y":2.24,"z":0.22}},{"pos":{"x":1.84,"y":262.5,"z":-10.7},"rot":{"x":0,"y":2.34,"z":0.21}},{"pos":{"x":0.79,"y":262.5,"z":-9.49},"rot":{"x":-0.01,"y":2.44,"z":0.21}},{"pos":{"x":-0.15,"y":262.5,"z":-8.19},"rot":{"x":0,"y":2.52,"z":0.2}},{"pos":{"x":-0.97,"y":262.5,"z":-6.82},"rot":{"x":0,"y":2.59,"z":0}},{"pos":{"x":-1.8,"y":262.5,"z":-5.45},"rot":{"x":0,"y":2.59,"z":0}},{"pos":{"x":-2.62,"y":262.5,"z":-4.08},"rot":{"x":0,"y":2.59,"z":0}},{"pos":{"x":-3.48,"y":262.5,"z":-2.73},"rot":{"x":-0.02,"y":2.52,"z":-0.19}},{"pos":{"x":-4.47,"y":262.5,"z":-1.48},"rot":{"x":-0.01,"y":2.44,"z":-0.19}},{"pos":{"x":-5.59,"y":262.5,"z":-0.33},"rot":{"x":-0.02,"y":2.34,"z":-0.19}},{"pos":{"x":-6.81,"y":262.5,"z":0.71},"rot":{"x":-0.01,"y":2.25,"z":-0.2}},{"pos":{"x":-8.1,"y":262.5,"z":1.65},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-9.4,"y":262.5,"z":2.59},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-10.69,"y":262.5,"z":3.53},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-11.99,"y":262.5,"z":4.47},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-13.38,"y":262.5,"z":5.31},"rot":{"x":0,"y":2.19,"z":0}},{"pos":{"x":-14.92,"y":262.5,"z":5.98},"rot":{"x":0,"y":2.14,"z":0}},{"pos":{"x":-16.47,"y":262.5,"z":6.65},"rot":{"x":0,"y":2.14,"z":0}},{"pos":{"x":-18.02,"y":262.5,"z":7.42},"rot":{"x":0,"y":2.14,"z":0}},{"pos":{"x":-18.97,"y":262.5,"z":8.1},"rot":{"x":-0.01,"y":2.18,"z":0.2}},{"pos":{"x":-19.95,"y":262.5,"z":9.02},"rot":{"x":-0.01,"y":2.29,"z":0.22}},{"pos":{"x":-20.96,"y":262.5,"z":10.39},"rot":{"x":-0.01,"y":2.38,"z":0.21}},{"pos":{"x":-21.84,"y":262.5,"z":12.05},"rot":{"x":-0.02,"y":2.49,"z":0.21}},{"pos":{"x":-22.7,"y":262.5,"z":13.7},"rot":{"x":-0.01,"y":2.59,"z":0.2}},{"pos":{"x":-23.42,"y":262.5,"z":15.32},"rot":{"x":-0.02,"y":2.69,"z":0.2}},{"pos":{"x":-24,"y":262.5,"z":16.72},"rot":{"x":0,"y":2.8,"z":0.2}},{"pos":{"x":-24.42,"y":262.5,"z":17.95},"rot":{"x":0.1,"y":2.87,"z":0.2}},{"pos":{"x":-24.59,"y":262.5,"z":19.21},"rot":{"x":0.2,"y":2.98,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":20.32},"rot":{"x":0.3,"y":3.08,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":21.42},"rot":{"x":0.2,"y":-3.11,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":22.52},"rot":{"x":0.1,"y":-3.01,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":23.52},"rot":{"x":0,"y":-3.01,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":24.63},"rot":{"x":-0.1,"y":-3.01,"z":0.19}},{"pos":{"x":-24.57,"y":262.5,"z":25.23},"rot":{"x":0,"y":-3.01,"z":0.19}},{"pos":{"x":-24.57,"y":262.39,"z":24.02},"rot":{"x":0.1,"y":-3.01,"z":0.19}}];
                    // nx.finalSeqIdx[NUM].leavingPath = nx.editz.transformToEuler(nx.finalSeqIdx[NUM].leavingPath);
                    // var instPath = nx.createPathEditor({aName:'leavingPath', ANMPath:nx.finalSeqIdx[NUM].leavingPath}); //-WORKING-PATH-EDITOR-.
                } //end init sequence-.
                if(!nx.finalSeqIdx[NUM].initAnm){  //init next path point
                    nx.finalSeqIdx[NUM].curPOS = nx.finalSeqIdx[NUM].leavingPath[nx.finalSeqIdx[NUM].stepIdx];
                    nx.finalSeqIdx[NUM].nxtPOS = nx.finalSeqIdx[NUM].leavingPath[++nx.finalSeqIdx[NUM].stepIdx];
                    nx.finalSeqIdx[NUM].initAnm = 1;
                    if( nx.finalSeqIdx[NUM].leavingPath.length*0.75<=nx.finalSeqIdx[NUM].stepIdx){ //ANMETHODOLOGY: PERCENT-DONE-ANM through an animation
                        if(!nx.finalSeqIdx[NUM].beforeFinalWord){ nx.finalSeqIdx[NUM].beforeFinalWord = 1; //ANMETHODOLOGY: one-time-pattern -.
                            nx.finalSeqIdx[NUM+1] = {on:1}; //SIMULTANEOUS-ANM-. 
                        }
                        
                    }
                    if(!nx.finalSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.finalSeqIdx[NUM].on=0; //important
                        // nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 

// nx.orbyMesh.rotationQuaternion
// Quaternion {x: -0.1, y: -1, z: 0, w: 0.07}
// debugger;
// var euler = quaternion.toEulerAngles();

//EULER ROT: methodology convert back from Quaternion quickly?
// var euler = nx.orbyMesh.rotationQuaternion.toEulerAngles();
// nx.orbyMesh.rotationQuaternion = null;
// nx.orbyMesh.rotation = euler;
nx.orbyMesh.rotation.z = 0;

nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //ANIMATED-SURFBOARD-.

// euler
// var yprQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(yaw, pitch, roll);
// var yprQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(euler.x, euler.y, euler.z);
// nx.orbyMesh.rotationQuaternion = yprQuaternion;




                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.finalSeqIdx[NUM].runAnm = 1;
                }  
                //NEW-POSROT-ANM-FORMAT- //TODO add in the ROTIdx option-.. OR meta:1,2,3,4, OR  
                if(nx.finalSeqIdx[NUM].runAnm) { nx.finalSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.finalSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.finalSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.finalSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.finalSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.finalSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.finalSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.finalSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                    // NUM=6; //Fix HOISTED NUM?
                        nx.scene.activeCamera.setTarget(nx.orbyMesh.position) //CAMTGT: 
                        //EDITABLE-ROTATIONS-.
                        if(nx.finalSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z,nx.finalSeqIdx[NUM].curPOS.rot.w);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }else{ //EULER-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = null;
                            nx.orbyMesh.rotation = new BABYLON.Vector3(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }
                    }, complete:function(){ 
                    // NUM=6; //Fix HOISTED NUM?
                        nx.finalSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });
                }
            // }








                // setTimeout(function(){
                //     nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                // },3000)

            }//end frame
            //anmethodology: sequential anmframes-.
            // else 
            // if(nx.finalSeqIdx[7] && nx.finalSeqIdx[7].on){ var NUM = 7; nx.finalSeqIdx[NUM].on=0;
            if(nx.finalSeqIdx[7] && nx.finalSeqIdx[7].on){ nx.finalSeqIdx[7].on=0;


                //todo sonic BZZZRT.

                nx.ui.flashCanvasMSG({txt:"Wait!",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                    txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.

                        // {x: -12.884075193767769, y: 262.81138053081025, z: 10.180620045717156}
                        $({camPOSx:nx.scene.activeCamera.position.x,camPOSy:nx.scene.activeCamera.position.y,camPOSz:nx.scene.activeCamera.position.z}).
                        animate({camPOSx:-12,camPOSy:264,camPOSz:10},{queue:false,duration:2000,easing:'swing',
                        step: function(now) { //ANM:-CAM POS ZOOM IN
                            if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                            nx.scene.activeCamera.position.copyFrom({x:this.camPOSx, y: this.camPOSy, z: this.camPOSz}); //low view crash position ZOOMCAM
                        }, complete:function(){ } 
                        });//end anm

                    },
                    txtEnd:function(){                    }
                }); 
                nx.ui.flashCanvasMSG({txt:"Zawd's Pod,",txtIcon:'darkbot',txtAlign:'right',dur:3000,
                    txtInit:function(){                     },
                    txtEnd:function(){                         //ANM-ROTATE-FWD-.
                    }
                }); 
                nx.ui.flashCanvasMSG({txt:"it may have fallen NORTH.",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                // nx.ui.flashCanvasMSG({txt:"It may be NORTH.",dur:2000,
                // nx.ui.flashCanvasMSG({txt:"Maybe it fell NORTH.",dur:2000,
                // nx.ui.flashCanvasMSG({txt:"Perhaps it fell NORTH.",dur:2000,
                // nx.ui.flashCanvasMSG({txt:"It might have fallen NORTH.",dur:2000,
                    txtInit:function(){ 
                    },
                    txtEnd:function(){ 
                    }
                }); 
                // nx.ui.flashCanvasMSG({txt:"Then LEAVE AlphaMoon FOREVER!",dur:2000,
                // // nx.ui.flashCanvasMSG({txt:"Maybe it fell NORTH.",dur:2000,
                // // nx.ui.flashCanvasMSG({txt:"Perhaps it fell NORTH.",dur:2000,
                // // nx.ui.flashCanvasMSG({txt:"It might have fallen NORTH.",dur:2000,
                //     txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
                //     },
                //     txtEnd:function(){ //For signaling next GAME SEQ as TXT fades out-.
                //     }
                // }); 

                //todo sonic bzzrt.

                nx.ui.flashCanvasMSG({txt:"BZZZRRT.",txtIcon:'darkbot',txtAlign:'right',dur:2000,
                    txtInit:function(){ 
                        //ANM-ROTATE-BWD-.
                    },
                    txtEnd:function(){ 
                        nx.finalSeqIdx[8] = {on:1}; //NEXT-ANM-. 
                        // nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                    }
                }); 

                //ANM: down the pyramid
            }//end frame
            else if(nx.finalSeqIdx[8] && nx.finalSeqIdx[8].on){ var NUM = 8; nx.finalSeqIdx[NUM].on=0;
                //ANM: past the spacetrain and toward the edge


                            // nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 

                        var animo = nx.scene.beginAnimation(nx.orbySkeleton[0], 20, 25, false, 1.0); //compress
                        animo.onAnimationEnd = function (){
                            nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                            var jmp1 = nx.scene.beginAnimation(nx.orbySkeleton[0], 25, 35, false, 1.0);  //jump apex
                            jmp1.onAnimationEnd = function(){
                            }
                        }


                        // nx.anmz.orby.move.jmp = 0;
                        // nx.anmz.orby.jump.preJumpMode = 1;
                            // nx.anmz.orby.jump.preJumpMode = 0;
                            // nx.anmz.orby.jump.jumpMode = 1;

                            //ANM: up and fwd and rot and dwn

                            
                                // nx.anmz.orby.jump.jumpMode = 0;
                                // nx.anmz.orby.jump.fallMode = 1; //Bottom of Jump - now landed-.
                                // nx.anmz.orby.jump.jumpArc = 0;
                                // var jmp2 = nx.scene.beginAnimation(nx.orbySkeleton[0], 35, 50, false, 1.0);  //landing
                                // jmp2.onAnimationEnd = function(){
                                //     nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);  //idle
                                // }



                        // nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
            }//end frame
            else if(nx.finalSeqIdx[9] && nx.finalSeqIdx[9].on){ var NUM = 9; //nx.finalSeqIdx[NUM].on=0;
                //ANM: up and fwd and rot and dwn
                if(!nx.finalSeqIdx[NUM].init){ nx.finalSeqIdx[NUM].init=1; //one time init

                    nx.scene.activeCamera.position.copyFrom({x: -24.207294079442327, y: 247.69352561615003, z: 64.90899223158222});
                    nx.scene.activeCamera.setTarget(nx.BV32({x: -23.826515188367317, y: 250.35944371066483, z: 60.30213871768464}));
                    // nx.cinematicMode = 0
                    // return;

                    // nx.scene.activeCamera.position.copyFrom({x: 20.55963344538219, y: 263.81614691268715, z: -31.47744778076308}); //CAMPOS: back to zscope2
                    // nx.scene.activeCamera.setTarget(nx.BV32({x: 20.94169472338265, y: 263.81803254924404, z: -25.21296959870571})) //CAMTGT: 
                    // nx.camz.freeCam.position.copyFrom({x: 125.91809305164549, y: 252.910231776879, z: -113.34096907171961}); 
                    nx.finalSeqIdx[NUM].runAnm = 0; //ANMETHODOLOGY 0 off 1 on-. 
                    nx.finalSeqIdx[NUM].stepIdx = 0;
                    nx.finalSeqIdx[NUM].anmSpeed = 165;//; //85; //150; //ANMETHODLOGY ability to slow animations waaay down-.
                    //initialize-path and edit-.
                    // nx.finalSeqIdx[NUM].jumpingPath =  [{"pos":{"x":-23.96,"y":262.58,"z":21.9},"rot":{"x":-0.01,"y":3.12,"z":-0.18}},{"pos":{"x":-24.67,"y":261.69,"z":22.6},"rot":{"x":0,"y":2.92,"z":-0.19}},{"pos":{"x":-25.17,"y":264.27,"z":23.1},"rot":{"x":-0.08,"y":2.68,"z":-0.38}},{"pos":{"x":-26.37,"y":266.88,"z":24.3},"rot":{"x":-0.15,"y":2.48,"z":-0.36}},{"pos":{"x":-27.7,"y":268.39,"z":25.63},"rot":{"x":-0.22,"y":2.29,"z":-0.33}},{"pos":{"x":-29.54,"y":269.49,"z":27.46},"rot":{"x":-0.29,"y":2.2,"z":-0.29}},{"pos":{"x":-31.94,"y":269.87,"z":29.7},"rot":{"x":-0.35,"y":2.2,"z":-0.21}},{"pos":{"x":-34.29,"y":269.39,"z":32.1},"rot":{"x":-0.3,"y":2.2,"z":-0.15}},{"pos":{"x":-36.68,"y":268.08,"z":34.64},"rot":{"x":-0.2,"y":2.2,"z":-0.08}},{"pos":{"x":-39.46,"y":265.58,"z":37.52},"rot":{"x":-0.1,"y":2.2,"z":-0.05}},{"pos":{"x":-41.92,"y":262.79,"z":39.6},"rot":{"x":0,"y":2.2,"z":-0.05}},{"pos":{"x":-43.89,"y":259.57,"z":41.3},"rot":{"x":0.1,"y":2.2,"z":-0.05}},{"pos":{"x":-45.56,"y":255.78,"z":42.76},"rot":{"x":0.1,"y":2.2,"z":-0.05}},{"pos":{"x":-47.02,"y":250.89,"z":43.79},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-48.18,"y":244.49,"z":44.73},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-49.45,"y":236.49,"z":45.66},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-50.14,"y":231.39,"z":46.15},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-50.64,"y":225.99,"z":46.65},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-51.14,"y":220.79,"z":47.05},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-51.54,"y":215.59,"z":47.35},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-52.04,"y":209.69,"z":47.75},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-57.96,"y":207.78,"z":52.66},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-62.66,"y":204.09,"z":56.75},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-65.95,"y":197.99,"z":59.16},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-68.46,"y":189.29,"z":61.56},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-72.94,"y":183.49,"z":65.65},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-76.95,"y":178.79,"z":69.45},"rot":{"x":-0.4,"y":2.2,"z":-0.05}},{"pos":{"x":-83.24,"y":171.83,"z":73.98},"rot":{"x":-0.4,"y":2.2,"z":-0.05}}];
                    // nx.finalSeqIdx[NUM].jumpingPath =  [{"pos":{"x":-23.96,"y":262.58,"z":21.9},"rot":{"x":-0.01,"y":3.12,"z":0}},{"pos":{"x":-24.67,"y":261.69,"z":22.6},"rot":{"x":0,"y":2.3,"z":0}},{"pos":{"x":-25.17,"y":264.27,"z":23.1},"rot":{"x":-0.08,"y":2.68,"z":0}},{"pos":{"x":-26.37,"y":266.88,"z":24.3},"rot":{"x":-0.15,"y":2.48,"z":0}},{"pos":{"x":-27.7,"y":268.39,"z":25.63},"rot":{"x":-0.22,"y":2.3,"z":0}},{"pos":{"x":-29.54,"y":269.49,"z":27.46},"rot":{"x":-0.29,"y":2.3,"z":0}},{"pos":{"x":-31.94,"y":269.87,"z":29.7},"rot":{"x":-0.35,"y":2.3,"z":0}},{"pos":{"x":-34.29,"y":269.39,"z":32.1},"rot":{"x":-0.3,"y":2.3,"z":0}},{"pos":{"x":-36.68,"y":268.08,"z":34.64},"rot":{"x":-0.2,"y":2.3,"z":0}},{"pos":{"x":-39.46,"y":265.58,"z":37.52},"rot":{"x":-0.1,"y":2.3,"z":0}},{"pos":{"x":-41.92,"y":262.79,"z":39.6},"rot":{"x":0,"y":2.3,"z":0}},{"pos":{"x":-43.89,"y":259.57,"z":41.3},"rot":{"x":0.1,"y":2.3,"z":0}},{"pos":{"x":-45.56,"y":255.78,"z":42.76},"rot":{"x":0.1,"y":2.3,"z":0}},{"pos":{"x":-47.02,"y":250.89,"z":43.79},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-48.18,"y":244.49,"z":44.73},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-49.45,"y":236.49,"z":45.66},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-50.14,"y":231.39,"z":46.15},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-50.64,"y":225.99,"z":46.65},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-51.14,"y":220.79,"z":47.05},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-51.54,"y":215.59,"z":47.35},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-52.04,"y":209.69,"z":47.75},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-57.96,"y":207.78,"z":52.66},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-62.66,"y":204.09,"z":56.75},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-65.95,"y":197.99,"z":59.16},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-68.46,"y":189.29,"z":61.56},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-72.94,"y":183.49,"z":65.65},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-76.95,"y":178.79,"z":69.45},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-83.24,"y":171.83,"z":73.98},"rot":{"x":-0.4,"y":2.3,"z":-0.05}}];
                    // nx.finalSeqIdx[NUM].jumpingPath =  [{"pos":{"x":-23.96,"y":262.58,"z":21.9},"rot":{"x":0,"y":3.1,"z":0}},{"pos":{"x":-24.67,"y":261.69,"z":22.6},"rot":{"x":-0.3,"y":3.0,"z":0}},{"pos":{"x":-25.17,"y":264.27,"z":23.1},"rot":{"x":-0.4,"y":2.75,"z":0}},{"pos":{"x":-26.37,"y":266.88,"z":24.3},"rot":{"x":-0.4,"y":2.5,"z":0}},{"pos":{"x":-27.7,"y":268.39,"z":25.63},"rot":{"x":-0.3,"y":2.3,"z":0}},{"pos":{"x":-29.54,"y":269.49,"z":27.46},"rot":{"x":-0.2,"y":2.3,"z":0}},{"pos":{"x":-31.94,"y":269.87,"z":29.7},"rot":{"x":-0.1,"y":2.3,"z":0}},{"pos":{"x":-34.29,"y":269.39,"z":32.1},"rot":{"x":0,"y":2.3,"z":0}},{"pos":{"x":-36.68,"y":268.08,"z":34.64},"rot":{"x":0.1,"y":2.3,"z":0}},{"pos":{"x":-39.46,"y":265.58,"z":37.52},"rot":{"x":0.2,"y":2.3,"z":0}},{"pos":{"x":-41.92,"y":262.79,"z":39.6},"rot":{"x":0.3,"y":2.3,"z":0}},{"pos":{"x":-43.89,"y":259.57,"z":41.3},"rot":{"x":0.4,"y":2.3,"z":0}},{"pos":{"x":-45.56,"y":255.78,"z":42.76},"rot":{"x":0.3,"y":2.3,"z":0}},{"pos":{"x":-47.02,"y":250.89,"z":43.79},"rot":{"x":0.2,"y":2.3,"z":0}},{"pos":{"x":-48.18,"y":244.49,"z":44.73},"rot":{"x":0.1,"y":2.3,"z":0}},{"pos":{"x":-49.45,"y":236.49,"z":45.66},"rot":{"x":0,"y":2.3,"z":0}},{"pos":{"x":-50.14,"y":231.39,"z":46.15},"rot":{"x":-0.2,"y":2.3,"z":0}},{"pos":{"x":-50.64,"y":225.99,"z":46.65},"rot":{"x":-0.3,"y":2.3,"z":0}},{"pos":{"x":-51.14,"y":220.79,"z":47.05},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-51.54,"y":215.59,"z":47.35},"rot":{"x":-0.8,"y":2.3,"z":0}},{"pos":{"x":-52.04,"y":209.69,"z":47.75},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-57.96,"y":207.78,"z":52.66},"rot":{"x":-0.2,"y":2.3,"z":0}},{"pos":{"x":-62.66,"y":204.09,"z":56.75},"rot":{"x":-0.4,"y":2.3,"z":0}},{"pos":{"x":-65.95,"y":197.99,"z":59.16},"rot":{"x":-0.6,"y":2.3,"z":0}},{"pos":{"x":-68.46,"y":189.29,"z":61.56},"rot":{"x":-0.7,"y":2.3,"z":0}},{"pos":{"x":-72.94,"y":183.49,"z":65.65},"rot":{"x":-0.8,"y":2.3,"z":0}},{"pos":{"x":-76.95,"y":178.79,"z":69.45},"rot":{"x":-0.8,"y":2.3,"z":0}},{"pos":{"x":-83.24,"y":171.83,"z":73.98},"rot":{"x":-0.8,"y":2.3,"z":-0.05}}];
                    // nx.finalSeqIdx[NUM].jumpingPath =  [{"pos":{"x":-23.96,"y":262.58,"z":21.9},"rot":{"x":0,"y":3.1,"z":0}},{"pos":{"x":-24.67,"y":261.69,"z":22.6},"rot":{"x":-0.3,"y":3,"z":0}},{"pos":{"x":-25.17,"y":264.27,"z":23.1},"rot":{"x":-0.4,"y":2.75,"z":0}},{"pos":{"x":-26.37,"y":266.88,"z":24.3},"rot":{"x":-0.4,"y":2.5,"z":0}},{"pos":{"x":-27.7,"y":268.39,"z":25.63},"rot":{"x":-0.3,"y":2.29,"z":0}},{"pos":{"x":-29.54,"y":269.49,"z":27.46},"rot":{"x":-0.2,"y":2.29,"z":0}},{"pos":{"x":-31.94,"y":269.87,"z":29.7},"rot":{"x":-0.1,"y":2.29,"z":0}},{"pos":{"x":-34.29,"y":269.39,"z":32.1},"rot":{"x":0,"y":2.29,"z":0}},{"pos":{"x":-36.68,"y":268.08,"z":34.64},"rot":{"x":0.1,"y":2.29,"z":0}},{"pos":{"x":-39.46,"y":265.58,"z":37.52},"rot":{"x":0.2,"y":2.29,"z":0}},{"pos":{"x":-41.92,"y":262.79,"z":39.6},"rot":{"x":0.3,"y":2.29,"z":0}},{"pos":{"x":-43.89,"y":259.57,"z":41.3},"rot":{"x":0.4,"y":2.29,"z":0}},{"pos":{"x":-45.56,"y":255.78,"z":42.76},"rot":{"x":0.3,"y":2.29,"z":0}},{"pos":{"x":-47.02,"y":250.89,"z":43.79},"rot":{"x":0.2,"y":2.29,"z":0}},{"pos":{"x":-48.18,"y":244.49,"z":44.73},"rot":{"x":0.1,"y":2.29,"z":0}},{"pos":{"x":-49.45,"y":236.49,"z":45.66},"rot":{"x":0,"y":2.29,"z":0}},{"pos":{"x":-50.14,"y":231.39,"z":46.15},"rot":{"x":-0.2,"y":2.29,"z":0}},{"pos":{"x":-50.64,"y":225.99,"z":46.65},"rot":{"x":-0.3,"y":2.29,"z":0}},{"pos":{"x":-51.14,"y":220.79,"z":47.05},"rot":{"x":-0.4,"y":2.29,"z":0}},{"pos":{"x":-51.54,"y":215.59,"z":47.35},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-52.04,"y":209.69,"z":47.75},"rot":{"x":-0.4,"y":2.29,"z":0}},{"pos":{"x":-57.96,"y":200.98,"z":53.36},"rot":{"x":-0.2,"y":2.29,"z":0}},{"pos":{"x":-62.66,"y":194.69,"z":57.45},"rot":{"x":-0.4,"y":2.29,"z":0}},{"pos":{"x":-68.16,"y":187.29,"z":61.76},"rot":{"x":-0.6,"y":2.29,"z":0}},{"pos":{"x":-72.66,"y":181.09,"z":65.45},"rot":{"x":-0.7,"y":2.29,"z":0}},{"pos":{"x":-77.14,"y":174.09,"z":69.54},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-81.16,"y":168.29,"z":72.74},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-87.44,"y":159.33,"z":77.87},"rot":{"x":-0.8,"y":2.29,"z":-0.05}}];
                    // nx.finalSeqIdx[NUM].jumpingPath =  [{"pos":{"x":-23.96,"y":262.58,"z":21.9},"rot":{"x":0,"y":3.1,"z":0}},{"pos":{"x":-24.67,"y":261.69,"z":22.6},"rot":{"x":-0.3,"y":3,"z":0}},{"pos":{"x":-25.17,"y":264.27,"z":23.1},"rot":{"x":-0.4,"y":2.75,"z":0}},{"pos":{"x":-26.37,"y":266.88,"z":24.3},"rot":{"x":-0.4,"y":2.5,"z":0}},{"pos":{"x":-27.7,"y":268.39,"z":25.63},"rot":{"x":-0.3,"y":2.29,"z":0}},{"pos":{"x":-29.54,"y":269.49,"z":27.46},"rot":{"x":-0.2,"y":2.29,"z":0}},{"pos":{"x":-31.94,"y":269.87,"z":29.7},"rot":{"x":-0.1,"y":2.29,"z":0}},{"pos":{"x":-34.29,"y":269.39,"z":32.1},"rot":{"x":0,"y":2.29,"z":0}},{"pos":{"x":-36.68,"y":268.08,"z":34.64},"rot":{"x":0.1,"y":2.29,"z":0}},{"pos":{"x":-39.46,"y":265.58,"z":37.52},"rot":{"x":0.2,"y":2.29,"z":0}},{"pos":{"x":-41.92,"y":262.79,"z":39.6},"rot":{"x":0.3,"y":2.29,"z":0}},{"pos":{"x":-43.89,"y":259.57,"z":41.3},"rot":{"x":0.4,"y":2.29,"z":0}},{"pos":{"x":-45.56,"y":255.78,"z":42.76},"rot":{"x":0.3,"y":2.29,"z":0}},{"pos":{"x":-47.02,"y":250.89,"z":43.79},"rot":{"x":0.2,"y":2.29,"z":0}},{"pos":{"x":-48.18,"y":244.49,"z":44.73},"rot":{"x":0.1,"y":2.29,"z":0}},{"pos":{"x":-49.45,"y":236.49,"z":45.66},"rot":{"x":0,"y":2.29,"z":0}},/*{"pos":{"x":-50.14,"y":231.39,"z":46.15},"rot":{"x":-0.2,"y":2.29,"z":0}},*/{"pos":{"x":-50.64,"y":225.99,"z":46.65},"rot":{"x":-0.3,"y":2.29,"z":0}},{"pos":{"x":-51.14,"y":220.79,"z":47.05},"rot":{"x":-0.4,"y":2.29,"z":0}},{"pos":{"x":-51.54,"y":215.59,"z":47.35},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-52.04,"y":209.69,"z":47.75},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-57.96,"y":200.98,"z":53.36},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-62.66,"y":194.69,"z":57.45},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-68.16,"y":187.29,"z":61.76},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-72.66,"y":181.09,"z":65.45},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-77.14,"y":174.09,"z":69.54},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-81.16,"y":168.29,"z":72.74},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-87.44,"y":159.33,"z":77.87},"rot":{"x":-0.8,"y":2.29,"z":-0.05}}];
                    nx.finalSeqIdx[NUM].jumpingPath =  [{"pos":{"x":-23.96,"y":262.58,"z":21.9},"rot":{"x":0,"y":3.1,"z":0}},{"pos":{"x":-24.67,"y":261.69,"z":22.6},"rot":{"x":-0.3,"y":3,"z":0}},{"pos":{"x":-25.17,"y":264.27,"z":23.1},"rot":{"x":-0.4,"y":2.75,"z":0}},{"pos":{"x":-26.37,"y":266.88,"z":24.3},"rot":{"x":-0.4,"y":2.5,"z":0}},{"pos":{"x":-27.7,"y":268.39,"z":25.63},"rot":{"x":-0.3,"y":2.29,"z":0}},{"pos":{"x":-29.54,"y":269.49,"z":27.46},"rot":{"x":-0.2,"y":2.29,"z":0}},{"pos":{"x":-31.94,"y":269.87,"z":29.7},"rot":{"x":-0.1,"y":2.29,"z":0}},{"pos":{"x":-34.29,"y":269.39,"z":32.1},"rot":{"x":0,"y":2.29,"z":0}},{"pos":{"x":-36.68,"y":268.08,"z":34.64},"rot":{"x":0.1,"y":2.29,"z":0}},{"pos":{"x":-39.46,"y":265.58,"z":37.52},"rot":{"x":0.2,"y":2.29,"z":0}},{"pos":{"x":-41.92,"y":262.79,"z":39.6},"rot":{"x":0.3,"y":2.29,"z":0}},{"pos":{"x":-43.89,"y":259.57,"z":41.3},"rot":{"x":0.31,"y":2.29,"z":0}},{"pos":{"x":-45.56,"y":255.78,"z":42.76},"rot":{"x":0.3,"y":2.29,"z":0}},{"pos":{"x":-47.02,"y":250.89,"z":43.79},"rot":{"x":0.2,"y":2.29,"z":0}},{"pos":{"x":-48.18,"y":245.48,"z":44.73},"rot":{"x":0.1,"y":2.29,"z":0}},{"pos":{"x":-49.15,"y":239.18,"z":45.35},"rot":{"x":0,"y":2.29,"z":0}},{"pos":{"x":-50.04,"y":233.08,"z":45.84},"rot":{"x":-0.3,"y":2.29,"z":0}},{"pos":{"x":-50.74,"y":226.88,"z":46.44},"rot":{"x":-0.4,"y":2.29,"z":0}},{"pos":{"x":-51.54,"y":218.78,"z":47.25},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-52.04,"y":209.69,"z":47.75},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-57.96,"y":200.98,"z":53.36},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-62.66,"y":194.69,"z":57.45},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-68.16,"y":187.29,"z":61.76},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-72.66,"y":181.09,"z":65.45},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-77.14,"y":174.09,"z":69.54},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-81.16,"y":168.29,"z":72.73},"rot":{"x":-0.8,"y":2.29,"z":0}},{"pos":{"x":-87.44,"y":159.33,"z":77.87},"rot":{"x":-0.8,"y":2.29,"z":-0.05}}];
                    // nx.finalSeqIdx[NUM].jumpingPath = nx.editz.decomposePath({aPath:nx.finalSeqIdx[NUM].jumpingPath}) //ANMETHODOLOGY: inline decomposer-.
                    // var instPath = nx.createPathEditor({aName:'jumpingPath', ANMPath:nx.finalSeqIdx[NUM].jumpingPath}); //-WORKING-PATH-EDITOR-.


                    //ANMETHODOLOGY: METANIMATIONS - init the ANMETAZ!!!
                    nx.finalSeqIdx[NUM].jumpingMeta = [];
                    // nx.finalSeqIdx[NUM].jumpingMeta[1] = {jmpCompress:1}
                    // nx.finalSeqIdx[NUM].jumpingMeta[8] = {jmpApex:1}
                    nx.finalSeqIdx[NUM].jumpingMeta[7] = {jmpLand:1}
                    // nx.finalSeqIdx[NUM].jumpingMeta[14] = {inIdle:1}
                    // nx.finalSeqIdx[NUM].jumpingMeta[16] = {inTuck:1}

                    //***********************************************************INIT-CAM-PAN-.
                    // var startCamTGT={x:nx.finalSeqIdx[NUM].jumpingPath[0].pos.x,y:nx.finalSeqIdx[NUM].jumpingPath[0].pos.y,z:nx.finalSeqIdx[NUM].jumpingPath[0].pos.z};
                    // var endCamTGT  ={x:nx.finalSeqIdx[NUM].jumpingPath[nx.finalSeqIdx[NUM].jumpingPath.length-1].pos.x,y:nx.finalSeqIdx[NUM].jumpingPath[nx.finalSeqIdx[NUM].jumpingPath.length-1].pos.y,z:nx.finalSeqIdx[NUM].jumpingPath[nx.finalSeqIdx[NUM].jumpingPath.length-1].pos.z}; 
                    // $({camTGTx:startCamTGT.x,camTGTy:startCamTGT.y,camTGTz:startCamTGT.z}).
                    // animate({camTGTx:endCamTGT.x,camTGTy:endCamTGT.y,camTGTz:endCamTGT.z},{queue:false,duration:5000,easing:'linear',
                    // step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                    //     if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                    //     // nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                    //     // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                    //     // nx.scene.activeCamera.setTarget(nx.orbyMesh.position) //CAMTGT: 
                    //     nx.scene.activeCamera.setTarget(nx.BV3(this.camTGTx,this.camTGTy,this.camTGTz)) //CAMTGT: 
                    //     //EDITABLE-ROTATIONS-.
                    //     // if(nx.finalSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                    //         // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z,nx.finalSeqIdx[NUM].curPOS.rot.w);
                    //         // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                    //     // }else{ //EULER-ANM-ROT-.
                    //         // nx.orbyMesh.rotationQuaternion = null;
                    //         // nx.orbyMesh.rotation = new BABYLON.Vector3(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z);
                    //         // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                    //         // console.log('ROT '+nx.finalSeqIdx[NUM].stepIdx,nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z)
                    //     // }
                    // }, complete:function(){ 
                    // // if(nx.finalSeqIdx[NUM].curPOS.meta){nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);/*idle*/ } //meta behavior-.
                    //     // nx.finalSeqIdx[NUM].initAnm = 0; 
                    //     } //NEXT-SUB-SEQUENCE-. 
                    // });


                    //***********************************************************INIT-CAM-PAN-END-.





                } //end init sequence-.
                if(!nx.finalSeqIdx[NUM].initAnm){  //init next path point
                    nx.finalSeqIdx[NUM].curPOS = nx.finalSeqIdx[NUM].jumpingPath[nx.finalSeqIdx[NUM].stepIdx];
                    nx.finalSeqIdx[NUM].nxtPOS = nx.finalSeqIdx[NUM].jumpingPath[++nx.finalSeqIdx[NUM].stepIdx];
                    nx.finalSeqIdx[NUM].initAnm = 1;


                    //ANMETHODOLOGY - 3Denumerations: Up,Dwn, Lft, Rgt, Fwd, Bwd. UDLRFB. Unique Letters to Signify easily.
                    //ANMETHODOLOGY - other enumeration is on PATH: sunsetPath, jumpingPath, leavingPath, etc.
                    //ANMETHODOLOGY - ANMETAZ!!! - an array of STEPIDX meta behaviors-. lookup by synchronized index
                    //synchronized index:
                    //nx.finalSeqIdx[NUM].jumpingMeta[8] = {jmpCompress:1,jmpApex:1, eyeLL:1, eyeRollD:1, inIdle:1, inTuck:0, inLaserF:0, inLaserU:1 }


                    //ANMETAZ: frame IDX META lookup-.
                    if(nx.finalSeqIdx[NUM].jumpingMeta[nx.finalSeqIdx[NUM].stepIdx]){ //ANMETHODOLOGY- precision anm index triggers. IF META EXISTS-.
                        // debugger;


                        //METANMZ-ACCORDION-.
                        if(nx.finalSeqIdx[NUM].jumpingMeta[nx.finalSeqIdx[NUM].stepIdx].jmpCompress){ //example
                        }else if(nx.finalSeqIdx[NUM].jumpingMeta[nx.finalSeqIdx[NUM].stepIdx].jmpApex){ //example
                        }else if(nx.finalSeqIdx[NUM].jumpingMeta[nx.finalSeqIdx[NUM].stepIdx].jmpLand){ //jump landing
                            nx.scene.beginAnimation(nx.orbySkeleton[0], 35, 50, false, 1.0).onAnimationEnd = function(){ //inLanding-.
                                nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);  //inIdle-.
                            }
                        }
                    // if(nx.finalSeqIdx[NUM].stepIdx===8){ //ANMETHODOLOGY- precision anm index triggers-.
                        // var jmp2 = nx.scene.beginAnimation(nx.orbySkeleton[0], 35, 50, false, 1.0);  //landing
                        // jmp2.onAnimationEnd = function(){
                        //     nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);  //idle
                        // }
                    }

                    if(!nx.finalSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.finalSeqIdx[NUM].on=0; //important

                        setTimeout(function(){
                            nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                        },500)

                        nx.showCurtain({dur:800})

                        return; //END-SUB-SEQUENCES-.
                    } 
                      nx.finalSeqIdx[NUM].runAnm = 1;
                }  
// debugger;
                // var startCamTGT={x:nx.finalSeqIdx[NUM].jumpingPath[0].pos.x,y:nx.finalSeqIdx[NUM].jumpingPath[0].pos.y,z:nx.finalSeqIdx[NUM].jumpingPath[0].pos.z};
                // var endCamTGT  ={x:nx.finalSeqIdx[NUM].jumpingPath[nx.finalSeqIdx[NUM].jumpingPath.length-1].pos.x,y:nx.finalSeqIdx[NUM].jumpingPath[nx.finalSeqIdx[NUM].jumpingPath.length-1].pos.y,z:nx.finalSeqIdx[NUM].jumpingPath[nx.finalSeqIdx[NUM].jumpingPath.length-1].pos.z}; 

                //NEW-POSROT-ANM-FORMAT- //TODO add in the ROTIdx option-..
                if(nx.finalSeqIdx[NUM].runAnm) { nx.finalSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.finalSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.finalSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.finalSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.finalSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.finalSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.finalSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.finalSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        nx.scene.activeCamera.setTarget(nx.orbyMesh.position) //CAMTGT: 
                        // nx.scene.activeCamera.setTarget(nx.BV3(this.camTGTx,this.camTGTy,this.camTGTz)) //CAMTGT: 
                        //EDITABLE-ROTATIONS-.
                        // if(nx.finalSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                            // nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z,nx.finalSeqIdx[NUM].curPOS.rot.w);
                            // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        // }else{ //EULER-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = null;
                            nx.orbyMesh.rotation = new BABYLON.Vector3(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                            // console.log('ROT '+nx.finalSeqIdx[NUM].stepIdx,nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z)
                        // }
                    }, complete:function(){ 
                    if(nx.finalSeqIdx[NUM].curPOS.meta){nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);/*idle*/ } //meta behavior-.
                        nx.finalSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });
                }




                        // nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
            }//end frame
            else if(nx.finalSeqIdx[10] && nx.finalSeqIdx[10].on){ var NUM = 10; //nx.finalSeqIdx[NUM].on=0;
                //ANM: up and fwd and rot and dwn
                if(!nx.finalSeqIdx[NUM].init){ nx.finalSeqIdx[NUM].init=1; //one time init

                    // nx.initFollowCam();
                    // nx.scene.activeCamera.position.copyFrom({x: -97.08676197437342, y: 176.92797681616514, z: 85.41644752610893});

                    nx.scene.activeCamera.position.copyFrom({x: -193.76874503559546, y: 1.8039750280341087, z: 141.95791261966707});
                    nx.scene.activeCamera.setTarget(nx.BV32({x: -197.54634018642557, y: 1.7571413323150544, z: 145.10675797941968}));


                    // nx.scene.activeCamera.setTarget(nx.BV32({x: -23.826515188367317, y: 250.35944371066483, z: 60.30213871768464}));
                    // nx.cinematicMode = 0
                    // return;

                    // nx.scene.activeCamera.position.copyFrom({x: 20.55963344538219, y: 263.81614691268715, z: -31.47744778076308}); //CAMPOS: back to zscope2
                    // nx.scene.activeCamera.setTarget(nx.BV32({x: 20.94169472338265, y: 263.81803254924404, z: -25.21296959870571})) //CAMTGT: 
                    // nx.camz.freeCam.position.copyFrom({x: 125.91809305164549, y: 252.910231776879, z: -113.34096907171961}); 
                    nx.finalSeqIdx[NUM].runAnm = 0; //ANMETHODOLOGY 0 off 1 on-. 
                    nx.finalSeqIdx[NUM].stepIdx = 0;
                    nx.finalSeqIdx[NUM].anmSpeed = 150;//; //85; //150; //ANMETHODLOGY ability to slow animations waaay down-.
                    //initialize-path and edit-.
                    // nx.finalSeqIdx[NUM].sunsetPath =  [{"pos":{"x":-201.95,"y":2,"z":148.99},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-202.8,"y":2,"z":149.85},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-203.64,"y":2,"z":150.7},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-204.49,"y":2,"z":151.55},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-205.34,"y":2,"z":152.4},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-206.18,"y":2,"z":153.25},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-207.03,"y":2,"z":154.1},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-207.87,"y":2,"z":154.95},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-208.72,"y":2,"z":155.8},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-209.57,"y":2,"z":156.65},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-210.41,"y":2,"z":157.5},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-211.26,"y":2,"z":158.35},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-212.11,"y":2,"z":159.2},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-212.95,"y":2,"z":160.05},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-213.8,"y":2,"z":160.91},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-214.64,"y":2,"z":161.76},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-215.49,"y":2,"z":162.61},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-216.34,"y":2,"z":163.46},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-217.2,"y":2,"z":164.29},"rot":{"x":0.09,"y":-0.91,"z":0.04,"w":-0.41}},{"pos":{"x":-218.15,"y":2,"z":165.03},"rot":{"x":0.08,"y":-0.89,"z":0.04,"w":-0.45}},{"pos":{"x":-219.16,"y":2,"z":165.67},"rot":{"x":0.08,"y":-0.87,"z":0.04,"w":-0.5}},{"pos":{"x":-220.22,"y":2,"z":166.23},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-221.28,"y":2,"z":166.79},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-222.34,"y":2,"z":167.35},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-223.4,"y":2,"z":167.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-224.46,"y":2,"z":168.48},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-225.52,"y":2,"z":169.04},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-226.58,"y":2,"z":169.6},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-227.64,"y":2,"z":170.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-228.7,"y":2,"z":170.73},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-229.76,"y":2,"z":171.29},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-230.82,"y":2,"z":171.85},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-231.88,"y":2,"z":172.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-232.94,"y":2,"z":172.98},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-234,"y":2,"z":173.54},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-235.06,"y":2,"z":174.11},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-236.12,"y":2,"z":174.67},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-237.18,"y":2,"z":175.23},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-238.24,"y":2,"z":175.79},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-239.3,"y":2,"z":176.36},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-240.36,"y":2,"z":176.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-241.42,"y":2,"z":177.48},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-242.48,"y":2,"z":178.04},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-243.54,"y":2,"z":178.61},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-244.6,"y":2,"z":179.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-245.66,"y":2,"z":179.73},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-246.72,"y":2,"z":180.3},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-247.78,"y":2,"z":180.86},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-248.84,"y":2,"z":181.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-249.9,"y":2,"z":181.98},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-250.96,"y":2,"z":182.55},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-252.02,"y":2,"z":183.11},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-253.08,"y":2,"z":183.67},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-254.14,"y":2,"z":184.23},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-255.2,"y":2,"z":184.8},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-256.26,"y":2,"z":185.36},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-257.32,"y":2,"z":185.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-258.38,"y":2,"z":186.48},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-259.44,"y":2,"z":187.05},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-260.5,"y":2,"z":187.61},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-261.56,"y":2,"z":188.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-262.62,"y":2,"z":188.74},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-263.68,"y":2,"z":189.3},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-264.74,"y":2,"z":189.86},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-265.8,"y":2,"z":190.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-266.86,"y":2,"z":190.99},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-267.92,"y":2,"z":191.55},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-268.98,"y":2,"z":192.11},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-269.99,"y":2,"z":192.75},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.47}},{"pos":{"x":-270.94,"y":2,"z":193.49},"rot":{"x":-0.1,"y":-0.9,"z":-0.05,"w":-0.43}},{"pos":{"x":-271.81,"y":2,"z":194.32},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.38}},{"pos":{"x":-272.59,"y":2,"z":195.23},"rot":{"x":-0.1,"y":-0.94,"z":-0.04,"w":-0.34}},{"pos":{"x":-273.27,"y":2,"z":196.22},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.29}},{"pos":{"x":-273.85,"y":2,"z":197.26},"rot":{"x":-0.1,"y":-0.97,"z":-0.03,"w":-0.24}},{"pos":{"x":-274.33,"y":2,"z":198.37},"rot":{"x":-0.1,"y":-0.98,"z":-0.02,"w":-0.19}},{"pos":{"x":-274.69,"y":2,"z":199.51},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.15}},{"pos":{"x":-275.03,"y":2,"z":200.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-275.36,"y":2,"z":201.81},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-275.7,"y":2,"z":202.97},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-276.03,"y":2,"z":204.12},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-276.37,"y":2,"z":205.27},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-276.7,"y":2,"z":206.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-277.04,"y":2,"z":207.57},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-277.37,"y":2,"z":208.73},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-277.79,"y":2,"z":209.85},"rot":{"x":0.09,"y":-0.98,"z":0.01,"w":-0.19}},{"pos":{"x":-278.32,"y":2,"z":210.93},"rot":{"x":0.09,"y":-0.97,"z":0.02,"w":-0.24}},{"pos":{"x":-278.96,"y":2,"z":211.94},"rot":{"x":0.09,"y":-0.96,"z":0.02,"w":-0.29}},{"pos":{"x":-279.69,"y":2,"z":212.89},"rot":{"x":0.09,"y":-0.94,"z":0.03,"w":-0.34}},{"pos":{"x":-280.51,"y":2,"z":213.77},"rot":{"x":0.09,"y":-0.92,"z":0.03,"w":-0.38}},{"pos":{"x":-281.42,"y":2,"z":214.55},"rot":{"x":0.09,"y":-0.9,"z":0.04,"w":-0.43}},{"pos":{"x":-282.35,"y":2,"z":215.31},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-283.28,"y":2,"z":216.07},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-284.2,"y":2,"z":216.84},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-285.13,"y":2,"z":217.6},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-286.06,"y":2,"z":218.36},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-286.98,"y":2,"z":219.12},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-287.91,"y":2,"z":219.88},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-288.84,"y":2,"z":220.65},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-289.77,"y":2,"z":221.41},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-290.69,"y":2,"z":222.17},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-291.62,"y":2,"z":222.93},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-292.55,"y":2,"z":223.7},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-293.47,"y":2,"z":224.46},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-294.4,"y":2,"z":225.22},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-295.33,"y":2,"z":225.98},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-296.25,"y":2,"z":226.74},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-297.18,"y":2,"z":227.51},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-298.11,"y":2,"z":228.27},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-299.04,"y":2,"z":229.03},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-299.96,"y":2,"z":229.79},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-300.89,"y":2,"z":230.55},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-301.83,"y":2,"z":231.29},"rot":{"x":0.08,"y":-0.89,"z":0.04,"w":-0.45}},{"pos":{"x":-302.85,"y":2,"z":231.93},"rot":{"x":0.08,"y":-0.87,"z":0.04,"w":-0.5}},{"pos":{"x":-303.92,"y":2,"z":232.47},"rot":{"x":0.08,"y":-0.84,"z":0.05,"w":-0.54}},{"pos":{"x":-305.04,"y":2,"z":232.89},"rot":{"x":0.08,"y":-0.82,"z":0.05,"w":-0.58}},{"pos":{"x":-306.2,"y":2,"z":233.21},"rot":{"x":0.07,"y":-0.79,"z":0.06,"w":-0.62}},{"pos":{"x":-307.37,"y":2,"z":233.49},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-308.53,"y":2,"z":233.77},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-309.7,"y":2,"z":234.06},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-310.87,"y":2,"z":234.34},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-312.03,"y":2,"z":234.62},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-313.2,"y":2,"z":234.9},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-314.36,"y":2,"z":235.19},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-315.53,"y":2,"z":235.47},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-316.7,"y":2,"z":235.75},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-317.86,"y":2,"z":236.04},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-319.03,"y":2,"z":236.32},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-320.2,"y":2,"z":236.6},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-321.36,"y":2,"z":236.88},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-322.53,"y":2,"z":237.17},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-323.69,"y":2,"z":237.45},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-324.86,"y":2,"z":237.73},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-326.03,"y":2,"z":238.02},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-327.19,"y":2,"z":238.3},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-328.36,"y":2,"z":238.58},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-329.52,"y":2,"z":238.87},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-330.69,"y":2,"z":239.15},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-331.86,"y":2,"z":239.43},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-333.02,"y":2,"z":239.71},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-334.19,"y":2,"z":240},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-335.36,"y":2,"z":240.28},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-336.52,"y":2,"z":240.56},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-337.69,"y":2,"z":240.85},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-338.85,"y":2,"z":241.13},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-340,"y":2,"z":241.5},"rot":{"x":-0.09,"y":-0.82,"z":-0.06,"w":-0.58}},{"pos":{"x":-341.09,"y":2,"z":241.98},"rot":{"x":-0.09,"y":-0.84,"z":-0.06,"w":-0.54}},{"pos":{"x":-342.14,"y":2,"z":242.57},"rot":{"x":-0.09,"y":-0.87,"z":-0.05,"w":-0.5}},{"pos":{"x":-343.12,"y":2,"z":243.26},"rot":{"x":-0.09,"y":-0.89,"z":-0.05,"w":-0.45}},{"pos":{"x":-344.08,"y":2,"z":243.97},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-345.05,"y":2,"z":244.69},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-346.01,"y":2,"z":245.4},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-346.98,"y":2,"z":246.12},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-347.94,"y":2,"z":246.83},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-348.9,"y":2,"z":247.55},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-349.87,"y":2,"z":248.26},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-350.83,"y":2,"z":248.98},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-351.8,"y":2,"z":249.69},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-352.76,"y":2,"z":250.41},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-353.72,"y":2,"z":251.12},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-354.69,"y":2,"z":251.84},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-355.65,"y":2,"z":252.55},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-356.62,"y":2,"z":253.27},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-357.58,"y":2,"z":253.98},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-358.52,"y":2,"z":254.72},"rot":{"x":-0.1,"y":-0.9,"z":-0.05,"w":-0.43}},{"pos":{"x":-359.39,"y":2,"z":255.55},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.38}},{"pos":{"x":-360.17,"y":2,"z":256.46},"rot":{"x":-0.1,"y":-0.94,"z":-0.04,"w":-0.34}},{"pos":{"x":-360.86,"y":2,"z":257.44},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.29}},{"pos":{"x":-361.52,"y":2,"z":258.45},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-362.18,"y":2,"z":259.45},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-362.84,"y":2,"z":260.45},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-363.5,"y":2,"z":261.45},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-364.16,"y":2,"z":262.45},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-364.82,"y":2,"z":263.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-365.48,"y":2,"z":264.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-366.14,"y":2,"z":265.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-366.8,"y":2,"z":266.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-367.46,"y":2,"z":267.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-368.12,"y":2,"z":268.47},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-368.78,"y":2,"z":269.47},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-369.44,"y":2,"z":270.47},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-370.1,"y":2,"z":271.47},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-370.76,"y":2,"z":272.47},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-371.42,"y":2,"z":273.48},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-372.08,"y":2,"z":274.48},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-372.74,"y":2,"z":275.48},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-373.4,"y":2,"z":276.48},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-374.06,"y":2,"z":277.48},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-374.7,"y":2,"z":278.5},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.27}},{"pos":{"x":-375.23,"y":2,"z":279.58},"rot":{"x":-0.1,"y":-0.98,"z":-0.03,"w":-0.22}},{"pos":{"x":-375.65,"y":2,"z":280.7},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.17}},{"pos":{"x":-375.96,"y":2,"z":281.86},"rot":{"x":-0.1,"y":-0.99,"z":-0.02,"w":-0.12}},{"pos":{"x":-376.17,"y":2,"z":283.04},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-376.39,"y":2,"z":284.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-376.61,"y":2,"z":285.4},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-376.83,"y":2,"z":286.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-377.05,"y":2,"z":287.76},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-377.26,"y":2,"z":288.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-377.48,"y":2,"z":290.12},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-377.7,"y":2,"z":291.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-377.92,"y":2,"z":292.48},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-378.14,"y":2,"z":293.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-378.35,"y":2,"z":294.84},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-378.57,"y":2,"z":296.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-378.79,"y":2,"z":297.2},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.01,"y":2,"z":298.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.23,"y":2,"z":299.56},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.44,"y":2,"z":300.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.66,"y":2,"z":301.92},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.88,"y":2,"z":303.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-380.1,"y":2,"z":304.28},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-380.32,"y":2,"z":305.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-380.54,"y":2,"z":306.64},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-380.75,"y":2,"z":307.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-380.97,"y":2,"z":309},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-381.19,"y":2,"z":310.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-381.41,"y":2,"z":311.36},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-381.63,"y":2,"z":312.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-381.84,"y":2,"z":313.72},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-382.06,"y":2,"z":314.9},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-382.28,"y":2,"z":316.08},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-382.5,"y":2,"z":317.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-382.72,"y":2,"z":318.44},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-382.93,"y":2,"z":319.62},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-383.15,"y":2,"z":320.8},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-383.37,"y":2,"z":321.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-383.59,"y":2,"z":323.16},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-383.81,"y":2,"z":324.34},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-384.02,"y":2,"z":325.52},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-384.24,"y":2,"z":326.7},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-384.46,"y":2,"z":327.88},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-384.68,"y":2,"z":329.06},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-384.9,"y":2,"z":330.24},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.11,"y":2,"z":331.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.33,"y":2,"z":332.6},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.55,"y":2,"z":333.78},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.77,"y":2,"z":334.96},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.99,"y":2,"z":336.14},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-386.21,"y":2,"z":337.32},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-386.42,"y":2,"z":338.5},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-386.64,"y":2,"z":339.68},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-386.86,"y":2,"z":340.86},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-387.08,"y":2,"z":342.04},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-387.3,"y":2,"z":343.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-387.51,"y":2,"z":344.4},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-387.73,"y":2,"z":345.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-387.95,"y":2,"z":346.76},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-388.17,"y":2,"z":347.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-388.39,"y":2,"z":349.12},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-388.6,"y":2,"z":350.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-388.82,"y":2,"z":351.48},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-389.04,"y":2,"z":352.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-389.26,"y":2,"z":353.84},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-389.48,"y":2,"z":355.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-389.69,"y":2,"z":356.2},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-389.91,"y":2,"z":357.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-390.13,"y":2,"z":358.56},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-390.35,"y":2,"z":359.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-390.57,"y":2,"z":360.92},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-390.78,"y":2,"z":362.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-391,"y":2,"z":363.28},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-391.22,"y":2,"z":364.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-391.44,"y":2,"z":365.64},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-391.66,"y":2,"z":366.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-391.88,"y":2,"z":368},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.09,"y":2,"z":369.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.31,"y":2,"z":370.36},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.53,"y":2,"z":371.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.75,"y":2,"z":372.72},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.97,"y":2,"z":373.9},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-393.18,"y":2,"z":375.08},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-393.4,"y":2,"z":376.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-393.62,"y":2,"z":377.44},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-393.84,"y":2,"z":378.62},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-394.06,"y":2,"z":379.8},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-394.27,"y":2,"z":380.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-394.49,"y":2,"z":382.16},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-394.71,"y":2,"z":383.34},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-394.93,"y":2,"z":384.52},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-395.15,"y":2,"z":385.7},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-395.36,"y":2,"z":386.88},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-395.58,"y":2,"z":388.06},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-395.8,"y":2,"z":389.24},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-396.02,"y":2,"z":390.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-396.24,"y":2,"z":391.6},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-396.45,"y":2,"z":392.78},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-396.67,"y":2,"z":393.96},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-396.89,"y":2,"z":395.14},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-397.11,"y":2,"z":396.32},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-397.33,"y":2,"z":397.5},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-397.55,"y":2,"z":398.68},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-397.76,"y":2,"z":399.86},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-397.98,"y":2,"z":401.04},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-398.2,"y":2,"z":402.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-398.42,"y":2,"z":403.4},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-398.64,"y":2,"z":404.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-398.85,"y":2,"z":405.76},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.07,"y":2,"z":406.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.29,"y":2,"z":408.12},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.51,"y":2,"z":409.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.73,"y":2,"z":410.48},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.94,"y":2,"z":411.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-400.16,"y":2,"z":412.84},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-400.38,"y":2,"z":414.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-400.6,"y":2,"z":415.2},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-400.82,"y":2,"z":416.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-401.03,"y":2,"z":417.56},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-401.25,"y":2,"z":418.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-401.47,"y":2,"z":419.92},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-401.69,"y":2,"z":421.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-401.91,"y":2,"z":422.28},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-402.12,"y":2,"z":423.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-402.34,"y":2,"z":424.64},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-402.56,"y":2,"z":425.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-402.78,"y":2,"z":427},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-403,"y":2,"z":428.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-403.22,"y":2,"z":429.36},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-403.43,"y":2,"z":430.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-403.65,"y":2,"z":431.72},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-403.87,"y":2,"z":432.9},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-404.09,"y":2,"z":434.08},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-404.31,"y":2,"z":435.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-404.52,"y":2,"z":436.44},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-404.74,"y":2,"z":437.62},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-404.96,"y":2,"z":438.8},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-405.18,"y":2,"z":439.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-405.4,"y":2,"z":441.16},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-405.61,"y":2,"z":442.34},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-405.83,"y":2,"z":443.52},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.05,"y":2,"z":444.7},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.27,"y":2,"z":445.88},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.49,"y":2,"z":447.06},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.7,"y":2,"z":448.24},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.92,"y":2,"z":449.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-407.14,"y":2,"z":450.6},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-407.36,"y":2,"z":451.78},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-407.58,"y":2,"z":452.96},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-407.8,"y":2,"z":454.14},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-408.01,"y":2,"z":455.32},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-408.23,"y":2,"z":456.5},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-408.45,"y":2,"z":457.68},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-408.67,"y":2,"z":458.86},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-408.89,"y":2,"z":460.04},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-409.1,"y":2,"z":461.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-409.32,"y":2,"z":462.4},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-409.54,"y":2,"z":463.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-409.76,"y":2,"z":464.76},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-409.98,"y":2,"z":465.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-410.19,"y":2,"z":467.12},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-410.41,"y":2,"z":468.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-410.63,"y":2,"z":469.48},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-410.85,"y":2,"z":470.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-411.07,"y":2,"z":471.84},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-411.28,"y":2,"z":473.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-411.5,"y":2,"z":474.2},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-411.72,"y":2,"z":475.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-411.94,"y":2,"z":476.56},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-412.16,"y":2,"z":477.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-412.37,"y":2,"z":478.92},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-412.59,"y":2,"z":480.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-412.81,"y":2,"z":481.28},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.03,"y":2,"z":482.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.25,"y":2,"z":483.64},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.47,"y":2,"z":484.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.68,"y":2,"z":486},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.9,"y":2,"z":487.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-414.12,"y":2,"z":488.36},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-414.34,"y":2,"z":489.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-414.56,"y":2,"z":490.72},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-414.77,"y":2,"z":491.9},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-414.99,"y":2,"z":493.08},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-415.21,"y":2,"z":494.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-415.43,"y":2,"z":495.44},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-415.65,"y":2,"z":496.62},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-415.86,"y":2,"z":497.8},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-416.08,"y":2,"z":498.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-416.3,"y":2,"z":500.16},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-416.52,"y":2,"z":501.34},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-416.74,"y":2,"z":502.52},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-416.95,"y":2,"z":503.7},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-417.17,"y":2,"z":504.88},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-417.39,"y":2,"z":506.06},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-417.61,"y":2,"z":507.24},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-417.83,"y":2,"z":508.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-418.04,"y":2,"z":509.6},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-418.26,"y":2,"z":510.78},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-418.48,"y":2,"z":511.96},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-418.7,"y":2,"z":513.14},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-418.92,"y":2,"z":514.32},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-419.14,"y":2,"z":515.5},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-419.35,"y":2,"z":516.68},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-419.57,"y":2,"z":517.86},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-419.79,"y":2,"z":519.04},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-420.01,"y":2,"z":520.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-420.23,"y":2,"z":521.4},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-420.44,"y":2,"z":522.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-420.66,"y":2,"z":523.76},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-420.88,"y":2,"z":524.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-421.1,"y":2,"z":526.12},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-421.32,"y":2,"z":527.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-421.53,"y":2,"z":528.48},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-421.75,"y":2,"z":529.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-421.97,"y":2,"z":530.84},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-422.19,"y":2,"z":532.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-422.41,"y":2,"z":533.2},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-422.62,"y":2,"z":534.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-422.84,"y":2,"z":535.56},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-423.06,"y":2,"z":536.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-423.28,"y":2,"z":537.92},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-423.5,"y":2,"z":539.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-423.71,"y":2,"z":540.28},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-423.93,"y":2,"z":541.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-424.15,"y":2,"z":542.64},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-424.37,"y":2,"z":543.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-424.59,"y":2,"z":545},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-424.81,"y":2,"z":546.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-425.02,"y":2,"z":547.36},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-425.24,"y":2,"z":548.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-425.46,"y":2,"z":549.72},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-425.68,"y":2,"z":550.9},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-425.9,"y":2,"z":552.08},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-426.11,"y":2,"z":553.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-426.33,"y":2,"z":554.44},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-426.55,"y":2,"z":555.62},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-426.77,"y":2,"z":556.8},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-426.99,"y":2,"z":557.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-427.2,"y":2,"z":559.16},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-427.42,"y":2,"z":560.34},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}}];
                    // nx.finalSeqIdx[NUM].sunsetPath =  [{"pos":{"x":-201.95,"y":2,"z":148.99},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-205.34,"y":2,"z":152.4},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-208.72,"y":2,"z":155.8},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-212.11,"y":2,"z":159.2},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-215.49,"y":2,"z":162.61},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-219.16,"y":2,"z":165.67},"rot":{"x":0.08,"y":-0.87,"z":0.04,"w":-0.5}},{"pos":{"x":-223.4,"y":2,"z":167.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-227.64,"y":2,"z":170.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-231.88,"y":2,"z":172.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-236.12,"y":2,"z":174.67},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-240.36,"y":2,"z":176.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-244.6,"y":2,"z":179.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-248.84,"y":2,"z":181.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-253.08,"y":2,"z":183.67},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-257.32,"y":2,"z":185.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-261.56,"y":2,"z":188.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-265.8,"y":2,"z":190.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-269.99,"y":2,"z":192.75},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.47}},{"pos":{"x":-273.27,"y":2,"z":196.22},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.29}},{"pos":{"x":-275.03,"y":2,"z":200.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-276.37,"y":2,"z":205.27},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-277.79,"y":2,"z":209.85},"rot":{"x":0.09,"y":-0.98,"z":0.01,"w":-0.19}},{"pos":{"x":-280.51,"y":2,"z":213.77},"rot":{"x":0.09,"y":-0.92,"z":0.03,"w":-0.38}},{"pos":{"x":-284.2,"y":2,"z":216.84},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-287.91,"y":2,"z":219.88},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-291.62,"y":2,"z":222.93},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-295.33,"y":2,"z":225.98},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-299.04,"y":2,"z":229.03},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-302.85,"y":2,"z":231.93},"rot":{"x":0.08,"y":-0.87,"z":0.04,"w":-0.5}},{"pos":{"x":-307.37,"y":2,"z":233.49},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-312.03,"y":2,"z":234.62},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-316.7,"y":2,"z":235.75},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-321.36,"y":2,"z":236.88},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-326.03,"y":2,"z":238.02},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-330.69,"y":2,"z":239.15},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-335.36,"y":2,"z":240.28},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-340,"y":2,"z":241.5},"rot":{"x":-0.09,"y":-0.82,"z":-0.06,"w":-0.58}},{"pos":{"x":-344.08,"y":2,"z":243.97},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-347.94,"y":2,"z":246.83},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-351.8,"y":2,"z":249.69},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-355.65,"y":2,"z":252.55},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-359.39,"y":2,"z":255.55},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.38}},{"pos":{"x":-362.18,"y":2,"z":259.45},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-364.82,"y":2,"z":263.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-367.46,"y":2,"z":267.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-370.1,"y":2,"z":271.47},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-372.74,"y":2,"z":275.48},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-375.23,"y":2,"z":279.58},"rot":{"x":-0.1,"y":-0.98,"z":-0.03,"w":-0.22}},{"pos":{"x":-376.39,"y":2,"z":284.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-377.26,"y":2,"z":288.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-378.14,"y":2,"z":293.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.01,"y":2,"z":298.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.88,"y":2,"z":303.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-380.75,"y":2,"z":307.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-381.63,"y":2,"z":312.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-382.5,"y":2,"z":317.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-383.37,"y":2,"z":321.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-384.24,"y":2,"z":326.7},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.11,"y":2,"z":331.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.99,"y":2,"z":336.14},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-386.86,"y":2,"z":340.86},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-387.73,"y":2,"z":345.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-388.6,"y":2,"z":350.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-389.48,"y":2,"z":355.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-390.35,"y":2,"z":359.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-391.22,"y":2,"z":364.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.09,"y":2,"z":369.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.97,"y":2,"z":373.9},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-393.84,"y":2,"z":378.62},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-394.71,"y":2,"z":383.34},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-395.58,"y":2,"z":388.06},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-396.45,"y":2,"z":392.78},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-397.33,"y":2,"z":397.5},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-398.2,"y":2,"z":402.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.07,"y":2,"z":406.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.94,"y":2,"z":411.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-400.82,"y":2,"z":416.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-401.69,"y":2,"z":421.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-402.56,"y":2,"z":425.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-403.43,"y":2,"z":430.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-404.31,"y":2,"z":435.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-405.18,"y":2,"z":439.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.05,"y":2,"z":444.7},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.92,"y":2,"z":449.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-407.8,"y":2,"z":454.14},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-408.67,"y":2,"z":458.86},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-409.54,"y":2,"z":463.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-410.41,"y":2,"z":468.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-411.28,"y":2,"z":473.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-412.16,"y":2,"z":477.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.03,"y":2,"z":482.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.9,"y":2,"z":487.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-414.77,"y":2,"z":491.9},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-415.65,"y":2,"z":496.62},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-416.52,"y":2,"z":501.34},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-417.39,"y":2,"z":506.06},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-418.26,"y":2,"z":510.78},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-419.14,"y":2,"z":515.5},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-420.01,"y":2,"z":520.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-420.88,"y":2,"z":524.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-421.75,"y":2,"z":529.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-422.62,"y":2,"z":534.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-423.5,"y":2,"z":539.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-424.37,"y":2,"z":543.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-425.24,"y":2,"z":548.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-426.11,"y":2,"z":553.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-426.99,"y":2,"z":557.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}}];
                    // nx.finalSeqIdx[NUM].sunsetPath =  [{"pos":{"x":-201.95,"y":2,"z":148.99},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-205.34,"y":2,"z":152.4},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-208.72,"y":2,"z":155.8},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-212.11,"y":2,"z":159.2},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-215.49,"y":2,"z":162.61},"rot":{"x":0,"y":-0.93,"z":0,"w":-0.39}},{"pos":{"x":-219.16,"y":2,"z":165.67},"rot":{"x":0.08,"y":-0.87,"z":0.04,"w":-0.5}},{"pos":{"x":-223.4,"y":2,"z":167.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-227.64,"y":2,"z":170.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-231.88,"y":2,"z":172.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-236.12,"y":2,"z":174.67},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-240.36,"y":2,"z":176.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-244.6,"y":2,"z":179.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-248.84,"y":2,"z":181.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-253.08,"y":2,"z":183.67},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-257.32,"y":2,"z":185.92},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-261.56,"y":2,"z":188.17},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-265.8,"y":2,"z":190.42},"rot":{"x":-0.01,"y":-0.86,"z":0,"w":-0.52}},{"pos":{"x":-269.99,"y":2,"z":192.75},"rot":{"x":-0.09,"y":-0.88,"z":-0.05,"w":-0.47}},{"pos":{"x":-273.27,"y":2,"z":196.22},"rot":{"x":-0.1,"y":-0.96,"z":-0.03,"w":-0.29}},{"pos":{"x":-275.03,"y":2,"z":200.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-276.37,"y":2,"z":205.27},"rot":{"x":0,"y":-1,"z":0,"w":-0.15}},{"pos":{"x":-277.79,"y":2,"z":209.85},"rot":{"x":0.09,"y":-0.98,"z":0.01,"w":-0.19}},{"pos":{"x":-280.51,"y":2,"z":213.77},"rot":{"x":0.09,"y":-0.92,"z":0.03,"w":-0.38}},{"pos":{"x":-284.2,"y":2,"z":216.84},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-287.91,"y":2,"z":219.88},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-291.62,"y":2,"z":222.93},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-295.33,"y":2,"z":225.98},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-299.04,"y":2,"z":229.03},"rot":{"x":0,"y":-0.91,"z":0,"w":-0.43}},{"pos":{"x":-302.85,"y":2,"z":231.93},"rot":{"x":0.08,"y":-0.87,"z":0.04,"w":-0.5}},{"pos":{"x":-307.37,"y":2,"z":233.49},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-312.03,"y":2,"z":234.62},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-316.7,"y":2,"z":235.75},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-321.36,"y":2,"z":236.88},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-326.03,"y":2,"z":238.02},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-330.69,"y":2,"z":239.15},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-335.36,"y":2,"z":240.28},"rot":{"x":0,"y":-0.79,"z":0,"w":-0.62}},{"pos":{"x":-340,"y":2,"z":241.5},"rot":{"x":-0.09,"y":-0.82,"z":-0.06,"w":-0.58}},{"pos":{"x":-344.08,"y":2,"z":243.97},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-347.94,"y":2,"z":246.83},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-351.8,"y":2,"z":249.69},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-355.65,"y":2,"z":252.55},"rot":{"x":0,"y":-0.9,"z":0,"w":-0.45}},{"pos":{"x":-359.39,"y":2,"z":255.55},"rot":{"x":-0.1,"y":-0.92,"z":-0.04,"w":-0.38}},{"pos":{"x":-362.18,"y":2,"z":259.45},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-364.82,"y":2,"z":263.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-367.46,"y":2,"z":267.46},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-370.1,"y":2,"z":271.47},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-372.74,"y":2,"z":275.48},"rot":{"x":-0.01,"y":-0.96,"z":0,"w":-0.29}},{"pos":{"x":-375.23,"y":2,"z":279.58},"rot":{"x":-0.1,"y":-0.98,"z":-0.03,"w":-0.22}},{"pos":{"x":-376.39,"y":2,"z":284.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-377.26,"y":2,"z":288.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-378.14,"y":2,"z":293.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.01,"y":2,"z":298.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-379.88,"y":2,"z":303.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-380.75,"y":2,"z":307.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-381.63,"y":2,"z":312.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-382.5,"y":2,"z":317.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-383.37,"y":2,"z":321.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-384.24,"y":2,"z":326.7},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.11,"y":2,"z":331.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-385.99,"y":2,"z":336.14},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-386.86,"y":2,"z":340.86},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-387.73,"y":2,"z":345.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-388.6,"y":2,"z":350.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-389.48,"y":2,"z":355.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-390.35,"y":2,"z":359.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-391.22,"y":2,"z":364.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.09,"y":2,"z":369.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-392.97,"y":2,"z":373.9},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-393.84,"y":2,"z":378.62},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-394.71,"y":2,"z":383.34},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-395.58,"y":2,"z":388.06},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-396.45,"y":2,"z":392.78},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-397.33,"y":2,"z":397.5},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-398.2,"y":2,"z":402.22},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.07,"y":2,"z":406.94},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-399.94,"y":2,"z":411.66},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-400.82,"y":2,"z":416.38},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-401.69,"y":2,"z":421.1},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-402.56,"y":2,"z":425.82},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-403.43,"y":2,"z":430.54},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-404.31,"y":2,"z":435.26},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-405.18,"y":2,"z":439.98},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.05,"y":2,"z":444.7},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-406.92,"y":2,"z":449.42},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-407.8,"y":2,"z":454.14},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-408.67,"y":2,"z":458.86},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-409.54,"y":2,"z":463.58},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-410.41,"y":2,"z":468.3},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-411.28,"y":2,"z":473.02},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-412.16,"y":2,"z":477.74},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.03,"y":2,"z":482.46},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}},{"pos":{"x":-413.9,"y":2,"z":487.18},"rot":{"x":0,"y":-1,"z":0,"w":-0.1}}];
                    // nx.finalSeqIdx[NUM].sunsetPath =  [{"pos":{"x":-201.95,"y":20.2,"z":148.99},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-205.34,"y":2,"z":152.4},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-208.72,"y":2,"z":155.8},"rot":{"x":0,"y":2.2,"z":-0.1}},{"pos":{"x":-212.11,"y":2,"z":159.19},"rot":{"x":0,"y":2.1,"z":-0.2}},{"pos":{"x":-215.49,"y":2,"z":162.61},"rot":{"x":0,"y":2.0,"z":-0.3}},{"pos":{"x":-219.16,"y":2,"z":165.67},"rot":{"x":-0.02,"y":1.9,"z":-0.6}},{"pos":{"x":-223.4,"y":2,"z":167.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-227.64,"y":2,"z":170.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-231.88,"y":2,"z":172.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-236.12,"y":2,"z":174.67},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-240.36,"y":2,"z":176.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-244.6,"y":2,"z":179.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-248.84,"y":2,"z":181.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-253.08,"y":2,"z":183.67},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-257.32,"y":2,"z":185.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-261.56,"y":2,"z":188.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-265.8,"y":2,"z":190.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-269.99,"y":2,"z":192.75},"rot":{"x":-0.01,"y":2.16,"z":0.2}},{"pos":{"x":-273.27,"y":2,"z":196.22},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-275.03,"y":2,"z":200.66},"rot":{"x":0,"y":2.66,"z":0}},{"pos":{"x":-276.37,"y":2,"z":205.27},"rot":{"x":0,"y":2.66,"z":0}},{"pos":{"x":-277.8,"y":2,"z":209.85},"rot":{"x":-0.02,"y":2.75,"z":-0.19}},{"pos":{"x":-280.51,"y":2,"z":213.77},"rot":{"x":-0.02,"y":2.35,"z":-0.19}},{"pos":{"x":-284.2,"y":2,"z":216.84},"rot":{"x":0,"y":2.33,"z":0}},{"pos":{"x":-287.92,"y":2,"z":219.88},"rot":{"x":0,"y":2.33,"z":0}},{"pos":{"x":-291.62,"y":2,"z":222.93},"rot":{"x":0,"y":2.33,"z":0}},{"pos":{"x":-295.33,"y":2,"z":225.98},"rot":{"x":0,"y":2.33,"z":0}},{"pos":{"x":-299.05,"y":2,"z":229.03},"rot":{"x":0,"y":2.22,"z":0}},{"pos":{"x":-302.86,"y":2,"z":231.93},"rot":{"x":-0.02,"y":2.09,"z":-0.18}},{"pos":{"x":-307.37,"y":2,"z":233.49},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-312.03,"y":2,"z":234.62},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-316.7,"y":2,"z":235.75},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-321.36,"y":2,"z":236.88},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-326.03,"y":2,"z":238.02},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-330.69,"y":2,"z":239.15},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-335.36,"y":2,"z":240.28},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-340,"y":2,"z":241.5},"rot":{"x":0,"y":1.91,"z":0.21}},{"pos":{"x":-344.08,"y":2,"z":243.97},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-347.94,"y":2,"z":246.83},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-351.8,"y":2,"z":249.69},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-355.65,"y":2,"z":252.55},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-359.39,"y":2,"z":255.55},"rot":{"x":0,"y":2.35,"z":0.21}},{"pos":{"x":-362.18,"y":2,"z":259.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-364.82,"y":2,"z":263.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-367.46,"y":2,"z":267.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-370.1,"y":2,"z":271.47},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-372.74,"y":2,"z":275.48},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-375.23,"y":2,"z":279.58},"rot":{"x":-0.02,"y":2.69,"z":0.2}},{"pos":{"x":-376.39,"y":2,"z":284.22},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-377.26,"y":2,"z":288.94},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-378.14,"y":2,"z":293.66},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-379.01,"y":2,"z":298.38},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-379.88,"y":2,"z":303.1},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-380.75,"y":2,"z":307.82},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-381.63,"y":2,"z":312.54},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-382.5,"y":2,"z":317.26},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-383.37,"y":2,"z":321.98},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-384.24,"y":2,"z":326.7},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-385.11,"y":2,"z":331.42},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-385.99,"y":2,"z":336.14},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-386.86,"y":2,"z":340.86},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-387.73,"y":2,"z":345.58},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-388.6,"y":2,"z":350.3},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-389.48,"y":2,"z":355.02},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-390.35,"y":2,"z":359.74},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-391.22,"y":2,"z":364.46},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-392.09,"y":2,"z":369.18},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-392.97,"y":2,"z":373.9},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-393.84,"y":2,"z":378.62},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-394.71,"y":2,"z":383.34},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-395.58,"y":2,"z":388.06},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-396.45,"y":2,"z":392.78},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-397.33,"y":2,"z":397.5},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-398.2,"y":2,"z":402.22},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-399.07,"y":2,"z":406.94},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-399.94,"y":2,"z":411.66},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-400.82,"y":2,"z":416.38},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-401.69,"y":2,"z":421.1},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-402.56,"y":2,"z":425.82},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-403.43,"y":2,"z":430.54},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-404.31,"y":2,"z":435.26},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-405.18,"y":2,"z":439.98},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-406.05,"y":2,"z":444.7},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-406.92,"y":2,"z":449.42},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-407.8,"y":2,"z":454.14},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-408.67,"y":2,"z":458.86},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-409.54,"y":2,"z":463.58},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-410.41,"y":2,"z":468.3},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-411.28,"y":2,"z":473.02},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-412.16,"y":2,"z":477.74},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-413.03,"y":2,"z":482.46},"rot":{"x":0,"y":3,"z":0}},{"pos":{"x":-413.9,"y":2,"z":487.18},"rot":{"x":0,"y":3,"z":0}}];
                    nx.finalSeqIdx[NUM].sunsetPath =  [{"pos":{"x":-201.95,"y":20.2,"z":148.99},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-205.34,"y":2,"z":152.4},"rot":{"x":0,"y":2.2,"z":0}},{"pos":{"x":-208.72,"y":2,"z":155.8},"rot":{"x":0,"y":2.2,"z":-0.1}},{"pos":{"x":-212.11,"y":2,"z":159.19},"rot":{"x":0,"y":2.1,"z":-0.2}},{"pos":{"x":-215.49,"y":2,"z":162.61},"rot":{"x":0,"y":2.0,"z":-0.3}},{"pos":{"x":-219.16,"y":2,"z":165.67},"rot":{"x":-0.02,"y":1.9,"z":-0.4}},{"pos":{"x":-223.4,"y":2,"z":167.92},"rot":{"x":0.01,"y":2.05,"z":-0.3}},{"pos":{"x":-227.64,"y":2,"z":170.17},"rot":{"x":0.01,"y":2.05,"z":-0.2}},{"pos":{"x":-231.88,"y":2,"z":172.42},"rot":{"x":0.01,"y":2.05,"z":-0.1}},{"pos":{"x":-236.12,"y":2,"z":174.67},"rot":{"x":0.01,"y":2.05,"z":0.0}},{"pos":{"x":-240.36,"y":2,"z":176.92},"rot":{"x":0.01,"y":2.05,"z":0.0}},{"pos":{"x":-244.6,"y":2,"z":179.17},"rot":{"x":0.01,"y":2.05,"z":0.1}},{"pos":{"x":-248.84,"y":2,"z":181.42},"rot":{"x":0.01,"y":2.05,"z":0.2}},{"pos":{"x":-253.08,"y":2,"z":183.67},"rot":{"x":0.01,"y":2.05,"z":0.3}},{"pos":{"x":-257.32,"y":2,"z":185.92},"rot":{"x":0.01,"y":2.05,"z":0.4}},{"pos":{"x":-261.56,"y":2,"z":188.17},"rot":{"x":0.01,"y":2.05,"z":0.5}},{"pos":{"x":-265.8,"y":2,"z":190.42},"rot":{"x":0.01,"y":2.05,"z":0.6}},{"pos":{"x":-269.99,"y":2,"z":192.75},"rot":{"x":-0.01,"y":2.16,"z":0.4}},{"pos":{"x":-273.27,"y":2,"z":196.22},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-275.03,"y":2,"z":200.66},"rot":{"x":0,"y":2.66,"z":0.0}},{"pos":{"x":-276.37,"y":2,"z":205.27},"rot":{"x":0,"y":2.7,"z":-0.2}},{"pos":{"x":-277.8,"y":2,"z":209.85},"rot":{"x":-0.02,"y":2.75,"z":-0.4}},{"pos":{"x":-280.51,"y":2,"z":213.77},"rot":{"x":-0.02,"y":2.35,"z":-0.5}},{"pos":{"x":-284.2,"y":2,"z":216.84},"rot":{"x":0,"y":2.33,"z":-0.6}},{"pos":{"x":-287.92,"y":2,"z":219.88},"rot":{"x":0,"y":2.33,"z":-0.6}},{"pos":{"x":-291.62,"y":2,"z":222.93},"rot":{"x":0,"y":2.33,"z":-0.5}},{"pos":{"x":-295.33,"y":2,"z":225.98},"rot":{"x":0,"y":2.33,"z":-0.4}},{"pos":{"x":-299.05,"y":2,"z":229.03},"rot":{"x":0,"y":2.22,"z":-0.2}},{"pos":{"x":-302.86,"y":2,"z":231.93},"rot":{"x":-0.02,"y":2.09,"z":-0.1}},{"pos":{"x":-307.37,"y":2,"z":233.49},"rot":{"x":0,"y":2.0,"z":0}},{"pos":{"x":-312.03,"y":2,"z":234.62},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-316.7,"y":2,"z":235.75},"rot":{"x":0,"y":1.8,"z":0}},{"pos":{"x":-321.36,"y":2,"z":236.88},"rot":{"x":0,"y":2.0,"z":0.1}},{"pos":{"x":-326.03,"y":2,"z":238.02},"rot":{"x":0,"y":2.0,"z":0.2}},{"pos":{"x":-330.69,"y":2,"z":239.15},"rot":{"x":0,"y":2.0,"z":0.3}},{"pos":{"x":-335.36,"y":2,"z":240.28},"rot":{"x":0,"y":2.0,"z":0.4}},{"pos":{"x":-340,"y":2,"z":241.5},"rot":{"x":0,"y":1.91,"z":0.5}},{"pos":{"x":-344.08,"y":2,"z":243.97},"rot":{"x":0,"y":2.0,"z":0.6}},{"pos":{"x":-347.94,"y":2,"z":246.83},"rot":{"x":0,"y":2.1,"z":0.6}},{"pos":{"x":-351.8,"y":2,"z":249.69},"rot":{"x":0,"y":2.2,"z":0.6}},{"pos":{"x":-355.65,"y":2,"z":252.55},"rot":{"x":0,"y":2.3,"z":0.5}},{"pos":{"x":-359.39,"y":2,"z":255.55},"rot":{"x":0,"y":2.35,"z":0.4}},{"pos":{"x":-362.18,"y":2,"z":259.45},"rot":{"x":0,"y":2.55,"z":0.3}},{"pos":{"x":-364.82,"y":2,"z":263.45},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-367.46,"y":2,"z":267.45},"rot":{"x":0,"y":2.55,"z":0.1}},{"pos":{"x":-370.1,"y":2,"z":271.47},"rot":{"x":0,"y":2.55,"z":0.05}},{"pos":{"x":-372.74,"y":2,"z":275.48},"rot":{"x":0,"y":2.55,"z":0.1}},{"pos":{"x":-375.23,"y":2,"z":279.58},"rot":{"x":-0.02,"y":2.69,"z":0.2}},{"pos":{"x":-376.39,"y":2,"z":284.22},"rot":{"x":0,"y":2.95,"z":0.2}},{"pos":{"x":-377.26,"y":2,"z":288.94},"rot":{"x":0,"y":2.95,"z":0.1}},{"pos":{"x":-378.14,"y":2,"z":293.66},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-379.01,"y":2,"z":298.38},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-379.88,"y":2,"z":303.1},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-380.75,"y":2,"z":307.82},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-381.63,"y":2,"z":312.54},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-382.5,"y":2,"z":317.26},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-383.37,"y":2,"z":321.98},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-384.24,"y":2,"z":326.7},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-385.11,"y":2,"z":331.42},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-385.99,"y":2,"z":336.14},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-386.86,"y":2,"z":340.86},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-387.73,"y":2,"z":345.58},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-388.6,"y":2,"z":350.3},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-389.48,"y":2,"z":355.02},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-390.35,"y":2,"z":359.74},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-391.22,"y":2,"z":364.46},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-392.09,"y":2,"z":369.18},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-392.97,"y":2,"z":373.9},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-393.84,"y":2,"z":378.62},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-394.71,"y":2,"z":383.34},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-395.58,"y":2,"z":388.06},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-396.45,"y":2,"z":392.78},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-397.33,"y":2,"z":397.5},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-398.2,"y":2,"z":402.22},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-399.07,"y":2,"z":406.94},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-399.94,"y":2,"z":411.66},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-400.82,"y":2,"z":416.38},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-401.69,"y":2,"z":421.1},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-402.56,"y":2,"z":425.82},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-403.43,"y":2,"z":430.54},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-404.31,"y":2,"z":435.26},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-405.18,"y":2,"z":439.98},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-406.05,"y":2,"z":444.7},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-406.92,"y":2,"z":449.42},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-407.8,"y":2,"z":454.14},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-408.67,"y":2,"z":458.86},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-409.54,"y":2,"z":463.58},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-410.41,"y":2,"z":468.3},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-411.28,"y":2,"z":473.02},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-412.16,"y":2,"z":477.74},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-413.03,"y":2,"z":482.46},"rot":{"x":0,"y":2.95,"z":0}},{"pos":{"x":-413.9,"y":2,"z":487.18},"rot":{"x":0,"y":2.95,"z":0}}];
                    // nx.finalSeqIdx[NUM].sunsetPath =  [{"pos":{"x":-201.95,"y":11.89,"z":148.99},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-205.34,"y":2,"z":152.4},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-208.72,"y":2,"z":155.8},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-212.11,"y":2,"z":159.19},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-215.49,"y":2,"z":162.61},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-219.16,"y":2,"z":165.67},"rot":{"x":-0.02,"y":2.09,"z":-0.18}},{"pos":{"x":-223.4,"y":2,"z":167.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-227.64,"y":2,"z":170.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-231.88,"y":2,"z":172.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-236.12,"y":2,"z":174.67},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-240.36,"y":2,"z":176.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-244.6,"y":2,"z":179.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-248.84,"y":2,"z":181.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-253.08,"y":2,"z":183.67},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-257.32,"y":2,"z":185.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-261.56,"y":2,"z":188.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-265.8,"y":2,"z":190.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-269.99,"y":2,"z":192.75},"rot":{"x":-0.01,"y":2.16,"z":0.2}},{"pos":{"x":-273.27,"y":2,"z":196.22},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-275.03,"y":2,"z":200.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-276.37,"y":2,"z":205.27},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-277.8,"y":2,"z":209.85},"rot":{"x":-0.02,"y":2.75,"z":-0.19}},{"pos":{"x":-280.51,"y":2,"z":213.77},"rot":{"x":-0.02,"y":2.35,"z":-0.19}},{"pos":{"x":-284.2,"y":2,"z":216.84},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-287.92,"y":2,"z":219.88},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-291.62,"y":2,"z":222.93},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-295.33,"y":2,"z":225.98},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-299.05,"y":2,"z":229.03},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-302.86,"y":2,"z":231.93},"rot":{"x":-0.02,"y":2.09,"z":-0.18}},{"pos":{"x":-307.37,"y":2,"z":233.49},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-312.03,"y":2,"z":234.62},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-316.7,"y":2,"z":235.75},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-321.36,"y":2,"z":236.88},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-326.03,"y":2,"z":238.02},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-330.69,"y":2,"z":239.15},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-335.36,"y":2,"z":240.28},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-340,"y":2,"z":241.5},"rot":{"x":0,"y":1.91,"z":0.21}},{"pos":{"x":-344.08,"y":2,"z":243.97},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-347.94,"y":2,"z":246.83},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-351.8,"y":2,"z":249.69},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-355.65,"y":2,"z":252.55},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-359.39,"y":2,"z":255.55},"rot":{"x":0,"y":2.35,"z":0.21}},{"pos":{"x":-362.18,"y":2,"z":259.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-364.82,"y":2,"z":263.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-367.46,"y":2,"z":267.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-370.1,"y":2,"z":271.47},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-372.74,"y":2,"z":275.48},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-375.23,"y":2,"z":279.58},"rot":{"x":-0.02,"y":2.69,"z":0.2}},{"pos":{"x":-376.39,"y":2,"z":284.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-377.26,"y":2,"z":288.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-378.14,"y":2,"z":293.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-379.01,"y":2,"z":298.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-379.88,"y":2,"z":303.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-380.75,"y":2,"z":307.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-381.63,"y":2,"z":312.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-382.5,"y":2,"z":317.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-383.37,"y":2,"z":321.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-384.24,"y":2,"z":326.7},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-385.11,"y":2,"z":331.42},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-385.99,"y":2,"z":336.14},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-386.86,"y":2,"z":340.86},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-387.73,"y":2,"z":345.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-388.6,"y":2,"z":350.3},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-389.48,"y":2,"z":355.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-390.35,"y":2,"z":359.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-391.22,"y":2,"z":364.46},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-392.09,"y":2,"z":369.18},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-392.97,"y":2,"z":373.9},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-393.84,"y":2,"z":378.62},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-394.71,"y":2,"z":383.34},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-395.58,"y":2,"z":388.06},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-396.45,"y":2,"z":392.78},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-397.33,"y":2,"z":397.5},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-398.2,"y":2,"z":402.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-399.07,"y":2,"z":406.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-399.94,"y":2,"z":411.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-400.82,"y":2,"z":416.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-401.69,"y":2,"z":421.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-402.56,"y":2,"z":425.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-403.43,"y":2,"z":430.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-404.31,"y":2,"z":435.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-405.18,"y":2,"z":439.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-406.05,"y":2,"z":444.7},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-406.92,"y":2,"z":449.42},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-407.8,"y":2,"z":454.14},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-408.67,"y":2,"z":458.86},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-409.54,"y":2,"z":463.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-410.41,"y":2,"z":468.3},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-411.28,"y":2,"z":473.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-412.16,"y":2,"z":477.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-413.03,"y":2,"z":482.46},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-413.9,"y":2,"z":487.18},"rot":{"x":0,"y":-1,"z":0}}];
                    // nx.finalSeqIdx[NUM].sunsetPath =  [{"pos":{"x":-201.95,"y":2,"z":148.99},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-205.34,"y":2,"z":152.4},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-208.72,"y":2,"z":155.8},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-212.11,"y":2,"z":159.19},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-215.49,"y":2,"z":162.61},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-219.16,"y":2,"z":165.57},"rot":{"x":-0.02,"y":2.09,"z":-0.18}},{"pos":{"x":-223.4,"y":2,"z":167.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-227.64,"y":2,"z":170.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-231.88,"y":2,"z":172.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-236.12,"y":2,"z":174.67},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-240.36,"y":2,"z":176.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-244.6,"y":2,"z":179.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-248.84,"y":2,"z":181.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-253.08,"y":2,"z":183.67},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-257.32,"y":2,"z":185.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-261.56,"y":2,"z":188.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-265.8,"y":2,"z":190.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-269.99,"y":2,"z":192.75},"rot":{"x":-0.01,"y":2.16,"z":0.2}},{"pos":{"x":-273.27,"y":2,"z":196.22},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-275.03,"y":2,"z":200.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-276.37,"y":2,"z":205.27},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-277.8,"y":2,"z":209.85},"rot":{"x":-0.02,"y":2.75,"z":-0.19}},{"pos":{"x":-280.51,"y":2,"z":213.77},"rot":{"x":-0.02,"y":2.35,"z":-0.19}},{"pos":{"x":-284.2,"y":2,"z":216.84},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-287.92,"y":2,"z":219.88},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-291.62,"y":2,"z":222.93},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-295.33,"y":2,"z":225.98},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-299.05,"y":2,"z":229.03},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-302.86,"y":2,"z":231.93},"rot":{"x":-0.02,"y":2.09,"z":-0.18}},{"pos":{"x":-307.37,"y":2,"z":233.49},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-312.03,"y":2,"z":234.62},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-316.7,"y":2,"z":235.75},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-321.36,"y":2,"z":236.88},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-326.03,"y":2,"z":238.02},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-330.69,"y":2,"z":239.15},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-335.36,"y":2,"z":240.28},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-340,"y":2,"z":241.5},"rot":{"x":0,"y":1.91,"z":0.21}},{"pos":{"x":-344.08,"y":2,"z":243.97},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-347.94,"y":2,"z":246.83},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-351.8,"y":2,"z":249.69},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-355.65,"y":2,"z":252.55},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-359.39,"y":2,"z":255.55},"rot":{"x":0,"y":2.35,"z":0.21}},{"pos":{"x":-362.18,"y":2,"z":259.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-364.82,"y":2,"z":263.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-367.46,"y":2,"z":267.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-370.1,"y":2,"z":271.47},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-372.74,"y":2,"z":275.48},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-375.23,"y":2,"z":279.58},"rot":{"x":-0.02,"y":2.69,"z":0.2}},{"pos":{"x":-376.39,"y":2,"z":284.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-377.26,"y":2,"z":288.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-378.14,"y":2,"z":293.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-379.01,"y":2,"z":298.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-379.88,"y":2,"z":303.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-380.75,"y":2,"z":307.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-381.63,"y":2,"z":312.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-382.5,"y":2,"z":317.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-383.37,"y":2,"z":321.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-384.24,"y":2,"z":326.7},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-385.11,"y":2,"z":331.42},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-385.99,"y":2,"z":336.14},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-386.86,"y":2,"z":340.86},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-387.73,"y":2,"z":345.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-388.6,"y":2,"z":350.3},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-389.48,"y":2,"z":355.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-390.35,"y":2,"z":359.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-391.22,"y":2,"z":364.46},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-392.09,"y":2,"z":369.18},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-392.97,"y":2,"z":373.9},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-393.84,"y":2,"z":378.62},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-394.71,"y":2,"z":383.34},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-395.58,"y":2,"z":388.06},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-396.45,"y":2,"z":392.78},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-397.33,"y":2,"z":397.5},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-398.2,"y":2,"z":402.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-399.07,"y":2,"z":406.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-399.94,"y":2,"z":411.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-400.82,"y":2,"z":416.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-401.69,"y":2,"z":421.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-402.56,"y":2,"z":425.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-403.43,"y":2,"z":430.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-404.31,"y":2,"z":435.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-405.18,"y":2,"z":439.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-406.05,"y":2,"z":444.7},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-406.92,"y":2,"z":449.42},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-407.8,"y":2,"z":454.14},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-408.67,"y":2,"z":458.86},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-409.54,"y":2,"z":463.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-410.41,"y":2,"z":468.3},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-411.28,"y":2,"z":473.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-412.16,"y":2,"z":477.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-413.03,"y":2,"z":482.46},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-413.9,"y":2,"z":487.18},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-414.77,"y":2,"z":491.9},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-415.65,"y":2,"z":496.62},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-416.52,"y":2,"z":501.34},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-417.39,"y":2,"z":506.06},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-418.26,"y":2,"z":510.78},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-419.14,"y":2,"z":515.5},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-420.01,"y":2,"z":520.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-420.88,"y":2,"z":524.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-421.75,"y":2,"z":529.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-422.62,"y":2,"z":534.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-423.5,"y":2,"z":539.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-424.37,"y":2,"z":543.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-425.24,"y":2,"z":548.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-426.11,"y":2,"z":553.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-426.99,"y":2,"z":557.98},"rot":{"x":0,"y":-1,"z":0}}];
                    // nx.finalSeqIdx[NUM].sunsetPath =  [{"pos":{"x":-201.95,"y":2,"z":148.99},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-203.64,"y":2,"z":150.69},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-205.34,"y":2,"z":152.4},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-207.03,"y":2,"z":154.1},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-208.72,"y":2,"z":155.8},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-210.41,"y":2,"z":157.5},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-212.11,"y":2,"z":159.19},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-213.8,"y":2,"z":160.91},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-215.49,"y":2,"z":162.61},"rot":{"x":0,"y":-0.93,"z":0}},{"pos":{"x":-217.2,"y":2,"z":164.29},"rot":{"x":-0.01,"y":2.29,"z":-0.2}},{"pos":{"x":-219.16,"y":2,"z":165.67},"rot":{"x":-0.02,"y":2.09,"z":-0.18}},{"pos":{"x":-221.28,"y":2,"z":166.79},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-223.4,"y":2,"z":167.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-225.52,"y":2,"z":169.04},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-227.64,"y":2,"z":170.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-229.76,"y":2,"z":171.29},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-231.88,"y":2,"z":172.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-234,"y":2,"z":173.54},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-236.12,"y":2,"z":174.67},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-238.24,"y":2,"z":175.79},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-240.36,"y":2,"z":176.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-242.48,"y":2,"z":178.04},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-244.6,"y":2,"z":179.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-246.72,"y":2,"z":180.3},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-248.84,"y":2,"z":181.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-250.96,"y":2,"z":182.55},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-253.08,"y":2,"z":183.67},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-255.2,"y":2,"z":184.8},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-257.32,"y":2,"z":185.92},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-259.44,"y":2,"z":187.05},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-261.56,"y":2,"z":188.17},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-263.68,"y":2,"z":189.3},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-265.8,"y":2,"z":190.42},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-267.92,"y":2,"z":191.55},"rot":{"x":0.01,"y":2.05,"z":0.01}},{"pos":{"x":-269.99,"y":2,"z":192.75},"rot":{"x":-0.01,"y":2.16,"z":0.2}},{"pos":{"x":-271.81,"y":2,"z":194.32},"rot":{"x":0,"y":2.35,"z":0.21}},{"pos":{"x":-273.27,"y":2,"z":196.22},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-274.33,"y":2,"z":198.37},"rot":{"x":-0.01,"y":2.75,"z":0.2}},{"pos":{"x":-275.03,"y":2,"z":200.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-275.7,"y":2,"z":202.97},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-276.37,"y":2,"z":205.27},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-277.05,"y":2,"z":207.57},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-277.8,"y":2,"z":209.85},"rot":{"x":-0.02,"y":2.75,"z":-0.19}},{"pos":{"x":-278.96,"y":2,"z":211.94},"rot":{"x":-0.02,"y":2.55,"z":-0.19}},{"pos":{"x":-280.51,"y":2,"z":213.77},"rot":{"x":-0.02,"y":2.35,"z":-0.19}},{"pos":{"x":-282.36,"y":2,"z":215.31},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-284.2,"y":2,"z":216.84},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-286.06,"y":2,"z":218.36},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-287.92,"y":2,"z":219.88},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-289.77,"y":2,"z":221.41},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-291.62,"y":2,"z":222.93},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-293.48,"y":2,"z":224.46},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-295.33,"y":2,"z":225.98},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-297.18,"y":2,"z":227.51},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-299.25,"y":2,"z":229.03},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-301.3,"y":2,"z":230.55},"rot":{"x":0,"y":-0.91,"z":0}},{"pos":{"x":-303.26,"y":2,"z":231.83},"rot":{"x":-0.02,"y":2.09,"z":-0.18}},{"pos":{"x":-305.45,"y":2,"z":232.79},"rot":{"x":-0.02,"y":1.91,"z":-0.19}},{"pos":{"x":-307.78,"y":2,"z":233.49},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-309.91,"y":2,"z":234.06},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-312.03,"y":2,"z":234.62},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-314.36,"y":2,"z":235.19},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-316.7,"y":2,"z":235.75},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-319.03,"y":2,"z":236.32},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-321.36,"y":2,"z":236.88},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-323.69,"y":2,"z":237.45},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-326.03,"y":2,"z":238.02},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-328.36,"y":2,"z":238.58},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-330.69,"y":2,"z":239.15},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-333.02,"y":2,"z":239.71},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-335.36,"y":2,"z":240.48},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-337.69,"y":2,"z":241.24},"rot":{"x":0,"y":-0.79,"z":0}},{"pos":{"x":-340,"y":2,"z":242.09},"rot":{"x":0,"y":1.91,"z":0.21}},{"pos":{"x":-342.14,"y":2,"z":243.16},"rot":{"x":0,"y":2.09,"z":0.2}},{"pos":{"x":-344.08,"y":2,"z":244.36},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-346.01,"y":2,"z":245.6},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-347.94,"y":2,"z":246.83},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-349.87,"y":2,"z":248.26},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-351.8,"y":2,"z":249.69},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-353.72,"y":2,"z":251.12},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-355.65,"y":2,"z":252.55},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-357.58,"y":2,"z":253.98},"rot":{"x":0,"y":-0.9,"z":0}},{"pos":{"x":-359.39,"y":2,"z":255.55},"rot":{"x":0,"y":2.35,"z":0.21}},{"pos":{"x":-361.87,"y":2,"z":257.44},"rot":{"x":0,"y":2.55,"z":0.2}},{"pos":{"x":-364.19,"y":2,"z":259.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-366.21,"y":2,"z":261.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-368.33,"y":2,"z":263.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-370.05,"y":2,"z":265.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-371.37,"y":2,"z":267.45},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-372.49,"y":2,"z":269.47},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-373.41,"y":2,"z":271.47},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-374.13,"y":2,"z":273.48},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-374.75,"y":2,"z":275.48},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-375.27,"y":2,"z":277.48},"rot":{"x":0,"y":2.55,"z":0.01}},{"pos":{"x":-375.74,"y":2,"z":279.58},"rot":{"x":-0.02,"y":2.69,"z":0.2}},{"pos":{"x":-375.96,"y":2,"z":281.86},"rot":{"x":-0.02,"y":2.89,"z":0.2}},{"pos":{"x":-376.39,"y":2,"z":284.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-376.83,"y":2,"z":286.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-377.26,"y":2,"z":288.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-377.7,"y":2,"z":291.3},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-378.14,"y":2,"z":293.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-378.57,"y":2,"z":296.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-379.01,"y":2,"z":298.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-379.44,"y":2,"z":300.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-379.88,"y":2,"z":303.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-380.32,"y":2,"z":305.45},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-380.75,"y":2,"z":307.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-381.19,"y":2,"z":310.18},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-381.63,"y":2,"z":312.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-382.06,"y":2,"z":314.89},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-382.5,"y":2,"z":317.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-382.93,"y":2,"z":319.62},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-383.37,"y":2,"z":321.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-383.81,"y":2,"z":324.33},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-384.24,"y":2,"z":326.7},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-384.68,"y":2,"z":329.06},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-385.11,"y":2,"z":331.42},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-385.55,"y":2,"z":333.78},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-385.99,"y":2,"z":336.14},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-386.42,"y":2,"z":338.5},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-386.86,"y":2,"z":340.86},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-387.3,"y":2,"z":343.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-387.73,"y":2,"z":345.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-388.17,"y":2,"z":347.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-388.6,"y":2,"z":350.3},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-389.04,"y":2,"z":352.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-389.48,"y":2,"z":355.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-389.91,"y":2,"z":357.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-390.35,"y":2,"z":359.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-390.78,"y":2,"z":362.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-391.22,"y":2,"z":364.46},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-391.66,"y":2,"z":366.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-392.09,"y":2,"z":369.18},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-392.53,"y":2,"z":371.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-392.97,"y":2,"z":373.9},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-393.4,"y":2,"z":376.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-393.84,"y":2,"z":378.62},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-394.27,"y":2,"z":380.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-394.71,"y":2,"z":383.34},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-395.15,"y":2,"z":385.7},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-395.58,"y":2,"z":388.06},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-396.02,"y":2,"z":390.42},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-396.45,"y":2,"z":392.78},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-396.89,"y":2,"z":395.14},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-397.33,"y":2,"z":397.5},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-397.76,"y":2,"z":399.86},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-398.2,"y":2,"z":402.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-398.64,"y":2,"z":404.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-399.07,"y":2,"z":406.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-399.51,"y":2,"z":409.3},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-399.94,"y":2,"z":411.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-400.38,"y":2,"z":414.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-400.82,"y":2,"z":416.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-401.25,"y":2,"z":418.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-401.69,"y":2,"z":421.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-402.12,"y":2,"z":423.46},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-402.56,"y":2,"z":425.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-403,"y":2,"z":428.18},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-403.43,"y":2,"z":430.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-403.87,"y":2,"z":432.9},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-404.31,"y":2,"z":435.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-404.74,"y":2,"z":437.62},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-405.18,"y":2,"z":439.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-405.61,"y":2,"z":442.34},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-406.05,"y":2,"z":444.7},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-406.49,"y":2,"z":447.06},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-406.92,"y":2,"z":449.42},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-407.36,"y":2,"z":451.78},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-407.8,"y":2,"z":454.14},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-408.23,"y":2,"z":456.5},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-408.67,"y":2,"z":458.86},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-409.1,"y":2,"z":461.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-409.54,"y":2,"z":463.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-409.98,"y":2,"z":465.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-410.41,"y":2,"z":468.3},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-410.85,"y":2,"z":470.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-411.28,"y":2,"z":473.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-411.72,"y":2,"z":475.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-412.16,"y":2,"z":477.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-412.59,"y":2,"z":480.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-413.03,"y":2,"z":482.46},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-413.47,"y":2,"z":484.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-413.9,"y":2,"z":487.18},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-414.34,"y":2,"z":489.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-414.77,"y":2,"z":491.9},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-415.21,"y":2,"z":494.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-415.65,"y":2,"z":496.62},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-416.08,"y":2,"z":498.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-416.52,"y":2,"z":501.34},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-416.95,"y":2,"z":503.7},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-417.39,"y":2,"z":506.06},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-417.83,"y":2,"z":508.42},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-418.26,"y":2,"z":510.78},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-418.7,"y":2,"z":513.14},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-419.14,"y":2,"z":515.5},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-419.57,"y":2,"z":517.86},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-420.01,"y":2,"z":520.22},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-420.44,"y":2,"z":522.58},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-420.88,"y":2,"z":524.94},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-421.32,"y":2,"z":527.29},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-421.75,"y":2,"z":529.66},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-422.19,"y":2,"z":532.02},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-422.62,"y":2,"z":534.38},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-423.06,"y":2,"z":536.74},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-423.5,"y":2,"z":539.1},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-423.93,"y":2,"z":541.46},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-424.37,"y":2,"z":543.82},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-424.81,"y":2,"z":546.17},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-425.24,"y":2,"z":548.54},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-425.68,"y":2,"z":550.9},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-426.11,"y":2,"z":553.26},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-426.55,"y":2,"z":555.62},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-426.99,"y":2,"z":557.98},"rot":{"x":0,"y":-1,"z":0}},{"pos":{"x":-427.42,"y":2,"z":560.34},"rot":{"x":0,"y":-1,"z":0}}];
                    // nx.finalSeqIdx[NUM].sunsetPath = nx.editz.decomposePath({aPath:nx.finalSeqIdx[NUM].sunsetPath}) //ANMETHODOLOGY: inline decomposer-.
                    // nx.finalSeqIdx[NUM].sunsetPath = nx.editz.decomposePath({aPath:nx.finalSeqIdx[NUM].sunsetPath}) //ANMETHODOLOGY: inline decomposer-.
                    // var instPath = nx.createPathEditor({aName:'sunsetPath', ANMPath:nx.finalSeqIdx[NUM].sunsetPath}); //-WORKING-PATH-EDITOR-.


                    //ANMETHODOLOGY: METANIMATIONS - init the ANMETAZ!!!
                    nx.finalSeqIdx[NUM].sunsetMeta = [];
                    nx.finalSeqIdx[NUM].sunsetMeta[1] = {delayFrame:1}
                    nx.finalSeqIdx[NUM].sunsetMeta[4] = {followCam1:1}
                    nx.finalSeqIdx[NUM].sunsetMeta[20] = {followCam2:1}
                    nx.finalSeqIdx[NUM].sunsetMeta[40] = {followCam3:1}
                    nx.finalSeqIdx[NUM].sunsetMeta[50] = {followCam4:1}
                    nx.finalSeqIdx[NUM].sunsetMeta[70] = {stopCam5:1}
                    nx.finalSeqIdx[NUM].sunsetMeta[80] = {endCurtain6:1}
                    // nx.finalSeqIdx[NUM].jumpingMeta[8] = {jmpApex:1}
                    // nx.finalSeqIdx[NUM].jumpingMeta[7] = {jmpLand:1}
                    // nx.finalSeqIdx[NUM].jumpingMeta[14] = {inIdle:1}
                    // nx.finalSeqIdx[NUM].jumpingMeta[16] = {inTuck:1}


                } //end init sequence-.
                if(!nx.finalSeqIdx[NUM].initAnm){  //init next path point
                    nx.finalSeqIdx[NUM].curPOS = nx.finalSeqIdx[NUM].sunsetPath[nx.finalSeqIdx[NUM].stepIdx];
                    nx.finalSeqIdx[NUM].nxtPOS = nx.finalSeqIdx[NUM].sunsetPath[++nx.finalSeqIdx[NUM].stepIdx];
                    nx.finalSeqIdx[NUM].initAnm = 1;


                    //ANMETHODOLOGY - 3Denumerations: Up,Dwn, Lft, Rgt, Fwd, Bwd. UDLRFB. Unique Letters to Signify easily.
                    //ANMETHODOLOGY - ANMETAZ!!! - an array of STEPIDX meta behaviors-. lookup by synchronized index
                    //synchronized index:
                    //nx.finalSeqIdx[NUM].jumpingMeta[8] = {jmpCompress:1,jmpApex:1, eyeLL:1, eyeRollD:1, inIdle:1, inTuck:0, inLaserF:0, inLaserU:1 }


                    //ANMETAZ: frame IDX META lookup-.
                    if(nx.finalSeqIdx[NUM].sunsetMeta[nx.finalSeqIdx[NUM].stepIdx]){ //ANMETHODOLOGY- precision anm index triggers. IF META EXISTS-.
                    //     // debugger;


                    //     //METANMZ-ACCORDION-.
                        if(nx.finalSeqIdx[NUM].sunsetMeta[nx.finalSeqIdx[NUM].stepIdx].delayFrame){ //example
                            // nx.finalSeqIdx[NUM].on=0; 
                            // setTimeout(function(){
                            //     nx.finalSeqIdx[NUM].on=1; 
                            // },3000)
                            // return;
                        }else if(nx.finalSeqIdx[NUM].sunsetMeta[nx.finalSeqIdx[NUM].stepIdx].followCam1){ //example
                            // debugger;
                            // console.log('FOLLOW1')
                            nx.initFollowCam();
                            nx.camz.followCam.heightOffset = 15; //distance above: ground default:12-.
                            nx.camz.followCam.maxCameraSpeed = 10;//6;  // Top Speed, dont go too fast 
                            nx.camz.followCam.cameraAcceleration = 0.01; //0.005; //0.007 //amount cam moves, 0 to avoid jank-.

                        }else if(nx.finalSeqIdx[NUM].sunsetMeta[nx.finalSeqIdx[NUM].stepIdx].followCam2){ //example
                            // debugger;
                            // console.log('FOLLOW2')
                            nx.initFollowCam();

                                    nx.camz.followCam.radius = 55; //distance from tgt: 35ground default-. 
                                    // nx.camz.followCam.heightOffset = 12; //distance above: ground default:12-.
                                    // nx.camz.followCam.upperHeightOffsetLimit = 12;
                                    nx.camz.followCam.rotationOffset = -100; //-120face; -100front; 0back; //rotation around origin
                                    nx.camz.followCam.cameraAcceleration = 0.01; //0.005; //0.007 //amount cam moves, 0 to avoid jank-.
                                    // nx.scene.activeCamera.cameraAcceleration = 0.04
                                    nx.camz.followCam.maxCameraSpeed = 10;//6;  // Top Speed, dont go too fast 


                        }else if(nx.finalSeqIdx[NUM].sunsetMeta[nx.finalSeqIdx[NUM].stepIdx].followCam3){ //example
                            // debugger;
                            // console.log('FOLLOW3')
                            nx.initFollowCam();

                                    nx.camz.followCam.radius = 15; //distance from tgt: 35ground default-. 
                                    // nx.camz.followCam.heightOffset = 12; //distance above: ground default:12-.
                                    // nx.camz.followCam.upperHeightOffsetLimit = 12;
                                    nx.camz.followCam.rotationOffset = -100; //-120face; -100front; 0back; //rotation around origin
                                    nx.camz.followCam.cameraAcceleration = 0.01; //0.005; //0.007 //amount cam moves, 0 to avoid jank-.
                                    // nx.scene.activeCamera.cameraAcceleration = 0.04
                                    // nx.camz.followCam.maxCameraSpeed = 10;//6;  // Top Speed, dont go too fast 



                        }else if(nx.finalSeqIdx[NUM].sunsetMeta[nx.finalSeqIdx[NUM].stepIdx].followCam4){ //example
                            // debugger;
                            // console.log('FOLLOW4')
                            nx.initFollowCam();
                                    nx.camz.followCam.radius = 35; //distance from tgt: 35ground default-. 
                                    nx.camz.followCam.heightOffset = 0; //distance above: ground default:12-.
                                    // nx.camz.followCam.upperHeightOffsetLimit = 12;
                                    nx.camz.followCam.rotationOffset = 2; //-120face; -100front; 0back; //rotation around origin
                                    nx.camz.followCam.cameraAcceleration = 0.01; //0.005; //0.007 //amount cam moves, 0 to avoid jank-.
                                    // nx.scene.activeCamera.cameraAcceleration = 0.04
                                    nx.camz.followCam.maxCameraSpeed = 10;//6;  // Top Speed, dont go too fast 

                        }else if(nx.finalSeqIdx[NUM].sunsetMeta[nx.finalSeqIdx[NUM].stepIdx].stopCam5){ //example
                            nx.initFreeCam();
                        }else if(nx.finalSeqIdx[NUM].sunsetMeta[nx.finalSeqIdx[NUM].stepIdx].endCurtain6){ //example
                            // nx.showCurtain({dur:2000,speed:"slow"})
                            $('canvas').fadeOut("slow");
                        }
                    }

                    if(!nx.finalSeqIdx[NUM].nxtPOS){  //END-ANM 
                        nx.finalSeqIdx[NUM].on=0; //important
                        nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
                        return; //END-SUB-SEQUENCES-.
                    } 
                    nx.finalSeqIdx[NUM].runAnm = 1;
                }  
                //NEW-POSROT-ANM-FORMAT- //TODO add in the ROTIdx option-..
                if(nx.finalSeqIdx[NUM].runAnm) { nx.finalSeqIdx[NUM].runAnm = 0; //one-time-trigger;
                    $({curPOSx:nx.finalSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.finalSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.finalSeqIdx[NUM].curPOS.pos.z}).
                    animate({curPOSx:nx.finalSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.finalSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.finalSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.finalSeqIdx[NUM].anmSpeed,easing:'linear',
                    step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
                        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                        nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
                        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
                        // nx.scene.activeCamera.setTarget(nx.orbyMesh.position) //CAMTGT: 
                        //EDITABLE-ROTATIONS-.
                        if(nx.finalSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z,nx.finalSeqIdx[NUM].curPOS.rot.w);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                        }else{ //EULER-ANM-ROT-.
                            nx.orbyMesh.rotationQuaternion = null;
                            nx.orbyMesh.rotation = new BABYLON.Vector3(nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z);
                            nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
                            // console.log('ROT '+nx.finalSeqIdx[NUM].stepIdx,nx.finalSeqIdx[NUM].curPOS.rot.x,nx.finalSeqIdx[NUM].curPOS.rot.y,nx.finalSeqIdx[NUM].curPOS.rot.z)
                        }
                    }, complete:function(){ 
                    if(nx.finalSeqIdx[NUM].curPOS.meta){nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);/*idle*/ } //meta behavior-.
                        nx.finalSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });
                }




                        // nx.finalSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
            }//end frame
            else if(nx.finalSeqIdx[11] && nx.finalSeqIdx[11].on){ var NUM = 11; nx.finalSeqIdx[NUM].on=0;
                //ANM: past the spacetrain and toward the edge
                nx.ui.flashCanvasMSG({txt:"~END~",dur:8000,persist:true,
                    txtInit:function(){ },
                    txtEnd:function(){ }
                }); 
            }//end frame
        });//end cinematic loop
    }//END-SEQUENCE-.

} //END-cinematic sequencing-.

    //TEMPLATE: use this to add a new epic sequence-.
    // } else if(seqName==="AffirmationSequence"){ //-----------------------------------------------------------------------------ZAP SCAN-SEQUENCE---.
    //     nx.startCinematicSequence(function(){ //ANMETHODOLOGY-. All locals have same IDX as SEQIDX.
    //         if(nx.affirmSeqIdx[0] && nx.affirmSeqIdx[0].on){ var NUM = 0; 

    //         }
    // } //END-SEQUENCE-.

    //TEMPLATE BEAUTIFUL: single line CAMSWITCH-.
    // setTimeout(function(){nx.finalSeqIdx[NUM+1]={on:1}},3000) //look, then CAMSWITCH-.

    //TEMPLATE: POSROT ANM-PATH SEQUENCE FRAME:
    // if(nx.doorSeqIdx[3] && nx.doorSeqIdx[3].on){ var NUM = 3;
    //     if(!nx.doorSeqIdx[NUM].init){ nx.doorSeqIdx[NUM].init=1; //one time init
    //         nx.camz.freeCam.position.copyFrom({x: 125.91809305164549, y: 252.910231776879, z: -113.34096907171961}); 
    //         nx.doorSeqIdx[NUM].runAnm = 0; //ANMETHODOLOGY 0 off 1 on-. 
    //         nx.doorSeqIdx[NUM].stepIdx = 0;
    //         nx.doorSeqIdx[NUM].anmSpeed = 85;
    //         //initialize-path and edit-.
    //         nx.doorSeqIdx[NUM].descentPath2 =  [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":2.24,"z":-0.3}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":2.24,"z":-0.2}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":2.24,"z":-0.1}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-21.109,"y":222.5,"z":9.647},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-26.017,"y":222.5,"z":13.03},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-31.724,"y":222.5,"z":16.512},"rot":{"x":0,"y":2.24,"z":0.3}},{"pos":{"x":-37.832,"y":222.5,"z":18.895},"rot":{"x":0,"y":2.24,"z":0.2}},{"pos":{"x":-41.14,"y":222.5,"z":20.778},"rot":{"x":0,"y":2.24,"z":0.1}},{"pos":{"x":-43.947,"y":222.599,"z":22.599},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-46.647,"y":222.599,"z":24.209},"rot":{"x":0,"y":2.24,"z":0}},{"pos":{"x":-48.948,"y":222.599,"z":25.819},"rot":{"x":-0.1,"y":2.24,"z":0}},{"pos":{"x":-50.948,"y":222.599,"z":27.529},"rot":{"x":-0.2,"y":2.24,"z":0}},{"pos":{"x":-52.749,"y":222.599,"z":29.04},"rot":{"x":-0.1,"y":2.24,"z":0}},{"pos":{"x":-53.849,"y":222.599,"z":30.05},"rot":{"x":0,"y":2.24,"z":0}}];
    //         var instPath = nx.createPathEditor({aName:'descentPath2', ANMPath:nx.doorSeqIdx[NUM].descentPath2}); //-WORKING-PATH-EDITOR-.
    //     } //end init sequence-.
    //     if(!nx.doorSeqIdx[NUM].initAnm){  //init next path point
    //         nx.doorSeqIdx[NUM].curPOS = nx.doorSeqIdx[NUM].descentPath2[nx.doorSeqIdx[NUM].stepIdx];
    //         nx.doorSeqIdx[NUM].nxtPOS = nx.doorSeqIdx[NUM].descentPath2[++nx.doorSeqIdx[NUM].stepIdx];
    //         nx.doorSeqIdx[NUM].initAnm = 1;
    //         if(!nx.doorSeqIdx[NUM].nxtPOS){  //END-ANM 
    //             nx.doorSeqIdx[NUM].on=0; //important
    //             // nx.doorSeqIdx[NUM+1] = {on:1}; //NEXT-ANM-. 
    //             return; //END-SUB-SEQUENCES-.
    //         } 
    //         nx.doorSeqIdx[NUM].runAnm = 1;
    //     }  
    //     //NEW-POSROT-ANM-FORMAT- //TODO add in the ROTIdx option-..
    //     if(nx.doorSeqIdx[NUM].runAnm) { nx.doorSeqIdx[NUM].runAnm = 0; //one-time-trigger;
    //         $({curPOSx:nx.doorSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.doorSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.doorSeqIdx[NUM].curPOS.pos.z}).
    //         animate({curPOSx:nx.doorSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.doorSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.doorSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.doorSeqIdx[NUM].anmSpeed,easing:'linear',
    //         step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
    //             if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
    //             nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
    //             nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
    //             //EDITABLE-ROTATIONS-.
    //             if(nx.doorSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
    //                 nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.doorSeqIdx[NUM].curPOS.rot.x,nx.doorSeqIdx[NUM].curPOS.rot.y,nx.doorSeqIdx[NUM].curPOS.rot.z,nx.doorSeqIdx[NUM].curPOS.rot.w);
    //                 nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
    //             }else{ //EULER-ANM-ROT-.
    //                 nx.orbyMesh.rotationQuaternion = null;
    //                 nx.orbyMesh.rotation = new BABYLON.Vector3(nx.doorSeqIdx[NUM].curPOS.rot.x,nx.doorSeqIdx[NUM].curPOS.rot.y,nx.doorSeqIdx[NUM].curPOS.rot.z);
    //                 nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
    //             }
    //         }, complete:function(){ 
    //             nx.doorSeqIdx[NUM].initAnm = 0; 
    //             } //NEXT-SUB-SEQUENCE-. 
    //         });
    //     }
    // }

    //TEMPLATE: message queue-.
    // nx.ui.flashCanvasMSG({txt:"SPACE RUBBISH!",dur:2000,
    //     txtInit:function(){ //FOR nesting ui animation logic within txt initialization-.
    //     },
    //     txtEnd:function(){ //For signaling next GAME SEQ as TXT fades out-.
    //     }
    // }); 

    //TEMPLATE:  VERY IMPORTANT EDITOR COMMAND TO PUBLISH ANMPATH for Orby anm paths-.
    // JSON.stringify(nx.editz.truncatePathPrecision(nx.editz.decomposePath({aPath:nx.recordPath})))


    //METHODOLOGY: ANMSCAPE (animation landscape) is aSTAGE for all in this world. 
    //TYPES of ANMZ: aHEROANM aPOSANM aROTANM aPOSROTANM aEYEANM aIRISANM aTGTANM. aCAMANM, aCAMPOSANM, aCAMROTANM, aCAMPOSROTANM, 
    //aBIRDSEYEANM, aFLYBYANM- aTRACKANM, aFACECAMANM, a HEROCAMANM, aGROUPCAMANM.
    //ATOMICDENSE ANIMATIONS along zDIMENSIONs for the world wide web. 


    //TEMPLATE: CAMPOSANM 
    // $({camPOSx:nx.scene.activeCamera.position.x,camPOSy:nx.scene.activeCamera.position.y,camPOSz:nx.scene.activeCamera.position.z}).
    // animate({camPOSx:-12,camPOSy:264,camPOSz:10},{queue:false,duration:3000,easing:'swing',
    // step: function(now) { //ANM:-CAM POS ZOOM IN
    //     if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
    //     nx.scene.activeCamera.position.copyFrom({x:this.camPOSx, y: this.camPOSy, z: this.camPOSz}); //low view crash position ZOOMCAM
    // }, complete:function(){ } 
    // });//end anm

    //TEMPLATE: one-time-pattern
    // if(!nx.scene.beforeFinalWord){ nx.scene.beforeFinalWord = 1; //ANMETHODOLOGY: one-time-pattern -.
    //     ... 
    // }

/***************************************** - LOOP - SEQUENCE - **********************************************************************/

nx.anmfn; //interchange this fn with diffferent animation sequence funcitons-.
//TODO move this inso anmscape and make it game-movie-book modal loop-.
// var loopSequence = function(nx.anmfn){ //A reusable loop for running many ANM sequences-.
// nx.startCinematicSequence = function(nx.anmfn){ //A reusable loop for running many ANM sequences-.
    // debugger;
nx.startCinematicSequence = function(anmfn){ //A reusable loop for running many ANM sequences-.
    // nx.resetCinemos();
    nx.anmfn = anmfn; //seq function set to run in next loop-.
    nx.cinematicMode = 1; //LEGEND: 1: cinematic loop running //cinematic loop off //cinematic loop clean up -1
    // //TODO  add loopMasterSequence and loopGameSeq, and loopSceneSequence-.
    // nx.cinematicMode = 1; //LEGEND: 1: cinematic loop running //cinematic loop off //cinematic loop clean up -1
    // nx.scene.registerBeforeRender(function sequenceLoop() {
    //     nx.anmfn(); if(nx.cinematicMode<0){ console.log('PLAYBACK DONE.'); nx.scene.unregisterBeforeRender(sequenceLoop); }
    //     // nx.anmfn(); if(!nx.cinematicMode){ console.log('PLAYBACK DONE.'); nx.scene.unregisterBeforeRender(sequenceLoop); }
    // });
}

nx.createCinematicLoop = function(){
    //TODO  add loopMasterSequence and loopGameSeq, and loopSceneSequence-.
    nx.scene.registerBeforeRender(function sequenceLoop() {


         // if(nx.anmDEBUG){debugger;} //TODO if nx.anmSLOWMO then onrly call function every 10th frame.

        // if(nx.cinemaPause){console.log('cinema paused'); return;}//CINEMAPause-.
        if(nx.cinemaStop){console.log('cinema stop'); return;}//CINEMAStop-.
        if(nx.anmfn) { nx.anmfn(); } // todo perf op - run function when we have it, but while animating - need not run - and stop when done.
        if(nx.cinematicMode<0){ console.log('PLAYBACK DONE.'); nx.scene.unregisterBeforeRender(sequenceLoop); } //-1 to UNLOAD-MASTER-SEQUENCE-LOOP!
        // nx.anmfn(); if(!nx.cinematicMode){ console.log('PLAYBACK DONE.'); nx.scene.unregisterBeforeRender(sequenceLoop); }
    });
}

nx.isCinematicMode = function(){
    return (nx.cinematicMode>0);
}


/*******************************************************************-END-CINEMATIX-****************************************************************/


/******************************************************************-initSPACE-*******************************/
var initSpace = function(){

    nx.spacebox.rotation = new BABYLON.Vector3(0.75,-1.1,-0.2)
    nx.spacebox.position.z = -2000; //ANM: INIT SPACEBOX-. methodology
    nx.spacebox.position.x = -1000;
    nx.spacebox.position.y = 2500;
    // var local_scale = 0.25;
    // nx.ground.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);  //shrink-wurld-.
}


/*************************************************************************CREATE-SCENE**********************************************************/
var createScene = function(){

// try{
//     // nx.ui.flashCanvasMSG({txt:'~ WELCOME ~'}); 
//     nx.ui.initFlashCanvas(); //TODO??? move up to anmscape?


// } catch (e) { 
//     debugger; 
// }
    // createCams(); 
    // createAnmz(); //DEPRECATED
    // createTXTs();  //TODO MOVE THIS TO 2DTXT MODULE?
    // createGroundGrid();
    // createAssets(); //DEPRECATED-.
    // createOrbyAnmRig(); //DEPRECATED
    // createGemz();
    // createSolidParticles();
    // createSpaceBugz();
    //createEvents(); //DEPRECATED-.
    
    // createGroundEditor(); //DEPRECATED
    // createLandingPadEditor();

    // createPolyMeshEditor();
    // createHalfpipe();
    // createMasterPipeEditor();  //renderMasterPipe //Deprecated
    // create195PipeEditor();     //More advanced PATH editor. 

    // createCenterPyramid();  //DEPRECATED
    // createPyramidSpaceDoor(); //DEPRECATED
    // createWatchTower();  //DEPRECATED


    // createZones();
    // createZoneAlarms();
    // createSpacePipe();
    // nx.createCinematicLoop(); //DEPRECATED-.



    // createSandBurm1(); //deprecated-.

    // createZapBotPosts();

    // nx.createOrbySparkBox();

    // createContinuePipe(); //DEPRECATED
    // createPuppetEditor();
    // createBounceEditor();
    // createFrontFlipEditor();
    // createPyramidShape();
    // createObeliskShape();
    // createDustEffects();
    // nx.createDustPoof();
    // createDustDevil();
    // {x: -624.7933497317099, y: 2929.225349562133, z: -1668.4952211420716} //orby startspot


    initSpace(); //TODO move up to anmscape?
    // debugger;
    // nx.createMasterStart();

    // var COMPASS = BABYLON.Mesh.CreateSphere("sphere", 4, 13, nx.scene);
    // var COMPASS = BABYLON.Mesh.CreateSphere("sphere", {diameter:13,diameterY:0.5,diameterZ:1.2}, nx.scene);
    // COMPASS.position = new BABYLON.Vector3(150,5,150)
}
/*************************************************************************END-CREATE-SCENE**********************************************************/


/******************************Initialization******************************/
createScene();
/******************************- unload -******************************/
var unloadEpic = function(){
    console.log('BEFORE-UNLOAD')
    console.log(nx.scene.meshes.length)
    console.log(nx.scene.materials.length)
    console.log('____')
    for(var i=0;i<sceneMesh.length;i++){
        if(sceneMesh[i].fn){nx.scene.unregisterBeforeRender(sceneMesh[i].fn)}
        sceneMesh[i].dispose();
        sceneMesh[i] = null;
    }
    sceneMesh= sceneMesh.filter(function(obj) { return obj });
    console.log('AFTER-UNLOAD')
    console.log(nx.scene.meshes.length)
    console.log(nx.scene.materials.length)
    console.log('____')
    // scene.onMeshRemovedObservable.add(mesh => {
    //    if (mesh.skeleton) {
    //       mesh.skeleton.dispose()
    //    }
    // });
}
}//end-interchangable-scene-.