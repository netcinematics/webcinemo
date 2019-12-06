/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
// try{
    console.log('alpha moon module-loaded')
    // debugger;
    // return;
    if(!nx){nx={}}

    // var nx = {};


    // return;
    /******************************-LOCALVARZ-**********************************/
    // if(!nx.sub){nx.sub={}}
    // nx.sub = {num0:0,num1:0} 
    /******************************-MODULE-**********************************/
    //WORLD-VARIABLES***********************************************************
    nx.alphaMoon1 = {};
    var currentPlate = {name:"platetop"}; //init 
    var nextPlate, lastPlate;//todo merge with world. and spaceplate //rename planetoid
    var newPlate = false;
    // var worldOrbiting=false;//todo merge with world.
    var initGravity = false;
    // var heroHeading = ''; 
    var headingVector = BABYLON.Vector3.Zero();
    var zAxisOffset=0, xAxisOffset=0, yAxisOffset=0;
    var platePath = [];
    // var freeCameraMode = false; //todo
    

    nx.initCubeGravity = function(){
        // return; //refactor nx.orbyMesh
        console.log('initCubeGravity');
        //#1 init gravity: set y position. set current plate
        var ray = new BABYLON.Ray(
            new BABYLON.Vector3(
                nx.orbyMesh.position.x, 
                nx.orbyMesh.position.y, 
                nx.orbyMesh.position.z),
            new BABYLON.Vector3(0, -1, 0)); // Direction
        var worldInverse = new BABYLON.Matrix();
        nx.alphaMoon1.top.getWorldMatrix().invertToRef(worldInverse);
        ray = BABYLON.Ray.Transform(ray, worldInverse);
        var pickInfo = nx.alphaMoon1.top.intersects(ray);
        if (pickInfo.hit) {

            // nx.orbyMesh.position.y = pickInfo.pickedPoint.y+8;// + 1;     //SET-Y-POSITION-GRAVITY.
            //removed
            //PLATE NAME!
        currentPlate = pickInfo.pickedMesh;
            // console.log('grav init')
        } else {
            // console.log('no grav init')
        }    
    }//END-INIT-CUBE-GRAVITY-----------------------------------------------------
//set heading----------------------------------------
    nx.setAxisOffsets = function(){
        if(nx.heroHeading==="north"){
            zAxisOffset++;
        }else if (nx.heroHeading==="east"){
            xAxisOffset++;
        }else if (nx.heroHeading==="south"){
            zAxisOffset--;
        }else if (nx.heroHeading==="west"){
            xAxisOffset--
        }
        //zero reset.
        if(zAxisOffset>=4||zAxisOffset<=-4){
            // console.log('reset Axis: Z')
            zAxisOffset=0}
        if(xAxisOffset>=4||xAxisOffset<=-4){
            // console.log('reset Axis: X')
            xAxisOffset=0}
    }
    nx.setHeroHeading = function(){
        console.log('setHeroHeading');
        // return; // refactor nx.orbyMesh
        //todo get rid of instanciations in loop. switch to e object.
        var vNext = nextPlate.getBoundingInfo().boundingBox.maximumWorld;
        var vCurrent = currentPlate.getBoundingInfo().boundingBox.maximumWorld;
        var zNext = Math.round(vNext.z * 100) / 100; //(vNext.z).toPrecision(4)
        var xNext = Math.round(vNext.x * 100) / 100; //(vNext.x).toPrecision(4)
        var zCurrent = Math.round(vCurrent.z * 100) / 100; //(vCurrent.z).toPrecision(4)
        var xCurrent = Math.round(vCurrent.x * 100) / 100; //(vCurrent.x).toPrecision(4)
        //Calculate direction of heading.
        //triad-handling //todo, reduce to a single check on 'tri'
        if(nextPlate.name.indexOf('tne')>=0){ 
            nx.heroHeading="north";
            headingVector.z=1;
            nx.orbyMesh.position.x -=3;
            console.log('tne -3')
        }
        else if(nextPlate.name.indexOf('tnw')>=0){ 
            nx.heroHeading="north";
            headingVector.z=1;
            nx.orbyMesh.position.x +=3;
            console.log('tnw +3')
        }
        else if(nextPlate.name.indexOf('tse')>=0){ 
            nx.heroHeading="south";
            headingVector.z=-1;
            nx.orbyMesh.position.x -=3;
            console.log('tse -3')
        }
        else if(nextPlate.name.indexOf('tsw')>=0){ 
            nx.heroHeading="south";
            headingVector.z=-1;
            nx.orbyMesh.position.x +=3;
            console.log('tsw +3')
        }
        else if(nextPlate.name.indexOf('bne')>=0){ 
            nx.heroHeading="north";
            headingVector.z=1;
            nx.orbyMesh.position.x +=3;
            console.log('bne +3')
        }
        else if(nextPlate.name.indexOf('bnw')>=0){ 
            nx.heroHeading="north";
            headingVector.z=1;
            nx.orbyMesh.position.x -=3;
            console.log('bnw -3')
        }
        else if(nextPlate.name.indexOf('bse')>=0){ 
            nx.heroHeading="north";
            headingVector.z=1;
            nx.orbyMesh.position.x -=3;
            console.log('bse - 3')
        }
        else if(nextPlate.name.indexOf('bsw')>=0){ 
            nx.heroHeading="north";
            headingVector.z=1;
            nx.orbyMesh.position.x +=3;
            console.log('bsw +3')
        }
        // if(vNext.z>vCurrent.z){​​
        // if(zNext>zCurrent){
        else if(zNext>zCurrent){
            nx.heroHeading="north";
            headingVector.z=1;
            // zAxisOffset++;
        // }else if (vNext.x>vCurrent.x){
        }else if (xNext>xCurrent){
            nx.heroHeading="east";
            headingVector.x=1;
            // xAxisOffset++;
        // }else if (vNext.z<vCurrent.z){
        }else if (zNext<zCurrent){
            nx.heroHeading="south";
            headingVector.z=-1;
            // zAxisOffset--;
        // }else if (vNext.x<vCurrent.x){
        }else if (xNext<xCurrent){
            nx.heroHeading="west";
            headingVector.x=-1;
            // xAxisOffset--
        }
        else{
            //triad-handling
         
        }
        console.log('STEP: Set Heading: '+nx.heroHeading)
    }


//end setheading-------------------------------------

