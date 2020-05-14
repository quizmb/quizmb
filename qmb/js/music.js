/****************************************** TABS ***************************************************/
var tab;
var tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName("tabContent");
    tab = document.getElementsByClassName("tab");
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        tab[i].classList.remove("whiteborder");
    }
}

document.querySelector(".tabs").onclick = function(event) {
    var target = event.target;
    if (target.className == "tab") {
        for (var i=0; i<tab.length; i++) {
            if(target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
        
    }
   return false; 
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains("hide")){
        hideTabsContent(0);
        tab[b].classList.add("whiteborder");
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
}
/****************************************** VIDEO ***************************************************/
var videoButtons = document.querySelectorAll(".link");
var modal = document.querySelector(".modal");

for (var i=0; i<videoButtons.length; i++){
        videoButtons[i].onclick = function(){
        modal.style.display = "flex";
        document.querySelector(".modal-content-video iframe").src = this.lastChild.href;
        return false;
    }
}
window.addEventListener("click", exit);
window.addEventListener("touchstart", exit);
function exit(event) {
    var modal = document.querySelector(".modal");
    if (event.target == modal) {
        modal.style.display = "none"; 
        document.querySelector(".modal-content-video iframe").src = "";
    }
}