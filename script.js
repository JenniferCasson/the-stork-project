const dueDate = new Date("2027-01-23T12:00:00");
const capricornDeadline = new Date("2027-01-19T23:59:00");
const oneDay = 1000 * 60 * 60 * 24;
const pregnancyLengthDays = 280;

const produce = [
  "poppy seed", "sesame seed", "lentil", "grape", "raspberry", "cherry", "strawberry", "fig", "small lime",
  "peach", "lemon", "apple", "avocado", "pear", "sweet potato", "mango", "banana", "carrot", "papaya",
  "large mango", "corn on the cob", "cauliflower", "lettuce", "cabbage", "aubergine", "butternut squash",
  "large cabbage", "coconut", "squash", "pineapple", "cantaloupe melon", "honeydew melon", "romaine lettuce",
  "Swiss chard", "small pumpkin", "watermelon", "newborn baby"
];

const produceEmoji = ["🌱", "🌾", "🫘", "🍇", "🫐", "🍒", "🍓", "🍈", "🍋", "🍑", "🍋", "🍎", "🥑", "🍐", "🍠", "🥭", "🍌", "🥕", "🫒", "🥭", "🌽", "🥦", "🥬", "🥬", "🍆", "🎃", "🥬", "🥥", "🎃", "🍍", "🍈", "🍈", "🥬", "🥬", "🎃", "🍉", "👶"];

const birdNames = [
  "tiny hatchling", "finch crumb", "hummingbird crumb", "songbird egg", "newly hatched wren", "finch chick",
  "baby blue tit", "robin chick", "thrush egg", "young starling", "swallow chick", "house sparrow fledgling",
  "puffin chick", "young robin", "duckling", "blackbird chick", "busy blue tit", "duckling", "moorhen chick",
  "small owl chick", "gosling", "young kestrel", "heron chick", "barn owl", "puffin chick", "gull chick",
  "swan cygnet", "duckling", "goose chick", "young cormorant", "swan cygnet", "nearly fledged blackbird",
  "nearly ready fledgling", "chick ready to leave the nest", "fully feathered fledgling", "fledgling waiting",
  "chick ready to hatch"
];

const birdEmoji = ["🐣", "🐦", "🐤", "🥚", "🐦", "🐣", "🐦", "🐥", "🪺", "🐦", "🐤", "🐦", "🐧", "🐦", "🦆", "🐦", "🐦", "🦆", "🐥", "🦉", "🪿", "🦅", "🐤", "🦉", "🐧", "🐦", "🦢", "🦆", "🪿", "🐦", "🦢", "🐦", "🐥", "🐣", "🐦", "🐥", "🐣"];

const scienceNotes = [
  "Cells are rapidly dividing and beginning to specialise.",
  "Early heart structures are beginning to form.",
  "The neural tube is starting to develop.",
  "Limbs can move more freely.",
  "The placenta supports oxygen and nutrients.",
  "Hearing structures continue developing.",
  "Baby may start making small coordinated movements.",
  "The senses are continuing to develop.",
  "Baby is gaining weight and building strength.",
  "The third trimester is where the logistics department starts sweating."
];

const weirdBirdFacts = [
  "Puffins can hold several fish in their beak at once, which is exactly the snack-carrying energy required here.",
  "Barn owls fly almost silently because their feathers break up turbulence.",
  "Ducklings can communicate with their mother before they hatch - so geting talking to the bump just incase.",
  "Starlings can mimic machinery, phones and other birds, which feels like showing off.",
  "Some chicks call from inside the egg before hatching, presumably to comment on conditions.",
  "Kestrels can hover in one place while hunting, which is a skill the stork has not yet demonstrated.",
  "Young blackbirds often leave the nest before they can fly properly. Bold strategy - feels like a boy thing to do.",
  "Goslings imprint quickly, so the research team should prepare for strong opinions."
  "An ostrich's eye is bigger than its brain - Reminds me of this big bird enthusiast..."
  "Most birds have hollow bones to help reduce weight for flight."
  "Some vultures cool themselves off by urinating on their own legs - Such a boy thing to do"  
  "Pigeons can recognize themselves in mirrors - Research team is unsure how this was tested."
];

