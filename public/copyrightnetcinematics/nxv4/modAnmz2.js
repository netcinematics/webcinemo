/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('anmz module-loaded')
// debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
if(!nx.anm){nx.anm={}}
if(!nx.anm.darkBot){nx.anm.darkBot={}}
/******************************-MODULE-**********************************/
//MODULE-READY-RENDERER-MECHANISMO-.
nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
  //local create call here-.
}); //schedule in manifest for ready callback-.
nx.setMasterManifest(); //signal success and await-.
/*******************************-DESCRIPTION-***************************/
//ANMSCRIPT: precise syntax to result in flexible, extensible, reusable, time~relative, liquid animations.
//ATOMIC-ANMZ: small, fully compacted bits of animations. Reusable for many things.

/*******************************-ATOMIC-ANMZ-****************************/
nx.anm.zoomCam1 = function(){
	nx.scene.activeCamera.position.copyFrom({x: 26.734396619055506, y: 266.00000000001614, z: -38.2592512965453})
	nx.scene.activeCamera.setTarget(nx.BV32({x: 23.5, y: 265.6, z: -28.6})) //CAMTGT: 
    $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
    .animate({cx:24.6,cy:265.7,cz:-32}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.scene.activeCamera.position.x = this.cx;
	        nx.scene.activeCamera.position.y = this.cy;
	        nx.scene.activeCamera.position.z = this.cz;
			nx.scene.activeCamera.setTarget(nx.BV32({x: 23.5, y: 265.6, z: -28.6})) //CAMTGT: 
	    },complete:function(){}
	});
}
nx.anm.darkBot.flipAround = function(){
	// var darkLiftOff = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 60, 90, false, 1);
	var darkLiftOff = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 60, 85, false, 1);
    $({ry:nx.darkBot.rotation.y,posY:nx.darkBot.position.y})
    .animate({ry:-3.75,posY:nx.darkBot.position.y+2}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { 
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.darkBot.rotation.y = this.ry;
	        nx.darkBot.position.y = this.posY;
	    },complete:function(){

			nx.initDarkBotHover();
			nx.dBot.stopHover = 0;
			nx.darkBot.hoverAmount = 0.00222;

	    	var darkMezmo = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 1, 20, false, 0.5);
	    }
	});
}

nx.anm.finalCam2 = function(){
    $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
    .animate({cx:-11.81,cy:263,cz:4.68}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.scene.activeCamera.position.x = this.cx;
	        nx.scene.activeCamera.position.y = this.cy;
	        nx.scene.activeCamera.position.z = this.cz;
			nx.scene.activeCamera.setTarget(nx.darkBot.position) //CAMTGT: 
			// nx.scene.activeCamera.setTarget(nx.BV32(nx.darkBot.position)) //CAMTGT: 
	    },complete:function(){}
	});
}




nx.anm.darkBot.mezmerize = function(){

	nx.dBot.startMezmoRays(function fnEnd(){
                        // debugger;
        // nx.dBot.endMezmoRays();
    });
	// var darkMezmo = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 0, 12, false, 0.5);
 //    $({ry:nx.darkBot.rotation.y,posY:nx.darkBot.position.y})
 //    .animate({ry:-3.75,posY:nx.darkBot.position.y+2}
 //    ,{queue:false,duration:1000*nx.RUNTIME,easing:'swing',
	//     step:function(now) { 
	//        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	//         nx.darkBot.rotation.y = this.ry;
	//         nx.darkBot.position.y = this.posY;
	//     },complete:function(){}
	// });
}

nx.anm.orbyMoveBack = function(){
	nx.scene.activeCamera.position.copyFrom({x: 29.3686466884961, y: 271.1649502179384, z: -37.54369632060394})//campos:orby center
	 nx.scene.activeCamera.setTarget(nx.orbyMesh.position) //CAMTGT: 
	 var rCur=0,rLast=0,rAdd=0; //TRICKY-ROTATION-SYNTAX-. rCur-rLast = rAdd, for animated-rotations-.
    $({rx:0, px:nx.orbyMesh.position.x})
    .animate({rx:0.2,px:10} 
    ,{queue:false,duration:2000*nx.RUNTIME,easing:'swing',
	    step:function(now) { 
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        rCur = this.rx; rAdd = rCur-rLast; rLast = rCur; //TRICKY-ROTATION-SYNTAX-.
	        nx.orbyMesh.rotation.x = rAdd;
	        nx.orbyMesh.position.x = this.px;
	        nx.scene.activeCamera.setTarget(nx.orbyMesh.position) //CAMTGT: 
	    },complete:function(){
		    $({rx:0, pz:nx.orbyMesh.position.z})
		    .animate({rx:-0.2,pz:nx.orbyMesh.position.z-1}
		    ,{queue:false,duration:1000*nx.RUNTIME,easing:'swing',
			    step:function(now) { 
			        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
			        rCur = this.rx; rAdd = rCur-rLast; rLast = rCur; //TRICKY-ROTATION-SYNTAX-.
			        nx.orbyMesh.rotation.x = rAdd;
			        nx.orbyMesh.position.z = this.pz;
	        		nx.scene.activeCamera.setTarget(nx.orbyMesh.position) //CAMTGT: 
			    },complete:function(){}
			});
	    }
	});


}

nx.anm.darkBotCloseUp = function(){
	nx.scene.activeCamera.position.copyFrom({x: 11.522826622658462, y: 268.31374734203257, z: -7.452847136867364})
	nx.scene.activeCamera.setTarget(nx.BV32({x: 17.097057399843656, y: 267.38466287163783, z: -15.073304346321638})) //CAMTGT: 
    $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
    .animate({cx:13.98,cy:267.9,cz:-10.8}
    ,{queue:false,duration:2000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.scene.activeCamera.position.x = this.cx;
	        nx.scene.activeCamera.position.y = this.cy;
	        nx.scene.activeCamera.position.z = this.cz;
			nx.scene.activeCamera.setTarget(nx.BV32({x: 17.097057399843656, y: 267.38466287163783, z: -15.073304346321638})) //CAMTGT: 
	    },complete:function(){}
	});
}
nx.anm.orbyCloseUp = function(){
	nx.scene.activeCamera.position.copyFrom({x: 22.78139708552389, y: 268.698726943571, z: -22.176668518121325})
	nx.scene.activeCamera.setTarget(nx.BV32({x: 13.773611742026706, y: 265.9147377366588, z: -12.804717085637785})) //CAMTGT: 
    $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
    // .animate({cx:15.24,cy:266.36,cz:-14.34}
    	// {x: 18.056516428484535, y: 267.21466365716134, z: -17.288065004731642}
    .animate({cx:18.05,cy:267.21,cz:-17.2888}
    ,{queue:false,duration:2000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.scene.activeCamera.position.x = this.cx;
	        nx.scene.activeCamera.position.y = this.cy;
	        nx.scene.activeCamera.position.z = this.cz;
			nx.scene.activeCamera.setTarget(nx.BV32({x: 13.773611742026706, y: 265.9147377366588, z: -12.804717085637785})) //CAMTGT: 
	    },complete:function(){}
	});
}
nx.anm.orbyCloseUp2 = function(){


    var rCur=0,rLast=0,rAdd=0; //TRICKY-ROTATION-SYNTAX-. rCur-rLast = rAdd, for animated-rotations-.
    $({ry:nx.orbyMesh.rotation.y})
    .animate({ry:-1}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
        step:function(now) { 
            if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
            rCur = this.ry; rAdd = rCur-rLast; rLast = rCur; //TRICKY-ROTATION-SYNTAX-.
            nx.orbyMesh.rotation.y = rAdd;
            console.log('ROT orby',rAdd)
            // nx.orbyMesh.rotation.y = this.ry;
        },complete:function(){}
    });


	nx.scene.activeCamera.position.copyFrom({x: 33.66187692892416, y: 270.8647460809518, z: -42.5054591322443})
	nx.scene.activeCamera.setTarget(nx.BV32({x: 7.6484554777684215, y: 266.69786997352037, z: -10.736219571946753})) //CAMTGT: 
    $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
    .animate({cx:27.4,cy:269,cz:-34.85}
    ,{queue:false,duration:2000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.scene.activeCamera.position.x = this.cx;
	        nx.scene.activeCamera.position.y = this.cy;
	        nx.scene.activeCamera.position.z = this.cz;
			nx.scene.activeCamera.setTarget(nx.BV32({x: 7.6484554777684215, y: 266.69786997352037, z: -10.736219571946753})) //CAMTGT: 
	    },complete:function(){}
	});
}
nx.anm.zapBotConvergence = function(){
	nx.kiloBotMesh1.startShocking()
	nx.zapbotMega.startShocking()
	nx.zapbotTerra2.startShocking()

    $({cx:nx.kiloBotMesh1.position.x,cy:nx.kiloBotMesh1.position.y,cz:nx.kiloBotMesh1.position.z})
    .animate({cx:-3,cy:264.7,cz:-3}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.kiloBotMesh1.position.x = this.cx;
	        nx.kiloBotMesh1.position.y = this.cy;
	        nx.kiloBotMesh1.position.z = this.cz;
	    },complete:function(){}
	});

    $({cx:nx.zapbotMega.position.x,cy:nx.zapbotMega.position.y,cz:nx.zapbotMega.position.z})
    .animate({cx:-3,cy:266.36,cz:3}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.zapbotMega.position.x = this.cx;
	        nx.zapbotMega.position.y = this.cy;
	        nx.zapbotMega.position.z = this.cz;
	    },complete:function(){}
	});


    $({cx:nx.zapbotTerra2.position.x,cy:nx.zapbotTerra2.position.y,cz:nx.zapbotTerra2.position.z})
    .animate({cx:2.6,cy:264.5,cz:2.5}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.zapbotTerra2.position.x = this.cx;
	        nx.zapbotTerra2.position.y = this.cy;
	        nx.zapbotTerra2.position.z = this.cz;
	    },complete:function(){
	    	nx.orby.addGlowFactory('zap',nx.orbyMesh)
	    	nx.orby.addGlowFactory('zap',nx.orbyMeshBody)
            nx.scene.beginAnimation(nx.orbySkeleton[0], 1, 4, true, 0.25); //ANIMATED-SURFBOARD-.
	    }
	});


}

