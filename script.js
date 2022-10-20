$(document).ready(function () {

    
    var CurrentScr = 0
    var FinalScr = 0    
    var activePlayer = 1

    $(".box.has-text-centered").css({'background-image': 'linear-gradient(-90deg, rgba(255,255,255,1) 30%, rgba(177,177,177,1) 100%)'}); 
    $("#Player1").addClass("active");     



    $("#newgame").on("click", function () {

        CurrentScr = 0
        FinalScr = 0    
        activePlayer = 1
        $("#CurrentP1, #CurrentP2, #ScoreP1, #ScoreP2").text(0)

    });



    $("#roll").on("click", function () {

        var resultdice = Math.floor((Math.random() * 6) + 1);
        

        $(".dice").attr("class", "dice");
        setTimeout(function () {
            $(".dice").addClass("roll-" + resultdice);
        }, 1);

        if (resultdice === 1) { 

            $("#CurrentP"+activePlayer).text(0)

            if (activePlayer === 1) {

                $(".box.has-text-centered").css({'background-image': 'linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(177,177,177,1) 100%)'});
                $("#Player1").removeClass("active"); 
                $("#Player2").addClass("active"); 
                activePlayer = 2

            }
            else {

                $(".box.has-text-centered").css({'background-image': 'linear-gradient(-90deg, rgba(255,255,255,1) 30%, rgba(177,177,177,1) 100%)'});
                $("#Player2").removeClass("active"); 
                $("#Player1").addClass("active");
                activePlayer = 1
            }

        }

        else { 

            CurrentScr += resultdice
            $("#CurrentP"+activePlayer).text(CurrentScr)

            $("#hold").on("click", function () {

                FinalScr += CurrentScr
                $("#ScoreP"+activePlayer).text(FinalScr)
                CurrentScr = 0
                $("#CurrentP"+activePlayer).text(0)

                if (FinalScr >= 100) {

                // Modal

                }
       
            })
        }    
    })
});





