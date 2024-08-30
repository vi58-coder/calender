const monthInx = new Date().getMonth();
const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();

let days = "";

// Add empty divs for days before the first day of the month
for (let i = 0; i < firstDay; i++) {
  days += "<div></div>";
}

// Add divs for each day of the month
for (let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`
    }else{
        days += `<div>${i}</div>`;
    }
  
}

// Close the days container
days += "</div>";

daysEl.innerHTML = days;