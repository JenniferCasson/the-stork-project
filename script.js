const dueDate = new Date("2027-01-23T12:00:00");
const today = new Date();
const oneDay = 1000 * 60 * 60 * 24;
const pregnancyLengthDays = 280;

const startDate = new Date(dueDate);
startDate.setDate(startDate.getDate() - pregnancyLengthDays);

const daysRemaining = Math.ceil((dueDate - today) / oneDay);
const daysPregnant = Math.floor((today - startDate) / oneDay);
const currentWeek = Math.max(1, Math.min(40, Math.floor(daysPregnant / 7)));
const progressPercent = Math.max(
  0,
  Math.min(100, Math.round((daysPregnant / pregnancyLengthDays) * 100))
);

const weeklyData = {
  4: ["poppy seed", "the tiniest speck on a wren's egg", "Cells are rapidly dividing and beginning to specialise.", "Early foundations are being laid."],
  5: ["sesame seed", "a grain carried by a finch", "The neural tube continues forming.", "Set up a shared pregnancy calendar."],
  6: ["lentil", "a hummingbird's smallest crumb", "The developing heart is becoming more organised.", "Prepare an emergency snack station."],
  7: ["grape", "a small songbird egg", "Limb buds are beginning to form.", "Choose one household job to take off Mum's list."],
  8: ["raspberry", "a newly hatched wren", "Early facial features continue to develop.", "Record the first family field note."],
  9: ["cherry", "a tiny newly hatched finch", "Hands and feet are becoming more defined.", "Start a post-baby support list."],
  10: ["strawberry", "a baby blue tit", "Tooth buds are beginning to form beneath the gums.", "Plan one low-effort date night."],
  11: ["fig", "a growing robin chick", "Fingers and toes are becoming increasingly distinct.", "Plan a big-sibling moment for Cillian."],
  12: ["small lime", "a thrush egg", "Major organs and body structures are present and continue maturing.", "Celebrate the first-trimester milestone."],
  13: ["peach", "a young starling", "The second trimester is beginning.", "Take the first official field photograph."],
  14: ["lemon", "a growing swallow chick", "Baby can make tiny facial movements this week.", "Choose Baby's first birdwatching location."],
  15: ["apple", "a fledgling house sparrow", "Baby's skeleton is becoming more visible on scans.", "Save useful appointment and emergency contacts."],
  16: ["avocado", "a tiny puffin chick", "Baby may start making small coordinated movements.", "Create the great baby-name shortlist."],
  17: ["pear", "a young robin", "Baby is growing quickly and practising little movements.", "Choose one thing that makes daily life easier."],
  18: ["sweet potato", "a fluffy duckling", "Baby's hearing structures are developing.", "Find a big-sibling book for Cillian."],
  19: ["mango", "a small blackbird chick", "Baby's senses are continuing to develop.", "Check what can be reused from Baby Number One."],
  20: ["banana", "a very busy baby blue tit", "This is around the halfway point of pregnancy.", "Celebrate the halfway observation point."],
  21: ["carrot", "a growing duckling", "Baby's movements may become easier to notice.", "Choose one easy family meal for tired evenings."],
  22: ["papaya", "a young moorhen chick", "Baby is continuing to gain weight and practise movement.", "Review the useful baby kit list."],
  23: ["large mango", "a small owl chick", "The lungs are continuing to develop.", "Check travel and car-seat plans."],
  24: ["corn on the cob", "a fluffy gosling", "Baby's hearing is becoming more responsive.", "Keep appointment notes in one place."],
  25: ["cauliflower", "a young kestrel", "Baby is gaining more body fat.", "Start thinking about hospital bag snacks."],
  26: ["lettuce", "a growing heron chick", "The eyes are developing further.", "Make the bedroom a little more comfortable."],
  27: ["cabbage", "a young barn owl", "Baby is nearing the end of the second trimester.", "Talk through the post-baby support plan."],
  28: ["aubergine", "a sturdy puffin chick", "The third trimester begins around now.", "Review the final-trimester checklist."],
  29: ["butternut squash", "a growing gull chick", "Baby's muscles and lungs are continuing to mature.", "Make a plan for Cillian during appointments."],
  30: ["large cabbage", "a young swan cygnet", "Baby is putting on weight quickly.", "Start gathering hospital bag items."],
  31: ["coconut", "a well-fed duckling", "Baby's brain development continues rapidly.", "Make a tiny essentials list."],
  32: ["squash", "a fluffy goose chick", "Baby is practising breathing movements.", "Check key phone numbers and contacts."],
  33: ["pineapple", "a young cormorant", "Baby's bones are hardening, though the skull remains flexible.", "Check the hospital route and parking."],
  34: ["cantaloupe melon", "a growing swan cygnet", "Baby is continuing to build fat stores.", "Finish one useful outstanding job."],
  35: ["honeydew melon", "a nearly fledged blackbird", "Baby has less room but is still moving.", "Prepare one easy post-baby meal."],
  36: ["romaine lettuce", "a nearly ready fledgling", "Baby may begin moving lower into position.", "Check Mum, Baby, and birth-partner essentials."],
  37: ["Swiss chard", "a chick ready to leave the nest", "From 37 weeks, pregnancy is generally considered term.", "Keep bags ready and phones charged."],
  38: ["small pumpkin", "a fully feathered fledgling", "Baby is nearly ready for arrival.", "Check fuel, bags, childcare, contacts, and routes."],
  39: ["watermelon", "a fledgling waiting for the perfect moment", "Baby's organs are ready for life outside the womb.", "Keep the coming days flexible."],
  40: ["newborn baby", "a chick ready to hatch", "The due date is here, although babies often choose their own schedule.", "Await deployment. Baby controls the timetable."]
};

