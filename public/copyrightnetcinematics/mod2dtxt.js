   // window.addEventListener('DOMContentLoaded', function(){
   		console.log('module-loaded')
      // debugger;
/*******************************************-TXTVARS-****************************************************/
    if(!nx){nx={}}
    if(!nx.ui){nx.ui={}}
      // nx.ui = {};

      //RWD-CODE-.
      nx.ui.windowHeight = $(window).height();
      nx.ui.windowWidth = $(window).width();
      nx.ui.screenOrientation = ($(window).width() > $(window).height())? 'landscape' : 'portrait';

      nx.ui.touch = ('ontouchstart' in window || navigator.maxTouchPoints) ? 1 : 0; //most browsers OR  IE10/11 and Surface

/*********************************************************************************************************/
//UI-INSTANCES: performance ops.
/*******************************************-create2DTXTUI-****************************************************/
nx.ui.txtSection = $('#txtSection');
nx.ui.txtSection.hide(); //todo
nx.ui.txtViewFrame1 = $('#txtViewFrame1');
nx.ui.topNav = $('#topNav');
nx.ui.lowNav = $('#lowNav');
nx.ui.lowNavBtn1 = $('#lowNavBtn1');
nx.ui.lowNavBtn2 = $('#lowNavBtn2');
nx.ui.lowNavBtn3 = $('#lowNavBtn3');
nx.ui.lowNavBtn4 = $('#lowNavBtn4');
// nx.ui.gearCtrlBtnM = $('#gearCtrlBtnM');
// nx.ui.gearBtn = $('.gearBtn');
// nx.ui.gearCtrlBtnD = $('#gearCtrlBtnD');

nx.ui.viewRow3 = $('#viewRow3');
nx.ui.viewRow2 = $('#viewRow2');
nx.ui.zoomBtn1 = $('#zoomBtn1');
nx.ui.zoomBtn2 = $('#zoomBtn2');
// nx.ui.playBtn1 = $('#playBtn1');
nx.ui.playAllBtn1 = $('#playAllBtn1');
nx.ui.playOneBtn2 = $('#playOneBtn2');
nx.ui.pauseBtn2 = $('#pauseBtn2');
nx.ui.audioToggle1 = $('#audioToggle1');  //good example of UI-.
nx.ui.refreshBtn1 = $('#refreshBtn1');  //good example of UI-.
setTimeout(function(){
  // nx.ui.playBtn1.show(1000); //default show-.
  nx.ui.pauseBtn2.show(500);
  nx.ui.audioToggle1.show(700);
  nx.ui.refreshBtn1.show(900);
},2000)
  
nx.ui.trickBtn1 = $('#trickBtn1');
nx.ui.jumpBtn1 = $('#jumpBtn1')


nx.ui.leftTxtBtn = $('#leftTxtBtn');
nx.ui.rightTxtBtn = $('#rightTxtBtn');
// nx.ui.minMaxBtnD = $('#minMaxBtnD');
// nx.ui.minMaxBtn = $('.minMaxBtn');
// nx.ui.viewCtrl1 = $('#viewCtrl1');
nx.ui.idxView = $('#idxView');
nx.ui.heroView = $('#heroView');
nx.ui.questView = $('#questView');
nx.ui.verticalScrollBox = $('.verticalScrollBox');

nx.ui.movieModeView = $('#movieModeView');
nx.ui.gameModeView = $('#gameModeView');
nx.ui.bookModeView = $('#bookModeView');
nx.ui.appModeView = $('#appModeView');


//TEXT MENU-.
nx.ui.navMovieBtn1 = $('#navMovieBtn1');
nx.ui.navGameBtn1 = $('#navGameBtn1');
nx.ui.navBookBtn1 = $('#navBookBtn1');
nx.ui.navAppBtn1 = $('#navAppBtn1');

//MIN-MAX-CTRLZ-.
nx.ui.minMaxBtn1 = $('#minMaxBtn1'); //max
nx.ui.minMaxBtn2 = $('#minMaxBtn2'); //min
nx.ui.isTXTViewMinimized = 1; //initially minimized-.
// nx.ui.activeView = nx.ui.idxView;     //default view while minimized.
nx.ui.activeView = nx.ui.bookModeView;     //default view while minimized.

nx.ui.canvasFooter = $('#canvasFooter');
nx.ui.backingSpan = $('#backingSpan');
nx.ui.backingSpan2 = $('#backingSpan2');
nx.ui.backingSpan2.hide();



nx.ui.epicLinkBtn = $('#epicLinkBtn');
//todo

/*******************************************-TXTSCRIPT-****************************************************/
// - METHODOLOGY - all txt components are zero-based numbering system to match programatic numbering.
// - App, Cloud, Age, Series, Epic, Scene AND Section Article Txt Aside Header Footer. Numbers. Starting with zero.
// - Track all content with IDX. In multiple systems: AppIdx, TxtIdx, AnmIdx-.
// AppIdx -> App: 1.0 Age: 1.1.1.0  Epic: 1.1.1.1.0 Series: 1.1.0 Episode: 1.1 Chapter 1.1.1.0 Scene 1.1.2.1.1 <- AnmIdx
// TxtIdx -> Article, Section, Txt, Img, Aside, Header, Footer, Link, Break, Title, SubTitle.
// - ART, SEC, TXT, IMG, HDR, FTR, LNK, BRK, TTL, STL-. 


//TODO move to TXTz
  nx.txtScript = {
    0:{ttl:'~Hero',subttl:'OrbyOrBot'},
    1:{ttl:'~Quest',subttl:'SpaceTrain Crash!'},
    2:{ttl:'~Epic 2: SouthernDunes',subttl:'locked'},
    3:{ttl:'~Meta 8',subttl:'Explore BetaMoon',rows:[{txt:'orby'},{txt:'Dr.Acozmo'}],
      play:[{txt:'GravBoard rides gravity waves!'},{txt:'Dr.Acozmo DIGITIZES distant exo~wurlds from entangled PHOTONZ!'},{txt:'Dr.Becky assists Dr.Acozmo to Digitize Dimension-Z.'},{txt:'d4 four for flower 4'},{txt:'5 five funf fiver 5'},{txt:'6 six sax swiss 6'},{txt:'7 sebon seven sev 9'},{txt:'8 eight ate oats 8'},{txt:'9 nine none nun 9'},{txt:'10 ten ten din den 10'}]}
  };

/*******************************************-TXTSCRIPT-****************************************************/
  //POPULATE-TXTBOX-.
  // var txtBox3Str = '<p>HULLOWURLD</p><i class="fa fa-lock" style="font-size:12em;margin-left:20%;margin-top:18%;"></i><p>';
  var txtBox3Str = '<p>Chapter: 2 <span style="float:right">Southern Dunes</span></p><i class="fa fa-lock" style="font-size:12em;margin-top:15%;width: 100%;text-align:center;"></i><p>';
  // $('#txtBox3').prepend(txtBox3Str);
  nx.ui.txtBox3 = $('#txtBox3');
  nx.ui.txtBox3.prepend(txtBox3Str);
  nx.ui.txtBox4 = $('#txtBox4');

  nx.ui.buildTxt = function(){
    for( idx in nx.txtScript){
      var col = nx.txtScript[idx];
      if(col.rows){
        for(var i=0; i<col.rows.length;i++){
          nx.ui.txtBox4.append('<p>'+col.rows[i].txt+'</p><p>Width:'+$(window).width()+'</p><p>Height:'+$(window).height()+'</p>')
        }
      }
    }
  }
  nx.ui.buildTxt();

//*****************************************************************************END - ANM-SCRIPT-.

    window.addEventListener('resize', function(){

        // console.log('screen orientation resize: '+screenOrientation);
        // if(screenOrientation==='portrait'){
        //     anmPortrait();
        // }else if(screenOrientation==='landscape'){
        //     anmLandscape();
        // }
        // if(!initialLoad){
        //     console.log('ZOOMSIZING')
        //     anmZoomSizer();
        // }
        // anmTitleFactory();
        nx.ui.resizeUI();
    });

    // function anmTitleFactory(){ //resize Titles-.
    //     anmMultiTitleSizer();
    //     initialLoad=0;
    // }
    // anmTitleFactory();

    //RWD-CODE-.
    nx.ui.resizeUI = function(){
      // console.log('calculate screensize')
      nx.ui.windowHeight = $(window).height();
      nx.ui.windowWidth = $(window).width();
      nx.ui.screenOrientation = ($(window).width() > $(window).height())? 'landscape' : 'portrait';
      nx.ui.estimatedDevice = '';  //todo STANDARDIZE to 'desktop','mobile','tablet',and 'large tablet'

      nx.ui.initCtrlBtns();
      nx.ui.initScrollTxtHeight();
    }

    nx.ui.initCtrlBtns = function(){
      if(nx.ui.windowHeight<650){
          nx.ui.zoomBtn1.css({'bottom':'39.5%'});
          nx.ui.zoomBtn2.css({'bottom':'32%'});
          // nx.ui.playBtn1.css({'bottom':'39.5%'});
          // nx.ui.pauseBtn2.css({'bottom':'32%'});
          nx.ui.trickBtn1.css({'bottom':'39.5%'});
          nx.ui.jumpBtn1.css({'bottom':'32%'});
        if(nx.ui.windowHeight<480){
          nx.ui.zoomBtn1.css({'bottom':'45.5%'});
          nx.ui.zoomBtn2.css({'bottom':'36.5%'});
          // nx.ui.playBtn1.css({'bottom':'45.5%'});
          // nx.ui.pauseBtn2.css({'bottom':'36.5%'});
          nx.ui.trickBtn1.css({'bottom':'45.5%'});
          nx.ui.jumpBtn1.css({'bottom':'36.5%'});
        } if(nx.ui.windowHeight<420){
          nx.ui.zoomBtn1.css({'bottom':'50%'});
          nx.ui.zoomBtn2.css({'bottom':'40%'});
          // nx.ui.playBtn1.css({'bottom':'50%'});
          // nx.ui.pauseBtn2.css({'bottom':'40%'});
          nx.ui.trickBtn1.css({'bottom':'50%'});
          nx.ui.jumpBtn1.css({'bottom':'40%'});
        } if(nx.ui.windowHeight<380){
          nx.ui.zoomBtn1.css({'bottom':'57%'});
          nx.ui.zoomBtn2.css({'bottom':'45%'});
          // nx.ui.playBtn1.css({'bottom':'57%'});
          // nx.ui.pauseBtn2.css({'bottom':'45%'});
          nx.ui.trickBtn1.css({'bottom':'57%'});
          nx.ui.jumpBtn1.css({'bottom':'45%'});
        } if(nx.ui.windowHeight<350){
          nx.ui.zoomBtn1.css({'bottom':'71%'});
          nx.ui.zoomBtn2.css({'bottom':'71%'});
          // nx.ui.playBtn1.css({'bottom':'71%'});
          // nx.ui.pauseBtn2.css({'bottom':'71%'});
          nx.ui.trickBtn1.css({'bottom':'57%'});
          nx.ui.jumpBtn1.css({'bottom':'57%'});
        }
      } else { //default-.
          nx.ui.zoomBtn1.css({'bottom':'35.55%'});
          nx.ui.zoomBtn2.css({'bottom':'30.0%'});
          // nx.ui.playBtn1.css({'bottom':'35.55%'});
          // nx.ui.pauseBtn2.css({'bottom':'30.0%'});
          nx.ui.trickBtn1.css({'bottom':'35.55%'});
          nx.ui.jumpBtn1.css({'bottom':'30.0%'});
      }
    }

    nx.ui.initScrollTxtHeight = function(){     
// debugger;

//TODO possibly fix initial FLICKER here-.

      var rowHeight = nx.ui.viewRow3.height();
      var navHeight = $('#navBar').height();
      //503 - 36 = 467; //todo new height
      var scrollFrameHeight = rowHeight - navHeight -131+50-5;//75;
      // var scrollFrameHeight = rowHeight - navHeight -131;//75;
      // var scrollFrameHeight = rowHeight - navHeight - 75;
      var scrollItemHeight = scrollFrameHeight - 32+50-15 - 40;//87;
      // var scrollItemHeight = scrollFrameHeight - 32;//87;
      // var scrollItemHeight = scrollFrameHeight; - 31;


// debugger;

      if(scrollFrameHeight>0){ $('.precisionScrollFrame').css({'height':scrollFrameHeight+'px'});  }
      if(scrollItemHeight>0){ $('.precisionScrollItem').css({'height':scrollItemHeight+'px'});  }

  }


  nx.ui.resizeUI(); //init-ui-layouts-based-on-screen-.

  // nx.ui.initCtrlView = function(){
  //   debugger;
  //   //IF OPEN - toggleMinMax
  //   if(nx.ui.isTXTViewMinimized){ //max  TABLET and MOBILE

  //     nx.ui.toggleMinMax();
  //   }
   
  //   //IF DESKTOP return
  //   if(nx.ui.windowWidth > 808 && nx.ui.windowHeight > 500){  //desktop. 
  //     return;
  //   } else {

  //     nx.ui.txtViewFrame1.css({height:'100%',width:'100%','margin-bottom':0});
  //     // nx.ui.txtSection.css({height:'22%'});
  //   }

  // }


//****************************************************************************************************END-RESIZE-.

/********************************************************- END-SETTXT- ******************************************************************/
nx.ui.sceneTXTIDX=0;
// nx.ui.sceneTXTARR = [];
nx.ui.sceneCOLIDX=0; //deprecated?
nx.setGameModeTXT = function(config){ 


    // nx.uiFrame = nx.uiFrame || $('#uiFrame');
    // // if(!nx.uiFrame){return;}

    // if(config.type==='mission'){
    //     $('#uiFrame').append('<article>'+config.txt+'</article>')
    // } else if (config.type==='button'){
    //     ++nx.ui.epicTXTIDX;
    //     $('#uiFrame').append('<button id="'+(config.name+nx.ui.epicTXTIDX)+'" style="cursor:pointer">'+config.txt+'</button>')

    //     $('#'+(config.name+nx.ui.epicTXTIDX)).on('click',config.clickfn) //behavioral-fn-.

    // } else if (config.type==='status'){
    //     $('#uiFrame').append('<article>STATUS: '+config.txt+'</article>')
    // } else if (config.type==='warning'){
    //     $('#uiFrame').append('<article>WARNING! '+config.txt+'</article>')
    // } else if (config.type==='collect'){
    //     $('#uiFrame').append('<article>COLLECT: '+config.txt+'</article>')
    // }
    // else if (config.type==='acozmo'){
    //     $('#uiFrame').append('<article>'+config.txt+'</article>')
    // }
    // else if (config.type==='orby'){
    //     $('#uiFrame').append('<article>'+config.txt+'</article>')
    // }

    /*******************************************************************dynamic-columns******************************************/
    // var idxMOD3 = nx.ui.sceneTXTIDX % 3;
    // nx.gameModeView = nx.gameMovieModeView || $('#gameModeView');
    // // nx.movieModeView = nx.movieMovieModeView || $('#movieModeView');
    
    // if(idxMOD3 === 0){
    //       nx.ui.sceneCOLIDX++;
    //       nx.nextEpicFrame = $( "<section id='sceneCOL"+nx.ui.sceneCOLIDX+"' style='flex:1; min-width: 50%; height:100%'></section>" )
    //       nx.gameModeView.append(nx.nextEpicFrame);
    //     } 
        
    //     ++nx.ui.sceneTXTIDX;
        /*******************************************************************dynamic-columns******************************************/
        // debugger;
    // nx.movieItems1 = nx.movieItems1 || $('#movieModeItems1');
    // nx.movieItems2 = nx.movieItems2 || $('#movieModeItems2');
    // nx.movieItems3 = nx.movieItems3 || $('#movieModeItems3');

    // if(config.type==='mission'){
    //     $('#uiFrame').append('<article>'+config.txt+'</article>')
    // } else if (config.type==='button'){
    // } else 
    // if (config.type==='button'){ //READER - 
    var iconState = '', iconType='',btnStyle='';
    if (config.type==='game'){ 
      iconType = '<span><i class="fa fa-gamepad"></i>&nbsp;'+config.txt+'</span>';
      btnStyle='gameStyle'
    }
    if (config.type==='movie'){ 
      iconType = '<span><i class="fa fa-video"></i>&nbsp;'+config.txt+'</span>';
      btnStyle='movieStyle'

    }
    if (config.type==='book'){ 
      iconType = '<span><i class="fa fa-book-open"></i>&nbsp;'+config.txt+'</span>';
      btnStyle='bookStyle'

    }
    if (config.type==='alert'){ 
      iconType = '<span><i class="fa fa-exclamation-triangle"></i>&nbsp;'+config.txt+'</span>';
      // icon += '<span><i class="fa fa-exclamation-circle"></i></span>';
      // icon = '<span><i class="fas fa-exclamation-triangle"></i></span>';

    }
    if (config.type==='warning'){ 
      iconType = '<span><i class="fa fa-bolt"></i>&nbsp;'+config.txt+'</span>';
      // icon += '<span><i class="fa fa-bolt"></i></span>';
      // icon += '<span><i class="fa fa-expeditedssl"></i></span>';
      // icon += '<span><i class="fa fa-grin-alt"></i></span>';
    }


    if(nx.ui.sceneTXTIDX===0){
      iconState = '<i class="fa fa-exclamation-circle" style="float:left;"></i>';

    } else if(nx.ui.sceneTXTIDX===1){
      iconState = '<i class="fa fa-check-circle" style="float:left;"></i>';

    }  else if(nx.ui.sceneTXTIDX===2){
      iconState = '<i class="fa fa-exclamation-circle" style="float:left;"></i>';

    }  
    //  else if(nx.ui.sceneTXTIDX===3){
    //   iconState = '<i class="fa fa-map" style="float:left;"></i>';

    // }   else if(nx.ui.sceneTXTIDX===4){
    //   iconState = '<i class="fas fa-globe" style="float:left;"></i>';

    // }   else if(nx.ui.sceneTXTIDX===5){
    //   iconState = '<i class="fas fa-video" style="float:left;"></i>';

    // } 
    else {
      // iconState = '<i class="fa fa-expeditedssl" aria-hidden="true"></i>';
      // iconState = '<i class="fa fa-expeditedssl" style="float:left;"></i>';
      iconState = '<i class="fa fa-lock" style="float:left;font-size: 0.9em; margin:0.3em; opacity: 0.6;"></i>';
    }





        // if(nx.ui.sceneTXTIDX <= 3){ //WRITER -
        //     nx.movieItems1.append("<button id="+config.id+nx.ui.sceneTXTIDX+" class='mediaBtn "+config.class+"'>"+iconState+iconType+"</button>");
        // } else if (nx.ui.sceneTXTIDX <= 6) {
        //     nx.movieItems2.append("<button id="+config.id+nx.ui.sceneTXTIDX+" class='mediaBtn "+config.class+"'>"+iconState+iconType+"</button>");
        // } else  {
        //     nx.movieItems3.append("<button id="+config.id+nx.ui.sceneTXTIDX+" class='mediaBtn "+config.class+"'>"+iconState+iconType+"</button>");
        // }
        nx.lastEpic = $("<button id="+config.id+nx.ui.sceneTXTIDX+" class='mediaBtn "+btnStyle+" "+config.classID+"'>"+iconState+iconType+"</button>");
        // nx.lastEpic = $("<button id="+config.id+nx.ui.sceneTXTIDX+" class='mediaBtn "+config.class+"'>"+iconState+iconType+"</button>");
        // nx.lastEpic.prop("disabled",true);

        if(config.state==='locked'){
          nx.lastEpic.addClass("disabledBtn");
        }
        // nx.nextEpicFrame.append("<button id="+config.id+nx.ui.sceneTXTIDX+" disabled='true' class='mediaBtn "+config.class+"'>"+iconState+iconType+"</button>");
        // nx.nextEpicFrame.append(nx.lastEpic); //UPDADE MOVIE TXT
        // var gameEpic = $(nx.lastEpic)
        // $('#gameTXTBox').append(gameEpic);//Also-Update-Game-TXT
        nx.lastEpicGame = nx.lastEpic.clone()
        $('#gameTXTBox').append(nx.lastEpicGame);//Also-Update-Game-TXT

        // nx.lastEpic.clone().appendTo( '#gameTXTBox' );

        if(config.clickfn){
        // debugger;
            nx.lastEpic.on('click',config.clickfn) //behavioral-fn-.
            nx.lastEpicGame.on('click',config.clickfn) //behavioral-fn-.
            // $('#'+(config.id+nx.ui.sceneTXTIDX)).on('click',config.clickfn) //behavioral-fn-.
            // $('#'+(config.id+nx.ui.sceneTXTIDX)).on('click',config.clickfn) //behavioral-fn-.
        }

    // } 
    // else {
    //     // nx.movieMode.append("<button id=book1 class='mediaBtn'>"+config.txt+"</button>");
    // }
     // else if (config.type==='status'){
    //     $('#uiFrame').append('<article>STATUS: '+config.txt+'</article>')
    // } else if (config.type==='warning'){
    //     $('#uiFrame').append('<article>WARNING! '+config.txt+'</article>')
    // } else if (config.type==='collect'){
    //     $('#uiFrame').append('<article>COLLECT: '+config.txt+'</article>')
    // }
    // else if (config.type==='acozmo'){
    //     $('#uiFrame').append('<article>'+config.txt+'</article>')
    // }
    // else if (config.type==='orby'){
    //     $('#uiFrame').append('<article>'+config.txt+'</article>')
    // }

}

/********************************************************- END-SETTXT- ******************************************************************/

/********************************************************- TRIGGER scene TXT- ******************************************************************/


 nx.ui.unlockEpic = function(obj){

    // debugger; 

    //class do id because will need to be across views
    // $('#epicItem2').removeClass('disabledBtn')
    $('.'+obj.class).removeClass('disabledBtn')

    $('.sceneSelector').removeClass('sceneSelector')

    $('.'+obj.class).addClass('sceneSelector')



 }


/********************************************************- END-TRIGGER scene TXT- ******************************************************************/



/********************************************************- END-SETTXT- ******************************************************************/


