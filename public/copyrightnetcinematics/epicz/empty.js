//begin-interchangable-scene-.
var sceneMesh = [];
export var initScene = function(){
// var initScene = function(){
    /*************************************************************************************************\
    - PURPOSE minimal template of scene loading- with... nothing-.
    - ABILITY: INTERCHANGABLE scene templates-.
    \*************************************************************************************************/
    var createSomething = function() {

    }
    /*********************************CREATE-SCENE******************************/
    var createScene = function(){
        createSomething()
    }
    createScene();
}//end-interchangable-scene-.

export var unloadScene = function(){
    for(var i=0;i<sceneMesh.length;i++){
        sceneMesh[i].dispose();
        sceneMesh[i] = null;
    }
}