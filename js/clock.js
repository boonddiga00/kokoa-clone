const time = document.querySelector(".status-bar__column:nth-child(2) span");

const date = new Date;

function getTime() {
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    time.innerText = `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`;
}

getTime();
setInterval(1000, getTime());

