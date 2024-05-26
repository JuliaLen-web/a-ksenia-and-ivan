
var d_mdate = "14.09.2024";

function getTimeRemaining(endtime) {

    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function initializeClock(id, endtime) {
    var daysSpan = document.getElementById("sm-days");
    var hoursSpan = document.getElementById("sm-hours");
    var minutesSpan = document.getElementById("sm-minutes");
    var secondsSpan = document.getElementById("sm-seconds");

    function updateClock() {
        var t = getTimeRemaining(endtime);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var year = new Date().getFullYear();
var month = 10;
var day = 23;
var nd = d_mdate;
if (nd != '') {
    nd = d_mdate.split('.');
    if (nd.length >= 3 && nd[2] >= new Date().getFullYear()) {
        year = nd[2];
        month = nd[1];
        day = nd[0];
    }
}

initializeClock('sm-timer', year + '/' + month + '/' + day);