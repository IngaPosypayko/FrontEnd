 var arr=[];
 for (var i=0; i<5; i++){
 arr[i]=prompt('Please, enter the name!');
}

var userName=prompt('Please, enter a user name!');

var flag=false;
for (var i=0; (i<5)&(flag==false); i++){
if (arr[i]==userName) {
     alert ('Hello, '+ userName);
     flag=true;
     }  
}

if (flag==false) alert ('Mistake!');