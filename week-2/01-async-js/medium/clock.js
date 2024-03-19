function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function getTime() {
    const date = new Date();
    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}

function getTimeWithAMPM() {
    const date = new Date();
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour format, 0 should be displayed as 12
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function updateClock() {
    const time = getTime();
    const timeWithAMPM = getTimeWithAMPM();
    console.log(`Current time (HH:MM:SS): ${time}`);
    console.log(`Current time (HH:MM:SS AM/PM): ${timeWithAMPM}`);
}

// Update clock every second
setInterval(updateClock, 1000);
