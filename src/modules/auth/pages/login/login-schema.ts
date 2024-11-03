import { z } from "zod";

export const loginSchema = z.object({
  identifiant: z
    .string({ required_error: "L'adresse email est obligatoire" })
    .min(1, "L'adresse email est obligatoire")
    .email("Veuillez saisir une adresse email valide")
    .trim(),
  password: z
    .string({ required_error: "Le mot de passe est obligatoire" })
    .min(1, "Le mot de passe est obligatoire")
    .trim(),
});
