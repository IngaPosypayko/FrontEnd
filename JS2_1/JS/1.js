 
function getPow(num, pow){
 var result=1;
  
    for (var i=1; i<=pow; i++){
     result=result*num;
      }
     console.log('Result='+result);
        return result;
      } 
         


var num = prompt('Please, enter the number');
    if (isNaN(num)) {
      while (isNaN(num)) {
        alert('It must be NUMBER');
        num = prompt('Please, enter the number');
      }
    }   

var pow = prompt('Please, enter the pow');
      if (isNaN(pow)) {
      while (isNaN(pow)) {
        alert('It must be NUMBER');
        pow = prompt('Please, enter the pow');
      }
    }

if (pow >= 0) {
   var result = getPow(num, pow);
 }
else {
  var result=(1/getPow(num, pow));
}
    
  
      alert('result is: '+ result);