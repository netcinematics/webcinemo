/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('a IONZ module-loaded')
// debugger;
if(!nx){nx={}}
// nx.module = {};



/*******************************************************************-SPACE-Ionz-****************************************************************/
//TODO; when flying through space - all collisions should be off. Then only space Ionz. Then only pad. Then pipe. Etc. COLLISION-ZONES-.
nx.spaceIonzActive = [];
nx.spaceIonz = [{"x":-2290,"y":3610.9999999998895,"z":-1635.9000005351807},{"x":-2280.25,"y":3596.0499999998847,"z":-1644.7613044154843},{"x":-2270.5,"y":3581.0999999998794,"z":-1653.622608295788},{"x":-2230,"y":3518.999999999858,"z":-1642.386642536242},{"x":-2181.25,"y":3444.249999999832,"z":-1578.2536856792763},{"x":-2158.75,"y":3409.7499999998204,"z":-1549.4466873507074},{"x":-2140,"y":3380.999999999811,"z":-1530.3482878083018},{"x":-2029,"y":3210.7999999997523,"z":-1585.5444506359256},{"x":-2017.75,"y":3193.5499999997464,"z":-1592.0689336475928},{"x":-2008,"y":3178.599999999741,"z":-1597.7234855910376},{"x":-1912.75,"y":3032.5499999997082,"z":-1547.3477502789144},{"x":-1900,"y":3012.999999999709,"z":-1530.8405718181593},{"x":-1889.5,"y":2996.89999999971,"z":-1520.7645293030532},{"x":-1814.5,"y":2881.8999999997154,"z":-1559.5979979299884},{"x":-1803.25,"y":2864.6499999997163,"z":-1566.7893810090502},{"x":-1790.5,"y":2845.099999999718,"z":-1574.9396151653202},{"x":-1680.25,"y":2676.0499999997264,"z":-1527.8802098350393},{"x":-1668.25,"y":2657.6499999997272,"z":-1512.288509424995},{"x":-1652.5,"y":2633.499999999729,"z":-1493.6005583942213},{"x":-1591,"y":2539.199999999734,"z":-1537.8491534866228},{"x":-1576,"y":2516.1999999997356,"z":-1554.1174635824111},{"x":-1555.75,"y":2485.1499999997363,"z":-1568.5826750192991},{"x":-1502.5,"y":2403.4999999997412,"z":-1518.0452794236844},{"x":-1480.75,"y":2370.149999999743,"z":-1505.3269919728214},{"x":-1416.25,"y":2271.249999999748,"z":-1544.5333669190138},{"x":-1344.25,"y":2160.849999999754,"z":-1591.521325690987},{"x":-1252.75,"y":2020.5499999997614,"z":-1501.137443889288},{"x":-1136.5,"y":1842.2999999997708,"z":-1586.7758444605672},{"x":-1036,"y":1688.199999999779,"z":-1543.501419770178},{"x":-970,"y":1586.9999999997842,"z":-1502.6997138603397},{"x":-902.5,"y":1483.4999999997897,"z":-1509.7358118430877},{"x":-831.25,"y":1374.2499999997956,"z":-1508.8039901087836},{"x":-804.250029318702,"y":1334.6244024907628,"z":-1508.8039143342721}];
// var createGemz = function(){
nx.createSpaceIonz = function(){

    if(nx.spaceIonzActive.length){return;} //ensure this is only called when there are NO more Ionz-.

    for(var i=0; i<nx.spaceIonz.length; i++){
        //------SET-ENERIonz-----------------------------------------------------------------------------------
        //TODO reuse for FIND the lost ENERGEM! GREEN-EMERALD-.
        nx.aSpaceIon = BABYLON.Mesh.CreateSphere("editNode", 1, 4, nx.scene);
        nx.aSpaceIon.position = new BABYLON.Vector3(nx.spaceIonz[i].x,nx.spaceIonz[i].y,nx.spaceIonz[i].z)
        // nx.aSpaceIon.editTgt = config.tgt;
        nx.aSpaceIon.material = new BABYLON.StandardMaterial("spaceIonMat", nx.scene);
        // nx.aSpaceIon.material.diffuseColor = nx.RGBAtoNormal(133,2,244,1);
        // nx.aSpaceIon.material = nx.blueMat; //TODO ENERGEM
        // nx.aSpaceIon.material = new BABYLON.StandardMaterial("blue1", nx.scene);
        // nx.aSpaceIon.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
        nx.aSpaceIon.material.diffuseColor = BABYLON.Color3.Blue();
        nx.aSpaceIon.material.emissiveColor = BABYLON.Color3.Green();
        nx.aSpaceIon.material.alpha = 0.66;
        // nx.aSpaceIon.material.alpha = 1;
        // nx.aSpaceIon.material.emissiveColor = nx.RGBAtoNormal(248,175,2,1);
        // nx.aSpaceIon.material.alpha = 0.44;
        nx.aSpaceIon.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
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
                if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
                    //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                    console.log('config.tgt---------------------')
                    console.log('POS: '+JSON.stringify(config.tgt.position))
                    // console.log('ROT: '+JSON.stringify(config.tgt.rotation))
                }
            }
        }
        nx.aSpaceIon.actionManager = new BABYLON.ActionManager(nx.scene); //EDIT-MESH-CLICK-EVENTS-------------------------------------------
        nx.aSpaceIon.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
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

        // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.aSpaceIon);} //collision
        nx.spaceIonzActive.push(nx.aSpaceIon);
    }


    //-------------------------------------------------------------------------SPACE-GEM-COLLISION-LOOPZ-.Methodology
    nx.scene.registerBeforeRender(function spaceGemCollisionLoopz() {
        // console.log('spaceGemLoopz!') 
        //TODO probably reduce this
        //todo put logs on all loopz, to see if they are shutting off correctly. probly arent
        //todo definetly dont want to ever get 2 of these-. warning-.
        //todo check nx.loopz.spaceGemCollisionLoopz if empty apply to nx.loopz.spaceGem;CollisionLoopz and register separate
        //that way it can be cleaned and re instantiated, not re-initialized, and cleaned-. loopz- methodology add in zoneloopz
        if(nx.orbyMesh.position.y < 1222){ //UNREGISTER spacegemloopz
            nx.scene.unregisterBeforeRender(spaceGemCollisionLoopz);
            //todo clean up other memory like GEMZ
            return;
        } 
        //TODO remove
        // if(nx.zoneAlarmsOn>0){zoneAlarm();}else if(!nx.zoneAlarmsOn){ nx.scene.unregisterBeforeRender(zoneAlarmLoop); } 
        for(var i=0; i<nx.spaceIonzActive.length;i++){ 
            if(nx.spaceIonzActive[i].intersectsMesh(nx.orbyMesh)){
                

                if(nx.sonics && nx.sonics.blip2){ nx.sonics.blip2.play();}
                // debugger;

                //TODO: send count to 2DUI-.


                var item = nx.spaceIonzActive[i];
                nx.spaceIonzActive.splice(i,1) //deselect
                //TODO - jettison particle.
                // nx.anm.jettisionParticle({item:item,done:function(){
                    // debugger;
                    item.dispose();
                // }})
                break;
            }

        }
    });

}

