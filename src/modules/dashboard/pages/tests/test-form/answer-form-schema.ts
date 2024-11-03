import { z } from "zod";

export const answerFormSchema = z.object({
  label: z
    .string({ required_error: "Le titre de la réponse est obligatoire" })
    .min(1, "Le titre de la réponse est obligatoire")
    .trim(),
  questionId: z
    .string({ required_error: "La question id est obligatoire" })
    .min(1, "La question id est obligatoire")
    .trim(),
  isCorrect:  z.optional(z.boolean().default(false)),
});
