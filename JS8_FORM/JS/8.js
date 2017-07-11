
'use strict'
// $( function() {



$('#firstname').bind("mouseenter mouseleave", function(){
    $('.span1').toggleClass("over");
});

$('#lastname').bind("mouseenter mouseleave", function(){
    $('.span2').toggleClass("over");
});

$('#address').bind("mouseenter mouseleave", function(){
    $('.span3').toggleClass("over");
});

$('button').bind("click", function(){
    $('span').addClass("over");

});