/*******************************************************************-PIPE-Ionz-****************************************************************/
nx.pipeIonzActive = [];
nx.pipeIonz = [];

nx.createPipeIonz = function(){

    nx.pipeIonz = [{"x":-336.087,"y":1068.088,"z":-1465.921},{"x":-299.073,"y":1063.596,"z":-1453},{"x":-236.595,"y":1065,"z":-1442},{"x":-141.067,"y":1052,"z":-1433.75},{"x":-33.858,"y":1015.943,"z":-1472.196},{"x":62.468,"y":1015,"z":-1470},{"x":171.186,"y":970.228,"z":-1442.167},{"x":333.779,"y":914.325,"z":-1305.854},{"x":356.77,"y":910,"z":-1272},{"x":403.826,"y":888.081,"z":-1229.634},{"x":505.742,"y":866.489,"z":-1151.587},{"x":516.352,"y":865.126,"z":-1136.751},{"x":537.208,"y":854.909,"z":-1105.548},{"x":608,"y":788,"z":-950.311},{"x":657,"y":780,"z":-861},{"x":690,"y":791,"z":-780},{"x":675,"y":823,"z":-671.384},{"x":652,"y":835,"z":-631.784},{"x":621,"y":844,"z":-595},{"x":322,"y":700,"z":-720},{"x":349.049,"y":646,"z":-800},{"x":450,"y":575,"z":-852},{"x":568,"y":473,"z":-780}];
    if(nx.pipeIonzActive.length){return;} //ensure this is only called when there are NO more Ionz-.

    for(var i=0; i<nx.pipeIonz.length; i++){
        //------SET-ENERIonz-----------------------------------------------------------------------------------
        nx.aPipeIon = BABYLON.Mesh.CreateSphere("editNode", 1, 4, nx.scene);
        nx.aPipeIon.position = new BABYLON.Vector3(nx.pipeIonz[i].x,nx.pipeIonz[i].y,nx.pipeIonz[i].z)
        // nx.aPipeIon.editTgt = config.tgt;

        nx.aPipeIon.material = new BABYLON.StandardMaterial("pipeIonMat", nx.scene);
        // nx.aSpaceIon.material.diffuseColor = nx.RGBAtoNormal(133,2,244,1);
        // nx.aSpaceIon.material = nx.blueMat; //TODO ENERGEM
        // nx.aSpaceIon.material = new BABYLON.StandardMaterial("blue1", nx.scene);
        // nx.aSpaceIon.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
        nx.aPipeIon.material.diffuseColor = BABYLON.Color3.Blue();
        nx.aPipeIon.material.emissiveColor = BABYLON.Color3.Green();
        nx.aPipeIon.material.alpha = 0.66;

        // nx.aPipeIon.material = nx.blueMat;
        // nx.aPipeIon.material.alpha = 0.8;
        nx.aPipeIon.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
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
                if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
                    //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                    // console.log('config.tgt---------------------')
                    // console.log('POS: '+JSON.stringify(config.tgt.position))
                    console.log('POS: '+this.position);
                    // console.log('ROT: '+JSON.stringify(config.tgt.rotation))
                }
            }
        }
        nx.aPipeIon.actionManager = new BABYLON.ActionManager(nx.scene); //EDIT-MESH-CLICK-EVENTS-------------------------------------------
        nx.aPipeIon.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
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

        // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.aPipeIon);} //collision
        nx.pipeIonzActive.push(nx.aPipeIon);
    }


    //-------------------------------------------------------------------------SPACE-GEM-COLLISION-LOOPZ-.Methodology
    nx.scene.registerBeforeRender(function pipeGemCollisionLoopz() {
        // console.log('spaceGemLoopz!') 
        //TODO probably reduce this
        //todo put logs on all loopz, to see if they are shutting off correctly. probly arent
        //todo definetly dont want to ever get 2 of these-. warning-.
        //todo check nx.loopz.spaceGemCollisionLoopz if empty apply to nx.loopz.spaceGem;CollisionLoopz and register separate
        //that way it can be cleaned and re instantiated, not re-initialized, and cleaned-. loopz- methodology add in zoneloopz
        if(nx.orbyMesh.position.y < 1222){ //UNREGISTER spacegemloopz
          // debugger;
            // nx.scene.unregisterBeforeRender(pipeGemCollisionLoopz);
            //todo clean up other memory
            // return;
        } 
        //TODO remove
        // if(nx.zoneAlarmsOn>0){zoneAlarm();}else if(!nx.zoneAlarmsOn){ nx.scene.unregisterBeforeRender(zoneAlarmLoop); } 
        for(var i=0; i<nx.pipeIonzActive.length;i++){ 
            if(nx.pipeIonzActive[i].intersectsMesh(nx.orbyMesh)){
                


                // debugger;

                //TODO: send count to 2DUI-.


                var item = nx.pipeIonzActive[i];
                nx.pipeIonzActive.splice(i,1) //deselect
                //TODO - jettison particle.
                // nx.anm.jettisionParticle({item:item,done:function(){
                    // debugger;
                    item.dispose();
                // }})
                break;
            }

        }
    });

}



