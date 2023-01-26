let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let timer = null;
let startTimer = document.querySelector('.start-button');
let stopTimer = document.querySelector('.stop-button');
let resetTimer = document.querySelector('.reset-button');



function stopWatch() {
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    displayTime.innerHTML = h +':'+ m +':'+ s;
}



startTimer.addEventListener('click', function (){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
});



stopTimer.addEventListener('click', function() {
    clearInterval(timer);
});



resetTimer.addEventListener('click', function() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = '00:00:00';
});




