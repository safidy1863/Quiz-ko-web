import { useMatches, useParams } from "react-router-dom";
import { LEVEL_DYNAMIC_PATH } from "../../constants";

export const Students = () => {
  const { level } = useParams<{ [LEVEL_DYNAMIC_PATH]: string }>();

  return <div>Student {level}</div>;
};
