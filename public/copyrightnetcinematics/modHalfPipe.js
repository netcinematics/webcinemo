/**************************-NX-NETCINEMATIX-****************************************************************/
// (c) copyright NetCinematics 2018-2019. All rights reserved. See EULA. No distribution without permission.
// for distribution opportunities contact netcinematics@protonmail.com - Open-source templates available.
/**************************-NX-NETCINEMATIX-*******************************************************************/
// window.addEventListener('DOMContentLoaded', function(){
console.log('halfpipe module-loaded')
// debugger;
if(!nx){nx={}}
nx.spacepipe = {};

/*********************************LOCALVARS*******************************/
nx.spacepipe1 = [{"x":0,"y":-5,"z":0},{"x":0,"y":0,"z":10},{"x":0,"y":3,"z":20},{"x":0,"y":5,"z":30},{"x":0,"y":5,"z":40},{"x":0,"y":0,"z":50},{"x":0,"y":-5,"z":60},{"x":0,"y":10,"z":80},{"x":0,"y":15,"z":90},{"x":0,"y":14,"z":100}]

nx.halfpipeShape = [ //railslide4 - outside rail
    new BABYLON.Vector3(-11,9,10 ), //reconnect
    new BABYLON.Vector3(-11.5,9.85,10 ), //inner top
    new BABYLON.Vector3(-10.75,9.75,10 ), // outer top
    new BABYLON.Vector3(-11,9,10 ), //splay out
    new BABYLON.Vector3(-9.75,5,10 ), 
    new BABYLON.Vector3(-8.5,2.5,10 ), 
    new BABYLON.Vector3(-6.5,1,10 ), new BABYLON.Vector3(-4.5, 0, 10),  
    new BABYLON.Vector3(0,-1,10), 
    new BABYLON.Vector3(4.5,0,10), new BABYLON.Vector3(6.5, 1, 10), 
    new BABYLON.Vector3(8.5, 2.5, 10),
    new BABYLON.Vector3(9.75,5,10 ), 
    new BABYLON.Vector3(11,9, 10), // splay out
    new BABYLON.Vector3(10.75, 9.75, 10), //outer top
    new BABYLON.Vector3(11.5,9.85, 10), //inner top
    new BABYLON.Vector3(11,9,10) //reconnect
];
// nx.halfpipeShape = [ //railslide3 - outside rail
//     new BABYLON.Vector3(-10,9,10 ), //reconnect
//     new BABYLON.Vector3(-10.25,9.85,10 ), //inner top
//     new BABYLON.Vector3(-9.75,9.75,10 ), // outer top
//     new BABYLON.Vector3(-10,9,10 ), //splay out
//     new BABYLON.Vector3(-9.75,5,10 ), 
//     new BABYLON.Vector3(-8.5,2.5,10 ), 
//     new BABYLON.Vector3(-6.5,1,10 ), new BABYLON.Vector3(-4.5, 0, 10),  
//     new BABYLON.Vector3(0,-1,10), 
//     new BABYLON.Vector3(4.5,0,10), new BABYLON.Vector3(6.5, 1, 10), 
//     new BABYLON.Vector3(8.5, 2.5, 10),
//     new BABYLON.Vector3(9.75,5,10 ), 
//     new BABYLON.Vector3(10,9, 10), // splay out
//     new BABYLON.Vector3(9.75, 9.75, 10), //outer top
//     new BABYLON.Vector3(10.25,9.85, 10), //inner top
//     new BABYLON.Vector3(10,9,10) //reconnect
// ];

// nx.halfpipeShape = [ //railslide2 inside rail no hits
//     new BABYLON.Vector3(-10,9,10 ),       // reconnect
//     new BABYLON.Vector3(-10.25,9.85,10 ), // inner top
//     new BABYLON.Vector3(-9.75,9.75,10 ),  //outer top
//     new BABYLON.Vector3(-10,9,10 ),      //splay out
//     new BABYLON.Vector3(-9.75,5,10 ), 
//     new BABYLON.Vector3(-8.5,2.5,10 ), 
//     new BABYLON.Vector3(-6.5,1,10 ), new BABYLON.Vector3(-4.5, 0, 10),  
//     new BABYLON.Vector3(0,-1,10), 
//     new BABYLON.Vector3(4.5,0,10), new BABYLON.Vector3(6.5, 1, 10), 
//     new BABYLON.Vector3(8.5, 2.5, 10),
//     new BABYLON.Vector3(9.75,5,10 ), 
//     new BABYLON.Vector3(10,9, 10), 
//     new BABYLON.Vector3(9.75, 9.75, 10), 
//     new BABYLON.Vector3(10.25,9.85, 10),
//     new BABYLON.Vector3(10,9,10) 
// ];




var createHalfpipe1 = function() {
// debugger;

    // var newPipePOS = new BABYLON.Vector3(570,125,-630)
    // var aPath = nx.createPointEditor({aPath:nx.spacepipe6,aPos:newPipePOS, editTgt:nx.editedPipe ,renderFn:function(aPath){
    //     var vectorPath = [];
    //     for(var i=0; i<aPath.length;i++){
    //         vectorPath.push(new BABYLON.Vector3(aPath[i].x,aPath[i].y,aPath[i].z))
    //     }
    //     nx.renderMasterPipe(vectorPath);
    // }}); //APPLY-POINT-AND-MASTER-EDITOR---------------------------------------------------------------------------.
    var aPath = nx.spacepipe1; 
    var vectorPath = [];  //convert to VECTOR-.
    for(var i=0; i<aPath.length;i++){ vectorPath.push(new BABYLON.Vector3(aPath[i].x,aPath[i].y,aPath[i].z))   }
    nx.renderMasterPipe1(vectorPath);

}

//NOTE-RENAME - "1" not the same - deprecated-.
var renderMasterPipe1 = function(masterPath){
    if(nx.examplePipe){
        nx.examplePipe.dispose()
        // nx.editNodes = [];
    }
    nx.examplePipe = BABYLON.MeshBuilder.ExtrudeShapeCustom("halfpipe", 
        {shape:nx.halfpipeShape,path:masterPath,
        scaleFunction:function(i){return 1
        },rotationFunction:function(i,e){
            // if(i>=masterPath.length*0.38){ return 0}
            // if(i>=masterPath.length*0.35){ return 0.02}
            // if(i>=masterPath.length*0.29){ return 0.05}
            return 0
        },
        ribbonCloseArray:false,ribbonClosePath:false,
        updatable:true,sideOrientation:BABYLON.Mesh.DOUBLESIDE},nx.scene);
    // nx.examplePipe.position = new BABYLON.Vector3(570,240,-650); //MASTER-PIPE-POSITIONING-.
    // nx.examplePipe.position = new BABYLON.Vector3(0,0,0); //MASTER-PIPE-POSITIONING-.ZERO-.
    // nx.examplePipe.position = new BABYLON.Vector3(570,105,-654); //MASTER-PIPE-POSITIONING-.{x: 570, y: 105, z: -643.9}
    // nx.examplePipe.scaling = new BABYLON.Vector3(nx.globalScale, nx.globalScale, nx.globalScale);

    var masterPipeScale = nx.globalScale || 1;
    masterPipeScale = 2;
    nx.examplePipe.scaling = new BABYLON.Vector3(masterPipeScale, masterPipeScale, masterPipeScale);
nx.examplePipe.position = new BABYLON.Vector3(700,800,-654); 

    if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.examplePipe);} //collisions-.
}

// createHalfpipe1();

// });
/**************************************************************-NEW-SPACE-PIPE-****************************************************************************/


var createZapBotPosts = function(){ //commandposts station
        //     var width=120, height=140, tess=100;//36;
        // var landPadParts = [];
        // var workwidth = width-1, workheight = height-workwidth;
        // var es1 = BABYLON.Mesh.CreateSphere("s1", tess, width, nx.scene);
        // if (height >= 2 && height !== width && width < height) {

    nx.zp1 = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 8, diameterBottom: 10, tessellation: 8, height: 10}, nx.scene);
    // nx.zp1.position.copyFrom({x: 94, y: 987, z: -1462})
    // nx.zp1.position.copyFrom( {x: 272, y: 925, z: -1333})
    nx.zp1.position.copyFrom( {x: 170, y: 970, z: -1395} )
    nx.zp2 = BABYLON.MeshBuilder.CreateCylinder("zp1", {diameterTop: 8, diameterBottom: 10, tessellation: 8, height: 10}, nx.scene);
    nx.zp2.position.copyFrom( {x: 580, y: 842, z: -617})
    // nx.zp2.position.copyFrom( {x: 605, y: 833, z: -624})
    // nx.zp2.position.copyFrom({x: 624, y: 845, z: -588})


    //PLACE ZAPBOT - deprecated

    //CREATE-ZONES- - position zapbot when orby is in zone. then remove.

        function initBotPOS(idx){

            if(idx===1){
                //TODO these LOOPZ are slowing things down-. PUT INTO SCRIPT not LOOPZ
                nx.scene.registerBeforeRender(function botPositionLoop1() {  //BOT-POSITION-LOOP-ZONE-ALARM-.
                    if(nx.orbyMesh && nx.orbyMesh.position.y < 1222){
                        nx.zapbotTerra2.position.copyFrom({x:94,y:992,z:-1462});
                        nx.zapbotTerra2.rotation.x = 0.2;
                        nx.zapbotTerra2.rotation.y = 2;
                        nx.scene.unregisterBeforeRender(botPositionLoop1);
                        //todo clean up other memory
                        initBotPOS(2);
                        return;
                    } 
                });
            }        
            else if(idx===2){
                nx.scene.registerBeforeRender(function botPositionLoop2() {  //BOT-POSITION-LOOP-ZONE-ALARM-.
                    if(nx.orbyMesh && nx.orbyMesh.position.x > 430 && nx.orbyMesh.position.y >860){
                        nx.zapbotTerra2.position.copyFrom({x:624,y:850,z:-588});
                        // nx.zapbotTerra2.rotation.x = 0.2;
                        nx.zapbotTerra2.rotation.y = 0.8;
                        nx.scene.unregisterBeforeRender(botPositionLoop2);
                        //todo clean up other memory
                        // initBotPOS(2);
                        return;
                    } 
                });
            }        

        }

        // initBotPOS(1);


    //ZAP-BOT-LOOKAT

    //ZAP-BOT-CHASE-.
    
}



