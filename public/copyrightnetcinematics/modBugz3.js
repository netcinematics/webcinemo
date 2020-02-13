/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('module-loaded')
// debugger;
if(!nx){nx={}}
if(!nx.hero){nx.hero={}}
nx.hero.bugz = {};


/*********************************-LOCALVARS-******************************/
var spykebughead, spykebugbody, spykebugtail;
var merphbughead, merphbugbody, merphbugtail;
var chompbughead, chompbugbody, chompbugtail;
var bugModes = {walk:1,look:0,chase:0,bite:0,digging:0,gone:0}

//EXAMPLE-.
/*********************nx.anmz***********************/
nx.heroX = {
    orby:{name:'', mode:0, anim:function(){} },
    merp:{name:'', mode:0, anim:function(){} },
    spyk:{name:'', mode:0, anim:function(){} },
    chmp:{name:'', mode:0, anim:function(){} },
    zone:{
        look:{name:'look', min:'',max:'', anim:function(){} },
        gone:{name:'gone', min:'',max:'', anim:function(){} },
        sink:{name:'sink', min:'',max:'', anim:function(){} },
        walk:{name:'walk', min:'',max:'', anim:function(){} },
        chase:{name:'chase', min:'',max:'', anim:function(){} }
    },
    mode:{
        hidden:{name:'hidden', mode:0, min:'',max:'', anim:function(){} },
        gohome:{name:'gohome', mode:0, min:'',max:'', anim:function(){} },
        chasing:{name:'chasing', mode:0, min:'',max:'', anim:function(){} }
    }
};
// var anim = nx.anmz; //short-hand-alias
/*********************END-nx.anmz***********************/



var loadAssets = function() {
    if(!nx.scene){return;}
    if(!nx.hero){nx.hero={}}
    nx.hero.spaceBug1 = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    nx.hero.spaceBug2 = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    nx.hero.spaceBug3 = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    //BUGZ
    BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "spykebug15.babylon", nx.scene, function (mesh, particleSystems, skeletons) {
	        //init
	        spykebugbody = mesh[0];
	        spykebugtail = mesh[1];
	        spykebughead = mesh[2];
	        //parent
	        spykebugtail.parent = nx.hero.spaceBug1;
	        spykebugbody.parent = nx.hero.spaceBug1;
	        spykebughead.parent = nx.hero.spaceBug1;
	        // //position
	        spykebughead.position = new BABYLON.Vector3(-0.13,1.2,-2.2);
	        spykebugbody.position = new BABYLON.Vector3(-0.25,1,0);
	        spykebugtail.position = new BABYLON.Vector3(-0.18,1,2);
	        createSpaceBug1();
            createInfinityLoop1();
    });

    BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "chompbug5.babylon", nx.scene, function (mesh, particleSystems, skeletons) {
            chompbugbody = mesh[0];
            chompbugtail = mesh[1];
            chompbughead = mesh[2];
            //parent
            chompbugtail.parent = nx.hero.spaceBug2;
            chompbugbody.parent = nx.hero.spaceBug2;
            chompbughead.parent = nx.hero.spaceBug2;
            // //position
            chompbughead.position = new BABYLON.Vector3(0,1.2,-2.0);
            chompbugbody.position = new BABYLON.Vector3(-0.10,1,0);
            chompbugtail.position = new BABYLON.Vector3(0,1,1.8);
            createSpaceBug2();
            createInfinityLoop2();
            // nx.hero.spaceBug2.position = nx.BV3(-10,0,15);
    });

    BABYLON.SceneLoader.ImportMesh("", "./copyrightnetcinematics/3d/", "merphbug4.babylon", nx.scene, function (mesh, particleSystems, skeletons) {
            merphbugbody = mesh[0];
            merphbugtail = mesh[1];
            merphbughead = mesh[2];
            //parent
            merphbugtail.parent = nx.hero.spaceBug3;
            merphbugbody.parent = nx.hero.spaceBug3;
            merphbughead.parent = nx.hero.spaceBug3;
            // //position
            merphbughead.position = new BABYLON.Vector3(0,1.1,-2.0);
            merphbugbody.position = new BABYLON.Vector3(-0.25,0.9,0);
            merphbugtail.position = new BABYLON.Vector3(0,0.9,2.2);
            createSpaceBug3();
	        createInfinityLoop3();
        // nx.hero.spaceBug3.position = nx.BV3(10,1,-15);
    });
}

