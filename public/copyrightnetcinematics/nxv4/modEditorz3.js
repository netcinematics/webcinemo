/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No complete distribution without permission.
//For full distribution opportunities contact alpinefalcon@protonmail.com or netcinematics@protonmail.com. 
// If you want to use this code, great. No implied warranty. - (clean) MIT Open-source templates available.
//Contact alpinefalcon@protonmail.com for collaboration opportunities, affiliations, and future ventures.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('a modEditorZ')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
if(!nx.editz){nx.editz={}}
/******************************-MODULE-**********************************/

/*******************************EDITORZ-.
- Select Node - green for editing. Blue edited.

\*****************************************/

/***************************************************************-TEN-KEY-CTRL-*****************************************************/
//GREEN-SCALE  PURPLE-CURVE RED Rotate Blue Transform
//5Key mode switch GAME - ANM - EDIT -
//deselect all edit selections
//reset edit to original.
//edit toggle btn through everything that can be edited
//next camera
//change camera in position lookAt, or FreeCam, or 
//save focus, last focus, orby focus, zero focus
//orbit around orby at current distance nx.pathLine.subMeshes[0]._distanceToCamera
//DELETE and DOUBLE POINT-.
//SLOWMO + - in anm mode
//CAM MOVE change 7&9 from y up down to the +- keys and make 7&9 look up look dwn. in edit mode
//edit mode * key while selecting 2 nodes - select inbetween.
/***********************************- TEN-KEY-CTRL -***********************************\
- use 10 Key ui to give yourself super powers in BABYLON!!! 
- use the 5 key to toggle between MODES
- the MODES (below) are: 'cam','edit','anm', also 'game'  
- extensible in many other ways.
\**************************************************************************************/
// nx.ctrl = {fwd:0,bwd:0,lft:0,rgt:0,up:0,dwn:0,lookup:0,lookdwn:0,mag:1} 
nx.ctrl = {num0:0,num1:0,num2:0,num3:0,num4:0,num5:0,num6:0,num7:0,asterisk:0,forwardslash:0,plus:0,minus:0,alt:0,mag:1} 
nx.tenKey={mode:'cam'};
nx.tenKeyCtrl = function(){
    if(nx.tenKey.nextmode){  //MODE-ITERATOR-.
            if(!nx.tenKey.mode){ 
                nx.tenKey.mode='cam'
                console.log('CAM-MODE')
            }else if(nx.tenKey.mode === 'cam' ){
                nx.tenKey.mode='edit'
                console.log('EDIT-MODE')
            }else if(nx.tenKey.mode === 'edit' ){
            //     nx.tenKey.mode='rot'
            // }else if(nx.tenKey.mode === 'rot' ){
                nx.tenKey.mode='anm'
                console.log('ANM-MODE')
            }else if(nx.tenKey.mode === 'anm' ){
                nx.tenKey.mode='cam'
                console.log('CAM-MODE')
            }
            // nx.ui.tenKeyTxt.html(nx.tenKey.mode)
            nx.tenKey.nextmode = 0;
        return;
    }
    //TODO put into the master editFn
    // if(nx.ctrl.asterisk && nx.tenKey.mode==='edit'){nx.ctrl.asterisk=0; //EDIT-RERENDER-EDIT-TARGET
        //PASS-EDITED-PATH-TO-MASTER-PIPE-.
        //--------------------------------------------------------------------------------------------EXPORT-PRINT-.
        // var vectorPath = [];
        // for(var i=0; i<nx.editPath.length;i++){
        //     vectorPath.push(new BABYLON.Vector3(nx.editPath[i].x,nx.editPath[i].y,nx.editPath[i].z))
        // }
        // renderMasterPipe(vectorPath);



        // // nx.renderConnectorPipe();

        // return;
    // }

    if(nx.ctrl.numenter){  
    	//DECRUMPLE-PATH-.
    	nx.editz.decomposePath();
    	return;
    }
    if(nx.ctrl.numdel){  //SET-WAYPOINT-.
        nx.createWayPoint();
        return;
    }

    //TODO: reduce these checks into modes - and avoid ALL modes when !editMode - except 5 key.

    if(nx.ctrl.asterisk && nx.tenKey.mode!='edit'){nx.ctrl.asterisk=0; //FOCUS-CAM on orby-.
        nx.scene.activeCamera.setTarget(nx.orbyMesh.position);
        return;
    }
    if(nx.ctrl.forwardslash && nx.tenKey.mode!='edit'){nx.ctrl.forwardslash=0; //FOCUS-CAM on zero
        nx.scene.activeCamera.setTarget(BABYLON.Vector3.Zero());
        return;
    }
    if(nx.ctrl.forwardslash){nx.ctrl.forwardslash=0; //----------------SELECT-ALL---------------.
        if(nx.activeEditNodes.length===2){ // -----------------select inbetween
            //SPECIFIC BEHAVIOR FOR PATH-EDITOR-MOVE-TO-PATH-EDITOR-.
            // var foundTgt = 0;
            // for(var h=0; h< nx.editIdx.length;h++){
            //     var edits = nx.editIdx[h]
            //     for(var i=0; i< edits.aNodes.length;i++){
            //         var aNode = edits.aNodes[i];
            //         if(aNode===nx.activeEditNodes[0] || aNode===nx.activeEditNodes[1]){  //First or Second of two selections.
            //             if(!foundTgt){ foundTgt = 1; //START-SELECTING-.
            //             }else{ break; } //END SELECTING-.
            //         } else if (foundTgt) { //SELECT-.
            //             aNode.material = nx.greenMat;
            //             aNode.editMode= "greenEdit"
            //             nx.activeEditNodes.push(aNode);
            //         }
            //     }
            //     if(foundTgt){break;}
            // }  
            //POLY-MESH-EDIT-SPECIFIC--MOVE-TO-POLYMESH-LOGIC-.
            for(var i=0; i< nx.editNodes.length;i++){
                if(nx.editNodes[i]===nx.activeEditNodes[0] || nx.editNodes[i]===nx.activeEditNodes[1]){
                    if(!foundTgt){ foundTgt = 1; //START-SELECTING-.
                    }else{ break; } //END SELECTING-.
                } else if (foundTgt) { //SELECT-.
                    nx.editNodes[i].material = nx.greenMat;
                    nx.editNodes[i].editMode= "greenEdit"
                    nx.activeEditNodes.push(nx.editNodes[i]);
                }
            }        
        }else if(nx.activeEditNodes.length>0){ // -----------------deselect all
            //TODO: write PATH deselect all same time-.
            //POLY-MESH-EDIT-SPECIFIC--MOVE-TO-POLYMESH-LOGIC-.
            for(var i=0; i< nx.activeEditNodes.length;i++){
                    nx.editNodes[i].material = nx.blueMat;
                // nx.activeEditNodes[i].material = null;
                nx.activeEditNodes[i].editMode=0
            }
            nx.activeEditNodes = [];
        } else { //--------------------------------------------select all
            //TODO: write PATH select all same time-.
            //POLY-MESH-EDIT-SPECIFIC--MOVE-TO-POLYMESH-LOGIC-.
            var editNode = {};
            for(var i=0; i< nx.editNodes.length;i++){
                editNode = nx.editNodes[i];
                editNode.material = nx.greenMat;
                // editNode.material = nx.blueMat;
                editNode.editMode= "greenEdit"
                nx.activeEditNodes.push(editNode);
            }
        }
        return;
    }
    //METHOD:-INTERPRET-the-move-by-the-MODE-.
    if(nx.tenKey.mode==='cam'){ //--------------------------------------CAM-.

 
        if(nx.scene.activeCamera.name!="editcam"){  //TODO iniEDITCAM
            // console.log('editcam1')
            nx.camz.editcam.setTarget( nx.BV3(0, 0, 0));
            nx.camz.editcam.position = nx.scene.activeCamera.position;
            nx.scene.activeCamera = nx.camz.editcam; //BLACK-SCREEN FIX: avoids cam flicker
            nx.camz.editcam.attachControl(nx.canvas, true); //CAM: set edit cam-.
        }


        //Call cam move on Active-Camera-. //Move-ActiveCam: UP, DWN, LFT, RGT, FWD, BWD.
        var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.plus) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num7 || nx.ctrl.num1 || nx.ctrl.minus) ? -1 : 0;
        nx.ctrl.mag = (nx.ctrl.alt)? 1 : 10;
        var moveAmount = nx.ctrl.mag * direction;
        if(nx.activeCamera!=nx.camz.freeCam){
            // console.log('editcam2')
            nx.camz.freeCam.position.copyFrom(nx.scene.activeCamera.position)
            // nx.camz.freeCam.setTarget(BABYLON.Vector3.Zero());
            nx.scene.activeCamera = nx.camz.freeCam;
        }
        if(nx.ctrl.num8 || nx.ctrl.num2){ nx.scene.activeCamera.position.z+=moveAmount; }
        if(nx.ctrl.num4 || nx.ctrl.num6){ nx.scene.activeCamera.position.x+=moveAmount; }
        if(nx.ctrl.plus || nx.ctrl.minus){ nx.scene.activeCamera.position.y+=moveAmount; }
        if(nx.ctrl.num7 || nx.ctrl.num9){ //ROTATE-CAM: up or down
            moveAmount = 0.1 * direction; 
            nx.scene.activeCamera.noRotationConstraint=true; //required to rotate cam
            nx.scene.activeCamera.rotation.x+=moveAmount;
        }
        if(nx.ctrl.num1 || nx.ctrl.num3){//ROTATE-CAM: left or right
            moveAmount = 0.1 * direction;
            nx.scene.activeCamera.noRotationConstraint=true; //required to rotate cam
            nx.scene.activeCamera.rotation.y+=moveAmount;
        }
    } else if (nx.tenKey.mode==='edit') { //--------------------------------------------EDIT-. //Call edit move on active edit nodes-.

        // var editNode;
        for(var i = 0; i< nx.activeEditNodes.length; i++){
            var editNode = nx.activeEditNodes[i];
            editNode.editFn(); //------------------------------Call-Edits-.
        }
    // } else if (nx.tenKey.mode==='rot') { //--------------------------------------------ROT-.
    //     for(var i = 0; i< nx.activeEditNodes.length; i++){
    //         var editNode = nx.activeEditNodes[i];
    //         editNode.editFn(); //-----------------------------Call-Edits-.
    //     }
    } else if (nx.tenKey.mode==='anm') { //--------------------------------------------ANM-.
        // debugger;
        if(nx.ctrl.num9){ nx.ctrl.num9=0; //call orby anms-.
            nx.anmz.orby.hoverMode = (nx.anmz.orby.hoverMode)?0:1; //HOVER TOGGLE-.
        }
        if(nx.ctrl.num8){ nx.ctrl.num8=0; //call orby anms-.
            var surfIdle = nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //ANIMATED-SURFBOARD-. 
        }
        if(nx.ctrl.num7){ nx.ctrl.num7=0; //call orby anms-.
            var prone = nx.scene.beginAnimation(nx.orbySkeleton[0], 1, 1, false, 1.0);  //prone
        }

        if(nx.ctrl.num6){ nx.ctrl.num6=0; //call orby anms-.

            // var fast = nx.scene.beginAnimation(nx.orbySkeleton[0], 320, 350, false, 1.0);  //fast
            var fastANM = nx.scene.beginAnimation(nx.orbySkeleton[0], 320, 340, false, 1.0);  //ride2fast
            fastANM.onAnimationEnd = function(){
                var fast2Ride = nx.scene.beginAnimation(nx.orbySkeleton[0], 340, 350, false, 1.0);  //fast2ride
            }


        }

        //GOTTA SKIP 5 - derp-.

        if(nx.ctrl.num0){ nx.ctrl.num0=0; //call orby anms-.
            var lzrANM4 = nx.scene.beginAnimation(nx.orbySkeleton[0], 200, 310, false, 1); //LOOKLZR to SCANLZR. 
            lzrANM4.onAnimationEnd = function (){
                //FIRE-LZR - UP
                nx.orbyMesh.rayLines= [];
            //    nx.orbyMesh.laserORIG.position = new BABYLON.Vector3(nx.lazerbox.position.x,12,nx.lazerbox.position.z)
                nx.orbyMesh.laserTgtSphere.position = new BABYLON.Vector3(nx.lazerbox.position.x,nx.lazerbox.position.y+100,nx.lazerbox.position.z)
                nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.lazerbox.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[0]);
                nx.orbyMesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
                nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.lazerbox.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[1]);
                nx.orbyMesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
                nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.lazerbox.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[2]);
                nx.orbyMesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8
                nx.orbyMesh.rayLines[0].color.g = 1;//Math.cos(alpha1);//1;
                nx.orbyMesh.rayLines[0].color.r = nx.orbyMesh.rayLines[0].color.b = 0
                nx.orbyMesh.rayLines[1].color.b = 1;//Math.cos(alpha1);//1;
                nx.orbyMesh.rayLines[1].color.g = nx.orbyMesh.rayLines[1].color.r = 0
                nx.orbyMesh.rayLines[2].color.r = 1;//Math.cos(alpha1);//1;
                nx.orbyMesh.rayLines[2].color.g = nx.orbyMesh.rayLines[2].color.b = 0;        //yellow-green-laser-.
            }
        }

        if(nx.ctrl.num4){ nx.ctrl.num4=0; //call orby anms-.


            nx.lazerbox.visibility = 1; //ORBY SCAN

            //OPEN-ORBY-MOUTH-.
            $({mouthROT:0}).animate({mouthROT:1},{queue:false,duration:1000,easing:'swing',
                step:function(){ nx.orbyMouth.rotation.z = this.mouthROT; }
            });
            
            // nx.scene.stopAnimation(nx.orbySkeleton[0]) 
            var lzrANM1 = nx.scene.beginAnimation(nx.orbySkeleton[0], 150, 170, false, 1); //LFT to Mouth-ANM-. 
            lzrANM1.onAnimationEnd = function (){
                var lzrANM2 = nx.scene.beginAnimation(nx.orbySkeleton[0], 170, 180, false, 0.5); //GrabLZR to LOOK. 
                lzrANM2.onAnimationEnd = function (){
                    setTimeout(function(){ //Look at LZR
                        var lzrANM3 = nx.scene.beginAnimation(nx.orbySkeleton[0], 180, 200, false, 0.5); //LOOKLZR to SCANLZR. 
                        lzrANM3.onAnimationEnd = function (){
                            //CLOSE-ORBY-MOUTH-.
                            $({mouthROT:1}).animate({mouthROT:0},{queue:false,duration:1000,easing:'swing',
                               step:function(){ nx.orbyMouth.rotation.z = this.mouthROT; }
                            });
                        }
                    },1000);
                }
            }

        }

        if(nx.ctrl.num3){ nx.ctrl.num3=0; //call orby anms-.
            var boomANM = nx.scene.beginAnimation(nx.orbySkeleton[0], 4, 25, false, 1.0);  //boom
        }
        
        if(nx.ctrl.num2){ nx.ctrl.num2=0; //call orby anms-.
            var shockANM = nx.scene.beginAnimation(nx.orbySkeleton[0], 1, 4, false, 1.0);  //shock
        }
        
        if(nx.ctrl.num1){ nx.ctrl.num1=0; //call orby anms-.
            var fallANM = nx.scene.beginAnimation(nx.orbySkeleton[0], 350, 370, false, 1.0);  //fall
            fallANM.onAnimationEnd = function(){
                var fallLandANM = nx.scene.beginAnimation(nx.orbySkeleton[0], 370, 390, false, 1.0);  //fall land
            }
        }


        //IMPORTANT: DO NOT REMOVE - THESE ARE GOOD SEQUENCE MODE-.
        //---------------------------------------ANM-PLAYBACK-CONTROLS-.
        // if(nx.ctrl.ctrl){ //SHOW-VIS-.
        //     nx.anmVIS=1; 
        // } else { nx.anmVIS = 0; }
        // if(nx.ctrl.space){ //PAUSE-PLAYBACK-BY-TOGGLING-CINEMATIC-MODE-.
        //     //TODO: bug - cleans up cinematic loop entirely on 0
        //     nx.cinematicMode = !nx.cinematicMode; 
        //     if(nx.cinematicMode){ console.log('ANM: STOP') } else { console.log('ANM: GO')}
        // }
        // if(nx.ctrl.num0){ //FRAME-BY-FRAME-PLAYBACK-BY-TOGGLE-OF-DEBUGGER-BREAKPOINTS-.
        //     nx.anmDEBUG = !nx.anmDEBUG; 
        //     if(nx.anmDEBUG){ console.log('ANM: DEBUG') } else { console.log('ANM: RUN')}
        // }

        // if(nx.ctrl.num1){ nx.ctrl.num1=0; //call many anm sequences-.
        //     nx.spaceSeqIdx[0] = {on:1}; 
        //     nx.spaceSeqIdx[2] = {on:1}; 
        //     nx.runCinematicSequence("SpaceSequence")   //TENKEY                               //startSpaceOrbyIntroSEQ
        // }
        // if(nx.ctrl.num2){ nx.ctrl.num2=0; //call many anm sequences-.
        //     console.log('D')
        //     restartGame();       //TENKEY                                               //start SpaceGemGAME
        //     // nx.runCinematicSequence("SpaceSequence")
        // }
        // if(nx.ctrl.num3){ nx.ctrl.num3=0; //call many anm sequences-.
        //     for(var i = 0; i<nx.spaceSeqIdx.length;i++){nx.spaceSeqIdx[i].on=0;} //shut all other sequences off-.
        //     nx.cinematicMode=0;//Start new cinematic-.
        //     nx.doorSeqIdx[0] = {on:1}; nx.runCinematicSequence("DoorSequence")
        // }
        // if(nx.ctrl.num4){ nx.ctrl.num4=0; //call many anm sequences-.
        //     nx.cinematicMode=0;//Start new cinematic-.
        //     nx.crashSeqIdx[0] = {on:1}; nx.runCinematicSequence("CrashSequence")
        // }
        // if(nx.ctrl.num6){ nx.ctrl.num6=0; //call many anm sequences-.
        //     nx.cinematicMode=0;//Start new cinematic-.
        //     nx.zapScanSeqIdx[0] = {on:1}; nx.runCinematicSequence("ZapScanSequence")
        // }
        // if(nx.ctrl.num7){ nx.ctrl.num7=0; //call many anm sequences-.


        //     nx.cinematicMode=0;//Start new cinematic-.
		// 	nx.initSEQ({seqID:9})//FINALSEQUENCE //--------------------------------------WORKING ABILITY TO RERUN specific animation-. frame set here or below is ok-.
        //     // nx.zapScanSeqIdx[0] = {on:1}; nx.runCinematicSequence("ZapScanSequence")
        // }
    }
}
/***************************************************************-END-TEN-KEY-*****************************************************/


