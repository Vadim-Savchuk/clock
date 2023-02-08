'use strict'

hours();
dates();

function dates(){
    let days = document.querySelector('.date');

    let date    = new Date();
    let year    = date.getFullYear();
    let month   = date.getMonth() + 1;
    let day     = date.getDate();
    let dayStr  = date.getDay();

    let daysWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота']; 

        days.innerHTML = daysWeek[dayStr] + '<br>' + year + '-' + addZero(month) + '-' + addZero(day);
}

function hours() {
    let clock = document.querySelector('.clock');

    let date    = new Date();
    let hours   = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

        clock.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
}

setInterval(function () {
    hours();
    dates();
}, 1000);

function addZero(num) {
    if (num > 0 && num <= 9) {
        return '0' + num;
    } else {
        return num
    }
}