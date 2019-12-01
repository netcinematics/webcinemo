/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('a pyramid module-loaded')
// debugger;
if(!nx){nx={}}

nx.pyramid = {}
nx.pyramid.mesh = {}
// nx.module = {};

// var createPyramidA = function() {
//     var color =  new BABYLON.Color3(.5,0,.5); // main color
//     var color2 = new BABYLON.Color3(1,1,0); // highlightColor
//     var size = 2, ht = 5, td = 3.001, bd = 10, sides = 5;
//     var hl = new BABYLON.HighlightLayer('hl', nx.scene);
//     var pyramid = BABYLON.Mesh.CreateCylinder('pyramid', ht, td, bd, sides, 0, nx.scene);
//     pyramid.material = new BABYLON.StandardMaterial('cmat', nx.scene);
//     pyramid.position = new BABYLON.Vector3(30, 5, 0);
//     pyramid.scaling = new BABYLON.Vector3(size, size, size);
//     pyramid.material.diffuseColor = color;

//     // playgroundItems.push(pyramid);
//     if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(pyramid);} //collisions-.

//     hl.addMesh(pyramid, (color2 ? color2 : BABYLON.Color3.Green()));
// }

// createPyramidA();



/*********************************************-PYRAMID-******************************************/
var createCenterPyramid = function(){
    nx.pyramid.mesh = BABYLON.MeshBuilder.CreateCylinder('pyramid', {diameterTop:1,diameterBottom:18,height:7.5,tessellation:4}, nx.scene);
    // nx.pyramid.mesh = BABYLON.MeshBuilder.CreateCylinder('pyramid', {diameterTop:1,diameterBottom:16,height:7.5,tessellation:4}, nx.scene);
    // nx.pyramid = BABYLON.MeshBuilder.CreateCylinder('pyramid', {diameterTop:3,diameterBottom:15,height:5,tessellation:4}, nx.scene);
    // nx.pyramid.position = new BABYLON.Vector3(0, 4, 0);
    // nx.pyramid.position = new BABYLON.Vector3(-200, 111, 200);
    nx.pyramid.mesh.position = new BABYLON.Vector3(0, 111, 0);
    nx.pyramid.mesh.scaling = new BABYLON.Vector3(nx.globalScale*44, nx.globalScale*44, nx.globalScale*44);
    nx.pyramid.mat = new BABYLON.StandardMaterial("pyramidMat", nx.scene);
    nx.pyramid.mat.specularColor = new BABYLON.Color3(0, 0, 0.22);
    nx.pyramid.mat.diffuseTexture = new BABYLON.Texture("./textures/dirt.jpg", nx.scene);
    nx.pyramid.mesh.material = nx.pyramid.mat;

    // mat.specularTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    // mat.emissiveTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    // mat.ambientTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    // nx.pyramid.parent = nx.ground;
    // nx.anmz.orby.collisionItems.push(nx.pyramid);
    // var color =  new BABYLON.Color3(.44,0,.44); // main color
    // var color2 = new BABYLON.Color3(1,1,0); // highlightColor
    // var hl = new BABYLON.HighlightLayer('hl', nx.scene);
        // hl.addMesh(pyramid, (color2 ? color2 : BABYLON.Color3.Green()));

    // }
    // nx.pyramid.createWatchTower();
    nx.pyramid.createSpaceTower();

    nx.pyramid.addWall1();
    nx.pyramid.addWall2();
    nx.pyramid.addCorner1();
    nx.pyramid.addCorner2();
    nx.pyramid.addCorner3();
    nx.pyramid.addCorner4();

}

nx.pyramid.createSpaceTower = function(){
    // var windowCut1 = BABYLON.MeshBuilder.CreateBox("box", {height:5,width:20,depth:80}, nx.scene);
    // var windowCut1 = BABYLON.MeshBuilder.CreateBox("box", {height:10,width:20,depth:80}, nx.scene);
    var windowCut1 = BABYLON.MeshBuilder.CreateBox("box", {height:12,width:20,depth:80}, nx.scene);
    windowCut1.position.y = 265;//267; //268
    windowCut1.rotation.y = -0.8
    var aLookout1 = BABYLON.CSG.FromMesh(windowCut1); 
    var aTop1 = BABYLON.CSG.FromMesh(nx.pyramid.mesh);
    var aLookoutTop1 = aTop1.subtract(aLookout1);
    nx.pyramid.mesh.dispose();
    windowCut1.dispose();


    // var windowCut2 = BABYLON.MeshBuilder.CreateBox("box", {height:5,width:20,depth:80}, nx.scene);
    // var windowCut2 = BABYLON.MeshBuilder.CreateBox("box", {height:10,width:20,depth:80}, nx.scene);
    var windowCut2 = BABYLON.MeshBuilder.CreateBox("box", {height:14,width:20,depth:80}, nx.scene);
    windowCut2.position.y = 265;//267; //268
    windowCut2.rotation.y = 0.8
    var topPyramid2 = aLookoutTop1.toMesh("csg1", nx.pyramid.mat, nx.scene);
    var aLookout2 = BABYLON.CSG.FromMesh(windowCut2); 
    var aTop2 = BABYLON.CSG.FromMesh(topPyramid2);
    var aLookoutTop2 = aTop2.subtract(aLookout2);
    topPyramid2.dispose();
    windowCut2.dispose();

    // var floorCut3 = BABYLON.MeshBuilder.CreateBox("box", {height:5,width:20,depth:20}, nx.scene);
    // floorCut3.position.y = 264
    // floorCut3.rotation.y = 0.8
    // var topPyramid3 = aLookoutTop2.toMesh("csg2", nx.pyramid.mat, nx.scene);
    // var aLookout3 = BABYLON.CSG.FromMesh(floorCut3); 
    // var aTop3 = BABYLON.CSG.FromMesh(topPyramid3);
    // var aLookoutTop3 = aTop3.subtract(aLookout3);
    // topPyramid3.dispose();
    // floorCut3.dispose();
    ///////////////
    // nx.towertop = aLookoutTop3.toMesh("csg3", nx.pyramid.mat, nx.scene);
    nx.towertop = aLookoutTop2.toMesh("csg3", nx.pyramid.mat, nx.scene);
    // nx.towertop.parent = nx.ground;
    //////////////////
    nx.towercompassTop = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 70, diameterBottom: 60, tessellation: 8, height: 10}, nx.scene);
    nx.towercompassTop.position.copyFrom({x: 0, y: 255.5, z: 0})
    nx.towercompassTop.receiveShadows = true;
    nx.towercompassTop.material = nx.pyramid.mat;

    //TODO: this line had a random orby undefined error
    nx.anmz.orby.collisionItems.push(nx.towercompassTop);

    nx.towercompassMid = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 60, diameterBottom: 70, tessellation: 8, height: 4}, nx.scene);
    nx.towercompassMid.position.copyFrom({x: 0, y: 258, z: 0})
    nx.towercompassMid.material = nx.pyramid.mat;

    nx.towercompassBtm = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 70, diameterBottom: 60, tessellation: 8, height: 5}, nx.scene);
    nx.towercompassBtm.position.copyFrom({x: 0, y: 253.5, z: 0})
    nx.towercompassBtm.material = nx.pyramid.mat;

    // nx.towercompass3 = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 60, diameterBottom: 70, tessellation: 8, height: 5}, nx.scene);
    // nx.towercompass3.position.copyFrom({x: -350, y: 3, z: 330})
    // nx.towercompass3.material = nx.pyramid.mat;
    // nx.anmz.orby.collisionItems.push(nx.towercompass3);

    // nx.towercompass4 = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 70, diameterBottom: 60, tessellation: 8, height: 5}, nx.scene);
    // nx.towercompass4.position.copyFrom({x: -330, y: 3.2, z: 300})
    // nx.towercompass4.material = nx.pyramid.mat;
    // nx.anmz.orby.collisionItems.push(nx.towercompass4);