//--AFTER-RENDER------------------------------------

    var deltaTheta = Math.PI/256;
    var initGravity = false; 
    var elevation = 0;
    var framebreak = false;
    var planetROTCNT = 0;
    // nx.scene.registerBeforeRender(function() {
    // nx.scene.registerAfterRender(function() {
    nx.afterRenderGravityHandler = function(){

        //todo check if this needs a damper or shut off in zone
        // return; //refactor nx.orbyMesh
        
        if(framebreak){
            debugger; //deprecated?
            return;
        }
        //#2 - AnimateMovement collision gravity..
        // if(!newPlate && nx.anmz.orby.move.fwd && !nx.worldOrbiting){

            // nx.animateMovement(); //removed
        // } //added

        // if(newPlate || nx.worldOrbiting && !freeCameraMode){//todo remove freecameramode
        // if(newPlate || nx.worldOrbiting){
        //     return; //TEST ORBITANM rotworld worldrot
        //     // newPlate=false; //added
        //     console.log('STEP 3: '+'animate planetoid');
        //     planetROTCNT++;
        //     nx.animatePlanetoid();
        //     nx.orbyOrbitPOS();
        //     return; //addded
        // }

        if(!nx.worldOrbiting){
            //TODO dampen this or put in zone, it is expensive to constantly check level.
            // if(nx.anmz.orby.move.fwd){ ///doublecheck fwd - do not fire if not moving.
            var ray;
            var hitInfo = []; //todo move up and rename.

            var WORLDHEIGHTRAY = 120;//255; //120
                    // Cast ray for height
                // var ray = new BABYLON.Ray( //TODO do not fire ray if not moving.
                ray = new BABYLON.Ray( //TODO do not fire ray if not moving.
                    new BABYLON.Vector3(
                        nx.orbyMesh.position.x, 
                        nx.orbyMesh.position.y,
                        nx.orbyMesh.position.z),
                    new BABYLON.Vector3(0, -1, 0), // Ray-Direction   
                    WORLDHEIGHTRAY); //length
                var worldInverse = new BABYLON.Matrix();
                nx.alphaMoon1.top.getWorldMatrix().invertToRef(worldInverse); //todo removable?
                
                //TODO: do not shoot ray if not moving and if not near border.
                // var hitInfo = ray.intersectsMeshes(
                hitInfo = ray.intersectsMeshes(
                    [nx.alphaMoon1.top, nx.alphaMoon1.tn, nx.alphaMoon1.north, nx.alphaMoon1.bn, nx.alphaMoon1.bottom, nx.alphaMoon1.bs, nx.alphaMoon1.south, nx.alphaMoon1.ts,
                    nx.alphaMoon1.east, nx.alphaMoon1.west, nx.alphaMoon1.te, nx.alphaMoon1.tw, nx.alphaMoon1.be, nx.alphaMoon1.bw,
                    nx.alphaMoon1.mne, nx.alphaMoon1.mnw, nx.alphaMoon1.mse, nx.alphaMoon1.msw,
                    nx.alphaMoon1.tne, nx.alphaMoon1.tnw, nx.alphaMoon1.tse, nx.alphaMoon1.tsw,
                    nx.alphaMoon1.bne, nx.alphaMoon1.bnw, nx.alphaMoon1.bse, nx.alphaMoon1.bsw]);

            // } //end if fwd


            // if(hitInfo.length > 1){console.log('double touch!')}
            // if(!hitInfo.length){
                // freeCameraMode = true;
                //TODO FIX over looping this???
                // console.log('zero hits') //removed
            // } //todo remove this. NOLOOP.

            // if(hitInfo.length && nx.anmz.orby.move.fwd){ //TICK 2: INITIAL DE-ORBIT PHASE.
            if(hitInfo.length){ //TICK 2: INITIAL DE-ORBIT PHASE.
                // console.log('OrbyMesh Z ', nx.orbyMesh.position.z);
                // if(nx.orbyMesh.position.z> 600){
                //     console.log('positive');
                // }
                //normal testing.
                // var normal = hitInfo[0].getNormal(true);
                //#4- Detect Plate State, and increment if new.
                // nextPlate = hitInfo[0].pickedMesh.name;
                nextPlate = hitInfo[0].pickedMesh; //TODO possiblysimplify, by just checking not assigning nextPlate.
                // if(nextPlate.name==="biplatebn"){debugger;}//FIX

                if(nx.orbyPlateLanding){
                    // debugger; //not obsolete?
                    // END: ORBYPOS, cam pos world rot SNAPSHOT
                    // modAlphaMoon.js:256 OrbyPOS Vector3 {x: 633.6730972747803, y: 6.173075817108156, z: -55.7919382956641}
                    // modAlphaMoon.js:257 CamPOS Vector3 {x: 764.6113704397221, y: 53.177006530761716, z: -68.07951697822006}
                    // modAlphaMoon.js:258 worldROT Quaternion {x: 6.410702056087229e-18, y: -2.655399735964416e-18, z: -0.38268343236509006, w: 0.9238795325112874}
                    // mod2dtxt.js:1297 
                    console.log('END: ORBYPOS, cam pos world rot SNAPSHOT')
                    console.log('OrbyPOS',nx.orbyMesh.position);
                    console.log('CamPOS',nx.scene.activeCamera.position);
                    console.log('worldROT',nx.plateMaster1.rotationQuaternion);


                    
                    nx.orbyPlateLanding=false;
                    lastPlate = currentPlate;
                    currentPlate=nextPlate;
                    nx.ui.flashCanvasMSG({txt:'EPISODE '+currentPlate.name,txtIcon:'',dur:4000,txtAlign:''});  
                    nx.initFollowCam(); //redo
                    // console.log('init landing cam');
                    nx.anmz.orby.jump.fallMode=1; //FIX: inform physics we are falling-.
                    setTimeout(function(){
                        //CALCULATE: SmoothCam Rotation based on Heading-.
                        var rotOff=0;
                        if(nx.heroHeading==='north'){ rotOff = 0;
                        }else if (nx.heroHeading==='east'){ rotOff = 90;
                        }else if (nx.heroHeading==='south'){ rotOff = 180;
                        }else if (nx.heroHeading==='west'){ rotOff = 270;
                        }
         
                        //redo
                        nx.initSmoothCam( {delay:-1,
                            heightOffset:5,radius:15, 
                            heightOffsetUp:5,radiusUp:15, 
                            heightOffsetDwn:5,radiusDwn:15,
                            initSpeed:0.022, rotOff:rotOff
                        });
                    },3000);

                    nx.setAxisOffsets(); //todo?

                    return;
                }


                if(!nextPlate || !currentPlate){debugger; return;} //todo fix?
                // if(!nextPlate || !nextPlate.name || !currentPlate || !currentPlate.name){return;} //error on skydive landing-.
                // if(nextPlate.name!=currentPlate.name && !nx.worldOrbiting && !freeCameraMode){ //TICK1: NewPlate.
                if(nextPlate.name!=currentPlate.name && !nx.worldOrbiting){ //TICK1: NewPlate.
                console.log('STEP: NEWPLATE: '+nextPlate.name); 
                    nx.setHeroHeading();
                    lastPlate = currentPlate;
                    currentPlate=nextPlate;
                    // if(nextPlate.name==="biplatebn"){debugger;}
                    // lastNormal = normal;
                    // console.log('STEP: '+'NewPlate true');
                    planetROTCNT=0;
                    newPlate = true;
                }
                //  else if (newPlate){ //TICK2: TODO only set newPlate false once. //Same-Plate state.
                //     // debugger;
                //     console.log('STEP 2: '+'SamePlate: NewPlate false');
                //     newPlate = false; //Terrestrial Mode.
                // }
                //#5 Elevate y or x or z or x and z positions.
                // var x = hitInfo[0].getBoundingInfo().boundingBox.maximumWorld.y + 1
                // if(newPlate && !freeCameraMode){
                if(newPlate){
                        
                    console.log('STEP 1: '+'lean forward'); //TEST ORBITANM

// debugger;
                    newPlate = false;
                    nx.worldOrbiting=true;


                    // START: ORBYPOS, cam pos world rot SNAPSHOT
                    // modAlphaMoon.js:292 OrbyPOS Vector3 {x: -680.8757490401715, y: -2.500335064448336, z: -55.7919382956641}
                    // modAlphaMoon.js:293 CamPOS Vector3 {x: -652.259422642244, y: 19.4274811646171, z: -82.87710238592416}
                    // modAlphaMoon.js:294 worldROT Quaternion {x: 6.938893903907228e-18, y: 0, z: 0, w: 1.0000000000000004}

                    console.log('START: ORBYPOS, cam pos world rot SNAPSHOT')
                    console.log('OrbyPOS',nx.orbyMesh.position);
                    console.log('CamPOS',nx.scene.activeCamera.position);
                    console.log('worldROT',nx.plateMaster1.rotationQuaternion);
                    nx.alphaMoon1.startOrbitANM(function endOrbitANM(){
                        // console.log('end animation');
                        // nx.worldOrbiting = false;

                        // nx.orbyPlateLanding=true;


//                         var ray;
//                         var hitInfo = []; //todo move up and rename.
            
//                         var WORLDHEIGHTRAY = 120;//255; //120
//                                 // Cast ray for height
//                             // var ray = new BABYLON.Ray( //TODO do not fire ray if not moving.
//                             ray = new BABYLON.Ray( //TODO do not fire ray if not moving.
//                                 new BABYLON.Vector3(
//                                     nx.orbyMesh.position.x, 
//                                     nx.orbyMesh.position.y,
//                                     nx.orbyMesh.position.z),
//                                 new BABYLON.Vector3(0, -1, 0), // Ray-Direction   
//                                 WORLDHEIGHTRAY); //length
//                             var worldInverse = new BABYLON.Matrix();
//                             nx.alphaMoon1.top.getWorldMatrix().invertToRef(worldInverse); //todo removable?
                            
//                             //TODO: do not shoot ray if not moving and if not near border.
//                             // var hitInfo = ray.intersectsMeshes(
//                             hitInfo = ray.intersectsMeshes(
//                                 [nx.alphaMoon1.top, nx.alphaMoon1.tn, nx.alphaMoon1.north, nx.alphaMoon1.bn, nx.alphaMoon1.bottom, nx.alphaMoon1.bs, nx.alphaMoon1.south, nx.alphaMoon1.ts,
//                                 nx.alphaMoon1.east, nx.alphaMoon1.west, nx.alphaMoon1.te, nx.alphaMoon1.tw, nx.alphaMoon1.be, nx.alphaMoon1.bw,
//                                 nx.alphaMoon1.mne, nx.alphaMoon1.mnw, nx.alphaMoon1.mse, nx.alphaMoon1.msw,
//                                 nx.alphaMoon1.tne, nx.alphaMoon1.tnw, nx.alphaMoon1.tse, nx.alphaMoon1.tsw,
//                                 nx.alphaMoon1.bne, nx.alphaMoon1.bnw, nx.alphaMoon1.bse, nx.alphaMoon1.bsw]);
            
//                             if(hitInfo.length){
//                                 // debugger;
//                                 currentPlate = hitInfo[0].pickedMesh;

//                                 nx.ui.flashCanvasMSG({txt:'EPISODE '+currentPlate.name,txtIcon:'',dur:4000,txtAlign:''});  
//                                 nx.anmz.orby.jump.fallMode=1; //FIX: inform physics we are falling-.
                               
// debugger;
//                                 nx.initSmoothCam( {delay:20000,heightOffset:5,radius:15 }); //nx.initLandingCam
//                                 // setTimeout(function(){ //after smoothcam landing
//                                 //     nx.camz.smoothCam.radius = 15; //distance from tgt: ground default-. 
//                                 //     nx.camz.smoothCam.heightOffset = 5; //distance above: ground default-.
//                                 // },1000);
                            
//                                 nx.setAxisOffsets(); //RESETS north east south variables
        
        


                            // }



                        // orbitCounter = 0;
                        // newPlate=false; //removed
                        // nx.orbyPlateLanding=true;
                    
                        // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
                    
                        // nx.orbyMesh.rotation = new BABYLON.Vector3(0, 0, 0);
                        // nx.anmz.orby.rig.originBox.rotationQuaternion = new BABYLON.Quaternion(0,0,0,0);
                        // nx.anmz.orby.rig.originBox.rotationQuaternion.copyFrom(nx.orbyMesh.rotationQuaternion);
                        
                        // console.log('STEP: '+'nx.worldOrbiting false');
                        // lastPlate = currentPlate;
                        // currentPlate=nextPlate;
                        // if(nextPlate.name==="biplatebn"){debugger;}
                    
                    
                        // nx.orbyPlateLanding=false;

                        // lastPlate = currentPlate;
                        // currentPlate=nextPlate;
                        // nx.ui.flashCanvasMSG({txt:'EPISODE '+currentPlate.name,txtIcon:'',dur:4000,txtAlign:''});  
                        // nx.anmz.orby.jump.fallMode=1; //FIX: inform physics we are falling-.
                       
                    
                        // nx.setAxisOffsets(); //RESETS north east south variables




                    });

                    return;



                        // newPlate = false; //added //Terrestrial Mode.

                    //todo add back
                    // console.log('SET FOLLOW CAM');
                    nx.initFollowCam(); //set orbit cam-.
                    nx.camz.followCam.maxCameraSpeed = 500;
                    nx.camz.followCam.cameraAcceleration = 0.8;
                    

                // if(newPlate){
                    // rect.position = rect.position.add(normal)
                    // rect.lookAt(rect.position.add(normal), 0, 0, 0); //box on end, yaw, pitch, roll,  
                    // rect.lookAt(rect.position.add(normal), 0, Math.PI / 2, 0); //box upside down
                    // rect.lookAt(rect.position.add(normal), 0, 0, Math.PI / 2); //box flat
                            // debugger;
                            nx.orbyMesh.rotation = new BABYLON.Vector3(0.5, 0, 0); //didn't rotate???? or derotated??? Hangin in air until worldmoving...
                            nx.anmz.orby.jumpAction(); //added





                } else if (nx.worldOrbiting) {
                    debugger; //deprecated?

                    //#6 deorbit: y-elevator, z-declinator, x-derotator,
                    // var moveX = parseFloat(Math.sin(parseFloat(rect.rotation.y))) / 1; //divided sin cos speed reduction 0.5 fast /0.9 slow
                    // var moveZ = parseFloat(Math.cos(parseFloat(rect.rotation.y))) / 1;
                    // var moveX2 = parseFloat(Math.sin(parseFloat(rect.rotation.y))) / 1; //divided sin cos speed reduction 0.5 fast /0.9 slow
                    // var moveZ2 = parseFloat(Math.cos(parseFloat(rect.rotation.y))) / 1;
                    // console.log('STEP 4: '+'y-elevator, on plate: '+currentPlate.name);
                    // nx.orbyMesh.position.y = currentPlate.getBoundingInfo().boundingBox.maximumWorld.y + 1;//- 4;//even y; //+ 1
                    // // nx.orbyMesh.position.y = hitInfo[0].pickedPoint.y+1;//even y; //+ 1


                    // // var SCALE_MODIFIER = 105;
                    // var SCALE_MODIFIER = 35; //35 works on 1st scaled up with 35 plateMaster.

                    // //Hero-Heading-XZOffset. Retrograde positioning.
                    // if(heroHeading==='north'){
                    //     nx.orbyMesh.position.z = currentPlate.getBoundingInfo().boundingBox.minimumWorld.z + 25 + SCALE_MODIFIER;//north
                    //     // console.log('STEP: set Z-Offset: +25')
                    // }else if (heroHeading==='east'){
                    //     nx.orbyMesh.position.x = currentPlate.getBoundingInfo().boundingBox.maximumWorld.x +SCALE_MODIFIER;;     //even(fix)     //zeast
                    //     // console.log('STEP: set X-Offset: even ')
                    // }else if (heroHeading==='south'){
                    //     nx.orbyMesh.position.z = currentPlate.getBoundingInfo().boundingBox.maximumWorld.z - 25 -SCALE_MODIFIER;; 
                    //     // console.log('STEP: set Z-Offset: -25 ')
                    // }else if (heroHeading==='west'){
                    //     nx.orbyMesh.position.x = currentPlate.getBoundingInfo().boundingBox.maximumWorld.x - 25 -SCALE_MODIFIER;     //west
                    //     // console.log('STEP: set X-Offset: -25')
                    // }
                    // else{
                    //     console.log('WARNING: no XZ offset: '+heroHeading)
                    // }

                } 
                // else if (!nx.worldOrbiting && nx.anmz.orby.move.fwd) { //TICK1: PRE-ORBIT and LANDING PHASE. not rotated, not orbited, not deorbited.
                //         //todo do not derotate if not coming from rotated state... todo move to moment of state change.
                //         debugger; //depricated? no...
                //         console.log('STEP: '+'lean back.'); //TODO remove this from flat fwd movement loop.
                //         nx.orbyMesh.rotation = new BABYLON.Vector3(0, 0, 0); //LANDING-ROTATION-!
                //         // freeCameraMode = false;
                // } else if (nx.anmz.orby.move.fwd) { //Elevation State.
                //     debugger; //depricated? no?
                //     console.log('STEP: '+'ALTERNATIVE Y?');
                //     nx.orbyMesh.position.y = hitInfo[0].pickedPoint.y + 1 //do not set if not moving. //todo remove?
                // } 
                // else {
                //     // debugger; //depricated? getting hit on first fall
                // // console.log('fellout: neither plate nor moving')
                // // freeCameraMode = true;
                // }
            } //end hit info hit 
            // else { //no hit
            //     //removed
            //     // console.log('WARNING: fellout no movement: '+hitInfo.length +'   '+ nx.anmz.orby.move.fwd  )
            // }
        } 
        // else if(nx.worldOrbiting){ //added
        //     console.log('STEP 4: '+'y-elevator, on plate: '+currentPlate.name);
        //     nx.orbyMesh.position.y = currentPlate.getBoundingInfo().boundingBox.maximumWorld.y + 1;//- 4;//even y; //+ 1
        //     // nx.orbyMesh.position.y = hitInfo[0].pickedPoint.y+1;//even y; //+ 1


        //     // var SCALE_MODIFIER = 105;
        //     var SCALE_MODIFIER = 35; //35 works on 1st scaled up with 35 plateMaster.

        //     //Hero-Heading-XZOffset. Retrograde positioning.
        //     if(heroHeading==='north'){
        //         nx.orbyMesh.position.z = currentPlate.getBoundingInfo().boundingBox.minimumWorld.z + 25 + SCALE_MODIFIER;//north
        //         // console.log('STEP: set Z-Offset: +25')
        //     }else if (heroHeading==='east'){
        //         nx.orbyMesh.position.x = currentPlate.getBoundingInfo().boundingBox.maximumWorld.x +SCALE_MODIFIER;;     //even(fix)     //zeast
        //         // console.log('STEP: set X-Offset: even ')
        //     }else if (heroHeading==='south'){
        //         nx.orbyMesh.position.z = currentPlate.getBoundingInfo().boundingBox.maximumWorld.z - 25 -SCALE_MODIFIER;; 
        //         // console.log('STEP: set Z-Offset: -25 ')
        //     }else if (heroHeading==='west'){
        //         nx.orbyMesh.position.x = currentPlate.getBoundingInfo().boundingBox.maximumWorld.x - 25 -SCALE_MODIFIER;     //west
        //         // console.log('STEP: set X-Offset: -25')
        //     }
        //     else{
        //         console.log('WARNING: no XZ offset: '+heroHeading)
        //     }

        // }
    } //END-AFTER-RENDER-.


