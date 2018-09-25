var el = document.getElementById('date');
var elTime = document.getElementById('time');

function getDate(date){

    var monthNames = ["January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"];

    var dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday']

    var dayIndex = date.getDay();
    var monthIndex = date.getMonth();
    var today = date.getDate();
    var year = date.getFullYear();

    return dayNames[dayIndex] +', '+ monthNames[monthIndex] +' '+ today + ' ' + year;
}

el.textContent = getDate(new Date());


function getTime(){

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    elTime.textContent = h+':'+m+':'+s;
    var g =  setTimeout(getTime, 500);
}

function checkTime(i){ //pobieramy wartość minut i sekund i dodajemy 0 jeśli jest mniejsza od 10
    if(i < 10){i = '0' + i }
    return i;
}