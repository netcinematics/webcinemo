/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('a ZONEZ module-loaded')
// debugger;
if(!nx){nx={}}
nx.zonez = {};
/******************************-LOCALVARZ-**********************************/
// if(!nx.sub){nx.sub={}}
// nx.sub = {num0:0,num1:0} 
/******************************-MODULE-**********************************/


/******************************-CREATE-ZONEZ-**********************************/
//DYNAMIC-ZONEZ: {WHEN:above/below,DIMENSION:x/y/z,VALUE:100,trigger:function}
//USAGE: nx.camZoneFactory({pos:{x:0,y:0,z:0},h:0,w:0,d:0,alpha:1, hit:function(){ debugger; } });
nx.zonez.camZoneFactory = function( config  ){ //CUSAGE:{pos:{},dim{h:0,w:0,d:0},alpha:1,,color:{r:0,g:0,b:0},hit:function(){} }
	// debugger;	
    // ZONE BOXES-.
    // var h=30,w=200,d=200;
    if(!config.dim || !config.dim.h || !config.dim.w || !config.dim.d){
    	config.dim = {h:10,w:10,d:10}; //default-.
    	// return
    }
    if(!config.pos){config.pos = {x:0,y:0,z:0}}
    if(!config.color){config.color = {r:0,g:0,b:0} }

    var zBox1 = BABYLON.MeshBuilder.CreateBox("zonebox", {height:config.dim.h, width:config.dim.w, depth:config.dim.d}, nx.scene);
    zBox1.position = new BABYLON.Vector3(config.pos.x, config.pos.y, config.pos.z);
    zBox1.visibility = config.alpha || 0.22;
    zBox1.material = new BABYLON.StandardMaterial("colorbox", nx.scene);
    zBox1.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    zBox1.material.specularColor = new BABYLON.Color3(0, 0, 0);
    zBox1.material.emissiveColor = new BABYLON.Color3(config.color.r, config.color.g, config.color.b);
    zBox1.dim = computeZoneBox(zBox1,config.dim.h,config.dim.w,config.dim.d); //CUSTOM-VECTOR-DETECTION-.
    if(config.hit){
    	zBox1.hit = config.hit;
    }
    zBox1.config = config; //ability for local functions called on config obj of implementation-.
    // zBox1.meta = 'red';
    // zBox1.fn = function(){ //warning: fires for every frame-.
    	// debugger;
        //remove zone
        // var targetZone = zoneBoxYFall1;
        // nx.activeZonez = nx.activeZonez.filter(function(zone){ return (zone===targetZone) ? false:true; })
        // restartGame();
        // nx.scene.activeCamera = nx.camz.freeCam; 
        //FACE-CAM-
        // nx.initFaceCam()
    // }
    nx.activeZonez.push(zBox1);

    return zBox1; //helps to save handle for reference of zone existing or not-.

}


nx.zonez.removeZone = function(tgt){ //-1 remove all zones

	for(var i=0; i<nx.activeZonez.length;i++){ 
	    if(nx.activeZonez[i]===tgt || tgt===-1){
	        //TODO: send count to 2DUI-.


	        var item = nx.activeZonez[i];
	        nx.activeZonez.splice(i,1) //deselect
	        //TODO - jettison particle.
	        // nx.anm.jettisionParticle({item:item,done:function(){
	            // debugger;
	            item.dispose();
	        // }})
	        break;
	    }

	}


}

