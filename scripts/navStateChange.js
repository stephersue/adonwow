var navContainer = document.getElementByClassName("navBarRight");

var btns = navContainer.getElementByClassName("btn");

for( vari=0; i<btns.length; i++){
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