// /*********************************CREATE-SOLID-PARTICLES******************************/
// // var particleFountainInit = 1;
// // var particleFountainReady = 0;
// var spsHidden = [];
// var spsFireAway = 0;
// var SPS, spsPosition;
// /*********************************CREATE-SOLID-PARTICLES******************************/
// var createSpaceGemz = function() {
//     var nb = 10;
//     // SPS creation
//     var poly = BABYLON.MeshBuilder.CreatePolyhedron("p", {size: 1, type: 4, flat: true}, nx.scene);
//     SPS = new BABYLON.SolidParticleSystem('SPS', nx.scene,{particleIntersection: true, boundingSphereOnly: true, updatable:false});
//     SPS.addShape(poly, nb);
//     var mesh = SPS.buildMesh();
//     mesh.position.y = 1;
//     poly.dispose();  // free memory

//     // SPS behavior definition
//     var speed = 0.7;//1.5;
//     var gravity = -0.01;

//     // init
//     SPS.initParticles = function() {
//        for (var p = 0; p < this.nbParticles; p++) {
//           this.recycleParticle(this.particles[p]);
//       }
//     };

//     //TODO optimizations.
//     // SPS.mesh.freezeWorldMatrix();       // prevents from re-computing the World Matrix each frame
//     // SPS.mesh.freezeNormals();           // prevents from re-computing the normals each frame
//     // SPS.dispose();  //sps to garbage collection.


