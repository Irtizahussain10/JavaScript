var button = document.getElementsByClassName("button");
var modalContent = document.getElementsByClassName("modalContent");
var closeModal = document.getElementsByClassName("closeModal");

button[0].onclick = () => {
    modalContent[0].style.display = "block";
}

closeModal[0].onclick = () => {
    modalContent[0].style.display = "none";
}