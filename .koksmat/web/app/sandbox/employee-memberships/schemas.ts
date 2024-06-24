// schemas.ts
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export type FormSchema = z.infer<typeof formSchema>;