var createSpaceBug1 = function () {    //SPACE-BUG-1-. SPYKE-.
    nx.hero.spaceBug1H = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    nx.hero.spaceBug1H.position = new BABYLON.Vector3(nx.hero.spaceBug1.position.x,nx.hero.spaceBug1.position.y,nx.hero.spaceBug1.position.z-2)
    nx.hero.spaceBug1H.parent = nx.hero.spaceBug1;
    nx.hero.spaceBug1H.visibility = 0;
    nx.hero.spaceBug1T = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    nx.hero.spaceBug1T.position = new BABYLON.Vector3(nx.hero.spaceBug1.position.x,nx.hero.spaceBug1.position.y,nx.hero.spaceBug1.position.z+3)
    nx.hero.spaceBug1T.parent = nx.hero.spaceBug1;
    nx.hero.spaceBug1T.visibility = 0;
    nx.hero.spaceBug1.visibility = 0;
    nx.hero.spaceBug1.wiggleSpeed = 0;

    //BUGZ-COLLISIONS-. Ellipsoid Imposter.
    var bugScaleFactor = 1;
    var bugNoseLength = 3.2 * bugScaleFactor;
    var bugHeightControl = 1.50 * bugScaleFactor;// 1.35;//y axis of both makes for hover height 2.5 too low it hits dirt.
    var bugHoverClearance = 1.55 * bugScaleFactor; //allows hover over bumps.
    nx.hero.spaceBug1.ellipsoid = new BABYLON.Vector3(2, bugHeightControl, bugNoseLength);  
    nx.hero.spaceBug1.ellipsoidOffset = new BABYLON.Vector3(-1, bugHoverClearance, 0); //todo
        //DIAGNOSTICS: bounding info
        // nx.hero.spaceBug1.showBoundingBox = true;
        // var x = meshPlayer.getBoundingInfo();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug1H);} //collision-.
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug1);} //collision-.
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug1T);} //collision-.



    nx.scene.registerAfterRender(function() {
        if(bugModes.walk || bugModes.chase || (bugModes.digging && ! bugDug) ){
            nx.hero.spaceBug1.wiggleSpeed+=0.38; //-WIGGLE-ANM-.
            spykebugbody.position.x += (Math.sin(nx.hero.spaceBug1.wiggleSpeed)*0.04);
            spykebughead.lookAt(spykebugbody.position)
            spykebugtail.lookAt(spykebugbody.position)
        }
    });
}

