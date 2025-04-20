
// Variables
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00";


// Display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active')
}


// Start Timer
function start() {
    
    // Change Button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";


    // change time
    seconds = 2

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // Countdown
    let timerFunction = () => {
        // change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // Start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1) {
                if(breakCount % 2 === 0)
                {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount ++;

                    // change the panel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }
                else
                {
                    // Contiunue work
                    workMinutes = workTime;
                    breakCount++

                    // change the panel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                    
                }
            }
            seconds = 59;
        }
    }

    // Start Countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}