/***************************************************************-WAYPOINT-EDITOR--*****************************************************/
nx.wayPoints = [];
nx.createWayPoint = function(){

    //------SET-WAYPOINT-----------------------------------------------------------------------------------
    var aWayPoint = BABYLON.Mesh.CreateSphere("editNode", 1, 5, nx.scene);
    aWayPoint.position.copyFrom(nx.orbyMesh.position); ///new BABYLON.Vector3(0,50,0)
    // aWayPoint.editTgt = config.tgt;
    aWayPoint.material = nx.blueMat;
    aWayPoint.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
        if(this.editMode==="greenEdit"){
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus || nx.ctrl.num1) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.minus) ? -1 : 0;
            // nx.ctrl.mag = (nx.ctrl.alt)? 0.1 : 1;  // alternate MAGNITUDE on Transforms and rots
            nx.ctrl.mag = (nx.ctrl.ctrl)? 0.1 : 1;  // default MAGNITUDE on Transforms and rots
            var moveAmount = nx.ctrl.mag * direction;
            if(nx.ctrl.num8 || nx.ctrl.num2){ //-------------------------Transform-X-Y-Z.
                this.position.z+=moveAmount; }
            if(nx.ctrl.num4 || nx.ctrl.num6){ 
                this.position.x+=moveAmount; }
            if((nx.ctrl.plus || nx.ctrl.minus) && !nx.ctrl.alt){ //------Y
              this.position.y+=moveAmount; }
            // else if((nx.ctrl.plus || nx.ctrl.minus) && nx.ctrl.alt){//--------PITCH X
            //     this.gt.rotation.x += moveAmount/10; }
            // if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
            //     this.gt.rotation.y += moveAmount/10; }
            // if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
            //     this.gt.rotation.z += moveAmount/10; }
            // if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
                //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                // console.log('config.tgt---------------------')
                // console.log('POS: '+JSON.stringify(config.tgt.position))
                // console.log('ROT: '+JSON.stringify(config.tgt.rotation))
            // }
        }
    }
    aWayPoint.actionManager = new BABYLON.ActionManager(nx.scene); //EDIT-MESH-CLICK-EVENTS-------------------------------------------
    aWayPoint.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
        var eNode = evt.meshUnderPointer;
        if(!eNode){return}
        if(!eNode.editMode){
            nx.activeEditNodes.push(eNode);
            eNode.material = nx.greenMat;
            eNode.editMode='greenEdit'
        }else if(eNode.editMode === 'greenEdit' ){
            eNode.material = nx.blueMat;
            eNode.editMode=0
            nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
        }
    }));
    // nx.wayPoints.push(aWayPoint.position)

	nx.wayPoints.push(new BABYLON.Vector3((Math.floor(aWayPoint.position.x*1000)/1000),(Math.floor(aWayPoint.position.y*1000)/1000),(Math.floor(aWayPoint.position.z*1000)/1000)))

    // config.tgt.master.parent = config.tgt;


    console.log('WAYPOINTS: '+JSON.stringify(nx.wayPoints)); //PUBLISH-WAYPOINTS-.
}


/***************************************************************-END-WAYPOINT-EDITOR--*****************************************************/


// nx.halfpipeShape = [ //railslide4 - outside rail
//     new BABYLON.Vector3(-11,9,10 ), //reconnect
//     new BABYLON.Vector3(-11.5,9.85,10 ), //inner top
//     new BABYLON.Vector3(-10.75,9.75,10 ), // outer top
//     new BABYLON.Vector3(-11,9,10 ), //splay out
//     new BABYLON.Vector3(-9.75,5,10 ), 
//     new BABYLON.Vector3(-8.5,2.5,10 ), 
//     new BABYLON.Vector3(-6.5,1,10 ), new BABYLON.Vector3(-4.5, 0, 10),  
//     new BABYLON.Vector3(0,-1,10), 
//     new BABYLON.Vector3(4.5,0,10), new BABYLON.Vector3(6.5, 1, 10), 
//     new BABYLON.Vector3(8.5, 2.5, 10),
//     new BABYLON.Vector3(9.75,5,10 ), 
//     new BABYLON.Vector3(11,9, 10), // splay out
//     new BABYLON.Vector3(10.75, 9.75, 10), //outer top
//     new BABYLON.Vector3(11.5,9.85, 10), //inner top
//     new BABYLON.Vector3(11,9,10) //reconnect
// ];


/*********************************- RECORDPATH -*****************************/
nx.recordPath = [];
var playbackIdx = 0;
nx.cinematicMode = 0; //1 means cinematic is running 0 means remove listener
nx.cinemaStop = 0;

nx.RECORD_MOVEMENT = 1; //0  //1
var recordPathPoints = function(){//put latest position
    // console.log('RECORDING MOVEMENT')
    nx.RECORD_MOVEMENT = 1;
} 

//USE THIS ON RECORDING ORBY SURF PATH-.
var printRecordedPath = function(aPath){

	// if(aPath){
 //    	console.log(JSON.stringify(aPath)); //PUBLISH-RECORD-.  
 //    } else {
    	console.log(JSON.stringify(nx.recordPath)); //PUBLISH-RECORD-.  
    // }

// // console.log(JSON.stringify(nx.meshEditor.polyMesh1._positions))
}



/*********************************- RECORDPATH -*****************************/


/*****************************************-ANMPATH-UTILITIES-*******************************/
//ANM-METHODLOGY: Editable Animated Paths-. ANMz ANMPath 

nx.editz.splicePOStoROTs = function(aPOSPath,aPOSROTPath){ //use aPOSPath to overwrite the POS in aPOSROTPath.
	// debugger;
	var item;

	for(var i=0; i< aPOSPath.length; i++){
		item = aPOSPath[i]; //TODO rename aPOSROTHPath to ANMPath-.
		aPOSROTPath[i].pos.x = item.x;
		aPOSROTPath[i].pos.y = item.y;
		aPOSROTPath[i].pos.z = item.z;
	}
	return aPOSROTPath;
}

//ANM MEthodology: ANMPATH is aPOSPath and aROTPath combined into a new object of pos and rot paths-.
nx.editz.createANMPath = function(aPOSPath,aROTPath){ //use aPOSPath to overwrite the POS in aPOSROTPath.
	var item, anmPath = [];
	for(var i=0; i< aPOSPath.length; i++){
		item = {};
		item.pos = aPOSPath[i]; //TODO rename aPOSROTHPath to ANMPath-.
		item.rot = aROTPath[i]
		anmPath.push(item)
		// aPOSROTPath[i].pos.x = item.x;
		// aPOSROTPath[i].pos.y = item.y;
		// aPOSROTPath[i].pos.z = item.z;
	}
	return anmPath;
}

/********************************************************************************************************************/

// nx.editz.clearROTs = function(aPath){
// 	var item = {};
// 	for(var i=0; i< aPath.length; i++){
// 		item = aPath[i];
// 		if(item.rot){
// 			item.rot = ""
// 		}
// 	return aPath;
// }

nx.editz.transformToEuler = function(aPath){ //reduce precision by truncating numbers-. FOR BOTH aPath and ANMPaths-.
	if(aPath.x){ //parameter override-.
		// debugger;
		return aPath.toEulerAngles();
	}
	//DESCRIPTION: loop through quaternion convert them all to euler-.
	var item, eulerROT;
	// debugger;
	for(var i=0; i< aPath.length; i++){
		item = aPath[i];
		if(item.rot && item.rot.w){
			aPath[i].rot = new BABYLON.Quaternion(item.rot.x,item.rot.y,item.rot.z,item.rot.w).toEulerAngles();
			// eulerROT = new BABYLON.Quaternion(item.rot.x,item.rot.y,item.rot.z,item.rot.w).toEulerAngles();
			// aPath[i].rot = eulerROT;
		}
	}
	return aPath
}

nx.editz.truncatePathPrecision = function(aPath){ //reduce precision by truncating numbers-. FOR BOTH aPath and ANMPaths-.
	//DESCRIPTION: this will reduce long numbers in all types of path: flatpath, stackpath, vectorpath, raw number array-.
	var item;
	for(var i=0; i< aPath.length; i++){
		item = aPath[i];
		if(item.pos){
			if(item.pos.x){item.pos.x = Math.floor(item.pos.x*100)/100;}//precision-truncation-.
			if(item.pos.y){item.pos.y = Math.floor(item.pos.y*100)/100;}//precision-truncation-.
			if(item.pos.z){item.pos.z = Math.floor(item.pos.z*100)/100;}//precision-truncation-.
		}
		if(item.rot){
			if(item.rot.x){item.rot.x = Math.floor(item.rot.x*100)/100;}//precision-truncation-.
			if(item.rot.y){item.rot.y = Math.floor(item.rot.y*100)/100;}//precision-truncation-.
			if(item.rot.z){item.rot.z = Math.floor(item.rot.z*100)/100;}//precision-truncation-.
			if(item.rot.w){item.rot.w = Math.floor(item.rot.w*100)/100;}//precision-truncation-.
		}
		if(item.x){item.x = Math.floor(item.x*100)/100;}
		if(item.y){item.y = Math.floor(item.y*100)/100;}
		if(item.z){item.z = Math.floor(item.z*100)/100;}
		if(item.w){item.w = Math.floor(item.w*100)/100;}
		if(typeof item==="number"){ 
			item = (Math.floor(item*100)/100);
			aPath[i] = 0;
			aPath[i] = (item); //TODO: BUG how annoying - refusing to replace floating number with truncated float.
			// debugger;
		}      //TRUNCATES to 2 decimals
		// if(typeof item==="number"){item = Math.floor(item*1000)/1000;} //TRUNCATES to 3 decimals - original.
	}
	return aPath;
}
/*********************************- DECOMPOSEPATH -*****************************/
//THIS ALGORITHM REDUCES in half THE NUMBER OF POINTS IN A RANGE-.

//TODO rename to nx.editz.sparsifyPath //TODO ability to pass it aPath or ANMPath- 
nx.editz.decomposePath = function(config){ //config(aPath:arrayPath,start:0,end:length)
	// debugger;
	if(!config || !config.aPath){return}
	//go to master pipeline and cut out every other node - within the span of nodes-.
    // var arrayPath = nx.spacepipe8;
    // var product = [], rangeStart = 65, rangeEnd = 97;
    var product = [], rangeStart = config.start || 0, rangeEnd = config.end || config.aPath.length;
    // for(var i=0; i<arrayPath.length; i++){
    for(var i=0; i<config.aPath.length; i++){
        if(i === rangeStart || i === rangeEnd ){	
        	// product.push(config.aPath[i].copyFrom({x:Math.floor(config.aPath[i].x*1000)/1000,y:Math.floor(config.aPath[i].y*1000)/1000,z:Math.floor(config.aPath[i].z*1000)/1000}));     
        	product.push(config.aPath[i]);    
        } else if (i%2===0) {   	
        	// product.push(config.aPath[i].copyFrom({x:Math.floor(config.aPath[i].x*1000)/1000,y:Math.floor(config.aPath[i].y*1000)/1000,z:Math.floor(config.aPath[i].z*1000)/1000})); 
        	product.push(config.aPath[i]) 
        } else {	/*ODD INDEX IS CHAFF: console.log('splice',i)  */   }
    }
	// console.log(JSON.stringify(product)); //PUBLISH-.
    return product; //for double density decomposition-.
}
//TODO rename to nx.editz.sparsifyANMPath //TODO ability to pass it aPath or ANMPath- 
nx.editz.decomposeANMPath = function(config){ //config(ANMPath:arrayPath,start:0,end:length)
	// debugger;
	if(!config){return}
	if(!config.ANMPath){config.ANMPath = config} //parameter override option-.
	//go to master pipeline and cut out every other node - within the span of nodes-.
    // var arrayPath = nx.spacepipe8;
    // var product = [], rangeStart = 65, rangeEnd = 97;
    var product = [], rangeStart = config.start || 0, rangeEnd = config.end || config.ANMPath.length;
    // for(var i=0; i<arrayPath.length; i++){
    for(var i=0; i<config.ANMPath.length; i++){
        if(i === rangeStart || i === rangeEnd || i%2===0){ //ALWAYS PUSH START AND END - then ONLY EVENS-.	
        	// product.push(config.aPath[i].copyFrom({x:Math.floor(config.aPath[i].x*1000)/1000,y:Math.floor(config.aPath[i].y*1000)/1000,z:Math.floor(config.aPath[i].z*1000)/1000}));     
        	// product.push(config.aPath[i]);    
	    	// for(var v=0; v<config.ANMPath.pos.length; v++){
	    	if(config.ANMPath[i].pos){
	        	product.push({pos:config.ANMPath[i].pos,rot:config.ANMPath[i].rot});    
	    	} else {
	        	product.push(config.ANMPath[i]);    
	    	}
	        // } else if (i%2===0) {   	
	        	// product.push(config.aPath[i].copyFrom({x:Math.floor(config.aPath[i].x*1000)/1000,y:Math.floor(config.aPath[i].y*1000)/1000,z:Math.floor(config.aPath[i].z*1000)/1000})); 
	        	// product.push(config.aPath[i]) 
	        	// product.push(config.aPath[i]) 
	        // }
        } else {	/*ODD INDEX IS CHAFF: console.log('splice',i)  */   }
    }

	console.log(JSON.stringify(product)); //PUBLISH-.

    return product; //for double density decomposition-.
}


/*********************************- DECOMPOSEPATH -*****************************/



/***************************************************************-VIS-PATH-EDITOR*****************************************************/
// nx.vispathEditor = {editNodes:[]};
nx.VISPATHS = [];
nx.createVISPATHEditor = function(path){
    // var i = nx.VISPATHS.length;
    // var VISPATH = BABYLON.Mesh.CreateLines('aVISPATH'+i, path, nx.scene);
    var VISPATH = BABYLON.MeshBuilder.CreateLines('aVISPATH', {points:path,updatable:true}, nx.scene);
    // (i%2===0) ? VISPATH.color = BABYLON.Color3.Blue() : VISPATH.color = BABYLON.Color3.Green();
    VISPATH.color = BABYLON.Color3.Blue() 

    for (var i=0; i<path.length; i++){
        var editNode = BABYLON.Mesh.CreateSphere("editNode"+i, 1, 0.5, nx.scene);
        editNode.editMode = 0;
        editNode.vectorIndex = i;
        // var VISPATH = BABYLON.Mesh.CreateLines('a'+i, [initCAMPOS,endCAMPOS], nx.scene);
        editNode.material = nx.blueMat;
        editNode.position = new BABYLON.Vector3(path[i].x,path[i].y,path[i].z)
        // nx.visPathEditor.editNodes.push(editNode)
        // editNode.parent = nx.meshEditor.polyMesh1;
        nx.meshEditor.editNodes.push(editNode) //INIT-FOR-TEN-KEY-EVENTS-.
        editNode.editFn = function(){ //---------TEN-KEY-EVENTS--------------------------------------------------------------------------.
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.minus) ? -1 : 0;
            nx.ctrl.mag = (nx.ctrl.alt)? 0.01 : 0.1;
            var moveAmount = nx.ctrl.mag * direction;
            if(this.editMode==="greenEdit"){
                if(nx.ctrl.num8 || nx.ctrl.num2){ this.position.z += moveAmount; 
                    // nx.meshEditor.positions[this.vectorIndex+2] += moveAmount;
                   nx.VISPATHS[this.vectorIndex].x += moveAmount;
                }
                if(nx.ctrl.num4 || nx.ctrl.num6){ this.position.x += moveAmount; 
                    // nx.meshEditor.positions[this.vectorIndex+0] += moveAmount;
                    nx.VISPATHS[this.vectorIndex].y += moveAmount;
                }
                if(nx.ctrl.plus || nx.ctrl.minus){ this.position.y += moveAmount; 
                    // nx.meshEditor.positions[this.vectorIndex+1] += moveAmount;
                   nx.VISPATHS[this.vectorIndex].z += moveAmount;
                }
                // nx.createVISPATHEditor
                VISPATH = BABYLON.MeshBuilder.CreateLines('aVISPATH'+i, {points:nx.VISPATHS,updatable:true,instance:VISPATH}, nx.scene);
                // VISPATH = BABYLON.MeshBuilder.CreateLines('aVISPATH'+i, {points:path,updatable:true,instance:VISPATH}, nx.scene);
                // nx.meshEditor.updateMeshEdits(nx.meshEditor.polyMesh1, nx.meshEditor.positions, nx.meshEditor.normals, nx.meshEditor.indices)
            }
        }
        editNode.actionManager = new BABYLON.ActionManager(nx.scene); //--MESH-CLICK-EVENTS---------------------------------------------.
        editNode.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
            var eNode = evt.meshUnderPointer;
            if(!eNode){ return; } 
            if(!eNode.editMode){  //MODE-ITERATOR-.
                nx.activeEditNodes.push(eNode);
                eNode.material = nx.greenMat;
                eNode.editMode='greenEdit'
            }else if(eNode.editMode === 'greenEdit' ){
                eNode.material = nx.blueMat;
                eNode.editMode=0
                nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
            }
        }));
        // editNode.parent = nx.ground;
        // nx.VISPATHS.push(editNode);
        nx.VISPATHS.push(editNode.position);
    }

}


/***************************************************************-EDIT-PATH-*****************************************************/
nx.uniquePathEditor = function(aName) {
    for(var i = 0; i<nx.editIdx.length;i++){
        if(aName === nx.editIdx[i].aName){
            return nx.editIdx[i];
        }
    }
    return null;
}



// });



nx.editNodes = []; //used in other edit places - needs to update to nx.editIdx[].aNodes.
nx.activeEditNodes = []; //todo put in nx.edit.activeNodes
//ALL DEPRECATED: moved into editObj.
// nx.pathLine
// nx.editMasterBox
// aPath
// aPos
// aName
// nx.editPath


nx.editIdx = []; //Many-Editable-Paths. Array of PATH objects.


//TODO rename to nx.ANMPathEditor
nx.createPathEditor = function(config){ //ADD EDITABLE PATH POINTS-.

    //ability for config to pass in a POSROTPath. SPLIT POS FROM ROTs
    if(config.ANMPath){
		// debugger;
		//SPLIT POS FROM ROTS
		var aPOSPath = [];
		var aROTPath = [];
		var rawROT = {};
		for(var i=0; i< config.ANMPath.length;i++){
		    var item = config.ANMPath[i];
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
		        aPOSPath.push(nx.BV3(Math.floor(item.pos.x*1000)/1000,Math.floor(item.pos.y*1000)/1000,Math.floor(item.pos.z*1000)/1000)) //truncated POS
		        //SPLIT POS AND ROT-.
		        if(item.rot.w!=undefined){ //QUATERNION-.


		            // aROTPath.push(new BABYLON.Quaternion(Math.floor(item.rot.x*1000)/1000,Math.floor(item.rot.y*1000)/1000,Math.floor(item.rot.z*1000)/1000,Math.floor(item.rot.w*1000)/1000))
		            // aROTPath.push(nx.editz.transformToEuler(new BABYLON.Quaternion(Math.floor(item.rot.x*1000)/1000,Math.floor(item.rot.y*1000)/1000,Math.floor(item.rot.z*1000)/1000,Math.floor(item.rot.w*1000)/1000)));
		            rawROT = nx.editz.transformToEuler(new BABYLON.Quaternion(Math.floor(item.rot.x*1000)/1000,Math.floor(item.rot.y*1000)/1000,Math.floor(item.rot.z*1000)/1000,Math.floor(item.rot.w*1000)/1000));
					aROTPath.push(nx.BV3(Math.floor(rawROT.x*1000)/1000,Math.floor(rawROT.y*1000)/1000,Math.floor(rawROT.z*1000)/1000)) //truncated ROT



		            // aROTPath.push(nx.BV3(Math.floor(item.rot.x*1000)/1000,Math.floor(item.rot.y*1000)/1000,Math.floor(item.rot.z*1000)/1000,Math.floor(item.rot.w*1000)/1000))
		        }else{ //EULER-.
		            aROTPath.push(nx.BV3(Math.floor(item.rot.x*1000)/1000,Math.floor(item.rot.y*1000)/1000,Math.floor(item.rot.z*1000)/1000))
		        }

		    }
		}

		config.aPath = aPOSPath;
		config.aRotz = aROTPath;

    }


    var aPath = config.aPath || [];
    var aRotz = config.aRotz || [];
    var aPos = config.aPos || new BABYLON.Vector3(0,0,0); 
    var aName = config.aName || "patheditor"+nx.editIdx.length;
    // {
