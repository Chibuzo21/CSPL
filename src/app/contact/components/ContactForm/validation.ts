import { z } from "zod";
export const contactSchema = z.object({
  Name: z.string().min(3, {
    message: "The name must have atleast 4 characters",
  }),
  Email: z.email("Invalid email address"),
  Subject: z.string().min(3, "Please select a subject"),
  Message: z.string().min(5, "Message must be atleast 5 characters"),
});
export type FormData = z.infer<typeof contactSchema>;
