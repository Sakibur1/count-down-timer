const count = new Date('oct 29,2021 00:00:00').getTime();

function birthDay(){

    
    const now = new Date().getTime();
    let gap = count - now;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let d = Math.floor(gap /day);
    let h = Math.floor( (gap /day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s =  Math.floor((gap % minute) / second);
   

    document.getElementById('day').innerHTML = d
   document.getElementById('hour').innerHTML = h
    document.getElementById('min').innerHTML = m
   document.getElementById('sec').innerHTML = s


}


setInterval(function(){
    birthDay()
   })