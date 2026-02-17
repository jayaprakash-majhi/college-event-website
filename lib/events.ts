import {
  Music,
  Paintbrush,
  Mic2,
  Gamepad2,
  Camera,
  Drama,
  BookOpen,
  Utensils,
  Trophy,
  Swords,
  Search,
  Shirt,
  Brain,
  Laugh,
  type LucideIcon,
  Video,
  Book,
  Smile,
  Mic,
  SmileIcon,
  ChefHat,
} from "lucide-react"
import { Drawer } from "vaul"

export interface EventData {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  color: string
  category: "stage" | "arena" | "creative"
  teamSize: string
  registrationLink: string
}

export const events: EventData[] = [
  {
    id: "Art & Craft Versal",
    name: "Art & Craft",
    tagline: "Colour Your World",
    description:
      "creative, hands-on activities that use imagination and skill to produce unique, often functional, items",
    icon: Paintbrush,
    color: "hsl(25 95% 53%)",
    category: "stage",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/rabfa6KE4CxLM8mJ8",
  },
  {
    id: "Theme Act",
    name: "Theme Act",
    tagline: "Love mortality your imagination",
    description:
      "psychological test where a person creates stories based on pictures to reveal their personality, emotions, and hidden thoughts.",
    icon: Paintbrush,
    color: "hsl(340 82% 52%)",
    category: "creative",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/t8rZSS2caRUDe2JZA",
  },
  {
    id: "Reel Making",
    name: "Reel Making",
    tagline: "Frame the moment, tell the story.",
    description:
      "Create a short, engaging video based on a given theme to showcase creativity, storytelling, and editing skills.",
    icon: Video,
    color: "hsl(262 83% 58%)",
    category: "arena",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/U66VngsbyLNsjeKYA",
  },
  {
    id: "Short Movie",
    name: "Short Movie",
    tagline: "Big stories in small frames",
    description:
      "Create a compelling short film that delivers a powerful story, message, or emotion within a limited duration.",
    icon: Video,
    color: "hsl(142 71% 45%)",
    category: "arena",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/aqNLdr67XMt5hC8u9",
  },
  {
    id: "Quiz",
    name: "Quiz",
    tagline: "Think fast, answer smart!",
    description:
      "Test your knowledge, speed, and accuracy across various topics in an exciting competitive format",
    icon: Book,
    color: "hsl(200 80% 50%)",
    category: "arena",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/ZZ5NVCdwJzLrv9dt6",
  },
  {
    id: "Face Painting",
    name: "Face Painting",
    tagline: "Where faces become canvases.",
    description:
      "Showcase your artistic creativity by transforming faces into vibrant and imaginative designs.",
    icon: Paintbrush,
    color: "hsl(38 92% 50%)",
    category: "creative",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/kt9wFyTVjiH4gvFD7",
  },
  {
    id: "Rangoli",
    name: "Rangoli",
    tagline: "Colors that speak tradition",
    description:
      "Create beautiful and colorful traditional patterns that reflect creativity, culture, and artistic skills.",
    icon: Paintbrush,
    color: "hsl(280 60% 55%)",
    category: "arena",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/H6Ah5SQ5Mm6bzW7V6",
  },
  {
    id: "GEC Got Talent",
    name: "GEC Got Talent",
    tagline: "Unleash your talent, own the stage!",
    description:
      "Showcase your unique talent and shine on stage by expressing your skills with confidence and creativity.",
    icon: Smile,
    color: "hsl(15 85% 55%)",
    category: "stage",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/siRMCXMfPJUZV8JX8",
  },
  {
    id: "Esports",
    name: "Esports",
    tagline: "Game on. Victory awaits!",
    description:
      "Compete in thrilling gaming battles that test strategy, teamwork, and quick decision-making skills.",
    icon: Trophy,
    color: "hsl(45 93% 47%)",
    category: "arena",
    teamSize: "4-6 member",
    registrationLink: "https://forms.gle/GpiyPZTFnxhjjnBMA",
  },
  {
    id: "Treasure Hunt",
    name: "Treasure Hunt",
    tagline: "Decode the clues, discover the treasure!",
    description:
      "Follow clues, solve puzzles, and race against time to uncover the hidden treasure through teamwork and strategy..",
    icon: Search,
    color: "hsl(0 84% 60%)",
    category: "arena",
    teamSize: "1-6 members",
    registrationLink: "https://forms.gle/eWVnZHx7mhvMtKTNA",
  },
  {
    id: "Stand up comedy",
    name: "Stand up comedy",
    tagline: "Laugh loud, laugh proud!",
    description:
      "Deliver witty jokes and humorous stories to entertain the audience with confidence and timing.",
    icon: Mic,
    color: "hsl(170 75% 41%)",
    category: "arena",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/vHaRBRaBLg4dkvhw9",
  },
  {
    id: "Pot design",
    name: "Pot design",
    tagline: "Shape your creativity.",
    description:
      "Decorate and transform simple pots into creative and eye-catching artistic pieces.",
    icon: SmileIcon,
    color: "hsl(320 70% 50%)",
    category: "stage",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/YkY4KtLwwcGZnt7x7",
  },
  {
    id: "Photography",
    name: "Photography",
    tagline: "Freeze the moment forever.",
    description:
      "Capture stunning moments and emotions through your lens, turning ordinary scenes into lasting memories.",
    icon: Camera,
    color: "hsl(220 70% 55%)",
    category: "arena",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/APdCpgjXVvxjLxMQ9",
  },
  {
    id: "Master Chef",
    name: "Master Chef",
    tagline: "Cook with passion, serve with pride!",
    description:
      "Showcase your culinary skills by creating delicious and innovative dishes with taste and presentation.",
    icon: ChefHat,
    color: "hsl(50 90% 50%)",
    category: "stage",
    teamSize: "Individual",
    registrationLink: "https://forms.gle/mECKGPw5x4UNgLps5",
  },
]

export function getEventById(id: string): EventData | undefined {
  return events.find((e) => e.id === id)
}

export function getEventsByCategory(category: EventData["category"]): EventData[] {
  return events.filter((e) => e.category === category)
}
