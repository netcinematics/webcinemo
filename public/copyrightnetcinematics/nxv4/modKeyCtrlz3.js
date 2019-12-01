/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No complete distribution without permission.
//For full distribution opportunities contact alpinefalcon@protonmail.com or netcinematics@protonmail.com. 
// If you want to use this code, great. No implied warranty. - (clean) MIT Open-source templates available.
//Contact alpinefalcon@protonmail.com for collaboration opportunities, affiliations, and future ventures.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('KeyCTRLZ module-loaded')
// debugger;
if(!nx){nx={}}
// nx.module = {};

/******************************LOCALVARz-**********************************/
if(!nx.ctrl){nx.ctrl={}}
nx.ctrl = {num0:0,num1:0,num2:0,num3:0,num4:0,num5:0,num6:0,num7:0,asterisk:0,forwardslash:0,plus:0,minus:0,alt:0,mag:1} 
      

/***************************EVENTS************************************/
var createKeyCtrlz = function(){
    window.addEventListener("keydown", onKeyDownEvt, false);
    window.addEventListener("keyup", onKeyUpEvt, false);
    /**************************END-EVENTS***************************/
    /********************SURF-BOARD-ANIMATIONS*********************************/
    function onKeyDownEvt(e) {  
        if(e.shiftKey && e.ctrlKey && e.keyCode===82){}else{e.preventDefault();}//Allow Refresh
        console.log(e.keyCode); //Diagnostic: keep off for performance. 
        // console.log(String.fromCharCode(e.keyCode)); //Diagnostic: keepoff for performance. 
        switch (e.keyCode) {
            case 49: //'1topnums':
                nx.initSmoothCam();
                break;
            case 50: //'2topnums':
                nx.initFaceCam();
                break;
            case 51: //'3topnums':
                nx.initFreeCam();
                break;
            case 52: //'4topnums':
                nx.initSmartCam();
                break;
            case 53: //'5topnums':
                nx.initArcFollowCam();
                break;
            case 54: //'6topnums':
                nx.initFollowCam();
                break;
            case 55: //'7topnums':
                // nx.scene.stopAnimation(nx.orbySkeleton[0]);
                // var prone = nx.scene.beginAnimation(nx.orbySkeleton[0], 1, 1, false, 1.0);  //prone
                break;
            case 56: //'8topnums':
                // nx.scene.stopAnimation(nx.orbySkeleton[0]);
                // var surfIdle = nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //ANIMATED-SURFBOARD-. 
                break;
            case 57: //'9topnums':

                
                // nx.lazerbox.visibility = 1;

                // //OPEN-ORBY-MOUTH-.
                // $({mouthROT:0}).animate({mouthROT:1},{queue:false,duration:1000,easing:'swing',
                //     step:function(){ nx.orbyMouth.rotation.z = this.mouthROT; }
                // });
                
                // // nx.scene.stopAnimation(nx.orbySkeleton[0]) 
                // var lzrANM1 = nx.scene.beginAnimation(nx.orbySkeleton[0], 150, 170, false, 1); //LFT to Mouth-ANM-. 
                // lzrANM1.onAnimationEnd = function (){
                //     var lzrANM2 = nx.scene.beginAnimation(nx.orbySkeleton[0], 170, 180, false, 0.5); //GrabLZR to LOOK. 
                //     lzrANM2.onAnimationEnd = function (){
                //         setTimeout(function(){ //Look at LZR
                //             var lzrANM3 = nx.scene.beginAnimation(nx.orbySkeleton[0], 180, 200, false, 0.5); //LOOKLZR to SCANLZR. 
                //             lzrANM3.onAnimationEnd = function (){

                                
                //                 //CLOSE-ORBY-MOUTH-.
                //                 $({mouthROT:1}).animate({mouthROT:0},{queue:false,duration:1000,easing:'swing',
                //                    step:function(){ nx.orbyMouth.rotation.z = this.mouthROT; }
                //                 });
                                
                //                 // setTimeout(function(){ //Scanning-.
                //                     var lzrANM4 = nx.scene.beginAnimation(nx.orbySkeleton[0], 200, 310, false, 1); //LOOKLZR to SCANLZR. 
                //                     lzrANM4.onAnimationEnd = function (){
        
                //                        //FIRE-LZR - UP
                //                        nx.orbyMesh.rayLines= [];
                //                     //    nx.orbyMesh.laserORIG.position = new BABYLON.Vector3(nx.lazerbox.position.x,12,nx.lazerbox.position.z)
                //                        nx.orbyMesh.laserTgtSphere.position = new BABYLON.Vector3(nx.lazerbox.position.x,nx.lazerbox.position.y+100,nx.lazerbox.position.z)
                //                        nx.orbyMesh.rayLines[0] = BABYLON.Mesh.CreateLines("ray1", [nx.lazerbox.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[0]);
                //                        nx.orbyMesh.rayLines[0].alpha = 0.8;//Math.cos(alpha2);//0.8
                //                        nx.orbyMesh.rayLines[1] = BABYLON.Mesh.CreateLines("ray2", [nx.lazerbox.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[1]);
                //                        nx.orbyMesh.rayLines[1].alpha = 0.8;//Math.cos(alpha2);//0.8
                //                        nx.orbyMesh.rayLines[2] = BABYLON.Mesh.CreateLines("ray3", [nx.lazerbox.position, nx.orbyMesh.laserTgtSphere.position], nx.scene, nx.orbyMesh.rayLines[2]);
                //                        nx.orbyMesh.rayLines[2].alpha = 0.8;//Math.cos(alpha2);//0.8
                //                        nx.orbyMesh.rayLines[0].color.g = 1;//Math.cos(alpha1);//1;
                //                        nx.orbyMesh.rayLines[0].color.r = nx.orbyMesh.rayLines[0].color.b = 0
                //                        nx.orbyMesh.rayLines[1].color.b = 1;//Math.cos(alpha1);//1;
                //                        nx.orbyMesh.rayLines[1].color.g = nx.orbyMesh.rayLines[1].color.r = 0
                //                        nx.orbyMesh.rayLines[2].color.r = 1;//Math.cos(alpha1);//1;
                //                        nx.orbyMesh.rayLines[2].color.g = nx.orbyMesh.rayLines[2].color.b = 0;        //yellow-green-laser-.
                //                     }
                //                 // },1000);
                //                 // nx.lazerbox.visibility = 0;
                //             }
                //         },1000);
                //     }
                // }
                
                case 48: //'0topnums':
                // var lzrTmb = nx.scene.beginAnimation(nx.orbySkeleton[0], 150, 200, false, 0.1); //LazerThumb-ANM-.             case 48: //'0topnums':
                // var lzrTmb = nx.scene.beginAnimation(nx.orbySkeleton[0], 150, 180, false, 0.5); //LazerThumb-ANM-.             case 48: //'0topnums':
                // var lzrTmb = nx.scene.beginAnimation(nx.orbySkeleton[0], 150, 160, false, 0.5); //LazerThumb-ANM-.             case 48: //'0topnums':
                break;
            case 189: //'0topnums':
                // nx.scene.stopAnimation(nx.orbySkeleton[0]) 
                break;
            case 187: //'0topnums':
                // nx.scene.stopAnimation(nx.orbySkeleton[0]) 
                break;
            case 87: //'w':
                if(nx.anmz && nx.anmz.orby )nx.anmz.orby.move.fwd=1;
                // nx.anmz.orby.move.autoGO = 1;
                break;
            case 88: //'x'
                nx.anmz.orby.move.autoGO = 0; //AUTOSTOP-.
                break;
            case 69: //'e':
            case 81: //'q':
                break;
            // case 39: //'rightarrow':
                // nx.rightArrow=1; //FIX: do not switch cam back to follow on freecam arrows-.
                // if(nx.scene.activeCamera.name==='freeCam1'){break;} //FIX: suppress arrow key on free cam;
            case 65: //'a'
                if(nx.anmz && nx.anmz.orby )nx.anmz.orby.move.lft=1;
                if(nx.anmz && nx.anmz.orby )nx.anmz.orby.move.rgt=0; //FIX: key-stuckness-.
                break;
            // case 37: //'leftarrow': 
                // nx.leftArrow=1; //FIX: do not switch cam back to follow on freecam arrows-.
            // debugger;
                // if(nx.scene.activeCamera.name==='freeCam1'){break;} //FIX: suppress arrow key on free cam;
            case 68: //'d'
                if(nx.anmz && nx.anmz.orby )nx.anmz.orby.move.rgt=1;
                if(nx.anmz && nx.anmz.orby )nx.anmz.orby.move.lft=0;
                break;
            case 38: //'uparrow':
            case 40: //'downarrow':
                break;
            case 73: //i
                // nx.ctrl.inc = 1;
                break;
            case 75: //k
                //DEPRICATED - PUSBLICH moved to within the EDITOR obj
                nx.newWorldPath = nx.convertPathPointsToWorld(nx.editPath, nx.pathLine);
                console.log(JSON.stringify(nx.newWorldPath))
                break;                    
            case 79: //o
                recordPathPoints();
                // nx.anmz.edit.dec = 1;
                break;
            case 80: //p
                printRecordedPath();
                // runRecordedPath();
                // nx.anmz.edit.dec = 1;
                break;
            case 83:   //s   
                if(nx.anmz && nx.anmz.orby )nx.anmz.orby.move.fwd=1;
                break;
            case 70:   //f   
                nx.anmz.orby.trickAction(0);
                break;
            case 84:   //t   
                nx.anmz.orby.trickAction(0);
                break;
            case 90: //'z'
                nx.anmz.orby.trickAction(1);
                break;
            case 67: //'c'
                nx.anmz.orby.trickAction(2);
                break;
            case 86: //'v'
                nx.anmz.orby.trickAction(3);
                break;
            case 88://x  
            case 32: // SPACEBAR
                if(nx.tenKey && nx.tenKey.mode==='anm'){ //PAUSE-PLAYBACK-OR-JUMP-.
                    nx.ctrl.space=1; nx.tenKeyCtrl(); nx.ctrl.space=0;
                }else {
                    if(!nx.anmz.orby.jump.preJumpMode && !nx.anmz.orby.jump.jumpMode &&!nx.anmz.orby.jump.fallMode){
                      nx.anmz.orby.move.jmp=1;
                    }
                }

                break;
            //------------------------------------10-KEY-CONTROLS-.
            case 101: //numpad 5KEY - MODEKEY
                nx.tenKey.nextmode=1; nx.tenKeyCtrl();
                break;
            //------------------------------------10-KEY-EDITING-.
            case 104://numpad 8FWD
                nx.ctrl.num8=1; nx.tenKeyCtrl();  nx.ctrl.num8=0;
                break;
            case 102://numpad 6RIGHT
                nx.ctrl.num6=1; nx.tenKeyCtrl(); nx.ctrl.num6=0;
                break;
            case 98://numpad 2BACK
                nx.ctrl.num2=1; nx.tenKeyCtrl(); nx.ctrl.num2=0;
                break;
            case 100://numpad 4LEFT
                nx.ctrl.num4=1; nx.tenKeyCtrl(); nx.ctrl.num4=0;
                break;
            case 103://numpad 7UP
                nx.ctrl.num7=1; nx.tenKeyCtrl(); nx.ctrl.num7=0;
                break;
            case 105://numpad 9DOWN
                nx.ctrl.num9=1; nx.tenKeyCtrl(); nx.ctrl.num9=0;
                break;
            case 97://numpad1 
                nx.ctrl.num1=1; nx.tenKeyCtrl(); nx.ctrl.num1=0;
                break;
            case 99://numpad3 
                nx.ctrl.num3=1; nx.tenKeyCtrl(); nx.ctrl.num3=0;
                break;
            case 106://numpad * 
                nx.ctrl.asterisk=1; nx.tenKeyCtrl();
                break;
            case 111://numpad /
                nx.ctrl.forwardslash=1; nx.tenKeyCtrl();
                break;
            case 109://numpad - 
                nx.ctrl.minus=1; nx.tenKeyCtrl();
                break;
            case 107://numpad +
                nx.ctrl.plus=1; nx.tenKeyCtrl();
                break;
            case 96://numpad 0
                nx.ctrl.num0=1; nx.tenKeyCtrl(); nx.ctrl.num0=0;
                break;
            case 110://numpad del key
                nx.ctrl.numdel=1; nx.tenKeyCtrl(); nx.ctrl.numdel=0;
                break;
            case 13://numpad enter key
                nx.ctrl.numenter=1; nx.tenKeyCtrl(); nx.ctrl.numenter=0;
                break;
        }    


        if(e.altKey) { nx.ctrl.alt = 1 }
        else { nx.ctrl.alt =  0 }

        if(e.ctrlKey){ nx.ctrl.ctrl = 1; }
        else { nx.ctrl.ctrl = 0 }

        if(e.shiftKey){ nx.ctrl.shift = 1; }
        else { nx.ctrl.shift = 0 }
            //ANMETHODOLOGY - 5 is the MODE KEY-!. 
        // }
        //NUMPAD-CHARACTER-CODES!
        //1:97,2:98,3:99,4:100,5:101,6:102,7:103,8:104,9:105,0:96,+:107,-:109.  

        //EDIT-mag-.  SIZE-RANGE: Shift, Ctrl, default, Alt-.
        // if(e.shiftKey) { nx.ctrl.mag = 100 }
        // else if(e.ctrlKey) { nx.ctrl.mag = 10 }
        // if(e.altKey) { nx.ctrl.mag = 0.1 }
        // else { nx.ctrl.mag =  1}
    }
    function onKeyUpEvt(e){  
        e.preventDefault();
        // DIAGNOSTICS: keep but, keepout for performance. 
        // var char = String.fromCharCode(e.keyCode);
        // console.log(e.keyCode);
        switch (e.keyCode) {
            case 87: //'w':
                if(nx.anmz&& nx.anmz.orby) nx.anmz.orby.move.fwd=0;        
                break;
            case 81: //'q':
                break;
            case 88: //'x':
                break;
            case 90: //'z':
                break;
            // case 65: //'a':
            case 65: //'a'
            // case 37: //'leftarrow':
                if(nx.anmz && nx.anmz.orby) nx.anmz.orby.move.lft=0;
                if(nx.anmz && nx.anmz.orby) nx.anmz.orby.move.rgt=0; 
                if(nx.anmz && nx.anmz.orby) nx.anmz.orby.move.ulft=1; //move back vertical
                break;
            case 68: //'d'
            // case 39: //'rightarrow':
                if(nx.anmz && nx.anmz.orby) nx.anmz.orby.move.rgt=0;
                if(nx.anmz && nx.anmz.orby) nx.anmz.orby.move.lft=0;
                if(nx.anmz && nx.anmz.orby) nx.anmz.orby.move.urgt=1; //move back vertical
                break;
            case 40: //'downarrow':
            case 38: //'uparrow':
            case 73: //i
                // nx.ctrl.inc = 0;
                break;
            case 75: //k
                // nx.ctrl.dec = 0;
                break;
            case 83: //'S':
                if(nx.anmz&& nx.anmz.orby) nx.anmz.orby.move.fwd=0;        
                break;
            case 32: // SPACE 
                break;
            //------------------------------------10-KEY-CONTROLS-.
            case 101: //numpad 5KEY - MODEKEY
                nx.tenKey.nextmode=0;
                break;
            //------------------------------------10-KEY-EDITING-.
            // case 104://numpad 8FWD
            //     nx.ctrl.num8=0;
            //     break;
            // case 102://numpad 6RIGHT
            //     nx.ctrl.num6=0;
            //     break;
            // case 98://numpad 2BACK
            //     nx.ctrl.num2=0;
            //     break;
            // case 100://numpad 4LEFT
            //     nx.ctrl.num4=0;
            //     break;
            // case 103://numpad 7UP
            //     nx.ctrl.num7=0;
            //     break;
            // case 105://numpad 9DOWN
            //     nx.ctrl.num9=0;
            //     break;  
            // case 97://numpad1 
            //     nx.ctrl.num1=0;
            //     break;
            // case 99://numpad3 
            //     nx.ctrl.num3=0;
            //     break;
            case 106://numpad * 
                nx.ctrl.asterisk=0;
                break;
            case 111://numpad /
                nx.ctrl.forwardslash=0;
                break;
            case 109://numpad - 
                // meshEditKeys.dec = 0;
                nx.ctrl.minus=0;
                break;
            case 107://numpad +
                nx.ctrl.plus=0;
                // meshEditKeys.inc = 0;
                break;
            case 18://alt
                nx.ctrl.alt =  0; //FIX: to hold down alt key
                break;
            case 17:// ctrl
                nx.ctrl.ctrl = 0;
                break;
            case 16:// shift
                nx.ctrl.shift = 0;
                break;
            case 110://numpad enter key
                e.preventDefault();
                break;
        } 

    }
}


createKeyCtrlz();
    /*********************END-EVENTS***************************/



// });