/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No complete distribution without permission.
//For full distribution opportunities contact alpinefalcon@protonmail.com or netcinematics@protonmail.com. 
// If you want to use this code, great. No implied warranty. - (clean) MIT Open-source templates available.
//Contact alpinefalcon@protonmail.com for collaboration opportunities, affiliations, and future ventures.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('CAMZ module-loaded')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
if(!nx.camz){nx.camz={}}
/******************************-MODULE-**********************************/

/*********************************- SMART-CAMZ -******************************/
//TODO move all smart cams up to CAM MODULE-.
var zoneBoxCamBoom1;
var boomCamSpeed = 0.5; //Speed-.
var focalPoint = 0;
var camTrack_yMAX = 100; 
var camTrack_followOffset = 10;

/************************************************-GLOBAL-CAMZ-**********************************************************/ 
nx.initFollowCam = function(){ //FollowCam to whirl around to follow.
    if(!nx.camz.followCam){nx.camz.followCam = new BABYLON.FollowCamera("followCam1", new BABYLON.Vector3(0, 50, -50) , nx.scene);}
    nx.camz.followCam.radius = 35; //25//10 //distance from tgt: ground default-. 
    nx.camz.followCam.heightOffset = 12; //8 //30 //distance above: ground default-.
    // nx.camz.followCam.upperHeightOffsetLimit = 12;
    nx.camz.followCam.rotationOffset = 0; //-120; //rotation around origin
    nx.camz.followCam.cameraAcceleration = 0.005; //0.007 //amount cam moves, 0 to avoid jank-.
    nx.camz.followCam.maxCameraSpeed = 4;  //max accelleration
    nx.camz.followCam.position.copyFrom(nx.scene.activeCamera.position);
    nx.camz.followCam.lockedTarget = nx.orbyMesh;
    nx.scene.activeCamera = nx.camz.followCam;
    selectCamBtn('#camBtn1')
    $('#renderCanvas').css({"border-color": "steelblue", "border-width":"1px", "border-style":"solid"});
}
nx.initSmartCam = function(){ //FollowCam to whirl around to follow.
    nx.initFollowCam();
    // nx.camz.followCam.lockedTarget = nx.orbyMesh.camFocusTgt;
    // nx.SmartCamFaceTime=0;
    nx.SmartCamLoopDamper=0;
    // nx.scene.activeCamera.name = 'smartCam';
    nx.scene.registerBeforeRender(function activeCamLoop(){ //Check orby TILT to raise CAM-.
        if(++nx.SmartCamLoopDamper%10!=0){return} //DECIDAMPER-.
        if(nx.scene.activeCamera.name!='FollowCam1'){ nx.scene.unregisterBeforeRender(activeCamLoop); } //Auto Unload Loop
        if(nx.anmz.orby.isIdle() ){
            if(!nx.faceCamTimer){
                console.log('FACECAM start timer');
                nx.faceCamTimer = setTimeout(function(){
                    console.log('FACECAM set');
                    nx.camz.followCam.radius = 20;//25; //distance from tgt-.
                    nx.camz.followCam.heightOffset = 8; //distance above-.
                    nx.camz.followCam.rotationOffset = -120; //rotation around origin to FACE-.
                    nx.camz.followCam.cameraAcceleration = 0.008 //amount cam moves   
                },4000);
            }
        }
        else if(nx.anmz.orby.rig.tiltSphere.position.y-nx.anmz.orby.rig.downSphere.position.y>2){ //console.log('UPCAM');
            nx.camz.followCam.cameraAcceleration = 0.01; //0.007 //amount cam moves, 0 to avoid jank-.
            nx.camz.followCam.rotationOffset = 0;
            nx.camz.followCam.heightOffset = 22; //distance above: ground default-.
            nx.camz.followCam.radius = 44;
            if(nx.faceCamTimer){clearTimeout(nx.faceCamTimer); nx.faceCamTimer=0;}
        }else if(nx.anmz.orby.rig.tiltSphere.position.y-nx.anmz.orby.rig.downSphere.position.y<1){ //console.log('DWNCAM');
            nx.camz.followCam.cameraAcceleration = 0.04; //0.007 //amount cam moves, 0 to avoid jank-.
            nx.camz.followCam.rotationOffset = 0;
            nx.camz.followCam.heightOffset = 44; //distance above: ground default-.
            nx.camz.followCam.radius = 30;
            if(nx.faceCamTimer){clearTimeout(nx.faceCamTimer); nx.faceCamTimer=0;}
        }else{  //console.log('FLATCAM');
            nx.camz.followCam.cameraAcceleration = 0.009; //0.007 //amount cam moves, 0 to avoid jank-.
            nx.camz.followCam.heightOffset = 10; //12 //distance above: ground default-.
            nx.camz.followCam.rotationOffset = 0;
            nx.camz.followCam.radius = 15; //20
            if(nx.faceCamTimer){clearTimeout(nx.faceCamTimer); nx.faceCamTimer=0;}
        }
    });
}

