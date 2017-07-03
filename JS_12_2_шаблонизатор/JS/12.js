var listOfContacts = [{
       firstName: 'Kolya',
       lastName: 'Vasechkin',
       position: 'junior developer',
       adress: 'Kyiv',
       telephone: '+380933003030',
       photo: 'img/tibet.png'
},

    {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        position: 'junior developer',
        adress: 'Lviv',
        telephone: '+380674004040',
        photo: 'img/nepal.png'
    }
];


     // console.log(listOfContacts.firstName);
    var parent = document.getElementById('wrapper1');
    // console.log(parent);
    var source = document.getElementById('businessCard').textContent;
    // console.log(source);
    var template = _.template(source);
     console.log(template);
    parent.innerHTML = template(listOfContacts);