// nx.anm.zapBotIntros = function(){
// 	// nx.orbyMesh.position.copyFrom({x: 0, y: 262.5, z: 0})
// 	nx.kiloBotMesh1.position.copyFrom({x: -18.503743511479904, y: 265.2077840580054, z: -16.072452649156094})
// 	nx.kiloBotMesh1.rotation.y = -2.3
// 	nx.scene.activeCamera.position.copyFrom({x: 0, y: 262.5, z: 0})
// 	nx.scene.activeCamera.setTarget(nx.kiloBotMesh1.position) //CAMTGT: 
// 	setTimeout(function(){
// 		nx.zapbotMega.position.copyFrom({x: -20.519167819340684, y: 266, z: 19.320231975620192})
// 		nx.zapbotMega.rotation.y = -0.8
// 		nx.scene.activeCamera.position.copyFrom({x: 0, y: 262.5, z: 0})
// 		nx.scene.activeCamera.setTarget(nx.zapbotMega.position) //CAMTGT: 

// 		setTimeout(function(){

// 			nx.zapbotTerra2.position.copyFrom( {x: 26.014782132909403, y: 263.2003778787977, z: 18.889698881576113})
// 			nx.zapbotTerra2.rotation.y = 1;
// 			nx.scene.activeCamera.position.copyFrom({x: 0, y: 266, z: 0})
// 			nx.scene.activeCamera.setTarget(nx.zapbotTerra2.position) //CAMTGT: 

// 			setTimeout(function(){

// 			},2000)
// 		},2000)
// 	},2000)
// 	// nx.orbyMesh.rotation.y = 0.44;
// };