nx.initSmoothCam = function(config){ //FollowCam to whirl around to follow.
    // console.log('followcam1')
    var SMOOTHCAMDELAY = (config && config.delay)? config.delay: 4000;
    var SMOOTHCAMHEIGHTOFF = (config && config.heightOffset) ? config.heightOffset: 10; 
    var SMOOTHCAMHEIGHTUP = (config && config.heightOffsetUp) ? config.heightOffsetUp: 22; 
    var SMOOTHCAMHEIGHTDWN = (config && config.heightOffsetDwn) ? config.heightOffsetDwn: 44; 
    var SMOOTHCAMRAD = (config && config.radius) ? config.radius: 15; //35; 
    var SMOOTHCAMRADUP = (config && config.radiusUp) ? config.radiusUp: 44; 
    var SMOOTHCAMRADDWN = (config && config.radiusDwn) ? config.radiusDwn: 30; 
    var SMOOTHCAMINITSPEED = (config && config.initSpeed) ? config.initSpeed: 0.005; 
    var SMOOTHCAMROTOFF = (config && config.rotOff) ? config.rotOff: 0; 
    // debugger;
    if(!nx.camz.smoothCam){nx.camz.smoothCam = new BABYLON.FollowCamera("smoothCam1", new BABYLON.Vector3(0, 0, -50) , nx.scene);}
    // nx.camz.smoothCam.radius = 25; //20;//10; //30; //distance from tgt-.
    nx.camz.smoothCam.radius = SMOOTHCAMRAD; //35; //distance from tgt: ground default-. 
    nx.camz.smoothCam.heightOffset = SMOOTHCAMHEIGHTOFF;// 12; //distance above: ground default-.
    // nx.camz.smoothCam.upperHeightOffsetLimit = 12;
    // nx.camz.smoothCam.heightOffset = 8; //30; //2; //distance above-.
    nx.camz.smoothCam.rotationOffset = SMOOTHCAMROTOFF;//0; //-120; //rotation around origin
    nx.camz.smoothCam.cameraAcceleration = SMOOTHCAMINITSPEED; //0.005; //0.007 //amount cam moves, 0 to avoid jank-.
    // nx.scene.activeCamera.cameraAcceleration = 0.04
    nx.camz.smoothCam.maxCameraSpeed = 4;  //max accelleration
    nx.camz.smoothCam.position.copyFrom(nx.scene.activeCamera.position);
    // nx.camz.smoothCam.lockedTarget = nx.orbyMesh;
    nx.orbyMesh.camFocusTgt.position.copyFrom({x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y+5,z:nx.orbyMesh.position.z});
    nx.camz.smoothCam.lockedTarget = nx.orbyMesh.camFocusTgt;
    nx.scene.activeCamera = nx.camz.smoothCam;
    selectCamBtn('#camBtn1')
    $('#renderCanvas').css({"border-color": "steelblue", "border-width":"1px", "border-style":"solid"});
// }

    if(nx.faceCamTimer){clearTimeout(nx.faceCamTimer); nx.faceCamTimer=0;}
// nx.initSmartCam = function(){ //FollowCam to whirl around to follow.
    // nx.initFollowCam();
    // nx.SmoothCamFaceTime=0;
    if(SMOOTHCAMDELAY>0){
        nx.SmoothCamLoopDamper=0;
        // nx.scene.activeCamera.name = 'smartCam';
        nx.scene.registerBeforeRender(function activeCamLoop(){ //Check orby TILT to raise CAM-.
            if(++nx.SmoothCamLoopDamper%10!=0){return} //DECIDAMPER-.
            if(nx.scene.activeCamera.name!='smoothCam1'){ nx.scene.unregisterBeforeRender(activeCamLoop); } //Auto Unload Loop
            if(nx.anmz.orby.isIdle() ){
                if(!nx.faceCamTimer){
                    console.log('FACECAM start timer');
                    nx.faceCamTimer = setTimeout(function(){
                        console.log('FACECAM set');
                        if(nx.scene.activeCamera===nx.camz.faceCam){return;} //init-once-no-anm.
                        if(!nx.camz.faceCam){ nx.camz.faceCam = new BABYLON.FollowCamera("faceCam1", new BABYLON.Vector3(0, 50, -50) , nx.scene);  }
                        nx.camz.faceCam.radius = 25;//20; //distance from tgt-.
                        // nx.camz.faceCam.heightOffset = 20; //distance above-.
                        nx.camz.faceCam.heightOffset = 8; //distance above-.
                        nx.camz.faceCam.rotationOffset = -120; //rotation around origin to FACE-.
                        nx.camz.faceCam.cameraAcceleration = 0.01 //amount cam moves
                        nx.camz.faceCam.maxCameraSpeed = 4;  //max accelleration
                        nx.camz.faceCam.position.copyFrom(nx.scene.activeCamera.position);
                        nx.camz.faceCam.lockedTarget = nx.orbyMesh;
                        nx.scene.activeCamera = nx.camz.faceCam;

                        nx.scene.registerBeforeRender(function revertSmoothCam(){ //Check orby TILT to raise CAM-.
                            // if(++nx.SmoothCamLoopDamper%10!=0){return} //DECIDAMPER-.
                            if(nx.anmz.orby.move.fwd){ 
                                console.log('reinit cam');
                                nx.scene.unregisterBeforeRender(revertSmoothCam); 
                                nx.initSmoothCam();
                            } //Auto Unload Loop
                    
                        });
                        // nx.camz.smoothCam.radius = 12;//25; //distance from tgt-.
                        // nx.camz.smoothCam.heightOffset = 0; //distance above-.
                        // // nx.camz.smoothCam.rotationOffset = -120; //rotation around origin to FACE-.
                        // nx.camz.smoothCam.cameraAcceleration = 0.008 //amount cam moves   
                    },SMOOTHCAMDELAY);
                }
            }
            else if(nx.anmz.orby.rig.tiltSphere.position.y-nx.anmz.orby.rig.downSphere.position.y>2){ //console.log('UPCAM');
                nx.camz.smoothCam.cameraAcceleration = 0.01; //0.007 //amount cam moves, 0 to avoid jank-.
                nx.camz.smoothCam.rotationOffset = 0;
                nx.camz.smoothCam.heightOffset = SMOOTHCAMHEIGHTUP;//22; //distance above: ground default-.
                nx.camz.smoothCam.radius = SMOOTHCAMRADUP;//44;
                if(nx.faceCamTimer){clearTimeout(nx.faceCamTimer); nx.faceCamTimer=0;}
            }else if(nx.anmz.orby.rig.tiltSphere.position.y-nx.anmz.orby.rig.downSphere.position.y<1){ //console.log('DWNCAM');
                nx.camz.smoothCam.cameraAcceleration = 0.04; //0.007 //amount cam moves, 0 to avoid jank-.
                nx.camz.smoothCam.rotationOffset = 0;
                nx.camz.smoothCam.heightOffset = SMOOTHCAMHEIGHTDWN;//44; //distance above: ground default-.
                nx.camz.smoothCam.radius = SMOOTHCAMRADDWN;//30;
                if(nx.faceCamTimer){clearTimeout(nx.faceCamTimer); nx.faceCamTimer=0;}
            }else{ // console.log('FLATCAM');
                nx.camz.smoothCam.cameraAcceleration = 0.009; //0.007 //amount cam moves, 0 to avoid jank-.
                nx.camz.smoothCam.heightOffset = SMOOTHCAMHEIGHTOFF; //10; //12 //distance above: ground default-.
                nx.camz.smoothCam.rotationOffset = 0;
                nx.camz.smoothCam.radius = SMOOTHCAMRAD;//15; //20
                if(nx.faceCamTimer){clearTimeout(nx.faceCamTimer); nx.faceCamTimer=0;}
            }
        });
    }//end if SMOOTHCAMDELAY
}