var initGameModeTXTs = function(){ 

    // console.log('dynamicbtn')

    //TODO type becomes style, class becomes multy unique id, id remove?
    //WRITER-


    //todo rename epicItem1 to epicItem0 to match with epicidx nx.movieRunner(1)
    nx.setGameModeTXT({txt:'Orby Surf~Space!',type:'movie',classID:'epicItem1 sceneSelector',id:'epicItem',state:'new',clickfn:function(){
        // if(nx.cinematicMode){return;}
        // nx.spaceSeqIdx[0] = {on:1}; //THIS-SHOULD-RUN-THE WHOLE-SEQUENCE-PERFECTLY-.
        // nx.runCinematicSequence("SpaceSequence")
        

        //todo function stop cinemo
        // nx.cinematicMode = 0; //extend this in sequences as sequence stops?
        // nx.cinemaStop = 1; 

        //todd: function clearMSGQueue

        nx.ui.stopFlashMSG();
        // nx.ui.flashMSGQueue = [];
        // nx.ui.flashMSGPlaying = 0;

        // nx.ui.canvasFooter.empty().hide(); //do not hide-.
        // nx.ui.canvasFooter.empty();

// $('canvas').fadeOut()
//       setTimeout(function(){ //important delay: allows animations time to stop, in cinemaStop
//         nx.cinemaStop = 0; 
//         nx.movieRunner(0);
//         $('canvas').fadeIn()
//       },2000)
      // nx.stopMovie(0);
// debugger;
        nx.stopMovie({fadeCurtain:1});
      // nx.stopMovie({startEpicIDX:0,fadeCurtain:1});

debugger;
        nx.initSEQ({seqID:1});

    }});
    nx.setGameModeTXT({txt:'Collect Space~IONZ!',type:'game',classID:'epicItem2',id:'epicItem',state:'new',clickfn:function(){
        // console.log('C')
        // restartGame();
        // nx.ui.goGameBtn1();
// debugger;
        nx.initGAME({gameID:"SpaceIonz"});  //load game on epic list hardload btn click
        // nx.runGAME({gameID:1});  //load game on epic list hardload btn click
        // nx.runGAME({initfn:0,runfn:0});  //load game on epic list hardload btn click

        nx.ui.canvasFooter.hide();
        // nx.spaceSeqIdx[8] = {on:1}; 
        // nx.runCinematicSequence("SpaceSequence")
    }});

    //TODO: link all of these to MASTERSEQUENCE and TXTZ

    // nx.setGameModeTXT({txt:'Land on AlphaMoon!',type:'game',classID:'epicItem3',id:'epicItem',state:'locked',clickfn:function(){
    nx.setGameModeTXT({txt:'ZapBot!',type:'warning',classID:'epicItem4',id:'epicItem',state:'new',clickfn:function(){
// debugger;
        // if(nx.cinematicMode){return;}
        // nx.spaceSeqIdx[0] = {on:1}; //THIS-SHOULD-RUN-THE WHOLE-SEQUENCE-PERFECTLY-.
        // nx.runCinematicSequence("SpaceSequence")
        nx.initSEQ({seqID:'landingSequence'}); //softload Landing Seq!
    }});
    nx.setGameModeTXT({txt:'ZapBot Showdown!',type:'game',classID:'epicItem3',id:'epicItem',state:'new',clickfn:function(){

      nx.initGAME({gameID:'Showdown'}); //softload LandingPad Showdown!

// debugger;
//         if(nx.cinematicMode){return;}
//         nx.spaceSeqIdx[0] = {on:1}; //THIS-SHOULD-RUN-THE WHOLE-SEQUENCE-PERFECTLY-.
//         nx.runCinematicSequence("SpaceSequence")
    }});
    nx.setGameModeTXT({txt:'Beware DarkBot!',type:'movie',classID:'epicItem5',id:'epicItem',state:'new',clickfn:function(){
debugger;
        // if(nx.cinematicMode){return;}
        // nx.spaceSeqIdx[0] = {on:1}; //THIS-SHOULD-RUN-THE WHOLE-SEQUENCE-PERFECTLY-.
        // nx.runCinematicSequence("SpaceSequence")
    }});
    nx.setGameModeTXT({txt:'Crash on AlphaMoon!',type:'movie',classID:'epicItem6',id:'epicItem',state:'new',clickfn:function(){
debugger;
        // if(nx.cinematicMode){return;}
        // nx.spaceSeqIdx[0] = {on:1}; //THIS-SHOULD-RUN-THE WHOLE-SEQUENCE-PERFECTLY-.
        // nx.runCinematicSequence("SpaceSequence")
    }});
    nx.setGameModeTXT({txt:'Why did SpaceTrain Crash?',type:'game',classID:'epicItem7',id:'epicItem',state:'new',clickfn:function(){
debugger;
        // if(nx.cinematicMode){return;}
        // nx.spaceSeqIdx[0] = {on:1}; //THIS-SHOULD-RUN-THE WHOLE-SEQUENCE-PERFECTLY-.
        // nx.runCinematicSequence("SpaceSequence")
    }});


    nx.setGameModeTXT({txt:'ZapBotz',type:'book',classID:'epicItem8', id:'epicItem', state:'locked',clickfn:function(){
debugger;

    }});

    nx.setGameModeTXT({txt:'SpaceTrain Crash!',type:'alert',classID:'epicItem9',id:'epicItem',state:'locked',clickfn:function(){
debugger;
        // if(nx.cinematicMode){return;}
        // nx.spaceSeqIdx[0] = {on:1}; //THIS-SHOULD-RUN-THE WHOLE-SEQUENCE-PERFECTLY-.
        // nx.runCinematicSequence("SpaceSequence")
    }});
    // nx.setGameModeTXT({txt:'dGAME2',type:'button',name:'gameBtn',clickfn:function(){
    //     // console.log('C')
    //     restartGame();
    //     // nx.spaceSeqIdx[8] = {on:1}; 
    //     // nx.runCinematicSequence("SpaceSequence")
    // }});

// nx.setGameModeTXT({txt:'GO!',type:'button',name:'goBtn',clickfn:nx.ui.goGameBtn1});



    // nx.setGameModeTXT({txt:'BOOK',type:'button',name:'bookBtn',clickfn:function(){
    // }});
    // nx.setGameModeTXT({txt:'BIO!',type:'button',name:'bioBtn',clickfn:function(){
    // }});
    // nx.setGameModeTXT({txt:'JOIN!',type:'button',name:'subBtn',clickfn:function(){
    // }});
    // nx.setGameModeTXT({txt:'FREE!',type:'button',name:'freeBtn',clickfn:function(){
    // }});
}

initGameModeTXTs();


//****************************************************************************************************MODE BTN HANDLERS-.

  //todo LOCALIZE $() variable to nx.iu-.
  // $('#bookBtn1').click(function(){
  //   nx.ui.showBookModeView();
  //   // $('#gameBtn1').show(500);
  //   // $('#gameBtn2').hide(500);
  //   // $('#movieBtn1').show(500);
  //   // nx.engine.resize();
  //   // $(this).hide(500);  
  // });

  // $('#movieBtn1').click(function(){
  //   nx.ui.showMovieModeView();
  //   $('#gameBtn2').show(500);
  //   $('#gameBtn1').hide(500);
  //   $('#bookBtn1').show(500);
  //   $(this).hide(500); 
  //   nx.engine.resize(); 
  // });

  // $('#gameBtn1').click(function(){
  //   nx.ui.showGameModeView();
  //   $('#bookBtn1').show(500);
  //   $(this).hide(500); 
  //   nx.engine.resize(); 
  // });

  // $('#gameBtn2').click(function(){
  //   nx.ui.showGameModeView();
  //   $('#movieBtn1').show(500);
  //   $(this).hide(500); 
  //   nx.engine.resize(); 
  // });

  nx.ui.epicLinkBtn.click(function(){
    // debugger;

    nx.ui.showEpicModeView();

    // nx.ui.showGameModeView();
    // $('#movieBtn1').show(500);
    // $(this).hide(500); 
    // nx.engine.resize(); 
  });

/*************************************************************-CAM-BTNs-****************************************/
  $('#camBtn1').click(function(){
    nx.initFollowCam();
  });
  $('#camBtn2').click(function(){
    nx.initFaceCam();
  });
  $('#camBtn3').click(function(){
    nx.initFreeCam();
  });
/*************************************************************-END-CAM-BTNs-****************************************/

/*************************************************************-MODE-VIEWs-****************************************/
//TODO format thext like this
// nx.ui.movieMode = nx..ui.movieMode || $('#movieModeFrame');

nx.ui.showMovieModeView = function(){

  nx.ui.activeView.hide(1000);
  nx.ui.movieModeView.show(3000);

  //set-selector-and-active-view-.
  nx.ui.btnSelector = $('.btnSelector')
  nx.ui.btnSelector.removeClass('btnSelector');
  nx.ui.btnSelector = nx.ui.navMovieBtn1;
  nx.ui.btnSelector.addClass('btnSelector')
  nx.ui.activeView = nx.ui.movieModeView;

// debugger;
  // console.log('TEST2 rerender');
// debugger;
  var currMaxPct = nx.ui.viewRow3.css('max-height');
  var currMax = parseFloat(currMaxPct.substr(0,currMaxPct.indexOf('%')));
  var tgtMax = 28;

  // //ANM-MIN-TO-MAX
  $({'minMax':currMax}).animate({'minMax':tgtMax},{queue:false,duration:3000,easing:'swing',
    step: function(now) { 
        nx.ui.viewRow3.css({'max-height':this.minMax+'%'});
      }, complete:function(){


        nx.ui.viewRow3.css({'flex':'3 0 0'});
        nx.ui.viewRow2.css({'flex':'3 0 0'});

        if(nx.engine){    nx.engine.resize(); }
  }});
  nx.ui.isTXTViewMinimized=0;
// debugger;

  // nx.ui.viewRow3.css({'max-height':'28%'}); //med
  // nx.ui.viewRow3.css({'flex':3});
  // nx.ui.viewRow2.css({'flex':3});

  // nx.ui.viewRow2.css({'flex':1});
  nx.ui.zoomBtn1.hide();
  nx.ui.zoomBtn2.hide();
  // nx.ui.playBtn1.show(1000);
  nx.ui.pauseBtn2.show(500);
  nx.ui.audioToggle1.show(700);
  nx.ui.refreshBtn1.show(900);
  nx.ui.trickBtn1.hide();
  nx.ui.jumpBtn1.hide();

  nx.ui.movieModeScrollToBottom();

  nx.ui.minMaxBtn1.hide();
  nx.ui.minMaxBtn2.show(1000); //showMin

  // if(nx.engine){    nx.engine.resize(); }
}

nx.ui.showJumpBtn = 0;
nx.ui.showTrickBtn = 0;
nx.ui.showGameModeView = function(){
  // $('#versionTxt').show();
  // nx.ui.movieModeView.hide();
  // nx.ui.gameModeView.fadeIn(3000);
  // nx.ui.bookModeView.hide();
  // nx.ui.appModeView.hide();
  // nx.ui.idxView.hide();
  // nx.ui.heroView.hide();
  // nx.ui.questView.hide();

  nx.ui.activeView.hide(1000);
  nx.ui.gameModeView.show(3000);

  //set-selector-and-active-view-.
  nx.ui.btnSelector = $('.btnSelector')
  nx.ui.btnSelector.removeClass('btnSelector');
  nx.ui.btnSelector = nx.ui.navGameBtn1;
  nx.ui.btnSelector.addClass('btnSelector')
  nx.ui.activeView = nx.ui.gameModeView;
  
  // $('#txtModeView').hide();
  // $('#gameModeView').fadeIn(3000); 
  // $('#movieModeView').fadeOut(3000); 
  // $('#movieModeView').hide(); 
  // $('#movieModeFrame').fadeOut(3000);
  
// debugger;
  var currMaxPct = nx.ui.viewRow3.css('max-height');
  var currMax = parseFloat(currMaxPct.substr(0,currMaxPct.indexOf('%')));
  var tgtMax = 28;
  // //ANM-MIN-TO-MAX
  $({'minMax':currMax}).animate({'minMax':tgtMax},{queue:false,duration:3000,easing:'swing',
    step: function(now) { 
        nx.ui.viewRow3.css({'max-height':this.minMax+'%'});

        console.log('TEST3 rerender');
        if(nx.engine){ nx.engine.resize(); }

      }, complete:function(){

        nx.ui.viewRow3.css({'flex':'3 0 0'});
        nx.ui.viewRow2.css({'flex':'3 0 0'});

        if(nx.engine){    nx.engine.resize(); }
  }});
  nx.ui.isTXTViewMinimized=0;
  // nx.ui.viewRow3.css({'max-height':'28%'}); //med
  // nx.ui.viewRow3.css({'flex':3});
  // nx.ui.viewRow2.css({'flex':3});
  // nx.ui.playBtn1.hide();
  nx.ui.pauseBtn2.hide();
  // nx.ui.audioToggle1.hide();
  nx.ui.zoomBtn1.show(1000);
  nx.ui.zoomBtn2.show(500);
  nx.ui.trickBtn1.show(1000);
  nx.ui.jumpBtn1.show(500);

  if(nx.ui.showTrickBtn){ nx.ui.trickBtn1.show(); } //Todo hide on spacefall, toggle back on when on pipe
  if(nx.ui.showJumpBtn){ nx.ui.jumpBtn1.show(); }
  // $('#gameBtn2').hide();
  // $('#movieBtn1').show();

  nx.ui.minMaxBtn1.hide();
  nx.ui.minMaxBtn2.show(1000); //showMin

  // if(nx.engine){    nx.engine.resize(); }
}

nx.ui.showTitleScreen = function( config ){
  if(!config){config={}};
  if(!config.meta){config.meta={}};


// USAGE: meta : {lvlNUM:1,lvlTXT:'COLLECT~SPACEIONZ!',lvlSubTXT:'Find SpaceTrain Wreck!',
//   lvlIMG:'',lvlTIPS:['','','']}
// debugger;
  //SET-TITLE-SCREEN-CONTENT-.
  // var lvlNUM=(config.meta.lvlNUM)?config.meta.lvlNUM:''; 
  var lvlMode=(config.meta.lvlMode)?config.meta.lvlMode:''; 
  var lvlTXT=(config.meta.lvlTXT)?config.meta.lvlTXT:''; 
  var lvlSubTXT=(config.meta.lvlSubTXT)?config.meta.lvlSubTXT:''; 
  var lvlIMG=(config.meta.lvlIMG)?config.meta.lvlIMG:''; 
  var lvlTIPS=(config.meta.lvlTIPS)?config.meta.lvlTIPS:''; 
  var lvlIMGSize=(config.meta.lvlIMGSize)?config.meta.lvlIMGSize:'4.444em';
  //POPULATE-VIEW-.
  // if(!nx.lvlNUM){nx.lvlNUM = $('#lvlNUM')}; nx.lvlNUM.html(lvlNUM);
  if(!nx.lvlMode){nx.lvlMode = $('#lvlMode')}; nx.lvlMode.html(lvlMode);
  if(!nx.lvlTXT){nx.lvlTXT = $('#lvlTitleTXT')}; nx.lvlTXT.html(lvlTXT);
  if(!nx.lvlSubTXT){nx.lvlSubTXT = $('#lvlSubTXT')}; nx.lvlSubTXT.html(lvlSubTXT);
  if(!nx.lvlIMG){nx.lvlIMG = $('#lvlIMG img')}; nx.lvlIMG.attr('src', lvlIMG);
  if(!nx.lvlTIPS){nx.lvlTIPS = $('#lvlTIPS')}; nx.lvlTIPS.html(lvlTIPS);
  // if(!nx.lvlIconIMG){nx.lvlIconIMG = $('#lvlIMG')}; 
  if(lvlIMGSize){ $(nx.lvlIMG[0]).css('width',lvlIMGSize) }
  

// debugger;

  //SHOW-TITLE-SCREEN-.
  nx.canva$.fadeOut(1000,function(){
    // debugger;
    // $('#titleViewFrame').show();
    // $('#titleViewFrame').show();
    // $('#mainTitleViewFrame').show();
    // $('#mainTitleViewFrame').fadeIn(6000);
    // $('#mainTitleViewFrame').attr('opacity',0).css('display','flex').hide().fadeIn(3000);
    // $('#titleViewFrame').css("display", "flex").hide().fadeIn(2000);
    nx.ui.titleViewFrame.css("display", "flex").hide().fadeIn(2000);
    // $('#lvlTitleView').css("display", "flex").hide().fadeIn(2000);
    // $('#lvlTitleView').css("display", "flex").show();//.hide().fadeIn(6000);
  });
  // $('#mainTitleView').css("display", "flex"); //todo
  //   $('#mainTitleView').fadeOut(3000)



  //DISABLE GAME BTNS-.
  // <i class="fa fa-lock" style="
  //   font-size: 0.888em;
  //   padding-right: 0.2em;
  //   color: darkslategrey;
  //   "></i>


  //WIRE-TITLE-SCREEN-BTNS-.
  if(!nx.lvlGameBtn1){nx.lvlGameBtn1 = $('#lvlGameBtn1')}
  // nx.lvlGameBtn1.unbind('click');//must do for singular handler-.
  // nx.lvlGameBtn1.click(function(){
  //   //HIDE-TITLE-SCREEN-.
  //   $('#mainTitleViewFrame').fadeOut(1000)
  //   nx.canva$.fadeIn(1000)
  //   nx.engine.resize();
  //   if(config.btn1fn){config.btn1fn();} //callback-.
  // });
  
  
  if(!nx.lvlMovieBtn2){nx.lvlMovieBtn2 = $('#lvlMovieBtn2')}
  nx.lvlMovieBtn2.unbind('click');//must do for singular handler-.
  nx.lvlMovieBtn2.click(function(){
    // debugger;
      //HIDE-TITLE-SCREEN-.
      $('#titleViewFrame').fadeOut(1000)
      // $('#mainTitleViewFrame').fadeOut(1000)
      // nx.canva$.fadeIn(1000)
      nx.canva$.fadeIn(1000,function(){
        nx.engine.resize();
      })
      // nx.engine.resize();
      if(config.btn2fn){config.btn2fn();} //callback-.
      nx.cinemaPlayAll=1; //play all auto title cards
  });

  
  // setTimeout(function(){ //todo
  //SHOW TITLE SCREEN //todo
  //   $('#mainTitleViewFrame').fadeOut(2000)
  //   nx.canva$.fadeIn(2000)
  //   nx.engine.resize()
  // },10000*nx.RUNTIME); 

}


nx.ui.showBookModeView = function(){
  // $('#gameBtn1').show(500);
  // $('#gameBtn2').hide(500);
  // $('#movieBtn1').show(500);
  // $('#bookBtn1').hide(500);
  
  //set-toggle-button-.
  //show-hide-views-.
  // nx.ui.movieModeView.hide();
  // nx.ui.gameModeView.hide();
  // nx.ui.bookModeView.show(3000);
  // nx.ui.appModeView.hide();
  // nx.ui.idxView.hide();
  // nx.ui.heroView.hide();
  // nx.ui.questView.hide();

  nx.ui.activeView.hide(1000);
  nx.ui.bookModeView.show(3000);

  //set-selector-and-active-view-.
  nx.ui.btnSelector = $('.btnSelector')
  nx.ui.btnSelector.removeClass('btnSelector');
  nx.ui.btnSelector = nx.ui.navBookBtn1;
  nx.ui.btnSelector.addClass('btnSelector')
  nx.ui.activeView = nx.ui.bookModeView;

  // $('#versionTxt').hide();
  // $('#txtModeView').show();
  // $('#gameModeView').hide();
  // $('#movieModeView').hide();
  // $('#movieModeFrame').hide();

// debugger;

  var currMaxPct = nx.ui.viewRow3.css('max-height');
  var currMax = parseFloat(currMaxPct.substr(0,currMaxPct.indexOf('%')));
  var tgtMax = 80;
  // //ANM-MIN-TO-MAX
  $({'minMax':currMax}).animate({'minMax':tgtMax},{queue:false,duration:3000,easing:'swing',
    step: function(now) { 
        nx.ui.viewRow3.css({'max-height':this.minMax+'%'});

        console.log('TEST4 rerender');
        if(nx.engine){ nx.engine.resize(); }

      }, complete:function(){

        // nx.ui.viewRow3.css({'flex':'4 0 0'});
        // nx.ui.viewRow2.css({'flex':'1 0 0'});

        if(nx.engine){    nx.engine.resize(); }
  }});
  nx.ui.isTXTViewMinimized=0;
  nx.ui.viewRow3.css({'flex':'4 0 0'});
  nx.ui.viewRow2.css({'flex':'1 0 0'});


  // nx.ui.viewRow3.css({'max-height':'80%'}); //tall
  // nx.ui.viewRow3.css({'flex':'4 0 0'});
  // nx.ui.viewRow2.css({'flex':1});
  nx.ui.zoomBtn1.hide();
  nx.ui.zoomBtn2.hide();
  // nx.ui.playBtn1.hide();
  nx.ui.pauseBtn2.hide();
  // nx.ui.audioToggle1.hide();
  nx.ui.trickBtn1.hide();
  nx.ui.jumpBtn1.hide();
  
  // setTimeout(function(){
    // nx.ui.initScrollTxtHeight();  //todo this needs to be specific to each view-.
  // },3000);


  nx.ui.minMaxBtn1.hide();
  nx.ui.minMaxBtn2.show(1000); //showMin
  
  if(nx.engine){ nx.engine.resize(); }
}

nx.ui.showAppModeView = function(){
  debugger; //TODO add app stuff here. APP|JOIN|SUBS|BUY
}

