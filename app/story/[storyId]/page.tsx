"use client";

import { useParams } from "next/navigation";
import { useStoryDetails } from "@/features/stories/hooks/use-story-details";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { decodeHtmlEntities } from "@/lib/helpers";

import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/card-wrapper";
import { CardInfoLoader } from "@/components/card-info-loader";
import { ErrorCard } from "@/components/error-card";
import { CommentLoader } from "@/components/comment-loader";

/**
 * Page component for displaying the details of a story.
 * Fetches story details based on the `storyId` parameter from the URL.
 */
export default function StoryDetailsPage() {
  // Extract `storyId` from URL parameters
  const { storyId } = useParams();

  // Fetch story details using the custom hook
  const { data: story, isLoading, error } = useStoryDetails(storyId as string);

  // Handling loading state
  if (isLoading)
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <CardInfoLoader />
        <CommentLoader />
      </div>
    );

  // Handling error state
  if (error)
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <ErrorCard message="Error loading story. Please try again later." />
      </div>
    );

  // Destructure story data with default values
  const {
    title = "No Title Available",
    time,
    kids,
    descendants,
    by = "Unknown",
    score = "N/A",
    text,
    url,
  } = story || {};

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <CardWrapper
        title={title}
        time={time}
        kids={kids}
        numberOfComments={descendants}
      >
        {/* Author and Points Section */}
        <div className="mb-4 ml-11">
          <p>
            <strong>Author:</strong> {by}
          </p>
          <p>
            <strong>Points:</strong> {score}
          </p>
        </div>

        {/* Story Text Section */}
        <div className="mb-4 ml-11">
          <h3 className="text-lg font-bold">Text</h3>
          <p>
            {decodeHtmlEntities(
              text || "There is no additional information provided."
            )}
          </p>
        </div>

        {/* External Link to Full Story */}
        {url && (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-11"
            aria-label="Read the full story on the original website"
          >
            <Button>
              Read full story <ExternalLink className="size-4 ml-2" />
            </Button>
          </Link>
        )}
      </CardWrapper>
    </div>
  );
}
