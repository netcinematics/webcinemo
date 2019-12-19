export var initGamez = function(){
	// debugger;


/****************************************************************-GAMEZ-*****************************************************/

nx.initGAME = function(config){
    if(config && config.gameID && nx.GAMEZ[config.gameID] && nx.GAMEZ[config.gameID].gameID===config.gameID){ //if we found the game init, run, end-.
        nx.GAMEZ[config.gameID].initfn();
        nx.activeSEQ = nx.GAMEZ[config.gameID]; //the only place where GAME is set into current SEQUENCE-.
    }
}

nx.runGAME = function(config){
    if(config && config.gameID && nx.GAMEZ[config.gameID] && nx.GAMEZ[config.gameID].gameID===config.gameID){ //if we found the game init, run, end-.
        nx.GAMEZ[config.gameID].runfn();
    }
}
//todo runGAME, endGAME
nx.endGAME = function(config){
    if(config && config.gameID && nx.GAMEZ[config.gameID] && nx.GAMEZ[config.gameID].gameID===config.gameID){ //if we found the game init, run, end-.
        if(nx.GAMEZ[config.gameID].endfn){ nx.GAMEZ[config.gameID].endfn(); }
    }
}
// nx.gameRestart = function(config){
nx.gameRestart = function(){
	var config = nx.activeSEQ
	config.restart = true;
	nx.endGAME(config);
	nx.initGAME(config);
	// nx.runGAME(config);
    // if(config.gameID && nx.GAMEZ[config.gameID] && nx.GAMEZ[config.gameID].gameID===config.gameID){ //if we found the game init, run, end-.
    //     if(nx.GAMEZ[config.gameID].endfn){ nx.GAMEZ[config.gameID].endfn(); }
    //     nx.masterIDX++; //The only place to iterate master sequence is after last sequence endfn-.
    // }
}

/****************************************************************-GAMEZ-*****************************************************/
//MASTER-SEQUENCE-PACKAGING PATTERN: USAGE:
// 2:{gameID:2,name:'GoSpaceIonz',initfn:function(){},runfn:function(){},endfn:function(){}}


nx.GAMEZ = {
    0:{gameID:0}, //todo remove.name?
    "SpaceIonz":{gameID:"SpaceIonz",name:'Space~Ionz!',initfn:function(){

	    // if(!this.restart){ nx.endGAME(nx.masterSequence[nx.masterIDX]); } //end prior game-.
	    if(!this.restart){ nx.endGAME(nx.activeSEQ); } //end prior game-.
// debugger;

		//TODO maybe wrap this in if NOT PLAYALL else (idk)?
		// if(nx.cinemaPlayAll){
		// 	nx.initSEQ({seqID:'DoorSEQ'}); /*doorseq todo coil sequence*/ 
		// }else{
		//SHOW-TITLE-SCREEN-.
		nx.ui.showTitleScreen({
            // meta:{lvlNUM:1,lvlTXT:'COLLECT~SPACEIONZ!',lvlSubTXT:'Land on SpacePad.',
		    meta:{lvlNUM:1,lvlTXT:'ORBY vs ZAPBOTZ!',lvlSubTXT:'Land on SpacePlatform.',
			lvlIMG:'./copyrightnetcinematics/img/energem2.png',lvlTIPS:`<ul>
				<li>MOVIE: PLAY~ONE or PLAY~ALL. </li>
                <li>GAME: COLLECT SPACE~IONZ, WASD or TOUCH <img style="width:1.11em" src="./img/dragCtrl1.png">  </li>
				<li>BOOK: follow EPIC~ADVENTURE! </li>
			</ul>`},
		    btn1fn:function(){
				nx.scene.activeCamera.position.copyFrom({x: -2507.4568834597867, y: 3964.6208496093823, z: -1499.4712168505087});
				nx.orbyMesh.position = new BABYLON.Vector3(-2500,3933,-1500); //START ACTORPOS
				nx.orbyMesh.rotation = new BABYLON.Vector3(-1,-1.5,0); //align-initial-rotation-.
				nx.anmz.orby.rig.originBox.rotation.y = Math.PI/2; //nx.orbyMesh.rotation.y;
				nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);
		
				if(!nx.spaceIonzActive||nx.spaceIonzActive.length===0){nx.createSpaceIonz();} 
		
				setTimeout(function(){
					
					nx.ui.flashCanvasMSG({txt:"3",txtIcon:'',align:'center',dur:1000}); 
					nx.ui.flashCanvasMSG({txt:"2",txtIcon:'',align:'center',dur:1000}); 
					nx.ui.flashCanvasMSG({txt:"1",txtIcon:'',align:'center',dur:1000}); 
					nx.ui.flashCanvasMSG({txtIcon:'',dur:2000,
					persist:1,
					align:'center', 
					// txt:"3, 2, 1...",
					btn:'GO!',
					btnfn:function(){
						nx.runGAME({gameID:"SpaceIonz"});
						
						// }
						// goBtn:function(){
						}}); 
				},2000);
			},
		    btn2fn:function(){
				nx.initSEQ({seqID:'landingSequence'}); //softload Landing Seq!
			},
		    btn3fn:function(){debugger;}
		}); //show fullscreen title 

		//TODO
		//HIDE-GAME-CONTROLS-.

        nx.initFollowCam();
        // nx.camz.followCam.cameraAcceleration = 0.01; //Too slow for falling orby-.
        nx.camz.followCam.cameraAcceleration = 0.03; //FIX: falling too far behind moving orby-.
        nx.camz.followCam.radius = 10;
        nx.camz.followCam.heightOffset = 30;

		nx.camz.followCam.lockedTarget = nx.orbyMesh;
		// nx.scene.activeCamera.position.copyFrom({x: -2507.4568834597867, y: 3964.6208496093823, z: -1499.4712168505087});
		nx.scene.activeCamera = nx.camz.followCam;

        // nx.ui.showGameModeView();


        nx.ui.unlockEpic({class:'epicItem2'});  //AT END OF SPACESEQUENCE before GAME1


        // nx.spacepadmaterial.alpha = 0;

        nx.botz.loadAssets(); //load in advance during INTERMISSION -.
		
		// debugger;
        // nx.createSpaceGemz(); //revert
        // //create IONZ
        // if(!nx.spaceIonzActive||nx.spaceIonzActive.length===0){nx.createSpaceIonz();} 
		
		
		
		// debugger; //is this being loaded automatically with bot module?
		//TODO FIX
        // nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.
		nx.plateMaster1.scaling.copyFrom({x:1,y:1,z:1});

        // nx.orbyMesh.position = new BABYLON.Vector3(-2500,3933,-1500); //START ACTORPOS
        // // nx.orbyMesh.rotation = new BABYLON.Vector3(0,Math.PI,0); //align-initial-rotation-.
        // nx.orbyMesh.rotation = new BABYLON.Vector3(-1,-1.5,0); //align-initial-rotation-.
        // // nx.orbyMesh.rotation = new BABYLON.Vector3(-1,Math.PI/2,0); //align-initial-rotation-.

        // // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y;
        // nx.anmz.orby.rig.originBox.rotation.y = Math.PI/2; //nx.orbyMesh.rotation.y;
        // // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y;
        // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);

        // nx.scene.stopAnimation(nx.orbySkeleton[0])      //---------------------ANM: FREEZE-ORBY-.
        // nx.anmz.orby.idle = 1; //FIX: keep orby frozen;
   
        // if(nx.orbySparks){nx.orbySparks.stop();}
	    //  if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.stop();}
		if(nx.orby.easyBakeSparks){nx.orby.easyBakeSparks.stop();}
		nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0); //ANIMATED-SURFBOARD-.
				
		//- FROZEN -INTERMISSION - BEGINNING OF GAME-.
        // nx.ui.flashCanvasMSG({'btn':'GO!',fn:function(){ //AT END OF SPACESEQUENCE before GAME1
        // // nx.ui.flashCanvasMSG({'btn':'Movie or Game',fn:function(){ //AT END OF SPACESEQUENCE before GAME1
        //         nx.runGAME({gameID:2}); // on click go at end of movie. softload
        // }});



    },runfn:function(){
            //BEGINNING-OF-GAME-after INTERMISSION-.

			// debugger; //not broke wurld?
			// nx.scene.activeCamera.position.copyFrom({x: -2507.4568834597867, y: 3964.6208496093823, z: -1499.4712168505087});

			
			// nx.orbyMesh.position = new BABYLON.Vector3(-2500,3933,-1500); //START ACTORPOS
			// // nx.orbyMesh.rotation = new BABYLON.Vector3(0,Math.PI,0); //align-initial-rotation-.
			// nx.orbyMesh.rotation = new BABYLON.Vector3(-1,-1.5,0); //align-initial-rotation-.
			// // nx.orbyMesh.rotation = new BABYLON.Vector3(-1,Math.PI/2,0); //align-initial-rotation-.
	
			// // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y;
			// nx.anmz.orby.rig.originBox.rotation.y = Math.PI/2; //nx.orbyMesh.rotation.y;
			// // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y;
			// nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);
	


            nx.spacepadTop.visibility = 1;

			//SPARKS-SYSTEMZ-.
			if(!nx.orby.easyBakeSparks){nx.orby.createEasyBakeSparks();nx.orby.easyBakeSparks.start()}
			else{nx.orby.easyBakeSparks.start()}

            nx.anmz.orby.jump.fallMode = 1; //TODO performance do not move y until downray collisions say so.
            nx.anmz.orby.move.autofwdSpace = 1;
            nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);    //---------------------ANM: UNFREEZE-ORBY-.


			setTimeout(function(){
				nx.spacepipe.createOrbs();
			},10000);


           //ANM-METHODLOGY: -------------------------------------------------------------
           if(!nx.zones.spaceFall1){




                    //TODO can this be simplified by a single if statement in the loop - instead of y being abstracted?
            

// DESIGN: nx.zones. an object of objects-. they each have their own active loop. which needs to be removed-. on WIN or FAIL conditions-.
// the name of the zone is the key-. that can be used to check for existence and activity-. initZone


                nx.zones.spaceFall1 = {name:"spaceFall1",yp:1250,fn:function(){ 
                        if(nx.anmz.orby.jump.fallMode){ //if orby didn't land..----ZONE-ALARM for SPACEFALL-LISTENER.
                            debugger; //todo WORKING FALL from SPACEIONZ
                            // restartGame(); //SPACEFALL-TRIGGER-.
                        	nx.gameRestart({gameID:"SpaceIonz"})
                            //TODO change this restart spaceIONZ 
                            //TODO: NOT removing the TRIGGER-. JUST WANT TO CHANGE POSITIONS-.
                        }
                        else{ //---------------------ORBYLANDING-....................remove the trigger
                            debugger;
                            nx.activeZonez.splice(nx.activeZonez.indexOf(nx.zones.spaceFall1),1) //remove activezone-.  

                            //TODO change activeZones-. since zones is an object - we can iterate through each to see  active = 1 or 0;
                        } 
                    } }; //zonePlane: less than y -1, and less than z 50.
                nx.activeZonez.push(nx.zones.spaceFall1); //creates trigger on zone alarm-.
                nx.scene.registerBeforeRender(function landingLoop() { //ORBY-LANDING-RESTART-TRIGGER-.

                    if(!nx.anmz.orby.jump.fallMode){  //-------------------------------------------------ORBY-LANDING-LISTENER. 

                        // nx.endGAME({gameID:1})
                        // nx.initGAME({gameID:1})
                        	    // if(!this.restart){ nx.endGAME(nx.masterSequence[nx.masterIDX]); } //end prior game-.


                        // debugger; //TODO - move into init run or end-.
                        //todo put in loopz
                        // if(nx.orbySparks){nx.orbySparks.stop();} //stop on landing-.
					    // if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.stop();}      //TODO probably need fn to TURN OFF ALL SPARKS-.
						if(nx.orby.easyBakeSparks){nx.orby.easyBakeSparks.stop();}

                        nx.anmz.orby.move.autofwdSpace = 0;
                        // debugger;
                        //5DTXT: on LANDING - unlock scene (both views game and movie, book)
                        nx.ui.unlockEpic({class:'epicItem3'});
                        //TODO- should this be endGame()
                        // debugger; //move to master start?
                        // nx.endGame1()

                        nx.initSEQ({seqID:'landingSequence'})//LANDINGPADSEQUENCE

  //               var firstPOS = {"x":-803.65,"y":1334.5,"z":-1500}
  //               var midPOS1 = {"x":-766.51,"y":1318.31,"z":-1500.65}
  //               var midPOS2 = {"x":-749.4,"y":1312.7,"z":-1531.67}
  //               var midPOS3 = {"x":-783.03,"y":1325.61,"z":-1543.4}
  //               var lastPOS = {"x":-790.48,"y":1328.27,"z":-1511.27}
  //               var camPOS = nx.BV32({x: -790, y: 1343, z: -1550});
  // var firstMark = BABYLON.Mesh.CreateSphere("editNode", 1, 4, nx.scene);
  // var mid1Mark = BABYLON.Mesh.CreateSphere("editNode", 1, 4, nx.scene);
  // var mid2Mark = BABYLON.Mesh.CreateSphere("editNode", 1, 4, nx.scene);
  // var mid3Mark = BABYLON.Mesh.CreateSphere("editNode", 1, 4, nx.scene);
  // var endMark = BABYLON.Mesh.CreateSphere("editNode", 1, 4, nx.scene);
  // var camMark = BABYLON.Mesh.CreateSphere("editNode", 1, 4, nx.scene);
  // firstMark.position.copyFrom(firstPOS)
  // mid1Mark.position.copyFrom(midPOS1)
  // mid2Mark.position.copyFrom(midPOS2)
  // mid3Mark.position.copyFrom(midPOS3)
  // endMark.position.copyFrom(lastPOS)
  // camMark.position.copyFrom(camPOS)



                        //TODO set ZAP-BOT-SPACEPAD ZONE-ALARM-.
                        // setZoneAlarmZapBot1();
                        //TODO also remove the space-zone-fall listener??
                        // nx.activeZonez.splice(nx.activeZonez.indexOf(nx.zones.spaceFall1),1) //deselect
                        // nx.cinematicMode = -1; //CLEAN-UP-CINEMATICS-LOOP-.
                        //TODO add pipe zone fall lizteners
                        //TODO restartGame now points to landingpad here-.
                        //TODO nx.activeZonez become LOOPZ?
                        nx.activeZonez.splice(nx.activeZonez.indexOf(nx.zones.spaceFall1),1) //deselect
                        nx.scene.unregisterBeforeRender(landingLoop); 
                    } //REMOVE-LISTENER-.
                });
			}
			
			//TODO: switch from ZONE to new MESH
		// 	debugger;
        //    if(!nx.zones.spaceFall2){ //CONFIRMED ONE-TIME-ONLY PATTERN-. //TODO PUT in Loopz for tracking cleanup purposes
        //     // debugger;
        //         nx.zones.spaceFall2 = {name:"spaceFall2",yp:2800,fn:function(){  //onetime fadein for SPACEPAD
        //                 $({'alpha':0}).animate({'alpha':1},{queue:false,duration:10000,easing:'swing',
        //                 step: function(now) { 
        //                 	if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
        //                     nx.spacepadmaterial.alpha = this.alpha;
        //                 }, complete:function(){ 
        //                     // debugger;
        //                  } //NEXT-SUB-SEQUENCE-. 
        //                 });
        //                 nx.activeZonez.splice(nx.activeZonez.indexOf(nx.zones.spaceFall2),1) //deselect
        //             } }; //zonePlane: less than y -1, and less than z 50.
        //         nx.activeZonez.push(nx.zones.spaceFall2); //creates trigger on zone alarm-.

        //     }


            nx.zoneAlarmsOn = 1;  //needed?
            nx.cinematicMode = 0; //needed? yes?
            $('#canvasFooter').fadeOut(3000);


    },endfn:function(){


// debugger;
    	// nx.initSEQ({seqID:3})//LANDINGPADSEQUENCE

	    //  nx.initFaceCam() //-------------------------------------------------ANM: FACE-CAM-.
	    //  nx.CAMPOS = nx.BV32({x: -790, y: 1343, z: -1550});

	    //  nx.scene.activeCamera.position = nx.CAMPOS; //reusable variable for init positions-.

	    // nx.cinematicMode=0;//Start new cinematic-.
	    // nx.landingPadSeqIdx[0] = {on:1}; nx.runCinematicSequence("LandingPadSequence");
    }},
    'Showdown':{gameID:'Showdown',name:'ZapBot Showdown!',initfn:function(){

				// debugger; //broke wurld?

		//SHOW-TITLE-SCREEN-.
		nx.ui.showTitleScreen({
		    meta:{lvlNUM:2,lvlTXT:'KILOBOT~SHOWDOWN!',
		    lvlSubTXT:"Dont get SHOCKED.",
			lvlIMG:'./copyrightnetcinematics/img/zapbot1.png',lvlTIPS:`<ul>
				<li>TRICK to escape ZAPBOT LazerLock.</li>
				<li>Find SpaceTrain Wreck.</li>
				<li>Collect SpaceIonz!</li>
			</ul>`},
		    btn1fn:function(){
				// debugger;
				// nx.scene.activeCamera.position.copyFrom({x: -2507.4568834597867, y: 3964.6208496093823, z: -1499.4712168505087});
				// nx.orbyMesh.position = new BABYLON.Vector3(-2500,3933,-1500); //START ACTORPOS
				// nx.orbyMesh.rotation = new BABYLON.Vector3(-1,-1.5,0); //align-initial-rotation-.
				// nx.anmz.orby.rig.originBox.rotation.y = Math.PI/2; //nx.orbyMesh.rotation.y;
				// nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);
				initShowdownZones();
				// if(!nx.spaceIonzActive||nx.spaceIonzActive.length===0){nx.createSpaceIonz();} 
		
				setTimeout(function(){
					
					nx.ui.flashCanvasMSG({txt:"3",txtIcon:'',align:'center',dur:1000}); 
					nx.ui.flashCanvasMSG({txt:"2",txtIcon:'',align:'center',dur:1000}); 
					nx.ui.flashCanvasMSG({txt:"1",txtIcon:'',align:'center',dur:1000}); 
					nx.ui.flashCanvasMSG({txtIcon:'',dur:2000,
					persist:1,
					align:'center', 
					// txt:"3, 2, 1...",
					btn:'GO!',
					btnfn:function(){
						nx.runGAME({gameID:"Showdown"});
						
						// }
						// goBtn:function(){
						}}); 
				},2000);
			},
		    btn2fn:function(){
				nx.initSEQ({seqID:'sneakSEQ'}); //softload sneakSeq!
				// nx.initSEQ({seqID:'landingSequence'}); //softload Landing Seq!
			},
		    btn3fn:function(){debugger;}
		}); //show fullscreen title 


		nx.spacepadTop.visibility = 1;



	    		// if(!this.restart){ nx.endGAME(nx.masterSequence[nx.masterIDX]); } //end prior game-.
	    		if(!this.restart){ nx.endGAME(nx.activeSEQ); } //end prior game-.

        		// nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-. FIX HARDLOAD not sizing-.
        		// nx.ground.scaling = new BABYLON.Vector3(0.0102,0.0102,0.0102);  //normal-wurld-. FIX HARDLOAD not sizing-.
        		// nx.ground.scaling.copyFrom({x: 0.01023, y: 0.01023, z: 0.01023}) //good scale in space
        		nx.ground.scaling.copyFrom({x: 0.0102, y: 0.0102, z: 0.0102}) //good scale in space
				nx.plateMaster1.scaling.copyFrom({x:1,y:1,z:1});


	    		if(!nx.pipeIonzActive || nx.pipeIonzActive.length===0){nx.createPipeIonz()}

        		nx.scene.stopAnimation(nx.orbySkeleton[0])      //---------------------ANM: FREEZE-ORBY-.
        		nx.anmz.orby.idle = 1; //FIX: keep orby frozen;

    			// nx.orbyMesh.position.copyFrom( {x: -790.48, y: 1328.27, z: -1511.74} );
// 
				// nx.anmz.orby.rig.originBox.rotation.y = Math.PI/2;
				// nx.orbyMesh.rotation.y = Math.PI/2;
				// nx.orbyMesh.rotation.y = -1.7;


				nx.anmz.orby.intermissionFreeze = 1;

// nx.orbyMesh.rotationQuaternion.copyFrom({x: -0.14, y: -0.93, z: -0.14, w: 0.32})
// Quaternion {x: -0.14, y: -0.93, z: -0.14, w: 0.32}


                nx.initFreeCam();  //CAMERA: LONG-CAM - over landingpad-.
                nx.camz.freeCam.position.copyFrom({x: -900, y: 1500, z: -1500}); 
                nx.camz.freeCam.setTarget(nx.orbyMesh.position); //CAM: TGT ORBY
                // nx.camz.freeCam.setTarget(nx.orbyMesh.position);

                //ZAPBOT-INITIALIZER-. //REQUIRED FOR LAZY-LOAD-ZAP-BOTZ-. //TODO removable
                var positionZapBot = function(){ //local initializer-. //todo removable 
                	nx.kiloBotMesh1.position.copyFrom({x: -725, y: 1303, z: -1511}); //Side POS
                	// nx.kiloBotMesh1.position.copyFrom({x: -722, y: 1301, z: -1506}); //Centered POS
                	nx.kiloBotMesh1.rotation.x = 0.75
                	nx.kiloBotMesh1.rotation.y = 1.55
                	nx.kiloBotMesh1.rotationQuaternion = null;
                	nx.kiloBotMesh1.searching = 0; //todo remove and change to stopScanning();
                }
                var anmZapBot = function(){//local-initializer-.
	                //ANM-ZAPBOT- ADVANCE TO CENTER POS
	                $({x: -705, y: 1295, z: -1517.5}). //--------------------------------------------ANM: ZAPBOT POS
	                animate({x: -700, y: 1292, z: -1504},{queue:false,duration:2000,easing:'linear',
	                // animate({x: -722, y: 1301, z: -1506},{queue:false,duration:2000,easing:'linear',
	                step: function(now) { 
	                   if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
	                   // nx.zapBotMesh2.position.copyFrom({x:this.x,y:this.y,z:this.z})
	                   nx.kiloBotMesh1.position.copyFrom({x:this.x,y:this.y,z:this.z}) 
	                }, complete:function(){
	                    nx.kiloBotMesh1.rotationQuaternion = null
	                    nx.kiloBotMesh1.rotation.y = 1.5
	                    console.log('searchings 4 on')
	                    nx.kiloBotMesh1.searching = 1; //todo change to startScanning() //START searching after in position
	                    // nx.initGAME({'gameID':"SpaceIonz"});

	                }
	                }); 
                }
		        if(!nx.kiloBotMesh1){ //CALLBACK-initializer-pattern-. 3-way-init. Module, AssetLoad, and local initializations-.
					debugger; //depricated todo if bot always exists, master manifest is wokring and this can be removed-.
					nx.botz.loadAssets(function(){ //need to load and init zap,search/chase-.
		            	// nx.botz.initBotz(); //default //todo removable?
		            	positionZapBot(); //local-.
		            	anmZapBot();
		         	});
		        } else {
		        	positionZapBot(); //localPOS-.
		        	anmZapBot(); //localANM-.
		        }


                nx.darkBot.position.copyFrom({x: 23, y: 260.5, z: -23});
                nx.darkBot.rotation.y = -0.7;

		        //END-ZAPBOT-INITIALIZER-.

                // if(!nx.kiloBotMesh1){ nx.botz.loadAssets(function(){  //TODO
                // 	nx.kiloBotMesh1.position.copyFrom({x: -725, y: 1303, z: -1511}); //Side POS
                // 	// nx.kiloBotMesh1.position.copyFrom({x: -717, y: 1296, z: -1506}); //Centered POS
                // 	// nx.kiloBotMesh1.position.copyFrom({x: -722, y: 1301, z: -1506}); //Centered POS
                // 	nx.kiloBotMesh1.rotation.x = 0.75
                // 	nx.kiloBotMesh1.rotation.y = 1.55
                // 	nx.kiloBotMesh1.rotationQuaternion = null;
                // 	nx.kiloBotMesh1.searching = 0;
                // }); }
                // else{ 
                	// nx.kiloBotMesh1.position.copyFrom({x: -725, y: 1303, z: -1511}); //Side POS
                	// // nx.kiloBotMesh1.position.copyFrom({x: -722, y: 1301, z: -1506}); //Centered POS
                	// nx.kiloBotMesh1.rotation.x = 0.75
                	// nx.kiloBotMesh1.rotation.y = 1.55
                	// nx.kiloBotMesh1.rotationQuaternion = null;
                	// nx.kiloBotMesh1.searching = 0;
                // }

                // nx.camz.freeCam.setTarget(nx.zapBotMesh2.position);
                // nx.camz.freeCam.setTarget(nx.anmz.orby.rig.originBox.position);




                // //ANM-ZAPBOT- ADVANCE TO CENTER POS
                // $({x: -705, y: 1295, z: -1517.5}). //--------------------------------------------ANM: ZAPBOT POS
                // animate({x: -722, y: 1301, z: -1506},{queue:false,duration:2000,easing:'linear',
                // step: function(now) { 
                //    if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                //    // nx.zapBotMesh2.position.copyFrom({x:this.x,y:this.y,z:this.z})
                //    if(nx.zapbotMesh){ nx.kiloBotMesh1.position.copyFrom({x:this.x,y:this.y,z:this.z}) }
                // }, complete:function(){

                //     nx.kiloBotMesh1.rotationQuaternion = null
                //     nx.kiloBotMesh1.rotation.y = 1.5
                //     nx.kiloBotMesh1.searching = 1;
                //     // nx.initGAME({'gameID':2});

                // }
                // }); 




		        // nx.spacepadmaterial.alpha = 1;

				// if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.stop();}      //TODO probably need fn to TURN OFF ALL SPARKS-.
				if(nx.orby.easyBakeSparks){nx.orby.easyBakeSparks.stop();}

                // nx.ui.showGameModeView();
                nx.ui.unlockEpic({class:'epicItem4'});  //On LOOK AT ZAPBOT  //TODO move into txtInitfn
                // nx.ui.flashCanvasMSG({txt:'ZapBot Showdown!',txtType:'quest',dur:3000});         //on orby reset gamemode   
                // nx.ui.flashCanvasMSG({txt:'Use Stealth, and Tricks!',txtType:'narrator',dur:3000});         //on orby reset gamemode   
                // nx.ui.flashCanvasMSG({txt:'Trick Zap~Bot and...',dur:1000});         //on orby reset gamemode   
                // nx.ui.flashCanvasMSG({txt:'...surf the Space~Pipe down to Alpha~Moon!',dur:1000});         //on orby reset gamemode   
                // nx.ui.flashCanvasMSG({txt:'To surf down to AlphaMoon!',dur:3000});         //on orby reset gamemode   

                // setTimeout(function(){
	               //  //ENABLE-JUMP-BTNS-.
	               //      $('#trickBtn1').show(3000);
	               //      $('#jumpBtn1').show(3000);
                // },2000)

                // if(nx.orbySparks){nx.orbySparks.stop();}


		var initShowdownZones = function(){ //FIX: avoid zones on MOVIE selection.
			//TODO: move this to nx.zonez.initShowdown();

            //SET-CAM-ZONEZ-.
            nx.zonez.camZoneFactory({name:'zone0',pos:{x: -609, y: 1248, z: -1497},dim:{h:100,w:10,d:100},alpha:0.22,color:{r:0,g:1,b:1},
        		hit:function(obj){ //top of half pipe

        			//reusable-strategy-.
        			if(this.wasHit){return;}else{this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.
        			//CAMERA: MID DOWN CAM - birdseye-.
        			// console.log('cam 45 30')
					nx.initFollowCam();  //CAMERA: CLOSE-FOLLOW-TOP CAM-.
					nx.camz.followCam.cameraAcceleration = 0.007;//0.05;//0.7;
					nx.camz.followCam.radius = 45; //piperide-top
					nx.camz.followCam.heightOffset = 30;//piperide-top
					nx.camz.followCam.maxCameraSpeed = 8;//2;//4;  //max accelleration

					//TODO: make this zapbot 2?

								
					nx.zonez.removeZone(this); //REMOVE-ZONE-ON-CONTACT-.


            	}
	        });


            //SET-CAM-ZONEZ-.
            nx.zonez.camZoneFactory({name:'zone1',pos:{x: -350, y: 1100, z: -1450},dim:{h:100,w:10,d:100},alpha:0.22,color:{r:0,g:0,b:1},
        		hit:function(obj){

        			//reusable-strategy-.
        			if(this.wasHit){return;}else{this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.
        			//CAMERA: MID DOWN CAM - birdseye-.
        			// console.log('cam 45 30')
					nx.initFollowCam();  //CAMERA: CLOSE-FOLLOW-TOP CAM-.
					nx.camz.followCam.cameraAcceleration = 0.007;//0.05;//0.7;
					nx.camz.followCam.radius = 45; //piperide-top
					nx.camz.followCam.heightOffset = 30;//piperide-top
					nx.camz.followCam.maxCameraSpeed = 8;//2;//4;  //max accelleration

					//TODO: make this zapbot 2?

					//ADD ZAPBOT-POSITION-.
					var posZapBot = function(){
						nx.kiloBotMesh1.position.copyFrom({x:172,y:980,z:-1395}); //PLACE ZAPBOT
						nx.kiloBotMesh1.rotationQuaternion = null;
						nx.kiloBotMesh1.rotation.x = 0.2;
						nx.kiloBotMesh1.rotation.y = 0.17;
					}
					//RESET-SEARCHING-STATE-.
					if(!nx.kiloBotMesh1.searching){ //todo change to scanning
						console.log('search2 on')
						nx.kiloBotMesh1.searching = 1;
					} //init new laser on 1. //start scanning-.
					if(nx.kiloBotMesh1.chasing>0){ 
						nx.kiloBotMesh1.chasing=0
						setTimeout(function(){
							posZapBot(); //delay needed to position zapbot after done chasing-.
						},1000)
					} else {
							posZapBot();
					}

					
					nx.zonez.removeZone(this); //REMOVE-ZONE-ON-CONTACT-.


            	}
	        });

            nx.zonez.camZoneFactory({name:'zone2',pos:{x: 0, y: 1020, z: -1450},dim:{h:50,w:10,d:70},alpha:0.22,color:{r:1,g:0,b:0},
        		hit:function(){
        			if(this.wasHit){return;}else{this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.
        			// debugger; //adjust cam up
        			nx.initFollowCam();  //CAMERA: 
        			nx.camz.followCam.radius = 50; //piperide-top
					nx.camz.followCam.heightOffset = 40;//piperide-top

					//ADD ZAPBOT-POSITION-.
					nx.zapbotMesh2.position.copyFrom({x: 580, y: 850, z: -617}); //PLACE ZAPBOT 2
					nx.zapbotMesh2.rotationQuaternion = null;
					// nx.zapbotMesh2.rotation.x = 0.2;
					nx.zapbotMesh2.rotation.y = -1.9;
					nx.zapbotMesh2.isVisible = true;


					nx.zonez.removeZone(this); //REMOVE-ZONE-ON-CONTACT-.

            	}
	        });

            nx.zonez.camZoneFactory({name:'zone3',pos:{x: 615, y: 810, z: -950},dim:{h:50,w:70,d:10},alpha:0.22,color:{r:0,g:1,b:0},
        		hit:function(){
        			if(this.wasHit){return;}else{this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.
        			// console.log('cam 70 60')
        			// debugger; //adjust cam up
  //       			nx.camz.followCam.radius = 70; //piperide-top
					// nx.camz.followCam.heightOffset = 60;//piperide-top

					if(!nx.zapbotMesh2.searching){ //todo
						console.log('search 3 on')
						nx.zapbotMesh2.searching = 1; 
					} //init new laser on 1 //start scanning-.
					if(nx.kiloBotMesh1.chasing>0){nx.kiloBotMesh1.chasing=0} //stop zapbot 1

					var that = this;
					nx.initFreeCam();
					//ANIMATE-CAM-.- TO MID-POINT OVERVIEW-.
                    $({curx:nx.camz.freeCam.position.x,cury:nx.camz.freeCam.position.y,curz:nx.camz.freeCam.position.z}).
                    // animate({curx:645,cury:870,curz:-700},{queue:false,duration:8000,easing:'swing',
                    animate({curx:740,cury:945,curz:-830},{queue:false,duration:8000,easing:'swing',
                    step: function(now) { //ANM: - CAM Along Pipeline.-.
                    	if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
                    	nx.camz.freeCam.position.copyFrom({x:this.curx,y:this.cury,z:this.curz})
						nx.camz.freeCam.setTarget( nx.orbyMesh.position ); 
                        // nx.kiloBotMesh1.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
                        // nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
                        // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 

                        // nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) ); //SMOOTH-CAM-.
                    }, complete:function(){ 

							nx.initFollowCam();  //CAMERA: CLOSE-FOLLOW-TOP CAM-.
	            			nx.camz.followCam.radius = 60; //piperide-top
							nx.camz.followCam.heightOffset = 80;//piperide-top
							nx.camz.followCam.maxCameraSpeed = 6;

							nx.zonez.removeZone(that); //REMOVE-ZONE-ON-CONTACT-.
                            // nx.zapScanSeqIdx[NUM].initAnm = 0; 
                        } //NEXT-SUB-SEQUENCE-. 
                    });




            	}
	        });

            nx.zonez.camZoneFactory({name:'zone4',pos:{x: 560, y: 460, z: -740},dim:{h:50,w:70,d:10},alpha:0.22,color:{r:0,g:0,b:1},
        		hit:function(){
        			// if(this.wasHit){return;}else{this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.

					if(nx.zapbotMesh2.chasing>0){	nx.kiloBotMesh1.chasing=0 }


        			//CAMSTOPPER-.
        			if(nx.scene.activeCamera.position.y < 475){ //500 
        				console.log('ANM: cam-stopper on 500')
        				nx.scene.activeCamera.position.y = 475  //500
        			}

        			if(nx.scene.activeCamera.position.y < 255){ console.log('removed ZONE'); nx.zonez.removeZone(this); }
					// nx.zonez.removeZone(this); //REMOVE-ZONE-ON-CONTACT-.
	            }
	        });

            nx.zonez.camZoneFactory({name:'zone5',pos:{x: 410, y: 400, z: -500},dim:{h:50,w:70,d:10},alpha:0.22,color:{r:1,g:0,b:1},
        		hit:function(){ //fires every frame-. //todo possibly dampen
        			if(this.wasHit){return;}else{this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.
        			
//         			nx.initFreeCam();




// // debugger;
//         			//ANM-CAM: cam zoom in FACE CAM on darkbot.
//                     $({posx:nx.camz.freeCam.position.x,posy:nx.camz.freeCam.position.y,posz:nx.camz.freeCam.position.z}).
//                     animate({posx:nx.darkBot.position.x+8,posy:nx.darkBot.position.y+2,posz:nx.darkBot.position.z-8},{queue:false,duration:6000,easing:'swing',
//                     step: function(now) { //ANM: - CAM Along Pipeline.-.
//                     	if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
//                     	nx.camz.freeCam.position.copyFrom({x:this.posx,y:this.posy,z:this.posz})
// 						nx.camz.freeCam.setTarget( nx.darkBot.position ); 
//                         // nx.kiloBotMesh1.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
//                         // nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
//                         // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 

//                         // nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) ); //SMOOTH-CAM-.
//                     }, complete:function(){ 


//                     	// debugger;

//                     	//NOTE: CAM-POS-TGT-SEAM - MEANING THE POSITION and TARGET OF CAM SPANS ACROSS SEQUENCES-. 
//       //               	nx.initFreeCam();  //CAMERA: LONG-CAM - over landingpad-.
//       //               	nx.camz.freeCam.position.copyFrom({x:this.posx,y:this.posy,z:this.posz})
// 						// nx.camz.freeCam.setTarget( nx.darkBot.position ); 


                    	nx.initSEQ({seqID:'DoorSEQ'})//DOORSEQUENCE




//                     	 // nx.ui.flashCanvasMSG({txt:'DarkBot!'});  

// 							// nx.initFollowCam();  //CAMERA: CLOSE-FOLLOW-TOP CAM-.
// 	      //       			nx.camz.followCam.radius = 60; //piperide-top
// 							// nx.camz.followCam.heightOffset = 80;//piperide-top
// 							// nx.camz.followCam.maxCameraSpeed = 6;

//                             // nx.zapScanSeqIdx[NUM].initAnm = 0; 
//                         } //NEXT-SUB-SEQUENCE-. 
//                     });






        			//ANM-CAM: FOCUS from orby to darkbot-. Then ANM: cam zoom in close up on darkbot.
// 	                    $({tgtx:nx.orbyMesh.position.x,tgty:nx.orbyMesh.position.y,tgtz:nx.orbyMesh.position.z}).
// 	                    animate({tgtx:nx.darkBot.position.x,tgty:nx.darkBot.position.y,tgtz:nx.darkBot.position.z},{queue:false,duration:3000,easing:'swing',
// 	                    step: function(now) { //ANM: - CAM Along Pipeline.-.
// 	                    	if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
// 	                    	// nx.camz.freeCam.position.copyFrom({x:this.tgtx,y:this.tgty,z:this.tgtz})
// 							nx.camz.freeCam.setTarget( nx.BV32({x:this.tgtx,y:this.tgty,z:this.tgtz}) ); 
// 	                        // nx.kiloBotMesh1.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
// 	                        // nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) //todo remove x and y from interpolation
// 	                        // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 

// 	                        // nx.camz.freeCam.setTarget( new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz) ); //SMOOTH-CAM-.
// 	                    }, complete:function(){ 


// 	                    	   console.log("ANM: focus completed.")
// // debugger;











// 								// nx.initFollowCam();  //CAMERA: CLOSE-FOLLOW-TOP CAM-.
// 		      //       			nx.camz.followCam.radius = 60; //piperide-top
// 								// nx.camz.followCam.heightOffset = 80;//piperide-top
// 								// nx.camz.followCam.maxCameraSpeed = 6;

// 	                            // nx.zapScanSeqIdx[NUM].initAnm = 0; 
// 	                        } //NEXT-SUB-SEQUENCE-. 
// 	                    });



					// nx.zonez.removeZone(this); //REMOVE-ZONE-ON-CONTACT-.
            	} //end-hit-.
	        });

            nx.zoneAlarmsOn = 1; //TURN ON ZONEALARM-.

        } //end initshowdownzones

                // nx.ui.flashCanvasMSG({'btn':'GO!',fn:function(){ 
                //     nx.runGAME({gameID:4}); // on click go at end of movie. softload
                // }});

        },runfn(){

			// debugger; //this is breaking the world?
			// return;

			//ENABLE-JUMP-BTNS-.
			$('#trickBtn1').show(3000);
			$('#jumpBtn1').show(3000);


			nx.anmz.orby.intermissionFreeze = 0;
            nx.anmz.orby.jump.fallMode = 1; //TODO performance do not move y until downray collisions say so.

            nx.orbyMesh.position.copyFrom( {x: -790.48, y: 1328.27, z: -1511.74} );
            nx.orbyMesh.rotation.y = -1.7;
            //TODO: probably re-animate orby
            // nx.scene.beginAnimation(nx.orbySkeleton[0], 80, 140, true, 1.0);    //---------------------ANM: UNFREEZE-ORBY-.
            nx.anmz.orby.idle = 1; 
            nx.cinematicMode = 0; //game physics will run. will resume loop to start game //TODO remove this or in sea[8]


           nx.stopMovie();

            nx.initFollowCam();  //CAMERA: CLOSE-FOLLOW-TOP CAM-.
            nx.camz.followCam.cameraAcceleration = 0.05;//0.7;
            nx.camz.followCam.radius = 30; //30; //distance from tgt-.
            nx.camz.followCam.heightOffset = 40; //30; //distance above-.
            nx.camz.followCam.maxCameraSpeed = 2;//4;  //max accelleration
            // nx.ui.goGameBtn1(); // on click go at end of movie. softload
            $('#canvasFooter').fadeOut(3000)

             // nx.cinematicMode = 0; //somehow being reset

nx.anmz.orby.rig.originBox.rotation.y = Math.PI/2;
nx.orbyMesh.rotation.y = Math.PI/2;

                // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y;
                // // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y;
                // nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);



    },endfn:function(){



    }},

    5:{gameID:5,name:'Scan SpaceTrain!',initfn:function(){
	    // if(!this.restart){ nx.endGAME(nx.activeSEQ); } //end prior game-.
// debugger;
// nx.stopMovie({fadeCurtain:1,dur:3000}); 
nx.ui.showGameModeView()

// nx.ui.flashCanvasMSG({txt:'Mission 2: Scan SpaceTrain',dur:2000,txtInit:function(){
	// nx.ui.flashCanvasMSG({txt:'Chapter 2: SpaceTrain',dur:2000,txtInit:function(){
		// 	//TODO
        // 	// nx.ui.unlockEpic({class:'epicItem2'});  //AT END OF SPACESEQUENCE before GAME1
        //     // debugger;
        //     //START-SCANTRAIN - GAME-SEQUENCE_.
		
        // }});   
		

		//CAM-POS: GameStart
// Vector3 {x: -478.1365031303217, y: 21.321846007235653, z: 364.63460065228054}
// nx.scene.activeCamera.position
// Vector3 {x: -474.090460708942, y: 21.995056915796674, z: 361.6818477126597}



// return;
// debugger;
		nx.initFreeCam();
		nx.camz.freeCam.position.copyFrom({x: -478.1365031303217, y: 21.321846007235653, z: 364.63460065228054}); //CAMPOS: gamestart spacetrain
		nx.camz.freeCam.setTarget(nx.BV32({x: -474.090460708942, y: 21.995056915796674, z: 361.6818477126597}));

        // nx.ground.scaling = new BABYLON.Vector3(1, 1, 1);  //normal-wurld-.
        // nx.ground.scaling.copyFrom({x: 0.01023, y: 0.01023, z: 0.01023}) //good scale in space
        nx.ground.scaling.copyFrom({x: 0.0102, y: 0.0102, z: 0.0102}) //good scale in space
// return;
        nx.orbyMesh.position.copyFrom({x: -418.0711228317587, y: 14.892315408405217, z: 318.1141529417893}); //START ACTORPOS 
        // nx.orbyMesh.position = new BABYLON.Vector3(-2500,3933,-1500); //START ACTORPOS
        // nx.orbyMesh.rotation = new BABYLON.Vector3(0,Math.PI,0); //align-initial-rotation-.
        nx.orbyMesh.rotationQuaternion = null;
        nx.orbyMesh.rotation = new BABYLON.Vector3(0,0,0); //align-initial-rotation-.
		nx.orbyMesh.rotation.y = -1; //add custom rotation
        // nx.orbyMesh.rotation = new BABYLON.Vector3(-1,Math.PI/2,0); //align-initial-rotation-.
        nx.anmz.orby.rig.originBox.rotation = nx.BV3(0,0,0); //nx.orbyMesh.rotation.y;
        nx.anmz.orby.rig.originBox.rotation.y = 2.2; //weird rotation fix-.
		// return;
        // nx.anmz.orby.rig.originBox.rotation.y = Math.PI/2; //nx.orbyMesh.rotation.y;
        // nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y;
        nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position);
		
		nx.scene.stopAnimation(nx.orbySkeleton[0])      //---------------------ANM: FREEZE-ORBY-.
        nx.anmz.orby.idle = 1; //FIX: keep orby frozen; //todo removable?
	    nx.anmz.orby.forceIdle = 1; //FREEZE ORBY MOVEMENTS and HOVER -.
		
        // if(nx.orbySparks){nx.orbySparks.stop();}
		// if(nx.orby.sparks.easybake){nx.orby.sparks.easybake.stop();}
		if(nx.orby.easyBakeSparks){nx.orby.easyBakeSparks.stop();}
		//ZAP-BOTZ--------------------------------------------------------------------
		// if(!nx.zapbotMesh2.pos1){ //ZAPBOT2 POSITIONING
		// if(nx.zapbotMesh2.position.x!=5.58){
			// debugger;
			
				//SCANNING-POSITION: before pos1
            	nx.zapbotMesh2.position.copyFrom({x: 5.58, y: 259.50496627345956, z: -14.295333333333334})
            	nx.zapbotMesh2.laserOriginSphere.position.y = 6.5; //fix zapper-.
            	nx.zapbotMesh2.laserBumperLft.position.y = 0
				nx.zapbotMesh2.laserBumperRgt.position.y = 0
            	nx.zapbotMesh2.rotationQuaternion = null;
            	nx.zapbotMesh2.rotation.y = -3
            	nx.zapbotMesh2.searching = 1;
				// 	}
				// } else {
					// 	if(nx.zapbotMesh2.position.x=0){
						// 		// debugger;
						//           	nx.zapbotMesh2.position.copyFrom({x: 0, y: 5, z: 0})
						//           	// nx.zapbotMesh2.rotation.y = 2.44
						//           	nx.zapbotMesh2.searching = 0;
						// 	}
						// }
						
						
						
						// if(nx.kiloBotMesh1.position.x!=-5){
							// debugger;
							nx.kiloBotMesh1.position.copyFrom({"x":-5,"y":228.999,"z":5})
							nx.kiloBotMesh1.rotationQuaternion = null;
							nx.kiloBotMesh1.rotation.y = 2.44
							nx.kiloBotMesh1.searching = 1;
							// }
							
							// return;
			
// return;

	     //SCENE-ZONEZ------------------------------------------------------------------------

	     //NEED TO CLEAR OUT ALL ZONES THEN APPLY ALL ZONEZ-.
	     nx.zonez.removeAllZonez();
	     // nx.activeZonez = []; //CLEAR OUT ALL ZONES?


            nx.zonez.camZoneFactory({name:'zoneSpaceTrain',pos:{x: -347, y: 2, z: 300},dim:{h:20,w:30,d:40},alpha:0.22,color:{r:1,g:0,b:1},
        		hit:function(){ //fires every frame-. //todo possibly dampen
        			if(this.wasHit){ //RUN-HIT-.
        				return;
        			}else{
        				this.wasHit=1; //INIT-HIT-.
        				// zoneStateST.hit = 1;

        				nx.scene.spacetrainscanned = 1; //trigger zapbot removal-.

        				// debugger;
        				// nx.initFreeCam();
						// nx.scene.activeCamera.setTarget( nx.orbyMesh.position ); 
						nx.initFaceCam();
        				
	                    nx.anmz.orby.forceIdle = 1; //FREEZE ORBY MOVEMENTS and HOVER -.
	                    // var that = this;
	        			//ANM-CAM: cam zoom in to SCAN SPACE-TRAIN.
	                    // $({posx:nx.camz.freeCam.position.x,posy:nx.camz.freeCam.position.y,posz:nx.camz.freeCam.position.z}).
	                    // animate({posx:-338,posy:43,posz:351},{queue:false,duration:3000,easing:'swing',
	                    // step: function(now) { //ANM: - CAM Along Pipeline.-.
	                    // 	if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
	                    // 	nx.scene.activeCamera.position.copyFrom({x:this.posx,y:this.posy,z:this.posz})
						// 	nx.scene.activeCamera.setTarget( nx.orbyMesh.position ); 
	                    // }, complete:function(){ 


							//TODO: route this back to epic frame [3] probably

	                        nx.orby.startLaserScanAnm();
	                        nx.ui.flashCanvasMSG({txt:'Scanning...',dur:3000,
	                            txtInit:function(){  },
	                            txtEnd:function(){  }
	                        });   


     						// nx.ui.flashCanvasMSG({txt:"Zawd's Ship!",dur:3000})
     						nx.ui.flashCanvasMSG({txt:"Zawd's SpaceTrain!",dur:3000})

     						// nx.ui.flashCanvasMSG({txt:'Caboose EMPTY!',dur:3000,
     						nx.ui.flashCanvasMSG({txt:'SpaceCaboose is EMPTY?!?',dur:3000,
	                            txtInit:function(){ 
	                                nx.orby.stopLaser();
	                            },
	                            txtEnd:function(){   }
	                        });  


							//TODO: laser sequence, new QUESTS: where is Zawd?, Why zapbots on AlphaMoon?
// debugger;
                			nx.ui.flashCanvasMSG({'title':'Where is Zawd?','btn':'GO!',fn:function(){ 
	        // debugger;
	                                nx.initFollowCam();
	                                nx.anmz.orby.forceIdle = 0; //UNFREEZE ORBY MOVEMENTS
	                        }});  

	                    	// nx.initSEQ({seqID:'DoorSEQ'})//DOORSEQUENCE
	                    // }});
	                } //end-init-.

            	} //end-hit-.
	        });

            //TODO make a nx.functionLOOPZ so a one time check can be made if(!pyramidStrataLoopz)
            //TODO deregister... onEND... and need to move into ZONES so multiple games can call these zones to start them-.
            nx.camz.trackOrby = 0;
            nx.scene.registerAfterRender(function pyramidTrackerLoopz() {
            	if(nx.camz.trackOrby===1){
					nx.camz.freeCam.setTarget(nx.orbyMesh.position);
            	}
		    });


            // debugger;
            var pyramidZoneDamperAlpha = 0, lastPyramidQuad = 0 , /*nextPyramidQuad=0, newQuadView=0,*/ currentQuadView=0;

            nx.zonez.camZoneFactory({name:'zonePyramid1',pos:{x: 0, y: 2, z: 0},dim:{h:600,w:600,d:600},alpha:0.22,color:{r:0,g:0,b:1},
            // nx.zonez.camZoneFactory({name:'zonePyramid1',pos:{x: 0, y: 2, z: 0},xm:-600,xp:600,zm:-600,zp:600,alpha:0.22,color:{r:0,g:0,b:1},
            	hit:function(that){ //fires every frame-. 

            		// if(nx.orbyMesh.position.y===0){this.wasHit = 0; return};//turn off loop on ground-.

        			// if(!this.wasHit){ //initHIT-.
           //  			nx.initFreeCam();  //CAMERA: LONG-CAM - over landingpad-.
           //  		}
	                // if(nx.orbyMesh.position.y>10){nx.camz.freeCam.setTarget(nx.orbyMesh.position);} //CAM: TGT ORBY
	                // if(nx.orbyMesh.position.y>10){nx.camz.freeCam.setTarget(nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z));} //CAM: TGT ORBY


	            	//todo HEAVILY dampen this;
	            	if(++pyramidZoneDamperAlpha%2===0 || pyramidZoneDamperAlpha%3===0){return} //frame-damper-.
	// debugger;
					currentQuadView = that.calculateQuadNum();
					if(currentQuadView!=lastPyramidQuad){
						// debugger;
						this.p1Hit = 0, this.p2Hit = 0, this.p3Hit = 0, this.p4Hit = 0, this.p5Hit = 0; //clear all zones-.
						lastPyramidQuad = currentQuadView;
					}


				// if(newQuadView){ 
				// 	newQuadView=0;
    // 				his.p1Hit = 0, this.p2Hit = 0, this.p3Hit = 0, this.p4Hit = 0; //clear all zones-.
				// }


            		// var quadNum = this.calculateQuads()
    				// var quadNum = ()? : ()? : ; //todo no vars here.
    				// console.log('runHIT')
    				// debugger;
    				if(nx.orbyMesh.position.y>278){ //strata5
    					if(!this.p5Hit){ this.p5Hit=1; //one-time-.
    						this.p4Hit = 0,this.p3Hit = 0, this.p2Hit = 0, this.p1Hit = 0; //clear other zones-.
    						// that.zoneCam(that.calculateQuadNum(),that.calculateStrataOffset(4),4); //set zoneCAM-.
    						that.zoneCam(currentQuadView,5); //set zoneCAM-.
    						// console.log('pzone5'); 
    						nx.camz.trackOrby=0;
    						nx.initFaceCam();
    						nx.scene.activeCamera.radius = 50;
    					}
    				}
    				else if(nx.orbyMesh.position.y>250){ //strata4
    					if(!this.p4Hit){ this.p4Hit=1; //one-time-.
    						this.p5Hit = 0,this.p3Hit = 0, this.p2Hit = 0, this.p1Hit = 0; //clear other zones-.

    						// console.log('TEST',currentQuadView)

    						if(nx.scene.finalSequenceFlag){return} //supprese cam switch on finalSeqANM-.

    						//TODO THIS CAN GET STUCK IN SOME WEIRD WAY
    						//VIEW-OVERRIDE - IF ALONG THE WALL-. -----------------TOWER-BAY-
	    					if(currentQuadView===4){ //AND INSIDE TUNNEL-.
	    						if(nx.orbyMesh.position.x>-10){
	    							console.log('override 3')
	    							currentQuadView=3; //OVERRIDE-QUAD-VIEW-.
	    						}
    						}else if (currentQuadView===1){
	    						if(nx.orbyMesh.position.x<10){
	    							console.log('override 3')
	    							currentQuadView=3; //OVERRIDE-QUAD-VIEW-.
								}
    						}else {
    							console.log('not override')
    						}

    						// that.zoneCam(that.calculateQuadNum(),that.calculateStrataOffset(4),4); //set zoneCAM-.
    						that.zoneCam(currentQuadView,4); //set zoneCAM-.
    						// console.log('pzone4'); 
    						nx.camz.trackOrby=1;
    					}
    				}
    				else if(nx.orbyMesh.position.y>200){ //strata3 
    					if(!this.p3Hit){ this.p3Hit=1; //one-time-.
    						this.p5Hit = 0,this.p4Hit = 0,this.p2Hit = 0, this.p1Hit = 0; //clear other zones-.
    						// that.zoneCam(that.calculateQuadNum(),that.calculateStrataOffset(3),3); //set zoneCAM-.

    						//VIEW-OVERRIDE - IF ALONG THE WALL-.  SPACEPIPE BAY-.
	    					if(currentQuadView===4){ //AND INSIDE TUNNEL-.
	    						if(nx.orbyMesh.position.x>-28){
	    							currentQuadView=3; //OVERRIDE-QUAD-VIEW-.
	    						}
    						}else if (currentQuadView===1){
	    						if(nx.orbyMesh.position.x<28){
	    							currentQuadView=3; //OVERRIDE-QUAD-VIEW-.
								}
    						}

    						that.zoneCam(currentQuadView,3); //set zoneCAM-.
    						// console.log('pzone3'); 
    						nx.camz.trackOrby=1;
    					}
    				}else if(nx.orbyMesh.position.y>100){ //strata2
    					if(!this.p2Hit){ this.p2Hit=1; //one-time-.
    						this.p5Hit = 0,this.p4Hit = 0,this.p1Hit = 0, this.p3Hit = 0; //clear other zones-.


    						if(nx.scene.spacetrainscanned){ //todo scene metadata?-.
    							//ZAPBOT2 PLACEMENT
    							nx.zapbotMesh2.position.copyFrom({x:0,y:5,z:0}) //HIDE ZAPBOT so Orby can meet with Darkbot

    							if(!nx.finalZone){ //one-time-.
						            nx.finalZone= nx.zonez.camZoneFactory({name:'zonePyramid1',pos:{x: 0, y: 266, z: 0},dim:{h:10,w:44,d:44},alpha:0.22,color:{r:0,g:1,b:0},
						            // nx.zonez.camZoneFactory({name:'zonePyramid1',pos:{x: 0, y: 2, z: 0},xm:-600,xp:600,zm:-600,zp:600,alpha:0.22,color:{r:0,g:0,b:1},
						            	hit:function(that){ //fires every frame-. 
						            		if(!this.finalHit){ this.finalHit=1; //one-time-.
						            			nx.initSEQ({seqID:9})//FINALSEQUENCE
						            		}
						            	}
						            });
    							}

    						}

    						//ZAP BOT1 CHASE HERE
							// if(nx.kiloBotMesh1.position.x!=-5){
							// 	// debugger;
	      //                   	nx.kiloBotMesh1.position.copyFrom({"x":-5,"y":228.999,"z":5})
	      //                   	nx.kiloBotMesh1.rotationQuaternion = null;
	      //                   	nx.kiloBotMesh1.rotation.y = 2.44
	      //                   	nx.kiloBotMesh1.searching = 1;
							// }

    						// that.zoneCam(that.calculateQuadNum(),that.calculateStrataOffset(2),2); //set zoneCAM-.
    						that.zoneCam(currentQuadView,2); //set zoneCAM-.
    						// console.log('pzone2',); 
    						nx.camz.trackOrby=1;
    					}
    				}else if(nx.orbyMesh.position.y>10){ //strata1
    					if(!this.p1Hit){ this.p1Hit=1; //one-time-.
    						this.p5Hit = 0,this.p4Hit = 0,this.p2Hit = 0, this.p3Hit = 0; //clear other zones-.
							// that.zoneCam(that.calculateQuadNum(),that.calculateStrataOffset(1),1); //set zoneCAM-.
							that.zoneCam(currentQuadView,1); //set zoneCAM-.
    						// console.log('pzone1'); 
    						nx.camz.trackOrby=1;
    					}
    				}else { //----------------------------strata0
    						this.p1Hit = 0, this.p2Hit = 0, this.p3Hit = 0, this.p4Hit = 0, this.p5Hit = 0; //clear other zones-.
    						// console.log('pzone0'); 
    						nx.camz.trackOrby=0;
							if(nx.scene.activeCamera.name!="followCam1"){ nx.initFollowCam(); }


    				}// return;
        			// }else{ //initH/IT-.
        				// console.log('initHIT')
        				// this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.
        			// } //end-init-hit-.
            	}, //end-hit-.
            	// zoneCam:function(quad,strataOffset,strata){
            	zoneCam:function(quad,strata){
            		// debugger;
            		if(nx.scene.activeCamera.name!="freeCam1"){ 
            			nx.initFreeCam();
						// nx.camz.followCam.lockedTarget = nx.orbyMesh; 
            		}
    						

            		if(quad===5){ //POS CAM at offset of orby POS
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x-100,y:strataOffset,z:nx.orbyMesh.position.z-100});
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x-100,y:nx.orbyMesh.position.y+strataOffset,z:nx.orbyMesh.position.z-100});
            			if(strata===1){ nx.scene.activeCamera.position.copyFrom({x:-500,y:100,z:-500}); }
            			if(strata===2){ nx.scene.activeCamera.position.copyFrom({x:-250,y:200,z:-250}); }
            			if(strata===3){ nx.scene.activeCamera.position.copyFrom({x:-100,y:240,z:-100}); }
            			if(strata===4){ nx.scene.activeCamera.position.copyFrom({x:-50,y:270,z:-50}); }
            			// if(strata===5){ nx.scene.activeCamera.position.copyFrom({x:-50,y:270,z:-50}); }
            			// nx.camz.freeCam.setTarget(nx.BV3(0,200,0)); //CAM: TGT ORBY
            			// nx.camz.freeCam.setTarget(nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z)); //CAM: TGT ORBY
            			console.log('quad5 '+strata)
            		}
            		else if(quad===4){ //POS CAM at offset of orby POS
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x-100,y:strataOffset,z:nx.orbyMesh.position.z-100});
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x-100,y:nx.orbyMesh.position.y+strataOffset,z:nx.orbyMesh.position.z-100});
            			if(strata===1){ nx.scene.activeCamera.position.copyFrom({x:-500,y:100,z:-500}); }
            			if(strata===2){ nx.scene.activeCamera.position.copyFrom({x:-250,y:200,z:-250}); }
            			if(strata===3){ nx.scene.activeCamera.position.copyFrom({x:-100,y:240,z:-100}); }
            			if(strata===4){ nx.scene.activeCamera.position.copyFrom({x:-50,y:270,z:-50}); }
            			// if(strata===5){ nx.scene.activeCamera.position.copyFrom({x:-50,y:270,z:-50}); }
            			// nx.camz.freeCam.setTarget(nx.BV3(0,200,0)); //CAM: TGT ORBY
            			// nx.camz.freeCam.setTarget(nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z)); //CAM: TGT ORBY
            			console.log('quad4 '+strata)
            		} else if(quad===3){ //POS CAM at offset of orby POS
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x-100,y:strataOffset,z:nx.orbyMesh.position.z+100});
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x-100,y:nx.orbyMesh.position.y+strataOffset,z:nx.orbyMesh.position.z+100});
            			// nx.scene.activeCamera.position.copyFrom({x:-100,y:nx.orbyMesh.position.y+strataOffset,z:100});
            			if(strata===1){ nx.scene.activeCamera.position.copyFrom({x:-500,y:100,z:500}); }
            			if(strata===2){ nx.scene.activeCamera.position.copyFrom({x:-250,y:200,z:250}); }
            			if(strata===3){ nx.scene.activeCamera.position.copyFrom({x:-100,y:240,z:100}); }
            			if(strata===4){ nx.scene.activeCamera.position.copyFrom({x:-50,y:270,z:50}); }
            			// if(strata===5){ nx.scene.activeCamera.position.copyFrom({x:-50,y:270,z:50}); }
            			// nx.camz.freeCam.setTarget(nx.BV3(0,200,0)); //CAM: TGT ORBY
            			// nx.camz.freeCam.setTarget(nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z)); //CAM: TGT ORBY
            			console.log('quad3 '+strata)
            		} else if(quad===2){ //POS CAM at offset of orby POS
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x+100,y:strataOffset,z:nx.orbyMesh.position.z-100});
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x+100,y:nx.orbyMesh.position.y+strataOffset,z:nx.orbyMesh.position.z-100});
            			if(strata===1){ nx.scene.activeCamera.position.copyFrom({x:500,y:100,z:-500}); }
            			if(strata===2){ nx.scene.activeCamera.position.copyFrom({x:250,y:200,z:-250}); }
            			if(strata===3){ nx.scene.activeCamera.position.copyFrom({x:100,y:240,z:-100}); }
            			if(strata===4){ nx.scene.activeCamera.position.copyFrom({x:50,y:270,z:-50}); }
            			// if(strata===5){ nx.scene.activeCamera.position.copyFrom({x:50,y:270,z:-50}); }
            			// nx.camz.freeCam.setTarget(nx.BV3(0,200,0)); //CAM: TGT ORBY
            			// nx.camz.freeCam.setTarget(nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z)); //CAM: TGT ORBY
            			console.log('quad2 '+strata)
            		} else if(quad===1){ //POS CAM at offset of orby POS
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x+100,y:strataOffset,z:nx.orbyMesh.position.z+100});
            			// nx.scene.activeCamera.position.copyFrom({x:nx.orbyMesh.position.x+100,y:nx.orbyMesh.position.y+strataOffset,z:nx.orbyMesh.position.z+100});
            			if(strata===1){ nx.scene.activeCamera.position.copyFrom({x:500,y:100,z:500}); }
            			if(strata===2){ nx.scene.activeCamera.position.copyFrom({x:250,y:200,z:250}); }
            			if(strata===3){ nx.scene.activeCamera.position.copyFrom({x:100,y:240,z:100}); }
            			if(strata===4){ nx.scene.activeCamera.position.copyFrom({x:50,y:270,z:50}); }
            			// if(strata===5){ nx.scene.activeCamera.position.copyFrom({x:50,y:270,z:50}); }
            			// nx.camz.freeCam.setTarget(nx.BV3(0,200,0)); //CAM: TGT ORBY
            			// nx.camz.freeCam.setTarget(nx.BV3(nx.orbyMesh.position.x,nx.orbyMesh.position.y,nx.orbyMesh.position.z)); //CAM: TGT ORBY
            			console.log('quad1 '+strata)
            		}
            	},
            	calculateQuadNum:function(){ //calculates position on world: even even, odd, odd, etc-.
    				// nextPyramidQuad = (nx.orbyMesh.position.x>=0&&nx.orbyMesh.position.z>=0)?1:
    				// 	(nx.orbyMesh.position.x>=0&&nx.orbyMesh.position.z<0)?2:
    				// 	(nx.orbyMesh.position.x<0&&nx.orbyMesh.position.z>=0)?3:4; //no vars here.

    				// if(nextPyramidQuad!=lastPyramidQuad){
    				// 	debugger;
    				// 		this.p1Hit = 0, this.p2Hit = 0, this.p3Hit = 0, this.p4Hit = 0; //clear other zones-.
    				// 	lastPyramidQuad = nextPyramidQuad;
    				// }
    				// return nextPyramidQuad;
    				return (nx.orbyMesh.position.x>=0&&nx.orbyMesh.position.z>=0)?1:
    					(nx.orbyMesh.position.x>=0&&nx.orbyMesh.position.z<0)?2:
    					(nx.orbyMesh.position.x<0&&nx.orbyMesh.position.z>=0)?3:4; //no vars here.
            	}
        //     	,
        //     	calculateStrataOffset:function(strata){ //calculates a Y offset for CAM POS-based on y zone-strata-.
    				// return (strata===3)?15:(strata===3)?8:3; //no vars here.
        //     	}
	        });

            //todo rename hit to triggerfn
            // nx.zonez.camZoneFactory({name:'zoneSpaceTrain',pos:{x: 0, y: 2, z: 0},dim:{h:600,w:600,d:600},alpha:0.22,color:{r:0,g:0,b:1},
         //    nx.zonez.collisionZoneFactory({name:'zonePyramid1',pos:{x: 0, y: 50, z: 0},rot:{y:0.8},dim:{h:100,w:544,d:544},alpha:0.22,color:{r:0,g:1,b:1},
        	// 	hit:function(aZone){ //fires every frame-. //todo possibly dampen
        	// 		if(this.wasHit){
	        // 			console.log('frame hit')
        	// 			return;
        	// 		}
        	// 		else{this.wasHit=1;  //INIT-HIT-.         /*setTimeout(function(){this.wasHit=0},3000);*/} //one time hit init-.

	        // 			// debugger;
	        // 			//if CAM COLLS ZONEZ.
	        // 			// if(nx.scene.activeCamera.intersectsMesh(aZone,true)){ //if intersects-.
	        // 			// var aHit = nx.scene.activeCamera.intersectsMesh(aZone,true);// todo optimize no vars here-.
		       //  		// if(aHit){ //if intersects-.
		       //  			console.log('initializing hit')
		       //  			// aHit.pickedPoint;
		       //  			//CAM-POS: freeze x z.
		       //  			// nx.scene.activeCamera.position(aHit.pickedPoint);


		       //  			        nx.scene.activeCamera.collisionRadius = new BABYLON.Vector3(100, 3, 100)
								 //    nx.scene.activeCamera.checkCollisions = true;
								 //    // camera.applyGravity = true;
									// // camera.attachControl(canvas);



		       //  		// }

		       //  	} //end init hit-.

         //    	} //end-hit-.
	        // });

         //    nx.zonez.collisionZoneFactory({name:'zonePyramid2',pos:{x: 0, y: 150, z: 0},rot:{y:0.8},dim:{h:100,w:222,d:222},alpha:0.22,color:{r:1,g:1,b:0},
        	// 	hit:function(){ //fires every frame-. //todo possibly dampen
        	// 		debugger;
        	// 		if(this.wasHit){return;}else{this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.
        	// 		//CAM-POS: freeze x z.
         //    	} //end-hit-.
	        // });

         //    nx.zonez.collisionZoneFactory({name:'zonePyramid3',pos:{x: 0, y: 250, z: 0},rot:{y:0.8},dim:{h:50,w:50,d:50},alpha:0.22,color:{r:1,g:0,b:0},
        	// 	hit:function(){ //fires every frame-. //todo possibly dampen
        	// 		debugger;
        	// 		if(this.wasHit){return;}else{this.wasHit=1;/*setTimeout(function(){this.wasHit=0},3000);*/} //one time init-.
        	// 		//CAM-POS: freeze x z.
         //    	} //end-hit-.
	        // });

            nx.zoneAlarmsOn = 1; //TURN ON ZONEALARM-.
	     //SCENE-ZONEZ------------------------------------------------------------------------END


		//- FROZEN -INTERMISSION - BEGINNING OF GAME-.
        // nx.ui.flashCanvasMSG({'btn':'GO!',title:'Mission 2: SpaceTrain',fn:function(){ //AT END OF SPACESEQUENCE before GAME1
        // 	// debugger;
        // 		nx.anmz.orby.forceIdle = 0; //UNFREEZE ORBY MOVEMENTS
        //         nx.runGAME({gameID:5}); // on click go at end of movie. softload
        // }});



//todo two zones here...



    },runfn:function(){
		// setTimeout(function(){
			nx.initFollowCam(); 
			nx.anmz.orby.forceIdle = 0; //UNFREEZE ORBY MOVE-CONTROLS-.
		// },1000)
    	
    },endfn:function(){

    	// debugger;

        // // nx.camz.followCam.cameraAcceleration = 0.01; //Too slow for falling orby-.
        // nx.camz.followCam.cameraAcceleration = 0.03; //FIX: falling too far behind moving orby-.
        // nx.camz.followCam.radius = 10;
        // nx.camz.followCam.heightOffset = 30;



    }}




    //MASTER-SEQUENCE-PACKAGING PATTERN: USAGE:
    // 2:{gameID:2,name:'GoSpaceIONZ',initfn:function(){},runfn:function(){},endfn:function(){}}


// ]
}



//GOAL: MASTER-FUNCTION to run any gamez-. Then helper functions to turn things on and off in ~aCinemaFactory~. : )



}


// nx.anmz.orby.collisionItems.push(nx.masterPipe);	 