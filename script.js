$(document).ready(function(){
    $("#roll").on("click",  function() {
        var x = Math.floor((Math.random() * 6) + 1);
        $(".dice").attr("class", "dice");
        setTimeout(function() {
            $(".dice").addClass("roll-" + x);
        }, 1);
    });
});