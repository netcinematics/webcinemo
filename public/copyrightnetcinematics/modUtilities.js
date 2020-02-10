/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('utilities module-loaded')
debugger;
if(!nx){nx={}}
/******************************-LOCALVARZ-**********************************/
// if(!nx.sub){nx.sub={}}
// nx.sub = {num0:0,num1:0} 
/******************************-MODULE-**********************************/

/****************************UTILITIES**************************************\

function fibFactory(fib){ //EXAMPLE: fibFactory({lastNum,thisNum})//1,2,3,5,8
    var nextFib = fib.lastFib + fib.thisFib + fib.curveNoise;
    return {thisFib:nextFib,lastFib:fib.thisFib,curveNoise:fib.curveNoise,fibLength:fib.fibLength};
} 

/************************************************************\
//boxodology - HOW-TO-BUILD-A-HALFPIPE-.
Starting PG: babylon Halfpipe
- The Extrude was the easy part.
- The CustomExtrude is what solves ROLL complexities - with a rotationFunction.
- But that is only the beginning of it. Below we will look at INDEXES,  
 - NOTES FOR CREATING COMPLEX CHAINS of CURVES & SPIRALS
 - It is not easy to curve many different spirals together cleanly
 - you have to be precise. And there is an order that the curves must go
 - in order to twist together cleanly - in all dimensions-. It is not easy.
TIPS:
 - COMPONETIZE: Use Coments to separate curves and curve components, and use 
 - GOOD NAMING CONVENTION (not px, ys, at, vr, bd) We need to be more expressive 
 - which path goes to which curve, etc. Very important for orientation. Pts.
 - SPLICES and INDEXES: every number is a lever of variation. Name them Idx.
 - Example are splices which can CROP a curve from TOP and BOTTOM.
 - That Splice then can help you get any curve variation easily, by changing IDX's. 
 - With percentages to see how much of full curve is being spliced off.
 - ALIGNMENT - there are "continuation" tricks. I think of it as - 
 - a bunch of things hanging from strings. Like a PUPPET-.
 - ROTATE-BANKS by PERCENTAGES in rotationFunction() 
 - SNAP-POINT is where one curve "hangs" on another.
 - Over/Under Numbers - find precise points manually if not mathematically.
 - AXIS & INDEX - knowing and naming clearly every axis, makes it easy to manipulate.
 - So I take a few iterations - to PROVE, AXIS and INDEX accross the many dimensions:
 - PTS, PATH, CURVE, EXTRUDE, QUATS, and VECTOR. 
 - And SEQUENTIALLY roll COMPONENTS forward that become easier to anmimate as anms.
 - SEAMLESS. it is possible to make a really cool halfpipe on a mountain.
\************************************************************





  //jquery animation sequences.
  //x.slideUp(300); x.slideDown(3000);
  //x.fadeOut(300); x.fadeIn(3000);
  //x.hide(300); x.show(3000);

                          $({'alpha':0}). //------------------------------------------------------ANM: ORBYPOS-.
                        animate({'alpha':1},{queue:false,duration:10000,easing:'swing',
                        step: function(now) { 
                            nx.spacepadmaterial.alpha = this.alpha;
                        }, complete:function(){
                            console.log('endfadein')
                            } //NEXT-SUB-SEQUENCE-. 
                        });
             

//LOCAL_POSITION to WORLD_POSITION
// nx.testPlane.computeWorldMatrix();
// var matrix = nx.testPlane.getWorldMatrix();
// var global_position = BABYLON.Vector3.TransformCoordinates(pivotPt, matrix);


//WORLD_POSITION TO-LOCAL_POSITION on MasterBox
var invertParentWorldMatrix = nx.editMasterBox.getWorldMatrix().clone();
invertParentWorldMatrix.invert();   
var local_position = BABYLON.Vector3.TransformCoordinates(aPath[i], invertParentWorldMatrix);
local_position.y+=5;
editNode.position.copyFrom(local_position);


        var aBALL = BABYLON.Mesh.CreateSphere("aBALL", 4, 13, nx.scene);
        aBALL.position = new BABYLON.Vector3(50,5,50)
        aBALL.visibility = 0.5

var aBOX = BABYLON.MeshBuilder.CreateBox("aBox", {height: 210, width:110, depth:600 }, this.scene);

bv3 = function (x, y, z) {
    return new BABYLON.Vector3(x,y,z);
}
rv3 = function (x, y, z) {
    return new BABYLON.Vector3(Math.PI/x,Math.PI/y,Math.PI/z);
}
cv3 = function (r,g,b) {
    return new BABYLON.Color3(r,g,b);
}

        // visualisation
        var aLine = BABYLON.Mesh.CreateLines('aline', aPath, nx.scene);
        // for(var p = 0; p < curve.length; p++) {
        //     var tg = BABYLON.Mesh.CreateLines('tg', [ curve[p], curve[p].add(tangents[p]) ], nx.scene);
        //     tg.color = BABYLON.Color3.Red();
        //     var no = BABYLON.Mesh.CreateLines('no', [ curve[p], curve[p].add(normals[p]) ], nx.scene);
        //     no.color = BABYLON.Color3.Blue();
        //     var bi = BABYLON.Mesh.CreateLines('bi', [ curve[p], curve[p].add(binormals[p]) ], nx.scene);
        //     bi.color = BABYLON.Color3.Green();
        // }



            /*********************************DISPLAY-MESH-AXIS******************************

            var displayMeshAxis = function (mesh, dispose) {
                mesh.computeWorldMatrix();


                var matrix = mesh.getWorldMatrix();
                var origin = mesh.position;
                // find existing axis for this box and dispose
                var xAxis = scene.getMeshByName("xAxis"+mesh.name);
                var yAxis = scene.getMeshByName("yAxis"+mesh.name);
                var zAxis = scene.getMeshByName("zAxis"+mesh.name);
                if (xAxis!=null){ xAxis.dispose();}
                if (yAxis!=null){ yAxis.dispose();}
                if (zAxis!=null){ zAxis.dispose();}
                //dispose-only
                if(dispose){  return; }
                // calculate new normals for this mesh in world coordinate system
                var xNormal=BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(100,0,0),matrix);
                var yNormal=BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0,100,0),matrix);
                var zNormal=BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0,0,-100),matrix);
                // create axis lines
                xAxis = BABYLON.Mesh.CreateDashedLines("xAxis"+mesh.name, [origin, xNormal],3,10,200, scene, false);
                xAxis.color = BABYLON.Color3.Red();
                yAxis = BABYLON.Mesh.CreateDashedLines("yAxis"+mesh.name, [origin, yNormal],3,10,200, scene, false);
                yAxis.color = BABYLON.Color3.Green();
                zAxis = BABYLON.Mesh.CreateDashedLines("zAxis"+mesh.name, [origin, zNormal],3,10,200, scene, false);
                zAxis.color = BABYLON.Color3.Blue();
            }


//CATERPILLAR - BOX!
            <style>
              #caterpillarFrame{display:flex;border:1px solid steelblue;}
              #caterpillarFrame article{display:flex;border:1px solid steelblue;}

            </style>

            <section id=caterpillarFrame>
              <article>1</article>
              <article>2</article>
              <article>3</article>
              <article>4</article>
              <article>5</article>
            </section><!--end caterpilar frame-->



//COOL QUEST ICONS
<article id="lvlTitleTXT" style="display:flex;flex-direction:row;justify-content:center;flex-wrap: wrap;">
<i class="fa fa-atom"></i> &nbsp;&nbsp; 
<i class="fa fa-chess-rook"></i> &nbsp;&nbsp;  
<i class="fa fa-shield-alt"></i>  &nbsp;&nbsp; 
<i class="fa fa-moon"></i>  &nbsp;&nbsp;  <i class="fa fa-skull"></i>  &nbsp;&nbsp;  <i class="fa fa-sun"></i>  &nbsp;&nbsp;  <i class="fa fa-fire"></i>  &nbsp;&nbsp;  <i class="fa fa-meteor"></i>  &nbsp;&nbsp;  <i class="fa fa-dungeon"></i>   &nbsp;&nbsp;  <i class="fa fa-dragon"></i>  &nbsp;&nbsp;  <i class="fa fa-dice-d20"></i>  &nbsp;&nbsp;  <i class="fa fa-book-dead"></i>  &nbsp;&nbsp;  <i class="fa fa-biohazard"></i>    &nbsp;&nbsp;  <i class="fa fa-award"></i>  &nbsp;&nbsp;  <i class="fa fa-hourglass-half"></i>  &nbsp;&nbsp;  <i class="fa fa-medal"></i>  &nbsp;&nbsp;</article>



        $({cr:0,cb:1}).animate({cr:1,cb:0},{queue:false,duration:4444*nx.RUNTIME,easing:'swing',
            step:function(now) { //EYE COLOR
               if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
                nx.darkBot.botEyeColor1.emissiveColor = new BABYLON.Color3(this.cr, 0, this.cb);
            },complete:function(){ }
        });


        //ANM: color darkbot eyes from blue to red
        // nx.darkBot.botEyeColor1.emissiveColor = nx.darkBot.redMat;
        // nx.darkBot.botEyeColor1.emissiveColor = nx.darkBot.blueMat;

setTimeout(function(){

        $({cr:0,cb:1})
        .animate({cr:1,cb:0}
        ,{queue:false,duration:4444*nx.RUNTIME,easing:'swing',
            step:function(now) { //EYE COLOR
               if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
                nx.darkBot.botEyeColor1.emissiveColor = new BABYLON.Color3(this.cr, 0, this.cb);
            },complete:function(){
            }
        });
    },4000)



        nx.greenMat = new BABYLON.StandardMaterial("green1", nx.scene);
        nx.greenMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

        nx.redMat = new BABYLON.StandardMaterial("red1", nx.scene);
        nx.redMat.diffuseColor = new BABYLON.Color3(1, 0, 0);

        nx.blueMat = new BABYLON.StandardMaterial("blue1", nx.scene);
        nx.blueMat.diffuseColor = new BABYLON.Color3(0, 0, 1);


PROBLEM - many variation to MOVEMENT in 3DSPACE and EDITING like transform rotation scale.

NEW-SOLUTION:  10-KEY-3D-EDITING

Yes! Get on the TRAIN!!!

Reduce the editing - movements transitions rotations into MODES. 

And reduce the MODES. Into the 16 available KEY COMMANDS on the 10 KEY keybaord.

What? Ten-key only for accountants? Nah!


Smoothing Filter:
{
    const AVG_RANGE = 3;
    var temp = [];
    var buf = BABYLON.Vector3.Zero();
    var count;
    for (var idx = 0; idx < aPath.length; idx++) {
        buf.scaleInPlace(0.0);
        count = 0;

        for (var innerIdx = Math.max(0, idx - AVG_RANGE); innerIdx < Math.min(idx + AVG_RANGE + 1, aPath.length); innerIdx++) {
            buf.addInPlace(aPath[innerIdx]);
            count++;
        }
        buf.scaleInPlace(1.0 / count);

        temp.push(buf.clone());
    }
    aPath = temp;
}


function showPath3D(path3d, size, sc)
{
    size = size || 0.5;
    sc = sc || scene;
    var curve = path3d.getCurve();
    var tgts = path3d.getTangents();
    var norms = path3d.getNormals();
    var binorms = path3d.getBinormals();
    var vcTgt, vcNorm, vcBinorm;
    var line = BABYLON.Mesh.CreateLines("curve", curve, sc);
    for (var i = 0; i < curve.length; i++)
    {
        vcTgt = BABYLON.Mesh.CreateLines("tgt"+i, [curve[i], curve[i].add(tgts[i].scale(size))], sc);
        vcNorm = BABYLON.Mesh.CreateLines("norm"+i, [curve[i], curve[i].add(norms[i].scale(size))], sc);
        vcBinorm = BABYLON.Mesh.CreateLines("binorm"+i, [curve[i], curve[i].add(binorms[i].scale(size))], sc);
        vcTgt.color = BABYLON.Color3.Red();
        vcNorm.color = BABYLON.Color3.Green();
        vcBinorm.color = BABYLON.Color3.Blue();
    }
}

showPath3D(nx.puppetPipe.path3D,1, nx.scene)



setInterval(function() {
let activeEnemies = 0;
game.enemies.forEach(function(enemy) {
if(enemy.isDeath) {
return;
}

        let isActiveMesh = gameCamera.isInFrustum(enemy.mesh);
        if(isActiveMesh) {
            activeEnemies = 1;
        }

        if(!enemy.animation && isActiveMesh) {
            enemy.runAnimationStand();
        } else if(enemy.animation && !isActiveMesh) {
            enemy.animation.stop();
            enemy.animation = null;
        }
    });
}, 1000);


    //SIMPLE-INTERPOLATOR-.

    // $({x:0}).animate({x:100},{duration:5000, queue:false,step:function(){console.log('X'+this.x)},complete(){console.log('FX')}});
    // setTimeout(function(){
    //     $({y:0}).animate({y:100},{duration:5000, queue:false,step:function(){console.log('Y'+this.y)},complete(){console.log('FY')}});//.dequeue('selector-animationx');
    // },1000)


    //SIMPLE-TRACER-SPHERE
    // var traceSphere = BABYLON.Mesh.CreateSphere("sphere", 3, 8 , nx.scene); 
// traceSphere.position = new BABYLON.Vector3(global_position.x, global_position.y, global_position.z); 


var firstPosition=camera.position.x.toFixed(2)+"/"+camera.position.z.toFixed(2)+"/"+camera.rotation.x.toFixed(2)+"/"+camera.rotation.y.toFixed(2)+"/"+camera.rotation.z.toFixed(2);
  

//SIMPLE SIN WAVE:
        // {x: -570.4659825505265, y: -50.38953692708737, z: 655.2195560468573}
        // var aPath = [];
        // for (var i = 0; i < 30; i++) {
        //     aPath.push( new BABYLON.Vector3(-570-i-10, Math.sin(i / 10), i+655+10) );
        // }


//SCENE clear color
 scene.clearColor = new BABYLON.Color3(.33,.44,.55);



   //Sand  and Blue Shader
    var mat = new BABYLON.CustomMaterial("a1",scene)
    mat.diffuseTexture = new BABYLON.Texture("/textures/sand.jpg",scene);
    mat.Fragment_Definitions('varying vec3 lPos;');
    mat.Vertex_Definitions('varying vec3 lPos;');
    mat.Vertex_Before_PositionUpdated('lPos = positionUpdated ;')
    mat.Fragment_Custom_Diffuse('if( lPos.z  > 0.){ result = vec3(0.,0.,1. ); }');





var myMaterial = new BABYLON.StandardMaterial("myMaterial", nx.scene);
myMaterial.diffuseTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
myMaterial.specularTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
myMaterial.emissiveTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
myMaterial.ambientTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
nx.sqPyramid1.material = myMaterial;


//preventdefault on right click-.
    // canvas.oncontextmenu = function (e) {e.preventDefault();};


//POINTERDOWN

    // var pickedPoints = []
    // nx.scene.onPointerObservable.add(evt => {
    //     if (evt && evt.pickInfo && evt.pickInfo.hit && evt.pickInfo.pickedMesh.name === 'ground1') {
            
    //         if (pickedPoints.length !== 0 && pickedPoints.length % 3 === 0) {
    //             let shape = [evt.pickInfo.pickedPoint]
    //             pickedPoints.forEach(p => {
    //                 shape.push(p.position.clone())
    //                 p.dispose();
    //             })
    //             shape.push(evt.pickInfo.pickedPoint)
    //             pickedPoints = []

    //             var polygon = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {
    //                 shape:shape,
    //                 paths: [
    //                     new BABYLON.Vector3(0, 0, 0),
    //                     new BABYLON.Vector3(0, 0, 0.5)
    //                 ],
    //                 depth: 0.5,
    //                 sideOrientation: BABYLON.Mesh.DOUBLESIDE
    //             }, nx.scene);
    //             polygon.position.y += 0.5001

    //             // shadowGenerator.addShadowCaster(polygon)
    //         } else {
    //             var pickedPoint = BABYLON.Mesh.CreateSphere("sphere", 16, 0.5, nx.scene); 
    //             pickedPoint.position = evt.pickInfo.pickedPoint
    //             pickedPoints.push(pickedPoint)
    //         }
    //     }
    // }, BABYLON.PointerEventTypes.POINTERDOWN);

//Another PointerDown
    // var onPointerDown = function (event) {
    //     if (event.button == 0 || event.button == 2) {
    //         mouseButton = event.button
    //         // camera.detachControl(nx.canvas);
    //         nx.scene.activeCamera.detachControl(nx.canvas);
    //         mousePosition.x = nx.scene.pointerX;
    //         mousePosition.y = nx.scene.pointerY;
    //     }
    // };
    
    // var onPointerMove = function (event) {
    //     if (mouseButton != -1) {
    //         mousePosition.x = nx.scene.pointerX;
    //         mousePosition.y = nx.scene.pointerY;
    //     }
    // };
    
    // var onPointerUp = function (event) {
    //     if (mouseButton != -1) {
    //         mouseButton = -1;
    //         // camera.attachControl(nx.canvas, true, true);
    //         nx.scene.activeCamera.attachControl(nx.canvas, true, true);
    //     }
    // };
    
    // nx.canvas.addEventListener("pointerdown", onPointerDown, false);
    // nx.canvas.addEventListener("pointermove", onPointerMove, false);
    // nx.canvas.addEventListener("pointerup", onPointerUp, false);


//EXTRUDE BY PICK 4 POINTS:



    // var pickedPoints = []
    // nx.scene.onPointerObservable.add(evt => {
    //     if (evt && evt.pickInfo && evt.pickInfo.hit && evt.pickInfo.pickedMesh.name === 'ground1') {
            
    //         if (pickedPoints.length !== 0 && pickedPoints.length % 3 === 0) {
    //             let shape = [evt.pickInfo.pickedPoint]
    //             pickedPoints.forEach(p => {
    //                 shape.push(p.position.clone())
    //                 p.dispose();
    //             })
    //             shape.push(evt.pickInfo.pickedPoint)
    //             pickedPoints = []

    //             var polygon = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {
    //                 shape:shape,
    //                 paths: [
    //                     new BABYLON.Vector3(0, 0, 0),
    //                     new BABYLON.Vector3(0, 0, 0.5)
    //                 ],
    //                 depth: 0.5,
    //                 sideOrientation: BABYLON.Mesh.DOUBLESIDE
    //             }, nx.scene);
    //             polygon.position.y += 0.5001

    //             // shadowGenerator.addShadowCaster(polygon)
    //         } else {
    //             var pickedPoint = BABYLON.Mesh.CreateSphere("sphere", 16, 0.5, nx.scene); 
    //             pickedPoint.position = evt.pickInfo.pickedPoint
    //             pickedPoints.push(pickedPoint)
    //         }
    //     }
    // }, BABYLON.PointerEventTypes.POINTERDOWN);



    // var color =  new BABYLON.Color3(.44,0,.44); // main color
    // var color2 = new BABYLON.Color3(1,1,0); // highlightColor
    // var hl = new BABYLON.HighlightLayer('hl', nx.scene);
        // hl.addMesh(pyramid, (color2 ? color2 : BABYLON.Color3.Green()));


\*****************************NOTES*************************************/


