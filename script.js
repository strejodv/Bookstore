

function todaysDateTime() {
    const current = new Date();
    const configured = current.toLocaleString();
    const dateTime = document.getElementById("current-date-time");
    if (dateTime) {
        dateTime.textContent = configured;
    }
}

// DOM //
document.addEventListener("DOMContentLoaded", todaysDateTime);

 