nx.anm.orbyShockGem = function(endfn){

	// nx.orby.loadOrbyMouth(function(){
		nx.orbyMesh.position.y = 0; //HIDE THE REAL ORBY-.
		nx.orbyMeshM.visibility = 1; //show mouth orby
		nx.orbyMeshBodyM.visibility = 1; //show mouth orby and board
        nx.orbyIRISMouth.visibility = 1;
        nx.orbyEYEMouth.visibility = 1;
        nx.orbyMouthM.visibility = 1;

		// endfn();
	// });
 //    $({rx:nx.darkBot.rotation.x, ry:nx.darkBot.rotation.y,rz:nx.darkBot.rotation.z})
 //    .animate({rx:-0.88,ry:-1.75,rz:0.4}
 //    ,{queue:false,duration:1000*nx.RUNTIME,easing:'swing',
	//     step:function(now) { 
	//        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	//         nx.darkBot.rotation.x = this.rotx;
	//         nx.darkBot.rotation.y = this.roty;
	//         nx.darkBot.rotation.z = this.rotz;
	//     },complete:function(){}
	// });
}
nx.purpleSteamSystem1={};
nx.fireSystem1={}, nx.bluePlasmaSystem1={}, nx.purpleSmokeSystem1={};
nx.fireSystem2={}, nx.bluePlasmaSystem2={}, nx.purpleSmokeSystem2={};
nx.fireSystem3={}, nx.bluePlasmaSystem3={}, nx.purpleSmokeSystem3={};
nx.anm.boomANM = function(){


    var fountainFire1 = BABYLON.Mesh.CreateBox("fountain", 2.0, nx.scene);
    fountainFire1.position = new BABYLON.Vector3(-1,263,-1);
    fountainFire1.visibility = 0;
    // Create a particle system
    var fireSystem1 = new BABYLON.ParticleSystem("particles", 2000, nx.scene);

    //Texture of each particle
    fireSystem1.particleTexture = new BABYLON.Texture("textures/flare.png", nx.scene);

    // Where the particles come from
    fireSystem1.emitter = fountainFire1; // the starting object, the emitter
    // fireSystem1.minEmitBox = new BABYLON.Vector3(-0.5, 0.5, -0.5); // Starting all from
    fireSystem1.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5); // Starting all from
    fireSystem1.maxEmitBox = new BABYLON.Vector3(0.5, 2, 0.5); // To...
    // fireSystem1.maxEmitBox = new BABYLON.Vector3(0.5, 1.5, 0.5); // To...

    // Colors of all particles
    fireSystem1.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem1.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem1.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    // Size of each particle (random between...
    fireSystem1.minSize = 0.5;
    fireSystem1.maxSize = 1;

    // Life time of each particle (random between...
    fireSystem1.minLifeTime = 0.2;
    fireSystem1.maxLifeTime = 0.4;

    // Emission rate
    fireSystem1.emitRate = 150;//500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    fireSystem1.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    fireSystem1.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    fireSystem1.direction1 = new BABYLON.Vector3(-4, 0, -4);
    fireSystem1.direction2 = new BABYLON.Vector3(-4, 0, -4);
    // fireSystem1.direction1 = new BABYLON.Vector3(0, 8, 0);
    // fireSystem1.direction2 = new BABYLON.Vector3(0, 8, 0);

    // Angular speed, in radians
    fireSystem1.minAngularSpeed = 0;
    fireSystem1.maxAngularSpeed = Math.PI;

    // Speed
    fireSystem1.minEmitPower = 1;
    fireSystem1.maxEmitPower = 3;
    fireSystem1.updateSpeed = 0.005;

    // Start the particle system
    fireSystem1.start();


	nx.fireSystem1 = fireSystem1;


    var fountainFire2 = BABYLON.Mesh.CreateBox("fountain", 2.0, nx.scene);
    fountainFire2.position = new BABYLON.Vector3(-1,263,-1);
    fountainFire2.visibility = 0;
    // Create a particle system
    var fireSystem2 = new BABYLON.ParticleSystem("particles", 2000, nx.scene);

    //Texture of each particle
    fireSystem2.particleTexture = new BABYLON.Texture("textures/flare.png", nx.scene);

    // Where the particles come from
    fireSystem2.emitter = fountainFire2; // the starting object, the emitter
    // fireSystem2.minEmitBox = new BABYLON.Vector3(-0.5, 0.5, -0.5); // Starting all from
    fireSystem2.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5); // Starting all from
    fireSystem2.maxEmitBox = new BABYLON.Vector3(0.5, 2, 0.5); // To...
    // fireSystem2.maxEmitBox = new BABYLON.Vector3(0.5, 1.5, 0.5); // To...

    // Colors of all particles
    fireSystem2.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem2.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem2.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    // Size of each particle (random between...
    fireSystem2.minSize = 0.5;
    fireSystem2.maxSize = 1;

    // Life time of each particle (random between...
    fireSystem2.minLifeTime = 0.2;
    fireSystem2.maxLifeTime = 0.4;

    // Emission rate
    fireSystem2.emitRate = 150;//500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    fireSystem2.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    fireSystem2.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    fireSystem2.direction1 = new BABYLON.Vector3(4, 0, 4);
    fireSystem2.direction2 = new BABYLON.Vector3(4, 0, 4);
    // fireSystem2.direction1 = new BABYLON.Vector3(0, 8, 0);
    // fireSystem2.direction2 = new BABYLON.Vector3(0, 8, 0);

    // Angular speed, in radians
    fireSystem2.minAngularSpeed = 0;
    fireSystem2.maxAngularSpeed = Math.PI;

    // Speed
    fireSystem2.minEmitPower = 1;
    fireSystem2.maxEmitPower = 3;
    fireSystem2.updateSpeed = 0.005;

    // Start the particle system
    fireSystem2.start();


	nx.fireSystem2 = fireSystem2;



    var fountainPlasma1 = BABYLON.Mesh.CreateBox("fountain", 2.0, nx.scene);
    fountainPlasma1.position = new BABYLON.Vector3(-1,263,-1);
    fountainPlasma1.visibility = 0;
  var bluePlasmaSystem1 = new BABYLON.ParticleSystem("particles", 2000, nx.scene);

    //Texture of each particle
    bluePlasmaSystem1.particleTexture = new BABYLON.Texture("textures/sparkle.png", nx.scene);
    // bluePlasmaSystem1.particleTexture = new BABYLON.Texture("textures/flare.png", nx.scene);

    // Where the particles come from
    bluePlasmaSystem1.emitter = fountainPlasma1; // the starting object, the emitter
    // bluePlasmaSystem1.minEmitBox = new BABYLON.Vector3(-2.5, 0, -2.5); // Starting all from
    // bluePlasmaSystem1.maxEmitBox = new BABYLON.Vector3(2.5, 2, 2.5); // To...
    bluePlasmaSystem1.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5); // Starting all from
    bluePlasmaSystem1.maxEmitBox = new BABYLON.Vector3(0.5, 2, 0.5); // To...


    // Colors of all particles
    // bluePlasmaSystem1.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // bluePlasmaSystem1.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // bluePlasmaSystem1.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);


    bluePlasmaSystem1.color1 = new BABYLON.Color4(0, 0.47, 1);
    bluePlasmaSystem1.color2 = new BABYLON.Color4(0.15, 0.97, 0.35, 0.77);
    bluePlasmaSystem1.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);



    // Size of each particle (random between...
    bluePlasmaSystem1.minSize = 0.5;
    bluePlasmaSystem1.maxSize = 1;

    // Life time of each particle (random between...
    bluePlasmaSystem1.minLifeTime = 2;//0.2;
    bluePlasmaSystem1.maxLifeTime = 4;//0.4;

    // Emission rate
    bluePlasmaSystem1.emitRate = 250;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    bluePlasmaSystem1.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    bluePlasmaSystem1.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    bluePlasmaSystem1.direction1 = new BABYLON.Vector3(-10, 0, -10);
    bluePlasmaSystem1.direction2 = new BABYLON.Vector3(-10, 0, -10);

    // Angular speed, in radians
    bluePlasmaSystem1.minAngularSpeed = 2;//0;
    bluePlasmaSystem1.maxAngularSpeed = Math.PI;

    // Speed
    bluePlasmaSystem1.minEmitPower = 4;//1;
    bluePlasmaSystem1.maxEmitPower = 8;//3;
    bluePlasmaSystem1.updateSpeed = 0.005;

    // Start the particle system
    bluePlasmaSystem1.start();
    
	nx.bluePlasmaSystem1 = bluePlasmaSystem1;

    var fountainPlasma2 = BABYLON.Mesh.CreateBox("fountain", 2.0, nx.scene);
    fountainPlasma2.position = new BABYLON.Vector3(-1,263,-1);
    fountainPlasma2.visibility = 0;
  var bluePlasmaSystem2 = new BABYLON.ParticleSystem("particles", 2000, nx.scene);

    //Texture of each particle
    // bluePlasmaSystem2.particleTexture = new BABYLON.Texture("textures/flare.png", nx.scene);
    bluePlasmaSystem2.particleTexture = new BABYLON.Texture("textures/sparkle.png", nx.scene);

    // Where the particles come from
    bluePlasmaSystem2.emitter = fountainPlasma2; // the starting object, the emitter
    // bluePlasmaSystem2.minEmitBox = new BABYLON.Vector3(-2.5, 0, -2.5); // Starting all from
    // bluePlasmaSystem2.maxEmitBox = new BABYLON.Vector3(2.5, 2, 2.5); // To...
    bluePlasmaSystem2.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5); // Starting all from
    bluePlasmaSystem2.maxEmitBox = new BABYLON.Vector3(0.5, 2, 0.5); // To...


    // Colors of all particles
    // bluePlasmaSystem2.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // bluePlasmaSystem2.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // bluePlasmaSystem2.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);


    bluePlasmaSystem2.color1 = new BABYLON.Color4(0, 0.47, 1);
    bluePlasmaSystem2.color2 = new BABYLON.Color4(0.15, 0.97, 0.35, 0.77);
    bluePlasmaSystem2.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);



    // Size of each particle (random between...
    bluePlasmaSystem2.minSize = 0.5;
    bluePlasmaSystem2.maxSize = 1;

    // Life time of each particle (random between...
    bluePlasmaSystem2.minLifeTime = 2;//0.2;
    bluePlasmaSystem2.maxLifeTime = 4;//0.4;

    // Emission rate
    bluePlasmaSystem2.emitRate = 250;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    bluePlasmaSystem2.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    bluePlasmaSystem2.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    bluePlasmaSystem2.direction1 = new BABYLON.Vector3(10, 0, 10);
    bluePlasmaSystem2.direction2 = new BABYLON.Vector3(10, 0, 10);

    // Angular speed, in radians
    bluePlasmaSystem2.minAngularSpeed = 2;//0;
    bluePlasmaSystem2.maxAngularSpeed = Math.PI;

    // Speed
    bluePlasmaSystem2.minEmitPower = 4;//1;
    bluePlasmaSystem2.maxEmitPower = 8;//3;
    bluePlasmaSystem2.updateSpeed = 0.005;

    // Start the particle system
    bluePlasmaSystem2.start();
    
	nx.bluePlasmaSystem2 = bluePlasmaSystem2;

    var fountainPlasma3 = BABYLON.Mesh.CreateBox("fountain", 2.0, nx.scene);
    fountainPlasma3.position = new BABYLON.Vector3(-1,263,-1);
    fountainPlasma3.visibility = 0;
  var bluePlasmaSystem3 = new BABYLON.ParticleSystem("particles", 2000, nx.scene);

    //Texture of each particle
    // bluePlasmaSystem3.particleTexture = new BABYLON.Texture("textures/flare.png", nx.scene);
    bluePlasmaSystem3.particleTexture = new BABYLON.Texture("textures/sparkle.png", nx.scene);

    // Where the particles come from
    bluePlasmaSystem3.emitter = fountainPlasma3; // the starting object, the emitter
    // bluePlasmaSystem3.minEmitBox = new BABYLON.Vector3(-2.5, 0, -2.5); // Starting all from
    // bluePlasmaSystem3.maxEmitBox = new BABYLON.Vector3(2.5, 2, 2.5); // To...
    bluePlasmaSystem3.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5); // Starting all from
    bluePlasmaSystem3.maxEmitBox = new BABYLON.Vector3(0.5, 2, 0.5); // To...


    // Colors of all particles
    // bluePlasmaSystem3.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // bluePlasmaSystem3.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // bluePlasmaSystem3.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);


    bluePlasmaSystem3.color1 = new BABYLON.Color4(0, 0.47, 1);
    bluePlasmaSystem3.color2 = new BABYLON.Color4(0.15, 0.97, 0.35, 0.77);
    bluePlasmaSystem3.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);



    // Size of each particle (random between...
    bluePlasmaSystem3.minSize = 0.5;
    bluePlasmaSystem3.maxSize = 1;

    // Life time of each particle (random between...
    bluePlasmaSystem3.minLifeTime = 2;//0.2;
    bluePlasmaSystem3.maxLifeTime = 4;//0.4;

    // Emission rate
    bluePlasmaSystem3.emitRate = 250;//500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    bluePlasmaSystem3.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    bluePlasmaSystem3.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    bluePlasmaSystem3.direction1 = new BABYLON.Vector3(-10, 0, 10);
    bluePlasmaSystem3.direction2 = new BABYLON.Vector3(-10, 0, 10);

    // Angular speed, in radians
    bluePlasmaSystem3.minAngularSpeed = 2;//0;
    bluePlasmaSystem3.maxAngularSpeed = Math.PI;

    // Speed
    bluePlasmaSystem3.minEmitPower = 4;//1;
    bluePlasmaSystem3.maxEmitPower = 8;//3;
    bluePlasmaSystem3.updateSpeed = 0.005;

    // Start the particle system
    bluePlasmaSystem3.start();
    
	nx.bluePlasmaSystem3 = bluePlasmaSystem3;


    var fountainSmoke1 = BABYLON.Mesh.CreateBox("fountain", 2.0, nx.scene);
    fountainSmoke1.position = new BABYLON.Vector3(10,260,0);
        fountainSmoke1.visibility = 0;
 var purpleSmokeSystem1 = new BABYLON.ParticleSystem("particles", 2000, nx.scene);

    //Texture of each particle
    purpleSmokeSystem1.particleTexture = new BABYLON.Texture("textures/cloud.png", nx.scene);

    // Where the particles come from
    purpleSmokeSystem1.emitter = fountainSmoke1; // the starting object, the emitter
    purpleSmokeSystem1.minEmitBox = new BABYLON.Vector3(-0.5, 1, -0.5); // Starting all from
    purpleSmokeSystem1.maxEmitBox = new BABYLON.Vector3(0.5, 1, 0.5); // To...

    // Colors of all particles
    // purpleSmokeSystem1.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // purpleSmokeSystem1.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // purpleSmokeSystem1.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    purpleSmokeSystem1.color1 = new BABYLON.Color4(0.49, 0.03, 0.99);
    purpleSmokeSystem1.color2 = new BABYLON.Color4(0.22, 0.29, 0.99);
    purpleSmokeSystem1.colorDead = new BABYLON.Color4(0.14, 0.06, 0.06, 1);



    // Size of each particle (random between...
    purpleSmokeSystem1.minSize = 0.5;
    purpleSmokeSystem1.maxSize = 2;

    // Life time of each particle (random between...
    purpleSmokeSystem1.minLifeTime = 2;//0.2;
    purpleSmokeSystem1.maxLifeTime = 4;//0.4;

    // Emission rate
    purpleSmokeSystem1.emitRate = 50;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    // debugger;
    // purpleSmokeSystem1.blendMode = BABYLON.ParticleSystem.BLENDMODE_MULTIPLY;
    purpleSmokeSystem1.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    purpleSmokeSystem1.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    purpleSmokeSystem1.direction1 = new BABYLON.Vector3(0, 8, 0);
    purpleSmokeSystem1.direction2 = new BABYLON.Vector3(0, 8, 0);

    // Angular speed, in radians
    purpleSmokeSystem1.minAngularSpeed = 2;//0;
    purpleSmokeSystem1.maxAngularSpeed = Math.PI;

    // Speed
    purpleSmokeSystem1.minEmitPower = 1;//1;
    purpleSmokeSystem1.maxEmitPower = 3;//3;
    purpleSmokeSystem1.updateSpeed = 0.022;

    // Start the particle system
    // purpleSmokeSystem1.start();

    nx.purpleSmokeSystem1 = purpleSmokeSystem1;


    var purpleSteamFountain2 = BABYLON.Mesh.CreateBox("fountain", 2.0, nx.scene);
    purpleSteamFountain2.position = new BABYLON.Vector3(0,263,0);
    purpleSteamFountain2.visibility = 0;
 var purpleSteamSystem1 = new BABYLON.ParticleSystem("particles", 2000, nx.scene);

    //Texture of each particle
    purpleSteamSystem1.particleTexture = new BABYLON.Texture("textures/cloud.png", nx.scene);

    // Where the particles come from
    purpleSteamSystem1.emitter = purpleSteamFountain2; // the starting object, the emitter
    purpleSteamSystem1.minEmitBox = new BABYLON.Vector3(-0.5, 1, -0.5); // Starting all from
    purpleSteamSystem1.maxEmitBox = new BABYLON.Vector3(0.5, 1, 0.5); // To...

    // Colors of all particles
    // purpleSteamSystem1.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // purpleSteamSystem1.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    // purpleSteamSystem1.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    purpleSteamSystem1.color1 = new BABYLON.Color4(0.49, 0.03, 0.99);
    purpleSteamSystem1.color2 = new BABYLON.Color4(0.22, 0.29, 0.99);
    purpleSteamSystem1.colorDead = new BABYLON.Color4(0.14, 0.06, 0.06, 1);



    // Size of each particle (random between...
    purpleSteamSystem1.minSize = 0.5;
    purpleSteamSystem1.maxSize = 2;

    // Life time of each particle (random between...
    purpleSteamSystem1.minLifeTime = 2;//0.2;
    purpleSteamSystem1.maxLifeTime = 4;//0.4;

    // Emission rate
    purpleSteamSystem1.emitRate = 15;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    // debugger;
    // purpleSteamSystem1.blendMode = BABYLON.ParticleSystem.BLENDMODE_MULTIPLY;
    purpleSteamSystem1.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    purpleSteamSystem1.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    purpleSteamSystem1.direction1 = new BABYLON.Vector3(0, 8, 0);
    purpleSteamSystem1.direction2 = new BABYLON.Vector3(0, 8, 0);

    // Angular speed, in radians
    purpleSteamSystem1.minAngularSpeed = 2;//0;
    purpleSteamSystem1.maxAngularSpeed = Math.PI;

    // Speed
    purpleSteamSystem1.minEmitPower = 0.1;//1;
    purpleSteamSystem1.maxEmitPower = 0.33;//3;
    purpleSteamSystem1.updateSpeed = 0.022;

    // Start the particle system
    purpleSteamSystem1.start();

    nx.purpleSteamSystem1 = purpleSteamSystem1;

    //TODO clean up smoke systems



}

