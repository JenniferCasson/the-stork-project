const dueDate = new Date("2027-01-23T12:00:00");
const oneDay = 1000 * 60 * 60 * 24;
const pregnancyLengthDays = 280;

const weeklyData = {
  4: { sizeEmoji: "🌱", size: "poppy seed", description: "Approximately 2 mm long.", birdEmoji: "🥚", bird: "a speck on a wren's egg", science: ["🧬 Cells are rapidly dividing and beginning to specialise.", "🫀 Early heart structures are beginning to form.", "🧠 The neural tube is starting to develop."], birdFact: "Wrens are tiny but astonishingly loud for their size.", mission: "Start the official baby research notebook." },
  5: { sizeEmoji: "🌾", size: "sesame seed", description: "Only a few millimetres long.", birdEmoji: "🐦", bird: "a grain carried by a finch", science: ["🧠 The neural tube continues forming.", "🫀 The primitive heart structure is developing.", "🧫 Cells are organising into early body systems."], birdFact: "Finch beaks are shaped by diet, habitat and generations of adaptation.", mission: "Set up a shared pregnancy calendar." },
  6: { sizeEmoji: "🫘", size: "lentil", description: "Approximately 5 to 6 mm long.", birdEmoji: "🐤", bird: "a hummingbird's smallest crumb", science: ["🫀 Cardiac activity may be visible on ultrasound.", "🧠 Early brain regions are forming.", "🦴 Limb buds are beginning to appear."], birdFact: "A hummingbird's heart can beat more than 1,000 times per minute in flight.", mission: "Prepare an emergency snack station." },
  7: { sizeEmoji: "🍇", size: "grape", description: "Approximately 10 mm long.", birdEmoji: "🥚", bird: "a small songbird egg", science: ["🧠 Brain and spinal cord development is rapid.", "🦵 Limb buds are lengthening.", "🫁 Major organ foundations continue developing."], birdFact: "Many songbirds hatch helpless and rely completely on their parents.", mission: "Remove one recurring job from Mum's list." },
  8: { sizeEmoji: "🫐", size: "raspberry", description: "Approximately 16 mm long.", birdEmoji: "🐦", bird: "a newly hatched wren", science: ["👶 Baby is increasingly recognisable as a tiny human form.", "🦵 Arms and legs are lengthening.", "👁️ Early facial features continue forming."], birdFact: "Wrens often build several nests before choosing the winning site.", mission: "Create the first family field note." },
  9: { sizeEmoji: "🍒", size: "cherry", description: "Approximately 22 mm long.", birdEmoji: "🐣", bird: "a tiny newly hatched finch", science: ["🖐️ Hands and feet are becoming more defined.", "🫀 Major organs continue maturing.", "👁️ Eyes, nose and mouth continue taking shape."], birdFact: "Finch chicks hatch with limited movement and need intensive parental care.", mission: "Start a post-baby support list." },
  10: { sizeEmoji: "🍓", size: "strawberry", description: "Approximately 30 mm long.", birdEmoji: "🐦", bird: "a baby blue tit", science: ["🦴 Cartilage is beginning to become bone.", "🦷 Tooth buds are forming beneath the gums.", "🧠 Nerve and muscle connections are increasing."], birdFact: "Blue tit parents can make hundreds of feeding trips a day.", mission: "Plan one low-effort date night." },
  11: { sizeEmoji: "🍈", size: "fig", description: "Approximately 4 cm long.", birdEmoji: "🐥", bird: "a growing robin chick", science: ["🖐️ Fingers and toes are separating.", "🫀 Blood vessels continue spreading through the body.", "🦵 Small movements are possible, though not usually felt."], birdFact: "Robins are famously territorial and often defend their patch year-round.", mission: "Plan a big-sibling moment for Cillian." },
  12: { sizeEmoji: "🍋", size: "small lime", description: "Approximately 5 to 6 cm long.", birdEmoji: "🪺", bird: "a thrush egg", science: ["🧠 Reflexes are developing.", "🦴 The skeleton continues strengthening.", "🫀 Major organs are present and maturing."], birdFact: "Song thrush eggs are blue with dark speckles.", mission: "Celebrate the first-trimester milestone." },
  13: { sizeEmoji: "🍑", size: "peach", description: "Approximately 7 cm long.", birdEmoji: "🐦", bird: "a young starling", science: ["🦴 Bones continue strengthening.", "🖐️ Fingerprints begin their unique patterning.", "🫃 The second trimester begins."], birdFact: "Starlings can mimic other birds, machinery and human-made sounds.", mission: "Take the first official field photograph." },
  14: { sizeEmoji: "🍋", size: "lemon", description: "Approximately 8 to 9 cm long.", birdEmoji: "🐤", bird: "a growing swallow chick", science: ["🙂 Facial muscles can make tiny movements.", "🦵 Limbs can move more freely.", "🫀 The placenta supports oxygen and nutrients."], birdFact: "Swallows migrate thousands of miles between Europe and southern Africa.", mission: "Choose Baby's first birdwatching location." },
  15: { sizeEmoji: "🍎", size: "apple", description: "Approximately 10 cm long.", birdEmoji: "🐦", bird: "a fledgling house sparrow", science: ["👂 Hearing structures continue developing.", "🦴 The skeleton is becoming more visible on scans.", "🩸 Blood-forming systems are developing."], birdFact: "House sparrows are highly social and often nest near people.", mission: "Save useful appointment and emergency contacts." },
  16: { sizeEmoji: "🥑", size: "avocado", description: "Approximately 11 to 12 cm long.", birdEmoji: "🐧", bird: "a tiny puffin chick", science: ["🦵 Movements are becoming more coordinated.", "👁️ Eyes can make small movements.", "🦴 Muscles and bones continue developing."], birdFact: "Puffins carry several fish at once using spines inside their beaks.", mission: "Create the great baby-name shortlist." },
  17: { sizeEmoji: "🍐", size: "pear", description: "Approximately 13 cm long.", birdEmoji: "🐦", bird: "a young robin", science: ["🧠 Nervous system connections are increasing.", "🦴 Bone tissue continues hardening.", "👶 Baby is gaining length and strength."], birdFact: "Young robins have speckled brown feathers before getting a red breast.", mission: "Choose one thing that makes daily life easier." },
  18: { sizeEmoji: "🍠", size: "sweet potato", description: "Approximately 14 cm long.", birdEmoji: "🦆", bird: "a fluffy duckling", science: ["👂 Hearing is developing.", "🦵 Movement may become noticeable soon.", "🧠 Sensory pathways are maturing."], birdFact: "Ducklings can walk and swim soon after hatching.", mission: "Find a big-sibling book for Cillian." },
  19: { sizeEmoji: "🥭", size: "mango", description: "Approximately 15 cm long.", birdEmoji: "🐦", bird: "a small blackbird chick", science: ["🧴 Vernix begins helping protect the skin.", "👂 Baby may respond to sounds.", "🧠 The senses continue developing."], birdFact: "Blackbirds have rich alarm calls that warn other birds of danger.", mission: "Check what can be reused from Baby Number One." },
  20: { sizeEmoji: "🍌", size: "banana", description: "Around the halfway mark.", birdEmoji: "🐦", bird: "a very busy baby blue tit", science: ["📡 This is around the halfway point.", "🦵 Movements may become clearer.", "👶 Growth continues rapidly."], birdFact: "Blue tits time nesting so chicks hatch when caterpillars are abundant.", mission: "Celebrate the halfway observation point." },
  21: { sizeEmoji: "🥕", size: "carrot", description: "Long and growing steadily.", birdEmoji: "🦆", bird: "a growing duckling", science: ["🧠 Sleep-wake patterns may begin.", "🦵 Kicks and rolls can become stronger.", "🩸 Blood production continues."], birdFact: "Ducklings communicate with their mother before they hatch.", mission: "Choose one easy family meal for tired evenings." },
  22: { sizeEmoji: "🫒", size: "papaya", description: "Gaining weight steadily.", birdEmoji: "🐥", bird: "a young moorhen chick", science: ["👁️ Eyelids and eyes keep developing.", "👂 Sound responses increase.", "🫁 Lung development continues."], birdFact: "Moorhen chicks have huge feet that help them clamber through waterside plants.", mission: "Review the useful baby kit list." },
  23: { sizeEmoji: "🥭", size: "large mango", description: "Growing longer and stronger.", birdEmoji: "🦉", bird: "a small owl chick", science: ["🫁 Lungs are developing important structures.", "👶 Baby is gaining weight.", "🧠 Brain growth continues."], birdFact: "Owl chicks often hatch at different times, so siblings can be very different sizes.", mission: "Check travel and car-seat plans." },
  24: { sizeEmoji: "🌽", size: "corn on the cob", description: "A proper little cob-sized passenger.", birdEmoji: "🪿", bird: "a fluffy gosling", science: ["👂 Hearing is more responsive.", "🫁 Lungs keep maturing.", "👶 Baby is building body fat."], birdFact: "Goslings learn family calls quickly and stay close to their parents.", mission: "Keep appointment notes in one place." },
  25: { sizeEmoji: "🥦", size: "cauliflower", description: "More compact than scientific equipment.", birdEmoji: "🦅", bird: "a young kestrel", science: ["👶 Baby is gaining more fat.", "🧠 Brain and nervous system continue maturing.", "🦵 Movement patterns may be familiar."], birdFact: "Kestrels can hover almost motionless while hunting.", mission: "Start thinking about hospital bag snacks." },
  26: { sizeEmoji: "🥬", size: "lettuce", description: "Leafy, but considerably more opinionated.", birdEmoji: "🐤", bird: "a growing heron chick", science: ["👁️ Eyes are developing further.", "🫁 Breathing movements continue.", "👂 Sounds may be recognised."], birdFact: "Heron chicks grow rapidly and can look spectacularly untidy.", mission: "Make the bedroom a little more comfortable." },
  27: { sizeEmoji: "🥬", size: "cabbage", description: "A serious cabbage-stage project.", birdEmoji: "🦉", bird: "a young barn owl", science: ["🧠 Brain activity is becoming more complex.", "🫁 Lungs are still maturing.", "👶 The second trimester is nearly complete."], birdFact: "Barn owls fly almost silently because of specialised feather edges.", mission: "Talk through the post-baby support plan." },
  28: { sizeEmoji: "🍆", size: "aubergine", description: "Third-trimester vegetable status achieved.", birdEmoji: "🐧", bird: "a sturdy puffin chick", science: ["🫃 The third trimester begins.", "👁️ Eyes may open and close.", "🧠 Brain growth continues rapidly."], birdFact: "Pufflings leave their burrows at night and head out to sea.", mission: "Review the final-trimester checklist." },
  29: { sizeEmoji: "🎃", size: "butternut squash", description: "Long, solid and increasingly impressive.", birdEmoji: "🐦", bird: "a growing gull chick", science: ["🫁 Muscles and lungs continue maturing.", "👶 Baby is gaining weight.", "🧠 Brain folds become more developed."], birdFact: "Gull chicks are excellent at demanding snacks with theatrical urgency.", mission: "Make a plan for Cillian during appointments." },
  30: { sizeEmoji: "🥬", size: "large cabbage", description: "Cabbage, but advanced.", birdEmoji: "🦢", bird: "a young swan cygnet", science: ["👶 Baby is putting on weight quickly.", "🧠 Brain development continues.", "🦴 Bones strengthen further."], birdFact: "Cygnets often ride on a parent's back when small.", mission: "Start gathering hospital bag items." },
  31: { sizeEmoji: "🥥", size: "coconut", description: "Compact, round and very much in progress.", birdEmoji: "🦆", bird: "a well-fed duckling", science: ["🧠 Brain development continues rapidly.", "🫁 Breathing practice continues.", "👶 Baby is gaining fat stores."], birdFact: "Ducklings follow movement and sound cues from their mother.", mission: "Make a tiny essentials list." },
  32: { sizeEmoji: "🎃", size: "squash", description: "Nest preparation season has begun.", birdEmoji: "🪿", bird: "a fluffy goose chick", science: ["🫁 Baby is practising breathing movements.", "🦵 Movements may feel bigger but less roomy.", "👶 Growth continues steadily."], birdFact: "Geese are famously protective parents.", mission: "Check key phone numbers and contacts." },
  33: { sizeEmoji: "🍍", size: "pineapple", description: "Spiky comparison, soft baby.", birdEmoji: "🐦", bird: "a young cormorant", science: ["🦴 Bones are hardening.", "👶 The skull remains flexible for birth.", "🧠 Brain growth continues."], birdFact: "Cormorants often spread their wings to dry after diving.", mission: "Check the hospital route and parking." },
  34: { sizeEmoji: "🍈", size: "cantaloupe melon", description: "Melon-level seriousness.", birdEmoji: "🦢", bird: "a growing swan cygnet", science: ["👶 Baby continues building fat stores.", "🫁 Lungs keep maturing.", "🧠 Sleep cycles may be more distinct."], birdFact: "Swans form strong pair bonds and are attentive parents.", mission: "Finish one useful outstanding job." },
  35: { sizeEmoji: "🍈", size: "honeydew melon", description: "A sizeable passenger.", birdEmoji: "🐦", bird: "a nearly fledged blackbird", science: ["👶 There is less room, but movement continues.", "🧠 Brain and body keep maturing.", "🫁 Lungs are close to readiness."], birdFact: "Young blackbirds leave the nest before they can fly perfectly.", mission: "Prepare one easy post-baby meal." },
  36: { sizeEmoji: "🥬", size: "romaine lettuce", description: "Long, leafy and nearly ready.", birdEmoji: "🐥", bird: "a nearly ready fledgling", science: ["👶 Baby may begin moving lower.", "🫁 Lungs are nearly mature.", "🦵 Movements may feel different as space tightens."], birdFact: "Fledglings often spend days on the ground while parents keep feeding them.", mission: "Check Mum, Baby and birth-partner essentials." },
  37: { sizeEmoji: "🥬", size: "Swiss chard", description: "Officially term territory.", birdEmoji: "🐣", bird: "a chick ready to leave the nest", science: ["🐣 From 37 weeks, pregnancy is generally considered term.", "👶 Baby continues gaining weight.", "🧠 Final development continues."], birdFact: "Many chicks communicate with parents from inside the egg before hatching.", mission: "Keep bags ready and phones charged." },
  38: { sizeEmoji: "🎃", size: "small pumpkin", description: "Pumpkin watch has begun.", birdEmoji: "🐦", bird: "a fully feathered fledgling", science: ["👶 Baby is nearly ready for arrival.", "🫁 Organs are mature enough for life outside.", "🧠 Brain growth continues after birth too."], birdFact: "Fledging is a process, not a single neat moment.", mission: "Check fuel, bags, childcare, contacts and routes." },
  39: { sizeEmoji: "🍉", size: "watermelon", description: "The classic final boss of fruit comparisons.", birdEmoji: "🐥", bird: "a fledgling waiting for the perfect moment", science: ["👶 Baby's organs are ready for life outside the womb.", "🧠 Baby keeps building brain connections.", "🫀 The placenta continues supporting Baby until birth."], birdFact: "Some birds delay leaving the nest until conditions feel right. Baby may sympathise.", mission: "Keep the coming days flexible." },
  40: { sizeEmoji: "👶", size: "newborn baby", description: "The research subject is ready for publication.", birdEmoji: "🐣", bird: "a chick ready to hatch", science: ["🎉 The due date is here.", "👶 Due dates are estimates, not appointments.", "❤️ The research team is ready whenever Baby is."], birdFact: "Hatching, fledging and arriving all happen on the baby's schedule.", mission: "Await deployment. Baby controls the timetable." }
};