// return;

    var aTunnel = BABYLON.MeshBuilder.CreateBox("box", {height:30,width:50,depth:150}, nx.scene);
    // var aTunnel = BABYLON.MeshBuilder.CreateBox("box", {height:30,width:40,depth:150}, nx.scene);
    // var b = BABYLON.Mesh.CreateBox("box", 50, nx.scene);
    aTunnel.position.y += 235;//229.5; //235
    aTunnel.rotation.y -= Math.PI/4;

    var aCSG = BABYLON.CSG.FromMesh(aTunnel);
    var bCSG = BABYLON.CSG.FromMesh(nx.towertop);

    var subCSG = bCSG.subtract(aCSG);
    // var subCSG = bCSG.subtract(aCSG);

    aTunnel.dispose();
    nx.towertop.dispose();

    var aColumn = BABYLON.MeshBuilder.CreateCylinder('doorframe', {height:60, diameter:85, tesselation:10}, nx.scene);
    // var aColumn = BABYLON.MeshBuilder.CreateCylinder('doorframe', {height:40, diameter:60, tesselation:10}, nx.scene);
    // var aColumn = BABYLON.MeshBuilder.CreateCylinder('doorframe', {height:80, diameter:80, tesselation:10}, nx.scene);
    aColumn.position.y += 190; //234;
    var columnCSG = BABYLON.CSG.FromMesh(aColumn);
    var pyramidCSG = subCSG.subtract(columnCSG);
    aColumn.dispose();

    nx.pyramid.aSpaceDoor = BABYLON.MeshBuilder.CreateCylinder('spacedoor', {height:60, diameter:85, tesselation:10}, nx.scene);
    nx.pyramid.aSpaceDoor.material = nx.mats['lightMetal'];
    nx.pyramid.aSpaceDoor.position.y += 190.5; //234;
    nx.pyramid.aSpaceDoor.parent = nx.ground;
    nx.pyramid.aSpaceDoor.receiveShadows = true;
    nx.anmz.orby.collisionItems.push(nx.pyramid.aSpaceDoor); //TOOO OuT of Order load -no ORBY-.

    // var mat = new BABYLON.StandardMaterial("myMaterial", nx.scene);
    // mat.specularColor = new BABYLON.Color3(0, 0, 0.22);
    // mat.diffuseTexture = new BABYLON.Texture("./textures/dirt.jpg", nx.scene);
    // mat.specularTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    // mat.emissiveTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    // mat.ambientTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);

    // nx.tower = subCSG.toMesh("csg", nx.pyramid.mat, nx.scene);
    nx.tower = pyramidCSG.toMesh("csg", nx.pyramid.mat, nx.scene);
    nx.tower.receiveShadows = true;
    nx.tower.parent = nx.ground;
    nx.anmz.orby.collisionItems.push(nx.tower); //todo reuse nx.pyramid.mesh

}


