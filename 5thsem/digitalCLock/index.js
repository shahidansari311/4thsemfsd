function updateClock() {
    const now = new Date();

    const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
    ];

    const day = String(now.getDate()).padStart(2, "0");
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const date = `${day} ${month} ${year}`;
    
    
    // Time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    hours = String(hours).padStart(2, "0");

    const time = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("currDate").textContent = date;
    document.getElementById("currTime").textContent = time;
}

// Update immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);