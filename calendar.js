const date = new Date();
const calculate = () => {
  date.setDate(1);
  console.log(date.getDate());
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
  let days = "";
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); //get last day of current month
  const monthDays = document.querySelector(".days");
  const firstDayIndex = date.getDay(); //get the index of starting day
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate(); //get last day of previous month
  console.log(firstDayIndex);
  console.log(prevLastDay);
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextdays = 7 - lastDayIndex - 1;
  for (let j = firstDayIndex; j > 0; j--) {
    days += `<div class="prev__date">${prevLastDay - j + 1}</div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  for (let x = 1; x <= nextdays; x++) {
    days += `<div class="next__date">${x}</div>`;
    monthDays.innerHTML = days;
  }
  // document.getElementById("home__calender__display__button").innerHTML = `${
  //   months[date.getMonth()]
  // } ${new Date().getDate()},${date.getFullYear()}`;
};
calculate();
document.querySelector(".prev__date").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  calculate();
});
document.querySelector(".next__date").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  calculate();
});

function calendar_display_handler() {
  var calendar_main_element = document.getElementById(
    "fd_1_divergents_2_calendar"
  );

  var calendar_parent = document.getElementById("fd_1_divergents_2");
  calendar_parent.addEventListener("mouseover", () => {
    calendar_main_element.style.visibility = "visible";
  });

  calendar_parent.addEventListener("mouseout", () => {
    calendar_main_element.style.visibility = "hidden";
  });
}

calendar_display_handler();