var createSpaceBug2 = function () { //SPACE-BUG-2-. CHOMP->
    nx.hero.spaceBug2H = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    nx.hero.spaceBug2H.position = new BABYLON.Vector3(nx.hero.spaceBug2.position.x,nx.hero.spaceBug2.position.y,nx.hero.spaceBug2.position.z-2)
    nx.hero.spaceBug2H.parent = nx.hero.spaceBug2;
    nx.hero.spaceBug2H.visibility = 0;
    nx.hero.spaceBug2T = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    nx.hero.spaceBug2T.position = new BABYLON.Vector3(nx.hero.spaceBug2.position.x,nx.hero.spaceBug2.position.y,nx.hero.spaceBug2.position.z+3)
    nx.hero.spaceBug2T.parent = nx.hero.spaceBug2;
    nx.hero.spaceBug2T.visibility = 0;
    nx.hero.spaceBug2.visibility = 0;
    nx.hero.spaceBug2.wiggleSpeed = 0;

    //BUGZ-COLLISIONS-. Ellipsoid Imposter.
    var bugScaleFactor = 0.8;
    var bugNoseLength = 3.2 * bugScaleFactor;
    var bugHeightControl = 1.50 * bugScaleFactor;// 1.35;//y axis of both makes for hover height 2.5 too low it hits dirt.
    var bugHoverClearance = 1.55 * bugScaleFactor; //allows hover over bumps.
    nx.hero.spaceBug2.ellipsoid = new BABYLON.Vector3(2, bugHeightControl, bugNoseLength);  
    nx.hero.spaceBug2.ellipsoidOffset = new BABYLON.Vector3(-1, bugHoverClearance, 0); //todo
        //DIAGNOSTICS: bounding info
        // nx.hero.spaceBug1.showBoundingBox = true;
        // var x = meshPlayer.getBoundingInfo();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug2H);} //collision-.
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug2);} //collision-.
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug2T);} //collision-.



    nx.scene.registerAfterRender(function() {
        if(bugModes.walk || bugModes.chase || (bugModes.digging && ! bugDug) ){
            nx.hero.spaceBug2.wiggleSpeed+=0.22; //-WIGGLE-ANM-.
            chompbugbody.position.x += (Math.sin(nx.hero.spaceBug2.wiggleSpeed)*0.035);
            chompbughead.lookAt(chompbugbody.position)
            chompbugtail.lookAt(chompbugbody.position)
            chompbughead.rotation.negate();
        }
    });

}

var createSpaceBug3 = function () {    //SPACE-BUG-3-. MERPH-.
    nx.hero.spaceBug3H = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    nx.hero.spaceBug3H.position = new BABYLON.Vector3(nx.hero.spaceBug3.position.x,nx.hero.spaceBug3.position.y,nx.hero.spaceBug3.position.z-2)
    nx.hero.spaceBug3H.parent = nx.hero.spaceBug3;
    nx.hero.spaceBug3H.visibility = 0;
    nx.hero.spaceBug3T = BABYLON.Mesh.CreateSphere("sphere", 4, 3, nx.scene);
    nx.hero.spaceBug3T.position = new BABYLON.Vector3(nx.hero.spaceBug3.position.x,nx.hero.spaceBug3.position.y,nx.hero.spaceBug3.position.z+3)
    nx.hero.spaceBug3T.parent = nx.hero.spaceBug3;
    nx.hero.spaceBug3T.visibility = 0;
    nx.hero.spaceBug3.visibility = 0;
    nx.hero.spaceBug3.wiggleSpeed = 0;

    //BUGZ-COLLISIONS-. Ellipsoid Imposter.
    var bugScaleFactor = 2;
    var bugNoseLength = 3.5 * bugScaleFactor;
    var bugHeightControl = 1.50 * bugScaleFactor;// 1.35;//y axis of both makes for hover height 2.5 too low it hits dirt.
    var bugHoverClearance = 1.55 * bugScaleFactor; //allows hover over bumps.
    nx.hero.spaceBug3.ellipsoid = new BABYLON.Vector3(2, bugHeightControl, bugNoseLength);  
    nx.hero.spaceBug3.ellipsoidOffset = new BABYLON.Vector3(-1, bugHoverClearance, 0); //todo
    nx.hero.spaceBug3.scaling = new BABYLON.Vector3(bugScaleFactor, bugScaleFactor, bugScaleFactor);
        //DIAGNOSTICS: bounding info
        // nx.hero.spaceBug1.showBoundingBox = true;
        // var x = meshPlayer.getBoundingInfo();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug3H);} //collision-.
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug3);} //collision-.
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.hero.spaceBug3T);} //collision-.

    nx.scene.registerAfterRender(function() {
        if(bugModes.walk || bugModes.chase || (bugModes.digging && ! bugDug) ){
            nx.hero.spaceBug3.wiggleSpeed+=0.18; //-WIGGLE-ANM-.
            merphbugbody.position.x += (Math.sin(nx.hero.spaceBug3.wiggleSpeed)*0.025);
            merphbughead.lookAt(merphbugbody.position)
            merphbugtail.lookAt(merphbugbody.position)
        }
    });
}

