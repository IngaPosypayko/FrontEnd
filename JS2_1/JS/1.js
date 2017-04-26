 
function pow(){
 var num=prompt('Please, enter the number!');
 alert('Your number is '+ num);
 var pow=prompt('Please, enter the pow!');
 alert('Your pow is '+ pow);
 var result=1;
for (var i=0; i<=pow; i++){
 result=result*num;
}
console.log('Result='+result);
return result;
}

pow();