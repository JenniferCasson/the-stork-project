const dueDate = new Date("2027-01-23");
const today = new Date();

const difference = dueDate - today;
const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));

document.getElementById("daysRemaining").textContent = daysRemaining;
const pregnancyLengthDays = 280;

const startDate = new Date(dueDate);
startDate.setDate(startDate.getDate() - pregnancyLengthDays);

const daysPregnant = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
const currentWeek = Math.floor(daysPregnant / 7);

document.getElementById("currentWeek").textContent = currentWeek;
const pregnancyLengthDays = 280;
const startDate = new Date(dueDate);
startDate.setDate(startDate.getDate() - pregnancyLengthDays);

const daysPregnant = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
const currentWeek = Math.floor(daysPregnant / 7);

document.getElementById("currentWeek").textContent = currentWeek;

const weeklyData = {
  14: {
    size: "lemon",
    bird: "a growing swallow chick",
    fact: "Baby can make tiny facial movements this week."
  },
  15: {
    size: "apple",
    bird: "a fledgling house sparrow",
    fact: "Baby’s skeleton is becoming more visible on scans."
  },
  16: {
    size: "avocado",
    bird: "a tiny puffin chick",
    fact: "Baby may start making small coordinated movements."
  },
  17: {
    size: "pear",
    bird: "a young robin",
    fact: "Baby is growing quickly and practising little movements."
  },
  18: {
    size: "sweet potato",
    bird: "a fluffy duckling",
    fact: "Baby’s hearing structures are developing."
  },
  19: {
    size: "mango",
    bird: "a small blackbird chick",
    fact: "Baby’s senses are continuing to develop."
  },
  20: {
    size: "banana",
    bird: "a very busy baby blue tit",
    fact: "This is around the halfway point of pregnancy."
  }
};

const thisWeek = weeklyData[currentWeek];

document.getElementById("babySize").textContent = thisWeek.size;
document.getElementById("birdComparison").textContent = thisWeek.bird;

document.getElementById("scienceFact").textContent = thisWeek.fact;
