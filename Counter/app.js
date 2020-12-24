window.onload = () => {

    var Days = document.getElementById("Days");
    var Hrs = document.getElementById("Hrs");
    var Mins = document.getElementById("Mins");
    var Secs = document.getElementById("Secs");
    var Counter = document.getElementById("Counter");

    const displayingCounter = () => {
        var dateToday = new Date();
        var endDate = new Date("December 9, 2020 11:30:00");

        var endMilliSeconds = endDate.getTime();
        var TodayMilliSeconds = dateToday.getTime();

        var MilliSeconds = endMilliSeconds - TodayMilliSeconds;
        var Day = Math.floor(MilliSeconds / (1000 * 60 * 60 * 24));
        var Hours = Math.floor((MilliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var Minutes = Math.floor((MilliSeconds % (1000 * 60 * 60)) / (1000 * 60));
        var Seconds = Math.floor((MilliSeconds % (1000 * 60)) / 1000);

        Days.innerHTML = Day;
        Hrs.innerHTML = Hours;
        Mins.innerHTML = Minutes;
        Secs.innerHTML = Seconds;

        if (MilliSeconds < 0) {
            Counter.innerHTML = "Sorry, the deal has Expired";
        }

    }

    setInterval(displayingCounter);
}
