"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDownCircle, ChevronUpCircle } from "lucide-react";

import { useTopStories } from "@/features/stories/hooks/use-top-stories";

import { CardWrapper } from "@/components/card-wrapper";
import { SkeletonGridCards } from "@/components/skeleton-grid-cards";
import { ErrorCard } from "@/components/error-card";
import { Button } from "@/components/ui/button";

import { Story } from "../types/index";

// Constants for magic numbers
const INITIAL_SKELETON_COUNT = 9; // Number of skeleton cards to display while loading
const MIN_STORIES_TO_SHOW = 9; // Minimum number of stories to display
const MORE_SKELETON_COUNT = 3; //Number of skeleton cards to display after click on more button

export default function Home() {
  // Destructure values from the custom hook
  const {
    stories,
    isLoading,
    error,
    loadMoreStories,
    loadLessStories,
    isFetching,
  } = useTopStories();

  // Handle loading state
  if (isLoading) return <SkeletonGridCards count={INITIAL_SKELETON_COUNT} />;

  // Handle error state
  if (error)
    return (
      <div className="max-w-screen-2xl mx-auto w-full -mt-16">
        <ErrorCard message="Error loading stories. Please try again later." />
      </div>
    );

  return (
    <div className="max-w-screen-2xl mx-auto w-full -mt-24">
      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories?.map((story: Story) => (
          <CardWrapper key={story.id} title={story.title} time={story.time}>
            <div className="flex justify-end">
              <Link href={`/story/${story.id}`}>
                <Button aria-label={`Read more about ${story.title}`}>
                  Read more <ArrowUpRight className="ml-2 size-4 mr-0" />
                </Button>
              </Link>
            </div>
          </CardWrapper>
        ))}
      </div>

      {/* Load More / Load Less Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        {/* Show skeleton cards when fetching new stories */}
        {isFetching && <SkeletonGridCards count={MORE_SKELETON_COUNT} />}

        {/* Load Less button, visible only if more than MIN_STORIES_TO_SHOW stories are displayed */}
        {stories.length > MIN_STORIES_TO_SHOW && (
          <Button
            variant="outline"
            className="font-normal bg-blue-600 text-white hover:bg-blue-500 hover:text-white border-none outline-none transition"
            onClick={loadLessStories}
            aria-label="Load fewer stories"
          >
            Less <ChevronUpCircle className="size-4 ml-2" />
          </Button>
        )}

        {/* Load More button */}
        <Button aria-label="Load more stories" onClick={loadMoreStories}>
          More <ChevronDownCircle className="size-4 ml-2 mr-0" />
        </Button>
      </div>
    </div>
  );
}