nx.anm.stopBoomANM = function(type){
	if(type==='fire'){
		nx.fireSystem1.stop();
		nx.fireSystem2.stop();
		nx.fireSystem1.dispose();
		nx.fireSystem2.dispose();
		nx.fireSystem1 = null;
		nx.fireSystem2 = null;
	} else if(type==='plasma'){

		nx.bluePlasmaSystem1.emitRate = 0
		nx.bluePlasmaSystem2.emitRate = 0
		nx.bluePlasmaSystem3.emitRate = 0
		setTimeout(function(){
			nx.bluePlasmaSystem1.stop();
			nx.bluePlasmaSystem2.stop();
			nx.bluePlasmaSystem3.stop();
			nx.bluePlasmaSystem1.dispose();
			nx.bluePlasmaSystem2.dispose();
			nx.bluePlasmaSystem3.dispose();
			nx.bluePlasmaSystem1 = null;
			nx.bluePlasmaSystem2 = null;
			nx.bluePlasmaSystem3 = null;
		},10000)
	} else if(type==='smoke'){
		nx.purpleSmokeSystem1.stop();
		nx.purpleSmokeSystem1.dispose();
		nx.purpleSmokeSystem1 = null;
	} else if(type==='purplesteam'){


	    $({ms:nx.purpleSteamSystem1.maxSize,er:nx.purpleSteamSystem1.emitRate})
	    .animate({ms:0.51,er:0}
	    ,{queue:false,duration:6000*nx.RUNTIME,easing:'linear',
		    step:function(now) { //CAM POS
		       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.boomSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
		       nx.purpleSteamSystem1.maxSize = this.ms;
				nx.purpleSteamSystem1.emitRate = this.er;
		    },complete:function(){ 

				nx.purpleSteamSystem1.stop();
				nx.purpleSteamSystem1.dispose();
				nx.purpleSteamSystem1 = null;

		    }
		});



	}
}

