
'use strict'
var listOfQuestions = [
    // {header: 'ТЕСТ ПО МАТЕМАТИКЕ'},

      {
        title: '5+5=?',
        answers: ['10', '12', '15'],
        correctAnswer: '10'
      },
      {
        title: '2+2=?',
        answers: ['8', '4', '6', '10'],
          correctAnswer:'4'
      },
    {
        title: '3+3=?',
        answers: ['12', '6'],
        correctAnswer: '6'
    }

     ];




var str=JSON.stringify(listOfQuestions);
console.log(str);

var obj=JSON.parse(str);
console.log(obj);

var parent = document.getElementById('testWrapper');
// console.log(parent);
var source = document.getElementById('myTest').textContent;
// console.log(source);
var template = _.template(source);
// console.log(template);
parent.innerHTML = template(listOfQuestions);