nx.pyramid.addWall1 = function(){ //LEFT-SIDE of COIL-LANDING-.
    // var polyPOS = {"x":-20.7,"y":231,"z":-14};  //PRODUCT of MASTER EDIT *
    var polyPOS = {"x":19.2,"y":231,"z":-55.7};  //PRODUCT of MASTER EDIT *
    // var polyPOS = {"x":-370,"y":3,"z":250};  //PRODUCT of MASTER EDIT *
    var polyROT = {"x":1.55,"y":0.9,"z":0};
    //PRODUCT of POLYRUBBER: nx.polyRubber.createPolyRubberEditor-.
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK3X3;
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK4X4;
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK5X5;
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK6X6;
    // var STACKPATHS = [[{"x":9.38,"y":-6.91,"z":19.25},{"x":10,"y":-6.91,"z":20.2},{"x":0,"y":-7.29,"z":20.2},{"x":-10,"y":-7.29,"z":20.2},{"x":-10.4,"y":-7,"z":20.37}],[{"x":10.67,"y":-7.49,"z":15.6},{"x":5.05,"y":-1.25,"z":17.04},{"x":0,"y":0.3,"z":16.87},{"x":-4.97,"y":-1.3,"z":17.04},{"x":-10.15,"y":-6.77,"z":15.64}],[{"x":10.67,"y":-7.83,"z":-0.47},{"x":4.94,"y":-1.75,"z":0},{"x":0.56,"y":-0.38,"z":-1.06},{"x":-4.49,"y":-2.12,"z":-0.26},{"x":-8.9,"y":-7.08,"z":-1.38}],[{"x":8.31,"y":-6.85,"z":-22.3},{"x":5.78,"y":-4.85,"z":-23.23},{"x":1.75,"y":-3.25,"z":-24.16},{"x":-3.37,"y":-4.24,"z":-23.4},{"x":-6.68,"y":-7.08,"z":-24.3}],[{"x":8.31,"y":-6.85,"z":-24.13},{"x":5.78,"y":-7,"z":-25.97},{"x":2.17,"y":-6.95,"z":-27},{"x":-4.49,"y":-7.66,"z":-26.63},{"x":-6.68,"y":-7.08,"z":-26.13}]];

    // var STACKPATHS = [[{"x":9.38,"y":-6.91,"z":19.25},{"x":10,"y":-6.91,"z":20.2},{"x":0,"y":-7.29,"z":20.2},{"x":-10,"y":-7.29,"z":20.2},{"x":-10.4,"y":-7,"z":20.37}],[{"x":10.67,"y":-7.49,"z":15.6},{"x":5.05,"y":-1.25,"z":17.04},{"x":0,"y":0.3,"z":16.87},{"x":-4.97,"y":-1.3,"z":17.04},{"x":-10.15,"y":-6.77,"z":15.64}],[{"x":10.67,"y":-7.83,"z":-0.47},{"x":4.94,"y":-1.75,"z":0},{"x":0.56,"y":-1.43,"z":0.36},{"x":-4.5,"y":-3,"z":1.009},{"x":-8.9,"y":-8.07,"z":0.05}],[{"x":8.31,"y":-7.77,"z":-21.08},{"x":5.78,"y":-4.85,"z":-23.23},{"x":1.75,"y":-3.25,"z":-24.16},{"x":-3.37,"y":-4.24,"z":-23.4},{"x":-6.68,"y":-7.08,"z":-24.3}],[{"x":8.31,"y":-6.85,"z":-24.13},{"x":5.78,"y":-7,"z":-25.97},{"x":2.17,"y":-6.95,"z":-27},{"x":-4.49,"y":-7.66,"z":-26.63},{"x":-6.68,"y":-7.08,"z":-26.13}]];
    // var STACKPATHS = [[{"x":10,"y":0,"z":10},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10},{"x":-20,"y":0,"z":10}],[{"x":10,"y":0,"z":0},{"x":0,"y":0,"z":0},{"x":-10,"y":0,"z":0},{"x":-20,"y":0,"z":0}],[{"x":10,"y":0,"z":-10},{"x":0,"y":0,"z":-10},{"x":-10,"y":0,"z":-10},{"x":-20,"y":0,"z":-10}],[{"x":9.97,"y":0,"z":-19.08},{"x":-0.01,"y":0,"z":-19.08},{"x":-10.03,"y":0,"z":-19.08},{"x":-20.05,"y":0,"z":-19.08}]];
    // var STACKPATHS = [[{"x":10,"y":0,"z":10},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10},{"x":-113.13,"y":-12.36,"z":10.72}],[{"x":10,"y":0,"z":0},{"x":0,"y":0,"z":0},{"x":-10,"y":0,"z":0},{"x":-110.59,"y":-10.08,"z":6.57}],[{"x":10,"y":0,"z":-10},{"x":0,"y":0,"z":-10},{"x":-10,"y":0,"z":-10},{"x":-95.75,"y":-9.9,"z":-10.98}],[{"x":9.97,"y":0,"z":-19.08},{"x":-0.01,"y":0,"z":-19.08},{"x":-10.03,"y":0,"z":-19.08},{"x":-88.38,"y":-8.9,"z":-19.71}]];
    // var STACKPATHS = [[{"x":10,"y":0,"z":10},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10},{"x":-113.27,"y":-11.73,"z":9.22}],[{"x":10,"y":0,"z":0},{"x":0,"y":0,"z":0},{"x":-10,"y":0,"z":0},{"x":-103.49,"y":-11.07,"z":-0.65}],[{"x":10,"y":0,"z":-10},{"x":0,"y":0,"z":-10},{"x":-10,"y":0,"z":-10},{"x":-95.75,"y":-9.9,"z":-10.98}],[{"x":9.97,"y":0,"z":-19.08},{"x":-0.01,"y":0,"z":-19.08},{"x":-10.03,"y":0,"z":-19.08},{"x":-88.38,"y":-8.9,"z":-19.681}]];
    // var STACKPATHS = [[{"x":7.05,"y":1.25,"z":10.43},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10},{"x":-113.27,"y":-11.73,"z":9.22}],[{"x":0.68,"y":1.25,"z":0.56},{"x":-9.78,"y":1.25,"z":0.56},{"x":-15.95,"y":0,"z":-0.01},{"x":-103.49,"y":-11.07,"z":-0.65}],[{"x":-9.4,"y":0.2,"z":-9.65},{"x":-20.13,"y":0,"z":-9.65},{"x":-29.75,"y":0,"z":-9.65},{"x":-95.75,"y":-9.9,"z":-10.98}],[{"x":-15.4,"y":0,"z":-18.63},{"x":-25.91,"y":0,"z":-18.63},{"x":-35.46,"y":0,"z":-18.63},{"x":-88.38,"y":-8.9,"z":-19.71}]];
    var STACKPATHS =  [[{"x":7.34,"y":1.25,"z":11.02},{"x":5.38,"y":21.12,"z":11.6},{"x":-4.85,"y":4.88,"z":10.93},{"x":-113.27,"y":-11.73,"z":9.22}],[{"x":0.68,"y":0.56,"z":0.56},{"x":-9.78,"y":-0.03,"z":0.56},{"x":-15.95,"y":0,"z":-0.01},{"x":-103.49,"y":-11.07,"z":-0.65}],[{"x":-9.4,"y":0.2,"z":-9.65},{"x":-20.13,"y":-1.26,"z":-9.65},{"x":-29.75,"y":-1.91,"z":-9.65},{"x":-95.75,"y":-9.9,"z":-10.98}],[{"x":-15.4,"y":-0.52,"z":-18.63},{"x":-25.91,"y":-1.63,"z":-18.63},{"x":-35.46,"y":-2.75,"z":-18.63},{"x":-88.38,"y":-8.9,"z":-19.71}]];

    var STACKVECTORS = [];
    if(STACKPATHS.length){ //CONVERT: VERTs to VECTOR_STACK-.
        var rowpath = []; //TODO all of these VERT to VECTOR can be placed in nx.polyRubber.vertToFlatStack();
        for(var row=0; row<STACKPATHS.length;row++){
            rowpath=[];
            for(var col=0; col<STACKPATHS[row].length;col++){
                rowpath.push(new BABYLON.Vector3(STACKPATHS[row][col].x,STACKPATHS[row][col].y,STACKPATHS[row][col].z))
            };;
            STACKVECTORS.push(rowpath)
        }
    }

    //--CREATE-TGT-------------RESET: POS, ROT, SIZ, MAT, HIT-.
    nx.polyWall1 = BABYLON.Mesh.CreateRibbon("polyWall", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE); //FIXED-.
    nx.polyWall1.position = polyPOS || new BABYLON.Vector3.Zero();
    nx.polyWall1.rotation = polyROT || new BABYLON.Vector3.Zero();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.polyWall1);} //TODO turn off when under zone
    //TODO: nx.polyWall1.material = nx.getMat("sand"); //anmethodology
    nx.polyWall1.visibility =  0.22;
    nx.polyWall1.material = new BABYLON.StandardMaterial("colorbox", nx.scene);
    nx.polyWall1.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    nx.polyWall1.material.specularColor = new BABYLON.Color3(0, 0, 0);
    nx.polyWall1.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    nx.polyWall1.checkCollisions = true;
    // nx.anmz.orby.collisionItems.push(nx.polyWall1); //todo reuse nx.pyramid.mesh

    nx.polyWall1.polyRow = STACKPATHS.length; //META-DATA-REQUIRED-TO REHYDRATE AFTER EDIT-.
    nx.polyWall1.polyCol = STACKPATHS[0].length;

    // var mat = new BABYLON.StandardMaterial("mat1", nx.scene); //MAT------------------------------------------------.
    // mat.alpha = 0.22; 
    // mat.backFaceCulling = false;
    // mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0); //purple
    // mat.diffuseColor = new BABYLON.Color3(0.9, 0.95, 0.99); //yellow white
    // mat.specularColor = new BABYLON.Color3(0, 0, 0.22);

    // var texture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    // var texture = new BABYLON.Texture("./copyrightnetcinematics/3d/spacebox1/spacebox1_pz.jpg", nx.scene);
    // texture.vScale = 1.0; //How many images span the surface.
    // texture.uScale = 30.0; //Lots of images squashed and stretched makes an interesting effect-.
    // mat.diffuseTexture = texture;
    // nx.polyWall1.material = mat;
    // nx.polyWall1.parent = nx.landPad; //PARENT-TO-LANDPAD
    // mat.wireframe = true;
    //---------------------------------------------
    //IMPORTANT: POLY-RUBBER-EDITOR-CONNECTION-.
    // nx.polyRubber.createPolyRubberEditor({aMesh:nx.polyWall1}); //GOOD-polyrubber-RIBBON-EDITOR-.
}