function getTrimester(week) {
  if (week <= 12) return "First trimester";
  if (week <= 27) return "Second trimester";
  return "Third trimester";
}

function getWeekData(week) {
  return weeklyData[week] || [
    "tiny mystery fruit",
    "a very small mystery hatchling",
    "Baby is busy growing.",
    "Continue supporting the research team."
  ];
}

function showWeek(week) {
  const data = getWeekData(week);
  const weekDetail = document.getElementById("weekDetail");

  weekDetail.innerHTML = `
    <h3>Week ${week}</h3>
    <p><strong>Size:</strong> ${data[0]}</p>
    <p><strong>Bird comparison:</strong> ${data[1]}</p>
    <p><strong>Science note:</strong> ${data[2]}</p>
    <p><strong>Mission:</strong> ${data[3]}</p>
  `;
}

const thisWeek = getWeekData(currentWeek);

document.getElementById("daysRemaining").textContent = daysRemaining;
document.getElementById("currentWeek").textContent = currentWeek;
document.getElementById("trimesterText").textContent = getTrimester(currentWeek);
document.getElementById("progressFill").style.width = progressPercent + "%";
document.getElementById("babySize").textContent = thisWeek[0];
document.getElementById("birdComparison").textContent = thisWeek[1];
document.getElementById("scienceFact").textContent = thisWeek[2];
document.getElementById("birdFact").textContent =
  "Bird fact: many chicks grow astonishingly quickly once hatched, which feels appropriate for this whole operation.";
document.getElementById("missionTitle").textContent = "Week " + currentWeek + " Mission";
document.getElementById("missionText").textContent = thisWeek[3];

const timeline = document.getElementById("timeline");

for (let week = 1; week <= 40; week++) {
  const button = document.createElement("button");
  button.className = "week-button";
  button.textContent = week;

  if (week < currentWeek) button.classList.add("past");
  if (week === currentWeek) button.classList.add("current");

  button.addEventListener("click", function () {
    showWeek(week);
  });

  timeline.appendChild(button);
}

showWeek(currentWeek);
