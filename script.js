const dueDate = new Date("2027-01-23");
const today = new Date();

const oneDay = 1000 * 60 * 60 * 24;

const difference = dueDate - today;
const daysRemaining = Math.ceil(difference / oneDay);

document.getElementById("daysRemaining").textContent = daysRemaining;

const pregnancyLengthDays = 280;
const startDate = new Date(dueDate);
startDate.setDate(startDate.getDate() - pregnancyLengthDays);

const daysPregnant = Math.floor((today - startDate) / oneDay);
const currentWeek = Math.floor(daysPregnant / 7);

document.getElementById("currentWeek").textContent = currentWeek;

const weeklyData = {
  4: {
    size: "poppy seed",
    bird: "the tiniest speck on a wren's egg",
    fact: "Cells are rapidly dividing and beginning to specialise."
  },
  5: {
    size: "sesame seed",
    bird: "a grain carried by a finch",
    fact: "The neural tube continues forming."
  },
  6: {
    size: "lentil",
    bird: "a hummingbird's smallest crumb",
    fact: "The developing heart is becoming more organised."
  },
  7: {
    size: "grape",
    bird: "a small songbird egg",
    fact: "Limb buds are beginning to form."
  },
  8: {
    size: "raspberry",
    bird: "a newly hatched wren",
    fact: "Early facial features continue to develop."
  },
  9: {
    size: "cherry",
    bird: "a tiny newly hatched finch",
    fact: "The developing hands and feet are becoming more defined."
  },
  10: {
    size: "strawberry",
    bird: "a baby blue tit",
    fact: "Tooth buds are beginning to form beneath the gums."
  },
  11: {
    size: "fig",
    bird: "a growing robin chick",
    fact: "Fingers and toes are becoming increasingly distinct."
  },
  12: {
    size: "small lime",
    bird: "a thrush egg",
    fact: "Major organs and body structures are present and continue maturing."
  },
  13: {
    size: "peach",
    bird: "a young starling",
    fact: "The second trimester is beginning."
  },
  14: {
    size: "lemon",
    bird: "a growing swallow chick",
    fact: "Baby can make tiny facial movements this week."
  },
  15: {
    size: "apple",
    bird: "a fledgling house sparrow",
    fact: "Baby's skeleton is becoming more visible on scans."
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
    fact: "Baby's hearing structures are developing."
  },
  19: {
    size: "mango",
    bird: "a small blackbird chick",
    fact: "Baby's senses are continuing to develop."
  },
  20: {
    size: "banana",
    bird: "a very busy baby blue tit",
    fact: "This is around the halfway point of pregnancy."
  },
  21: {
    size: "carrot",
    bird: "a growing duckling",
    fact: "Baby's movements may become easier to notice."
  },
  22: {
    size: "papaya",
    bird: "a young moorhen chick",
    fact: "Baby is continuing to gain weight and practise movement."
  },
  23: {
    size: "large mango",
    bird: "a small owl chick",
    fact: "The lungs are continuing to develop."
  },
  24: {
    size: "corn on the cob",
    bird: "a fluffy gosling",
    fact: "Baby's hearing is becoming more responsive."
  },
  25: {
    size: "cauliflower",
    bird: "a young kestrel",
    fact: "Baby is gaining more body fat."
  },
  26: {
    size: "lettuce",
    bird: "a growing heron chick",
    fact: "The eyes are developing further."
  },
  27: {
    size: "cabbage",
    bird: "a young barn owl",
    fact: "Baby is nearing the end of the second trimester."
  },
  28: {
    size: "aubergine",
    bird: "a sturdy puffin chick",
    fact: "The third trimester begins around now."
  },
  29: {
    size: "butternut squash",
    bird: "a growing gull chick",
    fact: "Baby's muscles and lungs are continuing to mature."
  },
  30: {
    size: "large cabbage",
    bird: "a young swan cygnet",
    fact: "Baby is putting on weight quickly."
  },
  31: {
    size: "coconut",
    bird: "a well-fed duckling",
    fact: "Baby's brain development continues rapidly."
  },
  32: {
    size: "squash",
    bird: "a fluffy goose chick",
    fact: "Baby is practising breathing movements."
  },
  33: {
    size: "pineapple",
    bird: "a young
