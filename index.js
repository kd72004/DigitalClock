const hours=document.getElementById('hour');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const amPm=document.getElementById('amPm');

function updateHour() {
// Get current time
var currentTime = new Date();

// Extract hours, minutes, and seconds
let hours_var = currentTime.getHours();
let minutes_var = currentTime.getMinutes();
let seconds_var = currentTime.getSeconds();
var period = hours_var < 12 ? "AM" : "PM";
 
// Pad single-digit values with leading zeros
hours_var = (hours_var < 10 ? "0" : "") + hours_var;
minutes_var = (minutes_var < 10 ? "0" : "") + minutes_var;
seconds_var = (seconds_var < 10 ? "0" : "") + seconds_var;

// Display the current time

hours.innerHTML = hours_var;
minutes.innerHTML = minutes_var;
seconds.innerHTML = seconds_var;
amPm.innerHTML=period;
}
// Set interval to update time

setInterval(updateHour, 1000);