//     // on bug jump.
//     var bugShotParticle = function(particle) {
//       particle.position.x = spsPosition.x;
//       particle.position.y = spsPosition.y;
//       particle.position.z = spsPosition.z;
//       particle.velocity.x = (Math.random() - 0.5) * speed;
//       particle.velocity.y = Math.random() * speed;
//       particle.velocity.z = (Math.random() - 0.5) * speed;
//       var scale = Math.random() + 0.5;
//       particle.scale.x = scale;
//       particle.scale.y = scale;
//       particle.scale.z = scale;
//     particle.rotation.x = Math.random() * 3.5;
//     particle.rotation.y = Math.random() * 3.5;
//     particle.rotation.z = Math.random() * 3.5;
//       particle.color.r = Math.random() * 0.6 + 0.5;
//       particle.color.g = Math.random() * 0.6 + 0.5;
//       particle.color.b = Math.random() * 0.6 + 0.5;
//       particle.color.a = Math.random() * 0.6 + 0.5;
//     };
//     // recycle
//     SPS.recycleParticle = function(particle) {
//       particle.position.x = 0;
//       particle.position.y = 0;
//       particle.position.z = 0;
//       particle.velocity.x = (Math.random() - 0.5) * speed;
//       particle.velocity.y = Math.random() * speed;
//       particle.velocity.z = (Math.random() - 0.5) * speed;
//       var scale = Math.random() + 0.5;
//       particle.scale.x = scale;
//       particle.scale.y = scale;
//       particle.scale.z = scale;
//     particle.rotation.x = Math.random() * 3.5;
//     particle.rotation.y = Math.random() * 3.5;
//     particle.rotation.z = Math.random() * 3.5;
//       particle.color.r = Math.random() * 0.6 + 0.5;
//       particle.color.g = Math.random() * 0.6 + 0.5;
//       particle.color.b = Math.random() * 0.6 + 0.5;
//       particle.color.a = Math.random() * 0.6 + 0.5;
//     };

//     var jettisonParticle = function(particle) {
//       particle.position.y += 1;
//       particle.velocity.x = (Math.random() - 0.5) * speed;
//       particle.velocity.y = Math.random() * speed * 2;
//       particle.velocity.z = (Math.random() - 0.5) * speed;
//       var scale = Math.random() + 1.5;
//       particle.scale.x = scale;
//       particle.scale.y = scale;
//       particle.scale.z = scale;
//       particle.color.r = Math.random() * 0.6 + 0.5;
//       particle.color.g = Math.random() * 0.6 + 0.5;
//       particle.color.b = Math.random() * 0.6 + 0.5;
//       particle.color.a = Math.random() * 0.6 + 0.5;
//       particle.alive = 0;
//     };

//     SPS.updateParticle = function(particle) {  
//       // detect ground.
//       if (particle.alive && particle.position.y < 0) {
//         if (nx.orbyMesh && particle.intersectsMesh(nx.orbyMesh)) { 
//           jettisonParticle(particle);
//         }
//         return;
//       // } else if (particleFountainReady && !particle.alive){
//       // } else if (!particle.alive){
//         // particle.alive = 1;
//         // particleFountainReady = 0;
//       }
//       else if (!particle.alive && particle.hidden && spsFireAway){
//         particle.alive = 1;
//         particle.hidden = 0;
//         bugShotParticle(particle)
//         spsHidden.pop(particle);
//         if(!spsHidden.length){
//             spsFireAway=0;
//             debugger;
//         } //Reset ioncannon
//         return;
//       }

