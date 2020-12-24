var scrollButton = document.getElementsByClassName("scrollButtons");
var Element = document.getElementsByClassName("Element");

for (let i = 0; i < scrollButton.length; i++) {
    scrollButton[i].onclick = () => {
        Element[i].scrollIntoView();
    }
};

var NavBar = document.querySelector(".NavBar");

window.onscroll = () => {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
        NavBar.style.backgroundColor = "white";
    } else {
        NavBar.style.backgroundColor = "inherit"
    }
}