// SlideShow TOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var slideIndex = 1;
showSlides(slideIndex);
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

next.onclick = function() {
    showSlides(slideIndex += 1);
    return false;
}
prev.onclick = function() {
    showSlides(slideIndex += -1);
    return false;
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("marker")[0].getElementsByTagName("li");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i=0; i <slides.length; i++) {
        slides[i].getElementsByTagName("img")[0].style.opacity = 0;
    }
    for (i=0; i <dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].getElementsByTagName("img")[0].style.opacity = 1;
    var title = slides[slideIndex-1].children[1].textContent;
    document.getElementsByClassName("box")[0].getElementsByTagName("h2")[0].textContent = title;
    dots[slideIndex-1].className += " active";
}

setInterval(function(){
    showSlides(slideIndex += 1);
}, 10000);
// Video !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var videoButton = document.querySelector(".box a.button");
videoButton.onclick = function(){
    document.getElementsByClassName("modal")[0].style.display= "flex";  
    var link = document.querySelectorAll(".mySlides a")[slideIndex-1].href;
    document.querySelector(".modal-content-video iframe").src = link; 
    return false;
}

window.addEventListener("click", exitAll);
window.addEventListener("touchstart", exitAll);
function exitAll(event) {
    var modal = document.getElementsByClassName("modal");
    for (var i=0; i<modal.length; i++){
        if (event.target == modal[i]) {
        modal[i].style.display = "none"; 
        document.querySelector(".modal-content-video iframe").src = "";
    }
    }
    if (event.target == dark) {
        dark.style.display = "none"; 
        document.querySelector("main iframe").src = "";
        document.querySelector("main iframe").style.display = "none";
    }
    if (event.target == document.querySelector(".modal-content-video span")) {
        modal[0].style.display = "none";
        document.querySelector(".modal-content-video iframe").src = "";
    }
}
// Tabs Photo-Container!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var photoMenu = document.querySelectorAll(".photo-menu a");
var photoContainer = document.querySelectorAll(".photo-container img");

for (var i=0; i<photoMenu.length; i++){
    photoMenu[i].addEventListener("click", select);
}
photoMenu[0].addEventListener("click", selectAll);

function selectAll(){
    for (var j=0; j<photoContainer.length; j++) {
        photoContainer[j].style.display = "block";
    }
}

function select() {
for (var i=0; i<photoMenu.length; i++) {
    photoMenu[i].classList.remove("selected");
}   
    this.classList.add("selected");
    for (var j=0; j<photoContainer.length; j++) {
        photoContainer[j].style.display = "none"; 
        if (this.textContent==photoContainer[j].dataset.title) {
        photoContainer[j].style.display = "block";    
        }
}
}
window.onload = function(){
    if (document.body.clientWidth<=780){
        photoMenu[0].classList.remove("selected");
        photoMenu[2].classList.add("selected");
    }
}
// SlideShow Photo-Container!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var picBut = document.querySelectorAll("p.camera");
var pictures = document.querySelectorAll(".photo-container img");
var photo = document.querySelector(".modal-content-foto img");
var title = document.querySelector(".modal-content-foto h4");
var photoTitle = document.querySelectorAll(".photo-container h4");

for (var j=0; j<picBut.length; j++){
    picBut[j].addEventListener("click", modal);
}
function modal(){
    for (var i=0; i<pictures.length; i++) {
    if (this.parentNode.firstElementChild == pictures[i]) {
        num=i;

    }
}    
    document.getElementsByClassName("modal")[1].style.display= "flex"; 
    document.querySelector(".modal-content-foto").classList.add("loaded");
    photo.src = pictures[num].dataset.src;
    title.textContent = photoTitle[num].textContent;
}
var nextFoto = document.querySelector(".modal-content-foto").getElementsByClassName("next")[0];
var prevFoto = document.querySelector(".modal-content-foto").getElementsByClassName("prev")[0];

nextFoto.onclick = function(){
    num++;
  if ( num >= pictures.length ) {
    num = 0;
  }
  photo.src = pictures[num].dataset.src;
  title.textContent = photoTitle[num].textContent;
}
prevFoto.onclick= function(){
    num--;
  if ( num < 0 ) {
    num = pictures.length-1;
  }
  photo.src = pictures[num].dataset.src;
  title.textContent = photoTitle[num].textContent;
}
var span = document.querySelector(".modal-content-foto span");
span.onclick = function() {
    var modal = document.getElementsByClassName("modal")[1];
    modal.style.display = "none";
    document.querySelector(".modal-content-foto").classList.remove("loaded");
}
// Main Video!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var dark = document.querySelector(".dark");
document.querySelector("main a").onclick = function(){
    this.nextElementSibling.src = this.href;
    this.nextElementSibling.style.display = "block";
    dark.style.display = "block";
    return false;
}

// Маска для поля ввода номера телефона!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

window.addEventListener("DOMContentLoaded", function(){
    var keyCode;
    function mask(event) {
       event.keyCode && (keyCode == event.keyCode);
        var pos = this.selectionStart;
        if (pos<3) event.preventDefault();
      var matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a){
              return i<val.length ? val.charAt(i++) || def.charAt(i) : a
          })
        i=new_value.indexOf("_");
        if (i!= -1) {
            i<5 && (i=3);
            new_value = new_value.slice(0, i);
        }
       var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a){
           return "\\d{1," +a.length + "}"
       }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^"+reg+"$");
        if(!reg.test(this.value) || this.value.length<5 || keyCode>47 && keyCode <58) this.value = new_value;
        if (event.type == "blur" && this.value.length<5) this.value = ""        
    }
      
    var input = document.querySelector("input[type=tel]");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
});

// Clients!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var clients = document.querySelector("ul.clients");
var prevClients = document.querySelector("section.client .prev");
var nextClients = document.querySelector("section.client .next");
var position = 0;
var controlTime = new Date().getTime();

nextClients.onclick = function() {
    var currentTime = new Date().getTime();
    if(currentTime - controlTime >= 2000){
        var x = position - clients.clientWidth;
        var y = position - clients.scrollWidth + clients.clientWidth;
        position = Math.max(x, y);
        clients.children[0].style.marginLeft = position +"px";
        controlTime = currentTime;
    }
}
prevClients.onclick = function(){
    var x = position + clients.clientWidth;
    position = Math.min(x, 0);
    console.log(position);
    clients.children[0].style.marginLeft = position +"px";
}
//FAQ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var faq = document.querySelectorAll(".faq .question");
for (var f=0; f<faq.length; f++){
    faq[f].addEventListener("click", Answer);
}
function Answer(){
    if(this.parentNode.className=="show-answer"){
        this.parentNode.classList.remove("show-answer");
    }
    else this.parentNode.classList.add("show-answer");
}
//PRICES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var order = document.querySelectorAll(".prices a.button");
for (var ord=0; ord<order.length; ord++){
    order[ord].addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".modal")[2].style.display= "flex"; 
})
}
var mainSpan = document.querySelector(".prices .close");
mainSpan.onclick = function() {
    var modal = document.getElementsByClassName("modal")[2];
    modal.style.display = "none";
}