//TODO remove these-.
nx.ui.showIdxModeView = function(){
  debugger; //shouldn't happen
  nx.ui.activeView.hide(1000);
  nx.ui.idxView.show(3000);

  //set-selector-and-active-view-.
  nx.ui.btnSelector = $('.btnSelector')
  nx.ui.btnSelector.removeClass('btnSelector');
  nx.ui.btnSelector = nx.ui.lowNavBtn1;
  nx.ui.btnSelector.addClass('btnSelector')
  nx.ui.activeView = nx.ui.idxView;


  var currMaxPct = nx.ui.viewRow3.css('max-height');
  var currMax = parseFloat(currMaxPct.substr(0,currMaxPct.indexOf('%')));
  var tgtMax = 80;
  // //ANM-MIN-TO-MAX
  $({'minMax':currMax}).animate({'minMax':tgtMax},{queue:false,duration:3000,easing:'swing',
    step: function(now) { 
        nx.ui.viewRow3.css({'max-height':this.minMax+'%'});

        console.log('TEST5 rerender');
        if(nx.engine){ nx.engine.resize(); }

      }, complete:function(){

        // nx.ui.viewRow3.css({'flex':'4 0 0'});
        // nx.ui.viewRow2.css({'flex':'1 0 0'});

        if(nx.engine){    nx.engine.resize(); }
  }});
  debugger;
  nx.ui.isTXTViewMinimized=0;
  nx.ui.viewRow3.css({'flex':'4 0 0'});
  nx.ui.viewRow2.css({'flex':'1 0 0'});


  // nx.ui.viewRow3.css({'max-height':'80%'}); //max
  // nx.ui.viewRow3.css({'flex':'4 0 0'});
  // nx.ui.viewRow2.css({'flex':1});
  nx.ui.zoomBtn1.hide();
  nx.ui.zoomBtn2.hide();
  // nx.ui.playBtn1.hide();
  nx.ui.pauseBtn2.hide();
  nx.ui.trickBtn1.hide();
  nx.ui.jumpBtn1.hide();
  
  // nx.ui.initScrollTxtHeight();  //todo this needs to be specific to each view-.
  
  nx.ui.minMaxBtn1.hide();
  nx.ui.minMaxBtn2.show(1000); //showMin
  
  if(nx.engine){ nx.engine.resize(); }
}

nx.ui.showEpicModeView = function(){
  //anmethodology, BEST-BOOK-UX-.
  nx.ui.activeView.hide(1000);
  nx.ui.heroView.show(3000);

  //set-selector-and-active-view-.
  nx.ui.btnSelector = $('.btnSelector')
  nx.ui.btnSelector.removeClass('btnSelector');
  nx.ui.btnSelector = nx.ui.lowNavBtn2;
  nx.ui.btnSelector.addClass('btnSelector')
  nx.ui.activeView = nx.ui.heroView;

// debugger;
  var currMaxPct = nx.ui.viewRow3.css('max-height');
  var currMax = parseFloat(currMaxPct.substr(0,currMaxPct.indexOf('%')));
  var tgtMax = 80;
  // //ANM-MIN-TO-MAX
  $({'minMax':currMax}).animate({'minMax':tgtMax},{queue:false,duration:3000,easing:'swing',
    step: function(now) { 
        nx.ui.viewRow3.css({'max-height':this.minMax+'%'});

        console.log('TEST6 rerender');
        if(nx.engine){ nx.engine.resize(); }

      }, complete:function(){

        // nx.ui.viewRow3.css({'flex':'4 0 0'});
        // nx.ui.viewRow2.css({'flex':'1 0 0'});
        nx.ui.initScrollTxtHeight();  //todo this needs to be specific to each view-.
  
        if(nx.engine){    nx.engine.resize(); }
  }});
  nx.ui.isTXTViewMinimized=0;
  nx.ui.viewRow3.css({'flex':'4 0 0'});
  nx.ui.viewRow2.css({'flex':'1 0 0'});


  // nx.ui.viewRow3.css({'max-height':'80%'}); //tall
  // nx.ui.viewRow3.css({'flex':'4 0 0'});
  // nx.ui.viewRow2.css({'flex':1});
  nx.ui.zoomBtn1.hide();
  nx.ui.zoomBtn2.hide();
  // nx.ui.playBtn1.hide();
  nx.ui.pauseBtn2.hide();
  nx.ui.trickBtn1.hide();
  nx.ui.jumpBtn1.hide();
  
  // nx.ui.initScrollTxtHeight();  //todo this needs to be specific to each view-.
  
  nx.ui.minMaxBtn1.hide();
  nx.ui.minMaxBtn2.show(1000); //showMin
  
  if(nx.engine){ nx.engine.resize(); }
}

nx.ui.showQuestModeView = function(){
  debugger; //removable?
  // nx.ui.movieModeView.hide();
  // nx.ui.gameModeView.hide();
  // nx.ui.bookModeView.hide();
  // nx.ui.appModeView.hide();
  // nx.ui.idxView.hide();
  // nx.ui.heroView.hide();
  // nx.ui.activeView.slideUp(3000);
  // nx.ui.questView.show(2000);
  nx.ui.activeView.hide(1000);
  nx.ui.questView.show(3000);

  //set-selector-and-active-view-.
  nx.ui.btnSelector = $('.btnSelector')
  nx.ui.btnSelector.removeClass('btnSelector');
  nx.ui.btnSelector = nx.ui.lowNavBtn3;
  nx.ui.btnSelector.addClass('btnSelector')
  nx.ui.activeView = nx.ui.questView;

debugger;
  var currMaxPct = nx.ui.viewRow3.css('max-height');
  var currMax = parseFloat(currMaxPct.substr(0,currMaxPct.indexOf('%')));
  var tgtMax = 80;
  // //ANM-MIN-TO-MAX
  $({'minMax':currMax}).animate({'minMax':tgtMax},{queue:false,duration:3000,easing:'swing',
    step: function(now) { 
        nx.ui.viewRow3.css({'max-height':this.minMax+'%'});

        console.log('TEST7 rerender');
        if(nx.engine){ nx.engine.resize(); }

      }, complete:function(){

        // nx.ui.viewRow3.css({'flex':'4 0 0'});
        // nx.ui.viewRow2.css({'flex':'1 0 0'});

        if(nx.engine){    nx.engine.resize(); }
  }});
  nx.ui.isTXTViewMinimized=0;
  nx.ui.viewRow3.css({'flex':'4 0 0'});
  nx.ui.viewRow2.css({'flex':'1 0 0'});

  // nx.ui.viewRow3.css({'max-height':'80%'}); //tall
  // nx.ui.viewRow3.css({'flex':'4 0 0'});
  // nx.ui.viewRow2.css({'flex':1});
  nx.ui.zoomBtn1.hide();
  nx.ui.zoomBtn2.hide();
  // nx.ui.playBtn1.hide();
  nx.ui.pauseBtn2.hide();
  nx.ui.trickBtn1.hide();
  nx.ui.jumpBtn1.hide();
  
  // nx.ui.initScrollTxtHeight();  //todo this needs to be specific to each view-.
  
  nx.ui.minMaxBtn1.hide();
  nx.ui.minMaxBtn2.show(1000); //showMin
  
  if(nx.engine){ nx.engine.resize(); }

}


//*****************************************************************************END-MODE-BTN-HANDLERS-.

//*******************************************************CANVAS MSG
// nx.ui.flashCanvasToggle = 0;
// nx.ui.flashCanvasConfig = [];
// nx.ui.anmMSGTXT = null;
// nx.ui.flashMSGPlaying = 0;
// nx.ui.flashMSGQueue = [];

//todo rename to txtFactory, and do USAGE:
nx.ui.flashCanvasMSG = function(config){ //USAGE: {txt:'',btn,fn,txtfh,}
  // console.log('FLASHSTART',config.txt)
  // if(nx.cinemaStop){ nx.ui.flashMSGPlaying = 0; nx.ui.flashMSGQueue = []; return; } //pause functionality-.
  if(nx.cinemaStop){ nx.ui.stopFlashMSG(); return; } //pause functionality-.
  //METHODOLOGY: object-config-defaults-pattern-.
  var txtIcon=(config && config.txtIcon)?config.txtIcon:null;
  var txtAlign=(config && config.txtAlign)?config.txtAlign:'left'; //center, right-.
  var txtClass=(config && config.txtClass)?config.txtClass:'hero10'; //narrator color
  var txtType=(config && config.txtType)?config.txtType:0;
  // var txtLong = (config & config.txtLong)?'.txtLong':'';
  var txtName = '', txtNameColor='#e69be8';
  var iconBorder = '';
  var heroLogo=``; 
  var stateIcon='';
  var lblLft='0.5em', lblBtm='-1.5em', lblRgt='0.5em'; //used to align the hero name under the logo
  // debugger;
  if(txtIcon){
    //TODO: anyway to combine all this into a metaHero lookup object? the png path is being reused.
    if(txtIcon==='orby'){
      txtName='Orby';
      iconBorder = '2px solid purple';
      src = './copyrightnetcinematics/img/orby1.png'; 
      heroLogo = `<img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;align-self:center;cursor:pointer;border:${iconBorder};"
      src="${src}" alt="logo" aria-label="logo">`
      if(config && !config.txtClass){ txtClass = 'hero9'; }
    }else if(txtIcon==='zapbot'){
      txtName='ZapBot';
      lblLft = '1.2em'; 
      iconBorder = '2px solid black';
      src = './copyrightnetcinematics/img/zapbot2.png'; 
      heroLogo = `<img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;
        align-self:center;cursor:pointer;border:${iconBorder};box-shadow: 0 0 12px darkred;"
      src="${src}" alt="logo" aria-label="logo">`
      // if(config && !config.txtClass){ txtClass = 'hero6' }
      if(config && !config.txtClass){ txtClass = 'txtBoxRedBlack' }
    }else if(txtIcon==='jaxa'){
      txtName='Jaxa';
      iconBorder = '2px solid purple';
      src = './copyrightnetcinematics/img/jaxxLogo1.png'; 
      heroLogo = `<img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;align-self:center;cursor:pointer;border:${iconBorder};"
      src="${src}" alt="logo" aria-label="logo">`
      if(config && !config.txtClass){ txtClass = 'hero8' }
    }else if(txtIcon==='darkbot'){
      txtName='DarkBot';
      lblRgt = '0.4em';lblBtm='-1.5em';
      iconBorder = '2px solid black';
      src = './copyrightnetcinematics/img/darkbot2.png'; 
      heroLogo = `<img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;
        align-self:center;cursor:pointer;border:${iconBorder};box-shadow: 0px 0 5px steelblue;"
      src="${src}" alt="logo" aria-label="logo">`
      if(config && !config.txtClass){ txtClass = 'hero4' }
    }else if(txtIcon==='dracozmo'){
      txtName='Dr.Acozmo';
      iconBorder = '2px solid #001180';
      src = './copyrightnetcinematics/img/dracozmo3.png'; 
      heroLogo = `<img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;
        align-self:center;cursor:pointer;border:${iconBorder};box-shadow: 0px 0 12px steelblue;"
      src="${src}" alt="logo" aria-label="logo">`
      if(config && !config.txtClass){ txtClass = 'hero2' }
    }else if(txtIcon==='drbecky'){
      txtName='Dr.Becky';
      txtNameColor='#e69be8';
      iconBorder = '2px solid purple';
      src = './copyrightnetcinematics/img/drbecky3.png'; 
      heroLogo = `<img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;align-self:center;cursor:pointer;border:${iconBorder};"
      src="${src}" alt="logo" aria-label="logo">`
      if(config && !config.txtClass){ txtClass = 'hero7' }
    }else if(txtIcon==='azod'){
      txtName='Azod';
      iconBorder = '2px solid purple';
      src = './copyrightnetcinematics/img/azod1.png'; 
      heroLogo = `<img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;align-self:center;cursor:pointer;border:${iconBorder};"
      src="${src}" alt="logo" aria-label="logo">`
      if(config && !config.txtClass){ txtClass = 'hero8' }
    }
  }

  // txtClass += ' talkTXT20_DB';
  txtClass += ' thinkTXT20_DB';
  // txtClass += ' bubble thought';

  if (txtType){
    txtAlign='center';
    if(txtType==='narrator'){/*no icon or img, centered*/
      txtClass='hero10';
      // src = ''; 
      // if(config && !config.txtClass){ txtClass = 'hero10'; }
    }else if(txtType==='hero'){
      stateIcon = (heroLogo)?heroLogo:'<i class="fa fa-user" style=""></i>';
      // src = './img/hero/orby1.png'; 
      // if(config && !config.txtClass){ txtClass = 'hero1'; }
    }else if(txtType==='villian'){
      stateIcon = (heroLogo)?heroLogo:'<i class="fa fa-exclamation-triangle" style=""></i>';
      // src = './img/hero/orby1.png'; 
      // if(config && !config.txtClass){ txtClass = 'hero1'; }
    }else if(txtType==='chapter'){
      txtClass='hero10';
      stateIcon = '<i class="fa fa-certificate"></i>';
      // src = './img/hero/orby1.png'; 
      // if(config && !config.txtClass){ txtClass = 'hero1'; }
    }else if(txtType==='quest'){ //todo change mission to quest
      txtClass='hero10';
      stateIcon = '<i class="fa fa-map" style=""></i>';
    }else if(txtType==='item'){ //todo change mission to quest
      txtClass='hero10';
      stateIcon = '<i class="fa fa-exclamation-circle" style=""></i>';
    }else if(txtType==='success'){ //todo change mission to quest
      txtClass='hero10';
      stateIcon = '<i class="fa fa-check-circle" style=""></i>';
      // src = './img/hero/orby1.png'; 
      // if(config && !config.txtClass){ txtClass = 'hero1'; }
    }
    // else if(txtType==='orby'){
    //   src = './img/hero/orby1.png'; 
    //   heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
    //   if(config && !config.txtClass){ txtClass = 'hero1'; }
    // }else if(txtType==='zapbot1'){
    //   src = './img/hero/zapbot2.png'; 
    //   heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
    //   if(config && !config.txtClass){ txtClass = 'hero2' }
    // }else if(txtType==='jaxa'){
    //   src = './img/hero/jaxxLogo1.png'; 
    //   heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
    //   if(config && !config.txtClass){ txtClass = 'hero3' }
    // }else if(txtType==='darkbot'){
    //   src = './img/hero/darkbot2.png'; 
    //   heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
    //   if(config && !config.txtClass){ txtClass = 'hero5' }
    // }else if(txtType==='dracozmo'){
    //   src = './copyrightnetcinematics/img/dracozmo3.png'; 
    //   heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="height:2em">`
    //   if(config && !config.txtClass){ txtClass = 'hero6' }
    // }else if(txtType==='drbecky'){
    //   src = './copyrightnetcinematics/img/drbecky3.png'; 
    //   heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
    //   if(config && !config.txtClass){ txtClass = 'hero7' }
    // }else if(txtType==='azod'){
    //   src = './copyrightnetcinematics/img/azod1.png'; 
    //   heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
    //   if(config && !config.txtClass){ txtClass = 'hero8' }
    // }


  }
  




  // if(nx.ui.canvasFooter.css('display')==='none'){ nx.ui.canvasFooter.fadeIn('fast'); } //AUTO-FADE-IN-.
  // nx.ui.canvasFooter.fadeIn('fast'); //AUTO-FADE-IN-.
  // if(nx.ui.canvasFooter.css('display')==='none'){
  //   console.log('canvasShow slow - pre fader') 
  //   nx.ui.canvasFooter.fadeIn('slow'); 
  // } //AUTO-FADE-IN-. FIX-.
  // nx.ui.canvasFooter.fadeIn('slow'); //AUTO-FADE-IN-.


  
  if(config.txt){ //DYANMIC-TXT-PATTERN:with embedded ternary operators
    var aTXTBitz =
      `<span class='frameSpan ${txtClass}' style="">
        ${(heroLogo && txtAlign==='left')?heroLogo:''}
        <span class='mainSpan' style="${(txtAlign==='center')?'display:flex;align-items:center;':''};
          ${(txtAlign==='right')?'margin-right:0em;padding-right:0em':(stateIcon)?'':(config.align==='center')?'':'margin-left:0'};justify-content:center;">
            ${(stateIcon)?stateIcon:''}<span style="${(stateIcon)?'margin-left:0.5em;':''}">${config.txt}</span></span>
        ${(heroLogo && txtAlign==='right')?heroLogo:''}
        ${(txtName && !stateIcon)?`<div class='heroName' style='position:absolute;bottom:${lblBtm};${(txtAlign==='right')?`right:${lblRgt}`:`left:${lblLft}`};
          color:${txtNameColor};font-size:0.5em;text-shadow:2px 2px 2px black,-2px 2px 2px black;font-weight:bold;'>${txtName}</div>`:''}
        </span>
        `;
    // var aTXTBitz =
    //   `<span class='frameSpan ${txtClass}' style="">
    //     ${(heroLogo && txtAlign==='left')?heroLogo:''}
    //     <span class='mainSpan' style="${(txtAlign==='hero')?'display:flex;align-items:center;':''};
    //       ${(txtAlign==='right')?'margin-right:-6em;padding-right:4em':'margin-left:-4em'};justify-content:center;">
    //         ${(heroLogo && txtAlign==='hero')?heroLogo:''} &nbsp; ${config.txt}</span>
    //     ${(heroLogo && txtAlign==='right')?heroLogo:''}
    //     ${(txtName && txtAlign!='hero')?`<div class='heroName' style='position:absolute;bottom:${lblBtm};${(txtAlign==='right')?`right:${lblRgt}`:`left:${lblLft}`};
    //       color:${txtNameColor};font-size:0.5em;text-shadow:2px 2px 2px black,-2px 2px 2px black;font-weight:bold;'>${txtName}</div>`:''}
    //     </span>
    //     `;
        // <span class='mainSpan' style="${(txtAlign==='hero')?'display: flex;align-items:center;':''};justify-content:${(txtAlign==='hero'?'center':(txtAlign==='right')?'flex-end':'flex-start')};">${(heroLogo && txtAlign==='hero')?heroLogo:''} &nbsp; ${config.txt}</span>


// var aTXTBitz = `<div class="${txtClass}" style="color:white;width:79%;max-width:599px;margin:0 auto;border:1px solid orange;line-height:1em;height:2em;display:flex;align-items:center;justify-content:center;border-radius:10px">A bunch of text so that I can test line wrap...</div>`;
// $('#canvasFooter').empty();
// $('#canvasFooter').show(1).promise().done(function(){
  // $('<div class="" style="color:white;width:79%;max-width:599px;margin:0 auto;border:1px solid orange;line-height:1em;height:2em;display:flex;align-items:center;justify-content:center;border-radius:10px">AXX bunch of text so that I can test line wrap...</div>').fadeOut(1).appendTo('#canvasFooter').fadeIn(3000)
// });

      txtNode = $(aTXTBitz);

      txtNode.config = config;
      nx.ui.flashMSGQueue.push(txtNode); //add to queue always
      if(nx.ui.flashMSGPlaying){ return; } //if playing leave in queue else play now
      // else { nx.ui.anmMSGFader(txtNode) }
      else { nx.ui.anmMSGStacker(txtNode) }

  } 
  else if(config.btns && config.btns.movieFn && config.btns.gameFn && config.btns.bookFn){
    // debugger;
    nx.movieBtn = $('<button style="color:royalblue;font-weight:bold;border:0px;text-decoration:underline;font-size:0.8em;background:black;cursor: pointer;">MOVIE</button>')
    // nx.movieBtn = $('<button style="color:royalblue;font-weight:bold;border:0px;text-decoration:underline;font-size:0.8em;background:black;cursor: pointer;">SKIP</button>')
    .on('click',function(){
        //FIX for dis persist-.
        // nx.ui.flashMSGQueue = [];
        // nx.ui.flashMSGPlaying = 0;
        nx.ui.stopFlashMSG();
        // nx.ui.canvasFooter.empty(); //FIX left over go btn-.
        nx.ui.backingSpan.empty(); //FIX left over go btn-.
        nx.ui.canvasFooter.fadeOut('fast');
        console.log('fade3');
        config.btns.movieFn(); //CALLBACK MSG INIT
      });

     nx.gameBtn = $('<button style="color:darkviolet;font-weight:bold;border:0px;text-decoration:underline;font-size:0.8em;background:black;cursor: pointer;">GAME</button>')
     // nx.gameBtn = $('<button style="color:darkviolet;font-weight:bold;border:0px;text-decoration:underline;font-size:0.8em;background:black;cursor: pointer;">PLAY</button>')
      .on('click',function(){
        //FIX for dis persist-.
        nx.ui.stopFlashMSG();
        // nx.ui.flashMSGQueue = [];
        // nx.ui.flashMSGPlaying = 0;
        nx.ui.backingSpan.empty(); //FIX left over go btn-.
        // nx.ui.canvasFooter.empty(); //FIX left over go btn-.
        nx.ui.canvasFooter.fadeOut('fast');
        config.btns.gameFn(); //CALLBACK MSG INIT
      });

     nx.bookBtn = $('<button style="color:forestgreen;font-weight:bold;border:0px;text-decoration:underline;font-size:0.8em;background:black;cursor: pointer;">BOOK</button>')
     // nx.bookBtn = $('<button style="color:forestgreen;font-weight:bold;border:0px;text-decoration:underline;font-size:0.8em;background:black;cursor: pointer;">EPIC</button>')
      .on('click',function(){
        //FIX for dis persist-.
        nx.ui.stopFlashMSG();
        // nx.ui.flashMSGQueue = [];
        // nx.ui.flashMSGPlaying = 0;
        nx.ui.backingSpan.empty(); //FIX left over go btn-.
        // nx.ui.canvasFooter.empty(); //FIX left over go btn-.
        nx.ui.canvasFooter.fadeOut('fast');
        config.btns.bookFn(); //CALLBACK MSG INIT
      });
// debugger; //''
    var aBtnTXT = $('<span><i class="fa fa-map-signs"></i><span class="mTgt" style="margin-left:0.5em"></span>, <span class="gTgt"></span>, or <span class="bTgt"></span>?</span>');
    // var aBtnTXT = $('<span><i class="fa fa-map-signs"></i><span class="gTgt"></span>, <span class="mTgt" style="margin-left:0.5em"></span>, or <span class="bTgt"></span>?</span>');

    // debugger;
    aBtnTXT.find(".mTgt").append(nx.movieBtn)
    aBtnTXT.find(".gTgt").append(nx.gameBtn)
    aBtnTXT.find(".bTgt").append(nx.bookBtn)
    
    var aTXTBitz = $(                             
      // `<span class='frameSpan ${txtClass}' style="display:flex;height:1.8em;border-radius:10px;padding:0.2em;background:black;width:80%;margin: 0 auto;">
      `<span class='frameSpan ${txtClass}' style="">
        ${(heroLogo && txtAlign==='left')?heroLogo:''}
        <span class='mainSpan' style="${(txtAlign==='hero')?'display: flex;align-items:center;':''};justify-content:center;">
        ${(heroLogo && txtAlign==='hero')?heroLogo:''} &nbsp; <span class='btnTgt'></span></span>
        ${(heroLogo && txtAlign==='right')?heroLogo:''}
       </span>
      `);


      aTXTBitz.find(".btnTgt").append(aBtnTXT);

      txtNode = $(aTXTBitz);

      txtNode.config = config;
      nx.ui.flashMSGQueue.push(txtNode); //add to queue always
      if(nx.ui.flashMSGPlaying){ return; } //if playing leave in queue else play now
      // else { nx.ui.anmMSGFader(txtNode) }
      else { nx.ui.anmMSGStacker(txtNode) }
  }
  else if (config.btn && config.btnfn ){ //TODO change .fn to .btnfn
    // nx.ui.canvasFooter.append('<button style="border-radius:13px;background:#b2bdea;box-shadow: inset -1px 0px 4px black;padding:0.4em;cursor: pointer; margin-top: -3px;">'+config.btn+'</button>').on('click',config.fn);
    // var aSpan = $('<span style="display:none">'+config.txt+'</span>')
    
    var aBtn = $(`<button style="border-radius:13px;background:#b2bdea;
      box-shadow: inset -1px 0px 4px black;padding:0.4em;cursor: pointer; margin-top: -3px;
      max-height: 3.33em; align-self: center;margin:0 auto;">${config.btn}</button>`)
    .on('click',function(){

      //FIX for weird extra GO! message hanging around-.
      nx.ui.stopFlashMSG();
      // nx.ui.flashMSGQueue = [];
      // nx.ui.flashMSGPlaying = 0;
      // nx.ui.canvasFooter.empty(); //FIX left over go btn-.
      nx.ui.backingSpan.empty(); //FIX left over go btn-.
      nx.ui.canvasFooter.fadeOut('fast');


      config.btnfn(); //CALLBACK MSG INIT //todo rename this clickFn
    });


    //set BTN-.
    aBtn.config = config;


    //set TITLE-.
    if(config.title){
      // debugger;
      var aTTLBTN = $('<span>'+config.title+'</span>'); //todo also add ICO-. to ICOTTLBTN-.
      var titleButton = aTTLBTN.add(aBtn)

      titleButton.config = config;
      nx.ui.flashMSGQueue.push(titleButton); //add to queue always
      // nx.ui.flashMSGQueue.push(aTTLBTN); //add to queue always

      if(nx.ui.flashMSGPlaying){ return; } //if playing leave in queue else play now
      // else { nx.ui.anmMSGFader(titleButton) } //play now
      else { nx.ui.anmMSGStacker(titleButton) } //play now


    } else {
      nx.ui.flashMSGQueue.push(aBtn); //add to queue always

      if(nx.ui.flashMSGPlaying){ return; } //if playing leave in queue else play now
      // else { nx.ui.anmMSGFader(aBtn) } //play now
      else { nx.ui.anmMSGStacker(aBtn) } //play now


    }

  }
} //end flash canvas msg
/*****************************************END-FLASH-CANVAS-MSG********************************/