nx.blowOutZapBots = function( factory ){ //explosion factory

nx.kiloBotMesh1.stopShocking ();
nx.zapbotMega.stopShocking()
nx.zapbotTerra2.stopShocking()

// nx.kiloBotMesh1.position
// Vector3 {x: -18.503743511479904, y: 265.5764877735205, z: -16.072452649156094}
// nx.zapbotMega.position
// Vector3 {x: -20.519167819340684, y: 266.39019280377414, z: 19.320231975620192}
// nx.zapbotTerra2.position
// Vector3 {x: 26.014782132909403, y: 266.3956469174153, z: 18.889698881576113}

    //STOP other booms, if called before they are done-.
    if(nx.anm.firstBOOM1){nx.anm.firstBOOM1.stop()}
    if(nx.anm.firstBOOM2){nx.anm.firstBOOM2.stop()}
    if(nx.anm.firstBOOM3){nx.anm.firstBOOM3.stop()}
    if(nx.anm.secondBOOM1){nx.anm.secondBOOM1.stop()}
    if(nx.anm.secondBOOM2){nx.anm.secondBOOM2.stop()}
    if(nx.anm.secondBOOM3){nx.anm.secondBOOM3.stop()}
    // if(nx.anm.thirdBOOM){nx.anm.thirdBOOM.stop()}

	if(factory==='firstBOOM'){

// console.log('BOOM1')
nx.zapbotMega.position.copyFrom({x: -3, y: 266.39623515582986, z: 3.0012930340009305});
nx.zapbotTerra2.position.copyFrom({x: 2.6000000000000014, y: 264.53623515582984, z: 2.5012985377873633});
nx.kiloBotMesh1.position.copyFrom({x: -3, y: 264.73623515582983, z: -3.001035716022674});


	    $({cx:nx.kiloBotMesh1.position.x,cy:nx.kiloBotMesh1.position.y,cz:nx.kiloBotMesh1.position.z})
	    .animate({cx:-100,cy:265.5,cz:-100}
	    ,{queue:false,duration:4000*nx.RUNTIME,easing:'linear',
		    step:function(now) { //CAM POS
		       nx.anm.firstBOOM1 = $(this);
		       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.boomSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
		        nx.kiloBotMesh1.position.x = this.cx;
		        nx.kiloBotMesh1.position.y = this.cy;
		        nx.kiloBotMesh1.position.z = this.cz;
		    },complete:function(){ nx.kiloBotMesh1.position.copyFrom({x:0,y:0,z:0})}
		});
	    $({cx:nx.zapbotMega.position.x,cy:nx.zapbotMega.position.y,cz:nx.zapbotMega.position.z})
	    .animate({cx:-100,cy:266.36,cz:100}
	    ,{queue:false,duration:4000*nx.RUNTIME,easing:'linear',
		    step:function(now) { //CAM POS
		       nx.anm.firstBOOM2 = $(this);
		       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.boomSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
		        nx.zapbotMega.position.x = this.cx;
		        nx.zapbotMega.position.y = this.cy;
		        nx.zapbotMega.position.z = this.cz;
		    },complete:function(){}
		});
	    $({cx:nx.zapbotTerra2.position.x,cy:nx.zapbotTerra2.position.y,cz:nx.zapbotTerra2.position.z})
	    .animate({cx:100,cy:266,cz:100}
	    ,{queue:false,duration:4000*nx.RUNTIME,easing:'linear',
		    step:function(now) { //CAM POS
		       nx.anm.firstBOOM3 = $(this);
		       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.boomSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
		        nx.zapbotTerra2.position.x = this.cx;
		        nx.zapbotTerra2.position.y = this.cy;
		        nx.zapbotTerra2.position.z = this.cz;
		    },complete:function(){
	        	// console.log('ENDBOOM1')
		    }
		});
	} 
	else if(factory==='secondBOOM'){
// debugger;
// console.log('BOOM2')
		nx.zapbotMega.position.copyFrom({x:-100,y:266,z:100})
		nx.zapbotTerra2.position.copyFrom({x:60,y:266,z:60})
		nx.kiloBotMesh1.position.copyFrom({x:-100,y:266,z:-100})
	//     //ANM: shoot mega out into space-.
	    $({cx:nx.zapbotMega.position.x,cy:nx.zapbotMega.position.y,cz:nx.zapbotMega.position.z})
	    .animate({cx:-400,cy:266.36,cz:400}
	    ,{queue:false,duration:8000*nx.RUNTIME,easing:'linear',
	        step:function(now) { //CAM POS
		       // nx.anm.secondBOOM1 = $(this);
	           if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	            nx.zapbotMega.position.x = this.cx;
	            nx.zapbotMega.position.y = this.cy;
	            nx.zapbotMega.position.z = this.cz;
	        },complete:function(){
	        	// console.log('ENDBOOM2')
	            //  nx.zapbotMega.position.x = 0;
	            // nx.zapbotMega.position.y = 0;
	            // nx.zapbotMega.position.z = 0;           
	        }
	    });
	//     $
	    $({cx:nx.zapbotTerra2.position.x,cy:nx.zapbotTerra2.position.y,cz:nx.zapbotTerra2.position.z})
	    .animate({cx:400,cy:266.36,cz:400}
	    ,{queue:false,duration:8000*nx.RUNTIME,easing:'swing',
	        step:function(now) { //CAM POS
		       nx.anm.secondBOOM2 = $(this);
	           if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	            nx.zapbotTerra2.position.x = this.cx;
	            nx.zapbotTerra2.position.y = this.cy;
	            nx.zapbotTerra2.position.z = this.cz;
	        },complete:function(){
	        	// console.log('ENDBOOM2')
	            //  nx.zapbotMega.position.x = 0;
	            // nx.zapbotMega.position.y = 0;
	            // nx.zapbotMega.position.z = 0;           
	        }
	    });
	//     $
	    $({cx:nx.kiloBotMesh1.position.x,cy:nx.kiloBotMesh1.position.y,cz:nx.kiloBotMesh1.position.z})
	    .animate({cx:-400,cy:266.36,cz:-400}
	    ,{queue:false,duration:8000*nx.RUNTIME,easing:'swing',
	        step:function(now) { //CAM POS
		       nx.anm.secondBOOM3 = $(this);
	           if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	            nx.kiloBotMesh1.position.x = this.cx;
	            nx.kiloBotMesh1.position.y = this.cy;
	            nx.kiloBotMesh1.position.z = this.cz;
	        },complete:function(){
	        	console.log('ENDBOOM2')
	            //  nx.zapbotMega.position.x = 0;
	            // nx.zapbotMega.position.y = 0;
	            // nx.zapbotMega.position.z = 0;           
	        }
	    });
	//     $({cx:nx.zapbotTerra2.position.x,cy:nx.zapbotTerra2.position.y,cz:nx.zapbotTerra2.position.z})
	//     .animate({cx:140,cy:266.36,cz:140}
	//     ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	//         step:function(now) { //CAM POS
	// 	       nx.anm.secondBOOM2 = $(this);
	//            if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	//             nx.zapbotTerra2.position.x = this.cx;
	//             nx.zapbotTerra2.position.y = this.cy;
	//             nx.zapbotTerra2.position.z = this.cz;
	//         },complete:function(){
	//              nx.zapbotTerra2.position.x = 0;
	//             nx.zapbotTerra2.position.y = 0;
	//             nx.zapbotTerra2.position.z = 0;           
	//         }
	//     });


       
	} 
	else if(factory==='thirdBOOM') {
		// debugger;
console.log('BOOM3')
	// 	nx.zapbotMega.position.copyFrom({x:-40,y:266,z:40});
	//     $({cx:nx.zapbotMega.position.x,cy:nx.zapbotMega.position.y,cz:nx.zapbotMega.position.z})
	//     .animate({cx:-240,cy:260,cz:240}
	//     ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	//         step:function(now) { //CAM POS
	// 	       nx.anm.secondBOOM1 = $(this);
	//            if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	//             nx.zapbotMega.position.x = this.cx;
	//             nx.zapbotMega.position.y = this.cy;
	//             nx.zapbotMega.position.z = this.cz;
	//         },complete:function(){
	//             //  nx.zapbotMega.position.x = 0;
	//             // nx.zapbotMega.position.y = 0;
	//             // nx.zapbotMega.position.z = 0;           
	//         }
	//     });
	}






// return;



// debugger;
// 	nx.zapBotPath1 = [{"pos":{"x":10.22,"y":262.5,"z":8.88},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":11.27,"y":262.5,"z":9.8},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":12.33,"y":262.5,"z":10.72},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":13.38,"y":262.5,"z":11.64},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":14.44,"y":262.5,"z":12.56},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":15.49,"y":262.5,"z":13.48},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":16.55,"y":262.5,"z":14.4},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":17.6,"y":262.5,"z":15.32},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":18.66,"y":262.5,"z":16.24},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":19.71,"y":262.5,"z":17.16},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":20.77,"y":262.5,"z":18.08},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":21.82,"y":262.5,"z":19},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":22.88,"y":262.5,"z":19.92},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":23.93,"y":262.5,"z":20.84},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":24.99,"y":262.5,"z":21.76},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":26.04,"y":262.5,"z":22.68},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":27.1,"y":262.5,"z":23.6},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":28.15,"y":262.5,"z":24.52},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":29.21,"y":262.5,"z":25.44},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":30.26,"y":263.3,"z":26.36},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":31.32,"y":264.7,"z":27.28},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":32.37,"y":265.9,"z":28.2},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":33.43,"y":266.7,"z":29.12},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":34.48,"y":267.1,"z":30.04},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":35.54,"y":267.5,"z":30.96},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":36.59,"y":267.89,"z":31.88},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":37.65,"y":268.29,"z":32.8},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":38.7,"y":268.69,"z":33.72},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":39.76,"y":269.09,"z":34.64},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":40.82,"y":269.49,"z":35.56},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":41.87,"y":269.89,"z":36.48},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":42.93,"y":268.89,"z":37.4},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":43.98,"y":267.89,"z":38.32},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":45.04,"y":266.89,"z":39.24},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":46.09,"y":265.89,"z":40.16},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":47.15,"y":264.89,"z":41.08},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":48.2,"y":263.89,"z":42},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":49.26,"y":262.89,"z":42.92},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":50.31,"y":261.89,"z":43.84},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":51.37,"y":260.89,"z":44.76},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":52.42,"y":259.89,"z":45.68},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":53.48,"y":258.89,"z":46.6},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":54.53,"y":257.89,"z":47.52},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":55.59,"y":256.89,"z":48.44},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":56.64,"y":255.89,"z":49.36},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":57.7,"y":254.89,"z":50.28},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":58.75,"y":253.89,"z":51.2},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":59.81,"y":252.89,"z":52.12},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":60.86,"y":251.89,"z":53.04},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":61.92,"y":250.89,"z":53.96},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":62.97,"y":249.89,"z":54.88},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":64.03,"y":248.89,"z":55.8},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":65.08,"y":247.89,"z":56.72},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":66.14,"y":246.89,"z":57.64},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":67.19,"y":245.89,"z":58.56},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":68.25,"y":244.89,"z":59.48},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":69.3,"y":243.89,"z":60.4},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":70.36,"y":242.89,"z":61.32},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":71.41,"y":241.89,"z":62.24},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":72.47,"y":240.89,"z":63.16},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":73.52,"y":239.89,"z":64.08},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":74.58,"y":238.89,"z":65},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":75.63,"y":237.89,"z":65.92},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":76.69,"y":236.89,"z":66.84},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":77.74,"y":235.89,"z":67.76},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":78.8,"y":234.89,"z":68.69},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":79.86,"y":233.89,"z":69.61},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":80.91,"y":232.89,"z":70.53},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":81.97,"y":231.89,"z":71.45},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":83.02,"y":230.89,"z":72.37},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":84.08,"y":229.89,"z":73.29},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":85.13,"y":228.89,"z":74.21},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":86.19,"y":227.89,"z":75.13},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":87.24,"y":226.89,"z":76.05},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":88.3,"y":225.89,"z":76.97},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":89.35,"y":224.89,"z":77.89},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":90.41,"y":223.89,"z":78.81},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":91.46,"y":222.89,"z":79.73},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":92.52,"y":221.89,"z":80.65},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":93.57,"y":220.89,"z":81.57},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":94.63,"y":219.89,"z":82.49},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":95.68,"y":218.89,"z":83.41},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":96.74,"y":217.89,"z":84.33},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":97.79,"y":216.89,"z":85.25},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":98.85,"y":215.89,"z":86.17},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":99.9,"y":214.89,"z":87.09},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":100.96,"y":213.89,"z":88.01},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":102.01,"y":212.89,"z":88.93},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":103.07,"y":211.89,"z":89.85},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":104.12,"y":210.89,"z":90.77},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":105.18,"y":209.89,"z":91.69},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":106.23,"y":208.89,"z":92.61},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":107.29,"y":207.89,"z":93.53},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":108.34,"y":206.89,"z":94.45},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":109.4,"y":205.89,"z":95.37},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":110.45,"y":204.89,"z":96.29},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":111.51,"y":203.89,"z":97.21},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":112.56,"y":202.89,"z":98.13},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":113.62,"y":201.89,"z":99.05},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":114.67,"y":200.89,"z":99.97},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":115.73,"y":199.89,"z":100.89},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":116.79,"y":198.89,"z":101.81},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":117.84,"y":197.89,"z":102.73},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":118.9,"y":196.89,"z":103.65},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":119.95,"y":195.89,"z":104.57},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":121.01,"y":194.89,"z":105.49},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":122.06,"y":193.89,"z":106.41},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":123.12,"y":192.89,"z":107.33},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":124.17,"y":191.89,"z":108.25},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":125.23,"y":190.89,"z":109.17},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":126.28,"y":189.89,"z":110.09},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":127.34,"y":188.89,"z":111.01},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":128.39,"y":187.89,"z":111.93},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":129.45,"y":186.89,"z":112.85},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":130.5,"y":185.89,"z":113.77},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":131.56,"y":184.89,"z":114.69},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":132.61,"y":183.89,"z":115.61},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":133.67,"y":182.89,"z":116.53},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":134.72,"y":181.89,"z":117.45},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":135.78,"y":180.89,"z":118.37},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":136.83,"y":179.89,"z":119.29},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":137.89,"y":178.89,"z":120.21},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":138.94,"y":177.89,"z":121.13},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":140,"y":176.89,"z":122.05},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":141.05,"y":175.89,"z":122.97},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":142.11,"y":174.89,"z":123.89},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":143.16,"y":173.89,"z":124.81},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":144.22,"y":172.89,"z":125.73},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":145.27,"y":171.89,"z":126.65},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":146.33,"y":170.89,"z":127.57},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":147.38,"y":169.89,"z":128.5},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":148.44,"y":168.89,"z":129.42},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":149.49,"y":167.89,"z":130.34},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":150.55,"y":166.89,"z":131.26},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":151.6,"y":165.89,"z":132.18},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":152.66,"y":164.89,"z":133.1},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":153.71,"y":163.89,"z":134.02},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":154.77,"y":162.89,"z":134.94},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":155.83,"y":161.89,"z":135.86},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":156.88,"y":160.89,"z":136.78},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":157.94,"y":159.89,"z":137.7},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":158.99,"y":158.89,"z":138.62},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":160.05,"y":157.89,"z":139.54},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":161.1,"y":156.89,"z":140.46},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":162.16,"y":155.89,"z":141.38},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":163.21,"y":154.89,"z":142.3},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":164.27,"y":153.89,"z":143.22},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":165.32,"y":152.89,"z":144.14},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":166.38,"y":151.89,"z":145.06},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":167.43,"y":150.89,"z":145.98},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":168.49,"y":149.89,"z":146.9},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":169.54,"y":148.89,"z":147.82},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":170.6,"y":147.89,"z":148.74},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":171.65,"y":146.89,"z":149.66},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":172.71,"y":145.89,"z":150.58},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":173.76,"y":144.89,"z":151.5},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":174.82,"y":143.89,"z":152.42},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":175.87,"y":142.89,"z":153.34},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":176.93,"y":141.89,"z":154.26},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":177.98,"y":140.89,"z":155.18},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":179.04,"y":139.89,"z":156.1},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":180.09,"y":138.89,"z":157.02},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":181.15,"y":137.89,"z":157.94},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":182.2,"y":136.89,"z":158.86},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":183.26,"y":135.89,"z":159.78},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":184.31,"y":134.89,"z":160.7},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":185.37,"y":133.89,"z":161.62},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":186.42,"y":132.89,"z":162.54},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":187.48,"y":131.89,"z":163.46},"rot":{"x":0,"y":-2.29,"z":0}},{"pos":{"x":188.53,"y":130.89,"z":164.38},"rot":{"x":0,"y":-2.29,"z":0}}];



// 	// nx.zapbotMega.startShocking()
// 	// nx.zapbotTerra2.startShocking()



// 	var curPOS;

// 	var blastIdx1=0;
// 	nx.scene.registerBeforeRender(function blastZapBot1LOOP() {
// 		//TODO: test removal of ALL LOOPS by adding. and making sure it goes away when it should.
// 		console.log('LOOPZ','blastZap1')
// 	//NEW-POSROT-ANM-FORMAT- //TODO add in the ROTIdx option-.nx.editz.clearROTs(aPath).?
// 	// if(nx.climaxSeqIdx[NUM].runAnm) { nx.climaxSeqIdx[NUM].runAnm = 0; //one-time-trigger;
// 	// for(var i=0;i<nx.zapBotPath1;i++){
// 		curPOS = nx.zapBotPath1[blastIdx1++].pos;
// 	    $({cx:nx.kiloBotMesh1.position.x,cy:nx.kiloBotMesh1.position.y,cz:nx.kiloBotMesh1.position.z})
// 	    .animate({cx:curPOS.x,cy:curPOS.y,cz:curPOS.z}
// 	    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
// 		    step:function(now) { //CAM POS
// 		       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.sunsetSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
// 		        nx.kiloBotMesh1.position.x = this.cx;
// 		        nx.kiloBotMesh1.position.y = this.cy;
// 		        nx.kiloBotMesh1.position.z = this.cz;
// 		    },complete:function(){
// 		    	if(blastIdx1>=nx.zapBotPath1.length){
//         			nx.scene.unregisterBeforeRender(blastZapBot1LOOP); //self-removal-.
// 		    	}
// 		    }
// 		});
// 	})


	//     $({curPOSx:nx.climaxSeqIdx[NUM].curPOS.pos.x,curPOSy:nx.climaxSeqIdx[NUM].curPOS.pos.y,curPOSz:nx.climaxSeqIdx[NUM].curPOS.pos.z}).
	//     animate({curPOSx:nx.climaxSeqIdx[NUM].nxtPOS.pos.x,curPOSy:nx.climaxSeqIdx[NUM].nxtPOS.pos.y,curPOSz:nx.climaxSeqIdx[NUM].nxtPOS.pos.z},{queue:false,duration:nx.climaxSeqIdx[NUM].anmSpeed,easing:'linear',
	//     step: function(now) { //ANM:-****************************************************ORBY-FROM-POINT-TO-POINT-ON-PATH-.
	//         if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); return;}//CINEMA-STOP-.
	//         nx.orbyMesh.position = new BABYLON.Vector3(this.curPOSx,this.curPOSy,this.curPOSz)
	//         nx.anmz.orby.rig.originBox.position.copyFrom(nx.orbyMesh.position); 
	//         //EDITABLE-ROTATIONS-.
	//         if(nx.climaxSeqIdx[NUM].curPOS.rot.w!=undefined){ //QUATERNION-ANM-ROT-.
	//             nx.orbyMesh.rotationQuaternion = new BABYLON.Quaternion(nx.climaxSeqIdx[NUM].curPOS.rot.x,nx.climaxSeqIdx[NUM].curPOS.rot.y,nx.climaxSeqIdx[NUM].curPOS.rot.z,nx.climaxSeqIdx[NUM].curPOS.rot.w);
	//             nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotationQuaternion.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
	//         }else{ //EULER-ANM-ROT-.
	//             nx.orbyMesh.rotationQuaternion = null;
	//             nx.orbyMesh.rotation = new BABYLON.Vector3(nx.climaxSeqIdx[NUM].curPOS.rot.x,nx.climaxSeqIdx[NUM].curPOS.rot.y,nx.climaxSeqIdx[NUM].curPOS.rot.z);
	//             nx.anmz.orby.rig.originBox.rotation.y = nx.orbyMesh.rotation.y; //fix rotation jank-. TODO may need 'rotationQuaternion'
	//         }
	//     }, complete:function(){ 
	//         nx.climaxSeqIdx[NUM].initAnm = 0; 
	//         } //NEXT-SUB-SEQUENCE-. 
	//     });
	// // }
	// }


}

