
var content = document.getElementsByClassName("modal-content");

var wrapper = document.getElementsByClassName("foto-container");
var pictures = wrapper[0].getElementsByTagName("img");
var num=0;
var modal = document.getElementsByClassName("modal")[0];
var photo = content[0].children[1];
photo.style.transform = "none";

for (var i=0; i<pictures.length; i++) {
    pictures[i].addEventListener("click", show);  
}


function show() {
for (var i=0; i<pictures.length; i++) {
    if (this == pictures[i]) {
        num=i;
    }
}    
        modal.style.display="flex";
        photo.src = pictures[num].src; 
        photo.style.opacity = "1";
        photo.classList.add("slide-show");
}

function next() {
  num++;
  if ( num >= pictures.length ) {
    num = 0;
  }
  if(pictures[num].src!="")
  {photo.src = pictures[num].src;}
else{
  photo.src = pictures[num].dataset.src;
}
}


function prev() {
  num--;
  if ( num < 0 ) {
    num = pictures.length-1;
  }
  if(pictures[num].src!="")
  {photo.src = pictures[num].src;}
else{
  photo.src = pictures[num].dataset.src;
}
}


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.addEventListener("click", exitFoto);
window.addEventListener("touchstart", exitFoto);
function exitFoto(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}
    
 function isVisible(elem) {
      var coords = elem.getBoundingClientRect();
      var windowHeight = document.documentElement.clientHeight;
      // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
      return topVisible || bottomVisible;
    }
 function showVisible() {
      for (var i = 0; i < pictures.length; i++) {
        var img = pictures[i];
        var realsrc = img.getAttribute("data-src");
        if (!realsrc) continue;
        if (isVisible(img)) {
                img.src = realsrc;
                img.setAttribute("data-src", "");
                img.parentNode.classList.add("loaded");
        }
      }
    }           
 window.onscroll = showVisible;
    showVisible();
    
   