/*****************************************ANM-MSG-FADER********************************/
// nx.ui.stackMSGQueue=[];
nx.ui.stackMSGPlaying=0;
nx.ui.firstTXT, nx.ui.secondTXT = null;
nx.ui.anmMSGStacker = function(aSpan){


    if(nx.cinemaStop){ nx.ui.stackMSGPlaying = 0; nx.ui.flashMSGQueue = []; return; } //pause functionality-.

//A - OnInit firstTXT show, if 2Que, 1sec show2.
//B - 1sec Show2, set secondTXT, hide firstBubble class. No Txtinit.
//C - OnEnd first TXT, splice, newFirstTXT, move down to firstTXT, if2Que, 1 sec show2
//D - 1sec show2, hidefirst bubble, set secondTXT 
// debugger;
    if(nx.ui.stackMSGPlaying && nx.ui.flashMSGQueue.length===2){ //Begin TXT-Stacking- for this TXT.
      // nx.ui.firstTXT = nx.ui.flashMSGQueue[0];
      // nx.ui.secondTXT = nx.ui.flashMSGQueue[1];

      //todo probably order of span array most precise.
      nx.ui.stackTXT = $('#canvasFooter > span')
      nx.ui.topTXT = nx.ui.stackTXT[0]
      nx.ui.btmTXT = nx.ui.stackTXT[1]



      setTimeout(function(){ //1sec, show2, as secondTXT
        // nx.ui.backingSpan2.fadeIn(1000)
        // nx.ui.secondTXT.attr('bottom','3.5em');//.show();
        // nx.ui.secondTXT.fadeOut(1).appendTo(nx.ui.backingSpan2).fadeIn(2000);
        if(!nx.ui.flashMSGPlaying){} //move down now. else pick up onEnd
      },3000) //delay between simultaneous TXTs

    }else{
      nx.ui.stackMSGPlaying=1;
      setTimeout(function(){ //break from animloop-.
        if(nx.ui.canvasFooter.css('display')==='none' || nx.ui.canvasFooter.css('display')==='block'){ 
          nx.ui.canvasFooter.fadeIn(1000); 
        } //AUTO-FADE-IN-. FIX-.
        aSpan.fadeOut(1).appendTo(nx.ui.backingSpan).fadeIn(2000);
      },1); //avoid a fade in flicker, by separating from animloop
      var t = 4000; //-----FADE-OUT-MECHANISM-.
      if(aSpan && aSpan.config && aSpan.config.txtInit){ aSpan.config.txtInit(); }//txtINIT: call back for sequence handling-.
      setTimeout(function(){
                       if(aSpan.config && aSpan.config.persist){return;} //PERSIST VISIBILITY-.
                        $({'alpha':1}). //------------------------------------------------------FADE OUT MSG-.
                        animate({'alpha':0},{queue:false,duration:1000,easing:'linear',
                        step: function(now) { 
                            aSpan.css('opacity',this.alpha)
                        }, complete:function(){
                              // console.log('txtSPANhide - after dur')
                              nx.ui.flashMSGPlaying=0;
                              aSpan.remove();  //remove from dom
                              nx.ui.flashMSGQueue.splice($.inArray(aSpan, nx.ui.flashMSGQueue),1);//remove from queue
                              if(nx.ui.flashMSGQueue.length){   //recurse-.
                                  console.log('spanRecurse')
                                    // nx.ui.anmMSGFader(nx.ui.flashMSGQueue[0])
                                    nx.ui.anmMSGStacker(nx.ui.flashMSGQueue[0])
                              } else {
                                console.log('canvasDONEHideFast')
                                nx.ui.canvasFooter.fadeOut('fast');
                              }
                              if(aSpan && aSpan.config && aSpan.config.txtEnd){ //txtEnd: call back for sequence handling-.
                                aSpan.config.txtEnd() 
                              }
                            // console.log('endfadein')
                            } //NEXT-SUB-SEQUENCE-. 
                        });
      },t)

    }



return;


    var t = 4000;
    if(aSpan.config && aSpan.config.dur){  t = aSpan.config.dur } //custom timing factory-.
    // console.log('MSGFader start:',aSpan.config.txt)
    nx.ui.flashMSGPlaying=1;
      setTimeout(function(){ //break from animloop-.
        // if(nx.ui.canvasFooter.css('display')==='none'){ //BUG FIX : orby sitting after boom
        if(nx.ui.canvasFooter.css('display')==='none' || nx.ui.canvasFooter.css('display')==='block'){ 
          // console.log('TXT special case, auto fade in.')
          nx.ui.canvasFooter.fadeIn(1000); 
        } //AUTO-FADE-IN-. FIX-.
        aSpan.fadeOut(1).appendTo(nx.ui.backingSpan).fadeIn(2000);
        // $('<div class="" style="color:white;width:79%;max-width:599px;margin:0 auto;border:1px solid orange;line-height:1em;height:2em;display:flex;align-items:center;justify-content:center;border-radius:10px">A bunch of text so that I can test line wrap...</div>').fadeOut(1).appendTo('#canvasFooter').fadeIn(3000)
      },1); //avoid a fade in flicker, by separating from animloop

      // if(aSpan.is('button')){
      //   nx.ui.flashMSGQueue.splice($.inArray(aSpan, nx.ui.flashMSGQueue),1);//remove from queue //HOT FIX TEST.
      //   return;
      // }//do not fade out btn

      if(aSpan && aSpan.config && aSpan.config.txtInit){ aSpan.config.txtInit(); }//txtINIT: call back for sequence handling-.
      setTimeout(function(){
                       if(aSpan.config && aSpan.config.persist){return;} //PERSIST VISIBILITY-.
                        $({'alpha':1}). //------------------------------------------------------FADE OUT MSG-.
                        animate({'alpha':0},{queue:false,duration:1000,easing:'linear',
                        step: function(now) { 
                            aSpan.css('opacity',this.alpha)
                        }, complete:function(){
                              // console.log('txtSPANhide - after dur')
                              nx.ui.flashMSGPlaying=0;
                              aSpan.remove();  //remove from dom
                              nx.ui.flashMSGQueue.splice($.inArray(aSpan, nx.ui.flashMSGQueue),1);//remove from queue
                              if(nx.ui.flashMSGQueue.length){   //recurse-.
                                  console.log('spanRecurse')
                                    // nx.ui.anmMSGFader(nx.ui.flashMSGQueue[0])
                                    nx.ui.anmMSGStacker(nx.ui.flashMSGQueue[0])
                              } else {
                                console.log('canvasDONEHideFast')
                                nx.ui.canvasFooter.fadeOut('fast');
                              }
                              if(aSpan && aSpan.config && aSpan.config.txtEnd){ //txtEnd: call back for sequence handling-.
                                aSpan.config.txtEnd() 
                              }
                            // console.log('endfadein')
                            } //NEXT-SUB-SEQUENCE-. 
                        });
      },t)
} //END - anmMSGSTACKER-.
/*****************************************END-ANM-MSG-STACKER********************************/

nx.ui.stopFlashMSG = function(){
  nx.ui.flashMSGQueue = [];
  nx.ui.flashMSGPlaying = 0;
  // nx.ui.stackMSGQueue = [];
  nx.ui.stackMSGPlaying = 0;
}


/*****************************************ANM-MSG-FADER********************************/

nx.ui.flashMSGQueue = [];
nx.ui.flashMSGPlaying = 0;
nx.ui.anmMSGFader = function(aSpan){


    // if(nx.cinemaStop){ nx.ui.flashMSGPlaying = 0; nx.ui.flashMSGQueue = []; return; } //pause functionality-.
    if(nx.cinemaStop){ nx.ui.stopFlashMSG(); return; } //pause functionality-.


    var t = 4000;
    if(aSpan.config && aSpan.config.dur){  t = aSpan.config.dur } //custom timing factory-.

    console.log('MSGFader start:',aSpan.config.txt)
    nx.ui.flashMSGPlaying=1;
    // aSpan.show("slow");
    // if(nx.ui.canvasFooter.css('display')==='none'){ 
    //   console.log('canvasShow fast initial')
    //   aSpan.hide();
    //   nx.ui.canvasFooter.append(aSpan);
    //   // nx.ui.canvasFooter.fadeIn(5000); 
    //   // nx.ui.canvasFooter.fadeIn('fast'); 
    // } //AUTO-FADE-IN-. FIX-.
    // aSpan.show(5000);
    // aSpan.show("slow");
    // aSpan.fadeIn(5000);

    // nx.ui.canvasFooter.fadeIn('fast');  //AUTO-FADE-IN-. FIX-.
    // nx.ui.anmMSGTXT = $( "#canvasFooter span" ).first(); //handle for hide-. //error can grab an already hiding span.
    // var aSpan = nx.ui.canvasFooter.append('<span style="display:none">'+config.txt+'</span>') //new txt msg-.
    // console.log('spanHIDE initial')
// debugger;
    // aSpan.hide();
    // aSpan.css('display','none')
    // aSpan.css('opacity',0)
    // nx.ui.canvasFooter.append(aSpan);
    // aSpan.css('opacity',1)
    // aSpan.fadeIn(5000)

// aSpan.fadeIn(5000)

// aSpan.fadeOut(1);
// aSpan.appendTo(nx.ui.canvasFooter);
// aSpan.fadeIn(5000);
setTimeout(function(){ //break from animloop-.

  // if(nx.ui.canvasFooter.css('display')==='none'){ //BUG FIX : orby sitting after boom
  if(nx.ui.canvasFooter.css('display')==='none' || nx.ui.canvasFooter.css('display')==='block'){ 
    nx.ui.canvasFooter.fadeIn(1000); 
  } //AUTO-FADE-IN-. FIX-.

  // aSpan.fadeOut(1).appendTo(nx.ui.canvasFooter).fadeIn(3000);
  aSpan.fadeOut(1).appendTo(nx.ui.backingSpan).fadeIn(2000);
  // $('<div class="" style="color:white;width:79%;max-width:599px;margin:0 auto;border:1px solid orange;line-height:1em;height:2em;display:flex;align-items:center;justify-content:center;border-radius:10px">A bunch of text so that I can test line wrap...</div>').fadeOut(1).appendTo('#canvasFooter').fadeIn(3000)
},1); //avoid a fade in flicker, by separating from animloop

// aSpan.fadeOut(1).appendTo('#canvasFooter').fadeIn(3000)

// aSpan.fadeOut(1).appendTo("#canvasFooter").fadeIn(5000);

    // console.log('spanSPANSHOW initial')
    // nx.ui.canvasFooter.append(aSpan) //new txt msg-.


// return;

    // if(aSpan.get(0).tagName==='button'){
    // debugger; 
    //   return;}//do not fade out btn
    if(aSpan.is('button')){
      nx.ui.flashMSGQueue.splice($.inArray(aSpan, nx.ui.flashMSGQueue),1);//remove from queue //HOT FIX TEST.

      return;

    }//do not fade out btn



      if(aSpan && aSpan.config && aSpan.config.txtInit){
        // debugger;
        //TODO make this txtStart and txtEnd
        aSpan.config.txtInit(); //txtINIT: call back for sequence handling-.
      }


    // $( "#canvasFooter span" ).last().show( 2000, function anmMSGTXT() { //complete show new txt msg-.
      setTimeout(function(){

        // aSpan.hide("slow")
        // $({o:1,w:1}).animate({o:0,w})


                      //   //todo txtInit would be nice to call back for caller packaging of init logic. like set achivements and run gui updates. loosly packaged in txt implementation-. ala carte
                      // if(aSpan.config.txtInit){ //txtEnd: call back for sequence handling-.
                      //   debugger;
                      //   aSpan.config.txtInit() 
                      // }


                       //PERSIST VISIBILITY-.
                       if(aSpan.config && aSpan.config.persist){return;}

                        // if(nx.ui.flashMSGQueue.length===1){
                        //   console.log('canvasHIDEFast on last item?')
                        //   nx.ui.canvasFooter.fadeOut('fast');
                        // }

                        $({'alpha':1}). //------------------------------------------------------FADE MSG OUT-.
                        animate({'alpha':0},{queue:false,duration:1000,easing:'linear',
                        step: function(now) { 
                            aSpan.css('opacity',this.alpha)
                        }, complete:function(){

                              console.log('txtSPANhide - after dur')
                              nx.ui.flashMSGPlaying=0;
                              aSpan.remove();  //remove from dom


                              // debugger;
                              // nx.ui.flashMSGQueue.push(aSpan);
                              nx.ui.flashMSGQueue.splice($.inArray(aSpan, nx.ui.flashMSGQueue),1);//remove from queue


                              if(nx.ui.flashMSGQueue.length){
                                  // debugger;
                                  //recurse-.
                                  console.log('spanRecurse')
                                    nx.ui.anmMSGFader(nx.ui.flashMSGQueue[0])
                              } else {
                                console.log('canvasDONEHideFast')
                                // console.log('hidefaster?')
                                nx.ui.canvasFooter.fadeOut('fast');
                                // nx.ui.canvasFooter.fadeOut('slow');
                              }


//TODO rename txtEndFn
                              if(aSpan && aSpan.config && aSpan.config.txtEnd){ //txtEnd: call back for sequence handling-.
                                aSpan.config.txtEnd() 
                              }

                          // debugger
                            // console.log('endfadein')
                            } //NEXT-SUB-SEQUENCE-. 
                        });
             



      },t)
} //END - anmMSGFader-.
/*****************************************END-ANM-MSG-FADER********************************/


//JERKY QUEUE STACK
// <footer id="canvasFooter" style="z-index: 100;font-family: verdana;height: 6em;position: absolute;bottom: 0em;width: 100%;/* align-content: center; */display: flex;/* flex-direction: column; *//* justify-content: end; */align-items: flex-end;flex-wrap: wrap;max-width: 620px;/* margin: 0 auto; */align-self: center;">
//           <span id="backingSpan2" style="/* position:relative; */display:flex;height: 2.4em;border-radius:12px;background:black;width: 100%;max-width:612px;/* margin:0 auto; */border: 1px solid steelblue;margin-bottom: 0.5em;"><span class="frameSpan hero4 thinkTXT20_DB" style="">
        
//         <span class="mainSpan" style=";
//           margin-right:0em;padding-right:0em;justify-content:center;">
//             <span style="">Little~Bot2</span></span>
//         <img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;
//         align-self:center;cursor:pointer;border:2px solid black;box-shadow: 0px 0 5px steelblue;" src="./copyrightnetcinematics/img/darkbot2.png" alt="logo" aria-label="logo">
//         <div class="heroName" style="position:absolute;bottom:-1.5em;right:0.4em;
//           color:#e69be8;font-size:0.5em;text-shadow:2px 2px 2px black,-2px 2px 2px black;font-weight:bold;">DarkBot2</div>
//         </span></span>
//             <span id="backingSpan" style="position: relative; display: flex; height: 2.4em; border-radius: 12px; background: black; width: 100%; max-width: 612px; border: 1px solid steelblue; align-self: end;"><span class="frameSpan hero4 thinkTXT20_DB" style="">
        
//         <span class="mainSpan" style=";
//           margin-right:0em;padding-right:0em;justify-content:center;">
//             <span style="">Little~Bot, so far from home.</span></span>
//         <img class="heroBubbleLogo" style="height:2.2em;width:2.2em;display:flex;
//         align-self:center;cursor:pointer;border:2px solid black;box-shadow: 0px 0 5px steelblue;" src="./copyrightnetcinematics/img/darkbot2.png" alt="logo" aria-label="logo">
//         <div class="heroName" style="position:absolute;bottom:-1.5em;right:0.4em;
//           color:#e69be8;font-size:0.5em;text-shadow:2px 2px 2px black,-2px 2px 2px black;font-weight:bold;">DarkBot</div>
//         </span></span>
          
//           </footer>


// nx.ui.initFlashCanvas = function(){
//   debugger; //deprecated?
//   // $( "#canvasFooter span" ).hide();
//   var aSpan = $( "#canvasFooter span" );
//   // nx.ui.flashCanvasConfig.push(nx.ui.anmMSGTXT)
//   // nx.ui.flashCanvasToggle = 1;


//   $({'alpha':1,fs:12}). //------------------------------------------------------ANM: ORBYPOS-.
//   animate({'alpha':0,w:0},{queue:false,duration:2000,easing:'swing',step: function(now) { 
//       aSpan.css('opacity',this.alpha)
//   }, complete:function(){
//     aSpan.remove();
//       } //NEXT-SUB-SEQUENCE-. 
//   });


//   // nx.ui.anmMSGTXT.hide(5000,function(){ 
//   //   nx.ui.anmMSGTXT.remove(); 
//   //   nx.ui.flashCanvasToggle = 0;
//   //   // nx.ui.anmMSGTXT = nx.ui.flashCanvasConfig.shift(); //remove fifo
//   //   // nx.ui.flashCanvasMSG(nx.ui.flashCanvasConfig.shift() ) //remove fifo //RECURSIVE-STAGGERED-ANIMATION-.
//   // });

// }
//*******************************************************CANVAS MSG - END
//*******************************************************INIT - VIEW

nx.ui.initialViewFrames = function(){
  // debugger;
    //---------------------------------------------INIT - view startup-.
    // $('#midMenuView').css('display', 'flex').hide().show();
    $('#midMenuView').show();
    $('#txtModeView').css('display', 'flex').hide();
    $('#gameModeView').css('display', 'flex').hide();
    $('#movieModeView').css('display', 'flex').hide();
    $('#bookModeView').css('display', 'flex').hide();
    // $('#bookModeView').hide();
    // $('#movieModeFrame').show();
    $('#bookBtn1').hide();
    $('#gameBtn2').hide();
    $('#movieBtn1').hide();
    nx.ui.zoomBtn1.hide();
    nx.ui.zoomBtn2.hide();
    // nx.ui.playBtn1.hide();
    nx.ui.pauseBtn2.hide();
    nx.ui.trickBtn1.hide();
    nx.ui.jumpBtn1.hide();

    nx.engine.resize();
    //---------------------------------------------INIT - view startup-.

}
nx.ui.initialViewFrames();

//*******************************************************INIT - VIEW - END


//*****************************************************************************- CLICK - HANDLERS-.

$('#renderCanvas').click(function(){ //check if cam is freecam or not if it is turn edit color else turn default border color.

  setTimeout(function(){
// debugger;
    if(nx.scene.activeCamera===nx.camz.freeCam){ //active drag camera border color
      $('#renderCanvas').css({"border-color": "orange", "border-width":"2px", "border-style":"solid"});
    //   $('canvas').css('border','1px solid orange;')
    } else { //default border color
      $('#renderCanvas').css({"border-color": "steelblue", "border-width":"1px", "border-style":"solid"});
    //   $('canvas').css('border','1px solid steelblue;')
    }
  },500)


});




if(!nx.anm){nx.anm = {}}
// nx.anm.cam = {tilt:0,pan:0,dolly:0,truck:0,pedestal:0,roll:0} //positive and negative camera movement flags-.

nx.anm.camAnimating = 0; //todo MOVE INTO CAMZ COMPONENT.

