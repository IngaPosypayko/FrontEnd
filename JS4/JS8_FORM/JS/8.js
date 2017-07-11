
'use strict'
// $( function() {



$('input').bind("mouseenter", function(){
    $(this).next().addClass("over");
});

$('input').bind("mouseleave", function(){
    $(this).next().removeClass("over");
});

$('button').bind("click", function(e) {
    e.preventDefault();
    $('span').addClass("over");
});

    $('span').bind("mouseenter", function(e){
        $('this').addClass("span");

});