//       if(!particle.hidden){
//           particle.velocity.y += gravity;                         // apply gravity to y
//           (particle.position).addInPlace(particle.velocity);      // update particle new position
//           particle.position.y += speed / 2;

//           if(!particle.alive && particle.velocity.y < 0 ){  //detect apex jettison.
//              particle.position.y = 0;
//              particle.position.z = 0;
//              particle.position.x = 0;
//              particle.hidden = 1;
//              spsHidden.push(particle);
//              //TODO do not re calculate dead particles above particle.wait.
//              return;
//            }
//        }
//     };


//     // init all particle values and set them once to apply textures, colors, etc
//     SPS.initParticles();
//     SPS.setParticles();
     
//     // Tuning : plane particles facing, so billboard and no rotation computation
//     // colors not changing then, neither textures
//     SPS.billboard = true;
//     SPS.computeParticleRotation = false;
//     SPS.computeParticleColor = false;
//     SPS.computeParticleTexture = false;
    
//     // nx.scene.debugLayer.show();
//     nx.scene.registerBeforeRender(function() {
//         //TODO: stagger particle checks.
//         SPS.setParticles();
//     });



// }
//   /********************END-PARTICLE-FOUNTAIN***********************/







/************************************************JETTISON - PATICLE *****************************************/
//when collide with particle shoot it up into the sky.

// nx.anm.jettisionParticle = function(config){


//         debugger;
//         //-------------------------------------------------------------------------jettisonParticle-ANMLOOPZ-.Methodology
//         nx.scene.registerBeforeRender(function jettisonParticleLoopz() {

//             if(config.item && !config.item.init){
//                 config.item.init = 1;
//                 // debugger;
//                 //KEY-FRAME-ANIMATION-Y-POSITION
//               //Create a box
//                 // var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
//               // box1.position.x = -20;
//                 //Create an animation at 30 FPS
//                 var startingPOS = config.item.position, offset = 100; 
//                 var animationBox = new BABYLON.Animation("gemJettison", "position", 3, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
//                 // Animation keys
//                 var keys = [];
//                 keys.push({
//                     frame: 0,
//                     value: startingPOS
//                     // value: new BABYLON.Vector3(0, 0, 0)
//                 });

//                 // keys.push({
//                 //     frame: 20,
//                 //     value: new BABYLON.Vector3(5, 5, -5)
//                 // });
//                 keys.push({
//                     frame: 100,
//                     value: new BABYLON.Vector3(startingPOS.x, startingPOS.y+100, startingPOS.z)
//                 });

//                 animationBox.setKeys(keys);

//                 // box1.animations.push(animationBox);
//                 config.item.animations.push(animationBox);

// debugger;
//                 //params: tgt, from, to, loop, speed, end,...
//                 var anAnm = nx.scene.beginAnimation(config.item, 0, 100, false);
//                 anAnm.onEndAnimation = function(){
//                     // debugger;
//                     console.log('end jettision')
//                     if(config.done){config.done();}
//                 }
//                 // var anAnm = nx.scene.beginAnimation(config.item, 0, 100, true,1,function(){
//                     // debugger;
//                 // });
//                 // debugger;
//                 // anAnm.pause();

//                 // debugger;
//                 // Fountain's animation
//                 // var keys = [];
//                 // var animation = new BABYLON.Animation("animation", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
//                     // BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
//                 // // At the animation key 0, the value of scaling is "1"
//                 // keys.push({
//                 //     frame: 0,
//                 //     value: 0
//                 // });
//                 // // At the animation key 50, the value of scaling is "0.2"
//                 // keys.push({
//                 //     frame: 50,
//                 //     value: Math.PI
//                 // });
//                 // // At the animation key 100, the value of scaling is "1"
//                 // keys.push({
//                 //     frame: 100,
//                 //     value: 0
//                 // });
//                 // // Launch animation
//                 // animation.setKeys(keys);
//                 // fountainBox.animations.push(animation);





//             }
//             if(nx.orbyMesh.position.y < 1222){
//                 nx.scene.unregisterBeforeRender(jettisonParticleLoopz);
//                 //todo clean up other memory

//             } 
//         });


// }




// });