// debugger;
    var editObj = {};
    var instance = nx.uniquePathEditor(aName);
    if(instance){
        // editObj = instance;
        return instance;
    } else { //default
        editObj = {
            idx:nx.editIdx.length,
            aName:aName,
            aPath:aPath,
            aRotz:aRotz,
            aPos:aPos,
            // aRot:{}, //todo?
            aLine:{},
            aNodes:[],
            aMaster:{},
            aActive:[]
        };
    }
    //     const AVG_RANGE = 3;
    //     var temp = [];
    //     var buf = BABYLON.Vector3.Zero();
    //     var count;
    //     for (var idx = 0; idx < aPath.length; idx++) {
    //         buf.scaleInPlace(0.0);
    //         count = 0;

    //         for (var innerIdx = Math.max(0, idx - AVG_RANGE); innerIdx < Math.min(idx + AVG_RANGE + 1, aPath.length); innerIdx++) {
    //             buf.addInPlace(aPath[innerIdx]);
    //             count++;
    //         }
    //         buf.scaleInPlace(1.0 / count);

    //         temp.push(buf.clone());
    //     }
    //     aPath = temp;
    // }
    //VISUALIZE-.
    editObj.aLine = BABYLON.Mesh.CreateLines('aline', aPath, nx.scene, true);
    // nx.pathLine.POS = new BABYLON.Vector3(9,-12,-8)
    // nx.pathLine.position.copyFrom(nx.pathLine.POS)
    editObj.aLine.position = aPos; //new BABYLON.Vector3(360,240,-450); 
    editObj.aLine.color = BABYLON.Color3.Blue();

    // editObj.aLine = nx.pathLine;

    // nx.editLine = BABYLON.Mesh.CreateLines('aline', aPath, nx.scene);
    // nx.editLine.position.y+=5;
    // nx.editLine.color = BABYLON.Color3.Green();
    //------ORIGIN-EDIT-----------------------------------------------------------------------------------
    // nx.editMasterBox = BABYLON.MeshBuilder.CreateBox("aBox", {height: 3, width:3, depth:3 }, nx.scene);
    // nx.editMasterBox.position = new BABYLON.Vector3(aPath[0].x,aPath[0].y+30,aPath[0].z)
    // nx.editMasterBox.editFn = function(){ //HANDLE - ACTIVE NODE - EDITS-.
    editObj.aMaster = BABYLON.MeshBuilder.CreateBox("aBox", {height: 0.5, width:0.5, depth:0.5 }, nx.scene);
    editObj.aMaster.position = new BABYLON.Vector3(aPath[0].x,aPath[0].y+30,aPath[0].z)
    editObj.aMaster.editFn = function(){ //HANDLE - ACTIVE NODE - EDITS-.
        var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9) ? -1 : 0;
        nx.ctrl.mag = (nx.ctrl.alt)? 0.1 : 1;
        var moveAmount = nx.ctrl.mag * direction;
        if(this.editMode==="greenEdit"){
            if(nx.ctrl.num8 || nx.ctrl.num2){ this.position.z += moveAmount; editObj.aLine.position.z+=moveAmount; }
            if(nx.ctrl.num4 || nx.ctrl.num6){ this.position.x += moveAmount; editObj.aLine.position.x+=moveAmount; }
            if(nx.ctrl.num7 || nx.ctrl.num9){ this.position.y += moveAmount; editObj.aLine.position.y+=moveAmount; }
            // if(nx.ctrl.num8 || nx.ctrl.num2){ this.position.z += moveAmount; nx.pathLine.position.z+=moveAmount; }
            // if(nx.ctrl.num4 || nx.ctrl.num6){ this.position.x += moveAmount; nx.pathLine.position.x+=moveAmount; }
            // if(nx.ctrl.num7 || nx.ctrl.num9){ this.position.y += moveAmount; nx.pathLine.position.y+=moveAmount; }
            if(nx.ctrl.asterisk && nx.tenKey.mode==='edit'){nx.ctrl.asterisk=0; //PRINT or PUBLISH - EDITED-PATH
                    //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                    // console.log(editObj.aName+'---------------------')
                    // console.log('POS: '+JSON.stringify(editObj.aPos))
                    // console.log('ROT: '+JSON.stringify(nx.landPad.rotation))
                    // console.log('PATH: '+JSON.stringify(editObj.aPath))

                    //INSTRUCTIONS TO PUBLISH - select master edit, *, run through truncate and splice to POSROT-.
                    // var aWorldPath = nx.convertPathPointsToWorld(editObj.aPath, editObj.aLine);
                    // console.log('WURLDPATH: '+JSON.stringify(aWorldPath));

                    debugger;
                    //INSTRUCTIONS TO PUBLISH - select master edit, *, run through truncate and splice to POSROT-.
                    var aWorldPath = nx.convertPathPointsToWorld(editObj.aPath, editObj.aLine);


// var worldPath =  [{"x":168.083,"y":243.369,"z":-195.18},{"x":162.972,"y":241.095,"z":-192.892},{"x":157.86,"y":239.104,"z":-190.605},{"x":152.749,"y":238.165,"z":-188.317},{"x":147.637,"y":237.225,"z":-186.03},{"x":142.526,"y":236.286,"z":-183.742},{"x":137.602,"y":235.781,"z":-181.079},{"x":132.968,"y":235.577,"z":-177.937},{"x":128.669,"y":235.176,"z":-174.349},{"x":124.754,"y":234.703,"z":-170.349},{"x":121.256,"y":233.887,"z":-165.979},{"x":118.211,"y":232.803,"z":-161.281},{"x":115.651,"y":231.428,"z":-156.302},{"x":113.6,"y":230.061,"z":-151.093},{"x":112.08,"y":228.521,"z":-145.705},{"x":110.695,"y":227.258,"z":-140.279},{"x":109.309,"y":226.716,"z":-134.853},{"x":107.924,"y":226.191,"z":-129.428},{"x":106.538,"y":225.666,"z":-124.002},{"x":105.018,"y":225.902,"z":-118.614},{"x":102.968,"y":226.291,"z":-113.405},{"x":100.407,"y":226.501,"z":-108.426},{"x":97.363,"y":226.518,"z":-103.728},{"x":94.087,"y":226.391,"z":-99.188},{"x":90.375,"y":226.118,"z":-94.998},{"x":86.263,"y":225.8,"z":-91.199},{"x":81.792,"y":225.567,"z":-87.83},{"x":77.007,"y":225.144,"z":-84.924},{"x":72.149,"y":224.582,"z":-82.137},{"x":67.292,"y":224.403,"z":-79.351},{"x":62.434,"y":224.668,"z":-76.565},{"x":57.8,"y":224.859,"z":-73.423},{"x":53.504,"y":224.993,"z":-69.835},{"x":49.586,"y":225.067,"z":-65.835},{"x":45.769,"y":225.096,"z":-61.738},{"x":41.952,"y":225.32,"z":-57.64},{"x":38.135,"y":225.567,"z":-53.543},{"x":34.318,"y":225.814,"z":-49.445},{"x":30.5,"y":226.061,"z":-45.348},{"x":26.683,"y":225.82,"z":-41.25},{"x":23.076,"y":224.543,"z":-36.967},{"x":19.468,"y":223.212,"z":-32.684},{"x":15.86,"y":222.5,"z":-28.401},{"x":12.253,"y":222.5,"z":-24.118},{"x":8.645,"y":222.5,"z":-19.835},{"x":4.838,"y":222.5,"z":-15.552},{"x":1.029,"y":222.5,"z":-11.269},{"x":-3.079,"y":222.5,"z":-6.985},{"x":-7.185,"y":222.5,"z":-2.702},{"x":-11.693,"y":222.5,"z":1.581},{"x":-16.301,"y":222.5,"z":5.864},{"x":-21.109,"y":222.5,"z":9.647},{"x":-26.017,"y":222.5,"z":13.03},{"x":-31.724,"y":222.5,"z":16.512},{"x":-37.832,"y":222.5,"z":18.895},{"x":-44.84,"y":222.5,"z":24.079},{"x":-49.447,"y":222.599,"z":28.16}];
// nx.truncatedPath = nx.editz.truncatePathPrecision(aWorldPath);



//VERY IMPORTANT COMMAND TO PUBLISH ANMPATH
// JSON.stringify(nx.editz.truncatePathPrecision(nx.editz.decomposePath({aPath:nx.recordPath})))
// JSON.stringify(nx.editz.truncatePathPrecision(nx.recordPath))
// nx.reducedPath = nx.editz.decomposePath({aPath:descentPath}) //reduce path in half
// nx.reducedPath = nx.editz.decomposePath({aPath:nx.recordPath}) //reduce path in half

// nx.doorSeqIdx[NUM].descentPath2 = [{"pos":{"x":168.083,"y":243.369,"z":-195.18},"rot":{"x":0.11,"y":-0.822,"z":-0.171,"w":-0.533}},{"pos":{"x":162.972,"y":241.095,"z":-192.892},"rot":{"x":0.097,"y":-0.826,"z":-0.151,"w":-0.536}},{"pos":{"x":157.86,"y":239.104,"z":-190.605},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":152.749,"y":238.165,"z":-188.317},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":147.637,"y":237.225,"z":-186.03},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":142.526,"y":236.286,"z":-183.742},"rot":{"x":0.045,"y":-0.837,"z":-0.07,"w":-0.542}},{"pos":{"x":137.602,"y":235.781,"z":-181.079},"rot":{"x":-0.085,"y":-0.862,"z":-0.053,"w":-0.499}},{"pos":{"x":132.968,"y":235.577,"z":-177.937},"rot":{"x":-0.078,"y":-0.886,"z":-0.066,"w":-0.453}},{"pos":{"x":128.669,"y":235.176,"z":-174.349},"rot":{"x":-0.083,"y":-0.908,"z":-0.059,"w":-0.409}},{"pos":{"x":124.754,"y":234.703,"z":-170.349},"rot":{"x":-0.073,"y":-0.927,"z":-0.082,"w":-0.36}},{"pos":{"x":121.256,"y":233.887,"z":-165.979},"rot":{"x":-0.066,"y":-0.943,"z":-0.106,"w":-0.31}},{"pos":{"x":118.211,"y":232.803,"z":-161.281},"rot":{"x":-0.064,"y":-0.957,"z":-0.122,"w":-0.26}},{"pos":{"x":115.651,"y":231.428,"z":-156.302},"rot":{"x":-0.068,"y":-0.968,"z":-0.126,"w":-0.211}},{"pos":{"x":113.6,"y":230.061,"z":-151.093},"rot":{"x":-0.071,"y":-0.976,"z":-0.137,"w":-0.16}},{"pos":{"x":112.08,"y":228.521,"z":-145.705},"rot":{"x":-0.075,"y":-0.981,"z":-0.147,"w":-0.11}},{"pos":{"x":110.695,"y":227.258,"z":-140.279},"rot":{"x":0.006,"y":-0.991,"z":-0.052,"w":-0.125}},{"pos":{"x":109.309,"y":226.716,"z":-134.853},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":107.924,"y":226.191,"z":-129.428},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":106.538,"y":225.666,"z":-124.002},"rot":{"x":0.005,"y":-0.992,"z":-0.047,"w":-0.125}},{"pos":{"x":105.018,"y":225.902,"z":-118.614},"rot":{"x":0.093,"y":-0.984,"z":0.061,"w":-0.144}},{"pos":{"x":102.968,"y":226.291,"z":-113.405},"rot":{"x":0.093,"y":-0.976,"z":0.05,"w":-0.195}},{"pos":{"x":100.407,"y":226.501,"z":-108.426},"rot":{"x":0.093,"y":-0.965,"z":0.038,"w":-0.245}},{"pos":{"x":97.363,"y":226.518,"z":-103.728},"rot":{"x":0.096,"y":-0.951,"z":0.026,"w":-0.295}},{"pos":{"x":94.087,"y":226.391,"z":-99.188},"rot":{"x":0.097,"y":-0.943,"z":0.02,"w":-0.319}},{"pos":{"x":90.375,"y":226.118,"z":-94.998},"rot":{"x":0.101,"y":-0.925,"z":0.009,"w":-0.367}},{"pos":{"x":86.263,"y":225.8,"z":-91.199},"rot":{"x":0.093,"y":-0.907,"z":0.033,"w":-0.411}},{"pos":{"x":81.792,"y":225.567,"z":-87.83},"rot":{"x":0.099,"y":-0.884,"z":0.022,"w":-0.458}},{"pos":{"x":77.007,"y":225.144,"z":-84.924},"rot":{"x":0.105,"y":-0.859,"z":0.012,"w":-0.502}},{"pos":{"x":72.149,"y":224.582,"z":-82.137},"rot":{"x":0.025,"y":-0.865,"z":-0.044,"w":-0.501}},{"pos":{"x":67.292,"y":224.403,"z":-79.351},"rot":{"x":-0.016,"y":-0.865,"z":0.026,"w":-0.501}},{"pos":{"x":62.434,"y":224.668,"z":-76.565},"rot":{"x":-0.01,"y":-0.866,"z":0.015,"w":-0.502}},{"pos":{"x":57.8,"y":224.859,"z":-73.423},"rot":{"x":-0.097,"y":-0.884,"z":-0.033,"w":-0.457}},{"pos":{"x":53.504,"y":224.993,"z":-69.835},"rot":{"x":-0.096,"y":-0.906,"z":-0.032,"w":-0.412}},{"pos":{"x":49.586,"y":225.067,"z":-65.835},"rot":{"x":-0.096,"y":-0.926,"z":-0.032,"w":-0.365}},{"pos":{"x":45.769,"y":225.096,"z":-61.738},"rot":{"x":-0.005,"y":-0.931,"z":0.01,"w":-0.367}},{"pos":{"x":41.952,"y":225.32,"z":-57.64},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":38.135,"y":225.567,"z":-53.543},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":34.318,"y":225.814,"z":-49.445},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":30.5,"y":226.061,"z":-45.348},"rot":{"x":-0.009,"y":-0.931,"z":0.02,"w":-0.367}},{"pos":{"x":26.683,"y":225.82,"z":-41.25},"rot":{"x":0.039,"y":-0.926,"z":-0.1,"w":-0.365}},{"pos":{"x":23.076,"y":224.543,"z":-36.967},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":19.468,"y":223.212,"z":-32.684},"rot":{"x":0.039,"y":-0.933,"z":-0.11,"w":-0.341}},{"pos":{"x":15.86,"y":222.5,"z":-28.401},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":12.253,"y":222.5,"z":-24.118},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":8.645,"y":222.5,"z":-19.835},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":4.838,"y":222.5,"z":-15.552},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":1.029,"y":222.5,"z":-11.269},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-3.079,"y":222.5,"z":-6.985},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-7.185,"y":222.5,"z":-2.702},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-11.693,"y":222.5,"z":1.581},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-16.301,"y":222.5,"z":5.864},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-21.109,"y":222.5,"z":10.147},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-26.017,"y":222.5,"z":14.43},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-31.724,"y":222.5,"z":18.713},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-37.832,"y":222.5,"z":22.996},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-44.84,"y":222.5,"z":27.28},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}},{"pos":{"x":-49.447,"y":222.599,"z":28.561},"rot":{"x":0,"y":-0.94,"z":0,"w":-0.343}}];
nx.ANMPath = nx.editz.createANMPath(aWorldPath,editObj.aRotz)
// nx.ANMPath = nx.editz.decomposeANMPath(nx.ANMPath);
// nx.ANMPath = nx.editz.decomposeANMPath(nx.ANMPath); //DOUBLE-REDUCE-.
// nx.ANMPath = nx.editz.decomposeANMPath(nx.ANMPath); //TRIPLE-REDUCE-.
nx.ANMPath = nx.editz.truncatePathPrecision(nx.ANMPath)
// nx.ANMPath = nx.editz.createANMPath(nx.truncatedPath,editObj.aRotz)
// nx.ANMPath = nx.editz.splicePOStoROTs(nx.truncatedPath,nx.doorSeqIdx[NUM].descentPath2)
//TODO RENAME POSROTS to ANMPath and TruncAnmPath
// nx.doorSeqIdx[NUM].descentPath2 = newTruncatedPOSROTS;


// JSON.stringify(nx.editz.truncatePathPrecision(nx.recordPath))

					//WORKING PUBLISH: ...
                    console.log('ANMPATH: '+JSON.stringify(nx.ANMPath));
                    // console.log('WURLDPATH: '+JSON.stringify(aWorldPath));
            }
        }
    }
    editObj.aMaster.actionManager = new BABYLON.ActionManager(nx.scene);
    editObj.aMaster.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
    // nx.editMasterBox.actionManager = new BABYLON.ActionManager(nx.scene);
    // nx.editMasterBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
        var eNode = evt.meshUnderPointer; //HANDLE - NODE CLICK-.
        if(!eNode){return}
        if(!eNode.editMode){
            nx.activeEditNodes.push(eNode);
            eNode.material = nx.greenMat;
            eNode.editMode='greenEdit'
        }else if(eNode.editMode === 'greenEdit' ){
            eNode.material = nx.blueMat;
            // eNode.material = null;
            eNode.editMode=0
            nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
        }

    }));
    // editObj.aMaster = nx.editMasterBox;
    // nx.editLine.parent = nx.editMasterBox;
    //--------------POINT-EDIT-------------------------------------------------------------------------------------------
    for(var i = 0; i < aPath.length; i++) {
        // var editNode = BABYLON.MeshBuilder.CreateBox("aBox", {height: 0.3, width:0.3, depth:0.3 }, nx.scene);
        var editNode = BABYLON.MeshBuilder.CreateBox("aBox", {height: 0.5, width:0.5, depth:0.5 }, nx.scene);
        
         //WORLD-TO-LOCAL on MasterBox
        // var invertParentWorldMatrix = nx.editMasterBox.getWorldMatrix().clone();
        var invertParentWorldMatrix = editObj.aMaster.getWorldMatrix().clone();
        invertParentWorldMatrix.invert();   
        var local_position = BABYLON.Vector3.TransformCoordinates(aPath[i], invertParentWorldMatrix);
        local_position.y+=5;
        // editNode.position.copyFrom(local_position);
        // editNode.position.copyFrom(local_position.addInPlace(new BABYLON.Vector3(360,240,-450))); // new BABYLON.Vector3(360,240,-450);
        editNode.position.copyFrom(local_position.addInPlace(aPos)); // new BABYLON.Vector3(360,240,-450);
        editNode.vectorIndex = i;
        editNode.editFn = function(){
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9) ? -1 : 0;
            nx.ctrl.mag = (nx.ctrl.alt)? 0.01 : 0.1;
            var moveAmount = nx.ctrl.mag * direction;
            if(this.editMode==="greenEdit"){
                if(nx.ctrl.asterisk){
                    console.log('Edit Node ID:'+this.vectorIndex)
                    return; //do not rerender-.
                }
                if(nx.ctrl.num8 || nx.ctrl.num2){ this.position.z += moveAmount; 
                    aPath[this.vectorIndex].z+=moveAmount;
                }
                if(nx.ctrl.num4 || nx.ctrl.num6){ this.position.x += moveAmount; 
                    aPath[this.vectorIndex].x+=moveAmount;
                }
                if(nx.ctrl.num7 || nx.ctrl.num9){ this.position.y += moveAmount; 
                    aPath[this.vectorIndex].y+=moveAmount;
                }
                editObj.aLine = BABYLON.Mesh.CreateLines(null, aPath, null, null, editObj.aLine);
                editObj.aLine.color = BABYLON.Color3.Green();
                // nx.pathLine = BABYLON.Mesh.CreateLines(null, aPath, null, null, nx.pathLine);
                // nx.pathLine.color = BABYLON.Color3.Green();


                // editObj.aLine = nx.pathLine;
            }
        }
        editNode.actionManager = new BABYLON.ActionManager(nx.scene);
        editNode.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
            var eNode = evt.meshUnderPointer;
            if(!eNode){ return; } 
            if(!eNode.editMode){  //MODE-ITERATOR-.
                nx.activeEditNodes.push(eNode);
                eNode.material = nx.greenMat;
                eNode.editMode='greenEdit'
            }else if(eNode.editMode === 'greenEdit' ){
                eNode.material = nx.blueMat;
                // eNode.material = null;
                eNode.editMode=0
                nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
            }
        }));
        editNode.parent = editObj.aMaster;
        // editNode.parent = nx.editMasterBox;
        // nx.editNodes.push(editNode);


        editObj.aNodes.push(editNode);
    }



    nx.editIdx.push(editObj);  //ADD to edit INDEX-.


    // return nx.editPath = aPath;
    return editObj;
}


