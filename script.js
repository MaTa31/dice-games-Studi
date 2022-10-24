$(document).ready(function () {



    function init() {

        CurrentScr = 0
        FinalScr = 0
        activePlayer = 1
        $("#CurrentP1, #CurrentP2, #ScoreP1, #ScoreP2").text(0)
        $(".box.has-text-centered").css({ 'background-image': 'linear-gradient(-90deg, rgba(255,255,255,1) 30%, rgba(177,177,177,1) 100%)' });
        $("#Player1").addClass("active");

    }
    function nextPlayer() {

        if (activePlayer === 1) {

            $(".box.has-text-centered").css({ 'background-image': 'linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(177,177,177,1) 100%)' });
            $("#Player1").removeClass("active");
            $("#Player2").addClass("active");
            activePlayer = 2

        }
        else {

            $(".box.has-text-centered").css({ 'background-image': 'linear-gradient(-90deg, rgba(255,255,255,1) 30%, rgba(177,177,177,1) 100%)' });
            $("#Player2").removeClass("active");
            $("#Player1").addClass("active");
            activePlayer = 1
        }


    }

    init()


    $("#newgame").on("click", function () {

        init()
        $("#hold").show()
        $("#roll").show()

    });



    $("#roll").on("click", function () {

        var resultdice = Math.floor((Math.random() * 6) + 1);
        $(".dice").attr("class", "dice");

        setTimeout(function () {
            $(".dice").addClass("roll-" + resultdice);
        }, 1);

        if (resultdice === 1) {

            $("#CurrentP" + activePlayer).text(0);
            CurrentScr = 0;
            FinalScr = 0;

            nextPlayer();
        }

        else {

            CurrentScr += resultdice;
            $("#CurrentP" + activePlayer).text(CurrentScr);
            $("#hold").on("click", function (event) {

                event.stopImmediatePropagation();
                FinalScr = parseInt($("#ScoreP" + activePlayer).html()) + CurrentScr;
                $("#ScoreP" + activePlayer).text(FinalScr);
                CurrentScr = 0;
                $("#CurrentP" + activePlayer).text(0);

                if (FinalScr >= 100) {

                    $("#ScoreP" + activePlayer).text("WINNER !!");
                    $("#hold").hide();
                    $("#roll").hide();



                }

                nextPlayer()

            })
        }
    })
});





