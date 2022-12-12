const clockTitle = document.querySelector(".js-clock");

function dDay() {
  const eve = new Date("2022-12-25");
  const today = new Date();

  const re = eve - today;

  const reday = String(Math.floor(re / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const rehours = String(Math.floor((re / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const reminutes = String(Math.floor((re / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const reseconds = String(Math.floor((re / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${reday}d ${rehours}h ${reminutes}m ${reseconds}s`;
}

dDay();
setInterval(dDay, 1000);
