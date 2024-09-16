"use client";

import { useCreateFeedback } from "../api/use-create-feedback";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackFormSchema, FeedbackFormValues } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/**
 * FeedbackForm component allows users to submit their feedback.
 * Utilizes react-hook-form for form state management and Zod for validation.
 */
export const FeedbackForm = () => {
  // Initialize the form using react-hook-form and zodResolver
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
    },
  });

  // Use the custom hook to handle feedback submission
  const { mutate, isPending } = useCreateFeedback();

  /**
   * Handles form submission by mutating feedback data.
   * Resets the form upon successful submission.
   * @param values - The form values collected from the user.
   */
  const onSubmit = (values: FeedbackFormValues) => {
    mutate(values, {
      onSuccess: () => {
        form.reset(); // Clear the form after successful submission
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate // Disable native browser validatio
      >
        <div className="space-y-4">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    disabled={isPending}
                    placeholder="John Doe"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    disabled={isPending}
                    placeholder="john.doe@example.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Feedback Field */}
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel htmlFor="feedback">Feedback</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    id="feedback"
                    disabled={isPending}
                    placeholder="Provide your opinion..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button
          disabled={isPending}
          type="submit"
          className="w-full lg:w-auto mt-4"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