//***********************************MOBILE: Is device touchy?**********************************/
// var touchcapable = 'ontouchstart' in window ||
//  window.DocumentTouch && document instanceof window.DocumentTouch ||
//  navigator.maxTouchPoints > 0 ||
//  window.navigator.msMaxTouchPoints > 0;

//  if(touchcapable) console.log('touch capable');
//  if(!touchcapable) console.log('not touch capable');

//   //MOBILE: hide address bar on mobile. experimental.
//   window.addEventListener("load",function() {
//     setTimeout(function(){
//       window.scrollTo(0, 1);
//     }, 0);
//   });
/***************************************END-MOBILE***********************************************/

//Animation Factory
// nx.explosionFactory = function( factory ){
//     if(factory==='firstBOOM'){
//        //ANM
//     } else if(factory==='secondBOOM'){
//        //ANM
//     } else if(factory==='thirdBOOM') {
//        //ANM
//     }
// }


//Nice CAMZOOM-. anmethodology-.
                            // nx.scene.activeCamera.position.copyFrom({x: -19.103314840263586, y: 264.64162065035487, z: 17.498424079953157}); //last look darbot
                            // nx.scene.activeCamera.setTarget(nx.BV32({x: 9.701396307371585, y: 262.0478740155844, z: -12.954317703010812})) //CAMZOOM: 
                            // $({cx:nx.scene.activeCamera.position.x,cy:nx.scene.activeCamera.position.y,cz:nx.scene.activeCamera.position.z})
                            // .animate({cx:4.96,cy:262.4,cz:-7.94}
                            // ,{queue:false,duration:3000*nx.RUNTIME,easing:'swing',
                            //     step:function(now) { //CAM POS
                            //        if(nx.cinemaStop){ $(this).stop(); console.log('stopped'); nx.spaceSeqIdx[0]={on:1}; return;}//CINEMA-STOP-.
                            //         nx.scene.activeCamera.position.x = this.cx;
                            //         nx.scene.activeCamera.position.y = this.cy;
                            //         nx.scene.activeCamera.position.z = this.cz;
                            //         // nx.scene.activeCamera.setTarget(nx.BV32({x: 23.5, y: 265.6, z: -28.6})) //CAMTGT: 
                            //     },complete:function(){}
                            // });



// .noselect {
//   -webkit-touch-callout: none;
//   -webkit-user-select: none;
//   -khtml-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }



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