const missions = [
  "Keep snack levels stable across all departments.",
  "Review whether Baby has acknowledged the Capricorn memo.",
  "Inspect all Cillian entertainment supplies.",
  "Ask the Bird Department for an unnecessarily specific comparison.",
  "Confirm Mum has had food, peace and a good book.",
  "Check whether the stork is going to be on time."
];

function pregnancyState() {
  const now = new Date();
  const todayNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
  const startDate = new Date(dueDate);
  startDate.setDate(startDate.getDate() - pregnancyLengthDays);

  const daysPregnant = Math.max(0, Math.min(280, Math.floor((todayNoon - startDate) / oneDay)));
  const daysRemaining = Math.max(0, Math.ceil((dueDate - todayNoon) / oneDay));
  const currentWeek = Math.max(4, Math.min(40, Math.floor(daysPregnant / 7)));
  const weekDay = daysPregnant % 7;
  const progress = Math.max(0, Math.min(100, Math.round((daysPregnant / pregnancyLengthDays) * 100)));

  return { daysPregnant, daysRemaining, currentWeek, weekDay, progress };
}

function trimester(week) {
  if (week <= 12) return "First trimester";
  if (week <= 27) return "Second trimester";
  return "Third trimester";
}

function weekData(week) {
  const index = Math.max(0, Math.min(produce.length - 1, week - 4));
  return {
    week,
    item: produce[index],
    emoji: produceEmoji[index],
    bird: birdNames[index],
    birdIcon: birdEmoji[index],
    size: week < 12 ? "Very small, very busy." : week < 28 ? "Growing fast and getting more coordinated." : "Increasingly ready for the outside world.",
    science: scienceNotes[(week - 4) % scienceNotes.length],
    birdFact: weirdBirdFacts[(week - 4) % weirdBirdFacts.length],
    mission: missions[(week - 4) % missions.length]
  };
}

function routeMessage(progress) {
  if (progress < 25) return "The stork is still reviewing the flight plan.";
  if (progress < 50) return "The stork has left the depot with snacks, paperwork and questionable confidence.";
  if (progress < 75) return "The stork is airborne. Weather: dramatic. Confidence: improving.";
  if (progress < 95) return "Final approach is being discussed in a very serious meeting.";
  return "The stork is circling overhead. Baby remains in charge of final scheduling.";
}