nx.ui.playAllBtn1.click(function(){

  
  nx.ui.playModeSelector = $('.playModeSelector'); //remove all selectors-.
  nx.ui.playModeSelector.removeClass('playModeSelector');
  nx.ui.playAllBtn1.addClass('playModeSelector');
  
  setTimeout(function(){ nx.ui.toggleMinMax(0);/*minimize TXTView-.*/},1000); //delay to show selection before minimize-.
  
  (!nx.cinemaPlayAll)?nx.cinemaPlayAll=1:nx.cinemaPlayAll=0; console.log('PlayAll',nx.cinemaPlayAll);
  
  //todo if not currently playing, look at current and play next.
  
});
nx.ui.playOneBtn2.click(function(){
  
  
  // debugger;
  
  nx.ui.playModeSelector = $('.playModeSelector'); //remove all selectors-.
  nx.ui.playModeSelector.removeClass('playModeSelector');
  nx.ui.playOneBtn2.addClass('playModeSelector');
  
  setTimeout(function(){ nx.ui.toggleMinMax(0);/*minimize TXTView-.*/},1000); //delay to show selection before minimize-.
  
  // play next movie
  // but then stop
  // (!nx.cinemaPlayAll)?nx.cinemaPlayAll=1:nx.cinemaPlayAll=0; console.log(nx.cinemaPlayAll);
});
nx.ui.pauseBtn2.click(function(){ 
  var toggleOff = nx.ui.pauseBtn2.hasClass('playModeSelector');
  nx.ui.playModeSelector = $('.playModeSelector'); //remove all selectors-.
  nx.ui.playModeSelector.removeClass('playModeSelector');
  if(!toggleOff){ nx.ui.pauseBtn2.addClass('playModeSelector'); }
  (!nx.cinemaStop)?nx.cinemaStop=1:nx.cinemaStop=0; console.log(nx.cinemaStop); 
});


nx.ui.refreshBtn1.click(function(){ 
  location.reload(true);
});
// nx.ui.playBtn1.click(function(){(!nx.cinemaPlayAll)?nx.cinemaPlayAll=1:nx.cinemaPlayAll=0; console.log(nx.cinemaPlayAll); });
// nx.ui.pauseBtn2.click(function(){ (!nx.cinemaPause)?nx.cinemaPause=1:nx.cinemaPause=0; console.log(nx.cinemaPause); });
nx.ui.zoomBtn1.click(function(){
  // debugger;


        // if(nx.scene.activeCamera.alpha){
        //   nx.scene.activeCamera.alpha += 0.01;
        //   // nx.camz.arcCam.alpha += 0.01;
        // } else {
        //   nx.scene.activeCamera.position += 1;
        // }



    if(nx.cinematicMode){ /*nx.ui.flashCanvasMSG({txt:'Movie playing'});*/  console.log('movie playing');  return;} //ONE-TIME-SWITCH- //on MSG Movie Mode.
    if(nx.anm.camAnimating){ return;} //on double clicks.
    // if(nx.scene.activeCamera != nx.camz.arcCam){ //init arc camera if not set
      // //set camera to arcCam of not already
      // nx.camz.arcCam.setPosition(new BABYLON.Vector3(0, 50, -80)); //Positive Z-View-.
      // nx.camz.arcCam.setTarget(new BABYLON.Vector3(0,6,0));
      // nx.camz.arcCam.attachControl(nx.canvas, true);
      // nx.scene.activeCamera = nx.camz.arcCam;
      // nx.camz.arcCam.radius -= 1;
    // } 
  if(nx.scene.activeCamera.radius){
      nx.anm.camAnimating = 1;
      //----------------------------------------------------------ANMCAM-radius-.
      // var currRad = nx.camz.arcCam.radius;
      if( nx.scene.activeCamera.cameraAcceleration ){ nx.scene.activeCamera.cameraAcceleration = 1 }
      var currRad = nx.scene.activeCamera.radius;
      var tgtRad = currRad * 2;
      $({'rad':currRad}).animate({'rad':tgtRad},{queue:false,duration:500,easing:'swing',
      step: function(now) { 
          // nx.camz.arcCam.radius = this.rad;
          nx.scene.activeCamera.radius = this.rad;
      }, complete:function(){
          nx.anm.camAnimating = 0;
          if( nx.scene.activeCamera.cameraAcceleration ){ nx.scene.activeCamera.cameraAcceleration = 0.007 }
      } //NEXT-SUB-SEQUENCE-. 
      });
    } else {
      
      nx.scene.activeCamera.position.y += 10;
    }





});





nx.ui.zoomBtn2.click(function(){
  // debugger;
    if(nx.cinematicMode){ /*nx.ui.flashCanvasMSG({txt:'Movie playing'});*/ console.log('movie playing');  return;} //ON movie.
    if(nx.anm.camAnimating){ return;} //ON double click.
    // if(nx.scene.activeCamera != nx.camz.arcCam){ //init arc camera if not set
      // //set camera to arcCam of not already
      // nx.camz.arcCam.setPosition(new BABYLON.Vector3(0, 50, -80)); //Positive Z-View-.
      // nx.camz.arcCam.setTarget(new BABYLON.Vector3(0,6,0));
      // nx.camz.arcCam.attachControl(nx.canvas, true);
      // nx.scene.activeCamera = nx.camz.arcCam;
      // nx.camz.arcCam.radius -= 1;
    // } 
    nx.anm.camAnimating = 1;
    //----------------------------------------------------------ANMCAM-radius-.
  if(nx.scene.activeCamera.radius){
      // var currRad = nx.camz.arcCam.radius;
      var currRad = nx.scene.activeCamera.radius;
      var tgtRad = currRad / 2;
      if( nx.scene.activeCamera.cameraAcceleration ){ nx.scene.activeCamera.cameraAcceleration = 1 }
      $({'rad':currRad}).animate({'rad':tgtRad},{queue:false,duration:500,easing:'swing',
      step: function(now) { 
          nx.scene.activeCamera.radius = this.rad;
          // nx.camz.arcCam.radius = this.rad;
      }, complete:function(){
          nx.anm.camAnimating = 0;
          if( nx.scene.activeCamera.cameraAcceleration ){ nx.scene.activeCamera.cameraAcceleration = 0.007 }
      } //NEXT-SUB-SEQUENCE-. 
      });
  }
});


/*********************************************-TRICK-AND-JUMP-*********************************************/
nx.ui.trickBtn1.click(function(){
    nx.anmz.orby.trickAction(0);
});
nx.ui.jumpBtn1.click(function(){
    nx.anmz.orby.jumpAction();
});


/********************************************* - CAMZ - **************************************************/

$('#renderCanvas').click(function(){
    // debugger;
    if(nx.scene.activeCamera===nx.camz.freeCam){return;}
    nx.initFreeCam();
});

/******************************************DRAG-CTRLS********************************************************/
nx.ui.initDragCtrls = function(){
      
    if(interact){
    interact('.draggable') // -------------------------------------LFTCTRL-.
      .draggable({
        inertia: false,
        modifiers: [
          interact.modifiers.restrict({
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          }),
        ],
        autoScroll: false,
        onmove: dragMoveListener,
        onend: function (event) {
          // var textEl = event.target.querySelector('p');

          // textEl && (textEl.textContent = Math.trunc(event.pageX) + '  ' +Math.trunc(event.pageY) )
            // 'd '     
            // + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            //              Math.pow(event.pageY - event.y0, 2) | 0))
            //     .toFixed(2) + 'px ')
          var target = event.target;
          target.style.webkitTransform =
          target.style.transform =
            'translate(' + -7 + 'px, ' + -7 + 'px)';
          // update the posiion attributes
          target.setAttribute('data-x', -7);
          target.setAttribute('data-y', -7);

          onDragStop();
        }
      });

    interact('.draggableCam') // ------------------------------------RGTCTRL-.
      .draggable({
        inertia: false,
        modifiers: [
          interact.modifiers.restrict({
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          }),
        ],
        autoScroll: false,
        onmove: dragCamListener,
        onend: function (event) {
          var target = event.target;
          target.style.webkitTransform =
          target.style.transform =
            'translate(' + -7 + 'px, ' + -7 + 'px)';
          target.setAttribute('data-x', -7);
          target.setAttribute('data-y', -7);

          // onDragStop();
        }
      });

    }//end interact

}
nx.ui.initDragCtrls();



//TODO this might be helpful
// document.addEventListener('touchmove', function() { e.preventDefault(); }, { passive:false });
  // // On mobile this prevents the default page scrolling while dragging an item.
  //   $(document).on('touchstart', function(e) {
  //       e.preventDefault();
  //   });

  nx.ui.dragCamReducer = 0;

  function dragCamListener (event) {                                  //CAM RGT DRAG

    // nx.ui.dragCamReducer ++; if(nx.ui.dragCamReducer%2 ||  nx.ui.dragCamReducer%5){return;} //drag reducer-. if even or 5 jet.



        var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy; //TODO: no vars here or below-.

        // console.log(x + 'px, ' + y + 'px')

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    if(x<-10){//looklft

          // console.log('lft');
          // var curPan = nx.camz.arcCam.alpha; //RotationCam
          // var tgtPan = nx.camz.arcCam.alpha + 0.03;
              // nx.camz.arcCam.alpha = this.pan;
              // nx.anm.camAnimating = 0;
      if(!nx.anmz.lookLftAnm){
          nx.anmz.lookLftAnm = 1; //ONE-TIME-.




          if(nx.scene.activeCamera.name === 'freeCam1'){ //freecam


            var curPan = nx.scene.activeCamera.rotation.y; //face cam and follow cam;
            var panAmt =  0.3;
            var tgtPan = curPan - panAmt;
            // if( tgtPan < 0) { curPan = 360; tgtPan = curPan - panAmt} //loop-around-.
            //----------------------------------------------------------ANMCAM-pan-.
            $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:400,easing:'swing',
            step: function(now) { 
                // nx.scene.activeCamera.rotationOffset = this.pan;
                nx.scene.activeCamera.rotation.y = this.pan;
            }, complete:function(){
                nx.anmz.lookLftAnm = 0; //ONE-TIME-.
            } //NEXT-ANM-. 
            });    


          } else { //follow cam and face cam



            var curPan = nx.scene.activeCamera.rotationOffset; //face cam and follow cam;
            var panAmt =  30;
            var tgtPan = curPan + panAmt;
            if( tgtPan > 360) { curPan = 0; tgtPan = panAmt}
            //----------------------------------------------------------ANMCAM-pan-.
            $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:300,easing:'swing',
            step: function(now) { 
                nx.scene.activeCamera.rotationOffset = this.pan;
            }, complete:function(){
                nx.anmz.lookLftAnm = 0; //ONE-TIME-.
            } //NEXT-ANM-. 
            });  


          }        
      }

        // if(nx.anm.camAnimating){return;}
        // nx.anm.camAnimating = 1;
        // //----------------------------------------------------------ANMCAM-pan-.
        // var curPan = nx.camz.arcCam.alpha;
        // var tgtPan = nx.camz.arcCam.alpha + 0.03;
        // $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:500,easing:'swing',
        // step: function(now) { 
        //     nx.camz.arcCam.alpha = this.pan;
        // }, complete:function(){
        //     nx.anm.camAnimating = 0;
        // } //NEXT-SUB-SEQUENCE-. 
        // });

//         // nx.anm.cam.tilt= 0;
//         // nx.anm.cam.pan = -1;

//         //TODO: need to switch-cam-.

//         // debugger;
//         if(nx.scene.activeCamera.alpha){
//           console.log('has alpha!!!')
//           nx.scene.activeCamera.alpha += 0.01;
//           // nx.camz.arcCam.alpha += 0.01;
//         // } else if (nx.scene.activeCamera.heightOffset) {
//         } else if (nx.scene.activeCamera.rotationOffset) {
// // debugger;
//            // nx.camz.followCam.heightOffset = 30; //distance above-.
//           // nx.camz.followCam.heightOffset = 2; //distance above-.
//           nx.scene.activeCamera.rotationOffset += 20; //rotation around origin
//           // nx.camz.followCam.rotationOffset = -120; //rotation around origin
//             // nx.scene.activeCamera.position.y += 10;
//         }

    // } if(x>10){//lookrgt
    }else if(x>10){//lookrgt
console.log('rgt')

      if(!nx.anmz.lookRgtAnm){
          nx.anmz.lookRgtAnm = 1; //ONE-TIME-.
          if(nx.scene.activeCamera.name === 'freeCam1'){ //freecam TODO: remove vars-.
            var curPan = nx.scene.activeCamera.rotation.y; //face cam and follow cam;
            var panAmt =  0.2;
            var tgtPan = curPan + panAmt;
            // if( tgtPan < 0) { curPan = 360; tgtPan = curPan - panAmt} //loop-around-.
            //----------------------------------------------------------ANMCAM-pan-.
            $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:400,easing:'linear',
            step: function(now) { 
                // nx.scene.activeCamera.rotationOffset = this.pan;
                nx.scene.activeCamera.rotation.y = this.pan;
            }, complete:function(){
                nx.anmz.lookRgtAnm = 0; //ONE-TIME-.
            } //NEXT-ANM-. 
            });    
          } else { //follow cam and face cam
            var curPan = nx.scene.activeCamera.rotationOffset; //face cam and follow cam;
            var panAmt =  30;
            var tgtPan = curPan - panAmt;
            if( tgtPan < 0) { curPan = 360; tgtPan = curPan - panAmt} //loop-around-.
            //----------------------------------------------------------ANMCAM-pan-.
            $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:300,easing:'swing',
            step: function(now) { 
                nx.scene.activeCamera.rotationOffset = this.pan;
            }, complete:function(){
                nx.anmz.lookRgtAnm = 0; //ONE-TIME-.
            } //NEXT-ANM-. 
            });    
          }
      }



        // if(nx.anm.camAnimating){return;}
        // nx.anm.camAnimating = 1;
        // //----------------------------------------------------------ANMCAM-pan-.
        // var curPan = nx.camz.arcCam.alpha;
        // var tgtPan = nx.camz.arcCam.alpha - 0.03;
        // $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:500,easing:'swing',
        // step: function(now) { 
        //     nx.camz.arcCam.alpha = this.pan;
        // }, complete:function(){
        //     nx.anm.camAnimating = 0;
        // } //NEXT-SUB-SEQUENCE-. 
        // });

        // // nx.anm.cam.tilt= 0;
        // // nx.anm.cam.pan = 1;

        // if(nx.scene.activeCamera.alpha){
        //   nx.scene.activeCamera.alpha += 0.01;
        //   // nx.camz.arcCam.alpha += 0.01;
        // } else if (nx.scene.activeCamera.rotationOffset) {

        //    // nx.camz.followCam.heightOffset = 30; //distance above-.
        //   // nx.camz.followCam.heightOffset = 2; //distance above-.
        //   nx.scene.activeCamera.rotationOffset -= 20; //rotation around origin
        //   // nx.camz.followCam.rotationOffset = -120; //rotation around origin
        //     // nx.scene.activeCamera.position.y += 10;
        // }
        // // nx.camz.arcCam.alpha -= 0.01;
    }
    if(y>10){ //lookdown
    // else if(y>10){ //lookdown

        console.log('look dwn')

       if(!nx.anmz.lookDwnAnm){
            nx.anmz.lookDwnAnm = 1; //ONE-TIME-.
            if(nx.scene.activeCamera.name === 'freeCam1'){ //freecam TODO: remove vars-.
                var curPan = nx.scene.activeCamera.rotation.x; //face cam and follow cam;
                var panAmt =  0.25;
                var tgtPan = curPan + panAmt;
                //----------------------------------------------------------ANMCAM-pan-.
                $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:400,easing:'linear',
                step: function(now) { 
                    // nx.scene.activeCamera.rotationOffset = this.pan;
                    nx.scene.activeCamera.rotation.x = this.pan;
                }, complete:function(){
                    nx.anmz.lookDwnAnm = 0; //ONE-TIME-.
                } //NEXT-ANM-. 
                });    
            } else { //follow cam and face cam
              // debugger;
                var rad = nx.scene.activeCamera.radius;
                var radAmt = 10;
                var radTgt = rad - radAmt;
                // var radTgt = rad * -0.3;
                if( radTgt < 10) { radTgt = rad - (rad * 0.1)} //loop-around-.
                var upDwn = nx.scene.activeCamera.heightOffset; //face cam and follow cam;
                // var upDwnAmt =  10;
                var upDwnTgt = rad * 0.3; //upDwn - upDwnAmt;
                // if( upDwnTgt < 1) { upDwnTgt = upDwn - (upDwn * 0.1) } //loop-around-.
                //----------------------------------------------------------ANMCAM-pan-.
                $({'upDwn':upDwn ,'rad':rad}).animate({'upDwn':upDwnTgt ,'rad':radTgt},{queue:false,duration:300,easing:'swing',
                step: function(now) { 
                    // nx.scene.activeCamera.rotationOffset = this.pan;
                    nx.scene.activeCamera.heightOffset = this.upDwn;
                    nx.scene.activeCamera.radius = this.rad;
                }, complete:function(){
                    nx.anmz.lookDwnAnm = 0; //ONE-TIME-.
                    console.log(nx.scene.activeCamera.radius,nx.scene.activeCamera.heightOffset)
                } //NEXT-ANM-. 
                });    
            }
        }



        // if(nx.anm.camAnimating){return;}
        // nx.anm.camAnimating = 1;
        // //----------------------------------------------------------ANMCAM-pan-.
        // var curPan = nx.camz.arcCam.beta;
        // var tgtPan = nx.camz.arcCam.beta + 0.03;
        // $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:500,easing:'swing',
        // step: function(now) { 
        //     nx.camz.arcCam.beta = this.pan;
        // }, complete:function(){
        //     nx.anm.camAnimating = 0;
        // } //NEXT-SUB-SEQUENCE-. 
        // });

        // // nx.anm.cam.tilt= 1;
        // // nx.anm.cam.pan = 0;

        // if(nx.scene.activeCamera.alpha){
        //   if(nx.camz.arcCam.beta + 0.1 > 1.4){return}
        //   nx.scene.activeCamera.alpha += 0.01;
        //   // nx.camz.arcCam.alpha += 0.01;
        // } else if (nx.scene.activeCamera.heightOffset) {

        //    nx.scene.activeCamera.heightOffset -= 10; //distance above-.
        //   // nx.camz.followCam.heightOffset = 2; //distance above-.
        //   // nx.camz.followCam.rotationOffset += 20; //rotation around origin
        //   // nx.camz.followCam.rotationOffset = -120; //rotation around origin
        //     // nx.scene.activeCamera.position.y += 10;
        // }
        // // nx.camz.arcCam.beta += 0.01;

    }
    // if(y<-10){ //lookup
    else if(y<-10){ //lookup

        console.log('lookup')

       if(!nx.anmz.lookUpAnm){
            nx.anmz.lookUpAnm = 1; //ONE-TIME-.
            if(nx.scene.activeCamera.name === 'freeCam1'){ //freecam TODO: remove vars-.
                var curPan = nx.scene.activeCamera.rotation.x; //face cam and follow cam;
                var panAmt =  0.25;
                var tgtPan = curPan - panAmt;
                //----------------------------------------------------------ANMCAM-pan-.
                $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:400,easing:'linear',
                step: function(now) { 
                    // nx.scene.activeCamera.rotationOffset = this.pan;
                    nx.scene.activeCamera.rotation.x = this.pan;
                }, complete:function(){
                    nx.anmz.lookUpAnm = 0; //ONE-TIME-.
                } //NEXT-ANM-. 
                });    
            } else { //follow cam and face cam
                var rad = nx.scene.activeCamera.radius;
                var radAmt = 10;
                // var radTgt = rad * 0.3;
                var radTgt = rad + radAmt;
                // if( radTgt < 1) { radTgt = rad + (rad * 0.1)} //loop-around-.
                var upDwn = nx.scene.activeCamera.heightOffset; //face cam and follow cam;
                // var upDwnAmt =  10;
                var upDwnTgt = rad * 0.3;//upDwn + upDwnAmt;
                // if( upDwnTgt < 1) { upDwnTgt = upDwn - (upDwn * 0.1) } //loop-around-.
                //----------------------------------------------------------ANMCAM-pan-.
                $({'upDwn':upDwn ,'rad':rad}).animate({'upDwn':upDwnTgt ,'rad':radTgt},{queue:false,duration:300,easing:'swing',
                step: function(now) { 
                    // nx.scene.activeCamera.rotationOffset = this.pan;
                    nx.scene.activeCamera.heightOffset = this.upDwn;
                    nx.scene.activeCamera.radius = this.rad;
                }, complete:function(){
                    nx.anmz.lookUpAnm = 0; //ONE-TIME-.
                    console.log(nx.scene.activeCamera.radius,nx.scene.activeCamera.heightOffset)
                } //NEXT-ANM-. 
                });     
            }
        }



        // if(nx.anm.camAnimating){return;}
        // nx.anm.camAnimating = 1;
        // //----------------------------------------------------------ANMCAM-pan-.
        // var curPan = nx.camz.arcCam.beta;
        // var tgtPan = nx.camz.arcCam.beta - 0.03;
        // $({'pan':curPan}).animate({'pan':tgtPan},{queue:false,duration:500,easing:'swing',
        // step: function(now) { 
        //     nx.camz.arcCam.beta = this.pan;
        // }, complete:function(){
        //     nx.anm.camAnimating = 0;
        // } //NEXT-SUB-SEQUENCE-. 
        // });

        // // nx.anm.cam.tilt= -1;
        // // nx.anm.cam.pan = 0;
        // if(nx.scene.activeCamera.alpha){
        //   if(nx.camz.arcCam.beta- 0.1 < 0){return}
        //   nx.scene.activeCamera.alpha += 0.01;
        //   // nx.camz.arcCam.alpha += 0.01;
        // }else if (nx.scene.activeCamera.heightOffset) {

        //    nx.scene.activeCamera.heightOffset += 10; //distance above-.
        //   // nx.camz.followCam.heightOffset = 2; //distance above-.
        //   // nx.camz.followCam.rotationOffset += 20; //rotation around origin
        //   // nx.camz.followCam.rotationOffset = -120; //rotation around origin
        //     // nx.scene.activeCamera.position.y += 10;
        // }
        // // nx.camz.arcCam.beta -= 0.01;


    } 
    // else {

    //     // nx.anm.cam.tilt= 0;
    //     // nx.anm.cam.pan = 0;
    // }



    //ANMCAM - tilt and pan-.                //todo stop this renderer
    // nx.scene.registerBeforeRender(function(){
    //     if(nx.anm.cam.tilt > 0){
    //       nx.camz.arcCam.beta += 0.0001;
    //     } else if (nx.anm.cam.tilt < 0){
    //       nx.camz.arcCam.beta -= 0.0001;

    //     }else{

    //     }
    //     if(nx.anm.cam.pan  > 0){
    //       nx.camz.arcCam.alpha -= 0.0001;
    //     } else if (nx.anm.cam.pan < 0){
    //       nx.camz.arcCam.alpha += 0.0001;

    //     }else{

    //     }
    //     if(nx.zoneAlarmsOn>0){zoneAlarm();}else if(!nx.zoneAlarmsOn){ nx.scene.unregisterBeforeRender(zoneAlarmLoop); } 
    // })



  }

  // nx.anm.dragCamPrecision = 0;
  // function initDragCamPrecision (){
  //     if(nx.dragCamPrecision>0){dragCamPrecision();}else if(!nx.zoneAlarmsOn){ nx.scene.unregisterBeforeRender(zoneAlarmLoop); } 
  //     nx.scene.registerBeforeRender(function(){
  //           if(nx.anm.cam.tilt > 0){
  //             nx.camz.arcCam.beta += 0.0001;
  //           } else if (nx.anm.cam.tilt < 0){
  //             nx.camz.arcCam.beta -= 0.0001;

  //           }else{

  //           }
  //           if(nx.anm.cam.pan  > 0){
  //             nx.camz.arcCam.alpha -= 0.0001;
  //           } else if (nx.anm.cam.pan < 0){
  //             nx.camz.arcCam.alpha += 0.0001;

  //           }else{

  //           }
  //       })
  // }


  //todo move up.
  // nx.ui.dragMoveReducer = 0;

  function dragMoveListener (event) {


    nx.ui.dragCamReducer ++; if(nx.ui.dragCamReducer%2 || nx.ui.dragCamReducer%3 || nx.ui.dragCamReducer%5){return;} //drag reducer-. if even jet.



    //TODO OPTIMIZATION - no vars here!
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // console.log(x + 'px, ' + y + 'px')

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // console.log('x: '+x)

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);


    //CALCULATE DRAG Move PERCENTAGES.
                var xMax = 100;//38;  // this number determines the width to be divided into the xCenter, to turn left or right
                var xMin = -10;   //XMAX is right.
                var yMax = 0;//38;
                var yMin = -10;    //YMAX is bottom.

                var xCenter = xMax/2;
                var yCenter = 600;//30; // enables forward
                var xSpan = xMax/2;
                var ySpanT = yCenter - yMin;
                var ySpanB = yMax - yCenter;


                    // var dragPos = $(this).position();
                    var dragPos = $(target).position();
                        var xDrag = dragPos.left; 
                        var yDrag = dragPos.top; 
                        var leftPct, rightPct;
                        var fwdPct, bwdPct;
                        var leftMove = xCenter - xDrag;
                        var rightMove = xDrag - xCenter;
                        var fwdMove = yCenter - yDrag;
                        var bwdMove = yDrag - yCenter;
                        var dragStopper = 3;

                        if(yDrag < yCenter){ //fwd
                          // console.log('fwd')
                            fwdPct = fwdMove/ySpanT;
// nx.ui.showUserMSG('fwd');
                            nx.anmz.orby.move.fwd = 1;
                            nx.anmz.orby.move.bwd = 0;
                            // nymscape.surfBoardMesh.rotation.x = 0; //tipflat
                            // console.log('fwd '+ fwdPct)
                        } else if (yDrag >= yCenter) {            //bwd
                          // console.log('bwd')
// nx.ui.showUserMSG('bwd');
                            bwdPct = bwdMove/ySpanB;
                            nx.anmz.orby.move.bwd = 1;
                            nx.anmz.orby.move.fwd = 0;
                            // nymscape.surfBoardMesh.rotation.x = -0.2; //tipback
                            // console.log('bwd '+bwdPct)
                        }
                        if(xDrag < xCenter && xDrag < xCenter - dragStopper ){                       //lft
// nx.ui.showUserMSG('lft');
                          // console.log('lft')
                            // nymscape.surfBoardMesh.rotation.z = 0.2;  //tip left
                            rightPct = rightMove/xSpan;
                            nx.anmz.orby.move.lft = 1;
                            nx.anmz.orby.move.rgt = 0;
                            // console.log('lft ' + leftPct)
                        } else if (xDrag >= xCenter && xDrag > xCenter + dragStopper ) {           //rgt
                          // console.log('rgt')
// nx.ui.showUserMSG('rgt');
                            leftPct = leftMove/xSpan;
                            nx.anmz.orby.move.rgt = 1;
                            nx.anmz.orby.move.lft = 0;
                            // nymscape.surfBoardMesh.rotation.z = -0.2; //tip right
                            // console.log('rgt ' + rightPct)
                        } else {
                          // console.log('stop')
                            onDragStop();
                            if (yDrag < yCenter){
                                nx.anmz.orby.move.fwd = 1;
                            }
                        }

            // anmCamPan()


        }

    nx.anm.camPanning = 0;
    function anmCamPan (){
      if(nx.anm.camPanning){ return; } //one-time-switch-.
      if(!nx.anm.camPanning){ nx.anm.camPanning
      }
        //switch to cam     
        if(nx.scene.activeCamera != nx.camz.freeCam){ //set free camera if not set
          console.log('init free cam...')
          //FREE-CAMERA-.
          nx.camz.freeCam.position.x = nx.scene.activeCamera.position.x;
          nx.camz.freeCam.position.y = nx.scene.activeCamera.position.y;
          nx.camz.freeCam.position.z = nx.scene.activeCamera.position.z;
          // nx.camz.freeCam = new BABYLON.FreeCamera('freecam1', new BABYLON.Vector3(0, 10000, 0), nx.scene);
          // nx.camz.freeCam.setTarget(BABYLON.Vector3.Zero());
          // nx.camz.freeCam.setTarget( new BABYLON.Vector3(0, 100, 0)); //CAM: LOOK INTO BLACK SPACE-.
          nx.camz.freeCam.setTarget(nx.orbyMesh.position ); //CAM: LOOK INTO BLACK SPACE-.
          nx.camz.freeCam.attachControl(nx.canvas, true);
          nx.scene.activeCamera = nx.camz.freeCam;
        } else { //set cam tgt on hero-.

    // nx.ui.dragMoveReducer ++; if(!nx.ui.dragMoveReducer%2){return;} //drag reducer-.
          console.log('tracking...')
          // nx.camz.freeCam.setTarget( new BABYLON.Vector3(100, 100, 100));
          nx.camz.freeCam.setTarget(nx.orbyMesh.position);

          //TODO SNAP SHOT TRACK CAM - one time trigger on drag, take current pos to tgt pos, anm cam, on finish, look for idle not idle, recurse.

          //TODO smooths out y.





    }

    //ANMCAM freecam track hero                                //todo stop this renderer
    // nx.scene.registerBeforeRender(function(){

    //   if(!nx.anmz.orby.idle){ // if orby is not idle-.
    //     console.log('not idle...')
    //     //switch to cam     
    //     if(nx.scene.activeCamera != nx.camz.freeCam){ //set free camera if not set
    //       console.log('init free cam...')
    //       //FREE-CAMERA-.
    //       nx.camz.freeCam.position.x = nx.scene.activeCamera.position.x;
    //       nx.camz.freeCam.position.y = nx.scene.activeCamera.position.y;
    //       nx.camz.freeCam.position.z = nx.scene.activeCamera.position.z;
    //       // nx.camz.freeCam = new BABYLON.FreeCamera('freecam1', new BABYLON.Vector3(0, 10000, 0), nx.scene);
    //       // nx.camz.freeCam.setTarget(BABYLON.Vector3.Zero());
    //       // nx.camz.freeCam.setTarget( new BABYLON.Vector3(0, 100, 0)); //CAM: LOOK INTO BLACK SPACE-.
    //       nx.camz.freeCam.setTarget(nx.orbyMesh.position ); //CAM: LOOK INTO BLACK SPACE-.
    //       nx.camz.freeCam.attachControl(nx.canvas, true);
    //       nx.scene.activeCamera = nx.camz.freeCam;
    //     } else { //set cam tgt on hero-.

    //       console.log('tracking...')
    //       // nx.camz.freeCam.setTarget( new BABYLON.Vector3(100, 100, 100));
    //       nx.camz.freeCam.setTarget(nx.orbyMesh.position);

    //     }
    //   // }
    //   // else {
    //     // console.log('idle')
    //   // }
      


    // })





  }

  // this is used later in the resizing and gesture demos
  // window.dragMoveListener = dragMoveListener;

                function onDragStop(e){
                    //set movement flags to 0.
                            nx.anmz.orby.move.fwd = 0;
                            nx.anmz.orby.move.rgt = 0;
                            nx.anmz.orby.move.lft = 0;
                            nx.anmz.orby.move.bwd = 0;
                            // nymscape.surfBoardMesh.rotation.z = 0;
                            // nymscape.surfBoardMesh.rotation.x = 0;

                }