nx.initFaceCam = function(){ //FollowCam to whirl around to face.
    // debugger;
    // console.log('facecam1')
    if(nx.scene.activeCamera===nx.camz.faceCam){return;} //init-once-no-anm.
    if(!nx.camz.faceCam){ nx.camz.faceCam = new BABYLON.FollowCamera("faceCam1", new BABYLON.Vector3(0, 50, -50) , nx.scene);  }
    nx.camz.faceCam.radius = 25;//20; //distance from tgt-.
    // nx.camz.faceCam.heightOffset = 20; //distance above-.
    nx.camz.faceCam.heightOffset = 8; //distance above-.
    nx.camz.faceCam.rotationOffset = -120; //rotation around origin to FACE-.
    nx.camz.faceCam.cameraAcceleration = 0.01 //amount cam moves
    nx.camz.faceCam.maxCameraSpeed = 4;  //max accelleration
    nx.camz.faceCam.position.copyFrom(nx.scene.activeCamera.position);
    nx.camz.faceCam.lockedTarget = nx.orbyMesh;
    nx.scene.activeCamera = nx.camz.faceCam;
    selectCamBtn('#camBtn2')
    $('#renderCanvas').css({"border-color": "purple", "border-width":"1px", "border-style":"solid"});
} 

nx.initOrthoCam = function(){
    if(nx.scene.activeCamera===nx.camz.orthoCam){return;} //init-once-no-anm.
    if(!nx.camz.orthoCam){ nx.camz.orthoCam = new BABYLON.FreeCamera("orthoCam", new BABYLON.Vector3(0, 5, -10), nx.scene); }
    nx.camz.orthoCam.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
    nx.camz.orthoCam.orthoTop = 15;
    nx.camz.orthoCam.orthoBottom = -15;
    nx.camz.orthoCam.orthoLeft = -15;
    nx.camz.orthoCam.orthoRight = 15;
    nx.camz.orthoCam.position.copyFrom(nx.scene.activeCamera.position);
    // nx.camz.orthoCam.setTarget(new BABYLON.Vector3());
    nx.camz.orthoCam.lockedTarget = nx.orbyMesh;
    nx.scene.activeCamera = nx.camz.orthoCam;
    orthoCam.attachControl(nx.canvas, true);
}