nx.convertPathPointsToWorld = function (aPath, aParent){


    // nx.worldpipe = []
    var aWorldPath = [];

    // for(var i=0; i<nx.editedPipe.path3D.path.length;i++){
    for(var i=0; i<aPath.length;i++){
        //LOCAL_POSITION to WORLD_POSITION
    // nx.editedPipe.computeWorldMatrix();
        aParent.computeWorldMatrix();
        // var matrix = nx.editedPipe.getWorldMatrix();
        var matrix = aParent.getWorldMatrix();
        // var global_position = BABYLON.Vector3.TransformCoordinates(nx.editedPipe.path3D.path[i], matrix);
        var global_position = BABYLON.Vector3.TransformCoordinates(aPath[i], matrix);
        aWorldPath.push(nx.BV3(Math.floor(global_position.x*1000)/1000,Math.floor(global_position.y*1000)/1000,Math.floor(global_position.z*1000)/1000)) //truncate precision
        // aWorldPath.push(global_position)
        // nx.worldpipe.push(global_position)
    }

    return aWorldPath;

}





//todo nx.pathEditor.pointEditor??
nx.createPointEditor = function(config){ //ADD EDITABLE PATH POINTS-.
    var aPath = config.aPath || [];
    var aPos = config.aPos || new BABYLON.Vector3(0,0,0); 

    // { //LOW-PASS-FILTER-SMOOTHING-.
    //     const AVG_RANGE = 3;
    //     var temp = [];
    //     var buf = BABYLON.Vector3.Zero();
    //     var count;
    //     for (var idx = 0; idx < aPath.length; idx++) {
    //         buf.scaleInPlace(0.0);
    //         count = 0;

    //         for (var innerIdx = Math.max(0, idx - AVG_RANGE); innerIdx < Math.min(idx + AVG_RANGE + 1, aPath.length); innerIdx++) {
    //             buf.addInPlace(aPath[innerIdx]);
    //             count++;
    //         }
    //         buf.scaleInPlace(1.0 / count);

    //         temp.push(buf.clone());
    //     }
    //     aPath = temp;
    // }








    // function createLandingPadMaster(){
    //     //------MASTER-EDIT-----------------------------------------------------------------------------------
    //     nx.landPad.master = BABYLON.Mesh.CreateSphere("editNode", 1, 5, nx.scene);
    //     nx.landPad.master.position = new BABYLON.Vector3(0,50,0)
    //     nx.landPad.master.editTgt = nx.landPad;
    //     nx.landPad.master.material = nx.blueMat;
    //     nx.landPad.master.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
    //         if(this.editMode==="greenEdit"){
    //             var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus || nx.ctrl.num1) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.minus) ? -1 : 0;
    //             // nx.ctrl.mag = (nx.ctrl.alt)? 0.1 : 1;  // alternate MAGNITUDE on Transforms and rots
    //             nx.ctrl.mag = (nx.ctrl.ctrl)? 0.1 : 1;  // default MAGNITUDE on Transforms and rots
    //             var moveAmount = nx.ctrl.mag * direction;
    //             if(nx.ctrl.num8 || nx.ctrl.num2){ //-------------------------Transform-X-Y-Z.
    //                 this.editTgt.position.z+=moveAmount; }
    //             if(nx.ctrl.num4 || nx.ctrl.num6){ 
    //                 this.editTgt.position.x+=moveAmount; }
    //             if((nx.ctrl.plus || nx.ctrl.minus) && !nx.ctrl.alt){ //------Y
    //               this.editTgt.position.y+=moveAmount; }
    //             else if((nx.ctrl.plus || nx.ctrl.minus) && nx.ctrl.alt){//--------PITCH X
    //                 nx.landPad.master.editTgt.rotation.x += moveAmount/10; }
    //             if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
    //                 nx.landPad.master.editTgt.rotation.y += moveAmount/10; }
    //             if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
    //                 nx.landPad.master.editTgt.rotation.z += moveAmount/10; }
    //             if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
    //                 //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
    //                 console.log('nx.landPad---------------------')
    //                 console.log('POS: '+JSON.stringify(nx.landPad.position))
    //                 console.log('ROT: '+JSON.stringify(nx.landPad.rotation))
    //             }
    //         }
    //     }

    // }
    // createLandingPadMaster();  //EDITOR-.

    //VISUALIZE-.
    nx.pathLine = BABYLON.Mesh.CreateLines('aline', aPath, nx.scene, true);
    // nx.pathLine.POS = new BABYLON.Vector3(9,-12,-8)
    // nx.pathLine.position.copyFrom(nx.pathLine.POS)
    nx.pathLine.position = aPos; //new BABYLON.Vector3(360,240,-450); 
    nx.pathLine.color = BABYLON.Color3.Blue();
    // nx.editLine = BABYLON.Mesh.CreateLines('aline', aPath, nx.scene);
    // nx.editLine.position.y+=5;
    // nx.editLine.color = BABYLON.Color3.Green();
    // //------ORIGIN-EDIT-----------------------------------------------------------------------------------
    // nx.editMasterBox = BABYLON.MeshBuilder.CreateBox("aBox", {height: 30, width:30, depth:30 }, nx.scene);
    // nx.editMasterBox.position = new BABYLON.Vector3(aPath[0].x,aPath[0].y+30,aPath[0].z)
    // nx.editMasterBox.editTgt = config.editTgt; //nx.landPad;
    // nx.editMasterBox.material = nx.blueMat;
    // nx.editMasterBox.editFn = function(){

    //     if(this.editMode==="greenEdit"){
    //         var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus || nx.ctrl.num1) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.minus) ? -1 : 0;
    //         // nx.ctrl.mag = (nx.ctrl.alt)? 0.1 : 1;  // alternate MAGNITUDE on Transforms and rots
    //         nx.ctrl.mag = (nx.ctrl.ctrl)? 0.1 : 1;  // default MAGNITUDE on Transforms and rots
    //         var moveAmount = nx.ctrl.mag * direction;
    //         if(nx.ctrl.num8 || nx.ctrl.num2){ //-------------------------Transform-X-Y-Z.
    //             this.editTgt.position.z+=moveAmount; }
    //         if(nx.ctrl.num4 || nx.ctrl.num6){ 
    //             this.editTgt.position.x+=moveAmount; }
    //         if((nx.ctrl.plus || nx.ctrl.minus) && !nx.ctrl.alt){ //------Y
    //           this.editTgt.position.y+=moveAmount; }
    //         else if((nx.ctrl.plus || nx.ctrl.minus) && nx.ctrl.alt){//--------PITCH X
    //             nx.landPad.master.editTgt.rotation.x += moveAmount/10; }
    //         if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
    //             nx.landPad.master.editTgt.rotation.y += moveAmount/10; }
    //         if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
    //             nx.landPad.master.editTgt.rotation.z += moveAmount/10; }
    //         if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
    //             //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
    //             console.log('nx.landPad---------------------')
    //             console.log('POS: '+JSON.stringify(nx.landPad.position))
    //             console.log('ROT: '+JSON.stringify(nx.landPad.rotation))
    //         }
    //     }

    //     // var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9) ? -1 : 0;
    //     // nx.ctrl.mag = (nx.ctrl.alt)? 0.1 : 1;
    //     // var moveAmount = nx.ctrl.mag * direction;
    //     // if(this.editMode==="greenEdit"){
    //     //     if(nx.ctrl.num8 || nx.ctrl.num2){ this.position.z += moveAmount; nx.pathLine.position.z+=moveAmount; }
    //     //     if(nx.ctrl.num4 || nx.ctrl.num6){ this.position.x += moveAmount; nx.pathLine.position.x+=moveAmount; }
    //     //     if(nx.ctrl.num7 || nx.ctrl.num9){ this.position.y += moveAmount; nx.pathLine.position.y+=moveAmount; }
    //     // }
    //     // if(nx.ctrl.asterisk && nx.tenKey.mode==='edit'){nx.ctrl.asterisk=0; //EDIT-RERENDER-EDIT-TARGET
    //     //     // --------------------------------------------------------------------------------------------EXPORT-PRINT-.
    //     //     var vectorPath = []; // PASS-EDITED-PATH-TO-MASTER-PIPE-. AS VECTOR-.
    //     //     for(var i=0; i<nx.editPath.length;i++){
    //     //         vectorPath.push(new BABYLON.Vector3(nx.editPath[i].x,nx.editPath[i].y,nx.editPath[i].z))
    //     //     }
    //     //     renderMasterPipe(vectorPath);
    //     // }
    // }
    // nx.editMasterBox.actionManager = new BABYLON.ActionManager(nx.scene);
    // nx.editMasterBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
    //     var eNode = evt.meshUnderPointer;
    //     if(!eNode){return}
    //     if(!eNode.editMode){
    //         nx.activeEditNodes.push(eNode);
    //         eNode.material = nx.greenMat;
    //         eNode.editMode='greenEdit'
    //     }else if(eNode.editMode === 'greenEdit' ){
    //         eNode.material = nx.blueMat;
    //         // eNode.material = null;
    //         eNode.editMode=0
    //         nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
    //     }

    // }));
    // // nx.editLine.parent = nx.editMasterBox;
    //--------------POINT-EDIT-------------------------------------------------------------------------------------------
    for(var i = 0; i < aPath.length; i++) {
        // var editNode = BABYLON.MeshBuilder.CreateBox("aBox", {height: 0.3, width:0.3, depth:0.3 }, nx.scene);
        var editNode = BABYLON.MeshBuilder.CreateBox("aBox", {height: 1, width:1, depth:1 }, nx.scene);
        
         //WORLD-TO-LOCAL on MasterBox
        var invertParentWorldMatrix = nx.ground.getWorldMatrix().clone();
        invertParentWorldMatrix.invert();   
        var local_position = BABYLON.Vector3.TransformCoordinates(aPath[i], invertParentWorldMatrix);
        local_position.y+=5;
        // // editNode.position.copyFrom(local_position);
        editNode.position.copyFrom(local_position.addInPlace( new BABYLON.Vector3(570,105,-654))); // new BABYLON.Vector3(360,240,-450);
        // editNode.position.copyFrom(local_position.addInPlace(aPos)); // new BABYLON.Vector3(360,240,-450);
        // editNode.position = nx.BV3(aPath[i]).addInPlace(aPos);
        // editNode.position = new BABYLON.Vector3(aPath[i].x,aPath[i].y+3,aPath[i].z)
        editNode.vectorIndex = i;


nx.debounceRender = 0;




        editNode.editFn = function(){
        	console.log('INDEX: '+ this.vectorIndex);
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9) ? -1 : 0;
            nx.ctrl.mag = (nx.ctrl.alt)? 0.01 : 0.1;
            var moveAmount = nx.ctrl.mag * direction;
            if(this.editMode==="greenEdit"){
                if(nx.ctrl.num8 || nx.ctrl.num2){ this.position.z += moveAmount; 
                    aPath[this.vectorIndex].z+=moveAmount;
                }
                if(nx.ctrl.num4 || nx.ctrl.num6){ this.position.x += moveAmount; 
                    aPath[this.vectorIndex].x+=moveAmount;
                }
                if(nx.ctrl.num7 || nx.ctrl.num9){ this.position.y += moveAmount; 
                    aPath[this.vectorIndex].y+=moveAmount;
                }
                nx.pathLine = BABYLON.Mesh.CreateLines(null, aPath, null, null, nx.pathLine); //UPDATE-EDITED-PATH-.
                nx.pathLine.color = BABYLON.Color3.Green();
                if(nx.debounceRender===0){ //debounce edit rendering-.
                    nx.debounceRender=1;
                    setTimeout(function(){
                        config.renderFn(aPath); //Rerender anything built with this PATH-.
                        nx.debounceRender=0;
                    },2000)
                }


            }
        }
        editNode.actionManager = new BABYLON.ActionManager(nx.scene);
        editNode.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
            var eNode = evt.meshUnderPointer;
            if(!eNode){ return; } 
            if(!eNode.editMode){  //MODE-ITERATOR-.
                nx.activeEditNodes.push(eNode);
                eNode.material = nx.greenMat;
                eNode.editMode='greenEdit'
            }else if(eNode.editMode === 'greenEdit' ){
                eNode.material = nx.blueMat;
                // eNode.material = null;
                eNode.editMode=0
                nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
            }
        }));
        // editNode.parent = nx.editMasterBox;
        editNode.parent = nx.ground;

        nx.editNodes.push(editNode);
    }

    console.log('PUBLISH: nx.spacepipe = '+nx.editNodes)
    return nx.editPath = aPath;
}

// var renderMasterPipe = function(masterPath){
//     if(nx.masterPipe){
//         nx.masterPipe.dispose()
//         // nx.editNodes = [];
//     }
//     nx.masterPipe = BABYLON.MeshBuilder.ExtrudeShapeCustom("halfpipe", 
//         {shape:nx.halfpipeShape,path:masterPath,
//         scaleFunction:function(i){return 1
//         },rotationFunction:function(i,e){
//             if(i>=masterPath.length*0.38){ return 0}
//             if(i>=masterPath.length*0.35){ return 0.02}
//             if(i>=masterPath.length*0.29){ return 0.05}
//             return 0
//         },
//         ribbonCloseArray:false,ribbonClosePath:false,
//         updatable:true,sideOrientation:BABYLON.Mesh.DOUBLESIDE},nx.scene);
//     // nx.masterPipe.position = new BABYLON.Vector3(570,240,-650); //MASTER-PIPE-POSITIONING-.
//     nx.masterPipe.position = new BABYLON.Vector3(570,105,-654); //MASTER-PIPE-POSITIONING-.{x: 570, y: 105, z: -643.9}
//     // nx.masterPipe.scaling = new BABYLON.Vector3(nx.globalScale, nx.globalScale, nx.globalScale);

//     nx.masterPipe.scaling = new BABYLON.Vector3(nx.globalScale*1, nx.globalScale*1, nx.globalScale*1);
//     nx.masterPipe.parent = nx.ground;
//     nx.anmz.orby.collisionItems.push(nx.masterPipe);   
// }

/***************************************************END-PATH-EDITOR-.****************************************/


/**********************************-POLYRUBBER-EDITOR-*****************************/


// nx.createPolyRubberPointEditor = function( config ){



nx.polyRubber = {}; //contains the many helper functions required to edit polyrubber-.
nx.polyRubber.DEFAULTVERTSTACK3X2 = [  
[{x:10,y:0,z:10},{x:0,y:0,z:10},{x:-10,y:0,z:10}],
[{x:10,y:0,z:0},{x:0,y:0,z:0},{x:-10,y:0,z:0}],
]
nx.polyRubber.DEFAULTVERTSTACK3X3 = [  
[{x:10,y:0,z:10},{x:0,y:0,z:10},{x:-10,y:0,z:10}],
[{x:10,y:0,z:0},{x:0,y:0,z:0},{x:-10,y:0,z:0}],
[{x:10,y:0,z:-10},{x:0,y:0,z:-10},{x:-10,y:0,z:-10}]
]
nx.polyRubber.DEFAULTVERTSTACK4X4 = [  
[{x:10,y:0,z:10},{x:0,y:0,z:10},{x:-10,y:0,z:10},{x:-20,y:0,z:10}],
[{x:10,y:0,z:0},{x:0,y:0,z:0},{x:-10,y:0,z:0},{x:-20,y:0,z:0}],
[{x:10,y:0,z:-10},{x:0,y:0,z:-10},{x:-10,y:0,z:-10},{x:-20,y:0,z:-10}],
[{x:10,y:0,z:-20},{x:0,y:0,z:-20},{x:-10,y:0,z:-20},{x:-20,y:0,z:-20}]
]
nx.polyRubber.DEFAULTVERTSTACK5X5 = [  
[{x:20,y:0,z: 20},{x:10,y:0,z: 20},{x:0,y:0,z: 20},{x:-10,y:0,z: 20},{x:-20,y:0,z: 20}],
[{x:20,y:0,z: 10},{x:10,y:0,z: 10},{x:0,y:0,z: 10},{x:-10,y:0,z: 10},{x:-20,y:0,z: 10}],
[{x:20,y:0,z: 0 },{x:10,y:0,z: 0 },{x:0,y:0,z:  0},{x:-10,y:0,z:  0},{x:-20,y:0,z:  0}],
[{x:20,y:0,z:-10},{x:10,y:0,z:-10},{x:0,y:0,z:-10},{x:-10,y:0,z:-10},{x:-20,y:0,z:-10}],
[{x:20,y:0,z:-20},{x:10,y:0,z:-20},{x:0,y:0,z:-20},{x:-10,y:0,z:-20},{x:-20,y:0,z:-20}]
]
nx.polyRubber.DEFAULTVERTSTACK5X4 = [  
[{x:20,y:0,z: 20},{x:10,y:0,z: 20},{x:0,y:0,z: 20},{x:-10,y:0,z: 20},{x:-20,y:0,z: 20}],
[{x:20,y:0,z: 10},{x:10,y:0,z: 10},{x:0,y:0,z: 10},{x:-10,y:0,z: 10},{x:-20,y:0,z: 10}],
[{x:20,y:0,z: 0 },{x:10,y:0,z: 0 },{x:0,y:0,z:  0},{x:-10,y:0,z:  0},{x:-20,y:0,z:  0}],
[{x:20,y:0,z:-10},{x:10,y:0,z:-10},{x:0,y:0,z:-10},{x:-10,y:0,z:-10},{x:-20,y:0,z:-10}],
]
nx.polyRubber.DEFAULTVERTSTACK6X6 = [  
[{x:20,y:0,z: 20},{x:10,y:0,z: 20},{x:0,y:0,z: 20},{x:-10,y:0,z: 20},{x:-20,y:0,z: 20},{x:-30,y:0,z: 20}],
[{x:20,y:0,z: 10},{x:10,y:0,z: 10},{x:0,y:0,z: 10},{x:-10,y:0,z: 10},{x:-20,y:0,z: 10},{x:-30,y:0,z: 10}],
[{x:20,y:0,z: 0 },{x:10,y:0,z: 0 },{x:0,y:0,z:  0},{x:-10,y:0,z:  0},{x:-20,y:0,z:  0},{x:-30,y:0,z:  0}],
[{x:20,y:0,z:-10},{x:10,y:0,z:-10},{x:0,y:0,z:-10},{x:-10,y:0,z:-10},{x:-20,y:0,z:-10},{x:-30,y:0,z:-10}],
[{x:20,y:0,z:-20},{x:10,y:0,z:-20},{x:0,y:0,z:-20},{x:-10,y:0,z:-20},{x:-20,y:0,z:-20},{x:-30,y:0,z:-20}],
[{x:20,y:0,z:-30},{x:10,y:0,z:-30},{x:0,y:0,z:-30},{x:-10,y:0,z:-30},{x:-20,y:0,z:-30},{x:-30,y:0,z:-30}]
]

