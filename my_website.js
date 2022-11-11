function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const text= document.querySelector(".second-text");
const textChange=()=>{
	setTimeout(()=>{
		text.textContent= "SHAHRINA SABRIN."
	},0);
	setTimeout(()=>{
		text.textContent= "a Web Developer!"
	},4000);
}
textChange();
setInterval(textChange,8000);
var acc = document.getElementsByClassName("accordion");

  acc[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