nx.frustumCAM = 1; //ability for FREECAM to jump back to Orby after moving out of FRUSTUM
nx.initFreeCam = function(){ //
    nx.camz.freeCam = new BABYLON.FreeCamera('freeCam1', new BABYLON.Vector3(0, 0, 0), nx.scene); 
    nx.camz.freeCam.position.copyFrom(nx.scene.activeCamera.position);
    nx.camz.freeCam.setTarget( nx.orbyMesh.position ); //CAM:
    nx.frustumCamLoopDamper=0;
    nx.frustumTimer=0;
    nx.scene.registerBeforeRender(function freeCamFrustumLoop(){ //Check orby moving out of view, and switch.
        if(!nx.frustumCAM){return} //MUTE FRUSTUM CAM WITH nx.frustumCAM = 0;
        if(++nx.frustumCamLoopDamper%10!=0){return} //DECIDAMPER-.
        if(nx.scene.activeCamera.name!='freeCam1'){ nx.scene.unregisterBeforeRender(freeCamFrustumLoop); } //Auto Unload Loop
        if(!nx.frustumTimer && !nx.anmz.orby.isIdle() ){
            if(!nx.camz.freeCam.isCompletelyInFrustum(nx.orbyMesh)){
                console.log('START FRUSTUM TIMER');
                nx.frustumTimer = setTimeout(function(){ //dont reset cam right away.
                    console.log('END FRUSTUM TIMER');
                    if(!nx.camz.freeCam.isCompletelyInFrustum(nx.orbyMesh)){
                        console.log('SWITCH FRUSTUM CAM');
                        nx.initSmoothCam();
                    } else{  console.log('CANCEL FRUSTUM CAM'); }
                    if(nx.frustumTimer){clearTimeout(nx.frustumTimer); nx.frustumTimer=0;}
                },2000);
            }
        }
    });
    nx.camz.freeCam.attachControl(nx.canvas, true);
    nx.scene.activeCamera = nx.camz.freeCam; 
    selectCamBtn('#camBtn3')
    $('#renderCanvas').css({"border-color": "orange", "border-width":"1px", "border-style":"solid"});
} 
var selectCamBtn = function(camQuery){
	$('#camBtn1').removeClass('camSelector')
	$('#camBtn2').removeClass('camSelector')
	$('#camBtn3').removeClass('camSelector')
	$(camQuery).addClass('camSelector')
}

