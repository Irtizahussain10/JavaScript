var List = document.getElementsByClassName("List");
var button = document.getElementsByClassName("Button");
var close = document.getElementById("close");

List[0].style.display = "none";

button[0].onclick = () => {
    if (List[0].style.display === "none") {
        List[0].style.display = "block";
    } else {
        List[0].style.display = "none";
    }
}

close.onclick = () => {
    if (List[0].style.display === "none") {
        List[0].style.display = "block";
    } else {
        List[0].style.display = "none";
    }
}