var form = document.querySelector(".form");
var text = document.getElementById("text");
var list = document.querySelector(".list");
var Err = document.getElementById("error");
var clearList = document.getElementById("clearList");
var deleteItem = document.getElementsByClassName("delete");
var Items = [];

clearList.style.display = "none";
clearList.onclick = () => {
    Items = [];
    list.style.display = "none";
}

form.addEventListener("submit", function (e) {

    e.preventDefault();
    list.style.display = "block";

    if (text.value === "") {
        Err.innerHTML = "Please give a valid input";
        form.reset();
        setTimeout(hideError, 2500);
    }
    else {
        Items.push(text.value);
        form.reset();
        let List = Items.map(function (item) {
            return `
        <p>
        <span>${item}</span>
        <span>
        <button class="delete">x</button>
        </span>
        </p>
        `
        }).join("");
        list.innerHTML = List;
        clearList.style.display = "block";
        Err.innerHTML = "Item successfully added";
        setTimeout(hideError, 2500);
    }
})

function hideError() {
    Err.innerHTML = "";
}