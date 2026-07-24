"use strict";

const DUE_DATE = new Date("2027-01-23T12:00:00");
const PREGNANCY_LENGTH_DAYS = 280;
const DAY_IN_MS = 86400000;
const weekData = window.STORK_WEEK_DATA || {};

const keys = {
    missions: "storkProjectWeeklyMissionsV2",
    memories: "storkProjectWeeklyMemoriesV2",
    reviewed: "storkProjectReviewedWeeksV2"
};

let selectedReviewWeek = null;

const $ = id => document.getElementById(id);
const elements = {
    currentWeek: $("currentWeek"), trimesterBadge: $("trimesterBadge"),
    sizeEmoji: $("sizeEmoji"), sizeName: $("sizeName"), sizeDescription: $("sizeDescription"),
    birdEmoji: $("birdEmoji"), birdName: $("birdComparisonName"), birdText: $("birdComparisonText"),
    scienceFacts: $("scienceFacts"), birdFact: $("birdFact"), mumFact: $("mumFact"), dadFact: $("dadFact"),
    missionHeading: $("missionHeading"), missionDescription: $("missionDescription"), missionCheckbox: $("weeklyMissionCheckbox"),
    daysRemaining: $("daysRemaining"), progressFill: $("countdownProgressFill"), pregnancyPercentage: $("pregnancyPercentage"),
    stork: $("storkTraveller"), storkMessage: $("storkMessage"), weekStatistic: $("weekStatistic"),
    daysCompleted: $("daysCompleted"), daysRemainingStatistic: $("daysRemainingStatistic"),
    trimesterStatistic: $("trimesterStatistic"), starSign: $("starSign"),
    milestoneIcon: $("milestoneIcon"), milestoneTitle: $("milestoneTitle"), milestoneDescription: $("milestoneDescription"),
    weekTimeline: $("weekTimeline"), weeklyMemory: $("weeklyMemory"), saveMemoryButton: $("saveMemoryButton"),
    memorySavedMessage: $("memorySavedMessage"), canvas: $("celebrationCanvas"),
    reviewModal: $("weekReviewModal"), closeReview: $("closeWeekReviewButton"), reviewTitle: $("weekReviewTitle"),
    reviewSizeEmoji: $("weekReviewSizeEmoji"), reviewSizeName: $("weekReviewSizeName"),
    reviewSizeDescription: $("weekReviewSizeDescription"), reviewBirdEmoji: $("weekReviewBirdEmoji"),
    reviewBirdName: $("weekReviewBirdName"), reviewBirdText: $("weekReviewBirdText"),
    reviewFacts: $("weekReviewFacts"), reviewBirdFact: $("weekReviewBirdFact"), reviewedCheckbox: $("weekReviewedCheckbox")
};

function readStore(key) {
    try { return JSON.parse(localStorage.getItem(key) || "{}"); }
    catch { return {}; }
}
function writeStore(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function pregnancyState() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
    const start = new Date(DUE_DATE.getTime() - PREGNANCY_LENGTH_DAYS * DAY_IN_MS);
    const rawCompleted = Math.floor((today - start) / DAY_IN_MS);
    const completed = Math.max(0, Math.min(280, rawCompleted));
    const remaining = Math.max(0, Math.ceil((DUE_DATE - today) / DAY_IN_MS));
    const week = Math.max(1, Math.min(40, Math.floor(completed / 7)));
    const weekDay = Math.max(0, completed % 7);
    const percentage = Math.round((completed / 280) * 100);
    return { completed, remaining, week, weekDay, percentage };
}
function trimester(week) {
    return week <= 12 ? "First trimester" : week <= 27 ? "Second trimester" : "Third trimester";
}
function weekInfo(week) {
    if (weekData[week]) return weekData[week];
    const available = Object.keys(weekData).map(Number);
    const nearest = available.reduce((a, b) => Math.abs(b-week) < Math.abs(a-week) ? b : a, 4);
    return weekData[nearest];
}

