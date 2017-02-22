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
         goal = Math.round(Math.random() * 120 - 19) + 19;

       

        //reset crystal values
         blueCrystalValue = Math.round((Math.random() * 12) - 1) + 1;
         redCrystalValue = Math.round((Math.random() * 12) - 1) + 1;
         greenCrystalValue = Math.round((Math.random() * 12) - 1) + 1;
         yellowCrystalValue = Math.round((Math.random() * 12) - 1) + 1;

        
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