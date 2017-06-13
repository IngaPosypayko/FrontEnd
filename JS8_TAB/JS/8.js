
'use strict'
var $links=$('.link');
// console.log($links);
var $p=$('p');
// console.log($p);
var currentLink;
var pID;

$p.hide().first().show();
$links.first().addClass('link-active');

$links.on('focus', function(event){
  event.preventDefault();
  currentLink=$(this);
  $links.removeClass('link-active');
  currentLink.addClass('link-active');
  pID=currentLink.attr('href');
  $p.hide();
  $(pID).show();

})