const milestones = [
    [12,"🔬","First-trimester research complete","The first major phase of development is approaching completion."],
    [20,"📡","Halfway observation point","The 20-week milestone and anatomy scan period are approaching."],
    [28,"🪶","Third trimester begins","The final major phase of the pregnancy migration is approaching."],
    [32,"🪹","Nest preparation phase","Check equipment, hospital plans and family logistics."],
    [36,"🧳","Hospital bag readiness","Key bags, notes and contact details should be readily accessible."],
    [37,"🐣","Term pregnancy","From 37 completed weeks, pregnancy is generally described as term."],
    [40,"🕊️","Estimated hatching week","The due date is approaching, although Baby controls the publication schedule."]
];

function render() {
    const state = pregnancyState();
    const info = weekInfo(state.week);
    const tri = trimester(state.week);

    elements.currentWeek.textContent = `${state.week} + ${state.weekDay} days`;
    elements.trimesterBadge.textContent = tri;
    elements.sizeEmoji.textContent = info.sizeEmoji;
    elements.sizeName.textContent = info.sizeName;
    elements.sizeDescription.textContent = info.sizeDescription;
    elements.birdEmoji.textContent = info.birdEmoji;
    elements.birdName.textContent = info.birdName;
    elements.birdText.textContent = info.birdText;
    elements.birdFact.textContent = info.birdFact;
    elements.mumFact.textContent = info.mumFact;
    elements.dadFact.textContent = info.dadFact;

    elements.scienceFacts.innerHTML = info.facts.map(([icon,title,text]) => `
        <article class="fact-card"><span class="fact-icon">${icon}</span>
        <div><h3>${title}</h3><p>${text}</p></div></article>`).join("");

    elements.missionHeading.textContent = info.mission;
    elements.missionDescription.textContent = info.missionDescription;
    elements.missionCheckbox.checked = Boolean(readStore(keys.missions)[state.week]);

    elements.daysRemaining.textContent = state.remaining.toLocaleString("en-GB");
    elements.daysRemainingStatistic.textContent = state.remaining.toLocaleString("en-GB");
    elements.daysCompleted.textContent = state.completed.toLocaleString("en-GB");
    elements.progressFill.style.width = `${state.percentage}%`;
    elements.pregnancyPercentage.textContent = `${state.percentage}% of the estimated 40-week migration complete`;
    elements.stork.style.left = `${state.percentage}%`;
    elements.storkMessage.textContent = state.percentage < 25 ? "The stork is reviewing the initial flight plan."
        : state.percentage < 50 ? "The stork is airborne with a growing scientific dataset."
        : state.percentage < 75 ? "The stork has passed the halfway migration marker."
        : state.percentage < 95 ? "The stork is approaching the delivery zone."
        : "The stork is circling overhead. Timing remains under Baby’s control.";

    elements.weekStatistic.textContent = `${state.week} + ${state.weekDay}`;
    elements.trimesterStatistic.textContent = tri;
    elements.starSign.textContent = "Aquarius ♒";

    const next = milestones.find(m => m[0] >= state.week) || milestones.at(-1);
    elements.milestoneIcon.textContent = next[1];
    elements.milestoneTitle.textContent = `Week ${next[0]}: ${next[2]}`;
    elements.milestoneDescription.textContent = next[3];

    renderTimeline(state.week);
    elements.weeklyMemory.value = readStore(keys.memories)[state.week] || "";
}

function renderTimeline(currentWeek) {
    const reviewed = readStore(keys.reviewed);
    elements.weekTimeline.innerHTML = "";
    for (let week = 1; week <= 40; week++) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "week-marker";
        if (week < currentWeek) button.classList.add("week-marker--complete");
        if (week === currentWeek) button.classList.add("week-marker--current");
        if (reviewed[week]) button.classList.add("week-marker--reviewed");
        const info = weekInfo(Math.max(4, week));
        button.innerHTML = `<span>${week < 4 ? "🌱" : info.sizeEmoji}</span><strong>Week ${week}</strong>`;
        button.addEventListener("click", () => openWeek(week));
        elements.weekTimeline.appendChild(button);
    }
}