var createInfinityLoop1 = function(){
    var pointsPath1 = [];
    var pathSubs1 = 200;
    //track Bernoulli
    for(var t = 0; t < 2 * Math.PI; t += Math.PI / pathSubs1) { //subdivisions! less is faster more jumpy, more is slower and smoother.
        var scale = 50 / ( 3 - Math.cos(2 * t));
        pointsPath1.push(new BABYLON.Vector3(scale * Math.cos(t), 0, scale * Math.sin(2 * t)/2));
    }
    pointsPath1.push(pointsPath1[0]);
    var path1 = BABYLON.MeshBuilder.CreateLines('path1', {points: pointsPath1}, nx.scene);
    path1.visibility = 0;
    /******************************RECURSIVE-MOTIONPATHANM****************************************/
    nx.hero.spaceBug1.motionPathIndex = 1;
    nx.hero.spaceBug1.speedGovernor = 200; //bigger is slower. time between vertices. this needs to be balanced with path-subdivisions - to get a smooth and fast speed!
    nx.hero.spaceBug1.motionPathANM = function(){
        var bugTGT = pointsPath1[nx.hero.spaceBug1.motionPathIndex]
        var bugPOS = { x:nx.hero.spaceBug1.position.x, y: nx.hero.spaceBug1.position.y, z:nx.hero.spaceBug1.position.z };
        $({'x':bugPOS.x,'y':bugPOS.y,'z':bugPOS.z}).animate({'x':bugTGT.x,'y':bugTGT.y,'z':bugTGT.z},{queue:false,duration:nx.hero.spaceBug1.speedGovernor, easing:'swing', //ANM: motion-path-.
          step: function(now) { 
                nx.hero.spaceBug1.position.x=this.x;
                nx.hero.spaceBug1.position.y=this.y;
                nx.hero.spaceBug1.position.z=this.z;
                //ORIENTATION: to PATH.
                if(!bugModes.gone) { nx.hero.spaceBug1.lookAt(pointsPath1[nx.hero.spaceBug1.motionPathIndex+1]); }
          }, complete:function(){
                nx.hero.spaceBug1.motionPathIndex = (nx.hero.spaceBug1.motionPathIndex < pointsPath1.length-2) ? nx.hero.spaceBug1.motionPathIndex+1 : 0; //loop the track.  2 magic number because extra nodes..
                if(bugModes.walk){ nx.hero.spaceBug1.motionPathANM(); }
          } 
        });
    }
    // /******************************RECURSIVE-MOTIONPATHANM****************************************/
    nx.hero.spaceBug1.motionPathANM();
}

