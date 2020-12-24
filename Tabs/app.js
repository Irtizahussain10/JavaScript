var tabButton = document.getElementsByClassName("tablinks");
var tabContent = document.getElementsByClassName("tabContent");
var i;

for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "None";
}

const openImage = (teacherName) => {

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "None";
    }

    document.getElementById(teacherName).style.display = "block";

}

for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].onclick = () => {
        openImage(tabContent[i].id);
    }
}