// /*******************************************************-LANDING-PAD-*******************************************************/
var createLandingPadMaster = function(){
    function createInnerPad(){
        nx.innerPad = BABYLON.Mesh.CreateSphere("lp1", 8, 3, nx.scene);
        var width=120, height=140, tess=10;//100;//36;
        var landPadParts = [];
        var workwidth = width-1, workheight = height-workwidth;
        var es1 = BABYLON.Mesh.CreateSphere("s1", tess, width, nx.scene);
        if (height >= 2 && height !== width && width < height) {
            var mc = BABYLON.MeshBuilder.CreateCylinder("c1", {diameterTop: width, diameterBottom: width, tessellation: tess, height: workheight-1}, nx.scene);
            mc.rotation.z = Math.PI/2;
            var es2 = BABYLON.Mesh.CreateSphere("s2", tess, width, nx.scene);
            es1.position.x = (workheight-1)/2;
            es2.position.x = (-workheight+1)/2;
        }
        landPadParts.push(es1, mc, es2);
        nx.topPad = BABYLON.Mesh.MergeMeshes(landPadParts);
        nx.topPad.parent = nx.innerPad;
        nx.topPad.scaling = new BABYLON.Vector3(1.4,0.08,1)
        nx.innerPad.parent = nx.outerPad;
        nx.topPad.position.y = -12;
        // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.topPad);}
    }
    function createOuterPad(){
        nx.outerPad  = BABYLON.Mesh.CreateSphere("lp1", 8, 3, nx.scene);
        var width=120, height=140, tess=10; //100; //36;
        var landPadParts = [];
        var workwidth, workheight;
        if (width == 1) {workwidth = width; } else { workwidth = width-1; } 
        workheight = (height-workwidth);
        var es1 = BABYLON.Mesh.CreateSphere("es1", tess, width, nx.scene);
        if (height >= 2 && height !== width && width < height) {
            var mc = BABYLON.MeshBuilder.CreateCylinder("mc", {diameterTop: width, diameterBottom: width, tessellation: tess, height: workheight-1}, nx.scene);
            mc.rotation.z = Math.PI/2;
            var es2 = BABYLON.Mesh.CreateSphere("es2", tess, width, nx.scene);
            es1.position.x = (workheight-1)/2;
            es2.position.x = (-workheight+1)/2;
        }
        landPadParts.push(es1, mc, es2);
        nx.landingPad = BABYLON.Mesh.MergeMeshes(landPadParts);
        nx.landingPad.parent = nx.outerPad;
        nx.landingPad.scaling = new BABYLON.Vector3(1.5,0.1,1.2)
        nx.landingPad.position = new BABYLON.Vector3(0,-3.5,0)
        // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.landingPad);}
    }
    nx.spacepipe.createOrbs = function(){
        nx.lp1 = BABYLON.Mesh.CreateSphere("nx.lp1", 8, 3, nx.scene);
        nx.lp1.position = new BABYLON.Vector3(57,-2,57);
        nx.lp2 = BABYLON.Mesh.CreateSphere("nx.lp2", 8, 3, nx.scene);
        nx.lp2.position = new BABYLON.Vector3(57,-2,-57);
        nx.lp3 = BABYLON.Mesh.CreateSphere("nx.lp3", 8, 3, nx.scene);
        nx.lp3.position = new BABYLON.Vector3(-57,-2,57);
        nx.lp4 = BABYLON.Mesh.CreateSphere("nx.lp4", 8, 3, nx.scene);
        nx.lp4.position = new BABYLON.Vector3(-57,-2,-57);
        nx.lp5 = BABYLON.Mesh.CreateSphere("nx.lp5", 8, 4, nx.scene);
        nx.lp5.position = new BABYLON.Vector3(-101,-3,0);
        nx.lp6 = BABYLON.Mesh.CreateSphere("nx.lp6", 8, 4, nx.scene);
        nx.lp6.position = new BABYLON.Vector3(0,-2,65);
        nx.lp7 = BABYLON.Mesh.CreateSphere("nx.lp7", 8, 4, nx.scene);
        nx.lp7.position = new BABYLON.Vector3(0,-2,-65);
        nx.lp1.parent = nx.outerPad;
        nx.lp2.parent = nx.outerPad;
        nx.lp3.parent = nx.outerPad;
        nx.lp4.parent = nx.outerPad;
        nx.lp5.parent = nx.outerPad;
        nx.lp6.parent = nx.outerPad;
        nx.lp7.parent = nx.outerPad;

        nx.spaceLightsMatRed = new BABYLON.StandardMaterial("spaceLightmat1", nx.scene);
        nx.spaceLightsMatRed.emissiveColor = new BABYLON.Color3(1, 0, 0);
        nx.spaceLightsMatRed.diffuseColor = new BABYLON.Color3(1, 0, 0);
        nx.spaceLightsMatGrey = new BABYLON.StandardMaterial("spaceLightmat1", nx.scene);
        nx.spaceLightsMatGrey.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);

        //LIGHT-MATERIALS-.
        nx.lp1.material = nx.spaceLightsMatRed;
        nx.lp2.material = nx.spaceLightsMatGrey;
        nx.lp3.material = nx.spaceLightsMatRed;
        nx.lp4.material = nx.spaceLightsMatGrey;
        nx.lp5.material = nx.spaceLightsMatRed;
        nx.lp6.material = nx.spaceLightsMatGrey;
        nx.lp7.material = nx.spaceLightsMatRed;

        nx.landingLightAlpha = 0; nx.landingLightToggle = 0;
        nx.scene.registerBeforeRender(function landingLightLOOPZ() {
            if(++nx.landingLightAlpha%100!=0){return} //DECIDAMPER-.
            if(nx.orbyMesh.position.y < 1222){ //UNREGISTER spacegemloopz
                nx.scene.unregisterBeforeRender(landingLightLOOPZ);
                //todo clean up other memory like ORBS
                nx.lp1.material = nx.spaceLightsMatGrey;
                nx.lp2.material = nx.spaceLightsMatGrey;
                nx.lp3.material = nx.spaceLightsMatGrey;
                nx.lp4.material = nx.spaceLightsMatGrey;
                nx.lp5.material = nx.spaceLightsMatGrey;
                nx.lp6.material = nx.spaceLightsMatGrey;
                nx.lp7.material = nx.spaceLightsMatGrey;
                return;
            } else if (nx.landingLightToggle){
                nx.landingLightToggle = 0;
                nx.lp1.material = nx.spaceLightsMatRed;
                nx.lp2.material = nx.spaceLightsMatRed;
                nx.lp3.material = nx.spaceLightsMatRed;
                nx.lp4.material = nx.spaceLightsMatRed;
                nx.lp5.material = nx.spaceLightsMatGrey;
                nx.lp6.material = nx.spaceLightsMatGrey;
                nx.lp7.material = nx.spaceLightsMatGrey;
            } else {
                nx.landingLightToggle = 1;
                nx.lp1.material = nx.spaceLightsMatGrey;
                nx.lp2.material = nx.spaceLightsMatGrey;
                nx.lp3.material = nx.spaceLightsMatGrey;
                nx.lp4.material = nx.spaceLightsMatGrey;
                nx.lp5.material = nx.spaceLightsMatRed;
                nx.lp6.material = nx.spaceLightsMatRed;
                nx.lp7.material = nx.spaceLightsMatRed;
            }

        });

        // nx.spaceLightsMatGrey.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
        // nx.spaceLightsMat1.diffuseColor = new BABYLON.Color3(1, 0, 0);
        // nx.spaceLightsMat1.specularColor = new BABYLON.Color3(1, 0, 0);
        // nx.spaceLightsMat1.alpha = 1.0;

        // nx.spaceLightsMat2 = new BABYLON.StandardMaterial("spaceLightmat2", nx.scene);
        // nx.spaceLightsMat2.diffuseColor = new BABYLON.Color3(1, 0.5, 1.0);
        // nx.spaceLightsMat2.specularColor = new BABYLON.Color3(1, 0, 0.22);
        // nx.spaceLightsMat2.emissiveColor = new BABYLON.Color3(1, 0, 0.22);
        // nx.spaceLightsMat2.alpha = 1.0;

        // nx.spaceLightsMat3 = new BABYLON.StandardMaterial("spaceLightmat3", nx.scene);
        // nx.spaceLightsMat3.diffuseColor = new BABYLON.Color3(1, 0.5, 1.0);
        // nx.spaceLightsMat3.specularColor = new BABYLON.Color3(1, 0, 0.22);
        // nx.spaceLightsMat3.emissiveColor = new BABYLON.Color3(1, 0, 0.22);
        // nx.spaceLightsMat3.alpha = 1.0;
    

        //todo start spacelights and stopspacelights

    }

    function createPipeConnector(){ //good polyrubber example-.
        var polyPOS = {"x":108.40000000000003,"y":4.199999999999999,"z":0.6};
        // var polyROT = {"x":0,"y":-0.30000000000000004,"z":-0.4};
        var polyROT = {"x":-0.03999999999999996,"y":0.03999999999999997,"z":0.10999999999999997};
        // var STACKPATHS = [[{"x":21.700044631958008,"y":0.8999505043029785,"z":9.899847030639648},{"x":0,"y":40,"z":50},{"x":-10,"y":40,"z":50}],[{"x":21.200042724609375,"y":-3.900043487548828,"z":9.699884414672852},{"x":0,"y":30,"z":40},{"x":-10,"y":30,"z":40}],[{"x":21.000041961669922,"y":-6.200036525726318,"z":8.699918746948242},{"x":0,"y":20,"z":30},{"x":-10,"y":20,"z":30}],[{"x":21.000041961669922,"y":-7.799996852874756,"z":6.499956130981445},{"x":0,"y":10,"z":20},{"x":-10,"y":10,"z":20}],[{"x":20.900041580200195,"y":-8.499996185302734,"z":4.899995803833008},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":8.999996185302734},{"x":-17.400028228759766,"y":-1.3000003099441528,"z":8.999996185302734}],[{"x":21.000041961669922,"y":-9.600000381469727,"z":0.09999992698431015},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":-1.0000001192092896},{"x":-14.500017166137695,"y":-1.7000004053115845,"z":-1.0000001192092896}],[{"x":21.400043487548828,"y":-8.499996185302734,"z":-4.399996280670166},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":-11.000003814697266},{"x":-16.800025939941406,"y":-0.8000001907348633,"z":-10.900003433227539}],[{"x":21.500043869018555,"y":-7.499997138977051,"z":-6.299956321716309},{"x":-9.099998474121094,"y":-3.400001049041748,"z":-20.30000114440918},{"x":-19.100034713745117,"y":-3.400001049041748,"z":-20.30000114440918}],[{"x":21.700044631958008,"y":-6.000036716461182,"z":-8.299917221069336},{"x":-9.099998474121094,"y":6.599956035614014,"z":-30.30000114440918},{"x":-19.100034713745117,"y":6.599956035614014,"z":-30.30000114440918}],[{"x":22.100046157836914,"y":-3.3000457286834717,"z":-9.499883651733398},{"x":0,"y":30,"z":-40},{"x":-19.100034713745117,"y":16.59994888305664,"z":-40.29999542236328}],[{"x":22.50004768371582,"y":1.1999582052230835,"z":-9.299844741821289},{"x":0,"y":40,"z":-50},{"x":-19.100034713745117,"y":26.600101470947266,"z":-50.29999542236328}]];
        // var STACKPATHS = [[{"x":21.700044631958008,"y":0.8999505043029785,"z":9.899847030639648},{"x":-16.4000244140625,"y":16.800064086914062,"z":49.40000915527344},{"x":-28.200069427490234,"y":16.00006103515625,"z":53.299949645996094}],[{"x":21.200042724609375,"y":-3.900043487548828,"z":9.699884414672852},{"x":-23.400053024291992,"y":2.1999220848083496,"z":48.59986877441406},{"x":-40.99994659423828,"y":-4.700076580047607,"z":53.09980010986328}],[{"x":21.000041961669922,"y":-6.200036525726318,"z":8.699918746948242},{"x":-23.600053787231445,"y":-3.300039291381836,"z":44.19982147216797},{"x":-29.100072860717773,"y":-4.100038528442383,"z":40.29988098144531}],[{"x":21.000041961669922,"y":-7.799996852874756,"z":6.499956130981445},{"x":-8.699996948242188,"y":-4.599999904632568,"z":17.69999122619629},{"x":-17.200027465820312,"y":-2.600001811981201,"z":18.399993896484375}],[{"x":20.900041580200195,"y":-8.499996185302734,"z":4.899995803833008},{"x":-0.30000001192092896,"y":-5.899996757507324,"z":8.999996185302734},{"x":-18.200031280517578,"y":-1.3000003099441528,"z":8.999996185302734}],[{"x":21.000041961669922,"y":-9.600000381469727,"z":0.09999992698431015},{"x":-0.5,"y":-6.399996280670166,"z":-1.0000001192092896},{"x":-14.500017166137695,"y":-1.7000004053115845,"z":-1.0000001192092896}],[{"x":21.400043487548828,"y":-8.499996185302734,"z":-4.399996280670166},{"x":-0.30000001192092896,"y":-5.499997138977051,"z":-11.000003814697266},{"x":-16.800025939941406,"y":-0.8000001907348633,"z":-10.900003433227539}],[{"x":21.500043869018555,"y":-7.499997138977051,"z":-6.299956321716309},{"x":-9.099998474121094,"y":-2.9000015258789062,"z":-20.30000114440918},{"x":-14.500017166137695,"y":-2.000002384185791,"z":-20.30000114440918}],[{"x":21.700044631958008,"y":-6.000036716461182,"z":-8.299917221069336},{"x":-9.099998474121094,"y":-1.8000404834747314,"z":-32.79999542236328},{"x":-24.900056838989258,"y":-2.4000399112701416,"z":-44.29981994628906}],[{"x":22.100046157836914,"y":-3.3000457286834717,"z":-9.499883651733398},{"x":-18.80003547668457,"y":4.099920272827148,"z":-50.39984130859375},{"x":-35.60002899169922,"y":-1.9000784158706665,"z":-57.499732971191406}],[{"x":22.50004768371582,"y":1.1999582052230835,"z":-9.299844741821289},{"x":-10.30000114440918,"y":17.800067901611328,"z":-50.29999542236328},{"x":-23.000049591064453,"y":18.500070571899414,"z":-56.39990234375}]];
        // var STACKPATHS = [[{"x":7.399993419647217,"y":11.299957275390625,"z":21.19989013671875},{"x":-16.4000244140625,"y":16.800064086914062,"z":49.40000915527344},{"x":-28.200069427490234,"y":16.00006103515625,"z":53.299949645996094}],[{"x":9.799999237060547,"y":1.7999552488327026,"z":18.699918746948242},{"x":-23.400053024291992,"y":2.1999220848083496,"z":48.59986877441406},{"x":-40.99994659423828,"y":-4.700076580047607,"z":53.09980010986328}],[{"x":20.100038528442383,"y":-4.300037860870361,"z":19.999961853027344},{"x":-23.600053787231445,"y":-3.300039291381836,"z":44.19982147216797},{"x":-29.100072860717773,"y":-4.100038528442383,"z":40.29988098144531}],[{"x":21.000041961669922,"y":-7.799996852874756,"z":6.499956130981445},{"x":-8.699996948242188,"y":-4.599999904632568,"z":17.69999122619629},{"x":-17.200027465820312,"y":-2.600001811981201,"z":18.399993896484375}],[{"x":20.900041580200195,"y":-8.89999771118164,"z":4.899995803833008},{"x":-0.30000001192092896,"y":-5.899996757507324,"z":8.999996185302734},{"x":-18.200031280517578,"y":-1.3000003099441528,"z":8.999996185302734}],[{"x":21.000041961669922,"y":-9.299999237060547,"z":-0.8000001311302185},{"x":-0.5,"y":-6.399996280670166,"z":-1.0000001192092896},{"x":-14.500017166137695,"y":-1.7000004053115845,"z":-1.0000001192092896}],[{"x":21.400043487548828,"y":-8.499996185302734,"z":-4.399996280670166},{"x":-0.30000001192092896,"y":-5.499997138977051,"z":-11.000003814697266},{"x":-16.800025939941406,"y":-0.8000001907348633,"z":-10.900003433227539}],[{"x":21.500043869018555,"y":-8.599998474121094,"z":-6.299956321716309},{"x":-9.099998474121094,"y":-2.9000015258789062,"z":-20.30000114440918},{"x":-14.500017166137695,"y":-2.000002384185791,"z":-20.30000114440918}],[{"x":21.700044631958008,"y":-5.000037670135498,"z":-14.59994125366211},{"x":-9.099998474121094,"y":-1.8000404834747314,"z":-32.79999542236328},{"x":-24.900056838989258,"y":-2.4000399112701416,"z":-44.29981994628906}],[{"x":10.700002670288086,"y":2.699953079223633,"z":-20.09992218017578},{"x":-18.80003547668457,"y":4.099920272827148,"z":-50.39984130859375},{"x":-35.60002899169922,"y":-1.9000784158706665,"z":-57.499732971191406}],[{"x":8.499994277954102,"y":12.399969100952148,"z":-21.999893188476562},{"x":-10.30000114440918,"y":17.800067901611328,"z":-50.29999542236328},{"x":-23.000049591064453,"y":18.500070571899414,"z":-56.39990234375}]];

        // var STACKPATHS = [[{"x":7.399993419647217,"y":11.299957275390625,"z":21.19989013671875},{"x":-16.4000244140625,"y":16.800064086914062,"z":49.40000915527344},{"x":-28.200069427490234,"y":16.00006103515625,"z":53.299949645996094}],[{"x":9.799999237060547,"y":1.7999552488327026,"z":18.699918746948242},{"x":-23.400053024291992,"y":2.1999220848083496,"z":48.59986877441406},{"x":-40.99994659423828,"y":-4.700076580047607,"z":53.09980010986328}],[{"x":10.900003433227539,"y":-3.100039005279541,"z":15.999946594238281},{"x":-23.600053787231445,"y":-3.300039291381836,"z":44.19982147216797},{"x":-29.100072860717773,"y":-4.100038528442383,"z":40.29988098144531}],[{"x":21.000041961669922,"y":-7.799996852874756,"z":6.499956130981445},{"x":-8.699996948242188,"y":-4.599999904632568,"z":17.69999122619629},{"x":-17.200027465820312,"y":-2.600001811981201,"z":18.399993896484375}],[{"x":20.900041580200195,"y":-8.89999771118164,"z":4.899995803833008},{"x":-0.30000001192092896,"y":-5.899996757507324,"z":8.999996185302734},{"x":-18.200031280517578,"y":-1.3000003099441528,"z":8.999996185302734}],[{"x":21.000041961669922,"y":-9.299999237060547,"z":-0.8000001311302185},{"x":-0.5,"y":-6.399996280670166,"z":-1.0000001192092896},{"x":-14.500017166137695,"y":-1.7000004053115845,"z":-1.0000001192092896}],[{"x":21.400043487548828,"y":-8.499996185302734,"z":-4.399996280670166},{"x":-0.30000001192092896,"y":-5.499997138977051,"z":-11.000003814697266},{"x":-16.800025939941406,"y":-0.8000001907348633,"z":-10.900003433227539}],[{"x":21.500043869018555,"y":-8.599998474121094,"z":-6.299956321716309},{"x":-9.099998474121094,"y":-2.9000015258789062,"z":-20.30000114440918},{"x":-14.500017166137695,"y":-2.000002384185791,"z":-20.30000114440918}],[{"x":21.700044631958008,"y":-5.000037670135498,"z":-14.59994125366211},{"x":-9.099998474121094,"y":-1.8000404834747314,"z":-32.79999542236328},{"x":-24.900056838989258,"y":-2.4000399112701416,"z":-44.29981994628906}],[{"x":10.700002670288086,"y":2.699953079223633,"z":-20.09992218017578},{"x":-18.80003547668457,"y":4.099920272827148,"z":-50.39984130859375},{"x":-35.60002899169922,"y":-1.9000784158706665,"z":-57.499732971191406}],[{"x":8.499994277954102,"y":12.399969100952148,"z":-21.999893188476562},{"x":-10.30000114440918,"y":17.800067901611328,"z":-50.29999542236328},{"x":-23.000049591064453,"y":18.500070571899414,"z":-56.39990234375}]];


        //PRODUCT of nx.polyRubber.createPolyRubberEditor, connector below-.
        var STACKPATHS = [[{"x":7.399,"y":11.299,"z":21.199},{"x":-16.401,"y":16.8,"z":49.4},{"x":-28.201,"y":16,"z":53.299}],[{"x":9.799,"y":1.799,"z":18.699},{"x":-23.401,"y":2.199,"z":48.599},{"x":-41,"y":-4.701,"z":53.099}],[{"x":10.9,"y":-3.101,"z":15.999},{"x":-23.601,"y":-3.301,"z":44.199},{"x":-29.101,"y":-4.101,"z":40.299}],[{"x":21,"y":-7.8,"z":6.499},{"x":-8.7,"y":-4.301,"z":17.699},{"x":-17.201,"y":-2.201,"z":18.399}],[{"x":20.9,"y":-8.9,"z":4.899},{"x":-0.301,"y":-5.9,"z":8.999},{"x":-18.201,"y":-1.501,"z":8.999}],[{"x":21,"y":-9.3,"z":-0.801},{"x":-0.5,"y":-6.4,"z":-1.001},{"x":-14.501,"y":-1.701,"z":-1.001}],[{"x":21.4,"y":-8.8,"z":-4.4},{"x":-0.301,"y":-5.5,"z":-11.001},{"x":-16.801,"y":-0.901,"z":-10.901}],[{"x":21.5,"y":-8.6,"z":-6.3},{"x":-9.1,"y":-2.601,"z":-20.301},{"x":-14.501,"y":-2.001,"z":-20.301}],[{"x":21.7,"y":-5.001,"z":-14.6},{"x":-9.1,"y":-1.801,"z":-32.8},{"x":-24.901,"y":-2.401,"z":-44.3}],[{"x":10.7,"y":2.699,"z":-20.1},{"x":-18.801,"y":4.099,"z":-50.4},{"x":-35.601,"y":-1.901,"z":-57.5}],[{"x":8.499,"y":12.399,"z":-22},{"x":-10.301,"y":17.8,"z":-50.3},{"x":-23.001,"y":18.5,"z":-56.4}]];


// debugger;
        // var STACKPATHS = [];
        // var positions = [21.7, 0.899, 9.899, -16.401, 16.8, 49.4, -28.201, 16, 53.299, 21.2, -3.901, 9.699, -23.401, 2.199, 48.599, -41, -4.701, 53.099, 21, -6.201, 8.699, -23.601, -3.301, 44.199, -29.101, -4.101, 40.299, 21, -7.8, 6.499, -8.7, -4.6, 17.699, -17.201, -2.601, 18.399, 20.9, -8.5, 4.899, -0.301, -5.9, 8.999, -18.201, -1.301, 8.999, 21, -9.601, 0.099, -0.5, -6.4, -1.001, -14.501, -1.701, -1.001, 21.4, -8.5, -4.4, -0.301, -5.5, -11.001, -16.801, -0.801, -10.901, 21.5, -7.5, -6.3, -9.1, -2.901, -20.301, -14.501, -2.001, -20.301, 21.7, -6.001, -8.3, -9.1, -1.801, -32.8, -24.901, -2.401, -44.3, 22.1, -3.301, -9.5, -18.801, 4.099, -50.4, -35.601, -1.901, -57.5, 8.699, 12.399, -21.9, -10.301, 17.8, -50.3, -23.001, 18.5, -56.4];
        // for(var i=0; i< positions.length;i++){

        // }


        var STACKVECTORS = [];
        if(STACKPATHS.length){ //CONVERT: VERTs to VECTOR_STACK-.
            var rowpath = [];
            for(var row=0; row<STACKPATHS.length;row++){
                rowpath=[];
                for(var col=0; col<STACKPATHS[row].length;col++){
                    rowpath.push(new BABYLON.Vector3(STACKPATHS[row][col].x,STACKPATHS[row][col].y,STACKPATHS[row][col].z))
                }
                STACKVECTORS.push(rowpath)
            }
        }

       //--CREATE-TGT-------------RESET: POS, ROT, SIZ, MAT, HIT-.
        nx.topConnector = BABYLON.Mesh.CreateRibbon("topConnector", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE);
        nx.topConnector.position = polyPOS || new BABYLON.Vector3.Zero();
        nx.topConnector.rotation = polyROT || new BABYLON.Vector3.Zero();
        nx.topConnector.parent = nx.outerPad; //PARENT-TO-LANDPAD
        nx.topConnector.polyRow = 11; //REQUIRED-TO REHYDRATE AFTER EDIT-.
        nx.topConnector.polyCol = 3;


// debugger;
// var polyRubberFlat1 = '{"normals":[-0.696,0.102,-0.712,-0.549,0.215,-0.808,-0.319,0.204,-0.926,-0.63,0.266,-0.73,-0.465,0.381,-0.8,-0.322,0.687,-0.652,-0.497,0.565,-0.659,-0.25,0.892,-0.377,0.018,0.999,0.016,-0.114,0.938,-0.328,0.097,0.994,-0.041,0.24,0.962,0.128,0.047,0.973,-0.222,0.18,0.983,-0.03,0.271,0.961,0.044,0.121,0.992,-0.01,0.213,0.974,0.067,0.302,0.95,0.064,0.074,0.959,0.271,0.169,0.973,0.156,0.237,0.971,-0.018,-0.044,0.899,0.435,0.096,0.982,0.158,0.097,0.995,0,-0.229,0.819,0.525,-0.186,0.923,0.336,-0.302,0.903,0.303,-0.567,0.441,0.695,-0.545,0.563,0.621,-0.47,0.455,0.756,-0.735,0.195,0.649,-0.54,0.314,0.78,-0.415,0.208,0.886],"positions":[21.7,0.899,9.899,-16.401,16.8,49.4,-28.201,16,53.299,21.2,-3.901,9.699,-23.401,2.199,48.599,-41,-4.701,53.099,21,-6.201,8.699,-23.601,-3.301,44.199,-29.101,-4.101,40.299,21,-7.8,6.499,-8.7,-4.6,17.699,-17.201,-2.601,18.399,20.9,-8.5,4.899,-0.301,-5.9,8.999,-18.201,-1.301,8.999,21,-9.601,0.099,-0.5,-6.4,-1.001,-14.501,-1.701,-1.001,21.4,-8.5,-4.4,-0.301,-5.5,-11.001,-16.801,-0.801,-10.901,21.5,-7.5,-6.3,-9.1,-2.901,-20.301,-14.501,-2.001,-20.301,21.7,-6.001,-8.3,-9.1,-1.801,-32.8,-24.901,-2.401,-44.3,22.1,-3.301,-9.5,-18.801,4.099,-50.4,-35.601,-1.901,-57.5,8.499,12.399,-22,-10.301,17.8,-50.3,-23.001,18.5,-56.4],"indices":[1,3,0,3,1,4,2,4,1,4,2,5,4,6,3,6,4,7,5,7,4,7,5,8,7,9,6,9,7,10,8,10,7,10,8,11,10,12,9,12,10,13,11,13,10,13,11,14,13,15,12,15,13,16,14,16,13,16,14,17,16,18,15,18,16,19,17,19,16,19,17,20,19,21,18,21,19,22,20,22,19,22,20,23,22,24,21,24,22,25,23,25,22,25,23,26,25,27,24,27,25,28,26,28,25,28,26,29,28,30,27,30,28,31,29,31,28,31,29,32]}';
// var polyRubber1 = JSON.parse(polyRubberFlat1)



        // --CREATE-TGT-------------RESET: POS, ROT, SIZ, MAT, HIT-.
        // nx.topConnector = BABYLON.Mesh.CreateRibbon("topConnector", [[]], false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE);

        // nx.topConnector.updateVerticesData(BABYLON.VertexBuffer.PositionKind, polyRubber1.positions, false, true);
        // BABYLON.VertexData.ComputeNormals(polyRubber1.positions, polyRubber1.indices, polyRubber1.normals);
        // nx.topConnector.updateVerticesData(BABYLON.VertexBuffer.NormalKind, polyRubber1.normals, false, false);
        // nx.topConnector.position = polyRubber1.POS || new BABYLON.Vector3.Zero();
        // nx.topConnector.rotation = polyRubber1.ROT || new BABYLON.Vector3.Zero();
        // nx.topConnector.parent = nx.outerPad; //PARENT-TO-LANDPAD

        if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.topConnector);} //TODO turn off when under zone
        //TODO: nx.topConnector.material = nx.getMat("sand"); //anmethodology
        // var mat = new BABYLON.StandardMaterial("mat1", nx.scene); //MAT------------------------------------------------.
        // mat.alpha = 1.0; mat.backFaceCulling = false;
        // mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0);
        // mat.specularColor = new BABYLON.Color3(0, 0, 0.22);
        // var texture = new BABYLON.Texture("./copyrightnetcinematics/3d/spacebox1/spacebox1_pz.jpg", nx.scene);
        // texture.vScale = 1.0; //How many images span the surface.
        // texture.uScale = 30.0; //Lots of images squashed and stretched makes an interesting effect-.
        // mat.diffuseTexture = texture;
        // nx.topConnector.material = mat; //TODO nx.defaultMat1
        nx.topConnector.material = nx.defaultMat1;
        nx.topConnector.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0);
        nx.topConnector.material.specularColor = new BABYLON.Color3(0, 0, 0.22);

        // mat.wireframe = true;
        //---------------------------------------------