nx.pyramid.addWall2 = function(){ //RIGHT-SIDE of COIL-LANDING-.
    // var polyPOS = {"x":46,"y":231,"z":-11.7};  //PRODUCT of MASTER EDIT *
    var polyPOS = {"x":44.9,"y":231,"z":-10.2};  //PRODUCT of MASTER EDIT *
    var polyROT = {"x":-1.6,"y":0.79,"z":0};
    //PRODUCT of POLYRUBBER: nx.polyRubber.createPolyRubberEditor-.
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK4X4;
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK5X4;
    // var STACKPATHS = [[{"x":-2.35,"y":-0.94,"z":18.77},{"x":-12.69,"y":-0.94,"z":18.77},{"x":-25.56,"y":-0.94,"z":18.77},{"x":-32.21,"y":-0.94,"z":18.77},{"x":-75.49,"y":-0.47,"z":18.77}],[{"x":4.78,"y":-0.65,"z":10},{"x":-12.69,"y":0.27,"z":10.14},{"x":-22.13,"y":0.27,"z":10.14},{"x":-32.21,"y":0.27,"z":10.14},{"x":-82.45,"y":-0.32,"z":10.14}],[{"x":12.6,"y":-0.52,"z":0},{"x":-12.69,"y":0.27,"z":0.2},{"x":-22.13,"y":0.27,"z":0.2},{"x":-32.21,"y":0.27,"z":0.2},{"x":-90.39,"y":-0.03,"z":0.2}],[{"x":21.37,"y":-0.21,"z":-10.99},{"x":-12.69,"y":0.27,"z":-9.86},{"x":-22.13,"y":0.27,"z":-9.86},{"x":-32.21,"y":0.27,"z":-9.86},{"x":-99.371,"y":0.37,"z":-10.94}]]; //4 corners
    var STACKPATHS = [[{"x":-2.35,"y":-0.94,"z":18.77},{"x":-12.69,"y":-0.94,"z":18.77},{"x":-25.56,"y":-0.94,"z":18.77},{"x":-43.66,"y":0.56,"z":18.77},{"x":-75.49,"y":-0.47,"z":18.77}],[{"x":4.78,"y":-0.65,"z":10},{"x":-12.69,"y":0.27,"z":10.14},{"x":-23.291,"y":0.27,"z":10.14},{"x":-43.66,"y":1.75,"z":10.14},{"x":-82.45,"y":-0.32,"z":10.14}],[{"x":12.6,"y":-0.52,"z":0},{"x":12.35,"y":6.63,"z":1.7},{"x":-7.52,"y":0.27,"z":0.2},{"x":-43.66,"y":1.75,"z":0.2},{"x":-90.39,"y":-0.03,"z":0.2}],[{"x":21.37,"y":-0.21,"z":-10.99},{"x":23.62,"y":28.18,"z":-10.73},{"x":-22.13,"y":0.27,"z":-9.86},{"x":-43.66,"y":3.21,"z":-9.86},{"x":-99.38,"y":0.37,"z":-10.94}]];

    var STACKVECTORS = [];
    if(STACKPATHS.length){ //CONVERT: VERTs to VECTOR_STACK-.
        var rowpath = [];
        for(var row=0; row<STACKPATHS.length;row++){
            rowpath=[];
            for(var col=0; col<STACKPATHS[row].length;col++){
                rowpath.push(new BABYLON.Vector3(STACKPATHS[row][col].x,STACKPATHS[row][col].y,STACKPATHS[row][col].z))
            };;
            STACKVECTORS.push(rowpath)
        }
    }
    nx.polyWall1 = BABYLON.Mesh.CreateRibbon("polyWall", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE); //FIXED-.
    nx.polyWall1.position = polyPOS || new BABYLON.Vector3.Zero();
    nx.polyWall1.rotation = polyROT || new BABYLON.Vector3.Zero();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.polyWall1);} //TODO turn off when under zone
    nx.polyWall1.visibility =  0.22;
    nx.polyWall1.material = new BABYLON.StandardMaterial("colorbox", nx.scene);
    nx.polyWall1.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    nx.polyWall1.material.specularColor = new BABYLON.Color3(0, 0, 0);
    nx.polyWall1.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    nx.polyWall1.checkCollisions = true;
    nx.polyWall1.polyRow = STACKPATHS.length; //META-DATA-REQUIRED-TO REHYDRATE AFTER EDIT-.
    nx.polyWall1.polyCol = STACKPATHS[0].length;
    //IMPORTANT: POLY-RUBBER-EDITOR-CONNECTION-.
    // nx.polyRubber.createPolyRubberEditor({aMesh:nx.polyWall1}); //GOOD-polyrubber-RIBBON-EDITOR-.
}