//TODO rename nx.anm to nx.ANM-.
nx.anm.runTipStep = function(){

	//ANMETHODOLOGY-.
	//ANM-IMPOSTOR-LOAD-ACTIVATION-.
	// nx.anm.waveRiderTip.aMesh = {};
	// nx.anm.waveRiderTip.aSkel = {};
	// nx.anm.waveRiderTip = {}; //ANM-WRAPPER: to NameSpace: load() and run(), mesh and skeleton.
	// nx.anm.waveRiderTip.load = function(){ nx.orby.loadSpaceWaveRider() }();

	// nx.anm.tipStep = {};
	// nx.anm.tipStep.load = function(){ nx.orby.loadOrbyStep(); }();
    // nx.orby.loadOrbyStep(function(){
	nx.anm.tipStep.run = function(){
        nx.anm.tipStep.stepBoard.position.copyFrom({x:0,y:260.444,z:0}) //TIP BOARD-
        nx.anm.tipStep.stepBoard.rotationQuaternion = null;
        nx.anm.tipStep.stepBoard.rotation.y = -2.222;
        nx.scene.beginAnimation(nx.anm.tipStep.aSkel[0], 0, 70, false, 1.0);  //orby tip down board
        // setTimeout(function(){
        //     nx.scene.activeCamera.position.copyFrom({x: 13.937411162620812, y: 266.4591634078494, z: -16.59508647967813})
        // },3000)
	}();
    // });





/**********************************************/

	nx.anm.waveRiderTip.run = function(){
        nx.anm.waveRiderTip.aMesh.position.copyFrom({x: 0.8, y: 261.36, z: -1.5})
        nx.anm.waveRiderTip.aMesh.rotation.copyFrom({x:0,y:-2.111,z:-1.6});
        nx.anm.waveRiderTip.aMesh.setPivotPoint(new BABYLON.Vector3(0.8, 0, 0)); 
        setTimeout(function(){
            $({rz:nx.anm.waveRiderTip.aMesh.rotation.z})//ROTATE WAVERIDER-.
            .animate({rz:0
            },{queue:false,duration:1000*nx.RUNTIME,easing:'linear',
            step: function(now) {
                if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
                nx.anm.waveRiderTip.aMesh.rotation.z = this.rz;
            },complete:function(){
                nx.anm.waveRiderTip.aMesh.rotation.z = 0
            }});
        },1500)
	}();

/**********************************************/
    //TODO refactor anm in script-.
    // nx.orby.loadOrbyStep(function(){
    //     nx.orbyMeshStep.position.copyFrom({x:0,y:260.444,z:0}) //TIP BOARD-
    //     nx.orbyMeshStep.rotationQuaternion = null;
    //     nx.orbyMeshStep.rotation.y = -2.222;
    //     nx.scene.beginAnimation(nx.orbySkeletonStep[0], 0, 70, false, 1.0);  //orby tip down board
    //     // setTimeout(function(){
    //     //     nx.scene.activeCamera.position.copyFrom({x: 13.937411162620812, y: 266.4591634078494, z: -16.59508647967813})
    //     // },3000)
    // });

// return;

//     nx.orby.loadSpaceWaveRider(function(){
//         nx.orbySpaceWaveRider1.position.copyFrom({x: 0.8, y: 261.36, z: -1.5})
//         nx.orbySpaceWaveRider1.rotation.copyFrom({x:0,y:-2.111,z:-1.6});
//         nx.orbySpaceWaveRider1.setPivotPoint(new BABYLON.Vector3(0.8, 0, 0)); 
//         setTimeout(function(){
//             $({rz:nx.orbySpaceWaveRider1.rotation.z})//ROTATE WAVERIDER-.
//             .animate({rz:0
//             },{queue:false,duration:1000*nx.RUNTIME,easing:'linear',
//             step: function(now) {
//                 if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[1]={on:1}; return;}//CINEMA-STOP-.
//                 nx.orbySpaceWaveRider1.rotation.z = this.rz;
//             },complete:function(){
//                 nx.orbySpaceWaveRider1.rotation.z = 0
//                 setTimeout(function(){
//                     nx.orbySpaceWaveRider1.position.copyFrom({x: 0.2, y: 260.4, z: -0.6});//step pos
//                 },2000)
//             }});
//         },1500)
//     });





} //end fn