// debugger;

        //IMPORTANT: POLY-RUBBER-EDITOR-CONNECTION-.
        // nx.polyRubber.createPolyRubberEditor({aMesh:nx.topConnector}); //GOOD-polyrubber-RIBBON-EDITOR-.

    }

    function createLandingPadTop() {
        // function LillyPad1(){
            // var polyPOS = {"x":-759,"y":1309,"z":-1507};
            // var polyROT = {"x":0,"y":-0.01999999999999997,"z":-0.4};
            // var STACKPATHS = [[{"x":21.700044631958008,"y":0.8999505043029785,"z":9.899847030639648},{"x":0,"y":40,"z":50},{"x":-10,"y":40,"z":50}],[{"x":21.200042724609375,"y":-3.900043487548828,"z":9.699884414672852},{"x":0,"y":30,"z":40},{"x":-10,"y":30,"z":40}],[{"x":21.000041961669922,"y":-6.200036525726318,"z":8.699918746948242},{"x":0,"y":20,"z":30},{"x":-10,"y":20,"z":30}],[{"x":21.000041961669922,"y":-7.799996852874756,"z":6.499956130981445},{"x":0,"y":10,"z":20},{"x":-10,"y":10,"z":20}],[{"x":20.900041580200195,"y":-8.499996185302734,"z":4.899995803833008},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":8.999996185302734},{"x":-17.400028228759766,"y":-1.3000003099441528,"z":8.999996185302734}],[{"x":21.000041961669922,"y":-9.600000381469727,"z":0.09999992698431015},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":-1.0000001192092896},{"x":-14.500017166137695,"y":-1.7000004053115845,"z":-1.0000001192092896}],[{"x":21.400043487548828,"y":-8.499996185302734,"z":-4.399996280670166},{"x":-0.30000001192092896,"y":-6.299996376037598,"z":-11.000003814697266},{"x":-16.800025939941406,"y":-0.8000001907348633,"z":-10.900003433227539}],[{"x":21.500043869018555,"y":-7.499997138977051,"z":-6.299956321716309},{"x":-9.099998474121094,"y":-3.400001049041748,"z":-20.30000114440918},{"x":-19.100034713745117,"y":-3.400001049041748,"z":-20.30000114440918}],[{"x":21.700044631958008,"y":-6.000036716461182,"z":-8.299917221069336},{"x":-9.099998474121094,"y":6.599956035614014,"z":-30.30000114440918},{"x":-19.100034713745117,"y":6.599956035614014,"z":-30.30000114440918}],[{"x":22.100046157836914,"y":-3.3000457286834717,"z":-9.499883651733398},{"x":0,"y":30,"z":-40},{"x":-19.100034713745117,"y":16.59994888305664,"z":-40.29999542236328}],[{"x":22.50004768371582,"y":1.1999582052230835,"z":-9.299844741821289},{"x":0,"y":40,"z":-50},{"x":-19.100034713745117,"y":26.600101470947266,"z":-50.29999542236328}]];
            // var STACKPATHS = [[{"x":10,"y":0,"z":10},{"x":0,"y":0,"z":10},{"x":-10,"y":0,"z":10}],[{"x":10,"y":0,"z":0},{"x":0,"y":7.499995231628418,"z":0},{"x":-10,"y":0,"z":0}],[{"x":10,"y":0,"z":-10},{"x":0,"y":0,"z":-10},{"x":-10,"y":0,"z":-10}]]; //napkin
            // var STACKPATHS = [[{"x":10,"y":0,"z":29.2000732421875},{"x":-5.399997234344482,"y":0,"z":45.399879455566406},{"x":-43.29991149902344,"y":0,"z":29.2000732421875}],[{"x":27.50006675720215,"y":0,"z":0},{"x":0,"y":20.8000431060791,"z":0},{"x":-43.29991149902344,"y":0,"z":0}],[{"x":10,"y":0,"z":-32.600074768066406},{"x":-22.300048828125,"y":-0.8000000715255737,"z":-46.699859619140625},{"x":-43.29991149902344,"y":0,"z":-32.600074768066406}]]; //paperhat
// var STACKPATHS = [[{"x":86.7991714477539,"y":1.8999221324920654,"z":39.2000732421875},{"x":51.19975280761719,"y":1.2999601364135742,"z":39.2000732421875},{"x":30.200077056884766,"y":0.5999981164932251,"z":39.2000732421875},{"x":0,"y":0.5999981164932251,"z":39.2000732421875},{"x":-25.500059127807617,"y":0.5999981164932251,"z":39.2000732421875},{"x":-53.499717712402344,"y":0.4999599754810333,"z":39.2000732421875},{"x":-90.79911041259766,"y":1.19992196559906,"z":39.2000732421875}],[{"x":86.7991714477539,"y":1.2999601364135742,"z":29.2000732421875},{"x":50.999755859375,"y":1.1999982595443726,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":29.2000732421875},{"x":-90.79911041259766,"y":0.5999599695205688,"z":29.2000732421875}],[{"x":86.7991714477539,"y":1.2999601364135742,"z":0},{"x":51.19975280761719,"y":0.699998140335083,"z":0},{"x":30.200077056884766,"y":0,"z":0},{"x":0,"y":1.4000003337860107,"z":0},{"x":-25.500059127807617,"y":0,"z":0},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":0},{"x":-90.79911041259766,"y":0.5999599695205688,"z":0}],[{"x":86.7991714477539,"y":1.2999601364135742,"z":-32.600074768066406},{"x":51.19975280761719,"y":0.699998140335083,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":0,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-0.10000186413526535,"z":-32.600074768066406},{"x":-90.79911041259766,"y":0.5999599695205688,"z":-32.600074768066406}],[{"x":86.7991714477539,"y":1.8999221324920654,"z":-42.600074768066406},{"x":51.19975280761719,"y":1.2999601364135742,"z":-42.600074768066406},{"x":30.200077056884766,"y":0.5999981164932251,"z":-42.600074768066406},{"x":0,"y":0.5999981164932251,"z":-42.600074768066406},{"x":-25.500059127807617,"y":0.5999981164932251,"z":-42.600074768066406},{"x":-53.499717712402344,"y":0.4999599754810333,"z":-42.600074768066406},{"x":-90.79911041259766,"y":1.19992196559906,"z":-42.600074768066406}]]; //Towel


            var polyPOS = {x: -759, y: 1315.4999999999986, z: -1507};
            var polyROT = {"x":0,"y":-0.01999999999999997,"z":-0.4}
            // var STACKPATHS = [[{"x":83.49937438964844,"y":-10.500103950500488,"z":49.300071716308594},{"x":72.99938201904297,"y":-8.90007209777832,"z":56.19996643066406},{"x":50.999755859375,"y":-10.400039672851562,"z":67.19979858398438},{"x":30.000076293945312,"y":-10.299999237060547,"z":71.5997314453125},{"x":-0.10000000149011612,"y":-10.109992980957031,"z":72.09972381591797},{"x":-25.600059509277344,"y":-10.299999237060547,"z":70.79974365234375},{"x":-52.89972686767578,"y":-10.520040512084961,"z":63.79985046386719},{"x":-73.69937133789062,"y":-10.540075302124023,"z":51.90003204345703},{"x":-79.49943542480469,"y":-10.540091514587402,"z":47.00010681152344}],[{"x":84.69935607910156,"y":-7.69006872177124,"z":42.800018310546875},{"x":73.49937438964844,"y":-6.6900739669799805,"z":42.800018310546875},{"x":50.999755859375,"y":-6.000036716461182,"z":54.299842834472656},{"x":30.000076293945312,"y":-6.399998188018799,"z":58.99977111816406},{"x":-0.10000000149011612,"y":-6.309991359710693,"z":60.099754333496094},{"x":-25.600059509277344,"y":-6.499998092651367,"z":58.69977569580078},{"x":-53.499717712402344,"y":-6.720036506652832,"z":51.79988098144531},{"x":-72.19939422607422,"y":-6.940072536468506,"z":41.30004119873047},{"x":-86.09933471679688,"y":-10.34007453918457,"z":40.60005187988281}],[{"x":99.59912872314453,"y":-5.9000325202941895,"z":26.60006332397461},{"x":89.09913635253906,"y":-4.400038242340088,"z":25.500059127807617},{"x":50.999755859375,"y":-2.000002145767212,"z":29.2000732421875},{"x":30.200077056884766,"y":0,"z":29.2000732421875},{"x":0,"y":0,"z":29.2000732421875},{"x":-25.500059127807617,"y":0,"z":29.2000732421875},{"x":-53.499717712402344,"y":-2.4000017642974854,"z":29.2000732421875},{"x":-85.79918670654297,"y":-7.400035381317139,"z":29.2000732421875},{"x":-93.39922332763672,"y":-10.400039672851562,"z":30.200077056884766}],[{"x":105.99903106689453,"y":-6.5000319480896,"z":1.4000000953674316},{"x":95.99903106689453,"y":-4.400038242340088,"z":1.4000000953674316},{"x":51.19975280761719,"y":-3.2000012397766113,"z":0},{"x":30.200077056884766,"y":-3.4999990463256836,"z":0},{"x":0,"y":-2.9999990463256836,"z":0},{"x":-25.500059127807617,"y":-3.4999990463256836,"z":0},{"x":-53.499717712402344,"y":-1.1000021696090698,"z":0},{"x":-94.59905242919922,"y":-7.260036945343018,"z":-0.8000000715255737},{"x":-101.7990951538086,"y":-10.260040283203125,"z":-0.5}],[{"x":99.9991226196289,"y":-5.9000325202941895,"z":-24.80005645751953},{"x":87.69915771484375,"y":-5.700037002563477,"z":-26.60006332397461},{"x":51.19975280761719,"y":-0.9000018835067749,"z":-32.600074768066406},{"x":30.200077056884766,"y":0,"z":-32.600074768066406},{"x":0,"y":0,"z":-32.600074768066406},{"x":-25.500059127807617,"y":-1.3000001907348633,"z":-32.600074768066406},{"x":-53.499717712402344,"y":-2.1000020503997803,"z":-32.600074768066406},{"x":-83.39922332763672,"y":-7.000035762786865,"z":-31.80008316040039},{"x":-94.39920806884766,"y":-10.300039291381836,"z":-28.200069427490234}],[{"x":89.09928894042969,"y":-7.700068950653076,"z":-38.800132751464844},{"x":76.79932403564453,"y":-5.9000749588012695,"z":-40.30010986328125},{"x":53.09972381591797,"y":-6.190033912658691,"z":-53.39990997314453},{"x":32.10008239746094,"y":-6.049999713897705,"z":-58.19983673095703},{"x":1.9000002145767212,"y":-5.989993572235107,"z":-59.99980926513672},{"x":-25.500059127807617,"y":-6.199998378753662,"z":-58.99982452392578},{"x":-53.499717712402344,"y":-6.400036334991455,"z":-52.09992980957031},{"x":-72.19939422607422,"y":-6.920079231262207,"z":-42.000083923339844},{"x":-87.3993148803711,"y":-10.120080947875977,"z":-39.00012969970703}],[{"x":86.19933319091797,"y":-7.100085735321045,"z":-44.40019989013672},{"x":76.79932403564453,"y":-9.100072860717773,"z":-53.400062561035156},{"x":53.09972381591797,"y":-9.990034103393555,"z":-65.29988098144531},{"x":32.10008239746094,"y":-9.850000381469727,"z":-70.3998031616211},{"x":1.9000002145767212,"y":-9.58999252319336,"z":-71.59978485107422},{"x":-25.500059127807617,"y":-9.699996948242188,"z":-71.09979248046875},{"x":-53.499717712402344,"y":-9.60003662109375,"z":-63.799903869628906},{"x":-72.19939422607422,"y":-9.920080184936523,"z":-53.50006103515625},{"x":-82.19939422607422,"y":-10.020095825195312,"z":-44.800193786621094}]]; // tailored spacepad
            // var POLYSTACKPATH = [[{"x":83.48,"y":-10.53,"z":49.29},{"x":72.98,"y":-8.91,"z":56.18},{"x":50.99,"y":-10.41,"z":67.19},{"x":30,"y":-10.32,"z":71.58},{"x":-0.11,"y":-10.11,"z":72.08},{"x":-25.63,"y":-10.32,"z":70.79},{"x":-52.91,"y":-7.74,"z":55.59},{"x":-67.63,"y":-8.61,"z":51.29},{"x":-76.06,"y":-8.53,"z":45}],[{"x":84.69,"y":-7.7,"z":42.79},{"x":73.48,"y":-6.7,"z":42.79},{"x":50.99,"y":-6.02,"z":54.29},{"x":30,"y":-6.41,"z":58.99},{"x":-0.11,"y":-6.31,"z":60.09},{"x":-25.63,"y":-6.5,"z":58.68},{"x":-53.5,"y":-6.74,"z":51.79},{"x":-72.2,"y":-6.95,"z":41.29},{"x":-82.24,"y":-7.7,"z":37.29}],[{"x":99.58,"y":-5.91,"z":26.6},{"x":89.08,"y":-4.41,"z":25.5},{"x":50.99,"y":-2.01,"z":29.2},{"x":30.2,"y":0,"z":29.2},{"x":0,"y":0,"z":29.2},{"x":-25.55,"y":0,"z":29.2},{"x":-53.5,"y":-2.5,"z":29.2},{"x":-85.81,"y":-7.41,"z":29.2},{"x":-90.42,"y":-9.07,"z":30.2}],[{"x":105.98,"y":-6.52,"z":1.37},{"x":95.98,"y":-4.41,"z":1.37},{"x":51.18,"y":-3.25,"z":0},{"x":30.2,"y":-3.5,"z":0},{"x":0,"y":-3,"z":0},{"x":-25.55,"y":-3.5,"z":0},{"x":-53.5,"y":-1.13,"z":0},{"x":-94.6,"y":-7.27,"z":-0.82},{"x":-101.81,"y":-10.28,"z":-0.5}],[{"x":99.98,"y":-5.91,"z":-24.81},{"x":87.69,"y":-5.72,"z":-26.63},{"x":51.18,"y":-0.94,"z":-32.62},{"x":30.2,"y":0,"z":-32.62},{"x":0,"y":0,"z":-32.62},{"x":-25.55,"y":-1.31,"z":-32.62},{"x":-53.5,"y":-2.11,"z":-32.62},{"x":-83.42,"y":-7.02,"z":-31.81},{"x":-94.42,"y":-10.32,"z":-28.21}],[{"x":89.08,"y":-7.72,"z":-38.82},{"x":76.79,"y":-5.91,"z":-40.32},{"x":53.09,"y":-6.2,"z":-53.41},{"x":32.09,"y":-6.06,"z":-58.21},{"x":1.87,"y":-5.99,"z":-60},{"x":-25.55,"y":-6.2,"z":-59},{"x":-53.5,"y":-6.41,"z":-52.1},{"x":-72.2,"y":-6.93,"z":-42.01},{"x":-87.42,"y":-10.15,"z":-39.01}],[{"x":86.19,"y":-7.12,"z":-44.41},{"x":76.79,"y":-9.11,"z":-53.41},{"x":53.09,"y":-10,"z":-65.31},{"x":32.09,"y":-9.86,"z":-70.42},{"x":1.87,"y":-9.61,"z":-71.6},{"x":-25.55,"y":-9.7,"z":-71.1},{"x":-53.5,"y":-9.61,"z":-63.8},{"x":-72.2,"y":-9.94,"z":-53.51},{"x":-82.2,"y":-10.03,"z":-44.82}]]
            // var POLYSTACKPATH = [[{"x":83.48,"y":-10.53,"z":49.29},{"x":72.98,"y":-8.91,"z":56.18},{"x":50.99,"y":-10.41,"z":67.19},{"x":30,"y":-10.32,"z":71.58},{"x":4.98,"y":-7.87,"z":62.93},{"x":-25.63,"y":-8.24,"z":68.23},{"x":-52.91,"y":-7.74,"z":55.59},{"x":-67.63,"y":-8.61,"z":51.29},{"x":-76.06,"y":-8.53,"z":45}],[{"x":84.69,"y":-7.7,"z":42.79},{"x":73.48,"y":-6.7,"z":42.79},{"x":50.99,"y":-6.02,"z":54.29},{"x":30,"y":-6.41,"z":58.99},{"x":-0.11,"y":-6.31,"z":60.09},{"x":-25.63,"y":-6.5,"z":58.68},{"x":-53.5,"y":-6.74,"z":51.79},{"x":-72.2,"y":-6.95,"z":41.29},{"x":-82.24,"y":-7.7,"z":37.29}],[{"x":99.58,"y":-5.91,"z":26.6},{"x":89.08,"y":-4.41,"z":25.5},{"x":50.99,"y":-2.01,"z":29.2},{"x":30.2,"y":0,"z":29.2},{"x":0,"y":0,"z":29.2},{"x":-25.55,"y":0,"z":29.2},{"x":-53.5,"y":-2.5,"z":29.2},{"x":-85.81,"y":-7.41,"z":29.2},{"x":-90.42,"y":-9.07,"z":30.2}],[{"x":105.98,"y":-6.52,"z":1.37},{"x":95.98,"y":-4.41,"z":1.37},{"x":51.18,"y":-3.25,"z":0},{"x":30.2,"y":-3.5,"z":0},{"x":0,"y":-3,"z":0},{"x":-25.55,"y":-3.5,"z":0},{"x":-53.5,"y":-1.13,"z":0},{"x":-94.6,"y":-7.27,"z":-0.82},{"x":-96.74,"y":-8.48,"z":-0.5}],[{"x":99.98,"y":-5.91,"z":-24.81},{"x":87.69,"y":-5.72,"z":-26.63},{"x":51.18,"y":-0.94,"z":-32.62},{"x":30.2,"y":0,"z":-32.62},{"x":0,"y":0,"z":-32.62},{"x":-25.55,"y":-1.31,"z":-32.62},{"x":-53.5,"y":-2.11,"z":-32.62},{"x":-83.42,"y":-7.02,"z":-31.81},{"x":-94.42,"y":-10.32,"z":-28.21}],[{"x":89.08,"y":-7.72,"z":-38.82},{"x":76.79,"y":-5.91,"z":-40.32},{"x":53.09,"y":-6.2,"z":-53.41},{"x":32.09,"y":-6.06,"z":-58.21},{"x":1.87,"y":-5.99,"z":-60},{"x":-25.55,"y":-6.2,"z":-59},{"x":-53.5,"y":-6.41,"z":-52.1},{"x":-72.2,"y":-6.93,"z":-42.01},{"x":-87.42,"y":-10.15,"z":-39.01}],[{"x":86.19,"y":-7.12,"z":-44.41},{"x":76.79,"y":-9.11,"z":-53.41},{"x":53.09,"y":-10,"z":-65.31},{"x":32.09,"y":-9.86,"z":-70.42},{"x":1.87,"y":-9.61,"z":-71.6},{"x":-25.55,"y":-9.7,"z":-71.1},{"x":-53.5,"y":-9.61,"z":-63.8},{"x":-72.2,"y":-9.94,"z":-53.51},{"x":-82.2,"y":-10.03,"z":-44.82}]];
            // var POLYSTACKPATH = [[{"x":83.48,"y":-10.53,"z":49.29},{"x":72.98,"y":-8.91,"z":56.18},{"x":57.72,"y":-7.47,"z":56.27},{"x":30,"y":-7.45,"z":63.27},{"x":4.98,"y":-7.87,"z":62.93},{"x":-25.63,"y":-7.75,"z":64.54},{"x":-52.91,"y":-7.74,"z":55.59},{"x":-67.63,"y":-8.61,"z":51.29},{"x":-76.06,"y":-8.53,"z":45}],[{"x":84.69,"y":-7.7,"z":42.79},{"x":73.48,"y":-6.7,"z":42.79},{"x":50.99,"y":-6.02,"z":54.29},{"x":30,"y":-6.41,"z":58.99},{"x":-0.11,"y":-6.31,"z":60.09},{"x":-25.63,"y":-6.5,"z":58.68},{"x":-53.5,"y":-6.74,"z":51.79},{"x":-72.2,"y":-6.95,"z":41.29},{"x":-82.24,"y":-7.7,"z":37.29}],[{"x":99.58,"y":-5.91,"z":26.6},{"x":89.08,"y":-4.41,"z":25.5},{"x":50.99,"y":-2.01,"z":29.2},{"x":30.2,"y":0,"z":29.2},{"x":0,"y":0,"z":29.2},{"x":-25.55,"y":0,"z":29.2},{"x":-53.5,"y":-2.5,"z":29.2},{"x":-85.81,"y":-7.41,"z":29.2},{"x":-90.42,"y":-8.79,"z":30.2}],[{"x":105.98,"y":-6.52,"z":1.37},{"x":95.98,"y":-4.41,"z":1.37},{"x":51.18,"y":-3.25,"z":0},{"x":30.2,"y":-3.5,"z":0},{"x":0,"y":-3,"z":0},{"x":-25.55,"y":-3.5,"z":0},{"x":-53.5,"y":-1.13,"z":0},{"x":-94.6,"y":-7.27,"z":-0.82},{"x":-96.74,"y":-8.48,"z":-0.5}],[{"x":99.98,"y":-5.91,"z":-24.81},{"x":87.69,"y":-5.72,"z":-26.63},{"x":51.18,"y":-0.94,"z":-32.62},{"x":30.2,"y":0,"z":-32.62},{"x":0,"y":0,"z":-32.62},{"x":-25.55,"y":-1.31,"z":-32.62},{"x":-53.5,"y":-2.11,"z":-32.62},{"x":-83.42,"y":-7.02,"z":-31.81},{"x":-94.42,"y":-10.32,"z":-28.21}],[{"x":89.08,"y":-7.72,"z":-38.82},{"x":76.79,"y":-5.91,"z":-40.32},{"x":53.09,"y":-6.2,"z":-53.41},{"x":32.09,"y":-6.06,"z":-58.21},{"x":1.87,"y":-5.99,"z":-60},{"x":-25.55,"y":-6.2,"z":-59},{"x":-53.5,"y":-6.41,"z":-52.1},{"x":-72.2,"y":-6.93,"z":-42.01},{"x":-87.42,"y":-10.15,"z":-39.01}],[{"x":86.19,"y":-7.12,"z":-44.41},{"x":76.79,"y":-9.11,"z":-53.41},{"x":53.09,"y":-10,"z":-65.31},{"x":32.09,"y":-9.86,"z":-70.42},{"x":1.87,"y":-9.61,"z":-71.6},{"x":-25.55,"y":-9.7,"z":-71.1},{"x":-53.5,"y":-9.61,"z":-63.8},{"x":-72.2,"y":-9.94,"z":-53.51},{"x":-82.2,"y":-10.03,"z":-44.82}]];
            // var POLYSTACKPATH = [[{"x":83.48,"y":-10.53,"z":49.29},{"x":72.98,"y":-8.91,"z":56.18},{"x":57.72,"y":-7.47,"z":56.27},{"x":30,"y":-7.45,"z":63.27},{"x":4.98,"y":-7.87,"z":62.93},{"x":-25.63,"y":-7.75,"z":64.54},{"x":-52.91,"y":-7.74,"z":55.59},{"x":-67.63,"y":-8.61,"z":51.29},{"x":-76.06,"y":-8.53,"z":45}],[{"x":84.69,"y":-7.7,"z":42.79},{"x":73.48,"y":-6.7,"z":42.79},{"x":50.99,"y":-6.02,"z":54.29},{"x":30,"y":-6.41,"z":58.99},{"x":-0.11,"y":-6.31,"z":60.09},{"x":-25.63,"y":-6.5,"z":58.68},{"x":-53.5,"y":-6.74,"z":51.79},{"x":-72.2,"y":-6.95,"z":41.29},{"x":-82.24,"y":-7.7,"z":37.29}],[{"x":99.58,"y":-5.91,"z":26.6},{"x":89.08,"y":-4.41,"z":25.5},{"x":50.99,"y":-2.01,"z":29.2},{"x":30.2,"y":0,"z":29.2},{"x":0,"y":0,"z":29.2},{"x":-25.55,"y":0,"z":29.2},{"x":-53.5,"y":-2.5,"z":29.2},{"x":-85.81,"y":-7.41,"z":29.2},{"x":-90.42,"y":-8.79,"z":30.2}],[{"x":105.98,"y":-6.52,"z":1.37},{"x":95.98,"y":-4.41,"z":1.37},{"x":51.18,"y":-3.25,"z":0},{"x":30.2,"y":-3.5,"z":0},{"x":0,"y":-3,"z":0},{"x":-25.55,"y":-3.5,"z":0},{"x":-53.5,"y":-1.13,"z":0},{"x":-94.6,"y":-7.27,"z":-0.82},{"x":-96.74,"y":-8.48,"z":-0.5}],[{"x":99.98,"y":-5.91,"z":-24.81},{"x":87.69,"y":-5.72,"z":-26.63},{"x":51.18,"y":-0.94,"z":-32.62},{"x":30.2,"y":0,"z":-32.62},{"x":0,"y":0,"z":-32.62},{"x":-25.55,"y":-1.31,"z":-32.62},{"x":-53.5,"y":-2.11,"z":-32.62},{"x":-83.42,"y":-6.49,"z":-31.81},{"x":-94.31,"y":-9.15,"z":-26.5}],[{"x":89.08,"y":-7.72,"z":-38.82},{"x":76.79,"y":-5.91,"z":-40.32},{"x":53.09,"y":-6.2,"z":-53.41},{"x":32.09,"y":-6.06,"z":-58.21},{"x":1.87,"y":-5.99,"z":-60},{"x":-25.55,"y":-6.2,"z":-59},{"x":-53.5,"y":-6.41,"z":-52.1},{"x":-72.2,"y":-6.93,"z":-42.01},{"x":-87.2,"y":-8.65,"z":-40.01}],[{"x":86.19,"y":-7.12,"z":-44.41},{"x":76.79,"y":-9.11,"z":-53.41},{"x":60.52,"y":-7.33,"z":-54.41},{"x":32.09,"y":-7.85,"z":-64.78},{"x":3.14,"y":-6.68,"z":-62.37},{"x":-25.46,"y":-7.85,"z":-66.38},{"x":-53.5,"y":-7.31,"z":-55.21},{"x":-72.2,"y":-8.65,"z":-50.6},{"x":-81.99,"y":-8.57,"z":-45.85}]];
            // var POLYSTACKPATH = [[{"x":83.48,"y":-10.53,"z":49.29},{"x":72.98,"y":-8.91,"z":56.18},{"x":57.72,"y":-7.47,"z":56.27},{"x":30,"y":-7.45,"z":63.27},{"x":4.98,"y":-7.87,"z":62.93},{"x":-25.63,"y":-7.75,"z":64.54},{"x":-52.91,"y":-7.74,"z":55.59},{"x":-67.63,"y":-8.61,"z":51.29},{"x":-76.06,"y":-8.53,"z":45}],[{"x":84.69,"y":-7.7,"z":42.79},{"x":73.48,"y":-6.7,"z":42.79},{"x":50.99,"y":-6.02,"z":54.29},{"x":30,"y":-6.41,"z":58.99},{"x":-0.11,"y":-6.31,"z":60.09},{"x":-25.63,"y":-6.5,"z":58.68},{"x":-53.5,"y":-6.74,"z":51.79},{"x":-72.2,"y":-6.95,"z":41.29},{"x":-82.24,"y":-7.7,"z":37.29}],[{"x":99.58,"y":-5.91,"z":26.6},{"x":89.08,"y":-4.41,"z":25.5},{"x":50.99,"y":-2.01,"z":29.2},{"x":30.2,"y":0,"z":29.2},{"x":0,"y":0,"z":29.2},{"x":-25.55,"y":0,"z":29.2},{"x":-53.5,"y":-2.5,"z":29.2},{"x":-85.81,"y":-7.41,"z":29.2},{"x":-90.42,"y":-8.79,"z":30.2}],[{"x":105.98,"y":-6.52,"z":1.37},{"x":95.98,"y":-4.41,"z":1.37},{"x":51.18,"y":-3.25,"z":0},{"x":30.2,"y":-3.5,"z":0},{"x":0,"y":-3,"z":0},{"x":-25.55,"y":-3.5,"z":0},{"x":-53.5,"y":-1.13,"z":0},{"x":-94.28,"y":-5.6,"z":-0.63},{"x":-96.13,"y":-7.93,"z":-0.5}],[{"x":99.98,"y":-5.91,"z":-24.81},{"x":87.69,"y":-5.72,"z":-26.63},{"x":51.18,"y":-0.94,"z":-32.62},{"x":30.2,"y":0,"z":-32.62},{"x":0,"y":0,"z":-32.62},{"x":-25.55,"y":-1.31,"z":-32.62},{"x":-53.5,"y":-2.11,"z":-32.62},{"x":-79.45,"y":-4.89,"z":-30.65},{"x":-90.99,"y":-8.19,"z":-28.15}],[{"x":89.08,"y":-7.72,"z":-38.82},{"x":76.79,"y":-5.91,"z":-40.32},{"x":53.09,"y":-6.2,"z":-53.41},{"x":32.09,"y":-6.06,"z":-58.21},{"x":1.87,"y":-5.99,"z":-60},{"x":-25.55,"y":-6.2,"z":-59},{"x":-53.5,"y":-6.41,"z":-52.1},{"x":-72.2,"y":-6.93,"z":-42.01},{"x":-83.92,"y":-7.56,"z":-36.41}],[{"x":86.19,"y":-7.12,"z":-44.41},{"x":76.79,"y":-9.11,"z":-53.41},{"x":59.59,"y":-6.97,"z":-53.41},{"x":32.09,"y":-7.31,"z":-63.23},{"x":3.14,"y":-6.7,"z":-60.85},{"x":-25.46,"y":-7.85,"z":-66.38},{"x":-53.5,"y":-7.22,"z":-54.12},{"x":-67.13,"y":-8,"z":-50.6},{"x":-74.07,"y":-8.24,"z":-48.1}]];
            // var POLYSTACKPATH = [[{"x":83.48,"y":-10.53,"z":49.29},{"x":72.98,"y":-8.91,"z":56.18},{"x":57.72,"y":-7.47,"z":56.27},{"x":27.79,"y":-8,"z":67},{"x":2.15,"y":-7.39,"z":62.13},{"x":-25.63,"y":-7.75,"z":64.54},{"x":-52.91,"y":-7.74,"z":55.59},{"x":-67.63,"y":-8.61,"z":51.29},{"x":-76.06,"y":-8.53,"z":45}],[{"x":84.69,"y":-7.7,"z":42.79},{"x":73.48,"y":-6.7,"z":42.79},{"x":50.99,"y":-6.02,"z":54.29},{"x":30,"y":-6.41,"z":58.99},{"x":-0.11,"y":-6.31,"z":60.09},{"x":-25.63,"y":-6.5,"z":58.68},{"x":-53.5,"y":-6.74,"z":51.79},{"x":-72.2,"y":-6.95,"z":41.29},{"x":-82.24,"y":-7.7,"z":37.29}],[{"x":99.58,"y":-5.91,"z":26.6},{"x":89.08,"y":-4.41,"z":25.5},{"x":50.99,"y":-2.01,"z":29.2},{"x":30.2,"y":0,"z":29.2},{"x":0,"y":0,"z":29.2},{"x":-25.55,"y":0,"z":29.2},{"x":-53.5,"y":-2.5,"z":29.2},{"x":-85.81,"y":-7.41,"z":29.2},{"x":-90.42,"y":-8.25,"z":27.04}],[{"x":105.98,"y":-6.52,"z":1.37},{"x":95.98,"y":-4.41,"z":1.37},{"x":51.18,"y":-3.25,"z":0},{"x":30.2,"y":-3.5,"z":0},{"x":0,"y":-3,"z":0},{"x":-25.55,"y":-3.5,"z":0},{"x":-53.5,"y":-1.13,"z":0},{"x":-94.28,"y":-5.6,"z":-0.63},{"x":-96.13,"y":-7.93,"z":-0.5}],[{"x":99.98,"y":-5.91,"z":-24.81},{"x":87.69,"y":-5.72,"z":-26.63},{"x":51.18,"y":-0.94,"z":-32.62},{"x":30.2,"y":0,"z":-32.62},{"x":0,"y":0,"z":-32.62},{"x":-25.55,"y":-1.31,"z":-32.62},{"x":-53.5,"y":-2.11,"z":-32.62},{"x":-79.45,"y":-4.89,"z":-30.65},{"x":-90.99,"y":-8.19,"z":-27.13}],[{"x":89.08,"y":-7.72,"z":-38.82},{"x":76.79,"y":-5.91,"z":-40.32},{"x":53.09,"y":-6.2,"z":-53.41},{"x":32.09,"y":-6.06,"z":-58.21},{"x":1.87,"y":-5.99,"z":-60},{"x":-25.55,"y":-6.2,"z":-59},{"x":-53.5,"y":-6.41,"z":-52.1},{"x":-72.2,"y":-6.93,"z":-42.01},{"x":-83.92,"y":-7.56,"z":-36.41}],[{"x":86.19,"y":-7.12,"z":-44.41},{"x":76.79,"y":-9.11,"z":-53.41},{"x":59.59,"y":-6.97,"z":-53.41},{"x":32.09,"y":-7.31,"z":-63.23},{"x":3.14,"y":-6.7,"z":-60.85},{"x":-25.46,"y":-7.85,"z":-66.38},{"x":-53.5,"y":-7.22,"z":-54.12},{"x":-67.13,"y":-8,"z":-50.6},{"x":-74.07,"y":-8.24,"z":-48.1}]];
            var POLYSTACKPATH = [[{"x":83.48,"y":-10.53,"z":49.29},{"x":72.98,"y":-8.91,"z":56.18},{"x":59.15,"y":-7.41,"z":54.63},{"x":27.79,"y":-8,"z":67},{"x":2.15,"y":-7.39,"z":62.13},{"x":-25.63,"y":-7.75,"z":64.54},{"x":-52.91,"y":-7.74,"z":55.59},{"x":-67.63,"y":-8.61,"z":51.29},{"x":-76.06,"y":-8.53,"z":45}],[{"x":84.69,"y":-7.7,"z":42.79},{"x":73.48,"y":-6.7,"z":42.79},{"x":50.99,"y":-6.02,"z":54.29},{"x":30,"y":-6.41,"z":58.99},{"x":-0.11,"y":-6.31,"z":60.09},{"x":-25.63,"y":-6.5,"z":58.68},{"x":-53.5,"y":-6.74,"z":51.79},{"x":-72.2,"y":-6.95,"z":41.29},{"x":-82.24,"y":-7.7,"z":37.29}],[{"x":99.58,"y":-5.91,"z":26.6},{"x":89.08,"y":-4.41,"z":25.5},{"x":50.99,"y":-2.01,"z":29.2},{"x":30.2,"y":0,"z":29.2},{"x":0,"y":0,"z":29.2},{"x":-25.55,"y":0,"z":29.2},{"x":-53.5,"y":-2.5,"z":29.2},{"x":-85.81,"y":-7.41,"z":29.2},{"x":-90.42,"y":-8.25,"z":27.04}],[{"x":105.98,"y":-6.52,"z":1.37},{"x":95.98,"y":-4.41,"z":1.37},{"x":51.18,"y":-3.25,"z":0},{"x":30.2,"y":-3.5,"z":0},{"x":0,"y":-3,"z":0},{"x":-25.55,"y":-3.5,"z":0},{"x":-53.5,"y":-1.13,"z":0},{"x":-94.28,"y":-5.6,"z":-0.63},{"x":-96.13,"y":-7.93,"z":-0.5}],[{"x":99.98,"y":-5.91,"z":-24.81},{"x":87.69,"y":-5.72,"z":-26.63},{"x":51.18,"y":-0.94,"z":-32.62},{"x":30.2,"y":0,"z":-32.62},{"x":0,"y":0,"z":-32.62},{"x":-25.55,"y":-1.31,"z":-32.62},{"x":-53.5,"y":-2.11,"z":-32.62},{"x":-79.45,"y":-4.89,"z":-30.65},{"x":-90.99,"y":-8.19,"z":-27.13}],[{"x":89.08,"y":-7.72,"z":-38.82},{"x":76.79,"y":-5.91,"z":-40.32},{"x":53.09,"y":-6.2,"z":-53.41},{"x":32.09,"y":-6.06,"z":-58.21},{"x":1.87,"y":-5.99,"z":-60},{"x":-25.55,"y":-6.2,"z":-59},{"x":-53.5,"y":-6.41,"z":-52.1},{"x":-72.2,"y":-6.93,"z":-42.01},{"x":-83.92,"y":-7.56,"z":-36.41}],[{"x":86.19,"y":-7.12,"z":-44.41},{"x":76.79,"y":-9.11,"z":-53.41},{"x":59.59,"y":-6.97,"z":-53.41},{"x":32.09,"y":-7.31,"z":-63.23},{"x":3.14,"y":-6.7,"z":-60.85},{"x":-25.46,"y":-7.85,"z":-66.38},{"x":-53.5,"y":-7.22,"z":-54.12},{"x":-67.13,"y":-8,"z":-50.6},{"x":-74.07,"y":-8.24,"z":-48.1}]];
            
            var STACKVECTORS = [];
            if(POLYSTACKPATH.length){ //CONVERT: VERTs to VECTOR_STACK-.
                var rowpath = [];
                for(var row=0; row<POLYSTACKPATH.length;row++){
                    rowpath=[];
                    for(var col=0; col<POLYSTACKPATH[row].length;col++){
                        rowpath.push(new BABYLON.Vector3(POLYSTACKPATH[row][col].x,POLYSTACKPATH[row][col].y,POLYSTACKPATH[row][col].z))
                    };;
                    STACKVECTORS.push(rowpath)
                }
            }

            //--CREATE-TGT-------------RESET: POS, ROT, SIZ, MAT, HIT-.
            nx.spacepadTop = BABYLON.Mesh.CreateRibbon("topConnector", STACKVECTORS, false, false, 0, nx.scene, true, BABYLON.Mesh.BACKSIDE);
            nx.spacepadTop.position = polyPOS || new BABYLON.Vector3.Zero();
            nx.spacepadTop.rotation = polyROT || new BABYLON.Vector3.Zero();
            // nx.spacepadTop.parent = nx.topConnector; //PARENT-TO-LANDPAD
            // nx.spacepadTop.visibility = 0;

            nx.spacepadTop.position = new BABYLON.Vector3.Zero();
            nx.spacepadTop.position.copyFrom({x: -759, y: 2131.2, z: -1507})
            nx.spacepadTop.parent = nx.plateMaster1;
            nx.spacepadTop.visibility = 1; //FIX parent

            nx.spacepadTop.polyRow = POLYSTACKPATH.length; //META-DATA-REQUIRED-TO REHYDRATE AFTER EDIT-.
            nx.spacepadTop.polyCol = POLYSTACKPATH[0].length;
        

            // if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.spacepadTop);} //TODO turn off when under zone
            //TODO: nx.spacepadTop.material = nx.getMat("sand"); //anmethodology
            // var mat = new BABYLON.StandardMaterial("mat1", nx.scene); //MAT------------------------------------------------.
            nx.spacepadmaterial = new BABYLON.StandardMaterial("nx.spacepadmaterial", nx.scene); //MAT------------------------------------------------.
            nx.spacepadmaterial.alpha = 1; //mat.backFaceCulling = false;
            // nx.spacepadmaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0); //purple
            nx.spacepadmaterial.diffuseColor = new BABYLON.Color3(0.9, 0.95, 0.99); //yellow white
            nx.spacepadmaterial.specularColor = new BABYLON.Color3(0, 0, 0.22);
            // nx.spacepadmaterial = mat;

            // var texture = new BABYLON.Texture("./textures/sand.jpg", nx.scene);
            var texture = new BABYLON.Texture("./copyrightnetcinematics/3d/spacebox1/spacebox1_pz.jpg", nx.scene);
            texture.vScale = 1.0; //How many images span the surface.
            texture.uScale = 30.0; //Lots of images squashed and stretched makes an interesting effect-.
            nx.spacepadmaterial.diffuseTexture = texture;
            nx.spacepadTop.material = nx.spacepadmaterial;
            if(nx.anmz && nx.anmz.orby){nx.anmz.orby.collisionItems.push(nx.spacepadTop);}  //TODO turn off when under zone
            // nx.spacepadTop.parent = nx.outerPad; //PARENT-TO-LANDPAD
            // mat.wireframe = true;
            //---------------------------------------------
        // }
        // LillyPad1();

        //IMPORTANT: POLY-RUBBER-EDITOR-CONNECTION-.
        // if(nx.polyRubber){nx.polyRubber.createPolyRubberEditor({aMesh:nx.spacepadTop}); } //GOOD-polyrubber-RIBBON-EDITOR-.


    }


    function createLandingPad() {
        createOuterPad();
        createInnerPad();
        // nx.spacepipe.createOrbs();
        createPipeConnector();

        createLandingPadTop();
        // nx.outerPad.position = new BABYLON.Vector3(-688,1393,-1750);
        // nx.outerPad.position = new BABYLON.Vector3(0,0,0); //build position
        // nx.outerPad.position = new BABYLON.Vector3(-733,1454,-1770); //space position
        // nx.outerPad.position = new BABYLON.Vector3(-717,1443,-1763); //space position
        // nx.outerPad.position = new BABYLON.Vector3(-717,1307,-1768); //space position
        // nx.outerPad.position = new BABYLON.Vector3(-719,1309,-1771); //space position
        nx.outerPad.position = new BABYLON.Vector3(-759,1309,-1507); //space position
        nx.outerPad.rotation.x = 0;
        nx.outerPad.rotation.y = -0.03;
        // nx.outerPad.rotation.y = -0.35;
        nx.outerPad.rotation.z = -0.4;
        // nx.outerPad.rotation.z = -0.5;

        nx.outerPad.scaling = new BABYLON.Vector3(nx.globalScale, nx.globalScale, nx.globalScale);
        nx.outerPad.parent = nx.ground;
        // nx.anmz.orby.collisionItems.push(nx.outerPad);
        // nx.outerPad.position = new BABYLON.Vector3(10,-100,10);
    }
    createLandingPad();


    function createLandingPadMasterEditor(){
        //------MASTER-EDIT-----------------------------------------------------------------------------------
        nx.outerPad.master = BABYLON.Mesh.CreateSphere("editNode", 1, 5, nx.scene);
        nx.outerPad.master.position = new BABYLON.Vector3(0,50,0)
        nx.outerPad.master.editTgt = nx.outerPad;
        nx.outerPad.master.material = nx.blueMat;
        nx.outerPad.master.editFn = function(){ //TENKEY-EVENTS-----------------------------------------------------------------------------
            if(this.editMode==="greenEdit"){
                var direction = (nx.ctrl.num8 || nx.ctrl.num6 || nx.ctrl.num7 || nx.ctrl.plus || nx.ctrl.num1) ? 1 : (nx.ctrl.num4 || nx.ctrl.num2 || nx.ctrl.num9 || nx.ctrl.num3 || nx.ctrl.minus) ? -1 : 0;
                // nx.ctrl.mag = (nx.ctrl.alt)? 0.1 : 1;  // alternate MAGNITUDE on Transforms and rots
                nx.ctrl.mag = (nx.ctrl.ctrl)? 0.1 : 1;  // default MAGNITUDE on Transforms and rots
                var moveAmount = nx.ctrl.mag * direction;
                if(nx.ctrl.num8 || nx.ctrl.num2){ //-------------------------Transform-X-Y-Z.
                    this.editTgt.position.z+=moveAmount; }
                if(nx.ctrl.num4 || nx.ctrl.num6){ 
                    this.editTgt.position.x+=moveAmount; }
                if((nx.ctrl.plus || nx.ctrl.minus) && !nx.ctrl.alt){ //------Y
                  this.editTgt.position.y+=moveAmount; }
                else if((nx.ctrl.plus || nx.ctrl.minus) && nx.ctrl.alt){//--------PITCH X
                    nx.outerPad.master.editTgt.rotation.x += moveAmount/10; }
                if(nx.ctrl.num7 || nx.ctrl.num9 ){ //------------YAW Y
                    nx.outerPad.master.editTgt.rotation.y += moveAmount/10; }
                if(nx.ctrl.num1 || nx.ctrl.num3 ){ //-------ROLL Z
                    nx.outerPad.master.editTgt.rotation.z += moveAmount/10; }
                if(nx.ctrl.asterisk){ //--------------------------------------------------------------------------------EXPORT-.
                    //EXP: POS, ROT, MAT, STACKPATH, MOVEPATH, POSPATH, POSCAM, POSSUN, POSTGT
                    console.log('nx.outerPad---------------------')
                    console.log('POS: '+JSON.stringify(nx.outerPad.position))
                    console.log('ROT: '+JSON.stringify(nx.outerPad.rotation))
                }
            }
        }
        nx.outerPad.master.actionManager = new BABYLON.ActionManager(nx.scene); //EDIT-MESH-CLICK-EVENTS-------------------------------------------
        nx.outerPad.master.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
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
        nx.outerPad.master.parent = nx.outerPad;
    }
    // createLandingPadMasterEditor();  //EDITOR-.

} 