/**********************************- ZONE-ALARM -********************************************************/
/***********************************************************************/
var computeZoneBox = function(box,h,w,d){ 
    var xp = box.position.x + (w/2);
    var xm = box.position.x - (w/2);
    var yp = box.position.y + (h/2);
    var ym = box.position.y - (h/2);
    var zp = box.position.z + (d/2);
    var zm = box.position.z - (d/2);
    return {xp:xp,xm:xm,yp:yp,ym:ym,zp:zp,zm:zm};
}
/**********************************- ZONE-ALARM -********************************************************/
nx.activeZonez = [];
// var zoneBoxYFall1; //todo put into zoneboxes?
// var restartReady = 0;
//COOL PATTERN: MASTERLOOPZ and SUBLOOPZ-.
nx.zonez.createZoneAlarms = function(){ //TODO: move to nx
    //ZoneAlarmLoopz-.
    nx.zoneAlarmsOn = -1; //all on all off for zones-. //set later = 1; //ANMethodology: different types of jitter 0:0ff 1:min 2:med 3:max
    // nx.scene.registerBeforeRender(function zoneAlarmLoopz() {
    nx.scene.registerAfterRender(function zoneAlarmLoopz() {
        if(nx.zoneAlarmsOn>0){zoneAlarm();}else if(!nx.zoneAlarmsOn){ nx.scene.unregisterAfterRender(zoneAlarmLoopz); } 
    });

    //IF ON PIPELINE then ZONEBLOCK x by 15;
    // if(nx.orbyMesh.position.x > 15 && nx.orbyMesh.position.z>20){ nx.orbyMesh.position.x = 15; console.log('ZONE X') }
    // if(nx.orbyMesh.position.x < -15 && nx.orbyMesh.position.z>20){ nx.orbyMesh.position.x = -15; console.log('ZONE -X') }
}
var zoneAlarmDamper = 0;
var zoneAlarm = function(){ //WARNING: fires every frame-.

	if(++zoneAlarmDamper%2===0){return} //loop damper

    var dz = {}, meta, zone; //dynamic zones-.
    for(var z=0; z< nx.activeZonez.length;z++){ //zone
        zone = nx.activeZonez[z];
        if(zone.intersecting){  //abstract zoneintersection listener-.
	        // if(zone.intersectsMesh(nx.orbyMesh)){ //if intersects-.
	        if(nx.orbyMesh.intersectsMesh(zone,true)){ //if intersects-.
        	// debugger;
        		console.log('intersecting')
        		// if(zone.triggerfn){ zone.triggerfn() } //callback caller-.
        		if(zone.hit){ zone.hit(zone.config) } //callback caller, with a handle to itself-.
			}





        } else if(zone.dim){ //zoneBox-.
        // if(zone.dim){ //zoneBox-.
            dz = nx.activeZonez[z].dim;
            meta = nx.activeZonez[z].meta;
            if(nx.orbyMesh.position.x < dz.xp && nx.orbyMesh.position.x > dz.xm          //todo make orby tgtObj
                && nx.orbyMesh.position.y < dz.yp && nx.orbyMesh.position.y > dz.ym
                && nx.orbyMesh.position.z < dz.zp && nx.orbyMesh.position.z > dz.zm) {
                // console.log('ALARM '+meta) //color zone message
                if(nx.activeZonez[z].hit){nx.activeZonez[z].hit(zone.config)} //call zone action
            }
        } else if(zone.xm||zone.xp||zone.ym||zone.yp||zone.zm||zone.zp){ //zonePlane-.
            var zalarm = 0; //TRIGGER: less than plus AND greater than minus
            if(zone.xm!=undefined){ if(nx.orbyMesh.position.x > zone.xm ){ zalarm=1; } else { continue; } } 
            if(zone.xp!=undefined){ if(nx.orbyMesh.position.x < zone.xp ){ zalarm=1; } else { continue; } } 
            if(zone.ym!=undefined){ if(nx.orbyMesh.position.y > zone.ym ){ zalarm=1; } else { continue; } } 
            if(zone.yp!=undefined){ if(nx.orbyMesh.position.y < zone.yp ){ zalarm=1; } else { continue; } } 
            if(zone.zm!=undefined){ if(nx.orbyMesh.position.z > zone.zm ){ zalarm=1; } else { continue; } } 
            if(zone.zp!=undefined){ if(nx.orbyMesh.position.z < zone.zp ){ zalarm=1; } else { continue; } }
            if(zalarm){ 
            	// console.log('hitting')
                if(nx.activeZonez[z].hit){ nx.activeZonez[z].hit(zone.config) } 
            } //call zone action
        }
    }
}
/*********************************CREATE-ZONES******************************/
nx.createZones = function(){ //TODO: move to nx
    // ZONE BOXES-.
    var h=3,w=20,d=20;
    var zBox1 = BABYLON.MeshBuilder.CreateBox("box", {height:h, width:w, depth:d}, nx.scene);
    zBox1.position = new BABYLON.Vector3(15, 2, -15);
    zBox1.visibility = 0.44;
    zBox1.material = new BABYLON.StandardMaterial("red", nx.scene);
    zBox1.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    zBox1.material.specularColor = new BABYLON.Color3(0, 0, 0);
    zBox1.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    zBox1.dims = computeZoneBox(zBox1,h,w,d);
    zBox1.meta = 'red';
    zBox1.hit = function(){ //warning: fires for every frame-.
        //remove zone
        // var targetZone = zoneBoxYFall1;
        // nx.activeZonez = nx.activeZonez.filter(function(zone){ return (zone===targetZone) ? false:true; })
        // restartGame();
        // nx.scene.activeCamera = nx.camz.freeCam; 
        //FACE-CAM-
        nx.initFaceCam()
    }
    nx.activeZonez.push(zBox1);
    var zBox2 = BABYLON.MeshBuilder.CreateBox("box2", {height:h,width:w,depth:d}, nx.scene);
    zBox2.position = new BABYLON.Vector3(15, 2, 15);
    zBox2.visibility = 0.44;
    zBox2.material = new BABYLON.StandardMaterial("green", nx.scene);
    zBox2.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    zBox2.material.specularColor = new BABYLON.Color3(0, 0, 0);
    zBox2.material.emissiveColor = new BABYLON.Color3(0, 1, 0);
    zBox2.dims = computeZoneBox(zBox2,h,w,d);
    zBox2.meta = 'green';
    zBox2.hit = function(){ 
        // nx.scene.activeCamera = nx.camz.sceneCam1;
        debugger; //TODO change this to initSpotCam({pos:{},tgt:{}});
        initLongCam();  
    }
    nx.activeZonez.push(zBox2);
    var zBox3 = BABYLON.MeshBuilder.CreateBox("box3", {height:h,width:w,depth:d}, nx.scene);
    zBox3.visibility = 0.44;
    zBox3.position = new BABYLON.Vector3(-15, 2, -15);
    zBox3.material = new BABYLON.StandardMaterial("blue", nx.scene);
    zBox3.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    zBox3.material.specularColor = new BABYLON.Color3(0, 0, 0);
    zBox3.material.emissiveColor = new BABYLON.Color3(0, 0, 1);
    zBox3.dims = computeZoneBox(zBox3,h,w,d);
    zBox3.meta = 'blue';
    zBox3.hit = function(){ 
        // nx.scene.activeCamera = nx.camz.followCam;   

        //ACOZMOTOONZ  
        nx.camz.followCam.lockedTarget = nx.orbyMesh; //SET-CAM-TARGET-
    }
    nx.activeZonez.push(zBox3);
    var zBox4 = BABYLON.MeshBuilder.CreateBox("box4", {height:h,width:w,depth:d}, nx.scene);
    zBox4.visibility = 0.44;
    zBox4.position = new BABYLON.Vector3(-15, 2, 15);
    zBox4.material = new BABYLON.StandardMaterial("purple", nx.scene);
    zBox4.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    zBox4.material.specularColor = new BABYLON.Color3(0, 0, 0);
    zBox4.material.emissiveColor = new BABYLON.Color3(0.5, 0, 0.5);
    zBox4.dims = computeZoneBox(zBox4,h,w,d);
    zBox4.meta = 'purple';
    zBox4.hit = function(){ 
        // nx.scene.activeCamera = nx.camz.sceneCam1;  
    }
    nx.activeZonez.push(zBox4);

    // var zoneBoxYFall1 = {name:"yFall1",yp:-1,zp:50,fn:function(){ restartGame(); } }; //zonePlane: less than y -1, and less than z 50.
    // nx.activeZonez.push(zoneBoxYFall1); //creates trigger on zone alarm-.
    // zoneBoxCamBoom1 = {name:"boomCam",zm:20,zp:400,fn:function(){ initBoomCam();  } }; //zonePlane: on z+ greater than z20 , and less than z50.
    // nx.activeZonez.push(zoneBoxCamBoom1); //creates trigger on zone alarm-.
}