nx.anm.darbotTurningAway = function(){
	// nx.initDarkBotHover();

	nx.scene.beginAnimation(nx.darkBotSkeleton[0], 90, 90, false, 1); //left foot down
	// nx.scene.beginAnimation(nx.darkBotSkeleton[0], 80, 80, false, 1); //right foot down

	
	// var darkToesDown = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 60, 65, false, 0.5);
    $({ry:nx.darkBot.rotation.y,py:nx.darkBot.position.y})
    .animate({ry:-0.66,py:261.5}
    ,{queue:false,duration:4000*nx.RUNTIME,easing:'swing',
	    step:function(now) { 
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.darkBot.position.y = this.py;
	        nx.darkBot.rotation.y = this.ry;
	    },complete:function(){
	        // nx.darkBot.position.y = 262;
	        // debugger;
			nx.initDarkBotHover();
			nx.dBot.stopHover = 0;
			nx.darkBot.hoverAmount = 0.00111;
			var darkToesDown = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 65, 65, false, 1);  //both toes down 	

	        $({cr:0,cb:1}).animate({cr:1,cb:0},{queue:false,duration:4444*nx.RUNTIME,easing:'swing',
	            step:function(now) { //EYE COLOR
	               if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	                nx.darkBot.botEyeColor1.emissiveColor = new BABYLON.Color3(this.cr, 0, this.cb);
	            },complete:function(){ }
	        });




	    }
	});



} //end fn

nx.anm.darbotTurningBack = function(){

	nx.darkBot.hoverAmount = 0.00222;
    $({ry:nx.darkBot.rotation.y})
    .animate({ry:1.11}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { 
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.darkBot.rotation.y = this.ry;
	    },complete:function(){

	    }
	});

	// var headTurn = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 125, 131, false, 0.25); //DARBOT looking back
	var headTurn = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 110, 125, false, 0.25); //DARBOT looking back
	headTurn.onAnimationEnd=function(){

		nx.scene.activeCamera.setTarget(nx.BV32({x:7.431, y: 264.12, z:-9.92})) //CAMZOOM: 
	    $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
	    .animate({cx:11.459,cy:264.333,cz:-14.83}
	    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
		    step:function(now) { //CAM POS
		       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
		        nx.scene.activeCamera.position.x = this.cx;
		        nx.scene.activeCamera.position.y = this.cy;
		        nx.scene.activeCamera.position.z = this.cz;
				// nx.scene.activeCamera.setTarget(nx.BV32({x: 23.5, y: 265.6, z: -28.6})) //CAMTGT: 
		    },complete:function(){}
		});

	}


// modKeyCtrlz3.js:26 38
// nx.scene.activeCamera.position
// Vector3 {x: 7.431442362715731, y: 264.126075321536, z: -9.921719847308072}



} //end fn



nx.anm.darBOTZoomCAM= function(){


	nx.scene.activeCamera.position.copyFrom({x: 52.24668200228331, y: 239.03092808060438, z: -53.30305626175587})
	// nx.scene.activeCamera.position.copyFrom({x: 28.04, y: 261.36, z: -28.36}) //LOOK UP AT DARBOT
	nx.scene.activeCamera.setTarget(nx.BV32({x: 26.37003155613175, y: 262.9172267029071, z: -26.639292811740987})) //CAMTGT: 
    $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
    .animate({cx:28.04,cy:261.36,cz:-28.36}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { //CAM POS
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.scene.activeCamera.position.x = this.cx;
	        nx.scene.activeCamera.position.y = this.cy;
	        nx.scene.activeCamera.position.z = this.cz;
			nx.scene.activeCamera.setTarget(nx.BV32({x: 26.37003155613175, y: 262.9172267029071, z: -26.639292811740987})) //CAMTGT: 
	    },complete:function(){}
	});

//  {x: 28.04895836818321, y: 261.36649667721736, z: -28.369230020063586}
//     nx.scene.activeCamera.position.copyFrom({x: 52.24668200228331, y: 239.03092808060438, z: -53.30305626175587})
// 4modKeyCtrlz3.js:26 38
// modKeyCtrlz3.js:26 40
// modKeyCtrlz3.js:26 38
// 2modKeyCtrlz3.js:26 40
// 2modKeyCtrlz3.js:26 38
// modKeyCtrlz3.js:26 40
// nx.scene.activeCamera.position
// Vector3 {x: 30.892532080654412, y: 256.79697448688813, z: -31.387625801579212}
// modKeyCtrlz3.js:26 38
// nx.scene.activeCamera.position
// Vector3 {x: 27.35589976335501, y: 259.7388012691049, z: -27.757128774167807}

} //end fn
/*******************************-TEMPLATE-ATOMIC-ANM-****************************/
// nx.anm.darkBot.mezmerize = function(){
//     $({rx:nx.darkBot.rotation.x, ry:nx.darkBot.rotation.y,rz:nx.darkBot.rotation.z})
//     .animate({rx:-0.88,ry:-1.75,rz:0.4}
//     ,{queue:false,duration:1000*nx.RUNTIME,easing:'swing',
// 	    step:function(now) { 
// 	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
// 	        nx.darkBot.rotation.x = this.rotx;
// 	        nx.darkBot.rotation.y = this.roty;
// 	        nx.darkBot.rotation.z = this.rotz;
// 	    },complete:function(){}
// 	});
// }


// });



nx.anm.seriesTitleClear = function(){
	$('#txtMSG1').hide(3000);
	$('#txtMSG2').hide(3000);
	$('#txtMSG3').hide(3000);
	$('#txtMSG4').hide(3000);
	$('#goBtnFrame1').hide(3000);
	nx.anm.seriesTitleSmall();
	nx.anm.seriesSuperTitleSmall();
}

nx.anm.seriesTitleSmall = function(){
	// return;
// debugger;
	var currTXTSize = parseInt(nx.ui.seriesTitleTxt.css('font-size'))/16; //convert-to-ems-.
	var currTOPPad = '0.399998'; // parseInt(nx.ui.seriesTitleTxt.css('padding-top'))/16; //convert-to-ems-.
    $({size:currTXTSize,pad:currTOPPad}) //SIZE-TITLE-TXT-down-. with top padding-.
    .animate({size:1.888,pad:1}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
        step:function(now) { //CAM POS
           if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
           nx.ui.seriesTitleTxt.css({'font-size':this.size+'em','padding-top':this.pad+'em'})
        },complete:function(){
    }});
}

nx.anm.seriesSuperTitleSmall = function(){
	var currTXTSize = parseInt(nx.ui.seriesSuperTitleTxt.css('font-size'))/16; //convert-to-ems-.
	var currTOPPad = parseInt(nx.ui.seriesSuperTitleTxt.css('padding-top'))/16; //convert-to-ems-.
    $({size:currTXTSize,pad:currTOPPad}) //SIZE-TITLE-TXT-down-. with top padding-.
    .animate({size:0.777,pad:0.7}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
        step:function(now) { //CAM POS
           if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
           nx.ui.seriesSuperTitleTxt.css({'font-size':this.size+'em','padding-top':this.pad+'em'})
        },complete:function(){
    }});
}

nx.anm.seriesSuperTitleBig = function(tgtSize,tgtPad){
	var currTXTSize = parseInt(nx.ui.seriesSuperTitleTxt.css('font-size'))/16; //convert-to-ems-.
	var currTOPPad = parseInt(nx.ui.seriesSuperTitleTxt.css('padding-top'))/16; //convert-to-ems-.
    $({size:currTXTSize,pad:currTOPPad}) //SIZE-TITLE-TXT-down-. with top padding-.
    .animate({size:tgtSize,pad:tgtPad}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
        step:function(now) { //CAM POS
           if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
           nx.ui.seriesSuperTitleTxt.css({'font-size':this.size+'em','padding-top':this.pad+'em'})
        },complete:function(){
    }});
}


nx.anm.seriesTitleBig = function(tgtSize,tgtPad){
    $({size:1.6,pad:0}) //SIZE-TITLE-TXT-UP-.
    .animate({size:tgtSize,pad:tgtPad}
    // .animate({size:mainTitleCSS['font-size'],pad:mainTitleCSS['padding-top']}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
        step:function(now) { //CAM POS
           if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
           nx.ui.seriesTitleTxt.css({'font-size':this.size+'em', 'padding-top':this.pad+'em'})
        },complete:function(){
    }});
	
}