nx.polyRubber.createPolyRubberEditor = function( config ){ 
	//USAGE: nx.polyRubber.createPolyRubberEditor({aMesh:nx.topConnector}); //GOOD-polyrubber-RIBBON-EDITOR-.;
	//DESCRIPTION: a PLANE that can expand and be edited into any shape-.

    //CONFIG: {aMesh:nx.topConnector}
// debugger;
    if(!config.aMesh){ return; }
    nx.polyRubber.mesh = config.aMesh;
    nx.polyRubber.positions = nx.polyRubber.mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind); //extra for ribbon
    nx.polyRubber.indices = nx.polyRubber.mesh.getIndices();
    // nx.polyRubber.model = nx.polyRubber.positions.slice();
    // nx.polyRubber.positions = nx.polyRubber.polyMesh1.getVerticesData(BABYLON.VertexBuffer.PositionKind); //extra for ribbon
    // nx.polyRubber.indices = nx.polyRubber.polyMesh1.getIndices();
    // nx.polyRubber.model = nx.polyRubber.positions.slice();
    nx.polyRubber.normals = [];

    //--------------POINT-EDIT-------------------------------------------------------------------------------------------
    nx.polyRubber.editNodes = [];
    for (var i=0; i < nx.polyRubber.positions.length; i+=3){
        var editNode = BABYLON.Mesh.CreateSphere("editNode"+i, 1, 0.5, nx.scene);
        editNode.editMode = 0;
        editNode.vectorIndex = i;
        editNode.material = nx.blueMat;
        editNode.position = new BABYLON.Vector3(nx.polyRubber.positions[i],nx.polyRubber.positions[i+1],nx.polyRubber.positions[i+2])
        nx.polyRubber.editNodes.push(editNode)
        editNode.parent = config.aMesh;
        // editNode.parent = nx.meshEditor.polyMesh1;
        editNode.editFn = function(){ //---------TEN-KEY-EVENTS--------------------------------------------------------------------------.
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.minus) ? -1 : 0;
            nx.ctrl.mag = (nx.ctrl.alt)? 0.01 : 0.1;
            var moveAmount = nx.ctrl.mag * direction;
            if(this.editMode==="greenEdit"){


            	//TODO: deselect ALL/selectall behavior-. FOR POLYRUBBER-.
			    // if(nx.ctrl.forwardslash && nx.tenKey.mode!='edit'){nx.ctrl.forwardslash=0; //FOCUS-CAM on zero
			    //     nx.scene.activeCamera.setTarget(BABYLON.Vector3.Zero());
			    //     return;
			    // }
			    // if(nx.ctrl.forwardslash){nx.ctrl.forwardslash=0; //----------------SELECT-ALL---------------.
			    //     if(nx.activeEditNodes.length===2){ // -----------------select inbetween
			    //         //SPECIFIC BEHAVIOR FOR PATH-EDITOR-MOVE-TO-PATH-EDITOR-.
			    //         // var foundTgt = 0;
			    //         // for(var h=0; h< nx.editIdx.length;h++){
			    //         //     var edits = nx.editIdx[h]
			    //         //     for(var i=0; i< edits.aNodes.length;i++){
			    //         //         var aNode = edits.aNodes[i];
			    //         //         if(aNode===nx.activeEditNodes[0] || aNode===nx.activeEditNodes[1]){  //First or Second of two selections.
			    //         //             if(!foundTgt){ foundTgt = 1; //START-SELECTING-.
			    //         //             }else{ break; } //END SELECTING-.
			    //         //         } else if (foundTgt) { //SELECT-.
			    //         //             aNode.material = nx.greenMat;
			    //         //             aNode.editMode= "greenEdit"
			    //         //             nx.activeEditNodes.push(aNode);
			    //         //         }
			    //         //     }
			    //         //     if(foundTgt){break;}
			    //         // }  
			    //         //POLY-MESH-EDIT-SPECIFIC--MOVE-TO-POLYMESH-LOGIC-.
			    //         for(var i=0; i< nx.editNodes.length;i++){
			    //             if(nx.editNodes[i]===nx.activeEditNodes[0] || nx.editNodes[i]===nx.activeEditNodes[1]){
			    //                 if(!foundTgt){ foundTgt = 1; //START-SELECTING-.
			    //                 }else{ break; } //END SELECTING-.
			    //             } else if (foundTgt) { //SELECT-.
			    //                 nx.editNodes[i].material = nx.greenMat;
			    //                 nx.editNodes[i].editMode= "greenEdit"
			    //                 nx.activeEditNodes.push(nx.editNodes[i]);
			    //             }
			    //         }        
			    //     }else if(nx.activeEditNodes.length>0){ // -----------------deselect all
			    //         //TODO: write PATH deselect all same time-.
			    //         //POLY-MESH-EDIT-SPECIFIC--MOVE-TO-POLYMESH-LOGIC-.
			    //         for(var i=0; i< nx.activeEditNodes.length;i++){
			    //                 nx.editNodes[i].material = nx.blueMat;
			    //             // nx.activeEditNodes[i].material = null;
			    //             nx.activeEditNodes[i].editMode=0
			    //         }
			    //         nx.activeEditNodes = [];
			    //     } else { //--------------------------------------------select all
			    //         //TODO: write PATH select all same time-.
			    //         //POLY-MESH-EDIT-SPECIFIC--MOVE-TO-POLYMESH-LOGIC-.
			    //         var editNode = {};
			    //         for(var i=0; i< nx.editNodes.length;i++){
			    //             editNode = nx.editNodes[i];
			    //             editNode.material = nx.greenMat;
			    //             // editNode.material = nx.blueMat;
			    //             editNode.editMode= "greenEdit"
			    //             nx.activeEditNodes.push(editNode);
			    //         }
			    //     }
			    //     return;
			    // }






                if(nx.ctrl.num8 || nx.ctrl.num2){ this.position.z += moveAmount; 
                    nx.polyRubber.positions[this.vectorIndex+2] += moveAmount;
                }
                if(nx.ctrl.num4 || nx.ctrl.num6){ this.position.x += moveAmount; 
                    nx.polyRubber.positions[this.vectorIndex+0] += moveAmount;
                }
                if(nx.ctrl.plus || nx.ctrl.minus){ this.position.y += moveAmount; 
                    nx.polyRubber.positions[this.vectorIndex+1] += moveAmount;
                }
                // debugger;
                nx.polyRubber.positions = nx.editz.truncatePathPrecision(nx.polyRubber.positions); //TRUNCATE-DIRECTLY AFTER EDITZ-.
                nx.polyRubber.updateMeshEdits(nx.polyRubber.mesh, nx.polyRubber.positions, nx.polyRubber.normals, nx.polyRubber.indices)
            }
        }
        editNode.actionManager = new BABYLON.ActionManager(nx.scene); //--MESH-CLICK-EVENTS---------------------------------------------.
        editNode.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
            var eNode = evt.meshUnderPointer;
            if(!eNode){ return; } 
            if(!eNode.editMode){  //MODE-ITERATOR-.
                nx.activeEditNodes.push(eNode);
                eNode.material = nx.greenMat;
                eNode.editMode='greenEdit'
            }else if(eNode.editMode === 'greenEdit' ){
                eNode.material = nx.blueMat;
                eNode.editMode=0
                nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
            }
        }));
        nx.editNodes.push(editNode);
    }
    //--------------END-POINT-EDIT-------------------------------------------------------------------------------------------

    // debugger;
    // if(nx.editz.createMasterEditor){ nx.editz.createMasterEditor(nx.polyRubber.mesh); }  //create EDIT MASTER-.
    if(nx.polyRubber.createMasterEditor){ nx.polyRubber.createMasterEditor(nx.polyRubber); }  //create EDIT MASTER-.

}

//--------------EDIT-RE-RENDERER-------------------------------------------------------------------------------------------
nx.polyRubber.updateMeshEdits = function(ribbon, positions, normals, indices) {
    ribbon.updateVerticesData(BABYLON.VertexBuffer.PositionKind, positions, false, true);
    BABYLON.VertexData.ComputeNormals(positions, indices, normals);
    ribbon.updateVerticesData(BABYLON.VertexBuffer.NormalKind, normals, false, false);
    //--PUBLISH-POLYRUBBER-POSITIONS-.

    //POLYRUBBER-PUBLISHING-.
    if(!ribbon.polyRow || !ribbon.polyCol){console.log('need rows and cols in ribbon to rehydrate')}
    nx.polyRubber.published = {};
    nx.polyRubber.published.normals = [];
    nx.polyRubber.published.positions = [];
    nx.polyRubber.published.indices = indices;
    // nx.polyRubber.published.row = ribbon.polyRow; //11; //length of outer array is row
    // nx.polyRubber.published.col = ribbon.polyCol; //3; //length of inner arrays is col
    // nx.polyRubber.published.flatPath = [];

    // for(var i=0; i< positions.length; i++){
    // 	// nx.polyRubber.published.flatPath.push(Math.floor(positions[i]*1000)/1000); //important: floor to 3 decimal places precision truncate not round-.
    // 	nx.polyRubber.published.positions.push(Math.floor(positions[i]*1000)/1000); //important: floor to 3 decimal places precision truncate not round-.
    // }
    // for(var i=0; i< normals.length; i++){
    // 	nx.polyRubber.published.normals.push(Math.floor(normals[i]*1000)/1000); //important: floor to 3 decimal places precision truncate not round-.
    // }
    nx.polyRubber.published.POS = ribbon.position;
    nx.polyRubber.published.ROT = ribbon.rotation;


// debugger;
                // var arrayPaths = nx.meshEditor.recalcFLATPOSFromVerts(positions);
	            var flatVectors = [];
	            if(positions.length){ //CONVERT-VERTEX-TO-VECTOR-.
	               for (var i=0; i < positions.length; i+=3){
	                    // var point = new BABYLON.Vector3(positions[i],positions[i+1],positions[i+2])
	                    // flatVectors.push(point)
	                    // flatVectors.push(new BABYLON.Vector3(positions[i],positions[i+1],positions[i+2]))

	                    //DECIMAL-TRUNCATION-SOLUTION-.
	                    flatVectors.push(new BABYLON.Vector3((Math.floor(positions[i]*1000)/1000),(Math.floor(positions[i+1]*1000)/1000),(Math.floor(positions[i+2]*1000)/1000)))
	                }
	            }
	            // pathsArray = paths;

	            //Good export of polyrubber: contains ROWCOL and Precision Truncation-.
                nx.polyRubber.published.STACKPATH = nx.polyRubber.recalcSTACKPOSFromFLATPATH(flatVectors,ribbon.polyRow,ribbon.polyCol);
                console.log('POLYSTACK ROWCOL: '+ ribbon.polyRow + ' : '+ ribbon.polyCol)
			    console.log('var POLYSTACKPATH = '+JSON.stringify(nx.polyRubber.published.STACKPATH)+';'); //PUBLISH-POLYRUBBER - on every edit (simple)-.


                // var aSTACKPATHS = recalcSTACKPOSFromFLATPATH(arrayPaths);
                // //TODO:
                // //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                // console.log('nx.meshEditor.polyMesh1---------------------')
                // console.log('POS: '+JSON.stringify(nx.meshEditor.polyMesh1.position))
                // console.log('ROT: '+JSON.stringify(nx.meshEditor.polyMesh1.rotation))
                // console.log('COL: '+nx.meshEditor.col)
                // console.log('ROW: '+nx.meshEditor.row)
                // console.log('STACKPATH------------------------------------')
                // console.log(JSON.stringify(aSTACKPATHS))

// debugger;
    // nx.polyRubber.published.VECTORSTACK = nx.polyRubber.recalcSTACKPOSFromFLATPATH(nx.polyRubber.published.flatPath, nx.polyRubber.published.row, nx.polyRubber.published.col)
};
//--------------END-EDIT-RE-RENDERER-------------------------------------------------------------------------------------------

nx.polyRubber.recalcSTACKPOSFromFLATPATH = function(arrayPath, polyRow, polyCol){
    var path = [], idx=0;
    var arrpaths = [];
    if(arrayPath.length){ //CONVERT-FLATVERTPATH-TO-VECTORSTACK-.
        for(var row=0; row<polyRow;row++){
            path=[];
            for(var col=0; col<polyCol;col++){
                path.push(new BABYLON.Vector3(arrayPath[idx].x,arrayPath[idx].y,arrayPath[idx].z))
                idx++;
            }
            arrpaths.push(path)
        }
    }
    return arrpaths;
}




nx.polyRubber.recalcFLATPOSFromVerts = function(positions){
        var pathsArray = [];//nx.meshEditor.polyMesh1._positions;
        if(!nx.meshEditor.polyMesh1._positions){ //CAUTION: non-existant-positions-check-and-manual-re-calculate
            nx.meshEditor.verts = nx.meshEditor.polyMesh1.getVerticesData(BABYLON.VertexBuffer.PositionKind); //extra for ribbon
            var paths = [];
            if(nx.meshEditor.verts.length){ //CONVERT-VERTEX-TO-VECTOR-.
               for (var i=0; i < nx.meshEditor.verts.length; i+=3){
                    var point = new BABYLON.Vector3(nx.meshEditor.positions[i],nx.meshEditor.positions[i+1],nx.meshEditor.positions[i+2])
                    paths.push(point)
                }
            }
            pathsArray = paths;
        } else {
            pathsArray = nx.meshEditor.polyMesh1._positions;
        }
        return pathsArray;
    }


nx.polyRubber.publishFromPositionsPath = function(){

	var positions = publishedPath;

    // var arrayPaths = nx.meshEditor.recalcFLATPOSFromVerts();
    // var aSTACKPATHS = nx.polyRubber.recalcSTACKPOSFromFLATPATH(arrayPaths);
    //TODO:
    //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
    // console.log('nx.meshEditor.polyMesh1---------------------')
    // console.log('POS: '+JSON.stringify(nx.meshEditor.polyMesh1.position))
    // console.log('ROT: '+JSON.stringify(nx.meshEditor.polyMesh1.rotation))
    // console.log('COL: '+nx.meshEditor.col)
    // console.log('ROW: '+nx.meshEditor.row)
    // console.log('STACKPATH------------------------------------')
    // console.log(JSON.stringify(aSTACKPATHS))
}


nx.polyRubber.addRowCol = function(config){ //EXPANDS THE MESH ADDING A ROW OR A COLUMN-.
	debugger; //TODO needs to be personalized to parameter, NOT (single instance) nx.meshEditor
	if(!config.dir || !config.editMesh){return}
    var flatPOS = nx.meshEditor.recalcFLATPOSFromVerts()
    var newPaths = [];
    var path = [];
    var idx = 0;
    if(config.dir==='top'){ //--------------------------------------------------------ADD NODES: top
        for(var row=-1; row<nx.meshEditor.row;row++){
            // path=[];
            if(row===-1){ //look into row 1 increment numbers and push new column-.
                for(var col=0; col<nx.meshEditor.col;col++){
                    newPaths.push(new BABYLON.Vector3(flatPOS[col].x,flatPOS[col].y+10,flatPOS[col].z+10))
                }
            } else {
                for(var col=0; col<nx.meshEditor.col;col++){
                    newPaths.push(new BABYLON.Vector3(flatPOS[idx].x,flatPOS[idx].y,flatPOS[idx].z))
                    idx++;
                }
            }
        }
        nx.meshEditor.row++;
    } else if (config.dir==='rgt'){ //-------------------------------------------------------------------------------RGT-EXPAND
        for(var row=0; row<nx.meshEditor.row;row++){
            for(var col=0; col<nx.meshEditor.col;col++){
                if(col===0){
                    newPaths.push(new BABYLON.Vector3(flatPOS[idx].x+10,flatPOS[idx].y+10,flatPOS[idx].z))
                }
                newPaths.push(new BABYLON.Vector3(flatPOS[idx].x,flatPOS[idx].y,flatPOS[idx].z))
                idx++;
            }
        }
        nx.meshEditor.col++; 
    } else if (config.dir==='btm'){ 
        for(var row=0; row<nx.meshEditor.row;row++){
            for(var col=0; col<nx.meshEditor.col;col++){
                newPaths.push(new BABYLON.Vector3(flatPOS[idx].x,flatPOS[idx].y,flatPOS[idx].z))
                idx++;
            }
            if(row===nx.meshEditor.row-1){ //look into last row  and push new column-.
                for(var col=nx.meshEditor.col; col>0; col--){ //SPECIAL-INVERTED-ORDER-ON-THIS-.
                    newPaths.push(new BABYLON.Vector3(flatPOS[flatPOS.length-col].x,flatPOS[flatPOS.length-col].y+10,flatPOS[flatPOS.length-col].z-10))
                }
            } 
        }            
        nx.meshEditor.row++;
    } else if (config.dir==='lft'){ 
        for(var row=0; row<nx.meshEditor.row;row++){
            for(var col=0; col<nx.meshEditor.col;col++){
                newPaths.push(new BABYLON.Vector3(flatPOS[idx].x,flatPOS[idx].y,flatPOS[idx].z))
                if(col===nx.meshEditor.col-1){
                    newPaths.push(new BABYLON.Vector3(flatPOS[idx].x-10,flatPOS[idx].y+10,flatPOS[idx].z))
                }
                idx++;
            }
        }
        nx.meshEditor.col++; 
    }
    //SAVE-POLY:-ROT,-POS,-SIZ
    nx.meshEditor.polyPOS = new BABYLON.Vector3(nx.meshEditor.polyMesh1.position.x,nx.meshEditor.polyMesh1.position.y,nx.meshEditor.polyMesh1.position.z)
    nx.meshEditor.polyROT = new BABYLON.Vector3(nx.meshEditor.polyMesh1.rotation.x,nx.meshEditor.polyMesh1.rotation.y,nx.meshEditor.polyMesh1.rotation.z)
    //PREPARE-SAVED-DATA-IN-LOCAL-MEMORY-FOR-REFRESH-.
    var aStackOfPaths = recalcSTACKPOSFromFLATPATH(newPaths);
    nx.meshEditor.STACKPATHS = JSON.parse(JSON.stringify(aStackOfPaths)); //update the edits for rehydration on reload
    nx.meshEditor.disposeTenKeyEditor();
    createPolyMeshEditor(); //reload the edits
}






nx.polyRubber.createMasterEditor = function(polyObj){  //FOR POLYRUBBER SPECIFIC - for extrude!
	//USAGE: if(nx.editz.createMasterEditor){ nx.editz.createMasterEditor(nx.polyRubber.mesh); }  //create EDIT MASTER-.
	var editObj = polyObj.mesh;
    //------MASTER-EDIT-----------------------------------------------------------------------------------
    editObj.master = BABYLON.Mesh.CreateSphere("editNode", 2, 2, nx.scene);
    editObj.master.position = new BABYLON.Vector3(0,50,0)
    editObj.master.editTgt = editObj;
    editObj.master.material = nx.blueMat;

    editObj.master.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
        if(this.editMode==="greenEdit"){
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus || nx.ctrl.num1) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.minus) ? -1 : 0;
            nx.ctrl.mag = (nx.ctrl.ctrl)? 0.1 : 1;  // default MAGNITUDE on Transforms and rots
            var moveAmount = nx.ctrl.mag * direction;
            if(nx.ctrl.num8 || nx.ctrl.num2){ //-------------------------Transform-X-Y-Z.
                this.editTgt.position.z+=moveAmount; }
            if(nx.ctrl.num4 || nx.ctrl.num6){ 
                this.editTgt.position.x+=moveAmount; }
            if((nx.ctrl.plus || nx.ctrl.minus) && !nx.ctrl.alt){ //------Y
              this.editTgt.position.y+=moveAmount; }
            else if((nx.ctrl.plus || nx.ctrl.minus) && nx.ctrl.alt){//--------PITCH X
                editObj.master.editTgt.rotation.x += moveAmount/10; }
            if(!nx.ctrl.alt){ //-------------------------------------------default behavior-.
                if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
                    editObj.master.editTgt.rotation.y += moveAmount/10;
                }
                if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
                    editObj.master.editTgt.rotation.z += moveAmount/10;
                }
            } else {  // alternate behavior for POLYRUBBER! - .  //--------------------------EXPAND-polymesh:- top, right, bottom, left
debugger;
//ERROR - can only extrude once then breaks.
                if(nx.ctrl.num7){ nx.polyRubber.addRowCol({dir:'top',editMesh:polyObj}) }
                else if (nx.ctrl.num9){ nx.polyRubber.addRowCol({dir:'rgt',editMesh:polyObj}) }
                else if (nx.ctrl.num3){ nx.polyRubber.addRowCol({dir:'btm',editMesh:polyObj}) }
                else if (nx.ctrl.num1){ nx.polyRubber.addRowCol({dir:'lft',editMesh:polyObj}) }
            }  
            // if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
            //     var arrayPaths = nx.meshEditor.recalcFLATPOSFromVerts();
            //     var aSTACKPATHS = recalcSTACKPOSFromFLATPATH(arrayPaths);
            //     //TODO:
            //     //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
            //     console.log('nx.meshEditor.polyMesh1---------------------')
            //     console.log('POS: '+JSON.stringify(nx.meshEditor.polyMesh1.position))
            //     console.log('ROT: '+JSON.stringify(nx.meshEditor.polyMesh1.rotation))
            //     console.log('COL: '+nx.meshEditor.col)
            //     console.log('ROW: '+nx.meshEditor.row)
            //     console.log('STACKPATH------------------------------------')
            //     console.log(JSON.stringify(aSTACKPATHS))
            // }

            // if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
            //     editObj.master.editTgt.rotation.y += moveAmount/10; }
            // if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
            //     editObj.master.editTgt.rotation.z += moveAmount/10; }
            if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
                //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                console.log('editObj---------------------')
                console.log('POS: '+JSON.stringify(editObj.position))
                console.log('ROT: '+JSON.stringify(editObj.rotation))
                debugger;
                console.log('COL: '+editObj.master.editTgt.polyCol)
                console.log('ROW: '+editObj.master.editTgt.polyRow)
                if(editObj && editObj.published && editObj.published.STACKPATH){
                	console.log('POLYSTACKPATH: '+JSON.stringify(editObj.published.STACKPATH));
                } //PUBLISH-POLYRUBBER from master editor-.

            }
        }
    }
    editObj.master.actionManager = new BABYLON.ActionManager(nx.scene); //EDIT-MESH-CLICK-EVENTS-------------------------------------------
    editObj.master.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
        var eNode = evt.meshUnderPointer;
        if(!eNode){return}
        if(!eNode.editMode){
            nx.activeEditNodes.push(eNode);
            eNode.material = nx.greenMat;
            eNode.editMode='greenEdit'
        }else if(eNode.editMode === 'greenEdit' ){
            eNode.material = nx.blueMat;
            eNode.editMode=0
            nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
        }
    }));
    editObj.master.parent = editObj;
}


