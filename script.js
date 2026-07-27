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
