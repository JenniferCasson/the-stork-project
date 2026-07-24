"use strict";

const weekData = {
    4: {
        sizeEmoji: "🌱",
        sizeName: "poppy seed",
        sizeDescription: "Approximately 2 mm long.",
        birdEmoji: "🥚",
        birdName: "the tiniest speck on a wren’s egg",
        birdText: "Still far smaller than any hatchling, but already beginning an extraordinary developmental programme.",
        facts: [
            ["🧬", "Early organisation", "Cells are rapidly dividing and beginning to specialise into different tissues."],
            ["🫀", "Circulation begins", "The structures that will form the heart and circulation are beginning to develop."],
            ["🧠", "Neural foundations", "The early neural tube is beginning to form."]
        ],
        birdFact: "Bird embryos develop outside the parent’s body inside eggs, while human embryos develop inside the uterus and are supported through the placenta.",
        mumFact: "Hormonal changes may cause tiredness, tender breasts or no obvious symptoms at all.",
        dadFact: "Begin a shared list of questions for the first midwife appointment.",
        mission: "Start a shared baby research notebook.",
        missionDescription: "Create one place for appointments, questions, ideas and ridiculous bird-related baby names."
    },

    5: {
        sizeEmoji: "🌾",
        sizeName: "sesame seed",
        sizeDescription: "Only a few millimetres long.",
        birdEmoji: "🐦",
        birdName: "a grain carried by a finch",
        birdText: "Tiny, but undergoing rapid cellular organisation.",
        facts: [
            ["🧠", "Neural development", "The neural tube continues forming and will develop into the brain and spinal cord."],
            ["🫀", "Early heart structure", "The primitive heart structure is developing."],
            ["🧫", "Specialised cells", "Groups of cells are beginning to form the foundations of major organs."]
        ],
        birdFact: "Finches have strong, specialised beaks shaped by the foods available in their environment.",
        mumFact: "Fatigue and nausea may begin or increase around this stage.",
        dadFact: "Check that important appointment dates are saved somewhere shared.",
        mission: "Set up a shared pregnancy calendar.",
        missionDescription: "Add scans, appointments and useful reminders."
    },

    6: {
        sizeEmoji: "🫘",
        sizeName: "lentil",
        sizeDescription: "Approximately 5 to 6 mm long.",
        birdEmoji: "🐤",
        birdName: "a hummingbird’s smallest crumb",
        birdText: "Far smaller than a hatchling, but growing extremely quickly.",
        facts: [
            ["🫀", "Cardiac activity", "The developing heart is becoming more organised and may be detectable during an ultrasound."],
            ["🧠", "Brain regions", "Early sections of the brain are beginning to form."],
            ["🦴", "Body shape", "Small buds that will become limbs are beginning to appear."]
        ],
        birdFact: "A hummingbird’s heart can beat more than 1,000 times per minute during flight.",
        mumFact: "Nausea, altered appetite and sensitivity to smells are common, although every pregnancy differs.",
        dadFact: "Become chief snack and hydration officer.",
        mission: "Prepare an emergency snack station.",
        missionDescription: "Stock a few tolerated snacks and drinks for low-energy moments."
    },

    7: {
        sizeEmoji: "🍇",
        sizeName: "grape",
        sizeDescription: "Approximately 10 mm long.",
        birdEmoji: "🥚",
        birdName: "a small songbird egg",
        birdText: "Comparable in length to a very small egg, although the body proportions are completely different.",
        facts: [
            ["🧠", "Rapid brain growth", "The brain and spinal cord are developing quickly."],
            ["🦵", "Limb formation", "The limb buds are lengthening and beginning to form early hands and feet."],
            ["🫁", "Organ foundations", "The foundations of major internal organs continue developing."]
        ],
        birdFact: "Many small songbird eggs weigh only a few grams, yet contain everything needed to build a complete chick.",
        mumFact: "Tiredness and nausea can make ordinary routines feel more demanding.",
        dadFact: "Take over one regular household task without being asked.",
        mission: "Choose one job to permanently remove from Mum’s list.",
        missionDescription: "Select a recurring task and become its official owner."
    },

    8: {
        sizeEmoji: "🫐",
        sizeName: "raspberry",
        sizeDescription: "Approximately 16 mm long.",
        birdEmoji: "🐦",
        birdName: "a newly hatched wren",
        birdText: "Around the scale of one of Britain’s smallest hatchlings.",
        facts: [
            ["👶", "Embryo to foetus", "Around this point, the embryo is increasingly recognisable as a tiny human form."],
            ["🦵", "Longer limbs", "Arms and legs are lengthening, although fingers and toes remain developing."],
            ["👁️", "Facial structures", "Early facial features continue to form."]
        ],
        birdFact: "Wrens are among Britain’s smallest birds, but they produce an unexpectedly powerful song.",
        mumFact: "The uterus is growing even though there may not yet be a visible bump.",
        dadFact: "Learn the difference between an embryo, a foetus and a hatchling.",
        mission: "Create the first weekly family field note.",
        missionDescription: "Record one memory, feeling or funny moment from this week."
    },

    9: {
        sizeEmoji: "🍒",
        sizeName: "cherry",
        sizeDescription: "Approximately 22 mm long.",
        birdEmoji: "🐣",
        birdName: "a tiny newly hatched finch",
        birdText: "Still extremely small, but now with increasingly distinct body structures.",
        facts: [
            ["🖐️", "Fingers forming", "The developing hands and feet are becoming more defined."],
            ["🫀", "Organ development", "Major organs are present in early forms and continue maturing."],
            ["👁️", "Face development", "The eyes, nose and mouth continue taking shape."]
        ],
        birdFact: "Newly hatched finches are altricial: they hatch with limited movement and depend completely on their parents.",
        mumFact: "Hormonal changes may continue causing tiredness, nausea or emotional changes.",
        dadFact: "Make a list of practical ways visitors could help after the birth.",
        mission: "Start a post-baby support list.",
        missionDescription: "Write down people who might help with meals, errands or childcare."
    },

    10: {
        sizeEmoji: "🍓",
        sizeName: "strawberry",
        sizeDescription: "Approximately 30 mm long.",
        birdEmoji: "🐦",
        birdName: "a baby blue tit",
        birdText: "Small enough to fit easily in a palm, with rapid development continuing.",
        facts: [
            ["🦴", "Bones developing", "Cartilage is beginning to develop into firmer bone tissue."],
            ["🦷", "Tooth buds", "Early tooth buds are forming beneath the gums."],
            ["🧠", "Nervous system", "Connections between the brain, nerves and muscles are increasing."]
        ],
        birdFact: "Blue tits can feed their chicks hundreds of times in a single day during the busiest nesting period.",
        mumFact: "Symptoms may still be intense, but some people begin noticing gradual changes soon.",
        dadFact: "Begin training for repeated snack delivery.",
        mission: "Plan one low-effort date night.",
        missionDescription: "Choose something relaxing that requires almost no planning or travel."
    },

    11: {
        sizeEmoji: "🍈",
        sizeName: "fig",
        sizeDescription: "Approximately 4 cm long.",
        birdEmoji: "🐥",
        birdName: "a growing robin chick",
        birdText: "Now comparable with a small nestling rather than a microscopic speck.",
        facts: [
            ["🖐️", "Separate digits", "Fingers and toes are becoming increasingly separate and distinct."],
            ["🫀", "Circulation", "Blood vessels continue developing throughout the growing body."],
            ["🦵", "Movement", "Small movements are possible, although they cannot usually be felt yet."]
        ],
        birdFact: "Robins are strongly territorial and may defend their patch throughout much of the year.",
        mumFact: "The first trimester is nearing its end.",
        dadFact: "Consider how the older child can be gently included in preparations.",
        mission: "Plan a big-sibling moment.",
        missionDescription: "Choose a simple way to help the older child feel included."
    },

    12: {
        sizeEmoji: "🍋",
        sizeName: "small lime",
        sizeDescription: "Approximately 5 to 6 cm long.",
        birdEmoji: "🪺",
        birdName: "a thrush egg",
        birdText: "Now reaching a scale comparable with some familiar garden bird eggs.",
        facts: [
            ["🧠", "Reflexes developing", "The nervous system is becoming more coordinated."],
            ["🦴", "Skeleton strengthening", "The skeleton continues changing from cartilage towards bone."],
            ["🫀", "Major structures present", "Major organs and body structures are present and continue maturing."]
        ],
        birdFact: "Song thrush eggs are famously blue and often marked with dark speckles.",
        mumFact: "Some early pregnancy symptoms may begin easing as the second trimester approaches.",
        dadFact: "Celebrate reaching the end of the first trimester.",
        mission: "Mark the first-trimester milestone.",
        missionDescription: "Choose a small celebration for completing the first research phase."
    },

    13: {
        sizeEmoji: "🍑",
        sizeName: "peach",
        sizeDescription: "Approximately 7 cm long.",
        birdEmoji: "🐦",
        birdName: "a young starling",
        birdText: "Growing quickly and now entering the second trimester.",
        facts: [
            ["🦴", "Bone development", "Bones continue strengthening, particularly in the limbs and skull."],
            ["🖐️", "Fine structures", "Tiny fingerprints are beginning their unique developmental process."],
            ["🫃", "Second trimester", "Week 13 generally marks the beginning of the second trimester."]
        ],
        birdFact: "Starlings can imitate other birds, machinery and even human-made sounds.",
        mumFact: "A small bump may begin becoming visible as the uterus grows upwards.",
        dadFact: "Start documenting the bump if both parents would enjoy a photo timeline.",
        mission: "Take the first official field photograph.",
        missionDescription: "Start a weekly or monthly bump-photo series."
    },

    14: {
        sizeEmoji: "🍋",
        sizeName: "lemon",
        sizeDescription: "Approximately 8 to 9 cm long.",
        birdEmoji: "🐤",
        birdName: "a growing swallow chick",
        birdText: "Small, active and increasingly coordinated.",
        facts: [
            ["🙂", "Facial muscles", "The facial muscles are developing and can make small movements."],
            ["🦵", "Movement", "The limbs can move more freely as muscles and nerves develop."],
            ["🫀", "Placental support", "The placenta is supporting the exchange of oxygen and nutrients."]
        ],
        birdFact: "Swallows migrate thousands of miles between Europe and southern Africa.",
        mumFact: "Energy levels may improve during the second trimester, although this is not universal.",
        dadFact: "Research one family-friendly bird reserve for a future outing.",
        mission: "Choose Baby’s first birdwatching location.",
        missionDescription: "Find somewhere suitable for a future family wildlife walk."
    },

    15: {
        sizeEmoji: "🍎",
        sizeName: "apple",
        sizeDescription: "Approximately 10 cm long.",
        birdEmoji: "🐦",
        birdName: "a fledgling house sparrow",
        birdText: "Comparable in length to a small fledgling, though much lighter.",
        facts: [
            ["👂", "Hearing structures", "Structures within the ears continue developing."],
            ["🦴", "Skeletal growth", "The skeleton is becoming more visible on imaging."],
            ["🩸", "Blood production", "The body is developing increasingly complex blood-forming systems."]
        ],
        birdFact: "House sparrows have lived alongside humans for thousands of years.",
        mumFact: "Round-ligament discomfort can occur as the uterus expands.",
        dadFact: "Make sure useful emergency and maternity numbers are stored in both phones.",
        mission: "Create the family contact sheet.",
        missionDescription: "Save maternity, childcare and emergency contact details."
    },

    16: {
        sizeEmoji: "🥑",
        sizeName: "avocado",
        sizeDescription: "Approximately 11 to 12 cm long.",
        birdEmoji: "🦆",
        birdName: "a newly hatched duckling",
        birdText: "Around the same general scale as a small duckling.",
        facts: [
            ["👂", "Sound pathways", "The auditory system continues developing."],
            ["🦵", "Coordinated movement", "Muscle and nervous-system development allows increasingly coordinated movement."],
            ["🙂", "Facial detail", "The face is becoming more proportionate and defined."]
        ],
        birdFact: "Ducklings are precocial: unlike many songbirds, they can walk and follow a parent shortly after hatching.",
        mumFact: "Some people begin feeling early movements between roughly 16 and 24 weeks.",
        dadFact: "Practise recognising the difference between an avocado and a duckling.",
        mission: "Begin a baby-name laboratory.",
        missionDescription: "Create a shortlist with space for rigorous peer review."
    },

    17: {
        sizeEmoji: "🍐",
        sizeName: "pear",
        sizeDescription: "Approximately 13 cm long.",
        birdEmoji: "🐧",
        birdName: "a very small penguin chick",
        birdText: "Now large enough for increasingly obvious movement and growth.",
        facts: [
            ["🫀", "Strong circulation", "The cardiovascular system continues supporting rapid growth."],
            ["🧠", "Nerve insulation", "Early processes that help nerve signals travel efficiently are beginning."],
            ["🦴", "Body proportions", "The limbs and body continue becoming more proportionate."]
        ],
        birdFact: "Emperor penguin fathers incubate a single egg on their feet beneath a warm fold of skin.",
        mumFact: "The growing uterus may begin changing balance and posture.",
        dadFact: "Study emperor penguin parenting and lower your complaints accordingly.",
        mission: "Plan one practical pregnancy support upgrade.",
        missionDescription: "Choose something that makes daily life easier or more comfortable."
    },

    18: {
        sizeEmoji: "🍠",
        sizeName: "sweet potato",
        sizeDescription: "Approximately 14 cm long.",
        birdEmoji: "🦉",
        birdName: "a small owl chick",
        birdText: "Similar in length to a compact owl nestling.",
        facts: [
            ["👂", "Hearing development", "The structures involved in hearing continue maturing."],
            ["🦵", "Movement patterns", "Movements are becoming more deliberate and coordinated."],
            ["🖐️", "Unique fingerprints", "The skin’s ridge patterns continue developing."]
        ],
        birdFact: "Owls can rotate their heads extensively because they have specialised neck anatomy and blood-vessel adaptations.",
        mumFact: "Movements may begin feeling like fluttering, bubbles or gentle taps.",
        dadFact: "Begin speaking to Baby; familiar voices may become part of the sound environment.",
        mission: "Choose Baby’s first science book.",
        missionDescription: "Find a child-friendly book about birds, nature or space."
    },

    19: {
        sizeEmoji: "🥭",
        sizeName: "mango",
        sizeDescription: "Approximately 15 cm long.",
        birdEmoji: "🐦",
        birdName: "a young blackbird",
        birdText: "Comparable in length to a small garden-bird fledgling.",
        facts: [
            ["🧠", "Sensory development", "The regions of the brain linked with the senses continue developing."],
            ["🧴", "Skin protection", "A protective waxy coating begins forming over the skin."],
            ["🦵", "Active movement", "The developing baby can stretch, turn and move the limbs."]
        ],
        birdFact: "Blackbirds use different alarm calls for threats in the air and threats on the ground.",
        mumFact: "The bump may now be more noticeable and movement may become easier to identify.",
        dadFact: "Learn where the important baby equipment will be stored.",
        mission: "Audit existing baby equipment.",
        missionDescription: "Check what can be reused from Baby Number One."
    },

    20: {
        sizeEmoji: "🍌",
        sizeName: "banana",
        sizeDescription: "Approximately 25 cm from head to heel.",
        birdEmoji: "🐦",
        birdName: "a fledgling magpie",
        birdText: "At the halfway stage, length is increasingly measured from head to heel.",
        facts: [
            ["🧠", "Brain development", "The nervous system continues forming increasingly complex connections."],
            ["👂", "Sound awareness", "The developing auditory system may respond to sounds and vibrations."],
            ["🦵", "Halfway milestone", "Movement and growth continue rapidly around the midpoint of pregnancy."]
        ],
        birdFact: "Magpies are corvids, a bird family known for advanced problem-solving and social intelligence.",
        mumFact: "The 20-week scan is commonly offered around this stage, although appointment timing varies.",
        dadFact: "Celebrate the halfway point with appropriate scientific enthusiasm.",
        mission: "Hold the halfway symposium.",
        missionDescription: "Celebrate 20 weeks with a meal, outing or small keepsake."
    },

    21: {
        sizeEmoji: "🥕",
        sizeName: "large carrot",
        sizeDescription: "Approximately 26 to 27 cm long.",
        birdEmoji: "🦜",
        birdName: "a compact parakeet",
        birdText: "Comparable in length to a small parakeet from beak to tail.",
        facts: [
            ["🧠", "Neural connections", "Communication between nerves and muscles continues improving."],
            ["👅", "Taste structures", "Taste-related structures continue developing."],
            ["🦵", "Stronger movement", "Movements may become easier to distinguish."]
        ],
        birdFact: "Some parrots can learn labels, categories and numerical concepts rather than merely copying sounds.",
        mumFact: "The pattern and strength of movements may gradually become more noticeable.",
        dadFact: "Learn one reliable meal that can be prepared with minimal effort.",
        mission: "Master the emergency dinner.",
        missionDescription: "Choose one easy meal suitable for exhausted-parent evenings."
    },

    22: {
        sizeEmoji: "🥒",
        sizeName: "courgette",
        sizeDescription: "Approximately 28 cm long.",
        birdEmoji: "🕊️",
        birdName: "a small dove",
        birdText: "Now comparable in overall length to some small adult birds.",
        facts: [
            ["👁️", "Eye development", "The eyes continue developing beneath closed eyelids."],
            ["🧴", "Skin maturation", "The skin remains thin while protective layers continue forming."],
            ["🫁", "Lung preparation", "The lungs continue developing structures required after birth."]
        ],
        birdFact: "Pigeons and doves produce a nutrient-rich secretion called crop milk to feed their young.",
        mumFact: "Backache, changes in balance and increased appetite may occur.",
        dadFact: "Consider crop milk as evidence that bird parenting is scientifically impressive.",
        mission: "Begin the nursery requirements list.",
        missionDescription: "Separate essentials from items marketed by people who enjoy selling tiny furniture."
    },

    23: {
        sizeEmoji: "🍆",
        sizeName: "aubergine",
        sizeDescription: "Approximately 29 cm long.",
        birdEmoji: "🐦",
        birdName: "a young jackdaw",
        birdText: "Comparable in length to a small member of the crow family.",
        facts: [
            ["👂", "Sound responses", "Responses to louder external sounds may become more noticeable."],
            ["🫁", "Breathing practice", "Small practice movements help prepare the respiratory muscles."],
            ["🧠", "Brain growth", "The brain continues rapidly increasing in complexity."]
        ],
        birdFact: "Jackdaws form long-term social bonds and can recognise individual humans.",
        mumFact: "Rest, hydration and comfortable posture may become increasingly important.",
        dadFact: "Research the car seat without entering a six-hour comparison spiral.",
        mission: "Review the transport plan.",
        missionDescription: "Check the car seat, pram and travel arrangements."
    },

    24: {
        sizeEmoji: "🌽",
        sizeName: "ear of corn",
        sizeDescription: "Approximately 30 cm long.",
        birdEmoji: "🐦",
        birdName: "a young kestrel",
        birdText: "Now approaching the scale of a small bird of prey.",
        facts: [
            ["🫁", "Lung development", "The lungs are developing structures needed for gas exchange after birth."],
            ["👂", "Recognisable sounds", "Familiar voices and recurring sounds may become part of the auditory environment."],
            ["🧠", "Viability milestone", "Around this stage, survival outside the uterus may be possible with specialist neonatal support."]
        ],
        birdFact: "Kestrels can hold almost perfectly still in the air by flying into the wind, a behaviour called wind-hovering.",
        mumFact: "Appointments may increasingly include monitoring growth, blood pressure and wellbeing.",
        dadFact: "Know where the maternity notes and hospital details are kept.",
        mission: "Create the maternity grab folder.",
        missionDescription: "Keep key notes, contacts and appointment information together."
    },

    25: {
        sizeEmoji: "🥦",
        sizeName: "cauliflower",
        sizeDescription: "Approximately 34 cm long.",
        birdEmoji: "🦅",
        birdName: "a compact owl or hawk",
        birdText: "A substantial increase from the seed-sized earliest weeks.",
        facts: [
            ["🧠", "Complex brain activity", "The brain continues developing networks for movement, sensation and later learning."],
            ["👃", "Nasal structures", "The nose and breathing passages continue maturing."],
            ["🦵", "More powerful movement", "Kicks and turns may feel stronger."]
        ],
        birdFact: "Birds of prey have exceptionally high visual acuity, helping them locate prey from great distances.",
        mumFact: "Heartburn, indigestion or breathlessness can become more noticeable as pregnancy progresses.",
        dadFact: "Begin constructing an elite snack-and-drink support protocol.",
        mission: "Design the hospital snack list.",
        missionDescription: "Include practical snacks for both parents and assume vending machines will fail."
    },

    26: {
        sizeEmoji: "🥬",
        sizeName: "lettuce",
        sizeDescription: "Approximately 35 cm long.",
        birdEmoji: "🦆",
        birdName: "a growing duck",
        birdText: "Now comparable in length to a young waterbird.",
        facts: [
            ["👁️", "Eyes developing", "The eyelids may begin opening during this part of pregnancy."],
            ["🧠", "Response patterns", "Responses to light, sound and movement continue developing."],
            ["🫁", "Respiratory maturation", "The lungs continue preparing for breathing after birth."]
        ],
        birdFact: "Many ducks have waterproof outer feathers maintained with oil from a gland near the tail.",
        mumFact: "Sleep may become less comfortable as the bump grows.",
        dadFact: "Conduct a pillow and comfort-equipment review.",
        mission: "Optimise the sleep environment.",
        missionDescription: "Make the bed, lighting and evening routine as comfortable as possible."
    },

    27: {
        sizeEmoji: "🥬",
        sizeName: "cabbage",
        sizeDescription: "Approximately 36 cm long.",
        birdEmoji: "🦉",
        birdName: "a barn owl",
        birdText: "Now comparable in length to a familiar British owl.",
        facts: [
            ["🧠", "Brain surface", "The brain continues growing and developing more complex surface folding."],
            ["👂", "Sound familiarity", "Repeated voices and sounds may become increasingly familiar."],
            ["🫁", "Ongoing lung growth", "The lungs continue developing, although maturation is not complete."]
        ],
        birdFact: "Barn owls locate prey partly through extraordinarily precise hearing, aided by asymmetrically positioned ears.",
        mumFact: "The second trimester is nearing its end.",
        dadFact: "Start planning how responsibilities will work during the first few weeks at home.",
        mission: "Draft the post-birth teamwork plan.",
        missionDescription: "Discuss meals, visitors, nights, childcare and recovery support."
    },

    28: {
        sizeEmoji: "🍆",
        sizeName: "large aubergine",
        sizeDescription: "Approximately 37 cm long.",
        birdEmoji: "🐧",
        birdName: "a penguin chick",
        birdText: "Entering the third trimester at a distinctly chick-like scale.",
        facts: [
            ["🧠", "Third-trimester growth", "The brain enters a period of substantial growth and maturation."],
            ["👁️", "Light response", "The eyes may open and respond to changes in light."],
            ["🫁", "Breathing preparation", "Practice breathing movements continue."]
        ],
        birdFact: "Penguin chicks are insulated by soft down before developing the waterproof feathers required for swimming.",
        mumFact: "Week 28 generally marks the beginning of the third trimester.",
        dadFact: "Acknowledge that the final research phase has begun.",
        mission: "Hold the third-trimester briefing.",
        missionDescription: "Review remaining appointments, purchases and practical preparations."
    },

    29: {
        sizeEmoji: "🎃",
        sizeName: "small butternut squash",
        sizeDescription: "Approximately 38 cm long.",
        birdEmoji: "🦅",
        birdName: "a young peregrine falcon",
        birdText: "Now comparable in length to a medium-sized bird.",
        facts: [
            ["🧠", "Neural refinement", "The nervous system continues improving control of movement and body functions."],
            ["🦴", "Strong bones", "Bones continue strengthening while remaining flexible enough for birth."],
            ["🫁", "Lung maturation", "The lungs continue producing and organising structures needed for breathing."]
        ],
        birdFact: "Peregrine falcons can exceed 200 mph during a hunting dive, making them the fastest animals measured.",
        mumFact: "More frequent rest may be needed as the third trimester progresses.",
        dadFact: "Begin checking which older-child arrangements will be needed during labour.",
        mission: "Confirm the childcare strategy.",
        missionDescription: "Create a primary and backup plan for the older child."
    },

    30: {
        sizeEmoji: "🥥",
        sizeName: "coconut",
        sizeDescription: "Approximately 40 cm long.",
        birdEmoji: "🦢",
        birdName: "a small cygnet",
        birdText: "Now similar in scale to a young waterbird.",
        facts: [
            ["🧠", "Rapid brain growth", "Brain volume and neural connections continue increasing."],
            ["🫀", "Circulatory efficiency", "The cardiovascular system supports continued weight gain."],
            ["🧴", "Body fat", "Increasing fat stores help prepare for temperature regulation after birth."]
        ],
        birdFact: "Cygnets may ride on a parent’s back, especially when young or tired.",
        mumFact: "The growing uterus may increase pressure on the bladder and affect sleep.",
        dadFact: "Begin preparing for the hospital bag before it becomes an emergency bag.",
        mission: "Start packing the hospital bag.",
        missionDescription: "Pack the obvious essentials now and add final items later."
    },

    31: {
        sizeEmoji: "🥥",
        sizeName: "large coconut",
        sizeDescription: "Approximately 41 cm long.",
        birdEmoji: "🦩",
        birdName: "a compact flamingo chick",
        birdText: "Longer limbs and continued weight gain are changing body proportions.",
        facts: [
            ["🧠", "Information processing", "The brain continues forming networks involved in sensory processing."],
            ["👂", "Sound recognition", "Familiar patterns of speech and sound may be recognised."],
            ["🫁", "Practice breathing", "Breathing-like movements continue preparing muscles for life after birth."]
        ],
        birdFact: "Flamingo chicks hatch with straight bills; the characteristic downward curve develops later.",
        mumFact: "Breathlessness and general physical heaviness may become more noticeable.",
        dadFact: "Learn where every item in the hospital bag is located.",
        mission: "Create the hospital-bag inventory.",
        missionDescription: "Make a short list so nobody empties the entire bag looking for one charger."
    },

    32: {
        sizeEmoji: "🥬",
        sizeName: "Chinese cabbage",
        sizeDescription: "Approximately 42 cm long.",
        birdEmoji: "🪿",
        birdName: "a young goose",
        birdText: "Now comparable in length to a sizeable young bird.",
        facts: [
            ["🧠", "Sleep cycles", "Patterns of activity and rest may become increasingly regular."],
            ["🦴", "Flexible skeleton", "Bones continue mineralising while the skull remains flexible."],
            ["🧴", "Weight gain", "Fat and muscle continue accumulating."]
        ],
        birdFact: "Geese often fly in a V formation, reducing drag and allowing individuals to conserve energy.",
        mumFact: "Movement patterns should remain familiar; maternity advice should be sought if movements change or reduce.",
        dadFact: "Know how to contact the maternity unit at any time.",
        mission: "Save the maternity contact numbers.",
        missionDescription: "Put them in both phones and somewhere visible at home."
    },

    33: {
        sizeEmoji: "🍍",
        sizeName: "pineapple",
        sizeDescription: "Approximately 43 cm long.",
        birdEmoji: "🦆",
        birdName: "a nearly grown duck",
        birdText: "Now much closer to newborn proportions.",
        facts: [
            ["🧠", "Sensory integration", "The brain continues coordinating information from developing senses."],
            ["🫁", "Further lung maturation", "The lungs continue preparing for breathing air."],
            ["🛡️", "Immune support", "Protective antibodies continue passing through the placenta."]
        ],
        birdFact: "Some ducklings communicate with one another through calls before they have fully hatched.",
        mumFact: "Appointments may become more frequent as the due date approaches.",
        dadFact: "Check that transport, fuel and route options are sensible.",
        mission: "Run the hospital-route simulation.",
        missionDescription: "Check routes, parking and alternative travel plans."
    },

    34: {
        sizeEmoji: "🍈",
        sizeName: "cantaloupe melon",
        sizeDescription: "Approximately 45 cm long.",
        birdEmoji: "🦅",
        birdName: "a medium-sized hawk",
        birdText: "Growth now focuses heavily on weight gain and maturation.",
        facts: [
            ["🫁", "Respiratory preparation", "The lungs continue maturing towards independent breathing."],
            ["🧠", "Brain growth", "The brain continues rapid development."],
            ["🧴", "Temperature preparation", "Increasing body fat will help with temperature control after birth."]
        ],
        birdFact: "Many hawks can see ultraviolet wavelengths, potentially helping them track signs left by small mammals.",
        mumFact: "Pelvic pressure, fatigue and disturbed sleep may increase.",
        dadFact: "Reduce avoidable household chaos before the final weeks.",
        mission: "Complete one home-preparation task.",
        missionDescription: "Choose the most useful unfinished job and get it done."
    },

    35: {
        sizeEmoji: "🍈",
        sizeName: "honeydew melon",
        sizeDescription: "Approximately 46 cm long.",
        birdEmoji: "🦃",
        birdName: "a compact young turkey",
        birdText: "The developing baby is continuing to build fat and muscle.",
        facts: [
            ["🧠", "Continued maturation", "The nervous system continues preparing to regulate functions after birth."],
            ["🫁", "Nearer readiness", "The lungs are significantly developed but continue maturing."],
            ["🦴", "Growth and positioning", "Space is becoming tighter as weight increases."]
        ],
        birdFact: "Turkeys can recognise individual flock members and use a wide range of vocalisations.",
        mumFact: "Rest and pacing activities may become increasingly important.",
        dadFact: "Prepare meals that can be frozen or reheated.",
        mission: "Begin the freezer-nest programme.",
        missionDescription: "Prepare or arrange at least one easy post-baby meal."
    },

    36: {
        sizeEmoji: "🥬",
        sizeName: "romaine lettuce",
        sizeDescription: "Approximately 47 cm long.",
        birdEmoji: "🦢",
        birdName: "a growing swan",
        birdText: "Now approaching typical newborn length.",
        facts: [
            ["🫁", "Late lung maturation", "The respiratory system continues preparing for the transition after birth."],
            ["🧴", "Fat stores", "Continued weight gain supports warmth and energy after delivery."],
            ["🧠", "Coordination", "Sucking, swallowing and breathing-related coordination continues developing."]
        ],
        birdFact: "Swans have more neck vertebrae than humans, allowing far greater neck flexibility.",
        mumFact: "The hospital bag and key contact details should now be readily accessible.",
        dadFact: "Become the official keeper of notes, bags, chargers and snacks.",
        mission: "Finalise the hospital bag.",
        missionDescription: "Check Mum, Baby and birth-partner essentials."
    },

    37: {
        sizeEmoji: "🥬",
        sizeName: "Swiss chard",
        sizeDescription: "Approximately 48 cm long.",
        birdEmoji: "🪿",
        birdName: "a small adult goose",
        birdText: "Week 37 is considered early term.",
        facts: [
            ["👶", "Early term", "A baby born from 37 completed weeks is generally described as term rather than preterm."],
            ["🫁", "Final preparation", "The lungs and nervous system continue maturing."],
            ["🧴", "Ongoing weight gain", "Fat and muscle continue accumulating."]
        ],
        birdFact: "Some geese maintain long-term pair bonds and cooperate in raising and defending their young.",
        mumFact: "Signs of labour can begin at any point, although the due date remains an estimate.",
        dadFact: "Keep the phone charged and avoid disappearing into remote bird hides.",
        mission: "Begin official stork watch.",
        missionDescription: "Keep phones charged, bags ready and transport available."
    },

    38: {
        sizeEmoji: "🎃",
        sizeName: "small pumpkin",
        sizeDescription: "Approximately 49 cm long.",
        birdEmoji: "🦩",
        birdName: "a curled-up flamingo",
        birdText: "Fully baby-sized and continuing to gain weight.",
        facts: [
            ["🧠", "Nervous-system readiness", "The brain and nervous system continue fine-tuning essential functions."],
            ["🫁", "Breathing readiness", "The lungs continue preparing for the first breaths."],
            ["👶", "Birth preparation", "Position and readiness for birth may be reviewed during appointments."]
        ],
        birdFact: "Flamingos feed chicks with crop milk produced by both male and female parents.",
        mumFact: "Regular contractions, waters breaking or other labour signs should be discussed with the maternity team.",
        dadFact: "Remain calm, available and capable of locating the car keys.",
        mission: "Conduct the final logistics check.",
        missionDescription: "Check fuel, bags, childcare, contacts and routes."
    },

    39: {
        sizeEmoji: "🍉",
        sizeName: "small watermelon",
        sizeDescription: "Approximately 50 cm long.",
        birdEmoji: "🦢",
        birdName: "a curled-up young swan",
        birdText: "Very close to typical newborn length and weight.",
        facts: [
            ["👶", "Full term", "The baby is considered full term and could arrive at any time."],
            ["🧠", "Continued development", "The brain continues developing before and after birth."],
            ["🧴", "Final weight gain", "Weight and fat stores may continue increasing."]
        ],
        birdFact: "Many parent birds recognise their chicks through combinations of sound, location and behaviour.",
        mumFact: "Pregnancy commonly ends a week either side of the estimated due date.",
        dadFact: "Operate in calm, useful and snack-equipped mode.",
        mission: "Clear the immediate schedule.",
        missionDescription: "Keep the coming days as flexible as realistically possible."
    },

    40: {
        sizeEmoji: "🍉",
        sizeName: "watermelon",
        sizeDescription: "Approximately 50 cm long, although healthy newborn sizes vary widely.",
        birdEmoji: "🕊️",
        birdName: "a fully prepared stork delivery",
        birdText: "The estimated hatching week has arrived.",
        facts: [
            ["👶", "Estimated due week", "The due date marks an estimated 40 weeks of pregnancy."],
            ["🫁", "Ready for transition", "The body is prepared for the major transition to life outside the uterus."],
            ["🧠", "Development continues", "Brain growth and development continue well beyond birth."]
        ],
        birdFact: "White storks have long been associated with babies in European folklore, but scientific evidence for avian delivery remains disappointingly limited.",
        mumFact: "The maternity team can advise on labour signs and options if pregnancy continues beyond the due date.",
        dadFact: "The stork’s role is ceremonial. Your role is snacks, support and logistics.",
        mission: "Welcome the newest researcher.",
        missionDescription: "Prepare for Baby’s arrival and remember that the due date is an estimate."
    }
};

window.STORK_WEEK_DATA = weekData;
