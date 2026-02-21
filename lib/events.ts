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
    id: "art-and-craft",
    name: "Art & Craft",
    tagline: "Colour Your Worldc",
    description:
      "Creative, hands-on activities that use imagination and skill to produce unique and functional art pieces.",
    fullDescription: "The Art Gallery Event is a celebration of creativity, showcasing the incredible talent of students. This event provides an opportunity for participants to display their artwork, including paintings, drawings, sculptures, and crafts, for recognition and prizes. The gallery space will be carefully arranged to ensure each piece is presented attractively, creating a vibrant and engaging environment for visitors. Students and guests are encouraged to explore the artwork, interact with the artists, and appreciate the diverse styles and techniques on display. Participants may also sell their art or craft by placing a price tag, and items will be sold on a first-come, first-served basis.",

    rules: [
      "The interpretation and clarity of the theme to the viewer will be considered.",
      "Creativity, uniqueness, and originality of the artwork are essential.",
      "Quality of artistic composition and overall design will be evaluated.",
      "Colour, tone, and balance of the artwork within its space will be judged.",
      "Overall impression and impact of the artwork will be assessed.",
      "The last date to submit the Art & Crafts is 27th Feb 2026",
      "The decision of the judges will be final and binding.",
    ],

    evaluation: [
      "Creativity & Originality (25%)",
      "Theme Interpretation & Clarity (20%)",
      "Artistic Composition & Design (20%)",
      "Colour Combination & Balance (20%)",
      "Overall Impact & Presentation (15%)",
    ],

    icon: Paintbrush,
    color: "hsl(25 95% 53%)",
    category: "creative",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/rabfa6KE4CxLM8mJ8",
  },
  {
    id: "theme-act",
    name: "Theme Act",
    tagline: "Love mortality your imagination",
    description:
      "A psychological test where a person creates stories based on pictures to reveal their personality, emotions, and hidden thoughts.",
    fullDescription: "Theme Act: Unity in Diversity – Cultures of India is a cultural performance event aimed at showcasing the rich and vibrant diversity of Indian traditions. Participants will creatively represent various Indian states through elements such as folk dances, festivals, traditional attire, music, languages, and heritage. The objective of the event is to promote national integration, cultural respect, and harmony while highlighting the beauty of India’s unity in diversity. Performances must be respectful, accurate, and creatively executed to celebrate the essence of Indian culture.",

    rules: [
      "Open to students/participants of the organizing institution.",
      "Participation may be individual or group-based.",
      "Each team must register in advance and only one entry per team is allowed.",
      "The act must focus on Indian cultural diversity.",
      "Teams may represent a single state or multiple states showing unity.",
      "Performance duration must be between 5 to 10 minutes.",
      "The act must be performed live; background music is allowed.",
      "Vulgarity, offensive language, or political propaganda is strictly prohibited.",
      "Performances must promote harmony, inclusivity, and cultural respect.",
      "Traditional costumes are encouraged and must be arranged by participants.",
      "Props must be safe; no fire, hazardous materials, or sharp objects are allowed.",
      "Music tracks must be submitted in advance if required.",
      "Setup and clearance time must not exceed 2 minutes.",
      "Participants must report 30 minutes before performance.",
      "Misconduct or damage to stage/property will lead to disqualification.",
      "Judges’ decision will be final and binding.",
      "Organizers reserve the right to modify rules if necessary.",
    ],

    evaluation: [
      "Creativity & Originality (20%)",
      "Cultural Accuracy (20%)",
      "Coordination & Presentation (20%)",
      "Costumes & Visual Impact (20%)",
      "Overall Message & Impact (20%)",
    ],

    icon: Paintbrush,
    color: "hsl(340 82% 52%)",
    category: "creative",
    teamSize: "Team (Size 4)",
    registrationLink: "https://forms.gle/t8rZSS2caRUDe2JZA",
  },
  {
    id: "reel-making",
    name: "FRAME THE FAME",
    tagline: "Frame the moment, tell the story.",
    description:
      "Create a short, engaging video based on a given theme to showcase creativity, storytelling, and editing skills.",
    fullDescription: "FRAME THE FAME is a Reels Making Competition organized for students of Gandhi Engineering College to showcase their storytelling, editing, and digital content creation skills through short-form videos. Participants are required to create an engaging reel compilation (30–90 seconds) based on the theme 'Beyond the Books'. The competition aims to encourage creativity and digital expression, promote campus spirit and student talent, enhance video editing and storytelling skills, and create engaging content that represents the college community in an innovative way.",

    rules: [
      "Open to all students of Gandhi Engineering College.",
      "Participation is individual.",
      "The theme of the competition is 'Beyond the Books' and must be strictly followed.",
      "Duration of the reel must be between 30 to 90 seconds.",
      "Video format should be MP4 (preferred) with vertical orientation (9:16 ratio).",
      "Minimum video resolution must be 720p.",
      "Content must be original.",
      "No copyrighted music without proper credits.",
      "No offensive, political, or inappropriate content is allowed.",
      "Participants must respect college decorum and ethics.",
      "Plagiarism will lead to immediate disqualification.",
      "Submission must be done via Google Form / designated email / event portal.",
      "File name format: TeamName_Department_Year.",
      "Last date of submission must be strictly followed.",
      "Judges’ decision will be final and binding.",
      "Late submissions will not be accepted.",
    ],

    evaluation: [
      "Creativity & Originality (25%)",
      "Video Quality & Editing (20%)",
      "Storytelling & Concept Clarity (20%)",
      "Relevance to Theme (15%)",
      "Overall Impact & Engagement (10%)",
      "Audio & Technical Presentation (10%)",
    ],

    icon: Video,
    color: "hsl(262 83% 58%)",
    category: "creative",
    teamSize: "Individual",
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
    registrationLink: "https://forms.gle/aqNLdr67XMt5hC8u9",
  },
  {
    id: "quiz",
    name: "Brain Battle",
    tagline: "Think fast, answer smart!",
    description:
      "Test your knowledge, speed, and accuracy across various topics in an exciting competitive format.",
    fullDescription:
      "GEC Brain Battle is an academic and knowledge-based quiz competition organized to enhance the intellectual and analytical skills of students. The event will bring together participants from different departments to compete in an engaging environment that promotes learning, teamwork, and confidence. The event aims to encourage students to think critically, respond quickly, and apply their academic knowledge in a competitive setting.The first stage will be a Preliminary Screening Round to shortlist the best teams.The second stage will follow a KBC-based interactive format, where selected participants will answer questions of increasing difficulty using lifelines and strategic thinking.The quiz will include rounds based on:(General knowledge,Current affairs,Logical thinking,Sports and Entertainments)",
    rules: [
      "Open to all students of GEC.",
      "Participation can be individual or in teams of 2 members.",
      "Prior registration is mandatory.",
      "The quiz will be conducted in multiple rounds (screening + final rounds).",
      "Participants must follow the instructions of the quiz coordinator",
      "Use of mobile phones or electronic gadgets is strictly prohibited.",
      "Time limit will be given for each question.",
      "No negative marking will be applied.",
      "Participants must maintain decorum throughout the event.",
      "Any unfair means or misconduct will lead to disqualification.",
      "Decision of the quiz master/judges will be final.",
    ],
    evaluation: [
      "Round 1: Preliminary (Screening Test) [ 1.Purpose: Shortlisting only 2. mark per question 3.No negative marking 4.Top 8 qualify) ] (30%)",
      "Round 2: KBC-Based Final Round [1.Progressive difficulty model (inspired by Kaun Banega Crorepati) 2.Lifelines allowed (any 2) 3.No negative marking 4.Score accumulates ] (70%)",
    ],
    icon: Book,
    color: "hsl(200 80% 50%)",
    category: "arena",
    teamSize: "Team (max 2)",
    registrationLink: "https://forms.gle/ZZ5NVCdwJzLrv9dt6",
  },
  {
    id: "face-painting",
    name: "Face Fantasy",
    tagline: "Where faces become canvases.",
    description:
      "Showcase your artistic creativity by transforming faces into vibrant and imaginative designs.",
    fullDescription: "Face Fantasy – The Art of Expression is a creative competition where participants transform faces into artistic masterpieces using colors, imagination, and skill. This event provides a platform for participants to showcase artistic creativity, express themes, emotions, and ideas through face art, demonstrate precision and color coordination, and promote cultural, social, or imaginative concepts. Participants may compete individually or in teams (one painter and one model).",

    rules: [
      "The competition may be individual (self-face painting) or team-based (1 painter + 1 model).",
      "Time limit: 60–90 minutes.",
      "Participants must bring their own materials (paints, brushes, sponges, etc.).",
      "Only skin-safe, non-toxic paints are allowed.",
      "The theme (if any) must be followed strictly.",
      "No pre-painted or pre-designed faces are allowed.",
      "Participants must complete the artwork within the allotted time.",
      "Use of accessories is allowed only if specified.",
      "Participants must maintain cleanliness of the venue.",
      "Judges’ decision will be final and binding.",
    ],

    evaluation: [
      "Creativity & Originality (25%)",
      "Theme Relevance (20%)",
      "Color Harmony & Technique (20%)",
      "Detailing & Neatness (20%)",
      "Overall Presentation & Impact (15%)",
    ],

    icon: Paintbrush,
    color: "hsl(38 92% 50%)",
    category: "creative",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/kt9wFyTVjiH4gvFD7",
  },
  {
    id: "rangoli",
    name: "Rangotsav",
    tagline: "Colors that speak tradition",
    description:
      "Create beautiful and colorful traditional patterns that reflect creativity, culture, and artistic skills.",
    fullDescription: "Rangotsav – The Art of Colors is a creative cultural competition that celebrates the traditional Indian art of Rangoli. Participants will design and create vibrant floor patterns using colors, flowers, and eco-friendly materials. The event aims to encourage artistic expression and creativity, promote Indian culture and traditions, foster teamwork and healthy competition, and provide a platform for students to showcase their talent. The competition may be conducted individually or in teams, based on the theme announced on the spot or prior to the event.",

    rules: [
      "The competition can be individual or team-based (maximum 3–4 members per team).",
      "Time limit: 60–90 minutes.",
      "Participants must bring their own materials.",
      "Use of eco-friendly materials is encouraged.",
      "The design must be created on the spot.",
      "Pre-made stencils or printed designs are not allowed (unless specified).",
      "The allotted space must be used properly.",
      "Participants must maintain cleanliness in the area.",
      "Any inappropriate or offensive design will lead to disqualification.",
      "Judges’ decisions will be final and binding.",
    ],

    evaluation: [
      "Creativity & Originality (25%)",
      "Theme Relevance (20%)",
      "Color Combination (20%)",
      "Neatness & Presentation (20%)",
      "Overall Impact (15%)",
    ],

    icon: Paintbrush,
    color: "hsl(280 60% 55%)",
    category: "creative",
    teamSize: "Individual",
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
    teamSize: "Individual",
    registrationLink: "https://forms.gle/siRMCXMfPJUZV8JX8",
  },
  {
    id: "esports",
    name: "Esports",
    tagline: "Game on. Victory awaits!",
    description:
      "Compete in thrilling gaming battles that test strategy, teamwork, and quick decision-making skills.",
    fullDescription:
      "Esports is the competitive gaming tournament of SRIJANA featuring popular titles like BGMI, Free Fire and more. Players battle it out in bracket-style elimination formats across multiple game titles. Whether you are a solo warrior or a squad leader, this is your arena to prove your gaming dominance. High-energy matches, live commentary, and epic clutch moments await.",
    rules: [
      "For FreeFire [ rule 2 to 18 ] and For BGMI [ rule 20 to 36 ]",
      "Team size: 4 main players (Squad format).",
      "Only the team leader can register the team.",
      "All teams must register before the tournament begins.",
      "No player is allowed to play for two teams in the same tournament.",
      "Mode: Battle Royale – Squad.",
      "Maps may include Bermuda, Purgatory, and Nexterra.",
      "1 point per kill (Kill Points system).",
      "No cheats, hacks, third-party software, or bug/glitch abuse allowed.",
      "No teaming with opponents and no emotes towards opponents.",
      "Only approved devices (usually mobile) are allowed.",
      "Stable internet connection is mandatory.",
      "Teams must join the custom room before countdown ends.",
      "Violation may result in warning, point deduction, disqualification, or permanent ban.",
      "No abusive language or toxic behavior.",
      "Players must respect referees, opponents, and follow organizer instructions.",
      "Allotted rooms must be used by assigned teams only. Players must remain available in their designated room during the match schedule.",
      "Participants must bring their own sound devices (earphones/headphones). If no sound device is available, the in-game sound must remain completely muted.",
      "For BGMI [ rule 20 to 36 ]  and For FreeFire [ rule 2 to 18 ]",
      "Team size: 4 players (Squad format).",
      "Only the team leader can register the squad.",
      "All participants must complete registration before the tournament starts.",
      "A player cannot participate in more than one team.",
      "Mode: Classic – Squad (TPP/FPP as decided by organizers).",
      "Maps may include Erangel, Miramar, Sanhok, and Vikendi.",
      "Custom room will be created by organizers.",
      "Teams must join the room at least 10 minutes before match start.",
      "1 point per kill (Kill Points system).",
      "No hacks, cheats, emulators (if restricted), or third-party software allowed.",
      "No teaming with opponents or exploiting game bugs/glitches.",
      "Stable internet connection is mandatory.",
      "Failure to reconnect within given time may result in forfeiture.",
      "Toxic behavior, abusive language, or misconduct leads to disqualification.",
      "Organizer's decision will be final in case of disputes.",
      "Allotted rooms must be used by assigned teams only. Players must remain available in their designated room during the match schedule.",
      "Participants must bring their own sound devices (earphones/headphones). If no sound device is available, the in-game sound must remain completely muted."
    ],
    evaluation: [
      "Placement Points(Free Fire) (50%) - Based on final match position (1st = 12 pts, 2nd = 9 pts, 3rd = 8pts , 4th = 7 etc.).",
      "Kill Points(Free Fire) (25%) - 1 point per kill.",
      "Consistency Across Matches(Free Fire) (15%) - Performance over multiple matches.",
      "Sportsmanship & Conduct(Free Fire) (10%) - Fair play, discipline, and respect.",
      "Total (Free Fire) (100%)",
      "Placement Points(BGMI) (50%) - Based on final position (1st = 15 pts, 2nd = 12 pts, 3rd = 10 pts, etc.).",
      "Kill Points(BGMI) (30%) - 1 point per kill.",
      "Team Coordination & Strategy(BGMI) (10%) - Tactical gameplay and communication.",
      "Sportsmanship & Fair Play(BGMI) (10%) - Discipline and respectful conduct.",
      "Total (BGMI) (100%)"
    ],
    icon: Trophy,
    color: "hsl(45 93% 47%)",
    category: "arena",
    teamSize: "Team (Size 4)",
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
    teamSize: "Team (Size 4-6)",
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
    registrationLink: "https://forms.gle/vHaRBRaBLg4dkvhw9",
  },
  {
    id: "pot-design",
    name: "Pot Design",
    tagline: "Shape your creativity.",
    description:
      "Decorate and transform simple pots into creative and eye-catching artistic pieces.",
    fullDescription:
      "The Pot Design Competition is a creative event aimed at encouraging students to showcase their artistic skills, innovation, and environmental awareness by designing and decorating pots using eco-friendly materials. Participants will transform simple pots into visually appealing and meaningful creations based on a  theme.",
    rules: [
      "Open to all students of the college.",
      "Individual participation.",
      "Participants must bring their own materials.",
      "Only eco-friendly and non-toxic materials are allowed.",
      "Ready-made decorative pots are not allowed.",
      "The base pot given by college",
      "Total time: 1 hour",
      "Late submissions will not be considered.",
      "No pre-designed or pre-decorated pots allowed.",
      "Use of sharp tools must be handled carefully.",
      "The design must be completed within the competition venue.",
      "Judges’ decision will be final.",
      "Copying from others.",
      "Violation of time rules."
    ],
    evaluation: [
      "Creativity & Originality (40%)",
      "Theme Relevance (20%)",
      "Finishing & Neatness (30%)",
      "Overall Presentation & Explanation (10%)",

    ],
    icon: SmileIcon,
    color: "hsl(320 70% 50%)",
    category: "creative",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/YkY4KtLwwcGZnt7x7",
  },
  {
    id: "photography",
    name: "Photography",
    tagline: "Freeze the moment forever.",
    description:
      "Capture stunning moments and emotions through your lens, turning ordinary scenes into lasting memories.",
    fullDescription: "The Photography Event is designed to evaluate participants’ originality, creativity, and practical understanding of photography techniques. The competition consists of two rounds. Round 1 focuses on raw photography submission where participants must submit an original, unedited photograph clicked by themselves without using third-party editing tools. Round 2 is an on-spot campus photography round where shortlisted participants capture a photograph based on a given technique, testing their practical skills, composition knowledge, and creativity under time constraints.",

    rules: [
      "Participants must submit an original photograph clicked by themselves.",
      "The image must be a RAW / unedited photo.",
      "Only inbuilt mobile camera filters are allowed.",
      "Use of third-party editing applications is strictly prohibited.",
      "AI editing, background removal, heavy color correction, or object removal is not allowed.",
      "Participants must submit the original image file and a screenshot of image details (date, time, and device information).",
      "Plagiarism or use of downloaded images will lead to immediate disqualification.",
      "Selected participants from Round 1 will qualify for the on-spot campus round.",
      "Participants must capture a photograph based on the given technique during Round 2.",
      "Participants must briefly explain the technique used in their photograph.",
      "Images must be submitted in JPEG/PNG format as instructed by the organizing committee.",
      "Participants must use their own mobile phones or cameras.",
      "Any violation of rules will result in disqualification.",
      "The decision of the organizing committee will be final and binding.",
      "By participating, students agree that their photographs may be used for college promotional purposes with proper credits.",
    ],

    evaluation: [
      "Creativity & Originality (25%)",
      "Composition & Technique Application (25%)",
      "Theme Interpretation (20%)",
      "Technical Quality (20%)",
      "Explanation & Concept Clarity (10%)",
    ],

    icon: Camera,
    color: "hsl(220 70% 55%)",
    category: "creative",
    teamSize: "Individual",
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
    teamSize: "Team (size 2-4)",
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