// /**********************************-END-LANDING-PAD-*****************


// var spliceSpacePipe = function(arrayPath, num){  //PIPE DECRUMPLER: loop through arrayPath and pull out the num to reduce complexity-.
//     var product = [];
//     for(var i=0; i<arrayPath.length; i++){
//         if(i && i%num===0){continue;}
//         else{ product.push(arrayPath[i]) }
//     }
//     return product;
// }
// nx.spacepipe7 = spliceSpacePipe(nx.spacepipe6,2);

// nx.spacepipe8 = [{"x":-1237.77,"y":1156.43,"z":-850.395},{"x":-1218.185,"y":1155.13,"z":-850.23},{"x":-1206.91,"y":1155.82,"z":-849.17},{"x":-1184.03,"y":1144.845,"z":-848.145},{"x":-1164.17,"y":1128.88,"z":-846.675},{"x":-1152.1,"y":1116.335,"z":-844.84},{"x":-1141.045,"y":1104.515,"z":-842.745},{"x":-1131.005,"y":1078.38,"z":-840.5},{"x":-1122.105,"y":1061.595,"z":-838.19},{"x":-1111.195,"y":1047.76,"z":-835.88},{"x":-1097.65,"y":1037.895,"z":-833.595},{"x":-1081.615,"y":1031.78,"z":-831.325},{"x":-1066.295,"y":1028.01,"z":-829.05},{"x":-1049.3,"y":1024.57,"z":-826.73},{"x":-1035.83,"y":1019.665,"z":-824.325},{"x":-1017.615,"y":1012.415,"z":-821.825},{"x":-998.97,"y":1003.09,"z":-819.235},{"x":-979.93,"y":992.76,"z":-816.58},{"x":-960.535,"y":982.695,"z":-813.91},{"x":-940.82,"y":973.89,"z":-811.26},{"x":-920.81,"y":966.92,"z":-808.675},{"x":-900.535,"y":962.08,"z":-806.19},{"x":-879.99,"y":959.405,"z":-803.835},{"x":-859.14,"y":958.51,"z":-801.66},{"x":-837.92,"y":958.415,"z":-799.74},{"x":-816.33,"y":957.7,"z":-798.165},{"x":-794.455,"y":955.04,"z":-797.04},{"x":-772.48,"y":949.9,"z":-796.42},{"x":-750.61,"y":942.82,"z":-796.315},{"x":-728.985,"y":935.015,"z":-796.665},{"x":-707.645,"y":927.685,"z":-797.355},{"x":-686.545,"y":921.455,"z":-798.27},{"x":-665.635,"y":916.29,"z":-799.3},{"x":-644.86,"y":911.85,"z":-800.385},{"x":-624.095,"y":907.775,"z":-801.43},{"x":-603.11,"y":903.86,"z":-802.32},{"x":-581.54,"y":899.95,"z":-802.845},{"x":-559.125,"y":895.845,"z":-802.72},{"x":-535.915,"y":891.32,"z":-801.635},{"x":-512.42,"y":886.225,"z":-799.38},{"x":-489.455,"y":880.605,"z":-795.905},{"x":-467.74,"y":874.715,"z":-791.36},{"x":-447.63,"y":868.89,"z":-787.48},{"x":-429.045,"y":863.385,"z":-782.705},{"x":-411.66,"y":858.725,"z":-778},{"x":-395.155,"y":853.89,"z":-771.67},{"x":-379.34,"y":849.63,"z":-764.865},{"x":-363.95,"y":845.465,"z":-756.75},{"x":-349.58,"y":841.935,"z":-749.075},{"x":-335.615,"y":838.17,"z":-741.1},{"x":-322.025,"y":834.71,"z":-733.15},{"x":-308.85,"y":831.5,"z":-725.025},{"x":-295.825,"y":828.11,"z":-716.99},{"x":-284.575,"y":825.215,"z":-709.62},{"x":-272.355,"y":821.995,"z":-701.055},{"x":-261.725,"y":819.045,"z":-692.965},{"x":-250.57,"y":815.57,"z":-683.52},{"x":-239.67,"y":811.96,"z":-674.1},{"x":-229.03,"y":808.43,"z":-664.51},{"x":-218.63,"y":804.87,"z":-654.855},{"x":-208.46,"y":801.195,"z":-645.275},{"x":-198.515,"y":797.5,"z":-635.495},{"x":-188.79,"y":793.895,"z":-625.955},{"x":-179.28,"y":790.08,"z":-616.295},{"x":-166.895,"y":785.055,"z":-602.935},{"x":-151.27,"y":778.405,"z":-584.89},{"x":-133.99,"y":771.065,"z":-564.23},{"x":-117.925,"y":763.865,"z":-542.87},{"x":-103.25,"y":756.73,"z":-522.305},{"x":-88.525,"y":749.69,"z":-501.545},{"x":-74.505,"y":742.77,"z":-481.025},{"x":-61.095,"y":735.995,"z":-460.99},{"x":-48.18,"y":729.4,"z":-441.455},{"x":-35.68,"y":723,"z":-422.435},{"x":-23.565,"y":716.815,"z":-403.98},{"x":-11.87,"y":710.87,"z":-386.195},{"x":-0.655,"y":705.205,"z":-369.2},{"x":10.015,"y":699.855,"z":-352.99},{"x":20.055,"y":694.82,"z":-338.065},{"x":29.57,"y":690.055,"z":-323.29},{"x":40.605,"y":685.23,"z":-306.635},{"x":54.43,"y":680.12,"z":-284.32},{"x":65.86,"y":677.82,"z":-264.77},{"x":78.395,"y":676.225,"z":-242.97},{"x":91.965,"y":675.85,"z":-217.73},{"x":105.215,"y":677.1,"z":-190.395},{"x":116.685,"y":680.135,"z":-162.465},{"x":125.21,"y":684.83,"z":-135.105},{"x":130.14,"y":690.825,"z":-108.87},{"x":131.27,"y":697.675,"z":-83.88},{"x":128.685,"y":704.91,"z":-60.075},{"x":122.61,"y":712.09,"z":-37.44},{"x":113.29,"y":718.815,"z":-16.085},{"x":101.01,"y":724.72,"z":3.78},{"x":86.075,"y":729.49,"z":21.915},{"x":68.84,"y":732.905,"z":38.05},{"x":49.675,"y":734.81,"z":51.94},{"x":28.99,"y":735.115,"z":63.375},{"x":7.205,"y":733.79,"z":72.165},{"x":-15.255,"y":730.83,"z":78.18},{"x":-38.005,"y":726.22,"z":81.335},{"x":-60.74,"y":719.945,"z":81.57},{"x":-83.265,"y":711.955,"z":78.88},{"x":-105.425,"y":702.28,"z":73.345},{"x":-127.005,"y":691.07,"z":65.185},{"x":-147.61,"y":678.71,"z":54.8},{"x":-166.705,"y":665.73,"z":42.685},{"x":-183.72,"y":652.675,"z":29.315},{"x":-198.235,"y":639.935,"z":15.05},{"x":-210.06,"y":627.655,"z":0.045},{"x":-219.225,"y":615.76,"z":-15.64},{"x":-225.82,"y":604.105,"z":-31.95},{"x":-229.95,"y":592.55,"z":-48.75},{"x":-231.655,"y":581.02,"z":-65.805},{"x":-230.965,"y":569.49,"z":-82.815},{"x":-227.92,"y":557.965,"z":-99.455},{"x":-222.62,"y":546.435,"z":-115.4},{"x":-215.185,"y":534.905,"z":-130.355},{"x":-205.8,"y":523.375,"z":-144.03},{"x":-194.665,"y":511.845,"z":-156.175},{"x":-182.03,"y":500.315,"z":-166.58},{"x":-168.155,"y":488.785,"z":-175.055},{"x":-153.33,"y":477.255,"z":-181.46},{"x":-137.865,"y":465.725,"z":-185.705},{"x":-122.065,"y":454.2,"z":-187.73},{"x":-106.245,"y":442.67,"z":-187.525},{"x":-90.72,"y":431.14,"z":-185.13},{"x":-75.785,"y":419.61,"z":-180.62},{"x":-61.725,"y":408.075,"z":-174.105},{"x":-48.81,"y":396.52,"z":-165.755},{"x":-37.275,"y":384.94,"z":-155.745},{"x":-27.32,"y":373.3,"z":-144.305},{"x":-19.125,"y":361.585,"z":-131.68},{"x":-12.825,"y":349.78,"z":-118.13},{"x":-8.525,"y":337.91,"z":-103.92},{"x":-6.31,"y":326.025,"z":-89.3},{"x":-6.24,"y":314.205,"z":-74.475},{"x":-8.32,"y":302.615,"z":-59.635},{"x":-12.415,"y":291.505,"z":-45},{"x":-18.15,"y":281.215,"z":-30.92},{"x":-24.895,"y":272.14,"z":-17.875},{"x":-31.86,"y":264.62,"z":-6.405},{"x":-38.315,"y":258.82,"z":3.1},{"x":-44.375,"y":254.675,"z":11.925},{"x":-51.5,"y":250.1,"z":20.985},{"x":-59.12,"y":245.735,"z":30.39},{"x":-72.495,"y":241.27,"z":46.21},{"x":-88.695,"y":242.58,"z":66.06},{"x":-104.695,"y":253.28,"z":85.81},{"x":-120.695,"y":268.885,"z":105.56},{"x":-136.695,"y":278.43,"z":125.315},{"x":-152.69,"y":283.055,"z":145.065},{"x":-168.595,"y":279.565,"z":164.815},{"x":-184.595,"y":268.12,"z":184.565},{"x":-200.595,"y":252.735,"z":204.315},{"x":-216.595,"y":239,"z":224.07},{"x":-234.795,"y":227.13,"z":246.52},{"x":-248.595,"y":219.75,"z":263.57},{"x":-264.595,"y":214.71,"z":283.32},{"x":-280.595,"y":210.51,"z":303.07},{"x":-296.595,"y":205.315,"z":322.825},{"x":-312.595,"y":198.32,"z":342.575},{"x":-328.595,"y":189.725,"z":362.325},{"x":-344.595,"y":177.43,"z":382.075},{"x":-360.595,"y":164.43,"z":401.825},{"x":-376.595,"y":152.71,"z":421.58},{"x":-392.595,"y":142.725,"z":441.33},{"x":-408.595,"y":134.835,"z":461.08},{"x":-424.595,"y":129.4,"z":480.83},{"x":-440.595,"y":124.315,"z":500.585},{"x":-456.595,"y":121.855,"z":520.335},{"x":-472.595,"y":119.62,"z":540.085},{"x":-488.595,"y":119.57,"z":559.835},{"x":-504.595,"y":119.07,"z":579.585},{"x":-520.595,"y":120.15,"z":599.34},{"x":-534.285,"y":119.245,"z":616.565},{"x":-547.365,"y":110.57,"z":633.03},{"x":-559.045,"y":101.27,"z":642.865}];
// nx.spacepipe8 = [{"x":-1237.77,"y":1156.43,"z":-850.395},{"x":-1218.185,"y":1155.13,"z":-850.23},{"x":-1206.91,"y":1155.82,"z":-849.17},{"x":-1184.03,"y":1144.845,"z":-848.145},{"x":-1164.17,"y":1128.88,"z":-846.675},{"x":-1152.1,"y":1116.335,"z":-844.84},{"x":-1141.045,"y":1104.515,"z":-842.745},{"x":-1130.605,"y":1092.18,"z":-840.5},{"x":-1121.005,"y":1077.595,"z":-838.19},{"x":-1106.295,"y":1066.56,"z":-835.88},{"x":-1098.05,"y":1057.995,"z":-833.595},{"x":-1080.515,"y":1050.98,"z":-831.325},{"x":-1062.895,"y":1048.51,"z":-828.55},{"x":-1049.3,"y":1043.17,"z":-826.73},{"x":-1035.83,"y":1035.465,"z":-824.325},{"x":-1017.615,"y":1024.915,"z":-821.825},{"x":-998.97,"y":1011.19,"z":-819.235},{"x":-979.93,"y":996.06,"z":-816.58},{"x":-960.535,"y":982.695,"z":-813.91},{"x":-940.82,"y":973.89,"z":-811.26},{"x":-920.81,"y":966.92,"z":-808.675},{"x":-900.535,"y":962.08,"z":-806.19},{"x":-879.99,"y":959.405,"z":-803.835},{"x":-859.14,"y":958.51,"z":-801.66},{"x":-837.92,"y":958.415,"z":-799.74},{"x":-816.33,"y":957.7,"z":-798.165},{"x":-794.455,"y":955.04,"z":-797.04},{"x":-772.48,"y":949.9,"z":-796.42},{"x":-750.61,"y":942.82,"z":-796.315},{"x":-728.985,"y":935.015,"z":-796.665},{"x":-707.645,"y":927.685,"z":-797.355},{"x":-686.545,"y":921.455,"z":-798.27},{"x":-665.635,"y":916.29,"z":-799.3},{"x":-644.86,"y":911.85,"z":-800.385},{"x":-624.095,"y":907.775,"z":-801.43},{"x":-603.11,"y":903.86,"z":-802.32},{"x":-581.54,"y":899.95,"z":-802.845},{"x":-559.125,"y":895.845,"z":-802.72},{"x":-535.915,"y":891.32,"z":-801.635},{"x":-512.42,"y":886.225,"z":-799.38},{"x":-489.455,"y":880.605,"z":-795.905},{"x":-467.74,"y":874.715,"z":-791.36},{"x":-447.63,"y":868.89,"z":-787.48},{"x":-429.045,"y":863.385,"z":-782.705},{"x":-411.66,"y":858.725,"z":-778},{"x":-395.155,"y":853.89,"z":-771.67},{"x":-379.34,"y":849.63,"z":-764.865},{"x":-363.95,"y":845.465,"z":-756.75},{"x":-349.58,"y":841.935,"z":-749.075},{"x":-335.615,"y":838.17,"z":-741.1},{"x":-322.025,"y":834.71,"z":-733.15},{"x":-308.85,"y":831.5,"z":-725.025},{"x":-295.825,"y":828.11,"z":-716.99},{"x":-284.575,"y":825.215,"z":-709.62},{"x":-272.355,"y":821.995,"z":-701.055},{"x":-261.725,"y":819.045,"z":-692.965},{"x":-250.57,"y":815.57,"z":-683.52},{"x":-239.67,"y":811.96,"z":-674.1},{"x":-229.03,"y":808.43,"z":-664.51},{"x":-218.63,"y":804.87,"z":-654.855},{"x":-208.46,"y":801.195,"z":-645.275},{"x":-198.515,"y":797.5,"z":-635.495},{"x":-188.79,"y":793.895,"z":-625.955},{"x":-179.28,"y":790.08,"z":-616.295},{"x":-166.895,"y":785.055,"z":-602.935},{"x":-151.27,"y":778.405,"z":-584.89},{"x":-133.99,"y":771.065,"z":-564.23},{"x":-117.925,"y":763.865,"z":-542.87},{"x":-103.25,"y":756.73,"z":-522.305},{"x":-88.525,"y":749.69,"z":-501.545},{"x":-74.505,"y":742.77,"z":-481.025},{"x":-61.095,"y":735.995,"z":-460.99},{"x":-48.18,"y":729.4,"z":-441.455},{"x":-35.68,"y":723,"z":-422.435},{"x":-23.565,"y":716.815,"z":-403.98},{"x":-11.87,"y":710.87,"z":-386.195},{"x":-0.655,"y":705.205,"z":-369.2},{"x":10.015,"y":699.855,"z":-352.99},{"x":20.055,"y":694.82,"z":-338.065},{"x":29.57,"y":690.055,"z":-323.29},{"x":40.605,"y":685.23,"z":-306.635},{"x":54.43,"y":680.12,"z":-284.32},{"x":65.86,"y":677.82,"z":-264.77},{"x":78.395,"y":676.225,"z":-242.97},{"x":91.965,"y":675.85,"z":-217.73},{"x":105.215,"y":677.1,"z":-190.395},{"x":116.685,"y":680.135,"z":-162.465},{"x":125.21,"y":684.83,"z":-135.105},{"x":130.14,"y":690.825,"z":-108.87},{"x":131.27,"y":697.675,"z":-83.88},{"x":128.685,"y":704.91,"z":-60.075},{"x":122.61,"y":712.09,"z":-37.44},{"x":113.29,"y":718.815,"z":-16.085},{"x":101.01,"y":724.72,"z":3.78},{"x":86.075,"y":729.49,"z":21.915},{"x":68.84,"y":732.905,"z":38.05},{"x":49.675,"y":734.81,"z":51.94},{"x":28.99,"y":735.115,"z":63.375},{"x":7.205,"y":733.79,"z":72.165},{"x":-15.255,"y":730.83,"z":78.18},{"x":-38.005,"y":726.22,"z":81.335},{"x":-60.74,"y":719.945,"z":81.57},{"x":-83.265,"y":711.955,"z":78.88},{"x":-105.425,"y":702.28,"z":73.345},{"x":-127.005,"y":691.07,"z":65.185},{"x":-147.61,"y":678.71,"z":54.8},{"x":-166.705,"y":665.73,"z":42.685},{"x":-183.72,"y":652.675,"z":29.315},{"x":-198.235,"y":639.935,"z":15.05},{"x":-210.06,"y":627.655,"z":0.045},{"x":-219.225,"y":615.76,"z":-15.64},{"x":-225.82,"y":604.105,"z":-31.95},{"x":-229.95,"y":592.55,"z":-48.75},{"x":-231.655,"y":581.02,"z":-65.805},{"x":-230.965,"y":569.49,"z":-82.815},{"x":-227.92,"y":557.965,"z":-99.455},{"x":-222.62,"y":546.435,"z":-115.4},{"x":-215.185,"y":534.905,"z":-130.355},{"x":-205.8,"y":523.375,"z":-144.03},{"x":-194.665,"y":511.845,"z":-156.175},{"x":-182.03,"y":500.315,"z":-166.58},{"x":-168.155,"y":488.785,"z":-175.055},{"x":-153.33,"y":477.255,"z":-181.46},{"x":-137.865,"y":465.725,"z":-185.705},{"x":-122.065,"y":454.2,"z":-187.73},{"x":-106.245,"y":442.67,"z":-187.525},{"x":-90.72,"y":431.14,"z":-185.13},{"x":-75.785,"y":419.61,"z":-180.62},{"x":-61.725,"y":408.075,"z":-174.105},{"x":-48.81,"y":396.52,"z":-165.755},{"x":-37.275,"y":384.94,"z":-155.745},{"x":-27.32,"y":373.3,"z":-144.305},{"x":-19.125,"y":361.585,"z":-131.68},{"x":-12.825,"y":349.78,"z":-118.13},{"x":-8.525,"y":337.91,"z":-103.92},{"x":-6.31,"y":326.025,"z":-89.3},{"x":-6.24,"y":314.205,"z":-74.475},{"x":-8.32,"y":302.615,"z":-59.635},{"x":-12.415,"y":291.505,"z":-45},{"x":-18.15,"y":281.215,"z":-30.92},{"x":-24.895,"y":272.14,"z":-17.875},{"x":-31.86,"y":264.62,"z":-6.405},{"x":-38.315,"y":258.82,"z":3.1},{"x":-44.375,"y":254.675,"z":11.925},{"x":-51.5,"y":250.1,"z":20.985},{"x":-59.12,"y":245.735,"z":30.39},{"x":-72.495,"y":241.27,"z":46.21},{"x":-88.695,"y":242.58,"z":66.06},{"x":-104.695,"y":253.28,"z":85.81},{"x":-120.695,"y":268.885,"z":105.56},{"x":-136.695,"y":278.43,"z":125.315},{"x":-152.69,"y":283.055,"z":145.065},{"x":-168.595,"y":279.565,"z":164.815},{"x":-184.595,"y":268.12,"z":184.565},{"x":-200.595,"y":252.735,"z":204.315},{"x":-216.595,"y":239,"z":224.07},{"x":-234.795,"y":227.13,"z":246.52},{"x":-248.595,"y":219.75,"z":263.57},{"x":-264.595,"y":214.71,"z":283.32},{"x":-280.595,"y":210.51,"z":303.07},{"x":-296.595,"y":205.315,"z":322.825},{"x":-312.595,"y":198.32,"z":342.575},{"x":-328.595,"y":189.725,"z":362.325},{"x":-344.595,"y":177.43,"z":382.075},{"x":-360.595,"y":164.43,"z":401.825},{"x":-376.595,"y":152.71,"z":421.58},{"x":-392.595,"y":142.725,"z":441.33},{"x":-408.595,"y":134.835,"z":461.08},{"x":-424.595,"y":129.4,"z":480.83},{"x":-440.595,"y":124.315,"z":500.585},{"x":-456.595,"y":121.855,"z":520.335},{"x":-472.595,"y":119.62,"z":540.085},{"x":-488.595,"y":119.57,"z":559.835},{"x":-504.595,"y":119.07,"z":579.585},{"x":-520.595,"y":120.15,"z":599.34},{"x":-534.285,"y":119.245,"z":616.565},{"x":-547.365,"y":110.57,"z":633.03},{"x":-559.045,"y":101.27,"z":642.865}];
// nx.spacepipe8 = [{"x":-1237.77,"y":1156.43,"z":-850.395},{"x":-1218.185,"y":1155.13,"z":-850.23},{"x":-1206.91,"y":1155.82,"z":-849.17},{"x":-1184.03,"y":1144.845,"z":-848.145},{"x":-1164.17,"y":1128.88,"z":-846.675},{"x":-1152.1,"y":1116.335,"z":-844.84},{"x":-1141.045,"y":1104.515,"z":-842.745},{"x":-1130.605,"y":1092.18,"z":-840.5},{"x":-1121.005,"y":1077.595,"z":-838.19},{"x":-1106.295,"y":1059.7600000000061,"z":-835.88},{"x":-1099.5499999999986,"y":1049.9950000000072,"z":-833.695},{"x":-1090.7149999999908,"y":1038.5800000000113,"z":-831.325},{"x":-1077.4949999999867,"y":1029.0100000000177,"z":-829.0500000000001},{"x":-1063.8999999999867,"y":1022.070000000017,"z":-826.73},{"x":-1050.4299999999866,"y":1015.4650000000083,"z":-824.8250000000002},{"x":-1017.615,"y":1008.2149999999972,"z":-821.2249999999999},{"x":-998.97,"y":1003.6899999999983,"z":-819.235},{"x":-979.93,"y":996.06,"z":-816.58},{"x":-960.535,"y":982.695,"z":-813.91},{"x":-940.82,"y":973.89,"z":-811.26},{"x":-920.81,"y":966.92,"z":-808.675},{"x":-900.535,"y":962.08,"z":-806.19},{"x":-879.99,"y":959.405,"z":-803.835},{"x":-859.14,"y":958.51,"z":-801.66},{"x":-837.92,"y":958.415,"z":-799.74},{"x":-816.33,"y":957.7,"z":-798.165},{"x":-794.455,"y":955.04,"z":-797.04},{"x":-772.48,"y":949.9,"z":-796.42},{"x":-750.61,"y":942.82,"z":-796.315},{"x":-728.985,"y":935.015,"z":-796.665},{"x":-707.645,"y":927.685,"z":-797.355},{"x":-686.545,"y":921.455,"z":-798.27},{"x":-665.635,"y":916.29,"z":-799.3},{"x":-644.86,"y":911.85,"z":-800.385},{"x":-624.095,"y":907.775,"z":-801.43},{"x":-603.11,"y":903.86,"z":-802.32},{"x":-581.54,"y":899.95,"z":-802.845},{"x":-559.125,"y":895.845,"z":-802.72},{"x":-535.915,"y":891.32,"z":-801.635},{"x":-512.42,"y":886.225,"z":-799.38},{"x":-489.455,"y":880.605,"z":-795.905},{"x":-467.74,"y":874.715,"z":-791.36},{"x":-447.63,"y":868.89,"z":-787.48},{"x":-429.045,"y":863.385,"z":-782.705},{"x":-411.66,"y":858.725,"z":-778},{"x":-395.155,"y":853.89,"z":-771.67},{"x":-379.34,"y":849.63,"z":-764.865},{"x":-363.95,"y":845.465,"z":-756.75},{"x":-349.58,"y":841.935,"z":-749.075},{"x":-335.615,"y":838.17,"z":-741.1},{"x":-322.025,"y":834.71,"z":-733.15},{"x":-308.85,"y":831.5,"z":-725.025},{"x":-295.825,"y":828.11,"z":-716.99},{"x":-284.575,"y":825.215,"z":-709.62},{"x":-272.355,"y":821.995,"z":-701.055},{"x":-261.725,"y":819.045,"z":-692.965},{"x":-250.57,"y":815.57,"z":-683.52},{"x":-239.67,"y":811.96,"z":-674.1},{"x":-229.03,"y":808.43,"z":-664.51},{"x":-218.63,"y":804.87,"z":-654.855},{"x":-208.46,"y":801.195,"z":-645.275},{"x":-198.515,"y":797.5,"z":-635.495},{"x":-188.79,"y":793.895,"z":-625.955},{"x":-179.28,"y":790.08,"z":-616.295},{"x":-166.895,"y":785.055,"z":-602.935},{"x":-151.27,"y":778.405,"z":-584.89},{"x":-133.99,"y":771.065,"z":-564.23},{"x":-117.925,"y":763.865,"z":-542.87},{"x":-103.25,"y":756.73,"z":-522.305},{"x":-88.525,"y":749.69,"z":-501.545},{"x":-74.505,"y":742.77,"z":-481.025},{"x":-61.095,"y":735.995,"z":-460.99},{"x":-48.18,"y":729.4,"z":-441.455},{"x":-35.68,"y":723,"z":-422.435},{"x":-23.565,"y":716.815,"z":-403.98},{"x":-11.87,"y":710.87,"z":-386.195},{"x":-0.655,"y":705.205,"z":-369.2},{"x":10.015,"y":699.855,"z":-352.99},{"x":20.055,"y":694.82,"z":-338.065},{"x":29.57,"y":690.055,"z":-323.29},{"x":40.605,"y":685.23,"z":-306.635},{"x":54.43,"y":680.12,"z":-284.32},{"x":65.86,"y":677.82,"z":-264.77},{"x":78.395,"y":676.225,"z":-242.97},{"x":91.965,"y":675.85,"z":-217.73},{"x":105.215,"y":677.1,"z":-190.395},{"x":116.685,"y":680.135,"z":-162.465},{"x":125.21,"y":684.83,"z":-135.105},{"x":130.14,"y":690.825,"z":-108.87},{"x":131.27,"y":697.675,"z":-83.88},{"x":128.685,"y":704.91,"z":-60.075},{"x":122.61,"y":712.09,"z":-37.44},{"x":113.29,"y":718.815,"z":-16.085},{"x":101.01,"y":724.72,"z":3.78},{"x":86.075,"y":729.49,"z":21.915},{"x":68.84,"y":732.905,"z":38.05},{"x":49.675,"y":734.81,"z":51.94},{"x":28.99,"y":735.115,"z":63.375},{"x":7.205,"y":733.79,"z":72.165},{"x":-15.255,"y":730.83,"z":78.18},{"x":-38.005,"y":726.22,"z":81.335},{"x":-60.74,"y":719.945,"z":81.57},{"x":-83.265,"y":711.955,"z":78.88},{"x":-105.425,"y":702.28,"z":73.345},{"x":-127.005,"y":691.07,"z":65.185},{"x":-147.61,"y":678.71,"z":54.8},{"x":-166.705,"y":665.73,"z":42.685},{"x":-183.72,"y":652.675,"z":29.315},{"x":-198.235,"y":639.935,"z":15.05},{"x":-210.06,"y":627.655,"z":0.045},{"x":-219.225,"y":615.76,"z":-15.64},{"x":-225.82,"y":604.105,"z":-31.95},{"x":-229.95,"y":592.55,"z":-48.75},{"x":-231.655,"y":581.02,"z":-65.805},{"x":-230.965,"y":569.49,"z":-82.815},{"x":-227.92,"y":557.965,"z":-99.455},{"x":-222.62,"y":546.435,"z":-115.4},{"x":-215.185,"y":534.905,"z":-130.355},{"x":-205.8,"y":523.375,"z":-144.03},{"x":-194.665,"y":511.845,"z":-156.175},{"x":-182.03,"y":500.315,"z":-166.58},{"x":-168.155,"y":488.785,"z":-175.055},{"x":-153.33,"y":477.255,"z":-181.46},{"x":-137.865,"y":465.725,"z":-185.705},{"x":-122.065,"y":454.2,"z":-187.73},{"x":-106.245,"y":442.67,"z":-187.525},{"x":-90.72,"y":431.14,"z":-185.13},{"x":-75.785,"y":419.61,"z":-180.62},{"x":-61.725,"y":408.075,"z":-174.105},{"x":-48.81,"y":396.52,"z":-165.755},{"x":-37.275,"y":384.94,"z":-155.745},{"x":-27.32,"y":373.3,"z":-144.305},{"x":-19.125,"y":361.585,"z":-131.68},{"x":-12.825,"y":349.78,"z":-118.13},{"x":-8.525,"y":337.91,"z":-103.92},{"x":-6.31,"y":326.025,"z":-89.3},{"x":-6.24,"y":314.205,"z":-74.475},{"x":-8.32,"y":302.615,"z":-59.635},{"x":-12.415,"y":291.505,"z":-45},{"x":-18.15,"y":281.215,"z":-30.92},{"x":-24.895,"y":272.14,"z":-17.875},{"x":-31.86,"y":264.62,"z":-6.405},{"x":-38.315,"y":258.82,"z":3.1},{"x":-44.375,"y":254.675,"z":11.925},{"x":-51.5,"y":250.1,"z":20.985},{"x":-59.12,"y":245.735,"z":30.39},{"x":-72.495,"y":241.27,"z":46.21},{"x":-88.695,"y":242.58,"z":66.06},{"x":-104.695,"y":253.28,"z":85.81},{"x":-120.695,"y":268.885,"z":105.56},{"x":-136.695,"y":278.43,"z":125.315},{"x":-152.69,"y":283.055,"z":145.065},{"x":-168.595,"y":279.565,"z":164.815},{"x":-184.595,"y":268.12,"z":184.565},{"x":-200.595,"y":252.735,"z":204.315},{"x":-216.595,"y":239,"z":224.07},{"x":-234.795,"y":227.13,"z":246.52},{"x":-248.595,"y":219.75,"z":263.57},{"x":-264.595,"y":214.71,"z":283.32},{"x":-280.595,"y":210.51,"z":303.07},{"x":-296.595,"y":205.315,"z":322.825},{"x":-312.595,"y":198.32,"z":342.575},{"x":-328.595,"y":189.725,"z":362.325},{"x":-344.595,"y":177.43,"z":382.075},{"x":-360.595,"y":164.43,"z":401.825},{"x":-376.595,"y":152.71,"z":421.58},{"x":-392.595,"y":142.725,"z":441.33},{"x":-408.595,"y":134.835,"z":461.08},{"x":-424.595,"y":129.4,"z":480.83},{"x":-440.595,"y":124.315,"z":500.585},{"x":-456.595,"y":121.855,"z":520.335},{"x":-472.595,"y":119.62,"z":540.085},{"x":-488.595,"y":119.57,"z":559.835},{"x":-504.595,"y":119.07,"z":579.585},{"x":-520.595,"y":120.15,"z":599.34},{"x":-534.285,"y":119.245,"z":616.565},{"x":-547.365,"y":110.57,"z":633.03},{"x":-559.045,"y":101.27,"z":642.865}];
// nx.spacepipe8 = [{"x":-1237.77,"y":1156.43,"z":-850.395},{"x":-1218.185,"y":1155.13,"z":-850.23},{"x":-1206.91,"y":1155.82,"z":-849.17},{"x":-1184.03,"y":1144.845,"z":-848.145},{"x":-1164.17,"y":1128.88,"z":-846.675},{"x":-1152.1,"y":1116.335,"z":-844.84},{"x":-1141.045,"y":1104.515,"z":-842.745},{"x":-1130.605,"y":1092.18,"z":-840.5},{"x":-1121.005,"y":1077.595,"z":-838.19},{"x":-1106.295,"y":1059.7600000000061,"z":-835.88},{"x":-1099.5499999999986,"y":1049.9950000000072,"z":-833.695},{"x":-1090.7149999999908,"y":1038.5800000000113,"z":-831.325},{"x":-1077.4949999999867,"y":1029.0100000000177,"z":-829.0500000000001},{"x":-1064.0999999999865,"y":1021.6700000000169,"z":-827.1300000000001},{"x":-1050.4299999999866,"y":1014.6650000000081,"z":-824.8250000000002},{"x":-1017.615,"y":1006.2149999999967,"z":-821.2249999999999},{"x":-998.97,"y":1002.189999999998,"z":-819.235},{"x":-979.93,"y":996.06,"z":-816.58},{"x":-960.535,"y":982.695,"z":-813.91},{"x":-940.82,"y":973.89,"z":-811.26},{"x":-920.81,"y":966.92,"z":-808.675},{"x":-900.535,"y":962.08,"z":-806.19},{"x":-879.99,"y":959.405,"z":-803.835},{"x":-859.14,"y":958.51,"z":-801.66},{"x":-837.92,"y":958.415,"z":-799.74},{"x":-816.33,"y":957.7,"z":-798.165},{"x":-794.455,"y":955.04,"z":-797.04},{"x":-772.48,"y":949.9,"z":-796.42},{"x":-750.61,"y":942.82,"z":-796.315},{"x":-728.985,"y":935.015,"z":-796.665},{"x":-707.645,"y":927.685,"z":-797.355},{"x":-686.545,"y":921.455,"z":-798.27},{"x":-665.635,"y":916.29,"z":-799.3},{"x":-644.86,"y":911.85,"z":-800.385},{"x":-624.095,"y":907.775,"z":-801.43},{"x":-603.11,"y":903.86,"z":-802.32},{"x":-581.54,"y":899.95,"z":-802.845},{"x":-559.125,"y":895.845,"z":-802.72},{"x":-535.915,"y":891.32,"z":-801.635},{"x":-512.42,"y":886.225,"z":-799.38},{"x":-489.455,"y":880.605,"z":-795.905},{"x":-467.74,"y":874.715,"z":-791.36},{"x":-447.63,"y":868.89,"z":-787.48},{"x":-429.045,"y":863.385,"z":-782.705},{"x":-411.66,"y":858.725,"z":-778},{"x":-395.155,"y":853.89,"z":-771.67},{"x":-379.34,"y":849.63,"z":-764.865},{"x":-363.95,"y":845.465,"z":-756.75},{"x":-349.58,"y":841.935,"z":-749.075},{"x":-335.615,"y":838.17,"z":-741.1},{"x":-322.025,"y":834.71,"z":-733.15},{"x":-308.85,"y":831.5,"z":-725.025},{"x":-295.825,"y":828.11,"z":-716.99},{"x":-284.575,"y":825.215,"z":-709.62},{"x":-272.355,"y":821.995,"z":-701.055},{"x":-261.725,"y":819.045,"z":-692.965},{"x":-250.57,"y":815.57,"z":-683.52},{"x":-239.67,"y":811.96,"z":-674.1},{"x":-229.03,"y":808.43,"z":-664.51},{"x":-218.63,"y":804.87,"z":-654.855},{"x":-208.46,"y":801.195,"z":-645.275},{"x":-198.515,"y":797.5,"z":-635.495},{"x":-188.79,"y":793.895,"z":-625.955},{"x":-179.28,"y":790.08,"z":-616.295},{"x":-166.895,"y":785.055,"z":-602.935},{"x":-151.27,"y":778.405,"z":-584.89},{"x":-133.99,"y":771.065,"z":-564.23},{"x":-117.925,"y":763.865,"z":-542.87},{"x":-103.25,"y":756.73,"z":-522.305},{"x":-88.525,"y":749.69,"z":-501.545},{"x":-74.505,"y":742.77,"z":-481.025},{"x":-61.095,"y":735.995,"z":-460.99},{"x":-48.18,"y":729.4,"z":-441.455},{"x":-35.68,"y":723,"z":-422.435},{"x":-23.565,"y":716.815,"z":-403.98},{"x":-11.87,"y":710.87,"z":-386.195},{"x":-0.655,"y":705.205,"z":-369.2},{"x":10.015,"y":699.855,"z":-352.99},{"x":20.055,"y":694.82,"z":-338.065},{"x":29.57,"y":690.055,"z":-323.29},{"x":40.605,"y":685.23,"z":-306.635},{"x":54.43,"y":680.12,"z":-284.32},{"x":65.86,"y":677.82,"z":-264.77},{"x":78.395,"y":676.225,"z":-242.97},{"x":91.965,"y":675.85,"z":-217.73},{"x":105.215,"y":677.1,"z":-190.395},{"x":116.685,"y":680.135,"z":-162.465},{"x":125.21,"y":684.83,"z":-135.105},{"x":130.14,"y":690.825,"z":-108.87},{"x":131.27,"y":697.675,"z":-83.88},{"x":128.685,"y":704.91,"z":-60.075},{"x":122.61,"y":712.09,"z":-37.44},{"x":113.29,"y":718.815,"z":-16.085},{"x":101.01,"y":724.72,"z":3.78},{"x":86.075,"y":729.49,"z":21.915},{"x":68.84,"y":732.905,"z":38.05},{"x":49.675,"y":734.81,"z":51.94},{"x":28.99,"y":735.115,"z":63.375},{"x":7.205,"y":733.79,"z":72.165},{"x":-15.255,"y":730.83,"z":78.18},{"x":-38.005,"y":726.22,"z":81.335},{"x":-60.74,"y":719.945,"z":81.57},{"x":-83.265,"y":711.955,"z":78.88},{"x":-105.425,"y":702.28,"z":73.345},{"x":-127.005,"y":691.07,"z":65.185},{"x":-147.61,"y":678.71,"z":54.8},{"x":-166.705,"y":665.73,"z":42.685},{"x":-183.72,"y":652.675,"z":29.315},{"x":-198.235,"y":639.935,"z":15.05},{"x":-210.06,"y":627.655,"z":0.045},{"x":-219.225,"y":615.76,"z":-15.64},{"x":-225.82,"y":604.105,"z":-31.95},{"x":-229.95,"y":592.55,"z":-48.75},{"x":-231.655,"y":581.02,"z":-65.805},{"x":-230.965,"y":569.49,"z":-82.815},{"x":-227.92,"y":557.965,"z":-99.455},{"x":-222.62,"y":546.435,"z":-115.4},{"x":-215.185,"y":534.905,"z":-130.355},{"x":-205.8,"y":523.375,"z":-144.03},{"x":-194.665,"y":511.845,"z":-156.175},{"x":-182.03,"y":500.315,"z":-166.58},{"x":-168.155,"y":488.785,"z":-175.055},{"x":-153.33,"y":477.255,"z":-181.46},{"x":-137.865,"y":465.725,"z":-185.705},{"x":-122.065,"y":454.2,"z":-187.73},{"x":-106.245,"y":442.67,"z":-187.525},{"x":-90.72,"y":431.14,"z":-185.13},{"x":-75.785,"y":419.61,"z":-180.62},{"x":-61.725,"y":408.075,"z":-174.105},{"x":-48.81,"y":396.52,"z":-165.755},{"x":-37.275,"y":384.94,"z":-155.745},{"x":-27.32,"y":373.3,"z":-144.305},{"x":-19.125,"y":361.585,"z":-131.68},{"x":-12.825,"y":349.78,"z":-118.13},{"x":-8.525,"y":337.91,"z":-103.92},{"x":-6.31,"y":326.025,"z":-89.3},{"x":-6.24,"y":314.205,"z":-74.475},{"x":-8.32,"y":302.615,"z":-59.635},{"x":-12.415,"y":291.505,"z":-45},{"x":-18.15,"y":281.215,"z":-30.92},{"x":-24.895,"y":272.14,"z":-17.875},{"x":-31.86,"y":264.62,"z":-6.405},{"x":-38.315,"y":258.82,"z":3.1},{"x":-44.375,"y":254.675,"z":11.925},{"x":-51.5,"y":250.1,"z":20.985},{"x":-59.12,"y":245.735,"z":30.39},{"x":-72.495,"y":241.27,"z":46.21},{"x":-88.695,"y":242.58,"z":66.06},{"x":-104.695,"y":253.28,"z":85.81},{"x":-120.695,"y":268.885,"z":105.56},{"x":-136.695,"y":278.43,"z":125.315},{"x":-152.69,"y":283.055,"z":145.065},{"x":-168.595,"y":279.565,"z":164.815},{"x":-184.595,"y":268.12,"z":184.565},{"x":-200.595,"y":252.735,"z":204.315},{"x":-216.595,"y":239,"z":224.07},{"x":-234.795,"y":227.13,"z":246.52},{"x":-248.595,"y":219.75,"z":263.57},{"x":-264.595,"y":214.71,"z":283.32},{"x":-280.595,"y":210.51,"z":303.07},{"x":-296.595,"y":205.315,"z":322.825},{"x":-312.595,"y":198.32,"z":342.575},{"x":-328.595,"y":189.725,"z":362.325},{"x":-344.595,"y":177.43,"z":382.075},{"x":-360.595,"y":164.43,"z":401.825},{"x":-376.595,"y":152.71,"z":421.58},{"x":-392.595,"y":142.725,"z":441.33},{"x":-408.595,"y":134.835,"z":461.08},{"x":-424.595,"y":129.4,"z":480.83},{"x":-440.595,"y":124.315,"z":500.585},{"x":-456.595,"y":121.855,"z":520.335},{"x":-472.595,"y":119.62,"z":540.085},{"x":-488.595,"y":119.57,"z":559.835},{"x":-504.595,"y":119.07,"z":579.585},{"x":-520.595,"y":120.15,"z":599.34},{"x":-534.285,"y":119.245,"z":616.565},{"x":-547.365,"y":110.57,"z":633.03},{"x":-559.045,"y":101.27,"z":642.865}];
// nx.spacepipe8 = [{"x":-1237.77,"y":1156.43,"z":-850.395},{"x":-1218.185,"y":1155.13,"z":-850.23},{"x":-1206.91,"y":1155.82,"z":-849.17},{"x":-1184.03,"y":1144.845,"z":-848.145},{"x":-1164.17,"y":1128.88,"z":-846.675},{"x":-1152.1,"y":1116.335,"z":-844.84},{"x":-1141.045,"y":1104.515,"z":-842.745},{"x":-1130.605,"y":1092.18,"z":-840.5},{"x":-1121.005,"y":1077.595,"z":-838.19},{"x":-1106.295,"y":1059.7600000000061,"z":-835.88},{"x":-1099.5499999999986,"y":1049.9950000000072,"z":-833.695},{"x":-1090.7149999999908,"y":1038.5800000000113,"z":-831.325},{"x":-1077.4949999999867,"y":1029.0100000000177,"z":-829.0500000000001},{"x":-1064.0999999999865,"y":1021.6700000000169,"z":-827.1300000000001},{"x":-1050.4299999999866,"y":1014.6650000000081,"z":-824.8250000000002},{"x":-1017.615,"y":1006.2149999999967,"z":-821.2249999999999},{"x":-998.97,"y":1002.189999999998,"z":-819.235},{"x":-979.93,"y":996.06,"z":-816.58},{"x":-957.0349999999992,"y":985.7950000000008,"z":-813.91},{"x":-940.52,"y":974.19,"z":-811.26},{"x":-920.81,"y":965.7199999999997,"z":-808.675},{"x":-900.535,"y":962.08,"z":-806.19},{"x":-879.99,"y":959.405,"z":-803.835},{"x":-859.14,"y":958.51,"z":-801.66},{"x":-837.92,"y":958.415,"z":-799.74},{"x":-816.33,"y":957.7,"z":-798.165},{"x":-794.455,"y":955.04,"z":-797.04},{"x":-772.48,"y":949.9,"z":-796.42},{"x":-750.61,"y":942.82,"z":-796.315},{"x":-728.985,"y":935.015,"z":-796.665},{"x":-707.645,"y":927.685,"z":-797.355},{"x":-686.545,"y":921.455,"z":-798.27},{"x":-665.635,"y":916.29,"z":-799.3},{"x":-644.86,"y":911.85,"z":-800.385},{"x":-624.095,"y":907.775,"z":-801.43},{"x":-603.11,"y":903.86,"z":-802.32},{"x":-581.54,"y":899.95,"z":-802.845},{"x":-559.125,"y":895.845,"z":-802.72},{"x":-535.915,"y":891.32,"z":-801.635},{"x":-512.42,"y":886.225,"z":-799.38},{"x":-489.455,"y":880.605,"z":-795.905},{"x":-467.74,"y":874.715,"z":-791.36},{"x":-447.63,"y":868.89,"z":-787.48},{"x":-429.045,"y":863.385,"z":-782.705},{"x":-411.66,"y":858.725,"z":-778},{"x":-395.155,"y":853.89,"z":-771.67},{"x":-379.34,"y":849.63,"z":-764.865},{"x":-363.95,"y":845.465,"z":-756.75},{"x":-349.58,"y":841.935,"z":-749.075},{"x":-335.615,"y":838.17,"z":-741.1},{"x":-322.025,"y":834.71,"z":-733.15},{"x":-308.85,"y":831.5,"z":-725.025},{"x":-295.825,"y":828.11,"z":-716.99},{"x":-284.575,"y":825.215,"z":-709.62},{"x":-272.355,"y":821.995,"z":-701.055},{"x":-261.725,"y":819.045,"z":-692.965},{"x":-250.57,"y":815.57,"z":-683.52},{"x":-239.67,"y":811.96,"z":-674.1},{"x":-229.03,"y":808.43,"z":-664.51},{"x":-218.63,"y":804.87,"z":-654.855},{"x":-208.46,"y":801.195,"z":-645.275},{"x":-198.515,"y":797.5,"z":-635.495},{"x":-188.79,"y":793.895,"z":-625.955},{"x":-179.28,"y":790.08,"z":-616.295},{"x":-166.895,"y":785.055,"z":-602.935},{"x":-151.27,"y":778.405,"z":-584.89},{"x":-133.99,"y":771.065,"z":-564.23},{"x":-117.925,"y":763.865,"z":-542.87},{"x":-103.25,"y":756.73,"z":-522.305},{"x":-88.525,"y":749.69,"z":-501.545},{"x":-74.505,"y":742.77,"z":-481.025},{"x":-61.095,"y":735.995,"z":-460.99},{"x":-48.18,"y":729.4,"z":-441.455},{"x":-35.68,"y":723,"z":-422.435},{"x":-23.565,"y":716.815,"z":-403.98},{"x":-11.87,"y":710.87,"z":-386.195},{"x":-0.655,"y":705.205,"z":-369.2},{"x":10.015,"y":699.855,"z":-352.99},{"x":20.055,"y":694.82,"z":-338.065},{"x":29.57,"y":690.055,"z":-323.29},{"x":40.605,"y":685.23,"z":-306.635},{"x":54.43,"y":680.12,"z":-284.32},{"x":65.86,"y":677.82,"z":-264.77},{"x":78.395,"y":676.225,"z":-242.97},{"x":91.965,"y":675.85,"z":-217.73},{"x":105.215,"y":677.1,"z":-190.395},{"x":116.685,"y":680.135,"z":-162.465},{"x":125.21,"y":684.83,"z":-135.105},{"x":130.14,"y":690.825,"z":-108.87},{"x":131.27,"y":697.675,"z":-83.88},{"x":128.685,"y":704.91,"z":-60.075},{"x":122.61,"y":712.09,"z":-37.44},{"x":113.29,"y":718.815,"z":-16.085},{"x":101.01,"y":724.72,"z":3.78},{"x":86.075,"y":729.49,"z":21.915},{"x":68.84,"y":732.905,"z":38.05},{"x":49.675,"y":734.81,"z":51.94},{"x":28.99,"y":735.115,"z":63.375},{"x":7.205,"y":733.79,"z":72.165},{"x":-15.255,"y":730.83,"z":78.18},{"x":-38.005,"y":726.22,"z":81.335},{"x":-60.74,"y":719.945,"z":81.57},{"x":-83.265,"y":711.955,"z":78.88},{"x":-105.425,"y":702.28,"z":73.345},{"x":-127.005,"y":691.07,"z":65.185},{"x":-147.61,"y":678.71,"z":54.8},{"x":-166.705,"y":665.73,"z":42.685},{"x":-183.72,"y":652.675,"z":29.315},{"x":-198.235,"y":639.935,"z":15.05},{"x":-210.06,"y":627.655,"z":0.045},{"x":-219.225,"y":615.76,"z":-15.64},{"x":-225.82,"y":604.105,"z":-31.95},{"x":-229.95,"y":592.55,"z":-48.75},{"x":-231.655,"y":581.02,"z":-65.805},{"x":-230.965,"y":569.49,"z":-82.815},{"x":-227.92,"y":557.965,"z":-99.455},{"x":-222.62,"y":546.435,"z":-115.4},{"x":-215.185,"y":534.905,"z":-130.355},{"x":-205.8,"y":523.375,"z":-144.03},{"x":-194.665,"y":511.845,"z":-156.175},{"x":-182.03,"y":500.315,"z":-166.58},{"x":-168.155,"y":488.785,"z":-175.055},{"x":-153.33,"y":477.255,"z":-181.46},{"x":-137.865,"y":465.725,"z":-185.705},{"x":-122.065,"y":454.2,"z":-187.73},{"x":-106.245,"y":442.67,"z":-187.525},{"x":-90.72,"y":431.14,"z":-185.13},{"x":-75.785,"y":419.61,"z":-180.62},{"x":-61.725,"y":408.075,"z":-174.105},{"x":-48.81,"y":396.52,"z":-165.755},{"x":-37.275,"y":384.94,"z":-155.745},{"x":-27.32,"y":373.3,"z":-144.305},{"x":-19.125,"y":361.585,"z":-131.68},{"x":-12.825,"y":349.78,"z":-118.13},{"x":-8.525,"y":337.91,"z":-103.92},{"x":-6.31,"y":326.025,"z":-89.3},{"x":-6.24,"y":314.205,"z":-74.475},{"x":-8.32,"y":302.615,"z":-59.635},{"x":-12.415,"y":291.505,"z":-45},{"x":-18.15,"y":281.215,"z":-30.92},{"x":-24.895,"y":272.14,"z":-17.875},{"x":-31.86,"y":264.62,"z":-6.405},{"x":-38.315,"y":258.82,"z":3.1},{"x":-44.375,"y":254.675,"z":11.925},{"x":-51.5,"y":250.1,"z":20.985},{"x":-59.12,"y":245.735,"z":30.39},{"x":-72.495,"y":241.27,"z":46.21},{"x":-88.695,"y":242.58,"z":66.06},{"x":-104.695,"y":253.28,"z":85.81},{"x":-120.695,"y":268.885,"z":105.56},{"x":-136.695,"y":278.43,"z":125.315},{"x":-152.69,"y":283.055,"z":145.065},{"x":-168.595,"y":279.565,"z":164.815},{"x":-184.595,"y":268.12,"z":184.565},{"x":-200.595,"y":252.735,"z":204.315},{"x":-216.595,"y":239,"z":224.07},{"x":-234.795,"y":227.13,"z":246.52},{"x":-248.595,"y":219.75,"z":263.57},{"x":-264.595,"y":214.71,"z":283.32},{"x":-280.595,"y":210.51,"z":303.07},{"x":-296.595,"y":205.315,"z":322.825},{"x":-312.595,"y":198.32,"z":342.575},{"x":-328.595,"y":189.725,"z":362.325},{"x":-344.595,"y":177.43,"z":382.075},{"x":-360.595,"y":164.43,"z":401.825},{"x":-376.595,"y":152.71,"z":421.58},{"x":-392.595,"y":142.725,"z":441.33},{"x":-408.595,"y":134.835,"z":461.08},{"x":-424.595,"y":129.4,"z":480.83},{"x":-440.595,"y":124.315,"z":500.585},{"x":-456.595,"y":121.855,"z":520.335},{"x":-472.595,"y":119.62,"z":540.085},{"x":-488.595,"y":119.57,"z":559.835},{"x":-504.595,"y":119.07,"z":579.585},{"x":-520.595,"y":120.15,"z":599.34},{"x":-534.285,"y":119.245,"z":616.565},{"x":-547.365,"y":110.57,"z":633.03},{"x":-559.045,"y":101.27,"z":642.865}];
nx.spacepipe8 = [{"x":-1237.77,"y":1156.43,"z":-850.395},{"x":-1218.185,"y":1155.13,"z":-850.23},{"x":-1206.91,"y":1155.82,"z":-849.17},{"x":-1184.03,"y":1144.845,"z":-848.145},{"x":-1164.17,"y":1128.88,"z":-846.675},{"x":-1152.1,"y":1116.335,"z":-844.84},{"x":-1141.045,"y":1104.515,"z":-842.745},{"x":-1130.605,"y":1092.18,"z":-840.5},{"x":-1121.005,"y":1077.595,"z":-838.19},{"x":-1106.9949999999994,"y":1059.7600000000061,"z":-835.2799999999999},{"x":-1099.5499999999986,"y":1049.9950000000072,"z":-833.695},{"x":-1087.114999999994,"y":1038.5800000000113,"z":-831.025},{"x":-1077.4949999999867,"y":1029.0100000000177,"z":-829.0500000000001},{"x":-1064.0999999999865,"y":1021.6700000000169,"z":-827.1300000000001},{"x":-1050.4299999999866,"y":1014.6650000000081,"z":-824.8250000000002},{"x":-1017.615,"y":1006.2149999999967,"z":-821.2249999999999},{"x":-998.97,"y":1002.189999999998,"z":-818.7349999999999},{"x":-979.93,"y":996.06,"z":-816.58},{"x":-957.0349999999992,"y":985.7950000000008,"z":-813.91},{"x":-940.52,"y":974.19,"z":-811.26},{"x":-920.81,"y":965.7199999999997,"z":-808.675},{"x":-900.535,"y":962.08,"z":-806.19},{"x":-879.99,"y":959.405,"z":-803.835},{"x":-859.14,"y":958.51,"z":-801.66},{"x":-837.92,"y":958.415,"z":-799.74},{"x":-816.33,"y":957.7,"z":-798.165},{"x":-794.455,"y":955.04,"z":-797.04},{"x":-772.48,"y":949.9,"z":-796.42},{"x":-750.61,"y":942.82,"z":-796.315},{"x":-728.985,"y":935.015,"z":-796.665},{"x":-707.645,"y":927.685,"z":-797.355},{"x":-686.545,"y":921.455,"z":-798.27},{"x":-665.635,"y":916.29,"z":-799.3},{"x":-644.86,"y":911.85,"z":-800.385},{"x":-624.095,"y":907.775,"z":-801.43},{"x":-603.11,"y":903.86,"z":-802.32},{"x":-581.54,"y":899.95,"z":-802.845},{"x":-559.125,"y":895.845,"z":-802.72},{"x":-535.915,"y":891.32,"z":-801.635},{"x":-512.42,"y":886.225,"z":-799.38},{"x":-489.455,"y":880.605,"z":-795.905},{"x":-467.74,"y":874.715,"z":-791.36},{"x":-447.63,"y":868.89,"z":-787.48},{"x":-429.045,"y":863.385,"z":-782.705},{"x":-411.66,"y":858.725,"z":-778},{"x":-395.155,"y":853.89,"z":-771.67},{"x":-379.34,"y":849.63,"z":-764.865},{"x":-363.95,"y":845.465,"z":-756.75},{"x":-349.58,"y":841.935,"z":-749.075},{"x":-335.615,"y":838.17,"z":-741.1},{"x":-322.025,"y":834.71,"z":-733.15},{"x":-308.85,"y":831.5,"z":-725.025},{"x":-295.825,"y":828.11,"z":-716.99},{"x":-284.575,"y":825.215,"z":-709.62},{"x":-272.355,"y":821.995,"z":-701.055},{"x":-261.725,"y":819.045,"z":-692.965},{"x":-250.57,"y":815.57,"z":-683.52},{"x":-239.67,"y":811.96,"z":-674.1},{"x":-229.03,"y":808.43,"z":-664.51},{"x":-218.63,"y":804.87,"z":-654.855},{"x":-208.46,"y":801.195,"z":-645.275},{"x":-198.515,"y":797.5,"z":-635.495},{"x":-188.79,"y":793.895,"z":-625.955},{"x":-179.28,"y":790.08,"z":-616.295},{"x":-166.895,"y":785.055,"z":-602.935},{"x":-151.27,"y":778.405,"z":-584.89},{"x":-133.99,"y":771.065,"z":-564.23},{"x":-117.925,"y":763.865,"z":-542.87},{"x":-103.25,"y":756.73,"z":-522.305},{"x":-88.525,"y":749.69,"z":-501.545},{"x":-74.505,"y":742.77,"z":-481.025},{"x":-61.095,"y":735.995,"z":-460.99},{"x":-48.18,"y":729.4,"z":-441.455},{"x":-35.68,"y":723,"z":-422.435},{"x":-23.565,"y":716.815,"z":-403.98},{"x":-11.87,"y":710.87,"z":-386.195},{"x":-0.655,"y":705.205,"z":-369.2},{"x":10.015,"y":699.855,"z":-352.99},{"x":20.055,"y":694.82,"z":-338.065},{"x":29.57,"y":690.055,"z":-323.29},{"x":40.605,"y":685.23,"z":-306.635},{"x":54.43,"y":680.12,"z":-284.32},{"x":65.86,"y":677.82,"z":-264.77},{"x":78.395,"y":676.225,"z":-242.97},{"x":91.965,"y":675.85,"z":-217.73},{"x":105.215,"y":677.1,"z":-190.395},{"x":116.685,"y":680.135,"z":-162.465},{"x":125.21,"y":684.83,"z":-135.105},{"x":130.14,"y":690.825,"z":-108.87},{"x":131.27,"y":697.675,"z":-83.88},{"x":128.685,"y":704.91,"z":-60.075},{"x":122.61,"y":712.09,"z":-37.44},{"x":113.29,"y":718.815,"z":-16.085},{"x":101.01,"y":724.72,"z":3.78},{"x":86.075,"y":729.49,"z":21.915},{"x":68.84,"y":732.905,"z":38.05},{"x":49.675,"y":734.81,"z":51.94},{"x":28.99,"y":735.115,"z":63.375},{"x":7.205,"y":733.79,"z":72.165},{"x":-15.255,"y":730.83,"z":78.18},{"x":-38.005,"y":726.22,"z":81.335},{"x":-60.74,"y":719.945,"z":81.57},{"x":-83.265,"y":711.955,"z":78.88},{"x":-105.425,"y":702.28,"z":73.345},{"x":-127.005,"y":691.07,"z":65.185},{"x":-147.61,"y":678.71,"z":54.8},{"x":-166.705,"y":665.73,"z":42.685},{"x":-183.72,"y":652.675,"z":29.315},{"x":-198.235,"y":639.935,"z":15.05},{"x":-210.06,"y":627.655,"z":0.045},{"x":-219.225,"y":615.76,"z":-15.64},{"x":-225.82,"y":604.105,"z":-31.95},{"x":-229.95,"y":592.55,"z":-48.75},{"x":-231.655,"y":581.02,"z":-65.805},{"x":-230.965,"y":569.49,"z":-82.815},{"x":-227.92,"y":557.965,"z":-99.455},{"x":-222.62,"y":546.435,"z":-115.4},{"x":-215.185,"y":534.905,"z":-130.355},{"x":-205.8,"y":523.375,"z":-144.03},{"x":-194.665,"y":511.845,"z":-156.175},{"x":-182.03,"y":500.315,"z":-166.58},{"x":-168.155,"y":488.785,"z":-175.055},{"x":-153.33,"y":477.255,"z":-181.46},{"x":-137.865,"y":465.725,"z":-185.705},{"x":-122.065,"y":454.2,"z":-187.73},{"x":-106.245,"y":442.67,"z":-187.525},{"x":-90.72,"y":431.14,"z":-185.13},{"x":-75.785,"y":419.61,"z":-180.62},{"x":-61.725,"y":408.075,"z":-174.105},{"x":-48.81,"y":396.52,"z":-165.755},{"x":-37.275,"y":384.94,"z":-155.745},{"x":-27.32,"y":373.3,"z":-144.305},{"x":-19.125,"y":361.585,"z":-131.68},{"x":-12.825,"y":349.78,"z":-118.13},{"x":-8.525,"y":337.91,"z":-103.92},{"x":-6.31,"y":326.025,"z":-89.3},{"x":-6.24,"y":314.205,"z":-74.475},{"x":-8.32,"y":302.615,"z":-59.635},{"x":-12.415,"y":291.505,"z":-45},{"x":-18.15,"y":281.215,"z":-30.92},{"x":-24.895,"y":272.14,"z":-17.875},{"x":-31.86,"y":264.62,"z":-6.405},{"x":-38.315,"y":258.82,"z":3.1},{"x":-44.375,"y":254.675,"z":11.925},{"x":-51.5,"y":250.1,"z":20.985},{"x":-59.12,"y":245.735,"z":30.39},{"x":-72.495,"y":241.27,"z":46.21},{"x":-88.695,"y":242.58,"z":66.06},{"x":-104.695,"y":253.28,"z":85.81},{"x":-120.695,"y":268.885,"z":105.56},{"x":-136.695,"y":278.43,"z":125.315},{"x":-152.69,"y":283.055,"z":145.065},{"x":-168.595,"y":279.565,"z":164.815},{"x":-184.595,"y":268.12,"z":184.565},{"x":-200.595,"y":252.735,"z":204.315},{"x":-216.595,"y":239,"z":224.07},{"x":-234.795,"y":227.13,"z":246.52},{"x":-248.595,"y":219.75,"z":263.57},{"x":-264.595,"y":214.71,"z":283.32},{"x":-280.595,"y":210.51,"z":303.07},{"x":-296.595,"y":205.315,"z":322.825},{"x":-312.595,"y":198.32,"z":342.575},{"x":-328.595,"y":189.725,"z":362.325},{"x":-344.595,"y":177.43,"z":382.075},{"x":-360.595,"y":164.43,"z":401.825},{"x":-376.595,"y":152.71,"z":421.58},{"x":-392.595,"y":142.725,"z":441.33},{"x":-408.595,"y":134.835,"z":461.08},{"x":-424.595,"y":129.4,"z":480.83},{"x":-440.595,"y":124.315,"z":500.585},{"x":-456.595,"y":121.855,"z":520.335},{"x":-472.595,"y":119.62,"z":540.085},{"x":-488.595,"y":119.57,"z":559.835},{"x":-504.595,"y":119.07,"z":579.585},{"x":-520.595,"y":120.15,"z":599.34},{"x":-534.285,"y":119.245,"z":616.565},{"x":-547.365,"y":110.57,"z":633.03},{"x":-559.045,"y":101.27,"z":642.865}];

