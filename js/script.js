// ez felfedi az uzenetet
function revealMessage(){
    var revealbutton = document.getElementById("carousel");
  if (revealbutton.style.display === "none") {
    revealbutton.style.display = "flex";
  } else {
    revealbutton.style.display = "none";
  }
}