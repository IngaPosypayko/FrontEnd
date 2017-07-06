
'use strict';
var listOfQuestions = {
    header: 'ТЕСТ ПО МАТЕМАТИКЕ',
    items: [
        {
            id:0,
            title: '5+5=?',
            answers: ['10', '12', '15'],
            correctAnswer: 10
        },
        {
            id:1,
            title: '2+2=?',
            answers: ['8', '4', '6', '10'],
            correctAnswer: '4'
        },
        {
            id:2,
            title: '3+3=?',
            answers: ['12', '6'],
            correctAnswer: '6'
        }

    ]
};


var str=JSON.stringify(listOfQuestions);
var obj=JSON.parse(str);


var parent = document.getElementById('testWrapper');
var source = document.getElementById('myTest').textContent;
var template = _.template(source);
parent.innerHTML = template(obj);

var elem = document.getElementsByClassName('answ');
console.log(elem);

//add event
_.forEach(elem,function (item) {
    item.addEventListener('click', click);
    });


function click(event) {
    var userAnswer=event.target.parentElement.innerText;
    console.log('user answer='+userAnswer);
    var corrAnsw=listOfQuestions.items[0].correctAnswer;
if (userAnswer==corrAnsw){ alert('SMART student!')} else{ alert('STUPID student!')};

    var currentTask=event.target.parentNode.parentNode.innerHTML.substr(0,30);
 console.log(currentTask);

         _.forEach(listOfQuestions.items.title,function (item) {
             console.log('item'+item);
             if (item== currentTask){
                 var taskId=listOfQuestions.items.id;
                 alert(taskId+'вопрос');
             }

         })
    var numberQuestion=listOfQuestions.items[0].answers.indexOf('10');
    console.log('umber'+numberQuestion);



}



// var userAnswer=event.target.parentElement.innerText;
// console.log('user answer='+userAnswer);
//
// if userAnswer=items.correctAnswer
//
//     var ev=event.target.parentNode.parentNode.innerText;
// console.log(ev);


var numberQuestion=listOfQuestions.items[0];
console.log('umber'+numberQuestion);

