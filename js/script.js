function myFunk() {
    var bgColor = document.querySelector("#header");
    bgColor.classList.toggle("header__open");
}
button.addEventListener("click", myFunk);


function Scroll(){
  var itemList = document.getElementById('items');
  var ypos = window.pageYOffset;
  if(ypos > 50) {
    itemList.classList.add('items-active');
  } else {
    itemList.classList.remove('items-active');
  }
}
window.addEventListener("scroll",Scroll);