nx.pyramid.addCorner1 = function(){ //SOUTH-EAST
    // var polyPOS = {"x":46,"y":231,"z":-11.7};  //PRODUCT of MASTER EDIT *
    var polyPOS = {"x":19.9,"y":261,"z":-6.2};  //PRODUCT of MASTER EDIT *
    var polyROT = {"x":-1.6,"y":0.8,"z":6.28};
    //PRODUCT of POLYRUBBER: nx.polyRubber.createPolyRubberEditor-.
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK3X2;
    // var STACKPATHS = [[{"x":1.6,"y":-0.75,"z":9.55},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10}],[{"x":9.21,"y":-0.75,"z":-0.21},{"x":0,"y":0,"z":0},{"x":-10,"y":0,"z":0}]];
    var STACKPATHS = [[{"x":1.6,"y":-0.75,"z":9.55},{"x":-9.08,"y":-0.29,"z":9.56},{"x":-8.65,"y":-12.12,"z":8}],[{"x":9.21,"y":-0.75,"z":-0.21},{"x":-9.08,"y":-0.29,"z":-0.42},{"x":-8.36,"y":-18.21,"z":-1.5}]];
    // var STACKPATHS = [[{"x":-0.06,"y":-7.87,"z":19.04},{"x":10,"y":-6.91,"z":20.2},{"x":0,"y":-7.29,"z":20.2},{"x":-10,"y":-7.99,"z":20.1},{"x":-10.4,"y":-7,"z":20.37}],[{"x":10.67,"y":-7.49,"z":15.6},{"x":5.05,"y":-1.25,"z":17.04},{"x":0,"y":0.3,"z":16.87},{"x":-4.97,"y":-1.3,"z":17.04},{"x":-10.15,"y":-6.77,"z":15.64}],[{"x":10.67,"y":-7.83,"z":-0.47},{"x":4.94,"y":-1.75,"z":0},{"x":0.56,"y":-0.38,"z":-1.06},{"x":-4.49,"y":-2.12,"z":-0.26},{"x":-8.9,"y":-7.08,"z":-1.38}],[{"x":8.31,"y":-6.85,"z":-22.3},{"x":5.78,"y":-4.85,"z":-23.23},{"x":1.75,"y":-3.25,"z":-24.16},{"x":-3.37,"y":-4.24,"z":-23.4},{"x":-6.68,"y":-7.08,"z":-24.3}],[{"x":8.31,"y":-6.85,"z":-24.13},{"x":5.78,"y":-7,"z":-25.97},{"x":2.17,"y":-6.95,"z":-27},{"x":-4.49,"y":-7.66,"z":-26.63},{"x":-6.68,"y":-7.08,"z":-26.13}]];
    var STACKVECTORS = [];
    if(STACKPATHS.length){ //CONVERT: VERTs to VECTOR_STACK-.
        var rowpath = [];
        for(var row=0; row<STACKPATHS.length;row++){
            rowpath=[];
            for(var col=0; col<STACKPATHS[row].length;col++){
                rowpath.push(new BABYLON.Vector3(STACKPATHS[row][col].x,STACKPATHS[row][col].y,STACKPATHS[row][col].z))
            };;
            STACKVECTORS.push(rowpath)
        }
    }
    nx.aCorner = BABYLON.Mesh.CreateRibbon("corner1", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE); //FIXED-.
    nx.aCorner.position = polyPOS || new BABYLON.Vector3.Zero();
    nx.aCorner.rotation = polyROT || new BABYLON.Vector3.Zero();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.aCorner);} //TODO turn off when under zone
    nx.aCorner.visibility =  0.22;
    nx.aCorner.material = new BABYLON.StandardMaterial("colorbox", nx.scene);
    nx.aCorner.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    nx.aCorner.material.specularColor = new BABYLON.Color3(0, 0, 0);
    nx.aCorner.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    nx.aCorner.checkCollisions = true;
    nx.aCorner.polyRow = STACKPATHS.length; //META-DATA-REQUIRED-TO REHYDRATE AFTER EDIT-.
    nx.aCorner.polyCol = STACKPATHS[0].length; //TODO move all these into the createPolyRubberEditor?
    //IMPORTANT: POLY-RUBBER-EDITOR-CONNECTION-.
    // nx.polyRubber.createPolyRubberEditor({aMesh:nx.aCorner}); //GOOD-polyrubber-RIBBON-EDITOR-.
}


nx.pyramid.addCorner2 = function(){ // NORTH-EAST-.
    // var polyPOS = {"x":46,"y":231,"z":-11.7};  //PRODUCT of MASTER EDIT *
    var polyPOS = {"x":6.5,"y":260.9,"z":17.7};  //PRODUCT of MASTER EDIT *
    var polyROT = {"x":-1.6,"y":-7,"z":6.28};
    //PRODUCT of POLYRUBBER: nx.polyRubber.createPolyRubberEditor-.
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK3X2;
    // var STACKPATHS = [[{"x":1.6,"y":-0.75,"z":9.55},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10}],[{"x":9.21,"y":-0.75,"z":-0.21},{"x":0,"y":0,"z":0},{"x":-10,"y":0,"z":0}]];
    // var STACKPATHS = [[{"x":1.74,"y":-1.41,"z":9.64},{"x":-8.33,"y":-0.64,"z":9.72},{"x":-8.36,"y":-9.44,"z":10.67}],[{"x":9.89,"y":-1.64,"z":-0.57},{"x":-8.23,"y":-0.29,"z":-0.42},{"x":-8.83,"y":-18.38,"z":-1.01}]];
    var STACKPATHS = [[{"x":1.75,"y":-2.25,"z":10.6},{"x":-7.68,"y":-1.38,"z":9.71},{"x":-8.15,"y":-11.5,"z":9.6}],[{"x":10.85,"y":-2.27,"z":-0.57},{"x":-7.56,"y":-1,"z":-0.42},{"x":-9,"y":-19.66,"z":-0.94}]];
    // var STACKPATHS = [[{"x":-0.06,"y":-7.87,"z":19.04},{"x":10,"y":-6.91,"z":20.2},{"x":0,"y":-7.29,"z":20.2},{"x":-10,"y":-7.99,"z":20.1},{"x":-10.4,"y":-7,"z":20.37}],[{"x":10.67,"y":-7.49,"z":15.6},{"x":5.05,"y":-1.25,"z":17.04},{"x":0,"y":0.3,"z":16.87},{"x":-4.97,"y":-1.3,"z":17.04},{"x":-10.15,"y":-6.77,"z":15.64}],[{"x":10.67,"y":-7.83,"z":-0.47},{"x":4.94,"y":-1.75,"z":0},{"x":0.56,"y":-0.38,"z":-1.06},{"x":-4.49,"y":-2.12,"z":-0.26},{"x":-8.9,"y":-7.08,"z":-1.38}],[{"x":8.31,"y":-6.85,"z":-22.3},{"x":5.78,"y":-4.85,"z":-23.23},{"x":1.75,"y":-3.25,"z":-24.16},{"x":-3.37,"y":-4.24,"z":-23.4},{"x":-6.68,"y":-7.08,"z":-24.3}],[{"x":8.31,"y":-6.85,"z":-24.13},{"x":5.78,"y":-7,"z":-25.97},{"x":2.17,"y":-6.95,"z":-27},{"x":-4.49,"y":-7.66,"z":-26.63},{"x":-6.68,"y":-7.08,"z":-26.13}]];
    var STACKVECTORS = [];
    if(STACKPATHS.length){ //CONVERT: VERTs to VECTOR_STACK-.
        var rowpath = [];
        for(var row=0; row<STACKPATHS.length;row++){
            rowpath=[];
            for(var col=0; col<STACKPATHS[row].length;col++){
                rowpath.push(new BABYLON.Vector3(STACKPATHS[row][col].x,STACKPATHS[row][col].y,STACKPATHS[row][col].z))
            };;
            STACKVECTORS.push(rowpath)
        }
    }
    nx.aCorner = BABYLON.Mesh.CreateRibbon("corner1", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE); //FIXED-.
    nx.aCorner.position = polyPOS || new BABYLON.Vector3.Zero();
    nx.aCorner.rotation = polyROT || new BABYLON.Vector3.Zero();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.aCorner);} //TODO turn off when under zone
    nx.aCorner.visibility =  0.22;
    nx.aCorner.material = new BABYLON.StandardMaterial("colorbox", nx.scene);
    nx.aCorner.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    nx.aCorner.material.specularColor = new BABYLON.Color3(0, 0, 0);
    nx.aCorner.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    nx.aCorner.checkCollisions = true;
    nx.aCorner.polyRow = STACKPATHS.length; //META-DATA-REQUIRED-TO REHYDRATE AFTER EDIT-.
    nx.aCorner.polyCol = STACKPATHS[0].length; //TODO move all these into the createPolyRubberEditor?
    //IMPORTANT: POLY-RUBBER-EDITOR-CONNECTION-.
    // nx.polyRubber.createPolyRubberEditor({aMesh:nx.aCorner}); //GOOD-polyrubber-RIBBON-EDITOR-.
}


