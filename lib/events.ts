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
  coordinator: string   // 👈 NEW FIELD
  registrationLink: string
}


export const events: EventData[] = [
  {
    id: "art-and-craft",
    name: "Art & Craft",
    tagline: "Colour Your Worldc",
    description:
      "Creative, hands-on activities that use imagination and skill to produce unique and functional art pieces.",
    fullDescription:
      "The Art Gallery Event is a celebration of creativity, showcasing the incredible talent of our students. This event is an opportunity for students to display their artwork, ranging from paintings, drawings, sculptures for recognition and prizes. The gallery space will be set up with great care to ensure that each piece is displayed in the best possible light, creating a vibrant and engaging environment for visitors. Students and guests are encouraged to walk around and explore the artwork, engage with the artists, and appreciate the diverse range of styles and techniques on display. The participants may sell their art/craft and place a price tag along with it. It will be sold on a first-come, first-served basis.",
    rules: [
      "The interpretation and clarity of the theme to the viewer. ",
      "The creativity, uniqueness, and originality of the depicted art. ",
      "Quality of artistic composition and overall design. ",
      "Colour, tone, and balance of the image within its space. ",
      "Overall impression of the art. What is the effect of the artwork in general and as a whole? ",
    ],
    evaluation: [
      "Originality  (20%)",
      "Creativity (25%)",
      "Technique (20%)",
      "Colour Combination  (15%)",
      "Overall Presentation & Impact (20%)",
    ],
    icon: Paintbrush,
    color: "hsl(25 95% 53%)",
    category: "creative",
    teamSize: "Individual",
    coordinator: "",
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
    coordinator: "",
    registrationLink: "https://forms.gle/t8rZSS2caRUDe2JZA",
  },
  {
    id: "reel-making",
    name: "FRAME THE FAME",
    tagline: "Frame the moment, tell the story.",
    description:
      "Create a short, engaging video based on a given theme to showcase creativity, storytelling, and editing skills.",
    fullDescription: "The Reels making Competition is a creative digital media contest organized for students of Gandhi Engineering College to showcase their storytelling, editing, and content creation skills through short-form video reels.Participants are required to create an engaging reel compilation (30–90 seconds) based on a given theme .The competition aims to:Encourage creativity and digital expressionPromote campus spirit and student talentEnhance video editing and storytelling skillsCreate engaging content representing the college community",
    rules: [
      "Participation can be individual",
      "Theme of the competition is Beyond the Books",
      "The reel must strictly align with the given theme.",
      "Duration: 30 to 90 seconds",
      "Format: MP4 (preferred)",
      "Orientation: Vertical (9:16 ratio)",
      "Minimum resolution: 720p",
      "Content must be original.",
      "No copyrighted music without proper credits.",
      "No offensive, political, or inappropriate content.",
      "Respect college decorum and ethics.",
      "Plagiarism will lead to immediate disqualification.",
      "Submission via Google Form / designated email / event portal.",
      "File name format: TeamName_Department_Year",
      "Last date of submission must be strictly followed.",
    ],
    evaluation: [
      " Creativity & Originality	(25%)",
      "Video Quality & Editing	(20%)",
      "Storytelling & Concept Clarity	(20%)",
      "Relevance to Theme	(15%)",
      "Overall Impact & Engagement	(10%)",
      "Audio & Technical Presentation	(10%)"
    ],
    icon: Video,
    color: "hsl(262 83% 58%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    coordinator: "",
    registrationLink: "https://forms.gle/U66VngsbyLNsjeKYA",
  },
  {
    id: "short-movie",
    name: "Mini Movie Fest",
    tagline: "Big stories in small frames",
    description:
      "Create a compelling short film that delivers a powerful story, message, or emotion within a limited duration.",
    fullDescription:
      "This short film making event aims to create awareness among students about important social issues affecting society today. The event encourages participants to use the medium of short films to highlight topics such as women empowerment, mental health, environmental protection, child rights, substance abuse, road safety, gender equality, and other relevant social concerns. Students are expected to present meaningful messages that inspire positive thinking, social responsibility, and change. The event provides a platform for young minds to express their views creatively while promoting empathy, awareness, and ethical values in society.",
    rules: [
      "The competition is open to all registered students of the college.",
      "Participants can take part in a team.",
      "The duration of the short film should be 10–15 minutes, including titles and credits.",
      "The short film must be original and should not violate copyright rules.",
      "The content should not include offensive, abusive, political, or vulgar material.",
      "Films once submitted cannot be modified or replaced.",
      "Participants must submit their films in MP4 format before the deadline.",
      "The decision of the judges will be final and binding."
    ],
    evaluation: [
      "Concept & Originality (25%)",
      "Storyline & Screenplay (20%)",
      "Direction & Creativity (20%)",
      "Technical Quality (Camera, Editing, Sound) (20%)",
      "Message & Overall Impact (15%)",
    ],
    icon: Video,
    color: "hsl(142 71% 45%)",
    category: "creative",
    teamSize: "Individual or Team (max 4)",
    coordinator: "",
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
    coordinator: "",
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
    coordinator: "",
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
    coordinator: "",
    registrationLink: "https://forms.gle/H6Ah5SQ5Mm6bzW7V6",
  },
  {
    id: "gec-got-talent",
    name: "GEC TALENT SPOTLIGHT ",
    tagline: "Unleash your talent, own the stage!",
    description:
      "Showcase your unique talent and shine on stage by expressing your skills with confidence and creativity.",
    fullDescription:
      "GEC Talent spotlight is an event designed to showcase students'skills—such as singing, dancing, acting,comedy instrumentals or any other unique talent—fostering community, boosting confidence, and providing entertainment. It serves as a platform to display diverse abilities, encourages participation,and helps new students integrate into campus life. ",
    rules: [
      "Performance Categories :Singing (Solo/Group),Dancing (Solo/Group),Instrumental Music,Drama,Comedy,Mimicry,Any other unique talent",
      "The competition is open to all students registered for this event.",
      "Time Limit: Solo performance: 3–5 minutes. Group performance: 5–8 minutes.Exceeding the time limit may lead to point deduction or disqualification.",
      "Vulgarity, offensive language, or inappropriate gestures are strictly prohibited",
      "Costumes should be decent and appropriate.",
      "Participants must report 15 minutes before their performance.",
      "The decision of the judges will be final and binding",
    ],
    evaluation: [
      "Talent & Skill (40%)",
      "Creativity & Originality (20%)",
      "Stage Presence & Confidence (20%)",
      "Audience Engagement (10%)",
      "Overall Impact (10%)",
    ],
    icon: Smile,
    color: "hsl(15 85% 55%)",
    category: "stage",
    teamSize: "Individual or Team (max 4)",
    coordinator: "",
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
    coordinator: "",
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
    coordinator: "",
    registrationLink: "https://forms.gle/eWVnZHx7mhvMtKTNA",
  },
  {
    id: "stand-up-comedy",
    name: "Laugh Riot",
    tagline: "Laugh loud, laugh proud!",
    description:
      "Deliver witty jokes and humorous stories to entertain the audience with confidence and timing.",
    fullDescription: "Laugh Riot  is a live performance art where a comedian entertains an audience by delivering jokes, stories, observations, and punchlines directly to them — usually while standing on stage.Unlike scripted theater, stand-up often feels personal and conversational. The comedian may talk about everyday life, relationships, culture, work, politics, or personal experiences, turning ordinary situations into humorous moments.",
    rules: [
      "Performers must stick to their assigned time.",
      "No hate speech",
      "Be mindful of sensitive topics",
    ],
    evaluation: [
      "original and creative Content  Writing (35%)",
      "Delivery & Performance (25%)",
      "Structure & Flow (15%)",
      "Audience Response (25%)",
    ],
    icon: Mic,
    color: "hsl(170 75% 41%)",
    category: "stage",
    teamSize: "Individual",
    coordinator: "",
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
    coordinator: "",
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
    coordinator: "",
    registrationLink: "https://forms.gle/APdCpgjXVvxjLxMQ9",
  },
  {
    id: "master-chef",
    name: "Flavour Fiesta",
    tagline: "Cook with passion, serve with pride!",
    description:
      "Showcase your culinary skills by creating delicious and innovative dishes with taste and presentation.",
    fullDescription: "The Flavour Fiesta – No Flame Cooking Competition is a creative culinary event where participants prepare delicious and innovative dishes without using gas, stove, oven, or any heating equipment.The competition encourages students to explore healthy, quick, and nutritious recipes that require no cooking. It promotes creativity, food presentation skills, teamwork, time management, and awareness of hygienic food practices.Participants will prepare dishes such as salads, sandwiches, desserts, beverages, cold starters, fusion snacks, or innovative healthy recipes within the allotted time. The event provides a platform for budding chefs to showcase their culinary talent in a safe and eco-friendly manner.",
    rules: [
      "The competition is open to registered participants only..",
      "Participants may compete individually or in teams (maximum 2 members per team).",
      "Strictly no use of gas, stove, oven, induction, microwave, or any heating appliance is allowed.",
      "All ingredients must be pre-washed and pre-boiled (if required) from home",
      "Cutting, mixing, assembling, and garnishing must be done at the venue.",
      "Participants must bring their own utensils, knives, chopping boards, extension cords (if needed for blenders), etc.",
      "Use of electricity for blending/mixing (if permitted) should follow safety guidelines.",
      "The time limit will be 30 minutes.",
      "Participants must maintain cleanliness and hygiene during the event.",
      "Wastage of food should be minimal.",
      "The prepared dish must be sufficient for judging.",
      "Participants must present and explain their dish to the judges.",
      "Judges’ decision will be final and binding.",
      "	Any violation of rules will lead to disqualification.",
    ],
    evaluation: [
      "Taste & Flavour	(25%)",
      "Creativity & Innovation	(20%)",
      "Presentation & Plating	(20%)",
      "Nutritional Value	(15%)",
      "Hygiene & Cleanliness	(10%)",
      "Time Management	(5%)",
      "Explanation / Communication	(5%)"
    ],
    icon: ChefHat,
    color: "hsl(50 90% 50%)",
    category: "stage",
    teamSize: "Individual or Team (max 4)",
    coordinator: "",
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
