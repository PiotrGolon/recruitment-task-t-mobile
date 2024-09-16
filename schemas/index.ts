import { z } from "zod";

export const feedbackFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required!",
  }),
  email: z.string().email({
    message: "Incorrect email address!",
  }),
  feedback: z.string().min(4, {
    message: "The field can not be empty!",
  }),
});

export type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;