function openWeek(week) {
    selectedReviewWeek = week;
    const info = weekInfo(Math.max(4, week));
    const early = week < 4;

    elements.reviewTitle.textContent = `Pregnancy Week ${week}`;
    elements.reviewSizeEmoji.textContent = early ? "🌱" : info.sizeEmoji;
    elements.reviewSizeName.textContent = early ? "early development" : info.sizeName;
    elements.reviewSizeDescription.textContent = early ? "The pregnancy is in its earliest stage." : info.sizeDescription;
    elements.reviewBirdEmoji.textContent = info.birdEmoji;
    elements.reviewBirdName.textContent = info.birdName;
    elements.reviewBirdText.textContent = info.birdText;
    elements.reviewBirdFact.textContent = info.birdFact;
    elements.reviewFacts.innerHTML = info.facts.map(([icon,title,text]) => `
        <article class="week-review-fact"><span>${icon}</span>
        <div><h3>${title}</h3><p>${text}</p></div></article>`).join("");
    elements.reviewedCheckbox.checked = Boolean(readStore(keys.reviewed)[week]);
    elements.reviewModal.hidden = false;
    elements.closeReview.focus();
}
function closeWeek() {
    elements.reviewModal.hidden = true;
    selectedReviewWeek = null;
}

elements.missionCheckbox.addEventListener("change", () => {
    const state = pregnancyState();
    const missions = readStore(keys.missions);
    missions[state.week] = elements.missionCheckbox.checked;
    writeStore(keys.missions, missions);
    if (elements.missionCheckbox.checked) celebrate(90);
});

elements.reviewedCheckbox.addEventListener("change", () => {
    if (!selectedReviewWeek) return;
    const reviewed = readStore(keys.reviewed);
    reviewed[selectedReviewWeek] = elements.reviewedCheckbox.checked;
    writeStore(keys.reviewed, reviewed);
    renderTimeline(pregnancyState().week);
    if (elements.reviewedCheckbox.checked) celebrate(70);
});

elements.closeReview.addEventListener("click", closeWeek);
elements.reviewModal.addEventListener("click", event => {
    if (event.target.classList.contains("modal-backdrop")) closeWeek();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !elements.reviewModal.hidden) closeWeek();
});

elements.saveMemoryButton.addEventListener("click", () => {
    const state = pregnancyState();
    const memories = readStore(keys.memories);
    memories[state.week] = elements.weeklyMemory.value.trim();
    writeStore(keys.memories, memories);
    elements.memorySavedMessage.textContent = `Week ${state.week} field note saved.`;
    setTimeout(() => elements.memorySavedMessage.textContent = "", 2500);
});

const ctx = elements.canvas.getContext("2d");
let pieces = [];
function sizeCanvas() {
    const ratio = devicePixelRatio || 1;
    elements.canvas.width = innerWidth * ratio;
    elements.canvas.height = innerHeight * ratio;
    elements.canvas.style.width = innerWidth + "px";
    elements.canvas.style.height = innerHeight + "px";
    ctx.setTransform(ratio,0,0,ratio,0,0);
}
function celebrate(amount=80) {
    const colours = ["#315c4c","#91a996","#d6a642","#567b8c","#6b536d","#fff"];
    for (let i=0;i<amount;i++) pieces.push({
        x:innerWidth/2,y:innerHeight/2,vx:(Math.random()-.5)*12,vy:(Math.random()-.8)*10,
        g:.08+Math.random()*.08,r:Math.random()*6.28,vr:(Math.random()-.5)*.25,
        w:4+Math.random()*7,h:8+Math.random()*10,c:colours[Math.floor(Math.random()*colours.length)],life:120
    });
    requestAnimationFrame(animate);
}
let animating=false;
function animate() {
    if (animating) return;
    animating=true;
    function frame() {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        pieces = pieces.filter(p => p.life-- > 0);
        for (const p of pieces) {
            p.x+=p.vx; p.y+=p.vy; p.vy+=p.g; p.r+=p.vr;
            ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.fillStyle=p.c;
            ctx.beginPath(); ctx.ellipse(0,0,p.w/2,p.h/2,0,0,6.28); ctx.fill(); ctx.restore();
        }
        if (pieces.length) requestAnimationFrame(frame);
        else animating=false;
    }
    frame();
}

addEventListener("resize", sizeCanvas);
sizeCanvas();
render();