// nx.createMeshMaster = function(editObj){  //TODO: rename nx.editz.masterPOS //THIS IS A working POS-EDITOR - attached to darcbot as example-.
nx.editz.createMasterEditor = function(editObj){  //NOT FOR POLYRUBBER - it has its own!
	//THIS IS A working POS-EDITOR: good for POSITIONING anything in the acozmoscape.
	//USAGE: if(nx.editz.createMasterEditor){ nx.editz.createMasterEditor(nx.darkbot); }  //GOOD-POS-EDITOR-example-.
    //------MASTER-EDIT-----------------------------------------------------------------------------------
    editObj.master = BABYLON.Mesh.CreateSphere("editNode", .5, .5, nx.scene);
    editObj.master.position = new BABYLON.Vector3(0,50,0)
    editObj.master.editTgt = editObj;
    editObj.master.material = nx.blueMat;

    editObj.master.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
        if(this.editMode==="greenEdit"){
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus || nx.ctrl.num1) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.minus) ? -1 : 0;
            nx.ctrl.mag = (nx.ctrl.ctrl)? 0.1 : 1;  // default MAGNITUDE on Transforms and rots
            var moveAmount = nx.ctrl.mag * direction;
            if(nx.ctrl.num8 || nx.ctrl.num2){ //-------------------------Transform-X-Y-Z.
                this.editTgt.position.z+=moveAmount; }
            if(nx.ctrl.num4 || nx.ctrl.num6){ 
                this.editTgt.position.x+=moveAmount; }
            if((nx.ctrl.plus || nx.ctrl.minus) && !nx.ctrl.alt){ //------Y
              this.editTgt.position.y+=moveAmount; }
            else if((nx.ctrl.plus || nx.ctrl.minus) && nx.ctrl.alt){//--------PITCH X
                editObj.master.editTgt.rotation.x += moveAmount/10; }
            if(!nx.ctrl.alt){ //-------------------------------------------default behavior-.
                if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
                    editObj.master.editTgt.rotation.y += moveAmount/10;
                }
                if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
                    editObj.master.editTgt.rotation.z += moveAmount/10;
                }
            } else {  // alternate behavior for POLYRUBBER! - .  //--------------------------EXPAND-polymesh:- top, right, bottom, left
// debugger;
//                 if(nx.ctrl.num7){ nx.polyRubber.addRowCol('top') }
//                 else if (nx.ctrl.num9){ nx.polyRubber.addRowCol('rgt') }
//                 else if (nx.ctrl.num3){ nx.polyRubber.addRowCol('btm') }
//                 else if (nx.ctrl.num1){ nx.polyRubber.addRowCol('lft') }
            }  
            // if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
            //     var arrayPaths = nx.meshEditor.recalcFLATPOSFromVerts();
            //     var aSTACKPATHS = recalcSTACKPOSFromFLATPATH(arrayPaths);
            //     //TODO:
            //     //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
            //     console.log('nx.meshEditor.polyMesh1---------------------')
            //     console.log('POS: '+JSON.stringify(nx.meshEditor.polyMesh1.position))
            //     console.log('ROT: '+JSON.stringify(nx.meshEditor.polyMesh1.rotation))
            //     console.log('COL: '+nx.meshEditor.col)
            //     console.log('ROW: '+nx.meshEditor.row)
            //     console.log('STACKPATH------------------------------------')
            //     console.log(JSON.stringify(aSTACKPATHS))
            // }

            // if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
            //     editObj.master.editTgt.rotation.y += moveAmount/10; }
            // if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
            //     editObj.master.editTgt.rotation.z += moveAmount/10; }
            if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
                //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                console.log('editObj---------------------')
                console.log('POS: '+JSON.stringify(editObj.position))
                console.log('ROT: '+JSON.stringify(editObj.rotation))
                // debugger;
                // console.log('COL: '+editObj.master.editTgt.polyCol)
                // console.log('ROW: '+editObj.master.editTgt.polyRow)
                console.log('COL: '+editObj.master.editTgt.col)
                console.log('ROW: '+editObj.master.editTgt.row)
                // if(editObj && editObj.published && editObj.published.STACKPATH){
                	// console.log('POLYSTACKPATH: '+JSON.stringify(editObj.published.STACKPATH));
                // } //PUBLISH-POLYRUBBER from master editor-.
                // else {
                    //     console.log('STACKPATH------------------------------------')
            		console.log(JSON.stringify(aSTACKPATHS))
                	
                // }

            }
        }
    }
    editObj.master.actionManager = new BABYLON.ActionManager(nx.scene); //EDIT-MESH-CLICK-EVENTS-------------------------------------------
    editObj.master.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
        var eNode = evt.meshUnderPointer;
        if(!eNode){return}
        if(!eNode.editMode){
            nx.activeEditNodes.push(eNode);
            eNode.material = nx.greenMat;
            eNode.editMode='greenEdit'
        }else if(eNode.editMode === 'greenEdit' ){
            eNode.material = nx.blueMat;
            eNode.editMode=0
            nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
        }
    }));
    editObj.master.parent = editObj;
}
// createMeshMaster( );  //EDITOR-.


// }

nx.meshEditor = {};
// var selectedEditNodes = [];
// var meshEditKeys = {inc:0,dec:0,ext:0}//increment, decrement, extrude.

nx.meshEditor.DEFAULTVERTSTACK = [  //dwn
[{x:10,y:0,z:10},{x:0,y:0,z:10},{x:-10,y:0,z:10}],
[{x:10,y:0,z:0},{x:0,y:0,z:0},{x:-10,y:0,z:0}],
[{x:10,y:0,z:-10},{x:0,y:0,z:-10},{x:-10,y:0,z:-10}]
]

// nx.meshEditor.DEFAULTVERTSTACK = [ //up
// [{x:-10,y:0,z:-10},{x:0,y:0,z:-10},{x:10,y:0,z:-10}],
// [{x:-10,y:0,z:0},{x:0,y:0,z:0},{x:10,y:0,z:0}],
// [{x:-10,y:0,z:10},{x:0,y:0,z:10},{x:10,y:0,z:10}]
// ]

nx.meshEditor.col = 3; //allows ribbon expand
nx.meshEditor.row = 3; //11;
//SAVE-BETWEEN-EXTENDS-. TODO rename to nx.exp.?
// nx.meshEditor.polyPOS = null;// {"x":108.40000000000003,"y":4.199999999999999,"z":0.6};
// // var polyROT = {"x":0,"y":-0.30000000000000004,"z":-0.4};
// nx.meshEditor.polyROT = null;//{"x":-0.03999999999999996,"y":0.03999999999999997,"z":0.10999999999999997};
// // var STACKPATHS = [[{"x":21.700044631958008,"y":0.8999505043029785,"z":9.899847030639648},{"x":0,"y":40,"z":50},{"x":-10,"y":40,"z":50}],[{"x":21.200042724609375,"y":-3.900043487548828,"z":9.699884414672852},{"x":0,"y":30,"z":40},{"x":-10,"y":30,"z":40}],[{"x":21.000041961669922,"y":-6.200036525726318,"z":8.699918746948242},{"x":0,"y":20,"z":30},{"x":-10,"y":20,"z":30}],[{"x":21.000041961669922,"y":-7.799996852874756,"z":6.499956130981445},{"x":0,"y":10,"z":20},{"x":-10,"y":10,"z":20}],[{"x":20.900041580200195,"y":-8.499996185302734,"z":4.899995803833008},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":8.999996185302734},{"x":-17.400028228759766,"y":-1.3000003099441528,"z":8.999996185302734}],[{"x":21.000041961669922,"y":-9.600000381469727,"z":0.09999992698431015},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":-1.0000001192092896},{"x":-14.500017166137695,"y":-1.7000004053115845,"z":-1.0000001192092896}],[{"x":21.400043487548828,"y":-8.499996185302734,"z":-4.399996280670166},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":-11.000003814697266},{"x":-16.800025939941406,"y":-0.8000001907348633,"z":-10.900003433227539}],[{"x":21.500043869018555,"y":-7.499997138977051,"z":-6.299956321716309},{"x":-9.099998474121094,"y":-3.400001049041748,"z":-20.30000114440918},{"x":-19.100034713745117,"y":-3.400001049041748,"z":-20.30000114440918}],[{"x":21.700044631958008,"y":-6.000036716461182,"z":-8.299917221069336},{"x":-9.099998474121094,"y":6.599956035614014,"z":-30.30000114440918},{"x":-19.100034713745117,"y":6.599956035614014,"z":-30.30000114440918}],[{"x":22.100046157836914,"y":-3.3000457286834717,"z":-9.499883651733398},{"x":0,"y":30,"z":-40},{"x":-19.100034713745117,"y":16.59994888305664,"z":-40.29999542236328}],[{"x":22.50004768371582,"y":1.1999582052230835,"z":-9.299844741821289},{"x":0,"y":40,"z":-50},{"x":-19.100034713745117,"y":26.600101470947266,"z":-50.29999542236328}]];
// nx.meshEditor.STACKPATHS = [];//[[{"x":21.700044631958008,"y":0.8999505043029785,"z":9.899847030639648},{"x":-16.4000244140625,"y":16.800064086914062,"z":49.40000915527344},{"x":-28.200069427490234,"y":16.00006103515625,"z":53.299949645996094}],[{"x":21.200042724609375,"y":-3.900043487548828,"z":9.699884414672852},{"x":-23.400053024291992,"y":2.1999220848083496,"z":48.59986877441406},{"x":-40.99994659423828,"y":-4.700076580047607,"z":53.09980010986328}],[{"x":21.000041961669922,"y":-6.200036525726318,"z":8.699918746948242},{"x":-23.600053787231445,"y":-3.300039291381836,"z":44.19982147216797},{"x":-29.100072860717773,"y":-4.100038528442383,"z":40.29988098144531}],[{"x":21.000041961669922,"y":-7.799996852874756,"z":6.499956130981445},{"x":-8.699996948242188,"y":-4.599999904632568,"z":17.69999122619629},{"x":-17.200027465820312,"y":-2.600001811981201,"z":18.399993896484375}],[{"x":20.900041580200195,"y":-8.499996185302734,"z":4.899995803833008},{"x":-0.30000001192092896,"y":-5.899996757507324,"z":8.999996185302734},{"x":-18.200031280517578,"y":-1.3000003099441528,"z":8.999996185302734}],[{"x":21.000041961669922,"y":-9.600000381469727,"z":0.09999992698431015},{"x":-0.5,"y":-6.399996280670166,"z":-1.0000001192092896},{"x":-14.500017166137695,"y":-1.7000004053115845,"z":-1.0000001192092896}],[{"x":21.400043487548828,"y":-8.499996185302734,"z":-4.399996280670166},{"x":-0.30000001192092896,"y":-5.499997138977051,"z":-11.000003814697266},{"x":-16.800025939941406,"y":-0.8000001907348633,"z":-10.900003433227539}],[{"x":21.500043869018555,"y":-7.499997138977051,"z":-6.299956321716309},{"x":-9.099998474121094,"y":-2.9000015258789062,"z":-20.30000114440918},{"x":-14.500017166137695,"y":-2.000002384185791,"z":-20.30000114440918}],[{"x":21.700044631958008,"y":-6.000036716461182,"z":-8.299917221069336},{"x":-9.099998474121094,"y":-1.8000404834747314,"z":-32.79999542236328},{"x":-24.900056838989258,"y":-2.4000399112701416,"z":-44.29981994628906}],[{"x":22.100046157836914,"y":-3.3000457286834717,"z":-9.499883651733398},{"x":-18.80003547668457,"y":4.099920272827148,"z":-50.39984130859375},{"x":-35.60002899169922,"y":-1.9000784158706665,"z":-57.499732971191406}],[{"x":22.50004768371582,"y":1.1999582052230835,"z":-9.299844741821289},{"x":-10.30000114440918,"y":17.800067901611328,"z":-50.29999542236328},{"x":-23.000049591064453,"y":18.500070571899414,"z":-56.39990234375}]];


        // var polyROT = {"x":0,"y":-0.30000000000000004,"z":-0.4};
nx.meshEditor.polyPOS = {"x":0,"y":400,"z":0};
nx.meshEditor.polyROT = {"x":0,"y":0,"z":0};
nx.meshEditor.STACKPATHS = [[{"x":10,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-10,"y":0,"z":29.2000732421875}],[{"x":10,"y":0,"z":0},{"x":0,"y":20.8000431060791,"z":0},{"x":-10,"y":0,"z":0}],[{"x":10,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-10,"y":0,"z":-32.600074768066406}]]; //paperhat
        // var STACKPATHS = [[{"x":21.700044631958008,"y":0.8999505043029785,"z":9.899847030639648},{"x":0,"y":40,"z":50},{"x":-10,"y":40,"z":50}],[{"x":21.200042724609375,"y":-3.900043487548828,"z":9.699884414672852},{"x":0,"y":30,"z":40},{"x":-10,"y":30,"z":40}],[{"x":21.000041961669922,"y":-6.200036525726318,"z":8.699918746948242},{"x":0,"y":20,"z":30},{"x":-10,"y":20,"z":30}],[{"x":21.000041961669922,"y":-7.799996852874756,"z":6.499956130981445},{"x":0,"y":10,"z":20},{"x":-10,"y":10,"z":20}],[{"x":20.900041580200195,"y":-8.499996185302734,"z":4.899995803833008},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":8.999996185302734},{"x":-17.400028228759766,"y":-1.3000003099441528,"z":8.999996185302734}],[{"x":21.000041961669922,"y":-9.600000381469727,"z":0.09999992698431015},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":-1.0000001192092896},{"x":-14.500017166137695,"y":-1.7000004053115845,"z":-1.0000001192092896}],[{"x":21.400043487548828,"y":-8.499996185302734,"z":-4.399996280670166},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":-11.000003814697266},{"x":-16.800025939941406,"y":-0.8000001907348633,"z":-10.900003433227539}],[{"x":21.500043869018555,"y":-7.499997138977051,"z":-6.299956321716309},{"x":-9.099998474121094,"y":-3.400001049041748,"z":-20.30000114440918},{"x":-19.100034713745117,"y":-3.400001049041748,"z":-20.30000114440918}],[{"x":21.700044631958008,"y":-6.000036716461182,"z":-8.299917221069336},{"x":-9.099998474121094,"y":6.599956035614014,"z":-30.30000114440918},{"x":-19.100034713745117,"y":6.599956035614014,"z":-30.30000114440918}],[{"x":22.100046157836914,"y":-3.3000457286834717,"z":-9.499883651733398},{"x":0,"y":30,"z":-40},{"x":-19.100034713745117,"y":16.59994888305664,"z":-40.29999542236328}],[{"x":22.50004768371582,"y":1.1999582052230835,"z":-9.299844741821289},{"x":0,"y":40,"z":-50},{"x":-19.100034713745117,"y":26.600101470947266,"z":-50.29999542236328}]]; //default?
