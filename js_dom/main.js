console.log(window);
//window object is the parent object of the browser
//so alert(1) and window.alert(1) are same 

//document is where this file is hosted(my assumption!)

//Single element
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container'))
console.log(document.querySelector('h1')) //it is going to select only the first h1 tag.
//multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));
const items = document.querySelectorAll('.item');
items.forEach((item)=>console.log(item));
const ul = document.querySelector('.users')
console.log(ul);
//ul.remove();   //removes the entire list

//ul.lastElementChild.remove(); //removes the last element

//ul.firstElementChild.remove(); //removes the first element 

//ul.firstElementChild.textContent = 'Hello';

//console.log(ul.children[1]); //selects the requires element

//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
//btn.style.background = 'red';

//click,mouseover,mouseout,
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    console.log(e.target.id);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.users').lastElementChild.innerHTML = '<h1>Hello<\h1>';
});
