$(document).ready(function(){

var obiWanImg = $('#obiWan');
var lukeImg = $('#luke');
var sidiousImg = $('#sidious');
var maulImg = $('#maul');

var obiWanImgSel = $('#obiWanSelect');
var lukeImgSel = $('#lukeSelect');
var sidiousImgSel = $('#sidiousSelect');
var maulImgSel = $('#maulSelect');


//who are the fighters
var fighters = {
    obiWan: {
        health: 120,
        value: 25,
    },
    luke: {
        health: 100,
        value: 25,
    },
    sidious: {
        health: 150,
        value: 25,
    },
    maulImg: {
        health: 180,
        value: 25,
    }
};


//what positions are establish?
var slot1 = "" //All Characters are here
var slot2 = "" //Selected Character
var slot3 = "" //Selected Opponent
var userAttack = 0;
var wins = 0;
var losses = 0;


//attack function
var attackBtn = $('#attackBtn');

// $(".fighter").click(function(){
//     $(this).hide();
//     $(".photo2").show();
//     });

//selected character is removed from selection screen and selected fighter image appears.
    $("#obiWan").click(function(){
        $(this).hide();
        $("#obiWanSelect").show();
        $("#playerSelected").append(obiWanImgSel);
        });

    $("#luke").click(function(){
        $(this).hide();
        $("#lukeSelect").show();
        $( "#playerSelected" ).append(lukeImgSel);
        });
    
        $("#sidious").click(function(){
        $(this).hide();
        $("#sidiousSelect").show();
        $( "#playerSelected" ).append(sidiousImgSel);
        });
    
    
        $("#maul").click(function(){
        $(this).hide();
        $("#maulSelect").show();
        $( "#playerSelected" ).append(maulImgSel);
        });
    
   




    
    // $(".photo1").click(function(){
    // $(this).hide();
    // }); 

    // $("#attackBtn").click(function(){
    //     $(this).hide();
    //     }); 






  });







//COPY AND PASTE CODE TO SAVE.......



  