// nx.meshEditor.STACKPATHS = [[{"x":86.7991714477539,"y":1.8999221324920654,"z":39.2000732421875},{"x":51.19975280761719,"y":1.2999601364135742,"z":39.2000732421875},{"x":30.200077056884766,"y":0.5999981164932251,"z":39.2000732421875},{"x":0,"y":0.5999981164932251,"z":39.2000732421875},{"x":-25.500059127807617,"y":0.5999981164932251,"z":39.2000732421875},{"x":-53.499717712402344,"y":0.4999599754810333,"z":39.2000732421875},{"x":-90.79911041259766,"y":1.19992196559906,"z":39.2000732421875}],[{"x":86.7991714477539,"y":1.2999601364135742,"z":29.2000732421875},{"x":50.999755859375,"y":1.1999982595443726,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":29.2000732421875},{"x":-90.79911041259766,"y":0.5999599695205688,"z":29.2000732421875}],[{"x":86.7991714477539,"y":1.2999601364135742,"z":0},{"x":51.19975280761719,"y":0.699998140335083,"z":0},{"x":30.200077056884766,"y":0,"z":0},{"x":0,"y":1.4000003337860107,"z":0},{"x":-25.500059127807617,"y":0,"z":0},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":0},{"x":-90.79911041259766,"y":0.5999599695205688,"z":0}],[{"x":86.7991714477539,"y":1.2999601364135742,"z":-32.600074768066406},{"x":51.19975280761719,"y":0.699998140335083,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":0,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":-32.600074768066406},{"x":-90.79911041259766,"y":0.5999599695205688,"z":-32.600074768066406}],[{"x":86.7991714477539,"y":1.8999221324920654,"z":-42.600074768066406},{"x":51.19975280761719,"y":1.2999601364135742,"z":-42.600074768066406},{"x":30.200077056884766,"y":0.5999981164932251,"z":-42.600074768066406},{"x":0,"y":0.5999981164932251,"z":-42.600074768066406},{"x":-25.500059127807617,"y":0.5999981164932251,"z":-42.600074768066406},{"x":-53.499717712402344,"y":0.4999599754810333,"z":-42.600074768066406},{"x":-90.79911041259766,"y":1.19992196559906,"z":-42.600074768066406}]]; //Towel-.
// nx.meshEditor.STACKPATHS = [[{"x":73.49937438964844,"y":1.8999221324920654,"z":42.800018310546875},{"x":50.999755859375,"y":1.2999601364135742,"z":54.299842834472656},{"x":30.000076293945312,"y":0.5999981164932251,"z":58.99977111816406},{"x":-0.10000000149011612,"y":0.5999981164932251,"z":60.099754333496094},{"x":-25.600059509277344,"y":0.5999981164932251,"z":58.69977569580078},{"x":-53.499717712402344,"y":0.4999599754810333,"z":51.79988098144531},{"x":-72.19939422607422,"y":1.19992196559906,"z":41.30004119873047}],[{"x":89.59912872314453,"y":1.2999601364135742,"z":26.60006332397461},{"x":50.999755859375,"y":1.1999982595443726,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":29.2000732421875},{"x":-83.39922332763672,"y":0.5999599695205688,"z":28.400070190429688}],[{"x":100.39896392822266,"y":1.2999601364135742,"z":0.7999999523162842},{"x":51.19975280761719,"y":0.699998140335083,"z":0},{"x":30.200077056884766,"y":0,"z":0},{"x":0,"y":1.4000003337860107,"z":0},{"x":-25.500059127807617,"y":0,"z":0},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":0},{"x":-94.59905242919922,"y":0.5999599695205688,"z":-0.8000000715255737}],[{"x":91.09910583496094,"y":1.2999601364135742,"z":-24.600055694580078},{"x":51.19975280761719,"y":0.699998140335083,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":0,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":-32.600074768066406},{"x":-83.39922332763672,"y":0.5999599695205688,"z":-31.80008316040039}],[{"x":76.79932403564453,"y":1.8999221324920654,"z":-40.30010986328125},{"x":53.09972381591797,"y":1.2999601364135742,"z":-53.39990997314453},{"x":32.10008239746094,"y":0.5999981164932251,"z":-58.19983673095703},{"x":1.9000003337860107,"y":0.5999981164932251,"z":-59.99980926513672},{"x":-25.500059127807617,"y":0.5999981164932251,"z":-58.99982452392578},{"x":-53.499717712402344,"y":0.4999599754810333,"z":-52.09992980957031},{"x":-72.19939422607422,"y":1.19992196559906,"z":-42.000083923339844}]]; //big oval-.
// nx.meshEditor.STACKPATHS = [[{"x":73.49937438964844,"y":-2.500077962875366,"z":42.800018310546875},{"x":50.999755859375,"y":-3.10003924369812,"z":54.299842834472656},{"x":30.000076293945312,"y":-3.8000004291534424,"z":58.99977111816406},{"x":-0.10000000149011612,"y":-3.8000004291534424,"z":60.099754333496094},{"x":-25.600059509277344,"y":-3.8000004291534424,"z":58.69977569580078},{"x":-53.499717712402344,"y":-3.900038480758667,"z":51.79988098144531},{"x":-72.19939422607422,"y":-3.2000772953033447,"z":41.30004119873047}],[{"x":89.59912872314453,"y":-3.10003924369812,"z":26.60006332397461},{"x":50.999755859375,"y":0.4999981224536896,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":29.2000732421875},{"x":-83.39922332763672,"y":-3.600038766860962,"z":28.400070190429688}],[{"x":97.29901123046875,"y":-3.10003924369812,"z":1.4000000953674316},{"x":51.19975280761719,"y":0.699998140335083,"z":0},{"x":30.200077056884766,"y":0,"z":0},{"x":0,"y":-0.09999986737966537,"z":0},{"x":-25.500059127807617,"y":0,"z":0},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":0},{"x":-94.59905242919922,"y":-3.8000385761260986,"z":-0.8000000715255737}],[{"x":91.09910583496094,"y":-3.10003924369812,"z":-24.600055694580078},{"x":51.19975280761719,"y":0.699998140335083,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":0,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":-32.600074768066406},{"x":-83.39922332763672,"y":-3.8000385761260986,"z":-31.80008316040039}],[{"x":76.79932403564453,"y":-2.500077962875366,"z":-40.30010986328125},{"x":53.09972381591797,"y":-3.10003924369812,"z":-53.39990997314453},{"x":32.10008239746094,"y":-3.8000004291534424,"z":-58.19983673095703},{"x":1.9000002145767212,"y":-3.8000004291534424,"z":-59.99980926513672},{"x":-25.500059127807617,"y":-3.6000006198883057,"z":-58.99982452392578},{"x":-53.499717712402344,"y":-3.7000386714935303,"z":-52.09992980957031},{"x":-72.19939422607422,"y":-3.2000772953033447,"z":-42.000083923339844}]]; //oval-dome-.
// nx.meshEditor.STACKPATHS = [[{"x":73.49937438964844,"y":-4.600076198577881,"z":42.800018310546875},{"x":50.999755859375,"y":-6.000036716461182,"z":54.299842834472656},{"x":30.000076293945312,"y":-6.499998092651367,"z":58.99977111816406},{"x":-0.10000000149011612,"y":-6.309991359710693,"z":60.099754333496094},{"x":-25.600059509277344,"y":-6.499998092651367,"z":58.69977569580078},{"x":-53.499717712402344,"y":-6.720036506652832,"z":51.79988098144531},{"x":-72.19939422607422,"y":-6.940072536468506,"z":41.30004119873047}],[{"x":89.59912872314453,"y":-6.400036334991455,"z":26.60006332397461},{"x":50.999755859375,"y":0.4999981224536896,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":29.2000732421875},{"x":-83.39922332763672,"y":-7.000035762786865,"z":28.400070190429688}],[{"x":95.99903106689453,"y":-6.000036716461182,"z":1.4000000953674316},{"x":51.19975280761719,"y":0.699998140335083,"z":0},{"x":30.200077056884766,"y":0,"z":0},{"x":0,"y":-0.09999986737966537,"z":0},{"x":-25.500059127807617,"y":0,"z":0},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":0},{"x":-94.59905242919922,"y":-7.260036945343018,"z":-0.8000000715255737}],[{"x":91.09910583496094,"y":-6.8000359535217285,"z":-24.600055694580078},{"x":51.19975280761719,"y":0.699998140335083,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":0,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":-32.600074768066406},{"x":-83.39922332763672,"y":-7.000035762786865,"z":-31.80008316040039}],[{"x":76.79932403564453,"y":-6.600074291229248,"z":-40.30010986328125},{"x":53.09972381591797,"y":-6.190033912658691,"z":-53.39990997314453},{"x":32.10008239746094,"y":-6.049999713897705,"z":-58.19983673095703},{"x":1.9000002145767212,"y":-5.989993572235107,"z":-59.99980926513672},{"x":-25.500059127807617,"y":-6.199998378753662,"z":-58.99982452392578},{"x":-53.499717712402344,"y":-6.400036334991455,"z":-52.09992980957031},{"x":-72.19939422607422,"y":-6.920079231262207,"z":-42.000083923339844}]]; //gem shape for webbing-.
// nx.meshEditor.STACKPATHS = [[{"x":83.49937438964844,"y":7.099896430969238,"z":52.800018310546875},{"x":73.49937438964844,"y":-2.900073528289795,"z":58.29993438720703},{"x":50.999755859375,"y":-9.800037384033203,"z":67.99978637695312},{"x":30.000076293945312,"y":-10.299999237060547,"z":71.89972686767578},{"x":-0.10000000149011612,"y":-10.109992980957031,"z":72.19972229003906},{"x":-25.600059509277344,"y":-10.299999237060547,"z":70.79974365234375},{"x":-53.499717712402344,"y":-10.520040512084961,"z":64.19984436035156},{"x":-75.19934844970703,"y":-10.740076065063477,"z":52.90001678466797},{"x":-82.19939422607422,"y":-0.7400873899459839,"z":51.30004119873047}],[{"x":83.49937438964844,"y":-2.900073528289795,"z":42.800018310546875},{"x":73.49937438964844,"y":-4.600076198577881,"z":42.800018310546875},{"x":50.999755859375,"y":-6.000036716461182,"z":54.299842834472656},{"x":30.000076293945312,"y":-6.499998092651367,"z":58.99977111816406},{"x":-0.10000000149011612,"y":-6.309991359710693,"z":60.099754333496094},{"x":-25.600059509277344,"y":-6.499998092651367,"z":58.69977569580078},{"x":-53.499717712402344,"y":-6.720036506652832,"z":51.79988098144531},{"x":-72.19939422607422,"y":-6.940072536468506,"z":41.30004119873047},{"x":-82.19939422607422,"y":-10.740076065063477,"z":41.30004119873047}],[{"x":99.59912872314453,"y":-4.700033664703369,"z":26.60006332397461},{"x":89.59912872314453,"y":-6.400036334991455,"z":26.60006332397461},{"x":50.999755859375,"y":0.4999981224536896,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":29.2000732421875},{"x":-83.39922332763672,"y":-7.000035762786865,"z":28.400070190429688},{"x":-95.49919128417969,"y":-10.800041198730469,"z":30.200077056884766}],[{"x":105.99903106689453,"y":-4.300034046173096,"z":1.4000000953674316},{"x":95.99903106689453,"y":-6.000036716461182,"z":1.4000000953674316},{"x":51.19975280761719,"y":0.699998140335083,"z":0},{"x":30.200077056884766,"y":0,"z":0},{"x":0,"y":-0.09999986737966537,"z":0},{"x":-25.500059127807617,"y":0,"z":0},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":0},{"x":-94.59905242919922,"y":-7.260036945343018,"z":-0.8000000715255737},{"x":-105.29904174804688,"y":-11.060043334960938,"z":-0.5}],[{"x":101.09910583496094,"y":-5.100033283233643,"z":-24.600055694580078},{"x":91.09910583496094,"y":-6.8000359535217285,"z":-24.600055694580078},{"x":51.19975280761719,"y":0.699998140335083,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":0,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":-32.600074768066406},{"x":-83.39922332763672,"y":-7.000035762786865,"z":-31.80008316040039},{"x":-95.79918670654297,"y":-10.800041198730469,"z":-30.40007781982422}],[{"x":86.79932403564453,"y":-4.900071620941162,"z":-40.30010986328125},{"x":76.79932403564453,"y":-6.600074291229248,"z":-40.30010986328125},{"x":53.09972381591797,"y":-6.190033912658691,"z":-53.39990997314453},{"x":32.10008239746094,"y":-6.049999713897705,"z":-58.19983673095703},{"x":1.9000002145767212,"y":-5.989993572235107,"z":-59.99980926513672},{"x":-25.500059127807617,"y":-6.199998378753662,"z":-58.99982452392578},{"x":-53.499717712402344,"y":-6.400036334991455,"z":-52.09992980957031},{"x":-72.19939422607422,"y":-6.920079231262207,"z":-42.000083923339844},{"x":-87.3993148803711,"y":-10.720083236694336,"z":-42.000083923339844}],[{"x":86.79932403564453,"y":5.099907398223877,"z":-50.30010986328125},{"x":76.79932403564453,"y":-4.900071620941162,"z":-52.600074768066406},{"x":53.09972381591797,"y":-9.990034103393555,"z":-65.29988098144531},{"x":32.10008239746094,"y":-9.850000381469727,"z":-70.79979705810547},{"x":1.9000002145767212,"y":-9.789993286132812,"z":-71.9997787475586},{"x":-25.500059127807617,"y":-9.999998092651367,"z":-71.19979095458984},{"x":-53.499717712402344,"y":-10.20003890991211,"z":-64.49989318847656},{"x":-72.19939422607422,"y":-10.720083236694336,"z":-56.000022888183594},{"x":-82.19939422607422,"y":-0.7200936079025269,"z":-52.000083923339844}]]; //opal
// nx.meshEditor.STACKPATHS = [[{"x":83.49937438964844,"y":-10.500103950500488,"z":49.300071716308594},{"x":72.99938201904297,"y":-8.90007209777832,"z":56.19996643066406},{"x":50.999755859375,"y":-10.400039672851562,"z":67.19979858398438},{"x":30.000076293945312,"y":-10.299999237060547,"z":71.5997314453125},{"x":-0.10000000149011612,"y":-10.109992980957031,"z":72.09972381591797},{"x":-25.600059509277344,"y":-10.299999237060547,"z":70.79974365234375},{"x":-52.89972686767578,"y":-10.520040512084961,"z":63.79985046386719},{"x":-73.69937133789062,"y":-10.540075302124023,"z":51.90003204345703},{"x":-79.49943542480469,"y":-10.540091514587402,"z":47.00010681152344}],[{"x":84.69935607910156,"y":-7.69006872177124,"z":42.800018310546875},{"x":73.49937438964844,"y":-6.6900739669799805,"z":42.800018310546875},{"x":50.999755859375,"y":-6.000036716461182,"z":54.299842834472656},{"x":30.000076293945312,"y":-6.499998092651367,"z":58.99977111816406},{"x":-0.10000000149011612,"y":-6.309991359710693,"z":60.099754333496094},{"x":-25.600059509277344,"y":-6.499998092651367,"z":58.69977569580078},{"x":-53.499717712402344,"y":-6.720036506652832,"z":51.79988098144531},{"x":-72.19939422607422,"y":-6.940072536468506,"z":41.30004119873047},{"x":-86.09933471679688,"y":-10.34007453918457,"z":40.60005187988281}],[{"x":99.59912872314453,"y":-5.9000325202941895,"z":26.60006332397461},{"x":89.09913635253906,"y":-4.600038051605225,"z":26.60006332397461},{"x":50.999755859375,"y":0.4999981224536896,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":29.2000732421875},{"x":-85.79918670654297,"y":-7.400035381317139,"z":29.2000732421875},{"x":-93.39922332763672,"y":-10.400039672851562,"z":30.200077056884766}],[{"x":105.99903106689453,"y":-6.5000319480896,"z":1.4000000953674316},{"x":95.99903106689453,"y":-4.400038242340088,"z":1.4000000953674316},{"x":51.19975280761719,"y":-3.2000012397766113,"z":0},{"x":30.200077056884766,"y":-3.4999990463256836,"z":0},{"x":0,"y":-3.5999984741210938,"z":0},{"x":-25.500059127807617,"y":-3.4999990463256836,"z":0},{"x":-53.499717712402344,"y":-0.2000020444393158,"z":0},{"x":-94.59905242919922,"y":-7.260036945343018,"z":-0.8000000715255737},{"x":-101.7990951538086,"y":-10.260040283203125,"z":-0.5}],[{"x":99.9991226196289,"y":-5.9000325202941895,"z":-24.80005645751953},{"x":91.09910583496094,"y":-6.10003662109375,"z":-24.600055694580078},{"x":51.19975280761719,"y":0.699998140335083,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":0,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":-32.600074768066406},{"x":-83.39922332763672,"y":-7.000035762786865,"z":-31.80008316040039},{"x":-94.39920806884766,"y":-10.300039291381836,"z":-28.200069427490234}],[{"x":89.09928894042969,"y":-7.900068759918213,"z":-38.800132751464844},{"x":76.79932403564453,"y":-5.9000749588012695,"z":-40.30010986328125},{"x":53.09972381591797,"y":-6.190033912658691,"z":-53.39990997314453},{"x":32.10008239746094,"y":-6.049999713897705,"z":-58.19983673095703},{"x":1.9000002145767212,"y":-5.989993572235107,"z":-59.99980926513672},{"x":-25.500059127807617,"y":-6.199998378753662,"z":-58.99982452392578},{"x":-53.499717712402344,"y":-6.400036334991455,"z":-52.09992980957031},{"x":-72.19939422607422,"y":-6.920079231262207,"z":-42.000083923339844},{"x":-87.3993148803711,"y":-10.120080947875977,"z":-39.00012969970703}],[{"x":86.19933319091797,"y":-7.100085735321045,"z":-44.40019989013672},{"x":76.79932403564453,"y":-9.100072860717773,"z":-53.400062561035156},{"x":53.09972381591797,"y":-9.990034103393555,"z":-65.29988098144531},{"x":32.10008239746094,"y":-9.850000381469727,"z":-70.3998031616211},{"x":1.9000002145767212,"y":-9.58999252319336,"z":-71.59978485107422},{"x":-25.500059127807617,"y":-9.699996948242188,"z":-71.09979248046875},{"x":-53.499717712402344,"y":-9.60003662109375,"z":-63.799903869628906},{"x":-72.19939422607422,"y":-9.920080184936523,"z":-53.50006103515625},{"x":-82.19939422607422,"y":-10.020095825195312,"z":-44.800193786621094}]]; //stitched spacepad
// nx.meshEditor.polyPOS = {x: -759, y: 1315.4999999999986, z: -1507};
// nx.meshEditor.polyROT = {"x":0,"y":-0.01999999999999997,"z":-0.4}
// nx.meshEditor.STACKPATHS = [[{"x":83.49937438964844,"y":-10.500103950500488,"z":49.300071716308594},{"x":72.99938201904297,"y":-8.90007209777832,"z":56.19996643066406},{"x":50.999755859375,"y":-10.400039672851562,"z":67.19979858398438},{"x":30.000076293945312,"y":-10.299999237060547,"z":71.5997314453125},{"x":-0.10000000149011612,"y":-10.109992980957031,"z":72.09972381591797},{"x":-25.600059509277344,"y":-10.299999237060547,"z":70.79974365234375},{"x":-52.89972686767578,"y":-10.520040512084961,"z":63.79985046386719},{"x":-73.69937133789062,"y":-10.540075302124023,"z":51.90003204345703},{"x":-79.49943542480469,"y":-10.540091514587402,"z":47.00010681152344}],[{"x":84.69935607910156,"y":-7.69006872177124,"z":42.800018310546875},{"x":73.49937438964844,"y":-6.6900739669799805,"z":42.800018310546875},{"x":50.999755859375,"y":-6.000036716461182,"z":54.299842834472656},{"x":30.000076293945312,"y":-6.399998188018799,"z":58.99977111816406},{"x":-0.10000000149011612,"y":-6.309991359710693,"z":60.099754333496094},{"x":-25.600059509277344,"y":-6.499998092651367,"z":58.69977569580078},{"x":-53.499717712402344,"y":-6.720036506652832,"z":51.79988098144531},{"x":-72.19939422607422,"y":-6.940072536468506,"z":41.30004119873047},{"x":-86.09933471679688,"y":-10.34007453918457,"z":40.60005187988281}],[{"x":99.59912872314453,"y":-5.9000325202941895,"z":26.60006332397461},{"x":89.09913635253906,"y":-4.400038242340088,"z":25.500059127807617},{"x":50.999755859375,"y":-2.000002145767212,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-2.4000017642974854,"z":29.2000732421875},{"x":-85.79918670654297,"y":-7.400035381317139,"z":29.2000732421875},{"x":-93.39922332763672,"y":-10.400039672851562,"z":30.200077056884766}],[{"x":105.99903106689453,"y":-6.5000319480896,"z":1.4000000953674316},{"x":95.99903106689453,"y":-4.400038242340088,"z":1.4000000953674316},{"x":51.19975280761719,"y":-3.2000012397766113,"z":0},{"x":30.200077056884766,"y":-3.4999990463256836,"z":0},{"x":0,"y":-2.9999990463256836,"z":0},{"x":-25.500059127807617,"y":-3.4999990463256836,"z":0},{"x":-53.499717712402344,"y":-1.1000021696090698,"z":0},{"x":-94.59905242919922,"y":-7.260036945343018,"z":-0.8000000715255737},{"x":-101.7990951538086,"y":-10.260040283203125,"z":-0.5}],[{"x":99.9991226196289,"y":-5.9000325202941895,"z":-24.80005645751953},{"x":87.69915771484375,"y":-5.700037002563477,"z":-26.60006332397461},{"x":51.19975280761719,"y":-0.9000018835067749,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":-1.3000001907348633,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-2.1000020503997803,"z":-32.600074768066406},{"x":-83.39922332763672,"y":-7.000035762786865,"z":-31.80008316040039},{"x":-94.39920806884766,"y":-10.300039291381836,"z":-28.200069427490234}],[{"x":89.09928894042969,"y":-7.700068950653076,"z":-38.800132751464844},{"x":76.79932403564453,"y":-5.9000749588012695,"z":-40.30010986328125},{"x":53.09972381591797,"y":-6.190033912658691,"z":-53.39990997314453},{"x":32.10008239746094,"y":-6.049999713897705,"z":-58.19983673095703},{"x":1.9000002145767212,"y":-5.989993572235107,"z":-59.99980926513672},{"x":-25.500059127807617,"y":-6.199998378753662,"z":-58.99982452392578},{"x":-53.499717712402344,"y":-6.400036334991455,"z":-52.09992980957031},{"x":-72.19939422607422,"y":-6.920079231262207,"z":-42.000083923339844},{"x":-87.3993148803711,"y":-10.120080947875977,"z":-39.00012969970703}],[{"x":86.19933319091797,"y":-7.100085735321045,"z":-44.40019989013672},{"x":76.79932403564453,"y":-9.100072860717773,"z":-53.400062561035156},{"x":53.09972381591797,"y":-9.990034103393555,"z":-65.29988098144531},{"x":32.10008239746094,"y":-9.850000381469727,"z":-70.3998031616211},{"x":1.9000002145767212,"y":-9.58999252319336,"z":-71.59978485107422},{"x":-25.500059127807617,"y":-9.699996948242188,"z":-71.09979248046875},{"x":-53.499717712402344,"y":-9.60003662109375,"z":-63.799903869628906},{"x":-72.19939422607422,"y":-9.920080184936523,"z":-53.50006103515625},{"x":-82.19939422607422,"y":-10.020095825195312,"z":-44.800193786621094}]]; // tailored spacepad


