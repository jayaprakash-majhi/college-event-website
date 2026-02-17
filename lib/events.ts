import {
  Paintbrush,
  Video,
  Book,
  Smile,
  Trophy,
  Search,
  Mic,
  Camera,
  ChefHat,
  SmileIcon,
  type LucideIcon,
} from "lucide-react"

export interface EventData {
  id: string
  name: string
  tagline: string
  description: string
  fullDescription: string
  rules: string[]
  evaluation: string[]
  icon: LucideIcon
  color: string
  category: "stage" | "arena" | "creative"
  teamSize: string
  registrationLink: string
}

export const events: EventData[] = [
  {
    id: "art-and-craft-versal",
    name: "Art & Craft Versal",
    tagline: "Colour Your World",
    description:
      "Creative, hands-on activities that use imagination and skill to produce unique and functional art pieces.",
    fullDescription:
      "Art & Craft Versal is a vibrant event under SRIJANA where participants showcase their creativity through handmade artworks. From paintings and paper crafts to eco-friendly models and innovative DIY creations, this event celebrates imagination and originality. Bring your artistic vision to life and impress the judges with your creativity, detailing, and presentation skills.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "All materials must be brought by participants.",
      "Time limit for completion will be announced before the event.",
      "Use of harmful or dangerous materials is strictly prohibited.",
      "Participants must maintain cleanliness of their workspace.",
      "Judging will be based on creativity, originality, presentation, and overall impact.",
    ],
    evaluation: [
      "Creativity & Originality (30%) - Unique use of materials and fresh ideas.",
      "Artistic Skill (25%) - Technique, precision, and craftsmanship.",
      "Presentation (20%) - Visual appeal and final look of the artwork.",
      "Theme Relevance (15%) - Connection to the given theme.",
      "Completion & Detailing (10%) - How finished and detailed the work is.",
    ],
    icon: Paintbrush,
    color: "hsl(25 95% 53%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/rabfa6KE4CxLM8mJ8",
  },
  {
    id: "theme-act",
    name: "Theme Act",
    tagline: "Love mortality your imagination",
    description:
      "A psychological test where a person creates stories based on pictures to reveal their personality, emotions, and hidden thoughts.",
    fullDescription:
      "Theme Act is a unique and thought-provoking event where participants are given a set of images or themes and must create a dramatic act, skit, or narrative around them. This event tests your storytelling abilities, emotional range, and creativity under constraints. Whether you go dramatic, comedic, or abstract, your interpretation is what matters most.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "Themes or images will be provided on the spot.",
      "Time limit for performance will be announced before the event.",
      "Use of offensive or inappropriate content is strictly prohibited.",
      "Participants must maintain decorum during the event.",
      "Judging will be based on creativity, originality, presentation, and overall impact.",
    ],
    evaluation: [
      "Creativity & Interpretation (30%) - How creatively the theme is interpreted.",
      "Performance Quality (25%) - Acting, expressions, and delivery.",
      "Theme Connection (20%) - How well the act connects to the given theme.",
      "Audience Impact (15%) - Ability to engage and move the audience.",
      "Originality (10%) - Freshness and uniqueness of the approach.",
    ],
    icon: Paintbrush,
    color: "hsl(340 82% 52%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/t8rZSS2caRUDe2JZA",
  },
  {
    id: "reel-making",
    name: "Reel Making",
    tagline: "Frame the moment, tell the story.",
    description:
      "Create a short, engaging video based on a given theme to showcase creativity, storytelling, and editing skills.",
    fullDescription:
      "Reel Making is a digital content creation event where participants must shoot and edit a short-form video (reel) based on a given theme. Whether you go cinematic, funny, emotional, or informational, your reel must captivate viewers within a short duration. This event tests your videography, editing, storytelling, and creative direction skills.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "Reel duration must be between 30-90 seconds.",
      "Theme will be announced before or during the event.",
      "Use of copyrighted music without permission is not allowed.",
      "All footage must be original and shot during the event timeframe.",
      "Judging will be based on creativity, storytelling, editing quality, and overall impact.",
    ],
    evaluation: [
      "Storytelling & Concept (30%) - Clarity and creativity of the narrative.",
      "Editing & Production (25%) - Transitions, effects, color grading, and audio sync.",
      "Theme Relevance (20%) - How well the reel connects to the given theme.",
      "Visual Quality (15%) - Camera work, framing, and lighting.",
      "Audience Appeal (10%) - Engagement factor and watchability.",
    ],
    icon: Video,
    color: "hsl(262 83% 58%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/U66VngsbyLNsjeKYA",
  },
  {
    id: "short-movie",
    name: "Short Movie",
    tagline: "Big stories in small frames",
    description:
      "Create a compelling short film that delivers a powerful story, message, or emotion within a limited duration.",
    fullDescription:
      "Short Movie is the premier filmmaking event of SRIJANA where teams create a complete short film with a compelling storyline, proper cinematography, and meaningful message. From scripting to shooting to post-production, this event covers the entire filmmaking process. Whether your genre is drama, thriller, comedy, or documentary, tell a story that leaves a lasting impression.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "Movie duration must be between 3-10 minutes including credits.",
      "Theme or genre may be assigned or chosen freely depending on the round.",
      "Use of copyrighted content (music, footage) is prohibited.",
      "All content must be original and filmed within the given timeframe.",
      "Judging will be based on story, direction, cinematography, editing, and overall impact.",
    ],
    evaluation: [
      "Story & Script (30%) - Originality, depth, and emotional impact of the narrative.",
      "Direction & Cinematography (25%) - Shot composition, camera work, and visual style.",
      "Editing & Sound Design (20%) - Pacing, transitions, audio quality, and background score.",
      "Acting & Performances (15%) - Believability and emotional range of the cast.",
      "Overall Impact (10%) - How memorable and impactful the film is as a whole.",
    ],
    icon: Video,
    color: "hsl(142 71% 45%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/aqNLdr67XMt5hC8u9",
  },
  {
    id: "quiz",
    name: "Quiz",
    tagline: "Think fast, answer smart!",
    description:
      "Test your knowledge, speed, and accuracy across various topics in an exciting competitive format.",
    fullDescription:
      "Quiz is the ultimate test of knowledge at SRIJANA, covering topics from general knowledge, science, history, pop culture, sports, current affairs, and more. The format includes multiple rounds such as written prelims, rapid fire, audio-visual, and buzzer rounds. Assemble your smartest teammates and prove you are the brainiest team on campus.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "All materials must be brought by participants.",
      "No electronic devices, cheat sheets, or reference material allowed during the quiz.",
      "The quizmaster's decision on accepting answers is final.",
      "Negative marking may apply in specific rounds as announced.",
      "Judging will be based on correct answers, speed, and accuracy.",
    ],
    evaluation: [
      "Correct Answers (40%) - Total points accumulated across all rounds.",
      "Speed & Response Time (25%) - Quick thinking in buzzer and rapid fire rounds.",
      "Accuracy Under Pressure (20%) - Performance in high-stakes rounds.",
      "Team Coordination (15%) - How well the team collaborates on answers.",
    ],
    icon: Book,
    color: "hsl(200 80% 50%)",
    category: "arena",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/ZZ5NVCdwJzLrv9dt6",
  },
  {
    id: "face-painting",
    name: "Face Painting",
    tagline: "Where faces become canvases.",
    description:
      "Showcase your artistic creativity by transforming faces into vibrant and imaginative designs.",
    fullDescription:
      "Face Painting is a colorful and creative event where participants use the human face as their canvas. From intricate tribal designs to fantasy creatures and cultural motifs, this event celebrates artistry in a unique medium. Participants must demonstrate skill, creativity, and attention to detail while working within a time limit.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "All face painting materials must be brought by participants (skin-safe paints only).",
      "Time limit for completion will be announced before the event.",
      "Use of harmful or non-skin-safe materials is strictly prohibited.",
      "Participants must arrange their own model (face to paint on).",
      "Judging will be based on creativity, originality, technique, and overall visual impact.",
    ],
    evaluation: [
      "Creativity & Design (30%) - Originality and imagination in the design concept.",
      "Artistic Technique (25%) - Brush control, blending, and detail work.",
      "Color Usage (20%) - Harmony, vibrancy, and effective use of colors.",
      "Theme Interpretation (15%) - Connection to any given theme or concept.",
      "Overall Visual Impact (10%) - How striking and impressive the final result is.",
    ],
    icon: Paintbrush,
    color: "hsl(38 92% 50%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/kt9wFyTVjiH4gvFD7",
  },
  {
    id: "rangoli",
    name: "Rangoli",
    tagline: "Colors that speak tradition",
    description:
      "Create beautiful and colorful traditional patterns that reflect creativity, culture, and artistic skills.",
    fullDescription:
      "Rangoli is a traditional art event where participants create intricate and colorful floor designs using colored powders, flower petals, rice, and other natural materials. This event celebrates Indian culture and artistic heritage while encouraging modern creative interpretations. Show off your symmetry skills, color sense, and cultural creativity.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "All rangoli materials must be brought by participants.",
      "Time limit for completion will be announced before the event.",
      "Only traditional materials allowed (colored powder, flowers, rice, etc.).",
      "Participants must maintain cleanliness of their workspace.",
      "Judging will be based on creativity, symmetry, color usage, and overall beauty.",
    ],
    evaluation: [
      "Design & Creativity (30%) - Originality and complexity of the pattern.",
      "Color Coordination (25%) - Harmony, contrast, and vibrant use of colors.",
      "Symmetry & Precision (20%) - Accuracy and balance of the design.",
      "Cultural Representation (15%) - Connection to traditional or modern themes.",
      "Completion & Neatness (10%) - Cleanliness and finished quality of the rangoli.",
    ],
    icon: Paintbrush,
    color: "hsl(280 60% 55%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/H6Ah5SQ5Mm6bzW7V6",
  },
  {
    id: "gec-got-talent",
    name: "GEC Got Talent",
    tagline: "Unleash your talent, own the stage!",
    description:
      "Showcase your unique talent and shine on stage by expressing your skills with confidence and creativity.",
    fullDescription:
      "GEC Got Talent is the signature talent show of SRIJANA where anything goes -- singing, dancing, magic, mimicry, beatboxing, instrument playing, or any unique skill you possess. This is your moment to take the stage, wow the audience, and prove that GEC has the most talented students. From hidden gems to seasoned performers, everyone gets their spotlight.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "Performance duration: 3-5 minutes per act.",
      "All props and instruments must be arranged by the participant.",
      "No offensive, vulgar, or inappropriate content allowed.",
      "Background music tracks must be submitted in advance if needed.",
      "Judging will be based on talent, performance quality, confidence, and audience response.",
    ],
    evaluation: [
      "Talent & Skill (30%) - Technical ability and mastery of the chosen art form.",
      "Stage Presence (25%) - Confidence, energy, and command over the audience.",
      "Originality (20%) - Unique acts and creative presentations get extra points.",
      "Audience Response (15%) - How the crowd reacts to the performance.",
      "Overall Entertainment (10%) - How enjoyable and memorable the act is.",
    ],
    icon: Smile,
    color: "hsl(15 85% 55%)",
    category: "stage",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/siRMCXMfPJUZV8JX8",
  },
  {
    id: "esports",
    name: "Esports",
    tagline: "Game on. Victory awaits!",
    description:
      "Compete in thrilling gaming battles that test strategy, teamwork, and quick decision-making skills.",
    fullDescription:
      "Esports is the competitive gaming tournament of SRIJANA featuring popular titles like BGMI, Valorant, Free Fire, FIFA, and more. Players battle it out in bracket-style elimination formats across multiple game titles. Whether you are a solo warrior or a squad leader, this is your arena to prove your gaming dominance. High-energy matches, live commentary, and epic clutch moments await.",
    rules: [
      "Team size: 4-6 members depending on the game.",
      "Participants must bring their own gaming accounts and devices if required.",
      "Use of hacks, cheats, exploits, or third-party software is strictly prohibited.",
      "Players must be present at their stations 10 minutes before the match.",
      "Disconnection during a match will result in a 5-minute pause; failure to reconnect means forfeiture.",
      "Toxic behavior, abusive language, or unsportsmanlike conduct leads to disqualification.",
    ],
    evaluation: [
      "Win/Loss Record (40%) - Tournament bracket progression based on match wins.",
      "In-Game Performance (25%) - KDA, objectives, and clutch plays.",
      "Teamwork & Communication (20%) - Coordination and strategy execution.",
      "Sportsmanship (15%) - Fair play, respect for opponents, and conduct.",
    ],
    icon: Trophy,
    color: "hsl(45 93% 47%)",
    category: "arena",
    teamSize: "4-6 members",
    registrationLink: "https://forms.gle/wmUPWvyNQyFS3Xrd9",
  },
  {
    id: "treasure-hunt",
    name: "Treasure Hunt",
    tagline: "Decode the clues, discover the treasure!",
    description:
      "Follow clues, solve puzzles, and race against time to uncover the hidden treasure through teamwork and strategy.",
    fullDescription:
      "Treasure Hunt is a campus-wide adventure where teams race against each other to solve cryptic clues, decode riddles, and find hidden checkpoints. Each clue leads to the next location, and the first team to complete all checkpoints and find the final treasure wins. This event tests your logic, teamwork, speed, and campus knowledge in a thrilling race.",
    rules: [
      "Team size: 1-6 members.",
      "All team members must stay together throughout the hunt.",
      "Clues must not be shared with other teams. Sharing leads to disqualification.",
      "No damage to college property while searching for clues.",
      "Use of vehicles is strictly prohibited. Only on foot.",
      "Mobile phones can be used for calculations but not for calling others for help.",
    ],
    evaluation: [
      "Completion Time (40%) - Total time taken to find all checkpoints and the final treasure.",
      "Clues Solved (30%) - Number of clues correctly decoded without hints.",
      "Teamwork (15%) - How well the team worked together and communicated.",
      "Fair Play (15%) - No cheating, no property damage, and respectful behavior.",
    ],
    icon: Search,
    color: "hsl(0 84% 60%)",
    category: "arena",
    teamSize: "1-6 members",
    registrationLink: "https://forms.gle/eWVnZHx7mhvMtKTNA",
  },
  {
    id: "stand-up-comedy",
    name: "Stand Up Comedy",
    tagline: "Laugh loud, laugh proud!",
    description:
      "Deliver witty jokes and humorous stories to entertain the audience with confidence and timing.",
    fullDescription:
      "Stand Up Comedy is the crowd favorite at SRIJANA. Take the mic and deliver your best comedy set in front of a live audience. Whether your style is observational, satirical, self-deprecating, or absurd, this is your moment to make the room explode with laughter. From open mic energy to headliner vibes, bring your A-game and leave everyone in splits.",
    rules: [
      "Individual participation only.",
      "Performance time: 5-7 minutes per set.",
      "All material must be original. Copying from known comedians leads to disqualification.",
      "No jokes targeting specific individuals in the audience or at the college.",
      "No extremely vulgar, racist, sexist, or hateful content.",
      "Performers must submit a brief content outline before their set.",
    ],
    evaluation: [
      "Humor & Comedy Quality (35%) - How funny the set actually is.",
      "Originality (25%) - Fresh material, unique perspectives, and creative punchlines.",
      "Delivery & Timing (20%) - Pacing, pauses, voice modulation, and comedic timing.",
      "Audience Response (15%) - Volume and frequency of laughs from the crowd.",
      "Stage Presence (5%) - Confidence, movement, and overall command of the stage.",
    ],
    icon: Mic,
    color: "hsl(170 75% 41%)",
    category: "stage",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/vHaRBRaBLg4dkvhw9",
  },
  {
    id: "pot-design",
    name: "Pot Design",
    tagline: "Shape your creativity.",
    description:
      "Decorate and transform simple pots into creative and eye-catching artistic pieces.",
    fullDescription:
      "Pot Design is a hands-on creative event where participants transform plain pots into stunning works of art. Using paints, beads, fabric, natural materials, and any decorative elements, you must create a visually impressive and original design. This event tests your three-dimensional artistic skills and ability to work with unconventional surfaces.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "Plain pots will be provided. All decoration materials must be brought by participants.",
      "Time limit for completion will be announced before the event.",
      "Use of harmful or dangerous materials is strictly prohibited.",
      "Participants must maintain cleanliness of their workspace.",
      "Judging will be based on creativity, originality, technique, and overall visual appeal.",
    ],
    evaluation: [
      "Creativity & Design (30%) - Originality and imagination in the decoration.",
      "Artistic Technique (25%) - Skill in painting, detailing, and material usage.",
      "Color & Aesthetic (20%) - Color harmony and overall visual beauty.",
      "Theme Interpretation (15%) - Connection to any given theme or concept.",
      "Completion & Neatness (10%) - Finished quality and cleanliness of the final piece.",
    ],
    icon: SmileIcon,
    color: "hsl(320 70% 50%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/YkY4KtLwwcGZnt7x7",
  },
  {
    id: "photography",
    name: "Photography",
    tagline: "Freeze the moment forever.",
    description:
      "Capture stunning moments and emotions through your lens, turning ordinary scenes into lasting memories.",
    fullDescription:
      "Photography is a visual storytelling event where participants capture stunning images based on a given theme or freely. Whether you use a DSLR, mirrorless camera, or smartphone, this event celebrates your eye for composition, light, and emotion. Submit your best shots and let your photographs speak louder than words.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "DSLR, mirrorless cameras, and smartphones are all allowed.",
      "Theme may be announced at the start of the event.",
      "Basic editing (exposure, contrast, crop) is allowed. Heavy manipulation is not.",
      "All photos must be original. Pre-shot or stock images lead to disqualification.",
      "Judging will be based on composition, theme relevance, creativity, and technical quality.",
    ],
    evaluation: [
      "Composition & Framing (30%) - Rule of thirds, leading lines, and visual balance.",
      "Theme Interpretation (25%) - Creative connection to the given theme.",
      "Technical Quality (20%) - Focus, exposure, depth of field, and clarity.",
      "Storytelling (15%) - Emotional impact and narrative quality of the image.",
      "Creativity & Uniqueness (10%) - Standing out with a fresh perspective.",
    ],
    icon: Camera,
    color: "hsl(220 70% 55%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/APdCpgjXVvxjLxMQ9",
  },
  {
    id: "master-chef",
    name: "Master Chef",
    tagline: "Cook with passion, serve with pride!",
    description:
      "Showcase your culinary skills by creating delicious and innovative dishes with taste and presentation.",
    fullDescription:
      "Master Chef is the ultimate culinary showdown at SRIJANA. Participants must prepare a dish within a given time limit that impresses the judges with taste, presentation, creativity, and hygiene. Whether you cook traditional Indian food, continental, fusion, or desserts, your dish should tell a story and delight the palate.",
    rules: [
      "Participants can enter individually or as a team (maximum 4 members).",
      "All ingredients and cooking equipment must be brought by participants.",
      "Time limit for cooking will be announced before the event.",
      "Maintain strict hygiene and cleanliness at your cooking station.",
      "No pre-cooked or pre-prepared food items allowed.",
      "Judging will be based on taste, presentation, creativity, hygiene, and overall impact.",
    ],
    evaluation: [
      "Taste & Flavor (35%) - Overall taste, seasoning, and flavor balance.",
      "Presentation & Plating (25%) - Visual appeal and creative plating.",
      "Creativity & Innovation (20%) - Unique recipes, ingredients, or techniques.",
      "Hygiene & Cleanliness (10%) - Station cleanliness and food safety.",
      "Time Management (10%) - Completing the dish within the allotted time.",
    ],
    icon: ChefHat,
    color: "hsl(50 90% 50%)",
    category: "stage",
    teamSize: "Individual or Team (max 4)",
    registrationLink: "https://forms.gle/mECKGPw5x4UNgLps5",
  },
]

export function getEventById(id: string): EventData | undefined {
  return events.find((e) => e.id === id)
}

export function getEventsByCategory(
  category: EventData["category"]
): EventData[] {
  return events.filter((e) => e.category === category)
}
