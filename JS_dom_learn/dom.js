// EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
////document.title = 'ananthu';
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.innerHTML = '<h3>Hello</h3>'; //puts h3 inside h1
//headerTitle.innerText = 'GoodBye';   //Gives the inner text only
//headerTitle.textContent = 'Hello';   //Gives the entire content regardless of style
//headerTitle.style.borderBottom = 'solid 3px #000' ;
//header.style.borderBottom = 'solid 3px #000' ;

//GETELEMENTSBYCLASSNAME//

var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent = 'Hello 2';

//The following line gives an error
//items.style.backgroundColor = '#f4f4f4';
//so we must loop through each item


//GET ELEMENTS BY TAG NAME
//var li = document.getElementsByTagName('li');
var input = document.querySelector('input');
input.placeholder = 'Hello World';

var submit = document.querySelector('input[type = "submit"]');
submit.value = "Send";

var itemq = document.querySelector('.list-group-item');
itemq.style.background = 'black';
itemq.style.color = 'white';
var li = document.querySelector('.list-group-item:last-child');
li.style.background = 'black';
li.style.color = 'white';
var allittems = document.querySelectorAll('.list-group-item');
console.log(allittems[0]);
