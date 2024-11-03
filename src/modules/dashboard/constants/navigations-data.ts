import { pathsDashboard } from ".";
import { TLevel } from "@/types";
import { TNavigation } from "../contents/sidebar/types";

export const DNavigations = (levels: TLevel[]): TNavigation[] => [
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
      label: `Level ${level.label?.toUpperCase()}`,
      path: `students/${level.id?.toLowerCase()}`,
    })),
  },
  {
    icon: "ph:seal-question-fill",
    label: "Tests list",
    path: pathsDashboard.tests,
  },
  // {
  //   icon: "solar:bill-list-bold",
  //   label: "Results",
  //   path: pathsDashboard.results,
  // },
  // {
  //   icon: "solar:settings-bold",
  //   label: "Settings",
  //   path: pathsDashboard.settings,
  // },
];
