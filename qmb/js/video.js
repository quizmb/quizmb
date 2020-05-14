/*********************************Карусель****************************************/
var button1 = document.querySelectorAll(".vs a")[0];
var button2 = document.querySelectorAll(".vs a")[1];
button1.addEventListener("click", remove);
button2.addEventListener("click", move);
var videoContainer = document.querySelector(".video-container ul");
var position = 0;
var imageWidth = document.querySelector(".video-container img").clientWidth+5;
var number = Math.floor(videoContainer.clientWidth/imageWidth);
var y = videoContainer.clientWidth-videoContainer.scrollWidth;
window.addEventListener("resize", resize);
function resize() {
 videoContainer = document.querySelector(".video-container ul");   
 imageWidth = document.querySelector(".video-container img").clientWidth+5;
 number = Math.floor(videoContainer.clientWidth/imageWidth); 
 position = 0; 
 videoContainer.children[0].style.marginLeft = position +"px";
 y = videoContainer.clientWidth-(imageWidth*videoContainer.childElementCount-5);
 button1.style.opacity = "0.2";
 button2.style.opacity = "1";
 if (number ==0){
    number = 1;
 }
}
    button1.style.opacity = "0.2";

function move() {
    button1.style.opacity = "1";
    var x = position - (number*imageWidth);
    position = Math.max(x, y);
    videoContainer.children[0].style.marginLeft = position +"px";
    if (position == y) {
    button2.style.opacity = "0.2";
}
}

function remove() {
    button2.style.opacity = "1";
    var x = position + (number*imageWidth);
    position = Math.min(x, 0);
    videoContainer.children[0].style.marginLeft = position +"px";
    if (position == 0) {
    button1.style.opacity = "0.2";
    }
}
/*********************************Подгрузка видео****************************************/

var a = document.querySelectorAll(".center a");

for (var i=0; i<a.length-2; i++) {
   a[i].onclick = function(){
    document.querySelector("iframe").src = this.href;
    document.querySelector("iframe").style.display = "block";
    return false;
} 
}