nx.pyramid.addCorner3 = function(){ //NORTH-WEST-.
    // var polyPOS = {"x":46,"y":231,"z":-11.7};  //PRODUCT of MASTER EDIT *
    var polyPOS = {"x":-19.1,"y":260.8,"z":6.2};  //PRODUCT of MASTER EDIT *
    var polyROT = {"x":-1.6,"y":-2.3,"z":6.28};
    //PRODUCT of POLYRUBBER: nx.polyRubber.createPolyRubberEditor-.
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK3X2;
    // var STACKPATHS = [[{"x":1.6,"y":-0.75,"z":9.55},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10}],[{"x":9.21,"y":-0.75,"z":-0.21},{"x":0,"y":0,"z":0},{"x":-10,"y":0,"z":0}]];
    var STACKPATHS = [[{"x":1.74,"y":-1.41,"z":9.64},{"x":-8.33,"y":-0.64,"z":9.72},{"x":-8.36,"y":-9.44,"z":10.67}],[{"x":9.89,"y":-1.64,"z":-0.57},{"x":-8.23,"y":-0.29,"z":-0.42},{"x":-8.83,"y":-18.38,"z":-1.01}]];
    // var STACKPATHS = [[{"x":-0.06,"y":-7.87,"z":19.04},{"x":10,"y":-6.91,"z":20.2},{"x":0,"y":-7.29,"z":20.2},{"x":-10,"y":-7.99,"z":20.1},{"x":-10.4,"y":-7,"z":20.37}],[{"x":10.67,"y":-7.49,"z":15.6},{"x":5.05,"y":-1.25,"z":17.04},{"x":0,"y":0.3,"z":16.87},{"x":-4.97,"y":-1.3,"z":17.04},{"x":-10.15,"y":-6.77,"z":15.64}],[{"x":10.67,"y":-7.83,"z":-0.47},{"x":4.94,"y":-1.75,"z":0},{"x":0.56,"y":-0.38,"z":-1.06},{"x":-4.49,"y":-2.12,"z":-0.26},{"x":-8.9,"y":-7.08,"z":-1.38}],[{"x":8.31,"y":-6.85,"z":-22.3},{"x":5.78,"y":-4.85,"z":-23.23},{"x":1.75,"y":-3.25,"z":-24.16},{"x":-3.37,"y":-4.24,"z":-23.4},{"x":-6.68,"y":-7.08,"z":-24.3}],[{"x":8.31,"y":-6.85,"z":-24.13},{"x":5.78,"y":-7,"z":-25.97},{"x":2.17,"y":-6.95,"z":-27},{"x":-4.49,"y":-7.66,"z":-26.63},{"x":-6.68,"y":-7.08,"z":-26.13}]];
    var STACKVECTORS = [];
    if(STACKPATHS.length){ //CONVERT: VERTs to VECTOR_STACK-.
        var rowpath = [];
        for(var row=0; row<STACKPATHS.length;row++){
            rowpath=[];
            for(var col=0; col<STACKPATHS[row].length;col++){
                rowpath.push(new BABYLON.Vector3(STACKPATHS[row][col].x,STACKPATHS[row][col].y,STACKPATHS[row][col].z))
            };;
            STACKVECTORS.push(rowpath)
        }
    }
    nx.aCorner = BABYLON.Mesh.CreateRibbon("corner1", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE); //FIXED-.
    nx.aCorner.position = polyPOS || new BABYLON.Vector3.Zero();
    nx.aCorner.rotation = polyROT || new BABYLON.Vector3.Zero();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.aCorner);} //TODO turn off when under zone
    nx.aCorner.visibility =  0.22;
    nx.aCorner.material = new BABYLON.StandardMaterial("colorbox", nx.scene);
    nx.aCorner.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    nx.aCorner.material.specularColor = new BABYLON.Color3(0, 0, 0);
    nx.aCorner.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    nx.aCorner.checkCollisions = true;
    nx.aCorner.polyRow = STACKPATHS.length; //META-DATA-REQUIRED-TO REHYDRATE AFTER EDIT-.
    nx.aCorner.polyCol = STACKPATHS[0].length; //TODO move all these into the createPolyRubberEditor?
    //IMPORTANT: POLY-RUBBER-EDITOR-CONNECTION-.
    // nx.polyRubber.createPolyRubberEditor({aMesh:nx.aCorner}); //GOOD-polyrubber-RIBBON-EDITOR-.
}

nx.pyramid.addCorner4 = function(){ //SOUTH-WEST-.
    // var polyPOS = {"x":46,"y":231,"z":-11.7};  //PRODUCT of MASTER EDIT *
    var polyPOS = {"x":-6.3,"y":260.9,"z":-19};  //PRODUCT of MASTER EDIT *
    var polyROT = {"x":-1.6,"y":-3.89,"z":6.28};
    //PRODUCT of POLYRUBBER: nx.polyRubber.createPolyRubberEditor-.
    // var STACKPATHS = nx.polyRubber.DEFAULTVERTSTACK3X2;
    // var STACKPATHS = [[{"x":1.6,"y":-0.75,"z":9.55},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10}],[{"x":9.21,"y":-0.75,"z":-0.21},{"x":0,"y":0,"z":0},{"x":-10,"y":0,"z":0}]];
    var STACKPATHS = [[{"x":1.87,"y":-1.03,"z":9.64},{"x":-8.33,"y":-0.64,"z":9.72},{"x":-8.7,"y":-10.65,"z":9.56}],[{"x":10.06,"y":-0.88,"z":-0.58},{"x":-8.23,"y":-0.29,"z":-0.42},{"x":-8.94,"y":-18.49,"z":-1.02}]];
    // var STACKPATHS = [[{"x":-0.06,"y":-7.87,"z":19.04},{"x":10,"y":-6.91,"z":20.2},{"x":0,"y":-7.29,"z":20.2},{"x":-10,"y":-7.99,"z":20.1},{"x":-10.4,"y":-7,"z":20.37}],[{"x":10.67,"y":-7.49,"z":15.6},{"x":5.05,"y":-1.25,"z":17.04},{"x":0,"y":0.3,"z":16.87},{"x":-4.97,"y":-1.3,"z":17.04},{"x":-10.15,"y":-6.77,"z":15.64}],[{"x":10.67,"y":-7.83,"z":-0.47},{"x":4.94,"y":-1.75,"z":0},{"x":0.56,"y":-0.38,"z":-1.06},{"x":-4.49,"y":-2.12,"z":-0.26},{"x":-8.9,"y":-7.08,"z":-1.38}],[{"x":8.31,"y":-6.85,"z":-22.3},{"x":5.78,"y":-4.85,"z":-23.23},{"x":1.75,"y":-3.25,"z":-24.16},{"x":-3.37,"y":-4.24,"z":-23.4},{"x":-6.68,"y":-7.08,"z":-24.3}],[{"x":8.31,"y":-6.85,"z":-24.13},{"x":5.78,"y":-7,"z":-25.97},{"x":2.17,"y":-6.95,"z":-27},{"x":-4.49,"y":-7.66,"z":-26.63},{"x":-6.68,"y":-7.08,"z":-26.13}]];
    var STACKVECTORS = [];
    if(STACKPATHS.length){ //CONVERT: VERTs to VECTOR_STACK-.
        var rowpath = [];
        for(var row=0; row<STACKPATHS.length;row++){
            rowpath=[];
            for(var col=0; col<STACKPATHS[row].length;col++){
                rowpath.push(new BABYLON.Vector3(STACKPATHS[row][col].x,STACKPATHS[row][col].y,STACKPATHS[row][col].z))
            };;
            STACKVECTORS.push(rowpath)
        }
    }
    nx.aCorner = BABYLON.Mesh.CreateRibbon("corner1", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE); //FIXED-.
    nx.aCorner.position = polyPOS || new BABYLON.Vector3.Zero();
    nx.aCorner.rotation = polyROT || new BABYLON.Vector3.Zero();
    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.aCorner);} //TODO turn off when under zone
    nx.aCorner.visibility =  0.22;
    nx.aCorner.material = new BABYLON.StandardMaterial("colorbox", nx.scene);
    nx.aCorner.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    nx.aCorner.material.specularColor = new BABYLON.Color3(0, 0, 0);
    nx.aCorner.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    nx.aCorner.checkCollisions = true;
    nx.aCorner.polyRow = STACKPATHS.length; //META-DATA-REQUIRED-TO REHYDRATE AFTER EDIT-.
    nx.aCorner.polyCol = STACKPATHS[0].length; //TODO move all these into the createPolyRubberEditor?
    //IMPORTANT: POLY-RUBBER-EDITOR-CONNECTION-.
    // nx.polyRubber.createPolyRubberEditor({aMesh:nx.aCorner}); //GOOD-polyrubber-RIBBON-EDITOR-.
}