var createInfinityLoop2 = function(){
    var pointsPath2 = [];
    var pathSubs2 = 200;
    for(var t = 0; t < 2 * Math.PI; t += Math.PI / pathSubs2) { //track Gerono-.
        var scale = 80 / ( 3 - Math.cos(2 * t));
        pointsPath2.push(new BABYLON.Vector3(scale * Math.cos(t), 0, (scale * Math.sin(2 * t)/2)+10));
    }
    pointsPath2.push(pointsPath2[0]);
    var path2 = BABYLON.MeshBuilder.CreateLines('path2', {points: pointsPath2}, nx.scene);
    path2.visibility = 0;
    /******************************RECURSIVE-MOTIONPATHANM****************************************/
    nx.hero.spaceBug2.motionPathIndex = 1;
    nx.hero.spaceBug2.speedGovernor = 150; //bigger is slower. time between vertices. this needs to be balanced with path-subdivisions - to get a smooth and fast speed!
    nx.hero.spaceBug2.motionPathANM = function(){
        var bugTGT = pointsPath2[nx.hero.spaceBug2.motionPathIndex]
        var bugPOS = { x:nx.hero.spaceBug2.position.x, y: nx.hero.spaceBug2.position.y, z:nx.hero.spaceBug2.position.z };
        $({'x':bugPOS.x,'y':bugPOS.y,'z':bugPOS.z}).animate({'x':bugTGT.x,'y':bugTGT.y,'z':bugTGT.z},{queue:false,duration:nx.hero.spaceBug2.speedGovernor, easing:'swing', //ANM: motion-path-.
          step: function(now) { 
                nx.hero.spaceBug2.position.x=this.x;
                nx.hero.spaceBug2.position.y=this.y;
                nx.hero.spaceBug2.position.z=this.z;
                //ORIENTATION: to PATH.
                if(!bugModes.gone) { nx.hero.spaceBug2.lookAt(pointsPath2[nx.hero.spaceBug2.motionPathIndex+1]); }
          }, complete:function(){
                nx.hero.spaceBug2.motionPathIndex = (nx.hero.spaceBug2.motionPathIndex < pointsPath2.length-2) ? nx.hero.spaceBug2.motionPathIndex+1 : 0; //loop the track.  2 magic number because extra nodes..
                if(bugModes.walk){ nx.hero.spaceBug2.motionPathANM(); }
          } 
        });
    }
    // /******************************RECURSIVE-MOTIONPATHANM****************************************/
    nx.hero.spaceBug2.motionPathANM();
}

var createInfinityLoop3 = function(){
    var pointsPath3 = [];
    var pathSubs3 = 200;
    for(var t = 0; t < 2 * Math.PI; t += Math.PI / pathSubs3) { //track Gerono-.
        var scale = 80 / ( 3 - Math.cos(2 * t));
        pointsPath3.push(new BABYLON.Vector3(scale * Math.cos(t), 0, (scale * Math.sin(2 * t)/2)-10));
    }
    pointsPath3.push(pointsPath3[0]);
    var path3 = BABYLON.MeshBuilder.CreateLines('path3', {points: pointsPath3}, nx.scene);
    path3.visibility = 0;
    /******************************RECURSIVE-MOTIONPATHANM****************************************/
    nx.hero.spaceBug3.motionPathIndex = 1;
    nx.hero.spaceBug3.speedGovernor = 350; //bigger is slower. time between vertices. this needs to be balanced with path-subdivisions - to get a smooth and fast speed!
    nx.hero.spaceBug3.motionPathANM = function(){
        var bugTGT = pointsPath3[nx.hero.spaceBug3.motionPathIndex]
        var bugPOS = { x:nx.hero.spaceBug3.position.x, y: nx.hero.spaceBug3.position.y, z:nx.hero.spaceBug3.position.z };
        $({'x':bugPOS.x,'y':bugPOS.y,'z':bugPOS.z}).animate({'x':bugTGT.x,'y':bugTGT.y,'z':bugTGT.z},{queue:false,duration:nx.hero.spaceBug3.speedGovernor, easing:'swing', //ANM: motion-path-.
          step: function(now) { 
                nx.hero.spaceBug3.position.x=this.x;
                nx.hero.spaceBug3.position.y=this.y;
                nx.hero.spaceBug3.position.z=this.z;
                //ORIENTATION: to PATH.
                if(!bugModes.gone) { nx.hero.spaceBug3.lookAt(pointsPath3[nx.hero.spaceBug3.motionPathIndex+1]); }
          }, complete:function(){
                nx.hero.spaceBug3.motionPathIndex = (nx.hero.spaceBug3.motionPathIndex < pointsPath3.length-2) ? nx.hero.spaceBug3.motionPathIndex+1 : 0; //loop the track.  2 magic number because extra nodes..
                if(bugModes.walk){ nx.hero.spaceBug3.motionPathANM(); }
          } 
        });
    }
    // /******************************RECURSIVE-MOTIONPATHANM****************************************/
    nx.hero.spaceBug3.motionPathANM();
}

loadAssets();


// });