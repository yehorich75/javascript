'use strict';

function myFunk() {
    var bgColor = document.querySelector("#header");
    bgColor.classList.toggle("header__open");
}
button.addEventListener("click", myFunk);


function Scroll() {
    var itemList = document.getElementById('items');
    var ypos = window.pageYOffset;
    if (ypos > 50) {
        itemList.classList.add('items-active');
    } else {
        itemList.classList.remove('items-active');
    }
}
window.addEventListener("scroll", Scroll);


const box = document.querySelector('div.box');
window.addEventListener('scroll', function() {
    if (box.getBoundingClientRect().top < window.innerHeight) {
        box.style.background = 'red';
    }
});

// function redColor() {
//     const box = document.querySelector('div.box');

//     if (box.getBoundingClientRect().top < window.innerHeight) {
//         box.style.background = 'red';
//     }
// }
// window.addEventListener('scroll', redColor);


const welcome = person => {
    console.log(`Ave, ${person.name}`);
};

const persons = [
    {name: 'Marcus Aurelius'},
    {name: 'Mao Zedong'},
    {name: 'Reme Descartes'}
];

for (const person of persons) welcome(person);

// const welcome = person => {
//     console.log(`Ave, ${person.name}`);
// };

// const marcus = { name: 'Marcus Aurelius'};
// const mao = { name: 'Mao Zedong'};
// const cartesius = {name: 'Reme Descartes'};

// welcome(marcus);
// welcome(mao);
// welcome(cartesius);


// const INTERVAL = 500;
// let counter = 0;
// const MAX_VALUE = 10;
// let timer = null;

// const event = () => {
//     if (counter === MAX_VALUE) {
//         console.log('The end');
//         clearInterval(timer);
//         return;
//     }
//     console.dir({ counter, date: new Date() });
//     counter++;
// };
// console.log('Begin');
// timer = setInterval(event, INTERVAL);


// const MAX_VALUE = 10;

// console.log('Begin');
// for (let i = 0; i < MAX_VALUE; i++) {
//     console.dir({i, date: new Date() });
// }
// console.log('The end');

