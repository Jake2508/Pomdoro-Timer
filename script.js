
// Variables
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 10;
let breakTime = 5;

let seconds = 0;
let timerInterval; // Interval ID to clear when resetting

// Display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');

    workTitle.classList.add('active')
}

// Start Timer
function start() {

    // Change Button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // first loop
    seconds = 59
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // Timer Countdown
    let timerFunction = () => {
        let formattedSeconds = String(seconds).padStart(2, '0');

        // change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = formattedSeconds;

        if (seconds > 0) 
            seconds--;
        
        else 
        {
            if (workMinutes > 0) 
            {
                workMinutes--;
                seconds = 59;
            } 
            else 
            {
                // Switch between work and break
                breakCount++;
    
                const onBreak = breakCount % 2 === 1;
                workMinutes = onBreak ? breakTime - 1 : workTime - 1;
                seconds = 59;
    
                // Toggle active class
                workTitle.classList.toggle('active', !onBreak);
                breakTitle.classList.toggle('active', onBreak);
            }
        }
    }

    timerInterval = setInterval(timerFunction, 1000); // 1000 = 1 second
}


function reset() {
    // Clear Timer
    clearInterval(timerInterval);

    // Reset display 
    seconds = 0;
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0'); 

    // Reset button status
    workTitle.classList.add('active');
    breakTitle.classList.remove('active');

    // Update button display
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
}