nx.alphaMoon1.startOrbitANM = function(endOrbitANMfn){
    console.log('START orbit anm'); 

        // START: ORBYPOS, cam pos world rot SNAPSHOT
        // modAlphaMoon.js:292 OrbyPOS Vector3 {x: -680.8757490401715, y: -2.500335064448336, z: -55.7919382956641}
        // modAlphaMoon.js:293 CamPOS Vector3 {x: -652.259422642244, y: 19.4274811646171, z: -82.87710238592416}
        // modAlphaMoon.js:294 worldROT Quaternion {x: 6.938893903907228e-18, y: 0, z: 0, w: 1.0000000000000004}


    //NEW STARTING POINT
    nx.initFreeCam(); //redo
    nx.camz.freeCam.setTarget(nx.orbyMesh.position);


    // nx.scene.activeCamera.position = new BABYLON.Vector3(2227.33, 4906.14, -4110.71); //START CAM POS
    // nx.camz.freeCam.setTarget(new BABYLON.Vector3( 1710.03, 4383.98, -3805.48));
    // nx.camz.freeCam.maxZ = 15000; //todo perf reduce this later, FIX?
    // //-------ANM: CAM-ZOOM-Reverse Orbit-.
    // $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). 
    // animate({cx:-652,cy:53,cz:-55},{queue:false,duration:6000,easing:'swing',
    // step: function(now) {
    //     if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
    //     nx.camz.freeCam.position.x = this.cx;
    //     nx.camz.freeCam.position.y = this.cy;
    //     nx.camz.freeCam.position.z = this.cz;
    //     nx.camz.freeCam.setTarget(nx.orbyMesh.position);
    //         // nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
    //     },complete:function(){ 
    //         endOrbitANMfn();
    //         //-------ANM: CAM-ZOOM-TO EYEPIECE-.
    //         // $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). 
    //         // animate({cx:1329.77,cy:4105.48,cz:-3819.54},{queue:false,duration:4000,easing:'linear',
    //         //     step: function(now) {
    //         //        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-. 
    //         //         nx.camz.freeCam.position.x = this.cx;
    //         //         nx.camz.freeCam.position.y = this.cy;
    //         //         nx.camz.freeCam.position.z = this.cz;
    //         //         nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
    //         //     },complete:function(){ 
    //         //         // nx.createPurpleNebula1();
    //         //         // nx.vortexSeqIdx[1] = {on:1}
    //         //         // debugger;
    //         //         nx.cinematicMode = 0; //sequence to sequence-.
    //         //         nx.runCinematicSequence("VortexSequence");
    //         //     }
    //         // });
    //     }
    // });

// debugger; 

    //-------CALCULATE: orby movement by heading.
    // var xPOS = 0, yPOS=100, zPOS=-1310, xOFF=0, yOFF=50, zOFF=-50;
    var xPOS = 0, yPOS=0, zPOS=0, xOFF=0, yOFF=0, zOFF=0;
    if(nx.heroHeading==='north'){
        xPOS = 0; yPOS=100; zPOS=-1310; xOFF=0; yOFF=30; zOFF=-50;
    }else if (nx.heroHeading==='east'){
        xPOS =-1310; yPOS=100; zPOS=0; xOFF=50; yOFF=30; zOFF=0;
    }else if (nx.heroHeading==='south'){
        xPOS = 0; yPOS=100; zPOS=1310; xOFF=0; yOFF=30; zOFF=50;
    }else if (nx.heroHeading==='west'){
        xPOS =1310; yPOS=100; zPOS=0; xOFF=-50; yOFF=30; zOFF=0;
    }

    //-------ANM: Orby REVERSE Orbit-.
    $({cx:nx.orbyMesh.position.x,cy:nx.orbyMesh.position.y,cz:nx.orbyMesh.position.z})
    .animate({cx:nx.orbyMesh.position.x+xPOS,cy:nx.orbyMesh.position.y+yPOS,cz:nx.orbyMesh.position.z+zPOS},{queue:false,duration:3000,easing:'swing',
        step: function(now) {
            if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
            nx.orbyMesh.position.x = this.cx;
            nx.orbyMesh.position.y = this.cy;
            nx.orbyMesh.position.z = this.cz;
            nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  
            nx.camz.freeCam.position.x = this.cx + xOFF;
            nx.camz.freeCam.position.y = this.cy + yOFF;
            nx.camz.freeCam.position.z = this.cz + zOFF;
            nx.camz.freeCam.setTarget(nx.orbyMesh.position);
                // nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
        },complete:function(){ 


            nx.worldOrbiting = false;
            nx.orbyPlateLanding=true;

            // endOrbitANMfn();
            //-------ANM: CAM-ZOOM-TO EYEPIECE-.
            // $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z}). 
            // animate({cx:1329.77,cy:4105.48,cz:-3819.54},{queue:false,duration:4000,easing:'linear',
            //     step: function(now) {
            //        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.vortexSeqIdx[1]={on:1}; return;}//CINEMA-STOP-. 
            //         nx.camz.freeCam.position.x = this.cx;
            //         nx.camz.freeCam.position.y = this.cy;
            //         nx.camz.freeCam.position.z = this.cz;
            //         nx.camz.freeCam.setTarget(new BABYLON.Vector3( -1515, 1234, -2141));
            //     },complete:function(){ 
            //         // nx.createPurpleNebula1();
            //         // nx.vortexSeqIdx[1] = {on:1}
            //         // debugger;
            //         nx.cinematicMode = 0; //sequence to sequence-.
            //         nx.runCinematicSequence("VortexSequence");
            //     }
            // });
        }
    });

    
    // END: ORBYPOS, cam pos world rot SNAPSHOT
    // modAlphaMoon.js:256 OrbyPOS Vector3 {x: 633.6730972747803, y: 6.173075817108156, z: -55.7919382956641}
    // modAlphaMoon.js:257 CamPOS Vector3 {x: 764.6113704397221, y: 53.177006530761716, z: -68.07951697822006}
    // modAlphaMoon.js:258 worldROT Quaternion {x: 6.410702056087229e-18, y: -2.655399735964416e-18, z: -0.38268343236509006, w: 0.9238795325112874}
    // mod2dtxt.js:1297 

    //--------------- ANM: PLANET ROTATION ---------SPECIAL ANM FN-. 
    var tgtROT = Math.PI/4, tgtCNT=0, orbitDamper=0;
    nx.scene.registerBeforeRender(function planetoidOrbit() {
        if(++orbitDamper%20!=0){return} //DECIDAMPER-.
        tgtCNT += nx.alphaMoon1.orbitPlanetoid();
        if(tgtCNT>=tgtROT){ console.log('removing orbitLOOP'); nx.scene.unregisterBeforeRender(planetoidOrbit); } //UNLOAD-LOOP!
    });





}//end orbitanm fn

