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


// .noselect {
//   -webkit-touch-callout: none;
//   -webkit-user-select: none;
//   -khtml-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }

// Life Without Principle
// By Henry David Thoreau
// 1863


// In my opinion, the sun was made to light worthier toil than this.

// Do not hire a man who does your work for money, but him who does it for love of it.

// If I should sell both my forenoons and afternoons to society, as most appear to do, I am sure that for me there would be nothing left worth living for. 

// There is no more fatal blunderer than he who consumes the greater part of his life getting his living.

// Do not ask how your bread is buttered; it will make you sick, if you do- and the like. A man had better starve at once than lose his innocence in the process of getting his bread.

// A little thought is sexton to all the world.

// We select granite for the underpinning of our houses and barns; we build fences of stone; but we do not ourselves rest on an underpinning of granitic truth, the lowest primitive rock.

// to permit idle rumors and incidents of the most insignificant kind to intrude on ground which should be sacred to thought. 

// Like the vanes of windmills, they caught the broad but shallow stream of sound, which, after a few titillating gyrations in their coggy brains, passed out the other side. I wondered if, when they got home, they were as careful to wash their ears as before their hands and faces. It has seemed to me, at such a time, that the auditors and the witnesses, the jury and the counsel, the judge and the criminal at the bar- if I may presume him guilty before he is convicted- were all equally criminal, and a thunderbolt might be expected to descend and consume them all together.

// The same ear is fitted to receive both communications. Only the character of the hearer determines to which it shall be open, and to which closed. I believe that the mind can be permanently profaned by the habit of attending to trivial things, so that all our thoughts shall be tinged with triviality. Our very intellect shall be macadamized, as it were- its foundation broken into fragments for the wheels of travel to roll over; and if you would know what will make the most durable pavement, surpassing rolled stones, spruce blocks, and asphaltum, you have only to look into some of our minds which have been subjected to this treatment so long.

// What is it to be born free and not to live free?


// George Orwell’s Six Rules For Great Writing
// How to write clearly and effectively
// Harry J. Stead
// Harry J. Stead
// Follow
// Aug 28, 2018 · 6 min read
// “But if thought corrupts language, language can also corrupt thought.”
// George Orwell
// Winston Smith is a fictional character and the protagonist of George Orwell’s 1949 novel ‘Nineteen Eighty-Four’. He works at the Records section in the Ministry of Truth where he updates Big Brother’s orders and Party records so that they match new developments. He helps correct the flow of history to ensure that Big Brother is never seen to be mistaken. Big Brother can on no occasion be wrong and Winston is just one of thousands who work to correct the past in order to keep the people ignorant of their history.
// “The most effective way to destroy people is to deny and obliterate their own understanding of their history.”
// ― George Orwell
// In Chapter five, Winston has lunch with a man named Syme, an intelligent Party member who works on a revised dictionary of Newspeak, a controlled language, of restricted grammar and vocabulary, meant to limit freedom of thought. Syme says to Winston that the purpose of Newspeak is to narrow the range of thought possible in order to make thoughtcrime, a crime against the state, impossible.
// There should exist no words that are capable of communicating independent, rebellious thoughts. Because if you are able to numb the language, you in turn numb the mind. Thought corrupts language, so language must also be able to corrupt thought.
// “If people cannot write well, they cannot think well, and if they cannot think well, others will do their thinking for them.”
// It is impossible to conceive of rebellion if there are no meaningful words to illustrate such a cause. And so, Big Brother sought to continually diminish the available vocabulary until comprehensive thoughts are reduced to meek terms of simplistic meaning.
// …
// ‘Politics and the English Language’ was published just a couple of months before the publication of ‘Nineteen Eighty-Four’. This essay provides great insight into Orwell’s fears surrounding the declining state of language in the English speaking world, fears he expressed so boldly in ‘Nineteen Eighty-Four’.
// I first came across George Orwell’s essay ‘Politics and the English Language’ many years ago and I have tried to use it as a guide for my writing, referring back to it every so often when I fear I am losing my way.
// The essay opens with, “Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.” Orwell, in his usual calm and measured way, shares his thoughts on how the modern writer could help to improve the general state of language. He lists six rules for writing that he believes will aid the fight against restrictive language:
// “(i) Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.
// (ii) Never use a long word where a short one will do.
// (iii) If it is possible to cut a word out, always cut it out.
// (iv) Never use the passive where you can use the active.
// (v) Never use a foreign phrase, a scientific word, or a jargon word if you can think of an everyday English equivalent.
// (vi) Break any of these rules sooner than say anything outright barbarous.”
// Notice the words ‘never’ and ‘always’, suggesting these rules are absolute and must never be broken. But, Orwell himself did not obey them. ‘Politics and the English Language’ is riddled with the passive voice and many unnecessary words. The listed rules are an impossible standard, but Orwell knew this himself.
// The point of the essay was not to introduce a list of strict commandments, but to encourage the writer to think about how and why they are using words. The writer should be constantly questioning whether the words they write are clear and worthwhile. For the purpose of language is for expression, rather than concealment from one’s truth.
// “A scrupulous writer, in every sentence that he writes, will ask himself at least four questions, thus:
// 1. What am I trying to say?
// 2. What words will express it?
// 3. What image or idiom will make it clearer?
// 4. Is this image fresh enough to have an effect?
// And he will probably ask himself two more:
// 1. Could I put it more shortly?
// 2. Have I said anything that is avoidably ugly?”
// Every word Orwell wrote, particularly in the late 1930s and 40s, was used as a weapon against the wicked force of his age, namely totalitarianism. This was his life’s purpose — to defend language from those who wish to ‘make lies sound truthful and murder respectable’.