nx.renderMasterPipe = function(masterPath){
    if(nx.masterPipe){
        nx.masterPipe.dispose()
        // nx.editNodes = [];
    }





    // nx.spacepipe8.rotationFn = function(i,e){
    //     if(i>=masterPath.length*0.38){ return 0 }
    //     if(i>=masterPath.length*0.35){ return 0.02 } //corkscrew
    //     if(i>=masterPath.length*0.29){ return 0.115; } //final straight away//return 0.05}
    //     return 0
    // }



//ROTATIONEDITOR-override-. 
//USAGE: make one edit to init: then paste in devtools cmd: nx.renderMasterPipe(nx.vectorPath); and on breakpoint after this fn, override it in devtools-.

// nx.spacepipe.rotationFn = function(i,e){
//     if(i<=masterPath.length*0.07){ return 0 } //entryport
//     if(i<=masterPath.length*0.15){ return -0.02 } //1stturnto2ndcommandpost
//     else if(i<=masterPath.length*0.28){ return 0.05 } //2ndturnaftercommandpost
//     else if(i<=masterPath.length*0.30){ return 0.03 }
//     else if(i<=masterPath.length*0.35){ return 0 } //flattener
//     else if(i<=masterPath.length*0.45){ return -0.04 } //after 1st commandpost
//     else if(i<=masterPath.length*0.5){ return 0 } // ascent before big curve
//     else if(i<=masterPath.length*0.6){return 0.1 }//past 2ndcommandpost
//     else if(i<=masterPath.length*0.7){return 0} //top-corkscrew
//     else if(i<=masterPath.length*0.8){return 0.08 } //bottomcorkscrew
//     else if(i<=masterPath.length*0.84){return -0.05 } //corkscrewlandinghill1
//     else if(i<=masterPath.length*0.90){return -0.01 }
//     else if(i<=masterPath.length*1){return 0} //backstop into hilltop
//     else { return 0 }
//     return 0
// }


// nx.spacepipe.rotationFn = function(i,e){
//     if(i<=masterPath.length*0.07){ return 0 } //entryport
//     if(i<=masterPath.length*0.15){ return -0.02 } //1stturnto2ndcommandpost
//     else if(i<=masterPath.length*0.28){ return 0.04 } //2ndturnaftercommandpost
//     else if(i<=masterPath.length*0.30){ return 0 }
//     else if(i<=masterPath.length*0.35){ return 0.03 } //flattener
//     else if(i<=masterPath.length*0.45){ return -0.04 } //after 1st commandpost
//     else if(i<=masterPath.length*0.5){ return 0 } // ascent before big curve
//     else if(i<=masterPath.length*0.6){return 0.05 }//past 2ndcommandpost
//     else if(i<=masterPath.length*0.66){return 0.02} //top-corkscrew
//     else if(i<=masterPath.length*0.70){return 0.15} //uppermiddle-corkscrew
//     else if(i<=masterPath.length*0.75){return 0.04} //loweriddle-corkscrew
//     else if(i<=masterPath.length*0.79){return 0.06 } //bottomcorkscrew
//     else if(i<=masterPath.length*0.84){return -0.01 } //corkscrewlandinghill1
//     else if(i<=masterPath.length*0.90){return 0 }
//     else if(i<=masterPath.length*1){return 0} //backstop into hilltop
//     else { return 0 }
//     return 0
// }


    nx.spacepipe.rotationFn = function(i,e){
        if(i<=masterPath.length*0.07){ return 0 } //entryport
        else if(i<=masterPath.length*0.15){ return -0.01 } //1stturnto2ndcommandpost
        else if(i<=masterPath.length*0.28){ return 0.03 } //2ndturnaftercommandpost
        else if(i<=masterPath.length*0.30){ return 0 } //small section after commandpost1 -0.03
        else if(i<=masterPath.length*0.35){ return 0 } //flattener
        else if(i<=masterPath.length*0.45){ return 0 } //after 1st commandpost
        else if(i<=masterPath.length*0.5){ return 0 } // ascent before big curve
        else if(i<=masterPath.length*0.57){return 0.0 }//past 2ndcommandpost
        else if(i<=masterPath.length*0.63){return 0.04} //top-corkscrew
        else if(i<=masterPath.length*0.68){return 0.12} //uppermiddle-corkscrew
        else if(i<=masterPath.length*0.75){return 0.06} //loweriddle-corkscrew
        else if(i<=masterPath.length*0.79){return 0.04 } //bottomcorkscrew
        else if(i<=masterPath.length*0.84){return 0 } //corkscrewlandinghill1
        else if(i<=masterPath.length*0.90){return 0 }
        else if(i<=masterPath.length*1){return 0} //backstop into hilltop
        else { return 0 }
        return 0
    }


// debugger;
    nx.masterPipe = BABYLON.MeshBuilder.ExtrudeShapeCustom("halfpipe", 
        {shape:nx.halfpipeShape,path:masterPath,
        scaleFunction:function(i){return 2
        },rotationFunction: nx.spacepipe.rotationFn, //dev override of rotationfn-.
        // },rotationFunction:function(i,e){
        //     if(i>=masterPath.length*0.38){ return 0}
        //     if(i>=masterPath.length*0.35){ return 0.02}
        //     if(i>=masterPath.length*0.29){ return 0.05}
        //     return 0
        // },
        ribbonCloseArray:false,ribbonClosePath:false,
        updatable:true,sideOrientation:BABYLON.Mesh.DOUBLESIDE},nx.scene);
    // nx.masterPipe.position = new BABYLON.Vector3(570,240,-650); //MASTER-PIPE-POSITIONING-.
    nx.masterPipe.position = new BABYLON.Vector3(570,105,-654); //MASTER-PIPE-POSITIONING-.{x: 570, y: 105, z: -643.9}
    // nx.masterPipe.scaling = new BABYLON.Vector3(nx.globalScale, nx.globalScale, nx.globalScale);

    // nx.masterPipe.scaling = new BABYLON.Vector3(nx.globalScale*1, nx.globalScale*1, nx.globalScale*1);
    nx.masterPipe.scaling = new BABYLON.Vector3(1, 1, 1);

    nx.masterPipe.parent = nx.ground; //TIP: load ground first-.
    nx.masterPipe.receiveShadows = true;
    nx.anmz.orby.collisionItems.push(nx.masterPipe);   
}