// $('#drag-1 p img').click(function(){ console.log('lkjlkj'); } )
// $('#drag-2 p img').click(function(){ console.log('qwerewe'); } )

$('#dragLftCtrl').on('mouseover',function(){
  // console.log('hi');
  // debugger;
  // $('#userMSGCtrl1').removeClass('hideUserMSG');
  // // $('#userMSGCtrl1').css({'display':'flex'})
  // // $('#userMSGCtrl1').show()
  nx.ui.showUserMSG('Drag move: forward, left, right, slow, fast!')
})
$('#dragLftCtrl').on('mouseout',function(){
  // console.log('ho');
  // $('#userMSGCtrl1').addClass('hideUserMSG');
  // // $('#userMSGCtrl1').css({'display':'none'})
  nx.ui.showUserMSG('');
})




//*****************************************************************************END-DRAG-CTRL-HANDLERS-.
//*****************************************************************************TXT SCROLLER-HANDLERS-.
  nx.ui.verticalScrollBox = $('.verticalScrollBox'); //todo these are defined twice? remove?
  nx.ui.verticalScrollFrame = $('.verticalScrollFrame');
  nx.ui.horizontalScrollBox = $('#horizontalScrollBox');
  nx.ui.horizontalScrollFrame = $('#horizontalScrollFrame');

  nx.ui.verticalScrollBox.on('scroll',function(){
   clearTimeout($.data(this, 'vscrollend'));
    $.data(this, 'vscrollend', setTimeout(function() { //console.log("vert END");
      // nx.ui.verticalScrollBox.snap();
    }, 200));
  })

  nx.ui.horizontalScrollBox.on('scroll',function(){
   clearTimeout($.data(this, 'hscrollend'));
    $.data(this, 'hscrollend', setTimeout(function() {  //console.log("horizontal END");
      if(!nx.ui.horizontalScrollBox.auto){ 
        // nx.ui.horizontalScrollBox.snap();
      } else { nx.ui.horizontalScrollBox.auto=0; } //one-time-switch-.
    }, 200));
  })

// nx.ui.horizontalScrollBox.startLeft = 0;
nx.ui.horizontalScrollBox.auto = 0;
nx.ui.horizontalScrollBox.direction = '';
// nx.ui.horizontalScrollBox.boxOffset = 222;
// nx.ui.horizontalScrollBox.boxOffset = Math.floor($('.txtBox').width())+7;
// debugger;
nx.ui.horizontalScrollBox.boxOffset = nx.ui.verticalScrollBox.width() + 2; //5
nx.ui.horizontalScrollBox.snap = function(){ 
  debugger; //todo migrate this to flex column
  // var curLeft = nx.ui.horizontalScrollBox[0].scrollLeft; //calculate next snap
  var curLeft = nx.ui.horizontalScrollBox.scrollLeft(); //calculate next snap
  nx.ui.horizontalScrollBox.numCols = nx.ui.horizontalScrollFrame.children().length;
  var idx=0, pos = 0;
  for(var i=0; i<nx.ui.horizontalScrollBox.numCols; i++){ //find index position-.
    var tgt = (i+1)*nx.ui.horizontalScrollBox.boxOffset;
    if(curLeft>tgt){continue;}
    else {
      if(nx.ui.horizontalScrollBox.direction==='left'){
        idx = i;
      }else{ //scrolling right-.
        idx = i+1;
      }
      break;
    }
  }
  if(idx >= nx.ui.horizontalScrollBox.numCols){
    idx = nx.ui.horizontalScrollBox.numCols-1; 
    pos = idx * nx.ui.horizontalScrollBox.colOffset + 1;
    // setTimeout(function(){nx.ui.horizontalScrollBox.scrollLeft = pos;},100); //TODO add animation-.
    setTimeout(function(){nx.ui.horizontalScrollBox.scrollLeft(pos);},100); //TODO add animation-.
  } else {
    nx.ui.horizontalScrollBox.scrollRow(idx);
  }
  // console.log(nx.ui.mainTxtBox.direction+' go to '+idx+' at '+pos)

}

nx.ui.horizontalScrollBox.scrollRow = function(colIdx){ //use offset and location to calculate scroll position-.
  // if(colIdx>=nx.ui.horizontalScrollBox.numCols){colIdx=nx.ui.horizontalScrollBox.numCols-1}
  var newCol = colIdx * nx.ui.horizontalScrollBox.boxOffset;
  // nx.ui.horizontalScrollBox.scrollLeft = newCol;
  nx.ui.horizontalScrollBox.scrollLeft(newCol);
  // nx.ui.mainTxtBox.autoMode = 1;
    nx.ui.horizontalScrollBox.showTitle(colIdx);//include title for single call-. //TODO move this up.
  // setTimeout(function(){nx.ui.mainTxtBox.autoMode = 0;},200)
}

nx.ui.horizontalScrollBox.showTitle = function(colIdx){
  if(nx.txtScript[colIdx]){ //update titles-.
    $('#heroView #viewTxtTitle1').html(nx.txtScript[colIdx].ttl);
    $('#heroView #viewTxtTitle2').html(nx.txtScript[colIdx].subttl);
  }
}

  nx.ui.txtSlide = function(dir){

         var curLeft = nx.ui.horizontalScrollBox.scrollLeft(); //calculate next snap
         var numCols = nx.ui.horizontalScrollFrame.children().length;
         nx.ui.boxOffset = nx.ui.verticalScrollBox.width()+41;//46; //46

          var idx=0, pos = 0;
          for(var i=0; i<numCols; i++){ //find index position-.
            var tgt = (i+1)*nx.ui.boxOffset;
            if(curLeft>=tgt){continue;}
            else {
              if(dir==='left'){
                idx = i-1;
              }else{ //scrolling right-.
                idx = i+1;
              }
              break;
            }
          }
          if(idx >= numCols){ //end move-.
            // idx = numCols-1; 
            // pos = idx * numCols;
            // // pos = idx * nx.ui.horizontalScrollBox.colOffset + 1;
            // // setTimeout(function(){nx.ui.horizontalScrollBox.scrollLeft = pos;},100); //TODO add animation-.
            // // setTimeout(
            // // function(){
            // nx.ui.horizontalScrollBox.scrollLeft(pos);
            // return idx;
            // },100); //TODO add animation-.
          } else {
            // nx.ui.horizontalScrollBox.scrollRow(idx);
              // if(colIdx>=nx.ui.horizontalScrollBox.numCols){colIdx=nx.ui.horizontalScrollBox.numCols-1}
              var newCol = idx * nx.ui.boxOffset;
              // nx.ui.horizontalScrollBox.scrollLeft = newCol;
              nx.ui.horizontalScrollBox.scrollLeft(newCol);
              // nx.ui.mainTxtBox.autoMode = 1;
              // nx.ui.horizontalScrollBox.showTitle(colIdx);//include title for single call-. //TODO move this up.
              // setTimeout(function(){nx.ui.mainTxtBox.autoMode = 0;},200)
          }
          return idx;
  }

//*****************************************************************************END TXT SCROLLER-HANDLERS-.
//*****************************************************************************- UI - HANDLERS -.
     
nx.ui.navMovieBtn1.on("click" , function(e){
  if(nx.ui.activeView===nx.ui.movieModeView){nx.ui.toggleMinMax((nx.ui.isTXTViewMinimized)?1:0); return;} //minimize-.
  nx.ui.showMovieModeView();
}); 
nx.ui.navGameBtn1.on("click" , function(e){ 
  if(nx.ui.activeView===nx.ui.gameModeView){nx.ui.toggleMinMax((nx.ui.isTXTViewMinimized)?1:0); return;} //minimize-.
  nx.ui.showGameModeView();
}); 
nx.ui.navBookBtn1.on("click" , function(e){

  //old - remove TODO
  if(nx.ui.activeView===nx.ui.bookModeView){nx.ui.toggleMinMax((nx.ui.isTXTViewMinimized)?1:0); return;} //minimize-.
  nx.ui.showBookModeView();
  //new
  // if(nx.ui.activeView===nx.ui.idxView){nx.ui.toggleMinMax((nx.ui.isTXTViewMinimized)?1:0); return;} //minimize-.
  // nx.ui.showIdxModeView();




  //todo make this showBookMode();
  //And then
}); 
nx.ui.navAppBtn1.on("click" , function(e){ 

  if(nx.ui.activeView===nx.ui.appModeView){nx.ui.toggleMinMax((nx.ui.isTXTViewMinimized)?1:0); return;} //minimize-.
  nx.ui.minMaxBtn1.hide();
  nx.ui.minMaxBtn2.show(1000); //showMin
  
  // debugger;
  nx.ui.showAppModeView();
}); 
nx.ui.minMaxBtn1.on("click" , function(e){ //maximizeBtn
  nx.ui.toggleMinMax(1);
  // debugger;

  // //allow previously active view to size itself-.
  // if(nx.ui.activeView===nx.ui.idxView){
  //   nx.ui.showIdxModeView();
  // }else if(nx.ui.activeView===nx.ui.heroView){
  //   nx.ui.showEpicModeView();
  // }else if(nx.ui.activeView===nx.ui.questView){
  //   nx.ui.showQuestModeView();
  // }else if(nx.ui.activeView===nx.ui.movieModeView){
  //   nx.ui.showMovieModeView();
  // }else if(nx.ui.activeView===nx.ui.gameModeView){
  //   nx.ui.showGameModeView();
  // }else if(nx.ui.activeView===nx.ui.bookModeView){
  // }else if(nx.ui.activeView===nx.ui.appModeView){
  //   nx.ui.showAppModeView();
  // }else{
  //   //todo this needs to become bookmode.
  // }

  // nx.ui.isTXTViewMinimized = 0;       //is maximized
  // nx.ui.minMaxBtn1.hide();     //hideMax
  // nx.ui.minMaxBtn2.show(1000); //showMin
  // if(nx.engine){ nx.engine.resize(); }
  
});  
nx.ui.minMaxBtn2.on("click" , function(e){ //minimizebtn
  nx.ui.toggleMinMax(0); //minimize-.
  // debugger;
  // nx.ui.isTXTViewMinimized = 1;   //is minimized-.
  // // $('#txtModeView').hide();
  // // $('#gameModeView').hide();
  // // $('#movieModeView').hide();
  // //  $('#versionTxt').hide();

  // nx.ui.btnSelector = $('.btnSelector'); //remove all selectors-.
  // nx.ui.btnSelector.removeClass('btnSelector');

  // nx.ui.movieModeView.hide();
  // nx.ui.gameModeView.hide();
  // nx.ui.bookModeView.hide();
  // nx.ui.appModeView.hide();
  // nx.ui.idxView.hide();
  // nx.ui.heroView.hide();
  // nx.ui.questView.hide();
  // nx.ui.zoomBtn1.hide();
  // nx.ui.zoomBtn2.hide();
  // // nx.ui.playBtn1.hide();
  // nx.ui.pauseBtn2.hide();



  // var currMaxPct = nx.ui.viewRow3.css('max-height');
  // var currMax = parseFloat(currMaxPct.substr(0,currMaxPct.indexOf('%')));
  // var tgtMax = 8;
  // //ANM-MIN-TO-MAX
  // $({'minMax':currMax}).animate({'minMax':tgtMax},{queue:false,duration:3000,easing:'swing',
  //   step: function(now) { 
  //       nx.ui.viewRow3.css({'max-height':this.minMax+'%'});
  //     }, complete:function(){

  //       // nx.ui.viewRow3.css({'flex':3});
  //       // nx.ui.viewRow2.css({'flex':3});

  //       if(nx.engine){    nx.engine.resize(); }
  // }});
  // // nx.ui.viewRow3.css({'max-height':'2em'}); //small


  // nx.ui.minMaxBtn1.show(1000); //showMax
  // nx.ui.minMaxBtn2.hide();
  // if(nx.engine){ nx.engine.resize(); }
}); 

