
const aside = document.getElementById("slidingheader");
const hamburger = document.getElementById("hamburgericon");

 aside.style.display = "none";
 
 hamburger.addEventListener("click", toggleslide);
 //show or hide the mobile navigation bar
function toggleslide(){

  if (aside.style.display === "none") {
    aside.style.display = "block";
  } else {
    aside.style.display = "none";
  }
 
}