nx.alphaMoon1.orbitPlanetoid = function(){

    // if(nx.heroHeading!='north'){debugger;} //todo
    var orbitRate=0,orbitCounter=0;
    // if(nx.heroHeading==='north'){
    //     orbitRate = -1*Math.PI/28;//znorth
    //     orbitCounter += (-1* orbitRate) //zNorthZ
    // }
    //World-ORBIT: set rotation direction.
// if(xAxisOffset===0){ //Xorbit.
// if(xAxisOffset===0&&zAxisOffset===0){ //Xorbit.
    if(nx.heroHeading==='north'){
        orbitRate = -1*Math.PI/28;//znorth
        orbitCounter += (-1* orbitRate) //zNorthZ
        // console.log('AAANorth  -1')
    }else if (nx.heroHeading==='east'){
        orbitRate = 1*Math.PI/28;//zsouth
        orbitCounter += orbitRate; //zSouthZ
        // console.log('AAAEast  +1')
    }else if (nx.heroHeading==='south'){
        orbitRate = 1*Math.PI/28;
        orbitCounter += orbitRate; 
        // console.log('AAASouth  +1')
    }else if (nx.heroHeading==='west'){
        orbitRate = -1*Math.PI/28;
        orbitCounter += (-1* orbitRate); 
        // console.log('AAAWest  -1')
    }
// } else if(zAxisOffset===0){ //Zorbit.
// } else if(zAxisOffset&&xAxisOffset===0){ //Zorbit.
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('BBBNorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('BBBEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('BBBSouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('BBBWest  -1')
//     }
// } else if(xAxisOffset&&zAxisOffset===0){ //Zorbit.
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('CCCNorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('CCCEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('CCCSouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('CCCWest  -1')
//     }
// } else if (xAxisOffset===2 || xAxisOffset===-2 || zAxisOffset===2 || zAxisOffset===-2){
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('DDDNorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('DDDEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('DDDSouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('DDDWest  -1')
//     }
// }else if (xAxisOffset&&zAxisOffset){
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('EEENorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('EEEEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('EEESouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('EEEWest  -1')
//     }
// }
//     else{
//         console.log("EEE: no orbit heading - x - y- "+nx.heroHeading   +' '+xOffset    +' '+ zOffset   );
//     }
// }

    //RUN-ROTATION-GAUNTLET-.
    if(nx.heroHeading==='north'||nx.heroHeading==='south'){
        nx.alphaMoon1.top.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.north.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.south.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.east.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.west.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bottom.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tn.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.ts.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.te.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bn.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bs.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.be.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.mne.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.mnw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.mse.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.msw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tne.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tnw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tse.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tsw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bne.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bsw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bnw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bse.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
        nx.plateMaster1.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
    } else if(nx.heroHeading==='east'||nx.heroHeading==='west'){
        nx.alphaMoon1.top.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        // nx.ground.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);

        nx.alphaMoon1.north.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.south.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.east.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.west.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bottom.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tn.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.ts.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.te.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bn.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bs.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.be.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.mne.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.mnw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.mse.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.msw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tne.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tnw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tse.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.tsw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bne.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bsw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bnw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.alphaMoon1.bse.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        // console.log('STEP: orbit '+nx.heroHeading+' on Z by rate: '+orbitRate)
        //---ground-rotations--------------------------------------------
        // groundTop.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        // nx.alphaMoonMaster1.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
        nx.plateMaster1.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
    }
    
    return orbitCounter;

}//end orbit planetoid


nx.orbyOrbitPOS = function(){
        
        // console.log(planetROTCNT);
        // // if(planetROTCNT>=11){
        // if(planetROTCNT>=8){
        //     // debugger;
        //     //orbydrop
        //     nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.
        //     return;
        // }

        // STEP: NEWPLATE: biplatebn error on 25.
        console.log('STEP 4: '+'y-elevator, on plate: '+currentPlate.name);
        var FALLHEIGHT = 25; //15
        nx.orbyMesh.position.y = currentPlate.getBoundingInfo().boundingBox.maximumWorld.y + FALLHEIGHT;//+1;//- 4;//even y; //FIX too high rerotate?
        // nx.orbyMesh.position.y = hitInfo[0].pickedPoint.y+1;//even y; //+ 1

        // var SCALE_MODIFIER = 144; //144 works on 100 scaled plateMaster.
        var SCALE_MODIFIER = 22; //adjusted for orby drop.
        // var SCALE_MODIFIER = 11; //adjusted for orby drop.

        
        var DISTANCE_MODIFIER = 170;//150; //25;
        // var SCALE_MODIFIER = 105;
        // var SCALE_MODIFIER = 40; //35 works on 1st scaled up with 35 plateMaster.
        // var SCALE_MODIFIER = 0; //35 works on 1st scaled up with 35 plateMaster.

        //Hero-Heading-XZOffset. Retrograde positioning.
        if(nx.heroHeading==='north'){
            nx.orbyMesh.position.z = currentPlate.getBoundingInfo().boundingBox.minimumWorld.z + DISTANCE_MODIFIER + SCALE_MODIFIER;//north
            // console.log('STEP: set Z-Offset: +25')
        }else if (nx.heroHeading==='east'){
            nx.orbyMesh.position.x = currentPlate.getBoundingInfo().boundingBox.maximumWorld.x +SCALE_MODIFIER + 50;     //even(fix)     //zeast
            // console.log('STEP: set X-Offset: even ')
        }else if (nx.heroHeading==='south'){
            nx.orbyMesh.position.z = currentPlate.getBoundingInfo().boundingBox.maximumWorld.z - DISTANCE_MODIFIER -SCALE_MODIFIER +50;
            // console.log('STEP: set Z-Offset: -25 ')
        }else if (nx.heroHeading==='west'){
            nx.orbyMesh.position.x = currentPlate.getBoundingInfo().boundingBox.maximumWorld.x - DISTANCE_MODIFIER -SCALE_MODIFIER +50;     //west
            // console.log('STEP: set X-Offset: -25')
        }
        else{
            console.log('WARNING: no XZ offset: '+nx.heroHeading)
        }

        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //test

    }

    // } //added removed
    /*********************************CREATE-ASSETS******************************/
    nx.createMoonAssets = function() {

        var assetsManager = new BABYLON.AssetsManager(nx.scene); //todo
        // nx.assetsManager = assetsManager;
        //----ASSETS-MANAGER--------------Loading Indicator
        // nx.engine.loadingUIText = "Welcome to Anym~Scape...";

        //AUDIO
        //--createSound()----------------------------------------------------------------------------
        // nx.createSound(assetsManager); // load and start off backgroundSound

                //ground
        nx.createMoon(assetsManager);
        // nx.createGround(assetsManager);


        var meshTask = assetsManager.addMeshTask("gravitycube1", "", "./copyrightnetcinematics/3d/", "cubeagon3.babylon");
        // var meshTask = assetsManager.addMeshTask("gravitycube1", "", "../anyms/", "cubeagon3.babylon");
        meshTask.onSuccess = function (task) {
            //World-Compiler
            for(var i = 0;i<task.loadedMeshes.length;i++){
                // task.loadedMeshes[i].setPivotMatrix(BABYLON.Matrix.Translation(0, 100, 0)); //set pivot


            // task.loadedMeshes[i].position.y = 100;
            // task.loadedMeshes[i].scaling.x  = 44;
            // task.loadedMeshes[i].scaling.y  = 44;
            // task.loadedMeshes[i].scaling.z  = 44;
            // task.loadedMeshes[i].position.y = 100;

            // task.loadedMeshes[i].scaling.x  = 14.5; //originals
            // task.loadedMeshes[i].scaling.y  = 14.5;
            // task.loadedMeshes[i].scaling.z  = 14.5;
            task.loadedMeshes[i].visibility = 1;

                var e = task.loadedMeshes[i];

                // e.scaling= new BABYLON.Vector3(30,30,30) //SCALE_MODIFIER;

                // e.scaling = new BABYLON.Vector3(100,100,100)
                e.scaling = new BABYLON.Vector3(98,98,98)
                // e.parent = nx.alphaMoonMaster1;
                e.parent = nx.plateMaster1;
                e.position = new BABYLON.Vector3(0,0,0);
                // e.position = new BABYLON.Vector3(0,-812,0);
                // e.position = new BABYLON.Vector3(0,-830,0);

        
                // e.position.y = 100;
                // e.visibility = 0.4;
                if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(e);} //TODO turn off when under zone
                if(e.name.indexOf('top')>=0){ 
                    nx.alphaMoon1.top = e;
                    // nx.alphaMoon1.top.scaling = new BABYLON.Vector3(1,1,1)
                    // nx.alphaMoon1.top.position.y = 0;
                    
                    var gmat = new BABYLON.StandardMaterial("mat1", nx.scene); //MAT------------------------------------------------.
                    gmat.alpha = 1.0; gmat.backFaceCulling = true;
                    gmat.diffuseColor = new BABYLON.Color3(0.1, 0.2, 0.4); //blue
                    gmat.specularColor = new BABYLON.Color3(0, 0, 0.66);
                    var gtexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
                    gtexture.vScale = 1.0; //How many images span the surface.
                    gtexture.uScale = 30.0; //Lots of images squashed and stretched makes an interesting effect-.
                    gmat.diffuseTexture = gtexture;
                    
                    nx.alphaMoon1.top.material = gmat;
                    
                    if(nx.ground){
                        console.log('PARENT1');
                        // nx.ground.parent = nx.plateMaster1;
                        nx.ground.parent = nx.alphaMoon1.top;
                        nx.ground.position = new BABYLON.Vector3(0,8.32,0);
                        // debugger; //does nothing? nx.plateMaster1.sca
                        // nx.ground.scaling.copyFrom({x: 0.01023, y: 0.01023, z: 0.01023}) //good scale in space
                        nx.ground.scaling.copyFrom({x: 0.0102, y: 0.0102, z: 0.0102}) //good scale in space
                        // nx.ground.scaling = new BABYLON.Vector3(0.0104,0.0104,0.0104)
                        // nx.plateMaster1.scaling = new BABYLON.Vector3(0.01,0.01,0.01)
                    }
                    // if(nx.ground){nx.ground.parent = nx.alphaMoon1.top;}
                    // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.alphaMoon1.top);} //TODO turn off when under zone
                }
                        

                if(e.name.indexOf('north')>=0){ nx.alphaMoon1.north = e}
                if(e.name.indexOf('east')>=0){ nx.alphaMoon1.east = e}
                if(e.name.indexOf('south')>=0){ nx.alphaMoon1.south = e}
                if(e.name.indexOf('west')>=0){ nx.alphaMoon1.west = e}
                if(e.name.indexOf('bottom')>=0){ nx.alphaMoon1.bottom = e}
                    //--------------------------------------bi-plates
                if(e.name.indexOf('biplatebn')>=0){ nx.alphaMoon1.bn = e}
                if(e.name.indexOf('biplatebe')>=0){ nx.alphaMoon1.be = e}
                if(e.name.indexOf('biplatebs')>=0){ nx.alphaMoon1.bs = e}
                if(e.name.indexOf('biplatebw')>=0){ nx.alphaMoon1.bw = e}
                if(e.name.indexOf('biplatetn')>=0){ nx.alphaMoon1.tn = e}
                if(e.name.indexOf('biplatete')>=0){ nx.alphaMoon1.te = e}
                if(e.name.indexOf('biplatets')>=0){ nx.alphaMoon1.ts = e}
                if(e.name.indexOf('biplatetw')>=0){ nx.alphaMoon1.tw = e}
                //---------------------------------------------middles
                if(e.name.indexOf('mne')>=0){ nx.alphaMoon1.mne = e}
                if(e.name.indexOf('mnw')>=0){ nx.alphaMoon1.mnw = e}
                if(e.name.indexOf('mse')>=0){ nx.alphaMoon1.mse = e}
                if(e.name.indexOf('msw')>=0){ nx.alphaMoon1.msw = e}
                //-----------------------------------------------triads
                if(e.name.indexOf('tne')>=0){ nx.alphaMoon1.tne = e}
                if(e.name.indexOf('tnw')>=0){ nx.alphaMoon1.tnw = e}
                if(e.name.indexOf('tse')>=0){ nx.alphaMoon1.tse = e}
                if(e.name.indexOf('tsw')>=0){ nx.alphaMoon1.tsw = e}
                if(e.name.indexOf('bne')>=0){ nx.alphaMoon1.bne = e}
                if(e.name.indexOf('bnw')>=0){ nx.alphaMoon1.bnw = e}
                if(e.name.indexOf('bse')>=0){ nx.alphaMoon1.bse = e}
                if(e.name.indexOf('bsw')>=0){ nx.alphaMoon1.bsw = e}
            }   
        }
        assetsManager.load();  // IMPORTANT.

        //----END- ASSETS-MANAGER--------------Loading Indicator
    }
    // /*********************************END-CREATE-ASSETS******************************/

    /********************************-CREATE-GROUND-*******************************/
    var groundTop, groundNorth, groundEast, groundSouth, groundWest, groundBottom;
    // nx.alphaMoonMaster1; 
    // var cubePlanetoid1; 
    // nx.createGround = function(assetsManager){
    nx.createMoon = function(assetsManager){
        
        // nx.alphaMoonMaster1 = new BABYLON.Mesh("pivot", nx.scene);
        // nx.alphaMoonMaster1.scaling = new BABYLON.Vector3(6,6,6);  //SCALE_MODIFIER;
        
        nx.plateMaster1 = new BABYLON.Mesh("pivot", nx.scene);
        // nx.plateMaster1.scaling = new BABYLON.Vector3(14.5,14.5,14.5);  //SCALE_MODIFIER;

        // nx.plateMaster1.scaling = new BABYLON.Vector3(35,35,35);  //SCALE_MODIFIER; //MID
        // nx.plateMaster1.position.y = -300;

        // nx.plateMaster1.scaling = new BABYLON.Vector3(90,90,90);
        // nx.plateMaster1.position.y = -800
        // debugger;
        nx.plateMaster1.scaling = new BABYLON.Vector3(100,100,100); //FIX???
        // nx.plateMaster1.scaling = new BABYLON.Vector3(1,1,1);
        nx.plateMaster1.position.y = -832; //drop of 16.
        nx.plateMaster1.position.y = -9; //TODO what????
        nx.plateMaster1.position.y = 0; //TODO what????
        
        var WORLDHEIGHT = -8.24;
        nx.plateMaster1.setPivotPoint(new BABYLON.Vector3(0, WORLDHEIGHT, 0)); //spacewaverider pivot
        


        // groundTop = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "./copyrightnetcinematics/3d/heightMap_marz5a.png", 185, 185, 250, 0, 10, nx.scene, true);   
        // groundTop.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0)); //set pivot
        // var groundTopMaterial = new BABYLON.StandardMaterial("groundMat", nx.scene);
        // // groundTopMaterial.diffuseTexture = new BABYLON.Texture("../anyms/scapes/tileElectro5.jpg", nx.scene); //exceptional in blue light pinktricity.
        // groundTopMaterial.diffuseTexture = new BABYLON.Texture("./copyrightnetcinematics/3d/tileElectro5.jpg", nx.scene); //exceptional in blue light pinktricity.
        // groundTopMaterial.diffuseTexture.uScale = 15; //smaller number = larger tile.
        // groundTopMaterial.diffuseTexture.vScale = 15;
        // groundTop.material = groundTopMaterial;   
        // // groundTop.checkCollisions = true; //TODO? removable?
        // groundTop.position = new BABYLON.Vector3(0, 118, 0);
        // groundTop.parent = nx.alphaMoonMaster1;
        
        // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(groundTop);} //TODO turn off when under zone


    //    //FlatIrons
    //     // var mtTaskFLI = assetsManager.addMeshTask("mttaskfli", "", "../anyms/scapes/", "flatirons4.babylon");
    //     var mtTaskFLI = assetsManager.addMeshTask("mttaskfli", "", "./copyrightnetcinematics/3d/", "flatirons4.babylon");
    //         mtTaskFLI.onSuccess = function (task) {
    //         groundSouth = task.loadedMeshes[0];
    //         groundSouth.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0)); //set pivot
    //         groundSouth.rotation.x=-1.63;
    //         groundSouth.position = new BABYLON.Vector3(-60,-90,-40);
    //         groundSouth.checkCollisions = true;
    //         groundSouth.scaling.x  = 1.5;
    //         groundSouth.scaling.y  = 1.5;
    //         groundSouth.scaling.z  = 1.5;
    //         groundSouth.parent = nx.alphaMoonMaster1;
    //         // task.loadedMeshes[0].position = new BABYLON.Vector3(-100,-75,-300);
    //         // task.loadedMeshes[0].checkCollisions = true;
    //         // task.loadedMeshes[0].scaling.x  = 1;
    //         // task.loadedMeshes[0].scaling.y  = 1;
    //         // task.loadedMeshes[0].scaling.z  = 1;
    //     }
    //    //MT. Evans
    //     // var mtTask = assetsManager.addMeshTask("mttask1", "", "../anyms/scapes/", "mtevans7.babylon");
    //     var mtTask = assetsManager.addMeshTask("mttask1", "", "./copyrightnetcinematics/3d/", "mtevans7.babylon");
    //         mtTask.onSuccess = function (task) {
    //         groundNorth = task.loadedMeshes[0];
    //         groundNorth.rotation.x=1.635;
    //         groundNorth.position = new BABYLON.Vector3(-60,90,-80);
    //         groundNorth.checkCollisions = true;
    //         groundNorth.scaling.x  = 1.3;
    //         groundNorth.scaling.y  = 1.3;
    //         groundNorth.scaling.z  = 1.3;
    //         groundNorth.parent = nx.alphaMoonMaster1;
    //         groundNorth.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0)); //set pivot
    //         // task.loadedMeshes[0].position = new BABYLON.Vector3(-190,-220,70);
    //         // task.loadedMeshes[0].checkCollisions = true;
    //         // task.loadedMeshes[0].scaling.x  = 1;
    //         // task.loadedMeshes[0].scaling.y  = 1;
    //         // task.loadedMeshes[0].scaling.z  = 1;
    //     }


    //     //LongsPeak
    //     // var mtTask = assetsManager.addMeshTask("mttask2", "", "../anyms/scapes/", "longspeak7.babylon");
    //     var mtTask = assetsManager.addMeshTask("mttask2", "", "./copyrightnetcinematics/3d/", "longspeak7.babylon");
    //     mtTask.onSuccess = function (task) {
    //         groundWest = task.loadedMeshes[0];
    //         groundWest.position = new BABYLON.Vector3(-22,-30,-80);
    //         groundWest.checkCollisions = true; //todo removable?
    //         groundWest.rotation.z= 1.7;
    //         groundWest.scaling.x  = 1.3;
    //         groundWest.scaling.y  = 1.3;
    //         groundWest.scaling.z  = 1.3;
    //         groundWest.parent = nx.alphaMoonMaster1;
    //         groundWest.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0)); //set pivot
    //     }
    }
    /*******************************************CONTROLS************************************/
    // nx.hyperVectorPrev = function(){
    //     hyperVectorIndex = (hyperVectorIndex-1<=0)?hyperVectors.length:hyperVectorIndex-1;
    //     var angle = hyperVectors[hyperVectorIndex];
    //     nx.sceneFreeCamera.position = new BABYLON.Vector3(angle.pos.x,angle.pos.y,angle.pos.z);
    //     nx.sceneFreeCamera.setTarget( new BABYLON.Vector3(angle.tar.x,angle.tar.y,angle.tar.z));
    // }
    // nx.hyperVectorNext = function(){
    //     hyperVectorIndex = (hyperVectorIndex+1>=hyperVectors.length)?0:hyperVectorIndex+1;
    //     var angle = hyperVectors[hyperVectorIndex];
    //     nx.sceneFreeCamera.position = new BABYLON.Vector3(angle.pos.x,angle.pos.y,angle.pos.z);
    //     nx.sceneFreeCamera.setTarget( new BABYLON.Vector3(angle.tar.x,angle.tar.y,angle.tar.z));
    // }
    // nx.hyperLocate = function(){
    //     // var p = nx.sceneFreeCamera.position, t = nx.sceneFreeCamera.getTarget();
    //     var p = nx.scene.activeCamera.position, t = nx.scene.activeCamera.getTarget();
    //     var pose = {pos:{x:Math.round(p.x),y:Math.round(p.y),z:Math.round(p.z)},tar:{x:Math.round(t.x),y:Math.round(t.y),z:Math.round(t.z)}};
    //     var poseStr = "{pos:"+JSON.stringify(pose.pos)+", tar:"+JSON.stringify(pose.tar)+'}';
    //     console.log(poseStr)
    //     return pose; 
    //     //{pos:nx.sceneFreeCamera.position,tgt:nx.sceneFreeCamera.getTarget()};
    //     // return {pos:nx.sceneFreeCamera.position,tgt:nx.sceneFreeCamera.getTarget()};
    // }

    //MODULE-READY-RENDERER-MECHANISMO-.
    nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
        //--createAssets()----------------------------------------------------------------------------
        // nx.createAssets(); //Add more mesh
        nx.createMoonAssets(); //Add more mesh

      //--afterRender()-----Animations-------------------------------------------------------------
      var frameCounter = 0;
      var updateEvery = 100; // frames
      var timePause = false;
    //   setTimeout(function(){
          // nx.anmz.orby.move.fwd = 1; //start automated movement
    //   },5000)
    //   nx.scene.registerAfterRender(function() {
      nx.scene.registerBeforeRender(function() {
        // return; //refactor nx.anmz.orby.move
          if(nx.scene.isReady()){  //todo use this more often - it was false for many times
              if(!initGravity){
                  //#1 Initial-Gravity.
                  nx.initCubeGravity();
                  initGravity = true;
                  console.log('init gravity');
              } else {
                //   console.log('running');
                      if(nx.anmz.orby.move.fwd || nx.worldOrbiting){
                          if(!timePause){
                              timePause = true;
                            //   console.log('play.')
                              //show frame and pause.
                              nx.afterRenderGravityHandler();
                              //delay every frame.
                              setTimeout(function(){
                                  timePause = false;
                              },3000);//1000) //reset this so see slower orbit
                          }else{
                              // console.log('paused.')
                          }
                      } else {
                          // console.log('pre-orbit')
                          //show every frame.
                          nx.afterRenderGravityHandler();
                      }
              }
          }
      });
      //-------------------------------------------------------------------------------------------


//*****************************PLANETOID-FALLING-ANIMATION****************************
var orbitLimit =  0.78; //Math.PI / 2;  //total amount to rotate
// var deorbitRate = 0.6;         // amount to move each frame.
var orbitCounter = 0;          // incremented amount across frames.
var orbitRate = 0;             // calculation of orbit, based on direction.
// var orbitDirection;            // vector direction of orbit
//*****************************END-PLANETOID-FALLING-ANIMATION****************************
// nx.animatePlanetoid = function(){
// console.log('animatePlanetoid',orbitCounter)
// debugger; //obsolete?

// if(orbitCounter>=orbitLimit){ //STOP-ORBIT-ANM-.
//     debugger; //obsolete?
//     // nx.initFollowCam(); //reset default cam-.
//     console.log("STEP: stop orbit - reached limit.",orbitLimit)
//     orbitCounter = 0;
//     // newPlate=false; //removed
//     nx.orbyPlateLanding=true;

//     // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);  //MATCH centerBox to Mesh. IMPROVED Cube Jump.

//     // nx.orbyMesh.rotation = new BABYLON.Vector3(0, 0, 0);
//     // nx.anmz.orby.rig.originBox.rotationQuaternion = new BABYLON.Quaternion(0,0,0,0);
//     // nx.anmz.orby.rig.originBox.rotationQuaternion.copyFrom(nx.orbyMesh.rotationQuaternion);
    
//     nx.worldOrbiting = false;
//     // console.log('STEP: '+'nx.worldOrbiting false');
//     lastPlate = currentPlate;
//     currentPlate=nextPlate;
//     // if(nextPlate.name==="biplatebn"){debugger;}



   

//     nx.setAxisOffsets();
//     return; //stop planet animation
// }else{
// //todo remove instanciation from render loops

//     //World-ORBIT: set rotation direction.
// // if(xAxisOffset===0){ //Xorbit.
// if(xAxisOffset===0&&zAxisOffset===0){ //Xorbit.
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('AAANorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('AAAEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('AAASouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('AAAWest  -1')
//     }
// // } else if(zAxisOffset===0){ //Zorbit.
// } else if(zAxisOffset&&xAxisOffset===0){ //Zorbit.
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('BBBNorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('BBBEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('BBBSouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('BBBWest  -1')
//     }
// } else if(xAxisOffset&&zAxisOffset===0){ //Zorbit.
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('CCCNorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('CCCEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('CCCSouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('CCCWest  -1')
//     }
// } else if (xAxisOffset===2 || xAxisOffset===-2 || zAxisOffset===2 || zAxisOffset===-2){
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('DDDNorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('DDDEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('DDDSouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('DDDWest  -1')
//     }
// }else if (xAxisOffset&&zAxisOffset){
//     if(nx.heroHeading==='north'){
//         orbitRate = -1*Math.PI/28;//znorth
//         orbitCounter += (-1* orbitRate) //zNorthZ
//         // console.log('EEENorth  -1')
//     }else if (nx.heroHeading==='east'){
//         orbitRate = 1*Math.PI/28;//zsouth
//         orbitCounter += orbitRate; //zSouthZ
//         // console.log('EEEEast  +1')
//     }else if (nx.heroHeading==='south'){
//         orbitRate = 1*Math.PI/28;
//         orbitCounter += orbitRate; 
//         // console.log('EEESouth  +1')
//     }else if (nx.heroHeading==='west'){
//         orbitRate = -1*Math.PI/28;
//         orbitCounter += (-1* orbitRate); 
//         // console.log('EEEWest  -1')
//     }
// }
//     else{
//         console.log("EEE: no orbit heading - x - y- "+nx.heroHeading   +' '+xOffset    +' '+ zOffset   );
//     }
// }

// // console.log('SET FOLLOW CAM');
// // nx.initFollowCam(); //set orbit cam-. //reset
// // nx.camz.followCam.maxCameraSpeed = 500;
// // nx.camz.followCam.cameraAcceleration = 0.8;


// nx.worldOrbiting = true;

//     // if(nx.heroHeading==='north'){y

//     if(nx.heroHeading==='north'||nx.heroHeading==='south'){
//         nx.alphaMoon1.top.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.north.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.south.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.east.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.west.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bottom.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tn.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.ts.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.te.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bn.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bs.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.be.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.mne.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.mnw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.mse.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.msw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tne.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tnw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tse.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tsw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bne.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bsw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bnw.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bse.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//         nx.plateMaster1.rotate(BABYLON.Axis.X,orbitRate, BABYLON.Space.WORLD);
//     } else if(nx.heroHeading==='east'||nx.heroHeading==='west'){
//         nx.alphaMoon1.top.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         // nx.ground.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);

//         nx.alphaMoon1.north.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.south.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.east.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.west.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bottom.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tn.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.ts.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.te.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bn.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bs.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.be.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.mne.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.mnw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.mse.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.msw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tne.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tnw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tse.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.tsw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bne.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bsw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bnw.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.alphaMoon1.bse.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         // console.log('STEP: orbit '+nx.heroHeading+' on Z by rate: '+orbitRate)
//         //---ground-rotations--------------------------------------------
//         // groundTop.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         // nx.alphaMoonMaster1.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//         nx.plateMaster1.rotate(BABYLON.Axis.Z,orbitRate, BABYLON.Space.WORLD);
//     }
// // } 
// // else if(zOffset===-1, xOffset===0, yOffset===0;){

// // }
// else {
//     console.log('Warning: no rotation.')
// }

//  //TODO: plates into nx.alphaMoon1.plates[];


// // nx.displayMeshAxis(nx.alphaMoon1.top); //removed


// }
//*****************************END-PLANETOID-ANIMATIONS****************************

    }); //schedule in manifest for ready callback-.
    nx.setMasterManifest(); //signal success and await-.

// } //catch (e) { console.log('hi!')}