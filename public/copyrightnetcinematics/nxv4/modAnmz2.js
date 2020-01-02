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
    .animate({cx:15.24,cy:266.36,cz:-14.34}
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