nx.ui.toggleMinMax = function(maximize){ 
  if(maximize){ //-------------------------------------------------------
    //allow previously active view to size itself-.
    // if(nx.ui.activeView===nx.ui.idxView){
    //   nx.ui.showIdxModeView();
    // }else 
    // if(nx.ui.activeView===nx.ui.heroView){
    //   nx.ui.showEpicModeView();
    // }//else if(nx.ui.activeView===nx.ui.questView){
    //   nx.ui.showQuestModeView();
    // }else if(nx.ui.activeView===nx.ui.movieModeView){
    if(nx.ui.activeView===nx.ui.movieModeView){
      nx.ui.showMovieModeView();
    }else if(nx.ui.activeView===nx.ui.gameModeView){
      nx.ui.showGameModeView();
    }else if(nx.ui.activeView===nx.ui.bookModeView){
      nx.ui.showBookModeView();
    }else if(nx.ui.activeView===nx.ui.appModeView){
      nx.ui.showAppModeView();
    }else{ //todo this needs to become bookmode.
    }
    nx.ui.isTXTViewMinimized = 0;       //is maximized
    nx.ui.minMaxBtn1.hide();     //hideMax
    nx.ui.minMaxBtn2.show(1000); //showMin
    if(nx.engine){ nx.engine.resize(); }

  } else { //minimize -----------------------------------------------------
    nx.ui.isTXTViewMinimized = 1;   //is minimized-.
    // $('#txtModeView').hide();
    // $('#gameModeView').hide();
    // $('#movieModeView').hide();
    //  $('#versionTxt').hide();
  
    // nx.ui.btnSelector = $('.btnSelector'); //remove all selectors-.
    // nx.ui.btnSelector.removeClass('btnSelector');
  
    // nx.ui.movieModeView.hide();
    // nx.ui.gameModeView.hide();
    // nx.ui.bookModeView.hide();
    // nx.ui.appModeView.hide();
    // nx.ui.idxView.hide();
    // nx.ui.heroView.hide();
    // nx.ui.questView.hide();
    nx.ui.activeView.hide(1000);

    nx.ui.zoomBtn1.hide();
    nx.ui.zoomBtn2.hide();
    
    // nx.ui.playBtn1.hide();
    // nx.ui.pauseBtn2.hide();
  
  // debugger;
  
    var currMaxPct = nx.ui.viewRow3.css('max-height');
    var currMax = parseFloat(currMaxPct.substr(0,currMaxPct.indexOf('%')));
    var tgtMax = 5;//8;
    //ANM-MIN-TO-MAX-TOGGLE-.
    $({'minMax':currMax}).animate({'minMax':tgtMax},{queue:false,duration:3000,easing:'swing',
      step: function(now) { 
          nx.ui.viewRow3.css({'max-height':this.minMax+'%'});

          console.log('TEST1 rerender');
          if(nx.engine){ nx.engine.resize(); }

        }, complete:function(){
  
          nx.ui.viewRow3.css({'max-height':'2.5em'}); //small FIX
          // nx.ui.viewRow3.css('max-height');

          // nx.ui.viewRow3.css({'flex':3});
          // nx.ui.viewRow2.css({'flex':3});
  
          if(nx.engine){    nx.engine.resize(); }
    }});
  
  
    nx.ui.minMaxBtn1.show(1000); //showMax
    nx.ui.minMaxBtn2.hide();
    if(nx.engine){ nx.engine.resize(); }
  }
  // return; //deprecated
  // nx.ui.isTXTViewMinimized = !nx.ui.isTXTViewMinimized;
  //     if(nx.ui.windowWidth > 808 && nx.ui.windowHeight > 505){  //SCREEN DESKTOP calibrated 808 and 505
  //       if(nx.ui.isTXTViewMinimized){ //max
  //         nx.ui.verticalScrollBox.css({width:'23em'});
  //         nx.ui.txtSection.css({'max-width':'50%'});
  //       } else {
  //         nx.ui.verticalScrollBox.css({width:'15.5em'});
  //         nx.ui.txtSection.css({'max-width':'33%'});

  //       }
  //       nx.ui.initScrollTxtHeight();
  //       return;
  //     }
  //     //MOBILE-PORTRAIT.  
  //     // if(nx.ui.windowWidth < 505 && nx.ui.windowHeight > 505){  //MOBILE-PORTRAIT. 
  //     //   if(nx.ui.isTXTViewMinimized){ //max
  //     //     nx.ui.txtSection.css({height:'77%'});
  //     //     nx.ui.verticalScrollBox.css({width:'23em'});
  //     //     // nx.ui.txtSection.css({'max-width':'50%'});
  //     //   } else {
  //     //     nx.ui.verticalScrollBox.css({width:'15.5em'});
  //     //     // nx.ui.txtSection.css({'max-width':'33%'});
  //     //   }
  //     //   nx.ui.initScrollTxtHeight();
  //     //   return;
  //     // }
  // if(nx.ui.isTXTViewMinimized){ //max  TABLET and MOBILE
  //   if(nx.ui.windowWidth > 1000 && nx.ui.windowHeight > 1000){  //BIG- TABLET-PORTRAIT. 
  //       // nx.ui.minMaxBtnM.hide();
  //       // nx.ui.minMaxBtnD.show();
  //   }else if(nx.ui.windowWidth < 505 && nx.ui.windowHeight > 505){  //MOBILE-PORTRAIT. 
  //     nx.ui.txtSection.css({height:'83%',width:'93vw'});
  //   } else {
  //     nx.ui.txtSection.css({height:'77%'});
  //   }
  //   // nx.ui.txtSection.css({height:'75%'});
  //   nx.ui.txtViewFrame1.css({height:'90%',opacity:1});
  //   // nx.ui.txtViewFrame1.show();
  //   // nx.ui.activeView.show();
  //   nx.ui.lowNav.show();
  //   nx.ui.topNav.show();
  // // #txtViewFrame1{ display:none !important; }
  // // #lowNav {display:none !important;}
  // // #topNav {display:none !important;}

  // }else{ //min TABLET AND MOBILE*************************************************
  //   // debugger;
  //   nx.ui.txtSection.css({height:'22%'});
  //   // nx.ui.txtViewFrame1.css({height:'65%'});
  //   // nx.ui.txtViewFrame1.css({height:'100%',width:'100%',margin:0});
  //   // nx.ui.txtViewFrame1.hide();
  //   // nx.ui.activeView.hide();
  //   // nx.ui.topNav.hide();
  //   // nx.ui.lowNav.hide();
  // }
  // // nx.ui.initScrollTxtHeight();
  // nx.ui.activeView.show();
}



  //INIT-VIEW:mobile only;
  // if(nx.ui.windowWidth < 808 || nx.ui.windowHeight < 505){ //MOBILE non desktop
  //   debugger;
  //   nx.ui.toggleMinMax();
  // }else{
  //    // nx.ui.initScrollTxtHeight();
  // }  //SCREEN DESKTOP calibrated 808 and 505) //init-open.

      /*******************************************************************-CLICK-HANDLERS-******************************/

  // nx.ui.isTXTViewMinimized = 0;
  nx.ui.leftTxtBtn.on("click" , function(e){  //left-BTN-CLICK-.
    var colIdx = nx.ui.txtSlide('left');
    nx.ui.horizontalScrollBox.showTitle(colIdx);
  });
  nx.ui.rightTxtBtn.on("click" , function(e){  //right-BTN-CLICK-.
    var colIdx = nx.ui.txtSlide('right');
    nx.ui.horizontalScrollBox.showTitle(colIdx);
  });
      // nx.ui.minMaxBtnD.on("click" , function(e){  //MIN-MAX-BTN-CLICK-.
  //     nx.ui.minMaxBtn.on("click" , function(e){  //MIN-MAX-BTN-CLICK-.
  //       nx.ui.toggleMinMax();

  //       if(!nx.ui.isTXTViewMinimized){ //if just closed.

  //         if(nx.ui.windowWidth < 808  || nx.ui.windowHeight < 500){  //TABLET and MOBILE not DESKTOP

  //           //SHOW-CTRL-VIEW-. automatically on minimize-.
  //           // nx.ui.viewCtrl1.show(2000);
  //           nx.ui.viewCtrl1.fadeIn(1000);
  //           nx.ui.activeView.fadeOut(1000);
  //           // nx.ui.activeView.slideUp(1000);
  //           nx.ui.btnSelector = $('.btnSelector'); nx.ui.btnSelector.removeClass('btnSelector'); nx.ui.btnSelector = nx.ui.viewCtrl1; nx.ui.btnSelector.addClass('btnSelector');
  //           nx.ui.lastView = nx.ui.activeView;
  //           nx.ui.activeView = nx.ui.viewCtrl1;
  //           nx.ui.initCtrlView();

  //         }
          
  //         // nx.ui.initCtrlView();
  //       } else if(nx.ui.activeView===nx.ui.viewCtrl1){ //if we maximize ctrlMODE switch back to readMODE-.
  // // debugger;
  //           if(nx.ui.lastView){ //toggle return to lastView
  //             //SHOW-LAST-VIEW-.
  //             nx.ui.lastView.show(2000);
  //             nx.ui.activeView.slideUp(1000);
  //             nx.ui.btnSelector = $('.btnSelector'); nx.ui.btnSelector.removeClass('btnSelector'); nx.ui.btnSelector = nx.ui.activeView; nx.ui.btnSelector.addClass('btnSelector');
  //             // nx.ui.lastView = nx.ui.activeView;
  //             nx.ui.activeView = nx.ui.lastView;
  //             nx.ui.lastView = null;
  //             // nx.ui.initCtrlView();
  //             //IF CLOSED, OPEN - toggleMinMax
  //             // if(!nx.ui.isTXTViewMinimized){ //max  TABLET and MOBILE
  //             //   nx.ui.toggleMinMax();
  //             // }

  //             return;
  //           }
  //       }

  //     });

      //***********************************************************************************CTRL-VIEW***************************/
      // nx.ui.lastView = null;
      // nx.ui.gearBtn.on("click" , function(e){
      //   if(nx.ui.lastView){ //toggle return to lastView

      //     nx.ui.lastView.show(2000);
      //     nx.ui.activeView.slideUp(1000);
      //     nx.ui.btnSelector = $('.btnSelector'); nx.ui.btnSelector.removeClass('btnSelector'); nx.ui.btnSelector = nx.ui.activeView; nx.ui.btnSelector.addClass('btnSelector');
      //     // nx.ui.lastView = nx.ui.activeView;
      //     nx.ui.activeView = nx.ui.lastView;
      //     nx.ui.lastView = null;
      //     // nx.ui.initCtrlView();

      //     if(nx.ui.windowWidth < 808  || nx.ui.windowHeight < 500){  //TABLET and MOBILE not DESKTOP
      //           //IF CLOSED, OPEN - toggleMinMax
      //           if(!nx.ui.isTXTViewMinimized){ //max view
      //             nx.ui.toggleMinMax();
      //           }
      //     }

      //     return;
      //   }
      //   //SHOW-CTRL-VIEW-.
      //   // nx.ui.viewCtrl1.show(2000);
      //   nx.ui.viewCtrl1.fadeIn(1000);
      //   nx.ui.activeView.fadeOut(1000);
      //   // nx.ui.activeView.slideUp(1000);
      //   nx.ui.btnSelector = $('.btnSelector'); nx.ui.btnSelector.removeClass('btnSelector'); nx.ui.btnSelector = nx.ui.viewCtrl1; nx.ui.btnSelector.addClass('btnSelector');
      //   nx.ui.lastView = nx.ui.activeView;
      //   nx.ui.activeView = nx.ui.viewCtrl1;
      //   nx.ui.initCtrlView();

      // });
      //***********************************************************************************CTRL-VIEW***************************/
//TODO REMOVE ALL THESE
      nx.ui.lowNavBtn1.on("click" , function(e){         // console.log('epic')
        // if(nx.ui.activeView===nx.ui.idxView){nx.ui.toggleMinMax((nx.ui.isTXTViewMinimized)?1:0); return;} //minimize-.
        // nx.ui.showIdxModeView();
        // if(nx.ui.activeView===nx.ui.idxView && !nx.ui.isTXTViewMinimized){return;}
        // nx.ui.showBookModeView();
        // nx.ui.idxView.show(2000);
        // if(nx.ui.activeView!=nx.ui.idxView){nx.ui.activeView.slideUp(3000);}
        // // nx.ui.activeView.slideUp(3000);
        // // nx.ui.activeView.hide(2000);
        // nx.ui.btnSelector = $('.btnSelector');
        // nx.ui.btnSelector.removeClass('btnSelector');
        // nx.ui.btnSelector = nx.ui.lowNavBtn1;
        // nx.ui.btnSelector.addClass('btnSelector')
        // nx.ui.activeView = nx.ui.idxView;
      });
      nx.ui.lowNavBtn2.on("click" , function(e){        // console.log('hero')
        // nx.ui.showBookModeView();
        // if(nx.ui.activeView===nx.ui.heroView){return;}
        if(nx.ui.activeView===nx.ui.heroView){nx.ui.toggleMinMax((nx.ui.isTXTViewMinimized)?1:0); return;} //minimize-.
        nx.ui.showEpicModeView();
        // nx.ui.heroView.show(2000);
        // nx.ui.activeView.slideUp(3000);
        // // nx.ui.activeView.hide(2000);
        // nx.ui.btnSelector = $('.btnSelector')
        // nx.ui.btnSelector.removeClass('btnSelector');
        // nx.ui.btnSelector = nx.ui.lowNavBtn2;
        // nx.ui.btnSelector.addClass('btnSelector')
        // nx.ui.activeView = nx.ui.heroView;
      });
      nx.ui.lowNavBtn3.on("click" , function(e){         // console.log('quest')
        // nx.ui.showBookModeView();
        // if(nx.ui.activeView===nx.ui.questView){return;}
        if(nx.ui.activeView===nx.ui.questView){nx.ui.toggleMinMax((nx.ui.isTXTViewMinimized)?1:0); return;} //minimize-.
        nx.ui.showQuestModeView();
        // nx.ui.questView.show(2000);
        // nx.ui.activeView.slideUp(3000);
        // // nx.ui.activeView.hide(2000);
        // nx.ui.btnSelector = $('.btnSelector')
        // nx.ui.btnSelector.removeClass('btnSelector');
        // nx.ui.btnSelector = nx.ui.lowNavBtn3;
        // nx.ui.btnSelector.addClass('btnSelector')
        // nx.ui.activeView = nx.ui.questView;
      });
      // nx.ui.lowNavBtn4.on("click" , function(e){         // console.log('adventure')
      //   nx.ui.showBookModeView();
      //   if(nx.ui.activeView===nx.ui.bookModeView){return;}
      //   nx.ui.bookModeView.show(2000);
      //   nx.ui.activeView.slideUp(3000);
      //   // nx.ui.activeView.hide(2000);
      //   nx.ui.btnSelector = $('.btnSelector')
      //   nx.ui.btnSelector.removeClass('btnSelector');
      //   nx.ui.btnSelector = nx.ui.lowNavBtn4;
      //   nx.ui.btnSelector.addClass('btnSelector')
      //   nx.ui.activeView = nx.ui.bookModeView;
      // });

      nx.ui.tryBtn = $('#ctaBtn1');
      nx.ui.likeBtn = $('#ctaBtn2');
      nx.ui.subBtn = $('#ctaBtn3');
      nx.ui.buyBtn = $('#ctaBtn4');

      nx.ui.tryBtn.on("click" , function(e){
        debugger;
        //AUTO-TAB
        var idx = 0;
        nx.ui.autoTab(idx);
      });
      nx.ui.likeBtn.on("click" , function(e){ 
        //AUTO-BOTTOM
        // var idx=0;
        // nx.ui.autoBottom(idx);
        // nx.ui.txtCol1.scrollTo(-1); //scroll to bottom -.


        //AUTO-ROW-TXT
        // var linkIdx = '2.4.4'
// debugger;
        nx.ternIdx = (!nx.ternIdx)?1:(nx.ternIdx===1)?2:(nx.ternIdx===2)?3:(nx.ternIdx===3)?4:(nx.ternIdx===4)?5:0; //template ternary iterator
// var aTXT = {};
        if(nx.ternIdx===1){
          nx.ui.setMovieModeTXT({txt:"AHHH!",type:'orby',align:'left',metaLink:'1.1.2'}); 
        }else if(nx.ternIdx===2){
          nx.ui.setMovieModeTXT({txt:"ZAP!",type:'zapbot1',align:'right'}); 
        }else if(nx.ternIdx===3){
          nx.ui.setMovieModeTXT({txt:"~END~",type:'narrator',align:'center'}); 
        }else if(nx.ternIdx===4){
          nx.ui.setMovieModeTXT({txt:"Do not explore AlphaMoon!",type:'darkbot',align:'right'}); 
          nx.ui.setMovieModeTXT({txt:"One ZAP from Prinz Dark...",type:'darkbot',align:'right'}); 
          nx.ui.setMovieModeTXT({txt:"he controls many botz.",type:'darkbot',align:'right'}); 
          nx.ui.setMovieModeTXT({txt:"Now GO!",type:'darkbot',align:'right'}); 
        }else if(nx.ternIdx===5){
          nx.ui.setMovieModeTXT({title:"EPIC 2",txt:"Find Zawd's CrashPod!",type:'chapter',clickFn:''}); 
        }else if(nx.ternIdx===0){
          // nx.ui.setMovieModeTXT({atxt:nx.TXTZ["Welcome To Acozmical!"],clickFn:''}); 
        }


      });


      // nx.tempTernary = 0;

      nx.ui.subBtn.on("click" , function(e){ 
        debugger;
        //AUTO-ROW-TXT
        var linkIdx = '2.4.4'
        nx.ui.autoTxt(linkIdx); //working


        // nx.ui.autoRowTxt(idx);
        // nx.ui.mainTxtBox.scrollRow(3);  //Scroll to and fade in a new text
        // var pNode = $('<p>jlkjlkj</p>')
        // $(pNode).hide().appendTo("#txtBox4").fadeIn(3000);

        // nx.ui.txtCol1.scrollTo(-1);

      });
      nx.ui.buyBtn.on("click" , function(e){ 
        // nx.ui.mainTxtBox.scrollTo(3);  //Scroll to and fade in a new text
        //play back run-time txt events-.
        //AUTO-TXT-.
        // var idx = 2;
        var linkIdx = '2.5.4'
        nx.ui.autoLink(linkIdx);
        // nx.ui.autoTab(idx);
        // nx.ui.runTxt("3.1.0");

// nx.ui.horizontalScrollBox.auto = 1; //avoid snapping behavior-.


  /************************************************************************-AUTO-LINK-***********************************************/
        // nx.ui.txtCol1.scrollTo(-1);
      });

      nx.ui.autoLink = function(linkIdx) {
        nx.ui.linkIdx = linkIdx.split('.');
        nx.ui.linkTab = parseFloat(nx.ui.linkIdx[0]);
        nx.ui.linkCol = parseFloat(nx.ui.linkIdx[1]);
        nx.ui.linkRow = parseFloat(nx.ui.linkIdx[2]);
        nx.ui.autoTab(nx.ui.linkTab);
        nx.ui.autoCol(nx.ui.linkCol);
        nx.ui.autoRow(nx.ui.linkCol,nx.ui.linkRow);

      }

