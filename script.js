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

const babySizes = {
  14: "lemon",
  15: "apple",
  16: "avocado",
  17: "pear",
  18: "sweet potato",
  19: "mango",
  20: "banana"
};

const sizeThisWeek = babySizes[currentWeek] || "tiny mystery fruit";

document.getElementById("babySize").textContent = sizeThisWeek;

const birdComparisons = {
  14: "a growing swallow chick",
  15: "a fledgling house sparrow",
  16: "a tiny puffin chick",
  17: "a young robin",
  18: "a fluffy duckling",
  19: "a small blackbird chick",
  20: "a very busy baby blue tit"
};

const birdThisWeek = birdComparisons[currentWeek] || "a very small mystery hatchling";

document.getElementById("birdComparison").textContent = birdThisWeek;
