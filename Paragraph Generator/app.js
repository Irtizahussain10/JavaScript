var text = [
    "Man is born free, and he is everywhere in chains",
    "Dare to know! Have the courage to use your own understanding",
    "The last capitalist we hang shall be the one who sold us the rope",
    "The most undesirable people are those who know not but they know not that they know not",
    "I doubt, therefore I think, therefore I am"
]

var form = document.querySelector(".form");
var amount = document.getElementById("amount");
var quoteGoesHere = document.querySelector(".paragraphHere");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const number = Number(amount.value);
    const Random = Math.floor(Math.random() * text.length)
    if (number === "" || isNaN(number) || number <= 0 || number > text.length) {
        quoteGoesHere.innerHTML = `<p>${text[Random]}</p>`
    }
    else {
        let quotesToBeShown = text.slice(0, number);
        let displaying = quotesToBeShown.map(function (item) {
            return `<p>${item}</p>`
        }).join("");
        quoteGoesHere.innerHTML = displaying;
    }
})