nx.anm.runTitleScreenANM = function(endFn){



	
    // nx.ui.flashCanvasMSG({txt:"ORBY~ORBOT!",persist:0, txtType:'hero',txtIcon:'orby',dur:4000,
    // txtEnd:function(){

        //CAM - good RESPONSIVE Portrait POS
        // nx.scene.activeCamera.position
        // Vector3 {x: -2395.6405343105043, y: 3667.6757881890944, z: -1823.4084631958392}

//camzoom
//Acozmospace!
//Introducing OrbyOrBot in
//his 1st Space~Quest.
//Zapbotz on AlphaMoon?!?
//Will Orby find Zeon?




        //10-VIEW: RESPONSIVE PARTITIONING~SYSTEM SETTINGS-. anmethodology-.
        //------------------------------------------TITLE-SIZER-.
        nx.ui.winW = $(window).width(); //dynamic editing-.
        nx.ui.winH = $(window).height(); 
		nx.anm.seriesTitleClear();
		nx.ui.txtMSG2.show(1000)
		nx.ui.txtMSG3.show(1000)

		//-------------------------------dynamic editing-.
        var prtNum = 0;
        var mainTitleCSS = {}; //SET SERIES TITLE SIZE AND TOP PADDING-.
        if(nx.ui.screenOrientation==='portrait'){ //------------------------------------------------------PORTRAIT
            if(nx.ui.winW > 800){      prtNum=1; mainTitleCSS={'font-size':'6','padding-top':'0.4'}; 
            }else if(nx.ui.winW > 550){prtNum=2; mainTitleCSS={'font-size':'5','padding-top':'0.6'}; 
            }else if(nx.ui.winW > 350){prtNum=3; mainTitleCSS={'font-size':'2.8','padding-top':'0.8'};  
            }else /*winW < 350*/{      prtNum=4; mainTitleCSS={'font-size':'2.444','padding-top':'2.2'};  }
        } else { //landscape---------------------------------------------------------------------------LANDSCAPE-.
            if(nx.ui.winW > 800){
                if(nx.ui.winH > 550) { prtNum=5; mainTitleCSS={'font-size':'6','padding-top':'0.4'};     //LAPTOP
                }else/*phonesmall*/ {  prtNum=6; mainTitleCSS={'font-size':'6','padding-top':'0.3'};   } //PHONE-TALL-.
            }else if(nx.ui.winW > 550){prtNum=7; mainTitleCSS={'font-size':'5','padding-top':'0.333'};  }
        }
        console.log('WIN:',nx.ui.winW,nx.ui.winH,'SIZED',prtNum,mainTitleCSS)
    	nx.anm.seriesTitleBig(mainTitleCSS['font-size'],mainTitleCSS['padding-top']);
    	nx.anm.seriesSuperTitleBig(1,1);

        // $({size:1.6,pad:0}) //SIZE-TITLE-TXT-UP-.
        // .animate({size:mainTitleCSS['font-size'],pad:mainTitleCSS['padding-top']}
        // ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
        //     step:function(now) { //CAM POS
        //        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
        //        nx.ui.seriesTitleTxt.css({'font-size':this.size+'em', 'padding-top':this.pad+'em'})
        //     },complete:function(){



            	// setTimeout(function(){ //SIZE-TXT-DOWN-.
		           //  $({size:mainTitleCSS['font-size'],pad:mainTitleCSS['padding-top']})
		           //  .animate({size:1.6,pad:0}
		           //  ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
		           //      step:function(now) { //CAM POS
		           //         if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
		           //         nx.seriesTitleTxt.css({'font-size':this.size+'em', 'padding-top':this.pad+'em'})
		           //      },complete:function(){
		           //          nx.seriesTitleTxt.css({'font-size':'1.6em','padding-top':0});
		           //          nx.ui.flashCanvasMSG({txt:"ZAPBOTZ on ALPHAMOON?!?",dur:3000,
		           //          txtEnd:function(){
		           //              nx.spaceSeqIdx[4] = {on:1}
		           //          }});      //on orby freeze
		           //      }
		           //  });

            	// },3000)

        //     }
        // });






        //ZOOM-CAM: orby face-.
        $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
        .animate({cx:-2395.64,cy:3667.67,cz:-1823.408}
        ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
            step:function(now) { //CAM POS
               if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
                nx.scene.activeCamera.position.x = this.cx;
                nx.scene.activeCamera.position.y = this.cy;
                nx.scene.activeCamera.position.z = this.cz;
                // nx.scene.activeCamera.setTarget(nx.BV32({x: 26.37003155613175, y: 262.9172267029071, z: -26.639292811740987})) //CAMTGT: 
            },complete:function(){
                // nx.ui.flashCanvasMSG({txt:"In his FIRST SPACE~QUEST!",dur:3000,
                // txtEnd:function(){

                nx.anm.runTitleScreenMSGs(endFn);

// debugger;



                // }});      //end TXT 1st space quest
            }
        });  //end anm zoom cam

    // }});  //end TXT - orby orbot.


} //end title screen anm

nx.anm.runTitleScreenMSGs = function(endFn){
	



    //10-VIEW: RESPONSIVE PARTITIONING~SYSTEM SETTINGS-. anmethodology-.
    //VISPR-SYSTEM visual partition grids. anmethodology-.
    //Select 10 View dimensions, you will not use all of them.
    //Start by defining minimum size screen support dimensions 350 x 350
    //Then work your way from IN size OUT. Small to Big. Mobile to Desktop.
    //BUT, also start with PORTRAIT then do LANDSCAPE view dimensions.
    //Styling at the SMALLEST of each EXPANDABLE PARTITION. (minimum view bounds)
    //Use the PR-GRID itself as a guide for stepping through every DIMENSION.
    //SOME DIMENSIONS are not necessary (eg. very long and thin)
    //SQUARE views default to LANDSCAPE-.
    //AUDIT CODE at bottom to see exactly what rendered where.
    //Dynamic Factory Function to test all views from the console. 
    //TEST by running each PR Dimension and making adjustments in code.
    //First TEST minimum-view-bounds, then at maximum-view-bounds.
    //Done-.
    //------------------------------------------TITLE-SIZER-.
    nx.ui.winW = $(window).width(); //dynamic editing-.
    nx.ui.winH = $(window).height(); 
    var prtNum = 0;
    var tgtPOS = {}; //SET MST TXT POSITIONS 
    if(nx.ui.screenOrientation==='portrait'){ //------------------------------------------------------PORTRAIT
        if(nx.ui.winW > 800){      prtNum=1; tgtPOS={msg1h:'39',msg1w:'11',msg2h:'13',msg2w:'22',msg3h:'20',msg3w:'8',msg4h:'9',msg4w:'8'}; 
        }else if(nx.ui.winW > 550){prtNum=2; tgtPOS={msg1h:'39',msg1w:'6',msg2h:'13',msg2w:'11',msg3h:'25',msg3w:'-5',msg4h:'9',msg4w:'8'}; 
        }else if(nx.ui.winW > 350){prtNum=3; tgtPOS={msg1h:'37',msg1w:'-2',msg2h:'13',msg2w:'-3',msg3h:'29',msg3w:'-14',msg4h:'8',msg4w:'1'};  
        }else /*winW < 350*/{      prtNum=4; tgtPOS={msg1h:'37',msg1w:'-2',msg2h:'13',msg2w:'-3',msg3h:'28',msg3w:'-14',msg4h:'8',msg4w:'1'};  }
    } else { //landscape---------------------------------------------------------------------------LANDSCAPE-.
        if(nx.ui.winW > 1400){ prtNum=9; tgtPOS={msg1h:'39',msg1w:'28',msg2h:'10',msg2w:'31',msg3h:'21',msg3w:'23',msg4h:'9',msg4w:'29'}; }    //LAPTOP
        else if(nx.ui.winW > 1000){ prtNum=8; tgtPOS={msg1h:'39',msg1w:'21',msg2h:'10',msg2w:'29',msg3h:'21',msg3w:'18',msg4h:'9',msg4w:'25'};  }   //LAPTOP
        else if(nx.ui.winW > 800){
            if(nx.ui.winH > 550) { prtNum=5; tgtPOS={msg1h:'39',msg1w:'14',msg2h:'10',msg2w:'21',msg3h:'21',msg3w:'8',msg4h:'9',msg4w:'19'};  }   //LAPTOP
            else/*phonesmall*/ {  prtNum=6; tgtPOS={msg1h:'36',msg1w:'10',msg2h:'13',msg2w:'23',msg3h:'21',msg3w:'8',msg4h:'9',msg4w:'19'};   } //PHONE-TALL-.
        }else /*if(nx.ui.winW > 550)*/{prtNum=7; tgtPOS={msg1h:'36',msg1w:'8',msg2h:'11',msg2w:'11',msg3h:'27',msg3w:'-9',msg4h:'9',msg4w:'6'};  }
    }
    console.log('MSG:',nx.ui.winW,nx.ui.winH,'SIZED',prtNum,tgtPOS)
	// nx.anm.seriesTitleBig(tgtPOS['font-size'],tgtPOS['padding-top']);
	// nx.anm.seriesSuperTitleBig(1,1);



	nx.ui.txtMSG1.css({"left":tgtPOS.msg1w+'%',"bottom":tgtPOS.msg1h+'%'}).show(3000,function(){
		setTimeout(function(){
			
		    // $({lftSlide:-333}).animate({lftSlide:13} //show MSG 2
		    nx.ui.txtMSG2.css("bottom",tgtPOS.msg2h+'%');
		    $({lftSlide:-333}).animate({lftSlide:tgtPOS.msg2w} //show MSG 2
		    ,{queue:false,duration:2000*nx.RUNTIME,easing:'swing',
		        step:function(now) { if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
		        	nx.ui.txtMSG2.css("left",this.lftSlide+'%');
		        },complete:function(){
			// nx.ui.txtMSG2.show(3000,function(){
				setTimeout(function(){
					// nx.ui.txtMSG3.show(3000,function(){
				    // $({rgtSlide:-444}).animate({rgtSlide:2} //show MSG 3
		    		nx.ui.txtMSG3.css("bottom",tgtPOS.msg3h+'%');
				    $({rgtSlide:-444}).animate({rgtSlide:tgtPOS.msg3w} //show MSG 3
				    ,{queue:false,duration:2000*nx.RUNTIME,easing:'swing',
				        step:function(now) { if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
				        	nx.ui.txtMSG3.css("right",this.rgtSlide+'%');
				        },complete:function(){


						//TODO zapbots move in.

						//TODO - maybe movethis out to endFN to make it specific to  that?
							setTimeout(function(){
		    					nx.ui.txtMSG4.css("bottom",tgtPOS.msg4h+'%');
		    					nx.ui.txtMSG4.css("right",tgtPOS.msg4w+'%');
								nx.ui.txtMSG4.show(3000,function(){
									//TODO show DARKBOT
									nx.ui.goBtn1.unbind( "click" );
									nx.ui.goBtnFrame1.show(1000);
									nx.ui.goBtn1.click(function(){
								
										nx.anm.seriesTitleSmall();
    									nx.anm.seriesSuperTitleSmall();
										// nx.anm.seriesTitleClear();
										endFn();
									});
								});
							},200)
					}}); //end txt slide in
					// });
				},200)
			// });
			}}); //end txt slide in
		},200)
	});



}
