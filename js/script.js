$(document).ready(function () {

    let getMode = localStorage.getItem("mode");

    if(getMode == "dark"){
        $( "<link rel='stylesheet' href='css/dark-style.css' id='darkStyleSheet'>" ).insertAfter("#styleSheet");
        $(".fa-moon").hide();
        $(".fa-lightbulb").show();
    }else{
        $(".fa-moon").show();
        $(".fa-lightbulb").hide();
    }

    $("#switch").click(() => {
        if ($("#darkStyleSheet").length) {
            $("#darkStyleSheet").remove();
            localStorage.setItem("mode", "light");
            $(".fa-moon").show();
            $(".fa-lightbulb").hide();
        }
        else{
            $( "<link rel='stylesheet' href='css/dark-style.css' id='darkStyleSheet'>" ).insertAfter("#styleSheet");
            localStorage.setItem("mode", "dark");
            $(".fa-moon").hide();
            $(".fa-lightbulb").show();
        }
    })

    $(".fa-bars").click(function () {
        $(".side-menu").addClass("open");
    });
    $(".fa-xmark").click(function () {
        $(".side-menu").removeClass("open");
    });

});

