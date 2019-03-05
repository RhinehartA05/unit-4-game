$(document).ready(function(){

var targetNumber = Math.floor(Math.random() * 80) + 20; //this gets a random number between 20 and 100
var wins = 0; // this equals total wins
var losses = 0; // this equals total losses
var counter = 0; // this is the total amount counter for combined jewels


var numberOptions = 0;


//how much the player is to accumulate
$("#demand").text(targetNumber);
console.log(targetNumber + " targetNumber");

//display values of wins, losses, and what has been counted
$("#wins").text(wins);
console.log(wins + " wins");
$("#losses").text(losses);
console.log(losses + " losses");
$("#loot").text(counter);
console.log(counter + " counter");

//THIS CODE BELOW NOT WORKING...
//creates a random number for 4 different values
for(var i = 0; i < 4; i++){
    var randomValue = Math.floor(Math.random() * 13) + 2; //creates a random number every time it's ran
    console.log(randomValue + " randomValue");
    var jewel = $('#gem'+ i); //variable jewel is "id gem" there are four gems
    jewel.attr("data-gemValue", randomValue); //vartiable attribute should be data-gemValue
    console.log(jewel + " jewel");
};

//clicking should give each gem a random value which will increase counter
$(".loot").on("click", function() {
   var gemValue = $(this).attr("data-gemValue");
    gemValue = parseInt(gemValue);
    counter += gemValue;
    console.log(gemValue + " gemvalue");

    $("#loot").text(counter);
    console.log(counter + " counter");

    //determines if player has won or lost
    if (counter === targetNumber) {
        counter++
        $("#wins").text(wins); //create win text
    }
    else if (counter >= targetNumber) {
        losses++
        $("#losses").text(losses); //create loss text
    }

    //charge based on amount stolen  
    if (counter >= 61) {
        $("#charge").text('Felony');
    } if (counter <= 60) {
        $("#charge").text('Misdemeanor');
    } if (counter === 0) {
        $("#charge").text('');
    }
    });







    
  $("#new-job").on("click", function(){
    
    //placeholder reset
    setTimeout(function(){ location.reload(); }, 10);
  });
    
});
    
    
    
    
    
    
    
    //COPY AND PASTE CODE TO SAVE.......