function capricornMessage() {
  const days = Math.max(0, Math.ceil((capricornDeadline - new Date()) / oneDay));

  if (days > 0) {
    return {
      title: `${days} days of Capricorn possibility`,
      text: "The research team is gently lobbying Baby for a Capricorn arrival before the 19 January deadline. Baby has not yet acknowledged the memo."
    };
  }

  return {
    title: "Capricorn negotiations closed",
    text: "The 19 January deadline has passed. The memo was sent. Baby retained full executive control."
  };
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setHTML(id, value) {
  const element = document.getElementById(id);
  if (element) element.innerHTML = value;
}

function setLeft(id, value) {
  const element = document.getElementById(id);
  if (element) element.style.left = value;
}

function setWidth(id, value) {
  const element = document.getElementById(id);
  if (element) element.style.width = value;
}

function renderScience(startIndex = 0) {
  const facts = [0, 1, 2].map(offset => scienceNotes[(startIndex + offset) % scienceNotes.length]);
  setHTML("scienceFacts", facts
    .map((fact, index) => `<div class="fact-item"><span>${["🧠", "❤️", "🦴"][index]}</span><p>${fact}</p></div>`)
    .join(""));
}

function showWeek(week) {
  const data = weekData(week);

  setHTML("weekDetail", `
    <div class="week-detail-layout">
      <div class="week-badge">
        <div>
          <span>${data.emoji}</span>
          <strong>Week ${week}</strong>
        </div>
      </div>
      <div class="week-notes">
        <p><strong>Produce scale:</strong> ${data.item}</p>
        <p><strong>Bird comparison:</strong> ${data.bird}</p>
        <p><strong>Mum note:</strong> ${data.science}</p>
        <p><strong>Dad fact:</strong> ${data.birdFact}</p>
        <p><strong>Mission:</strong> ${data.mission}</p>
      </div>
    </div>
  `);

  document.querySelectorAll(".week-button").forEach(button => {
    button.classList.toggle("selected", Number(button.dataset.week) === week);
  });
}

function renderTimeline(currentWeek) {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;
  timeline.innerHTML = "";

  for (let week = 1; week <= 40; week++) {
    const data = weekData(Math.max(4, week));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "week-button";
    button.dataset.week = week;
    button.innerHTML = `<span>${data.emoji}</span>${week}`;

    if (week < currentWeek) button.classList.add("past");
    if (week === currentWeek) button.classList.add("current");

    button.addEventListener("click", () => showWeek(week));
    timeline.appendChild(button);
  }
}

function renderPage() {
  const state = pregnancyState();
  const data = weekData(state.currentWeek);
  const capricorn = capricornMessage();

  setText("daysRemaining", state.daysRemaining.toLocaleString("en-GB"));
  setText("daysRemainingSmall", state.daysRemaining.toLocaleString("en-GB"));
  setText("daysCompleted", state.daysPregnant.toLocaleString("en-GB"));
  setText("currentWeek", state.currentWeek);
  setText("trimesterText", trimester(state.currentWeek));
  setText("weekDayText", `Week ${state.currentWeek} + ${state.weekDay} days`);
  setWidth("pregnancyProgress", `${state.progress}%`);
  setText("progressText", `${state.progress}% of the estimated 40-week migration complete`);
  setText("capricornTitle", capricorn.title);
  setText("capricornText", capricorn.text);
  setText("sizeEmoji", data.emoji);
  setText("sizeName", data.item);
  setText("sizeDescription", `This week, Baby is approximately the size of a ${data.item}. ${data.size}`);
  setText("birdEmoji", data.birdIcon);
  setText("birdName", data.bird);
  setText("birdComparison", "Baby is currently being compared with an appropriately sized member of the bird kingdom.");
  setText("birdFact", data.birdFact);
  setText("routeTitle", `Route progress: ${state.progress}%`);
  setText("routeMessage", routeMessage(state.progress));
  setLeft("storkMarker", `${state.progress}%`);
  setLeft("countdownWingMarker", `${state.progress}%`);

  renderScience(state.currentWeek);
  renderTimeline(state.currentWeek);
  showWeek(state.currentWeek);
}

function openCapricornModal() {
  const modal = document.getElementById("capricornModal");
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeCapricornModal() {
  const modal = document.getElementById("capricornModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function initialisePage() {
  renderPage();

  const countdownCard = document.getElementById("countdownCard");
  if (countdownCard) {
    countdownCard.addEventListener("click", event => {
      const card = event.currentTarget;
      const countdownSecret = document.getElementById("countdownSecret");

      card.classList.toggle("is-open");
      card.setAttribute("aria-expanded", card.classList.contains("is-open"));

      if (countdownSecret) {
        countdownSecret.textContent = card.classList.contains("is-open")
          ? "Classified update: the stork is legally refusing to guarantee punctuality."
          : "Tap to reveal classified countdown intelligence.";
      }
    });
  }

  let memoCount = 0;
  const negotiateButton = document.getElementById("negotiateButton");
  if (negotiateButton) {
    negotiateButton.addEventListener("click", () => {
      const replies = [
        "Memo sent. Baby has marked it as low priority.",
        "Follow-up sent. Baby's office replied with a single kick.",
        "Capricorn proposal escalated to senior womb management.",
        "Baby remains unavailable for comment."
      ];
      const capricornReply = document.getElementById("capricornReply");

      if (capricornReply) capricornReply.textContent = replies[memoCount % replies.length];
      memoCount += 1;
      openCapricornModal();
    });
  }

  const closeCapricornModalButton = document.getElementById("closeCapricornModal");
  if (closeCapricornModalButton) closeCapricornModalButton.addEventListener("click", closeCapricornModal);

  const capricornModal = document.getElementById("capricornModal");
  if (capricornModal) {
    capricornModal.addEventListener("click", event => {
      if (event.target.id === "capricornModal") closeCapricornModal();
    });
  }

  const routeButton = document.getElementById("routeButton");
  if (routeButton) {
    routeButton.addEventListener("click", () => {
      const updates = [
        "The stork has requested a snack break and a clearer weather report.",
        "Route control confirms mild confusion but excellent vibes.",
        "The stork says everything is under control, which is exactly what a stork would say.",
        "Nest coordinates confirmed. Arrival date still classified by Baby."
      ];
      const routeMessageElement = document.getElementById("routeMessage");
      if (routeMessageElement) routeMessageElement.textContent = updates[Math.floor(Math.random() * updates.length)];
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialisePage);
} else {
  initial
