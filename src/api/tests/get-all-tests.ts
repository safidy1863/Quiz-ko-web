import { TTest } from "@/types";

async function getAllTests(): Promise<TTest[]> {
  return [
    {
      name: "Test Untitled 0",
    },
    {
      name: "Test Untitled 1",
      duration: "01 : 30",
      assign: ["L1", "M1"],
      question: 16,
    },
    {
      name: "Test Untitled 2",
      duration: "02 : 00",
      assign: ["M1"],
      question: 12,
    },

    {
      name: "Test Untitled 3",
      duration: "01 : 30",
      assign: ["L3"],
      question: 20,
    },
    {
      name: "Test Untitled 4",
    },
    {
      name: "Test Untitled 5",
      duration: "01 : 00",
      assign: ["GID" , "L3"],
      question: 18,
    },
  ];
}

export { getAllTests };
