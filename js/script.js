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