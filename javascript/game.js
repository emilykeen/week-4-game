//The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.
//Here's how the app works:
//There will be four crystals displayed as buttons on the page.
//create a button with an image and id
//The player will be shown a random number at the start of the game.
//math.floor(random.number * 120)
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//on("click")
//Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.
// score+ amount
//The player wins if their total score matches the random number from the beginning of the game.
// if score=== random {win++}
//The player loses if their score goes above the random number.

//if score> random{loss++}
//The game restarts whenever the player wins or loses.
//reset game function
//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
$(document).ready(function() {
    var score = 0;
    var goal = 0;
    var wins = 0;
    var losses = 0;
    var number = 0;
    var blueCrystalValue = 0;
    var redCrystalValue = 0;
    var greenCrystalValue = 0;
    var yellowCrystalValue = 0;
    var endOfGame = false;


    // Looks good to me!

    function scoreWorth() {

    	$("#number").html(number);

        if (number == goal) {
            endOfGame = true;
            wins++;
     	} else if (number > goal) {
        	endOfGame = true;
        	losses++;     
        };

        if(endOfGame){
       	 $("#wins").html("Wins:" + wins);
		$("#losses").html("losses:" + losses);
		startgame()
        }

    };




    function startgame() {
        //reset score
        number = 0
        endOfGame = false;

        //reset Goal number
        var goal = Math.floor((Math.random() * 120) - 19) + 19;

       

        //reset crystal values
        var blueCrystalValue = Math.floor((Math.random() * 12) - 1) + 1;
        var redCrystalValue = Math.floor((Math.random() * 12) - 1) + 1;
        var greenCrystalValue = Math.floor((Math.random() * 12) - 1) + 1;
        var yellowCrystalValue = Math.floor((Math.random() * 12) - 1) + 1;

        
        $(".blueCrystal").on('click', function() {
        	if(endOfGame == false){
            number = number + blueCrystalValue;
            scoreWorth();
            $("#number").html(number);

            console.log(number);
             
        	};
        })


        $(".redCrystal").on('click', function() {
        	if(endOfGame == false){
            number = number + redCrystalValue;
            scoreWorth();
            $("#number").html(number);
        	};
        })

        $(".greenCrystal").on('click', function() {
        	if(endOfGame == false){
            number = number + greenCrystalValue;
            scoreWorth();
  			$("#number").html(number);
        	};
        })


        $(".yellowCrystal").on('click', function() {
        	if (endOfGame == false){
            number = number + yellowCrystalValue;
            scoreWorth();
            $("#number").html(number);
        	};
        })


         $("#goal").html(goal);
         $("number").html(number);
         $("#wins").html("wins: " + wins);
         $("#losses").html("losses: " + losses)




    }

    startgame();

});