const dueDate = new Date("2027-01-23");
const today = new Date();

const difference = dueDate - today;
const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));

document.getElementById("daysRemaining").textContent = daysRemaining;
