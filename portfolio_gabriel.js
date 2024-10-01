function myFunction() {
  var x = document.getElementById("myLinks");
  
  // Alterna entre adicionar e remover a classe "active"
  if (x.classList.contains("active")) {
      x.classList.remove("active");
  } else {
      x.classList.add("active");
  }
}


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}