var createMasterPipeEditor = function(){  //NEED TO PASS IN THE OUTPUT TGT OBJECT-.
    //POINT-PIPE-EDITOR---------------------------------------------------------------------------.
    // var newPipePOS = new BABYLON.Vector3(570,125,-630)
    // var aPath = nx.createPointEditor({aPath:nx.spacepipe8,aPos:newPipePOS, editTgt:nx.editedPipe ,renderFn:function(aPath){
    //     nx.vectorPath = [];
    //     for(var i=0; i<aPath.length;i++){ nx.vectorPath.push(new BABYLON.Vector3(Math.round(aPath[i].x*200)/200,Math.round(aPath[i].y*200)/200,Math.round(aPath[i].z*200)/200));  }
    //     nx.renderMasterPipe(nx.vectorPath); //Applies edit at runtime-.
    //     // console.log(JSON.stringify(nx.vectorPath)); //PUBLISH-.
    // }}); 
    //END-POINT-PIPE-EDITOR---------------------------------------------------------------------------.
    // var aPath = nx.spacepipe7; //PROD-SPACE-PIPE-.
    // var aPath = nx.spacepipe6; //PROD-SPACE-PIPE-.
    var aPath = nx.spacepipe8; //PROD-SPACE-PIPE-.
    var vectorPath = [];
    for(var i=0; i<aPath.length;i++){
        vectorPath.push(new BABYLON.Vector3(aPath[i].x,aPath[i].y,aPath[i].z))
    }
    nx.renderMasterPipe(vectorPath);
}

//MODULE-READY-RENDERER-MECHANISMO-.
nx.getMasterManifest(function readyRender (){ //Ready-Renderer-.
    // try{
        createMasterPipeEditor(); //load pipe-.
        createZapBotPosts();
        createLandingPadMaster();
        // createHalfpipe1();
    // } 
    // catch(e){debugger;} //todo: random error
}); //schedule in manifest for ready callback-.
nx.setMasterManifest(); //signal success and await-.
