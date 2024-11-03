import { z } from "zod";
import { EQuestionType } from "@/types";

export const questionFormSchema = z.object({
  title: z
    .string({ required_error: "Le titre de la question est obligatoire" })
    .min(1, "Le titre de la est obligatoire")
    .trim(),
  description: z
    .string({ required_error: "Le titre de la question est obligatoire" })
    .min(1, "Le titre de la question est obligatoire")
    .trim(),
  point:  z.preprocess(
    (a) => parseInt(a as string, 10),
    z.number().positive().max(100)
  ),
  type: z.enum([EQuestionType.SINGLE, EQuestionType.MULTIPLE]),
});