nx.initArcFollowCam = function(){

    //ARC-ROTATE-CAMERA-with Follow TGT.
    nx.camz.arcCam = new BABYLON.ArcRotateCamera("ArcFollowCam1",  0, 0, 0, new BABYLON.Vector3(0, 0, 0), nx.scene);
    // nx.camz.arcCam.setPosition(new BABYLON.Vector3(0, 50, 80)); //Negative Z-View-.
    // nx.camz.arcCam.setPosition(new BABYLON.Vector3(0, 50, -80)); //Positive Z-View-.
    nx.camz.arcCam.setPosition(new BABYLON.Vector3(50, 50, -50)); //Positive Z-View-.
    // nx.camz.arcCam.setTarget(BABYLON.Vector3.Zero());
    // nx.camz.arcCam.setTarget(new BABYLON.Vector3(0,6,0));
    nx.camz.arcCam.setTarget(nx.orbyMesh.position)
    nx.camz.arcCam.attachControl(nx.canvas, true);
    nx.camz.arcCam.lowerRadiusLimit = 15; //50Zoom-In-Depth stopper. 0 is close to center.
    nx.camz.arcCam.upperRadiusLimit = 2000; //Zoom-Out-Depth stopper. Do not escape skybox.
    nx.scene.activeCamera = nx.camz.arcCam; //BLACK-SCREEN FIX: avoids cam flicker


}

nx.initFreeFallCam = function(){ //Zip over to watch a fall from above.
    
    // if(nx.scene.activeCamera.name==='freeFallCam1'){return}
    if(!nx.camz.freeFallCam){nx.camz.freeFallCam = new BABYLON.FollowCamera("freeFallCam1", new BABYLON.Vector3(0, 50, -50) , nx.scene);}
    nx.camz.freeFallCam.radius = 10; //25//10 //distance from tgt: ground default-. 
    nx.camz.freeFallCam.heightOffset = 12; //8 //30 //distance above: ground default-.
    nx.camz.freeFallCam.upperHeightOffsetLimit = 12;
    nx.camz.freeFallCam.rotationOffset = 0; //-120; //rotation around origin
    nx.camz.freeFallCam.cameraAcceleration = 0.009; //0.007 //amount cam moves, 0 to avoid jank-.
    nx.camz.freeFallCam.maxCameraSpeed = 4;  //max accelleration
    nx.camz.freeFallCam.position.copyFrom(nx.scene.activeCamera.position);
    nx.camz.freeFallCam.lockedTarget = nx.orbyMesh;
    nx.scene.activeCamera = nx.camz.freeFallCam;


    // if(nx.scene.activeCamera.name==='freeFallCam1'){return}
    // if(!nx.camz.freeFallCam){nx.camz.freeFallCam = new BABYLON.FollowCamera("freeFallCam1", new BABYLON.Vector3(0, 50, -50) , nx.scene);}
    // nx.camz.freeFallCam.radius = 35; //25//10 //distance from tgt: ground default-. 
    // nx.camz.freeFallCam.heightOffset = 12;//12; //8 //30 //distance above: ground default-.
    // // nx.camz.freeFallCam.upperHeightOffsetLimit = 12;
    // nx.camz.freeFallCam.rotationOffset = 0; //-120; //rotation around origin
    // nx.camz.freeFallCam.cameraAcceleration = 0.05;// 0.005; //0.007 //amount cam moves, 0 to avoid jank-.
    // nx.camz.freeFallCam.maxCameraSpeed = 4;  //max accelleration
    // nx.camz.freeFallCam.position.copyFrom(nx.scene.activeCamera.position);
    // nx.camz.freeFallCam.lockedTarget = nx.orbyMesh;
    // // nx.camz.freeFallCam.lockedTarget = nx.orbyMesh.position;
    // // setTimeout(function(){ //delay activation-.
    //     // if(nx.anmz.orby.jump.fallMode){ //still falling
    //         // console.log('set fall cam');
    // nx.scene.activeCamera = nx.camz.freeFallCam;
    //         // debugger;
    //     // }else {console.log('did not set fall cam'); } 
    // // },1000);
    selectCamBtn('#camBtn1')
    $('#renderCanvas').css({"border-color": "steelblue", "border-width":"1px", "border-style":"solid"});
}

