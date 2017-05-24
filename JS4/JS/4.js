
'use strict'
var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 1', 'Вариант овтета 2']
      }
    ]
  },
  createTegQuestion: function( teg, clas, text, num){
    var element=document.createElement(teg);
    element.classList.add(clas);
    element.innerHTML=text+num;
    var parentElement=document.querySelector('body');
    parentElement.appendChild(element);
   },

   createTegAnswer: function( teg, clas, text, num, innerHTMLopen){
    var element=document.createElement(teg);
    element.classList.add(clas);
    element.innerHTML='<label>'+innerHTMLopen+text+num+'</label>';
    var parentElement=document.querySelector('body');
    parentElement.appendChild(element);
   },
}; 


var element=document.createElement('H1');
element.classList.add('title');
element.innerHTML='Тест по какой-то теме';
var parentElement=document.querySelector('body');
parentElement.appendChild(element);


for(var i=0; i<test.data.questions.length; i++){
  console.log(test.data.questions[i].title);
  test.createTegQuestion('H2', 'questionTitle', 'Вопрос ', i+1);

     for(var q=0; q<test.data.questions[i].answers.length; q++){
     console.log(test.data.questions[i].answers[q]);
     test.createTegAnswer('div', 'checkbox', 'Вариант ответа ',q+1, '<input type="checkbox" value=" ">');
     }

}

