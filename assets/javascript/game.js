$(document).ready(function(){

var targetNumber = Math.floor(Math.random() * 80) + 20; //this gets a random number between 20 and 100
var wins = 1; // this equals total wins
var losses = 2; // this equals total losses
var counter = 4; // this is the total amount counter for combined jewels


var numberOptions = 0;


//how much the player is to accumulate
$("#demand").text(targetNumber);
console.log(targetNumber);

//display values of wins, losses, and what has been counted
$("#wins").text(wins);
console.log(wins);
$("#losses").text(losses);
console.log(losses);
$("#loot").text(counter);
console.log(counter);

//creates a random number for 4 different values
for(var i = 0; i < 4; i++){
    
    var randomValue = Math.floor(Math.random() * 20) + 2;
    console.log(randomValue);
    var jewel = $('gem');
    jewel.attr("data-gemValue", numberOptions[i]);

};

$(".jewel").on("click", function() {

    var gemValue = ($(this).attr("data-gemValue"));
    gemValue = parseInt(gemValue);
    count += gemValue;
    
});

if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }
    
    
    
    
            
    
    
    
    
    
    
});
    
    
    
    
    
    
    
    //COPY AND PASTE CODE TO SAVE.......
