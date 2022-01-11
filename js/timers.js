function TimeRemaining(){

    let els = document.querySelectorAll('[id^="trip_"]');

    function getZero(num){
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    for (let i=0; i<els.length; i++) {
        let el_id = els[i].getAttribute('id');
        let end_time = el_id.split('_')[1];
        // console.log(end_time);
        let deadline = new Date(end_time);
        // console.log(deadline);
        let now = new Date();

        let t = Math.floor(deadline.getTime() - now.getTime());
        console.log(t);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);

        if (t < 0) {
            document.getElementById("trip_" + end_time).innerHTML = 'ЗАКОНЧЕН!';
        } else {

            let el = document.getElementById("trip_" + end_time);
            let day = el.querySelector('.days_js');
            let dayTitle = el.querySelector('.daysTitle_js');
            let dayItem = el.querySelector('.daysItem_js');
            let hour = el.querySelector('.hours_js');
            let minute = el.querySelector('.minutes_js');
            let second = el.querySelector('.seconds_js');


            if (days === 0) {
                dayItem.classList.add('hide');
            } else {
                day.innerHTML = days;
                dayTitle.innerHTML = declensionNum(days, ['день', 'дня', 'дней']);
            }
            hour.innerHTML = getZero(hours);
            minute.innerHTML = getZero(minutes);
            second.innerHTML = getZero(seconds);
        }
    }
}

function StartTimeRemaining(){
    TimeRemaining();
    setInterval(function(){
        TimeRemaining();
    }, 1000)
}


StartTimeRemaining();
