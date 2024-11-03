import { TLevel } from "./level.types";

export type TClassRoom = {
  id: string;
  group: string;
  level: TLevel;
  category: {
    id: string;
    label: string;
  };
};
