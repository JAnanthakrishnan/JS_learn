console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// var,let,cont (for defining variables)
// we are not using var anymore since it is global
// so we will be mostly using let and const

let age = 30;
console.log(age);

const a = 20
// a=22 (This is not possible as it is a constant)
console.log(a);

/*---Datatypes------
Strings.Numbers,Boolean,null,undefined.Symbol
-------------------*/

const name = 'John';
const reading = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isCool));
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));

//strings
//concatenation
console.log('My name is '+name+' and my age is '+age);
//Template String
//here backticks are used instead of quotes
console.log(`My name is ${name} and I am ${age}`);

const hello =  `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(6,11).toUpperCase());


const sarr = 'technology, computers, it, code';
console.log(s.split(''));
console.log(sarr.split(', '));

//Arrays

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//in JS an array can contain different data types
const fruits = ['apples','oranges','pineapple','pears',true]
const array1 = [1,2,3,4,5,'apples'];
console.log(fruits);


console.log(fruits[0],fruits[1]);
fruits[5] = 'grapes';
console.log(fruits[4]);
fruits.push('mango');   //add to end
fruits.unshift('strawberry');   //add to beginning
console.log (fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray('ananthu'));
console.log(fruits.indexOf('oranges'));

//objects

const person = {
    firstName: 'J',
    lastName: 'Ananthakrishnan',
    age: 20,
    hobbies: ['music', 'gaming', 'movies', 'coding'],
    address: {
        house_no: 'Stra 33',
        street: 'Vembanattu lane',
        city: 'Perumbavoor',
        state: 'Ernakulam' ,
    }
}
console.log(person.address.city);

const { firstName, lastName, address: { city, state }} = person;
console.log(city,state);

person.email = 'ak@msi';
console.log(person);

const  todos = [
    {
        id : 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id : 2,
        text: 'Studying',
        isCompleted: false
    },
    {
        id : 3,
        text: 'Interview',
        isCompleted: true
    }
];
console.log(todos);
console.log(todos[1].text)
    /*for(let i = 0;i<todos.length;i++)
    {
        console.log(todos[i].text);
    }
    let i=0;
    while(i!=todos.length)
    {
        console.log(todos[i].id);
        i++;
    }*/
//JSON is a widely used format to sent data to servers 

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//loops

for(let i=0;i<10;i++){
    console.log(`For loop number ${i}`);
}

let i=0;
while(i!=10){
    console.log(`While loop number ${i}`);
    i++;
}




for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
}

for(let todo of todos)
{
    console.log(todo.id);
}

//Higher order array methods
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
                    return todo.text;
                });
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
                      return todo.isCompleted==true;
                      });
console.log(todoCompleted);

const todoCompletedText = todos.filter(function(todo){
                      return todo.isCompleted==true;
                    }).map(function(todo){
                        return todo.text;
                    });
console.log(todoCompletedText);


let u = 10;
if(u==10){
    console.log('u is 10');
}
let v = '10';
if(v===10){
    console.log('Triple equal check');
} else {
    console.log('This is triple equal check, also looks for datatype');
}
 v = '10';
if(v==10){
    console.log('Double equal check');
}

const color = u >10 ? 'red' : 'blue';
switch(color){
    case 'red': 
        console.log('The color is red');
        break;
    case 'blue' :
        console.log('The color is blue');
        break;
    default:
        console.log('The color is not red or blue');
}

//functions

function addNum(num1=0,num2=0){
    return (num1+num2);
}
console.log(addNum(4,5));

const arrowaddNum = (num1 = 1, num2 = 1) => {
    console.log(num1+num2);
}

arrowaddNum(5,4);

const arrowaddNum1 = (num1 = 1, num2 = 1) => console.log(num1+num2);
arrowaddNum1(6,5);

const arrowaddNum2 = num1 => num1 + 25;
console.log(arrowaddNum2(54));

todos.forEach((todo)=>console.log(todo.text));
const texttodo = todos.map((todo)=>todo.text);
console.log(texttodo);


//constructor function
function Personal(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
    this.getBirthyear = function(){
        return this.dob.getFullYear();
    }
    this.getFullname = function(){
        return this.firstName+" "+this.lastName;
    }
}



//Instantiate object
person1 = new Personal('J', 'Ananthakrishnan', '3/6/1970');
console.log(person1.dob);

//so now comes in prototypes
Personal.prototype.getyearparam = function(){
    return this.dob.getFullYear();
}
console.log(person1);
console.log(person1.getyearparam()); 
console.log(person1.getFullname());

//Class

class newclass{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthyear(){
        return this.dob.getFullYear();
    }
    getFullname(){
        return  `${this.firstName} ${this.lastName}`;
    }
}
const classex = new newclass('J','Ananthakrishnan', '11/16/1999');
console.log(classex.getFullname()); 
console.log(classex.getBirthyear());
console.log(classex.dob.getFullYear());
console.log(classex);