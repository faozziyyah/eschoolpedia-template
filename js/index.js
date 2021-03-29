
const slide = document.getElementById("slidingheader");
const hamburger = document.getElementById("hamburgericon");

//mobile navbar toggle
const togglebtn1 = document.getElementById("toggle1");
const content1 = document.getElementById("togglecontent1");
const togglebtn2 = document.getElementById("toggle2");
const content2 = document.getElementById("togglecontent2");
const togglebtn3 = document.getElementById("toggle3");
const content3 = document.getElementById("togglecontent3");
const togglebtn4 = document.getElementById("toggle4");
const content4 = document.getElementById("togglecontent4");
const form = document.getElementById("form");

//desktop navbar toggle
const firstLink = document.getElementById("list1");
const firstIcon = document.getElementById("icon1");
const firstContent = document.getElementById("iconcontent1");

const secondLink = document.getElementById("list2");
const secondIcon = document.getElementById("icon2");
const secondContent = document.getElementById("iconcontent2");

const thirdLink = document.getElementById("list3");
const thirdIcon = document.getElementById("icon3");
const thirdContent = document.getElementById("iconcontent3");

const fourthLink = document.getElementById("list4");
const fourthIcon = document.getElementById("icon4");
const fourthContent = document.getElementById("iconcontent4");


  slide.style.display = "none";
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
  
  iconcontent1.style.display = "none";
  iconcontent2.style.display = "none";
  iconcontent3.style.display = "none";
  iconcontent4.style.display = "none";
  
hamburger.addEventListener("click", toggleslide);
togglebtn1.addEventListener("click", togglecontentfirst);
togglebtn2.addEventListener("click", togglecontentsecond);
togglebtn3.addEventListener("click", togglecontentthird);
togglebtn4.addEventListener("click", togglecontentfourth);

firstLink.addEventListener("mouseover", openfirstcontent);
firstLink.addEventListener("mouseout", closefirstcontent);

secondLink.addEventListener("mouseover", opensecondcontent);
secondLink.addEventListener("mouseout", closesecondcontent);

thirdLink.addEventListener("mouseover", openthirdcontent);
thirdLink.addEventListener("mouseout", closethirdcontent);

fourthLink.addEventListener("mouseover", openfourthcontent);
fourthLink.addEventListener("mouseout", closefourthcontent);

//show or hide the mobile navigation bar
function toggleslide(){

  if (slide.style.display === "none") {
    slide.style.display = "block";
    slide.style.transitionDuration = "4s";
    slide.style.transitionDelay = "2s";
  } else {
    slide.style.display = "none";
  }

  hamburger.classList.toggle("closeicon");
 
}

//show or hide the nav links content
function togglecontentfirst(){
  
  if (content1.style.display === "none") {
    content1.style.display = "block";
    slide.style.height = "110vh";
    togglebtn1.style.transform = "rotate(180deg)";
  } else {
    content1.style.display = "none";
    slide.style.height = "60vh";
    togglebtn1.style.transform = "rotate(0deg)";
  }
  
}

function togglecontentsecond(){
  
  if (content2.style.display === "none") {
    content2.style.display = "block";
    slide.style.height = "100vh";
    togglebtn2.style.transform = "rotate(180deg)";
  } else {
    content2.style.display = "none";
    slide.style.height = "60vh";
    togglebtn2.style.transform = "rotate(0deg)";
  }
  
}

function togglecontentthird(){
  
  if (content3.style.display === "none") {
    content3.style.display = "block";
    form.style.marginTop = "2em";
    slide.style.height = "100vh";
    togglebtn3.style.transform = "rotate(180deg)";
  } else {
    content3.style.display = "none";
    form.style.marginTop = "1em";
    slide.style.height = "60vh";
    togglebtn3.style.transform = "rotate(0deg)";
  }
  
}

function togglecontentfourth(){
  
  if (content4.style.display === "none") {
    content4.style.display = "block";
    form.style.marginTop = "2em";
    slide.style.height = "100vh";
    togglebtn4.style.transform = "rotate(180deg)";
  } else {
    content4.style.display = "none";
    form.style.marginTop = "1em";
    slide.style.height = "60vh";
    togglebtn4.style.transform = "rotate(0deg)";
  }
  
}

//show or hide the desktop navigation contents
function openfirstcontent(){
  firstLink.style.textDecoration = "underline";
  iconcontent1.style.display = "block";
  icon1.style.transform = "rotate(180deg)";
  
}

function closefirstcontent(){
  firstLink.style.textDecoration = "none";
  iconcontent1.style.display = "none";
  icon1.style.transform = "rotate(0deg)";
  
}

function opensecondcontent(){
  secondLink.style.textDecoration = "underline";
  iconcontent2.style.display = "block";
  icon2.style.transform = "rotate(180deg)";
  
}

function closesecondcontent(){
  secondLink.style.textDecoration = "none";
  iconcontent2.style.display = "none";
  icon2.style.transform = "rotate(0deg)";
  
}

function openthirdcontent(){
  thirdLink.style.textDecoration = "underline";
  iconcontent3.style.display = "block";
  icon3.style.transform = "rotate(180deg)";
  
}

function closethirdcontent(){
  thirdLink.style.textDecoration = "none";
  iconcontent3.style.display = "none";
  icon3.style.transform = "rotate(0deg)";
  
}

function openfourthcontent(){
  fourthLink.style.textDecoration = "underline";
  iconcontent4.style.display = "block";
  icon4.style.transform = "rotate(180deg)";
  
}

function closefourthcontent(){
  fourthLink.style.textDecoration = "none";
  iconcontent4.style.display = "none";
  icon4.style.transform = "rotate(0deg)";
  
}