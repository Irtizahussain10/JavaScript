var collapse = document.getElementsByClassName("Collapsible");

for (var i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var Content = this.nextElementSibling;
    if (Content.style.display === "block") {
      Content.style.display = "none";
    } else {
      Content.style.display = "block";
    } 
  });
}