/********************************************************************-SPACETOWER-**********************************/

// nx.tower;
// nx.pyramid.createWatchTower = function(){

// debugger;
//     // nx.topPyramid1 = BABYLON.MeshBuilder.CreateCylinder('pyramid', {diameterTop:3,diameterBottom:15,height:5,tessellation:4}, nx.scene);
//     // nx.topPyramid1.position = new BABYLON.Vector3(0, 4, 0);
//     // nx.topPyramid1.position = new BABYLON.Vector3(-200, 111, 200);
//     // nx.topPyramid1.position = new BABYLON.Vector3(0, 270.1, 0);
//     // nx.topPyramid1.scaling = new BABYLON.Vector3(nx.globalScale*4, nx.globalScale*4, nx.globalScale*4);
//     // var mat = new BABYLON.StandardMaterial("myMaterial", nx.scene);
//     // mat.specularColor = new BABYLON.Color3(0, 0, 0.22);
//     // mat.diffuseTexture = new BABYLON.Texture("./textures/dirt.jpg", nx.scene);
//     // nx.topPyramid1.material = mat;


//     nx.topBoxCut1 = BABYLON.MeshBuilder.CreateBox("box", {height:5,width:20,depth:80}, nx.scene);
//     nx.topBoxCut1.position.y = 268
//     nx.topBoxCut1.rotation.y = -0.8
//     nx.topBoxCut2 = BABYLON.MeshBuilder.CreateBox("box", {height:5,width:20,depth:80}, nx.scene);
//     nx.topBoxCut2.position.y = 268;
//     nx.topBoxCut2.rotation.y = 0.8
//     nx.topBoxCut3 = BABYLON.MeshBuilder.CreateBox("box", {height:5,width:20,depth:20}, nx.scene);
//     nx.topBoxCut3.position.y = 264
//     nx.topBoxCut3.rotation.y = 0.8
//     //CREATE-CUTOUT-.
//     var aLookout1 = BABYLON.CSG.FromMesh(nx.topBoxCut1); //TODO remove out of nx after placed
//     // var aTop1 = BABYLON.CSG.FromMesh(nx.topPyramid1);
//     var aTop1 = BABYLON.CSG.FromMesh(nx.pyramid.mesh);
//     var aLookoutTop1 = aTop1.subtract(aLookout1);
//     // nx.topPyramid1.dispose();
//     nx.pyramid.mesh.dispose();
//     nx.topBoxCut1.dispose();
//     var topPyramid2 = aLookoutTop1.toMesh("csg1", nx.pyramid.mat, nx.scene);
//     //DOUBLE-CUT///
//     var aLookout2 = BABYLON.CSG.FromMesh(nx.topBoxCut2); //TODO remove out of nx after placed
//     var aTop2 = BABYLON.CSG.FromMesh(topPyramid2);
//     var aLookoutTop2 = aTop2.subtract(aLookout2);
//     topPyramid2.dispose();
//     nx.topBoxCut2.dispose();
//     var topPyramid3 = aLookoutTop2.toMesh("csg2", nx.pyramid.mat, nx.scene);
//     //TRIPLE-CUT///
//     var aLookout3 = BABYLON.CSG.FromMesh(nx.topBoxCut3); //TODO remove out of nx after placed
//     var aTop3 = BABYLON.CSG.FromMesh(topPyramid3);
//     var aLookoutTop3 = aTop3.subtract(aLookout3);
//     topPyramid3.dispose();
//     nx.topBoxCut3.dispose();
//     ///////////////
//     nx.towertop = aLookoutTop3.toMesh("csg3", nx.pyramid.mat, nx.scene);
//     nx.towertop.parent = nx.ground;
//     //////////////////


//     nx.towercompass1 = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 70, diameterBottom: 60, tessellation: 8, height: 5}, nx.scene);
//     nx.towercompass1.position.copyFrom({x: 0, y: 253, z: 0})
//     nx.towercompass1.material = nx.pyramid.mat;
//     // nx.anmz.orby.collisionItems.push(nx.towercompass1);

//     nx.towercompass2 = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 60, diameterBottom: 70, tessellation: 8, height: 5}, nx.scene);
//     nx.towercompass2.position.copyFrom({x: 0, y: 258, z: 0})
//     nx.towercompass2.material = nx.pyramid.mat;
//     // nx.anmz.orby.collisionItems.push(nx.towercompass2);

//     nx.towerwall = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 70, diameterBottom: 60, tessellation: 8, height: 10}, nx.scene);
//     nx.towerwall.position.copyFrom({x: 0, y: 255.5, z: 0})
//     nx.towerwall.material = nx.pyramid.mat;



//     var aTunnel = BABYLON.MeshBuilder.CreateBox("box", {height:30,width:40,depth:150}, nx.scene);
//     // var aColumn = BABYLON.MeshBuilder.CreateCylinder('base', {height:40, diameter:60, tesselation:10}, nx.scene);
//     // var b = BABYLON.Mesh.CreateBox("box", 50, nx.scene);
//     aTunnel.position.y += 234
//     // aColumn.position.y += 234;
//     aTunnel.rotation.y -= Math.PI/4;

