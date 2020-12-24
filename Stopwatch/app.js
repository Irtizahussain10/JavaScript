window.onload = () => {

    var seconds = 0;
    var milliSeconds = 0;
    var secondDisplay = document.getElementById("stopwatchSeconds");
    var milliSecondsDisplay = document.getElementById("stopwatchMilliSeconds");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var restart = document.getElementById("restart");
    var Interval;

    // For Starting Stopwatch

    start.onclick = () => {
        Interval = setInterval(addMilliSeconds, 10);
    }

    function addMilliSeconds() {
        milliSeconds++;
        if (milliSeconds < 10) {
            milliSecondsDisplay.innerHTML = "0" + milliSeconds;
        }
        if (milliSeconds >= 100) {
            milliSeconds = 0;
            seconds++;

            if (seconds < 10) {
                secondDisplay.innerHTML = "0" + seconds;
            }
            else {
                secondDisplay.innerHTML = seconds;
            }

            milliSecondsDisplay.innerHTML = "0" + milliSeconds;
        }
        if (milliSeconds >= 10 && milliSeconds <= 99) {
            milliSecondsDisplay.innerHTML = milliSeconds;
        }
    }

    //To Stop Stopwatch

    stop.onclick = () => {
        clearInterval(Interval);
    }

    //To Reset Stopwatch

    restart.onclick = () => {
        clearInterval(Interval);
        milliSeconds = 0;
        seconds = 0;
        secondDisplay.innerHTML = "00";
        milliSecondsDisplay.innerHTML = "00";
    }
} 