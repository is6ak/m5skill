const days = document.querySelector(".days");
const dateHeader = document.querySelector("#date");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const todayButton = document.querySelector("#today");

let currentDate = new Date(2025, 9);

function renderMonth() {
   days.innerHTML = "";

   const monthName = currentDate.toLocaleString("default", {
      month: "long"
   });
   const year = currentDate.getFullYear();
   dateHeader.textContent =
      `${monthName.charAt(0).toUpperCase()+monthName.slice(1)} ${year}`;

   let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
   if (firstDayOfMonth === 0) firstDayOfMonth = 7;
   const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
   const numberOfDays = lastDayOfMonth.getDate();

   for (let i = 0; i < firstDayOfMonth - 1; i++) {
      const empty = document.createElement("li");
      empty.classList.add("empty");
      days.appendChild(empty);
   }

   for (let i = 1; i <= numberOfDays; i++) {
      const day = document.createElement("li");
      day.classList.add("day");
      day.textContent = i;
      const today = new Date();
      if (
         i === today.getDate() &&
         currentDate.getMonth() === today.getMonth() &&
         currentDate.getFullYear() === today.getFullYear()
      ) {
         day.classList.add("today");
      }
      days.appendChild(day);
   }

   highlightCurrentWeek();
}

function nextMonth() {
   currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
   renderMonth();
}

function prevMonth() {
   currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
   renderMonth();
}

function gotoTodayMonth() {
   const t = new Date();
   currentDate = new Date(t.getFullYear(), t.getMonth());
   renderMonth();
}

function highlightCurrentWeek() {
   const today = new Date();
   const allDays = Array.from(document.querySelectorAll(".day"));
   allDays.forEach(d => d.classList.remove("week-highlight"));

   if (
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
   ) {
      const index = today.getDate() - 1;
      const weekRow = Math.floor((index + new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() - 1) / 7);
      const start = weekRow * 7;
      const end = start + 7;
      const cells = Array.from(document.querySelectorAll(".days li")).slice(start, end);
      cells.forEach(c => c.classList.add("week-highlight"));
   }
}

nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);
todayButton.addEventListener("click", gotoTodayMonth);

renderMonth();