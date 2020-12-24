var Answers = document.getElementsByClassName("Answer");
var Buttons = document.getElementsByClassName("Button");
var Questions = document.getElementsByClassName("Question");

for (let i = 0; i < Answers.length; i++) {
    Answers[i].style.display = "none";
};

for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].onclick = () => {
        if (Buttons[i].innerHTML === "+") {
            for (let i = 0; i < Answers.length; i++) {
                Buttons[i].innerHTML = "+";
                Answers[i].style.display = "none";
                Questions[i].style.borderBottom = "none";
            };
            Buttons[i].innerHTML = "-";
            Answers[i].style.display = "block";
            Questions[i].style.borderBottom = "0.5px solid black";
        }
        else {
            Buttons[i].innerHTML = "+";
            Answers[i].style.display = "none";
            Questions[i].style.borderBottom = "none";
        };
    };
};