


var arr=[];
 for (var i=0; i<5; i++){
 arr[i]=prompt('Please, enter the name!');
}
 console.log(arr);
var flag=false;
var userName=prompt('Please, enter a user name!');
 console.log('userName='+userName);
for (var j=0; j<5; j++){
   if (arr[j]==userName) {
      alert ('Hello, '+ userName);
      flag=true;
      // console.log(flag);
    }
    console.log(flag);
    if (flag==true) {break};
}  

if (flag==false)  {
   	alert('Error! Please, enter other user name!');
 }   
  
    