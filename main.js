var week = ['ВОСК/SAT', 'ПОНЕД/SUN', 'ВТОР/MON', 'СРЕДА/TUE', 'ЧЕТВ/WED', 'ПТН/THU', 'СУБ/FRI'];
var timerID = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
    var cd = new Date();
    var timeElement = document.querySelector('#clock .time');
    var dateElement = document.querySelector('#clock .date');

    timeElement.textContent = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    /*dateElement.textContent = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];*/
    dateElement.textContent = week[cd.getDay()] + ' ' + zeroPadding(cd.getDate(), 2) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getFullYear(), 4);
}

function zeroPadding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
}