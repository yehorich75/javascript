
function myFunk(){
  var bgColor = document.querySelector("#header");
  bgColor.classList.toggle("header__open");
}
button.addEventListener("click", myFunk);

// function myItemRun(){
//   var itemRun = document.getElementById('items').getElementsByClassName('item');
//   itemRun.classList.scroll("item__hide");
// }


function Scroll(){
  var topEven = document.querySelectorAll('item__even');
  var topOdd = document.querySelectorAll('item__odd');
  var ypos = window.pageYOffset;
  if(ypos > 50) {
    topEven.classList.toggle('item__even-active');
    topOdd.classList.toggle('item__odd-active');
  }
}
window.addEventListener("scroll",Scroll);














// Image switcher code
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/photo-1.jpg') {
//       myImage.setAttribute ('src','images/photo-2.jpg');
//     } else {
//       myImage.setAttribute ('src','images/photo-1.jpg');
//     }
// }

// Personalized welcome message code
// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML = 'Mozilla is cool ', + myName;
// }

// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   var storedName = localStorage.getItem('name');
//   myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
// }

// myButton.onclick = function() {
//   setUserName();
// };