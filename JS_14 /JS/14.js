
'use strict';
var listOfQuestions = {
    header: 'ТЕСТ ПО МАТЕМАТИКЕ',
    items: [
        {
            id:0,
            title: '5+5=?' ,
            answers: [10, 12, 15],
            correctAnswer: 10
        },
        {
            id:1,
            title: '2+2=?',
            answers: [8, 4, 6, 10],
            correctAnswer: 4
        },
        {
            id:2,
            title: '3+3=?',
            answers: [12, 6],
            correctAnswer: 6
        }

    ]
};


var str=JSON.stringify(listOfQuestions);
var obj=JSON.parse(str);

var parent = document.getElementById('testWrapper');
var source = document.getElementById('myTest').textContent;
var template = _.template(source);
parent.innerHTML = template(obj);

//add event
var elem = document.getElementsByTagName('input');
console.log(elem);
_.forEach(elem,function (item) {
    item.addEventListener('click', click);
});
function click(event) {
}

//массив правильных ответов
var arrCorrAnswers= makeArrayCorrAnswers(listOfQuestions);
console.log(arrCorrAnswers);

function makeArrayCorrAnswers(data ){
    var arr1=[];
    var arr2=[];
        _.forEach(data.items, function (item) {
            _.forEach(item.answers,function (answ) {
               var a=answ;
            var b=item.correctAnswer;
            if (a===b) {arr1=true;}
            else {arr1=false;}
               arr2=arr2.concat(arr1);
             });
        });
    return arr2;
};

//создаем кнопку и вешаем на нее обработчик событий
var element=document.createElement('button');
element.classList.add('btn');
element.classList.add('btn-primary');
element.innerHTML='Проверить мои результаты';
element.type="button";
var parentElement=document.querySelector('body');
parentElement.appendChild(element);

var elemButton = document.getElementsByTagName('button');
console.log(elemButton);
elemButton[0].addEventListener('click', checkTestResult);

function checkTestResult(event) {
    var checkedElem = document.getElementsByTagName('input');

// создаем массив чекнутых элементов
    var arr1 = [];
    var arr2 = [];
    _.forEach(checkedElem, function (el) {
        if (el.checked) {
            arr1 = true;
        }
        else {
            arr1 = false;
        }
        console.log(arr1);
        arr2 = arr2.concat(arr1);
    });

//сравнение массивов
if (arrCorrAnswers.length === arr2.length) {
    for (var i = 0, l = arrCorrAnswers.length; i < l; i++) {
        console.log(arrCorrAnswers[i]);
        console.log(arr2[i]);
        if (arrCorrAnswers[i] != arr2[i]){
            return alert('mistake');
        }
    }
    return alert('Good job!');
   };
}