// Language in Britain, Orwell wrote, was sloppy because the people’s thoughts were sloppy. The First World War left Britain in a state of shell shock, amnesia, and hopelessness. The British thought their nation to be decadent and rotten, an empty shadow of its former self. What was once a proud and upright culture was now hunched over a bayonet. It was supposed that the English language must follow also.
// But, Orwell did not believe this to be so. Language, Orwell wrote, is not a natural growth that is bound by the conditions of the time. Instead, it is an instrument that we are able to use for our own purposes.
// “A man may drink because he feels himself to be a failure, and then fail all the more so because he drinks.”
// The bad habits caused by our foolish thoughts can be removed, producing purer thoughts and, in turn, purer language. Orwell argued that the decline of the English language is reversible only if we are aware of our corrupt ways. Orwell’s six rules demand the writer to be aware of their crooked sentences because they highlight the habits that prevent clear thought.
// He continues his argument by laying out a couple of examples. Here is a comparison between good English and bad English:
// “I returned and saw under the sun, that the race is not to the swift, nor the battle to the strong, neither yet bread to the wise, nor yet riches to men of understanding, nor yet favour to men of skill; but time and chance happeneth to them all.”
// This passage uses compressed, short, Anglo-Saxon words that everyone can understand. It is a slightly dated example, but the meaning and the intention remains clear. The images the passage portrays are vivid, they allow the mind clear pictures of the author’s thoughts and purpose.
// “Objective considerations of contemporary phenomena compel the conclusion that success or failure in competitive activities exhibits no tendency to be commensurate with innate capacity, but that a considerable element of the unpredictable must invariably be taken into account.”
// Orwell himself admits this example to be an exaggeration. Yet, there is truth in hyperbole and it is often necessary when trying to express an idea so that others may understand. Each word here is hazy and thoughtless; there is a lack of exactness, no word is concrete, everything is abstract. The sentence avoids emotion and appears to be a confusion of scientific, technical, ready-made words that have been thrown together to create the allure of knowledge.
// The quality between the two is clear. The first example lets the meaning of the picture choose the word, whereas the second example picks words from their sight and how easily they can be put together.
// “In prose, the worst thing you can do with words is to surrender them.”
// …
// Language can cause people to cry, cheer, blush, it can sing songs, tell stories, speak the truth and teach lessons. Language can hum rhyming poetry, drift with rhythm and dance with lights and sounds. It is a beautiful gift — a gift many of us are unaware of.
// Language is powerful for it allows man to express their own story and truth to the world, but with such a gift comes a duty that we must be mindful of. This recognition is crucial if we are to avoid the horror of ‘Nineteen-Eighty Four’.
// Orwell was encouraging writers to be clear, communicative, simple, strong and purposeful. Obscure, complicated, scientific, hollow and senseless writing betrays the greatest power that God has given to us.
// “The great enemy of clear language is insincerity. When there is a gap between one’s real and one’s declared aims, one turns as it were instinctively to long words and exhausted idioms, like a cuttlefish spurting out ink.”
// ― George Orwell, Politics and the English Language
// Thank you for reading.
// Harry J. Stead



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