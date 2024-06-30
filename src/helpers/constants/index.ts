import { TQuizQuestionProps, TSidebarLink, TWeeklyPlanProps } from "../types";

import DashboardIcon from "@/components/icons/DashboardIcon";
import PlannerIcon from "@/components/icons/PlannerIcon";
import TrackerIcon from "@/components/icons/TrackerIcon";
import ErrorBookIcon from "@/components/icons/ErrorBookIcon";
import GrowthMeterIcon from "@/components/icons/GrowthMeterIcon";
import WorkshopIcon from "@/components/icons/WorkshopIcon";
import LibertyIcon from "@/components/icons/LibertyIcon";
import QuizIcon from "@/components/icons/QuizIcon";
import StudyRoomIcon from "@/components/icons/StudyRoomIcon";
import ChatIcon3 from "@/components/icons/ChatIcon3";

export const userSidebarLinks: TSidebarLink[] = [
  {
    label: "dashboard",
    icon: DashboardIcon,
    href: "/",
  },
  {
    label: "planner",
    icon: PlannerIcon,
    href: "/planner",
  },
  {
    label: "tracker",
    icon: TrackerIcon,
    href: "/tracker",
  },
  {
    label: "chat",
    icon: ChatIcon3,
    href: "/chat",
  },
  {
    label: "quizzes",
    icon: QuizIcon,
    href: "/quizzes",
  },
  {
    label: "errorbook",
    icon: ErrorBookIcon,
    href: "/error-book",
  },
  {
    label: "growth meter",
    icon: GrowthMeterIcon,
    href: "/growth-meter",
  },
  {
    label: "workshops",
    icon: WorkshopIcon,
    href: "/workshops",
  },
  {
    label: "liberty",
    icon: LibertyIcon,
    href: "/liberty",
  },
  {
    label: "study room",
    icon: StudyRoomIcon,
    href: "/study-room",
  },
];

export const quizQuestions: TQuizQuestionProps[] = [
  {
    question: "Sample question 1",
    options: {
      all: ["1", "2", "3", "4"],
      correct: ["2"],
    },
  },
  {
    question: "Sample question 2",
    options: {
      all: ["1", "2", "3", "4"],
      correct: ["1"],
    },
  },
  {
    question: "Sample question 3",
    options: {
      all: ["1", "2", "3", "4"],
      correct: ["4"],
    },
  },
  {
    question: "Sample question 4",
    options: {
      all: ["1", "2", "3", "4"],
      correct: ["3"],
    },
  },
  {
    question: "Sample question 5",
    options: {
      all: ["1", "2", "3", "4"],
      correct: ["4"],
    },
  },
];

export const weeklyPlan: TWeeklyPlanProps[] = [
  {
    date: new Date("2024-05-09T00:00:00Z"),
    topics: "Limits, continuity, and differentiability / Magnetism",
  },
  {
    date: new Date("2024-05-10T00:00:00Z"),
    topics: "Vector Algebra/Work and Energy / Atomic Structure",
  },
  {
    date: new Date("2024-05-11T00:00:00Z"),
    topics: "Permutations Combinations / Hydrocarbons",
  },
  {
    date: new Date("2024-05-12T00:00:00Z"),
    topics: "Sequence Series / Oxygen, Halogens, and Nitrogen",
  },
  {
    date: new Date("2024-05-13T00:00:00Z"),
    topics: "Differential Equations / Alternating Currents",
  },
  {
    date: new Date("2024-05-14T00:00:00Z"),
    topics: "Coordinate Geometry / Work and Energy / Equilibrium and Chemical",
  },
  {
    date: new Date("2024-05-15T00:00:00Z"),
    topics: "Buffer Day",
  },
];

export const trackerTabs = [
  {
    id: "maths",
    subject: "maths",
  },
  {
    id: "physics",
    subject: "physics",
  },
  {
    id: "chemistry",
    subject: "chemistry",
  },
];

export const userSubjects = [
  {
    id: "maths",
    label: "Maths",
  },
  {
    id: "physics",
    label: "Physics",
  },
  {
    id: "chemistry",
    label: "Chemistry",
  },
];

export const subscriptionPlanningBenefits = [
  {
    label: "goal setting & tracking",
  },
  {
    label: "schedule builder",
  },
  {
    label: "to-do list & reminders",
  },
  {
    label: "subject, chapter & topic tracking",
  },
];

export const subscriptionExpertBenefits = [
  {
    label: "connect with a mentor",
  },
  {
    label: "live & on-demand workshops",
  },
];
export const subscriptionLearningBenefits = [
  {
    label: "growth meter",
  },
  {
    label: "points & levels",
  },
  {
    label: "know your mistakes",
  },
];