function pregnancyState() {
  const now = new Date();
  const todayNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
  const startDate = new Date(dueDate);
  startDate.setDate(startDate.getDate() - pregnancyLengthDays);

  const rawDaysPregnant = Math.floor((todayNoon - startDate) / oneDay);
  const daysPregnant = Math.max(0, Math.min(pregnancyLengthDays, rawDaysPregnant));
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

function routeMessage(progress) {
  if (progress < 20) return "The stork is checking the nest coordinates and pretending this was the plan all along.";
  if (progress < 40) return "The stork has left the depot with snacks, paperwork and questionable confidence.";
  if (progress < 60) return "Halfway-ish through the route. The stork is now accepting weather updates and biscuits.";
  if (progress < 80) return "The delivery zone is on the horizon. Nest logistics are becoming increasingly serious.";
  if (progress < 95) return "Final approach. The stork is circling overhead and refusing to give a precise ETA.";
  return "The stork is basically at the door. Baby remains in charge of final scheduling.";
}

function capricornMessage() {
  const capricornCutoff = new Date("2027-01-19T23:59:00");
  const daysToCapricornCutoff = Math.ceil((capricornCutoff - new Date()) / oneDay);

  if (daysToCapricornCutoff > 0) {
    return {
      title: `${daysToCapricornCutoff} days of Capricorn possibility`,
      text: "The research team is gently lobbying Baby for a Capricorn arrival. Baby has not yet acknowledged the memo."
    };
  }

  return {
    title: "Capricorn window has closed",
    text: "The negotiations were heartfelt. Baby, naturally, has retained full executive control."
  };
}

function showWeek(week) {
  const data = weeklyData[week] || weeklyData[4];
  const detail = document.getElementById("weekDetail");

  detail.innerHTML = `
    <h3>Week ${week} Field Report</h3>
    <div class="week-detail-grid">
      <p><strong>${data.sizeEmoji} Size:</strong> ${data.size} - ${data.description}</p>
      <p><strong>${data.birdEmoji} Bird:</strong> ${data.bird}</p>
      <p><strong>🔬 Abi's note:</strong> ${data.science[0]}</p>
      <p><strong>🪶 Bird fact:</strong> ${data.birdFact}</p>
      <p><strong>🎯 Mission:</strong> ${data.mission}</p>
      <p><strong>🪽 Stork status:</strong> ${routeMessage(Math.round((week / 40) * 100))}</p>
    </div>
  `;
}

function renderTimeline(currentWeek) {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";

  for (let week = 1; week <= 40; week++) {
    const button = document.createElement("button");
    const data = weeklyData[week] || { sizeEmoji: "🌱" };

    button.type = "button";
    button.className = "week-button";
    button.innerHTML = `<span>${data.sizeEmoji}</span>${week}`;

    if (week < currentWeek) button.classList.add("past");
    if (week === currentWeek) button.classList.add("current");

    button.addEventListener("click", () => showWeek(week));
    timeline.appendChild(button);
  }
}

function renderPage() {
  const state = pregnancyState();
  const data = weeklyData[state.currentWeek] || weeklyData[4];
  const capricorn = capricornMessage();

  document.getElementById("daysRemaining").textContent = state.daysRemaining.toLocaleString("en-GB");
  document.getElementById("currentWeek").textContent = state.currentWeek;
  document.getElementById("trimesterText").textContent = trimester(state.currentWeek);
  document.getElementById("weekDayText").textContent = `Week ${state.currentWeek} + ${state.weekDay} days`;
  document.getElementById("pregnancyProgress").style.width = `${state.progress}%`;
  document.getElementById("progressText").textContent = `${state.progress}% of the estimated 40-week migration complete`;

  document.getElementById("sizeEmoji").textContent = data.sizeEmoji;
  document.getElementById("sizeName").textContent = data.size;
  document.getElementById("sizeDescription").textContent = data.description;
  document.getElementById("birdEmoji").textContent = data.birdEmoji;
  document.getElementById("birdName").textContent = data.bird;
  document.getElementById("birdComparison").textContent = "A carefully peer-reviewed comparison from the Bird Expert's department.";
  document.getElementById("birdFact").textContent = data.birdFact;

  document.getElementById("scienceFacts").innerHTML = data.science
    .map(fact => `<div class="fact-item"><span>${fact.slice(0, 2)}</span><p>${fact.slice(3)}</p></div>`)
    .join("");

  document.getElementById("routeTitle").textContent = `Route progress: ${state.progress}%`;
  document.getElementById("routeMessage").textContent = routeMessage(state.progress);
  document.getElementById("storkMarker").style.left = `${state.progress}%`;

  document.getElementById("capricornTitle").textContent = capricorn.title;
  document.getElementById("capricornText").textContent = capricorn.text;

  renderTimeline(state.currentWeek);
  showWeek(state.currentWeek);
}

document.getElementById("randomWeekButton").addEventListener("click", () => {
  const week = Math.floor(Math.random() * 37) + 4;
  showWeek(week);
});

renderPage();
