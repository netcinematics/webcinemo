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

// nx.scene.activeCamera.position.copyFrom({x: 24.650658024063688, y: 265.7555120866443, z: -32.085313443115325})//zoomend
	// Vector3 {x: 23.501287641057633, y: 265.6232015377622, z: -28.663432719309743};//focal


	nx.scene.activeCamera.position.copyFrom({x: 26.734396619055506, y: 266.00000000001614, z: -38.2592512965453})
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
	var darkLiftOff = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 60, 90, false, 1);
    $({ry:nx.darkBot.rotation.y,posY:nx.darkBot.position.y})
    .animate({ry:-3.75,posY:nx.darkBot.position.y+2}
    ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
	    step:function(now) { 
	       if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
	        nx.darkBot.rotation.y = this.ry;
	        nx.darkBot.position.y = this.posY;
	    },complete:function(){
	    	nx.initDarkBotHover();
	    	var darkMezmo = nx.scene.beginAnimation(nx.darkBotSkeleton[0], 0, 20, false, 0.5);
	    	
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
        nx.dBot.endMezmoRays();
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