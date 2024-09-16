"use client";
import { CardWrapper } from "@/components/card-wrapper";
import { FeedbackForm } from "@/features/feedback/components/feedback-form";

export default function FeedbackPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <CardWrapper title="Send Us a Message">
        <FeedbackForm />
      </CardWrapper>
    </div>
  );
}
