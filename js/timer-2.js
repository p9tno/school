// start Timer

   // const deadline = '2022-01-01';
   const deadline = $(".ads").find(".timer").attr('data-deadline');
   // console.log(deadline.attr('data-deadline'));
   console.log(deadline);

   // $(".ads").each(function(index, el) {
   //     console.log($(this).attr('data-deadline'));
   // });


   $(".timer").each(function(index, el) {
       console.log($(this).attr('data-deadline'));

   });




   function getTimeRemaining(endtime) {
       const time = Date.parse(endtime) - Date.parse(new Date()),
           days = Math.floor( (time/(1000*60*60*24)) ),
           seconds = Math.floor( (time/1000) % 60 ),
           minutes = Math.floor( (time/1000/60) % 60 ),
           hours = Math.floor( (time/(1000*60*60) % 24) );

       return {
           'total': time,
           'days': days,
           'hours': hours,
           'minutes': minutes,
           'seconds': seconds
       };
   }

   function getZero(num){
       if (num >= 0 && num < 10) {
           return '0' + num;
       } else {
           return num;
       }
   }

   function setClock(selector, endtime) {

       const timer = document.querySelector(selector),
           days = timer.querySelector(".days_js"),
           hours = timer.querySelector('.hours_js'),
           minutes = timer.querySelector('.minutes_js'),
           seconds = timer.querySelector('.seconds_js'),
           timeInterval = setInterval(updateClock, 1000);

       updateClock();

       function updateClock() {
           const t = getTimeRemaining(endtime);

           days.innerHTML = getZero(t.days);
           hours.innerHTML = getZero(t.hours);
           minutes.innerHTML = getZero(t.minutes);
           seconds.innerHTML = getZero(t.seconds);

           if (t.total <= 0) {
               clearInterval(timeInterval);
           }
       }
   }

   setClock('.timer', deadline);

   // end Timer
