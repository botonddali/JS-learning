// ez felfedi az uzenetet
function revealMessage(){
    var revealbutton = document.getElementById("carousel");
  if (revealbutton.style.display === "none") {
    revealbutton.style.display = "flex";
  } else {
    revealbutton.style.display = "none";
  }
}

// ez sotet modra allit mindent

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}