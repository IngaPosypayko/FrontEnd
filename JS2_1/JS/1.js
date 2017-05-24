 
function getPow(num, pow){
 var result=1;
   if (pow==0) {
 	  return result;}
 else{
    for (var i=1; i<=pow; i++){
     result=result*num;
      }
     console.log('Result='+result);
     return result;
  }
}

var num=prompt('Please, enter the number!');
 alert('Your number is '+ num);

var pow=prompt('Please, enter the pow!');
 alert('Your pow is '+ pow);
   if (pow <0) {
   alert('Pow ' + pow + ' less than 0, error' );
  } else { 
      var result=getPow(num, pow);
      alert('Result is '+ result);
  }