//COLUMN SELECTOR
  nx.ui.autoTab = function(idx){ //switchTabs-.
    debugger; //? not used
    if(!idx){return;}
    if(idx==1 && nx.ui.activeView != nx.ui.idxView){
        nx.ui.idxView.show(2000);
        nx.ui.activeView.slideUp(1000);
        nx.ui.btnSelector = $('.btnSelector')
        nx.ui.btnSelector.removeClass('btnSelector');        
        nx.ui.btnSelector = nx.ui.lowNavBtn1;
        nx.ui.btnSelector.addClass('btnSelector')
        nx.ui.activeView = nx.ui.idxView;
    }
    if(idx==2 && nx.ui.activeView != nx.ui.heroView){
        nx.ui.heroView.show(2000);
        nx.ui.activeView.slideUp(1000);
        nx.ui.btnSelector = $('.btnSelector')
        nx.ui.btnSelector.removeClass('btnSelector');
        nx.ui.btnSelector = nx.ui.lowNavBtn2;
        nx.ui.btnSelector.addClass('btnSelector')
        nx.ui.activeView = nx.ui.heroView;
    }
    if(idx==3 && nx.ui.activeView != nx.ui.questView){
        nx.ui.questView.show(2000);
        nx.ui.activeView.slideUp(1000);
        nx.ui.btnSelector = $('.btnSelector')
        nx.ui.btnSelector.removeClass('btnSelector');
        nx.ui.btnSelector = nx.ui.lowNavBtn3;
        nx.ui.btnSelector.addClass('btnSelector')
        nx.ui.activeView = nx.ui.questView;
    }
    if(idx==4 && nx.ui.activeView != nx.ui.bookModeView){
        nx.ui.bookModeView.show(2000);
        nx.ui.activeView.slideUp(1000);
        nx.ui.btnSelector = $('.btnSelector')
        nx.ui.btnSelector.removeClass('btnSelector');
        nx.ui.btnSelector = nx.ui.lowNavBtn4;
        nx.ui.btnSelector.addClass('btnSelector')
        nx.ui.activeView = nx.ui.bookModeView;
    }
  }
  nx.ui.autoCol = function(idx){ //switchColumns-.
    if(!idx){return;}
    nx.ui.boxOffset = nx.ui.verticalScrollBox.width()+41;//46
    var newCol = (idx-1) * nx.ui.boxOffset;
    nx.ui.horizontalScrollBox.scrollLeft(newCol);
  }
  nx.ui.autoRow = function(colIdx,rowIdx){ //switchRowScroll-.
    if(!rowIdx){return;}
  // nx.ui.mainTxtBox.scrollCol = function( config ){
    // if(!config || !config.colId || !config.rowIdx){return;}
    var colBox = $(nx.ui.verticalScrollBox[colIdx-1]);
    var colTgt = $(nx.ui.verticalScrollFrame[colIdx-1]);
    var scrollPos = 0;
    // var colTgt = document.querySelector(config.colId); //'#txtBox1'
    // var rows = $(config.colId+' p'), scrollPos = 0;
    var rows = colTgt.children();
    for(var i=0; i<rows.length-1;i++){
      if(i===rowIdx){break;} 
      scrollPos += rows[i].offsetHeight;
    }
    // colTgt.scrollTop(100);
    // colTgt.scrollTop[0] = -100;
    colBox.scrollTop(scrollPos);
  }

  nx.ui.autoTxt = function(linkIdx){ //add dynamic txt

        nx.ui.autoLink(linkIdx); //splits out linkIdx to nx.ui-.
      // var boxIdx = linkIdx.split('.'), txtNode;

    var colTgt = $(nx.ui.verticalScrollFrame[nx.ui.linkCol-1]);
    var colBox = $(nx.ui.verticalScrollBox[nx.ui.linkCol-1]);
      // if(nx.txtScript[boxIdx[0]]){ nx.ui.mainTxtBox.scrollRow(boxIdx[0]); } //scrollRow

var logoStr ='', txtStr='', iconPath='';

      if(nx.txtScript[nx.ui.linkCol-1] && nx.txtScript[nx.ui.linkCol-1].play){
        var aTxtPlayback = nx.txtScript[nx.ui.linkCol-1], txtNode;
        for(var i = 0; i < aTxtPlayback.play.length;i++){

          if(i%2===0){ //even
            txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'" style="text-align:right">'+aTxtPlayback.play[i].txt+'</p>';
            iconPath='../img/hero/jaxxLogo1.png';
          }else{ //odd
            txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'">'+aTxtPlayback.play[i].txt+'</p>';
            iconPath='../img/hero/orby1.png';
          }

          logoStr='<img class="heroLogo" src="'+iconPath+'" alt="logo" aria-label="logo"/>'
          // txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'">'+aTxtPlayback.play[i].txt+'</p>';


$('#movieModeHeader').fadeIn(3000);$('#movieModeFooter').fadeIn(3000)


          txtNode = $(logoStr + txtStr)
          // txtNode = $('<p id=txtBit'+i+' class="txtBitz char'+i+'">'+aTxtPlayback.play[i].txt+'</p>')
          // txtNode.hide().appendTo("#txtBox4").delay(2000 * i).fadeIn(1000);
          // txtNode.hide().appendTo("#txtBox4").delay(2000 * i).fadeIn({duration:1000,start:function(){
          txtNode.hide().appendTo(colTgt).delay(2000 * i).fadeIn({duration:1000,start:function(){
            // nx.ui.mainTxtBox.scrollCol({colId:"#txtBox4",rowIdx:-1}) //Playback SCROLL EVERY ITEM-.
            // colBox[0].scrollTop = colTgt.height(); //jump-scroll

            //Animate-Scroll-Down-.
            var currScroll = colBox[0].scrollTop;
            var tgtScroll = colTgt.height();
            $({'scrollPos':currScroll}).animate({'scrollPos':tgtScroll},{queue:false,duration:3000,easing:'swing',
            step: function(now) { 
                colBox[0].scrollTop = this.scrollPos;
            }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
            });


          }});
          // nx.ui.txtBox4.scrollRow(-1);

        }
          // nx.ui.mainTxtBox.scrollCol({colId:"#txtBox4",rowIdx:-1}) //TRY TO SCROLL EVERY ITEM?
      }

  }

  //INIT-UI-VIEW------------------------------------------------------------------------
  // debugger;
  // nx.ui.autoLink('1.0.0'); //todo: working example of AUTOLINK-.


  nx.ui.setMovieModeTXT  = function(config){ //add dynamic txt to hero view
    //USAGE: nx.ui.setMovieModeTXT({txt:'~END',type:'narrator',align:'center'}); 


    // var atxt=(config && config.atxt)?config.atxt:null; //TXT OBJECT from TXTSCRIPT.
    var txt=(config && config.txt)?config.txt:'';
    var type=(config && config.type)?config.type:'narrator';
    var title=(config && config.title)?config.title:'';
    // var src=(config && config.src)?config.src:'';
    // var hero=(config && config.hero)?config.hero:'narrator';
    var align=(config && config.align)?config.align:'center'; //"right","left"
    // var btn=(config && config.btn)?config.btn:'';
    var tgt=(config && config.tgt)?config.tgt:$('#movieModeDoc'); 
    var txtClass=(config && config.txtClass)?config.txtClass:'hero10'; 
    nx.txtBitIdx=(!nx.txtBitIdx)?1:++nx.txtBitIdx; //TEMPLATE single-line-ternary iterator (on a namespace)-.
    nx.epicTXTIdx=(!nx.epicTXTIdx)?1:++nx.epicTXTIdx; //TEMPLATE single-line-ternary iterator (on a namespace)-.
    // nx.epicTXTIdx=(type==='chapter' && !nx.epicTXTIdx)?1:++nx.epicTXTIdx; //TEMPLATE single-line-ternary iterator (on a namespace)-.
    // nx.missionIdx=(type==='mission' && !nx.missionIdx)?1:++nx.missionIdx; //TEMPLATE single-line-ternary iterator (on a namespace)-.

    var heroLogo;
    var src;
    var txtNode;
    var logoStr ='', txtStr='', iconPath='';
    // var exampleNode = 
    // `<p id="txtBit0" class="movieModeBubble txtBitz hero0" style="">
    //   <img class="heroBubbleLogo" src="./img/hero/jaxxLogo1.png" alt="logo" aria-label="logo" style="">
    //   <span>a1 1 one ahone en on.</span>
    // </p>`

    // var type=(config && config.type)?config.type:'narrator';
    if(type==='narrator'){/*no icon or img, centered*/
      // src = ''; 
      if(config && !config.txtClass){ txtClass = 'hero10'; }
    }else if(type==='game'){
      // src = './img/hero/orby1.png'; 
      // if(config && !config.txtClass){ txtClass = 'hero1'; }
    }else if(type==='movie'){
      // src = './img/hero/orby1.png'; 
      // if(config && !config.txtClass){ txtClass = 'hero1'; }
    }else if(type==='book'){
      // src = './img/hero/orby1.png'; 
      // if(config && !config.txtClass){ txtClass = 'hero1'; }
    }else if(type==='chapter'){ //todo change mission to quest
    }else if(type==='quest'){ //todo change mission to quest
    }else if(type==='hero'){ //todo change mission to quest
      // src = './img/hero/orby1.png'; 
      // if(config && !config.txtClass){ txtClass = 'hero1'; }
    }else if(type==='orby'){
      src = './img/hero/orby1.png'; 
      heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
      if(config && !config.txtClass){ txtClass = 'hero1'; }
    }else if(type==='zapbot1'){
      src = './img/hero/zapbot2.png'; 
      heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
      if(config && !config.txtClass){ txtClass = 'hero2' }
    }else if(type==='jaxa'){
      src = './img/hero/jaxxLogo1.png'; 
      heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
      if(config && !config.txtClass){ txtClass = 'hero3' }
    }else if(type==='darkbot'){
      src = './img/hero/darkbot2.png'; 
      heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
      if(config && !config.txtClass){ txtClass = 'hero5' }
    }else if(type==='dracozmo'){
      src = './copyrightnetcinematics/img/dracozmo3.png'; 
      heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="height:2em">`
      if(config && !config.txtClass){ txtClass = 'hero6' }
    }else if(type==='drbecky'){
      src = './copyrightnetcinematics/img/drbecky3.png'; 
      heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
      if(config && !config.txtClass){ txtClass = 'hero7' }
    }else if(type==='azod'){
      src = './copyrightnetcinematics/img/azod1.png'; 
      heroLogo = `<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`
      if(config && !config.txtClass){ txtClass = 'hero8' }
    }



    //todo movieModeBubble, chapterTXTBubble, epicTXTBubble goalTXTBubble
    //todo movieModeLogo, epicTXTLogo, goalTXTLogo, stuffTXTLogo.
    //todo srcurl
      // `<p id="${nx.txtBitIdx}" class="movieModeBubble txtBitz ${txtClass}" style="font-size:2em">
        // ${(src && align==='left')?`<img class="heroBubbleLogo" src="${src}" alt="logo" aria-label="logo" style="">`:''}
    // debugger;

    //TODO - CHECK CIRCLE: <i class="fa fa-check-circle" style="float:left;margin-top:0.3em;font-size:0.8em;"></i>

    var aTXTBitz = 
      // (type==='chapter')?`<button id="epic${nx.epicTXTIdx}" class="mediaBtn movieStyle epicItem1 sceneSelector"><i class="fa fa-check-circle" style="float:left;"></i><span><i class="fa fa-film"></i>&nbsp;${title} ${txt}</span></button>` 
      (type==='hero')?`<button id="epic${nx.epicTXTIdx}" class="mediaBtn heroStyleBtn">
        <span style="display:flex;align-content:center;justify-content:center;">
          <i class="fa fa-user" style="margin-right:0.5em;"></i><span style="margin-top:1px;">${title} ${txt}</span></span></button>` 
      :(type==='chapter')?`<button id="epic${nx.epicTXTIdx}" class="mediaBtn chapterStyleBtn">
        <span style="display:flex;align-content:center;justify-content:center;">
          <i class="fa fa-book-open" style="margin-right:0.5em;"></i><span style="margin-top:1px;">${title} ${txt}</span></span></button>` 
      :(type==='movie')?`<button id="epic${nx.epicTXTIdx}" class="mediaBtn movieStyleBtn">
        <span style="display:flex;align-content:center;justify-content:center;">
          <i class="fa fa-video" style="margin-right:0.5em;"></i><span style="margin-top:1px;">${txt}</span</span>></button>`
      :(type==='game')?`<button id="epic${nx.epicTXTIdx}" class="mediaBtn gameStyleBtn">
        <span style="display:flex;align-content:center;justify-content:center;">
          <i class="fa fa-gamepad" style="margin-right:0.5em;"></i><span style="margin-top:1px;">${txt}</span</span>></button>`
      :(type==='book')?`<button id="epic${nx.epicTXTIdx}" class="mediaBtn bookStyleBtn">
        <span style="display:flex;align-content:center;justify-content:center;">
          <i class="fa fa-book-open" style="margin-right:0.5em;"></i><span style="margin-top:1px;">${txt}</span</span>></button>`
      :(type==='quest')?`<button id="epic${nx.epicTXTIdx}" class="mediaBtn questStyleBtn">
        <span style="display:flex;align-content:center;justify-content:center;">
          <i class="fa fa-globe" style="margin-right:0.5em;"></i><span style="margin-top:1px;">${title} ${txt}</span></span></button>` 
      :`<p id="${nx.txtBitIdx}" class="movieModeBubble txtBitz ${txtClass}">
        ${(src && align==='left')?heroLogo:''}
        ${(title)?`<span class="bitTXT ${(src && align==='right')?'heroRightAlignSpan':''}" style="${(align==='center')?'margin: 0 auto;':''}">${title}</span>`:''}
        <span class="bitTXT ${(src && align==='right')?'heroRightAlignSpan':''}" style="${(align==='center')?'margin: 0 auto;':''}">${txt}</span>
        ${(src && align==='right')?heroLogo:''}
      </p>`;

    //RIGHT-ALIGN - double ICON = template.
    var aRightTXT = 
    `<p id="txtBit1" class="movieModeBubble txtBitz hero1" style="">
      <img class="heroBubbleLogo" src="./img/hero/orby1.png" alt="logo" aria-label="logo" style="">
      <span class='heroRightAlignSpan'>b2 two too deaux 2</span>
      <img class="heroBubbleLogo" src="./img/hero/orby1.png" alt="logo" aria-label="logo" style="">
    </p>`

    // if(i%2===0){ //even
    //   txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'" style="text-align:right">'+aTxtPlayback.play[i].txt+'</p>';
    //   iconPath='../img/hero/jaxxLogo1.png';
    // }else{ //odd
    //   txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'">'+aTxtPlayback.play[i].txt+'</p>';
    //   iconPath='../img/hero/orby1.png';
    // }

    // logoStr='<img class="heroLogo" src="'+iconPath+'" alt="logo" aria-label="logo"/>'
    // // txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'">'+aTxtPlayback.play[i].txt+'</p>';


      txtNode = $(aTXTBitz);


       if(config.clickfn){
        // debugger;
            // nx.lastEpic.on('click',config.clickfn) //behavioral-fn-.
            txtNode.on('click',config.clickfn) //behavioral-fn-.
            // nx.lastEpicGame.on('click',config.clickfn) //behavioral-fn-.
            // $('#'+(config.id+nx.ui.sceneTXTIDX)).on('click',config.clickfn) //behavioral-fn-.
            // $('#'+(config.id+nx.ui.sceneTXTIDX)).on('click',config.clickfn) //behavioral-fn-.
        }



      nx.ui.setMovieModeFader(txtNode,tgt);

      // txtNode.hide().appendTo(tgt).delay(100).fadeIn({duration:1000,start:function(){
      //     var scrollBox =  $('#movieModeDoc').get(0);
      //     var currScroll = scrollBox.scrollTop;    //num pixels down from top 0.
      //     // var tgtScroll = scrollBox.height(); 
      //     // var tgtScroll = $('#movieMode').height();
      //     var tgtScroll = scrollBox.scrollHeight;
      //     $({'scrollPos':currScroll}).stop().animate({'scrollPos':tgtScroll},{queue:false,duration:3000,easing:'swing',
      //     step: function(now) { 
      //         scrollBox.scrollTop = this.scrollPos;
      //     }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
      //     });
      //     if(type!="chapter"){
      //       setTimeout(function(){ //size-down after delay
      //         var size;
      //         $({'fontSize':2}).animate({'fontSize':1},{queue:false,duration:1000,easing:'swing',
      //         step: function(now) {
      //           size = this.fontSize+'em';
      //           txtNode.css({'font-size':size})
      //             // scrollBox[0].scrollTop = this.scrollPos;
      //         }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
      //         });
      //       },3000)
      //     }


      //   }});




    // if(nx.txtScript[nx.ui.linkCol-1] && nx.txtScript[nx.ui.linkCol-1].play){
      // var aTxtPlayback = nx.txtScript[nx.ui.linkCol-1], txtNode;
      // for(var i = 0; i < aTxtPlayback.play.length;i++){
// var i = 0;
// var frameTXT = "example frame txt"; //aTxtPlayback.play[i].txt
//         // if(i%2===0){ //even
//           // txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'" style="text-align:right">'+aTxtPlayback.play[i].txt+'</p>';
//           txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'" style="text-align:right">'+frameTXT+'</p>';
//           iconPath='../img/hero/jaxxLogo1.png';
//         // }else{ //odd
//           // txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'">'+aTxtPlayback.play[i].txt+'</p>';
//           // iconPath='../img/hero/orby1.png';
//         // }

//         logoStr='<img class="heroLogo" src="'+iconPath+'" alt="logo" aria-label="logo"/>'
//         // txtStr='<p id=txtBit'+i+' class="txtBitz hero'+i+'">'+aTxtPlayback.play[i].txt+'</p>';



//         txtNode = $(logoStr + txtStr)



      //FADER-.
        // txtNode = $(dynamicTXT);

        // txtNode.hide().appendTo(tgt).delay(100).fadeIn({duration:1000,start:function(){
        // txtNode.hide().appendTo(colTgt).delay(3000).fadeIn({duration:1000,start:function(){
          // nx.ui.mainTxtBox.scrollCol({colId:"#txtBox4",rowIdx:-1}) //Playback SCROLL EVERY ITEM-.
          // colBox[0].scrollTop = colTgt.height(); //jump-scroll



// $('.heroScrollBox')[0].scrollHeight; //num pixels to bottom
       //num inner content


// $('#DebugContainer').stop().animate({
//   scrollTop: $('#DebugContainer')[0].scrollHeight
// }, 800);

// document.getElementById('messages').scrollIntoView(false);

// $("html,body").animate({scrollTop:$("#div-id")[0].offsetTop}, 1000);

// var myDiv = $("#div_id").get(0);
// myDiv.animate({
//     scrollTop: myDiv.scrollHeight
//   }, 500);

// document.getElementById('messages').scrollIntoView({ behavior: 'smooth', block: 'end' });

//Require jQuery
// function scrollSmoothToBottom (id) {
//    var div = document.getElementById(id);
//    $('#' + id).animate({
//       scrollTop: div.scrollHeight - div.clientHeight
//    }, 500);
// }

// //Require jQuery
// function scrollSmoothToTop (id) {
//    var div = document.getElementById(id);
//    $('#' + id).animate({
//       scrollTop: 0
//    }, 500);
// }

          //Animate-Scroll-Down-.

          // var id = '#movieModeDoc';
          // var heroDoc = document.getElementById(id);
          // var scrollBox =  $(id);
          // scrollBox.animate({scrollTop:heroDoc.scrollHeight - heroDoc.clientHeight})

// debugger;
          // var scrollBox =  $('.heroScrollBox');
        //   var scrollBox =  $('#movieModeDoc').get(0);
        //   var currScroll = scrollBox.scrollTop;    //num pixels down from top 0.
        //   // var tgtScroll = scrollBox.height(); 
        //   // var tgtScroll = $('#movieMode').height();
        //   var tgtScroll = scrollBox.scrollHeight;
        //   $({'scrollPos':currScroll}).stop().animate({'scrollPos':tgtScroll},{queue:false,duration:3000,easing:'swing',
        //   step: function(now) { 
        //       scrollBox.scrollTop = this.scrollPos;
        //   }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
        //   });
        //   setTimeout(function(){ //size-down after delay
        //     var size;
        //     $({'fontSize':2}).animate({'fontSize':1},{queue:false,duration:1000,easing:'swing',
        //     step: function(now) {
        //       size = this.fontSize+'em';
        //       txtNode.css({'font-size':size})
        //         // scrollBox[0].scrollTop = this.scrollPos;
        //     }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
        //     });
        //   },3000)


        // }});

          //TEMPLATE:Animate-Scroll-Down-.
          // var currScroll = colBox[0].scrollTop;
          // var tgtScroll = colTgt.height();
          // $({'scrollPos':currScroll}).animate({'scrollPos':tgtScroll},{queue:false,duration:3000,easing:'swing',
          // step: function(now) { 
          //     colBox[0].scrollTop = this.scrollPos;
          // }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
          // });



  }


nx.ui.setMovieModeFader = function(txtNode,tgt){

   //TODO this is not complete, we want to sequence all txt adds. waiting for each to finish before adding another-.
    txtNode.hide().appendTo(tgt).delay(100).fadeIn({duration:1000,start:function(){
      // var scrollBox =  $('#movieModeDoc').get(0);


      //movieMode-SCROLLTOBOTTOM;
      var scrollBox =  tgt.get(0);
      var currScroll = scrollBox.scrollTop;    //num pixels down from top 0.
      // var tgtScroll = scrollBox.height(); 
      // var tgtScroll = $('#movieMode').height();
      var tgtScroll = scrollBox.scrollHeight;
      $({'scrollPos':currScroll}).stop().animate({'scrollPos':tgtScroll},{queue:false,duration:3000,easing:'swing',
      step: function(now) { 
          scrollBox.scrollTop = this.scrollPos;
      }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
      });
      // if(type!="chapter"){
      //   setTimeout(function(){ //ANM-FONT-SIZE down after delay
      //     var size;
      //     $({'fontSize':2}).animate({'fontSize':1},{queue:false,duration:1000,easing:'swing',
      //     step: function(now) {
      //       size = this.fontSize+'em';
      //       txtNode.css({'font-size':size})
      //         // scrollBox[0].scrollTop = this.scrollPos;
      //     }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
      //     });
      //   },3000)
      // }


    }});

}

nx.ui.movieModeScrollToBottom = function(){

      //movieMode-SCROLLTOBOTTOM;
      var tgt=$('#movieModeDoc'); 
      var scrollBox =  tgt.get(0);
      var currScroll = scrollBox.scrollTop;    //num pixels down from top 0.
      // var tgtScroll = scrollBox.height(); 
      // var tgtScroll = $('#movieMode').height();
      var tgtScroll = scrollBox.scrollHeight;     //ANM-SCROLL-DOWN-.
      $({'scrollPos':currScroll}).stop().animate({'scrollPos':tgtScroll},{queue:false,duration:3000,easing:'swing',
        step: function(now) { 
            scrollBox.scrollTop = this.scrollPos;
        }, complete:function(){} //NEXT-SUB-SEQUENCE-. 
      });

}

//---------------------------------------------------
//todo
      nx.ui.playNowBtn = $('#playNowBtn');
      nx.ui.playNowBtn.on('click',function(){ //SHOW-PLAY-CONTROLS-.
        debugger; //deprecated?
              //SHOW-CTRL-VIEW-. automatically on minimize-.
              // nx.ui.viewCtrl1.fadeIn(1000);
              // nx.ui.activeView.fadeOut(1000);
              // nx.ui.btnSelector = $('.btnSelector'); nx.ui.btnSelector.removeClass('btnSelector'); nx.ui.btnSelector = nx.ui.viewCtrl1; nx.ui.btnSelector.addClass('btnSelector');
              // nx.ui.viewCtrl1.show(2000);
              // nx.ui.activeView.slideUp(1000);
              // nx.ui.lastView = nx.ui.activeView;
              // nx.ui.activeView = nx.ui.viewCtrl1;
              // nx.ui.initCtrlView();
      });

      nx.ui.playNowBtn = $('#movieNowBtn');
      nx.ui.playNowBtn.on('click',function(){ debugger;  });

      nx.ui.playNowBtn = $('#adventureNowBtn');
      nx.ui.playNowBtn.on('click',function(){ debugger;  });

      nx.ui.msgShowing = 0;
      nx.ui.showUserMSG = function(msg){ //A little listener to show a message of txt-.
        if(nx.ui.msgShowing){return;} //debounce
        $('#userMSGCtrl1').html(msg).show(); 
        nx.ui.msgShowing = 1;
        setTimeout(function(){
        $('#userMSGCtrl1').hide(); 
          nx.ui.msgShowing=0;
        },2000)

      }


//***************************************************************************************************************END-HANDLERS-.


/*******************************************-AUTO-COLORS-****************************************************/
    var txtAnm = $('#navBar');
    txtAnm.css('display','flex').show(3000)
    //METHODOLOGY: ANMZ - tightly compact animations so as to be instrumented within anmfactory-.
    $({'r':0,'g':0,'b':0}).animate({'r':255,'g':255,'b':255},{queue:false,duration:3000, easing:'swing',
      step: function(now) { 
        txtAnm.css('color','rgb('+this.r+','+this.g+','+this.b+')'); 
      }, complete:function(){
        $({'r':255,'g':255,'b':255}).animate({'r':255,'g':0,'b':0},{queue:false,duration:3000, easing:'swing',
          step: function(now) { 
              txtAnm.css('color','rgb('+this.r+','+this.g+','+this.b+')');
          }, complete:function(){
            $({'r':255,'g':0,'b':0}).animate({'r':0,'g':0,'b':255},{queue:false,duration:3000, easing:'swing',
              step: function(now) { 
                  txtAnm.css('color','rgb('+this.r+','+this.g+','+this.b+')');
              }, complete:function(){
                $({'r':0,'g':0,'b':255}).animate({'r':144,'g':4,'b':124},{queue:false,duration:3000, easing:'swing',
                  step: function(now) { 
                      txtAnm.css('color','rgb('+this.r+','+this.g+','+this.b+')');
                  }, complete:function(){
                  } //NEXT-SUB-SEQUENCE-. 
                });
              } //NEXT-SUB-SEQUENCE-. 
            });
          } //NEXT-SUB-SEQUENCE-. 
        });
      } //NEXT-SUB-SEQUENCE-. 
    });
    // debugger;
    // var minView = $('#minMenuView');
    // //METHODOLOGY: ANMZ - tightly compact animations so as to be instrumented within anmfactory-.
    // $({'r':0,'g':0,'b':0}).animate({'r':255,'g':255,'b':255},{queue:false,duration:3000, easing:'swing',
    //   step: function(now) { 
    //     minView.css('color','rgb('+this.r+','+this.g+','+this.b+')'); 
    //   }, complete:function(){
    //     $({'r':255,'g':255,'b':255}).animate({'r':255,'g':0,'b':0},{queue:false,duration:3000, easing:'swing',
    //       step: function(now) { 
    //           minView.css('color','rgb('+this.r+','+this.g+','+this.b+')');
    //       }, complete:function(){
    //         $({'r':255,'g':0,'b':0}).animate({'r':70,'g':130,'b':180},{queue:false,duration:3000, easing:'swing',
    //           step: function(now) { 
    //               minView.css('color','rgb('+this.r+','+this.g+','+this.b+')');
    //           }, complete:function(){
    //           } //NEXT-SUB-SEQUENCE-. 
    //         });
    //       } //NEXT-SUB-SEQUENCE-. 
    //     });
    //   } //NEXT-SUB-SEQUENCE-. 
    // });

/*******************************************-AUTO-COLORS-****************************************************/


// });