/************************************************-END-GLOBAL-CAMZ-**********************************************************/ 
nx.initBirdEyeCam= function(){}
nx.initBoomCam = function(){ //Get-CurrentCam-Point-Interpolate to start, then follow path to end-. LookAt tgt.
    if(!nx.camz.boomCam){ //init-once-.
        // console.log('boomcam1')
        // if(config.snap)
        // nx.camz.freeCam.position.copyFrom(nx.scene.activeCamera.position);
        nx.camz.boomCam = new BABYLON.FreeCamera('boomCam',new BABYLON.Vector3(0,30,10), nx.scene);
        //CAM-ZONE-.
        // zoneBoxCamBoom1 = {name:"boomCamZone",zm:20,zp:400,fn:function(){ initBoomCam();  } }; //zonePlane: on z+ greater than z20 , and less than z50.
        // nx.activeZonez.push(zoneBoxCamBoom1); //creates trigger on zone alarm-.
    }
    if (nx.scene.activeCamera!=nx.camz.boomCam){  
        // nx.scene.activeCamera = nx.camz.boomCam; nx.camz.boomCam.position = new BABYLON.Vector3(0,30,10); 
    } //re-init-.
    // if (nx.scene.activeCamera===nx.camz.boomCam){ return } //no anm
    // var fixTgtPlane = (nx.orbyMesh.position.y<10)? 3 : (nx.orbyMesh.position.y<50) ? 25 : 0;
    var focalY = (nx.orbyMesh.position.z<100)? 3 : (nx.orbyMesh.position.y<200) ? 30 : 0;
    if(focalPoint<focalY){focalPoint+=boomCamSpeed}
    else if(focalPoint>focalY){focalPoint-=boomCamSpeed}
    var fixCamTgt = new BABYLON.Vector3(nx.orbyMesh.position.x,focalPoint,nx.orbyMesh.position.z)
    nx.camz.boomCam.setTarget(fixCamTgt);
    // var fixCamTgt = new BABYLON.Vector3(nx.orbyMesh.position.x,fixTgtPlane,nx.orbyMesh.position.z)
    //ANM-CAM-MOVEMENT-ON-PLANE-.
    var absDiffPOS = Math.abs(nx.orbyMesh.position.z - nx.camz.boomCam.position.z)
    if( nx.orbyMesh.position.z > nx.camz.boomCam.position.z && absDiffPOS > camTrack_followOffset) { //WaitToGoCam: only go if tgt is ahead.
        // if(nx.camz.boomCam.position.z < 400){
        nx.camz.boomCam.position.z += boomCamSpeed;
        // } //MAX-HEIGHT- 
    } else if( absDiffPOS > camTrack_followOffset ) {  nx.camz.boomCam.position.z -= boomCamSpeed;      }//TODO return to stage-.
         if(nx.camz.boomCam.position.z<100){nx.camz.boomCam.position.y+=boomCamSpeed}
    else if(nx.camz.boomCam.position.z>100&&nx.camz.boomCam.position.z<150){nx.camz.boomCam.position.y-=boomCamSpeed}
    else if(nx.camz.boomCam.position.z>150&&nx.camz.boomCam.position.y<camTrack_yMAX){nx.camz.boomCam.position.y+=boomCamSpeed}
}



var initZoomInCam = function(){ } //zoom from passed point into face
var initZoomOutCam = function(){ //face cam then zoom to passed point
    // console.log('farcam1')
} //Snap or Anm, Cam FreeCamView to LongShot: n,e,s,w. 
// var initFaceCam = function(config){ //FollowCam to whirl around to face.

//TODO call this initSpotCam (pass in pos and tgt {})
var initLongCam = function(){ //longCam jump cut and pass point to jump to
    // console.log('longcam1')
    if(nx.camz.longCam){ nx.camz.longCam.setTarget(nx.orbyMesh.position); } //ANM-.
    if(nx.scene.activeCamera===nx.camz.longCam){return;} //init-once-no-anm.
    if(!nx.camz.longCam){ 
        // if(config.snap)
        // nx.camz.freeCam.position.copyFrom(nx.scene.activeCamera.position);
        nx.camz.longCam = new BABYLON.FreeCamera('longCam',startPOS, nx.scene);
    }
        var westCam = new BABYLON.Vector3(150,44,0)
        var startPOS = westCam;
        nx.camz.longCam.position = startPOS;
        // var fixTgtPlane = 10;//(nx.orbyMesh.position.y<10)? 3 : (nx.orbyMesh.position.y<50) ? 25 : 0;
        // var fixCamTgt = new BABYLON.Vector3(nx.orbyMesh.position.x,fixTgtPlane,nx.orbyMesh.position.z)
        //ANM-CAM-MOVEMENT-ON-PLANE-.
        // nx.camz.longCam.setTarget(fixCamTgt);
        // nx.scene.activeCamera = nx.camz.longCam;
} //FreeCam to Explore random points-.
// var initCornerCam = function(){} //FreeCam to see world from corners when tgt enters quads-.
var initLookAwayCam = function(){} //Follow look at orby face, then pan away
/*********************************- END-SMART-CAMZ -******************************/

