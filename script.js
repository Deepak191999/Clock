const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');  

function clockTick(){
    const d= new Date();
    const sec = d.getSeconds() / 60;
    const min= (sec + d.getMinutes()) / 60;
    const hour = (min + d.getHours()) /12;

    rotateClockHand(secondHand, sec);
    rotateClockHand(minuteHand,min);
    rotateClockHand(hourHand, hour);
    
    
}

function rotateClockHand(element, rotation)
{
    element.style.setProperty('--rotate',rotation * 360);
}
setInterval(clockTick,1000);