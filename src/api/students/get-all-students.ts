import { TStudent } from "@/types";

async function getAllStudents(): Promise<TStudent[]> {
  return [
    {
      number: 2250,
      name: "RAKOTONIRINA Mialy",
      gender: "MALE",
      status: "Actif",
      totalScore: 18.5,
    },
    {
      number: 4359,
      name: "Jerôme Bell",
      gender: "MALE",
      status: "Actif",
      totalScore: 18.5,
    },
    {
      number: 4846,
      name: "Guy Hawkins",
      gender: "MALE",
      status: "Actif",
      totalScore: 18.5,
    },
    {
      number: 1148,
      name: "Jenny Wilson",
      gender: "MALE",
      status: "Actif",
      totalScore: 18.5,
    },
  ];
}

export { getAllStudents };
