import { SidebarLink } from "@/types";

export const lightMode = "light";
export const darkMode = "dark";
export const systemMode = "system";
export const defaultMode = {
  value: "system",
  label: "System",
  icon: "/assets/icons/computer.svg",
  alt: "computer",
};

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg", alt: "sun" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg", alt: "moon" },
  defaultMode,
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const hotQuestions = [
  { _id: 1, title: "How do I use express as a custom server in NextJS?" },
  { _id: 2, title: "Cascading deletes in SQLAlchemy?" },
  { _id: 3, title: "How to perfectly center a div with Taildinwd CSS" },
  {
    _id: 4,
    title: "Best practices for data fetching in a Next.js application?",
  },
  { _id: 5, title: "Redux toolkit not updating state as a expected?" },
];

export const popularTags = [
  { _id: 1, name: "Javascript", totalQuestions: 5 },
  { _id: 2, name: "NextJS", totalQuestions: 52 },
  { _id: 3, name: "MongoDB", totalQuestions: 59 },
  { _id: 4, name: "JQuery", totalQuestions: 200 },
  { _id: 5, name: "Scrum", totalQuestions: 2 },
];
