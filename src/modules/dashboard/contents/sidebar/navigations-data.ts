import { pathsDashboard } from "../../constants";
import { TNavigation } from "./types";

export const DNavigations = (levels: string[]): TNavigation[] => [
  {
    icon: "solar:home-angle-bold",
    label: "Home",
    path: pathsDashboard.home,
  },
  {
    icon: "ph:student-fill",
    label: "Students list",
    path: pathsDashboard.students,
    children: levels.map((level) => ({
      icon: "solar:folder-bold-duotone",
      label: `Level ${level.toUpperCase()}`,
      path: `students/${level.toLowerCase()}`,
    })),
  },
];
