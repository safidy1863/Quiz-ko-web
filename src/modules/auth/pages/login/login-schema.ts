import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ required_error: "Email obligatoire" }).email("Email obligatoire"),
  password: z.string({ required_error: "Mot de passe obligatoire" }),
});