//     var aCSG = BABYLON.CSG.FromMesh(aTunnel);
//     // var bCSG = BABYLON.CSG.FromMesh(aColumn);
//     var bCSG = BABYLON.CSG.FromMesh(nx.towertop);

//     var subCSG = bCSG.subtract(aCSG);
//     // var subCSG = bCSG.subtract(aCSG);

//     // aTunnel.dispose();
//     // aColumn.dispose();


//     // var mat = new BABYLON.StandardMaterial("myMaterial", nx.scene);
//     // mat.specularColor = new BABYLON.Color3(0, 0, 0.22);
//     // mat.diffuseTexture = new BABYLON.Texture("./textures/dirt.jpg", nx.scene);
//     // mat.specularTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
//     // mat.emissiveTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
//     // mat.ambientTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);

//     nx.tower = subCSG.toMesh("csg", nx.pyramid.mat, nx.scene);
//     nx.tower.parent = nx.ground;
//     nx.anmz.orby.collisionItems.push(nx.tower);


// }



// var cutoutCylinderDoor = function(){
//    // var c = BABYLON.MeshBuilder.CreateBox("box", {height:20,width:25,depth:25}, scene);

//     var d = BABYLON.MeshBuilder.CreateCylinder('base', {height:100, diameter:60, tesselation:16}, nx.scene);
//     // var b = BABYLON.Mesh.CreateBox("box", 50, scene);

//     // c.position.y += 5;
//     d.position.y = 210;
//     // b.rotation.y += Math.PI/8;

//     var cCSG = BABYLON.CSG.FromMesh(nx.pyramid.mesh);
//     var dCSG = BABYLON.CSG.FromMesh(d);

//     var subCSG2 = cCSG.subtract(dCSG);

//     // c.dispose();
//     nx.pyramid.mesh.dispose();
//     d.dispose();

//    nx.pyramid2 = subCSG2.toMesh("csg", mat, nx.scene);

//     nx.pyramid2.parent = nx.ground;
//     nx.anmz.orby.collisionItems.push(nx.pyramid2);
// }

/****************************************-END-CENTER-PYRAMID******************************************************/



var depcreatePyramidShape = function (){
    var squarePyramid1 = {"name":"Square Pyramid (J1)","category":["Johnson Solid"],"vertex":[[-0.729665,0.670121,0.319155],[-0.655235,-0.29213,-0.754096],[-0.093922,-0.607123,0.537818],[0.702196,0.595691,0.485187],[0.776626,-0.36656,-0.588064]],"face":[[1,4,2],[0,1,2],[3,0,2],[4,3,2],[4,1,0,3]]} 
    var faceUV = [{"x":0,"y":0,"z":0.16666666666666666,"w":0.25},{"x":0.16666666666666666,"y":0,"z":0.3333333333333333,"w":0.25},{"x":0.3333333333333333,"y":0,"z":0.5,"w":0.25},{"x":0.5,"y":0,"z":0.6666666666666666,"w":0.25},{"x":0.6666666666666666,"y":0,"z":0.8333333333333334,"w":0.25}]
    nx.sqPyramid1 = BABYLON.MeshBuilder.CreatePolyhedron("sqPyramid", { custom: squarePyramid1, size: 2, faceUV: faceUV }, nx.scene);
    nx.sqPyramid1.position = new BABYLON.Vector3(-30,8,-30)
    nx.sqPyramid1.rotation.x = -2.43;
    nx.sqPyramid1.rotation.z = 0.15;
    nx.sqPyramid1.scaling = new BABYLON.Vector3(20,20,20)
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", nx.scene);
    myMaterial.diffuseTexture = new BABYLON.Texture("./textures/dirt.jpg", nx.scene);
    myMaterial.specularTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    myMaterial.emissiveTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    myMaterial.ambientTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    nx.sqPyramid1.material = myMaterial;
    // var mat = new BABYLON.CustomMaterial("a1",nx.scene)
    // mat.diffuseTexture = new BABYLON.Texture("./textures/sand.jpg",nx.scene);
    // mat.Fragment_Definitions('varying vec3 lPos;');
    // mat.Vertex_Definitions('varying vec3 lPos;');
    // mat.Vertex_Before_PositionUpdated('lPos = positionUpdated ;')
    // mat.Fragment_Custom_Diffuse('if( lPos.z  > 0.){ result = vec3(0.,0.,1. ); }');
    // nx.sqPyramid1.material = mat;
}
var depcreateObeliskShape = function (){
    var obelisk1 = {"name":"Elongated Square Pyramid (J8)","category":["Johnson Solid"],"vertex":[[-0.849167,-0.427323,0.457421],[-0.849167,0.619869,0.087182],[-0.478929,-0.776386,-0.529881],[-0.478929,0.270805,-0.900119],[0.198024,-0.30391,0.806484],[0.198024,0.743282,0.436246],[0.568263,-0.652974,-0.180817],[0.568263,0.394218,-0.551056],[1.12362,0.13242,0.37454]],"face":[[8,7,5],[8,5,4],[8,4,6],[8,6,7],[1,3,2,0],[7,3,1,5],[5,1,0,4],[4,0,2,6],[6,2,3,7]]}
    var faceUV = [{"x":0,"y":0,"z":0.16666666666666666,"w":0.25},{"x":0.16666666666666666,"y":0,"z":0.3333333333333333,"w":0.25},{"x":0.3333333333333333,"y":0,"z":0.5,"w":0.25},{"x":0.5,"y":0,"z":0.6666666666666666,"w":0.25},{"x":0.6666666666666666,"y":0,"z":0.8333333333333334,"w":0.25},{"x":0.8333333333333334,"y":0,"z":1,"w":0.25},{"x":0,"y":0,"z":0.16666666666666666,"w":0.25},{"x":0.16666666666666666,"y":0,"z":0.3333333333333333,"w":0.25},{"x":0.3333333333333333,"y":0,"z":0.5,"w":0.25}]
    nx.oblsk1 = BABYLON.MeshBuilder.CreatePolyhedron("sqPyramid", { custom: obelisk1, size: 2, faceUV: faceUV }, nx.scene);
    nx.oblsk1.position = new BABYLON.Vector3(25,7,-25)
    nx.oblsk1.rotation.x = -0.34;
    nx.oblsk1.rotation.z = 1.45;
    nx.oblsk1.scaling = new BABYLON.Vector3(5,5,5)
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", nx.scene);
    myMaterial.diffuseTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    // myMaterial.specularTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    // myMaterial.emissiveTexture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
    myMaterial.ambientTexture = new BABYLON.Texture("./textures/dirt.jpg", nx.scene);
    nx.oblsk1.material = myMaterial;
}




nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
    createCenterPyramid();
}); //schedule in manifest for ready callback-.
nx.setMasterManifest(); //signal success and await-.






// });