/******************************************-CheckCamFrusturm-****************************/
nx.camz.checkCam = function(){ //when orby moves change to default cam if it was different-.

  //IN-VIEW-FRUSTURM?:  FOCUS-RESET only on FREECAM only not EDIT MODE-.
  // if(nx.scene.activeCamera.name==='freeCam1' && nx.tenKey.mode!='edit' &&  nx.anmz.orby.move.fwd && !nx.camz.freeCam.isCompletelyInFrustum(nx.orbyMesh)){ //orby offCam-.
  //     nx.initFollowCam();
  // } 
  //TODO: if freeCam and orby is not in view frustum, rotate cam toward orby, look at.
}

/************************************-SMOOTH-CAM-**************************/
nx.camz.smoothCamDamper = 0;
nx.camz.isSmoothCam = function(){
    // nx.orbyMesh.camFocusTgt.rotation.copyFrom(nx.orbyMesh.rotation);
    // nx.orbyMesh.camFocusTgt.rotation = nx.orbyMesh.rotation;
    // if(++nx.camz.smoothCamDamper%10!=0){return false} //DECIDAMPER-.
    // if(nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.jumpMode || nx.anmz.orby.jump.fallMode){return false}
    if(nx.scene.activeCamera.name === 'smoothCam1') return true;
    return false;
} 

nx.camz.nextSmoothPOS;
nx.camz.smoothCamPOS = [];
nx.camz.setSmoothCam = function(){
    nx.camz.smoothCamAvgX=0,nx.camz.smoothCamAvgY=0,nx.camz.smoothCamAvgZ=0;
    if(nx.anmz.orby.jump.preJumpMode || nx.anmz.orby.jump.jumpMode || nx.anmz.orby.jump.fallMode){
        if(!nx.camz.smoothCamPOS || !nx.camz.smoothCamPOS[nx.camz.smoothCamPOS.length-1]){return;}//FIX
        nx.camz.nextSmoothPOS = new BABYLON.Vector3.Zero().copyFrom({x:nx.orbyMesh.position.x,y:nx.camz.smoothCamPOS[nx.camz.smoothCamPOS.length-1].y,z:nx.orbyMesh.position.z})
    }else {
        nx.camz.nextSmoothPOS = new BABYLON.Vector3.Zero().copyFrom({x:nx.orbyMesh.position.x,y:nx.orbyMesh.position.y+5,z:nx.orbyMesh.position.z})
    }
    nx.camz.smoothCamPOS.push(nx.camz.nextSmoothPOS);
    if(nx.camz.smoothCamPOS.length > 3){ nx.camz.smoothCamPOS.shift(); } //remove old positions
    //Loop over all positions and set CAM FOC TGT to the average
    for(var i=0; i<nx.camz.smoothCamPOS.length; i++){
        nx.camz.smoothCamAvgX += nx.camz.smoothCamPOS[i].x;
        nx.camz.smoothCamAvgY += nx.camz.smoothCamPOS[i].y;
        nx.camz.smoothCamAvgZ += nx.camz.smoothCamPOS[i].z;
    }
    if(nx.camz.smoothCamPOS.length){
        nx.camz.smoothCamAvgX = nx.camz.smoothCamAvgX / nx.camz.smoothCamPOS.length;
        nx.camz.smoothCamAvgY = nx.camz.smoothCamAvgY / nx.camz.smoothCamPOS.length;
        nx.camz.smoothCamAvgZ = nx.camz.smoothCamAvgZ / nx.camz.smoothCamPOS.length;
        
        nx.orbyMesh.camFocusTgt.position.copyFrom({x:nx.camz.smoothCamAvgX,y:nx.camz.smoothCamAvgY,z:nx.camz.smoothCamAvgZ})
        nx.camz.smoothCam.lockedTarget = nx.orbyMesh.camFocusTgt; //FIX: losing on jump somehow
    }
}
        

// });