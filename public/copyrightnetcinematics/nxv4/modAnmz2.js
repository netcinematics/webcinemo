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
    $({cx:nx.	scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
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
	    	nx.orby.addGlow('zap')
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

	nx.orby.loadOrbyMouth(function(){
		nx.orbyMesh.position.y = 0; //HIDE THE REAL ORBY-.
		endfn();
	});
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
    fireSystem1.minEmitBox = new BABYLON.Vector3(-0.5, 0.5, -0.5); // Starting all from
    fireSystem1.maxEmitBox = new BABYLON.Vector3(0.5, 1.5, 0.5); // To...

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
    fireSystem2.minEmitBox = new BABYLON.Vector3(-0.5, 0.5, -0.5); // Starting all from
    fireSystem2.maxEmitBox = new BABYLON.Vector3(0.5, 1.5, 0.5); // To...

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
		nx.purpleSteamSystem1.stop();
		nx.purpleSteamSystem1.dispose();
		nx.purpleSteamSystem1 = null;
	}
}

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