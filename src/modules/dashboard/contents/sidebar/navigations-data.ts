import { pathsDashboard } from "../../constants";
import { TNavigation } from "./types";

export const DNavigations: TNavigation[] = [
  {
    icon: "solar:home-angle-bold",
    label: "Home",
    path: pathsDashboard.home,
  },
  {
    icon: "ph:student-fill",
    label: "Students list",
    path: pathsDashboard.students,
    children: [
      {
        icon: "solar:folder-bold-duotone",
        label: "Level L1",
        path : "l1"
      },
      {
        icon: "solar:folder-bold-duotone",
        label: "Level L2",
        path : "l2"
      },
      {
        icon: "solar:folder-bold-duotone",
        label: "Level L3",
        path : "l3"
      },
    ],
  },
];