//EDITOR:methodology 
//EXP-OBJECTS - exports will need to contain POS,MAT,ROW,COL,ROT,SCL - type-named like: MOVEPATH or VERTSTACK or FLATPATH
var createPolyMeshEditor = function(){
	// debugger;
    var mat = new BABYLON.StandardMaterial("mat1", nx.scene);
    mat.alpha = 1.0;
    // mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0);
    // mat.specularColor = new BABYLON.Color3(0, 0, 0.22);
    mat.backFaceCulling = false;
    // var texture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    var texture = new BABYLON.Texture("./copyrightnetcinematics/3d/spacebox1/spacebox1_pz.jpg", nx.scene);

    texture.vScale = 1.0; //How many images span the surface.
    texture.uScale = 30.0; //Lots of images squashed and stretched makes an interesting effect-.
    mat.diffuseTexture = texture;
    // mat.wireframe = true;
// nx.material = mat;

	//TODO change all to nx.recalcSTAKPOS, etc with the other recalcs as well
    var recalcSTACKPOSFromFLATPATH = function(arrayPath){
        var path = [], idx=0;
        var arrpaths = [];
        if(arrayPath.length){ //CONVERT-FLATVERTPATH-TO-VECTORSTACK-.
            for(var row=0; row<nx.meshEditor.row;row++){
                path=[];
                for(var col=0; col<nx.meshEditor.col;col++){
                    path.push(new BABYLON.Vector3(arrayPath[idx].x,arrayPath[idx].y,arrayPath[idx].z))
                    idx++;
                }
                arrpaths.push(path)
            }
        }
        return arrpaths;
    }

    var STACKVECTORS = [];
    if(nx.meshEditor.STACKPATHS.length){ //CONVERT: Verts to VECTOR_STACK-.
        var rowpath = [];
        for(var row=0; row<nx.meshEditor.STACKPATHS.length;row++){
            rowpath=[];
            for(var col=0; col<nx.meshEditor.STACKPATHS[row].length;col++){
                rowpath.push(new BABYLON.Vector3(nx.meshEditor.STACKPATHS[row][col].x,nx.meshEditor.STACKPATHS[row][col].y,nx.meshEditor.STACKPATHS[row][col].z))
            }
            STACKVECTORS.push(rowpath)
        }
        //RESET-DIMENSIONS-.
        nx.meshEditor.col = col; //allows ribbon expand
        nx.meshEditor.row = row;
    } else if(!nx.meshEditor.STACKPATHS.length){ //Convert DEFAULT_VERT_STACK to DEFAULT_VECTOR_STACK-.
        var path1 = [];
        for(var f=0; f<nx.meshEditor.DEFAULTVERTSTACK[0].length;f++){
        path1.push(new BABYLON.Vector3(nx.meshEditor.DEFAULTVERTSTACK[0][f].x,nx.meshEditor.DEFAULTVERTSTACK[0][f].y,nx.meshEditor.DEFAULTVERTSTACK[0][f].z))
        }
        var path2 = [];
        for(var f=0; f<nx.meshEditor.DEFAULTVERTSTACK[1].length;f++){
        path2.push(new BABYLON.Vector3(nx.meshEditor.DEFAULTVERTSTACK[1][f].x,nx.meshEditor.DEFAULTVERTSTACK[1][f].y,nx.meshEditor.DEFAULTVERTSTACK[1][f].z))
        }
        var path3 = [];
        for(var f=0; f<nx.meshEditor.DEFAULTVERTSTACK[2].length;f++){
        path3.push(new BABYLON.Vector3(nx.meshEditor.DEFAULTVERTSTACK[2][f].x,nx.meshEditor.DEFAULTVERTSTACK[2][f].y,nx.meshEditor.DEFAULTVERTSTACK[2][f].z))
        }
        STACKVECTORS = [path1,path2,path3];
    }
    //--CREATE-TGT-------------RESET:-ROT,-POS,-SIZ
    nx.meshEditor.polyMesh1 = BABYLON.Mesh.CreateRibbon("polyMesh1", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE);
    nx.meshEditor.polyMesh1.position = nx.meshEditor.polyPOS || new BABYLON.Vector3(0,350,0);
    nx.meshEditor.polyMesh1.rotation = nx.meshEditor.polyROT || new BABYLON.Vector3.Zero();
    nx.meshEditor.polyMesh1.material = mat;
    // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.meshEditor.polyMesh1);} //TODO turn off when under zone
    //---------------------------------------------
    //special case for old ribbon edit TODO
    nx.meshEditor.positions = nx.meshEditor.polyMesh1.getVerticesData(BABYLON.VertexBuffer.PositionKind); //extra for ribbon
    nx.meshEditor.indices = nx.meshEditor.polyMesh1.getIndices();
    nx.meshEditor.model = nx.meshEditor.positions.slice();
    nx.meshEditor.normals = [];
    //------MASTER-EDIT-----------------------------------------------------------------------------------
    nx.meshEditor.master = BABYLON.Mesh.CreateSphere("editNode", 1, 5, nx.scene);
    nx.meshEditor.master.position = new BABYLON.Vector3(0,50,0)
    nx.meshEditor.master.editTgt = nx.meshEditor.polyMesh1;
    nx.meshEditor.master.material = nx.blueMat;
    nx.meshEditor.master.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
        if(this.editMode==="greenEdit"){
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus || nx.ctrl.num1) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.minus) ? -1 : 0;
            nx.ctrl.mag = (nx.ctrl.ctrl)? 0.1 : 1;  // default MAGNITUDE on Transforms and rots
            var moveAmount = nx.ctrl.mag * direction;
            if(nx.ctrl.num8 || nx.ctrl.num2){ //-------------------------Transform-X-Y-Z.
                this.editTgt.position.z+=moveAmount; }
            if(nx.ctrl.num4 || nx.ctrl.num6){ 
                this.editTgt.position.x+=moveAmount; }
            if((nx.ctrl.plus || nx.ctrl.minus) && !nx.ctrl.alt){ //------Y
              this.editTgt.position.y+=moveAmount; }
            else if((nx.ctrl.plus || nx.ctrl.minus) && nx.ctrl.alt){//--------PITCH X
                nx.meshEditor.polyMesh1.rotation.x += moveAmount/10; }

            if(!nx.ctrl.alt){ //default behavior-.
                if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
                    nx.meshEditor.polyMesh1.rotation.y += moveAmount/10;
                }
                if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
                    nx.meshEditor.polyMesh1.rotation.z += moveAmount/10;
                }
            } else {  // alternate behavior - .
                if(nx.ctrl.num7){ nx.meshEditor.addRowCol('top') } //----------EXPAND-polymesh:- top, right, bottom, left
                else if (nx.ctrl.num9){ nx.meshEditor.addRowCol('rgt') }
                else if (nx.ctrl.num3){ nx.meshEditor.addRowCol('btm') }
                else if (nx.ctrl.num1){ nx.meshEditor.addRowCol('lft') }
            }  
            if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
                var arrayPaths = nx.meshEditor.recalcFLATPOSFromVerts();
                var aSTACKPATHS = recalcSTACKPOSFromFLATPATH(arrayPaths);
                //TODO:
                //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                console.log('nx.meshEditor.polyMesh1---------------------')
                console.log('POS: '+JSON.stringify(nx.meshEditor.polyMesh1.position))
                console.log('ROT: '+JSON.stringify(nx.meshEditor.polyMesh1.rotation))
                console.log('COL: '+nx.meshEditor.col)
                console.log('ROW: '+nx.meshEditor.row)
                console.log('STACKPATH------------------------------------')
                console.log(JSON.stringify(aSTACKPATHS))
            }
        }
    }
    nx.meshEditor.master.actionManager = new BABYLON.ActionManager(nx.scene); //EDIT-MESH-CLICK-EVENTS-------------------------------------------
    nx.meshEditor.master.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
        var eNode = evt.meshUnderPointer;
        if(!eNode){return}
        if(!eNode.editMode){
            nx.activeEditNodes.push(eNode);
            eNode.material = nx.greenMat;
            eNode.editMode='greenEdit'
        }else if(eNode.editMode === 'greenEdit' ){
            eNode.material = nx.blueMat;
            eNode.editMode=0
            nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
        }
    }));
    nx.meshEditor.master.parent = nx.meshEditor.polyMesh1;

    nx.meshEditor.recalcFLATPOSFromVerts = function(){
        var pathsArray = [];//nx.meshEditor.polyMesh1._positions;
        if(!nx.meshEditor.polyMesh1._positions){ //CAUTION: non-existant-positions-check-and-manual-re-calculate
            nx.meshEditor.verts = nx.meshEditor.polyMesh1.getVerticesData(BABYLON.VertexBuffer.PositionKind); //extra for ribbon
            var paths = [];
            if(nx.meshEditor.verts.length){ //CONVERT-VERTEX-TO-VECTOR-.
               for (var i=0; i < nx.meshEditor.verts.length; i+=3){
                    var point = new BABYLON.Vector3(nx.meshEditor.positions[i],nx.meshEditor.positions[i+1],nx.meshEditor.positions[i+2])
                    paths.push(point)
                }
            }
            pathsArray = paths;
        } else {
            pathsArray = nx.meshEditor.polyMesh1._positions;
        }
        return pathsArray;
    }

    nx.meshEditor.addRowCol = function(dir){ //EXPANDS THE MESH ADDING A ROW OR A COLUMN-.
        var flatPOS = nx.meshEditor.recalcFLATPOSFromVerts()
        var newPaths = [];
        var path = [];
        var idx = 0;
        if(dir==='top'){ //--------------------------------------------------------ADD NODES: top
            for(var row=-1; row<nx.meshEditor.row;row++){
                // path=[];
                if(row===-1){ //look into row 1 increment numbers and push new column-.
                    for(var col=0; col<nx.meshEditor.col;col++){
                        newPaths.push(new BABYLON.Vector3(flatPOS[col].x,flatPOS[col].y+10,flatPOS[col].z+10))
                    }
                } else {
                    for(var col=0; col<nx.meshEditor.col;col++){
                        newPaths.push(new BABYLON.Vector3(flatPOS[idx].x,flatPOS[idx].y,flatPOS[idx].z))
                        idx++;
                    }
                }
            }
            nx.meshEditor.row++;
        } else if (dir==='rgt'){ //-------------------------------------------------------------------------------RGT-EXPAND
            for(var row=0; row<nx.meshEditor.row;row++){
                for(var col=0; col<nx.meshEditor.col;col++){
                    if(col===0){
                        newPaths.push(new BABYLON.Vector3(flatPOS[idx].x+10,flatPOS[idx].y+10,flatPOS[idx].z))
                    }
                    newPaths.push(new BABYLON.Vector3(flatPOS[idx].x,flatPOS[idx].y,flatPOS[idx].z))
                    idx++;
                }
            }
            nx.meshEditor.col++; 
        } else if (dir==='btm'){ 
            for(var row=0; row<nx.meshEditor.row;row++){
                for(var col=0; col<nx.meshEditor.col;col++){
                    newPaths.push(new BABYLON.Vector3(flatPOS[idx].x,flatPOS[idx].y,flatPOS[idx].z))
                    idx++;
                }
                if(row===nx.meshEditor.row-1){ //look into last row  and push new column-.
                    for(var col=nx.meshEditor.col; col>0; col--){ //SPECIAL-INVERTED-ORDER-ON-THIS-.
                        newPaths.push(new BABYLON.Vector3(flatPOS[flatPOS.length-col].x,flatPOS[flatPOS.length-col].y+10,flatPOS[flatPOS.length-col].z-10))
                    }
                } 
            }            
            nx.meshEditor.row++;
        } else if (dir==='lft'){ 
            for(var row=0; row<nx.meshEditor.row;row++){
                for(var col=0; col<nx.meshEditor.col;col++){
                    newPaths.push(new BABYLON.Vector3(flatPOS[idx].x,flatPOS[idx].y,flatPOS[idx].z))
                    if(col===nx.meshEditor.col-1){
                        newPaths.push(new BABYLON.Vector3(flatPOS[idx].x-10,flatPOS[idx].y+10,flatPOS[idx].z))
                    }
                    idx++;
                }
            }
            nx.meshEditor.col++; 
        }
        //SAVE-POLY:-ROT,-POS,-SIZ
        nx.meshEditor.polyPOS = new BABYLON.Vector3(nx.meshEditor.polyMesh1.position.x,nx.meshEditor.polyMesh1.position.y,nx.meshEditor.polyMesh1.position.z)
        nx.meshEditor.polyROT = new BABYLON.Vector3(nx.meshEditor.polyMesh1.rotation.x,nx.meshEditor.polyMesh1.rotation.y,nx.meshEditor.polyMesh1.rotation.z)
        //PREPARE-SAVED-DATA-IN-LOCAL-MEMORY-FOR-REFRESH-.
        var aStackOfPaths = recalcSTACKPOSFromFLATPATH(newPaths);
        nx.meshEditor.STACKPATHS = JSON.parse(JSON.stringify(aStackOfPaths)); //update the edits for rehydration on reload
        nx.meshEditor.disposeTenKeyEditor();
        createPolyMeshEditor(); //reload the edits
    }

    nx.meshEditor.disposeTenKeyEditor = function(){  //todo rename to polyMeshDispose
        for(var d=0; d<nx.meshEditor.editNodes.length;d++){
            nx.meshEditor.editNodes[d].dispose();
        }
        nx.meshEditor.master.dispose();
        nx.meshEditor.polyMesh1.dispose();
        //POLY-MESH-EDITING-.
        nx.editNodes = [];
        nx.activeEditNodes = [];
    }

// debugger;
    //--------------POINT-EDIT-------------------------------------------------------------------------------------------
    nx.meshEditor.editNodes = [];
    for (var i=0; i < nx.meshEditor.positions.length; i+=3){
        var editNode = BABYLON.Mesh.CreateSphere("editNode"+i, 1, 0.5, nx.scene);
        editNode.editMode = 0;
        editNode.vectorIndex = i;
        editNode.material = nx.blueMat;
        editNode.position = new BABYLON.Vector3(nx.meshEditor.positions[i],nx.meshEditor.positions[i+1],nx.meshEditor.positions[i+2])
        nx.meshEditor.editNodes.push(editNode)
        editNode.parent = nx.meshEditor.polyMesh1;
        editNode.editFn = function(){ //---------TEN-KEY-EVENTS--------------------------------------------------------------------------.
            var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.minus) ? -1 : 0;
            nx.ctrl.mag = (nx.ctrl.alt)? 0.01 : 0.1;
            var moveAmount = nx.ctrl.mag * direction;
            if(this.editMode==="greenEdit"){
                if(nx.ctrl.num8 || nx.ctrl.num2){ this.position.z += moveAmount; 
                    nx.meshEditor.positions[this.vectorIndex+2] += moveAmount;
                }
                if(nx.ctrl.num4 || nx.ctrl.num6){ this.position.x += moveAmount; 
                    nx.meshEditor.positions[this.vectorIndex+0] += moveAmount;
                }
                if(nx.ctrl.plus || nx.ctrl.minus){ this.position.y += moveAmount; 
                    nx.meshEditor.positions[this.vectorIndex+1] += moveAmount;
                }
                nx.meshEditor.updateMeshEdits(nx.meshEditor.polyMesh1, nx.meshEditor.positions, nx.meshEditor.normals, nx.meshEditor.indices)
            }
        }
        editNode.actionManager = new BABYLON.ActionManager(nx.scene); //--MESH-CLICK-EVENTS---------------------------------------------.
        editNode.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
            var eNode = evt.meshUnderPointer;
            if(!eNode){ return; } 
            if(!eNode.editMode){  //MODE-ITERATOR-.
                nx.activeEditNodes.push(eNode);
                eNode.material = nx.greenMat;
                eNode.editMode='greenEdit'
            }else if(eNode.editMode === 'greenEdit' ){
                eNode.material = nx.blueMat;
                eNode.editMode=0
                nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
            }
        }));
        nx.editNodes.push(editNode);
    }
    //--------------POINT-EDIT-------------------------------------------------------------------------------------------

    nx.meshEditor.updateMeshEdits = function(ribbon, positions, normals, indices) {
        ribbon.updateVerticesData(BABYLON.VertexBuffer.PositionKind, positions, false, true);
        BABYLON.VertexData.ComputeNormals(positions, indices, normals);
        ribbon.updateVerticesData(BABYLON.VertexBuffer.NormalKind, normals, false, false);
    };
}

// debugger;
createPolyMeshEditor();

//TODO compare nx.orby  and createPolyMeshEditor

/*****************************************************-END-POLYMESH-EDITOR-************************************************/




/***************************************************MASTER-EDITOR-.****************************************/


   function createMasterEditor(config){
   	debugger;
        //------MASTER-EDIT-----------------------------------------------------------------------------------
        config.tgt.master = BABYLON.Mesh.CreateSphere("editNode", 1, 5, nx.scene);
        config.tgt.master.position = new BABYLON.Vector3(0,50,0)
        config.tgt.master.editTgt = config.tgt;
        config.tgt.master.material = nx.blueMat;
        config.tgt.master.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
            if(this.editMode==="greenEdit"){
                var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus || nx.ctrl.num1) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.minus) ? -1 : 0;
                // nx.ctrl.mag = (nx.ctrl.alt)? 0.1 : 1;  // alternate MAGNITUDE on Transforms and rots
                nx.ctrl.mag = (nx.ctrl.ctrl)? 0.1 : 1;  // default MAGNITUDE on Transforms and rots
                var moveAmount = nx.ctrl.mag * direction;
                if(nx.ctrl.num8 || nx.ctrl.num2){ //-------------------------Transform-X-Y-Z.
                    this.editTgt.position.z+=moveAmount; }
                if(nx.ctrl.num4 || nx.ctrl.num6){ 
                    this.editTgt.position.x+=moveAmount; }
                if((nx.ctrl.plus || nx.ctrl.minus) && !nx.ctrl.alt){ //------Y
                  this.editTgt.position.y+=moveAmount; }
                else if((nx.ctrl.plus || nx.ctrl.minus) && nx.ctrl.alt){//--------PITCH X
                    this.editTgt.master.editTgt.rotation.x += moveAmount/10; }
                if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
                    this.editTgt.master.editTgt.rotation.y += moveAmount/10; }
                if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
                    this.editTgt.master.editTgt.rotation.z += moveAmount/10; }
                if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
                    //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                    console.log('config.tgt---------------------')
                    console.log('POS: '+JSON.stringify(config.tgt.position))
                    console.log('ROT: '+JSON.stringify(config.tgt.rotation))
                }
            }
        }
        config.tgt.master.actionManager = new BABYLON.ActionManager(nx.scene); //EDIT-MESH-CLICK-EVENTS-------------------------------------------
        config.tgt.master.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
            var eNode = evt.meshUnderPointer;
            if(!eNode){return}
            if(!eNode.editMode){
                nx.activeEditNodes.push(eNode);
                eNode.material = nx.greenMat;
                eNode.editMode='greenEdit'
            }else if(eNode.editMode === 'greenEdit' ){
                eNode.material = nx.blueMat;
                eNode.editMode=0
                nx.activeEditNodes.splice(nx.activeEditNodes.indexOf(eNode),1) //deselect
            }
        }));
        config.tgt.master.parent = config.tgt;
    }

/***************************************************-END-MASTER-EDITOR-.****************************************/