//deprecated-.
nx.zonez.collisionZoneFactory = function( config  ){ //USAGE:{pos:{},dim{h:0,w:0,d:0},rot:{x,y,z},alpha:1,,color:{r:0,g:0,b:0},hit:function(){} }
   //same usage as camzonefactory - except we are defining dimensions of a collision object

    if(!config.dim.h || !config.dim.w || !config.dim.d){return}
    if(!config.pos){config.pos = {x:0,y:0,z:0}}
    if(!config.color){config.color = {r:0,g:0,b:0} }

    var zBox1 = BABYLON.MeshBuilder.CreateBox("zonebox", {height:config.dim.h, width:config.dim.w, depth:config.dim.d}, nx.scene);
    zBox1.position = new BABYLON.Vector3(config.pos.x, config.pos.y, config.pos.z);
    zBox1.visibility = config.alpha || 0.22;
    zBox1.material = new BABYLON.StandardMaterial("colorbox", nx.scene);
    zBox1.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    zBox1.material.specularColor = new BABYLON.Color3(0, 0, 0);
    zBox1.material.emissiveColor = new BABYLON.Color3(config.color.r, config.color.g, config.color.b);
    //ROTATIONS-.
   if(config.rot && config.rot.x){ zBox1.rotation.x = config.rot.x; }
   if(config.rot && config.rot.y){ zBox1.rotation.y = config.rot.y; }
   if(config.rot && config.rot.z){ zBox1.rotation.z = config.rot.z; }
    // zBox1.rotation.y = 0.8; //allows for zone boxes in any direction.

	zBox1.showBoundingBox = true;

	zBox1.checkCollisions = true;
	// debugger;
	// zBox1.refreshBoundingInfo();
    if(config.hit){
    	zBox1.hit = config.hit;
    }

    zBox1.intersecting = 1;

    // zBox1.triggerfn = function(){
    // 	debugger;
    // 	zBox1.hit(zBox1);

    // }
    // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push();} //TODO turn off when under zone
    // zBox1.dim = computeZoneBox(zBox1,config.dim.h,config.dim.w,config.dim.d); //CUSTOM-VECTOR-DETECTION-.
    // if(config.hit){
    // 	zBox1.hit = config.hit;
    // }
    // zBox1.meta = 'red';
    // zBox1.triggerfn = function(){ //warning: fires for every frame-.
    	// debugger;
        //remove zone
        // var targetZone = zoneBoxYFall1;
        // nx.activeZonez = nx.activeZonez.filter(function(zone){ return (zone===targetZone) ? false:true; })
        // restartGame();
        // nx.scene.activeCamera = nx.camz.freeCam; 
        //FACE-CAM-
        // nx.initFaceCam()
    // }
    nx.activeZonez.push(zBox1);


}

nx.zonez.removeAllZonez = function(){

	for(var i = 0; i< nx.activeZonez.length;i++){
		if(nx.activeZonez[i].dispose){nx.activeZonez[i].dispose();}
	}
	nx.activeZonez = []; //CLEAR OUT ALL ZONES?
}


//******************************************************************MODULE-READY-RENDERER-MECHANISMO-.*************************************\
nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
	try{
		nx.zonez.createZoneAlarms();
	} catch(e){debugger;}
}); //schedule in manifest for ready callback-.
nx.setMasterManifest(); //signal success and await-.


// });